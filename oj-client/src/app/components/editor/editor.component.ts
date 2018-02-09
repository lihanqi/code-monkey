import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
declare const ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor: any;
  languages: String[] = ['Java', 'C++', 'Python'];
  language: String = 'Java'

  constructor() { }

  ngOnInit() {
    this.initEditor();
  }

  initEditor() {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/terminal");
    this.editor.session.setMode("ace/mode/python");
    this.editor.getSession().setTabSize(4);
  }
  
  reset() {
    this.editor.setValue("the new text here"); // or session.setValue
  }

  setLanguage(language: String) {
    console.log('!!');
    this.language = language;
    this.reset();
  }

}
