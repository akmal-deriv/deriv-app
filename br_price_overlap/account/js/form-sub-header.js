/*! For license information please see form-sub-header.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e.react)}(self,((e,t)=>(()=>{var r={"../../../node_modules/classnames/index.js":(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)o.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},"@deriv/components":t=>{"use strict";t.exports=e},react:e=>{"use strict";e.exports=t}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var s=o[e]={exports:{}};return r[e](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};return(()=>{"use strict";n.d(s,{default:()=>i});var e=n("../../../node_modules/classnames/index.js"),t=n.n(e),r=n("react"),o=n.n(r),a=n("@deriv/components");const i=function(e){var r=e.description,n=e.subtitle,s=e.title,i=e.title_text_size,c=void 0===i?"xs":i,u=s.replace(/\s+/g,"-").toLowerCase();return o().createElement(o().Fragment,null,o().createElement("div",{className:t()("account-form__header",u,{"account-form__header--has-description":!!r}),"data-testid":"form-sub-header"},o().createElement("div",{className:"account-form__header-section"},o().createElement(a.Text,{as:"h1",color:"prominent",weight:"bold",size:c,className:"account-form__title"},s),n&&o().createElement(a.Text,{as:"h2",size:"xxxs",color:"prominent",className:"account-form__subtitle"},n))),r&&o().createElement(a.Text,{as:"p",className:"account-form__description"},r))}})(),s.default})()));