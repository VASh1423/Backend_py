(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{32:function(t,a,e){},60:function(t,a,e){"use strict";e.r(a);var c=e(0),n=e.n(c),s=e(26),r=e.n(s),i=(e(32),e(8)),o=e.n(i),l=(e(25),e(9)),b=e(11),d=e(1);var j=function(){var t=Object(c.useState)([]),a=Object(l.a)(t,2),e=a[0],n=a[1];return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){n(t.data)}))}),[]),Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(d.jsx)("div",{className:"navbar-nav",children:e.map((function(t){return Object(d.jsx)(b.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id,"/"),fromDashboard:!1},children:t.name})}))})})]})})},h=e(2);var p=function(t){var a=t.match,e=Object(c.useState)({}),n=Object(l.a)(e,2),s=n[0],r=n[1],i=Object(c.useState)([]),j=Object(l.a)(i,2),h=j[0],p=j[1],u=a.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(t){r(t.data),p(t.data.posts)}))}),[u]),Object(d.jsxs)("div",{children:["Category with id ",s.id,Object(d.jsxs)("p",{children:["Category: ",s.name]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row",children:h.map((function(t){return Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.content}),Object(d.jsx)("p",{children:t.id}),Object(d.jsx)(b.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},t.id)}))})]})};var u=function(t){var a=t.match,e=Object(l.a)(c.useState,2),n=e[0],s=e[1],r=a.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(r,"/")}).then((function(t){s(t.data)}))}),[r]),Object(d.jsxs)("div",{children:["Post with id ",n.id,Object(d.jsxs)("p",{children:["Title: ",n.title]})]})};var O=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/posts/:id",exact:!0,component:u}),Object(d.jsx)(h.a,{path:"/category/:id",exact:!0,component:p})]})]})})},v=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,61)).then((function(a){var e=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,r=a.getTTFB;e(t),c(t),n(t),s(t),r(t)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),v()}},[[60,1,2]]]);
//# sourceMappingURL=main.c4ecd113.chunk.js.map