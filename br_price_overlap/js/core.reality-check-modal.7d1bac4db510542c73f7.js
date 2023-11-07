"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9e3],{49095:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(71838),r=a(60216),l=a.n(r),i=a(32735),o=a(39796),c=a(47108),s=a(51417),u=a(44850),m=a(15736),d=function(e){var t=e.country_standpoint,a=e.disableApp,r=e.enableApp,l=e.IntervalField,o=e.is_visible,m=e.is_mx,d=e.logout,p=e.onSubmit,_=e.openStatement,b=e.validateForm,y=t.is_united_kingdom&&m;return i.createElement(c.Modal,{className:"reality-check",enableApp:r,is_open:o,disableApp:a,has_close_icon:!1,title:(0,u.localize)("Trading statistics report"),portalId:"modal_root_absolute",width:"720px"},i.createElement(n.Formik,{initialValues:{interval:""},validate:b,onSubmit:p},(function(e){var t=e.errors,a=e.isSubmitting,r=e.isValid,o=e.values,m=e.touched,p=e.handleChange,b=e.handleBlur;return i.createElement(n.Form,{noValidate:!0},i.createElement(c.Modal.Body,null,i.createElement(c.Div100vhContainer,{className:"reality-check__wrapper",max_autoheight_offset:"204px",is_disabled:(0,s.isDesktop)()},i.createElement(c.Text,{as:"p",size:"xs",line_height:"m",className:"reality-check__text reality-check__text--description"},y?i.createElement(u.Localize,{i18n_default_text:"Gaming trading can become a real addiction, as can any other activity pushed to its limits. To avoid the danger of such an addiction, we provide a reality-check that gives you a summary of your trades and accounts on a regular basis."}):i.createElement(u.Localize,{i18n_default_text:"Options trading can become a real addiction, as can any other activity pushed to its limits. To avoid the danger of such an addiction, we provide a reality-check that gives you a summary of your trades and accounts on a regular basis."})),i.createElement(c.Text,{as:"p",size:"xs",line_height:"m",className:"reality-check__text reality-check__text--description"},i.createElement(u.Localize,{i18n_default_text:"Would like to check your statement first? <0>Check Statement</0>",components:[i.createElement("a",{key:0,className:"link",onClick:_})]})),i.createElement("div",{className:"reality-check__separator reality-check__separator--large"}),i.createElement(c.Text,{as:"p",size:"xs",line_height:"m",align:"center",className:"reality-check__text reality-check__text--center"},i.createElement(u.Localize,{i18n_default_text:"Please specify your preferred interval reality check in minutes:"})),i.createElement(l,{values:o,touched:m,errors:t,handleChange:p,handleBlur:b}))),i.createElement(c.Modal.Footer,{has_separator:!0},i.createElement(c.FormSubmitButton,{className:"reality-check__submit",has_cancel:!0,cancel_label:(0,u.localize)("Log out"),is_disabled:!o.interval||!r||a,label:(0,u.localize)("Continue trading"),onCancel:d})))})))};d.propTypes={country_standpoint:l().object,disableApp:l().func,enableApp:l().func,IntervalField:l().func,is_mx:l().bool,is_visible:l().bool,logout:l().func,onSubmit:l().func,openStatement:l().func,validateForm:l().func};const p=d;var _=a(42671);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e,t,a){return(t=function(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l,i,o=[],c=!0,s=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(n=l.call(a)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(s)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var g=function(e){var t=e.label,a=e.value;return i.createElement("div",{className:"reality-check__row"},i.createElement("span",null,t),i.createElement("strong",null,a))},E=function(e){var t=e.label,a=e.value;return i.createElement(c.Text,{as:"p",size:"xs",className:"reality-check__text"},i.createElement("span",null,t),i.createElement("br",null),i.createElement("strong",null,a))},k=function(e){var t=e.disableApp,a=e.enableApp,r=e.IntervalField,l=e.is_visible,o=e.logout,m=e.onSubmit,d=e.openPositions,p=e.openStatement,b=e.reality_check_duration,v=e.server_time,k=e.validateForm,x=f(i.useState({}),2),S=x[0],C=x[1];i.useEffect((function(){var e=performance.now();_.WS.realityCheck().then((function(t){var a=t.reality_check;if(a){var n=performance.now()-e,r=v.add(n,"milliseconds");C(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({current_date_time_gmt:(0,s.toGMTFormat)(r),duration_string:z(a.start_time,r.unix()),profit:a.sell_amount-a.buy_amount,start_date_time_gmt:(0,s.toGMTFormat)(1e3*+a.start_time),turnover:a.sell_amount+a.buy_amount},a))}}))}),[]);var z=function(e,t){var a=(0,s.getDiffDuration)(e,t);return(0,u.localize)("{{num_day}} days {{num_hour}} hours {{num_minute}} minutes",{num_day:a.get("days"),num_hour:a.get("hours"),num_minute:a.get("minutes")})};return(0,s.isEmptyObject)(S)?i.createElement(c.Loading,null):i.createElement(c.Modal,{className:"reality-check",enableApp:a,is_open:l,disableApp:t,portalId:"modal_root_absolute",has_close_icon:!1,title:i.createElement(i.Fragment,null,i.createElement(c.DesktopWrapper,null,i.createElement(u.Localize,{i18n_default_text:"Your trading statistics since: {{date_time}}",values:{date_time:S.start_date_time_gmt}})),i.createElement(c.MobileWrapper,null,i.createElement(u.Localize,{i18n_default_text:"Your trading statistics since:"}),i.createElement("br",null),S.start_date_time_gmt)),width:(0,s.isMobile)()?"304px":"720px"},i.createElement(n.Formik,{initialValues:{interval:b},validate:k,onSubmit:m},(function(e){var t=e.errors,a=e.isSubmitting,l=e.isValid,m=e.values,_=e.touched,b=e.handleChange,y=e.handleBlur;return i.createElement(n.Form,{noValidate:!0},i.createElement(c.Modal.Body,null,i.createElement(c.ThemedScrollbars,{height:"75vh",autoHide:!1,is_bypassed:(0,s.isMobile)()},i.createElement(c.Div100vhContainer,{className:"reality-check__column-wrapper",is_disabled:(0,s.isDesktop)(),max_autoheight_offset:"204px"},i.createElement("div",{className:"reality-check__column"},i.createElement("div",{className:"reality-check__column-content"},i.createElement(g,{label:(0,u.localize)("Login ID"),value:S.loginid}),i.createElement(g,{label:(0,u.localize)("Currency"),value:S.currency}),i.createElement(g,{label:(0,u.localize)("Turnover"),value:i.createElement(c.Money,{amount:S.turnover,currency:S.currency})}),i.createElement(g,{label:(0,u.localize)("Profit / Loss"),value:i.createElement(i.Fragment,null,!!S.profit&&(S.profit<0?"-":"+"),i.createElement(c.Money,{amount:S.profit,currency:S.currency}))}),i.createElement(g,{label:(0,u.localize)("Contract bought"),value:S.buy_count}),i.createElement(g,{label:(0,u.localize)("Contract sold"),value:S.sell_count}),i.createElement(g,{label:(0,u.localize)("Potential profit"),value:i.createElement(c.Money,{amount:S.potential_profit,currency:S.currency})})),i.createElement(c.Button,{type:"button",secondary:!0,large:!0,onClick:S.open_contract_count?d:p,className:"reality-check__button reality-check__button--full-width"},(0,u.localize)("Go to Reports"))),i.createElement(c.MobileWrapper,null,i.createElement("div",{className:"reality-check__separator"})),i.createElement("div",{className:"reality-check__column"},i.createElement(E,{label:(0,u.localize)("Session duration:"),value:S.duration_string}),i.createElement(E,{label:(0,u.localize)("Login time:"),value:S.start_date_time_gmt}),i.createElement(E,{label:(0,u.localize)("Current time:"),value:S.current_date_time_gmt}),i.createElement(c.DesktopWrapper,null,i.createElement("div",{className:"reality-check__separator"})),i.createElement(c.Text,{as:"p",size:"xs",line_height:"m",align:"center",className:"reality-check__text reality-check__text--center"},i.createElement(u.Localize,{i18n_default_text:"Your preferred time interval between each report:"})),i.createElement(r,{values:m,touched:_,errors:t,handleChange:b,handleBlur:y}))))),i.createElement(c.Modal.Footer,{has_separator:!0},i.createElement(c.FormSubmitButton,{className:"reality-check__submit",has_cancel:!0,cancel_label:(0,u.localize)("Log out"),is_disabled:!m.interval||!l||a,label:(0,u.localize)("Continue trading"),onCancel:o})))})))};k.propTypes={disableApp:l().func,enableApp:l().func,IntervalField:l().func,is_visible:l().bool,logout:l().func,onSubmit:l().func,openPositions:l().func,openStatement:l().func,reality_check_duration:l().number,server_time:l().object,validateForm:l().func};const x=k;function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},S.apply(this,arguments)}var C=function(e){var t=e.values,a=e.touched,r=e.errors,l=e.handleChange,o=e.handleBlur;return i.createElement("div",{className:"reality-check__fieldset"},i.createElement(n.Field,{name:"interval"},(function(e){var n=e.field;return i.createElement(c.Input,S({},n,{"data-lpignore":"true",type:"text",label:(0,u.localize)("Time interval"),value:t.interval,onChange:l,onBlur:o,hint:(0,u.localize)("Interval should be between 10-60 minutes"),required:!0,error:a.interval&&r.interval,autoComplete:"off",maxLength:"2"}))})))},z=function(e){var t=e.country_standpoint,a=e.disableApp,n=e.enableApp,r=e.logoutClient,l=e.is_visible,c=e.is_mx,m=e.reality_check_dismissed,d=e.reality_check_duration,_=e.server_time,b=e.setRealityCheckDuration,y=e.setReportsTabIndex,h=e.setVisibilityRealityCheck,f=(0,o.useHistory)(),v=function(){y(2),f.push(s.routes.statement),h(0)},g=function(e){var t={};if(e.interval){var a=(0,s.validNumber)(e.interval,{type:"number",min:10,max:60}),n=a.is_ok,r=a.message;n||(t.interval=r)}else t.interval=(0,u.localize)("This field is required.");return t},E=function(e){h(0),b(e.interval)};return!m&&d?i.createElement(x,{disableApp:a,enableApp:n,is_visible:l,openPositions:function(){y(0),f.push(s.routes.positions),h(0)},openStatement:v,validateForm:g,onSubmit:E,logout:r,reality_check_duration:d,server_time:_,IntervalField:C}):i.createElement(p,{country_standpoint:t,disableApp:a,enableApp:n,is_visible:l,is_mx:c,openStatement:v,validateForm:g,onSubmit:E,logout:r,IntervalField:C})};z.propTypes={country_standpoint:l().object,disableApp:l().func,enableApp:l().func,history:l().object,logoutClient:l().func,is_mx:l().bool,is_visible:l().bool,reality_check_dismissed:l().bool,reality_check_duration:l().number,server_time:l().number,setRealityCheckDuration:l().func,setReportsTabIndex:l().func,setVisibilityRealityCheck:l().func};const A=(0,m.$j)((function(e){var t=e.client,a=e.common,n=e.ui;return{logoutClient:t.logout,country_standpoint:t.country_standpoint,is_visible:t.is_reality_check_visible,is_mx:"iom"===t.landing_company_shortcode,reality_check_dismissed:t.reality_check_dismissed,reality_check_duration:t.reality_check_duration,setRealityCheckDuration:t.setRealityCheckDuration,setVisibilityRealityCheck:t.setVisibilityRealityCheck,server_time:a.server_time,enableApp:n.enableApp,disableApp:n.disableApp,setReportsTabIndex:n.setReportsTabIndex}}))(z)}}]);
//# sourceMappingURL=core.reality-check-modal.7d1bac4db510542c73f7.js.map