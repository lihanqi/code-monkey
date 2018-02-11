import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoEditingService } from '../../services/co-editing/co-editing.service'
import { ParamMap } from '@angular/router/src/shared';
declare const ace: any;


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor: any;
  languages: String[] = ['Java', 'C++', 'Python'];
  language: String = 'Python'
  lastChange: object = null;

  constructor(
    private coEditingService: CoEditingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.initEditor();
      // console.log(paramMap.get('id'));
      this.coEditingService.register(paramMap.get('id'));
      this.coEditingService.registerEditorListener(paramMap.get('id'), this.editor);
    })

  }

  initEditor() {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/textmate");
    this.editor.session.setMode("ace/mode/python");
    this.editor.getSession().setTabSize(4);
    this.editor.getSession().on('change', (delta) => {
      // if applied the change from others, does not emit change event
      if (this.editor.lastChange !== delta) {
        this.coEditingService.change(delta);
      }
    });
    
  }
  
  reset() {
    this.editor.setValue("the new text here"); // or session.setValue
  }

  setLanguage(language: String) {
    this.language = language;
    this.reset();
  }

}
