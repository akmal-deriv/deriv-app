!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("mobx"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","mobx","react","react-dom"],n):n((e=e||self).mobxReactLite={},e.mobx,e.React,e.ReactDOM)}(this,(function(e,n,r,t){"use strict";var o="default"in r?r.default:r;if(!r.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!n.spy)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");function u(){var e=r.useState(0)[1];return r.useCallback((function(){e((function(e){return e+1}))}),[])}function i(e){return"function"==typeof Symbol?Symbol.for(e):"__$mobx-react "+e+"__"}var c={};function a(){return"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:c}var f=i("observerBatching");function s(e){e()}function d(e){e||(e=s),n.configure({reactionScheduler:e}),a()[f]=!0}var l=!1;function p(){return l}function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function b(e){return n.getDependencyTree(e)}var y,h=new Set;function m(){void 0===y&&(y=setTimeout(w,1e4))}function w(){y=void 0;var e=Date.now();h.forEach((function(n){var r=n.current;r&&e>=r.cleanAt&&(r.reaction.dispose(),n.current=null,h.delete(n))})),h.size>0&&m()}var O=!1,g=[];function j(e){return function(){O?g.push(e):e()}}function x(e){O=!0,g=[];try{var n=e();O=!1;var r=g.length>0?g:void 0;return o.useLayoutEffect((function(){r&&r.forEach((function(e){return e()}))}),[r]),n}finally{O=!1}}var R={};function S(e){return"observer"+e}function E(e,r,t){if(void 0===r&&(r="observed"),void 0===t&&(t=R),p())return e();var i=j((t.useForceUpdate||u)()),c=o.useRef(null);if(!c.current){var a=new n.Reaction(S(r),(function(){f.mounted?i():(a.dispose(),c.current=null)})),f=function(e){return{cleanAt:Date.now()+1e4,reaction:e}}(a);c.current=f,h.add(c),m()}var s=c.current.reaction;return o.useDebugValue(s,b),o.useEffect((function(){return h.delete(c),c.current?c.current.mounted=!0:(c.current={reaction:new n.Reaction(S(r),(function(){i()})),cleanAt:Infinity},i()),function(){c.current.reaction.dispose(),c.current=null}}),[]),x((function(){var n,r;if(s.track((function(){try{n=e()}catch(e){r=e}})),r)throw r;return n}))}var A={$$typeof:!0,render:!0,compare:!0,type:!0};function D(e){var n=e.children||e.render;return"function"!=typeof n?null:E(n)}function _(e,n,r,t,o){var u="function"==typeof e[n],i="function"==typeof e["children"===n?"render":"children"];return u&&i?new Error("MobX Observer: Do not use children and render in the same time in`"+r):u||i?null:new Error("Invalid prop `"+o+"` of type `"+typeof e[n]+"` supplied to `"+r+"`, expected `function`.")}function k(e,r){if(!r||void 0!==e){var t=o.useState((function(){return n.observable(e,{},{deep:!1})}))[0];return n.runInAction((function(){Object.assign(t,e)})),t}}D.propTypes={children:_,render:_},D.displayName="Observer",d(t.unstable_batchedUpdates),e.Observer=D,e.isObserverBatched=function(){return!!a()[f]},e.isUsingStaticRendering=p,e.observer=function(e,n){if(p())return e;var t,o,u,i=v({forwardRef:!1},n),c=e.displayName||e.name,a=function(n,r){return E((function(){return e(n,r)}),c)};return a.displayName=c,t=r.memo(i.forwardRef?r.forwardRef(a):a),o=e,u=t,Object.keys(o).forEach((function(e){A[e]||Object.defineProperty(u,e,Object.getOwnPropertyDescriptor(o,e))})),t.displayName=c,t},e.observerBatching=d,e.useAsObservableSource=function(e){return k(e,!1)},e.useForceUpdate=u,e.useLocalStore=function(e,r){var t=k(r,!0);return o.useState((function(){var r=n.observable(e(t));return function(e){if(!e||"object"!=typeof e)return!1;var n=Object.getPrototypeOf(e);return!n||n===Object.prototype}(r)&&n.runInAction((function(){Object.keys(r).forEach((function(e){var t,o,u=r[e];"function"==typeof u&&(r[e]=(t=u,o=r,function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];return n.transaction((function(){return t.apply(o,r)}))}))}))})),r}))[0]},e.useObserver=E,e.useQueuedForceUpdate=j,e.useQueuedForceUpdateBlock=x,e.useStaticRendering=function(e){l=e},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=mobxreactlite.umd.production.min.js.map
