webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// import { ProblemListComponent } from '../components/problem-list/problem-list.component';
// import { ProblemDetailComponent } from '../components/problem-detail/problem-detail.component';
var page_not_found_component_1 = __webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.ts");
var new_problem_component_1 = __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.ts");
var routes = [
    // { path: 'problems', component: ProblemListComponent },
    // { path: 'problems/:id', component: ProblemDetailComponent },
    { path: 'contribute', component: new_problem_component_1.NewProblemComponent },
    { path: '', redirectTo: '/problems', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-body {\n    /* background: linear-gradient(to bottom, #18453b, #97A2A2); */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<!-- <app-problems></app-problems> -->\n<div class=\"page-body\">\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/shared/services/auth/auth.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
        console.log("APP ROOT CONSTRUCTED");
        auth.initService();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
// Feature Modules
var problem_module_1 = __webpack_require__("../../../../../src/app/problem/problem.module.ts");
var profile_module_1 = __webpack_require__("../../../../../src/app/profile/profile.module.ts");
// Components
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var nav_bar_component_1 = __webpack_require__("../../../../../src/app/shared/components/nav-bar/nav-bar.component.ts");
var new_problem_component_1 = __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.ts");
var page_not_found_component_1 = __webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.ts");
var footer_component_1 = __webpack_require__("../../../../../src/app/shared/components/footer/footer.component.ts");
// Services
var http_service_1 = __webpack_require__("../../../../../src/app/shared/services/http/http.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/shared/services/auth/auth.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_bar_component_1.NavBarComponent,
                new_problem_component_1.NewProblemComponent,
                page_not_found_component_1.PageNotFoundComponent,
                footer_component_1.FooterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                problem_module_1.ProblemModule,
                profile_module_1.ProfileModule,
                // WARNING: Dont move! (RoutingModule must stay the last.)
                app_routing_module_1.RoutingModule
            ],
            providers: [http_service_1.HttpService, auth_service_1.AuthService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #newProblemForm=\"ngForm\">\n    <div class=\"form-row media\">\n        <div class=\"form-group col-md-8\">\n          <label for=\"title\">Title</label>\n          <input type=\"text\" class=\"form-control\" \n                 id=\"title\" placeholder=\"Problem title\" \n                 required [(ngModel)]=\"problem.title\" name=\"title\">\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"difficulty\">Difficulty</label>\n          <select class=\"form-control\" id=\"difficulty\"\n                  required [(ngModel)]=\"problem.difficulty\" name=\"difficulty\">\n            <option [ngValue]=\"null\" disabled>Select Difficulty...</option>\n            <option *ngFor=\"let diff of difficulties\" [value]=\"diff\">{{diff}}</option>\n          </select>\n          <!-- <div class=\"form-check form-check-inline\" *ngFor=\"let diff of difficulties\">\n            <input class=\"form-check-input\" type=\"radio\" \n                    name=\"difficulty\" id=\"difficulty\" [value]=\"diff\" [(ngModel)]=\"problem.difficulty\">\n            <label class=\"form-check-label\" for=\"{{diff}}\">{{diff}}</label>\n          </div> -->\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea class=\"form-control\" id=\"description\" rows=\"3\" \n                placeholder=\"Describe your problem here\"\n                required [(ngModel)]=\"problem.description\" name=\"description\">\n      </textarea>\n    </div>\n    <button class=\"btn btn-primary\"\n       (click)=\"addProblem()\" [disabled]=\"!newProblemForm.form.valid\" >Add Problem</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/problem/services/data/data.service.ts");
var problem_1 = __webpack_require__("../../../../../src/app/shared/models/problem.ts");
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(dataService) {
        this.dataService = dataService;
        this.difficulties = ['Easy', 'Medium', 'Hard'];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
        this.problem = new problem_1.Problem();
        // in order to let <select> placeholder to work, set problem.difficulty to null
        this.problem.difficulty = null;
    };
    /**
     * Add a new problem
     */
    NewProblemComponent.prototype.addProblem = function () {
        var _this = this;
        this.dataService.addProblem(this.problem).subscribe(function (problem) {
            _this.problem = new problem_1.Problem();
            _this.problem.difficulty = null;
        });
    };
    NewProblemComponent = __decorate([
        core_1.Component({
            selector: 'app-new-problem',
            template: __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], NewProblemComponent);
    return NewProblemComponent;
}());
exports.NewProblemComponent = NewProblemComponent;


/***/ }),

/***/ "../../../../../src/app/problem/components/editor/LANGUAGE_DEFAULT.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LANGUAGE_DEFAULTS = {
    'Python': 'Python:Type your code here...',
    'Java': 'Java: Type your code here...',
    'C++': 'Cpp: Type your code here...',
    'Alien Language': "hahaha"
};


/***/ }),

