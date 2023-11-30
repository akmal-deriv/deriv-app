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
		module.exports = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/shared", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/shared"], root["@deriv/translations"], root["react"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/icon-message-content/icon-message-content.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Z\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../../../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\nvar IconMessageContent = function IconMessageContent(_ref) {\n  var children = _ref.children,\n    className = _ref.className,\n    full_width = _ref.full_width,\n    icon = _ref.icon,\n    message = _ref.message,\n    text = _ref.text;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Div100vhContainer, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('account-management__message-wrapper', {\n      'account-management__message-wrapper-full-width': full_width\n    }),\n    is_disabled: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.isDesktop)(),\n    height_offset: \"110px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('account-management__message-content', _defineProperty({}, \"\".concat(className, \"__message-content\"), className))\n  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('account-management__message-icon', _defineProperty({}, \"\".concat(className, \"__message-icon\"), className))\n  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    as: \"div\",\n    color: \"general\",\n    weight: \"bold\",\n    size: \"s\",\n    align: \"center\",\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('account-management__message', _defineProperty({}, \"\".concat(className, \"__message\"), className))\n  }, message), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"account-management__text-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_defineProperty({}, \"\".concat(className, \"__text\"), className)),\n    as: \"p\",\n    size: \"xs\",\n    align: \"center\"\n  }, text)), children));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMessageContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2ljb24tbWVzc2FnZS1jb250ZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBSUE7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFRQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2ljb24tbWVzc2FnZS1jb250ZW50LnRzeD8wMGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IERpdjEwMHZoQ29udGFpbmVyLCBUZXh0IH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgaXNEZXNrdG9wIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5cbnR5cGUgVEljb25NZXNzYWdlQ29udGVudCA9IHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgZnVsbF93aWR0aD86IGJvb2xlYW47XG4gICAgaWNvbjogUmVhY3QuUmVhY3RFbGVtZW50O1xuICAgIG1lc3NhZ2U6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICB0ZXh0Pzogc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50O1xufTtcblxuY29uc3QgSWNvbk1lc3NhZ2VDb250ZW50ID0gKHtcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWUsXG4gICAgZnVsbF93aWR0aCxcbiAgICBpY29uLFxuICAgIG1lc3NhZ2UsXG4gICAgdGV4dCxcbn06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPFRJY29uTWVzc2FnZUNvbnRlbnQ+KSA9PiAoXG4gICAgPERpdjEwMHZoQ29udGFpbmVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X19tZXNzYWdlLXdyYXBwZXInLCB7XG4gICAgICAgICAgICAnYWNjb3VudC1tYW5hZ2VtZW50X19tZXNzYWdlLXdyYXBwZXItZnVsbC13aWR0aCc6IGZ1bGxfd2lkdGgsXG4gICAgICAgIH0pfVxuICAgICAgICBpc19kaXNhYmxlZD17aXNEZXNrdG9wKCl9XG4gICAgICAgIGhlaWdodF9vZmZzZXQ9JzExMHB4J1xuICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdhY2NvdW50LW1hbmFnZW1lbnRfX21lc3NhZ2UtY29udGVudCcsIHtcbiAgICAgICAgICAgICAgICBbYCR7Y2xhc3NOYW1lfV9fbWVzc2FnZS1jb250ZW50YF06IGNsYXNzTmFtZSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2FjY291bnQtbWFuYWdlbWVudF9fbWVzc2FnZS1pY29uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgW2Ake2NsYXNzTmFtZX1fX21lc3NhZ2UtaWNvbmBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBhcz0nZGl2J1xuICAgICAgICAgICAgICAgIGNvbG9yPSdnZW5lcmFsJ1xuICAgICAgICAgICAgICAgIHdlaWdodD0nYm9sZCdcbiAgICAgICAgICAgICAgICBzaXplPSdzJ1xuICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdhY2NvdW50LW1hbmFnZW1lbnRfX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIFtgJHtjbGFzc05hbWV9X19tZXNzYWdlYF06IGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIHt0ZXh0ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWNjb3VudC1tYW5hZ2VtZW50X190ZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtjbGFzc05hbWV9X190ZXh0YF06IGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9J3AnXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPSd4cydcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICA8L0RpdjEwMHZoQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbk1lc3NhZ2VDb250ZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/icon-message-content/icon-message-content.tsx\n");

/***/ }),

