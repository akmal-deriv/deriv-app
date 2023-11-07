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
		module.exports = factory(require("@deriv/shared"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/shared"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/shared"));
	else
		root["@deriv/account"] = factory(root["@deriv/shared"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_shared__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Configs/accept-risk-config.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__);\n\nvar accept_risk_config = {\n  accept_risk: {\n    supported_in: ['maltainvest'],\n    default_value: 1\n  }\n};\nvar acceptRiskConfig = function acceptRiskConfig(_ref, AcceptRiskForm) {\n  var real_account_signup_target = _ref.real_account_signup_target;\n  return {\n    header: {},\n    body: AcceptRiskForm,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultFields)(real_account_signup_target, accept_risk_config),\n    props: {\n      real_account_signup_target: real_account_signup_target\n    },\n    icon: '',\n    passthrough: []\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (acceptRiskConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2FjY2VwdC1yaXNrLWNvbmZpZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29uZmlncy9hY2NlcHQtcmlzay1jb25maWcudHM/ZTM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEZpZWxkcywgVFNjaGVtYSB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuXG5jb25zdCBhY2NlcHRfcmlza19jb25maWc6IFRTY2hlbWEgPSB7XG4gICAgYWNjZXB0X3Jpc2s6IHtcbiAgICAgICAgc3VwcG9ydGVkX2luOiBbJ21hbHRhaW52ZXN0J10sXG4gICAgICAgIGRlZmF1bHRfdmFsdWU6IDEsXG4gICAgfSxcbn07XG5cbmNvbnN0IGFjY2VwdFJpc2tDb25maWcgPSAoXG4gICAgeyByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCB9OiB7IHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0OiBzdHJpbmcgfSxcbiAgICBBY2NlcHRSaXNrRm9ybTogUmVhY3QuQ29tcG9uZW50XG4pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IHt9LFxuICAgICAgICBib2R5OiBBY2NlcHRSaXNrRm9ybSxcbiAgICAgICAgZm9ybV92YWx1ZTogZ2V0RGVmYXVsdEZpZWxkcyhyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgYWNjZXB0X3Jpc2tfY29uZmlnKSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0LFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgcGFzc3Rocm91Z2g6IFtdLFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhY2NlcHRSaXNrQ29uZmlnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Configs/accept-risk-config.ts\n");

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/accept-risk-config.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});