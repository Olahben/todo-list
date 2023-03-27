/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n}\n\n#content {\n    display: grid;\n    grid-template-areas: \n    \"sidebar content\"\n    \"sidebar content\";\n    grid-template-columns: 24vw 76vw;\n    grid-template-rows: 15vh 85vh;\n}\n\n#sidebar {\n    grid-area: sidebar;\n    background-color: #323232;\n    color: white;\n    font-family: 'Teko', 'sans-serif';\n    font-size: 140%;\n}\n\n#workspace {\n    grid-area: content;\n\n    display: grid;\n    place-items: center;\n}\n\n.add-to-do {\n    border: 1px solid white;\n    border-radius: 5px;\n\n    background-color: #14FFEC;\n\n    width: min(140px, 25%);\n    height: 5%;\n\n    font-family: 'Teko', 'sans-serif';\n    font-size: 100%;\n    color: white;\n    font-weight: 600;\n}\n\nbutton {\n    font-family: 'Teko', 'sans-serif';\n    font-size: 100%;\n    color: white;\n    font-weight: 600;\n    border: 1px solid white;\n    border-radius: 5px;\n\n    background-color: #0D7377;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 30%;\n    right: 35%;\n    top: 25%;\n\n    width: 60%;\n    height: 50%;\n\n    background-color: #323232;\n    border-radius: 6px;\n}\n\nform {\n    height: 100%;\n\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 30% 30% 30% 10%;\n    grid-template-areas: \n    'title description'\n    'Due-date priority'\n    'project project'\n    'submit submit';\n\n    justify-content: center;\n}\n\n.title {\n    grid-area: title;\n}\n\n.descr {\n    grid-area: description;\n}\n\n.due-date {\n    grid-area: Due-date;\n}\n\n.priority {\n    grid-area: priority;\n}\n\n.project {\n    grid-area: project;\n}\n\n.submit {\n    border: 0px solid white;\n    border-radius: 5px;\n    background-color: #14FFEC;\n\n    font-family: 'Teko', 'sans-serif';\n    font-size: 100%;\n    color: white;\n    font-weight: 600;\n\n    grid-area: submit;\n\n    width: 15%;\n    height: 70%;\n    margin-left: 42.5%;\n    margin-right: 42.5%;\n}\n\n.submit:hover {\n    font-weight: 700;\n    border: 1px solid white;\n}\n\n.form-element {\n    color: white;\n    font-family: 'Teko', 'Sans-serif';\n    font-size: 150%;\n    font-weight: 600;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\ninput {\n    border-radius: 5px;\n    border: 0px solid white;\n    outline: none;\n    \n    font-size: 65%;\n    font-family: 'Teko', 'Sans-serif';\n    font-weight: 500;\n\n    width: 30%;\n}\n\ninput:hover, input:focus {\n    border: 1px solid #14FFEC;\n}\n\n.sub-menu {\n    display: none;\n}\n\n.showMenu .sub-menu {\n    display: block;\n}\n\n.project-sidebar {\n    padding-left: 15%;\n}\n\n ul {\n    margin: 0px;\n    padding: 0;\n }\n\n li {\n    list-style-type: none;\n }\n\n .to-do-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #0D7377;\n    color: white;\n    font-family: 'Teko', 'sans-serif';\n    border-radius: 5%;\n    font-size: 105%;\n    gap: 10px;\n    margin: 10px;\n    padding-top: 5px;\n }\n .to-do-card span:nth-child(1) {\n    font-size: 150%;\n }\n\n .to-do-card input[readonly='readonly'] {\n    border: 0px solid white;\n }\n\n .to-do-card input {\n    width: 80%;\n    font-size: 105%;\n    font-family: 'Teko';\n    text-align: center;\n    color: white;\n    border: 1px solid white;\n    background-color: #0D7377;\n }\n\n\n .to-do-card input:nth-child(3), .to-do-card input:nth-child(4) {\n    display: none;\n }\n\n .project-to-dos {\n    width: 100%;\n    height: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 6%;\n }\n\n .settings {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n }\n\n .red-btn {\n    background-color: rgb(187, 51, 51);\n    font-size: 135%;\n    width: max(150px, 15%);\n    height: 38%;\n }\n\n .bx {\n    margin-right: 10px;\n }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb;;qBAEiB;IACjB,gCAAgC;IAChC,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;;IAElB,yBAAyB;;IAEzB,sBAAsB;IACtB,UAAU;;IAEV,iCAAiC;IACjC,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;;IAElB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,SAAS;IACT,UAAU;IACV,QAAQ;;IAER,UAAU;IACV,WAAW;;IAEX,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,YAAY;;IAEZ,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC;;;;mBAIe;;IAEf,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,yBAAyB;;IAEzB,iCAAiC;IACjC,eAAe;IACf,YAAY;IACZ,gBAAgB;;IAEhB,iBAAiB;;IAEjB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,eAAe;IACf,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;;IAEb,cAAc;IACd,iCAAiC;IACjC,gBAAgB;;IAEhB,UAAU;AACd;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;AACrB;;CAEC;IACG,WAAW;IACX,UAAU;CACb;;CAEA;IACG,qBAAqB;CACxB;;CAEA;IACG,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,iCAAiC;IACjC,iBAAiB;IACjB,eAAe;IACf,SAAS;IACT,YAAY;IACZ,gBAAgB;CACnB;CACA;IACG,eAAe;CAClB;;CAEA;IACG,uBAAuB;CAC1B;;CAEA;IACG,UAAU;IACV,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,yBAAyB;CAC5B;;;CAGA;IACG,aAAa;CAChB;;CAEA;IACG,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,4DAA4D;IAC5D,yDAAyD;IACzD,OAAO;CACV;;CAEA;IACG,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;CACtB;;CAEA;IACG,kCAAkC;IAClC,eAAe;IACf,sBAAsB;IACtB,WAAW;CACd;;CAEA;IACG,kBAAkB;CACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap');\n\nbody {\n    margin: 0;\n}\n\n#content {\n    display: grid;\n    grid-template-areas: \n    \"sidebar content\"\n    \"sidebar content\";\n    grid-template-columns: 24vw 76vw;\n    grid-template-rows: 15vh 85vh;\n}\n\n#sidebar {\n    grid-area: sidebar;\n    background-color: #323232;\n    color: white;\n    font-family: 'Teko', 'sans-serif';\n    font-size: 140%;\n}\n\n#workspace {\n    grid-area: content;\n\n    display: grid;\n    place-items: center;\n}\n\n.add-to-do {\n    border: 1px solid white;\n    border-radius: 5px;\n\n    background-color: #14FFEC;\n\n    width: min(140px, 25%);\n    height: 5%;\n\n    font-family: 'Teko', 'sans-serif';\n    font-size: 100%;\n    color: white;\n    font-weight: 600;\n}\n\nbutton {\n    font-family: 'Teko', 'sans-serif';\n    font-size: 100%;\n    color: white;\n    font-weight: 600;\n    border: 1px solid white;\n    border-radius: 5px;\n\n    background-color: #0D7377;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 30%;\n    right: 35%;\n    top: 25%;\n\n    width: 60%;\n    height: 50%;\n\n    background-color: #323232;\n    border-radius: 6px;\n}\n\nform {\n    height: 100%;\n\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 30% 30% 30% 10%;\n    grid-template-areas: \n    'title description'\n    'Due-date priority'\n    'project project'\n    'submit submit';\n\n    justify-content: center;\n}\n\n.title {\n    grid-area: title;\n}\n\n.descr {\n    grid-area: description;\n}\n\n.due-date {\n    grid-area: Due-date;\n}\n\n.priority {\n    grid-area: priority;\n}\n\n.project {\n    grid-area: project;\n}\n\n.submit {\n    border: 0px solid white;\n    border-radius: 5px;\n    background-color: #14FFEC;\n\n    font-family: 'Teko', 'sans-serif';\n    font-size: 100%;\n    color: white;\n    font-weight: 600;\n\n    grid-area: submit;\n\n    width: 15%;\n    height: 70%;\n    margin-left: 42.5%;\n    margin-right: 42.5%;\n}\n\n.submit:hover {\n    font-weight: 700;\n    border: 1px solid white;\n}\n\n.form-element {\n    color: white;\n    font-family: 'Teko', 'Sans-serif';\n    font-size: 150%;\n    font-weight: 600;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\ninput {\n    border-radius: 5px;\n    border: 0px solid white;\n    outline: none;\n    \n    font-size: 65%;\n    font-family: 'Teko', 'Sans-serif';\n    font-weight: 500;\n\n    width: 30%;\n}\n\ninput:hover, input:focus {\n    border: 1px solid #14FFEC;\n}\n\n.sub-menu {\n    display: none;\n}\n\n.showMenu .sub-menu {\n    display: block;\n}\n\n.project-sidebar {\n    padding-left: 15%;\n}\n\n ul {\n    margin: 0px;\n    padding: 0;\n }\n\n li {\n    list-style-type: none;\n }\n\n .to-do-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #0D7377;\n    color: white;\n    font-family: 'Teko', 'sans-serif';\n    border-radius: 5%;\n    font-size: 105%;\n    gap: 10px;\n    margin: 10px;\n    padding-top: 5px;\n }\n .to-do-card span:nth-child(1) {\n    font-size: 150%;\n }\n\n .to-do-card input[readonly='readonly'] {\n    border: 0px solid white;\n }\n\n .to-do-card input {\n    width: 80%;\n    font-size: 105%;\n    font-family: 'Teko';\n    text-align: center;\n    color: white;\n    border: 1px solid white;\n    background-color: #0D7377;\n }\n\n\n .to-do-card input:nth-child(3), .to-do-card input:nth-child(4) {\n    display: none;\n }\n\n .project-to-dos {\n    width: 100%;\n    height: 100%;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 6%;\n }\n\n .settings {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n }\n\n .red-btn {\n    background-color: rgb(187, 51, 51);\n    font-size: 135%;\n    width: max(150px, 15%);\n    height: 38%;\n }\n\n .bx {\n    margin-right: 10px;\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDO */ "./src/modules/toDO.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modules/modal.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");




