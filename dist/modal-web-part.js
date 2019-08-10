define("5ed47994-f976-400e-8b89-4dfa6d19be50_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-webpart-base","@microsoft/sp-property-pane","ModalWebPartStrings","@microsoft/sp-loader"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_webpart_base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_webpart_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_webpart_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_property_pane__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_property_pane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__microsoft_sp_property_pane__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ModalWebPartStrings__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ModalWebPartStrings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ModalWebPartStrings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__microsoft_sp_loader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__microsoft_sp_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__microsoft_sp_loader__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ModalWebPart = /** @class */ (function (_super) {
    __extends(ModalWebPart, _super);
    function ModalWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalWebPart.prototype.render = function () {
        var cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
        __WEBPACK_IMPORTED_MODULE_4__microsoft_sp_loader__["SPComponentLoader"].loadCss(cssURL);
        var faCSSURL = "node_modules/@fortawesome/fontawesome-free/css/all.css";
        __WEBPACK_IMPORTED_MODULE_4__microsoft_sp_loader__["SPComponentLoader"].loadCss(faCSSURL);
        this.domElement.innerHTML = "\n        <button type=\"button\" className=\"btn btn-info btn-lg\" onclick=\"window.open('', 'MsgWindow', 'width=200,height=100');\">Open Window</button>\n\n        <i class=\"fa fa-envelope\"></i>\n\n        <!-- Button trigger modal -->\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n          Launch demo modal\n        </button>\n\n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                ...\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n          </div>\n        </div>\n";
    };
    Object.defineProperty(ModalWebPart.prototype, "dataVersion", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ModalWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: __WEBPACK_IMPORTED_MODULE_3_ModalWebPartStrings__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: __WEBPACK_IMPORTED_MODULE_3_ModalWebPartStrings__["BasicGroupName"],
                            groupFields: [
                                Object(__WEBPACK_IMPORTED_MODULE_2__microsoft_sp_property_pane__["PropertyPaneTextField"])('description', {
                                    label: __WEBPACK_IMPORTED_MODULE_3_ModalWebPartStrings__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ModalWebPart;
}(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_webpart_base__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (ModalWebPart);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ])});;
//# sourceMappingURL=modal-web-part.js.map