/***/ "../../../../../src/app/problem/components/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor-box {\n    margin-top: 25px;\n}\n.header-btn-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.header-btn-group button {\n    margin-right: 5px;\n}\n#editor { \n    margin-top: 15px;\n    height: 600px;\n    font-size: 14px;\n    border-radius: 3px;\n    border: 1px solid rgba(0, 0, 0, 0.125);;\n}\n#execute-run-btn {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    /* flex-basis:  */\n    margin-top: 15px;\n}\n#execute-run-btn button {\n    margin-left: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/problem/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-box\">\n  <section>\n    <header>\n      <div class=\"header-btn-group\">\n        <!-- Button trigger modal -->\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#resetModal\">\n          Reset\n        </button>\n        <!-- Button for selecting language -->\n        <div class=\"dropdown\">\n          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" [value]=\"language\">\n            {{language}}\n          </button>\n          <div class=\"dropdown-menu\">\n            <button type=\"button\" class=\"dropdown-item\" *ngFor=\"let lang of languages\" (click)=\"setLanguage(lang)\">{{lang}}</button>\n          </div>\n        </div>\n      </div>\n    \n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"resetModal\">\n        <div class=\"modal-dialog modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"resetModalLabel\">Reset</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n              <span>&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            Reset will loose all current codes, are you sure?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"reset()\">Reset</button>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <body>\n      <div id=\"notice\"></div>\n      <div id=\"editor\"></div>\n      <div id=\"execute-run-btn\">\n          <button id=\"run-button\" type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\">Run</button>\n          <button id=\"submit-button\" type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\">Submit</button>\n      </div>\n      \n    </body>\n    <!-- execution result -->\n    <footer *ngIf=\"executionDisplay\">\n      <app-execution-result [status]=\"executionResult.build\" [result]=\"executionResult.run || executionResult.error\"></app-execution-result>\n    </footer>\n  </section>\n \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/problem/components/editor/editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var co_editing_service_1 = __webpack_require__("../../../../../src/app/problem/services/co-editing/co-editing.service.ts");
var execution_service_1 = __webpack_require__("../../../../../src/app/problem/services/execution/execution.service.ts");
var LANGUAGE_DEFAULT_1 = __webpack_require__("../../../../../src/app/problem/components/editor/LANGUAGE_DEFAULT.ts");
var $ = __webpack_require__("../../../../jquery/dist/jquery.js");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(coEditingService, route, executionService) {
        this.coEditingService = coEditingService;
        this.route = route;
        this.executionService = executionService;
        this.executionDisplay = false;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languages = Object.keys(LANGUAGE_DEFAULT_1.LANGUAGE_DEFAULTS);
        this.language = "Python";
        this.route.paramMap.subscribe(function (paramMap) {
            _this.initEditor();
            _this.coEditingService.init(paramMap.get("id"), _this.editor);
            _this.coEditingService.attachEditorListeners(_this.editor);
            _this.userAcitivitySubscrpiton = _this.coEditingService.userLogin$.subscribe(function (activity) { return _this.popNotify(activity); });
        });
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        this.userAcitivitySubscrpiton.unsubscribe();
    };
    /**
     * ACE editor initialition
     */
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/textmate");
        this.editor.session.setMode("ace/mode/python");
        this.editor.getSession().setTabSize(4);
        this.editor.lastChange = null;
        this.editor.setValue(LANGUAGE_DEFAULT_1.LANGUAGE_DEFAULTS[this.language]);
        // listen for context change
        // emit the change onoly if the change is made by the user
        this.editor.session.on("change", function (delta) {
            if (_this.editor.lastChange !== delta) {
                _this.coEditingService.change(delta);
            }
        });
        // listen for cursor move
        this.editor.session.selection.on("changeCursor", function (e) {
            var cursorLoc = _this.editor.getSession().selection.getCursor();
            _this.coEditingService.cursorMove(cursorLoc);
        });
    };
    /**
     * Reset editor to initial state
     */
    EditorComponent.prototype.reset = function () {
        var placeHolder = LANGUAGE_DEFAULT_1.LANGUAGE_DEFAULTS[this.language];
        this.editor.setValue(placeHolder);
        this.executionResult = null;
    };
    /**
     * Set the programming language for editor syntax highlighting
     * @param language the programming language to be use
     */
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.reset();
    };
    /**
     * Submit the code for execution
     */
    EditorComponent.prototype.submit = function () {
        var _this = this;
        this.executionDisplay = true;
        this.executionResult = {};
        // TODO: add animation for running
        this.executionResult['build'] = "running";
        var language = this.language;
        var code = this.editor.getValue();
        this.executionService.execute(language, code)
            .then(function (data) {
            _this.executionResult = JSON.parse(data);
        })
            .catch(function (error) {
            console.log("error: " + error);
        });
    };
    /**
     * popup notifications of participants status with fade in&out animation
     * @param activity contains userId and its action(join, left)
     */
    EditorComponent.prototype.popNotify = function (activity) {
        // TODO: this part will be update using Angular animation
        // jQuery will be depricated in this project
        var POP_TIME_OUT = 1500;
        var notice = document.createElement("div");
        notice.className = "alert alert-primary";
        notice.id = activity["id"];
        notice.innerHTML = activity["id"] + activity["action"];
        notice.style.display = "none";
        notice.style.marginTop = "5px";
        notice.style.marginBottom = "5px";
        document.getElementById("notice").appendChild(notice);
        $("#" + notice.id)
            .fadeIn()
            .delay(POP_TIME_OUT)
            .fadeOut(function () {
            notice.remove();
        });
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: "app-editor",
            template: __webpack_require__("../../../../../src/app/problem/components/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/problem/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [co_editing_service_1.CoEditingService,
            router_1.ActivatedRoute,
            execution_service_1.ExecutionService])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;


