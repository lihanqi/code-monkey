import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap } from 'rxjs/operators';

declare const io: any;

@Injectable()
export class CoEditingService {
  socket: any;
  sessionId: string;

  constructor() { 
    this.socket = io();
  }

  change(delta: object): void {
    // console.log(this.socket.id);
    const changeInfoPack = {
      "sessionId": this.sessionId,
      "delta": delta
    }
    this.socket.emit('change', changeInfoPack);
    // this.socket.emit('change', delta);
  }

  registerEditorListener(sessionId: string, editor) {
    console.log(this.sessionId);
    this.socket.on('change', delta => {
      editor.lastChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    })
  }

  register(sessionId: string) {
    this.sessionId = sessionId;
    this.socket.emit('register', sessionId);
  }
}
