/*! For license information please see core.main~dd894ead.e9394503ed27bc81a7a7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6716],{34353:(t,r,e)=>{e.d(r,{un:()=>k,IM:()=>G,ib:()=>O,HN:()=>A,$4:()=>et,Yv:()=>m,rV:()=>$,mU:()=>q});var n=e(32735);const o=(0,n.createContext)(null);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(){u=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var i=r&&r.prototype instanceof b?r:b,u=Object.create(i.prototype),c=new k(o||[]);return n(u,"_invoke",{value:S(t,e,c)}),u}function y(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p={};function b(){}function v(){}function h(){}var d={};f(d,c,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(L([])));g&&g!==r&&e.call(g,c)&&(d=g);var O=h.prototype=b.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function o(n,u,c,a){var l=y(t[n],t,u);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==i(s)&&e.call(s,"__await")?r.resolve(s.__await).then((function(t){o("next",t,c,a)}),(function(t){o("throw",t,c,a)})):r.resolve(s).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,a)}))}a(l.arg)}var u;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return u=u?u.then(n,n):n()}})}function S(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var c=P(u,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var a=y(t,r,e);if("normal"===a.type){if(n=e.done?"completed":"suspendedYield",a.arg===p)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(n="completed",e.method="throw",e.arg=a.arg)}}}function P(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,P(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=y(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function x(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return v.prototype=h,n(O,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:v,configurable:!0}),v.displayName=f(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,f(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},w(j.prototype),f(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var u=new j(s(r,e,n,o),i);return t.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},w(O),f(O,l,"Generator"),f(O,c,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return u.type="throw",u.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),a=e.call(i,"finallyLoc");if(c&&a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;x(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:L(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function c(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?c(Object(e),!0).forEach((function(r){l(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function l(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==i(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===i(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function f(t,r,e,n,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void e(t)}c.done?r(a):Promise.resolve(a).then(n,o)}const s=function(){var t=(0,n.useContext)(o),r=(0,n.useCallback)(function(){var r,e=(r=u().mark((function r(e,n){var o;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,null==t?void 0:t.send(a(l({},e,1),n||{}));case 2:if(!(o=r.sent).error){r.next=5;break}throw o.error;case 5:return r.abrupt("return",o);case 6:case"end":return r.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function u(t){f(i,n,o,u,c,"next",t)}function c(t){f(i,n,o,u,c,"throw",t)}u(void 0)}))});return function(t,r){return e.apply(this,arguments)}}(),[t]);return{send:r,subscribe:(0,n.useCallback)((function(r,e){var n;return null==t?void 0:t.subscribe(a((l(n={},r,1),l(n,"subscribe",1),n),e||{}))}),[t])}};var y=e(35633);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}var b=["mutate"];function v(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function h(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==p(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===p(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function d(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}const m=function(t,r){var e=s().send,o=(0,y.D)((function(r){var n=null==r?void 0:r[0],o=n&&"payload"in n?n.payload:void 0;return e(t,o)}),r),i=o.mutate,u=d(o,b),c=(0,n.useCallback)((function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return i(r)}),[i]);return function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?v(Object(e),!0).forEach((function(r){h(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({mutate:c},u)};var g=e(71934);const O=function(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];var o=null==e?void 0:e[0],i=o&&"payload"in o?o.payload:void 0,u=o&&"options"in o?o.options:void 0,c=s().send;return(0,g.a)(function(t,r){if(!r)return[t];if(delete r.req_id,t&&1===r[t]&&delete r[t],0===Object.keys(r).length)return[t];var e=Object.keys(r).sort((function(t,r){return t.localeCompare(r)})).reduce((function(t,e){return t[e]=r[e],t}),{});return[t,JSON.stringify(e)]}(t,i),(function(){return c(t,i)}),u)};var w=e(68996),j=e.n(w),S=e(51417),P=e(29019),E=e(38624),x=(window.ReactQueryClient||(window.ReactQueryClient=new P.S),window.ReactQueryClient);const k=function(t){var r,e,i,u,c,a=t.children,l=t.standalone,f=void 0!==l&&l,s=(0,S.useWS)(),y=f?(i=(0,S.getSocketURL)(),u=(0,S.getAppId)(),c="wss://".concat(i,"/websockets/v3?app_id=").concat(u,"&l=").concat("EN","&brand=").concat("deriv"),window.DerivAPI||(window.DerivAPI={}),null!==(r=window.DerivAPI)&&void 0!==r&&r[c]||(window.DerivAPI[c]=new(j())({connection:new WebSocket(c)})),null===(e=window.DerivAPI)||void 0===e?void 0:e[c]):s;return n.createElement(o.Provider,{value:y},n.createElement(E.aH,{client:x},a))};var L=e(77830);const A=function(){var t=(0,E.NL)();return(0,n.useCallback)((function(r,e){return t.invalidateQueries(Array.isArray(r)?r:[r],e)}),[t])};function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}var _=["data"];function I(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?I(Object(e),!0).forEach((function(r){N(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):I(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function N(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==D(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===D(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function T(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}const G=function(){var t=(0,L.bz)(),r=A(),e=O("authorize",{payload:{authorize:t||""},options:{enabled:Boolean(t)}}),o=e.data,i=T(e,_),u=(0,n.useMemo)((function(){return C({},null==o?void 0:o.authorize)}),[null==o?void 0:o.authorize]);return C({data:u,switchAccount:(0,n.useCallback)((function(t){(0,L.jl)()!==t&&(localStorage.setItem("active_loginid",t),r("authorize"))}),[r])},i)};function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}var M=["data"],F=["mutate"];function R(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function Q(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?R(Object(e),!0).forEach((function(r){U(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function U(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==z(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===z(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function Y(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}const $=function(){var t=O("get_settings"),r=t.data,e=Y(t,M),o=m("set_settings",{onSuccess:function(){return c("get_settings")}}),i=o.mutate,u=Y(o,F),c=A(),a=(0,n.useCallback)((function(t){return i({payload:t})}),[i]),l=(0,n.useMemo)((function(){return Q({},null==r?void 0:r.get_settings)}),[null==r?void 0:r.get_settings]);return Q({data:l,update:a,mutation:u},e)};function H(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;a=!1}else for(;!(a=(n=i.call(e)).done)&&(c.push(n.value),c.length!==r);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return W(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return W(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}const q=function(t){var r=H((0,n.useState)(!1),2),e=r[0],o=r[1],i=H((0,n.useState)(!1),2),u=i[0],c=i[1],a=H((0,n.useState)(),2),l=a[0],f=a[1],y=H((0,n.useState)(),2),p=y[0],b=y[1],v=(0,n.useRef)(),h=s().subscribe,d=(0,n.useCallback)((function(){for(var r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];var i=null==e?void 0:e[0],u=i&&"payload"in i?i.payload:void 0;o(!0),c(!0);try{v.current=h(t,u).subscribe((function(t){b(t),o(!1)}),(function(t){f(t.error),o(!1)}))}catch(t){f(t)}}),[h,t]),m=(0,n.useCallback)((function(){var t,r;null===(t=v.current)||void 0===t||null===(r=t.unsubscribe)||void 0===r||r.call(t),c(!1)}),[]);return(0,n.useEffect)((function(){return function(){m()}}),[m]),{subscribe:d,unsubscribe:m,isLoading:e,isSubscribed:u,error:l,data:p}};function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}var J=["remove"];function V(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function K(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?V(Object(e),!0).forEach((function(r){X(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):V(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function X(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==B(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===B(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function Z(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function tt(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;a=!1}else for(;!(a=(n=i.call(e)).done)&&(c.push(n.value),c.length!==r);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return rt(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return rt(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rt(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}const et=function(t){for(var r,e,o=arguments.length,i=new Array(o>1?o-1:0),u=1;u<o;u++)i[u-1]=arguments[u];var c=null==i?void 0:i[0],a=c&&"payload"in c?c.payload:void 0,l=c&&"options"in c?c.options:void 0,f=(null==a||null===(r=a.payload)||void 0===r?void 0:r.limit)||10,s=tt((0,n.useState)((null==a||null===(e=a.payload)||void 0===e?void 0:e.offset)||0),2),y=s[0],p=s[1],b=O(t,{payload:K(K({},a),{},{offset:y,limit:f}),options:K(K({},l),{},{keepPreviousData:!!y})}),v=b.remove,h=Z(b,J),d=(0,n.useCallback)((function(){return p((function(t){return t+f}))}),[f]),m=(0,n.useCallback)((function(){v(),p(0)}),[v]);return K(K({},h),{},{remove:v,loadMore:d,reset:m})}}}]);
//# sourceMappingURL=core.main~dd894ead.e9394503ed27bc81a7a7.js.map