/***/ }),

/***/ "../../../../../src/app/problem/components/execution-result/execution-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    margin: 15px 0;\n}\n\n#execution-status {\n    color: red;\n    font-size: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/problem/components/execution-result/execution-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Run Code Status: <span id=\"execution-status\">{{status}}</span>\n    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Your answer</h5>\n      <p class=\"card-text\">{{result}}</p>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/problem/components/execution-result/execution-result.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ExecutionResultComponent = /** @class */ (function () {
    function ExecutionResultComponent() {
        // @Output() resultDisplay: boolean;
        // status: string;
        // output: string;
        this.status = 'Default_status';
        this.result = 'Default_result';
    }
    ExecutionResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ExecutionResultComponent.prototype, "status", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ExecutionResultComponent.prototype, "result", void 0);
    ExecutionResultComponent = __decorate([
        core_1.Component({
            selector: 'app-execution-result',
            template: __webpack_require__("../../../../../src/app/problem/components/execution-result/execution-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/problem/components/execution-result/execution-result.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExecutionResultComponent);
    return ExecutionResultComponent;
}());
exports.ExecutionResultComponent = ExecutionResultComponent;


/***/ }),

/***/ "../../../../../src/app/problem/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    /* padding-top: 20px; */\n    margin-top: 20px;\n}\n\n#seperate-line {\n    max-width: 100%;\n    height: 2px;\n    background: rgba(0, 0, 0, 0.125);\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/problem/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\" *ngIf=\"problem\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" disabled>Description</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" disabled>Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" disabled>Disabled</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{problem.title}}</h5>\n    <p class=\"card-text\">{{problem.description}}</p>\n  </div>\n</div>\n<!-- <div id=\"seperate-line\"></div> -->\n<app-editor></app-editor>\n"

/***/ }),

