(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{146:function(e){e.exports=JSON.parse('{"a":"0.1.4"}')},169:function(e,t,a){},18:function(e,t,a){e.exports={main:"detail_main__2Eb3o",submain:"detail_submain__C9ByB",box1:"detail_box1__1pBwf",subbox1:"detail_subbox1__1n8vJ",subbox_:"detail_subbox___av2PK",quantity:"detail_quantity__2VwxI",containerSpinner:"detail_containerSpinner__31vxC",containerArrow:"detail_containerArrow__2ApM8",maintitle:"detail_maintitle__1VSF1",arrowleft:"detail_arrowleft__2_hLm",containerResumen:"detail_containerResumen__oLbI6",box2:"detail_box2__3tzc8",subbox2:"detail_subbox2__3xsdq",subbox2_title:"detail_subbox2_title__2wt6x",method:"detail_method__2JcUP",status:"detail_status__2fd2S"}},202:function(e,t,a){},207:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(38),r=a.n(c),i=a(14),s=(a(169),a(19)),o=Object(n.createContext)(null),l=Object(n.createContext)(null),u=Object(n.createContext)(null),b=a(82),d=a.n(b),j=a(265),O=a(6),p=a(275),x=a(141),m=a.n(x),h=a(16),f=a(40),_=a(66),v=a(173).default,y="GET_PRODUCTS",g="ADD_ITEM_TO_CART",N="SUSTRACT_TO_CART",w="DELETE_ITEM",C="LINK_PAYMENT",T="RESET_CART",E="STATUS",S="HISTORY",k="DETAILS",R="FILTER",I="CLEAR_DETAIL",A="https://altonono.herokuapp.com";function P(e){return function(){var t=Object(_.a)(Object(f.a)().mark((function t(a){var n;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.post("".concat(A,"/findProduct"),e);case 3:n=t.sent,a({type:R,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error en filterProducts",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function B(){return function(){var e=Object(_.a)(Object(f.a)().mark((function e(t){var a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("".concat(A,"/getStatus"));case 3:return a=e.sent,e.abrupt("return",t({type:E,payload:a.data}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.log("error en getSatus",e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function D(){return{type:T}}var L=a(61),q=a.n(L),M=a(90),U=a.p+"static/media/soccer-ball-grass-background_1284-8507.7b95cd62.webp",W=a(2);function V(){var e=Object(n.useContext)(u),t=e.nav,a=e.setNav,c=Object(s.f)(),r=Object(h.b)();Object(n.useEffect)((function(){r(B())}),[r]);return Object(W.jsxs)("div",{id:"nav",style:!1===t?{left:"-1000%"}:{left:0},className:q.a.main,children:[Object(W.jsx)("div",{style:{width:"100%"},children:Object(W.jsxs)("div",{onClick:function(){c.push("/"),a(!t),document.getElementById("check").checked=!1},className:q.a.containerRoutes,children:[Object(W.jsxs)("div",{className:q.a.subcontainer,children:[Object(W.jsx)(M.b,{className:q.a.icon}),Object(W.jsx)("h3",{className:q.a.link,children:"Menu"})]}),Object(W.jsx)(M.a,{className:q.a.arrow})]})}),Object(W.jsx)("img",{className:q.a.image,src:U,alt:"campo de futbol"})]})}a(202);var F=Object(O.a)(j.a)((function(e){var t=e.theme;return{"& .MuiBadge-badge":{right:-3,top:13,border:"2px solid ".concat(t.palette.background.paper),padding:"0 4px"}}}));function J(){var e=Object(s.f)(),t=Object(h.b)();Object(n.useEffect)((function(){t(B())}),[t]);var a=Object(h.c)((function(e){return e.cart})),c=Object(h.c)((function(e){return e.status})),r=c.length>0&&c[0].status;return Object(W.jsxs)("div",{className:d.a.main,children:[Object(W.jsxs)("div",{className:d.a.container,children:[Object(W.jsx)("h3",{onClick:function(){e.push("/")},className:d.a.title,children:"ALTONONO - FUTBOL EN SERIO"}),"Cerrado"===r&&Object(W.jsx)("h4",{className:d.a.store,children:"Tienda cerrada"})]}),Object(W.jsx)(p.a,{style:{position:"absolute",right:"1rem"},"aria-label":"cart",children:Object(W.jsx)(F,{badgeContent:a.length?a.length:"0",color:"primary",children:Object(W.jsx)(m.a,{style:{color:"#fff"},onClick:function(){e.push("/review")}})})}),Object(W.jsx)(V,{})]})}var K=a(23),z=a.n(K),H=a(59),Y=a.n(H),X=a(276),$=a(269),G=a(267),Q=a(263);function Z(){var e=Object(h.b)(),t=Object(n.useContext)(o),a=t.categories,c=t.setCategories;return Object(n.useEffect)((function(){e(P({category:a}))}),[e,a]),Object(n.useEffect)((function(){e(B())}),[a,e]),Object(n.useEffect)((function(){e(P())}),[e]),Object(W.jsx)("div",{style:{position:"sticky",top:"5rem",zIndex:1},children:Object(W.jsxs)(X.a,{variant:"filled",size:"small",sx:{m:1,minWidth:320,bgcolor:"rgba(0,0,0,0.2)",color:"#fff"},children:[Object(W.jsx)($.a,{id:"demo-simple-select-helper-label",children:"Todas las Categorias"}),Object(W.jsxs)(Q.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:a,label:"categories",onChange:function(e){c(e.target.value)},MenuProps:{PaperProps:{sx:{bgcolor:"rgba(0,0,0,0.90)",color:"#fff"}}},children:[Object(W.jsx)(G.a,{value:"All",children:Object(W.jsx)("em",{children:"All"})}),Object(W.jsx)(G.a,{value:"Comidas",children:"Comidas"}),Object(W.jsx)(G.a,{value:"Bebidas",children:"Bebidas"}),Object(W.jsx)(G.a,{value:"Cervezas",children:"Cervezas"}),Object(W.jsx)(G.a,{value:"Espirituosas",children:"Espirituosas"}),Object(W.jsx)(G.a,{value:"Ensaladas",children:"Ensaladas"}),Object(W.jsx)(G.a,{value:"Postres",children:"Postres"}),Object(W.jsx)(G.a,{value:"Kiosco",children:"Kiosco"}),Object(W.jsx)(G.a,{value:"Vinos",children:"Vinos"})]})]})})}a(207);function ee(){return Object(W.jsx)("div",{className:"loadingio-spinner-eclipse-u3ia1smsmv",children:Object(W.jsx)("div",{className:"ldio-stzrh5yk47h",children:Object(W.jsx)("div",{})})})}var te=a(91),ae=a(143),ne=a(142);function ce(){var e=Object(h.c)((function(e){return e.items})),t=Object(h.c)((function(e){return e.status})),a=t.length>0&&t[0].status,c=Object(h.b)(),r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1];return Object(n.useEffect)((function(){c(P({product:o}))}),[c,o]),Object(n.useEffect)((function(){c(P())}),[c]),Object(n.useEffect)((function(){c(B())}),[c]),Object(W.jsxs)("div",{className:z.a.mainBox,children:[Object(W.jsxs)("div",{className:z.a.containerInput,children:[Object(W.jsx)(ne.a,{className:z.a.searchIcon}),Object(W.jsx)("input",{type:"text",value:o,className:z.a.input,placeholder:"Encuentra productos por su nombre",onChange:function(e){return l(e.target.value)}})]}),Object(W.jsx)(Z,{}),e.length?e.map((function(e,t){return Object(W.jsx)(re,{status:a,image:null!==e.img?"https://altonono.herokuapp.com".concat(e.img):"",available:e.available,title:e.title,id:e.id,description:e.description,unit_price:e.unit_price},t)})):Object(W.jsx)("div",{className:z.a.containerSpinner,children:Object(W.jsx)(ee,{})})]})}function re(e){var t=e.title,a=e.unit_price,n=e.description,c=e.status,r=e.id,i=e.available,s=e.image,o=Object(h.b)(),l=Object(h.c)((function(e){return e.cart})).find((function(e){return e.id===r}));return Object(W.jsxs)("div",{className:!1===i?z.a.unavailable:z.a.boxProduct,children:[Object(W.jsxs)("div",{className:z.a.boxTitle,children:[Object(W.jsx)("h2",{className:z.a.title,children:t}),Object(W.jsx)(Y.a,{fixedDecimalScale:!0,className:z.a.price,value:a,displayType:"text",thousandSeparator:!0,prefix:"$"})]}),Object(W.jsx)("h4",{className:z.a.description,children:n}),Object(W.jsxs)("div",{className:z.a.boxTitle2,children:[s&&Object(W.jsx)("img",{className:z.a.img,src:s,alt:"producto"}),Object(W.jsxs)("div",{className:z.a.btnBox,children:[Object(W.jsx)("button",{disabled:!1===i||"Cerrado"===c,onClick:function(){var e;o((e={title:t,quantity:1,unit_price:Number(a),description:n,id:r},{type:N,payload:e}))},className:z.a.btn,children:Object(W.jsx)(ae.a,{})}),Object(W.jsx)("p",{className:z.a.btn,children:void 0!==l?l.quantity:0}),Object(W.jsx)("button",{disabled:!1===i||"Cerrado"===c,onClick:function(){var e;o((e={title:t,quantity:1,unit_price:Number(a),description:n,id:r},{type:g,payload:e}))},className:z.a.btn,children:Object(W.jsx)(te.a,{})})]})]}),!1===i&&Object(W.jsx)("span",{className:z.a.itemUnavailable,children:"No Disponible"})]})}var ie=a(15),se=a(34),oe=a.n(se),le=a(274),ue=a(71),be=a(144);function de(){var e=Object(h.c)((function(e){return e.cart})),t=Object(h.c)((function(e){return e.status})),a=Object(h.b)(),c=Object(s.f)(),r=e.map((function(e){return e.unit_price*e.quantity})).reduce((function(e,t){return e+t}),0),i=Object(n.useContext)(l),o=i.client,u=i.setClient;Object(n.useEffect)((function(){a(B())}),[a]);return Object(W.jsxs)("div",{className:oe.a.mainBox,children:[Object(W.jsx)("h2",{children:"MIS PRODUCTOS"}),Object(W.jsx)(ue.a,{onClick:function(){c.push("/")},className:oe.a.arrow}),Object(W.jsx)("div",{className:oe.a.boxCard,children:e.length>0?e.map((function(e,t){return Object(W.jsx)(je,{description:e.description,title:e.title,quantity:e.quantity,id:e.id,subtotal:e.quantity*e.unit_price},t)})):Object(W.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"},children:[Object(W.jsx)(be.a,{className:oe.a.emptyCart}),Object(W.jsx)("h4",{children:"No hay productos para mostrar"})]})}),e.length>0&&Object(W.jsxs)("div",{className:oe.a.boxTextarea,children:[Object(W.jsx)("h4",{children:"Comentarios"}),Object(W.jsx)("textarea",{value:o.comentarios,onChange:function(e){u((function(t){return Object(ie.a)(Object(ie.a)({},t),{},{comentarios:e.target.value})}))},placeholder:"Agrega instrucciones o comentarios",className:oe.a.textarea})]}),Object(W.jsxs)("div",{className:oe.a.styleflex,children:[Object(W.jsx)("h4",{children:"TOTAL"}),Object(W.jsx)(Y.a,{style:{marginLeft:"3rem"},value:r,displayType:"text",thousandSeparator:!0,prefix:"$"})]}),Object(W.jsx)("div",{className:oe.a.styleflex,children:Object(W.jsx)(le.a,{style:{marginBottom:"2rem",width:"60%"},variant:"contained",disabled:!e.length||"Cerrado"===t[0].status,onClick:function(){c.push("/payment")},children:"FINALIZAR PEDIDO"})})]})}function je(e){var t=e.title,a=e.quantity,n=e.subtotal,c=e.id,r=e.description,i=Object(h.b)();return Object(W.jsxs)("div",{className:oe.a.boxReview,children:[Object(W.jsx)("button",{onClick:function(){i({type:w,payload:c})},className:oe.a.btnDelete,children:Object(W.jsx)(te.b,{})}),Object(W.jsxs)("div",{className:oe.a.styleflex,children:[Object(W.jsx)("h3",{style:{color:"red",fontWeight:"900"},className:oe.a.margin,children:t}),Object(W.jsx)("h3",{style:{margin:0},children:a})]}),Object(W.jsx)("h6",{style:{margin:0,position:"absolute",top:"2.3rem",left:"1.7rem"},children:r}),Object(W.jsxs)("div",{className:oe.a.styleflex,children:[Object(W.jsx)("h5",{className:oe.a.margin,children:"SUBTOTAL"}),Object(W.jsx)(Y.a,{value:n,displayType:"text",thousandSeparator:!0,prefix:"$"})]})]})}var Oe=a(5),pe=a(32),xe=a.n(pe),me=a(92),he=a.n(me),fe=a(270),_e=a(266),ve=a(272);function ye(){var e=Object(h.b)(),t=Object(s.f)(),a=Object(n.useContext)(l),c=a.client,r=a.setClient,o=Object(h.c)((function(e){return e.cart})),u=(Object(h.c)((function(e){return e.history})),Object(h.c)((function(e){return e.status}))),b=u.length>0&&u[0].status,d=Object(n.useState)({}),j=Object(i.a)(d,2),O=j[0],p=j[1],x=Object(n.useState)(!1),m=Object(i.a)(x,2),y=m[0],g=m[1];Object(n.useEffect)((function(){e(B())}),[e]);var N=function(){var a;e((a={client:c,cart:o},function(){var e=Object(_.a)(Object(f.a)().mark((function e(t){var n;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("".concat(A,"/cashpayment"),a);case 3:n=e.sent,console.log("res",n),t({type:S,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error en cashPayment",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),e(D()),he.a.fire({icon:"success",title:"Pedido en curso",text:"Nuestra camarera le acercara su pedido",showConfirmButton:!0}),t.push("/")},w=function(e){var t=e.target,a=t.name,n=t.value;r(Object(ie.a)(Object(ie.a)({},c),{},Object(Oe.a)({},a,n)))},C=function(e){e.preventDefault(),p(T(c)),g(!0)},T=function(e){var t={};return e.name||(t.name="No puede estar vacio!"),e.table||(t.table="No puede estar vacio!"),"number"!==typeof Number(e.table)&&(t.table="Debe ser un numero"),e.telefono||(t.telefono="No puede estar vacio!"),(e.telefono.length>10||e.telefono.length<10)&&(t.telefono="Ingrese un numero valido"),e.method||(t.method="No puede estar vacio!"),t};return Object(n.useEffect)((function(){0===Object.keys(O).length&&y&&N()}),[O,y]),Object(W.jsxs)("div",{className:xe.a.main,children:[Object(W.jsx)(ue.a,{onClick:function(){t.push("/review")},className:xe.a.arrow}),Object(W.jsx)("h3",{style:{marginRight:"1.5rem"},children:"Completa tus Datos"}),Object(W.jsxs)("form",{onSubmit:C,className:xe.a.boxSubMain,children:[Object(W.jsxs)("div",{className:xe.a.containerInputs,children:[Object(W.jsx)(fe.a,{label:"Nombre",className:xe.a.input,value:c.name,name:"name",placeholder:"Nombre",onChange:w}),O.name&&Object(W.jsx)(_e.a,{className:xe.a.error,severity:"error",children:O.name})]}),Object(W.jsxs)("div",{className:xe.a.containerInputs,children:[Object(W.jsx)(fe.a,{label:"Telefono 11xxxx xxxx",className:xe.a.input,type:"tel",value:c.telefono,name:"telefono",placeholder:"11xxxx xxxx",pattern:"[0-9]{9}",onChange:w}),O.telefono&&Object(W.jsx)(_e.a,{className:xe.a.error,severity:"error",children:O.telefono})]}),Object(W.jsxs)("div",{className:xe.a.containerInputs,children:[Object(W.jsx)(fe.a,{label:"Numero de Mesa",className:xe.a.inputTable,type:"number",value:c.table,name:"table",placeholder:"Numero de Mesa",onChange:w}),O.table&&Object(W.jsx)(_e.a,{className:xe.a.error,severity:"error",children:O.table})]}),Object(W.jsxs)("div",{className:xe.a.select,children:[Object(W.jsx)(ve.a,{sx:{minWidth:"100%"},children:Object(W.jsxs)(X.a,{fullWidth:!0,children:[Object(W.jsx)($.a,{id:"demo-simple-select-label",children:"Metodo Pago"}),Object(W.jsxs)(Q.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:c.method,name:"method",label:"Metodo Pago",onChange:w,children:[Object(W.jsx)(G.a,{value:"Efectivo",children:"Efectivo"}),Object(W.jsx)(G.a,{value:"QR",children:"QR"})]})]})}),O.method&&Object(W.jsx)(_e.a,{className:xe.a.error,severity:"error",children:O.method})]})]}),Object(W.jsx)("div",{className:xe.a.containerBtn,children:Object(W.jsx)(le.a,{variant:"contained",onClick:C,type:"submit",disabled:!o.length||"Cerrado"===b,style:{marginRight:"1.5rem",width:"50%"},children:"Confirmar Pedido"})})]})}function ge(){var e=Object(h.b)(),t=Object(s.f)();return Object(n.useEffect)((function(){he.a.fire({icon:"success",title:"Pedido Confirmado",text:"Nuestra camarera le acercara su pedido",showConfirmButton:!0}),e(D()),t.push("/")})),Object(W.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"90%",justifyContent:"center"}})}var Ne=a(150),we=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_URL,Ce=Ne.a.connect(we,{transport:["websocket"]}),Te=Object(n.createContext)(),Ee=a(18),Se=a.n(Ee);function ke(){var e=Object(h.b)(),t=Object(s.g)().id,a=Object(h.c)((function(e){return e.detail})),c=Object(s.f)();Object(n.useEffect)((function(){e(function(e){return function(){var t=Object(_.a)(Object(f.a)().mark((function t(a){var n;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v("".concat(A,"/details/").concat(e));case 3:return n=t.sent,t.abrupt("return",a({type:k,payload:n.data}));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",console.log("error en detail",t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[e,t]);return Object(W.jsx)("div",{className:Se.a.main,children:a.items?Object(W.jsxs)("div",{className:Se.a.submain,children:[Object(W.jsxs)("div",{className:Se.a.containerArrow,children:[Object(W.jsx)(ue.a,{onClick:function(){c.goBack()},className:Se.a.arrowleft}),Object(W.jsx)("h3",{className:Se.a.maintitle,children:"Detalle del pedido"})]}),Object(W.jsx)("div",{className:Se.a.box1,children:a.items&&a.items.map((function(e){return Object(W.jsxs)("div",{className:Se.a.subbox1,children:[Object(W.jsxs)("div",{className:Se.a.subbox_,children:[Object(W.jsxs)("h4",{className:Se.a.quantity,children:["x",e.quantity]}),Object(W.jsx)("h4",{children:e.title})]}),Object(W.jsx)(Y.a,{value:e.unit_price,displayType:"text",thousandSeparator:!0,prefix:"$"})]},t)}))}),Object(W.jsx)("div",{className:Se.a.containerResumen,children:Object(W.jsx)("h3",{children:"Resumen"})}),Object(W.jsxs)("div",{className:Se.a.box2,children:[Object(W.jsxs)("div",{className:Se.a.subbox2,children:[Object(W.jsx)("h4",{className:Se.a.subbox2_title,children:"Forma de pago"}),Object(W.jsx)("h4",{className:Se.a.method,children:a.method})]}),Object(W.jsxs)("div",{className:Se.a.subbox2,children:[Object(W.jsx)("h4",{className:Se.a.subbox2_title,children:"Total"}),Object(W.jsx)(Y.a,{value:a.monto,displayType:"text",thousandSeparator:!0,prefix:"$"})]})]}),Object(W.jsx)("div",{className:Se.a.containerResumen,children:Object(W.jsx)("h3",{children:"Mi orden"})}),Object(W.jsx)("div",{className:Se.a.box2,children:Object(W.jsx)("div",{className:Se.a.subbox2,children:Object(W.jsx)("h4",{className:Se.a.status,children:a.status})})})]}):Object(W.jsx)("div",{className:Se.a.containerSpinner,children:Object(W.jsx)(ee,{})})})}var Re=a(152),Ie=a(146);var Ae=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),b=Object(i.a)(r,2),d=b[0],j=b[1],O=Object(h.b)();Object(n.useEffect)((function(){O(B())}),[O]);var p=Object(n.useState)({name:"",table:"",telefono:"",method:"",comentarios:""}),x=Object(i.a)(p,2),m=x[0],f=x[1];return Object(W.jsx)(Re.a,{currentVersion:Ie.a,isEnabled:!0,isVerboseMode:!1,loadingComponent:Object(W.jsx)(ee,{}),children:Object(W.jsx)("div",{className:"App",children:Object(W.jsx)(u.Provider,{value:{nav:d,setNav:j},children:Object(W.jsx)(o.Provider,{value:{categories:a,setCategories:c},children:Object(W.jsx)(l.Provider,{value:{client:m,setClient:f},children:Object(W.jsxs)(Te.Provider,{value:Ce,children:[Object(W.jsx)(J,{}),Object(W.jsxs)(s.c,{children:[Object(W.jsx)(s.a,{exact:!0,path:"/",children:Object(W.jsx)(ce,{})}),Object(W.jsx)(s.a,{exact:!0,path:"/review",children:Object(W.jsx)(de,{})}),Object(W.jsx)(s.a,{exact:!0,path:"/payment",children:Object(W.jsx)(ye,{})}),Object(W.jsx)(s.a,{exact:!0,path:"/detail/:id",children:Object(W.jsx)(ke,{})}),Object(W.jsx)(s.a,{exact:!0,path:"/paymentmp",children:Object(W.jsx)(ge,{})})]})]})})})})})})},Pe=a(49),Be=a(60),De=a(148),Le=a(111),qe=a(22),Me={items:[],cart:[],link:"",status:[],history:[],detail:{}},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;if(t.type===y)return Object(ie.a)(Object(ie.a)({},e),{},{items:t.payload});if(t.type===g){var a=e.cart.find((function(e){return e.id===t.payload.id}));return a?Object(ie.a)(Object(ie.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(ie.a)(Object(ie.a)({},e),{},{quantity:e.quantity+1}):e}))}):Object(ie.a)(Object(ie.a)({},e),{},{cart:[].concat(Object(qe.a)(e.cart),[t.payload])})}if(t.type===S)return Object(ie.a)(Object(ie.a)({},e),{},{history:t.payload});if(t.type===N){var n=e.cart.find((function(e){return e.id===t.payload.id}));if(n&&n.quantity>1)return Object(ie.a)(Object(ie.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(ie.a)(Object(ie.a)({},e),{},{quantity:e.quantity-1}):e}))});if(n&&1===n.quantity)return Object(ie.a)(Object(ie.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))})}if(t.type===T)return Object(ie.a)(Object(ie.a)({},e),{},{cart:[],link:"",items:[]});if(t.type===w){var c=e.cart.filter((function(e){return e.id!==t.payload}));return Object(ie.a)(Object(ie.a)({},e),{},{cart:c})}return t.type===k||t.type===k?Object(ie.a)(Object(ie.a)({},e),{},{detail:t.payload}):t.type===R?Object(ie.a)(Object(ie.a)({},e),{},{items:t.payload}):t.type===I?Object(ie.a)(Object(ie.a)({},e),{},{detail:{}}):t.type===C?Object(ie.a)(Object(ie.a)({},e),{},{link:t.payload}):t.type===E?Object(ie.a)(Object(ie.a)({},e),{},{status:t.payload}):Object(ie.a)({},e)},We=a(147),Ve=a.n(We),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Be.c,Je={key:"root",storage:Ve.a},Ke=Object(Le.a)(Je,Ue),ze=Object(Be.e)(Ke,Fe(Object(Be.a)(De.a))),He=Object(Le.b)(ze),Ye=a(149);var Xe=Object(s.h)((function(e){var t=e.history,a=e.children;return Object(n.useLayoutEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),Object(W.jsx)(n.Fragment,{children:a})})),$e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(W.jsx)(h.a,{store:ze,children:Object(W.jsx)(Ye.a,{loading:null,persistor:He,children:Object(W.jsx)(Pe.a,{children:Object(W.jsx)(Xe,{children:Object(W.jsx)(Ae,{})})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");$e?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ge(t,e)}))}}()},23:function(e,t,a){e.exports={mainBox:"product_mainBox__17YsJ",boxProduct:"product_boxProduct__3XHlN",unavailable:"product_unavailable__2rwb4",img:"product_img__3A7Dt",itemUnavailable:"product_itemUnavailable__2ro3z",containerSpinner:"product_containerSpinner__KNhDI",boxTitle:"product_boxTitle__IrYUA",boxTitle2:"product_boxTitle2__3VT2G",btnBox:"product_btnBox__3mdaJ",title:"product_title__9WRhE",containerInput:"product_containerInput__3pF7A",input:"product_input__2Jpvs",searchIcon:"product_searchIcon__2xVvL",description:"product_description__16OLJ",price:"product_price__3IvBn",btn:"product_btn__3czyw",btnAdd:"product_btnAdd__3CejG"}},32:function(e,t,a){e.exports={main:"payment_main__1ntYJ",boxSubMain:"payment_boxSubMain__21mUR",containerInputs:"payment_containerInputs__3qZiO",input:"payment_input__OO3Xr",inputTable:"payment_inputTable__33g54",select:"payment_select__1fQg1",error:"payment_error__3yGpZ",selectinput:"payment_selectinput__1bBOX",containerBtn:"payment_containerBtn__3YQfr",btnMp:"payment_btnMp__26jOY",arrow:"payment_arrow__29V7F"}},34:function(e,t,a){e.exports={mainBox:"reviewOrder_mainBox__38O8o",boxCard:"reviewOrder_boxCard__1qyXH",boxReview:"reviewOrder_boxReview__3GUlh",styleflex:"reviewOrder_styleflex__2B4tb",margin:"reviewOrder_margin__HxhPo",btnDelete:"reviewOrder_btnDelete__3uc98",arrow:"reviewOrder_arrow__2E4Wn",boxTextarea:"reviewOrder_boxTextarea__DvDRI",textarea:"reviewOrder_textarea__2tkn3",emptyCart:"reviewOrder_emptyCart__25d6T"}},61:function(e,t,a){e.exports={main:"vertical_main__2B6Oj",containerRoutes:"vertical_containerRoutes__8lb5H",subcontainer:"vertical_subcontainer__2xdra",link:"vertical_link__3w3Lz",icon:"vertical_icon__1dR6T",arrow:"vertical_arrow__3Zub5",image:"vertical_image__2nYiO"}},82:function(e,t,a){e.exports={main:"navbar_main__x7K9v",container:"navbar_container__35y-f",store:"navbar_store__2m1bq",bars:"navbar_bars__2-WNj",title:"navbar_title__2KRsL"}}},[[220,1,2]]]);
//# sourceMappingURL=main.2e7d296a.chunk.js.map