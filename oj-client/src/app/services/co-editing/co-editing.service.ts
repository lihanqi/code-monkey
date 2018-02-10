import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap } from 'rxjs/operators';

declare const io: any;

@Injectable()
export class CoEditingService {
  socket: any;
  // editor: any;

  constructor() { 
    this.socket = io();
    
  }

  change(changeInfo: object): void {
    console.log(this.socket.id);
    const changeInfoPack = {
      "senderId": this.socket.id,
      "changeInfo": changeInfo
    }
    this.socket.emit('change', changeInfoPack);
  }

  registerEditorListener(sessionId: number, editor) {
    // this.editor = editor;
    this.socket.on('change', msg => {
      console.log("msg from server");
      console.log(msg);
    })
  }
}