/***/ "../../../../../src/app/problem/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/app/problem/services/data/data.service.ts");
var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        this.getProblem();
    };
    ProblemDetailComponent.prototype.getProblem = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get("id");
        this.dataService.getProblemById(id).subscribe(function (problem) {
            _this.problem = problem;
        }, function (error) { return console.log(error); });
    };
    ProblemDetailComponent = __decorate([
        core_1.Component({
            selector: "app-problem-detail",
            template: __webpack_require__("../../../../../src/app/problem/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/problem/components/problem-detail/problem-detail.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());
exports.ProblemDetailComponent = ProblemDetailComponent;


/***/ }),

/***/ "../../../../../src/app/problem/components/problem-list/problem-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".diff-Easy {\n  color: #fff;\n  background-color: #28a745;\n}\n\n.diff-Medium {\n  color: #fff;\n  background-color: #ffc107;\n}\n\n.diff-Hard {\n  color: #fff;\n  background-color: #dc3545;\n}\n\na {\n  color: black;\n}\n\na:hover {\n  color: blue;\n  text-decoration: none;\n}\n\n.loader-wrapper {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.loader {\n  border: 4px solid #f3f3f3; /* Light grey */\n  border-top: 4px solid #555; /* Blue */\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  text-align: center;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/problem/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"!loadingComplete\" class=\"loader-wrapper\">\n    <div class=\"loader\"></div>\n</div>\n<!-- Table -->\n<div *ngIf=\"loadingComplete\">\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Difficulty</th>\n        <th scopr=\"col\">Acc</th>\n        <th scopr=\"col\">Quality</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let problem of problemsDisplay\">\n        <th scope=\"row\">{{problem.id}}</th>\n        <td>\n          <a routerLink=\"/problems/{{problem.id}}\">{{problem.title}}</a>\n        </td>\n        <td>\n          <span class=\"badge diff-{{problem.difficulty}}\">{{problem.difficulty}}</span>\n        </td>\n        <td>32.23%</td>\n        <td>Good</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- Pagination -->\n  <nav aria-label=\"Page navigation\">\n    <!-- Row per page settings -->\n    <label>row per page:</label>\n    <select [(ngModel)]=\"rowPerPage\" (change)=\"changeRowPerPage()\">\n      <!-- <select> -->\n      <option value=\"10\">10</option>\n      <option value=\"20\">20</option>\n      <option value=\"50\">50</option>\n    </select>\n\n    <ul *ngIf=\"numOfPages != 1\" class=\"pagination justify-content-center\">\n      <!-- Previous Link -->\n      <li class=\"page-item \">\n        <a class=\"page-link\" href=\"#\" (click)=\"showPage(currentPage - 1)\">Previous</a>\n      </li>\n      <!-- Dynamic changed page links -->\n      <li *ngFor=\"let i of paginationPages\" class=\"page-item\" [class.active]=\"i==currentPage\">\n        <a class=\"page-link\" href=\"#\" (click)=\"showPage(i)\">{{i}}</a>\n      </li>\n      <!-- Next Link -->\n      <li class=\"page-item\">\n        <a class=\"page-link\" href=\"#\" (click)=\"showPage(currentPage + 1)\">Next</a>\n      </li>\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/problem/components/problem-list/problem-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/problem/services/data/data.service.ts");
var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(dataService) {
        this.dataService = dataService;
        this.loadingComplete = false;
        this.DEFAULT_NUM_OF_TAGS = 5;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var DEFAULT_ROW_PER_PAGE = 20;
        this.currentPage = 1;
        this.rowPerPage = DEFAULT_ROW_PER_PAGE;
        this.problemsDisplay = [];
        // todo: remove this in the future
        setTimeout(function () {
            _this.getProblems();
        }, 500);
        // this.getProblems();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.dataService.getProblems().subscribe(function (problems) {
            _this.loadingComplete = true;
            // console.log("loading complete" + this.lodingComplete);
            _this.problems = problems;
            _this.numOfPages = Math.floor(_this.problems.length / _this.rowPerPage) + 1;
            // todo: should have one line solution:
            _this.problemsDisplay = _this.problems.slice(0, _this.rowPerPage);
            // console.log(this.numOfPages);
            _this.paginationPages = _this.getPageNumberTabs(0, _this.DEFAULT_NUM_OF_TAGS);
        });
    };
    ProblemListComponent.prototype.showPage = function (page) {
        if (page === void 0) { page = 1; }
        if (page <= 0 || page > this.numOfPages) {
            return false;
        }
        this.currentPage = page;
        var startIndex = (page - 1) * this.rowPerPage;
        var endIndex = page * this.rowPerPage;
        this.problemsDisplay = this.problems.slice(startIndex, endIndex);
        this.paginationPages = this.getPageNumberTabs(page, this.DEFAULT_NUM_OF_TAGS);
        return false;
    };
    ProblemListComponent.prototype.changeRowPerPage = function () {
        this.numOfPages = Math.floor(this.problems.length / this.rowPerPage) + 1;
        console.log(this.numOfPages);
        this.showPage();
    };
    /**
     * Helper: get the appropriate pagination tabs
     * @param currentPage the current page should be the center of tabs
     * @param maxPageTabs the maximum pag tabs showed
     * Example: when currentPage is 5 and the maxPageTabs is 3
     * - the tabs should be [4,5,6] where 5 is the center
     */
    ProblemListComponent.prototype.getPageNumberTabs = function (currentPage, maxPageTabs) {
        var pages = [];
        var totalPages = this.numOfPages;
        var start = Math.max(1, currentPage - Math.floor(maxPageTabs / 2));
        var end = Math.min(start + maxPageTabs - 1, totalPages);
        for (var i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };
    ProblemListComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-list',
            template: __webpack_require__("../../../../../src/app/problem/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/problem/components/problem-list/problem-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
exports.ProblemListComponent = ProblemListComponent;


/***/ }),

/***/ "../../../../../src/app/problem/components/problems/problems.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    padding-top: 50px;\n    margin-bottom: 150px;\n}\n.problem-list {\n    border: 1px solid rgba(0, 0, 0, 0.125) ;\n    border-radius: 5px;\n    /* max-width: 300px; */\n    margin-right: 15px;\n    \n}\n.progress-dashboard {\n    color: blueviolet;\n    background: aqua;\n    max-height: 400px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid black ;\n    border-radius: 5px;\n    text-align: center;\n    line-height: 400px;\n    /* vertical-align: center; */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/problem/components/problems/problems.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col problem-list\">\n            <app-problem-list></app-problem-list>\n        </div>\n        <div class=\"col-lg-3 progress-dashboard align-items-center\">\n            <app-progress-dashboard></app-progress-dashboard>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/problem/components/problems/problems.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ProblemsComponent = /** @class */ (function () {
    function ProblemsComponent() {
    }
    ProblemsComponent.prototype.ngOnInit = function () {
    };
    ProblemsComponent = __decorate([
        core_1.Component({
            selector: 'app-problems',
            template: __webpack_require__("../../../../../src/app/problem/components/problems/problems.component.html"),
            styles: [__webpack_require__("../../../../../src/app/problem/components/problems/problems.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProblemsComponent);
    return ProblemsComponent;
}());
exports.ProblemsComponent = ProblemsComponent;


/***/ }),

/***/ "../../../../../src/app/problem/components/progress-dashboard/progress-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/problem/components/progress-dashboard/progress-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  48% - 32 todo\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/problem/components/progress-dashboard/progress-dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ProgressDashboardComponent = /** @class */ (function () {
    function ProgressDashboardComponent() {
    }
    ProgressDashboardComponent.prototype.ngOnInit = function () {
    };
    ProgressDashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-progress-dashboard',
            template: __webpack_require__("../../../../../src/app/problem/components/progress-dashboard/progress-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/problem/components/progress-dashboard/progress-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressDashboardComponent);
    return ProgressDashboardComponent;
}());
exports.ProgressDashboardComponent = ProgressDashboardComponent;


/***/ }),

/***/ "../../../../../src/app/problem/problem-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var problem_component_1 = __webpack_require__("../../../../../src/app/problem/problem.component.ts");
var problem_detail_component_1 = __webpack_require__("../../../../../src/app/problem/components/problem-detail/problem-detail.component.ts");
var problems_component_1 = __webpack_require__("../../../../../src/app/problem/components/problems/problems.component.ts");
var problemRoutes = [
    {
        path: 'problems',
        component: problem_component_1.ProblemComponent,
        children: [
            {
                path: ':id', component: problem_detail_component_1.ProblemDetailComponent
            },
            {
                path: '', component: problems_component_1.ProblemsComponent
            }
        ]
    }
];
var ProblemRoutingModule = /** @class */ (function () {
    function ProblemRoutingModule() {
    }
    ProblemRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(problemRoutes)],
            exports: [router_1.RouterModule]
        })
    ], ProblemRoutingModule);
    return ProblemRoutingModule;
}());
exports.ProblemRoutingModule = ProblemRoutingModule;


