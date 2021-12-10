(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,A){},38:function(e,t,A){},66:function(e,t,A){"use strict";A.r(t);var n=A(1),c=A.n(n),a=A(28),s=A.n(a),r=(A(37),A(2)),l=(A(38),A(4)),i=A.n(l),o=A(3),d=A(5),j=A(0),u=function(e){return Object(j.jsxs)("div",{children:[e.label&&Object(j.jsx)("label",{htmlFor:e.id,className:"leading-7 text-sm text-gray-600",children:e.label}),Object(j.jsx)("input",{type:e.type?e.type:"text",value:e.value,onChange:e.onChange,id:e.id,name:e.name,className:"w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})},b=function(e){return Object(j.jsx)("button",{className:"".concat("secondary"===e.color?"text-gray-700 bg-gray-100 hover:bg-gray-200":"bg-yellow-500 text-white hover:bg-yellow-600"," mx-auto border-0 py-2 px-8 focus:outline-none rounded text-lg ").concat(e.tailwind),onClick:e.onClick,type:e.type,children:e.children})},x=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),A=t[0],c=t[1],a=Object(n.useState)(""),s=Object(o.a)(a,2),l=s[0],x=s[1],g=Object(n.useState)(""),m=Object(o.a)(g,2),f=m[0],O=m[1],v=Object(n.useState)(void 0),h=Object(o.a)(v,2),w=h[0],C=h[1],p=Object(r.g)();return Object(j.jsx)("section",{className:"text-black body-font bg-background-nft bg-cover h-full",children:Object(j.jsxs)("div",{className:"container px-5 py-24 mx-auto flex flex-wrap items-center",children:[Object(j.jsxs)("div",{className:"lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0",children:[Object(j.jsx)("h1",{className:"title-font font-medium text-3xl text-black",children:"QuickPoll"}),Object(j.jsx)("p",{className:"leading-relaxed mt-4 text-gray-800",children:"Manage and access poll. Get quick feedback faster than ever before."})]}),Object(j.jsx)("div",{className:"lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0",children:Object(j.jsxs)("div",{className:"relative mb-4",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:A,password:f,name:l};i.a.post("api/auth/signup",t).then((function(e){p("/login")})).catch((function(e){var t=e.response.data.message;C(t)}))},children:[Object(j.jsx)("h2",{className:"text-gray-900 text-lg mb-1 font-medium title-font",children:"Sign Up"}),Object(j.jsx)("div",{className:"relative mb-4",children:Object(j.jsx)(u,{id:"email",label:"Email",value:A,onChange:function(e){return c(e.target.value)}})}),Object(j.jsx)("div",{className:"relative mb-4",children:Object(j.jsx)(u,{id:"name",label:"Username",value:l,onChange:function(e){return x(e.target.value)}})}),Object(j.jsx)("div",{className:"relative mb-4",children:Object(j.jsx)(u,{id:"password",label:"Password",value:f,type:"password",onChange:function(e){return O(e.target.value)}})}),Object(j.jsx)(b,{tailwind:"w-full",type:"submit",children:"Login"})]}),w&&Object(j.jsx)("p",{className:"text-xs text-red-500 mt-3",children:w}),Object(j.jsxs)("p",{className:"text-xs text-gray-500 mt-3",children:["Already have an account?"," ",Object(j.jsx)(d.b,{className:"text-sm text-blue-500 hover:underline",to:"/login",children:"Click here to login."})]})]})})]})})},g=A(14),m=A.n(g),f=A(29),O=c.a.createContext();function v(e){var t=Object(n.useState)(!1),A=Object(o.a)(t,2),c=A[0],a=A[1],s=Object(n.useState)(null),r=Object(o.a)(s,2),l=r[0],d=r[1],u=Object(n.useState)(!0),b=Object(o.a)(u,2),x=b[0],g=b[1],v=function(){var e=Object(f.a)(m.a.mark((function e(){var t,A,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("authToken"))){e.next=20;break}return e.prev=2,e.next=5,i.a.get("api/auth/verify",{headers:{Authorization:"Bearer ".concat(t)}});case 5:A=e.sent,console.log(A),n=A.data,d(n),a(!0),g(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),a(!1),d(null),g(!1);case 18:e.next=21;break;case 20:g(!1);case 21:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v()}),[]),Object(j.jsx)(O.Provider,{value:{isLoggedIn:c,user:l,isLoading:x,loginUser:function(e){return localStorage.setItem("authToken",e),v()},logoutUser:function(){localStorage.removeItem("authToken"),a(!1),d(null)}},children:e.children})}var h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),A=t[0],c=t[1],a=Object(n.useState)(""),s=Object(o.a)(a,2),l=s[0],x=s[1],g=Object(n.useState)(void 0),m=Object(o.a)(g,2),f=m[0],v=m[1],h=Object(r.g)(),w=Object(n.useContext)(O).loginUser;return Object(j.jsx)("section",{className:"text-black body-font bg-background-nft bg-cover h-full",children:Object(j.jsxs)("div",{className:"container px-5 py-24 mx-auto flex flex-wrap items-center",children:[Object(j.jsxs)("div",{className:"lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0",children:[Object(j.jsx)("h1",{className:"title-font font-medium text-3xl text-black",children:"QuickPoll"}),Object(j.jsx)("p",{className:"leading-relaxed mt-4 text-gray-800",children:"Manage and access polls. Get quick feedback faster than ever before."})]}),Object(j.jsx)("div",{className:"lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0",children:Object(j.jsxs)("div",{className:"relative mb-4",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:A,password:l};i.a.post("api/auth/login",t).then((function(e){console.log("bearer token:",e.data.authToken);var t=e.data.authToken;w(t).then((function(e){return h("/")}))})).catch((function(e){var t=e.response.data.message;v(t)}))},children:[Object(j.jsx)("h2",{className:"text-gray-900 text-lg mb-1 font-medium title-font",children:"Login"}),Object(j.jsx)("div",{className:"relative mb-4",children:Object(j.jsx)(u,{id:"email",label:"Email",value:A,onChange:function(e){return c(e.target.value)}})}),Object(j.jsx)("div",{className:"relative mb-4",children:Object(j.jsx)(u,{id:"password",label:"Password",value:l,type:"password",onChange:function(e){return x(e.target.value)}})}),Object(j.jsx)(b,{tailwind:"w-full",type:"submit",children:"Login"})]}),f&&Object(j.jsx)("p",{className:"text-xs text-red-500 mt-3",children:f}),Object(j.jsxs)("p",{className:"text-xs text-gray-500 mt-3",children:["No account yet? click"," ",Object(j.jsx)(d.b,{className:"text-sm text-blue-500 hover:underline",to:"/signup",children:"Click here to register."})]})]})})]})})},w=function(){var e=Object(n.useContext)(O),t=e.isLoggedIn,A=(e.user,e.logoutUser);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("header",{class:"text-gray-600 dark:text-gray-400 body-font dark:bg-gray-900 shadow-md",children:Object(j.jsxs)("div",{class:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(j.jsxs)("a",{class:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-10 h-10 text-white p-2 bg-yellow-500 rounded-full",viewBox:"0 0 24 24",children:[Object(j.jsx)("path",{d:"M14.1254 13H10.1254V15H14.1254V13Z",fill:"currentColor"}),Object(j.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.12537 13C9.22994 13 10.1254 12.1046 10.1254 11C10.1254 9.89543 9.22994 9 8.12537 9C7.0208 9 6.12537 9.89543 6.12537 11C6.12537 12.1046 7.0208 13 8.12537 13ZM8.12537 11.5C8.40151 11.5 8.62537 11.2761 8.62537 11C8.62537 10.7239 8.40151 10.5 8.12537 10.5C7.84922 10.5 7.62537 10.7239 7.62537 11C7.62537 11.2761 7.84922 11.5 8.12537 11.5Z",fill:"currentColor"}),Object(j.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.1254 11C18.1254 12.1046 17.2299 13 16.1254 13C15.0208 13 14.1254 12.1046 14.1254 11C14.1254 9.89543 15.0208 9 16.1254 9C17.2299 9 18.1254 9.89543 18.1254 11ZM16.6254 11C16.6254 11.2761 16.4015 11.5 16.1254 11.5C15.8492 11.5 15.6254 11.2761 15.6254 11C15.6254 10.7239 15.8492 10.5 16.1254 10.5C16.4015 10.5 16.6254 10.7239 16.6254 11Z",fill:"currentColor"}),Object(j.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.74884 14.6663C3.73056 16.6421 5.76939 18 8.12537 18H16.1254C18.5654 18 20.6652 16.5435 21.6029 14.4525C22.3722 13.9093 22.8746 13.0133 22.8746 12C22.8746 10.9867 22.3722 10.0907 21.6029 9.54753C20.6652 7.45651 18.5654 6 16.1254 6H8.12537C5.76939 6 3.73056 7.3579 2.74884 9.33375C1.78448 9.83263 1.12537 10.8393 1.12537 12C1.12537 13.1607 1.78448 14.1674 2.74884 14.6663ZM8.12537 8H16.1254C17.5088 8 18.7282 8.70234 19.4465 9.76991C19.7227 10.4593 19.8746 11.2119 19.8746 12C19.8746 12.7881 19.7227 13.5407 19.4465 14.2301C18.7282 15.2977 17.5088 16 16.1254 16H8.12537C5.91623 16 4.12537 14.2091 4.12537 12C4.12537 9.79086 5.91623 8 8.12537 8Z",fill:"currentColor"})]}),Object(j.jsx)("span",{class:"dark:text-white ml-3 text-xl",children:"Quick Poll"})]}),Object(j.jsx)("nav",{class:"md:ml-auto flex flex-wrap items-center text-base justify-center",children:Object(j.jsx)(d.b,{to:"/",href:"/quiz",class:"mr-5 hover:text-gray-900 dark:hover:text-white",children:"Home"})}),t?Object(j.jsxs)("button",{onClick:A,class:" dark:bg-gray-800 dark:hover:bg-gray-700 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0",children:["Log out",Object(j.jsx)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-4 h-4 ml-1",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}):Object(j.jsxs)(d.b,{to:"/login",class:" dark:bg-gray-800 dark:hover:bg-gray-700 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0",children:["Log in",Object(j.jsx)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-4 h-4 ml-1",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})})})},C=A(10),p=A(68),B=function(){var e=Object(n.useState)("asd"),t=Object(o.a)(e,2),A=t[0],c=t[1],a=Object(n.useState)([{text:"",id:Object(p.a)()},{text:"",id:Object(p.a)()}]),s=Object(o.a)(a,2),l=s[0],d=s[1],x=Object(n.useContext)(O).user,g=Object(r.g)();return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{action:"",children:[Object(j.jsx)("h1",{className:" text-center title-font text-3xl font-medium",children:"Create poll"}),Object(j.jsx)(u,{value:A,onChange:function(e){return c(e.target.value)},label:"Question"}),Object(j.jsx)("div",{children:l.map((function(e,t){return Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)(u,{value:e.text,onChange:function(t){return A=e.id,n=t.target.value,d((function(e){return e.map((function(e){return e.id===A?{text:n,id:A}:e}))}));var A,n},label:"#".concat(t+1," Answer")}),Object(j.jsx)("img",{className:"h-9 mt-8 ml-5",onClick:function(){return t=e.id,d(l.filter((function(e){return e.id!==t})));var t},src:"data:image/png;base64,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",alt:""})]},e.id)}))}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"text-sm text-blue-500 hover:underline",onClick:function(e){e.preventDefault(),l.length<5&&d([].concat(Object(C.a)(l),[{text:"",id:Object(p.a)()}]))},children:"Add more answers"})}),Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)(b,{type:"submit",onClick:function(e){e.preventDefault();var t={question:A,answers:l,user:x._id};i.a.post("api/polls",t).then((function(e){console.log(e),g("/admin/"+e.data._id)})).catch((function(e){console.log(e)}))},children:"Start Poll"})})]})})},N=function(e){var t=Object(r.g)();return console.log(e.polls),Object(j.jsxs)("div",{className:"flex flex-col items-center",children:[Object(j.jsx)("h1",{className:"title-font text-3xl font-medium",children:"Access previous polls"}),e.polls.map((function(e){return Object(j.jsx)("div",{class:"p-2 sm:w-1/2 w-full",children:Object(j.jsxs)("div",{onClick:function(){return t("/admin/".concat(e._id))},class:"bg-gray-100 rounded flex p-4 h-full justify-between hover:bg-yellow-300",children:[Object(j.jsx)("span",{class:"title-font font-medium",children:e.question}),Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAW0lEQVRIie3UOwqAMBBAwcE7KHj/m2gh+Gm08DixSW1nIroDqbZ4hIUlhBBeaMCKrnR4RsJROt5iz/ETfcRhzIMSb4PmoV/eSaVCVfb8nygsKh2QSaWTGUL4uAv27TYumDohlgAAAABJRU5ErkJggg=="})]})},e._id)}))]})},Q=function(){var e=Object(n.useContext)(O),t=e.isLoggedIn,A=e.user,c=Object(n.useState)("start"),a=Object(o.a)(c,2),s=(a[0],a[1],Object(n.useState)()),l=Object(o.a)(s,2),d=l[0],u=l[1],b=Object(r.g)();return Object(n.useEffect)((function(){A?i.a.get("/api/users/"+A._id).then((function(e){u(e.data)})):b("/login")}),[]),t?d?Object(j.jsxs)("div",{className:"bg-gray-200 h-screen mt-3",children:[Object(j.jsx)("div",{className:"flex justify-center bg-white p-5",children:Object(j.jsx)(B,{})}),Object(j.jsx)("div",{className:"pt-5 p1",children:Object(j.jsx)(N,{polls:d.polls})})]}):Object(j.jsx)(j.Fragment,{}):Object(j.jsx)(r.a,{to:"/login"})},I=function(e){var t=Object(r.h)().id,A=Object(n.useState)(),c=Object(o.a)(A,2),a=c[0],s=c[1],l=Object(n.useState)(),d=Object(o.a)(l,2),u=d[0],x=d[1],g=Object(n.useState)(!1),m=Object(o.a)(g,2),f=m[0],O=m[1];Object(n.useEffect)((function(){localStorage.getItem(t)&&O(!0),i.a.get("/api/polls/".concat(t)).then((function(e){s(e.data)}))}),[t]);var v=function(e){e.preventDefault();var A={pollId:t,selectedAnswer:u};i.a.post("/api/answers",A).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),O(!0),localStorage.setItem(t,!0)};return a?f?Object(j.jsx)("section",{id:"quiz-section",className:"dark:bg-gray-800 text-gray-600 body-font overflow-hidden min-h-screen bg-gray-100",children:Object(j.jsx)("form",{onSubmit:v,children:Object(j.jsx)("div",{className:"container px-5 py-24 mx-auto",children:Object(j.jsx)("div",{className:"flex flex-col items-center flex-wrap -m-12",children:Object(j.jsx)("div",{className:"dark:bg-gray-700 p-12 md:w-1/2 flex flex-col items-start bg-white",children:Object(j.jsx)("h2",{className:"dark:text-white sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4",children:"Thanks for your participation!"})})})})})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{id:"quiz-section",className:"dark:bg-gray-800 text-gray-600 body-font overflow-hidden min-h-screen bg-gray-100",children:Object(j.jsx)("form",{onSubmit:v,children:Object(j.jsx)("div",{className:"container px-5 py-24 mx-auto",children:Object(j.jsx)("div",{className:"flex flex-col items-center flex-wrap -m-12",children:Object(j.jsxs)("div",{className:"dark:bg-gray-700 p-12 md:w-1/2 flex flex-col items-start bg-white",children:[Object(j.jsxs)("span",{className:"dark:bg-gray-800 inline-block py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest",children:[a.owner," asks"]}),Object(j.jsx)("h2",{className:"dark:text-white sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4",children:a.question}),Object(j.jsx)("div",{onChange:function(e){x(e.target.value)},children:a.answers.map((function(e,t){return Object(j.jsxs)("div",{className:"dark:text-gray-400 flex items-center mr-4 mb-4",children:[Object(j.jsx)("input",{type:"radio",id:e.id,name:"answer",value:e.id,className:"hidden"}),Object(j.jsxs)("label",{htmlFor:e.id,className:"flex items-center cursor-pointer text-xl",children:[Object(j.jsx)("span",{className:"w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"}),e.text]})]},e.id)}))}),Object(j.jsx)(b,{type:"submit",children:"Vote"})]})})})})})}):Object(j.jsx)(j.Fragment,{})},k=A(30),E=A(32),y=A.n(E),D=function(){var e=Object(r.h)().id,t=Object(n.useContext)(O),A=t.isLoggedIn,c=(t.user,Object(n.useState)()),a=Object(o.a)(c,2),s=a[0],l=a[1],d=Object(n.useState)([]),u=Object(o.a)(d,2),x=u[0],g=u[1],m="".concat(window.location.href.split("/admin")[0],"/polls/").concat(e);console.log(m);var f=function(){i.a.get("/api/polls/".concat(e)).then((function(e){l(e.data),g(Object(C.a)(e.data.answers.map((function(e){return[e.text,e.votes,"#fbbf24",null]}))))}))};return Object(n.useEffect)((function(){f()}),[e]),A?s?Object(j.jsxs)("div",{className:"flex justify-around flex-wrap mt-1",children:[Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("h1",{className:"title-font text-3xl font-medium m-5 text-center",children:s.question}),Object(j.jsx)(k.a,{chartType:"ColumnChart",loader:Object(j.jsx)("div",{children:"Loading Chart"}),data:[["Element","votes",{role:"style"},{sourceColumn:0,role:"annotation",type:"string",calc:"stringify"}]].concat(Object(C.a)(x)),options:{width:1200,height:800,bar:{groupWidth:"95%"},legend:{position:"none"}},rootProps:{"data-testid":"6"}}),Object(j.jsx)(b,{className:"",onClick:function(){return f()},children:"Refresh"})]}),Object(j.jsxs)("div",{className:"flex justify-center items-center flex-col",children:[Object(j.jsx)(y.a,{size:521,value:m}),Object(j.jsx)("p",{className:"mt-2",children:m})]})]}):Object(j.jsx)(j.Fragment,{}):Object(j.jsx)(r.a,{to:"/login"})};var S=function(){return i.a.get("/api/").then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(w,{}),Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(Q,{})}),Object(j.jsx)(r.b,{path:"/signup",element:Object(j.jsx)(x,{})}),Object(j.jsx)(r.b,{path:"/login",element:Object(j.jsx)(h,{})}),Object(j.jsx)(r.b,{path:"/polls/:id",element:Object(j.jsx)(I,{})}),Object(j.jsx)(r.b,{path:"/admin/:id",element:Object(j.jsx)(D,{})})]})]})},z=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,69)).then((function(t){var A=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;A(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(d.a,{children:Object(j.jsx)(v,{children:Object(j.jsx)(S,{})})}),document.getElementById("root")),z()}},[[66,1,2]]]);
//# sourceMappingURL=main.1c0c20c5.chunk.js.map