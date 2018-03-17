webpackJsonp(["profile.module"],{

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
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/shared/services/auth-guard/auth-guard.service.ts");
// Root component
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/////////////////
var profile_home_component_1 = __webpack_require__("../../../../../src/app/profile/components/profile-home/profile-home.component.ts");
var profileRoutes = [
    {
        path: '',
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
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
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/shared/services/auth-guard/auth-guard.service.ts");
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, profile_routing_module_1.ProfileRoutingModule],
            providers: [auth_guard_service_1.AuthGuard],
            declarations: [profile_component_1.ProfileComponent, profile_home_component_1.ProfileHomeComponent],
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;


/***/ }),

/***/ "../../../../../src/app/shared/services/auth-guard/auth-guard.service.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/shared/services/auth/auth.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            // TODO: login page later
            this.router.navigate(['/problems']);
            console.log("redirect to login page");
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map