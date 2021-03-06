webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/profile/components/password-change/password-change.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#password-change {\n  margin-top: 40px;\n  width: 600px;\n}\n\n.button-group {\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/components/password-change/password-change.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-auto\" id=\"password-change\">\n    <form>\n      <!-- Current Password -->\n      <div class=\"form-group\">\n        <label for=\"current-password\">Current password</label>\n        <input type=\"password\" name=\"oldPassword\" [(ngModel)]=\"oldPassword\" class=\"form-control\" placeholder=\"Enter your current password\">\n      </div>\n      <!-- New Password -->\n      <div class=\"form-group\">\n        <label for=\"new-password\">New password</label>\n        <input type=\"text\" name=\"newPassword\" [(ngModel)]=\"newPassword\" class=\"form-control\" placeholder=\"Enter your new password\">\n      </div>\n      <!-- Repeat New Password -->\n      <div class=\"form-group\">\n        <label for=\"repeat-password\">Confirm password</label>\n        <input type=\"text\"  class=\"form-control\" placeholder=\"Confirm your new password\">\n      </div>\n      <!-- Button Group -->\n      <div class=\"button-group\">\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">Submit</button>\n          <button (click)=\"cancel()\" type=\"button\" class=\"btn btn-primary\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/components/password-change/password-change.component.ts":
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
var profile_management_service_1 = __webpack_require__("../../../../../src/app/profile/services/profile-management/profile-management.service.ts");
var PasswordChangeComponent = /** @class */ (function () {
    function PasswordChangeComponent(profileService) {
        this.profileService = profileService;
    }
    PasswordChangeComponent.prototype.ngOnInit = function () {
    };
    PasswordChangeComponent.prototype.submit = function () {
        // TODO: 改善提示效果, 根据不同情况有不同的提示, 在保存过程中有Indicator
        this.profileService.changePassword(this.oldPassword, this.newPassword)
            .then(function (msg) {
            window.alert(msg);
        })
            .catch(function (err) {
            window.alert(err);
        });
    };
    PasswordChangeComponent.prototype.cancel = function () {
        window.history.back();
    };
    PasswordChangeComponent = __decorate([
        core_1.Component({
            selector: 'app-password-change',
            template: __webpack_require__("../../../../../src/app/profile/components/password-change/password-change.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/components/password-change/password-change.component.css")]
        }),
        __metadata("design:paramtypes", [profile_management_service_1.ProfileManagementService])
    ], PasswordChangeComponent);
    return PasswordChangeComponent;
}());
exports.PasswordChangeComponent = PasswordChangeComponent;


/***/ }),

/***/ "../../../../../src/app/profile/components/profile-detail/profile-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#profile-detail {\n    margin-top: 40px;\n    max-width: 600px;\n}\n\n#button-group {\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/components/profile-detail/profile-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-auto\" id=\"profile-detail\">\n    <app-loading-indicator [display]=\"savingState\" [text]=\"'Saving'\"></app-loading-indicator>\n    <form *ngIf=\"!savingState\">\n      <!-- UserName -->\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"profile.name\" placeholder=\"{{profile.username}}\">\n      </div>\n      <!-- Email -->\n      <div class=\"form-group\">\n        <label for=\"email\">Email address</label>\n        <input type=\"email\" class=\"form-control\" name=\"email\" ngModal email [(ngModel)]=\"profile.email\" placeholder=\"{{profile.email}}\">\n        <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n      </div>\n      <!-- First Name -->\n      <div class=\"form-group\">\n        <label for=\"first-name\">First Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"profile.firstname\" placeholder=\"{{profile.firstname}}\">\n      </div>\n      <!-- Last Name -->\n      <div class=\"form-group\">\n        <label for=\"last-name\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"profile.lastname\" placeholder=\"{{profile.lastname}}\">\n      </div>\n      <!-- Birthday -->\n      <div class=\"form-group\">\n        <label for=\"first-name\">Birthday</label>\n        <input type=\"date\" class=\"form-control\" name=\"birthday\" [(ngModel)]=\"profile.birthday\" placeholder=\"{{profile.birthday}}\">\n      </div>\n      <!-- Coding Language -->\n      <div class=\"form-group\">\n        <label for=\"coding-language\">Coding Language</label>\n        <input type=\"text\" class=\"form-control\" name=\"codingLanguage\" [(ngModel)]=\"profile.codingLanguage\" placeholder=\"{{profile.codingLanguage}}\">\n        <small class=\"form-text text-muted\">Setting the language preference will automatically set your default editor</small>\n      </div>\n      <!-- Button -->\n      <div id=\"button-group\">\n          <button (click)=\"save()\" type=\"button\" class=\"btn btn-primary\">Save</button>\n          <button routerLink=\"/profile/password\" type=\"button\" class=\"btn btn-primary\">Change Password</button>\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/components/profile-detail/profile-detail.component.ts":
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
var profile_management_service_1 = __webpack_require__("../../../../../src/app/profile/services/profile-management/profile-management.service.ts");
var ProfileDetailComponent = /** @class */ (function () {
    function ProfileDetailComponent(profileService) {
        this.profileService = profileService;
        this.savingState = false;
    }
    ProfileDetailComponent.prototype.ngOnInit = function () {
        var profileFromAuth = this.profileService.getUserProfile();
        this.profile = JSON.parse(JSON.stringify(profileFromAuth));
    };
    ProfileDetailComponent.prototype.save = function () {
        var _this = this;
        this.savingState = true;
        this.profileService.updateProfile(this.profile).then(function (profile) {
            _this.profile = JSON.parse(JSON.stringify(profile));
            _this.savingState = false;
        });
    };
    ProfileDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-detail',
            template: __webpack_require__("../../../../../src/app/profile/components/profile-detail/profile-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/components/profile-detail/profile-detail.component.css")]
        }),
        __metadata("design:paramtypes", [profile_management_service_1.ProfileManagementService])
    ], ProfileDetailComponent);
    return ProfileDetailComponent;
}());
exports.ProfileDetailComponent = ProfileDetailComponent;


