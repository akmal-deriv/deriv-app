!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/deriv-charts"),require("@deriv/shared"),require("@deriv/translations"),require("classnames"),require("formik"),require("mobx"),require("mobx-react"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/deriv-charts","@deriv/shared","@deriv/translations","classnames","formik","mobx","mobx-react","react","react-dom"],r):"object"==typeof exports?exports["@deriv/bot-web-ui"]=r(require("@deriv/components"),require("@deriv/deriv-charts"),require("@deriv/shared"),require("@deriv/translations"),require("classnames"),require("formik"),require("mobx"),require("mobx-react"),require("react"),require("react-dom")):e["@deriv/bot-web-ui"]=r(e["@deriv/components"],e["@deriv/deriv-charts"],e["@deriv/shared"],e["@deriv/translations"],e.classnames,e.formik,e.mobx,e["mobx-react"],e.react,e["react-dom"])}(self,(function(e,r,t,o,i,n,a,s,d,u){return(()=>{"use strict";var c,l,f,p,b,m,v={1336:r=>{r.exports=e},57:e=>{e.exports=r},5770:e=>{e.exports=t},2273:e=>{e.exports=o},8310:e=>{e.exports=i},7661:e=>{e.exports=n},259:e=>{e.exports=a},5264:e=>{e.exports=s},8156:e=>{e.exports=d},7111:e=>{e.exports=u}},h={};function g(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={exports:{}};return v[e].call(t.exports,t,t.exports,g),t.exports}g.m=v,g.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return g.d(r,{a:r}),r},l=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,g.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);g.r(t);var o={};c=c||[null,l({}),l([]),l(l)];for(var i=2&r&&e;"object"==typeof i&&!~c.indexOf(i);i=l(i))Object.getOwnPropertyNames(i).forEach((r=>o[r]=()=>e[r]));return o.default=()=>e,g.d(t,o),t},g.d=(e,r)=>{for(var t in r)g.o(r,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((r,t)=>(g.f[t](e,r),r)),[])),g.u=e=>"bot/js/bot."+({101:"martingale-xml",113:"oscars_grind-xml",297:"dbot-collection",406:"dalembert-xml",558:"bot-web-ui-app"}[e]||e)+"."+{101:"e8f2df6178ac18e2ce56",113:"655d284ff7f92474f444",207:"e4e478b0d7cb87b2aea4",297:"a81cf2b2fc5fdec2d862",406:"eb7e28c9399043a87fc3",558:"ddd4d2550279fe1a09c7"}[e]+".js",g.miniCssF=e=>"bot/css/bot.bot-web-ui-app.b3f9385a51a319fa5474.css",g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),f={},p="@deriv/bot-web-ui:",g.l=(e,r,t,o)=>{if(f[e])f[e].push(r);else{var i,n;if(void 0!==t)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var d=a[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==p+t){i=d;break}}i||(n=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,g.nc&&i.setAttribute("nonce",g.nc),i.setAttribute("data-webpack",p+t),i.src=e),f[e]=[r];var u=(r,t)=>{i.onerror=i.onload=null,clearTimeout(c);var o=f[e];if(delete f[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},c=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),n&&document.head.appendChild(i)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.p="/br_ticks-error/",b=e=>new Promise(((r,t)=>{var o=g.miniCssF(e),i=g.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var i=(a=t[o]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===r))return a}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){var a;if((i=(a=n[o]).getAttribute("data-href"))===e||i===r)return a}})(o,i))return r();((e,r,t,o)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=n=>{if(i.onerror=i.onload=null,"load"===n.type)t();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=s,i.parentNode.removeChild(i),o(d)}},i.href=r,document.head.appendChild(i)})(e,i,r,t)})),m={179:0},g.f.miniCss=(e,r)=>{m[e]?r.push(m[e]):0!==m[e]&&{558:1}[e]&&r.push(m[e]=b(e).then((()=>{m[e]=0}),(r=>{throw delete m[e],r})))},(()=>{var e={179:0};g.f.j=(r,t)=>{var o=g.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(((t,i)=>o=e[r]=[t,i]));t.push(o[2]=i);var n=g.p+g.u(r),a=new Error;g.l(n,(t=>{if(g.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+i+": "+n+")",a.name="ChunkLoadError",a.type=i,a.request=n,o[1](a)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,i,[n,a,s]=t,d=0;if(n.some((r=>0!==e[r]))){for(o in a)g.o(a,o)&&(g.m[o]=a[o]);s&&s(g)}for(r&&r(t);d<n.length;d++)i=n[d],g.o(e,i)&&e[i]&&e[i][0](),e[i]=0},t=self.webpackChunk_deriv_bot_web_ui=self.webpackChunk_deriv_bot_web_ui||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var y={};return(()=>{g.d(y,{default:()=>o});var e=g(8156),r=g(5770),t=g(1336);const o=(0,r.makeLazyLoader)((function(){return Promise.all([g.e(207),g.e(558)]).then(g.bind(g,9394))}),(function(){return e.createElement(t.Loading,null)}))()})(),y.default})()}));