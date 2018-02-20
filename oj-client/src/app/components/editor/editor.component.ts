import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoEditingService } from '../../services/co-editing/co-editing.service'
import { ParamMap } from '@angular/router/src/shared';
import { not } from '@angular/compiler/src/output/output_ast';
import * as $ from 'jquery';

declare const ace: any;
const POP_TIME_OUT: number = 1500;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {

  editor: any;
  languages: String[] = ['Java', 'C++', 'Python'];
  language: String = 'Python'
  lastChange: object = null;
  userAcitivitySubscrpiton: any;

  constructor(
    private coEditingService: CoEditingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.initEditor();
      this.coEditingService.init(paramMap.get('id'), this.editor);
      this.coEditingService.attachEditorListeners(this.editor);
      this.userAcitivitySubscrpiton = this.coEditingService.userLogin$.subscribe(activity => {
        // console.log("subsciption update: " + activity);
        this.popNotify(activity);
      });
    })
  }

  ngOnDestroy() {
    this.userAcitivitySubscrpiton.unsubscribe();
  }

  /** 
   * ACE editor initialition
  */
  initEditor() {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/textmate");
    this.editor.session.setMode("ace/mode/python");
    this.editor.getSession().setTabSize(4);
    this.editor.lastChange = null;
    
    // listen for context change
    this.editor.getSession().on('change', (delta) => {
      if (this.editor.lastChange !== delta) {
        // emit only if the change is made by the user
        this.coEditingService.change(delta);
      }
    });
    
    // listen for cursor move 
    this.editor.session.selection.on('changeCursor', (e) => {
      let cursorLoc = this.editor.getSession().selection.getCursor();
      this.coEditingService.cursorMove(cursorLoc);

    });
    
  }
  
  /** 
   * Reset editor to initial state
  */
  reset() {
    this.editor.setValue("the new text here");
  }

  /**
   * Set the programming language for editor syntax highlighting
   * @param language the programming language to be use
   */
  setLanguage(language: string) {
    this.language = language;
    this.reset();
  }

  /**
   * popup notifications of participants status with fade in&out animation 
   * @param activity contains userId and its action(join, left)
   */
  popNotify(activity: object) {
    let notice = document.createElement('div');
    notice.className = 'alert alert-primary';
    notice.id = activity['id'];
    notice.innerHTML = activity['id'] + activity['action'];
    notice.style.display = "none";
    document.getElementById('notice').appendChild(notice);
    $(`#${notice.id}`).fadeIn().delay(POP_TIME_OUT).fadeOut(() => {
      notice.remove();
    });
  }
}
