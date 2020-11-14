(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/TranscryptApp/TranscryptApp/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _stylish_url_stylish_url_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylish-url/stylish-url.component */ "dPj6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _stylish_select_stylish_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stylish-select/stylish-select.component */ "TgQ4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");









function HomeComponent_app_stylish_select_3_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r4.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.name);
} }
function HomeComponent_app_stylish_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-stylish-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_app_stylish_select_3_Template_app_stylish_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.transcrypt.captions = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_stylish_select_3_option_1_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterLeaveAnimation", undefined)("ngModel", ctx_r0.transcrypt.captions)("disabled", !ctx_r0.transcrypt.captionsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.transcrypt.captionsList.captions);
} }
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Translate Captions?:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.transcrypt.translation.enabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterLeaveAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.transcrypt.translation.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
} }
function HomeComponent_app_stylish_select_5_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("value", l_r10.lang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r10.name, "");
} }
function HomeComponent_app_stylish_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-stylish-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_app_stylish_select_5_Template_app_stylish_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.transcrypt.translation.language = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_stylish_select_5_option_1_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterLeaveAnimation", undefined)("ngModel", ctx_r2.transcrypt.translation.language)("disabled", !ctx_r2.transcrypt.translation.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.transcrypt.captionsList.translation_langs);
} }
class HomeComponent {
    // Constructor method
    constructor(router) {
        this.router = router;
        /**
         * The model for the form
         */
        this.transcrypt = {
            url: null,
            videoId: null,
            captionsList: null,
            captions: null,
            translation: {
                enabled: false,
                language: null,
            },
        };
    }
    ngOnInit() { }
    /**
     * Function called when the URL input changes to reset the form
     * @returns void
     */
    resetForm() {
        this.transcrypt = {
            url: null,
            videoId: null,
            captionsList: null,
            captions: null,
            translation: {
                enabled: false,
                language: null,
            },
        };
    }
    /**
     * Get the data from the form and send it to the /transcript page.
     * @param data The data from the submitted form
     */
    submit(data) {
        // Create a base64url encoded data string for the baseURL of the captions track
        const dataQuery = btoa(data.captions);
        // Check if translation was enabled
        if (data.translation.enabled) {
            // Route to the transcript page with all of the variables
            this.router.navigate([`/transcript`], {
                queryParams: {
                    data: dataQuery,
                    tlang: data.translation.language,
                    title: data.captionsList.videoTitle,
                },
            });
        }
        else {
            // Route to the transcript page with all of the variables
            this.router.navigate([`/transcript`], {
                queryParams: {
                    data: dataQuery,
                    title: data.captionsList.videoTitle,
                },
            });
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 7, consts: [[1, "form-container"], [1, "flex-padding"], ["label", "YouTube Video URL", "inputName", "url", 3, "captionsList", "url", "captionsListChange", "urlChange", "input"], ["label", "Choose Captions Track:", "name", "captions", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["class", "translate-toggle-box", 4, "ngIf"], ["label", "Select Language:", "name", "translationLanguage", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["id", "url-submit", "type", "submit", 1, "submit-button", 3, "disabled", "click"], ["label", "Choose Captions Track:", "name", "captions", 3, "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "translate-toggle-box"], [1, "translate-toggle-label"], ["aria-labelledby", "translate-toggle-label", "name", "translationEnabled", 1, "translate-radio-box", 3, "ngModel", "ngModelChange"], [1, "translate-radio"], ["checked", "", 3, "value"], ["label", "Select Language:", "name", "translationLanguage", 3, "ngModel", "disabled", "ngModelChange"], [4, "ngFor", "ngForOf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-stylish-url", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("captionsListChange", function HomeComponent_Template_app_stylish_url_captionsListChange_2_listener($event) { return ctx.transcrypt.captionsList = $event; })("urlChange", function HomeComponent_Template_app_stylish_url_urlChange_2_listener($event) { return ctx.transcrypt.url = $event; })("input", function HomeComponent_Template_app_stylish_url_input_2_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_app_stylish_select_3_Template, 2, 4, "app-stylish-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 10, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_app_stylish_select_5_Template, 2, 4, "app-stylish-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.submit(ctx.transcrypt); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get Transcript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("captionsList", ctx.transcrypt.captionsList)("url", ctx.transcrypt.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transcrypt.captionsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transcrypt.captions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transcrypt.translation.enabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.transcrypt.captions)("@enterLeaveAnimation", undefined);
    } }, directives: [_stylish_url_stylish_url_component__WEBPACK_IMPORTED_MODULE_3__["StylishUrlComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _stylish_select_stylish_select_component__WEBPACK_IMPORTED_MODULE_5__["StylishSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"]], styles: [".form-container[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  padding: 0 50px;\n  height: 100%;\n  width: 100%;\n}\n\n.flex-padding[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  transition: flex 0.3s ease-in-out;\n}\n\napp-stylish-url[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 25px;\n}\n\napp-stylish-select[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  flex: 0;\n}\n\n.translate-toggle-box[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  flex: 0;\n  margin-bottom: 25px;\n}\n\n.translate-radio-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.translate-toggle-box[_ngcontent-%COMP%]   .translate-toggle-label[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.translate-radio-box[_ngcontent-%COMP%]   .translate-radio[_ngcontent-%COMP%] {\n  margin-right: 25px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.translate-radio-box[_ngcontent-%COMP%]   .translate-radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-right: 5px;\n}\n\n.translate-radio-box[_ngcontent-%COMP%]   .translate-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  margin-bottom: 1px;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  width: auto;\n  border-radius: 25px;\n  border: none;\n  outline: none;\n  background-color: var(--font-accent);\n  color: white;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-weight: 500;\n  transition: all ease-in-out 0.4s;\n  font-family: var(--font-family);\n  font-size: 1em;\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #9a1313;\n}\n\n.submit-button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.1);\n  color: rgba(0, 0, 0, 0.5);\n  display: none;\n}\n\n.submit-button[_ngcontent-%COMP%]:disabled:hover {\n  cursor: default;\n}\n\n\n\n@media only screen and (max-width: 500px) {\n  .form-container[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n\n  .translate-toggle-box[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n\n  .translate-toggle-box[_ngcontent-%COMP%]   .translate-toggle-label[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 15px;\n  }\n\n  .translate-radio-box[_ngcontent-%COMP%]   .translate-radio[_ngcontent-%COMP%]:last-child {\n    margin-right: 0;\n  }\n\n  .translate-select-box[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n}\n\n\n\n@media only screen and (min-width: 1440px) {\n  .form-container[_ngcontent-%COMP%] {\n    width: 75%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBLDhCQUFBOztBQUNBO0VBQ0U7SUFDRSxlQUFBO0VBRUY7O0VBQ0E7SUFDRSxpQ0FBQTtFQUVGOztFQUNBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBRUY7O0VBQ0E7SUFDRSxlQUFBO0VBRUY7O0VBQ0E7SUFDRSxpQ0FBQTtFQUVGO0FBQ0Y7O0FBQ0Esd0NBQUE7O0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleC1wYWRkaW5nIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHRyYW5zaXRpb246IGZsZXggMC4zcyBlYXNlLWluLW91dDtcbn1cblxuYXBwLXN0eWxpc2gtdXJsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5hcHAtc3R5bGlzaC1zZWxlY3Qge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmbGV4OiAwO1xufVxuXG4udHJhbnNsYXRlLXRvZ2dsZS1ib3gge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAwO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4udHJhbnNsYXRlLXJhZGlvLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50cmFuc2xhdGUtdG9nZ2xlLWJveCAudHJhbnNsYXRlLXRvZ2dsZS1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnRyYW5zbGF0ZS1yYWRpby1ib3ggLnRyYW5zbGF0ZS1yYWRpbyB7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRyYW5zbGF0ZS1yYWRpby1ib3ggLnRyYW5zbGF0ZS1yYWRpbyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRyYW5zbGF0ZS1yYWRpby1ib3ggLnRyYW5zbGF0ZS1yYWRpbyBpbnB1dCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1hY2NlbnQpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC40cztcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhMTMxMztcbn1cblxuLnN1Ym1pdC1idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdWJtaXQtYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKiBTTUFMTCBERVZJQ0VTIEFORCBNT0JJTEVTICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG5cbiAgLnRyYW5zbGF0ZS10b2dnbGUtYm94IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudHJhbnNsYXRlLXRvZ2dsZS1ib3ggLnRyYW5zbGF0ZS10b2dnbGUtbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgLnRyYW5zbGF0ZS1yYWRpby1ib3ggLnRyYW5zbGF0ZS1yYWRpbzpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAudHJhbnNsYXRlLXNlbGVjdC1ib3gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudCA7XG4gIH1cbn1cblxuLyogTEFSR0UgU0NSRUVOIERFVklDRVMsIGUuZy4gREVTS1RPUFMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterLeaveAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(50%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(50%)' })),
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterLeaveAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(50%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(50%)' })),
                        ]),
                    ]),
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ "kiQV");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "kiQV", 1);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the package verison

const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDD-tPF3CNoekbd9AEpq_BZjE66AtcsW0o',
        authDomain: 'transcript-app-290409.firebaseapp.com',
        databaseURL: 'https://transcript-app-290409.firebaseio.com',
        projectId: 'transcript-app-290409',
        storageBucket: 'transcript-app-290409.appspot.com',
        messagingSenderId: '153388996756',
        appId: '1:153388996756:web:08ac13df83b49a2eeb3c81',
        measurementId: 'G-C7XF9CKB3V',
    },
    useLocalFunctions: true,
    appVersion: _package_json__WEBPACK_IMPORTED_MODULE_0__["version"],
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

/***/ "BNeE":
/*!****************************************************!*\
  !*** ./src/app/disclaimer/disclaimer.component.ts ***!
  \****************************************************/
/*! exports provided: DisclaimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function() { return DisclaimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class DisclaimerComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    /**
     * Create a method to go to the previous page
     */
    goBack() {
        // Use location to go back one page
        this.location.back();
    }
}
DisclaimerComponent.ɵfac = function DisclaimerComponent_Factory(t) { return new (t || DisclaimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
DisclaimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisclaimerComponent, selectors: [["app-disclaimer"]], decls: 14, vars: 0, consts: [[1, "disclaimer"], [1, "disclaimer-message"], [1, "back-button"], [3, "click"], [1, "material-icons", "md-36"]], template: function DisclaimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The creator of this website is neither the owner of, nor affiliated with, the content of the transcripts generated within. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This website is not affiliated with the YouTube brand or any other Google Product.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisclaimerComponent_Template_a_click_10_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".disclaimer[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.disclaimer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.disclaimer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n  justify-content: center;\n}\n\n.disclaimer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.disclaimer[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n@media only screen and (max-width: 830px) {\n  .disclaimer[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY2xhaW1lci9kaXNjbGFpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kaXNjbGFpbWVyL2Rpc2NsYWltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzY2xhaW1lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXNjbGFpbWVyIC5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uZGlzY2xhaW1lciAuYmFjay1idXR0b24gYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaXNjbGFpbWVyIC5iYWNrLWJ1dHRvbiBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzY2xhaW1lciAuYmFjay1idXR0b24gYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzMHB4KSB7XG4gIC5kaXNjbGFpbWVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisclaimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-disclaimer',
                templateUrl: './disclaimer.component.html',
                styleUrls: ['./disclaimer.component.scss'],
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "J/JK":
/*!****************************************************!*\
  !*** ./src/app/transcript/transcript.component.ts ***!
  \****************************************************/
/*! exports provided: TranscriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranscriptComponent", function() { return TranscriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/compiler */ "1uSB");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-entities */ "wr9r");
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! docx */ "Sfth");
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(docx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _transcrypt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transcrypt.service */ "uDug");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");















function TranscriptComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TranscriptComponent_li_20_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.submit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.ready)("value", b_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](b_r4.name);
} }
function TranscriptComponent_mat_progress_spinner_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-spinner", 18);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx_r1.spinnerMode)("color", ctx_r1.spinnerColor)("diameter", ctx_r1.spinnerDiameter);
} }
function TranscriptComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.error);
} }
function TranscriptComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 21);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.transcript.html, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
// Lets create some classes to define instances of the HTML nodes
class TextNode extends _angular_compiler__WEBPACK_IMPORTED_MODULE_2__["Text"] {
    static [Symbol.hasInstance](obj) {
        // State that if it has the value property, it is a textnode
        if (obj.value) {
            return true;
        }
    }
}
// An HTML element node type
class ElementNode extends _angular_compiler__WEBPACK_IMPORTED_MODULE_2__["Element"] {
    static [Symbol.hasInstance](obj) {
        // State that if it has the children property, it is an element
        if (obj.children) {
            return true;
        }
    }
}
class TranscriptComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        // Create a transcrypt form object
        this.transcript = {
            videoId: null,
            videoTitle: null,
            timestamps: false,
            htmlWithTime: null,
            htmlNoTime: null,
            html: null,
        };
        // Create the button download options object
        this.downloadOptions = [
            { value: 'pdf', name: 'PDF' },
            { value: 'word', name: 'DOC' },
            { value: 'txt', name: 'TXT' },
        ];
        // Create a boolean to enable the form inputs
        this.ready = false;
        // Create a loading boolean for the spinner
        this.loading = true;
        // Create an error message variable
        this.error = null;
        // Create the variables for the material progress spinner
        this.spinnerMode = 'indeterminate';
        this.spinnerDiameter = 24;
        this.spinnerColor = 'accent';
        // Get the pdf fonts
        window.pdfMake.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__["pdfMake"].vfs;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Start the loading
            this.loading = true;
            // Get the current route so we can get the transcript data
            const url = this.router.parseUrl(this.router.url);
            // Get the URL encoded data for the transcript request
            const encodedBaseUrl = url.queryParams.data;
            const tlang = url.queryParams.tlang;
            // Get the other URL encoded data
            this.transcript.videoTitle = url.queryParams.title;
            // Decode the data query to get the videoId
            const data = atob(encodedBaseUrl);
            this.transcript.videoId = data.slice(data.indexOf('v=') + 2, data.indexOf('&', data.indexOf('v=')));
            try {
                // Fetch the transcript from the Transcrypt service
                const { transcriptNoTime, transcriptWithTime, } = yield this.service.getTranscript(encodedBaseUrl, tlang);
                // Set the transcript form data variables
                this.transcript.htmlWithTime = transcriptWithTime;
                this.transcript.htmlNoTime = transcriptNoTime;
                // Set the html transcript variable
                this.transcript.html = this.transcript.timestamps
                    ? this.transcript.htmlWithTime
                    : this.transcript.htmlNoTime;
                // Set the buttons to ready
                this.ready = true;
                // Stop loading
                this.loading = false;
            }
            catch (err) {
                // Stop the loading
                this.loading = false;
                // Get the error message
                const message = err.message;
                // Show the error
                this.error = message;
            }
        });
    }
    /**
     * Called when the timestamps model changes, updates the html transcript.
     */
    updateTranscript() {
        // Set the html transcript variable
        this.transcript.html = this.transcript.timestamps
            ? this.transcript.htmlWithTime
            : this.transcript.htmlNoTime;
    }
    /**
     * Submit the form to download the transcript as a file
     * @param event The button (click) event
     */
    submit(event) {
        // Use the event to get the value of the button
        const format = event.target.value;
        // Determine which download function to use based on the format
        switch (format) {
            case 'pdf':
                // Call the PDF downloader function
                return this.downloadPdfTranscript();
            case 'word':
                // Call the DOCX downloader function
                return this.downloadWordTranscript();
            case 'txt':
                // Call the TXT function
                return this.downloadTxtTranscript();
        }
    }
    /**
     * Download the transcript in a PDF format.
     */
    downloadPdfTranscript() {
        // Create a PDF document definition with the a title
        var doc = {
            content: [],
            defaultStyle: {
                fontSize: 11,
                color: '#000',
                alignment: 'justify',
            },
            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
                },
                subtitle: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center',
                    color: '#333',
                },
                red: {
                    color: '#e62117',
                },
            },
        };
        // Create a content array
        var content = [
            {
                text: 'Transcript for:',
                style: 'subtitle',
                margin: [0, 5, 0, 0],
            },
            {
                text: this.transcript.videoTitle,
                style: 'header',
                link: `https://www.youtube.com/watch?v=${this.transcript.videoId}`,
                margin: [0, 5, 0, 0],
            },
            {
                text: [
                    'Generated by ',
                    {
                        text: [
                            'transcr',
                            { text: 'y', style: 'red' },
                            'p',
                            { text: 't', style: 'red' },
                            '.app',
                        ],
                    },
                ],
                link: 'https://transcrypt.app',
                style: 'subtitle',
                margin: [0, 5, 0, 20],
            },
        ];
        // Get the HTML nodes
        const htmlNodes = this.parseHtmlTranscript(this.transcript.html);
        // We can now loop through all of the HTML <p> tags as lines
        htmlNodes.forEach((line) => {
            // Make sure that this line is an ElementNode
            if (line instanceof ElementNode) {
                // Create an output line object
                var out = { text: [] };
                // Get the children of the <p> tag line
                const nodes = line.children;
                // Loop through each of the nodes
                nodes.forEach((node) => {
                    if (node instanceof TextNode) {
                        // The node is just text, therefore we can add that to the array without styling
                        out.text.push(node.value);
                    }
                    else if (node instanceof ElementNode) {
                        // Determine the tag of the element
                        const tag = node.name;
                        // Create an bold and italics boolean
                        var bold = false;
                        var italics = false;
                        if (tag === 'b' || tag === 'strong') {
                            bold = true;
                        }
                        else if (tag === 'i' || tag === 'em') {
                            italics = true;
                        }
                        // Create an output object for this tag
                        var nodeOut = { text: [] };
                        // Check for the children of this node
                        const children = node.children;
                        if (children.length) {
                            // We need to loop through the children
                            children.forEach((child) => {
                                if (child instanceof TextNode) {
                                    // We can add the value to the text array
                                    nodeOut.text.push({
                                        text: child.value,
                                        bold,
                                        italics,
                                    });
                                }
                                else if (child instanceof ElementNode) {
                                    // We have to determine the tag
                                    const tag = child.name;
                                    if (tag === 'b' || tag === 'strong') {
                                        bold = true;
                                    }
                                    else if (tag === 'i' || tag === 'em') {
                                        italics = true;
                                    }
                                    // Create an output variable
                                    var childOut = { text: [] };
                                    // Get the next levels of children
                                    var subchildren = child.children;
                                    subchildren.forEach((sub) => {
                                        // Check for a text node
                                        if (sub instanceof TextNode) {
                                            // Add the value to the text array
                                            childOut.text.push({
                                                text: sub.value,
                                                bold,
                                                italics,
                                            });
                                        }
                                    });
                                    // Add the child object to the node out object
                                    nodeOut.text.push(childOut);
                                }
                            });
                        }
                        // Add the nodeOut varible to the doc
                        out.text.push(nodeOut);
                    }
                });
            }
            // Add the line to the document
            content.push(out);
        });
        // Put the content inside the document definitions
        doc.content = content;
        // Create a filename using the video title
        const title = this.transcript.videoTitle.replace(/\s/g, '-').slice(0, 15);
        const filename = `transcrypt-${title}.pdf`;
        // Save the pdf to download it
        return pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__["createPdf"](doc).download(filename);
    }
    /**
     * Download the transcript as a DOCX file.
     */
    downloadWordTranscript() {
        // Create the DOCX document
        const doc = new docx__WEBPACK_IMPORTED_MODULE_6__["Document"]({
            creator: 'transcrypt.app',
            description: `Transcript for the YouTube Video ${this.transcript.videoTitle}`,
            title: `${this.transcript.videoTitle}`,
            styles: {
                paragraphStyles: [
                    {
                        id: 'Normal',
                        name: 'Normal',
                        basedOn: 'Normal',
                        run: {
                            size: 22,
                            font: 'Calibri',
                        },
                    },
                    {
                        id: 'Heading1',
                        name: 'Heading 1',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            size: 36,
                            bold: true,
                        },
                        paragraph: {
                            alignment: docx__WEBPACK_IMPORTED_MODULE_6__["AlignmentType"].CENTER,
                        },
                    },
                    {
                        id: 'Heading2',
                        name: 'Heading 2',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            size: 24,
                            bold: true,
                        },
                        paragraph: {
                            alignment: docx__WEBPACK_IMPORTED_MODULE_6__["AlignmentType"].CENTER,
                        },
                    },
                    {
                        id: 'MainBody',
                        name: 'Body',
                        basedOn: 'Normal',
                        quickFormat: true,
                        run: {
                            size: 22,
                        },
                        paragraph: {
                            alignment: docx__WEBPACK_IMPORTED_MODULE_6__["AlignmentType"].LEFT,
                        },
                    },
                ],
            },
        });
        // Create the first subtitle
        const preTitle = new docx__WEBPACK_IMPORTED_MODULE_6__["Paragraph"]({
            text: 'Transcript for:',
            spacing: {
                before: 5,
            },
            heading: docx__WEBPACK_IMPORTED_MODULE_6__["HeadingLevel"].HEADING_2,
        });
        // Create a title paragraph
        const title = new docx__WEBPACK_IMPORTED_MODULE_6__["Paragraph"]({
            heading: docx__WEBPACK_IMPORTED_MODULE_6__["HeadingLevel"].HEADING_1,
            text: this.transcript.videoTitle,
        });
        // Create the subtitle
        const subTitle = new docx__WEBPACK_IMPORTED_MODULE_6__["Paragraph"]({
            children: [
                new docx__WEBPACK_IMPORTED_MODULE_6__["TextRun"]({
                    text: 'Generated by transcr',
                }),
                new docx__WEBPACK_IMPORTED_MODULE_6__["TextRun"]({
                    text: 'y',
                    color: '#e62117',
                }),
                new docx__WEBPACK_IMPORTED_MODULE_6__["TextRun"]({
                    text: 'p',
                }),
                new docx__WEBPACK_IMPORTED_MODULE_6__["TextRun"]({
                    text: 't',
                    color: 'e62117',
                }),
                new docx__WEBPACK_IMPORTED_MODULE_6__["TextRun"]({
                    text: '.app',
                }),
            ],
            spacing: {
                after: 100,
            },
            style: 'Heading2',
        });
        // Create an array of paragraphs
        var paragraphs = [];
        // Add the heading paragraphs to the array
        paragraphs.push(preTitle);
        paragraphs.push(title);
        paragraphs.push(subTitle);
        // Parse the html transcript and loop through each of the lines
        const html = this.parseHtmlTranscript(this.transcript.html);
        html.forEach((line) => {
            // Make sure that this is an element node
            if (line instanceof ElementNode) {
                // Create a new paragraph object
                const parg = new docx__WEBPACK_IMPORTED_MODULE_6__["Paragraph"]({
                    style: 'MainBody',
                });
                // Loop through the children of this element
                line.children.forEach((node) => {
                    // Determine if this is a text node or an element node
                    if (node instanceof TextNode) {
                        // Add the Text Run to the children array
                        parg.addChildElement(new docx__WEBPACK_IMPORTED_MODULE_6__["TextRun"]({
                            text: node.value,
                        }));
                    }
                    else if (node instanceof ElementNode) {
                        // Determine if this is bold or italic based on the tag name
                        var bold = false;
                        var italics = false;
                        if (node.name === 'b' || node.name === 'strong') {
                            // This is bold
                            bold = true;
                        }
                        else if (node.name === 'i' || node.name === 'em') {
                            // This is italic
                            italics = true;
                        }
                        // Determine if this node has children (it should)
                        const subchildren = node.children;
                        subchildren.forEach((sub) => {
                            // Determine the type of node
                            if (sub instanceof TextNode) {
                                // Add the Text Run to the children array
                                parg.addChildElement(new docx__WEBPACK_IMPORTED_MODULE_6__["TextRun"]({
                                    text: sub.value,
                                    bold,
                                    italics,
                                }));
                            }
                            else if (sub instanceof ElementNode) {
                                // Determine if this is bold or italic
                                if (sub.name === 'b' || sub.name === 'strong') {
                                    bold = true;
                                }
                                else if (sub.name === 'i' || sub.name === 'em') {
                                    italics = true;
                                }
                                // Get the children of this sub node and get the textnode
                                sub.children.forEach((subsub) => {
                                    if (subsub instanceof TextNode) {
                                        // Add the Text Run to the children array
                                        parg.addChildElement(new docx__WEBPACK_IMPORTED_MODULE_6__["TextRun"]({
                                            text: subsub.value,
                                            bold,
                                            italics,
                                        }));
                                    }
                                });
                            }
                        });
                    }
                });
                // Add the paragraph to the arrays
                paragraphs.push(parg);
            }
        });
        // Put the document together
        doc.addSection({
            children: paragraphs,
        });
        // Download the document
        docx__WEBPACK_IMPORTED_MODULE_6__["Packer"].toBlob(doc).then((blob) => {
            // Create a filename using the video title
            const title = this.transcript.videoTitle.replace(/\s/g, '-').slice(0, 15);
            const filename = `transcrypt-${title}.docx`;
            // Save to download it
            Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, filename);
        });
    }
    /**
     * Download the transcript as a TXT file.
     * @param timestamps true for timestamps needed, false for no timestamps
     */
    downloadTxtTranscript() {
        // Create an output string with a title
        var outputString = `Transcript for:\n${this.transcript.videoTitle}\nGenerated by https://transcrypt.app\n\n`;
        // Create an HTML entities decoder
        const htmlEntities = new html_entities__WEBPACK_IMPORTED_MODULE_5__["Html5Entities"]();
        // Loop through all of the <p> tags and remove all of the other HTML tags from the html.
        const lines = this.transcript.html.split('<p>');
        lines.forEach((line) => {
            // Remove the closing </p> tag
            line = line.slice(0, line.lastIndexOf('</p>'));
            // Decode the html entities
            line = htmlEntities.decode(line);
            // Remove all bold and italic tags
            line = line.replace(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/g, '');
            // Remove all of the line breaks
            line = line.replace(/\n|\n\r|\r/g, ' ');
            // Add to the output string with a line break
            outputString = `${outputString}${line}\n`;
        });
        // Convert the string to a blob and then save it with filesaver
        const blob = new Blob([outputString], { type: 'text/plain' });
        // Create a filename using the video title
        const title = this.transcript.videoTitle.replace(/\s/g, '-').slice(0, 15);
        const filename = `transcrypt-${title}.txt`;
        // Save to download it
        Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, filename);
    }
    /**
     * Parses the HTML transcript to a DOM tree object
     * @param html the HTML string
     */
    parseHtmlTranscript(html) {
        // Create an html entity decoder for special characters
        const htmlEntities = new html_entities__WEBPACK_IMPORTED_MODULE_5__["Html5Entities"]();
        // We can decode the transcript content so that all the special characters are human-readable
        var html = htmlEntities.decode(this.transcript.html);
        html = html.replace(/\n|\r|\r\n/gm, ' ');
        // We can now parse the html to get the DOM tree
        const htmlNodes = Object(_angular_compiler__WEBPACK_IMPORTED_MODULE_2__["parseTemplate"])(html, '', { preserveWhitespaces: false })
            .nodes;
        // Return the dom tree
        return htmlNodes;
    }
}
TranscriptComponent.ɵfac = function TranscriptComponent_Factory(t) { return new (t || TranscriptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_transcrypt_service__WEBPACK_IMPORTED_MODULE_8__["TranscryptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
TranscriptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TranscriptComponent, selectors: [["app-transcript"]], inputs: { ready: "ready", loading: "loading", error: "error", spinnerMode: "spinnerMode", spinnerDiameter: "spinnerDiameter", spinnerColor: "spinnerColor" }, decls: 25, vars: 6, consts: [[1, "transcript-container"], [1, "transcript-options"], [1, "transcript-option", "back-button"], ["routerLink", "/", "routerLinkActive", "true"], [1, "material-icons", "md-48"], [1, "transcript-option", "transcript-timestamp"], ["labelPosition", "before", 3, "ngModel", "disabled", "ngModelChange"], [1, "timestamp-label"], [1, "material-icons", "md-36"], [1, "transcript-option", "transcript-buttons"], [1, "download-label"], [1, "label"], [4, "ngFor", "ngForOf"], [1, "transcript-content"], [3, "mode", "color", "diameter", 4, "ngIf"], ["class", "transcript-error", 4, "ngIf"], ["class", "transcript-html", 3, "innerHTML", 4, "ngIf"], ["type", "submit", 3, "disabled", "value", "click"], [3, "mode", "color", "diameter"], [1, "transcript-error"], [1, "error-message"], [1, "transcript-html", 3, "innerHTML"]], template: function TranscriptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TranscriptComponent_Template_mat_checkbox_ngModelChange_8_listener($event) { return ctx.transcript.timestamps = $event; })("ngModelChange", function TranscriptComponent_Template_mat_checkbox_ngModelChange_8_listener() { return ctx.updateTranscript(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Show Timestamps:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "save_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Save as:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TranscriptComponent_li_20_Template, 3, 3, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, TranscriptComponent_mat_progress_spinner_22_Template, 1, 3, "mat-progress-spinner", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, TranscriptComponent_div_23_Template, 5, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, TranscriptComponent_div_24_Template, 1, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.transcript.timestamps)("disabled", !ctx.ready);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.downloadOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.transcript.html);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinner"]], styles: [".transcript-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  flex: 1;\n  justify-content: center;\n  position: relative;\n  transition: all 0.3s ease;\n}\n\n.transcript-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 80%;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n\n.transcript-option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-items: flex-start;\n}\n\n.transcript-options[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  transition: ease 0.3s;\n}\n\n.transcript-options[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.timestamp-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-family: var(--font-family);\n}\n\n.timestamp-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.transcript-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.transcript-buttons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  padding: 0;\n}\n\n.transcript-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n  border-radius: 25px;\n  border: none;\n  outline: none;\n  background-color: var(--font-main);\n  color: white;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-right: 5px;\n  font-weight: 500;\n  transition: all ease 0.3s;\n  font-family: var(--font-family);\n  font-size: 1em;\n}\n\n.transcript-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: var(--font-accent);\n}\n\n.transcript-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.transcript-buttons[_ngcontent-%COMP%]   .download-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-right: 10px;\n}\n\n.transcript-buttons[_ngcontent-%COMP%]   .download-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.transcript-content[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border: var(--font-main) solid 1px;\n  padding: 10px;\n  width: 80%;\n  position: relative;\n  flex: 1;\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.transcript-error[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-primary);\n}\n\n.transcript-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.transcript-html[_ngcontent-%COMP%] {\n  flex: 1;\n  justify-self: start;\n  align-self: start;\n}\n\n@media only screen and (max-width: 780px) {\n  .transcript-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-bottom: 0;\n  }\n\n  .transcript-option[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n\n  .transcript-content[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\n@media only screen and (max-width: 382px) {\n  .download-label[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .transcript-buttons[_ngcontent-%COMP%]   .download-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0 !important;\n  }\n\n  .transcript-error[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .transcript-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNjcmlwdC90cmFuc2NyaXB0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtBQUVGOztBQUNBO0VBQ0Usb0NBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxnQkFBQTtFQUVGOztFQUNBO0lBQ0UsbUJBQUE7RUFFRjs7RUFDQTtJQUNFLFVBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0VBQ0Y7O0VBRUE7SUFDRSwwQkFBQTtFQUNGOztFQUVBO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtFQUNGOztFQUVBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zY3JpcHQvdHJhbnNjcmlwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc2NyaXB0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi50cmFuc2NyaXB0LW9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi50cmFuc2NyaXB0LW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi50cmFuc2NyaXB0LW9wdGlvbnMgLmJhY2stYnV0dG9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGVhc2UgMC4zcztcbn1cblxuLnRyYW5zY3JpcHQtb3B0aW9ucyAuYmFjay1idXR0b24gYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi50aW1lc3RhbXAtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xufVxuXG4udGltZXN0YW1wLWxhYmVsIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRyYW5zY3JpcHQtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50cmFuc2NyaXB0LWJ1dHRvbnMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50cmFuc2NyaXB0LWJ1dHRvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1tYWluKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi50cmFuc2NyaXB0LWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWFjY2VudCk7XG59XG5cbi50cmFuc2NyaXB0LWJ1dHRvbnMgYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4udHJhbnNjcmlwdC1idXR0b25zIC5kb3dubG9hZC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRyYW5zY3JpcHQtYnV0dG9ucyAuZG93bmxvYWQtbGFiZWwgaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udHJhbnNjcmlwdC1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiB2YXIoLS1mb250LW1haW4pIHNvbGlkIDFweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50cmFuc2NyaXB0LWVycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi50cmFuc2NyaXB0LWVycm9yIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRyYW5zY3JpcHQtaHRtbCB7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC50cmFuc2NyaXB0LW9wdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC50cmFuc2NyaXB0LW9wdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIC50cmFuc2NyaXB0LWNvbnRlbnQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODJweCkge1xuICAuZG93bmxvYWQtbGFiZWwgLmxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRyYW5zY3JpcHQtYnV0dG9ucyAuZG93bmxvYWQtbGFiZWwgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudHJhbnNjcmlwdC1lcnJvciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudHJhbnNjcmlwdC1lcnJvciBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranscriptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-transcript',
                templateUrl: './transcript.component.html',
                styleUrls: ['./transcript.component.scss'],
            }]
    }], function () { return [{ type: _transcrypt_service__WEBPACK_IMPORTED_MODULE_8__["TranscryptService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, { ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], spinnerMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], spinnerDiameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], spinnerColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'TranscriptApp';
    }
    ngOnInit() {
        /*
        // Set the viewport wrapper to the window height
        const wrapper = document.getElementsByClassName('wrapper')[0];
        wrapper.setAttribute('style', `min-height:${window.innerHeight}px`);
    
        // Create a timeout for the resize window delay
        var timeoutId;
        var delay = 300; // 200ms
    
        // Make sure to update the height of the viewport on resizing
        window.addEventListener('resize', () => {
          // Clear the timeout
          clearTimeout(timeoutId);
    
          // Delay the resize function
          timeoutId = setTimeout(() => {
            // Set the new height
            wrapper.setAttribute('style', `min-height:${window.innerHeight}px`);
          }, delay);
        });
        */
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "wrapper"], [1, "header-wrapper"], [1, "content-wrapper"], [1, "footer-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "TgQ4":
/*!************************************************************!*\
  !*** ./src/app/stylish-select/stylish-select.component.ts ***!
  \************************************************************/
/*! exports provided: StylishSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylishSelectComponent", function() { return StylishSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = ["selectElement"];
const _c1 = ["*"];
class StylishSelectComponent {
    constructor() {
        // The disabled attribute
        this.disabled = false;
        // The methods for change and touched
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        // Get the underlying select element
        this.select = this.selectRef.nativeElement;
    }
    // The select's value
    get value() {
        return this.select.value;
    }
    writeValue(value) {
        // Change the value
        this.select.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        // Set the disabled variable
        this.disabled = isDisabled;
    }
    /**
     * The (input) called event
     * @param event the select element's called event
     */
    inputChange(event) {
        // Get the event target
        const target = event.target;
        // Get the value
        const value = target.value;
        // Get the parent container (the sylish-select-wrapper)
        const wrapper = target.parentNode;
        // Check if the value is non-null
        if (value !== '') {
            // Add the class 'notempty' to the select wrapper
            wrapper.classList.add('not-empty');
        }
        else {
            // Remove the 'notempty' class from the select wrapper
            wrapper.classList.remove('not-empty');
        }
    }
}
StylishSelectComponent.ɵfac = function StylishSelectComponent_Factory(t) { return new (t || StylishSelectComponent)(); };
StylishSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StylishSelectComponent, selectors: [["app-stylish-select"]], viewQuery: function StylishSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectRef = _t.first);
    } }, inputs: { label: "label", formControlName: "formControlName", name: "name", id: "id", disabled: "disabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => StylishSelectComponent),
                multi: true,
            },
        ])], ngContentSelectors: _c1, decls: 5, vars: 2, consts: [[1, "stylish-select-wrapper", 3, "click"], [1, "stylish-select", 3, "disabled", "input", "change", "blur"], ["selectElement", ""], ["value", "", "selected", ""]], template: function StylishSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StylishSelectComponent_Template_div_click_0_listener() { return ctx.select.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function StylishSelectComponent_Template_select_input_1_listener($event) { return ctx.inputChange($event); })("change", function StylishSelectComponent_Template_select_change_1_listener($event) { return ctx.onChange($event.target.value); })("blur", function StylishSelectComponent_Template_select_blur_1_listener($event) { return ctx.onTouched($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-label", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n.stylish-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  border: none;\n  background: none;\n  min-width: 200px;\n  padding-left: 20px;\n  padding-right: 40px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font: inherit;\n}\n\n.stylish-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.stylish-select[_ngcontent-%COMP%]:disabled {\n  display: hidden;\n}\n\n.stylish-select-wrapper[_ngcontent-%COMP%] {\n  --border-color: rgba(0, 0, 0, 0.5);\n  --focus-color: var(--color-primary);\n  --notempty-color: rgba(0, 0, 0, 0.8);\n  width: auto;\n  position: relative;\n  border-radius: 30px;\n  border: 1px var(--border-color) solid;\n}\n\n.stylish-select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  color: transparent;\n}\n\n.stylish-select-wrapper[_ngcontent-%COMP%]::before {\n  content: attr(data-label);\n  font: inherit;\n  font-size: var(--label-font-size);\n  color: var(--border-color);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 18px;\n  background-color: white;\n  z-index: 5;\n  pointer-events: none;\n  transition: all 0.2s ease-in-out;\n}\n\n.stylish-select-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--focus-color);\n}\n\n.not-empty[_ngcontent-%COMP%]::before, .stylish-select-wrapper[_ngcontent-%COMP%]:focus-within::before {\n  font-size: var(--label-font-size-small);\n  top: 0;\n  padding: 0 2px;\n}\n\n.stylish-select-wrapper[_ngcontent-%COMP%]:focus-within::before {\n  color: var(--focus-color);\n}\n\n.not-empty[_ngcontent-%COMP%]::before {\n  color: var(--notempty-color);\n}\n\n.not-empty[_ngcontent-%COMP%] {\n  border-color: var(--notempty-color);\n}\n\n.not-empty[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.stylish-select-wrapper[_ngcontent-%COMP%]::after {\n  content: url(\"/assets/svg/expand.svg\");\n  position: absolute;\n  background: transparent;\n  width: 12px;\n  height: 24px;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGlzaC1zZWxlY3Qvc3R5bGlzaC1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTs7RUFFRSx1Q0FBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3R5bGlzaC1zZWxlY3Qvc3R5bGlzaC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc3R5bGlzaC1zZWxlY3Qge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLnN0eWxpc2gtc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnN0eWxpc2gtc2VsZWN0OmRpc2FibGVkIHtcbiAgZGlzcGxheTogaGlkZGVuO1xufVxuXG4uc3R5bGlzaC1zZWxlY3Qtd3JhcHBlciB7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC0tZm9jdXMtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAtLW5vdGVtcHR5LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHZhcigtLWJvcmRlci1jb2xvcikgc29saWQ7XG59XG5cbi5zdHlsaXNoLXNlbGVjdC13cmFwcGVyIHNlbGVjdCB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnN0eWxpc2gtc2VsZWN0LXdyYXBwZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcbiAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnN0eWxpc2gtc2VsZWN0LXdyYXBwZXI6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mb2N1cy1jb2xvcik7XG59XG5cbi5ub3QtZW1wdHk6OmJlZm9yZSxcbi5zdHlsaXNoLXNlbGVjdC13cmFwcGVyOmZvY3VzLXdpdGhpbjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUtc21hbGwpO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuXG4uc3R5bGlzaC1zZWxlY3Qtd3JhcHBlcjpmb2N1cy13aXRoaW46OmJlZm9yZSB7XG4gIGNvbG9yOiB2YXIoLS1mb2N1cy1jb2xvcik7XG59XG5cbi5ub3QtZW1wdHk6OmJlZm9yZSB7XG4gIGNvbG9yOiB2YXIoLS1ub3RlbXB0eS1jb2xvcik7XG59XG5cbi5ub3QtZW1wdHkge1xuICBib3JkZXItY29sb3I6IHZhcigtLW5vdGVtcHR5LWNvbG9yKTtcbn1cblxuLm5vdC1lbXB0eSBzZWxlY3Qge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zdHlsaXNoLXNlbGVjdC13cmFwcGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvc3ZnL2V4cGFuZC5zdmdcIik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHRvcDogNTAlO1xuICByaWdodDogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StylishSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stylish-select',
                templateUrl: './stylish-select.component.html',
                styleUrls: ['./stylish-select.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => StylishSelectComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return []; }, { selectRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selectElement', { static: true }]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['label']
        }], formControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formControlName']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['name']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['id']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/functions */ "RgrY");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _stylish_select_stylish_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stylish-select/stylish-select.component */ "TgQ4");
/* harmony import */ var _stylish_url_stylish_url_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stylish-url/stylish-url.component */ "dPj6");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _transcript_transcript_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transcript/transcript.component */ "J/JK");
/* harmony import */ var _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./disclaimer/disclaimer.component */ "BNeE");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production,
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
            _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctionsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
        _transcript_transcript_component__WEBPACK_IMPORTED_MODULE_16__["TranscriptComponent"],
        _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_17__["DisclaimerComponent"],
        _stylish_select_stylish_select_component__WEBPACK_IMPORTED_MODULE_13__["StylishSelectComponent"],
        _stylish_url_stylish_url_component__WEBPACK_IMPORTED_MODULE_14__["StylishUrlComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctionsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
                    _transcript_transcript_component__WEBPACK_IMPORTED_MODULE_16__["TranscriptComponent"],
                    _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_17__["DisclaimerComponent"],
                    _stylish_select_stylish_select_component__WEBPACK_IMPORTED_MODULE_13__["StylishSelectComponent"],
                    _stylish_url_stylish_url_component__WEBPACK_IMPORTED_MODULE_14__["StylishUrlComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production,
                    }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                    _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctionsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ],
                exports: [],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "dPj6":