/***/ "./Components/icon-message-content/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icon_message_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./Components/icon-message-content/icon-message-content.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_icon_message_content__WEBPACK_IMPORTED_MODULE_0__/* [\"default\"] */ .Z);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2luZGV4LnRzPzdmZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEljb25NZXNzYWdlQ29udGVudCBmcm9tICcuL2ljb24tbWVzc2FnZS1jb250ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgSWNvbk1lc3NhZ2VDb250ZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/icon-message-content/index.ts\n");

/***/ }),

/***/ "./Components/poa/continue-trading-button/continue-trading-button.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"M\": () => (/* binding */ ContinueTradingButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../../../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/**\n * Renders a button that redirects to the trading platform\n * @name ContinueTradingButton\n * @param className - Styles to be applied to the button\n * @returns React Element\n */\nvar ContinueTradingButton = function ContinueTradingButton(_ref) {\n  var className = _ref.className;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.ButtonLink, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('account-management__button', className),\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    className: \"dc-btn__text\",\n    as: \"p\",\n    weight: \"bold\",\n    \"data-testid\": \"continue_btn_text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: \"Continue trading\"\n  })));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS9jb250aW51ZS10cmFkaW5nLWJ1dHRvbi9jb250aW51ZS10cmFkaW5nLWJ1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9hL2NvbnRpbnVlLXRyYWRpbmctYnV0dG9uL2NvbnRpbnVlLXRyYWRpbmctYnV0dG9uLnRzeD9iMzNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IEJ1dHRvbkxpbmssIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuXG50eXBlIFRDb250aW51ZVRyYWRpbmdCdXR0b25Qcm9wcyA9IHsgY2xhc3NOYW1lPzogc3RyaW5nIH07XG5cbi8qKlxuICogUmVuZGVycyBhIGJ1dHRvbiB0aGF0IHJlZGlyZWN0cyB0byB0aGUgdHJhZGluZyBwbGF0Zm9ybVxuICogQG5hbWUgQ29udGludWVUcmFkaW5nQnV0dG9uXG4gKiBAcGFyYW0gY2xhc3NOYW1lIC0gU3R5bGVzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGJ1dHRvblxuICogQHJldHVybnMgUmVhY3QgRWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgQ29udGludWVUcmFkaW5nQnV0dG9uID0gKHsgY2xhc3NOYW1lIH06IFRDb250aW51ZVRyYWRpbmdCdXR0b25Qcm9wcykgPT4gKFxuICAgIDxCdXR0b25MaW5rIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X19idXR0b24nLCBjbGFzc05hbWUpfSB0bz0nLyc+XG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nZGMtYnRuX190ZXh0JyBhcz0ncCcgd2VpZ2h0PSdib2xkJyBkYXRhLXRlc3RpZD0nY29udGludWVfYnRuX3RleHQnPlxuICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdDb250aW51ZSB0cmFkaW5nJyAvPlxuICAgICAgICA8L1RleHQ+XG4gICAgPC9CdXR0b25MaW5rPlxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/poa/continue-trading-button/continue-trading-button.tsx\n");

/***/ }),

/***/ "./Components/poa/continue-trading-button/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Z\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _continue_trading_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./Components/poa/continue-trading-button/continue-trading-button.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_continue_trading_button__WEBPACK_IMPORTED_MODULE_0__/* .ContinueTradingButton */ .M);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS9jb250aW51ZS10cmFkaW5nLWJ1dHRvbi9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9wb2EvY29udGludWUtdHJhZGluZy1idXR0b24vaW5kZXgudHM/MTE1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250aW51ZVRyYWRpbmdCdXR0b24gfSBmcm9tICcuL2NvbnRpbnVlLXRyYWRpbmctYnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgQ29udGludWVUcmFkaW5nQnV0dG9uO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poa/continue-trading-button/index.ts\n");

/***/ }),

