import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap } from 'rxjs/operators';

import { CURSOR_CULORS } from './CURSOR_CULORS';

declare const io: any;
declare const ace: any;
// should get from server?
// declare const MAX_NUM_OF_PARTICIPANTS = 20; 

@Injectable()
export class CoEditingService {
  colors: string[] = CURSOR_CULORS;
  socket: any;
  sessionId: string;
  participants: Object = {};
  clientNum: number = 0;
  MAX_NUM_OF_PARTICIPANTS = 20; 


  constructor() { }

  /**
   * Service Initializer
   * @param sessionId the co-editing service session
   */
  init(sessionId: string) {
    this.sessionId = sessionId;
    this.socket = io(window.location.origin, {query: {session: sessionId}});
  }

  /**
   * emit change event to server, involked when the changing the editor's content
   * @param delta the object containing infomation about content change
   */
  change(delta: object): void {
    const changeInfoPack = {
      "sessionId": this.sessionId,
      "delta": delta
    }
    this.socket.emit('change', changeInfoPack);
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
    this.listenChange(editor);
    this.listenCursorMove(editor);
    
  }
  /**
   * helper: attach event listener to listen 'change' signal
   * @param editor the editor object that needed to update
   */
  private listenChange(editor) {
    this.socket.on('change', delta => {
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
