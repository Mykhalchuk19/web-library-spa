(this["webpackJsonpweb-library-front"]=this["webpackJsonpweb-library-front"]||[]).push([[6],{207:function(e,a,t){},208:function(e,a,t){},209:function(e,a,t){},210:function(e,a,t){},211:function(e,a,t){},212:function(e,a,t){},213:function(e,a,t){},215:function(e,a,t){"use strict";t.d(a,"c",(function(){return g})),t.d(a,"b",(function(){return f})),t.d(a,"a",(function(){return I})),t.d(a,"d",(function(){return G}));var n=t(0),r=t.n(n),s=t(54),i=t(283),l=t(186),m=t(67),u=t(198),c=t(75),o=t(68),d=t(197),b=d.a({username:d.b().required("Username is required"),firstname:d.b().required("First name is required"),lastname:d.b().required("Last name is required"),email:d.b().email("Email is not valid").required("Email is required"),password:d.b().required("Password is required").min(6,"Password is too short").max(30,"Password is too long")}),p=(t(207),Object(l.a)({signup__wrapper:{width:"auto",maxWidth:"400px",margin:"0 auto"},signup__btn:{marginBottom:"10px"}})),g=function(){var e=Object(m.useDispatch)(),a=Object(m.useSelector)(o.d.getAuthPending),t=Object(u.a)({initialValues:{username:"",firstname:"",lastname:"",email:"",password:""},validateOnChange:!1,validationSchema:b,enableReinitialize:!0,onSubmit:function(t){e(o.b.userSignUpRequest(t)),E(a)}}),n=t.handleSubmit,l=t.values,d=t.errors,g=t.handleChange,E=t.setSubmitting,_=t.isSubmitting,f=p();return r.a.createElement(i.a,{elevation:3,className:f.signup__wrapper},r.a.createElement("form",{className:"signup__form",onSubmit:n},r.a.createElement("div",{className:"signup__header"},r.a.createElement("h2",{className:"signup__title"},"Sign Up")),r.a.createElement("div",{className:"signup__body"},r.a.createElement("div",{className:"signup__row"},r.a.createElement(c.b.CustomInput,{id:"username",label:"Username",error:d.username||"",inputProps:{name:"username",disabled:_,onChange:g,value:l.username}})),r.a.createElement("div",{className:"signup__row"},r.a.createElement(c.b.CustomInput,{id:"firstname",label:"First name",error:d.firstname||"",inputProps:{name:"firstname",disabled:_,onChange:g,value:l.firstname}})),r.a.createElement("div",{className:"signup__row"},r.a.createElement(c.b.CustomInput,{id:"lastname",label:"Last name",error:d.lastname||"",inputProps:{name:"lastname",disabled:_,onChange:g,value:l.lastname}})),r.a.createElement("div",{className:"signup__row"},r.a.createElement(c.b.CustomInput,{id:"email",label:"Email",error:d.email||"",inputProps:{name:"email",disabled:_,onChange:g,value:l.email}})),r.a.createElement("div",{className:"signup__row"},r.a.createElement(c.b.CustomInput,{id:"password",label:"Password",error:d.password||"",inputProps:{name:"password",disabled:_,onChange:g,value:l.password,type:"password"}})),r.a.createElement("div",{className:"signup__row"},r.a.createElement(c.a,{type:"submit",className:f.signup__btn},"Submit"),r.a.createElement(s.b,{to:"/auth/signin",className:"signup__link"},"I already sign in")))))},E=d.a({username:d.b().required("Username is required"),password:d.b().required("Password is required").min(6,"Password is too short").max(30,"Password is too long")}),_=(t(208),Object(l.a)({signin__wrapper:{width:"auto",maxWidth:"400px",margin:"0 auto"},signin__btn:{marginBottom:"10px"},signin__link:{marginTop:"10px"}})),f=function(){var e=Object(m.useDispatch)(),a=Object(m.useSelector)(o.d.getAuthPending),t=Object(u.a)({initialValues:{username:"",password:""},validateOnChange:!1,validationSchema:E,enableReinitialize:!0,onSubmit:function(t){e(o.b.userSignInRequest(t)),p(a)}}),n=t.handleSubmit,l=t.values,d=t.errors,b=t.handleChange,p=t.setSubmitting,g=t.isSubmitting,f=_();return r.a.createElement(i.a,{elevation:3,className:f.signin__wrapper},r.a.createElement("form",{className:"signin__form",onSubmit:n},r.a.createElement("div",{className:"signin__header"},r.a.createElement("h2",{className:"signin__title"},"Sign In")),r.a.createElement("div",{className:"signin__body"},r.a.createElement("div",{className:"signin__row"},r.a.createElement(c.b.CustomInput,{id:"username",label:"Username",error:d.username||"",inputProps:{name:"username",disabled:g,onChange:b,value:l.username}})),r.a.createElement("div",{className:"signin__row"},r.a.createElement(c.b.CustomInput,{id:"password",label:"Password",error:d.password||"",inputProps:{name:"password",disabled:g,onChange:b,value:l.password,type:"password"}})),r.a.createElement("div",{className:"signin__row"},r.a.createElement(c.a,{type:"submit",className:f.signin__btn},"Submit"),r.a.createElement(s.b,{to:"/auth/signup",className:"signin__link"},"I`m not signed up yet")))))},h=t(300),v=t(12),w=t(301),P=t(302),C=t(76),N=(t(209),function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement(w.a,null,Object.values(C.a).map((function(e){var a=e.href,t=e.title;return r.a.createElement(P.a,null,r.a.createElement(s.b,{className:"main-nav__link",to:a},t))}))))}),S=(t(210),function(){var e=Object(m.useDispatch)(),a=Object(v.useHistory)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("aside",{className:"left-sidebar"},r.a.createElement(N,null),r.a.createElement("div",{className:"left-sidebar__log-out"},r.a.createElement(c.a,{type:"button",onClick:function(){localStorage.removeItem("authToken"),e(o.b.userLogOut()),a.push("/")}},"Log out")),r.a.createElement("div",{className:"left-sidebar__copyright"},r.a.createElement("p",{className:"left-sidebar__copyright--text"},"Created by Mykhalchuk Yaroslav"))))}),O=(t(211),function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout"},r.a.createElement(S,null),r.a.createElement("section",{className:"main"},r.a.createElement("main",{className:"main-container"},a))))}),j=t(4),q=d.a({username:d.b().required("Username is required"),firstname:d.b().required("First name is required"),lastname:d.b().required("Last name is required"),email:d.b().required("Email is required")}),y=function(){var e=Object(m.useDispatch)(),a=Object(m.useSelector)(o.d.getUserData),t=Object(m.useSelector)(o.d.getAuthPending),r=Object(u.a)({initialValues:{username:a.username,firstname:a.firstname,lastname:a.lastname,email:a.email},validateOnChange:!1,validationSchema:q,enableReinitialize:!0,onSubmit:function(n){e(o.b.userUpdateRequest(Object(j.a)(Object(j.a)({},n),{},{id:a.id}))),d(t)}}),s=r.handleSubmit,i=r.values,l=r.errors,c=r.handleChange,d=r.setSubmitting,b=r.isSubmitting;return Object(n.useEffect)((function(){e(o.b.getCurrentUserRequest())}),[e]),{dispatch:e,user:a,isPending:t,handleSubmit:s,values:i,errors:l,handleChange:c,setSubmitting:d,isSubmitting:b}},k=(t(212),Object(l.a)({profile__btn:{width:"100%"}})),I=Object(n.memo)((function(){var e=y(),a=e.handleSubmit,t=e.values,n=e.errors,s=e.handleChange,i=e.isSubmitting,l=e.user,m=k();return r.a.createElement(O,null,!Object(h.a)(l)&&r.a.createElement("form",{className:"profile__form",onSubmit:a},r.a.createElement("div",{className:"profile__header"},r.a.createElement("h2",{className:"profile__title"},"Profile")),r.a.createElement("div",{className:"profile__body"},r.a.createElement("div",{className:"profile__row"},r.a.createElement(c.b.CustomInput,{id:"username",label:"Username",error:n.username||"",inputProps:{name:"username",disabled:i,onChange:s,value:t.username}})),r.a.createElement("div",{className:"profile__row"},r.a.createElement(c.b.CustomInput,{id:"firstname",label:"First name",error:n.firstname||"",inputProps:{name:"firstname",disabled:i,onChange:s,value:t.firstname}})),r.a.createElement("div",{className:"profile__row"},r.a.createElement(c.b.CustomInput,{id:"lastname",label:"Last name",error:n.lastname||"",inputProps:{name:"lastname",disabled:i,onChange:s,value:t.lastname}})),r.a.createElement("div",{className:"profile__row"},r.a.createElement(c.b.CustomInput,{id:"email",label:"Email",error:n.email||"",inputProps:{name:"firstname",disabled:i,onChange:s,value:t.email,type:"email"}})),r.a.createElement("div",{className:"profile__row"},r.a.createElement(c.a,{type:"submit",className:m.profile__btn},"Save")))))})),x=t(289),U=t(290),L=t(291),F=t(292),R=t(293),D=t(294),M=t(295),A=t(299),z=t(284),V=t(285),B=t(286),J=t(287),T=t(288),W=function(e){var a=e.page,t=e.count,r=e.rowsPerPage,s=e.onChangePage,i=Object(n.useCallback)((function(e){s(e,a+1)}),[a]),l=Object(n.useCallback)((function(e){s(e,a-1)}),[a]),m=Object(n.useCallback)((function(e){s(e,Math.max(0,Math.ceil(t/r)-1))}),[t,r]),u=Object(n.useCallback)((function(e){s(e,0)}),[]);return{rowsPerPage:r,page:a,count:t,handleNextPage:i,handlePreviousPage:l,handleLastPage:m,handleFirstPage:u}},H=function(e){var a=W(e),t=a.page,n=a.count,s=a.rowsPerPage,i=a.handlePreviousPage,l=a.handleNextPage,m=a.handleFirstPage,u=a.handleLastPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{onClick:m,disabled:0===t,"aria-label":"first page"},r.a.createElement(V.a,null)),r.a.createElement(z.a,{onClick:i,disabled:0===t,"aria-label":"previous page"},r.a.createElement(B.a,null)),r.a.createElement(z.a,{onClick:l,disabled:t>=Math.ceil(n/s)-1,"aria-label":"next page"},r.a.createElement(J.a,null)),r.a.createElement(z.a,{onClick:u,disabled:t>=Math.ceil(n/s)-1,"aria-label":"last page"},r.a.createElement(T.a,null)))},Y=function(){var e=Object(m.useDispatch)(),a=Object(m.useSelector)(o.d.getUsersList),t=a.users,r=a.limit,s=a.page,i=a.count;return Object(n.useEffect)((function(){e(o.b.usersListRequest())}),[e]),{users:t,limit:r,page:s,count:i,changePage:Object(n.useCallback)((function(a,t){e(o.b.usersListRequest({page:t}))}),[e])}},G=(t(213),function(){var e=Y(),a=e.users,t=e.limit,n=e.page,s=e.count,i=e.changePage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement("div",{className:"users__wrapper"},r.a.createElement("h2",{className:"users__title"},"Users"),r.a.createElement(x.a,null,r.a.createElement(U.a,null,r.a.createElement(L.a,null,r.a.createElement(F.a,null,C.b.map((function(e){var a=e.id,t=e.field;return r.a.createElement(R.a,{key:a},t)})))),r.a.createElement(D.a,null,a.map((function(e){var a=e.id,t=e.username,n=e.firstname,s=e.lastname,i=e.email;return r.a.createElement(F.a,{key:a},r.a.createElement(R.a,{component:"td"},a),r.a.createElement(R.a,{component:"td"},t),r.a.createElement(R.a,{component:"td"},n),r.a.createElement(R.a,{component:"td"},s),r.a.createElement(R.a,{component:"td"},i))}))),r.a.createElement(M.a,null,r.a.createElement(F.a,null,r.a.createElement(A.a,{count:s,rowsPerPage:t,page:n,onChangePage:i,onChangeRowsPerPage:function(){},colSpan:5,ActionsComponent:H}))))))))})},298:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(215);a.default=function(){return r.a.createElement(s.d,null)}}}]);
//# sourceMappingURL=6.4bb506bd.chunk.js.map