const UI = (() => {
  const module = {};
  const projectArr = [];
  let projectVisible = false;
  module.createToDo = () => {};

  module.addEventListenerToBtn = () => {
    document.querySelector('.add-to-do').addEventListener('click', () => {
      _modal__WEBPACK_IMPORTED_MODULE_1__["default"].module.loadModal();
      const modalForm = document.querySelector('.modal');
      modalForm.style.display = 'block';

      document.querySelector('.submit').addEventListener('click', (event) => {
        _modal__WEBPACK_IMPORTED_MODULE_1__["default"].module.getFormInfo();
        _modal__WEBPACK_IMPORTED_MODULE_1__["default"].module.validateForm(event);
      });
    });
  };

  module.createProject = (title) => {
    const workspace = document.querySelector('#workspace');
    const projectTitle = title.replace(/\s/g, '');
    const projectTitleElements = document.querySelectorAll(`.${projectTitle}`);
    if (projectTitleElements.length > 0) {
      return;
    }
    let invalid = false;
    projectArr.forEach((proj) => {
      if (proj === projectTitle) {
        invalid = true;
        return 1;
      }
    });

    if (invalid) {
      return 1;
    }

    projectArr.push(title);

    const sidebar = document.querySelector('#sidebar');
    const project = document.createElement('div');
    project.classList.add(projectTitle);
    project.classList.add('project-sidebar');
    project.innerHTML = `
    <i class='bx bx-up-arrow-alt'></i>
    <span>${projectTitle}</span>
    <ul class="sub-menu ${projectTitle}"></ul>`;
    const arrow = project.children[0];
    arrow.transformed = false;
    arrow.addEventListener('click', (event) => {
      let stopProcess = false;
      const workspaceChildren = workspace.childNodes;
      workspaceChildren.forEach((child) => {
        if (child.textContent === 'Create ToDo' || event.target.transformed) {
          stopProcess = true;
        }
      });
      if (!stopProcess) {
        return;
      }
      module.toggleSidebarDropdown(event);
      _toDO__WEBPACK_IMPORTED_MODULE_0__["default"].module.checkToDoProj(
        event.target.parentElement.children[1].textContent,
      );
      module.removeWorkspaceContent(arrow);
      module.arrowTransformation(arrow);
      module.checkWorkspaceContent();
    });

    sidebar.append(project);
  };

  module.checkWorkspaceContent = () => {
    const workspace = document.querySelector('#workspace');
    if (workspace.children[0].textContent === 'Create ToDo' && workspace.children[1].textContent === 'Create ToDo') {
      workspace.children[0].remove();
    }
    if (workspace.children[0].textContent === 'Create ToDo' && workspace.children[1].textContent === 'Close project') {
      workspace.children[0].remove();
    }
  };

  module.arrowTransformation = (arrow) => {
    if (arrow.transformed) {
      arrow.style.transform = '';
      arrow.transformed = false;
      return 1;
    }
    arrow.style.transform = 'rotate(180deg)';
    arrow.transformed = true;
  };

  module.appendToDo = (title, project) => {
    const toDoTitle = title.replace(/\s/g, '');
    const toDoLi = document.createElement('li');
    toDoLi.innerHTML = `
    ${toDoTitle}`;
    project.append(toDoLi);
  };

  module.toggleSidebarDropdown = (event) => {
    event.target.parentElement.classList.toggle('showMenu');
  };

  module.removeWorkspaceContent = (arrow) => {
    const workspace = document.querySelector('#workspace');
    if (!arrow.transformed) {
      workspace.children[0].remove();
    }
    if (arrow.transformed) {
      module.closeProject();
    }
  };

  module.showCardDetails = (event) => {
    const toDoCardChildren = event.target.parentElement.children;
    toDoCardChildren.item(2).style.display = 'inline';
    toDoCardChildren.item(3).style.display = 'inline';
    toDoCardChildren.item(4).style.display = 'none';
  };

  module.closeProject = () => {
    const settings = document.querySelector('.settings');
    const projectToDosContainer = settings.nextSibling;
    const workspace = document.querySelector('#workspace');
    settings.remove();
    projectToDosContainer.remove();
    workspace.style.cssText -= `
    grid-template-columns: 12%;
    `;
    const createToDo = document.createElement('button');
    createToDo.classList.add('add-to-do');
    createToDo.textContent = 'Create ToDo';
    workspace.append(createToDo);
    module.addEventListenerToBtn();
    projectVisible = false;
  };

  let indexCounter = 0;
  module.deleteToDo = (event) => {
    indexCounter = 0;
    // event.target.parentElement.remove();
    const toDoTitle = event.target.parentElement.childNodes[0].value;
    const toDoProj = event.target.parentElement.proj;
    const toDoTasks = document.querySelectorAll(`.${toDoProj} .sub-menu li`);
    toDoTasks.forEach((task) => {
      if (task.textContent.replace(/\s/g, '') === toDoTitle) {
        task.remove();
      }
    });

    const { toDoArr } = _toDO__WEBPACK_IMPORTED_MODULE_0__["default"].module;
    toDoArr.forEach((toDoObj) => {
      indexCounter++;
      if (toDoObj.title === toDoTitle && toDoObj.proj === toDoProj) {
        toDoArr.splice(indexCounter - 1, 1);
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().module.storeToDo();
      }
    });
    event.target.parentElement.remove();
  };

  module.getCardInputs = (event) => {
    const submitChangesBtn = event.target;
    const title =
      submitChangesBtn.previousSibling.previousSibling.previousSibling
        .previousSibling.previousSibling.previousSibling;
    const date =
      submitChangesBtn.previousSibling.previousSibling.previousSibling
        .previousSibling.previousSibling;
    const descr =
      submitChangesBtn.previousSibling.previousSibling.previousSibling
        .previousSibling;
    const priority =
      submitChangesBtn.previousSibling.previousSibling.previousSibling;
    return {
      title,
      date,
      descr,
      priority,
    };
  };

  module.submitCardChanges = (event) => {
    const submitChangesBtn = event.target;
    const inputArr = [];
    const { title } = module.getCardInputs(event);
    const { date } = module.getCardInputs(event);
    const { descr } = module.getCardInputs(event);
    const { priority } = module.getCardInputs(event);
    inputArr.push(title, date, descr, priority);

    inputArr.forEach((input) => {
      input.setAttribute('readonly', 'readonly');
    });
    _toDO__WEBPACK_IMPORTED_MODULE_0__["default"].module.toDoArr.forEach((toDoTask) => {
      if (
        toDoTask.title === submitChangesBtn.parentElement.title &&
        toDoTask.proj === submitChangesBtn.parentElement.proj
      ) {
        toDoTask.title = title.value;
        toDoTask.date = date.value;
        toDoTask.descr = descr.value;
        toDoTask.prio = priority.value;
        submitChangesBtn.parentElement.title = title.value;
      }
    });
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().module.storeToDo();
  };

  module.resetCardInputs = (event) => {
    const { title } = module.getCardInputs(event);
    title.style.border = '0px solid white';
    const { date } = module.getCardInputs(event);
    date.style.border = '0px solid white';
    const { descr } = module.getCardInputs(event);
    descr.style.border = '0px solid white';
    const { priority } = module.getCardInputs(event);
    priority.style.border = '0px solid white';
  };

  module.validateCardChanges = (event) => {
    module.resetCardInputs(event);
    const { title } = module.getCardInputs(event);
    const { date } = module.getCardInputs(event);
    const { descr } = module.getCardInputs(event);
    const { priority } = module.getCardInputs(event);

    if (title.value.length < 2) {
      title.style.border = 'solid 1px red';
      return 1;
    }
    if (title.value.length > 24) {
      title.style.border = 'solid 1px red';
      return 1;
    }
    if (descr.value.length > 70) {
      descr.style.border = 'solid 1px red';
      return 1;
    }
    if (date.value === '') {
      date.style.border = 'solid 1px red';
      return 1;
    }
    if (priority.value.length < 1) {
      priority.style.border = 'solid 1px red';
      return 1;
    }
    if (priority.value.length > 30) {
      priority.style.border = 'solid 1px red';
      return 1;
    }
    module.submitCardChanges(event);
  };

  module.makeCardInfoEditable = (event) => {
    event.target.removeAttribute('readonly');
  };

  module.appendProjectElements = (arr) => {
    if (projectVisible) {
      return 1;
    }
    const workspace = document.querySelector('#workspace');
    const projectToDosContainer = document.createElement('div');
    projectToDosContainer.classList.add('project-to-dos');
    const projectSettings = document.createElement('div');
    projectSettings.classList.add('settings');
    const close = document.createElement('button');
    close.textContent = 'Close project';
    close.classList.add('red-btn');
    close.addEventListener('click', () => {
      module.closeProject();
    });
    projectSettings.append(close);

    arr.forEach((toDoTask) => {
      const card = document.createElement('div');
      card.classList.add('to-do-card');
      const toDoTitle = toDoTask.title.replace(/\s/g, '');
      card.classList.add(`${toDoTitle}-card`);
      const cardTitle = document.createElement('input');
      cardTitle.setAttribute('readonly', 'readonly');
      cardTitle.value = toDoTask.title;
      cardTitle.addEventListener('click', (event) => {
        module.makeCardInfoEditable(event);
      });

      card.proj = toDoTask.proj;
      card.title = toDoTask.title;

      const cardDescr = document.createElement('input');
      cardDescr.setAttribute('readonly', 'readonly');
      cardDescr.value = toDoTask.descr;
      cardDescr.addEventListener('click', (event) => {
        module.makeCardInfoEditable(event);
      });

      const cardDate = document.createElement('input');
      cardDate.setAttribute('readonly', 'readonly');
      cardDate.value = `${toDoTask.date}`;
      cardDate.addEventListener('click', (event) => {
        module.makeCardInfoEditable(event);
      });

      const cardPrio = document.createElement('input');
      cardPrio.setAttribute('readonly', 'readonly');
      cardPrio.value = toDoTask.prio;
      cardPrio.addEventListener('click', (event) => {
        module.makeCardInfoEditable(event);
      });

      const showDetails = document.createElement('button');
      showDetails.textContent = 'Show details';
      showDetails.addEventListener('click', (event) => {
        module.showCardDetails(event);
      });

      const deleteToDo = document.createElement('button');
      deleteToDo.textContent = 'Delete';
      deleteToDo.addEventListener('click', (event) => {
        module.deleteToDo(event);
      });

      const submitChanges = document.createElement('button');
      submitChanges.textContent = 'Submit changes';
      submitChanges.addEventListener('click', (event) => {
        module.validateCardChanges(event);
      });

      card.append(
        cardTitle,
        cardDate,
        cardDescr,
        cardPrio,
        showDetails,
        deleteToDo,
        submitChanges,
      );
      projectToDosContainer.append(card);
    });
    workspace.append(projectSettings, projectToDosContainer);
    workspace.style.cssText = `
    display: grid;
    grid-template-rows: 12%;
    `;
    projectVisible = true;
  };

  return { module };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");
/* harmony import */ var _toDO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDO */ "./src/modules/toDO.js");



const modal = (() => {
  const module = {};

  module.loadModal = () => {
    const toDoModal = document.createElement('div');
    toDoModal.classList.add('modal');

    const workspace = document.querySelector('#workspace');

    const modalForm = document.createElement('form');
    modalForm.innerHTML = `
    <div class="title form-element">
  <label for="title">*Title</label><br>
  <input type="text" name="title" id="title" minlength="2" maxlength="24" required><br>
</div>

<div class="descr form-element">
  <label for="descr">*Description</label><br>
  <input type="text" name="descr" id="descr" maxlength="70"><br>
</div>

<div class="due-date form-element">
  <label for="dueDate">*Due Date</label><br>
  <input type="date" name="dueDate" id="dueDate" required><br>
</div>

<div class="priority form-element">
  <label for="priority">*Priority</label><br>
  <input type="text" name="priority" id="priority" minlength="1" maxlength="30" required><br>
</div>

<div class="project form-element">
  <label for="project">*Which project?</label><br>
  <input type="text" name="project" id="project" minlength="2" maxlength="22" required><br>
</div>
<span class="errorText"></span>
<button class="submit" type="submit">Submit</button>`;

    toDoModal.append(modalForm);
    workspace.append(toDoModal);
    const errorText = document.querySelector('.errorText');
    errorText.textContent = '';
  };
  module.closeModal = (event) => {
    event.preventDefault();
    const toDoModal = document.querySelector('.modal');
    toDoModal.style.display = 'none';
  };

  module.getFormInfo = () => {
    const title = document.querySelector('#title').value;
    const descr = document.querySelector('#descr').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    const project = document.querySelector('#project').value;

    return {
      title,
      descr,
      dueDate,
      priority,
      project,
    };
  };

  module.removeFormInfo = () => {
    document.querySelector('form').reset();
  };

  module.validateForm = (event) => {
    const errorText = document.querySelector('.errorText');
    if (module.getFormInfo().title.length < 2) {
      errorText.textContent =
        'You have to provide a title with 3 characters or more.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().title.length > 24) {
      errorText.textContent =
        'You have to keep your title under 24 characters.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().descr.length > 70) {
      errorText.textContent =
        'You have to keep your description under 70 characters.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().dueDate === '') {
      errorText.textContent = 'You have provide a due-date.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().priority.length < 1) {
      errorText.textContent =
        'You have to provide a priority with 1 or more characters.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().priority.length > 30) {
      errorText.textContent =
        'You have to provide a priority under 30 characters.';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().project.length < 2) {
      errorText.textContent =
        'You have to provide a project name which is more than 2 characters. ';
      event.preventDefault();
      return 1;
    }
    if (module.getFormInfo().project.length > 22) {
      errorText.textContent =
        'You have to provide a project name that is under 22 characters';
      event.preventDefault();
      return 1;
    }
    _UI__WEBPACK_IMPORTED_MODULE_0__["default"].module.createProject(module.getFormInfo().project);
    const newProject = module.getFormInfo().project;
    const newProjectClean = newProject.replace(/\s/g, '');
    _UI__WEBPACK_IMPORTED_MODULE_0__["default"].module.appendToDo(
      module.getFormInfo().title,
      document.querySelector(`ul.${newProjectClean}`),
    );
    module.closeModal(event);
    _toDO__WEBPACK_IMPORTED_MODULE_1__["default"].module.saveToDo();
    module.removeFormInfo();
  };

  return { module };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");
/* harmony import */ var _toDO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDO */ "./src/modules/toDO.js");



const pageLoad = () => {
  const content = document.querySelector('#content');

  const sidebar = document.createElement('div');
  sidebar.setAttribute('id', 'sidebar');

  const toDoContent = document.createElement('div');
  toDoContent.setAttribute('id', 'workspace');

  const createToDo = document.createElement('button');
  createToDo.classList.add('add-to-do');
  createToDo.textContent = 'Create ToDo';

  toDoContent.append(createToDo);
  content.append(sidebar, toDoContent);

  const projectsStored = JSON.parse(localStorage.getItem('projectArr'));
  const toDoTasksStored = JSON.parse(localStorage.getItem('toDoArr'));
  console.log(toDoTasksStored);
  console.log(projectsStored);

  if (projectsStored !== null || toDoTasksStored !== null) {
    toDoTasksStored.forEach((toDoTask) => {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].module.createProject(toDoTask.proj);
    });
  } else {
    return 1;
  }

  if (projectsStored !== null || toDoTasksStored !== null) {
    toDoTasksStored.forEach((toDoTask) => {
      _toDO__WEBPACK_IMPORTED_MODULE_1__["default"].module.toDoArr.push(toDoTask);
    });
  } else {
    return 1;
  }

  if (projectsStored !== null || toDoTasksStored !== null) {
    toDoTasksStored.forEach((toDoTask) => {
      const toDoTaskProj = document.querySelector(`ul.${toDoTask.proj}`);
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].module.appendToDo(toDoTask.title, toDoTaskProj);
    });
  } else {
    return 1;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDO */ "./src/modules/toDO.js");


const store = () => {
  const module = {};

  module.storeToDo = () => {
    localStorage.setItem('toDoArr', JSON.stringify(_toDO__WEBPACK_IMPORTED_MODULE_0__["default"].module.toDoArr));
    const toDoTaskStored = JSON.parse(localStorage.getItem('toDoArr'));
  };

  module.storeProject = () => {
    localStorage.setItem('projectArr', JSON.stringify(_toDO__WEBPACK_IMPORTED_MODULE_0__["default"].module.projectArr));
    const projectsStored = JSON.parse(localStorage.getItem('projectArr'));
  };

  return { module };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ "./src/modules/toDO.js":
/*!*****************************!*\
  !*** ./src/modules/toDO.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modules/modal.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");




const toDo = (() => {
  const module = {};
  module.toDoArr = [];
  module.projectArr = [];

  module.createToDo = (title, descr, date, prio, proj) => ({
    title,
    descr,
    date,
    prio,
    proj,
  });

  module.saveToDo = () => {
    const toDo2 = module.createToDo(
      _modal__WEBPACK_IMPORTED_MODULE_0__["default"].module.getFormInfo().title,
      _modal__WEBPACK_IMPORTED_MODULE_0__["default"].module.getFormInfo().descr,
      _modal__WEBPACK_IMPORTED_MODULE_0__["default"].module.getFormInfo().dueDate,
      _modal__WEBPACK_IMPORTED_MODULE_0__["default"].module.getFormInfo().priority,
      _modal__WEBPACK_IMPORTED_MODULE_0__["default"].module.getFormInfo().project.replace(/\s/g, ''),
    );
    module.toDoArr.push(toDo2);
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().module.storeToDo(toDo2);
    module.saveProject(toDo2.proj);
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__["default"])().module.storeProject();
  };

  module.checkToDoProj = (project) => {
    const projectToDoTasks = module.toDoArr.filter(
      (toDoTask) => toDoTask.proj === project,
    );
    _UI__WEBPACK_IMPORTED_MODULE_1__["default"].module.appendProjectElements(projectToDoTasks);
  };

  module.saveProject = (proj) => {
    module.projectArr.push(proj);
  };

  return { module };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load */ "./src/modules/page-load.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/modules/modal.js");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");





(0,_modules_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_storage__WEBPACK_IMPORTED_MODULE_3__["default"])();
document.querySelector('.add-to-do').addEventListener('click', () => {
  _modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"].module.loadModal();
  const modalForm = document.querySelector('.modal');
  modalForm.style.display = 'block';

  document.querySelector('.submit').addEventListener('click', (event) => {
    _modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"].module.getFormInfo();
    _modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"].module.validateForm(event);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHlFQUF3QjtBQUM1QixJQUFJLDBFQUF5QjtBQUM3QixHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b0RPLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiXFxuICAgIFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0dncgNzZ2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIDg1dmg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGVrbycsICdzYW5zLXNlcmlmJztcXG4gICAgZm9udC1zaXplOiAxNDAlO1xcbn1cXG5cXG4jd29ya3NwYWNlIHtcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRvLWRvIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0RkZFQztcXG5cXG4gICAgd2lkdGg6IG1pbigxNDBweCwgMjUlKTtcXG4gICAgaGVpZ2h0OiA1JTtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBENzM3NztcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHJpZ2h0OiAzNSU7XFxuICAgIHRvcDogMjUlO1xcblxcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDMwJSAzMCUgMTAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgJ3RpdGxlIGRlc2NyaXB0aW9uJ1xcbiAgICAnRHVlLWRhdGUgcHJpb3JpdHknXFxuICAgICdwcm9qZWN0IHByb2plY3QnXFxuICAgICdzdWJtaXQgc3VibWl0JztcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxufVxcblxcbi5kZXNjciB7XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogRHVlLWRhdGU7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gICAgYm9yZGVyOiAwcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0RkZFQztcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cXG4gICAgZ3JpZC1hcmVhOiBzdWJtaXQ7XFxuXFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBtYXJnaW4tbGVmdDogNDIuNSU7XFxuICAgIG1hcmdpbi1yaWdodDogNDIuNSU7XFxufVxcblxcbi5zdWJtaXQ6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tZWxlbWVudCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ1NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDE1MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDBweCBzb2xpZCB3aGl0ZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogNjUlO1xcbiAgICBmb250LWZhbWlseTogJ1Rla28nLCAnU2Fucy1zZXJpZic7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbmlucHV0OmhvdmVyLCBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNEZGRUM7XFxufVxcblxcbi5zdWItbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93TWVudSAuc3ViLW1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByb2plY3Qtc2lkZWJhciB7XFxuICAgIHBhZGRpbmctbGVmdDogMTUlO1xcbn1cXG5cXG4gdWwge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gfVxcblxcbiBsaSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gfVxcblxcbiAudG8tZG8tY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDczNzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgZm9udC1zaXplOiAxMDUlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gfVxcbiAudG8tZG8tY2FyZCBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXG4gfVxcblxcbiAudG8tZG8tY2FyZCBpbnB1dFtyZWFkb25seT0ncmVhZG9ubHknXSB7XFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHdoaXRlO1xcbiB9XFxuXFxuIC50by1kby1jYXJkIGlucHV0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxMDUlO1xcbiAgICBmb250LWZhbWlseTogJ1Rla28nO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDczNzc7XFxuIH1cXG5cXG5cXG4gLnRvLWRvLWNhcmQgaW5wdXQ6bnRoLWNoaWxkKDMpLCAudG8tZG8tY2FyZCBpbnB1dDpudGgtY2hpbGQoNCkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiB9XFxuXFxuIC5wcm9qZWN0LXRvLWRvcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDYlO1xcbiB9XFxuXFxuIC5zZXR0aW5ncyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC5yZWQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgNTEsIDUxKTtcXG4gICAgZm9udC1zaXplOiAxMzUlO1xcbiAgICB3aWR0aDogbWF4KDE1MHB4LCAxNSUpO1xcbiAgICBoZWlnaHQ6IDM4JTtcXG4gfVxcblxcbiAuYngge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lB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bXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiXFxuICAgIFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0dncgNzZ2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIDg1dmg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGVrbycsICdzYW5zLXNlcmlmJztcXG4gICAgZm9udC1zaXplOiAxNDAlO1xcbn1cXG5cXG4jd29ya3NwYWNlIHtcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRvLWRvIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0RkZFQztcXG5cXG4gICAgd2lkdGg6IG1pbigxNDBweCwgMjUlKTtcXG4gICAgaGVpZ2h0OiA1JTtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBENzM3NztcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHJpZ2h0OiAzNSU7XFxuICAgIHRvcDogMjUlO1xcblxcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDMwJSAzMCUgMTAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgJ3RpdGxlIGRlc2NyaXB0aW9uJ1xcbiAgICAnRHVlLWRhdGUgcHJpb3JpdHknXFxuICAgICdwcm9qZWN0IHByb2plY3QnXFxuICAgICdzdWJtaXQgc3VibWl0JztcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxufVxcblxcbi5kZXNjciB7XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogRHVlLWRhdGU7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gICAgYm9yZGVyOiAwcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0RkZFQztcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cXG4gICAgZ3JpZC1hcmVhOiBzdWJtaXQ7XFxuXFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBtYXJnaW4tbGVmdDogNDIuNSU7XFxuICAgIG1hcmdpbi1yaWdodDogNDIuNSU7XFxufVxcblxcbi5zdWJtaXQ6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tZWxlbWVudCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ1NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDE1MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDBweCBzb2xpZCB3aGl0ZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogNjUlO1xcbiAgICBmb250LWZhbWlseTogJ1Rla28nLCAnU2Fucy1zZXJpZic7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbmlucHV0OmhvdmVyLCBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNEZGRUM7XFxufVxcblxcbi5zdWItbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93TWVudSAuc3ViLW1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByb2plY3Qtc2lkZWJhciB7XFxuICAgIHBhZGRpbmctbGVmdDogMTUlO1xcbn1cXG5cXG4gdWwge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gfVxcblxcbiBsaSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gfVxcblxcbiAudG8tZG8tY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDczNzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdUZWtvJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgZm9udC1zaXplOiAxMDUlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gfVxcbiAudG8tZG8tY2FyZCBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXG4gfVxcblxcbiAudG8tZG8tY2FyZCBpbnB1dFtyZWFkb25seT0ncmVhZG9ubHknXSB7XFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHdoaXRlO1xcbiB9XFxuXFxuIC50by1kby1jYXJkIGlucHV0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxMDUlO1xcbiAgICBmb250LWZhbWlseTogJ1Rla28nO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDczNzc7XFxuIH1cXG5cXG5cXG4gLnRvLWRvLWNhcmQgaW5wdXQ6bnRoLWNoaWxkKDMpLCAudG8tZG8tY2FyZCBpbnB1dDpudGgtY2hpbGQoNCkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiB9XFxuXFxuIC5wcm9qZWN0LXRvLWRvcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDYlO1xcbiB9XFxuXFxuIC5zZXR0aW5ncyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC5yZWQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgNTEsIDUxKTtcXG4gICAgZm9udC1zaXplOiAxMzUlO1xcbiAgICB3aWR0aDogbWF4KDE1MHB4LCAxNSUpO1xcbiAgICBoZWlnaHQ6IDM4JTtcXG4gfVxcblxcbiAuYngge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdG9EbyBmcm9tICcuL3RvRE8nO1xuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmFnZSc7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgY29uc3QgbW9kdWxlID0ge307XG4gIGNvbnN0IHByb2plY3RBcnIgPSBbXTtcbiAgbGV0IHByb2plY3RWaXNpYmxlID0gZmFsc2U7XG4gIG1vZHVsZS5jcmVhdGVUb0RvID0gKCkgPT4ge307XG5cbiAgbW9kdWxlLmFkZEV2ZW50TGlzdGVuZXJUb0J0biA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvLWRvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb2RhbC5tb2R1bGUubG9hZE1vZGFsKCk7XG4gICAgICBjb25zdCBtb2RhbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICAgIG1vZGFsRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG1vZGFsLm1vZHVsZS5nZXRGb3JtSW5mbygpO1xuICAgICAgICBtb2RhbC5tb2R1bGUudmFsaWRhdGVGb3JtKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG1vZHVsZS5jcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmtzcGFjZScpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHRpdGxlLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtwcm9qZWN0VGl0bGV9YCk7XG4gICAgaWYgKHByb2plY3RUaXRsZUVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGludmFsaWQgPSBmYWxzZTtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgIGlmIChwcm9qID09PSBwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHByb2plY3RBcnIucHVzaCh0aXRsZSk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNpZGViYXInKTtcbiAgICBwcm9qZWN0LmlubmVySFRNTCA9IGBcbiAgICA8aSBjbGFzcz0nYnggYngtdXAtYXJyb3ctYWx0Jz48L2k+XG4gICAgPHNwYW4+JHtwcm9qZWN0VGl0bGV9PC9zcGFuPlxuICAgIDx1bCBjbGFzcz1cInN1Yi1tZW51ICR7cHJvamVjdFRpdGxlfVwiPjwvdWw+YDtcbiAgICBjb25zdCBhcnJvdyA9IHByb2plY3QuY2hpbGRyZW5bMF07XG4gICAgYXJyb3cudHJhbnNmb3JtZWQgPSBmYWxzZTtcbiAgICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgbGV0IHN0b3BQcm9jZXNzID0gZmFsc2U7XG4gICAgICBjb25zdCB3b3Jrc3BhY2VDaGlsZHJlbiA9IHdvcmtzcGFjZS5jaGlsZE5vZGVzO1xuICAgICAgd29ya3NwYWNlQ2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnRleHRDb250ZW50ID09PSAnQ3JlYXRlIFRvRG8nIHx8IGV2ZW50LnRhcmdldC50cmFuc2Zvcm1lZCkge1xuICAgICAgICAgIHN0b3BQcm9jZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIXN0b3BQcm9jZXNzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1vZHVsZS50b2dnbGVTaWRlYmFyRHJvcGRvd24oZXZlbnQpO1xuICAgICAgdG9Eby5tb2R1bGUuY2hlY2tUb0RvUHJvaihcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQsXG4gICAgICApO1xuICAgICAgbW9kdWxlLnJlbW92ZVdvcmtzcGFjZUNvbnRlbnQoYXJyb3cpO1xuICAgICAgbW9kdWxlLmFycm93VHJhbnNmb3JtYXRpb24oYXJyb3cpO1xuICAgICAgbW9kdWxlLmNoZWNrV29ya3NwYWNlQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgc2lkZWJhci5hcHBlbmQocHJvamVjdCk7XG4gIH07XG5cbiAgbW9kdWxlLmNoZWNrV29ya3NwYWNlQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ya3NwYWNlJyk7XG4gICAgaWYgKHdvcmtzcGFjZS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9PT0gJ0NyZWF0ZSBUb0RvJyAmJiB3b3Jrc3BhY2UuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPT09ICdDcmVhdGUgVG9EbycpIHtcbiAgICAgIHdvcmtzcGFjZS5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKHdvcmtzcGFjZS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9PT0gJ0NyZWF0ZSBUb0RvJyAmJiB3b3Jrc3BhY2UuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPT09ICdDbG9zZSBwcm9qZWN0Jykge1xuICAgICAgd29ya3NwYWNlLmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuYXJyb3dUcmFuc2Zvcm1hdGlvbiA9IChhcnJvdykgPT4ge1xuICAgIGlmIChhcnJvdy50cmFuc2Zvcm1lZCkge1xuICAgICAgYXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICBhcnJvdy50cmFuc2Zvcm1lZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMTgwZGVnKSc7XG4gICAgYXJyb3cudHJhbnNmb3JtZWQgPSB0cnVlO1xuICB9O1xuXG4gIG1vZHVsZS5hcHBlbmRUb0RvID0gKHRpdGxlLCBwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgdG9Eb1RpdGxlID0gdGl0bGUucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICBjb25zdCB0b0RvTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRvRG9MaS5pbm5lckhUTUwgPSBgXG4gICAgJHt0b0RvVGl0bGV9YDtcbiAgICBwcm9qZWN0LmFwcGVuZCh0b0RvTGkpO1xuICB9O1xuXG4gIG1vZHVsZS50b2dnbGVTaWRlYmFyRHJvcGRvd24gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93TWVudScpO1xuICB9O1xuXG4gIG1vZHVsZS5yZW1vdmVXb3Jrc3BhY2VDb250ZW50ID0gKGFycm93KSA9PiB7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmtzcGFjZScpO1xuICAgIGlmICghYXJyb3cudHJhbnNmb3JtZWQpIHtcbiAgICAgIHdvcmtzcGFjZS5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKGFycm93LnRyYW5zZm9ybWVkKSB7XG4gICAgICBtb2R1bGUuY2xvc2VQcm9qZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5zaG93Q2FyZERldGFpbHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b0RvQ2FyZENoaWxkcmVuID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW47XG4gICAgdG9Eb0NhcmRDaGlsZHJlbi5pdGVtKDIpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICB0b0RvQ2FyZENoaWxkcmVuLml0ZW0oMykuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgIHRvRG9DYXJkQ2hpbGRyZW4uaXRlbSg0KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIG1vZHVsZS5jbG9zZVByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MnKTtcbiAgICBjb25zdCBwcm9qZWN0VG9Eb3NDb250YWluZXIgPSBzZXR0aW5ncy5uZXh0U2libGluZztcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ya3NwYWNlJyk7XG4gICAgc2V0dGluZ3MucmVtb3ZlKCk7XG4gICAgcHJvamVjdFRvRG9zQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIHdvcmtzcGFjZS5zdHlsZS5jc3NUZXh0IC09IGBcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEyJTtcbiAgICBgO1xuICAgIGNvbnN0IGNyZWF0ZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjcmVhdGVUb0RvLmNsYXNzTGlzdC5hZGQoJ2FkZC10by1kbycpO1xuICAgIGNyZWF0ZVRvRG8udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRvRG8nO1xuICAgIHdvcmtzcGFjZS5hcHBlbmQoY3JlYXRlVG9Ebyk7XG4gICAgbW9kdWxlLmFkZEV2ZW50TGlzdGVuZXJUb0J0bigpO1xuICAgIHByb2plY3RWaXNpYmxlID0gZmFsc2U7XG4gIH07XG5cbiAgbGV0IGluZGV4Q291bnRlciA9IDA7XG4gIG1vZHVsZS5kZWxldGVUb0RvID0gKGV2ZW50KSA9PiB7XG4gICAgaW5kZXhDb3VudGVyID0gMDtcbiAgICAvLyBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICBjb25zdCB0b0RvVGl0bGUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLnZhbHVlO1xuICAgIGNvbnN0IHRvRG9Qcm9qID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJvajtcbiAgICBjb25zdCB0b0RvVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0b0RvUHJvan0gLnN1Yi1tZW51IGxpYCk7XG4gICAgdG9Eb1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnRleHRDb250ZW50LnJlcGxhY2UoL1xccy9nLCAnJykgPT09IHRvRG9UaXRsZSkge1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyB0b0RvQXJyIH0gPSB0b0RvLm1vZHVsZTtcbiAgICB0b0RvQXJyLmZvckVhY2goKHRvRG9PYmopID0+IHtcbiAgICAgIGluZGV4Q291bnRlcisrO1xuICAgICAgaWYgKHRvRG9PYmoudGl0bGUgPT09IHRvRG9UaXRsZSAmJiB0b0RvT2JqLnByb2ogPT09IHRvRG9Qcm9qKSB7XG4gICAgICAgIHRvRG9BcnIuc3BsaWNlKGluZGV4Q291bnRlciAtIDEsIDEpO1xuICAgICAgICBzdG9yZSgpLm1vZHVsZS5zdG9yZVRvRG8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfTtcblxuICBtb2R1bGUuZ2V0Q2FyZElucHV0cyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1pdENoYW5nZXNCdG4gPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdGl0bGUgPVxuICAgICAgc3VibWl0Q2hhbmdlc0J0bi5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZ1xuICAgICAgICAucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmc7XG4gICAgY29uc3QgZGF0ZSA9XG4gICAgICBzdWJtaXRDaGFuZ2VzQnRuLnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nXG4gICAgICAgIC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuICAgIGNvbnN0IGRlc2NyID1cbiAgICAgIHN1Ym1pdENoYW5nZXNCdG4ucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmdcbiAgICAgICAgLnByZXZpb3VzU2libGluZztcbiAgICBjb25zdCBwcmlvcml0eSA9XG4gICAgICBzdWJtaXRDaGFuZ2VzQnRuLnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRhdGUsXG4gICAgICBkZXNjcixcbiAgICAgIHByaW9yaXR5LFxuICAgIH07XG4gIH07XG5cbiAgbW9kdWxlLnN1Ym1pdENhcmRDaGFuZ2VzID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc3VibWl0Q2hhbmdlc0J0biA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBpbnB1dEFyciA9IFtdO1xuICAgIGNvbnN0IHsgdGl0bGUgfSA9IG1vZHVsZS5nZXRDYXJkSW5wdXRzKGV2ZW50KTtcbiAgICBjb25zdCB7IGRhdGUgfSA9IG1vZHVsZS5nZXRDYXJkSW5wdXRzKGV2ZW50KTtcbiAgICBjb25zdCB7IGRlc2NyIH0gPSBtb2R1bGUuZ2V0Q2FyZElucHV0cyhldmVudCk7XG4gICAgY29uc3QgeyBwcmlvcml0eSB9ID0gbW9kdWxlLmdldENhcmRJbnB1dHMoZXZlbnQpO1xuICAgIGlucHV0QXJyLnB1c2godGl0bGUsIGRhdGUsIGRlc2NyLCBwcmlvcml0eSk7XG5cbiAgICBpbnB1dEFyci5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xuICAgIH0pO1xuICAgIHRvRG8ubW9kdWxlLnRvRG9BcnIuZm9yRWFjaCgodG9Eb1Rhc2spID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdG9Eb1Rhc2sudGl0bGUgPT09IHN1Ym1pdENoYW5nZXNCdG4ucGFyZW50RWxlbWVudC50aXRsZSAmJlxuICAgICAgICB0b0RvVGFzay5wcm9qID09PSBzdWJtaXRDaGFuZ2VzQnRuLnBhcmVudEVsZW1lbnQucHJvalxuICAgICAgKSB7XG4gICAgICAgIHRvRG9UYXNrLnRpdGxlID0gdGl0bGUudmFsdWU7XG4gICAgICAgIHRvRG9UYXNrLmRhdGUgPSBkYXRlLnZhbHVlO1xuICAgICAgICB0b0RvVGFzay5kZXNjciA9IGRlc2NyLnZhbHVlO1xuICAgICAgICB0b0RvVGFzay5wcmlvID0gcHJpb3JpdHkudmFsdWU7XG4gICAgICAgIHN1Ym1pdENoYW5nZXNCdG4ucGFyZW50RWxlbWVudC50aXRsZSA9IHRpdGxlLnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN0b3JlKCkubW9kdWxlLnN0b3JlVG9EbygpO1xuICB9O1xuXG4gIG1vZHVsZS5yZXNldENhcmRJbnB1dHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHRpdGxlIH0gPSBtb2R1bGUuZ2V0Q2FyZElucHV0cyhldmVudCk7XG4gICAgdGl0bGUuc3R5bGUuYm9yZGVyID0gJzBweCBzb2xpZCB3aGl0ZSc7XG4gICAgY29uc3QgeyBkYXRlIH0gPSBtb2R1bGUuZ2V0Q2FyZElucHV0cyhldmVudCk7XG4gICAgZGF0ZS5zdHlsZS5ib3JkZXIgPSAnMHB4IHNvbGlkIHdoaXRlJztcbiAgICBjb25zdCB7IGRlc2NyIH0gPSBtb2R1bGUuZ2V0Q2FyZElucHV0cyhldmVudCk7XG4gICAgZGVzY3Iuc3R5bGUuYm9yZGVyID0gJzBweCBzb2xpZCB3aGl0ZSc7XG4gICAgY29uc3QgeyBwcmlvcml0eSB9ID0gbW9kdWxlLmdldENhcmRJbnB1dHMoZXZlbnQpO1xuICAgIHByaW9yaXR5LnN0eWxlLmJvcmRlciA9ICcwcHggc29saWQgd2hpdGUnO1xuICB9O1xuXG4gIG1vZHVsZS52YWxpZGF0ZUNhcmRDaGFuZ2VzID0gKGV2ZW50KSA9PiB7XG4gICAgbW9kdWxlLnJlc2V0Q2FyZElucHV0cyhldmVudCk7XG4gICAgY29uc3QgeyB0aXRsZSB9ID0gbW9kdWxlLmdldENhcmRJbnB1dHMoZXZlbnQpO1xuICAgIGNvbnN0IHsgZGF0ZSB9ID0gbW9kdWxlLmdldENhcmRJbnB1dHMoZXZlbnQpO1xuICAgIGNvbnN0IHsgZGVzY3IgfSA9IG1vZHVsZS5nZXRDYXJkSW5wdXRzKGV2ZW50KTtcbiAgICBjb25zdCB7IHByaW9yaXR5IH0gPSBtb2R1bGUuZ2V0Q2FyZElucHV0cyhldmVudCk7XG5cbiAgICBpZiAodGl0bGUudmFsdWUubGVuZ3RoIDwgMikge1xuICAgICAgdGl0bGUuc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDFweCByZWQnO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmICh0aXRsZS52YWx1ZS5sZW5ndGggPiAyNCkge1xuICAgICAgdGl0bGUuc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDFweCByZWQnO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChkZXNjci52YWx1ZS5sZW5ndGggPiA3MCkge1xuICAgICAgZGVzY3Iuc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDFweCByZWQnO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChkYXRlLnZhbHVlID09PSAnJykge1xuICAgICAgZGF0ZS5zdHlsZS5ib3JkZXIgPSAnc29saWQgMXB4IHJlZCc7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5LnZhbHVlLmxlbmd0aCA8IDEpIHtcbiAgICAgIHByaW9yaXR5LnN0eWxlLmJvcmRlciA9ICdzb2xpZCAxcHggcmVkJztcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAocHJpb3JpdHkudmFsdWUubGVuZ3RoID4gMzApIHtcbiAgICAgIHByaW9yaXR5LnN0eWxlLmJvcmRlciA9ICdzb2xpZCAxcHggcmVkJztcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBtb2R1bGUuc3VibWl0Q2FyZENoYW5nZXMoZXZlbnQpO1xuICB9O1xuXG4gIG1vZHVsZS5tYWtlQ2FyZEluZm9FZGl0YWJsZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gIH07XG5cbiAgbW9kdWxlLmFwcGVuZFByb2plY3RFbGVtZW50cyA9IChhcnIpID0+IHtcbiAgICBpZiAocHJvamVjdFZpc2libGUpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBjb25zdCB3b3Jrc3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ya3NwYWNlJyk7XG4gICAgY29uc3QgcHJvamVjdFRvRG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRvRG9zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG8tZG9zJyk7XG4gICAgY29uc3QgcHJvamVjdFNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzJyk7XG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZS50ZXh0Q29udGVudCA9ICdDbG9zZSBwcm9qZWN0JztcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdyZWQtYnRuJyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb2R1bGUuY2xvc2VQcm9qZWN0KCk7XG4gICAgfSk7XG4gICAgcHJvamVjdFNldHRpbmdzLmFwcGVuZChjbG9zZSk7XG5cbiAgICBhcnIuZm9yRWFjaCgodG9Eb1Rhc2spID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgndG8tZG8tY2FyZCcpO1xuICAgICAgY29uc3QgdG9Eb1RpdGxlID0gdG9Eb1Rhc2sudGl0bGUucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChgJHt0b0RvVGl0bGV9LWNhcmRgKTtcbiAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xuICAgICAgY2FyZFRpdGxlLnZhbHVlID0gdG9Eb1Rhc2sudGl0bGU7XG4gICAgICBjYXJkVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbW9kdWxlLm1ha2VDYXJkSW5mb0VkaXRhYmxlKGV2ZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICBjYXJkLnByb2ogPSB0b0RvVGFzay5wcm9qO1xuICAgICAgY2FyZC50aXRsZSA9IHRvRG9UYXNrLnRpdGxlO1xuXG4gICAgICBjb25zdCBjYXJkRGVzY3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgY2FyZERlc2NyLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcbiAgICAgIGNhcmREZXNjci52YWx1ZSA9IHRvRG9UYXNrLmRlc2NyO1xuICAgICAgY2FyZERlc2NyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG1vZHVsZS5tYWtlQ2FyZEluZm9FZGl0YWJsZShldmVudCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY2FyZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgY2FyZERhdGUuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xuICAgICAgY2FyZERhdGUudmFsdWUgPSBgJHt0b0RvVGFzay5kYXRlfWA7XG4gICAgICBjYXJkRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBtb2R1bGUubWFrZUNhcmRJbmZvRWRpdGFibGUoZXZlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNhcmRQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNhcmRQcmlvLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcbiAgICAgIGNhcmRQcmlvLnZhbHVlID0gdG9Eb1Rhc2sucHJpbztcbiAgICAgIGNhcmRQcmlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG1vZHVsZS5tYWtlQ2FyZEluZm9FZGl0YWJsZShldmVudCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2hvd0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHNob3dEZXRhaWxzLnRleHRDb250ZW50ID0gJ1Nob3cgZGV0YWlscyc7XG4gICAgICBzaG93RGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBtb2R1bGUuc2hvd0NhcmREZXRhaWxzKGV2ZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkZWxldGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZWxldGVUb0RvLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICBkZWxldGVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG1vZHVsZS5kZWxldGVUb0RvKGV2ZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzdWJtaXRDaGFuZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzdWJtaXRDaGFuZ2VzLnRleHRDb250ZW50ID0gJ1N1Ym1pdCBjaGFuZ2VzJztcbiAgICAgIHN1Ym1pdENoYW5nZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbW9kdWxlLnZhbGlkYXRlQ2FyZENoYW5nZXMoZXZlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIGNhcmQuYXBwZW5kKFxuICAgICAgICBjYXJkVGl0bGUsXG4gICAgICAgIGNhcmREYXRlLFxuICAgICAgICBjYXJkRGVzY3IsXG4gICAgICAgIGNhcmRQcmlvLFxuICAgICAgICBzaG93RGV0YWlscyxcbiAgICAgICAgZGVsZXRlVG9EbyxcbiAgICAgICAgc3VibWl0Q2hhbmdlcyxcbiAgICAgICk7XG4gICAgICBwcm9qZWN0VG9Eb3NDb250YWluZXIuYXBwZW5kKGNhcmQpO1xuICAgIH0pO1xuICAgIHdvcmtzcGFjZS5hcHBlbmQocHJvamVjdFNldHRpbmdzLCBwcm9qZWN0VG9Eb3NDb250YWluZXIpO1xuICAgIHdvcmtzcGFjZS5zdHlsZS5jc3NUZXh0ID0gYFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMiU7XG4gICAgYDtcbiAgICBwcm9qZWN0VmlzaWJsZSA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgbW9kdWxlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImltcG9ydCBVSSBmcm9tICcuL1VJJztcbmltcG9ydCB0b0RvIGZyb20gJy4vdG9ETyc7XG5cbmNvbnN0IG1vZGFsID0gKCgpID0+IHtcbiAgY29uc3QgbW9kdWxlID0ge307XG5cbiAgbW9kdWxlLmxvYWRNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB0b0RvTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b0RvTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICAgIGNvbnN0IHdvcmtzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3Jrc3BhY2UnKTtcblxuICAgIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBtb2RhbEZvcm0uaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSBmb3JtLWVsZW1lbnRcIj5cbiAgPGxhYmVsIGZvcj1cInRpdGxlXCI+KlRpdGxlPC9sYWJlbD48YnI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiBtaW5sZW5ndGg9XCIyXCIgbWF4bGVuZ3RoPVwiMjRcIiByZXF1aXJlZD48YnI+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImRlc2NyIGZvcm0tZWxlbWVudFwiPlxuICA8bGFiZWwgZm9yPVwiZGVzY3JcIj4qRGVzY3JpcHRpb248L2xhYmVsPjxicj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyXCIgaWQ9XCJkZXNjclwiIG1heGxlbmd0aD1cIjcwXCI+PGJyPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJkdWUtZGF0ZSBmb3JtLWVsZW1lbnRcIj5cbiAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj4qRHVlIERhdGU8L2xhYmVsPjxicj5cbiAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiBpZD1cImR1ZURhdGVcIiByZXF1aXJlZD48YnI+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInByaW9yaXR5IGZvcm0tZWxlbWVudFwiPlxuICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj4qUHJpb3JpdHk8L2xhYmVsPjxicj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiIG1pbmxlbmd0aD1cIjFcIiBtYXhsZW5ndGg9XCIzMFwiIHJlcXVpcmVkPjxicj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwicHJvamVjdCBmb3JtLWVsZW1lbnRcIj5cbiAgPGxhYmVsIGZvcj1cInByb2plY3RcIj4qV2hpY2ggcHJvamVjdD88L2xhYmVsPjxicj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2plY3RcIiBpZD1cInByb2plY3RcIiBtaW5sZW5ndGg9XCIyXCIgbWF4bGVuZ3RoPVwiMjJcIiByZXF1aXJlZD48YnI+XG48L2Rpdj5cbjxzcGFuIGNsYXNzPVwiZXJyb3JUZXh0XCI+PC9zcGFuPlxuPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5gO1xuXG4gICAgdG9Eb01vZGFsLmFwcGVuZChtb2RhbEZvcm0pO1xuICAgIHdvcmtzcGFjZS5hcHBlbmQodG9Eb01vZGFsKTtcbiAgICBjb25zdCBlcnJvclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JUZXh0Jyk7XG4gICAgZXJyb3JUZXh0LnRleHRDb250ZW50ID0gJyc7XG4gIH07XG4gIG1vZHVsZS5jbG9zZU1vZGFsID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b0RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICB0b0RvTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBtb2R1bGUuZ2V0Rm9ybUluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIHByb2plY3QsXG4gICAgfTtcbiAgfTtcblxuICBtb2R1bGUucmVtb3ZlRm9ybUluZm8gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLnJlc2V0KCk7XG4gIH07XG5cbiAgbW9kdWxlLnZhbGlkYXRlRm9ybSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGVycm9yVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvclRleHQnKTtcbiAgICBpZiAobW9kdWxlLmdldEZvcm1JbmZvKCkudGl0bGUubGVuZ3RoIDwgMikge1xuICAgICAgZXJyb3JUZXh0LnRleHRDb250ZW50ID1cbiAgICAgICAgJ1lvdSBoYXZlIHRvIHByb3ZpZGUgYSB0aXRsZSB3aXRoIDMgY2hhcmFjdGVycyBvciBtb3JlLic7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChtb2R1bGUuZ2V0Rm9ybUluZm8oKS50aXRsZS5sZW5ndGggPiAyNCkge1xuICAgICAgZXJyb3JUZXh0LnRleHRDb250ZW50ID1cbiAgICAgICAgJ1lvdSBoYXZlIHRvIGtlZXAgeW91ciB0aXRsZSB1bmRlciAyNCBjaGFyYWN0ZXJzLic7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChtb2R1bGUuZ2V0Rm9ybUluZm8oKS5kZXNjci5sZW5ndGggPiA3MCkge1xuICAgICAgZXJyb3JUZXh0LnRleHRDb250ZW50ID1cbiAgICAgICAgJ1lvdSBoYXZlIHRvIGtlZXAgeW91ciBkZXNjcmlwdGlvbiB1bmRlciA3MCBjaGFyYWN0ZXJzLic7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChtb2R1bGUuZ2V0Rm9ybUluZm8oKS5kdWVEYXRlID09PSAnJykge1xuICAgICAgZXJyb3JUZXh0LnRleHRDb250ZW50ID0gJ1lvdSBoYXZlIHByb3ZpZGUgYSBkdWUtZGF0ZS4nO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAobW9kdWxlLmdldEZvcm1JbmZvKCkucHJpb3JpdHkubGVuZ3RoIDwgMSkge1xuICAgICAgZXJyb3JUZXh0LnRleHRDb250ZW50ID1cbiAgICAgICAgJ1lvdSBoYXZlIHRvIHByb3ZpZGUgYSBwcmlvcml0eSB3aXRoIDEgb3IgbW9yZSBjaGFyYWN0ZXJzLic7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChtb2R1bGUuZ2V0Rm9ybUluZm8oKS5wcmlvcml0eS5sZW5ndGggPiAzMCkge1xuICAgICAgZXJyb3JUZXh0LnRleHRDb250ZW50ID1cbiAgICAgICAgJ1lvdSBoYXZlIHRvIHByb3ZpZGUgYSBwcmlvcml0eSB1bmRlciAzMCBjaGFyYWN0ZXJzLic7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChtb2R1bGUuZ2V0Rm9ybUluZm8oKS5wcm9qZWN0Lmxlbmd0aCA8IDIpIHtcbiAgICAgIGVycm9yVGV4dC50ZXh0Q29udGVudCA9XG4gICAgICAgICdZb3UgaGF2ZSB0byBwcm92aWRlIGEgcHJvamVjdCBuYW1lIHdoaWNoIGlzIG1vcmUgdGhhbiAyIGNoYXJhY3RlcnMuICc7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChtb2R1bGUuZ2V0Rm9ybUluZm8oKS5wcm9qZWN0Lmxlbmd0aCA+IDIyKSB7XG4gICAgICBlcnJvclRleHQudGV4dENvbnRlbnQgPVxuICAgICAgICAnWW91IGhhdmUgdG8gcHJvdmlkZSBhIHByb2plY3QgbmFtZSB0aGF0IGlzIHVuZGVyIDIyIGNoYXJhY3RlcnMnO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBVSS5tb2R1bGUuY3JlYXRlUHJvamVjdChtb2R1bGUuZ2V0Rm9ybUluZm8oKS5wcm9qZWN0KTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbW9kdWxlLmdldEZvcm1JbmZvKCkucHJvamVjdDtcbiAgICBjb25zdCBuZXdQcm9qZWN0Q2xlYW4gPSBuZXdQcm9qZWN0LnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgVUkubW9kdWxlLmFwcGVuZFRvRG8oXG4gICAgICBtb2R1bGUuZ2V0Rm9ybUluZm8oKS50aXRsZSxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHVsLiR7bmV3UHJvamVjdENsZWFufWApLFxuICAgICk7XG4gICAgbW9kdWxlLmNsb3NlTW9kYWwoZXZlbnQpO1xuICAgIHRvRG8ubW9kdWxlLnNhdmVUb0RvKCk7XG4gICAgbW9kdWxlLnJlbW92ZUZvcm1JbmZvKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbW9kdWxlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbDtcbiIsImltcG9ydCBVSSBmcm9tICcuL1VJJztcbmltcG9ydCB0b0RvIGZyb20gJy4vdG9ETyc7XG5cbmNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlYmFyJyk7XG5cbiAgY29uc3QgdG9Eb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0NvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICd3b3Jrc3BhY2UnKTtcblxuICBjb25zdCBjcmVhdGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNyZWF0ZVRvRG8uY2xhc3NMaXN0LmFkZCgnYWRkLXRvLWRvJyk7XG4gIGNyZWF0ZVRvRG8udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRvRG8nO1xuXG4gIHRvRG9Db250ZW50LmFwcGVuZChjcmVhdGVUb0RvKTtcbiAgY29udGVudC5hcHBlbmQoc2lkZWJhciwgdG9Eb0NvbnRlbnQpO1xuXG4gIGNvbnN0IHByb2plY3RzU3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycicpKTtcbiAgY29uc3QgdG9Eb1Rhc2tzU3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycicpKTtcbiAgY29uc29sZS5sb2codG9Eb1Rhc2tzU3RvcmVkKTtcbiAgY29uc29sZS5sb2cocHJvamVjdHNTdG9yZWQpO1xuXG4gIGlmIChwcm9qZWN0c1N0b3JlZCAhPT0gbnVsbCB8fCB0b0RvVGFza3NTdG9yZWQgIT09IG51bGwpIHtcbiAgICB0b0RvVGFza3NTdG9yZWQuZm9yRWFjaCgodG9Eb1Rhc2spID0+IHtcbiAgICAgIFVJLm1vZHVsZS5jcmVhdGVQcm9qZWN0KHRvRG9UYXNrLnByb2opO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKHByb2plY3RzU3RvcmVkICE9PSBudWxsIHx8IHRvRG9UYXNrc1N0b3JlZCAhPT0gbnVsbCkge1xuICAgIHRvRG9UYXNrc1N0b3JlZC5mb3JFYWNoKCh0b0RvVGFzaykgPT4ge1xuICAgICAgdG9Eby5tb2R1bGUudG9Eb0Fyci5wdXNoKHRvRG9UYXNrKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0c1N0b3JlZCAhPT0gbnVsbCB8fCB0b0RvVGFza3NTdG9yZWQgIT09IG51bGwpIHtcbiAgICB0b0RvVGFza3NTdG9yZWQuZm9yRWFjaCgodG9Eb1Rhc2spID0+IHtcbiAgICAgIGNvbnN0IHRvRG9UYXNrUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHVsLiR7dG9Eb1Rhc2sucHJvan1gKTtcbiAgICAgIFVJLm1vZHVsZS5hcHBlbmRUb0RvKHRvRG9UYXNrLnRpdGxlLCB0b0RvVGFza1Byb2opO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDtcbiIsImltcG9ydCB0b0RvIGZyb20gJy4vdG9ETyc7XG5cbmNvbnN0IHN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBtb2R1bGUgPSB7fTtcblxuICBtb2R1bGUuc3RvcmVUb0RvID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvQXJyJywgSlNPTi5zdHJpbmdpZnkodG9Eby5tb2R1bGUudG9Eb0FycikpO1xuICAgIGNvbnN0IHRvRG9UYXNrU3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0FycicpKTtcbiAgfTtcblxuICBtb2R1bGUuc3RvcmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0QXJyJywgSlNPTi5zdHJpbmdpZnkodG9Eby5tb2R1bGUucHJvamVjdEFycikpO1xuICAgIGNvbnN0IHByb2plY3RzU3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycicpKTtcbiAgfTtcblxuICByZXR1cm4geyBtb2R1bGUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmFnZSc7XG5cbmNvbnN0IHRvRG8gPSAoKCkgPT4ge1xuICBjb25zdCBtb2R1bGUgPSB7fTtcbiAgbW9kdWxlLnRvRG9BcnIgPSBbXTtcbiAgbW9kdWxlLnByb2plY3RBcnIgPSBbXTtcblxuICBtb2R1bGUuY3JlYXRlVG9EbyA9ICh0aXRsZSwgZGVzY3IsIGRhdGUsIHByaW8sIHByb2opID0+ICh7XG4gICAgdGl0bGUsXG4gICAgZGVzY3IsXG4gICAgZGF0ZSxcbiAgICBwcmlvLFxuICAgIHByb2osXG4gIH0pO1xuXG4gIG1vZHVsZS5zYXZlVG9EbyA9ICgpID0+IHtcbiAgICBjb25zdCB0b0RvMiA9IG1vZHVsZS5jcmVhdGVUb0RvKFxuICAgICAgbW9kYWwubW9kdWxlLmdldEZvcm1JbmZvKCkudGl0bGUsXG4gICAgICBtb2RhbC5tb2R1bGUuZ2V0Rm9ybUluZm8oKS5kZXNjcixcbiAgICAgIG1vZGFsLm1vZHVsZS5nZXRGb3JtSW5mbygpLmR1ZURhdGUsXG4gICAgICBtb2RhbC5tb2R1bGUuZ2V0Rm9ybUluZm8oKS5wcmlvcml0eSxcbiAgICAgIG1vZGFsLm1vZHVsZS5nZXRGb3JtSW5mbygpLnByb2plY3QucmVwbGFjZSgvXFxzL2csICcnKSxcbiAgICApO1xuICAgIG1vZHVsZS50b0RvQXJyLnB1c2godG9EbzIpO1xuICAgIHN0b3JlKCkubW9kdWxlLnN0b3JlVG9Ebyh0b0RvMik7XG4gICAgbW9kdWxlLnNhdmVQcm9qZWN0KHRvRG8yLnByb2opO1xuICAgIHN0b3JlKCkubW9kdWxlLnN0b3JlUHJvamVjdCgpO1xuICB9O1xuXG4gIG1vZHVsZS5jaGVja1RvRG9Qcm9qID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VG9Eb1Rhc2tzID0gbW9kdWxlLnRvRG9BcnIuZmlsdGVyKFxuICAgICAgKHRvRG9UYXNrKSA9PiB0b0RvVGFzay5wcm9qID09PSBwcm9qZWN0LFxuICAgICk7XG4gICAgVUkubW9kdWxlLmFwcGVuZFByb2plY3RFbGVtZW50cyhwcm9qZWN0VG9Eb1Rhc2tzKTtcbiAgfTtcblxuICBtb2R1bGUuc2F2ZVByb2plY3QgPSAocHJvaikgPT4ge1xuICAgIG1vZHVsZS5wcm9qZWN0QXJyLnB1c2gocHJvaik7XG4gIH07XG5cbiAgcmV0dXJuIHsgbW9kdWxlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB0b0RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vbW9kdWxlcy9wYWdlLWxvYWQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2R1bGVzL21vZGFsJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL21vZHVsZXMvc3RvcmFnZSc7XG5cbnBhZ2VMb2FkKCk7XG5zdG9yZSgpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1kbycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb2RhbC5tb2R1bGUubG9hZE1vZGFsKCk7XG4gIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBtb2RhbEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgbW9kYWwubW9kdWxlLmdldEZvcm1JbmZvKCk7XG4gICAgbW9kYWwubW9kdWxlLnZhbGlkYXRlRm9ybShldmVudCk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=