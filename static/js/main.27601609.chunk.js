(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),s=c(7),a=c.n(s),l=c(3),d=c(5),i=c(0);function r(e){var t=e.todo,c=e.index,n=e.completeTodo,s=e.deleteTodo,a=e.editTodo,l=Object(o.useState)(!1),r=Object(d.a)(l,2),j=r[0],b=r[1],u={display:""};return j||(u.display="none"),Object(i.jsxs)("div",{id:"todoitem",className:"card-header row flex-wrap bg-light",style:{margin:"10px 10px",borderRadius:"10px"},onDoubleClick:function(){b(!0)},children:[Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("h5",{style:t.isCompleted?{textDecoration:"line-through",fontStyle:"italic",opacity:.4}:null,children:t.text}),Object(i.jsx)("input",{type:"text",className:"form-control",style:u,value:t.text,onKeyDown:function(e){"Enter"===e.key&&b(!1)},onChange:function(e){return a(e.target.value,c)}})]}),Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("button",{className:"btn btn-sm btn-success",onClick:function(){return n(c)},children:"Done"}),Object(i.jsx)("button",{className:"btn btn-sm btn-danger ml-2",onClick:function(){return s(c)},children:"Del"})]})]})}function j(e){var t=e.addTodo,c=Object(o.useState)(""),n=Object(d.a)(c,2),s=n[0],a=n[1];return Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-sm-12",children:Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),s&&(t(s),a(""))},children:Object(i.jsxs)("div",{className:"form-group row",children:[Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Add Todo...",required:!0,value:s,onChange:function(e){return a(e.target.value)},autoFocus:!0})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("button",{className:"btn btn-primary btn-sm",children:"+ Add"})})]})})})})}var b=function(){var e=Object(o.useState)([{text:"New commits",isCompleted:!1},{text:"Meet friend for lunch",isCompleted:!0},{text:"Build really cool todo app",isCompleted:!1}]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=function(e){var t=Object(l.a)(c);t[e].isCompleted=!t[e].isCompleted,n(t)},a=function(e){var t=Object(l.a)(c);t.splice(e,1),n(t)},b=function(e,t){var o=Object(l.a)(c);o[t].text=e,n(o)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{addTodo:function(e){var t=[].concat(Object(l.a)(c),[{text:e}]);n(t)}}),Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-header",children:Object(i.jsx)("h6",{children:"Todo List"})}),Object(i.jsx)("div",{className:"card-body bg-secondary",children:c.map((function(e,t){return Object(i.jsx)(r,{todo:e,index:t,completeTodo:s,deleteTodo:a,editTodo:b},t)}))})]})]})};a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.27601609.chunk.js.map