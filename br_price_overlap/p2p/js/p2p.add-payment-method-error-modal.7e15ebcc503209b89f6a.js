/*! For license information please see p2p.add-payment-method-error-modal.7e15ebcc503209b89f6a.js.LICENSE.txt */
"use strict";(self.webpackChunk_deriv_p2p=self.webpackChunk_deriv_p2p||[]).push([["add-payment-method-error-modal"],{"./src/components/modal-manager/modals/add-payment-method-error-modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/modal-manager/modal-manager-context */ "./src/components/modal-manager/modal-manager-context.js");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Stores */ "./src/stores/index.js");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "../../node_modules/mobx-react-lite/es/index.js");\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/i18next */ "./src/components/i18next/index.js");\n\n\n\n\n\n\nvar AddPaymentMethodErrorModal = function AddPaymentMethodErrorModal() {\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_3__.useStores)(),\n    general_store = _useStores.general_store,\n    my_profile_store = _useStores.my_profile_store;\n  var _useModalManagerConte = (0,Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_1__.useModalManagerContext)(),\n    is_modal_open = _useModalManagerConte.is_modal_open,\n    hideModal = _useModalManagerConte.hideModal;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n    is_open: is_modal_open,\n    small: true,\n    has_close_icon: false,\n    title: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_5__.localize)("Something\'s not right")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    color: "prominent",\n    size: "xs"\n  }, my_profile_store.add_payment_method_error_message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    has_effect: true,\n    text: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_5__.localize)(\'Ok\'),\n    onClick: function onClick() {\n      my_profile_store.setAddPaymentMethodErrorMessage(\'\');\n      my_profile_store.setSelectedPaymentMethod(\'\');\n      general_store.setSavedFormState(null);\n      general_store.setFormikRef(null);\n      hideModal({\n        should_save_form_history: true\n      });\n    },\n    primary: true,\n    large: true\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.observer)(AddPaymentMethodErrorModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9hZGQtcGF5bWVudC1tZXRob2QtZXJyb3ItbW9kYWwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvcDJwLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtbWFuYWdlci9tb2RhbHMvYWRkLXBheW1lbnQtbWV0aG9kLWVycm9yLW1vZGFsLmpzeD83MTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNb2RhbE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnQ29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFsLW1hbmFnZXItY29udGV4dCc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBUZXh0IH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnU3RvcmVzJztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQ29tcG9uZW50cy9pMThuZXh0JztcblxuY29uc3QgQWRkUGF5bWVudE1ldGhvZEVycm9yTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBnZW5lcmFsX3N0b3JlLCBteV9wcm9maWxlX3N0b3JlIH0gPSB1c2VTdG9yZXMoKTtcbiAgICBjb25zdCB7IGlzX21vZGFsX29wZW4sIGhpZGVNb2RhbCB9ID0gdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbCBpc19vcGVuPXtpc19tb2RhbF9vcGVufSBzbWFsbCBoYXNfY2xvc2VfaWNvbj17ZmFsc2V9IHRpdGxlPXtsb2NhbGl6ZShcIlNvbWV0aGluZydzIG5vdCByaWdodFwiKX0+XG4gICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj0ncHJvbWluZW50JyBzaXplPSd4cyc+XG4gICAgICAgICAgICAgICAgICAgIHtteV9wcm9maWxlX3N0b3JlLmFkZF9wYXltZW50X21ldGhvZF9lcnJvcl9tZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoYXNfZWZmZWN0XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2xvY2FsaXplKCdPaycpfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBteV9wcm9maWxlX3N0b3JlLnNldEFkZFBheW1lbnRNZXRob2RFcnJvck1lc3NhZ2UoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlfcHJvZmlsZV9zdG9yZS5zZXRTZWxlY3RlZFBheW1lbnRNZXRob2QoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhbF9zdG9yZS5zZXRTYXZlZEZvcm1TdGF0ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYWxfc3RvcmUuc2V0Rm9ybWlrUmVmKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRfc2F2ZV9mb3JtX2hpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICBsYXJnZVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoQWRkUGF5bWVudE1ldGhvZEVycm9yTW9kYWwpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/add-payment-method-error-modal.jsx\n')}}]);