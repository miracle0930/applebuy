(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1668:function(e,a,l){Promise.resolve().then(l.bind(l,1295))},1295:function(e,a,l){"use strict";l.r(a);var r=l(7437),s=l(2265),n=l(9671),o=l.n(n);let t={product:"",getproduct:"delivery",firstname:"",lastname:"",address:"",phone:"",fapiao:"none",otherfapiaoname:"",payment:"",tradein:!1,series:"",tradeinaddress:"",applecare:!1,pencil:!1,keyboard:!1},i={product:"产品",getproduct:"取货方式",firstname:"姓",lastname:"名",address:"地址",phone:"手机号",fapiao:"发票",otherfapiaoname:"其他发票抬头",payment:"付款方式",tradein:"旧设备抵扣",series:"序列号",tradeinaddress:"旧设备抵扣取货地址",applecare:"购买applecare",pencil:"购买pencil",keyboard:"购买keyboard"},FormInput=e=>(0,r.jsx)("input",{...e,className:o()["form-input"]}),FormPhoneInput=e=>(0,r.jsx)("input",{...e,inputMode:"decimal",className:o()["form-input"]}),FormRadio=e=>{let{options:a,value:l,onChange:s,useCol:n=!1,...t}=e;return(0,r.jsx)("div",{className:o()["radio-group"]+(n?o().col:""),children:a.map(e=>(0,r.jsxs)("div",{className:o()["radio-item"],onClick:()=>s(e.key),children:[e.label,(0,r.jsx)("input",{...t,type:"radio",onChange:()=>s(e.key),checked:l===e.key,className:o()["radio-input"]})]},e.key))})},FormLabel=e=>{let{children:a,...l}=e;return(0,r.jsx)("div",{...l,className:o()["form-item"],children:a})},FormCheckbox=e=>{let{label:a,value:l,onChange:s,...n}=e;return(0,r.jsxs)("div",{className:o()["checkbox-item"],children:[a,(0,r.jsx)("input",{...n,type:"checkbox",onChange:e=>s(e.target.checked),checked:l,className:o()["checkbox-input"]})]})};a.default=()=>{let[e,a]=(0,s.useState)(t);return(0,r.jsx)("div",{className:o().form,children:(0,r.jsxs)("form",{onSubmit:a=>{var l,r,s;a.preventDefault();let n=[];["product","getproduct","firstname","lastname","address","phone","fapiao","otherfapiaoname","payment","tradein","series","applecare","tradeinaddress","pencil","keyboard"].forEach(a=>{n.push(i[a]+": "+e[a]+";")}),null===(s=navigator)||void 0===s||null===(r=s.clipboard)||void 0===r||null===(l=r.writeText)||void 0===l||l.call(r,n.join("\n")).then(()=>{alert("复制到剪贴板了，粘贴给我")}).catch(()=>{alert("出错了：没复制上")})},children:[(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"产品"}),(0,r.jsx)(FormInput,{placeholder:"例如: iphone15 pro max 256 黑色",value:e.product,onChange:e=>a(a=>({...a,product:e.target.value}))})]}),(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"怎么取货"}),(0,r.jsx)(FormRadio,{value:e.getproduct,options:[{label:"零售店自提",key:"pickup"},{label:"送货上门",key:"delivery"}],onChange:e=>{a(a=>({...a,getproduct:e}))}})]}),(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"姓"}),(0,r.jsx)(FormInput,{value:e.firstname,placeholder:"delivery"===e.getproduct?"":"自提可能需要身份证 最好提供真实姓名",onChange:e=>a(a=>({...a,firstname:e.target.value}))})]}),(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"名"}),(0,r.jsx)(FormInput,{value:e.lastname,placeholder:"delivery"===e.getproduct?"":"自提可能需要身份证 最好提供真实姓名",onChange:e=>a(a=>({...a,lastname:e.target.value}))})]}),(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"地址"}),(0,r.jsx)(FormInput,{value:e.address,placeholder:"delivery"===e.getproduct?"详细的省市区路房间号送货地址":"省市区",onChange:e=>a(a=>({...a,address:e.target.value}))})]}),(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"手机号"}),(0,r.jsx)(FormPhoneInput,{value:e.phone,onChange:e=>a(a=>({...a,phone:e.target.value}))})]}),(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"发票"}),(0,r.jsx)(FormRadio,{useCol:!0,value:e.fapiao,options:[{label:"无需发票",key:"none"},{label:"个人发票",key:"personal"},{label:"其他抬头发票",key:"other"}],onChange:e=>{a(a=>({...a,fapiao:e}))}})]}),"other"===e.fapiao&&(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"其他抬头名称"}),(0,r.jsx)(FormInput,{value:e.otherfapiaoname,onChange:e=>a(a=>({...a,otherfapiaoname:e.target.value}))})]}),(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"付款方式"}),(0,r.jsx)(FormRadio,{useCol:!0,value:e.payment,options:[{label:"微信",key:"wx"},{label:"支付宝",key:"alipay"},{label:"花呗 3期 0费率",key:"alipay_sp3"},{label:"花呗 6期 0费率",key:"alipay_sp6"},{label:"花呗 12期 0费率",key:"alipay_sp12"},{label:"招商银行 1期 0费率",key:"zhaoshang_sp1"},{label:"招商银行 3期 0费率",key:"zhaoshang_sp3"},{label:"招商银行 6期 0费率",key:"zhaoshang_sp6"},{label:"招商银行 12期 0费率",key:"zhaoshang_sp12"},{label:"建设银行 1期 0费率",key:"jianshe_sp1"},{label:"建设银行 3期 0费率",key:"jianshe_sp3"},{label:"建设银行 6期 0费率",key:"jianshe_sp6"},{label:"建设银行 12期 0费率",key:"jianshe_sp12"},{label:"工商银行 1期 0费率",key:"gongshang_sp1"},{label:"工商银行 3期 0费率",key:"gongshang_sp3"},{label:"工商银行 6期 0费率",key:"gongshang_sp6"},{label:"工商银行 12期 0费率",key:"gongshang_sp12"}],onChange:e=>{a(a=>({...a,payment:e}))}})]}),(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"使用旧设备抵扣"}),(0,r.jsx)(FormCheckbox,{value:e.tradein,onChange:e=>{a(a=>({...a,tradein:e}))}})]}),e.tradein&&(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"设备序列号"}),(0,r.jsx)(FormInput,{value:e.series,placeholder:"设置 > 通用 > 关于本机 > 序列号",onChange:e=>a(a=>({...a,series:e.target.value}))})]}),e.tradein&&"pickup"===e.getproduct&&(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"上门取抵扣设备的地址"}),(0,r.jsx)(FormInput,{value:e.tradeinaddress,placeholder:"详细的省市区路房间号的地址",onChange:e=>a(a=>({...a,tradeinaddress:e.target.value}))})]}),(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"购买Apple Care"}),(0,r.jsx)(FormCheckbox,{value:e.applecare,onChange:e=>{a(a=>({...a,applecare:e}))}})]}),e.product.toLowerCase().includes("pad")&&(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"购买Apple Pencil"}),(0,r.jsx)(FormCheckbox,{value:e.pencil,onChange:e=>{a(a=>({...a,pencil:e}))}})]}),e.product.toLowerCase().includes("pad")&&(0,r.jsxs)(FormLabel,{children:[(0,r.jsx)("span",{className:o().label,children:"购买Apple Keyboard"}),(0,r.jsx)(FormCheckbox,{value:e.keyboard,onChange:e=>{a(a=>({...a,keyboard:e}))}})]}),(0,r.jsx)("button",{type:"submit",className:o().submit,children:"填完了"})]})})}},9671:function(e){e.exports={"form-input":"page_form-input___ZRIh","radio-input":"page_radio-input__zUNp5",form:"page_form__Ou5d6","form-item":"page_form-item__Nl5Ft",label:"page_label__2GA72","radio-group":"page_radio-group__tCvtd",col:"page_col__kYZW_","radio-item":"page_radio-item__fL2ll",submit:"page_submit__oMfyQ"}},622:function(e,a,l){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=l(2265),s=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function q(e,a,l){var r,i={},p=null,c=null;for(r in void 0!==l&&(p=""+l),void 0!==a.key&&(p=""+a.key),void 0!==a.ref&&(c=a.ref),a)n.call(a,r)&&!t.hasOwnProperty(r)&&(i[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:s,type:e,key:p,ref:c,props:i,_owner:o.current}}a.jsx=q,a.jsxs=q},7437:function(e,a,l){"use strict";e.exports=l(622)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=1668)}),_N_E=e.O()}]);