/***/ }),

/***/ "../../../../../src/app/profile/components/profile-home/profile-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n    width: 100%;\n    border-radius: 8px;\n    margin-top: 30px;\n}\n\n\n\n#basic-profile-panel img {\n    margin: 20px;\n    border-radius: 6px;\n    max-width: 90%;\n    width: auto;\n    height: auto;\n}\n\n\n\n#username {\n    padding-bottom: 6px;\n    border-bottom: 1px solid red;\n}\n\n\n\n#activity-log-panel {\n    height: 600px;\n}\n\n\n\n#edit-gear {\n    text-align: end; \n    width: 20px;\n    height: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/components/profile-home/profile-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Left part -->\n  <div class=\"col-md-3\">\n    <!-- Basic Profile Panel -->\n    <div id=\"basic-profile-panel\" class=\"card panel\">\n      <h5 class=\"card-header\">\n        <span>Basic profile</span>\n        <button routerLink=\"/profile/detail\">Edit</button>\n      </h5>\n      <img class=\"card-img-top\" [src]=\"auth.userProfile?.picture\" alt=\"user picture\">\n      <div class=\"card-body\">\n        <h5 id=\"username\" class=\"card-title\">{{auth.userProfile?.name}}</h5>\n        <p class=\"card-text\"> user@gmail.com</p>\n      </div>\n    </div>\n    <!-- Progress Panel -->\n    <div id=\"progress-panel\" class=\"card panel\">\n      <h5 class=\"card-header\">Progress</h5>\n      <div class=\"card-body\">\n        <p class=\"card-text\">Saved for d3 to display. Developing</p>\n      </div>\n    </div>\n  </div>\n  <!-- Right part -->\n  <div class=\"col-md-8\">\n    <!-- Operating Logs -->\n    <div id=\"activity-log-panel\" class=\"card panel\">\n      <h5 class=\"card-header\">Activities</h5>\n    </div>\n  </div>\n</div>"

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
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
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
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/services/auth-guard/auth-guard.service.ts");
// Root component
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/////////////////
var profile_home_component_1 = __webpack_require__("../../../../../src/app/profile/components/profile-home/profile-home.component.ts");
var profile_detail_component_1 = __webpack_require__("../../../../../src/app/profile/components/profile-detail/profile-detail.component.ts");
var password_change_component_1 = __webpack_require__("../../../../../src/app/profile/components/password-change/password-change.component.ts");
var profileRoutes = [
    {
        path: '',
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: 'detail', component: profile_detail_component_1.ProfileDetailComponent
            },
            {
                path: 'password', component: password_change_component_1.PasswordChangeComponent
            },
            {
                path: '', component: profile_home_component_1.ProfileHomeComponent,
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
            template: "\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n  ",
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var profile_routing_module_1 = __webpack_require__("../../../../../src/app/profile/profile-routing.module.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var profile_home_component_1 = __webpack_require__("../../../../../src/app/profile/components/profile-home/profile-home.component.ts");
var profile_detail_component_1 = __webpack_require__("../../../../../src/app/profile/components/profile-detail/profile-detail.component.ts");
var profile_management_service_1 = __webpack_require__("../../../../../src/app/profile/services/profile-management/profile-management.service.ts");
var password_change_component_1 = __webpack_require__("../../../../../src/app/profile/components/password-change/password-change.component.ts");
var shared_module_1 = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
// import { LoadingIndicatorComponent } from "../shared/components/loading-indicator/loading-indicator.component";
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, profile_routing_module_1.ProfileRoutingModule, shared_module_1.SharedModule],
            declarations: [profile_component_1.ProfileComponent, profile_home_component_1.ProfileHomeComponent, profile_detail_component_1.ProfileDetailComponent, password_change_component_1.PasswordChangeComponent],
            providers: [profile_management_service_1.ProfileManagementService],
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;


/***/ }),

/***/ "../../../../../src/app/profile/services/profile-management/profile-management.service.ts":
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
// import { AuthService } from '../../../services/auth/auth.service';
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var ProfileManagementService = /** @class */ (function () {
    function ProfileManagementService(auth) {
        this.auth = auth;
    }
    ProfileManagementService.prototype.getUserProfile = function () {
        return this.auth.userProfile;
    };
    ProfileManagementService.prototype.updateProfile = function (profile) {
        return this.auth.updateProfile(profile);
    };
    ProfileManagementService.prototype.changePassword = function (oldPassword, newPassword) {
        return this.auth.changePassword(oldPassword, newPassword);
    };
    ProfileManagementService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], ProfileManagementService);
    return ProfileManagementService;
}());
exports.ProfileManagementService = ProfileManagementService;


/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map