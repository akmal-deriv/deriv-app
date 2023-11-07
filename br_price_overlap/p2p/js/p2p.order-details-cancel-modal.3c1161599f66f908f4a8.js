/*! For license information please see p2p.order-details-cancel-modal.3c1161599f66f908f4a8.js.LICENSE.txt */
"use strict";(self.webpackChunk_deriv_p2p=self.webpackChunk_deriv_p2p||[]).push([["order-details-cancel-modal"],{"./src/components/modal-manager/modals/order-details-cancel-modal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _order_details_cancel_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-details-cancel-modal.jsx */ "./src/components/modal-manager/modals/order-details-cancel-modal/order-details-cancel-modal.jsx");\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'./order-details-cancel-modal.scss\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_order_details_cancel_modal_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9vcmRlci1kZXRhaWxzLWNhbmNlbC1tb2RhbC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvcDJwLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtbWFuYWdlci9tb2RhbHMvb3JkZXItZGV0YWlscy1jYW5jZWwtbW9kYWwvaW5kZXguanM/MjYyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXJEZXRhaWxzQ2FuY2VsTW9kYWwgZnJvbSAnLi9vcmRlci1kZXRhaWxzLWNhbmNlbC1tb2RhbC5qc3gnO1xuaW1wb3J0ICcuL29yZGVyLWRldGFpbHMtY2FuY2VsLW1vZGFsLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBPcmRlckRldGFpbHNDYW5jZWxNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/order-details-cancel-modal/index.js\n')},"./src/components/modal-manager/modals/order-details-cancel-modal/order-details-cancel-modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/i18next */ "./src/components/i18next/index.js");\n/* harmony import */ var Utils_websocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Utils/websocket */ "./src/utils/websocket.js");\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Stores */ "./src/stores/index.js");\n/* harmony import */ var Components_form_error_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/form/error.jsx */ "./src/components/form/error.jsx");\n/* harmony import */ var _modal_manager_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modal-manager-context */ "./src/components/modal-manager/modal-manager-context.js");\n\n\n\n\n\n\n\n\nvar OrderDetailsCancelModal = function OrderDetailsCancelModal() {\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_5__.useStores)(),\n    general_store = _useStores.general_store,\n    order_store = _useStores.order_store;\n  var cancels_remaining = general_store.advertiser_info.cancels_remaining;\n  var _useModalManagerConte = (0,_modal_manager_context__WEBPACK_IMPORTED_MODULE_7__.useModalManagerContext)(),\n    hideModal = _useModalManagerConte.hideModal,\n    is_modal_open = _useModalManagerConte.is_modal_open;\n  var isMounted = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_2__.useIsMounted)();\n  var cancelOrderRequest = function cancelOrderRequest() {\n    (0,Utils_websocket__WEBPACK_IMPORTED_MODULE_4__.requestWS)({\n      p2p_order_cancel: 1,\n      id: order_store.order_information.id\n    }).then(function (response) {\n      if (isMounted()) {\n        if (response.error) {\n          order_store.setErrorMessage(response.error.message);\n        }\n        hideModal();\n      }\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    className: "cancel-modal",\n    has_close_icon: false,\n    is_open: is_modal_open,\n    toggleModal: hideModal,\n    renderTitle: function renderTitle() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n        color: "prominent",\n        "line-height": "m",\n        size: "s",\n        weight: "bold"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n        i18n_default_text: "Do you want to cancel this order?"\n      }));\n    },\n    width: "440px"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, cancels_remaining > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    color: "prominent",\n    size: "xs"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: "If you cancel your order {{cancellation_limit}} times in {{cancellation_period}} hours, you will be blocked from using Deriv P2P for {{block_duration}} hours. <br /> ({{number_of_cancels_remaining}} cancellations remaining)",\n    values: {\n      block_duration: order_store.cancellation_block_duration,\n      cancellation_limit: order_store.cancellation_limit,\n      cancellation_period: order_store.cancellation_count_period,\n      number_of_cancels_remaining: cancels_remaining\n    }\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    color: "prominent",\n    size: "xs"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: "If you cancel this order, you\'ll be blocked from using Deriv P2P for {{block_duration}} hours.",\n    values: {\n      block_duration: order_store.cancellation_block_duration\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "cancel-modal__warning"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    color: "loss-danger",\n    size: "xs"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: "Please do not cancel if you have already made payment."\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, {\n    className: "cancel-modal__footer"\n  }, order_store.error_message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_form_error_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    message: order_store.error_message\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button.Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    secondary: true,\n    large: true,\n    onClick: cancelOrderRequest\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: "Cancel this order"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    primary: true,\n    type: "button",\n    onClick: hideModal,\n    large: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: "Do not cancel"\n  })))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetailsCancelModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9vcmRlci1kZXRhaWxzLWNhbmNlbC1tb2RhbC9vcmRlci1kZXRhaWxzLWNhbmNlbC1tb2RhbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9wMnAvLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9vcmRlci1kZXRhaWxzLWNhbmNlbC1tb2RhbC9vcmRlci1kZXRhaWxzLWNhbmNlbC1tb2RhbC5qc3g/ZmRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUlzTW91bnRlZCB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tICdDb21wb25lbnRzL2kxOG5leHQnO1xuaW1wb3J0IHsgcmVxdWVzdFdTIH0gZnJvbSAnVXRpbHMvd2Vic29ja2V0JztcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJ1N0b3Jlcyc7XG5pbXBvcnQgRm9ybUVycm9yIGZyb20gJ0NvbXBvbmVudHMvZm9ybS9lcnJvci5qc3gnO1xuaW1wb3J0IHsgdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGFsLW1hbmFnZXItY29udGV4dCc7XG5cbmNvbnN0IE9yZGVyRGV0YWlsc0NhbmNlbE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZ2VuZXJhbF9zdG9yZSwgb3JkZXJfc3RvcmUgfSA9IHVzZVN0b3JlcygpO1xuICAgIGNvbnN0IHsgY2FuY2Vsc19yZW1haW5pbmcgfSA9IGdlbmVyYWxfc3RvcmUuYWR2ZXJ0aXNlcl9pbmZvO1xuICAgIGNvbnN0IHsgaGlkZU1vZGFsLCBpc19tb2RhbF9vcGVuIH0gPSB1c2VNb2RhbE1hbmFnZXJDb250ZXh0KCk7XG5cbiAgICBjb25zdCBpc01vdW50ZWQgPSB1c2VJc01vdW50ZWQoKTtcblxuICAgIGNvbnN0IGNhbmNlbE9yZGVyUmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgcmVxdWVzdFdTKHtcbiAgICAgICAgICAgIHAycF9vcmRlcl9jYW5jZWw6IDEsXG4gICAgICAgICAgICBpZDogb3JkZXJfc3RvcmUub3JkZXJfaW5mb3JtYXRpb24uaWQsXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTW91bnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyX3N0b3JlLnNldEVycm9yTWVzc2FnZShyZXNwb25zZS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoaWRlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjYW5jZWwtbW9kYWwnXG4gICAgICAgICAgICBoYXNfY2xvc2VfaWNvbj17ZmFsc2V9XG4gICAgICAgICAgICBpc19vcGVuPXtpc19tb2RhbF9vcGVufVxuICAgICAgICAgICAgdG9nZ2xlTW9kYWw9e2hpZGVNb2RhbH1cbiAgICAgICAgICAgIHJlbmRlclRpdGxlPXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9J3Byb21pbmVudCcgbGluZS1oZWlnaHQ9J20nIHNpemU9J3MnIHdlaWdodD0nYm9sZCc+XG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nRG8geW91IHdhbnQgdG8gY2FuY2VsIHRoaXMgb3JkZXI/JyAvPlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB3aWR0aD0nNDQwcHgnXG4gICAgICAgID5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIHtjYW5jZWxzX3JlbWFpbmluZyA+IDEgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPSdwcm9taW5lbnQnIHNpemU9J3hzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdJZiB5b3UgY2FuY2VsIHlvdXIgb3JkZXIge3tjYW5jZWxsYXRpb25fbGltaXR9fSB0aW1lcyBpbiB7e2NhbmNlbGxhdGlvbl9wZXJpb2R9fSBob3VycywgeW91IHdpbGwgYmUgYmxvY2tlZCBmcm9tIHVzaW5nIERlcml2IFAyUCBmb3Ige3tibG9ja19kdXJhdGlvbn19IGhvdXJzLiA8YnIgLz4gKHt7bnVtYmVyX29mX2NhbmNlbHNfcmVtYWluaW5nfX0gY2FuY2VsbGF0aW9ucyByZW1haW5pbmcpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja19kdXJhdGlvbjogb3JkZXJfc3RvcmUuY2FuY2VsbGF0aW9uX2Jsb2NrX2R1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsYXRpb25fbGltaXQ6IG9yZGVyX3N0b3JlLmNhbmNlbGxhdGlvbl9saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsbGF0aW9uX3BlcmlvZDogb3JkZXJfc3RvcmUuY2FuY2VsbGF0aW9uX2NvdW50X3BlcmlvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyX29mX2NhbmNlbHNfcmVtYWluaW5nOiBjYW5jZWxzX3JlbWFpbmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPSdwcm9taW5lbnQnIHNpemU9J3hzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PVwiSWYgeW91IGNhbmNlbCB0aGlzIG9yZGVyLCB5b3UnbGwgYmUgYmxvY2tlZCBmcm9tIHVzaW5nIERlcml2IFAyUCBmb3Ige3tibG9ja19kdXJhdGlvbn19IGhvdXJzLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX2R1cmF0aW9uOiBvcmRlcl9zdG9yZS5jYW5jZWxsYXRpb25fYmxvY2tfZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYW5jZWwtbW9kYWxfX3dhcm5pbmcnPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj0nbG9zcy1kYW5nZXInIHNpemU9J3hzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nUGxlYXNlIGRvIG5vdCBjYW5jZWwgaWYgeW91IGhhdmUgYWxyZWFkeSBtYWRlIHBheW1lbnQuJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyIGNsYXNzTmFtZT0nY2FuY2VsLW1vZGFsX19mb290ZXInPlxuICAgICAgICAgICAgICAgIHtvcmRlcl9zdG9yZS5lcnJvcl9tZXNzYWdlICYmIDxGb3JtRXJyb3IgbWVzc2FnZT17b3JkZXJfc3RvcmUuZXJyb3JfbWVzc2FnZX0gLz59XG4gICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzZWNvbmRhcnkgbGFyZ2Ugb25DbGljaz17Y2FuY2VsT3JkZXJSZXF1ZXN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nQ2FuY2VsIHRoaXMgb3JkZXInIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtoaWRlTW9kYWx9IGxhcmdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdEbyBub3QgY2FuY2VsJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmRlckRldGFpbHNDYW5jZWxNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/order-details-cancel-modal/order-details-cancel-modal.jsx\n')}}]);