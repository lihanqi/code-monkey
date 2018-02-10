import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap } from 'rxjs/operators';

declare const io: any;

@Injectable()
export class CoEditingService {
  socket = io();
  // editor: any;

  constructor() { 

  }

  change(changeInfo: object): void {
    this.socket.emit('change', JSON.stringify(changeInfo));
  }

  registerEditorListener(editor) {
    // this.editor = editor;
    this.socket.on('change', msg => {
      console.log("msg from server");
      console.log(msg);
    })
  }
}
