/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/translations"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/translations"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/translations"));
	else
		root["@deriv/account"] = factory(root["@deriv/translations"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_translations__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Configs/proof-of-identity-config.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__);\n\nvar proofOfIdentityConfig = function proofOfIdentityConfig(_ref, ProofOfIdentityForm) {\n  var account_settings = _ref.account_settings;\n  return {\n    header: {\n      active_title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Identity information'),\n      title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Identity information')\n    },\n    body: ProofOfIdentityForm,\n    props: {\n      citizen: account_settings.citizen || account_settings.country_code\n    },\n    passthrough: ['refreshNotifications', 'residence_list']\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proofOfIdentityConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL3Byb29mLW9mLWlkZW50aXR5LWNvbmZpZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db25maWdzL3Byb29mLW9mLWlkZW50aXR5LWNvbmZpZy50cz9lMTljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTZXR0aW5ncyB9IGZyb20gJ0BkZXJpdi9hcGktdHlwZXMnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcblxuY29uc3QgcHJvb2ZPZklkZW50aXR5Q29uZmlnID0gKFxuICAgIHsgYWNjb3VudF9zZXR0aW5ncyB9OiB7IGFjY291bnRfc2V0dGluZ3M6IEdldFNldHRpbmdzIH0sXG4gICAgUHJvb2ZPZklkZW50aXR5Rm9ybTogUmVhY3QuQ29tcG9uZW50XG4pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGFjdGl2ZV90aXRsZTogbG9jYWxpemUoJ0lkZW50aXR5IGluZm9ybWF0aW9uJyksXG4gICAgICAgICAgICB0aXRsZTogbG9jYWxpemUoJ0lkZW50aXR5IGluZm9ybWF0aW9uJyksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IFByb29mT2ZJZGVudGl0eUZvcm0sXG4gICAgICAgIHByb3BzOiB7IGNpdGl6ZW46IGFjY291bnRfc2V0dGluZ3MuY2l0aXplbiB8fCBhY2NvdW50X3NldHRpbmdzLmNvdW50cnlfY29kZSB9LFxuICAgICAgICBwYXNzdGhyb3VnaDogWydyZWZyZXNoTm90aWZpY2F0aW9ucycsICdyZXNpZGVuY2VfbGlzdCddLFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9vZk9mSWRlbnRpdHlDb25maWc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Configs/proof-of-identity-config.ts\n");

/***/ }),

/***/ "@deriv/translations":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/proof-of-identity-config.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});