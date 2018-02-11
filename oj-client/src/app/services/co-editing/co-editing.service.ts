import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap } from 'rxjs/operators';

declare const io: any;

@Injectable()
export class CoEditingService {
  socket: any;
  lastChange: object = null;

  constructor() { 
    this.socket = io();
    
  }

  change(delta: object): void {
    // console.log(this.socket.id);
    const changeInfoPack = {
      "senderId": this.socket.id,
      "delta": delta
    }
    this.lastChange = delta;
    this.socket.emit('change', changeInfoPack);
  }

  registerEditorListener(sessionId: string, editor) {
    // this.editor = editor;
    this.socket.on('change', msg => {
      console.log(msg);
      // if (msg.delta != this.lastChange){
      //   // editor.getSession().getDocument().applyDeltas([msg.delta]);
      //   // this.lastChange = msg.delta;
      // }
      editor.lastChange = msg.delta;
      editor.getSession().getDocument().applyDeltas([msg.delta]);
      // this.lastChange = msg.delta;
    })
  }
}