/***/ "./Components/poa/status/submitted/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ submitted)\n});\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n// EXTERNAL MODULE: external \"@deriv/components\"\nvar components_ = __webpack_require__(\"@deriv/components\");\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n// EXTERNAL MODULE: external \"@deriv/shared\"\nvar shared_ = __webpack_require__(\"@deriv/shared\");\n// EXTERNAL MODULE: ./Components/poa/continue-trading-button/index.ts\nvar continue_trading_button = __webpack_require__(\"./Components/poa/continue-trading-button/index.ts\");\n// EXTERNAL MODULE: ./Components/icon-message-content/index.ts\nvar icon_message_content = __webpack_require__(\"./Components/icon-message-content/index.ts\");\n// EXTERNAL MODULE: ./Components/poi/poi-button/index.ts\nvar poi_button = __webpack_require__(\"./Components/poi/poi-button/index.ts\");\n;// CONCATENATED MODULE: ./Components/poa/status/submitted/submitted.tsx\n\n\n\n\n\n\n\nvar Submitted = function Submitted(_ref) {\n  var needs_poi = _ref.needs_poi,\n    redirect_button = _ref.redirect_button;\n  var message = (0,translations_.localize)('Your documents were submitted successfully');\n  var is_redirected_from_platform = (0,shared_.isNavigationFromP2P)() || (0,shared_.isNavigationFromDerivGO)();\n  if (needs_poi) {\n    return /*#__PURE__*/external_react_default().createElement(\"div\", {\n      className: \"account-management__container\"\n    }, /*#__PURE__*/external_react_default().createElement(icon_message_content[\"default\"], {\n      message: message,\n      icon: /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n        icon: \"IcPoaVerified\",\n        size: 128\n      })\n    }, /*#__PURE__*/external_react_default().createElement(\"div\", {\n      className: \"account-management__text-container\"\n    }, /*#__PURE__*/external_react_default().createElement(components_.Text, {\n      align: \"center\",\n      size: \"xs\",\n      as: \"p\"\n    }, (0,translations_.localize)('We’ll review your documents and notify you of its status within 1 to 3 days.')), /*#__PURE__*/external_react_default().createElement(components_.Text, {\n      align: \"center\",\n      size: \"xs\",\n      as: \"p\"\n    }, (0,translations_.localize)('You must also submit a proof of identity.'))), /*#__PURE__*/external_react_default().createElement(poi_button/* default */.Z, null)));\n  }\n  return /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: \"account-management__container\"\n  }, /*#__PURE__*/external_react_default().createElement(icon_message_content[\"default\"], {\n    message: message,\n    text: (0,translations_.localize)('We’ll review your documents and notify you of its status within 1 to 3 days.'),\n    icon: /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n      icon: \"IcPoaVerified\",\n      size: 128\n    })\n  }, redirect_button || !is_redirected_from_platform && /*#__PURE__*/external_react_default().createElement(continue_trading_button/* default */.Z, null)));\n};\n;// CONCATENATED MODULE: ./Components/poa/status/submitted/index.ts\n\n/* harmony default export */ const submitted = (Submitted);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS9zdGF0dXMvc3VibWl0dGVkL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOztBQ3hDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL3BvYS9zdGF0dXMvc3VibWl0dGVkL3N1Ym1pdHRlZC50c3g/YjQ1NCIsIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9hL3N0YXR1cy9zdWJtaXR0ZWQvaW5kZXgudHM/NjU3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbiwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBpc05hdmlnYXRpb25Gcm9tUDJQLCBpc05hdmlnYXRpb25Gcm9tRGVyaXZHTyB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IENvbnRpbnVlVHJhZGluZ0J1dHRvbiBmcm9tICcuLi8uLi9jb250aW51ZS10cmFkaW5nLWJ1dHRvbic7XG5pbXBvcnQgSWNvbk1lc3NhZ2VDb250ZW50IGZyb20gJy4uLy4uLy4uL2ljb24tbWVzc2FnZS1jb250ZW50JztcbmltcG9ydCBQb2lCdXR0b24gZnJvbSAnLi4vLi4vLi4vcG9pL3BvaS1idXR0b24nO1xuaW1wb3J0IHsgVFBvYVN0YXR1c1Byb3BzIH0gZnJvbSAnLi4vLi4vLi4vLi4vVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgU3VibWl0dGVkID0gKHsgbmVlZHNfcG9pLCByZWRpcmVjdF9idXR0b24gfTogVFBvYVN0YXR1c1Byb3BzKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGxvY2FsaXplKCdZb3VyIGRvY3VtZW50cyB3ZXJlIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICBjb25zdCBpc19yZWRpcmVjdGVkX2Zyb21fcGxhdGZvcm0gPSBpc05hdmlnYXRpb25Gcm9tUDJQKCkgfHwgaXNOYXZpZ2F0aW9uRnJvbURlcml2R08oKTtcbiAgICBpZiAobmVlZHNfcG9pKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWNjb3VudC1tYW5hZ2VtZW50X19jb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxJY29uTWVzc2FnZUNvbnRlbnQgbWVzc2FnZT17bWVzc2FnZX0gaWNvbj17PEljb24gaWNvbj0nSWNQb2FWZXJpZmllZCcgc2l6ZT17MTI4fSAvPn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2NvdW50LW1hbmFnZW1lbnRfX3RleHQtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFsaWduPSdjZW50ZXInIHNpemU9J3hzJyBhcz0ncCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2FsaXplKCdXZeKAmWxsIHJldmlldyB5b3VyIGRvY3VtZW50cyBhbmQgbm90aWZ5IHlvdSBvZiBpdHMgc3RhdHVzIHdpdGhpbiAxIHRvIDMgZGF5cy4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFsaWduPSdjZW50ZXInIHNpemU9J3hzJyBhcz0ncCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2FsaXplKCdZb3UgbXVzdCBhbHNvIHN1Ym1pdCBhIHByb29mIG9mIGlkZW50aXR5LicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFBvaUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbk1lc3NhZ2VDb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2NvdW50LW1hbmFnZW1lbnRfX2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8SWNvbk1lc3NhZ2VDb250ZW50XG4gICAgICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgICB0ZXh0PXtsb2NhbGl6ZSgnV2XigJlsbCByZXZpZXcgeW91ciBkb2N1bWVudHMgYW5kIG5vdGlmeSB5b3Ugb2YgaXRzIHN0YXR1cyB3aXRoaW4gMSB0byAzIGRheXMuJyl9XG4gICAgICAgICAgICAgICAgaWNvbj17PEljb24gaWNvbj0nSWNQb2FWZXJpZmllZCcgc2l6ZT17MTI4fSAvPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cmVkaXJlY3RfYnV0dG9uIHx8ICghaXNfcmVkaXJlY3RlZF9mcm9tX3BsYXRmb3JtICYmIDxDb250aW51ZVRyYWRpbmdCdXR0b24gLz4pfVxuICAgICAgICAgICAgPC9JY29uTWVzc2FnZUNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IHsgU3VibWl0dGVkIGFzIFBvYVN1Ym1pdHRlZCB9IGZyb20gJy4vc3VibWl0dGVkJztcblxuZXhwb3J0IGRlZmF1bHQgUG9hU3VibWl0dGVkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poa/status/submitted/index.ts\n");

