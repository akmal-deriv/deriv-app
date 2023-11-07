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
		module.exports = factory(require("@deriv/components"), require("@deriv/translations"), require("react"), require("react-router-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/translations", "react", "react-router-dom"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/translations"), require("react"), require("react-router-dom"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/translations"], root["react"], root["react-router-dom"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_router_dom__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Configs/get-status-badge-config.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar getStatusBadgeConfig = function getStatusBadgeConfig(account_status, openFailedVerificationModal, selected_account_type) {\n  switch (account_status) {\n    case 'pending':\n      return {\n        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n          i18n_default_text: \"<0>Pending verification</0>\",\n          components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            key: 0,\n            weight: \"bold\",\n            size: \"xxxs\",\n            color: \"var(--status-warning)\"\n          })]\n        }),\n        icon: 'IcAlertWarning'\n      };\n    case 'failed':\n      return {\n        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n          i18n_default_text: \"<0>Verification failed.</0> <1>Why?</1>\",\n          components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            key: 0,\n            weight: \"bold\",\n            size: \"xxxs\",\n            color: \"var(--status-danger)\"\n          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            key: 1,\n            className: \"link-verification-failed\",\n            onClick: function onClick() {\n              openFailedVerificationModal(selected_account_type);\n            }\n          })]\n        }),\n        icon: 'IcRedWarning'\n      };\n    case 'need_verification':\n      return {\n        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n          i18n_default_text: \"<0>Need verification.</0><1>Verify now</1>\",\n          components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            key: 0,\n            weight: \"bold\",\n            size: \"xxxs\",\n            color: \"var(--status-info)\"\n          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n            key: 1,\n            className: \"link-need-verification\",\n            to: \"/account/proof-of-identity\"\n          })]\n        }),\n        icon: 'IcAlertInfo'\n      };\n    default:\n      return {\n        text: '',\n        icon: ''\n      };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStatusBadgeConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2dldC1zdGF0dXMtYmFkZ2UtY29uZmlnLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29uZmlncy9nZXQtc3RhdHVzLWJhZGdlLWNvbmZpZy50c3g/MWE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5cbmNvbnN0IGdldFN0YXR1c0JhZGdlQ29uZmlnID0gKFxuICAgIGFjY291bnRfc3RhdHVzOiBzdHJpbmcsXG4gICAgb3BlbkZhaWxlZFZlcmlmaWNhdGlvbk1vZGFsOiAoc2VsZWN0ZWRfYWNjb3VudF90eXBlOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgc2VsZWN0ZWRfYWNjb3VudF90eXBlOiBzdHJpbmdcbikgPT4ge1xuICAgIHN3aXRjaCAoYWNjb3VudF9zdGF0dXMpIHtcbiAgICAgICAgY2FzZSAncGVuZGluZyc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IChcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgICAgICBpMThuX2RlZmF1bHRfdGV4dD0nPDA+UGVuZGluZyB2ZXJpZmljYXRpb248LzA+J1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17WzxUZXh0IGtleT17MH0gd2VpZ2h0PSdib2xkJyBzaXplPSd4eHhzJyBjb2xvcj0ndmFyKC0tc3RhdHVzLXdhcm5pbmcpJyAvPl19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBpY29uOiAnSWNBbGVydFdhcm5pbmcnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnZmFpbGVkJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogKFxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSc8MD5WZXJpZmljYXRpb24gZmFpbGVkLjwvMD4gPDE+V2h5PzwvMT4nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQga2V5PXswfSB3ZWlnaHQ9J2JvbGQnIHNpemU9J3h4eHMnIGNvbG9yPSd2YXIoLS1zdGF0dXMtZGFuZ2VyKScgLz4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpbmstdmVyaWZpY2F0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkZhaWxlZFZlcmlmaWNhdGlvbk1vZGFsKHNlbGVjdGVkX2FjY291bnRfdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgaWNvbjogJ0ljUmVkV2FybmluZycsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICduZWVkX3ZlcmlmaWNhdGlvbic6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IChcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgICAgICBpMThuX2RlZmF1bHRfdGV4dD0nPDA+TmVlZCB2ZXJpZmljYXRpb24uPC8wPjwxPlZlcmlmeSBub3c8LzE+J1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGtleT17MH0gd2VpZ2h0PSdib2xkJyBzaXplPSd4eHhzJyBjb2xvcj0ndmFyKC0tc3RhdHVzLWluZm8pJyAvPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9ezF9IGNsYXNzTmFtZT0nbGluay1uZWVkLXZlcmlmaWNhdGlvbicgdG89Jy9hY2NvdW50L3Byb29mLW9mLWlkZW50aXR5JyAvPixcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBpY29uOiAnSWNBbGVydEluZm8nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgICB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFN0YXR1c0JhZGdlQ29uZmlnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Configs/get-status-badge-config.tsx\n");

/***/ }),

/***/ "@deriv/components":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/translations":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ }),

/***/ "react":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-router-dom":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_router_dom__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/get-status-badge-config.tsx");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});