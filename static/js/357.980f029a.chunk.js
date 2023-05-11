"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[357],{7131:function(e,n,r){r.d(n,{Z:function(){return i}});var t="ContentBlock_content__Yh26t",o=(r(2791),r(184)),i=function(e){var n=e.children,r=e.isDarkTheme?{backgroundColor:"#424242",border:"1px solid rgba(255, 255, 255, 0.08)",color:"#fff"}:{backgroundColor:"#fff",border:"1px solid rgba(0, 0, 0, 0.16)"};return(0,o.jsx)("div",{style:r,className:t,children:n})}},9357:function(e,n,r){r.r(n),r.d(n,{default:function(){return de}});var t=r(5671),o=r(3144),i=r(136),a=r(516),s=r(8687),u=r(5732),c=r(2791),l=r(4961),f="NOT_FOUND";var d=function(e,n){return e===n};function h(e,n){var r="object"===typeof n?n:{equalityCheck:n},t=r.equalityCheck,o=void 0===t?d:t,i=r.maxSize,a=void 0===i?1:i,s=r.resultEqualityCheck,u=function(e){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!e(n[o],r[o]))return!1;return!0}}(o),c=1===a?function(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:f},put:function(e,r){n={key:e,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(u):function(e,n){var r=[];function t(e){var t=r.findIndex((function(r){return n(e,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return f}return{get:t,put:function(n,o){t(n)===f&&(r.unshift({key:n,value:o}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(a,u);function l(){var n=c.get(arguments);if(n===f){if(n=e.apply(null,arguments),s){var r=c.getEntries(),t=r.find((function(e){return s(e.value,n)}));t&&(n=t.value)}c.put(arguments,n)}return n}return l.clearCache=function(){return c.clear()},l}function p(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}function g(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var o=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var i,a=0,s={memoizeOptions:void 0},u=t.pop();if("object"===typeof u&&(s=u,u=t.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var c=s,l=c.memoizeOptions,f=void 0===l?r:l,d=Array.isArray(f)?f:[f],h=p(t),g=e.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(d)),m=e((function(){for(var e=[],n=h.length,r=0;r<n;r++)e.push(h[r].apply(null,arguments));return i=g.apply(null,e)}));return Object.assign(m,{resultFunc:u,memoizedResultFunc:g,dependencies:h,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return o}var m=g(h),v=m((function(e){return e.userPage.users}),(function(e){return e})),A=function(e){return e.userPage.isFetching},b=function(e){return e.userPage.followingInProgress},w=function(e){return e.userPage.pagination},x=r(3366);function _(e,n){if(null==e)return{};var r,t,o=(0,x.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=r(885),P="Paginator_paginator__fPuc0",j="Paginator_left__Tr0QC",S="Paginator_right__IGnWZ",F="Paginator_btn__a5A00",k="Paginator_base__h6z-8",C="Paginator_item__3t+jg",N="Paginator_item_dark__vqS4T",T="Paginator_select__q39Uo",E="Paginator_select_dark__N6ThE",I=r(7801),z=r(184),U=function(e){var n=e.search,r=e.totalItemsCount,t=e.isDarkTheme,o=e.pageSize,i=e.currentPage,a=e.currentPortion,s=e.onPageCanged,u=e.setCurrentPortion,l=e.portionSize,f=void 0===l?10:l,d=Math.ceil(r/o),h=Math.ceil(d/f),p=0!==a,g=h!==a+1,m=function(){for(var e=[],n=1;n<=f;n++){var t=n+f*a;t*o-r<o&&e.push(t)}return e},v=(0,c.useState)(!0),A=(0,y.Z)(v,2),b=A[0],w=A[1],x=(0,c.useState)(m()),_=(0,y.Z)(x,2),U=_[0],D=_[1];(0,c.useEffect)((function(){D(m()),0==r&&w(!1)}),[a]);var L=(0,c.useCallback)((function(){u(a+1)}),[a]),O=function(e,n){return t?e===n?E:N:e===n?T:C};return b?(0,z.jsxs)("div",{className:P,children:[p&&(0,z.jsxs)(z.Fragment,{children:[" ",(0,z.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAYAAAAcNvmZAAAABmJLR0QA/wD/AP+gvaeTAAADT0lEQVR4nO3d34tnYxwH8NeYYWfLkrVJbLSJxG4pEkWpjYstSu0mF2oVFxR75ZoL/4DIj6JcSHvhjqwoJaRIbYlE0opN2zZiWT/HuDg25DzznZqzz2f79HnVuZnm4t17pjPPPOfznC+lm/noAKeQOdyB+3EhDmIlNFFSG/CiodwT15OhiZI6F2/7b9Er+A0LgbnSuRSf+X/RK1hSt9nJ3ICjxoteMdy7ywT24Ljxkn/HfXHRctmHZeNF/4BdcdHyWMDT2reNr3FVWLpENuGAdtEHsTUsXSLb8LF20QcMP4yyTtfiW+2iH1PLu0ncjp+Ml/wHHoiLlstqK44fcWtctDzm8YT2beMwrg5Ll8iZeFm76I9wUVi6RC7Ah9pFv46zw9IlsgNfaRf9LE4PS5fILfjeeMl/4pG4aLnca9g0Giv6F9wZFy2POcNvbOu2cdSwfVrWaRH7tYv+3PBAoKzT+Xhfu+h3sCUsXSJX4kvtop/HGWHpEtmJ76y+4pgLS5fI3Yan3GNF/4q74qLlMWvFsYSbwtIlsgEvaBf9BS4PS5fIZrylXfR7OC8sXSKX4FPtol/CxrB0iVyPI1Z/fHVaWLpE9uBn4yXXwMyEamCmgxqY6eQcvKlddA3MTGQbPtEuugZmJlIDM53UwEwnNTDTQQ3MdFIDM53UwEwnNTDTyS4cM17yMh6Ki5bLdu3NpOPYHRctn4e1i74uMNcpZao94iONr2/EXnUseVKL+ED7D+NrOCssXUK1tu6s/msMMGs/5La4aDnN2ul7MC5aTrP2sJ9RK5VJ1XHmzuqgfmf1RD3AaiuVY2pWZHL12qDOar6vs5pc7axmsjur0wad1TmaAHvVCbGu6uxjZ7NO9e43PCEqE9liOJPeKrzOq09sLW9iuCwsXUJrecfIjWHpkrpHvT2nq3ovVGc7cEj7tvKcGuCc1KzR5DfUaPKk1jIYdHFYuoTm8bh24YdxTVi6pGowqLMaDOqsBoM62+qfD2Ibu2owaGKb8Kp24TUYNLEFPKVdeA0GnQQ1GNTZbjUY1FUNBnVWg0GdtT7d9MT17t/fUyYy9rm9/75eiYuW0xweNV72suEHUiY29uroQ6GJktuJbwxFL+Hm2Dj5LeIKJ2n45y8a9Y/HdSjtZQAAAABJRU5ErkJggg==",alt:"back",className:F,onClick:function(){u(a-1)}}),(0,z.jsx)("div",{className:(0,I.v)([O(i,1),k,j]),onClick:function(){u(0),s(1,n)},children:" 1"})]}),U.map((function(e){return(0,z.jsxs)("div",{className:(0,I.v)([O(i,e),k]),onClick:(r=e,function(){s(r,n)}),children:[" ",e]},e);var r})),g&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)("div",{className:(0,I.v)([O(i,d),k,S]),onClick:function(){u(h-1),s(d,n)},children:[" ",d]}),(0,z.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAtklEQVRoge3ZwQqCUBRF0V0/WETioL69QZIQ9QcFNlBo0Jv4Eu7xchYIjuRs0IEKZlIa4AncgH3wlmob4AEM0/EC2tBFf7jzDVl1zIFxfIqYI78xb+AcOaqWY1Q5RpVjVDlGlWNUOUaVY1Slimkpv5yt8htAKaarudB2wVFLGaIHzJXi1mooP+ynyFFzOUKFI1Q4QoUjVDhChSNUOEJFiogdSX6GdiSIAOhJEAHjrXUFLtO5WVYfGbjozb9B7EQAAAAASUVORK5CYII=",alt:"back",className:F,onClick:L})]})]}):(0,z.jsx)(z.Fragment,{})},D=r(7131),L=r(5705),O=r(8683),R="TextareaAutosizeCustom_textarea_auto_size__qvKI6",Z=r(2948),H=function(e){return(0,z.jsx)(Z.Z,(0,O.Z)({className:R},e))},M=r(9261),V="UserSearchForm_form__k-M5N",W="UserSearchForm_dark__0dahI",Y="UserSearchForm_search_form_btn__xCK-e",q=function(e){var n=e.search,r=e.isDarkTheme,t=e.setSearchText;return(0,z.jsx)(L.J9,{initialValues:{term:n},onSubmit:function(e){t(e.term)},"data-lpignore":"true",children:(0,z.jsxs)(L.l0,{className:(0,I.v)([V,r?W:""]),children:[(0,z.jsx)(L.gN,{name:"term",as:H,placeholder:"First Name"}),(0,z.jsx)(M.Z,{type:"submite",className:[Y],value:"Find",onClick:function(){}})]})})},B=(0,c.memo)(q),G=r(1087),K="User_user__NwNCv",J="User_img_block__6QnqP",Q="User_photo__2N-bq",X="User_user_block__tzkja",$="User_user_information__q7yqv",ee="User_user_name__Mcvpy",ne="User_user_name_dark__AO3YI",re="User_user_status__+yj1b",te="User_btn_clock__WO9Lx",oe=r(507),ie=["isDarkTheme","user","unFollow","follow","isAuth","followingInProgress"],ae=function(e){var n,r=e.isDarkTheme,t=e.user,o=e.unFollow,i=e.follow,a=e.isAuth,s=e.followingInProgress,u=(_(e,ie),t.photos.large?t.photos.large:oe),c=function(){return s.some((function(e){return e===t.id}))};return(0,z.jsxs)("div",{className:K,children:[(0,z.jsx)(G.OL,{to:"/profile/"+t.id,className:J,children:(0,z.jsx)("img",{className:Q,src:u,alt:"photo_user"})}),(0,z.jsxs)("div",{className:X,children:[(0,z.jsxs)("div",{className:$,children:[(0,z.jsx)(G.OL,{to:"/profile/"+t.id,className:r?ne:ee,children:(0,z.jsx)("div",{children:t.name})}),(0,z.jsx)("div",{className:re,children:t.status})]}),(0,z.jsx)("div",{className:te,children:a?(0,z.jsx)(z.Fragment,{children:t.followed?(0,z.jsx)(M.Z,{isDisabled:c(),isMutedStyle:!0,value:"UnFollow",onClick:(n=t.id,function(){o(n)})}):(0,z.jsx)(M.Z,{isDisabled:c(),value:"Follow",onClick:function(e){return function(){i(e)}}(t.id)})}):(0,z.jsx)(G.OL,{to:"/profile/"+t.id,children:(0,z.jsx)(M.Z,{value:"Show profile",onClick:function(){}})})})]})]})},se=function(e){var n=e.isDarkTheme,r=e.isAuth,t=e.followingInProgress,o=e.users,i=e.follow,a=e.unFollow;return(0,z.jsx)(z.Fragment,{children:o.map((function(e){return(0,z.jsx)(ae,{user:e,unFollow:a,follow:i,followingInProgress:t,isAuth:r,isDarkTheme:n},e.id)}))})},ue="Users_pagination_wrapper__yGbo4",ce=["search","isDarkTheme","followingInProgress","users","setSearch","follow","setCurrentPortion","unFollow","onPageCanged"],le=function(e){var n=e.search,r=e.isDarkTheme,t=e.followingInProgress,o=e.users,i=e.setSearch,a=e.follow,s=e.setCurrentPortion,u=e.unFollow,c=e.onPageCanged,l=_(e,ce),f=function(e,n){c(e,n),i(n)};return(0,z.jsxs)(D.Z,{isDarkTheme:r,children:[(0,z.jsx)(B,{setSearchText:function(e){f(1,e)},isDarkTheme:r,search:n}),(0,z.jsx)(se,{users:o,unFollow:u,follow:a,followingInProgress:t,isAuth:l.isAuth,isDarkTheme:r}),(0,z.jsx)("div",{className:ue,children:(0,z.jsx)(U,{search:n,isDarkTheme:r,currentPage:l.pagination.currentPage,totalItemsCount:l.pagination.totalUsersCount,pageSize:l.pagination.pageSize,currentPortion:l.pagination.currentPortion,onPageCanged:f,setCurrentPortion:s,portionSize:10})})]})},fe=function(e){(0,i.Z)(r,e);var n=(0,a.Z)(r);function r(){var e;(0,t.Z)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=n.call.apply(n,[this].concat(i))).onPageCanged=function(n,r){e.props.getUsers(n,e.props.pagination.pageSize,r)},e}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.pagination.currentPage,this.props.pagination.pageSize,"")}},{key:"render",value:function(){return this.props.isFetching?(0,z.jsx)(l.Z,{isFetching:this.props.isFetching}):(0,z.jsx)(le,{pagination:this.props.pagination,users:this.props.users,onPageCanged:this.onPageCanged,unFollow:this.props.unFollow,follow:this.props.follow,setCurrentPortion:this.props.setCurrentPortion,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth,isDarkTheme:this.props.isDarkTheme,search:this.props.search,setSearch:this.props.setSearch})}}]),r}(c.Component),de=(0,s.$j)((function(e){return{pagination:w(e),users:v(e),isFetching:A(e),followingInProgress:b(e),isAuth:e.auth.isAuth,isDarkTheme:e.app.isDarkTheme,search:e.userPage.search}}),{follow:u.ZN,unFollow:u.IJ,getUsers:u.Uk,setCurrentPortion:u.jI,setSearch:u.qP})(fe)},2948:function(e,n,r){r.d(n,{Z:function(){return v}});var t=r(7462),o=r(3366),i=r(2791),a=i.useLayoutEffect,s=function(e,n){"function"!==typeof e?e.current=n:e(n)},u=function(e,n){var r=(0,i.useRef)();return(0,i.useCallback)((function(t){e.current=t,r.current&&s(r.current,null),r.current=n,n&&s(n,t)}),[n])},c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},l=function(e){Object.keys(c).forEach((function(n){e.style.setProperty(n,c[n],"important")}))},f=null;var d=function(){},h=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],p=!!document.documentElement.currentStyle,g=function(e){var n=function(e){var n=i.useRef(e);return a((function(){n.current=e})),n}(e);(0,i.useLayoutEffect)((function(){var e=function(e){n.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[])},m=function(e,n){var r=e.cacheMeasurements,a=e.maxRows,s=e.minRows,c=e.onChange,m=void 0===c?d:c,v=e.onHeightChange,A=void 0===v?d:v,b=(0,o.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]);var w=void 0!==b.value,x=(0,i.useRef)(null),_=u(x,n),y=(0,i.useRef)(0),P=(0,i.useRef)(),j=function(){var e=x.current,n=r&&P.current?P.current:function(e){var n=window.getComputedStyle(e);if(null===n)return null;var r,t=(r=n,h.reduce((function(e,n){return e[n]=r[n],e}),{})),o=t.boxSizing;return""===o?null:(p&&"border-box"===o&&(t.width=parseFloat(t.width)+parseFloat(t.borderRightWidth)+parseFloat(t.borderLeftWidth)+parseFloat(t.paddingRight)+parseFloat(t.paddingLeft)+"px"),{sizingStyle:t,paddingSize:parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),borderSize:parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth)})}(e);if(n){P.current=n;var t=function(e,n,r,t){void 0===r&&(r=1),void 0===t&&(t=1/0),f||((f=document.createElement("textarea")).setAttribute("tabindex","-1"),f.setAttribute("aria-hidden","true"),l(f)),null===f.parentNode&&document.body.appendChild(f);var o=e.paddingSize,i=e.borderSize,a=e.sizingStyle,s=a.boxSizing;Object.keys(a).forEach((function(e){var n=e;f.style[n]=a[n]})),l(f),f.value=n;var u=function(e,n){var r=e.scrollHeight;return"border-box"===n.sizingStyle.boxSizing?r+n.borderSize:r-n.paddingSize}(f,e);f.value="x";var c=f.scrollHeight-o,d=c*r;"border-box"===s&&(d=d+o+i),u=Math.max(d,u);var h=c*t;return"border-box"===s&&(h=h+o+i),[u=Math.min(h,u),c]}(n,e.value||e.placeholder||"x",s,a),o=t[0],i=t[1];y.current!==o&&(y.current=o,e.style.setProperty("height",o+"px","important"),A(o,{rowHeight:i}))}};return(0,i.useLayoutEffect)(j),g(j),(0,i.createElement)("textarea",(0,t.Z)({},b,{onChange:function(e){w||j(),m(e)},ref:_}))},v=(0,i.forwardRef)(m)},507:function(e,n,r){e.exports=r.p+"static/media/default_user.77e62bcebb96608d55ea.png"}}]);
//# sourceMappingURL=357.980f029a.chunk.js.map