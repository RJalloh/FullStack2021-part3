(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(14),a=t.n(c),o=t(3),r=t(1),u=t(0),i=function(e){var n=e.value,t=e.onChange;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{value:n,onChange:t})]})},s=function(e){var n=e.f1,t=e.n1,c=e.n2,a=e.h1,o=e.h2;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:t,onChange:a})," "]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:c,onChange:o})," "]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},l=t(4),d=t.n(l),j="http://localhost:3001/api/persons",f=function(){return d.a.get(j).then((function(e){return e.data}))},h=function(e){return d.a.post(j,e).then((function(e){return e.data}))},b=function(e,n){return d.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},m=function(e){return d.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},O=function(e){var n=e.person,t=e.handleDelete;return Object(u.jsxs)("li",{children:[n.name," ",n.number,Object(u.jsx)("button",{onClick:t,children:"delete"})]})},v=function(e){var n=e.message,t=e.type;return null===n?null:Object(u.jsx)("div",{className:t,children:n})},p=(t(38),function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),l=Object(o.a)(a,2),d=l[0],j=l[1],p=Object(r.useState)(""),x=Object(o.a)(p,2),g=x[0],w=x[1],y=Object(r.useState)(""),C=Object(o.a)(y,2),S=C[0],k=C[1],D=Object(r.useState)(null),A=Object(o.a)(D,2),E=A[0],I=A[1],J=Object(r.useState)(""),L=Object(o.a)(J,2),N=L[0],B=L[1];Object(r.useEffect)((function(){f().then((function(e){c(e)}))}),[]);var P=function(e,n,t){j(""),w(""),B(t),I("".concat(e," ").concat(n)),setTimeout((function(){I(null)}),5e3)},R=0===S.length?t:t.filter((function(e){return e.name.toLowerCase().indexOf(S.toLowerCase())>0}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(v,{message:E,type:N}),Object(u.jsx)(i,{value:S,onChange:function(e){return k(e.target.value)}}),Object(u.jsx)("h2",{children:"add a new"}),Object(u.jsx)(s,{f1:function(e){e.preventDefault();var n={name:d,number:g};if(t.every((function(e){return e.name!==d})))h(n).then((function(e){c(t.concat(e)),P("Added",e.name,"positive")})).catch((function(e){console.log(e.response.data),P("",e.response.data,"negative")}));else if(window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===n.name}));b(a.id,n).then((function(e){c(t.map((function(n){return n.id!==a.id?n:e})))})).catch((function(e){B("error"),I("Information of ".concat(n.name," has already been removed from server"))})),P("Updated",n.name,"positive")}},n1:d,n2:g,h1:function(e){j(e.target.value)},h2:function(e){w(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)("ul",{children:R.map((function(e){return Object(u.jsx)(O,{person:e,handleDelete:function(){return function(e){window.confirm("Are you sure you want to delete ".concat(e.name,"?"))&&(m(e.id).then((function(e){c(t.filter((function(n){return n.name!==e.name})))})),P("Removed",e.name,"positive"))}(e)}},e.name)}))})]})});a.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.40ab713a.chunk.js.map