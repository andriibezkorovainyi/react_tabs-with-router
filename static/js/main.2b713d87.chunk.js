(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(4),i=(c(15),c(16),c(17),c(2)),b=c(8),r=c.n(b),j=c(10),l=c.n(j);var d=c(1),o=function(e){var t=e.tabs,c=Object(i.h)().tabId,a=void 0===c?"":c,n=function(e,t){return e.find((function(e){return e.id===t}))}(t,a),b=function(e){return e.id===a};return Object(d.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.title;return Object(d.jsx)("li",{className:l()({"is-active":b(e)}),"data-cy":"Tab",children:Object(d.jsx)(s.b,{to:"../".concat(t),"data-cy":"TabLink",children:c})},t)}))})}),Object(d.jsx)("div",{className:"block fancy-text","data-cy":"TabContent",children:n?n.content:"Please select a tab"})]})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h1",{className:"title",children:"Tabs page"}),Object(d.jsx)(o,{tabs:h})]})},m=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(s.c,{to:"/",className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:"Home"}),Object(d.jsx)(s.c,{to:"/tabs",className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home page"})}),Object(d.jsx)(i.b,{path:"/home",element:Object(d.jsx)(i.a,{to:"/"})}),Object(d.jsx)(i.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})}),Object(d.jsxs)(i.b,{path:"tabs",children:[Object(d.jsx)(i.b,{index:!0,element:Object(d.jsx)(x,{})}),Object(d.jsx)(i.b,{path:":tabId",element:Object(d.jsx)(x,{})})]})]})})})]})};n.a.render(Object(d.jsx)(s.a,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2b713d87.chunk.js.map