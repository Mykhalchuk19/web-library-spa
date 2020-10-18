(this["webpackJsonpweb-library-front"]=this["webpackJsonpweb-library-front"]||[]).push([[1],{117:function(e,t,n){e.exports=n(161)},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),u=n.n(c),s=n(67),o=n(97),i=n(31),l=n(66),d=n(75),b=(n(160),function(e){return a.a.createElement(s.Provider,{store:l.c},a.a.createElement(o.a,{persistor:l.b,loading:null},a.a.createElement(i.ConnectedRouter,{history:l.a},a.a.createElement(d.d,null))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return S})),n.d(t,"a",(function(){return h}));var r=n(21),a=n(74),c=n(98),u=n.n(c),s=n(99),o=n(107),i=n(31),l=n(22),d=n(16),b=n.n(d),f=n(6),p=n(68),O=b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(p.c)()]);case 2:case"end":return e.stop()}}),e)})),j=function(e){return Object(r.combineReducers)({router:Object(i.connectRouter)(e),user:p.a})},m={key:"user",storage:u.a,whitelist:["userData"]},E=Object(o.a)(),h=Object(l.a)(),g=Object(a.a)(m,j(h)),v=Object(r.createStore)(g,Object(s.composeWithDevTools)(Object(r.applyMiddleware)(E,Object(i.routerMiddleware)(h))));E.run(O);var S=Object(a.b)(v)},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return De}));var r={};n.r(r),n.d(r,"userSignUpRequest",(function(){return w})),n.d(r,"userSignInRequest",(function(){return k})),n.d(r,"userAuthenticationSuccess",(function(){return T})),n.d(r,"userAuthenticationError",(function(){return C})),n.d(r,"userLogOut",(function(){return y})),n.d(r,"usersListRequest",(function(){return L})),n.d(r,"usersListSuccess",(function(){return D})),n.d(r,"usersListFailure",(function(){return q})),n.d(r,"userUpdateRequest",(function(){return I})),n.d(r,"userUpdateSuccess",(function(){return A})),n.d(r,"userUpdateFailure",(function(){return N})),n.d(r,"userDeleteRequest",(function(){return F})),n.d(r,"userDeleteSuccess",(function(){return P})),n.d(r,"userDeleteFailure",(function(){return z})),n.d(r,"getCurrentUserRequest",(function(){return W})),n.d(r,"getCurrentUserSuccess",(function(){return G})),n.d(r,"getCurrentUserFailure",(function(){return Q}));var a={};n.r(a),n.d(a,"getAuthPending",(function(){return J})),n.d(a,"getAuthError",(function(){return $})),n.d(a,"getUserData",(function(){return K})),n.d(a,"getUsersList",(function(){return V}));var c={};n.r(c),n.d(c,"getParamsUrl",(function(){return oe})),n.d(c,"createRequestApi",(function(){return de})),n.d(c,"normalizeRequestData",(function(){return be}));var u={};n.r(u),n.d(u,"signUpRequest",(function(){return fe})),n.d(u,"signInRequest",(function(){return pe}));var s={};n.r(s),n.d(s,"getUsersListRequest",(function(){return Oe})),n.d(s,"updateUserRequest",(function(){return je})),n.d(s,"deleteUserRequest",(function(){return me})),n.d(s,"getCurrentUser",(function(){return Ee}));var o="USER_SIGN_UP_REQUEST",i="USER_SIGN_IN_REQUEST",l="USER_AUTHENTICATION_SUCCESS",d="USER_AUTHENTICATION_ERROR",b="USER_LOG_OUT",f="GET_CURRENT_USER_REQUEST",p="GET_CURRENT_USER_SUCCESS",O="GET_CURRENT_USER_FAILURE",j="USERS_LIST_REQUEST",m="USERS_LIST_SUCCESS",E="USERS_LIST_FAILURE",h="USER_UPDATE_REQUEST",g="USER_UPDATE_SUCCESS",v="USER_UPDATE_FAILURE",S="USER_DELETE_REQUEST",R="USER_DELETE_SUCCESS",U="USER_DELETE_FAILURE",x=n(187),_=Object(x.a)(o,i,l,d,b,j,m,E,h,g,v,S,R,U,f,p,O),w=_.userSignUpRequest,k=_.userSignInRequest,T=_.userAuthenticationSuccess,C=_.userAuthenticationError,y=_.userLogOut,L=_.usersListRequest,D=_.usersListSuccess,q=_.usersListFailure,I=_.userUpdateRequest,A=_.userUpdateSuccess,N=_.userUpdateFailure,F=_.userDeleteRequest,P=_.userDeleteSuccess,z=_.userDeleteFailure,W=_.getCurrentUserRequest,G=_.getCurrentUserSuccess,Q=_.getCurrentUserFailure,M=n(52),B=n(188),H=n(193),J=Object(M.a)(Object(B.a)(!1,["user","pending"]),H.a),$=Object(M.a)(Object(B.a)(null,["user","error"]),H.a),K=Object(M.a)(Object(B.a)({id:null,username:"",firstname:"",lastname:"",email:""},["user","userData"]),H.a),V=Object(M.a)(Object(B.a)({users:[],limit:10,page:0,count:0},["user","list"]),H.a),X=(n(83),n(16)),Y=n.n(X),Z=n(4),ee=n(6),te=n(31),ne=n(48),re={error:function(e){var t=e.content,n=e.options,r=void 0===n?{}:n;return ne.b.error(t,r)},success:function(e){var t=e.content,n=e.options,r=void 0===n?{}:n;return ne.b.success(t,r)},warning:function(e){var t=e.content,n=e.options,r=void 0===n?{}:n;return ne.b.warn(t,r)},info:function(e){var t=e.content,n=e.options,r=void 0===n?{}:n;return ne.b.info(t,r)}},ae=n(13),ce=n(100),ue=n.n(ce),se=n(76),oe=function(e){return e?"".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")):""},ie=function(e){return e?Object.values(e)[0].toString():""},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return ue()(Object(ae.a)({baseURL:"".concat(se.c).concat(t).concat(ie(a)),headers:e,method:n},"get"!==n?"data":"params",r))},de=function(e,t){return function(n,r){var a=localStorage.getItem("authToken");if(a){var c={Authorization:"".concat(a)};return le(c,t,e,n,r)}return le({},t,e,n,r)}},be=function(e){return Object(B.a)({},["data"],e)},fe=de("post","auth/signup/"),pe=de("post","auth/signin/"),Oe=de("get","users"),je=de("put","users/"),me=de("delete","users/"),Ee=de("get","users/current-user"),he=Y.a.mark(we),ge=Y.a.mark(ke),ve=Y.a.mark(Te),Se=Y.a.mark(Ce),Re=Y.a.mark(ye),Ue=Y.a.mark(Le),xe=Y.a.mark(De),_e=c.normalizeRequestData;function we(){var e,t;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,Object(ee.e)(o);case 4:return e=n.sent,n.t0=_e,n.next=8,Object(ee.b)(u.signUpRequest,Object(Z.a)({},e.payload));case 8:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=12,Object(ee.d)(T(Object(Z.a)({},t)));case 12:return n.next=14,localStorage.setItem("authToken",t.token);case 14:return n.next=16,Object(ee.d)(Object(te.push)("/profile"));case 16:n.next=23;break;case 18:return n.prev=18,n.t2=n.catch(1),n.next=22,Object(ee.d)(C());case 22:re.error({content:n.t2.response.data.error});case 23:n.next=0;break;case 25:case"end":return n.stop()}}),he,null,[[1,18]])}function ke(){var e,t;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,Object(ee.e)(i);case 4:return e=n.sent,n.t0=_e,n.next=8,Object(ee.b)(u.signInRequest,Object(Z.a)({},e.payload));case 8:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=12,Object(ee.d)(T(Object(Z.a)({},t)));case 12:return n.next=14,localStorage.setItem("authToken",t.token);case 14:return n.next=16,Object(ee.d)(Object(te.push)("/profile"));case 16:n.next=23;break;case 18:return n.prev=18,n.t2=n.catch(1),n.next=22,Object(ee.d)(C());case 22:re.error({content:n.t2.response.data.error});case 23:n.next=0;break;case 25:case"end":return n.stop()}}),ge,null,[[1,18]])}function Te(){var e,t;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,Object(ee.e)(j);case 4:return e=n.sent,n.t0=_e,n.next=8,Object(ee.b)(s.getUsersListRequest,Object(Z.a)({},e.payload));case 8:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=12,Object(ee.d)(D(Object(Z.a)({},t)));case 12:n.next=19;break;case 14:return n.prev=14,n.t2=n.catch(1),n.next=18,Object(ee.d)(q());case 18:re.error({content:n.t2.response.data.error});case 19:n.next=0;break;case 21:case"end":return n.stop()}}),ve,null,[[1,14]])}function Ce(){var e,t;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,Object(ee.e)(h);case 4:return e=n.sent,n.t0=_e,n.next=8,Object(ee.b)(s.updateUserRequest,Object(Z.a)({},e.payload),{id:e.payload.id});case 8:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=12,Object(ee.d)(A(Object(Z.a)({},t)));case 12:n.next=19;break;case 14:return n.prev=14,n.t2=n.catch(1),n.next=18,Object(ee.d)(N());case 18:re.error({content:n.t2.response.data.error});case 19:n.next=0;break;case 21:case"end":return n.stop()}}),Se,null,[[1,14]])}function ye(){var e,t;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,Object(ee.e)(S);case 4:return e=n.sent,n.t0=_e,n.next=8,Object(ee.b)(s.deleteUserRequest,{},{id:e.payload.id});case 8:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=12,Object(ee.d)(P(Object(Z.a)({},t)));case 12:n.next=19;break;case 14:return n.prev=14,n.t2=n.catch(1),n.next=18,Object(ee.d)(z());case 18:re.error({content:n.t2.response.data.error});case 19:n.next=0;break;case 21:case"end":return n.stop()}}),Re,null,[[1,14]])}function Le(){var e;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(ee.e)(f);case 4:return t.t0=_e,t.next=7,Object(ee.b)(s.getCurrentUser);case 7:return t.t1=t.sent,e=(0,t.t0)(t.t1),t.next=11,Object(ee.d)(G(Object(Z.a)({},e)));case 11:t.next=18;break;case 13:return t.prev=13,t.t2=t.catch(1),t.next=17,Object(ee.d)(Q());case 17:re.error({content:t.t2.response.data.error});case 18:t.next=0;break;case 20:case"end":return t.stop()}}),Ue,null,[[1,13]])}function De(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(we);case 2:return e.next=4,Object(ee.c)(ke);case 4:return e.next=6,Object(ee.c)(Te);case 6:return e.next=8,Object(ee.c)(Ce);case 8:return e.next=10,Object(ee.c)(ye);case 10:return e.next=12,Object(ee.c)(Le);case 12:case"end":return e.stop()}}),xe)}var qe,Ie=n(106),Ae=n(189),Ne=Object(Ae.a)((qe={},Object(ae.a)(qe,i,(function(e){return Object(Z.a)(Object(Z.a)({},e),{},{pending:!0})})),Object(ae.a)(qe,o,(function(e){return Object(Z.a)(Object(Z.a)({},e),{},{pending:!0})})),Object(ae.a)(qe,l,(function(e,t){return Object(Z.a)(Object(Z.a)({},e),{},{userData:t.payload.userData,pending:!1})})),Object(ae.a)(qe,d,(function(e){return Object(Z.a)(Object(Z.a)({},e),{},{pending:!1})})),Object(ae.a)(qe,b,(function(e){return Object(Z.a)(Object(Z.a)({},e),{},{userData:{}})})),Object(ae.a)(qe,h,(function(e){return Object(Z.a)(Object(Z.a)({},e),{},{pending:!0})})),Object(ae.a)(qe,g,(function(e,t){return Object(Z.a)(Object(Z.a)({},e),{},{userData:t.payload.userData,pending:!1})})),Object(ae.a)(qe,j,(function(e){return Object(Z.a)(Object(Z.a)({},e),{},{pending:!0})})),Object(ae.a)(qe,m,(function(e,t){return Object(Z.a)(Object(Z.a)({},e),{},{list:Object(Z.a)({},t.payload),pending:!1})})),Object(ae.a)(qe,E,(function(e){return Object(Z.a)(Object(Z.a)({},e),{},{pending:!1})})),Object(ae.a)(qe,S,(function(e){return Object(Z.a)(Object(Z.a)({},e),{},{pending:!0})})),Object(ae.a)(qe,R,(function(e,t){return Object(Z.a)(Object(Z.a)({},e),{},{pending:!1,list:{users:Object(Ie.a)(e.list.users.filter((function(e){return e===t.payload.user}))),limit:e.list.limit,page:e.list.page}})})),Object(ae.a)(qe,U,(function(e){return Object(Z.a)(Object(Z.a)({},e),{},{pending:!1})})),Object(ae.a)(qe,f,(function(e){return Object(Z.a)(Object(Z.a)({},e),{},{pending:!0})})),Object(ae.a)(qe,p,(function(e,t){return Object(Z.a)(Object(Z.a)({},e),{},{userData:t.payload.userData,pending:!1})})),Object(ae.a)(qe,O,(function(e){return Object(Z.a)(Object(Z.a)({},e),{},{pending:!1})})),qe),Object(Z.a)({},{userData:{},pending:!1,list:{users:[],limit:10,page:0,count:0}}));t.a=Ne},75:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return R})),n.d(t,"b",(function(){return r}));var r={};n.r(r),n.d(r,"CustomInput",(function(){return b}));var a=n(0),c=n.n(a),u=n(54),s=(n(154),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__row"},c.a.createElement(u.a,{className:"header__link",to:"/"},"Web library")))}),o=n(105),i=n(181),l=n(190),d=n(191),b=(n(155),function(e){var t=e.label,n=e.id,r=e.error,u=e.inputProps,s=Object(a.useState)(0),b=Object(o.a)(s,2),f=b[0],p=b[1],O=Object(a.useRef)();return Object(a.useEffect)((function(){return p(O.current.offsetWidth)}),[O]),c.a.createElement("div",{className:"input__wrapper"},c.a.createElement(i.a,{fullWidth:!0,variant:"outlined"},c.a.createElement(l.a,{htmlFor:n,ref:O},t),c.a.createElement(d.a,Object.assign({type:"text",id:n},u,{labelWidth:f})),r&&c.a.createElement("span",{className:"input__error"},r)))}),f=n(185),p=Object(a.memo)((function(e){var t=e.children,n=e.type,r=e.onClick,a=e.className;return c.a.createElement(f.a,{type:n||"submit",className:"custom__button ".concat(a),onClick:r,variant:"contained",color:"primary"},t)})),O=n(12),j=n(108),m=function(e){var t=e.component,n=e.exact,r=e.path,a=Object(j.a)(e,["component","exact","path"]),u=Object(O.useLocation)();return localStorage.getItem("authToken")?c.a.createElement(O.Route,{exact:n,path:r},c.a.createElement(t,a)):c.a.createElement(O.Redirect,{to:{pathname:"/auth/signin",state:{from:u}}})},E=(n(156),function(){return c.a.createElement("div",{className:"loader"},c.a.createElement("div",{className:"circle"}))}),h=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,282))})),g=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,296))})),v=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,297))})),S=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,298))})),R=function(){var e=Object(O.useLocation)();return c.a.createElement(a.Suspense,{fallback:c.a.createElement(E,null)},c.a.createElement(O.Switch,null,c.a.createElement(O.Route,{exact:!0,strict:!0,path:"/:url",render:function(){return"/"!==e.pathname.slice(-1)?c.a.createElement(O.Redirect,{to:"".concat(e.pathname,"/")}):c.a.createElement(c.a.Fragment,null)}}),c.a.createElement(O.Route,{path:"/auth/",component:h}),c.a.createElement(m,{exact:!0,path:"/users",component:S}),c.a.createElement(m,{exact:!0,path:"/profile",component:g}),c.a.createElement(m,{exact:!0,path:"/",component:g}),c.a.createElement(m,{exact:!0,path:"*",component:v})))},U=n(186);n(18),n(104),n(157),Object(U.a)({modal_window__close_btn:{position:"absolute",backgroundColor:"transparent",border:"none",padding:0,boxShadow:"none",right:"0","&:hover":{backgroundColor:"transparent",border:"none",padding:0,boxShadow:"none"}},modal_window__close_icon:{"&:hover":{color:"gainsboro"}}})},76:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r="https://infinite-retreat-39254.herokuapp.com/",a={USERS:{href:"/users",title:"Users"},PROFILE:{href:"/profile",title:"Profile"}},c=[{id:1,field:"#"},{id:2,field:"Username"},{id:3,field:"First name"},{id:4,field:"Last name"},{id:5,field:"Email"}]},83:function(e,t){}},[[117,2,3]]]);
//# sourceMappingURL=main.b3a08b74.chunk.js.map