"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_deriv_p2p"] = self["webpackChunk_deriv_p2p"] || []).push([["edit-ad-cancel-modal"],{

/***/ "./src/components/modal-manager/modals/edit-ad-cancel-modal/edit-ad-cancel-modal.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/components/modal-manager/modals/edit-ad-cancel-modal/edit-ad-cancel-modal.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ \"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/i18next */ \"./src/components/i18next/index.js\");\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Stores */ \"./src/stores/index.js\");\n/* harmony import */ var Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/modal-manager/modal-manager-context */ \"./src/components/modal-manager/modal-manager-context.js\");\n\n\n\n\n\nvar EditAdCancelModal = function EditAdCancelModal() {\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_3__.useStores)(),\n    my_ads_store = _useStores.my_ads_store;\n  var _useModalManagerConte = (0,Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_4__.useModalManagerContext)(),\n    hideModal = _useModalManagerConte.hideModal,\n    is_modal_open = _useModalManagerConte.is_modal_open;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    has_close_icon: false,\n    is_open: is_modal_open,\n    small: true,\n    title: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_2__.localize)('Cancel your edits?')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    as: \"p\",\n    size: \"xs\",\n    color: \"prominent\"\n  }, (0,Components_i18next__WEBPACK_IMPORTED_MODULE_2__.localize)('If you choose to cancel, the edited details will be lost.'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    has_effect: true,\n    text: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_2__.localize)('Cancel'),\n    onClick: function onClick() {\n      hideModal();\n      my_ads_store.setShowEditAdForm(false);\n    },\n    secondary: true,\n    large: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    has_effect: true,\n    text: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_2__.localize)(\"Don't cancel\"),\n    onClick: function onClick() {\n      return hideModal();\n    },\n    primary: true,\n    large: true\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditAdCancelModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9lZGl0LWFkLWNhbmNlbC1tb2RhbC9lZGl0LWFkLWNhbmNlbC1tb2RhbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9wMnAvLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9lZGl0LWFkLWNhbmNlbC1tb2RhbC9lZGl0LWFkLWNhbmNlbC1tb2RhbC5qc3g/YjZlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQ29tcG9uZW50cy9pMThuZXh0JztcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJ1N0b3Jlcyc7XG5pbXBvcnQgeyB1c2VNb2RhbE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnQ29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFsLW1hbmFnZXItY29udGV4dCc7XG5cbmNvbnN0IEVkaXRBZENhbmNlbE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbXlfYWRzX3N0b3JlIH0gPSB1c2VTdG9yZXMoKTtcbiAgICBjb25zdCB7IGhpZGVNb2RhbCwgaXNfbW9kYWxfb3BlbiB9ID0gdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsIGhhc19jbG9zZV9pY29uPXtmYWxzZX0gaXNfb3Blbj17aXNfbW9kYWxfb3Blbn0gc21hbGwgdGl0bGU9e2xvY2FsaXplKCdDYW5jZWwgeW91ciBlZGl0cz8nKX0+XG4gICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8VGV4dCBhcz0ncCcgc2l6ZT0neHMnIGNvbG9yPSdwcm9taW5lbnQnPlxuICAgICAgICAgICAgICAgICAgICB7bG9jYWxpemUoJ0lmIHlvdSBjaG9vc2UgdG8gY2FuY2VsLCB0aGUgZWRpdGVkIGRldGFpbHMgd2lsbCBiZSBsb3N0LicpfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoYXNfZWZmZWN0XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2xvY2FsaXplKCdDYW5jZWwnKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBteV9hZHNfc3RvcmUuc2V0U2hvd0VkaXRBZEZvcm0oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gaGFzX2VmZmVjdCB0ZXh0PXtsb2NhbGl6ZShcIkRvbid0IGNhbmNlbFwiKX0gb25DbGljaz17KCkgPT4gaGlkZU1vZGFsKCl9IHByaW1hcnkgbGFyZ2UgLz5cbiAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0QWRDYW5jZWxNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/edit-ad-cancel-modal/edit-ad-cancel-modal.jsx\n");

/***/ }),

/***/ "./src/components/modal-manager/modals/edit-ad-cancel-modal/index.js":
/*!***************************************************************************!*\
  !*** ./src/components/modal-manager/modals/edit-ad-cancel-modal/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _edit_ad_cancel_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-ad-cancel-modal.jsx */ \"./src/components/modal-manager/modals/edit-ad-cancel-modal/edit-ad-cancel-modal.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_edit_ad_cancel_modal_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9lZGl0LWFkLWNhbmNlbC1tb2RhbC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvcDJwLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtbWFuYWdlci9tb2RhbHMvZWRpdC1hZC1jYW5jZWwtbW9kYWwvaW5kZXguanM/MTJjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRWRpdEFkQ2FuY2VsTW9kYWwgZnJvbSAnLi9lZGl0LWFkLWNhbmNlbC1tb2RhbC5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0QWRDYW5jZWxNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/edit-ad-cancel-modal/index.js\n");

/***/ })

}]);