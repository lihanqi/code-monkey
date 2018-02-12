import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap } from 'rxjs/operators';

declare const io: any;

@Injectable()
export class CoEditingService {
  socket: any;
  sessionId: string;

  constructor() { }

  init(sessionId: string) {
    this.sessionId = sessionId;
    this.socket = io(window.location.origin, {query: {session: sessionId}});
  }

  change(delta: object): void {
    const changeInfoPack = {
      "sessionId": this.sessionId,
      "delta": delta
    }
    this.socket.emit('change', changeInfoPack);
  }

  attachEditorListener(editor) {
    this.socket.on('change', delta => {
      editor.lastChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    })
  }
  
}
