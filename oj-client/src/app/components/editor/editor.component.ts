import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CoEditingService } from '../../services/co-editing/co-editing.service'
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

  constructor(private coEditingService: CoEditingService) { }

  ngOnInit() {
    this.initEditor();
    this.coEditingService.registerEditorListener(this.editor);
  }

  initEditor() {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/textmate");
    this.editor.session.setMode("ace/mode/python");
    this.editor.getSession().setTabSize(4);
    this.editor.getSession().on('change', (changeInfo) => {
      this.coEditingService.change(changeInfo);
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