/***/ }),

/***/ "../../../../../src/app/problem/problem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// This is the root component of the Problem module
var ProblemComponent = /** @class */ (function () {
    function ProblemComponent() {
    }
    ProblemComponent = __decorate([
        core_1.Component({
            template: "\n    <router-outlet></router-outlet>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ProblemComponent);
    return ProblemComponent;
}());
exports.ProblemComponent = ProblemComponent;


/***/ }),

/***/ "../../../../../src/app/problem/problem.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var problem_routing_module_1 = __webpack_require__("../../../../../src/app/problem/problem-routing.module.ts");
// Root-Component
var problem_component_1 = __webpack_require__("../../../../../src/app/problem/problem.component.ts");
// Sub-root component
var problems_component_1 = __webpack_require__("../../../../../src/app/problem/components/problems/problems.component.ts");
var problem_detail_component_1 = __webpack_require__("../../../../../src/app/problem/components/problem-detail/problem-detail.component.ts");
// sub components:
var progress_dashboard_component_1 = __webpack_require__("../../../../../src/app/problem/components/progress-dashboard/progress-dashboard.component.ts");
var problem_list_component_1 = __webpack_require__("../../../../../src/app/problem/components/problem-list/problem-list.component.ts");
var editor_component_1 = __webpack_require__("../../../../../src/app/problem/components/editor/editor.component.ts");
var execution_result_component_1 = __webpack_require__("../../../../../src/app/problem/components/execution-result/execution-result.component.ts");
// Feature module services
var data_service_1 = __webpack_require__("../../../../../src/app/problem/services/data/data.service.ts");
var co_editing_service_1 = __webpack_require__("../../../../../src/app/problem/services/co-editing/co-editing.service.ts");
var websocket_service_1 = __webpack_require__("../../../../../src/app/problem/services/websocket/websocket.service.ts");
var execution_service_1 = __webpack_require__("../../../../../src/app/problem/services/execution/execution.service.ts");
var ProblemModule = /** @class */ (function () {
    function ProblemModule() {
    }
    ProblemModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, problem_routing_module_1.ProblemRoutingModule],
            declarations: [
                problems_component_1.ProblemsComponent,
                progress_dashboard_component_1.ProgressDashboardComponent,
                problem_list_component_1.ProblemListComponent,
                problem_detail_component_1.ProblemDetailComponent,
                problem_component_1.ProblemComponent,
                editor_component_1.EditorComponent,
                execution_result_component_1.ExecutionResultComponent
            ],
            providers: [
                data_service_1.DataService,
                co_editing_service_1.CoEditingService,
                websocket_service_1.WebsocketService,
                execution_service_1.ExecutionService
            ]
        })
    ], ProblemModule);
    return ProblemModule;
}());
exports.ProblemModule = ProblemModule;


/***/ }),

/***/ "../../../../../src/app/problem/services/co-editing/CURSOR_CULORS.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CURSOR_CULORS = [
    "#A52A2A",
    "#00008B",
    "#B8860B",
    "#006400",
    "#FF8C00",
    "#FF1493",
    "#20B2AA",
    "#800080",
    "#FFFF00"
];
// module.exports = { CURSOR_CULORS };
// module.exports = CURSOR_CULORS; 


/***/ }),

