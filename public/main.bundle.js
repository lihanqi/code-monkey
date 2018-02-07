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
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var problem_list_component_1 = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
var nav_bar_component_1 = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
var new_problem_component_1 = __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.ts");
var problem_detail_component_1 = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
var routing_module_1 = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
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
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                routing_module_1.RoutingModule,
                http_1.HttpClientModule
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


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
        this.problem.difficulty = null; // in order to let <select> placeholder to work, set problem.difficulty to null
    };
    NewProblemComponent.prototype.addProblem = function () {
        var _this = this;
        console.log("add program clicked");
        this.dataService.addProblem(this.problem).subscribe(function (problem) {
            console.log('after add, returned' + JSON.stringify(problem));
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

module.exports = "<div class=\"container\">\n  <div class=\"card\" *ngIf=\"problem\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-tabs card-header-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" disabled>Description</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" disabled>Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" disabled>Disabled</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{problem.title}}</h5>\n      <p class=\"card-text\">{{problem.description}}</p>\n    </div>\n  </div>\n</div>\n\n"

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
        var id = +this.route.snapshot.paramMap.get('id');
        this.dataService.getProblemById(id).subscribe(function (problem) { _this.problem = problem; }, function (error) { return console.log(error); });
    };
    ProblemDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-detail',
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-new-problem></app-new-problem>\n<br>\n<div class=\"container\">\n  <table class=\"table table-striped table-hover\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Title</th>\n        <th scope=\"col\">Difficulty</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let problem of problems\">\n        <th scope=\"row\">{{problem.id}}</th>\n        <td><a routerLink=\"/problems/{{problem.id}}\">{{problem.title}}</a></td>\n        <td><span class=\"badge badge-pill badge-secondary\">{{problem.difficulty}}</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n"

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
        this.dataService.getProblems().subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-list',
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
var routes = [
    { path: '', redirectTo: '/problems', pathMatch: 'full' },
    { path: 'problems', component: problem_list_component_1.ProblemListComponent },
    { path: 'problems/:id', component: problem_detail_component_1.ProblemDetailComponent },
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
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = 'api/v1/problems';
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        return this.http.get(this.url)
            .pipe(operators_1.tap(function (problems) { return _this.problems = problems; }));
    };
    DataService.prototype.getProblemById = function (id) {
        return this.http.get(this.url + "/" + id).pipe(operators_1.catchError(this.handleError));
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        return this.http.post(this.url, problem, httpOptions)
            .pipe(operators_1.tap(function (problem) { _this.problems.push(problem); }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable_1.ErrorObservable('Something bad happened; please try again later.');
    };
    ;
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


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