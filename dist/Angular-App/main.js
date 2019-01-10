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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<elastic></elastic>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUzpcXE9sZFxcRnJvbnRcXEFuZ3VsYXJcXEFuZ3VsYXItQXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsVUFBUztFQUNULHVCQUFzQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Angular-App";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers_data_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducers/data.reducers */ "./src/app/store/reducers/data.reducers.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _elastic_elastic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elastic/elastic.component */ "./src/app/elastic/elastic.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _elastic_elastic_component__WEBPACK_IMPORTED_MODULE_8__["ElasticComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({
                    appData: _store_reducers_data_reducers__WEBPACK_IMPORTED_MODULE_5__["reducer"]
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/elastic/elastic.component.html":
/*!************************************************!*\
  !*** ./src/app/elastic/elastic.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form action=\"javascript:void()\" [formGroup]=\"Form\" (submit)=\"onSubmit()\">\n    <label for=\"first-name\">First Name</label>\n    <input type=\"text\" id=\"first-name\" formControlName=\"firstName\" />\n    <label for=\"last-name\">Last Name</label>\n    <input type=\"text\" id=\"last-name\" formControlName=\"lastName\" />\n    <label for=\"birth\">Date</label>\n    <input type=\"date\" formControlName=\"birth\" />\n    <label for=\"mobile\">Mobile</label>\n    <input type=\"number\" formControlName=\"mobile\" />\n    <label for=\"email\">Email</label>\n    <input type=\"text\" formControlName=\"email\" />\n    <button type=\"submit\">Send</button>\n  </form>\n</div>\n<button (click)=\"createBtn()\">Create</button>\n<button (click)=\"retrieveBtn()\">Retrieve</button>\n<button (click)=\"storeBTN()\">Store</button>\n<button (click)=\"toggleData()\">Show Data</button>\n<div *ngIf=\"showData\">\n  <div *ngIf=\"!isEmpty; else empty\">\n    <h1>Data:</h1>\n    <ul>\n      <li *ngFor=\"let item of this.l_state\">\n        <h3>User id: {{ item.id }}</h3>\n        <ul>\n          <li>First Name: {{ item.info.first_name }}</li>\n          <li>Last Name: {{ item.info.last_name }}</li>\n          <li>Date of birth: {{ item.info.birth }}</li>\n          <li>Phone number: {{ item.info.mobile }}</li>\n          <li>Email Adress: {{ item.info.email }}</li>\n          <li>Was created: {{ item.info.created }}</li>\n        </ul>\n        <button (click)=\"deleteBtn(item.id)\">Delete</button>\n        <button (click)=\"editBtn(item.id)\">Edit</button>\n      </li>\n    </ul>\n  </div>\n  <ng-template #empty> No data to retrieve </ng-template>\n</div>\n<div *ngIf=\"isEdit\" class=\"editForm\">\n  <form action=\"javascript:void()\" [formGroup]=\"editForm\" (submit)=\"onEdit()\">\n    <label for=\"first-name\">First Name</label>\n    <input type=\"text\" id=\"first-name\" formControlName=\"firstName\" />\n    <label for=\"last-name\">Last Name</label>\n    <input type=\"text\" id=\"last-name\" formControlName=\"lastName\" />\n    <label for=\"birth\">Date</label>\n    <input type=\"date\" formControlName=\"birth\" />\n    <label for=\"mobile\">Mobile</label>\n    <input type=\"number\" formControlName=\"mobile\" />\n    <label for=\"email\">Email</label>\n    <input type=\"text\" formControlName=\"email\" />\n    <button type=\"submit\">Send</button>\n  </form>\n  <button id=\"cancel\" (click)=\"cancelEditing()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "./src/app/elastic/elastic.component.sass":
/*!************************************************!*\
  !*** ./src/app/elastic/elastic.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid gray;\n  width: 500px;\n  margin: 20px;\n  padding: 10px; }\n  form input {\n    width: 200px;\n    padding: 5px;\n    margin: 10px 0; }\n  button {\n  width: 100px;\n  height: 25px;\n  background-color: black;\n  color: orange;\n  border: 0;\n  outline: 0;\n  margin: 5px;\n  cursor: pointer; }\n  .container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .editForm {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  .editForm form {\n    background-color: gray; }\n  .editForm #cancel {\n    position: absolute;\n    top: 15px;\n    right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxhc3RpYy9TOlxcT2xkXFxGcm9udFxcQW5ndWxhclxcQW5ndWxhci1BcHAvc3JjXFxhcHBcXGVsYXN0aWNcXGVsYXN0aWMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixhQUFZO0VBQ1osY0FBYSxFQUlVO0VBWjNCO0lBVVEsYUFBWTtJQUNaLGFBQVk7SUFDWixlQUFjLEVBQUc7RUFDekI7RUFDSSxhQUFZO0VBQ1osYUFBWTtFQUNaLHdCQUF1QjtFQUN2QixjQUFhO0VBQ2IsVUFBUztFQUNULFdBQVU7RUFDVixZQUFXO0VBQ1gsZ0JBQWUsRUFBRztFQUN0QjtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUFHO0VBQzFCO0VBQ0ksZ0JBQWU7RUFDZixTQUFRO0VBQ1IsVUFBUztFQUNULHlDQUFnQztVQUFoQyxpQ0FBZ0MsRUFNWjtFQVZ4QjtJQU1RLHVCQUFzQixFQUFHO0VBTmpDO0lBUVEsbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxZQUFXLEVBQUciLCJmaWxlIjoic3JjL2FwcC9lbGFzdGljL2VsYXN0aWMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBtYXJnaW46IDEwcHggMDsgfSB9XG5idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuLmVkaXRGb3JtIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGZvcm0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB9XG4gICAgI2NhbmNlbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICByaWdodDogMTVweDsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/elastic/elastic.component.ts":
/*!**********************************************!*\
  !*** ./src/app/elastic/elastic.component.ts ***!
  \**********************************************/
/*! exports provided: ElasticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElasticComponent", function() { return ElasticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elasticsearch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elasticsearch.service */ "./src/app/elasticsearch.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");





var ElasticComponent = /** @class */ (function () {
    function ElasticComponent(store, es, fb, cdRef) {
        var _this = this;
        this.store = store;
        this.es = es;
        this.fb = fb;
        this.cdRef = cdRef;
        this.isEmpty = true;
        this.showData = false;
        this.isEdit = false;
        this.createBtn = function () {
            _this.es.create();
        };
        this.retrieveBtn = function () {
            var retr = _this.es.retrive();
            console.log(retr);
        };
        this.storeBTN = function () {
            console.log(_this.l_state);
        };
        this.deleteBtn = function (id) {
            _this.l_state = _this.l_state.filter(function (item) { return item.id !== id; });
            _this.es.update(_this.l_state);
        };
        this.toggleData = function () {
            if (_this.showData === false) {
                _this.showData = true;
            }
            else {
                _this.showData = false;
            }
        };
        this.editBtn = function (id) {
            _this.currentId = id;
            _this.isEdit = true;
            for (var _i = 0, _a = _this.l_state; _i < _a.length; _i++) {
                var item = _a[_i];
                if (id == item.id) {
                    _this.currentEdit = item;
                    _this.initEdit(item);
                }
            }
        };
        this.cancelEditing = function () {
            _this.isEdit = false;
        };
    }
    ElasticComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es.retrive();
        this.store.select("appData").subscribe(function (data) {
            _this.l_state = data.users;
        });
        this.initForm();
    };
    ElasticComponent.prototype.initForm = function () {
        this.Form = this.fb.group({
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/[A-z]/)]],
            lastName: [null],
            birth: [null],
            mobile: [null],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
        });
    };
    ElasticComponent.prototype.initEdit = function (item) {
        this.editForm = this.fb.group({
            firstName: [item.info.first_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/[A-z]/)]],
            lastName: [item.info.last_name],
            birth: [item.info.birth],
            mobile: [item.info.mobile],
            email: [item.info.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
        });
    };
    ElasticComponent.prototype.onSubmit = function () {
        var _this = this;
        var controls = this.Form.controls;
        Object.keys(controls).forEach(function () {
            return (_this.formArr = {
                id: _this.l_state.length + 1,
                info: {
                    first_name: controls["firstName"].value,
                    last_name: controls["lastName"].value,
                    birth: controls["birth"].value,
                    mobile: controls["mobile"].value,
                    email: controls["email"].value,
                    created: new Date().toLocaleString()
                }
            });
        });
        this.l_state.push(this.formArr);
        this.es.update(this.l_state);
        this.Form.reset();
    };
    ElasticComponent.prototype.onEdit = function () {
        var _this = this;
        var controls = this.editForm.controls;
        Object.keys(controls).forEach(function () {
            return (_this.editArr = {
                id: _this.currentId,
                info: {
                    first_name: controls["firstName"].value,
                    last_name: controls["lastName"].value,
                    birth: controls["birth"].value,
                    mobile: controls["mobile"].value,
                    email: controls["email"].value,
                    created: new Date().toLocaleString()
                }
            });
        });
        this.l_state = this.l_state.filter(function (item) { return item.id !== _this.editArr.id; });
        this.l_state.push(this.editArr);
        this.es.update(this.l_state);
        this.editForm.reset();
        this.isEdit = false;
    };
    ElasticComponent.prototype.ngAfterViewChecked = function () {
        if (this.showData === true) {
            if (this.l_state.length > 0) {
                this.isEmpty = false;
            }
            else {
                this.isEmpty = true;
            }
        }
        this.cdRef.detectChanges();
    };
    ElasticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "elastic",
            template: __webpack_require__(/*! ./elastic.component.html */ "./src/app/elastic/elastic.component.html"),
            styles: [__webpack_require__(/*! ./elastic.component.sass */ "./src/app/elastic/elastic.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _elasticsearch_service__WEBPACK_IMPORTED_MODULE_2__["ElasticsearchService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ElasticComponent);
    return ElasticComponent;
}());