/***/ "../../../../../src/app/problem/services/co-editing/co-editing.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var CURSOR_CULORS_1 = __webpack_require__("../../../../../src/app/problem/services/co-editing/CURSOR_CULORS.ts");
// should get from server?
// declare const MAX_NUM_OF_PARTICIPANTS = 20; 
var CoEditingService = /** @class */ (function () {
    function CoEditingService() {
        this.colors = CURSOR_CULORS_1.CURSOR_CULORS;
        this.participants = {};
        this.clientNum = 0;
        this.MAX_NUM_OF_PARTICIPANTS = 20;
        this.userLogin$ = new Subject_1.Subject();
    }
    /**
     * Service Initializer
     * @param sessionId the co-editing service session
     */
    CoEditingService.prototype.init = function (sessionId, editor) {
        this.sessionId = sessionId;
        this.socket = io(window.location.origin, { query: { session: sessionId } });
        this.editor = editor;
        this.restoreBuffer();
    };
    /**
     * emit change event to server, involked when the changing the editor's content
     * @param delta the object containing infomation about content change
     */
    CoEditingService.prototype.change = function (delta) {
        this.socket.emit('change', JSON.stringify(delta));
    };
    /**
     * emit cursorMove event to server, involed when user moved its own cursor
     * @param cursor the object containing information about current cursor's location
     */
    CoEditingService.prototype.cursorMove = function (cursor) {
        this.socket.emit('cursorMove', JSON.stringify(cursor));
    };
    /**
     * attach event handlers when received updates from user
     * @param editor the editor object that needed to update
     */
    CoEditingService.prototype.attachEditorListeners = function (editor) {
        this.listenParticipantsActivities(editor);
        this.listenChange(editor);
        this.listenCursorMove(editor);
        this.socket.on('restoreBuffer', function (delta) {
            delta = JSON.parse(delta);
            for (var changeIndex in delta) {
                var singleChange = JSON.parse(delta[changeIndex]);
                editor.lastChange = singleChange;
                editor.getSession().getDocument().applyDeltas([singleChange]);
            }
        });
    };
    CoEditingService.prototype.restoreBuffer = function () {
        this.socket.emit('restoreBuffer', this.sessionId);
    };
    /**
     * helper: attach event listener to listen participants' activities
     * @param editor the editor object that needed to update
     */
    CoEditingService.prototype.listenParticipantsActivities = function (editor) {
        var _this = this;
        this.socket.on('userJoin', function (userId) {
            var activity = {
                id: userId,
                action: "joined"
            };
            _this.userLogin$.next(activity);
        });
        this.socket.on('userLeft', function (userId) {
            var activity = {
                id: userId,
                action: "left"
            };
            _this.userLogin$.next(activity);
        });
    };
    /**
     * helper: attach event listener to listen 'change' signal
     * @param editor the editor object that needed to update
     */
    CoEditingService.prototype.listenChange = function (editor) {
        this.socket.on('change', function (delta) {
            delta = JSON.parse(delta);
            editor.lastChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
    };
    /**
     * helper: attach event listener to listen 'cursorMove' signal
     * @param editor the editor object that needed to update
     */
    CoEditingService.prototype.listenCursorMove = function (editor) {
        var _this = this;
        this.socket.on('cursorMove', function (cursor) {
            cursor = JSON.parse(cursor);
            var session = editor.getSession();
            var x = cursor.row;
            var y = cursor.column;
            var participantId = cursor.ownerId;
            var color = null;
            if (participantId in _this.participants) {
                color = _this.participants[participantId].color;
                session.removeMarker(_this.participants[participantId]['marker']);
            }
            else {
                if (Object.keys(_this.participants).length > _this.MAX_NUM_OF_PARTICIPANTS) {
                    throw "Number of participants reach the limit.";
                }
                _this.participants[participantId] = {};
                _this.participants[participantId]["color"] = color || _this.colors[_this.clientNum];
                console.log(_this.participants[participantId]["color"]);
                // Todo: need to revise
                var css = document.createElement('style');
                css.type = 'text/css';
                css.innerHTML = ".editor_cursor_" + participantId + "\n                        { \n                          position:absolute;\n                          background: " + _this.participants[participantId].color + ";\v\n                          z-index:100;\n                          width:2px !important;\n                        }";
                document.body.appendChild(css);
                _this.clientNum++;
            }
            var Range = ace.require('ace/range').Range;
            var range = new Range(x, y, x, y + 1);
            var newMarker = session.addMarker(range, "editor_cursor_" + participantId, true);
            _this.participants[participantId]['marker'] = newMarker;
        });
    };
    CoEditingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CoEditingService);
    return CoEditingService;
}());
exports.CoEditingService = CoEditingService;


/***/ }),

