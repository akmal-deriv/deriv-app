"use strict";(self.webpackChunk_deriv_trader=self.webpackChunk_deriv_trader||[]).push([["contract","error-component"],{"./src/App/Components/Elements/Errors/index.ts":(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r("react"),a=r.n(n),o=r("@deriv/components"),i=r("@deriv/shared"),c=r("@deriv/translations");const l=function(e){var t=e.header,r=e.message,n=e.is_dialog,l=e.redirect_label,s=e.redirectOnClick,u=e.should_show_refresh,m=void 0===u||u?(0,c.localize)("Please refresh this page to continue."):"";return n?a().createElement(o.Dialog,{title:t||(0,c.localize)("There was an error"),is_visible:!0,confirm_button_text:l||(0,c.localize)("Ok"),onConfirm:s||function(){return location.reload()}},r||(0,c.localize)("Sorry, an error occured while processing your request.")):a().createElement(o.PageErrorContainer,{error_header:null!=t?t:"",error_messages:r?[r,m]:[],redirect_urls:[i.routes.trade],redirect_labels:[l||(0,c.localize)("Refresh")],buttonOnClick:s||function(){return location.reload()}})}},"./src/App/Components/Elements/Modals/UnsupportedContractModal/index.ts":(e,t,r)=>{r.d(t,{Z:()=>s});var n=r("react"),a=r.n(n),o=r("@deriv/components"),i=r("@deriv/translations"),c=r("@deriv/shared"),l=r("../stores/src/index.ts");const s=(0,l.Pi)((function(e){var t=e.is_loading,r=e.is_visible,n=e.onConfirm,s=e.onClose,u=(0,l.oR)().ui,m=u.disableApp,d=u.enableApp,_=!(!u.is_unsupported_contract_modal_visible&&!r);return a().createElement(o.Dialog,{title:(0,i.localize)("We’re working on it"),confirm_button_text:(0,i.localize)("Stay on {{website_domain}}",{website_domain:c.website_name}),cancel_button_text:(0,i.localize)("Go to Binary.com"),onConfirm:n,onCancel:s,disableApp:m,enableApp:d,is_loading:t,is_closed_on_cancel:!0,is_visible:_},a().createElement(i.Localize,{i18n_default_text:"You’ve selected a trade type that is currently unsupported, but we’re working on it."}))}))},"./src/Modules/Contract/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>Me});var n=r("../../node_modules/prop-types/index.js"),a=r.n(n),o=r("react"),i=r.n(o),c=r("react-router"),l=r("../../node_modules/react-transition-group/esm/CSSTransition.js"),s=r("@deriv/shared"),u=r("./src/App/Components/Elements/Errors/index.ts"),m=r("@deriv/translations"),d=r("../../node_modules/classnames/index.js"),_=r.n(d),p=r("react-router-dom"),f=r("@deriv/components"),b=r("../stores/src/index.ts");r("../api/src/index.ts");function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const E=function(){var e=(0,b.oR)().feature_flags;return(0,o.useMemo)((function(){var t=e.data;return Object.keys(t).reduce((function(e,r){return g(g({},e),{},h({},"is_".concat(r,"_enabled"),Boolean(t[r])))}),{})}),[e.data])};r("../utils/src/index.ts");r("../../node_modules/@binary-com/binary-document-uploader/DocumentUploader.js");var C=r("./src/App/Components/Elements/chart-loader.tsx"),w=r("../../node_modules/@deriv/analytics/lib/index.js"),k=r("./src/App/Components/Elements/PositionsDrawer/helpers/index.ts");const S=function(e){var t=e.icon,r=e.id,n=e.label,a=e.timestamp,o=e.value,c=e.value2;return i().createElement("div",{id:r,className:"contract-audit__grid","data-testid":r},t&&i().createElement("div",{className:"contract-audit__icon"},t),i().createElement("div",{className:"contract-audit__item"},i().createElement(f.Text,{size:"xxxs",styles:{lineHeight:"unset"},className:"contract-audit__label"},n),i().createElement("div",{className:"contract-audit__value-wrapper"},i().createElement(f.Text,{weight:"bold",size:"xxs",line_height:"m",color:"prominent",className:"contract-audit__value"},o),c&&i().createElement(f.Text,{weight:"bold",size:"xxs",line_height:"m",color:"prominent",className:"contract-audit__value2"},c))),a&&i().createElement("div",{className:"contract-audit__timestamp"},i().createElement(f.Text,{size:"xxxs",align:"right",line_height:"xs",className:"contract-audit__timestamp-value"},(0,s.formatDate)(a)),i().createElement(f.Text,{size:"xxxs",align:"right",line_height:"xs",className:"contract-audit__timestamp-value"},(0,s.formatTime)(a))))};var x=r("./src/_common/base/server_time.js"),O=r.n(x);const j=function(e){var t=e.contract_end_time,r=e.contract_info,n=e.duration,a=e.duration_unit,o=e.exit_spot,c=e.is_vanilla,l=r.commission,u=r.contract_type,d=r.currency,_=r.date_start,p=r.display_number_of_contracts,b=r.entry_spot_display_value,y=r.entry_tick_time,v=r.exit_tick_time,g=r.high_barrier,h=r.low_barrier,E=r.profit,C=r.tick_count,x=r.tick_passed,j=r.transaction_ids,N=(j=void 0===j?{}:j).buy,T=j.sell,z=r.underlying,M=Number(E)>=0,I=(0,s.getCancellationPrice)(r),D=!c&&!(0,s.isAccumulatorContract)(u)&&!(0,s.isSmartTraderContract)(u),A=!(0,s.isAccumulatorContract)(u)||!isNaN(Number(t)),P=(0,s.isTurbosContract)(u)||c,F=Number(C)<2?(0,m.localize)("tick"):(0,m.localize)("ticks"),L=c||(0,s.isAsiansContract)(u),W=(0,s.isAccumulatorContract)(u)?"".concat(x,"/").concat(C," ").concat((0,m.localize)("ticks")):"".concat(C," ").concat(F),B=(0,s.isVanillaFxContract)(u,z)?(0,s.getLocalizedBasis)().payout_per_pip:(0,s.getLocalizedBasis)().payout_per_point;return i().useEffect((function(){w.c.trackEvent("ce_reports_form",{action:"open_contract_details",form_name:"default",form_source:"deriv_trader"})}),[]),i().createElement(f.ThemedScrollbars,{is_bypassed:(0,s.isMobile)()},i().createElement("div",{className:"contract-audit__tabs-content"},i().createElement(S,{id:"dt_id_label",icon:i().createElement(f.Icon,{icon:"IcContractId",size:24}),label:(0,m.localize)("Reference ID"),value:(0,m.localize)("{{buy_value}} (Buy)",{buy_value:N}),value2:T?(0,m.localize)("{{sell_value}} (Sell)",{sell_value:T}):void 0}),(0,s.isMultiplierContract)(u)?i().createElement(i().Fragment,null,i().createElement(S,{id:"dt_commission_label",icon:i().createElement(f.Icon,{icon:"IcContractCommission",size:24}),label:(0,m.localize)("Commission"),value:i().createElement(f.Money,{amount:null!=l?l:"",currency:d,show_currency:!0})}),!!I&&i().createElement(S,{id:"dt_cancellation_label",icon:i().createElement(f.Icon,{icon:"IcContractSafeguard",size:24}),label:(0,s.isUserSold)(r)&&(0,s.isEndedBeforeCancellationExpired)(r)?(0,m.localize)("Deal cancellation"):(0,s.isUserCancelled)(r)?(0,m.localize)("Deal cancellation (executed)"):function(e){var t;return!(null===(t=e.cancellation)||void 0===t||!t.date_expiry)&&e.cancellation.date_expiry<O().get().unix()}(r)?(0,m.localize)("Deal cancellation (expired)"):(0,m.localize)("Deal cancellation (active)"),value:i().createElement(f.Money,{amount:I,currency:d})})):i().createElement(i().Fragment,null,A&&i().createElement(S,{id:"dt_duration_label",icon:i().createElement(f.Icon,{icon:"IcContractDuration",size:24}),label:(0,m.localize)("Duration"),value:Number(C)>0?W:"".concat(n," ").concat(a)}),L&&i().createElement(S,{id:"dt_bt_label",icon:i().createElement(f.Icon,{icon:"IcContractStrike",size:24}),label:(0,k.Bs)(r),value:(0,k.rh)(r)||" - "}),D&&i().createElement(S,{id:"dt_bt_label",icon:(0,k.qm)(u)?i().createElement(f.Icon,{icon:"IcContractTarget",size:24}):i().createElement(f.Icon,{icon:"IcContractBarrier",size:24}),label:(0,k.Bs)(r),value:(0,k.rh)(r)||" - "}),(0,s.hasTwoBarriers)(u)&&i().createElement(i().Fragment,null,[g,h].map((function(e,t){return i().createElement(S,{id:"dt_bt_label_".concat(t+1),icon:i().createElement(f.Icon,{icon:"IcContractStrike",size:24}),key:e,label:g===e?(0,m.localize)("High barrier"):(0,m.localize)("Low barrier"),value:e})}))),P&&i().createElement(S,{id:"dt_bt_label",icon:i().createElement(f.Icon,{icon:"IcContractPayout",size:24}),label:B,value:p?"".concat(p," ").concat((0,s.getCurrencyDisplayCode)(d)):" - "})),i().createElement(S,{id:"dt_start_time_label",icon:i().createElement(f.Icon,{icon:"IcContractStartTime",size:24}),label:(0,m.localize)("Start time"),value:(0,s.toGMTFormat)((0,s.epochToMoment)(Number(_)))||" - "}),!(0,k.qm)(u)&&i().createElement(S,{id:"dt_entry_spot_label",icon:i().createElement(f.Icon,{icon:"IcContractEntrySpot",size:24}),label:(0,m.localize)("Entry spot"),value:(0,k.Ew)(Number(b))||" - ",value2:(0,s.toGMTFormat)((0,s.epochToMoment)(Number(y)))||" - "}),!isNaN(Number(o))&&i().createElement(S,{id:"dt_exit_spot_label",icon:i().createElement(f.Icon,{icon:"IcContractExitSpot",size:24}),label:(0,m.localize)("Exit spot"),value:(0,k.Ew)(Number(o))||" - ",value2:(0,s.toGMTFormat)((0,s.epochToMoment)(Number(v)))||" - "}),!isNaN(Number(t))&&i().createElement(S,{id:"dt_exit_time_label",icon:i().createElement(f.Icon,{icon:"IcContractExitTime",color:M?"green":"red",size:24}),label:(0,m.localize)("Exit time"),value:(0,s.toGMTFormat)((0,s.epochToMoment)(Number(t)))||" - "})))};const N=function(e){var t=e.currency,r=e.history,n=void 0===r?[]:r;return n.length?i().createElement(f.ThemedScrollbars,{is_bypassed:(0,s.isMobile)()},i().createElement("div",{className:"contract-audit__tabs-content"},n.map((function(e,r){return i().createElement(S,{key:e.order_date,id:"dt_history_label_".concat(r),label:e.display_name,timestamp:Number(null==e?void 0:e.order_date),value:0!==Math.abs(Number(e.order_amount))?i().createElement(i().Fragment,null,Number(e.order_amount)<0&&i().createElement("strong",null,"-"),i().createElement(f.Money,{amount:e.order_amount,currency:t}),e.value&&i().createElement(i().Fragment,null,i().createElement("br",null),i().createElement("span",null,"(",e.value,")"))):(0,m.localize)("Cancelled")})})))):i().createElement("div",{className:"contract-audit__empty"},i().createElement(f.Icon,{icon:"IcBox",size:48,color:"secondary"}),i().createElement("h4",{className:"contract-audit__empty-header"},(0,m.localize)("No history")),i().createElement(f.Text,{align:"center",line_height:"s",color:"less-prominent",size:"xxs"},(0,m.localize)("You have yet to update either take profit or stop loss")))};var T=["contract_update_history","has_result","is_accumulator","is_multiplier","is_turbos","toggleHistoryTab"];function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function I(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const D=function(e){var t=e.contract_update_history,r=e.has_result,n=e.is_accumulator,a=e.is_multiplier,o=e.is_turbos,c=e.toggleHistoryTab,l=I(e,T),u=l.contract_info,d=u.contract_id,_=u.currency,p=z(i().useState([]),2),b=p[0],y=p[1],v=function(e){return e.sort((function(e,t){return Number(null==t?void 0:t.order_date)-Number(null==e?void 0:e.order_date)}))};i().useEffect((function(){t.length&&t.length>b.length&&y(v(t))}),[t,b]);return r?a||n||o?i().createElement("div",{className:"contract-audit__wrapper"},i().createElement(f.Tabs,{top:!0,className:"contract-audit__tabs",onTabItemClick:function(e){c(!!e),e&&s.WS.contractUpdateHistory(d).then((function(e){y(v(e.contract_update_history))}))}},i().createElement("div",{label:(0,m.localize)("Details")},i().createElement(j,l)),i().createElement("div",{label:(0,m.localize)("History")},i().createElement(N,{currency:_,history:b})))):i().createElement("div",{className:"contract-audit__wrapper"},i().createElement(j,l)):null};var A=r("./src/App/Components/Elements/ContentLoader/index.js"),P=r("./src/Utils/Helpers/market-underlying.ts"),F=r("react-dom"),L=r.n(F);function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W.apply(this,arguments)}var B=function(e){var t=e.is_multiplier,r=e.children,n=e.onSwipedDown,a=f.SwipeableWrapper.useSwipeable({onSwipedDown:n}),o=document.getElementById("dt_contract_drawer_audit");return o?L().createPortal(i().createElement("div",{className:"contract-audit-card"},i().createElement("div",W({},a,{className:_()("contract-audit-card__container",{"contract-audit-card__container--is-multiplier":t})}),r)),o):null},R=function(e){var t=e.children,r=e.onSwipedDown,n=e.onSwipedUp,a=f.SwipeableWrapper.useSwipeable({onSwipedDown:r,onSwipedUp:n});return i().createElement("div",a,t)};const U=function(e){var t=e.validation_error;return i().createElement("div",{className:"contract-card__market-closed"},i().createElement(f.Text,{align:"center",as:"p",className:"contract-card__market-closed__title",weight:"bold"},t))};var H=r("./src/Stores/useTraderStores.tsx");function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var G=(0,b.Pi)((function(e){var t=e.contract_info,r=e.contract_update,n=e.currency,a=void 0===n?"":n,o=e.is_accumulator,c=e.is_collapsed,l=e.is_market_closed,u=e.is_mobile,m=e.is_multiplier,d=e.is_vanilla,p=e.is_smarttrader_contract,y=e.is_sell_requested,v=e.is_turbos,g=e.onClickCancel,h=e.onClickSell,E=e.onSwipedUp,C=e.onSwipedDown,w=e.result,k=e.server_time,S=void 0===k?(0,s.toMoment)():k,x=e.status,O=e.toggleContractAuditDrawer,j=(0,b.oR)(),N=j.ui,T=j.contract_trade,z=(0,H.b)().active_symbols,M=N.addToast,I=N.current_focus,D=N.removeToast,A=N.should_show_cancellation_warning,F=N.setCurrentFocus,L=N.toggleCancellationWarning,W=T.getContractById,B=q((0,f.useHover)(),2),Z=B[0],G=B[1],$=t.profit,V=t.validation_error,Y=!!(0,s.getEndTime)(t),J=(0,s.getSymbolDisplayName)(z,(0,P.cS)(t.shortcode||"").underlying),K=(0,s.isCryptoContract)(t.underlying),Q=!m||K&&m,X=i().createElement(f.ContractCard.Header,{contract_info:t,display_name:J,getCardLabels:s.getCardLabels,getContractTypeDisplay:s.getContractTypeDisplay,has_progress_slider:(0,s.isDesktop)()&&Q,is_mobile:u,is_sell_requested:y,is_sold:Y,onClickSell:h,server_time:S}),ee=i().createElement(f.ContractCard.Body,{addToast:M,contract_info:t,contract_update:r,currency:a,current_focus:null!=I?I:"",getCardLabels:s.getCardLabels,getContractById:W,is_accumulator:o,is_mobile:u,is_multiplier:m,is_sold:Y,is_turbos:v,is_vanilla:d,has_progress_slider:Q,removeToast:D,server_time:S,setCurrentFocus:F,should_show_cancellation_warning:A,status:null!=x?x:"",toggleCancellationWarning:L}),te=i().createElement(f.ContractCard.Footer,{contract_info:t,getCardLabels:s.getCardLabels,is_multiplier:m,is_sell_requested:y,onClickCancel:g,onClickSell:h,server_time:S}),re=i().createElement(i().Fragment,null,X,ee),ne=i().createElement(f.ContractCard,{contract_info:t,getCardLabels:s.getCardLabels,is_multiplier:m,profit_loss:Number($),should_show_result_overlay:!1},i().createElement("div",{className:_()("dc-contract-card",{"dc-contract-card--green":Number($)>0&&!w,"dc-contract-card--red":Number($)<0&&!w,"contract-card__market-closed--disabled":l&&G}),ref:Z},l&&!(0,s.getEndTime)(t)&&i().createElement("div",{className:_()({"contract-card__market-closed--hidden":(0,s.isDesktop)()&&G})},i().createElement(U,{validation_error:V})),re,te)),ae=Y||m||o||d||v||p;return i().createElement(i().Fragment,null,i().createElement(f.DesktopWrapper,null,ne),i().createElement(f.MobileWrapper,null,i().createElement(R,{onSwipedUp:ae?E:void 0,onSwipedDown:ae?C:void 0},ae&&i().createElement(f.Collapsible.ArrowButton,{onClick:O,is_collapsed:c}),ne)))}));const $=G;function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var J=(0,b.Pi)((function(e){var t,r=e.contract_info,n=e.contract_update,a=e.contract_update_history,o=e.is_accumulator,c=e.is_sell_requested,u=e.is_dark_theme,m=e.is_market_closed,d=e.is_multiplier,p=e.is_turbos,y=e.is_vanilla,v=e.is_smarttrader_contract,g=e.onClickCancel,h=e.onClickSell,E=e.status,C=e.toggleHistoryTab,w=(0,b.oR)(),k=w.common,S=w.ui,x=k.server_time,O=S.is_mobile,j=r.currency,N=r.exit_tick_display_value,T=r.is_sold,z=i().useRef(null),M=i().useRef(null),I=V(i().useState(!1),2),P=I[0],F=I[1],L=!(0,s.isUserSold)(r)||o||d||p?N:"-",W=i().createElement(D,{contract_end_time:(0,s.getEndTime)(r),contract_info:r,contract_update_history:a,duration_unit:(0,s.getDurationUnitText)((0,s.getDurationPeriod)(r)),duration:(0,s.getDurationTime)(r),exit_spot:L,has_result:!!T||d||y||p||o||v,is_accumulator:o,is_dark_theme:u,is_multiplier:d,is_open:!0,is_turbos:p,is_vanilla:y,toggleHistoryTab:C});if(!r)return null;var R=r.status||r.is_expired?i().createElement(i().Fragment,null,i().createElement($,{contract_info:r,contract_update:n,currency:j,is_accumulator:o,is_mobile:O,is_market_closed:m,is_multiplier:d,is_turbos:p,is_vanilla:y,is_sell_requested:c,is_smarttrader_contract:v,is_collapsed:P,onClickCancel:g,onClickSell:h,onSwipedUp:function(){return F(!0)},onSwipedDown:function(){return F(!1)},server_time:x,status:E,toggleContractAuditDrawer:function(){return F(!P)}}),i().createElement(f.DesktopWrapper,null,W)):i().createElement("div",{className:"contract-card"},i().createElement(A.r,{speed:2})),U=i().createElement(l.Z,{in:P,timeout:250,classNames:"contract-drawer__transition"},i().createElement("div",{id:"dt_contract_drawer",className:_()("contract-drawer",{"contract-drawer--with-collapsible-btn":!!(0,s.getEndTime)(r)||(d||y||p||o||v)&&(0,s.isMobile)(),"contract-drawer--is-multiplier":d&&(0,s.isMobile)(),"contract-drawer--is-multiplier-sold":d&&(0,s.isMobile)()&&(0,s.getEndTime)(r)}),style:{transform:P&&z.current&&M.current&&"translateY(calc(".concat(M.current.clientHeight,"px - ").concat(z.current.clientHeight,"px))")},ref:z},i().createElement("div",{className:"contract-drawer__body",ref:M},R),P&&i().createElement(f.MobileWrapper,null,i().createElement("div",{id:"dt_contract_drawer_audit"},i().createElement(B,{is_multiplier:d},W)))));return i().createElement(i().Fragment,null,i().createElement(f.DesktopWrapper,null,U),i().createElement(f.MobileWrapper,null,i().createElement("div",{style:{height:null===(t=M.current)||void 0===t?void 0:t.clientHeight}},i().createElement(f.Div100vhContainer,{height_offset:"40px",is_bypassed:!M.current},U))))}));const K=(0,c.withRouter)(J);var Q=r("./src/App/Components/Elements/Modals/UnsupportedContractModal/index.ts"),X=r("./src/Modules/Trading/Containers/smart-chart-switcher.jsx"),ee=r("./src/Modules/Contract/Components/Digits/index.ts"),te=r("./src/App/Components/Animations/index.js");function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ne(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const ae=function(e){var t=e.contract_info,r=(0,s.isMobile)()?47:150,n=re(i().useState(!0),2),a=n[0],o=n[1];return i().createElement("div",{className:"info-box-longcode"},i().createElement(f.Icon,{icon:"IcContractFlag",className:"info-box-longcode-icon",size:24}),i().createElement("div",{className:"info-box-longcode-wrapper"},i().createElement(f.Text,{size:"xs",className:_()("info-box-longcode-text",{"info-box-longcode-text--collapsed":a})},t.longcode)," ",(null==t?void 0:t.longcode)&&t.longcode.length>r&&i().createElement(f.Text,{as:"a",href:"#",size:"xs",onClick:function(e){e.preventDefault(),o(!a)},className:"info-box-longcode-text"},a?(0,m.localize)("View more"):(0,m.localize)("View less"))))};const oe=function(e){var t=e.message,r=void 0===t?"":t,n=e.onClickClose;return r?i().createElement("div",{className:"message"},i().createElement("div",{className:"message-icon"},i().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16"},i().createElement("g",{fill:"none",fillRule:"evenodd"},i().createElement("circle",{cx:"8",cy:"8",r:"8",fill:"#F44336"}),i().createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M8 7.293l3.146-3.147a.5.5 0 0 1 .708.708L8.707 8l3.147 3.146a.5.5 0 0 1-.708.708L8 8.707l-3.146 3.147a.5.5 0 0 1-.708-.708L7.293 8 4.146 4.854a.5.5 0 1 1 .708-.708L8 7.293z"})))),i().createElement("div",{className:"message-text"},r),i().createElement("div",{className:"message-close",onClick:n},i().createElement(f.Icon,{icon:"IcCross"}))):null};const ie=function(e){var t=e.contract_info,r=e.error_message,n=e.removeError,a=!!t.longcode;return i().createElement(te.o,{is_visible:a,className:"info-box-container",keyname:"info-box-container"},!!t.contract_type&&i().createElement("div",{className:"info-box"},i().createElement(ae,{contract_info:t})),i().createElement(oe,{message:r,onClickClose:n}))};var ce=r("./src/Modules/SmartChart/Components/bottom-widgets.jsx"),le=r("./src/Modules/SmartChart/Components/top-widgets.jsx"),se=(0,b.Pi)((function(){var e=(0,b.oR)().contract_replay.contract_store,t=e.contract_info,r=e.digits_info,n=e.display_status,a=e.is_digit_contract,o=e.is_ended;return i().createElement(ee.Z,{is_digit_contract:a,is_ended:o,contract_info:t,digits_info:r,display_status:n})})),ue=(0,b.Pi)((function(){var e=(0,b.oR)().contract_replay,t=(0,H.b)().is_vanilla,r=e.contract_store,n=e.removeErrorMessage,a=e.error_message,o=r.contract_info;return i().createElement(ie,{contract_info:o,error_message:a,removeError:n,is_vanilla:t})})),me=function(){var e=(0,b.oR)().client;return i().createElement(le.Z,{InfoBox:i().createElement(ue,null),is_title_enabled:!1,is_beta_chart:e.is_beta_chart})},de=function(){return i().createElement(ce.Z,{Widget:i().createElement(se,null)})},_e=r("./src/Modules/SmartChart/Components/Markers/marker.jsx");function pe(e){return pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(e)}var fe=["marker_component"];function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){ve(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ve(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==pe(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==pe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===pe(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ge(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var he=i().memo((function(e){var t=e.marker_component,r=ge(e,fe);return i().createElement(t,ye(ye({},r),{},{previous_spot_time:void 0}))}),(function(e,t){return e.previous_spot_time===t.previous_spot_time}));he.displayName="DelayedAccuBarriersMarker";const Ee=he;var Ce=r("./src/Modules/SmartChart/Components/all-markers.jsx"),we=r("./src/Modules/SmartChartBeta/Components/Markers/marker.jsx");function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ke.apply(this,arguments)}function Se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return xe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Oe=(0,b.Pi)((function(e){var t=e.contract_id,r=(0,b.oR)(),n=r.common,a=r.contract_replay,o=r.ui,c=Se(i().useState(0),2),l=c[0],u=c[1],d=a.contract_store,y=a.is_market_closed,v=a.is_sell_requested,g=a.is_valid_to_cancel,h=a.onClickCancel,w=a.onClickSell,k=a.onMount,S=a.onUnmount,x=a.indicative_status,O=a.is_chart_loading,j=a.is_forward_starting,N=d.contract_info,T=d.contract_update,z=d.contract_update_history,M=d.is_digit_contract,I=n.routeBackInApp,D=o.is_dark_mode_on,A=o.notification_messages_ui,P=o.toggleHistoryTab,F=N.shortcode&&(0,s.getContractTypeFeatureFlag)(N.contract_type,(0,s.isHighLow)(N)),L=!1===E()["is_".concat(F,"_enabled")],W=Se(i().useState(!1),2),B=W[0],R=W[1],U=(0,p.useHistory)();i().useEffect((function(){var e=+/[^/]*$/.exec(location.pathname)[0];return k(t||e),R(!0),function(){R(!1),S()}}),[t,location,k,S]);var H=i().useCallback((function(){return R(!1),!(0,s.isEmptyObject)(location.state)&&location.state.from_table_row?U.goBack():I(U)}),[U,I]);i().useEffect((function(){L&&B&&H()}),[L,B,H]);if(!N.underlying)return null;var q=(0,s.isAccumulatorContract)(N.contract_type),Z=(0,s.isMultiplierContract)(N.contract_type),G=(0,s.isTurbosContract)(N.contract_type),$=(0,s.isVanillaContract)(N.contract_type),V=(0,s.isSmartTraderContract)(N.contract_type),Y=i().createElement(K,{contract_info:N,contract_update:T,contract_update_history:z,is_accumulator:q,is_chart_loading:O,is_dark_theme:D,is_market_closed:y,is_multiplier:Z,is_turbos:G,is_sell_requested:v,is_valid_to_cancel:g,is_vanilla:$,is_smarttrader_contract:V,onClickCancel:h,onClickSell:w,status:x,toggleHistoryTab:P});return i().createElement(f.FadeWrapper,{is_visible:B,className:"contract-details-wrapper",keyname:"contract-details-wrapper"},i().createElement(f.MobileWrapper,null,i().createElement(A,null)),i().createElement(Q.Z,{onConfirm:function(){U.goBack()},onClose:function(){var e=(0,s.urlFor)("user/statementws",{legacy:!0});window.open(e,"_blank")},is_visible:j}),i().createElement(f.PageOverlay,{id:"dt_contract_replay_container",header:(0,m.localize)("Contract details"),onClickClose:H},i().createElement(f.Div100vhContainer,{className:"trade-container__replay",is_disabled:(0,s.isDesktop)(),height_offset:"80px"},i().createElement(f.DesktopWrapper,null,Y),i().createElement(f.MobileWrapper,null,i().createElement("div",{className:_()("contract-drawer__mobile-wrapper",{"contract-drawer__mobile-wrapper--is-multiplier":(0,s.isMobile)()&&Z})},Y)),i().createElement(i().Suspense,{fallback:i().createElement("div",null)},i().createElement("div",{className:_()("replay-chart__container",{"replay-chart__container--is-multiplier":(0,s.isMobile)()&&Z,"vanilla-trade-chart":$})},i().createElement(f.DesktopWrapper,null,i().createElement(A,null)),i().createElement(C.Z,{is_dark:D,is_visible:O}),i().createElement(f.DesktopWrapper,null,i().createElement(Ne,{is_dark_theme:D,is_accumulator_contract:q})),i().createElement(f.MobileWrapper,null,M?i().createElement(i().Fragment,null,i().createElement(ue,null),i().createElement(f.SwipeableWrapper,{className:"replay-chart__container-swipeable-wrapper",is_swipe_disabled:1===l,onChange:function(e){u(e)}},i().createElement(se,null),i().createElement(Ne,null))):i().createElement(Ne,{is_dark_theme:D,is_accumulator_contract:q})))))))}));Oe.propTypes={contract_id:a().number};const je=Oe;var Ne=(0,b.Pi)((function(e){var t,r=e.is_accumulator_contract,n=(0,H.b)(),a=(0,b.oR)(),o=a.contract_replay,c=a.client,l=a.common,u=a.ui,m=o.contract_store,d=o.chart_state,_=o.chartStateChange,p=o.margin,y=m.accumulator_previous_spot_time,v=m.contract_config,g=m.marker,h=m.is_digit_contract,E=m.barriers_array,C=m.getContractsArray,w=m.markers_array,k=m.contract_info,S=k.underlying,x=k.audit_details,O="READY"===d||"SCROLL_TO_LEFT"===d,j=l.app_routing_history,N=l.current_language,T=l.is_socket_opened,z=u.is_dark_mode_on,M=u.is_chart_layout_default,I=u.is_chart_countdown_visible,D=v.end_epoch,A=v.chart_type,P=v.start_epoch,F=v.granularity,L="DBot"===(0,s.getPlatformRedirect)(j).name,W={language:N.toLowerCase(),theme:z&&!L?"dark":"light",position:M?"bottom":"left",countdown:I,assetInformation:!1,isHighestLowestMarkerEnabled:!1},B=O?v.scroll_to_epoch:void 0,R=x?x.all_ticks:[],U=n.wsForget,q=n.wsSubscribe,Z=n.wsSendRequest,G=n.wsForgetStream,$=c.is_beta_chart,V=$?void 0:Ce.Z[null==g?void 0:g.type],Y=function(){return(0,s.isDesktop)()&&h},J=(0,f.usePrevious)(P),K=!!(0,s.getEndTime)(k);return i().createElement(X.Z,{id:"replay",is_beta:$,barriers:E,bottomWidgets:Y()?de:null,chartControlsWidgets:null,chartType:A,endEpoch:D,margin:p||null,isMobile:(0,s.isMobile)(),enabledNavigationWidget:(0,s.isDesktop)(),enabledChartFooter:!1,granularity:F,requestAPI:Z,requestForget:U,requestForgetStream:G,crosshair:(0,s.isMobile)()?0:void 0,maxTick:(0,s.isMobile)()?8:void 0,requestSubscribe:q,settings:W,startEpoch:P,scrollToEpoch:B,stateChangeListener:_,symbol:S,allTicks:R,topWidgets:me,isConnectionOpened:T,isStaticChart:r&&D&&P<J,shouldFetchTradingTimes:!1,should_zoom_out_on_yaxis:r,yAxisMargin:(t={top:(0,s.isMobile)()?96:148,bottom:Y()?128:112},(0,s.isMobile)()&&($&&(t.top=48),t.bottom=48),t),anchorChartToLeft:(0,s.isMobile)(),shouldFetchTickHistory:"seconds"!==(0,s.getDurationUnitText)((0,s.getDurationPeriod)(k))||"open"===k.status,shouldDrawTicksFromContractInfo:r,contractInfo:k,contracts_array:C(),isLive:!K,startWithDataFitMode:!0},$&&w.map((function(e){var t=e.content_config,r=e.marker_config,n=e.react_key;return i().createElement(we.Z,{key:n,marker_config:r,marker_content_props:t,is_bottom_widget_visible:Y()})})),!$&&w.map((function(e){var t=e.content_config,r=e.marker_config,n=e.react_key;return i().createElement(_e.Z,{key:n,marker_config:r,marker_content_props:t,is_bottom_widget_visible:Y()})})),!$&&r&&!!w&&i().createElement(Ee,ke({marker_component:V,key:g.key,is_dark_theme:z,granularity:F,is_in_contract_details:!0,previous_spot_time:y},g)))}));Ne.propTypes={is_accumulator_contract:a().bool};var Te=["GetProposalFailure","ContractValidationError"],ze=(0,b.Pi)((function(e){var t=e.match,r=e.history,n=(0,b.oR)().contract_replay,a=n.removeErrorMessage,o=n.error_message,d=n.error_code,_=n.has_error,p=n.removeAccountSwitcherListener,f=n.setAccountSwitcherListener;return i().useEffect((function(){return f(+t.params.contract_id,r),function(){a(),p()}}),[f,p,a,r,t.params.contract_id]),isNaN(t.params.contract_id)?i().createElement(c.Redirect,{to:"/404"}):i().createElement(i().Fragment,null,_?i().createElement(u.default,{message:o,is_dialog:Te.includes(d),redirect_label:Te.includes(d)?(0,m.localize)("Ok"):(0,m.localize)("Go back to trading"),redirectOnClick:function(){return r.push(s.routes.trade)},should_show_refresh:!1}):i().createElement(l.Z,{in:!_,timeout:400,classNames:{enter:"contract--enter",enterDone:"contract--enter-done",exit:"contract--exit"},unmountOnExit:!0},i().createElement(je,{contract_id:+t.params.contract_id,key:+t.params.contract_id})))}));ze.propTypes={history:a().object,match:a().object};const Me=(0,c.withRouter)(ze)}}]);
//# sourceMappingURL=trader.contract.fae2b872421b1503daaa.js.map