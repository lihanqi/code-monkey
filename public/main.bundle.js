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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>"

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
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
var routing_module_1 = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
// Components
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var problem_list_component_1 = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
var nav_bar_component_1 = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
var new_problem_component_1 = __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.ts");
var problem_detail_component_1 = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");
var editor_component_1 = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
var page_not_found_component_1 = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
// Services
var data_service_1 = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
var co_editing_service_1 = __webpack_require__("../../../../../src/app/services/co-editing/co-editing.service.ts");
var websocket_service_1 = __webpack_require__("../../../../../src/app/services/websocket/websocket.service.ts");
var execution_service_1 = __webpack_require__("../../../../../src/app/services/execution/execution.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                problem_list_component_1.ProblemListComponent,
                nav_bar_component_1.NavBarComponent,
                new_problem_component_1.NewProblemComponent,
                problem_detail_component_1.ProblemDetailComponent,
                editor_component_1.EditorComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, routing_module_1.RoutingModule, http_1.HttpClientModule],
            providers: [
                data_service_1.DataService,
                co_editing_service_1.CoEditingService,
                websocket_service_1.WebsocketService,
                execution_service_1.ExecutionService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#editor { \n    margin-top: 15px;\n    height: 600px;\n    font-size: 14px;\n}\n\n.editor-box {\n    margin-top: 25px;\n}\n\n.button-group button {\n    margin-right: 10px;\n}\n\n/* .MyCursorClass {\n    position:absolute;\n    background: red;\n    z-index:100;\n    width:3px;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container editor-box\">\n  <section>\n    <header>\n      <div class=\"button-group row\">\n        <!-- Button trigger modal -->\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#resetModal\">\n          Reset\n        </button>\n        <!-- Button for selecting language -->\n        <div class=\"dropdown\">\n          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" [value]=\"language\">\n            {{language}}\n          </button>\n          <div class=\"dropdown-menu\">\n            <button type=\"button\" class=\"dropdown-item\" *ngFor=\"let lang of languages\" (click)=\"setLanguage(lang)\">{{lang}}</button>\n          </div>\n        </div>\n      </div>\n    \n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"resetModal\">\n        <div class=\"modal-dialog modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"resetModalLabel\">Reset</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n              <span>&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            Reset will loose all current codes, are you sure?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"reset()\">Reset</button>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <body>\n      <div id=\"notice\"></div>\n      <div id=\"editor\">Hello?</div>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\">Submit</button>\n    </body>\n    <footer>\n      <div id=\"execution-result\"></div>\n    </footer>\n  </section>\n \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
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
var co_editing_service_1 = __webpack_require__("../../../../../src/app/services/co-editing/co-editing.service.ts");
var execution_service_1 = __webpack_require__("../../../../../src/app/services/execution/execution.service.ts");
var $ = __webpack_require__("../../../../jquery/dist/jquery.js");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(coEditingService, route, executionService) {
        this.coEditingService = coEditingService;
        this.route = route;
        this.executionService = executionService;
        this.languages = ["Java", "C++", "Python"];
        this.language = "Python";
        this.lastChange = null;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.initEditor();
            _this.coEditingService.init(paramMap.get("id"), _this.editor);
            _this.coEditingService.attachEditorListeners(_this.editor);
            _this.userAcitivitySubscrpiton = _this.coEditingService.userLogin$.subscribe(function (activity) {
                // console.log("subsciption update: " + activity);
                _this.popNotify(activity);
            });
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
        // listen for context change
        this.editor.getSession().on("change", function (delta) {
            if (_this.editor.lastChange !== delta) {
                // emit only if the change is made by the user
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
        this.editor.setValue("the new text here");
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
        var code = this.editor.getValue();
        var language = this.language;
        this.executionService.execute(language, code)
            .then(function (data) {
            document.getElementById('execution-result').innerHTML = data;
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
        var POP_TIME_OUT = 1500;
        var notice = document.createElement("div");
        notice.className = "alert alert-primary";
        notice.id = activity["id"];
        notice.innerHTML = activity["id"] + activity["action"];
        notice.style.display = "none";
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
            template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [co_editing_service_1.CoEditingService,
            router_1.ActivatedRoute,
            execution_service_1.ExecutionService])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;


/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-faded\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"../../../assets/code-monkey.png\" width=\"50\" height=\"50\">\n    Code Monkey\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/problems\">Problems</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
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
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;


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
var data_service_1 = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
var problem_1 = __webpack_require__("../../../../../src/app/models/problem.ts");
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
        console.log("add program clicked");
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

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
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
            template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\" *ngIf=\"problem\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-tabs card-header-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" disabled>Description</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" disabled>Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" disabled>Disabled</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{problem.title}}</h5>\n      <p class=\"card-text\">{{problem.description}}</p>\n    </div>\n  </div>\n</div>\n\n<app-editor></app-editor>\n"

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.ts":
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
var data_service_1 = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
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
            template: __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());
exports.ProblemDetailComponent = ProblemDetailComponent;


/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".diff-Easy {\n  color: #fff;\n  background-color: #28a745;\n}\n\n.diff-Medium {\n  color: #fff;\n  background-color: #ffc107;\n}\n\n.diff-Hard {\n  color: #fff;\n  background-color: #dc3545;\n}\n\na {\n  color: #28594e;\n}\n\na:hover {\n  color: #0e332b;\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-new-problem></app-new-problem>\n<br>\n<div class=\"container\">\n  <table class=\"table table-striped table-hover\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Title</th>\n        <th scope=\"col\">Difficulty</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let problem of problems\">\n        <th scope=\"row\">{{problem.id}}</th>\n        <td><a routerLink=\"/problems/{{problem.id}}\">{{problem.title}}</a></td>\n        <td><span class=\"badge badge-primary diff-{{problem.difficulty}}\">{{problem.difficulty}}</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.ts":
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
var data_service_1 = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(dataService) {
        this.dataService = dataService;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.dataService.getProblems().subscribe(function (problems) {
            _this.problems = problems;
        });
    };
    ProblemListComponent = __decorate([
        core_1.Component({
            selector: "app-problem-list",
            template: __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
exports.ProblemListComponent = ProblemListComponent;


/***/ }),

/***/ "../../../../../src/app/models/problem.ts":
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

/***/ "../../../../../src/app/routing/routing.module.ts":
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
var problem_list_component_1 = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");
var page_not_found_component_1 = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
var routes = [
    { path: 'problems', component: problem_list_component_1.ProblemListComponent },
    { path: 'problems/:id', component: problem_detail_component_1.ProblemDetailComponent },
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

/***/ "../../../../../src/app/services/co-editing/CURSOR_CULORS.ts":
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

/***/ "../../../../../src/app/services/co-editing/co-editing.service.ts":
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
var CURSOR_CULORS_1 = __webpack_require__("../../../../../src/app/services/co-editing/CURSOR_CULORS.ts");
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

/***/ "../../../../../src/app/services/data/data.service.ts":
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

/***/ "../../../../../src/app/services/execution/execution.service.ts":
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

/***/ "../../../../../src/app/services/websocket/websocket.service.ts":
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