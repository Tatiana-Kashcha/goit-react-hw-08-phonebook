"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[391],{9677:function(n,e,t){t.d(e,{$:function(){return d}});var r,o,i,a=t(168),u=t(6444),c=u.ZP.section(r||(r=(0,a.Z)(["\n  max-width: 696px;\n  padding-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  border-right: 2px solid rgb(156 72 35);\n  border-bottom: 2px solid rgb(156 72 35);\n  border-left: 2px solid rgb(156 72 35);\n"]))),s=u.ZP.div(o||(o=(0,a.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n"]))),p=u.ZP.h2(i||(i=(0,a.Z)(["\n  font-size: 32px;\n  padding-top: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),l=t(184),d=function(n){var e=n.title,t=n.children;return(0,l.jsx)(c,{children:(0,l.jsxs)(s,{children:[e&&(0,l.jsx)(p,{children:e}),t]})})}},6391:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,o,i=t(2791),a=t(9434),u=t(4270),c=t(9439),s=t(168),p=t(6444),l=p.ZP.form(r||(r=(0,s.Z)(["\n  padding: 10px;\n  margin-top: 20px;\n  border: 2px solid rgb(34 155 15);\n  border-radius: 4px;\n  button {\n    padding: 4px 8px;\n    font-size: 14px;\n    color: rgb(34 155 15);\n    font-weight: bold;\n    border: 1px solid rgb(34 155 15);\n    border-radius: 4px;\n    cursor: pointer;\n    background-color: white;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,\n      rgba(0, 0, 0, 0.2) 0px 1px 0px;\n    &:active {\n      background-color: rgb(34 155 15);\n      color: #ffffff;\n    }\n  }\n"]))),d=p.ZP.label(o||(o=(0,s.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  input {\n    width: 550px;\n    padding: 4px;\n    margin-top: 6px;\n    border: 1px solid rgb(34 155 15);\n    border-radius: 4px;\n    &:focus {\n      border-color: rgb(99, 149, 241, 0.6);\n      outline: 2px rgba(99, 149, 241, 0.6);\n      outline-style: solid;\n    }\n  }\n"]))),f=t(208),x="NOT_FOUND";var g=function(n,e){return n===e};function b(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?g:r,i=t.maxSize,a=void 0===i?1:i,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),s=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:x},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return x}return{get:r,put:function(e,o){r(e)===x&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function p(){var e=s.get(arguments);if(e===x){if(e=n.apply(null,arguments),u){var t=s.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function h(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function m(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,p=s.memoizeOptions,l=void 0===p?t:p,d=Array.isArray(l)?l:[l],f=h(r),x=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),g=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return i=x.apply(null,n)}));return Object.assign(g,{resultFunc:c,memoizedResultFunc:x,dependencies:f,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),g};return o}var v,y,Z,j=m(b),w=function(n){return n.contactsUser.contacts.items},k=function(n){return n.filterUser.filter},z=function(n){return n.contactsUser.contacts.isLoading},A=function(n){return n.contactsUser.contacts.error},C=function(n){return n.contactsUser.contacts.items.length},P=j([w,k],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),F=t(184);function _(){var n=(0,i.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,i.useState)(""),u=(0,c.Z)(o,2),s=u[0],p=u[1],x=(0,a.I0)(),g=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":p(o)}},b=(0,a.v9)(w).some((function(n){return n.name.toLowerCase()===t.toLowerCase()})),h=function(){r(""),p("")};return(0,F.jsxs)(l,{onSubmit:function(n){if(n.preventDefault(),b)return alert("This name is already in the contacts list."),void h();x((0,f.uK)({name:t,number:s})),h()},children:[(0,F.jsxs)(d,{children:["Name",(0,F.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.  For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:g})]}),(0,F.jsxs)(d,{children:["Number",(0,F.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:s,onChange:g})]}),(0,F.jsx)("button",{type:"submit",children:"Add contact"})]})}var E,L,q,N,S=p.ZP.button(v||(v=(0,s.Z)(["\n  margin-left: 10px;\n  padding: 4px 8px;\n  font-size: 14px;\n  color: rgb(245 29 29);\n  font-weight: bold;\n  border: 1px solid rgb(245 29 29);\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,\n    rgba(0, 0, 0, 0.2) 0px 1px 0px;\n  &:active {\n    background-color: rgb(245 29 29);\n    color: #ffffff;\n  }\n"]))),U=p.ZP.p(y||(y=(0,s.Z)(["\n  font-size: 18px;\n  margin-left: 10px;\n"]))),I=p.ZP.p(Z||(Z=(0,s.Z)(["\n  font-size: 18px;\n  margin-left: 5px;\n"]))),O=function(n){var e=n.user,t=e.name,r=e.number,o=e.id,i=(0,a.I0)();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(U,{children:[t,":"]}),(0,F.jsx)(I,{children:r}),(0,F.jsx)(S,{onClick:function(){return i((0,f.GK)(o))},children:"Delete"})]})},$=p.ZP.ul(E||(E=(0,s.Z)(["\n  margin-top: 15px;\n"]))),D=p.ZP.li(L||(L=(0,s.Z)(["\n  padding: 5px 25px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  &::before {\n    content: '';\n    background: black;\n    width: 6px;\n    height: 6px;\n    border-radius: 100%;\n  }\n"]))),R=function(){var n=(0,a.v9)(P);return(0,F.jsx)($,{children:n.map((function(n){return(0,F.jsx)(D,{children:(0,F.jsx)(O,{user:n})},n.id)}))})},B=p.ZP.p(q||(q=(0,s.Z)(["\n  font-weight: bold;\n  font-size: 18px;\n  margin-top: 20px;\n  color: rgb(12 80 206);\n"]))),J=p.ZP.input(N||(N=(0,s.Z)(["\n  width: 550px;\n  padding: 4px;\n  margin-top: 6px;\n  border: 1px solid rgb(12 80 206);\n  border-radius: 4px;\n  &:focus {\n    border-color: rgb(99, 149, 241, 0.6);\n    outline: 2px rgba(99, 149, 241, 0.6);\n    outline-style: solid;\n  }\n"]))),K=t(6895),M=function(){var n=(0,a.I0)(),e=(0,a.v9)(k);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(B,{children:"Find contacts by name"}),(0,F.jsx)(J,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.  For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,onChange:function(e){return n((0,K.Hg)(e.target.value.trim()))}})]})},T=t(3742),Y=t(9677);function G(){var n=(0,a.v9)(C),e=(0,a.I0)(),t=(0,a.v9)(z),r=(0,a.v9)(A);return(0,i.useEffect)((function(){e((0,f.yF)())}),[e]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u.q,{children:(0,F.jsx)("title",{children:"Your contacts"})}),(0,F.jsx)(Y.$,{title:"Add new contact",children:(0,F.jsx)(_,{})}),t&&!r&&T.Loading.arrows(),!t&&T.Loading.remove(),n>0&&(0,F.jsxs)(Y.$,{title:"Your contacts",children:[(0,F.jsx)(M,{}),(0,F.jsx)(R,{})]})]})}}}]);
//# sourceMappingURL=391.0b997744.chunk.js.map