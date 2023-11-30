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
		module.exports = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"), require("react-router-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/shared", "@deriv/translations", "react", "react-router-dom"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"), require("react-router-dom"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/shared"], root["@deriv/translations"], root["react"], root["react-router-dom"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_router_dom__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Configs/get-status-badge-config.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar getStatusBadgeConfig = function getStatusBadgeConfig(account_status, openFailedVerificationModal, selected_account_type) {\n  var BadgeTextComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    key: 0,\n    weight: \"bold\",\n    size: \"xxxs\",\n    color: \"warning\"\n  });\n  switch (account_status) {\n    case _deriv_shared__WEBPACK_IMPORTED_MODULE_3__.MT5_ACCOUNT_STATUS.PENDING:\n      return {\n        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n          i18n_default_text: \"<0>Pending verification</0>\",\n          components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            key: 0,\n            weight: \"bold\",\n            size: \"xxxs\",\n            color: \"var(--status-warning)\"\n          })]\n        }),\n        icon: 'IcAlertWarning'\n      };\n    case _deriv_shared__WEBPACK_IMPORTED_MODULE_3__.MT5_ACCOUNT_STATUS.FAILED:\n      return {\n        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n          i18n_default_text: \"<0>Verification failed.</0> <1>Why?</1>\",\n          components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            key: 0,\n            weight: \"bold\",\n            size: \"xxxs\",\n            color: \"var(--status-danger)\"\n          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            key: 1,\n            className: \"link-verification-failed\",\n            onClick: function onClick() {\n              openFailedVerificationModal === null || openFailedVerificationModal === void 0 ? void 0 : openFailedVerificationModal(selected_account_type !== null && selected_account_type !== void 0 ? selected_account_type : '');\n            }\n          })]\n        }),\n        icon: 'IcRedWarning'\n      };\n    case _deriv_shared__WEBPACK_IMPORTED_MODULE_3__.MT5_ACCOUNT_STATUS.NEED_VERIFICATION:\n      return {\n        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n          i18n_default_text: \"<0>Need verification.</0><1>Verify now</1>\",\n          components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            key: 0,\n            weight: \"bold\",\n            size: \"xxxs\",\n            color: \"var(--status-info)\"\n          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n            key: 1,\n            className: \"link-need-verification\",\n            to: \"/account/proof-of-identity\"\n          })]\n        }),\n        icon: 'IcAlertInfo'\n      };\n    case _deriv_shared__WEBPACK_IMPORTED_MODULE_3__.MT5_ACCOUNT_STATUS.MIGRATED_WITH_POSITION:\n      return {\n        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n          i18n_default_text: \"<0>No new positions</0>\",\n          components: [BadgeTextComponent]\n        }),\n        icon: 'IcAlertWarning'\n      };\n    case _deriv_shared__WEBPACK_IMPORTED_MODULE_3__.MT5_ACCOUNT_STATUS.MIGRATED_WITHOUT_POSITION:\n      return {\n        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n          i18n_default_text: \"<0>Account closed</0>\",\n          components: [BadgeTextComponent]\n        }),\n        icon: 'IcAlertWarning'\n      };\n    default:\n      return {\n        text: '',\n        icon: ''\n      };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStatusBadgeConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2dldC1zdGF0dXMtYmFkZ2UtY29uZmlnLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29uZmlncy9nZXQtc3RhdHVzLWJhZGdlLWNvbmZpZy50c3g/MWE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IE1UNV9BQ0NPVU5UX1NUQVRVUyB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcblxuY29uc3QgZ2V0U3RhdHVzQmFkZ2VDb25maWcgPSAoXG4gICAgYWNjb3VudF9zdGF0dXM6IHR5cGVvZiBNVDVfQUNDT1VOVF9TVEFUVVNba2V5b2YgdHlwZW9mIE1UNV9BQ0NPVU5UX1NUQVRVU10sXG4gICAgb3BlbkZhaWxlZFZlcmlmaWNhdGlvbk1vZGFsPzogKHNlbGVjdGVkX2FjY291bnRfdHlwZTogc3RyaW5nKSA9PiB2b2lkLFxuICAgIHNlbGVjdGVkX2FjY291bnRfdHlwZT86IHN0cmluZ1xuKSA9PiB7XG4gICAgY29uc3QgQmFkZ2VUZXh0Q29tcG9uZW50ID0gPFRleHQga2V5PXswfSB3ZWlnaHQ9J2JvbGQnIHNpemU9J3h4eHMnIGNvbG9yPSd3YXJuaW5nJyAvPjtcblxuICAgIHN3aXRjaCAoYWNjb3VudF9zdGF0dXMpIHtcbiAgICAgICAgY2FzZSBNVDVfQUNDT1VOVF9TVEFUVVMuUEVORElORzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogKFxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSc8MD5QZW5kaW5nIHZlcmlmaWNhdGlvbjwvMD4nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtbPFRleHQga2V5PXswfSB3ZWlnaHQ9J2JvbGQnIHNpemU9J3h4eHMnIGNvbG9yPSd2YXIoLS1zdGF0dXMtd2FybmluZyknIC8+XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGljb246ICdJY0FsZXJ0V2FybmluZycsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIE1UNV9BQ0NPVU5UX1NUQVRVUy5GQUlMRUQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IChcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgICAgICBpMThuX2RlZmF1bHRfdGV4dD0nPDA+VmVyaWZpY2F0aW9uIGZhaWxlZC48LzA+IDwxPldoeT88LzE+J1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGtleT17MH0gd2VpZ2h0PSdib2xkJyBzaXplPSd4eHhzJyBjb2xvcj0ndmFyKC0tc3RhdHVzLWRhbmdlciknIC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsaW5rLXZlcmlmaWNhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5GYWlsZWRWZXJpZmljYXRpb25Nb2RhbD8uKHNlbGVjdGVkX2FjY291bnRfdHlwZSA/PyAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgaWNvbjogJ0ljUmVkV2FybmluZycsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIE1UNV9BQ0NPVU5UX1NUQVRVUy5ORUVEX1ZFUklGSUNBVElPTjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogKFxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSc8MD5OZWVkIHZlcmlmaWNhdGlvbi48LzA+PDE+VmVyaWZ5IG5vdzwvMT4nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQga2V5PXswfSB3ZWlnaHQ9J2JvbGQnIHNpemU9J3h4eHMnIGNvbG9yPSd2YXIoLS1zdGF0dXMtaW5mbyknIC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17MX0gY2xhc3NOYW1lPSdsaW5rLW5lZWQtdmVyaWZpY2F0aW9uJyB0bz0nL2FjY291bnQvcHJvb2Ytb2YtaWRlbnRpdHknIC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGljb246ICdJY0FsZXJ0SW5mbycsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIE1UNV9BQ0NPVU5UX1NUQVRVUy5NSUdSQVRFRF9XSVRIX1BPU0lUSU9OOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9JzwwPk5vIG5ldyBwb3NpdGlvbnM8LzA+JyBjb21wb25lbnRzPXtbQmFkZ2VUZXh0Q29tcG9uZW50XX0gLz4sXG4gICAgICAgICAgICAgICAgaWNvbjogJ0ljQWxlcnRXYXJuaW5nJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgTVQ1X0FDQ09VTlRfU1RBVFVTLk1JR1JBVEVEX1dJVEhPVVRfUE9TSVRJT046XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nPDA+QWNjb3VudCBjbG9zZWQ8LzA+JyBjb21wb25lbnRzPXtbQmFkZ2VUZXh0Q29tcG9uZW50XX0gLz4sXG4gICAgICAgICAgICAgICAgaWNvbjogJ0ljQWxlcnRXYXJuaW5nJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTdGF0dXNCYWRnZUNvbmZpZztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Configs/get-status-badge-config.tsx\n");

/***/ }),

/***/ "@deriv/components":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

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