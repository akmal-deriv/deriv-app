"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_deriv_p2p"] = self["webpackChunk_deriv_p2p"] || []).push([["currency-selector-modal"],{

/***/ "./src/components/modal-manager/modals/currency-selector-modal/currency-selector-modal.jsx":
/*!*************************************************************************************************!*\
  !*** ./src/components/modal-manager/modals/currency-selector-modal/currency-selector-modal.jsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ \"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Stores */ \"./src/stores/index.js\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ \"../../node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/i18next */ \"./src/components/i18next/index.ts\");\n/* harmony import */ var Pages_buy_sell_currency_selector_currency_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Pages/buy-sell/currency-selector/currency-selector */ \"./src/pages/buy-sell/currency-selector/currency-selector.jsx\");\n/* harmony import */ var Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/modal-manager/modal-manager-context */ \"./src/components/modal-manager/modal-manager-context.js\");\n\n\n\n\n\n\n\nvar CurrencySelectorModal = function CurrencySelectorModal() {\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_2__.useStores)(),\n    buy_sell_store = _useStores.buy_sell_store;\n  var local_currencies = buy_sell_store.local_currencies,\n    onLocalCurrencySelect = buy_sell_store.onLocalCurrencySelect,\n    selected_local_currency = buy_sell_store.selected_local_currency;\n  var _useModalManagerConte = (0,Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_6__.useModalManagerContext)(),\n    hideModal = _useModalManagerConte.hideModal,\n    is_modal_open = _useModalManagerConte.is_modal_open;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.MobileFullPageModal, {\n    is_flex: true,\n    is_modal_open: is_modal_open,\n    page_header_text: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_4__.localize)('Preferred currency'),\n    pageHeaderReturnFn: hideModal\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Pages_buy_sell_currency_selector_currency_selector__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    default_value: selected_local_currency,\n    list: local_currencies,\n    onSelect: function onSelect(value) {\n      onLocalCurrencySelect(value);\n      hideModal();\n    }\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(CurrencySelectorModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9jdXJyZW5jeS1zZWxlY3Rvci1tb2RhbC9jdXJyZW5jeS1zZWxlY3Rvci1tb2RhbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3AycC8uL3NyYy9jb21wb25lbnRzL21vZGFsLW1hbmFnZXIvbW9kYWxzL2N1cnJlbmN5LXNlbGVjdG9yLW1vZGFsL2N1cnJlbmN5LXNlbGVjdG9yLW1vZGFsLmpzeD80ODRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2JpbGVGdWxsUGFnZU1vZGFsIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnU3RvcmVzJztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQ29tcG9uZW50cy9pMThuZXh0JztcbmltcG9ydCBDdXJyZW5jeVNlbGVjdG9yIGZyb20gJ1BhZ2VzL2J1eS1zZWxsL2N1cnJlbmN5LXNlbGVjdG9yL2N1cnJlbmN5LXNlbGVjdG9yJztcbmltcG9ydCB7IHVzZU1vZGFsTWFuYWdlckNvbnRleHQgfSBmcm9tICdDb21wb25lbnRzL21vZGFsLW1hbmFnZXIvbW9kYWwtbWFuYWdlci1jb250ZXh0JztcblxuY29uc3QgQ3VycmVuY3lTZWxlY3Rvck1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYnV5X3NlbGxfc3RvcmUgfSA9IHVzZVN0b3JlcygpO1xuICAgIGNvbnN0IHsgbG9jYWxfY3VycmVuY2llcywgb25Mb2NhbEN1cnJlbmN5U2VsZWN0LCBzZWxlY3RlZF9sb2NhbF9jdXJyZW5jeSB9ID0gYnV5X3NlbGxfc3RvcmU7XG4gICAgY29uc3QgeyBoaWRlTW9kYWwsIGlzX21vZGFsX29wZW4gfSA9IHVzZU1vZGFsTWFuYWdlckNvbnRleHQoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2JpbGVGdWxsUGFnZU1vZGFsXG4gICAgICAgICAgICBpc19mbGV4XG4gICAgICAgICAgICBpc19tb2RhbF9vcGVuPXtpc19tb2RhbF9vcGVufVxuICAgICAgICAgICAgcGFnZV9oZWFkZXJfdGV4dD17bG9jYWxpemUoJ1ByZWZlcnJlZCBjdXJyZW5jeScpfVxuICAgICAgICAgICAgcGFnZUhlYWRlclJldHVybkZuPXtoaWRlTW9kYWx9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxDdXJyZW5jeVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgZGVmYXVsdF92YWx1ZT17c2VsZWN0ZWRfbG9jYWxfY3VycmVuY3l9XG4gICAgICAgICAgICAgICAgbGlzdD17bG9jYWxfY3VycmVuY2llc31cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17dmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkxvY2FsQ3VycmVuY3lTZWxlY3QodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Nb2JpbGVGdWxsUGFnZU1vZGFsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihDdXJyZW5jeVNlbGVjdG9yTW9kYWwpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/currency-selector-modal/currency-selector-modal.jsx\n");

/***/ }),

/***/ "./src/components/modal-manager/modals/currency-selector-modal/index.js":
/*!******************************************************************************!*\
  !*** ./src/components/modal-manager/modals/currency-selector-modal/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _currency_selector_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-selector-modal */ \"./src/components/modal-manager/modals/currency-selector-modal/currency-selector-modal.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_currency_selector_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9jdXJyZW5jeS1zZWxlY3Rvci1tb2RhbC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvcDJwLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtbWFuYWdlci9tb2RhbHMvY3VycmVuY3ktc2VsZWN0b3ItbW9kYWwvaW5kZXguanM/ZmZhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3VycmVuY3lTZWxlY3Rvck1vZGFsIGZyb20gJy4vY3VycmVuY3ktc2VsZWN0b3ItbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW5jeVNlbGVjdG9yTW9kYWw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/currency-selector-modal/index.js\n");

/***/ })

}]);