/***/ "../../../../../src/app/problem/services/data/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var ErrorObservable_1 = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ "Content-Type": "application/json" })
};
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "api/v1/problems";
    }
    // todo: may be can optimized for tracking/ lazy-loding purpose;
    DataService.prototype.getProblems = function () {
        var _this = this;
        return this.http
            .get(this.url)
            .pipe(operators_1.tap(function (problems) { return (_this.problems = problems); }));
    };
    DataService.prototype.getProblemById = function (id) {
        return this.http
            .get(this.url + "/" + id)
            .pipe(operators_1.catchError(this.handleError));
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        return this.http.post(this.url, problem, httpOptions).pipe(operators_1.tap(function (problem) {
            console.log("get called" + _this.problems.length);
            _this.problems.push(problem);
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable_1.ErrorObservable("Something bad happened; please try again later.");
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/app/problem/services/execution/execution.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ "Content-Type": "application/json" })
};
var ExecutionService = /** @class */ (function () {
    function ExecutionService(http) {
        this.http = http;
        this.url = "api/v1/execution";
    }
    ExecutionService.prototype.execute = function (language, code) {
        var codeWithLanguage = {
            "code": code,
            "language": language
        };
        return this.http.post(this.url, codeWithLanguage, httpOptions).toPromise();
    };
    ExecutionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ExecutionService);
    return ExecutionService;
}());
exports.ExecutionService = ExecutionService;


/***/ }),

/***/ "../../../../../src/app/problem/services/websocket/websocket.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());
exports.WebsocketService = WebsocketService;


/***/ }),

/***/ "../../../../../src/app/profile/components/profile-home/profile-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n    width: 100%;\n    border-radius: 8px;\n    margin-top: 30px;\n}\n\n\n\n#basic-profile-panel img {\n    margin: 20px;\n    border-radius: 6px;\n    max-width: 90%;\n    width: auto;\n    height: auto;\n}\n\n\n\n#username {\n    padding-bottom: 6px;\n    border-bottom: 1px solid red;\n}\n\n\n\n#activity-log-panel {\n    height: 600px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/components/profile-home/profile-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Left part -->\n  <div class=\"col-md-3\">\n    <!-- Basic Profile Panel -->\n    <div id=\"basic-profile-panel\" class=\"card panel\">\n      <h5 class=\"card-header\">Basic profile</h5>\n      <img class=\"card-img-top\" [src]=\"auth.userProfile?.picture\" alt=\"user picture\">\n      <div class=\"card-body\">\n        <h5 id=\"username\" class=\"card-title\">{{auth.userProfile?.name}}</h5>\n        <p class=\"card-text\"> user@gmail.com</p>\n      </div>\n    </div>\n    <!-- Progress -->\n    <div id=\"progress-panel\" class=\"card panel\">\n      <h5 class=\"card-header\">Progress</h5>\n      <div class=\"card-body\">\n        <p class=\"card-text\">Saved for d3 to display. Developing</p>\n      </div>\n    </div>\n\n  </div>\n  <!-- Right part -->\n  <div class=\"col-md-8\">\n    <!-- Operating Logs -->\n    <div id=\"activity-log-panel\" class=\"card panel\">\n      <h5 class=\"card-header\">Activities</h5>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/components/profile-home/profile-home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/shared/services/auth/auth.service.ts");
var ProfileHomeComponent = /** @class */ (function () {
    function ProfileHomeComponent(auth) {
        this.auth = auth;
    }
    ProfileHomeComponent.prototype.ngOnInit = function () {
    };
    ProfileHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-home',
            template: __webpack_require__("../../../../../src/app/profile/components/profile-home/profile-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/components/profile-home/profile-home.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], ProfileHomeComponent);
    return ProfileHomeComponent;
}());
exports.ProfileHomeComponent = ProfileHomeComponent;


/***/ }),

/***/ "../../../../../src/app/profile/profile-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// Root component
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/////////////////
var profile_home_component_1 = __webpack_require__("../../../../../src/app/profile/components/profile-home/profile-home.component.ts");
var profileRoutes = [
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        children: [
            {
                path: '', component: profile_home_component_1.ProfileHomeComponent
            }
        ]
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(profileRoutes)
            ],
            exports: [router_1.RouterModule]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());
exports.ProfileRoutingModule = ProfileRoutingModule;


/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: "\n    <router-outlet></router-outlet>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "../../../../../src/app/profile/profile.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var profile_routing_module_1 = __webpack_require__("../../../../../src/app/profile/profile-routing.module.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var profile_home_component_1 = __webpack_require__("../../../../../src/app/profile/components/profile-home/profile-home.component.ts");
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, profile_routing_module_1.ProfileRoutingModule],
            declarations: [profile_component_1.ProfileComponent, profile_home_component_1.ProfileHomeComponent],
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;


