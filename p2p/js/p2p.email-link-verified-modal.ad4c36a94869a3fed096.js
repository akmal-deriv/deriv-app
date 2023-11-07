"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_deriv_p2p"] = self["webpackChunk_deriv_p2p"] || []).push([["email-link-verified-modal"],{

/***/ "./src/components/modal-manager/modals/email-link-verified-modal/email-link-verified-modal.jsx":
/*!*****************************************************************************************************!*\
  !*** ./src/components/modal-manager/modals/email-link-verified-modal/email-link-verified-modal.jsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ \"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/i18next */ \"./src/components/i18next/index.js\");\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Stores */ \"./src/stores/index.js\");\n/* harmony import */ var Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/modal-manager/modal-manager-context */ \"./src/components/modal-manager/modal-manager-context.js\");\n/* harmony import */ var Utils_format_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Utils/format-value */ \"./src/utils/format-value.js\");\n\n\n\n\n\n\n\nvar EmailLinkVerifiedModal = function EmailLinkVerifiedModal() {\n  var _useModalManagerConte = (0,Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_5__.useModalManagerContext)(),\n    hideModal = _useModalManagerConte.hideModal,\n    is_modal_open = _useModalManagerConte.is_modal_open;\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_4__.useStores)(),\n    order_store = _useStores.order_store;\n  var _ref = order_store.order_information || {},\n    amount_display = _ref.amount_display,\n    is_buy_order_for_user = _ref.is_buy_order_for_user,\n    local_currency = _ref.local_currency,\n    rate = _ref.rate;\n  var amount = (0,Utils_format_value__WEBPACK_IMPORTED_MODULE_6__.removeTrailingZeros)((0,_deriv_shared__WEBPACK_IMPORTED_MODULE_2__.formatMoney)(local_currency, amount_display * (0,Utils_format_value__WEBPACK_IMPORTED_MODULE_6__.roundOffDecimal)(rate, (0,Utils_format_value__WEBPACK_IMPORTED_MODULE_6__.setDecimalPlaces)(rate, 6)), true));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, order_store.order_information && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    has_close_icon: order_store.order_information,\n    is_open: is_modal_open,\n    renderTitle: function renderTitle() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);\n    },\n    toggleModal: hideModal,\n    width: \"440px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {\n    className: \"email-verified-modal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n    icon: \"IcEmailVerificationLinkValid\",\n    size: \"128\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    className: \"email-verified-modal--text\",\n    color: \"prominent\",\n    size: \"s\",\n    weight: \"bold\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: \"We've verified your order\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    align: \"center\",\n    color: \"prominent\",\n    size: \"s\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: \"Please ensure you've received {{amount}} {{local_currency}} in your account and hit Confirm to complete the transaction.\",\n    values: {\n      amount: amount,\n      local_currency: local_currency\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, {\n    className: \"email-verified-modal--footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    large: true,\n    primary: true,\n    onClick: function onClick() {\n      hideModal({\n        should_hide_all_modals: true\n      });\n      order_store.confirmOrder(is_buy_order_for_user);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: \"Confirm\"\n  })))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailLinkVerifiedModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9lbWFpbC1saW5rLXZlcmlmaWVkLW1vZGFsL2VtYWlsLWxpbmstdmVyaWZpZWQtbW9kYWwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBT0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9wMnAvLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9lbWFpbC1saW5rLXZlcmlmaWVkLW1vZGFsL2VtYWlsLWxpbmstdmVyaWZpZWQtbW9kYWwuanN4P2M1NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgTW9kYWwsIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBmb3JtYXRNb25leSB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tICdDb21wb25lbnRzL2kxOG5leHQnO1xuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnU3RvcmVzJztcbmltcG9ydCB7IHVzZU1vZGFsTWFuYWdlckNvbnRleHQgfSBmcm9tICdDb21wb25lbnRzL21vZGFsLW1hbmFnZXIvbW9kYWwtbWFuYWdlci1jb250ZXh0JztcbmltcG9ydCB7IHNldERlY2ltYWxQbGFjZXMsIHJlbW92ZVRyYWlsaW5nWmVyb3MsIHJvdW5kT2ZmRGVjaW1hbCB9IGZyb20gJ1V0aWxzL2Zvcm1hdC12YWx1ZSc7XG5cbmNvbnN0IEVtYWlsTGlua1ZlcmlmaWVkTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBoaWRlTW9kYWwsIGlzX21vZGFsX29wZW4gfSA9IHVzZU1vZGFsTWFuYWdlckNvbnRleHQoKTtcbiAgICBjb25zdCB7IG9yZGVyX3N0b3JlIH0gPSB1c2VTdG9yZXMoKTtcbiAgICBjb25zdCB7IGFtb3VudF9kaXNwbGF5LCBpc19idXlfb3JkZXJfZm9yX3VzZXIsIGxvY2FsX2N1cnJlbmN5LCByYXRlIH0gPSBvcmRlcl9zdG9yZS5vcmRlcl9pbmZvcm1hdGlvbiB8fCB7fTtcbiAgICBjb25zdCBhbW91bnQgPSByZW1vdmVUcmFpbGluZ1plcm9zKFxuICAgICAgICBmb3JtYXRNb25leShsb2NhbF9jdXJyZW5jeSwgYW1vdW50X2Rpc3BsYXkgKiByb3VuZE9mZkRlY2ltYWwocmF0ZSwgc2V0RGVjaW1hbFBsYWNlcyhyYXRlLCA2KSksIHRydWUpXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtvcmRlcl9zdG9yZS5vcmRlcl9pbmZvcm1hdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIGhhc19jbG9zZV9pY29uPXtvcmRlcl9zdG9yZS5vcmRlcl9pbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgaXNfb3Blbj17aXNfbW9kYWxfb3Blbn1cbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVGl0bGU9eygpID0+IDw+PC8+fVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNb2RhbD17aGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD0nNDQwcHgnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuQm9keSBjbGFzc05hbWU9J2VtYWlsLXZlcmlmaWVkLW1vZGFsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249J0ljRW1haWxWZXJpZmljYXRpb25MaW5rVmFsaWQnIHNpemU9JzEyOCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nZW1haWwtdmVyaWZpZWQtbW9kYWwtLXRleHQnIGNvbG9yPSdwcm9taW5lbnQnIHNpemU9J3MnIHdlaWdodD0nYm9sZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PVwiV2UndmUgdmVyaWZpZWQgeW91ciBvcmRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBhbGlnbj0nY2VudGVyJyBjb2xvcj0ncHJvbWluZW50JyBzaXplPSdzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTE4bl9kZWZhdWx0X3RleHQ9XCJQbGVhc2UgZW5zdXJlIHlvdSd2ZSByZWNlaXZlZCB7e2Ftb3VudH19IHt7bG9jYWxfY3VycmVuY3l9fSBpbiB5b3VyIGFjY291bnQgYW5kIGhpdCBDb25maXJtIHRvIGNvbXBsZXRlIHRoZSB0cmFuc2FjdGlvbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3sgYW1vdW50LCBsb2NhbF9jdXJyZW5jeSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkZvb3RlciBjbGFzc05hbWU9J2VtYWlsLXZlcmlmaWVkLW1vZGFsLS1mb290ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsKHsgc2hvdWxkX2hpZGVfYWxsX21vZGFsczogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfc3RvcmUuY29uZmlybU9yZGVyKGlzX2J1eV9vcmRlcl9mb3JfdXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J0NvbmZpcm0nIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsTGlua1ZlcmlmaWVkTW9kYWw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/email-link-verified-modal/email-link-verified-modal.jsx\n");

/***/ }),

/***/ "./src/components/modal-manager/modals/email-link-verified-modal/index.js":
/*!********************************************************************************!*\
  !*** ./src/components/modal-manager/modals/email-link-verified-modal/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _email_link_verified_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-link-verified-modal.jsx */ \"./src/components/modal-manager/modals/email-link-verified-modal/email-link-verified-modal.jsx\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './email-link-verified-modal.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_email_link_verified_modal_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9lbWFpbC1saW5rLXZlcmlmaWVkLW1vZGFsL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9wMnAvLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9lbWFpbC1saW5rLXZlcmlmaWVkLW1vZGFsL2luZGV4LmpzP2VkY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtYWlsTGlua1ZlcmlmaWVkTW9kYWwgZnJvbSAnLi9lbWFpbC1saW5rLXZlcmlmaWVkLW1vZGFsLmpzeCc7XG5pbXBvcnQgJy4vZW1haWwtbGluay12ZXJpZmllZC1tb2RhbC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgRW1haWxMaW5rVmVyaWZpZWRNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/email-link-verified-modal/index.js\n");

/***/ })

}]);