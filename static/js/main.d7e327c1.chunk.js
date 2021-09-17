(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(4),s=n.n(c),a=n(2),o=n(1),i=(n(9),n(10),n(11),n(0)),l=function(e){var t=e.posts,n=e.selectedPostId,c=e.handleSetSelectedPostId;return Object(i.jsxs)("div",{className:"PostsList",children:[Object(i.jsx)("h2",{children:"Posts:"}),Object(i.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){var t=e.id,s=e.userId,a=e.title;return Object(i.jsxs)("li",{className:"PostsList__item",children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("b",{children:["[User #",s,"]:"]}),a]}),+n===t?Object(i.jsx)("button",{type:"button",className:"PostsList__button button active",onClick:function(e){return c(e,"")},children:"Close"}):Object(i.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(e){return c(e,t)},children:"Open"})]},t)}))})]})},r="https://mate.academy/students-api",u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(r).concat(e),t).then((function(e){try{return e.json()}catch(t){return new Error(t)}}))},j=(n(13),function(e){var t=e.postId,n=e.handlePostComments,c=Object(o.useState)(""),s=Object(a.a)(c,2),l=s[0],r=s[1],j=Object(o.useState)(""),d=Object(a.a)(j,2),b=d[0],m=d[1],h=Object(o.useState)(""),O=Object(a.a)(h,2),p=O[0],f=O[1];return Object(o.useEffect)((function(){r(""),m(""),f("")}),[t]),Object(i.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){var c;e.preventDefault(),c={postId:t,name:l,email:b,body:p},u("/comments",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(c)}),setTimeout((function(){n(),r(""),m(""),f("")}),100)},children:[Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("input",{type:"text",name:"name",value:l,placeholder:"Your name",className:"NewCommentForm__input",onChange:function(e){var t=e.target;return r(t.value)}})}),Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("input",{type:"text",name:"email",value:b,placeholder:"Your email",className:"NewCommentForm__input",onChange:function(e){var t=e.target;return m(t.value)}})}),Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("textarea",{name:"body",value:p,placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(e){var t=e.target;return f(t.value)}})}),Object(i.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),d=(n(14),function(e){var t=e.postDetails,n=t.id,c=t.body,s=Object(o.useState)([]),l=Object(a.a)(s,2),r=l[0],d=l[1],b=Object(o.useState)(!0),m=Object(a.a)(b,2),h=m[0],O=m[1],p=function(e){(function(e){return u("/comments?postId=".concat(e))})(e).then((function(e){d(e)}))};Object(o.useEffect)((function(){p(n)}),[n]);var f=function(e){!function(e){u("/comments/".concat(e),{method:"DELETE"})}(e),setTimeout((function(){p(n)}),100)};return Object(i.jsxs)("div",{className:"PostDetails",children:[Object(i.jsx)("h2",{children:"Post details:"}),Object(i.jsx)("section",{className:"PostDetails__post",children:Object(i.jsx)("p",{children:c})}),Object(i.jsxs)("section",{className:"PostDetails__comments",children:[Object(i.jsxs)("button",{type:"button",className:"button",onClick:function(){O(!h)},children:[h?"Hide":"Show"," ".concat(r.length," comments")]}),h&&Object(i.jsx)("ul",{className:"PostDetails__list",children:r.map((function(e){var t=e.id,n=e.body;return Object(i.jsxs)("li",{className:"PostDetails__list-item",children:[Object(i.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return f(t)},children:"X"}),Object(i.jsx)("p",{children:n})]},t)}))})]}),Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(i.jsx)(j,{postId:n,handlePostComments:function(){return p(n)}})})})]})}),b=(n(15),function(e){var t=e.userSelect,n=e.handleSetUserSelect;return Object(i.jsxs)("label",{children:["Select a user: \xa0",Object(i.jsxs)("select",{className:"user-selector",value:t,onChange:n,children:[Object(i.jsx)("option",{value:"0",children:"All users"}),Object(i.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(i.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(i.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(i.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(i.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(i.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(i.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(i.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(i.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(i.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),m={id:0,createdAt:"",updatedAt:"",userId:0,title:"",body:""},h=function(){var e=Object(o.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(o.useState)("0"),r=Object(a.a)(s,2),j=r[0],h=r[1],O=Object(o.useState)(""),p=Object(a.a)(O,2),f=p[0],x=p[1],v=Object(o.useState)(m),_=Object(a.a)(v,2),N=_[0],S=_[1],P=function(e){var t;(t=e,u("/posts".concat(t))).then((function(e){c(e)}))},y=function(e){var t;(t=e,u("/posts/".concat(t))).then((function(e){S(e)}))};return Object(o.useEffect)((function(){P("")}),[]),Object(o.useEffect)((function(){P("0"===j?"":"?userId=".concat(j))}),[j]),Object(o.useEffect)((function(){f?y("".concat(f)):S(m)}),[f]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"App__header",children:Object(i.jsx)(b,{userSelect:j,handleSetUserSelect:function(e){e.preventDefault(),h(e.target.value)}})}),Object(i.jsxs)("main",{className:"App__main",children:[Object(i.jsx)("div",{className:"App__sidebar",children:Object(i.jsx)(l,{posts:n,selectedPostId:f,handleSetSelectedPostId:function(e,t){e.preventDefault(),x(t)}})}),Object(i.jsx)("div",{className:"App__content",children:f?Object(i.jsx)(d,{postDetails:N}):"Post not selected"})]})]})};s.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.d7e327c1.chunk.js.map