/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n    /* position:absolute; */\n    /* bottom:0; */\n    margin-top: 40px;\n    width:100%;\n    /* margin-bottom: 0; */\n    /* padding-bottom: 0; */\n    color: white;\n    text-align: center;\n    height: 56px;\n    line-height: 56px; /* <-- this is what you must define */\n    background: #24292e;\n    /* line-height: 56px; */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Copyright© By Hanqi Li\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "../../../../../src/app/shared/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    padding-left: 100px;\n    background: #24292e;\n    \n}\n.navbar a {\n    /* color: #97A2A2; */\n    font-family: Helvetica,Arial,sans-serif;\n    color: rgba(255,255,255,0.75);\n    /* font-f   amily: 'Gotham SSm A', 'Gotham SSm B'; */\n    /* font-family: 'Gotham SSm A', 'Gotham SSm B'; */\n    /* font-style: normal; */\n}\n.navbar a:hover {\n    color: white;\n}\n.navbar .navbar-brand img{\n    margin-right: 15px;\n}\n.login-out {\n    margin-right: 100px;\n}\n#user-picture {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: 36px;\n    width: 36px;\n    border-radius: 50%\n}\n#user-picture:hover {\n    border: 1px solid lightgray;\n}\n#user-name {\n    color: rgba(255,255,255,0.75);\n    cursor: default;\n}\n/* #split {\n    color: white;\n    margin: 0 8px;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-faded\">\n  <a class=\"navbar-brand\" href=\"#\">\n    [codecola]\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Home</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/problems\">Problems</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/contribute\">Contribution</a></li>\n      <!-- <li class=\"nav-item\"><button (click)=\"auth.test()\">Test</button></li> -->\n    </ul>\n  </div>\n  <div class=\"login-out\">\n    <a *ngIf=\"!auth.isLoggedin\" href=\"#\" (click)=\"login()\">Login | Register</a>\n    <div *ngIf=\"auth.isLoggedin\" class=\"nav-item dropdown\">\n      <img id=\"user-picture\" [src]=\"auth.userProfile?.picture\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n      <a class=\"nav-item\" id=\"user-name\">{{auth.userProfile?.name}}</a>\n        <div class=\"dropdown-menu\">\n          <button class=\"dropdown-item\" type=\"button\" routerLink=\"/profile\">Profile</button>\n          <div class=\"dropdown-divider\"></div>\n          <button class=\"dropdown-item\" type=\"button\" (click)=\"logout();\">Sign out</button>\n        </div>\n      </div>\n    \n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/shared/services/auth/auth.service.ts");
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(auth) {
        this.auth = auth;
        this.isAuthenticated = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        // this.isAuthenticated = this.auth.isAuthenticated();
    };
    NavBarComponent.prototype.login = function () {
        this.auth.login();
        return false;
    };
    NavBarComponent.prototype.logout = function () {
        this.auth.logout();
        // window.alert("logout-disabled for now");
        return false;
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/shared/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;


/***/ }),

/***/ "../../../../../src/app/shared/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "../../../../../src/app/shared/models/problem.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Problem = /** @class */ (function () {
    function Problem() {
    }
    return Problem;
}());
exports.Problem = Problem;


/***/ }),

/***/ "../../../../../src/app/shared/services/auth/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// src/app/auth/auth.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_service_1 = __webpack_require__("../../../../../src/app/shared/services/http/http.service.ts");
var auth0 = __webpack_require__("../../../../auth0-js/src/index.js");
var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.auth0 = new auth0.WebAuth({
            clientID: 'h1uq5F5EKHK836lMXelhIRWpnIypelD0',
            domain: 'lihanqi.auth0.com',
            responseType: 'token id_token',
            audience: 'https://lihanqi.auth0.com/userinfo',
            redirectUri: 'http://localhost:3000',
            scope: 'openid profile'
        });
        this.isLoggedin = false;
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
        // return false;
    };
    AuthService.prototype.initService = function () {
        if (this.isAuthenticated()) {
            this.isLoggedin = true;
            this.getProfile();
        }
        else {
            this.handleAuthentication();
        }
    };
    // Looks for the result of authentication in the URL has  h. 
    // Then, the result is processed with the parseHash method from auth0.js.
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/']);
                _this.isLoggedin = true;
                _this.getProfile();
            }
            else if (err) {
                _this.router.navigate(['/']);
                console.log(err);
            }
        });
    };
    // stores the user's Access Token, ID Token, and the Access Token's expiry time in browser storage.
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.isLoggedin = false;
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        if (!expiresAt) {
            return false;
        }
        // console.log(new Date().getTime() < expiresAt);
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function () {
        var _this = this;
        // console.log("!!!!!");
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access Token must exist to fetch profile');
        }
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                _this.userProfile = profile;
                // console.log(JSON.stringify(profile));
            }
        });
    };
    AuthService.prototype.test = function () {
        console.log("new test");
        // // this.getPhotoUrl();
        // if (this.userProfile) {
        //   console.log(JSON.stringify(this.userProfile));
        // } else {
        //   this.getProfile((err, profile) => {
        //     console.log(JSON.stringify(this.userProfile));
        //   })
        // }
        console.log(this.userProfile.picture);
        // console.log("test: " + this.getPhotoUrl());
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, http_service_1.HttpService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/shared/services/http/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var ErrorObservable_1 = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (url, headers) {
        if (headers === void 0) { headers = null; }
        var option = {};
        if (headers) {
            var header_1 = new http_1.HttpHeaders;
            Object.keys(headers).forEach(function (key) { return header_1.set(key, headers[key]); });
            option["headers"] = headers;
            // console.log(JSON.stringify(option["headers"]));
        }
        return this.http
            .get(url, option)
            .pipe(operators_1.catchError(this.handleError));
    };
    // Http error handler
    HttpService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable_1.ErrorObservable("Something bad happened; please try again later.");
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map