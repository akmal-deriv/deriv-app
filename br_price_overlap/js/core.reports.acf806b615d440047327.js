(self.webpackChunk=self.webpackChunk||[]).push([[3992],{17520:(e,t,r)=>{var n;self,n=(e,t,r,n,o,i,a,s,u)=>(()=>{"use strict";var c,l,d,f,p={"./src/index.tsx":(e,t,r)=>{r.d(t,{default:()=>_});var n=r("react"),o=r.n(n),i=r("@deriv/shared"),a=r("@deriv/components");function s(e,t){this.name="AggregateError",this.errors=e,this.message=t||""}s.prototype=Error.prototype;var u=setTimeout;function c(e){return Boolean(e&&void 0!==e.length)}function l(){}function d(e){if(!(this instanceof d))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],y(e,this)}function f(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,d._immediateFn((function(){var r=1===e._state?t.onFulfilled:t.onRejected;if(null!==r){var n;try{n=r(e._value)}catch(e){return void h(t.promise,e)}p(t.promise,n)}else(1===e._state?p:h)(t.promise,e._value)}))):e._deferreds.push(t)}function p(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var r=t.then;if(t instanceof d)return e._state=3,e._value=t,void v(e);if("function"==typeof r)return void y((n=r,o=t,function(){n.apply(o,arguments)}),e)}e._state=1,e._value=t,v(e)}catch(t){h(e,t)}var n,o}function h(e,t){e._state=2,e._value=t,v(e)}function v(e){2===e._state&&0===e._deferreds.length&&d._immediateFn((function(){e._handled||d._unhandledRejectionFn(e._value)}));for(var t=0,r=e._deferreds.length;t<r;t++)f(e,e._deferreds[t]);e._deferreds=null}function m(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function y(e,t){var r=!1;try{e((function(e){r||(r=!0,p(t,e))}),(function(e){r||(r=!0,h(t,e))}))}catch(e){if(r)return;r=!0,h(t,e)}}d.prototype.catch=function(e){return this.then(null,e)},d.prototype.then=function(e,t){var r=new this.constructor(l);return f(this,new m(e,t,r)),r},d.prototype.finally=function(e){var t=this.constructor;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){return t.reject(r)}))}))},d.all=function(e){return new d((function(t,r){if(!c(e))return r(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){i(e,t)}),r)}n[e]=a,0==--o&&t(n)}catch(e){r(e)}}for(var a=0;a<n.length;a++)i(a,n[a])}))},d.any=function(e){var t=this;return new t((function(r,n){if(!e||void 0===e.length)return n(new TypeError("Promise.any accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return n();for(var i=[],a=0;a<o.length;a++)try{t.resolve(o[a]).then(r).catch((function(e){i.push(e),i.length===o.length&&n(new s(i,"All promises were rejected"))}))}catch(e){n(e)}}))},d.allSettled=function(e){return new this((function(t,r){if(!e||void 0===e.length)return r(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function i(e,r){if(r&&("object"==typeof r||"function"==typeof r)){var a=r.then;if("function"==typeof a)return void a.call(r,(function(t){i(e,t)}),(function(r){n[e]={status:"rejected",reason:r},0==--o&&t(n)}))}n[e]={status:"fulfilled",value:r},0==--o&&t(n)}for(var a=0;a<n.length;a++)i(a,n[a])}))},d.resolve=function(e){return e&&"object"==typeof e&&e.constructor===d?e:new d((function(t){t(e)}))},d.reject=function(e){return new d((function(t,r){r(e)}))},d.race=function(e){return new d((function(t,r){if(!c(e))return r(new TypeError("Promise.race accepts an array"));for(var n=0,o=e.length;n<o;n++)d.resolve(e[n]).then(t,r)}))},d._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){u(e,0)},d._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};const _=(0,i.makeLazyLoader)((function(){return Promise.all([r.e("vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_lodash_debounce_index-493f08"),r.e("reports-app")]).then(r.bind(r,"./src/app.tsx"))}),(function(){return o().createElement(a.Loading,null)}))()},"@deriv/analytics":t=>{t.exports=e},"@deriv/components":e=>{e.exports=t},"@deriv/shared":e=>{e.exports=r},"@deriv/translations":e=>{e.exports=n},mobx:e=>{e.exports=o},react:e=>{e.exports=i},"react-dom":e=>{e.exports=a},"react-router":e=>{e.exports=s},"react-router-dom":e=>{e.exports=u}},h={};function v(e){var t=h[e];if(void 0!==t)return t.exports;var r=h[e]={id:e,loaded:!1,exports:{}};return p[e].call(r.exports,r,r.exports,v),r.loaded=!0,r.exports}v.m=p,v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var r in t)v.o(t,r)&&!v.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((t,r)=>(v.f[r](e,t),t)),[])),v.u=e=>"reports/js/reports."+e+"."+{404:"08ee3eb7f794fc8df16b","vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_lodash_debounce_index-493f08":"4a37b7723122f07f90c3","reports-app":"0a189119f763913d74d6","vendors-node_modules_classnames_index_js-node_modules_react-content-loader_dist_react-content-d9aa86":"a3e08bebbcbc0a1be501","reports-routes":"cb51ef382281fd07001a","two-month-picker":"d08f1654f631e7cd3d73"}[e]+".js",v.miniCssF=e=>"reports/css/reports."+e+"."+{"reports-app":"31bd06d444976e1b253c","reports-routes":"26ec32bec2b908064b86"}[e]+".css",v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c={},l="@deriv/reports:",v.l=(e,t,r,n)=>{if(c[e])c[e].push(t);else{var o,i;if(void 0!==r)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var u=a[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==l+r){o=u;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,v.nc&&o.setAttribute("nonce",v.nc),o.setAttribute("data-webpack",l+r),o.src=e),c[e]=[t];var d=(t,r)=>{o.onerror=o.onload=null,clearTimeout(f);var n=c[e];if(delete c[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),i&&document.head.appendChild(o)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},v.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),v.p="/",d=e=>new Promise(((t,r)=>{var n=v.miniCssF(e),o=v.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===t)return a}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),n(u)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),f={reports:0},v.f.miniCss=(e,t)=>{f[e]?t.push(f[e]):0!==f[e]&&{"reports-app":1,"reports-routes":1}[e]&&t.push(f[e]=d(e).then((()=>{f[e]=0}),(t=>{throw delete f[e],t})))},(()=>{var e={reports:0};v.f.j=(t,r)=>{var n=v.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=v.p+v.u(t),a=new Error;v.l(i,(r=>{if(v.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,a,s]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in a)v.o(a,n)&&(v.m[n]=a[n]);s&&s(v)}for(t&&t(r);u<i.length;u++)o=i[u],v.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunk_deriv_reports=self.webpackChunk_deriv_reports||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var m=v("./src/index.tsx");return m.default})(),e.exports=n(r(77178),r(47108),r(51417),r(44850),r(31025),r(32735),r(12788),r(39796),r(56149))}}]);
//# sourceMappingURL=core.reports.acf806b615d440047327.js.map