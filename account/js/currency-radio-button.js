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

/***/ "./Components/currency-selector/radio-button.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ radio_button)\n});\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n// EXTERNAL MODULE: ../../../node_modules/classnames/index.js\nvar classnames = __webpack_require__(\"../../../node_modules/classnames/index.js\");\nvar classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);\n// EXTERNAL MODULE: external \"@deriv/components\"\nvar components_ = __webpack_require__(\"@deriv/components\");\n// EXTERNAL MODULE: external \"@deriv/shared\"\nvar shared_ = __webpack_require__(\"@deriv/shared\");\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n;// CONCATENATED MODULE: ./Components/currency-selector/ust-popover.tsx\n\n\n\nvar USTPopover = function USTPopover(_ref) {\n  var id = _ref.id;\n  var popover_message;\n  if (/^UST$/i.test(id)) {\n    popover_message = /*#__PURE__*/external_react_default().createElement(translations_.Localize, {\n      i18n_default_text: 'Tether as an Omni token (USDT) is a version of Tether that is hosted on the Omni layer on the Bitcoin blockchain.',\n      components: [/*#__PURE__*/external_react_default().createElement(\"br\", {\n        key: 0\n      })]\n    });\n  } else if (/^tUSDT$/i.test(id)) {\n    popover_message = /*#__PURE__*/external_react_default().createElement(translations_.Localize, {\n      i18n_default_text: 'Tether as a TRC20 token (tUSDT) is a version of Tether that is hosted on Tron.'\n    });\n  } else {\n    popover_message = /*#__PURE__*/external_react_default().createElement(translations_.Localize, {\n      i18n_default_text: 'Tether as an ERC20 token (eUSDT) is a version of Tether that is hosted on Ethereum.'\n    });\n  }\n  return /*#__PURE__*/external_react_default().createElement(components_.Popover, {\n    alignment: \"top\",\n    className: \"currency-list__popover\",\n    disable_message_icon: true,\n    icon: \"info\",\n    is_bubble_hover_enabled: true,\n    message: popover_message,\n    zIndex: \"9999\"\n  });\n};\n/* harmony default export */ const ust_popover = (USTPopover);\n;// CONCATENATED MODULE: ./Components/currency-selector/radio-button.tsx\nvar _excluded = [\"field\", \"icon\", \"id\", \"label\", \"second_line_label\", \"onClick\", \"className\"];\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n/**\n *  RadioButton component to select currency\n * @name RadioButton\n * @param {React.InputHTMLAttributes<HTMLInputElement>} field - field props given by Formik\n * @param {string} icon - icon name\n * @param {string} id - currency id\n * @param {string} label - currency name\n * @param {string} second_line_label - currency code\n * @param {Function} onClick - function to be called on click\n * @param {AllHTMLAttributes<HTMLInputElement | HTMLLabelElement>} props - other props to be passed\n * @returns {React.ReactNode} - returns a React node\n */\n\nvar RadioButton = function RadioButton(_ref) {\n  var _ref$field = _ref.field,\n    name = _ref$field.name,\n    value = _ref$field.value,\n    onChange = _ref$field.onChange,\n    onBlur = _ref$field.onBlur,\n    icon = _ref.icon,\n    id = _ref.id,\n    label = _ref.label,\n    second_line_label = _ref.second_line_label,\n    onClick = _ref.onClick,\n    className = _ref.className,\n    props = _objectWithoutProperties(_ref, _excluded);\n  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement(\"input\", _extends({\n    name: name,\n    id: id,\n    type: \"radio\",\n    value: id // could be something else for output?\n    ,\n    checked: id === value,\n    onChange: onChange,\n    onBlur: onBlur,\n    disabled: props.selected,\n    className: classnames_default()(className, 'currency-list__radio-button')\n  }, props)), /*#__PURE__*/external_react_default().createElement(\"label\", {\n    htmlFor: id,\n    className: classnames_default()('currency-list__item', {\n      'currency-list__item--selected': id === value,\n      'currency-list__item--current': props.selected\n    }),\n    onClick: onClick\n  }, icon ? /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n    className: \"currency-list__icon\",\n    icon: icon\n  }), /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: \"label currency-list__item-text\"\n  }, /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: \"currency-list__item-label\"\n  }, label), /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: \"currency-list__item-code\"\n  }, second_line_label))) : /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n    className: \"currency-list__icon\",\n    icon: \"IcCurrency-\".concat(id === null || id === void 0 ? void 0 : id.toLowerCase())\n  }), id && /^(UST|eUSDT|tUSDT)$/i.test(id) && /*#__PURE__*/external_react_default().createElement(ust_popover, {\n    id: id\n  }), /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: \"label currency-list__item-text\"\n  }, /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: \"currency-list__item-label\"\n  }, label), /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: \"currency-list__item-code\"\n  }, \"(\", (0,shared_.getCurrencyDisplayCode)(id), \")\")))));\n};\n/* harmony default export */ const radio_button = (RadioButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2N1cnJlbmN5LXNlbGVjdG9yL3JhZGlvLWJ1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFTQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL2N1cnJlbmN5LXNlbGVjdG9yL3VzdC1wb3BvdmVyLnRzeD9jMTY3Iiwid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9jdXJyZW5jeS1zZWxlY3Rvci9yYWRpby1idXR0b24udHN4Pzg4YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBvcG92ZXIgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBUVVNUUG9wb3ZlciA9IHtcbiAgICBpZDogc3RyaW5nO1xufTtcblxuY29uc3QgVVNUUG9wb3ZlciA9ICh7IGlkIH06IFRVU1RQb3BvdmVyKSA9PiB7XG4gICAgbGV0IHBvcG92ZXJfbWVzc2FnZTogUmVhY3QuUmVhY3RFbGVtZW50O1xuICAgIGlmICgvXlVTVCQvaS50ZXN0KGlkKSkge1xuICAgICAgICBwb3BvdmVyX21lc3NhZ2UgPSAoXG4gICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICBpMThuX2RlZmF1bHRfdGV4dD17XG4gICAgICAgICAgICAgICAgICAgICdUZXRoZXIgYXMgYW4gT21uaSB0b2tlbiAoVVNEVCkgaXMgYSB2ZXJzaW9uIG9mIFRldGhlciB0aGF0IGlzIGhvc3RlZCBvbiB0aGUgT21uaSBsYXllciBvbiB0aGUgQml0Y29pbiBibG9ja2NoYWluLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cz17WzxiciBrZXk9ezB9IC8+XX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIGlmICgvXnRVU0RUJC9pLnRlc3QoaWQpKSB7XG4gICAgICAgIHBvcG92ZXJfbWVzc2FnZSA9IChcbiAgICAgICAgICAgIDxMb2NhbGl6ZVxuICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PXsnVGV0aGVyIGFzIGEgVFJDMjAgdG9rZW4gKHRVU0RUKSBpcyBhIHZlcnNpb24gb2YgVGV0aGVyIHRoYXQgaXMgaG9zdGVkIG9uIFRyb24uJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcG9wb3Zlcl9tZXNzYWdlID0gKFxuICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgaTE4bl9kZWZhdWx0X3RleHQ9e1xuICAgICAgICAgICAgICAgICAgICAnVGV0aGVyIGFzIGFuIEVSQzIwIHRva2VuIChlVVNEVCkgaXMgYSB2ZXJzaW9uIG9mIFRldGhlciB0aGF0IGlzIGhvc3RlZCBvbiBFdGhlcmV1bS4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgYWxpZ25tZW50PSd0b3AnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2N1cnJlbmN5LWxpc3RfX3BvcG92ZXInXG4gICAgICAgICAgICBkaXNhYmxlX21lc3NhZ2VfaWNvblxuICAgICAgICAgICAgaWNvbj0naW5mbydcbiAgICAgICAgICAgIGlzX2J1YmJsZV9ob3Zlcl9lbmFibGVkXG4gICAgICAgICAgICBtZXNzYWdlPXtwb3BvdmVyX21lc3NhZ2V9XG4gICAgICAgICAgICB6SW5kZXg9Jzk5OTknXG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVTVFBvcG92ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQWxsSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBnZXRDdXJyZW5jeURpc3BsYXlDb2RlIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgVVNUUG9wb3ZlciBmcm9tICcuL3VzdC1wb3BvdmVyJztcblxudHlwZSBUUmFkaW9CdXR0b25FeHRlbmQgPSB7XG4gICAgZmllbGQ6IFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD47XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBzZWNvbmRfbGluZV9sYWJlbD86IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgb25DbGljaz86IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMYWJlbEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IHR5cGUgVFJhZGlvQnV0dG9uID0gQWxsSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudCB8IEhUTUxMYWJlbEVsZW1lbnQ+ICYgVFJhZGlvQnV0dG9uRXh0ZW5kO1xuXG4vKipcbiAqICBSYWRpb0J1dHRvbiBjb21wb25lbnQgdG8gc2VsZWN0IGN1cnJlbmN5XG4gKiBAbmFtZSBSYWRpb0J1dHRvblxuICogQHBhcmFtIHtSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+fSBmaWVsZCAtIGZpZWxkIHByb3BzIGdpdmVuIGJ5IEZvcm1pa1xuICogQHBhcmFtIHtzdHJpbmd9IGljb24gLSBpY29uIG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIGN1cnJlbmN5IGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSBjdXJyZW5jeSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gc2Vjb25kX2xpbmVfbGFiZWwgLSBjdXJyZW5jeSBjb2RlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNsaWNrIC0gZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGNsaWNrXG4gKiBAcGFyYW0ge0FsbEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MTGFiZWxFbGVtZW50Pn0gcHJvcHMgLSBvdGhlciBwcm9wcyB0byBiZSBwYXNzZWRcbiAqIEByZXR1cm5zIHtSZWFjdC5SZWFjdE5vZGV9IC0gcmV0dXJucyBhIFJlYWN0IG5vZGVcbiAqL1xuXG5jb25zdCBSYWRpb0J1dHRvbiA9ICh7XG4gICAgZmllbGQ6IHsgbmFtZSwgdmFsdWUsIG9uQ2hhbmdlLCBvbkJsdXIgfSxcbiAgICBpY29uLFxuICAgIGlkLFxuICAgIGxhYmVsLFxuICAgIHNlY29uZF9saW5lX2xhYmVsLFxuICAgIG9uQ2xpY2ssXG4gICAgY2xhc3NOYW1lLFxuICAgIC4uLnByb3BzXG59OiBUUmFkaW9CdXR0b24pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcbiAgICAgICAgICAgICAgICB2YWx1ZT17aWR9IC8vIGNvdWxkIGJlIHNvbWV0aGluZyBlbHNlIGZvciBvdXRwdXQ/XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17aWQgPT09IHZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgJ2N1cnJlbmN5LWxpc3RfX3JhZGlvLWJ1dHRvbicpfVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2N1cnJlbmN5LWxpc3RfX2l0ZW0nLCB7XG4gICAgICAgICAgICAgICAgICAgICdjdXJyZW5jeS1saXN0X19pdGVtLS1zZWxlY3RlZCc6IGlkID09PSB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2N1cnJlbmN5LWxpc3RfX2l0ZW0tLWN1cnJlbnQnOiBwcm9wcy5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpY29uID8gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J2N1cnJlbmN5LWxpc3RfX2ljb24nIGljb249e2ljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFiZWwgY3VycmVuY3ktbGlzdF9faXRlbS10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY3VycmVuY3ktbGlzdF9faXRlbS1sYWJlbCc+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdXJyZW5jeS1saXN0X19pdGVtLWNvZGUnPntzZWNvbmRfbGluZV9sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nY3VycmVuY3ktbGlzdF9faWNvbicgaWNvbj17YEljQ3VycmVuY3ktJHtpZD8udG9Mb3dlckNhc2UoKX1gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lkICYmIC9eKFVTVHxlVVNEVHx0VVNEVCkkL2kudGVzdChpZCkgJiYgPFVTVFBvcG92ZXIgaWQ9e2lkfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYWJlbCBjdXJyZW5jeS1saXN0X19pdGVtLXRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdXJyZW5jeS1saXN0X19pdGVtLWxhYmVsJz57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2N1cnJlbmN5LWxpc3RfX2l0ZW0tY29kZSc+KHtnZXRDdXJyZW5jeURpc3BsYXlDb2RlKGlkKX0pPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b247XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/currency-selector/radio-button.tsx\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Components/currency-selector/radio-button.tsx");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});