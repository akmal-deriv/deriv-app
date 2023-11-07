/*! For license information please see p2p.ad-error-tooltip-modal.b842f1920153f87b8ba6.js.LICENSE.txt */
"use strict";(self.webpackChunk_deriv_p2p=self.webpackChunk_deriv_p2p||[]).push([["ad-error-tooltip-modal"],{"./src/components/modal-manager/modals/ad-error-tooltip-modal/ad-error-tooltip-modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "../../node_modules/mobx-react-lite/es/index.js");\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/i18next */ "./src/components/i18next/index.js");\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Stores */ "./src/stores/index.js");\n/* harmony import */ var Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/modal-manager/modal-manager-context */ "./src/components/modal-manager/modal-manager-context.js");\n\n\n\n\n\n\nvar AdErrorTooltipModal = function AdErrorTooltipModal() {\n  var _my_ads_store$advert_;\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_4__.useStores)(),\n    my_ads_store = _useStores.my_ads_store,\n    general_store = _useStores.general_store;\n  var _useModalManagerConte = (0,Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_5__.useModalManagerContext)(),\n    hideModal = _useModalManagerConte.hideModal,\n    is_modal_open = _useModalManagerConte.is_modal_open;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    className: "p2p-my-ads__modal-error",\n    is_open: is_modal_open,\n    small: true,\n    has_close_icon: false\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    as: "p",\n    color: "prominent",\n    size: "xs"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_i18next__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: "Your ad is not listed on Buy/Sell because its minimum order is higher than your Deriv P2P available balance ({{balance}} {{currency}}).",\n    values: {\n      balance: general_store.advertiser_info.balance_available,\n      currency: (_my_ads_store$advert_ = my_ads_store.advert_details) === null || _my_ads_store$advert_ === void 0 ? void 0 : _my_ads_store$advert_.account_currency\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    has_effect: true,\n    text: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_3__.localize)(\'Ok\'),\n    onClick: function onClick() {\n      return hideModal();\n    },\n    primary: true,\n    large: true\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(AdErrorTooltipModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9hZC1lcnJvci10b29sdGlwLW1vZGFsL2FkLWVycm9yLXRvb2x0aXAtbW9kYWwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3AycC8uL3NyYy9jb21wb25lbnRzL21vZGFsLW1hbmFnZXIvbW9kYWxzL2FkLWVycm9yLXRvb2x0aXAtbW9kYWwvYWQtZXJyb3ItdG9vbHRpcC1tb2RhbC5qc3g/MjI0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmltcG9ydCB7IGxvY2FsaXplLCBMb2NhbGl6ZSB9IGZyb20gJ0NvbXBvbmVudHMvaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VTdG9yZXMgfSBmcm9tICdTdG9yZXMnO1xuaW1wb3J0IHsgdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCB9IGZyb20gJ0NvbXBvbmVudHMvbW9kYWwtbWFuYWdlci9tb2RhbC1tYW5hZ2VyLWNvbnRleHQnO1xuXG5jb25zdCBBZEVycm9yVG9vbHRpcE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbXlfYWRzX3N0b3JlLCBnZW5lcmFsX3N0b3JlIH0gPSB1c2VTdG9yZXMoKTtcbiAgICBjb25zdCB7IGhpZGVNb2RhbCwgaXNfbW9kYWxfb3BlbiB9ID0gdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsIGNsYXNzTmFtZT0ncDJwLW15LWFkc19fbW9kYWwtZXJyb3InIGlzX29wZW49e2lzX21vZGFsX29wZW59IHNtYWxsIGhhc19jbG9zZV9pY29uPXtmYWxzZX0+XG4gICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8VGV4dCBhcz0ncCcgY29sb3I9J3Byb21pbmVudCcgc2l6ZT0neHMnPlxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdZb3VyIGFkIGlzIG5vdCBsaXN0ZWQgb24gQnV5L1NlbGwgYmVjYXVzZSBpdHMgbWluaW11bSBvcmRlciBpcyBoaWdoZXIgdGhhbiB5b3VyIERlcml2IFAyUCBhdmFpbGFibGUgYmFsYW5jZSAoe3tiYWxhbmNlfX0ge3tjdXJyZW5jeX19KS4nXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBnZW5lcmFsX3N0b3JlLmFkdmVydGlzZXJfaW5mby5iYWxhbmNlX2F2YWlsYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeTogbXlfYWRzX3N0b3JlLmFkdmVydF9kZXRhaWxzPy5hY2NvdW50X2N1cnJlbmN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gaGFzX2VmZmVjdCB0ZXh0PXtsb2NhbGl6ZSgnT2snKX0gb25DbGljaz17KCkgPT4gaGlkZU1vZGFsKCl9IHByaW1hcnkgbGFyZ2UgLz5cbiAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihBZEVycm9yVG9vbHRpcE1vZGFsKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/ad-error-tooltip-modal/ad-error-tooltip-modal.jsx\n')},"./src/components/modal-manager/modals/ad-error-tooltip-modal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ad_error_tooltip_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ad-error-tooltip-modal */ "./src/components/modal-manager/modals/ad-error-tooltip-modal/ad-error-tooltip-modal.jsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ad_error_tooltip_modal__WEBPACK_IMPORTED_MODULE_0__["default"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9hZC1lcnJvci10b29sdGlwLW1vZGFsL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9wMnAvLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9hZC1lcnJvci10b29sdGlwLW1vZGFsL2luZGV4LmpzP2QwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkRXJyb3JUb29sdGlwTW9kYWwgZnJvbSAnLi9hZC1lcnJvci10b29sdGlwLW1vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgQWRFcnJvclRvb2x0aXBNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/ad-error-tooltip-modal/index.js\n')}}]);