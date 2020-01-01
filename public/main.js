(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _authguards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authguards/auth.guard */ "./src/app/authguards/auth.guard.ts");
/* harmony import */ var _authguards_notauth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authguards/notauth.guard */ "./src/app/authguards/notauth.guard.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/blog/edit-blog/edit-blog.component */ "./src/app/components/blog/edit-blog/edit-blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'dashbaord',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_authguards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        canActivate: [_authguards_notauth_guard__WEBPACK_IMPORTED_MODULE_8__["NotAuthGuard"]]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        canActivate: [_authguards_notauth_guard__WEBPACK_IMPORTED_MODULE_8__["NotAuthGuard"]]
    },
    {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        canActivate: [_authguards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'blog',
        component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"],
        canActivate: [_authguards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'edit-blog/:id',
        component: _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_10__["EditBlogComponent"],
        canActivate: [_authguards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: '**',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MeanStack';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _authguards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./authguards/auth.guard */ "./src/app/authguards/auth.guard.ts");
/* harmony import */ var _authguards_notauth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authguards/notauth.guard */ "./src/app/authguards/notauth.guard.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/blog/edit-blog/edit-blog.component */ "./src/app/components/blog/edit-blog/edit-blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
                _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_18__["EditBlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__["FlashMessagesModule"].forRoot(),
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _authguards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _authguards_notauth_guard__WEBPACK_IMPORTED_MODULE_16__["NotAuthGuard"], _services_blog_service__WEBPACK_IMPORTED_MODULE_11__["BlogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authguards/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/authguards/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.LoggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authguards/notauth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/authguards/notauth.guard.ts ***!
  \*********************************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.LoggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <h1>Blog Feeds</h1>\n</div>\n<div class=\"how-hide-message\">\n    <div [ngClass]=\"MessageCalss\">\n        {{message}}\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-8\">\n        <div class=\"button mb-2\">\n            <button class=\"btn btn-primary mr-1\" (click)='onCreate()'><i class=\"fa fa-plus\"></i> Create Blog</button>\n            <button [disabled]=\"loadingBlog\" *ngIf=\"!newPost\" class=\"btn btn-secondary\" (click)='onReload()'><i class=\"fa fa-undo\"></i> Reload</button>\n        </div>\n    </div>\n    <div class=\"col-sm-4\">\n        <input type=\"text\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\" class=\"form-control\" name=\"search\" placeholder=\"Search Blog\" />\n    </div>\n</div>\n<form [formGroup]=\"form\" (submit)='onBlogSubmit()' *ngIf=\"newPost\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Blog Title</label>\n        <input type=\"text\" formControlName=\"title\" class=\"form-control\" name=\"title\" id=\"title\" aria-describedby=\"emailHelp\" placeholder=\"Enter Title\">\n        <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This feild is required</li>\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.minlength\">Title should be atleast 5 characters</li>\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.maxlength\">Title cannot be morethank 500 characters</li>\n        </ul>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Body</label>\n        <textarea formControlName=\"body\" rows=\"8\" cols=\"30\" class=\"form-control\" name=\"body\" placeholder=\"Enter blog body\">\n</textarea>\n\n        <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">This feild is required</li>\n        </ul>\n    </div>\n    <button [disabled]=\"form.invalid || processing\" type=\"submit\" class=\"btn btn-primary  mr-1\">Submit</button>\n    <button type=\"button\" (click)='onCancel()' class=\"btn btn-warning\">GoBack</button>\n</form>\n\n<div *ngIf=\"!newPost\">\n\n\n    <div class=\"comeBack_up\" *ngIf=\"(blogPosts | json) == '[]'\">\n        <strong>No blogs post found please create new one</strong>\n    </div>\n\n    <div class=\"card mb-2\" *ngFor=\"let blog of blogPosts\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">{{blog.title}}</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">Posted By: {{blog.createdBy}}</h6>\n            <h6 class=\"card-subtitle mb-2 text-muted\">Date: {{blog.createdAt | date:'MMM dd,yyyy'}}</h6>\n            <p class=\"card-text\">{{blog.body}}</p>\n\n            <button class=\"btn btn-success mr-1\" (click)='likePost(blog._id)'><i class=\"fa fa-thumbs-up\"></i> Likes: {{blog.likes}}</button>\n            <button class=\"btn btn-danger\" (click)='dislikePost(blog._id)'><i class=\"fa fa-thumbs-down\"></i> Dislikes: {{blog.dislikes}}</button>\n\n            <div class=\"card-fotter mt-2\">\n                <a href=\"javascript:;\" [routerLink]=\"['/edit-blog', blog._id]\" class=\"card-link\">Edit</a>\n                <a href=\"javascript:;\" (click)='onDelete(blog.title,blog._id)' class=\"card-link\">Delete</a>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogComponent = /** @class */ (function () {
    function BlogComponent(formBuilder, blogService, authService) {
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.authService = authService;
        this.newPost = false;
        this.loadingBlog = false;
        this.processing = false;
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.createFrom();
        this.getBlogs();
    };
    BlogComponent.prototype.createFrom = function () {
        this.form = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            body: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    BlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        var blog = {
            'title': this.form.get('title').value,
            'body': this.form.get('body').value,
            'createdBy': this.authService.getUserName()
        };
        this.blogService.createBlog(blog).subscribe(function (data) {
            if (data.success) {
                _this.message = data.message;
                _this.MessageCalss = 'alert alert-success';
                _this.getBlogs();
                setTimeout(function () {
                    _this.newPost = false;
                    _this.processing = false;
                    _this.message = '';
                    _this.MessageCalss = '';
                    _this.form.reset();
                }, 4000);
            }
            else {
                _this.message = data.message;
                _this.MessageCalss = 'alert alert-danger';
                _this.processing = false;
            }
        });
    };
    BlogComponent.prototype.onCreate = function () {
        this.newPost = true;
    };
    BlogComponent.prototype.onReload = function () {
        var _this = this;
        this.loadingBlog = true;
        this.getBlogs();
        setTimeout(function () {
            _this.loadingBlog = false;
        }, 4000);
    };
    BlogComponent.prototype.onCancel = function () {
        window.location.reload();
    };
    BlogComponent.prototype.getBlogs = function () {
        var _this = this;
        var pageNo = 1;
        var size = 10;
        this.blogService.getBlogs(pageNo, size).subscribe(function (data) {
            if (data.success) {
                _this.blogPosts = data.blogs;
                _this.blogPostsCopy = data.blogs;
            }
            else {
            }
        });
    };
    BlogComponent.prototype.onDelete = function (name, id) {
        var _this = this;
        swal({
            title: "Are you sure you want to delete " + name + ' ?',
            text: "Once deleted, you will not be able to recover this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(function (willDelete) {
            if (willDelete) {
                _this.blogService.deleteBlog(id).subscribe(function (data) {
                    if (data.success) {
                        _this.message = data.message;
                        _this.MessageCalss = 'alert alert-success';
                        _this.getBlogs();
                    }
                    else {
                        _this.message = data.message;
                        _this.MessageCalss = 'alert alert-danger';
                    }
                });
            }
        });
    };
    BlogComponent.prototype.likePost = function (id) {
        var _this = this;
        this.blogService.likeBlog(id).subscribe(function (data) {
            if (data.success) {
                _this.message = data.message;
                _this.MessageCalss = 'alert alert-success';
                _this.getBlogs();
            }
            else {
                _this.message = data.message;
                _this.MessageCalss = 'alert alert-danger';
            }
        });
    };
    BlogComponent.prototype.dislikePost = function (id) {
        var _this = this;
        this.blogService.dislikeBlog(id).subscribe(function (data) {
            if (data.success) {
                _this.message = data.message;
                _this.MessageCalss = 'alert alert-success';
                _this.getBlogs();
            }
            else {
                _this.message = data.message;
                _this.MessageCalss = 'alert alert-danger';
            }
            setTimeout(function () {
                _this.message = '';
                _this.MessageCalss = '';
            }, 2000);
        });
    };
    BlogComponent.prototype.search = function () {
        var _this = this;
        var term = this.searchTerm;
        if (term !== '') {
            this.blogPosts = this.blogService.searchBlog(term).subscribe(function (data) {
                if (data.success) {
                    _this.blogPosts = data.blogs;
                }
            });
        }
        else {
            this.getBlogs();
        }
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9lZGl0LWJsb2cvZWRpdC1ibG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <h1>Edit Blog</h1>\n</div>\n<div class=\"how-hide-message\">\n    <div [ngClass]=\"messageClass\">\n        {{message}}\n    </div>\n</div>\n\n<form (submit)='onBlogUpdate()' *ngIf=\"!loading\">\n    <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Blog Title</label>\n        <input type=\"text\" [(ngModel)]=\"blog.title\" class=\"form-control\" name=\"title\" id=\"title\" placeholder=\"Enter Title\">\n\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Body</label>\n        <textarea rows=\"8\" cols=\"30\" class=\"form-control\" name=\"body\" [(ngModel)]=\"blog.body\" placeholder=\"Enter blog body\">\n</textarea>\n\n    </div>\n    <button [disabled]=\"processing\" type=\"submit\" class=\"btn btn-primary  mr-1\">Save Changes</button>\n    <button type=\"submit\" (click)='onBack()' class=\"btn btn-warning\">Go Back</button>\n</form>"

/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.ts ***!
  \******************************************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditBlogComponent = /** @class */ (function () {
    function EditBlogComponent(blogService, authService, route, location, router) {
        this.blogService = blogService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.message = '';
        this.messageClass = '';
        this.processing = false;
        this.loading = true;
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        this.getBlog();
    };
    EditBlogComponent.prototype.createFrom = function () {
    };
    EditBlogComponent.prototype.onBack = function () {
        this.location.back();
    };
    EditBlogComponent.prototype.onBlogUpdate = function () {
        var _this = this;
        this.processing = true;
        this.blogService.updateBlog(this.blog).subscribe(function (data) {
            if (data.success) {
                _this.message = data.message;
                _this.messageClass = 'alert alert-success';
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 2000);
            }
            else {
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
                _this.processing = false; // Allow loading of blog form
            }
        });
    };
    EditBlogComponent.prototype.getBlog = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.blogService.getBlog(id).subscribe(function (data) {
            if (data.success) {
                _this.blog = data.blog;
                _this.loading = false; // Allow loading of blog form
            }
            else {
                _this.message = 'Blog not found';
                _this.messageClass = 'alert alert-danger';
            }
        });
    };
    EditBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-blog',
            template: __webpack_require__(/*! ./edit-blog.component.html */ "./src/app/components/blog/edit-blog/edit-blog.component.html"),
            styles: [__webpack_require__(/*! ./edit-blog.component.css */ "./src/app/components/blog/edit-blog/edit-blog.component.css")]
        }),
        __metadata("design:paramtypes", [_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditBlogComponent);
    return EditBlogComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  dashboard works!\n</h1>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Home Page</h1>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <h1>Login</h1>\n</div>\n<div class=\"how-hide-message\">\n    <div [ngClass]=\"MessageCalss\">\n        {{message}}\n    </div>\n</div>\n<form [formGroup]=\"formLogin\" (submit)='onLoginSubmit()'>\n    <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input type=\"email\" formControlName=\"email\" class=\"form-control\" name=\"email\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n        <ul class=\"help-block\">\n            <li *ngIf=\"formLogin.controls.email.dirty && formLogin.controls.email.errors?.required\">This feild is required</li>\n            <li *ngIf=\"formLogin.controls.email.dirty && formLogin.controls.email.errors?.email\">Email must be a valid email address</li>\n        </ul>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n        <ul class=\"help-block\">\n            <li *ngIf=\"formLogin.controls.password.dirty && formLogin.controls.password.errors?.required\">This feild is required</li>\n            <li *ngIf=\"formLogin.controls.password.dirty && formLogin.controls.password.errors?.minlength\">Password must be at least 8 characters</li>\n        </ul>\n    </div>\n    <button [disabled]=\"formLogin.invalid\" type=\"submit\" class=\"btn btn-primary\">Login</button>\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authguards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authguards/auth.guard */ "./src/app/authguards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, AuthService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.AuthService = AuthService;
        this.router = router;
        this.authGuard = authGuard;
        this.createFrom();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authGuard.redirectUrl) {
            this.message = 'You must login to access this page';
            this.MessageCalss = 'alert alert-danger';
        }
        else {
            this.message = '';
            this.MessageCalss = '';
        }
    };
    LoginComponent.prototype.createFrom = function () {
        this.formLogin = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            'email': this.formLogin.get('email').value,
            'password': this.formLogin.get('password').value,
        };
        this.AuthService.login(user).subscribe(function (data) {
            if (data.success) {
                _this.message = data.message;
                _this.MessageCalss = 'alert alert-success';
                _this.AuthService.saveUserData(data.token, data.user);
                setTimeout(function () {
                    if (_this.authGuard.redirectUrl) {
                        _this.router.navigate([_this.authGuard.redirectUrl]);
                    }
                    else {
                        _this.router.navigate(['/dashbaord']);
                    }
                }, 2000);
            }
            else {
                _this.message = data.message;
                _this.MessageCalss = 'alert alert-danger';
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _authguards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n       Blog\n    </a>\n    <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/\">Home</a>\n\n        </li>\n\n\n    </ul>\n    <ul class=\"nav navbar-nav ml-auto\">\n\n        <li *ngIf=\"authService.LoggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/blog\">Blog</a>\n        </li>\n\n        <li *ngIf=\"!authService.LoggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n\n        <li *ngIf=\"!authService.LoggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n        </li>\n\n        <li *ngIf=\"authService.LoggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:;\" (click)='onLogout()'>Logout</a>\n        </li>\n\n        <div class=\"bs-example\" *ngIf=\"authService.LoggedIn()\">\n            <div class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User</a>\n                <div class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\" routerLink=\"/dashbaord\">Dashbaord</a>\n                    <a class=\"dropdown-item\" routerLink=\"/profile\">Profile</a>\n                </div>\n            </div>\n        </div>\n\n    </ul>\n\n\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logout', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <h1>Profile</h1>\n</div>\n\n<ul class=\"list-group\">\n    <li class=\"list-group-item\">UserName: {{username}}</li>\n    <li class=\"list-group-item\">Eamil: {{email}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(AuthService) {
        this.AuthService = AuthService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.getprofile().subscribe(function (data) {
            if (data.success) {
                _this.username = data.user.username;
                _this.email = data.user.email;
            }
            else {
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <h1>Register</h1>\n</div>\n\n<div class=\"how-hide-message\">\n    <div [ngClass]=\"MessageCalss\">\n        {{message}}\n    </div>\n</div>\n<form [formGroup]=\"formRegister\" (submit)='onRegisterSubmit()'>\n\n    <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Name</label>\n        <div [ngClass]=\"formRegister.controls.username.errors && formRegister.controls.username.touched ? 'has-error' : 'has-success'\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" name=\"username\" placeholder=\"Enter Name\">\n            <ul class=\"help-block\">\n                <li *ngIf=\"formRegister.controls.username.dirty && formRegister.controls.username.errors?.required\">This feild is required</li>\n                <li *ngIf=\"formRegister.controls.username.dirty && (formRegister.controls.username.errors?.minlength || formRegister.controls.username.errors?.maxlength)\">Username must be at least 6 characters and not more than 15</li>\n\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input type=\"email\" formControlName=\"email\" class=\"form-control\" name=\"email\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" (blur)=\"checkEmail()\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n        <ul class=\"help-block\">\n            <li *ngIf=\"formRegister.controls.email.dirty && formRegister.controls.email.errors?.required\">This feild is required</li>\n            <li *ngIf=\"formRegister.controls.email.dirty && formRegister.controls.email.errors?.email\">Email must be a valid email address</li>\n            <li *ngIf=\"emailMessage && !emailValid\">{{emailMessage}}</li>\n        </ul>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n        <ul class=\"help-block\">\n            <li *ngIf=\"formRegister.controls.password.dirty && formRegister.controls.password.errors?.required\">This feild is required</li>\n            <li *ngIf=\"formRegister.controls.password.dirty && formRegister.controls.password.errors?.minlength\">Password must be at least 8 characters</li>\n        </ul>\n    </div>\n    <div class=\"form-group form-check\">\n        <input type=\"checkbox\" name=\"agree\" value=\"1\" formControlName=\"agree\" class=\"form-check-input\" id=\"exampleCheck1\">\n        <label class=\"form-check-label\" for=\"exampleCheck1\">I agree with terms and conditions</label>\n        <ul class=\"help-block\">\n            <li *ngIf=\"formRegister.controls.agree.dirty && formRegister.controls.agree.errors?.required\">This feild is required</li>\n        </ul>\n    </div>\n    <button [disabled]=\"formRegister.invalid || !emailValid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, AuthService) {
        this.formBuilder = formBuilder;
        this.AuthService = AuthService;
        this.createFrom();
    }
    RegisterComponent.prototype.createFrom = function () {
        this.formRegister = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            agree: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            'username': this.formRegister.get('username').value,
            'email': this.formRegister.get('email').value,
            'password': this.formRegister.get('password').value
        };
        this.AuthService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.message = 'Account created succesfully';
                _this.MessageCalss = 'alert alert-success';
                _this.formRegister.reset();
            }
            else {
                _this.message = 'There is an error in creating account please try agin';
                _this.MessageCalss = 'alert alert-danger';
            }
        });
    };
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        this.AuthService.checkEmail(this.formRegister.get('email').value).subscribe(function (data) {
            if (data.success) {
                _this.emailValid = true;
                _this.emailMessage = data.message;
            }
            else {
                _this.emailValid = false;
                _this.emailMessage = data.message;
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
// import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
// //import { tokenNotExpired } from 'angular2-jwt';
// import { map } from 'rxjs/operators';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiUrl = ''; // URL to web api
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.apiUrl + 'api/register', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.apiUrl + 'api/checkEmail/' + email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.login = function (user) {
        return this.http.post(this.apiUrl + 'api/login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getprofile = function () {
        this.addAuthHeaders();
        return this.http.get(this.apiUrl + 'api/profile/', this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.saveUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.getUserName = function () {
        var obj = JSON.parse(localStorage.getItem('user'));
        return obj.username;
    };
    AuthService.prototype.addAuthHeaders = function () {
        this.loadToken();
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    AuthService.prototype.LoggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogService = /** @class */ (function () {
    function BlogService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    BlogService.prototype.createBlog = function (blog) {
        this.authService.addAuthHeaders();
        return this.http.post(this.authService.apiUrl + 'api/blog/createBlog/', blog, this.authService.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.getBlogs = function (pageNo, size) {
        var params = {
            pageNo: pageNo,
            size: size
        };
        this.authService.addAuthHeaders();
        return this.http.get(this.authService.apiUrl + 'api/blog/getBlogs', this.authService.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.getBlog = function (id) {
        this.authService.addAuthHeaders();
        return this.http.get(this.authService.apiUrl + 'api/blog/get/' + id, this.authService.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.updateBlog = function (blog) {
        this.authService.addAuthHeaders();
        return this.http.put(this.authService.apiUrl + 'api/blog/updateBlog/', blog, this.authService.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.deleteBlog = function (id) {
        this.authService.addAuthHeaders();
        return this.http.delete(this.authService.apiUrl + 'api/blog/delete/' + id, this.authService.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.likeBlog = function (id) {
        var data = { id: id };
        this.authService.addAuthHeaders();
        return this.http.put(this.authService.apiUrl + 'api/blog/like/', data, this.authService.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.dislikeBlog = function (id) {
        var data = { id: id };
        this.authService.addAuthHeaders();
        return this.http.put(this.authService.apiUrl + 'api/blog/dislike/', data, this.authService.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.searchBlog = function (searchTerm) {
        var data = { term: searchTerm };
        this.authService.addAuthHeaders();
        return this.http.post(this.authService.apiUrl + 'api/blog/search/', data, this.authService.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\node\firstProject\blog\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map