/*!******************************************************!*\
  !*** ./src/app/stylish-url/stylish-url.component.ts ***!
  \******************************************************/
/*! exports provided: StylishUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylishUrlComponent", function() { return StylishUrlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "cr+I");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _transcrypt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transcrypt.service */ "uDug");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");








const _c0 = ["urlInput"];
function StylishUrlComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StylishUrlComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StylishUrlComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx_r3.spinnerMode)("diameter", ctx_r3.spinnerDiameter)("color", ctx_r3.spinnerColor);
} }
function StylishUrlComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.error);
} }
class StylishUrlComponent {
    constructor(service) {
        this.service = service;
        // Variables for the material progress spinner
        this.spinnerColor = 'accent';
        this.spinnerMode = 'indeterminate';
        this.spinnerDiameter = 24;
        this.loading = false;
        this.captionsListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.urlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // The output event emitter for the input
        this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // The methods for change and touched
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        // Define the url input
        this.urlInput = this.urlInputRef.nativeElement;
    }
    /**
     * Set the url variable and emit it to the binding
     * @param url the url string
     * @returns void
     */
    setUrl(url) {
        this.url = url;
        this.urlChange.emit(url);
    }
    /**
     * Set the captionsList variable and emit it to the binding
     * @param list the captionsList
     * @returns void
     */
    setCaptionsList(list) {
        this.captionsList = list;
        this.captionsListChange.emit(list);
    }
    /**
     * Handle the input changes event from the url input
     * @param event the event from the object
     */
    inputChanged(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Send out an event that the input has changed to reset the form
            this.input.emit(true);
            // Remove the error
            this.error = null;
            // Remove the valid tick
            this.urlValid = false;
            // Set the url and captionsList to null
            this.setUrl(null);
            this.setCaptionsList(null);
            // Get the target of the event
            const target = event.target;
            // Get the value of the target
            const value = target.value;
            // Get the parent of the target
            const parent = target.parentNode;
            // Check the value
            if (!value || value === '') {
                // Remove the not-empty class from the parent
                parent.classList.remove('not-empty');
                // Return to stop further processing
                return;
            }
            // There is content in the input, add the not-empty class
            parent.classList.add('not-empty');
            try {
                // Call the URL validation method
                return yield this.validateUrl(value);
            }
            catch (err) {
                // Stop the loading animation
                this.loading = false;
                // Set the captionsList and url variable to null
                this.setCaptionsList(null);
                this.setUrl(null);
                // Get the error message
                const message = err.message;
                // Set the error message
                this.error = message;
                // Return the function
                return;
            }
        });
    }
    /**
     * Validate the inputted URL against the known URL types
     * @param url the URL as a string
     * @returns void
     * @throws an error with an error message
     */
    validateUrl(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Start the loading animation
            this.loading = true;
            // Test the URL against known YouTube URL schemas
            // Create an array of valid YouTube urls and protocols
            const httpProtocols = ['http', 'https'];
            const validUrls = ['www.youtube.com/watch', 'youtu.be/'];
            // Split the URL and get its protocol
            try {
                var urlSplit = url.split('://');
            }
            catch (_a) {
                // The URL is invalid since the '://' isn't included
                throw { message: 'The YouTube Video URL is invalid.' };
            }
            // Test the URL protocol
            const protocol = urlSplit[0];
            // Check that the protocol is defined
            if (!protocol) {
                // The URL is invalid
                throw { message: 'The YouTube Video URL is invalid.' };
            }
            try {
                if (!httpProtocols.includes(protocol)) {
                    // The URL is invalid
                    throw { message: 'The YouTube Video URL is invalid.' };
                }
            }
            catch (_b) {
                // The URL is invalid
                throw { message: 'The YouTube Video URL is invalid.' };
            }
            // Get the remaining part of the URL
            const remains = urlSplit[1];
            // Check that remains is defined
            if (!remains) {
                // The URL is invalid
                throw { message: 'The YouTube Video URL is invalid.' };
            }
            // Create a variable for videoId
            var videoId = '';
            // Check which URL is used
            if (remains.includes(validUrls[0])) {
                // Get the search query from the standard URL
                const query = remains.split('?')[1];
                // Decode the URL query and get the 'v' parameter for the videoId
                const decodedUrl = Object(query_string__WEBPACK_IMPORTED_MODULE_3__["parse"])(query);
                videoId = decodedUrl.v;
            }
            else if (remains.includes(validUrls[1])) {
                // This is the mobile/shortened URL, the videoId is the content after the slash
                videoId = remains.split('/')[1];
            }
            else {
                // The URL is invalid
                throw { message: 'The YouTube Video URL is invalid.' };
            }
            // Check that the videoId is defined
            if (!videoId) {
                // The URL is invalid
                throw { message: 'The YouTube Video URL is invalid.' };
            }
            // Check the length of the VideoId to make sure it is valid
            if (videoId.length !== 11) {
                // The videoId is invalid
                throw { message: 'The YouTube Video URL is invalid.' };
            }
            // Use the videoId to fetch the captions list object
            try {
                // Fetch the captionsList object
                var captionsList = yield this.service.getCaptionsList(videoId);
                // Stop the loading
                this.loading = false;
                // Set the url as valid
                this.urlValid = true;
                // Emit the url and the captionsList through the bindings
                this.setUrl(url);
                this.setCaptionsList(captionsList);
            }
            catch (err) {
                // Rethrow the error message
                throw err;
            }
        });
    }
    /**
     * The value getter for the underlying input
     */
    get value() {
        // Get the value of the input
        return this.urlInput.value;
    }
    /**
     * The value setter
     */
    set value(value) {
        // Set the input's value
        this.urlInput.value = value;
    }
    writeValue(obj) {
        // Write the value to the URL input
        this.urlInput.value = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        // Change the disabled state
        this.disabled = isDisabled;
    }
}
StylishUrlComponent.ɵfac = function StylishUrlComponent_Factory(t) { return new (t || StylishUrlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_transcrypt_service__WEBPACK_IMPORTED_MODULE_4__["TranscryptService"])); };
StylishUrlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StylishUrlComponent, selectors: [["app-stylish-url"]], viewQuery: function StylishUrlComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.urlInputRef = _t.first);
    } }, inputs: { disabled: "disabled", name: ["inputName", "name"], label: "label", spinnerColor: "spinnerColor", spinnerMode: "spinnerMode", spinnerDiameter: "spinnerDiameter", urlValid: "urlValid", error: "error", loading: "loading", captionsList: "captionsList", url: "url" }, outputs: { captionsListChange: "captionsListChange", urlChange: "urlChange", input: "input" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => StylishUrlComponent),
                multi: true,
            },
        ])], decls: 8, vars: 9, consts: [[1, "stylish-url-wrapper", 3, "click"], ["type", "url", 1, "stylish-url", 3, "disabled", "name", "input", "blur"], ["urlInput", ""], [1, "stylish-validation-wrapper"], ["class", "url-validator", 4, "ngIf"], ["class", "stylish-url-error", 4, "ngIf"], [1, "url-validator"], [1, "material-icons", "md-36"], [3, "mode", "diameter", "color"], [1, "stylish-url-error"]], template: function StylishUrlComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StylishUrlComponent_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function StylishUrlComponent_Template_input_input_1_listener($event) { return ctx.inputChanged($event); })("blur", function StylishUrlComponent_Template_input_blur_1_listener($event) { return ctx.onTouched($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StylishUrlComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, StylishUrlComponent_div_5_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, StylishUrlComponent_div_6_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StylishUrlComponent_div_7_Template, 4, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("valid", ctx.urlValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-label", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled)("name", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.urlValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinner"]], styles: [".stylish-url-wrapper[_ngcontent-%COMP%] {\n  --border-color: rgba(0, 0, 0, 0.5);\n  --focus-color: var(--color-primary);\n  --notempty-color: rgba(0, 0, 0, 0.8);\n  --valid-color: green;\n  width: 100%;\n  position: relative;\n  border: 1px var(--border-color) solid;\n  border-radius: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.stylish-url[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  border: none;\n  background: transparent;\n  border-radius: 30px;\n  padding: 20px;\n  font: inherit;\n  flex: 1 1 auto;\n  order: 1;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.stylish-url[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n\n\n.stylish-url[_ngcontent-%COMP%]:-webkit-autofill, .stylish-url[_ngcontent-%COMP%]:-webkit-autofill:hover, .stylish-url[_ngcontent-%COMP%]:-webkit-autofill:focus, .stylish-url[_ngcontent-%COMP%]:-webkit-autofill:active {\n  box-shadow: 0 0 0 30px white inset !important;\n}\n\n.stylish-validation-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 20px;\n  flex: 0;\n  flex-basis: 24px;\n  order: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n\n.stylish-url-wrapper[_ngcontent-%COMP%]::before {\n  display: block;\n  position: absolute;\n  content: attr(data-label);\n  font: inherit;\n  font-size: var(--label-font-size);\n  color: var(--border-color);\n  top: 50%;\n  transform: translateY(-50%);\n  left: 20px;\n  background-color: white;\n  z-index: 5;\n  pointer-events: none;\n  transition: all 0.2s ease-in-out;\n}\n\n.stylish-url-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--focus-color);\n}\n\n.not-empty[_ngcontent-%COMP%]::before, .stylish-url-wrapper[_ngcontent-%COMP%]:focus-within::before {\n  font-size: var(--label-font-size-small);\n  top: 0;\n  padding: 0 2px;\n}\n\n.stylish-url-wrapper[_ngcontent-%COMP%]:focus-within::before {\n  color: var(--focus-color);\n}\n\n.not-empty[_ngcontent-%COMP%]::before {\n  color: var(--notempty-color);\n}\n\n.not-empty[_ngcontent-%COMP%] {\n  border-color: var(--notempty-color);\n}\n\n.valid[_ngcontent-%COMP%]::before {\n  color: var(--valid-color) !important;\n}\n\n.valid[_ngcontent-%COMP%] {\n  border-color: var(--valid-color) !important;\n}\n\n.stylish-url-error[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  margin-top: 15px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9em;\n}\n\n.stylish-url-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGlzaC11cmwvc3R5bGlzaC11cmwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQSw2QkFBQTs7QUFDQTs7OztFQUtFLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTs7RUFFRSx1Q0FBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3R5bGlzaC11cmwvc3R5bGlzaC11cmwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGlzaC11cmwtd3JhcHBlciB7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC0tZm9jdXMtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAtLW5vdGVtcHR5LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIC0tdmFsaWQtY29sb3I6IGdyZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCB2YXIoLS1ib3JkZXItY29sb3IpIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3R5bGlzaC11cmwge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZmxleDogMSAxIGF1dG87XG4gIG9yZGVyOiAxO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc3R5bGlzaC11cmw6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBGaXggdGhlIGF1dG9maWxsIGNvbG91cnMgKi9cbi5zdHlsaXNoLXVybDotd2Via2l0LWF1dG9maWxsLFxuLnN0eWxpc2gtdXJsOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4uc3R5bGlzaC11cmw6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbi5zdHlsaXNoLXVybDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCB3aGl0ZSBpbnNldCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAzMHB4IHdoaXRlIGluc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5zdHlsaXNoLXZhbGlkYXRpb24td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmbGV4OiAwO1xuICBmbGV4LWJhc2lzOiAyNHB4O1xuICBvcmRlcjogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3R5bGlzaC11cmwtd3JhcHBlcjo6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xuICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnN0eWxpc2gtdXJsLXdyYXBwZXI6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mb2N1cy1jb2xvcik7XG59XG5cbi5ub3QtZW1wdHk6OmJlZm9yZSxcbi5zdHlsaXNoLXVybC13cmFwcGVyOmZvY3VzLXdpdGhpbjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUtc21hbGwpO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuXG4uc3R5bGlzaC11cmwtd3JhcHBlcjpmb2N1cy13aXRoaW46OmJlZm9yZSB7XG4gIGNvbG9yOiB2YXIoLS1mb2N1cy1jb2xvcik7XG59XG5cbi5ub3QtZW1wdHk6OmJlZm9yZSB7XG4gIGNvbG9yOiB2YXIoLS1ub3RlbXB0eS1jb2xvcik7XG59XG5cbi5ub3QtZW1wdHkge1xuICBib3JkZXItY29sb3I6IHZhcigtLW5vdGVtcHR5LWNvbG9yKTtcbn1cblxuLnZhbGlkOjpiZWZvcmUge1xuICBjb2xvcjogdmFyKC0tdmFsaWQtY29sb3IpICFpbXBvcnRhbnQ7XG59XG5cbi52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdmFsaWQtY29sb3IpICFpbXBvcnRhbnQ7XG59XG5cbi5zdHlsaXNoLXVybC1lcnJvciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uc3R5bGlzaC11cmwtZXJyb3IgaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StylishUrlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-stylish-url',
                templateUrl: './stylish-url.component.html',
                styleUrls: ['./stylish-url.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => StylishUrlComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return [{ type: _transcrypt_service__WEBPACK_IMPORTED_MODULE_4__["TranscryptService"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['disabled']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['inputName']
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['label']
        }], urlInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['urlInput', { static: true }]
        }], spinnerColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], spinnerMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], spinnerDiameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], urlValid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], captionsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['captionsList']
        }], captionsListChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['captionsListChange']
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['url']
        }], urlChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['urlChange']
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['input']
        }] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 0, consts: [[1, "header"], [1, "title"], ["routerLink", "/", "routerLinkActive", "active"], [1, "red"], [1, "description"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "transcr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Easily download the transcript to YouTube videos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 50px 0;\n  padding: 0 20px;\n}\n\n.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 600;\n  color: black;\n  text-decoration: none;\n  font-family: Poppins, Arial, Helvetica, sans-serif;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 1rem;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: var(--font-accent);\n}\n\n\n\n@media only screen and (min-width: 1440px) {\n  .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUEsd0NBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUFDRjs7RUFFQTtJQUNFLGlCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUwcHggMDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4udGl0bGUgYSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5yZWQge1xuICBjb2xvcjogdmFyKC0tZm9udC1hY2NlbnQpO1xufVxuXG4vKiBMQVJHRSBTQ1JFRU4gREVWSUNFUywgZS5nLiBERVNLVE9QUyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLnRpdGxlIGEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class FooterComponent {
    constructor() { }
    ngOnInit() {
        // Set the year in the copyright
        this.year = new Date(Date.now()).getFullYear();
        // Get and set the version
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appVersion;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { year: "year", version: "version" }, decls: 12, vars: 2, consts: [[1, "footer"], ["href", "http://jacobianmatthews.com", "target", "_blank", "rel", "noopener"], ["routerLink", "/disclaimer", "routerLinkActive", "true"], [1, "footer-version"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Jacob Ian Matthews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Version: ", ctx.version, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 15px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 15px 0;\n  padding: 0 20px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-right: 10px;\n  font-size: 0.8rem;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n  color: black;\n  text-decoration: none;\n  transition: all ease 0.3s;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n\n.footer[_ngcontent-%COMP%]   .footer-version[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(0, 0, 0, 0.5);\n  margin-top: -5px;\n}\n\n@media only screen and (max-width: 600px) {\n  .footer[_ngcontent-%COMP%] {\n    width: auto;\n    padding: 0 10px 10px 10px;\n    margin: 0;\n  }\n}\n\n\n\n@media only screen and (min-width: 1440px) {\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n\n  .footer[_ngcontent-%COMP%]   .footer-version[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxTQUFBO0VBQ0Y7QUFDRjs7QUFFQSx3Q0FBQTs7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUFBRjs7RUFHQTtJQUNFLGlCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZvb3RlciB1bCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmZvb3RlciB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5mb290ZXIgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmZvb3RlciB1bCBsaSBhIHtcbiAgZmxleDogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XG59XG5cbi5mb290ZXIgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmZvb3RlciAuZm9vdGVyLXZlcnNpb24ge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZm9vdGVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4vKiBMQVJHRSBTQ1JFRU4gREVWSUNFUywgZS5nLiBERVNLVE9QUyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmZvb3RlciB1bCBsaSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cblxuICAuZm9vdGVyIC5mb290ZXItdmVyc2lvbiB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return []; }, { year: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], version: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, repository, publishConfig, release, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"transcript-app\",\"version\":\"0.0.0-development\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"semantic-release\":\"semantic-release\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~10.1.2\",\"@angular/cdk\":\"^10.2.6\",\"@angular/common\":\"~10.1.2\",\"@angular/compiler\":\"~10.1.2\",\"@angular/core\":\"~10.1.2\",\"@angular/fire\":\"^6.0.2\",\"@angular/flex-layout\":\"^10.0.0-beta.32\",\"@angular/forms\":\"~10.1.2\",\"@angular/material\":\"^10.2.6\",\"@angular/platform-browser\":\"~10.1.2\",\"@angular/platform-browser-dynamic\":\"~10.1.2\",\"@angular/router\":\"~10.1.2\",\"@angular/service-worker\":\"~10.1.2\",\"docx\":\"^5.3.0\",\"file-saver\":\"^2.0.2\",\"firebase\":\"^7.23.0\",\"html-entities\":\"^1.3.1\",\"ngx-paypal\":\"^6.2.0\",\"pdfmake\":\"^0.1.68\",\"query-string\":\"^6.13.5\",\"rxjs\":\"~6.6.0\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/architect\":\">= 0.900 < 0.1100\",\"@angular-devkit/build-angular\":\"~0.1001.2\",\"@angular/cli\":\"~10.1.2\",\"@angular/compiler-cli\":\"~10.1.2\",\"@semantic-release/git\":\"^9.0.0\",\"@types/file-saver\":\"^2.0.1\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/jsonwebtoken\":\"^8.5.0\",\"@types/node\":\"^12.11.1\",\"@types/pdfmake\":\"^0.1.15\",\"@types/query-string\":\"^6.3.0\",\"codelyzer\":\"^6.0.0\",\"firebase-tools\":\"^8.0.0\",\"fuzzy\":\"^0.1.3\",\"inquirer\":\"^6.2.2\",\"inquirer-autocomplete-prompt\":\"^1.0.1\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.2\",\"karma-jasmine\":\"~4.0.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"last-release-git\":\"0.0.3\",\"open\":\"^7.0.3\",\"protractor\":\"~7.0.0\",\"semantic-release\":\"^17.2.2\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~4.0.2\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/jacob-ian/TranscryptApp.git\"},\"publishConfig\":{\"access\":\"restricted\"},\"release\":{\"getLastRelease\":\"last-release-git\",\"plugins\":[\"@semantic-release/commit-analyzer\",\"@semantic-release/release-notes-generator\",[\"@semantic-release/git\",{\"assets\":[\"dist/**/*.{js,css}\",\"docs\",\"package.json\"],\"message\":\"chore(release): ${nextRelease.version} [skip ci]\\n\\n${nextRelease.notes}\"}]]}}");

/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // Get the page requested
        this.page = this.router.url;
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], inputs: { page: "page" }, decls: 11, vars: 1, consts: [[1, "not-found"], [1, "not-found-message"], [1, "back-button"], ["routerLink", "/", "routerLinkActive", "true"], [1, "material-icons", "md-36"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The requested page '", ctx.page, "' doesn't exist.");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".not-found[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.not-found[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.back-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n  justify-content: center;\n}\n\n.back-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n@media only screen and (max-width: 830px) {\n  .not-found[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtZm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm90LWZvdW5kIC5iYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uYmFjay1idXR0b24gYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iYWNrLWJ1dHRvbiBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMwcHgpIHtcbiAgLm5vdC1mb3VuZCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "uDug":
/*!***************************************!*\
  !*** ./src/app/transcrypt.service.ts ***!
  \***************************************/
/*! exports provided: TranscryptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranscryptService", function() { return TranscryptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/functions */ "RgrY");




class TranscryptService {
    constructor(functions) {
        this.functions = functions;
    }
    /**
     * Fetches the list of captions and translation languages for a YouTube video.
     * @param videoId the YouTube video ID
     * @returns a CaptionsList object in a promise
     * @throws an error message
     */
    getCaptionsList(videoId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Define the Firebase cloud function for getting the list of captions
            var getCaptionsListFunc = this.functions.httpsCallable('getCaptionsList');
            try {
                // Call the Firebase function
                return yield getCaptionsListFunc({ videoId }).toPromise();
            }
            catch (err) {
                // Get the error message
                const error = err;
                // Rethrow the message
                throw { message: error.message };
            }
        });
    }
    /**
     * Fetches the requested transcript as HTML strings with and without timestamps.
     * @param encodedBaseUrl The urlencoded base URL of the captions track
     * @param tlang the translation language
     * @returns a TranscriptStrings object
     * @throws an error message in an object
     */
    getTranscript(encodedBaseUrl, tlang) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Fetch the caption track from the service method
            try {
                this.captionTrack = yield this.getCaptionTrack(encodedBaseUrl, tlang);
            }
            catch (err) {
                // Rethrow the error
                throw err;
            }
            // Format the caption track for with and without timestamps
            try {
                var transcriptWithTime = this.formatTranscript(true);
            }
            catch (err) {
                // Rethrow the error
                throw err;
            }
            try {
                var transcriptNoTime = this.formatTranscript(false);
            }
            catch (err) {
                // Rethrow the error
                throw err;
            }
            // Return the two HTML strings
            const output = {
                transcriptNoTime,
                transcriptWithTime,
            };
            return output;
        });
    }
    /**
     * Fetches the transcript from the requested captions track/
     * @param encodedBaseUrl the baseURL of the caption track provided by the CaptionsList
     * @param tlang the language code of the translation if required
     * @returns an object with the transcript.
     */
    getCaptionTrack(encodedBaseUrl, tlang) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Define the firebase function
            var getCaptionTrackFunc = this.functions.httpsCallable('getCaptionTrack');
            try {
                // Call the firebase function
                return yield getCaptionTrackFunc({
                    data: encodedBaseUrl,
                    tlang,
                }).toPromise();
            }
            catch (err) {
                // Get the error
                const error = err;
                // Rethrow the error message
                throw error.message;
            }
        });
    }
    /**
     * Format the transcript object into an HTML string
     * @param timestamps true if timestamps are enabled, false otherwise
     * @returns an HTML string
     * @throws an error { message }
     */
    formatTranscript(timestamps) {
        // Create an output line
        var outputHtml = '';
        // Check for timestamps
        if (timestamps) {
            // Get the length of the array
            const length = this.captionTrack.text.length;
            // Find the bigget value of time in the array to determine the timestamp format
            const maxTime = this.captionTrack.text[length - 1]['$'].start;
            // Check if there are any hours
            const maxHours = Math.floor(maxTime / 3600);
            // Create the time format depending on the time range
            var timeFormat = 'minutes';
            // Check if we are in the hours range
            if (maxHours !== 0) {
                timeFormat = 'hours';
            }
            // Iterate over the transcript array items
            this.captionTrack.text.forEach((line) => {
                // Convert the time to something useful
                const time = line['$'].start;
                // Depending on the time format required, create a timestamp
                if (timeFormat === 'minutes') {
                    // Calculate the number of minutes
                    var hours = '';
                    var minutes = `${Math.floor(time / 60)}:`;
                    var seconds = `${Math.floor(time % 60)}`;
                    if (minutes.length === 2) {
                        minutes = `0${minutes}`;
                    }
                    if (seconds.length === 1) {
                        seconds = `0${seconds}`;
                    }
                }
                else {
                    // Create a value to hold all the seconds
                    var allTime = time;
                    // Calculate the digits
                    var hours = `${Math.floor(allTime / 3600)}:`;
                    allTime %= 3600;
                    var minutes = `${Math.floor(allTime / 60)}:`;
                    var seconds = `${Math.floor(allTime % 60)}`;
                    // Create the strings
                    if (hours.length === 2) {
                        hours = `0${hours}`;
                    }
                    if (minutes.length === 2) {
                        minutes = `0${minutes}`;
                    }
                    if (seconds.length === 1) {
                        seconds = `0${seconds}`;
                    }
                }
                // Create the timestamp
                var stamp = `${hours}${minutes}${seconds}`;
                // Get the line
                outputHtml = `${outputHtml}<p><b>${stamp}: </b>${line['_']}</p>`;
            });
        }
        else {
            // Iterate over the transcript array items
            this.captionTrack.text.forEach((line) => {
                // Get the line
                outputHtml = `${outputHtml}<p>${line['_']}</p>`;
            });
        }
        // Return the output HTML string
        return outputHtml;
    }
}
TranscryptService.ɵfac = function TranscryptService_Factory(t) { return new (t || TranscryptService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_functions__WEBPACK_IMPORTED_MODULE_2__["AngularFireFunctions"])); };
TranscryptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TranscryptService, factory: TranscryptService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranscryptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_2__["AngularFireFunctions"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _transcript_transcript_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transcript/transcript.component */ "J/JK");
/* harmony import */ var _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disclaimer/disclaimer.component */ "BNeE");


// Import the components for routing






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'transcript', component: _transcript_transcript_component__WEBPACK_IMPORTED_MODULE_4__["TranscriptComponent"] },
    { path: 'disclaimer', component: _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__["DisclaimerComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map