/***/ }),

/***/ "./Components/poi/poi-button/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Z\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _poi_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./Components/poi/poi-button/poi-button.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_poi_button__WEBPACK_IMPORTED_MODULE_0__/* .PoiButton */ .x);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvaS9wb2ktYnV0dG9uL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL3BvaS9wb2ktYnV0dG9uL2luZGV4LnRzPzI1YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9pQnV0dG9uIH0gZnJvbSAnLi9wb2ktYnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgUG9pQnV0dG9uO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poi/poi-button/index.ts\n");

/***/ }),

/***/ "./Components/poi/poi-button/poi-button.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"x\": () => (/* binding */ PoiButton)\n/* harmony export */ });\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar PoiButton = function PoiButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_0__.ButtonLink, {\n    className: \"account-management__button\",\n    to: \"/account/proof-of-identity\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_0__.Text, {\n    className: \"dc-btn__text\",\n    weight: \"bold\",\n    as: \"p\"\n  }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Proof of identity')));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvaS9wb2ktYnV0dG9uL3BvaS1idXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL3BvaS9wb2ktYnV0dG9uL3BvaS1idXR0b24udHN4PzEwNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uTGluaywgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgUG9pQnV0dG9uID0gKCkgPT4gKFxuICAgIDxCdXR0b25MaW5rIGNsYXNzTmFtZT0nYWNjb3VudC1tYW5hZ2VtZW50X19idXR0b24nIHRvPScvYWNjb3VudC9wcm9vZi1vZi1pZGVudGl0eSc+XG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nZGMtYnRuX190ZXh0JyB3ZWlnaHQ9J2JvbGQnIGFzPSdwJz5cbiAgICAgICAgICAgIHtsb2NhbGl6ZSgnUHJvb2Ygb2YgaWRlbnRpdHknKX1cbiAgICAgICAgPC9UZXh0PlxuICAgIDwvQnV0dG9uTGluaz5cbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/poi/poi-button/poi-button.tsx\n");

/***/ }),

/***/ "../../../node_modules/classnames/index.js":
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\tvar nativeCodeString = '[native code]';\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4uLy4uLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzNkY2QiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../node_modules/classnames/index.js\n");

/***/ }),

/***/ "@deriv/components":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

/***/ }),

/***/ "@deriv/translations":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ }),

/***/ "react":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Components/poa/status/submitted/index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});