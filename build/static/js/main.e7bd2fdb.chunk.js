(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(14),a=t.n(c),r=t(3),o=t(1),u=t(0),i=function(e){var n=e.value,t=e.onChange;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{value:n,onChange:t})]})},s=function(e){var n=e.f1,t=e.n1,c=e.n2,a=e.h1,r=e.h2;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:t,onChange:a})," "]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:c,onChange:r})," "]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},l=t(4),j=t.n(l),d="http://localhost:3001/api/persons",f=function(){return j.a.get(d).then((function(e){return e.data}))},h=function(e){return j.a.post(d,e).then((function(e){return e.data}))},b=function(e,n){return j.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},m=function(e){return j.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},O=function(e){var n=e.person,t=e.handleDelete;return Object(u.jsxs)("li",{children:[n.name," ",n.number,Object(u.jsx)("button",{onClick:t,children:"delete"})]})},v=function(e){var n=e.message,t=e.type;return null===n?null:Object(u.jsx)("div",{className:t,children:n})},p=(t(38),function(){var e=Object(o.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),l=Object(r.a)(a,2),j=l[0],d=l[1],p=Object(o.useState)(""),x=Object(r.a)(p,2),g=x[0],w=x[1],y=Object(o.useState)(""),C=Object(r.a)(y,2),S=C[0],k=C[1],D=Object(o.useState)(null),A=Object(r.a)(D,2),E=A[0],I=A[1],J=Object(o.useState)(""),L=Object(r.a)(J,2),N=L[0],B=L[1],P=function(e,n){d(""),w(""),B("positive"),I("".concat(e," ").concat(n)),setTimeout((function(){I(null)}),2e3)};Object(o.useEffect)((function(){f().then((function(e){c(e)}))}),[t]);var R=t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(v,{message:E,type:N}),Object(u.jsx)(i,{value:S,onChange:function(e){return k(e.target.value)}}),Object(u.jsx)("h2",{children:"add a new"}),Object(u.jsx)(s,{f1:function(e){e.preventDefault();var n={name:j,number:g};if(t.every((function(e){return e.name!==j})))h(n).then((function(e){c(t.concat(e))})),P("Added",n.name);else if(window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===n.name}));b(a.id,n).then((function(e){c(t.filter((function(n){return n.name!==e.name})).concat(e))})).catch((function(e){B("error"),I("Information of ".concat(n.name," has already been removed from server"))})),P("Updated",n.name)}},n1:j,n2:g,h1:function(e){console.log(e.target.value),d(e.target.value)},h2:function(e){console.log(e.target.value),w(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)("ul",{children:R.map((function(e){return Object(u.jsx)(O,{person:e,handleDelete:function(){return function(e){window.confirm("Are you sure you want to delete ".concat(e.name,"?"))&&(m(e.id).then((function(e){c(t.filter((function(n){return n.name!==e.name})))})),P("Removed",e.name))}(e)}},e.name)}))})]})});a.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e7bd2fdb.chunk.js.map