/***/ }),

/***/ "./src/app/elasticsearch.service.ts":
/*!******************************************!*\
  !*** ./src/app/elasticsearch.service.ts ***!
  \******************************************/
/*! exports provided: ElasticsearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElasticsearchService", function() { return ElasticsearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var elasticsearch_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elasticsearch-browser */ "./node_modules/elasticsearch-browser/elasticsearch.js");
/* harmony import */ var elasticsearch_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elasticsearch_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_data_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actions/data.actions */ "./src/app/store/actions/data.actions.ts");





var ElasticsearchService = /** @class */ (function () {
    function ElasticsearchService(store) {
        this.store = store;
        if (!this.client) {
            this._connect();
        }
    }
    ElasticsearchService.prototype._connect = function () {
        this.client = new elasticsearch_browser__WEBPACK_IMPORTED_MODULE_2__["Client"]({
            host: "localhost:9200",
            log: "trace"
        });
    };
    ElasticsearchService.prototype.create = function () {
        return this.client.bulk({
            body: [
                { index: { _index: "db_first", _type: "users_data", _id: 1 } },
                {
                    users: [
                        {
                            id: 1,
                            info: {
                                first_name: "Denis",
                                last_name: "Ryabenkiy",
                                birth: "24/10/1997",
                                mobile: "+380960789811",
                                email: "denis9524gmail.com",
                                created: "09.01.2019, 12:56:37"
                            }
                        }
                    ]
                }
            ]
        }, function (err, resp) {
            console.log(err, resp);
        });
    };
    ElasticsearchService.prototype.update = function (data) {
        return this.client.bulk({
            body: [
                { index: { _index: "db_first", _type: "users_data", _id: 1 } },
                {
                    users: data
                }
            ]
        }, function (err, resp) {
            console.log(err, resp);
        });
    };
    ElasticsearchService.prototype.retrive = function () {
        var _this = this;
        return this.client.get({
            index: "db_first",
            type: "users_data",
            id: 1
        }, function (err, resp) {
            _this.store.dispatch(new _store_actions_data_actions__WEBPACK_IMPORTED_MODULE_4__["retrieveData"](resp._source));
            _this.store.select("appData").subscribe();
        });
    };
    ElasticsearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ElasticsearchService);
    return ElasticsearchService;
}());



/***/ }),

/***/ "./src/app/store/actions/data.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/data.actions.ts ***!
  \***********************************************/
/*! exports provided: ADD, retrieveData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveData", function() { return retrieveData; });
var ADD = "[Constants] Add";
var retrieveData = /** @class */ (function () {
    function retrieveData(payload) {
        this.payload = payload;
        this.type = ADD;
    }
    return retrieveData;
}());



/***/ }),

/***/ "./src/app/store/reducers/data.reducers.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/data.reducers.ts ***!
  \*************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_data_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/data.actions */ "./src/app/store/actions/data.actions.ts");

var initialState = {
    currentData: []
};
function reducer(state, action) {
    if (state === void 0) { state = [initialState]; }
    switch (action.type) {
        case _actions_data_actions__WEBPACK_IMPORTED_MODULE_0__["ADD"]:
            return action.payload;
        default:
            return state;
    }
}


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

module.exports = __webpack_require__(/*! S:\Old\Front\Angular\Angular-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map