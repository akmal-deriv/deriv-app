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

/***/ "./Components/poi/missing-personal-details/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ missing_personal_details)\n});\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n// EXTERNAL MODULE: external \"@deriv/shared\"\nvar shared_ = __webpack_require__(\"@deriv/shared\");\n// EXTERNAL MODULE: external \"@deriv/components\"\nvar components_ = __webpack_require__(\"@deriv/components\");\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n// EXTERNAL MODULE: ./Components/icon-message-content/index.ts\nvar icon_message_content = __webpack_require__(\"./Components/icon-message-content/index.ts\");\n;// CONCATENATED MODULE: ./Components/poi/missing-personal-details/missing-personal-details.tsx\n\n\n\n\n\nvar GoToPersonalDetailsButton = function GoToPersonalDetailsButton(_ref) {\n  var anchor = _ref.anchor,\n    from = _ref.from,\n    text = _ref.text;\n  var from_string = from ? \"?from=\".concat(from) : '';\n  var anchor_string = anchor ? \"#\".concat(anchor) : '';\n  return /*#__PURE__*/external_react_default().createElement(components_.ButtonLink, {\n    to: \"/account/personal-details\".concat(from_string).concat(anchor_string)\n  }, /*#__PURE__*/external_react_default().createElement(components_.Text, {\n    className: \"dc-btn__text\",\n    weight: \"bold\",\n    as: \"p\"\n  }, text !== null && text !== void 0 ? text : (0,translations_.localize)('Go to personal details')));\n};\nvar MissingPersonalDetails = function MissingPersonalDetails(_ref2) {\n  var has_invalid_postal_code = _ref2.has_invalid_postal_code,\n    from = _ref2.from;\n  var _React$useContext = external_react_default().useContext(shared_.PlatformContext),\n    is_appstore = _React$useContext.is_appstore;\n  if (has_invalid_postal_code) return /*#__PURE__*/external_react_default().createElement(icon_message_content[\"default\"], {\n    message: (0,translations_.localize)('Your postal code is invalid'),\n    text: (0,translations_.localize)('Please check and update your postal code before submitting proof of identity.'),\n    icon: /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n      icon: \"IcAccountMissingDetails\",\n      size: 128\n    })\n  }, /*#__PURE__*/external_react_default().createElement(GoToPersonalDetailsButton, {\n    anchor: \"address_postcode\",\n    from: from,\n    text: (0,translations_.localize)('Update postal code')\n  }));\n  return /*#__PURE__*/external_react_default().createElement(icon_message_content[\"default\"], {\n    message: (0,translations_.localize)('Your personal details are missing'),\n    text: (0,translations_.localize)('Please complete your personal details before you verify your identity.'),\n    icon: /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n      icon: is_appstore ? 'IcAccountMissingDetailsDashboard' : 'IcAccountMissingDetails',\n      size: 128\n    })\n  }, /*#__PURE__*/external_react_default().createElement(GoToPersonalDetailsButton, {\n    from: from\n  }));\n};\n;// CONCATENATED MODULE: ./Components/poi/missing-personal-details/index.js\n\n/* harmony default export */ const missing_personal_details = (MissingPersonalDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvaS9taXNzaW5nLXBlcnNvbmFsLWRldGFpbHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFHQTs7QUNwREE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9wb2kvbWlzc2luZy1wZXJzb25hbC1kZXRhaWxzL21pc3NpbmctcGVyc29uYWwtZGV0YWlscy50c3g/NWRiOSIsIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9pL21pc3NpbmctcGVyc29uYWwtZGV0YWlscy9pbmRleC5qcz9mOTI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQbGF0Zm9ybUNvbnRleHQgfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcbmltcG9ydCB7IEJ1dHRvbkxpbmssIEljb24sIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IEljb25NZXNzYWdlQ29udGVudCBmcm9tICcuLi8uLi9pY29uLW1lc3NhZ2UtY29udGVudCc7XG5cbnR5cGUgVEdvVG9QZXJzb25hbERldGFpbHNCdXR0b24gPSB7XG4gICAgaGFzX2ludmFsaWRfcG9zdGFsX2NvZGU/OiBib29sZWFuO1xuICAgIGFuY2hvcj86IHN0cmluZztcbiAgICBmcm9tPzogc3RyaW5nO1xuICAgIHRleHQ/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBHb1RvUGVyc29uYWxEZXRhaWxzQnV0dG9uID0gKHsgYW5jaG9yLCBmcm9tLCB0ZXh0IH06IFRHb1RvUGVyc29uYWxEZXRhaWxzQnV0dG9uKSA9PiB7XG4gICAgY29uc3QgZnJvbV9zdHJpbmcgPSBmcm9tID8gYD9mcm9tPSR7ZnJvbX1gIDogJyc7XG4gICAgY29uc3QgYW5jaG9yX3N0cmluZyA9IGFuY2hvciA/IGAjJHthbmNob3J9YCA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25MaW5rIHRvPXtgL2FjY291bnQvcGVyc29uYWwtZGV0YWlscyR7ZnJvbV9zdHJpbmd9JHthbmNob3Jfc3RyaW5nfWB9PlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdkYy1idG5fX3RleHQnIHdlaWdodD0nYm9sZCcgYXM9J3AnPlxuICAgICAgICAgICAgICAgIHt0ZXh0ID8/IGxvY2FsaXplKCdHbyB0byBwZXJzb25hbCBkZXRhaWxzJyl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IE1pc3NpbmdQZXJzb25hbERldGFpbHMgPSAoeyBoYXNfaW52YWxpZF9wb3N0YWxfY29kZSwgZnJvbSB9OiBUR29Ub1BlcnNvbmFsRGV0YWlsc0J1dHRvbikgPT4ge1xuICAgIGNvbnN0IHsgaXNfYXBwc3RvcmUgfSA9IFJlYWN0LnVzZUNvbnRleHQoUGxhdGZvcm1Db250ZXh0KTtcbiAgICBpZiAoaGFzX2ludmFsaWRfcG9zdGFsX2NvZGUpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SWNvbk1lc3NhZ2VDb250ZW50XG4gICAgICAgICAgICAgICAgbWVzc2FnZT17bG9jYWxpemUoJ1lvdXIgcG9zdGFsIGNvZGUgaXMgaW52YWxpZCcpfVxuICAgICAgICAgICAgICAgIHRleHQ9e2xvY2FsaXplKCdQbGVhc2UgY2hlY2sgYW5kIHVwZGF0ZSB5b3VyIHBvc3RhbCBjb2RlIGJlZm9yZSBzdWJtaXR0aW5nIHByb29mIG9mIGlkZW50aXR5LicpfVxuICAgICAgICAgICAgICAgIGljb249ezxJY29uIGljb249J0ljQWNjb3VudE1pc3NpbmdEZXRhaWxzJyBzaXplPXsxMjh9IC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxHb1RvUGVyc29uYWxEZXRhaWxzQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj0nYWRkcmVzc19wb3N0Y29kZSdcbiAgICAgICAgICAgICAgICAgICAgZnJvbT17ZnJvbX1cbiAgICAgICAgICAgICAgICAgICAgdGV4dD17bG9jYWxpemUoJ1VwZGF0ZSBwb3N0YWwgY29kZScpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ljb25NZXNzYWdlQ29udGVudD5cbiAgICAgICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SWNvbk1lc3NhZ2VDb250ZW50XG4gICAgICAgICAgICBtZXNzYWdlPXtsb2NhbGl6ZSgnWW91ciBwZXJzb25hbCBkZXRhaWxzIGFyZSBtaXNzaW5nJyl9XG4gICAgICAgICAgICB0ZXh0PXtsb2NhbGl6ZSgnUGxlYXNlIGNvbXBsZXRlIHlvdXIgcGVyc29uYWwgZGV0YWlscyBiZWZvcmUgeW91IHZlcmlmeSB5b3VyIGlkZW50aXR5LicpfVxuICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj17aXNfYXBwc3RvcmUgPyAnSWNBY2NvdW50TWlzc2luZ0RldGFpbHNEYXNoYm9hcmQnIDogJ0ljQWNjb3VudE1pc3NpbmdEZXRhaWxzJ30gc2l6ZT17MTI4fSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgICA8R29Ub1BlcnNvbmFsRGV0YWlsc0J1dHRvbiBmcm9tPXtmcm9tfSAvPlxuICAgICAgICA8L0ljb25NZXNzYWdlQ29udGVudD5cbiAgICApO1xufTtcbiIsImltcG9ydCB7IE1pc3NpbmdQZXJzb25hbERldGFpbHMgfSBmcm9tICcuL21pc3NpbmctcGVyc29uYWwtZGV0YWlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IE1pc3NpbmdQZXJzb25hbERldGFpbHM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/poi/missing-personal-details/index.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Components/poi/missing-personal-details/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});