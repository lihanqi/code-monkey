import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap, single } from 'rxjs/operators';
import { Subject }    from 'rxjs/Subject';

import { CURSOR_CULORS } from './CURSOR_CULORS';
import { forEach } from '@angular/router/src/utils/collection';

declare const io: any;
declare const ace: any;
// should get from server?
// declare const MAX_NUM_OF_PARTICIPANTS = 20; 

@Injectable()
export class CoEditingService {
  editor: any;
  colors: string[] = CURSOR_CULORS;
  socket: any;
  sessionId: string;
  participants: Object = {};
  clientNum: number = 0;
  MAX_NUM_OF_PARTICIPANTS = 20; 
  userLogin$ = new Subject<Object>();


  constructor() { }

  /**
   * Service Initializer
   * @param sessionId the co-editing service session
   */
  init(sessionId: string, editor: any) {
    this.sessionId = sessionId;
    this.socket = io(window.location.origin, {query: {session: sessionId}});
    this.editor = editor;
    this.restoreBuffer();
  }

  /**
   * emit change event to server, involked when the changing the editor's content
   * @param delta the object containing infomation about content change
   */
  change(delta: object): void {
    this.socket.emit('change', JSON.stringify(delta));
  }

  /**
   * emit cursorMove event to server, involed when user moved its own cursor
   * @param cursor the object containing information about current cursor's location
   */
  cursorMove(cursor: object): void {
    this.socket.emit('cursorMove', JSON.stringify(cursor));
  }

  /**
   * attach event handlers when received updates from user
   * @param editor the editor object that needed to update
   */
  public attachEditorListeners(editor) {
    this.listenParticipantsActivities(editor);
    this.listenChange(editor);
    this.listenCursorMove(editor);

    this.socket.on('restoreBuffer', delta => {
      delta = JSON.parse(delta);
      for (let changeIndex in delta) {
        let singleChange = JSON.parse(delta[changeIndex]);
        editor.lastChange = singleChange;
        editor.getSession().getDocument().applyDeltas([singleChange]);
      }

    })
  }

  private restoreBuffer() {
    this.socket.emit('restoreBuffer', this.sessionId);
  }

  /**
   * helper: attach event listener to listen participants' activities
   * @param editor the editor object that needed to update
   */
  private listenParticipantsActivities(editor) {
    this.socket.on('userJoin', userId => {
      let activity = {
        id: userId,
        action: "joined"
      };
      this.userLogin$.next(activity);
    })
    this.socket.on('userLeft', userId => {
      let activity = {
        id: userId,
        action: "left"
      };
      this.userLogin$.next(activity);
    })
  }

  /**
   * helper: attach event listener to listen 'change' signal
   * @param editor the editor object that needed to update
   */
  private listenChange(editor) {
    this.socket.on('change', delta => {
      delta = JSON.parse(delta);
      editor.lastChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    });
  }

  /**
   * helper: attach event listener to listen 'cursorMove' signal
   * @param editor the editor object that needed to update
   */
  private listenCursorMove(editor) {
    this.socket.on('cursorMove', (cursor) => {
      cursor = JSON.parse(cursor);
      const session = editor.getSession();

      const x = cursor.row;
      const y = cursor.column;
      const participantId = cursor.ownerId;
      let color = null;
      
      if (participantId in this.participants) {
        color = this.participants[participantId].color;
        session.removeMarker(this.participants[participantId]['marker']);
      } else {
        if (Object.keys(this.participants).length > this.MAX_NUM_OF_PARTICIPANTS) {
          throw "Number of participants reach the limit.";
        }
        this.participants[participantId] = {};
        this.participants[participantId]["color"] = color || this.colors[this.clientNum];
        console.log(this.participants[participantId]["color"]);
        // Todo: need to revise
        const css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = `.editor_cursor_${participantId}
                        { 
                          position:absolute;
                          background: ${this.participants[participantId].color};
                          z-index:100;
                          width:2px !important;
                        }`;
        document.body.appendChild(css);
        this.clientNum++;
      }
      const Range = ace.require('ace/range').Range;
      const range = new Range(x, y, x, y + 1);
      const newMarker = session.addMarker(range, `editor_cursor_${participantId}`, true);
      this.participants[participantId]['marker'] = newMarker;
    });
  }
}
