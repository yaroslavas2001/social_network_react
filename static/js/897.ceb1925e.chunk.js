"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[897],{7520:function(r,n,t){t.d(n,{Gr:function(){return h},II:function(){return l},gx:function(){return u}});var e=t(8683),o=t(6139),i=t(9055),a=(t(2791),t(7801)),c=t(184),s=function(r){var n=r.meta,t=n.touched,e=n.error,o=r.children,s=t&&e;return(0,c.jsxs)("div",{className:(0,a.v)([s?i.Z.error:"",i.Z.form_Control]),children:[o,s&&(0,c.jsx)("span",{className:i.Z.error_text,children:e})]})},u=function(r){return(0,c.jsx)(s,(0,e.Z)((0,e.Z)({},r),{},{children:(0,c.jsx)("textarea",(0,e.Z)((0,e.Z)({},r.input),r))}))},l=function(r){return(0,c.jsx)(s,(0,e.Z)((0,e.Z)({},r),{},{children:(0,c.jsx)("input",(0,e.Z)((0,e.Z)({},r.input),r))}))};function h(r,n,t,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,c.jsxs)("div",{className:i.Z.row,children:[(0,c.jsx)(o.Z,(0,e.Z)({name:n,component:a,placeholder:r,validate:t},s)),u]})}},4897:function(r,n,t){t.r(n),t.d(n,{default:function(){return b}});var e=t(8683),o=t(5671),i=t(3144),a=t(136),c=t(516),s=t(2791),u=t(7689),l=t(704),h=t(7520),p=t(445),m=t(9055),f=t(4961),d=t(9261),x=t(184),Z=(0,p.hU)(50),C=(0,l.Z)({form:"login"})((function(r){var n=r.handleSubmit,t=r._error,e=r.capchaUrl,o=r.isShowCapcha,i=r.isWaitingCapcha;return(0,x.jsxs)("form",{onSubmit:n,children:[(0,h.Gr)("Login","email",[p.C1,Z],h.II),(0,h.Gr)("Password","password",[p.C1,Z],h.II,{type:"password"}),(0,h.Gr)(null,"rememberMe",[],"input",{type:"checkbox"},"Remember me"),t&&(0,x.jsx)("div",{className:m.Z.formSummaryError,children:t}),o?(0,x.jsxs)(x.Fragment,{children:["\u041a\u0430\u043f\u0447\u0430",(0,x.jsx)(f.Z,{isFetching:i}),(0,x.jsx)("img",{src:e,alt:"capchaUrl"}),(0,h.Gr)("captha","captha",[p.C1,Z],h.II,{type:"text"})]}):null,(0,x.jsx)(d.Z,{value:"Login",onClick:function(){}})]})})),g=t(3250),_=function(r){return r.isAuth?(0,x.jsx)(u.Fg,{to:"/profile"}):(0,x.jsxs)("div",{className:g.Z.content,children:[(0,x.jsx)("h1",{children:"Login"}),(0,x.jsx)(C,(0,e.Z)((0,e.Z)({},r),{},{onSubmit:function(n){var t=n.captha?n.captha:"";r.logintMe(n.email,n.password,n.rememberMe,t)}}))]})},v=t(9318),j=t(7781),w=t(8687),y=function(r){(0,a.Z)(t,r);var n=(0,c.Z)(t);function t(){return(0,o.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"componentDidMount",value:function(){this.props.getCapchaUrl()}},{key:"render",value:function(){return(0,x.jsx)(_,(0,e.Z)({},this.props))}}]),t}(s.Component),b=(0,j.qC)((0,w.$j)((function(r){return{isAuth:r.auth.isAuth,capchaUrl:r.auth.capchaUrl,isWaitingCapcha:r.auth.isWaitingCapcha,isShowCapcha:r.auth.isShowCapcha}}),{logintMe:v._U,getCapchaUrl:v.M1}))(y)},445:function(r,n,t){t.d(n,{C1:function(){return e},hU:function(){return o},jI:function(){return i}});var e=function(r){if(!r)return"Field is Required "},o=function(r){return function(n){if(n&&n.length>r)return"Max lenght is ".concat(r," symbols")}},i=function(r){var n=r.replace(/[\n\r]/g,"");return 0===n.length&&r.length>0?"Don't post empty space":0===n.length&&0===r.length?"Don't post empty post":void 0}},9055:function(r,n){n.Z={error:"FormsControls_error__EWpbC",error_text:"FormsControls_error_text__dGRiv",formSummaryError:"FormsControls_formSummaryError__FxFd0",row:"FormsControls_row__M-VpV",form_Control:"FormsControls_form_Control__VKxi3"}}}]);
//# sourceMappingURL=897.ceb1925e.chunk.js.map