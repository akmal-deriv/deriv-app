!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,((e,t,i)=>(()=>{"use strict";var a={"@deriv/shared":t=>{t.exports=e},"@deriv/translations":e=>{e.exports=t},react:e=>{e.exports=i}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return a[e](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var l={};return(()=>{r.d(l,{default:()=>a});var e=r("@deriv/shared"),t=r("@deriv/translations");r("react"),(0,e.getIDVNotApplicableOption)();var i=function(e,t){var i,a,n=t.real_account_signup_target,r=t.residence_list,l=t.account_settings,o=t.account_status,s=t.residence;return["malta","iom"].includes(n)&&e.tax_residence&&(null==e||null===(i=e.tax_residence)||void 0===i||null===(a=i.rules)||void 0===a||a.shift()),function(e){var t,i,a,n,r=e.account_status,l=e.citizen,o=e.real_account_signup_target,s=e.residence_list.find((function(e){return e.value===l})),u="maltainvest"===o,c=null==r||null===(t=r.status)||void 0===t?void 0:t.some((function(e){return"skip_idv"===e}));return Boolean(!u&&l&&(null==s||null===(i=s.identity)||void 0===i||null===(a=i.services)||void 0===a||null===(n=a.idv)||void 0===n?void 0:n.is_country_supported)&&!c)}({account_status:o,account_settings:l,residence:s,residence_list:r,real_account_signup_target:n})||(delete e.document_type,delete e.document_number),e};const a=function(a,n){var r=a.upgrade_info,l=a.real_account_signup_target,o=a.residence_list,s=a.account_settings,u=a.account_status,c=a.residence,d=a.is_high_risk_client_for_mt5,_=arguments.length>2&&void 0!==arguments[2]&&arguments[2],v=function(i){var a,n,r,l,o,s,u,c,d,_,v,m,p=i.residence_list,f=i.account_settings,g=i.real_account_signup_target,h=i.is_high_risk_client_for_mt5;if(!p||!f)return{};var x="maltainvest"===g&&(null==f?void 0:f.residence)||"",b={account_opening_reason:{supported_in:["iom","malta","maltainvest"],default_value:null!==(a=f.account_opening_reason)&&void 0!==a?a:"",rules:[["req",(0,t.localize)("Account opening reason is required.")]]},salutation:{supported_in:["iom","malta","maltainvest"],default_value:null!==(n=f.salutation)&&void 0!==n?n:"",rules:[["req",(0,t.localize)("Salutation is required.")]]},first_name:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(r=f.first_name)&&void 0!==r?r:"",rules:[["req",(0,t.localize)("First name is required.")],["length",(0,t.localize)("First name should be between 2 and 50 characters."),{min:2,max:50}],["name",(0,e.getErrorMessages)().name()]]},last_name:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(l=f.last_name)&&void 0!==l?l:"",rules:[["req",(0,t.localize)("Last name is required.")],["length",(0,t.localize)("Last name should be between 2 and 50 characters."),{min:2,max:50}],["name",(0,e.getErrorMessages)().name()]]},date_of_birth:{supported_in:["svg","iom","malta","maltainvest"],default_value:f.date_of_birth?(0,e.toMoment)(f.date_of_birth).format("YYYY-MM-DD"):"",rules:[["req",(0,t.localize)("Date of birth is required.")],[function(t){return(0,e.toMoment)(t).isValid()&&(0,e.toMoment)(t).isBefore((0,e.toMoment)().subtract(18,"years"))},(0,t.localize)("You must be 18 years old and above.")]]},place_of_birth:{supported_in:["maltainvest","iom","malta"],default_value:f.place_of_birth&&(null===(o=p.find((function(e){return e.value===f.place_of_birth})))||void 0===o?void 0:o.text)||"",rules:[["req",(0,t.localize)("Place of birth is required.")]]},citizen:{supported_in:["iom","malta","maltainvest"],default_value:f.citizen&&(null===(s=p.find((function(e){return e.value===f.citizen})))||void 0===s?void 0:s.text)||"",rules:[["req",(0,t.localize)("Citizenship is required")]]},phone:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(u=f.phone)&&void 0!==u?u:"",rules:[["req",(0,t.localize)("Phone is required.")],["phone",(0,t.localize)("Phone is not in a proper format.")],[function(t){var i=t.replace(/\D/g,"");return(0,e.validLength)(i,{min:9,max:35})},(0,t.localize)("You should enter {{min}}-{{max}} numbers.",{min:9,max:35})]]},tax_residence:{default_value:(null==f?void 0:f.tax_residence)&&(null===(c=p.find((function(e){return e.value===(null==f?void 0:f.tax_residence)})))||void 0===c?void 0:c.text)||x,supported_in:["maltainvest"],rules:[["req",(0,t.localize)("Tax residence is required.")]]},tax_identification_number:{default_value:null!==(d=f.tax_identification_number)&&void 0!==d?d:"",supported_in:["maltainvest"],rules:[["req",(0,t.localize)("Tax Identification Number is required.")],["length",(0,t.localize)("Tax Identification Number can't be longer than 25 characters."),{min:0,max:25}],[function(e){return!e||RegExp(/^(?!^$|\s+)[A-Za-z0-9./\s-]{0,25}$/).test(e)},(0,t.localize)("Letters, numbers, spaces, periods, hyphens and forward slashes only.")],[function(e,t,i){var a=i.tax_residence;return!e||!!a},(0,t.localize)("Please fill in Tax residence.")],[function(e,t,i){var a,n=i.tax_residence,r=null===(a=p.find((function(e){return e.text===n&&e.tin_format})))||void 0===a?void 0:a.tin_format;return!e||!r||r.some((function(t){return new RegExp(t).test(e)}))},(0,t.localize)("Tax Identification Number is not properly formatted.")]]},employment_status:{default_value:null!==(_=f.employment_status)&&void 0!==_?_:"",supported_in:["maltainvest"],rules:[["req",(0,t.localize)("Employment status is required.")]]},tax_identification_confirm:{default_value:!1,supported_in:["maltainvest"],rules:[["confirm",(0,t.localize)("Please confirm your tax information.")]]},document_type:{default_value:null!==(v=f.document_type)&&void 0!==v?v:{id:"",text:"",value:"",example_format:""},supported_in:["svg"],rules:[]},document_number:{default_value:null!==(m=f.document_number)&&void 0!==m?m:"",supported_in:["svg"],rules:[]},confirmation_checkbox:{default_value:!1,supported_in:["svg"],rules:[]}};return h||"maltainvest"===g||["place_of_birth","tax_residence","tax_identification_number","account_opening_reason"].forEach((function(e){b[e].supported_in.push("svg"),"tax_identification_number"!==e&&"tax_residence"!==e||(b[e].rules=b[e].rules.filter((function(e){return"req"!==e[0]})))})),b}({residence_list:o,account_settings:s,real_account_signup_target:l,residence:c,account_status:u,is_high_risk_client_for_mt5:d}),m=s.immutable_fields;return{header:{active_title:_?(0,t.localize)("A few personal details"):(0,t.localize)("Complete your personal details"),title:_?(0,t.localize)("PERSONAL"):(0,t.localize)("Personal details")},body:n,form_value:(0,e.getDefaultFields)(l,v),props:{validate:(0,e.generateValidationFunction)(l,i(v,{real_account_signup_target:l,residence_list:o,account_settings:s,account_status:u,residence:c})),is_svg:"svg"===(null==r?void 0:r.can_upgrade_to),is_mf:"maltainvest"===l,account_opening_reason_list:[{text:(0,t.localize)("Hedging"),value:"Hedging"},{text:(0,t.localize)("Income Earning"),value:"Income Earning"},{text:(0,t.localize)("Speculative"),value:"Speculative"}],salutation_list:[{label:(0,t.localize)("Mr"),value:"Mr"},{label:(0,t.localize)("Ms"),value:"Ms"}],disabled_items:m,account_status:u,residence:c,account_settings:s,real_account_signup_target:l},passthrough:["residence_list","is_fully_authenticated","has_real_account"],icon:"IcDashboardPersonalDetails"}}})(),l.default})()));