!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/components/src/components/icon/icon"),require("@deriv/deriv-charts"),require("@deriv/shared"),require("@deriv/translations"),require("classnames"),require("formik"),require("mobx"),require("mobx-react"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/components/src/components/icon/icon","@deriv/deriv-charts","@deriv/shared","@deriv/translations","classnames","formik","mobx","mobx-react","react","react-dom"],r):"object"==typeof exports?exports["@deriv/bot-web-ui"]=r(require("@deriv/components"),require("@deriv/components/src/components/icon/icon"),require("@deriv/deriv-charts"),require("@deriv/shared"),require("@deriv/translations"),require("classnames"),require("formik"),require("mobx"),require("mobx-react"),require("react"),require("react-dom")):e["@deriv/bot-web-ui"]=r(e["@deriv/components"],e["@deriv/components/src/components/icon/icon"],e["@deriv/deriv-charts"],e["@deriv/shared"],e["@deriv/translations"],e.classnames,e.formik,e.mobx,e["mobx-react"],e.react,e["react-dom"])}(self,((e,r,t,o,n,i,a,s,d,c,u)=>(()=>{"use strict";var l,f,p,m,b,v,h={1336:r=>{r.exports=e},45135:e=>{e.exports=r},20057:e=>{e.exports=t},55770:e=>{e.exports=o},92273:e=>{e.exports=n},78310:e=>{e.exports=i},37661:e=>{e.exports=a},70259:e=>{e.exports=s},85264:e=>{e.exports=d},8156:e=>{e.exports=c},47111:e=>{e.exports=u}},g={};function y(e){var r=g[e];if(void 0!==r)return r.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return h[e].call(t.exports,t,t.exports,y),t.loaded=!0,t.exports}y.m=h,y.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return y.d(r,{a:r}),r},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,y.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);y.r(t);var o={};l=l||[null,f({}),f([]),f(f)];for(var n=2&r&&e;"object"==typeof n&&!~l.indexOf(n);n=f(n))Object.getOwnPropertyNames(n).forEach((r=>o[r]=()=>e[r]));return o.default=()=>e,y.d(t,o),t},y.d=(e,r)=>{for(var t in r)y.o(r,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},y.f={},y.e=e=>Promise.all(Object.keys(y.f).reduce(((r,t)=>(y.f[t](e,r),r)),[])),y.u=e=>"bot/js/bot."+({101:"martingale-xml",113:"oscars_grind-xml",297:"dbot-collection",406:"dalembert-xml",558:"bot-web-ui-app",619:"smart_chart_beta"}[e]||e)+"."+{101:"4a4761aa50477283205b",113:"8d7a312fdaa7a63ea8ac",243:"ce6c28d463332ce5e5db",297:"3f0fd3bdbe337bb50b7a",406:"e30047755f0d0be2f782",558:"e097e136bb8115e74973",619:"fb25c4e8cf9924bcc8af"}[e]+".js",y.miniCssF=e=>"bot/css/bot.bot-web-ui-app.a032dae3ee82757ba1d0.css",y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),p={},m="@deriv/bot-web-ui:",y.l=(e,r,t,o)=>{if(p[e])p[e].push(r);else{var n,i;if(void 0!==t)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var d=a[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==m+t){n=d;break}}n||(i=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,y.nc&&n.setAttribute("nonce",y.nc),n.setAttribute("data-webpack",m+t),n.src=e),p[e]=[r];var c=(r,t)=>{n.onerror=n.onload=null,clearTimeout(u);var o=p[e];if(delete p[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},u=setTimeout(c.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=c.bind(null,n.onerror),n.onload=c.bind(null,n.onload),i&&document.head.appendChild(n)}},y.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},y.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),y.p="/",b=e=>new Promise(((r,t)=>{var o=y.miniCssF(e),n=y.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(a=t[o]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===r))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var a;if((n=(a=i[o]).getAttribute("data-href"))===e||n===r)return a}})(o,n))return r();((e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=i=>{if(n.onerror=n.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=s,n.parentNode.removeChild(n),o(d)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),v={179:0},y.f.miniCss=(e,r)=>{v[e]?r.push(v[e]):0!==v[e]&&{558:1}[e]&&r.push(v[e]=b(e).then((()=>{v[e]=0}),(r=>{throw delete v[e],r})))},(()=>{var e={179:0};y.f.j=(r,t)=>{var o=y.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var i=y.p+y.u(r),a=new Error;y.l(i,(t=>{if(y.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,o[1](a)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[i,a,s]=t,d=0;if(i.some((r=>0!==e[r]))){for(o in a)y.o(a,o)&&(y.m[o]=a[o]);s&&s(y)}for(r&&r(t);d<i.length;d++)n=i[d],y.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunk_deriv_bot_web_ui=self.webpackChunk_deriv_bot_web_ui||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var x={};return(()=>{y.d(x,{default:()=>n});var e=y(8156),r=y.n(e),t=y(1336),o=y(55770);const n=(0,o.makeLazyLoader)((function(){return(0,o.moduleLoader)((function(){return Promise.all([y.e(243),y.e(558)]).then(y.bind(y,27129))}))}),(function(){return r().createElement(t.Loading,null)}))()})(),x.default})()));