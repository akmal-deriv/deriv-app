/*! For license information please see p2p.cancel-edit-payment-method-modal.661e6804438cdddd0818.js.LICENSE.txt */
"use strict";(self.webpackChunk_deriv_p2p=self.webpackChunk_deriv_p2p||[]).push([["cancel-edit-payment-method-modal"],{"./src/components/modal-manager/modals/cancel-edit-payment-method-modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "../../node_modules/mobx-react-lite/es/index.js");\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Stores */ "./src/stores/index.js");\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/i18next */ "./src/components/i18next/index.ts");\n/* harmony import */ var Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/modal-manager/modal-manager-context */ "./src/components/modal-manager/modal-manager-context.js");\n\n\n\n\n\n\nvar CancelEditPaymentMethodModal = function CancelEditPaymentMethodModal() {\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_3__.useStores)(),\n    my_profile_store = _useStores.my_profile_store;\n  var _useModalManagerConte = (0,Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_5__.useModalManagerContext)(),\n    hideModal = _useModalManagerConte.hideModal,\n    is_modal_open = _useModalManagerConte.is_modal_open;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    has_close_icon: false,\n    is_open: is_modal_open,\n    small: true,\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n      color: "prominent",\n      weight: "bold"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n      i18n_default_text: "Cancel your edits?"\n    }))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    color: "prominent",\n    size: "xs"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "If you choose to cancel, the edited details will be lost."\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    large: true,\n    onClick: function onClick() {\n      my_profile_store.setPaymentMethodToEdit(null);\n      my_profile_store.setShouldShowEditPaymentMethodForm(false);\n      hideModal();\n    },\n    secondary: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "Cancel"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    large: true,\n    onClick: hideModal,\n    primary: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "Don\'t cancel"\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(CancelEditPaymentMethodModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9jYW5jZWwtZWRpdC1wYXltZW50LW1ldGhvZC1tb2RhbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvcDJwLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtbWFuYWdlci9tb2RhbHMvY2FuY2VsLWVkaXQtcGF5bWVudC1tZXRob2QtbW9kYWwuanN4P2VjZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5pbXBvcnQgeyB1c2VTdG9yZXMgfSBmcm9tICdTdG9yZXMnO1xuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tICdDb21wb25lbnRzL2kxOG5leHQnO1xuaW1wb3J0IHsgdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCB9IGZyb20gJ0NvbXBvbmVudHMvbW9kYWwtbWFuYWdlci9tb2RhbC1tYW5hZ2VyLWNvbnRleHQnO1xuXG5jb25zdCBDYW5jZWxFZGl0UGF5bWVudE1ldGhvZE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbXlfcHJvZmlsZV9zdG9yZSB9ID0gdXNlU3RvcmVzKCk7XG4gICAgY29uc3QgeyBoaWRlTW9kYWwsIGlzX21vZGFsX29wZW4gfSA9IHVzZU1vZGFsTWFuYWdlckNvbnRleHQoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgaGFzX2Nsb3NlX2ljb249e2ZhbHNlfVxuICAgICAgICAgICAgaXNfb3Blbj17aXNfbW9kYWxfb3Blbn1cbiAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9J3Byb21pbmVudCcgd2VpZ2h0PSdib2xkJz5cbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdDYW5jZWwgeW91ciBlZGl0cz8nIC8+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj0ncHJvbWluZW50JyBzaXplPSd4cyc+XG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nSWYgeW91IGNob29zZSB0byBjYW5jZWwsIHRoZSBlZGl0ZWQgZGV0YWlscyB3aWxsIGJlIGxvc3QuJyAvPlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBsYXJnZVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBteV9wcm9maWxlX3N0b3JlLnNldFBheW1lbnRNZXRob2RUb0VkaXQobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBteV9wcm9maWxlX3N0b3JlLnNldFNob3VsZFNob3dFZGl0UGF5bWVudE1ldGhvZEZvcm0oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdDYW5jZWwnIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsYXJnZSBvbkNsaWNrPXtoaWRlTW9kYWx9IHByaW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD1cIkRvbid0IGNhbmNlbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoQ2FuY2VsRWRpdFBheW1lbnRNZXRob2RNb2RhbCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/cancel-edit-payment-method-modal.jsx\n')}}]);