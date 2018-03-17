import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgModule } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoEditingService } from "../../services/co-editing/co-editing.service";
import { ExecutionService } from "../../services/execution/execution.service";
import { AuthService } from '../../../shared/services/auth/auth.service';
import { ParamMap } from "@angular/router/src/shared";
import { not } from "@angular/compiler/src/output/output_ast";

import { LANGUAGE_DEFAULTS } from "./LANGUAGE_DEFAULT";
import * as $ from "jquery";

declare const ace: any;


@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"]
})
export class EditorComponent implements OnInit, OnDestroy {
  editor: any;
  languages: string[];
  language: string;
  userAcitivitySubscrpiton: any;
  executionResult: object;
  executionDisplay: boolean = false;

  constructor(
    private coEditingService: CoEditingService,
    private route: ActivatedRoute,
    private executionService: ExecutionService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.languages = Object.keys(LANGUAGE_DEFAULTS);
    this.language = "Python";
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.initEditor();
      this.coEditingService.init(paramMap.get("id"), this.editor, this.auth.userProfile);
      this.coEditingService.attachEditorListeners(this.editor);
      this.userAcitivitySubscrpiton = this.coEditingService.userLogin$.subscribe(
        activity => this.popNotify(activity)
      );
    });
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
    this.editor.setValue(LANGUAGE_DEFAULTS[this.language]);

    // listen for context change
    // emit the change onoly if the change is made by the user
    this.editor.session.on("change", delta => {
      if (this.editor.lastChange !== delta) {
        this.coEditingService.change(delta);
      }
    });

    // listen for cursor move
    this.editor.session.selection.on("changeCursor", e => {
      let cursorLoc = this.editor.getSession().selection.getCursor();
      this.coEditingService.cursorMove(cursorLoc);
    });
  }

  /**
   * Reset editor to initial state
   */
  reset() {
    const placeHolder = LANGUAGE_DEFAULTS[this.language];
    this.editor.setValue(placeHolder);
    this.executionResult = null;
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
   * Submit the code for execution
   */
  submit() {
    this.executionDisplay = true;
    this.executionResult = {};
    // TODO: add animation for running
    this.executionResult['build'] = "running";
    const language = this.language;
    const code = this.editor.getValue();
    this.executionService.execute(language, code)
      .then(data => {
        this.executionResult = JSON.parse(data);
      })
      .catch(error => {
        console.log("error: " + error);
      });
  }

  /**
   * popup notifications of participants status with fade in&out animation
   * @param activity contains userId and its action(join, left)
   */
  popNotify(activity: object) {
    // TODO: this part will be update using Angular animation
    // jQuery will be depricated in this project
    const POP_TIME_OUT: number = 1500;
    let notice = document.createElement("div");
    notice.className = "alert alert-primary";
    notice.id = activity["id"];
    notice.innerHTML = activity["id"] + activity["action"];
    notice.style.display = "none";
    notice.style.marginTop = "5px";
    notice.style.marginBottom = "5px";
    document.getElementById("notice").appendChild(notice);
    $(`#${notice.id}`)
      .fadeIn()
      .delay(POP_TIME_OUT)
      .fadeOut(() => {
        notice.remove();
      });
  }
}
