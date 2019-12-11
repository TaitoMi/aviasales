(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],{119:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(38),c=e.n(i),o=e(7),l=e.n(o),s=e(14),u=e(6),p=e(39),f=e(40),d=e(49),h=e(41),x=e(50),m=e(1),b=(e(59),e(2)),g=e(9),v=e.n(g),w=e(121);e(76);function k(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f3f7fa;\n  width: 100vw;\n  min-height: 101vh;\n  padding: 40px 0;\n"]);return k=function(){return n},n}var j=b.b.main(k()),E=e(44),O=e.n(E);function S(){var n=Object(m.a)(["\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n  width: 200px;\n"]);return S=function(){return n},n}function F(){var n=Object(m.a)(["\n  @media screen and (max-width: 769px) {\n    width: 120px;\n  }\n"]);return F=function(){return n},n}var y=function(n){var t=n.className;return r.a.createElement("img",{className:t,src:O.a,alt:"logo"})},T=Object(b.b)(y)(F()),N=Object(b.b)((function(){return r.a.createElement("a",{href:"https://www.aviasales.ru/"},r.a.createElement(T,null))}))(S());function z(){var n=Object(m.a)(["\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  position: relative;\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    transition: all 0.4s ease;\n  }\n  &::before {\n    display: block;\n    width: 20px;\n    height: 20px;\n    background-color: #fff;\n    border: 1px solid ",";\n    border-radius: 2px;\n    z-index: 10;\n  }\n  &::after {\n    display: block;\n    opacity: ",";\n    z-index: 11;\n    width: 10px;\n    height: 6px;\n    transform: rotate(-45deg) translate(-5%, -100%);\n    border-left: 2px solid #2196f3;\n    border-bottom: 2px solid #2196f3;\n  }\n  @media screen and (max-width: 769px) {\n    margin-right: 25px;\n    &::before {\n      width: 40px;\n      height: 40px;\n    }\n  }\n"]);return z=function(){return n},n}y.defaultProps={className:""};var A=function(n){var t=n.className,e=n.checkboxHandler,a=n.checkState;return r.a.createElement("input",{type:"checkbox",checked:a,className:t,onChange:e})},H=Object(b.b)(A)(z(),(function(n){return n.checkState?"#2196F3":"#9abbce"}),(function(n){return n.checkState?"1":"0"}));function M(){var n=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 14px;\n  height: 40px;\n  cursor: pointer;\n  width: 100%;\n  transition: all 0.3s ease;\n  padding-left: 20px;\n  &:hover {\n    background: #f1fcff;\n  }\n  @media screen and (max-width: 769px) {\n    font-size: 25px;\n    height: 70px;\n    padding-left: 33px;\n  }\n"]);return M=function(){return n},n}A.defaultProps={className:"",checkboxHandler:null,checkState:!1};var P=b.b.label(M());function C(){var n=Object(m.a)(["\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 20px;\n  margin: 0;\n  padding: 0;\n  padding-left: 20px;\n  @media screen and (max-width: 769px) {\n    font-size: 25px;\n    line-height: 35px;\n    white-space: nowrap;\n  }\n"]);return C=function(){return n},n}var D=b.b.h1(C());function I(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 232px;\n  height: 252px;\n  background-color: #fff;\n  color: #4a4a4a;\n  padding: 20px 0;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  transition: all 0.3s ease;\n  @media screen and (max-width: 769px) {\n    z-index: 11;\n    position: fixed;\n    min-width: 400px;\n    min-height: 404px;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: ",";\n    box-shadow: 0px 2px 18px 0px black;\n  }\n"]);return I=function(){return n},n}var B=function(n){var t=n.className,e=n.checkboxHandler,a=n.filter;return r.a.createElement("section",{className:t},r.a.createElement(D,null,"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),r.a.createElement(P,null,r.a.createElement(H,{checkState:a.all,checkboxHandler:e("all")}),"\u0412\u0441\u0435"),r.a.createElement(P,null,r.a.createElement(H,{checkState:a.withoutTransplant,checkboxHandler:e("withoutTransplant")}),"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),r.a.createElement(P,null,r.a.createElement(H,{checkState:a.oneTransplant,checkboxHandler:e("oneTransplant")}),"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"),r.a.createElement(P,null,r.a.createElement(H,{checkState:a.twoTransplant,checkboxHandler:e("twoTransplant")}),"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"),r.a.createElement(P,null,r.a.createElement(H,{checkState:a.threeTransplant,checkboxHandler:e("threeTransplant")}),"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"))},J=Object(b.b)(B)(I(),(function(n){return n.isMobile?"20vh":"-100vh"}));function L(){var n=Object(m.a)(["\n  display: flex;\n  position: relative;\n  width: 960px;\n  padding: 25px 90px 0;\n  @media screen and (max-width: 769px) {\n    width: 100vw;\n    padding: 25px;\n  }\n"]);return L=function(){return n},n}B.defaultProps={className:"",checkboxHandler:null,filter:{all:!1,withoutTransplant:!1,oneTransplant:!1,twoTransplant:!1,threeTransplant:!1}};var W=b.b.div(L());function X(){var n=Object(m.a)(["\n  width: 502px;\n  margin-left: 22px;\n  @media screen and (max-width: 769px) {\n    margin-left: 0px;\n    width: 100%;\n  }\n"]);return X=function(){return n},n}var $=b.b.section(X());function q(){var n=Object(m.a)(["\n  display: flex;\n  @media screen and (max-width: 769px) {\n    width: 100%;\n  }\n"]);return q=function(){return n},n}var G=b.b.div(q());function K(){var n=Object(m.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n"]);return K=function(){return n},n}function Q(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 2.5px;\n  cursor: pointer;\n  background-color: ",";\n  border: 1px solid ",";\n  border-top-right-radius: ",";\n  border-bottom-right-radius: ",";\n  border-top-left-radius: ",";\n  border-bottom-left-radius: ",";\n  width: 252px;\n  height: 50px;\n  color: ",";\n  text-transform: uppercase;\n  @media screen and (max-width: 769px) {\n    font-size: 25px;\n    height: 70px;\n    width: 50%;\n  }\n"]);return Q=function(){return n},n}var R=function(n){var t=n.className,e=n.children,a=n.changer;return r.a.createElement("button",{type:"button",onClick:a,className:t},e)},U=Object(b.b)(R)(Q(),(function(n){return n.isActive?"#2196F3":"#FFFFFF"}),(function(n){return n.isActive?"#2196F3":"#DFE5EC"}),(function(n){return n.right?"5px":"0px"}),(function(n){return n.right?"5px":"0px"}),(function(n){return n.left?"5px":"0px"}),(function(n){return n.left?"5px":"0px"}),(function(n){return n.isActive?"#FFFFFF":"#4A4A4A"})),V=Object(b.b)(U)(K(),(function(n){return n.isActive?"#FFFFFF":"#2196F3"}),(function(n){return n.isActive?"#4A4A4A":"#FFFFFF"}),(function(n){return n.isActive?"#DFE5EC":"#2196F3"}));function Y(){var n=Object(m.a)(["\n  border-radius: 5px;\n  display: flex;\n\tposition: relative\n  flex-direction: column;\n  justify-content: center;\n"]);return Y=function(){return n},n}R.defaultProps={className:"",children:"",changer:null};var Z=b.b.section(Y());function _(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return _=function(){return n},n}var nn=b.b.div(_());function tn(){var n=Object(m.a)(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 24px;\n  color: #2196f3;\n  @media screen and (max-width: 769px) {\n    font-size: 44px;\n    line-height: 64px;\n  }\n"]);return tn=function(){return n},n}var en=b.b.span(tn());function an(){var n=Object(m.a)(["\n  width: 110px;\n  height: 36px;\n  @media screen and (max-width: 769px) {\n    width: 220px;\n    height: 72px;\n  }\n"]);return an=function(){return n},n}var rn=function(n){var t=n.className,e=n.carrier,a="https://pics.avs.io/99/36/".concat(e,".png");return r.a.createElement("img",{className:t,src:a,alt:"Company Logo"})},cn=Object(b.b)(rn)(an());function on(){var n=Object(m.a)(["\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 5px;\n  color: #4a4a4a;\n  @media screen and (max-width: 769px) {\n    font-size: 22px;\n  }\n"]);return on=function(){return n},n}function ln(){var n=Object(m.a)(["\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #a0b0b9;\n  font-weight: 600;\n  margin-top: 15px;\n  @media screen and (max-width: 769px) {\n    font-size: 20px;\n  }\n"]);return ln=function(){return n},n}function sn(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 110px;\n  margin-right: 70px;\n  &:last-child {\n    margin-right: 0px;\n  }\n  @media screen and (max-width: 769px) {\n    width: auto;\n  }\n"]);return sn=function(){return n},n}rn.defaultProps={className:"",carrier:""};var un=b.b.div(sn()),pn=b.b.span(ln()),fn=b.b.span(on());function dn(){var n=Object(m.a)(["\n  margin-top: 6px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return dn=function(){return n},n}var hn=function(n){var t=n.className,e=n.origin,a=n.destination,i=n.date,c=n.stops,o=n.duration,l="".concat(e," \u2013 ").concat(a),s=i.slice(0,i.length-8).split("T")[1],u=Math.floor(o/60),p=o-60*u,f=u;return u>23&&(u-=23),r.a.createElement("div",{className:t},r.a.createElement(un,null,r.a.createElement(pn,null,l),r.a.createElement(fn,null,s," \u2013 ",u.toString().padStart(2,"0"),":",p.toString().padStart(2,"0"))),r.a.createElement(un,null,r.a.createElement(pn,null,"\u0432 \u043f\u0443\u0442\u0438"),r.a.createElement(fn,null,f,"\u0447 ",p,"\u043c")),r.a.createElement(un,null,r.a.createElement(pn,null,0===c.length?"\u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":"".concat(c.length," ").concat(1===c.length?"\u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430":"\u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438")),0===c.length?null:r.a.createElement(fn,null,c.join(","))))},xn=Object(b.b)(hn)(dn());function mn(){var n=Object(m.a)(["\n  margin-top: 20px;\n  background-color: #fff;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  padding: 20px;\n"]);return mn=function(){return n},n}hn.defaultProps={className:"",origin:"",destination:"",date:"",stops:[],duration:null};var bn=function(n){var t=n.className,e=n.price,a=n.carrier,i=n.segments;return r.a.createElement("div",{className:t},r.a.createElement(nn,null,r.a.createElement(en,null,function(n){var t=n.toString();return n>99999?"".concat(t.slice(0,3)," ").concat(t.slice(3)," \u0420"):n>9999?"".concat(t.slice(0,2)," ").concat(t.slice(2)," \u0420"):n>999?"".concat(t.slice(0,1)," ").concat(t.slice(1)," \u0420"):"".concat(n.toString()," \u0420")}(e)),r.a.createElement(cn,{carrier:a})),i.map((function(n){return r.a.createElement(xn,{key:"segment-".concat(Math.random()),origin:n.origin,destination:n.destination,stops:n.stops,duration:n.duration,date:n.date})})))},gn=Object(b.b)(bn)(mn());function vn(){var n=Object(m.a)(["\n  position: fixed;\n  width: 150px;\n  height: 50px;\n  border: none;\n  background: #2196f3;\n  transition: all 0.3s ease;\n  font-weight: 600;\n  font-size: 16px;\n  color: #fff;\n  z-index: 11;\n  border-radius: 50px;\n  letter-spacing: 2.5px;\n  cursor: pointer;\n  left: 50%;\n  bottom: -40vh;\n  transform: translateX(-50%);\n  &:hover {\n    border: 1px solid #2196f3;\n    color: #2196f3;\n    background: #fff;\n  }\n  @media screen and (max-width: 769px) {\n    bottom: 4vh;\n  }\n"]);return vn=function(){return n},n}bn.defaultProps={className:"",carrier:"",price:null,segments:[]};var wn=function(n){var t=n.className,e=n.children,a=n.filterShow;return r.a.createElement("button",{type:"button",onClick:a,className:t},e)},kn=Object(b.b)(wn)(vn());function jn(){var n=Object(m.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n\tbody {\n\t\tfont-family: 'Open Sans';\n\t}\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n"]);return jn=function(){return n},n}wn.defaultProps={className:"",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b",filterShow:null};var En=Object(b.a)(jn()),On=function(n){function t(n){var e;return Object(p.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this,n))).toSort=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=e.state.filtered,a=[];a=n?t.sort((function(n,t){return n.price-t.price})):t.sort((function(n,t){return n.segments[0].duration-t.segments[0].duration})),e.setState({sorted:a})},e.toFilter=function(){var n=e.state,t=n.tickets,a=n.filterState,r=n.leftTab;if(Object.values(a).every((function(n){return!1===n}))||!0===a.all)e.setState({filtered:t},(function(){e.toSort(r)}));else{var i=[],c=[],o=[],l=[];a.withoutTransplant&&(i=t.filter((function(n){return 0===n.segments[0].stops.length}))),a.oneTransplant&&(c=t.filter((function(n){return 1===n.segments[0].stops.length}))),a.twoTransplant&&(o=t.filter((function(n){return 2===n.segments[0].stops.length}))),a.threeTransplant&&(l=t.filter((function(n){return 3===n.segments[0].stops.length}))),e.setState({filtered:[].concat(Object(u.a)(i),Object(u.a)(c),Object(u.a)(o),Object(u.a)(l))},(function(){return e.toSort(r)}))}},e.getTickets=Object(s.a)(l.a.mark((function n(){var t,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.get("https://front-test.beta.aviasales.ru/search");case 2:return t=n.sent,a=function(){var n=Object(s.a)(l.a.mark((function n(){var r,i,c=arguments;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(c.length>0&&void 0!==c[0]&&c[0])){n.next=4;break}return e.toFilter(),n.abrupt("return");case 4:return r=e.state.tickets,n.prev=5,n.next=8,v.a.get("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(t.data.searchId));case 8:i=n.sent,n.next=16;break;case 11:return n.prev=11,n.t0=n.catch(5),n.next=15,v.a.get("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(t.data.searchId));case 15:i=n.sent;case 16:e.setState({tickets:[].concat(Object(u.a)(r),Object(u.a)(i.data.tickets))},(function(){e.toFilter(),a(i.data.stop)}));case 17:case"end":return n.stop()}}),n,null,[[5,11]])})));return function(){return n.apply(this,arguments)}}(),n.abrupt("return",a(!1));case 5:case"end":return n.stop()}}),n)}))),e.toggleTabs=function(n){return function(t){t.preventDefault(),"left"===n&&(e.setState({leftTab:!0}),e.toSort(!0)),"right"===n&&(e.setState({leftTab:!1}),e.toSort(!1))}},e.showFilter=function(n){n.preventDefault();var t=e.state.isMobile;e.setState({isMobile:!t})},e.checkboxHandler=function(n){return function(){var t=e.state.filterState;if("all"!==n){var a=t;a[n]=!a[n];var r=!Object.values(a).slice(1).some((function(n){return!0===n}))&&a.all;a.all=r,e.setState({filterState:a},(function(){return e.toFilter()}))}else{var i=!t.all;e.setState({filterState:{all:i,withoutTransplant:i,oneTransplant:i,twoTransplant:i,threeTransplant:i}},(function(){return e.toFilter()}))}}},e.state={filterState:{all:!1,withoutTransplant:!1,oneTransplant:!1,twoTransplant:!1,threeTransplant:!1},tickets:[],filtered:[],sorted:[],leftTab:!0,isMobile:!1},e}return Object(x.a)(t,n),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.getTickets()}},{key:"render",value:function(){var n=this.state,t=n.filterState,e=n.leftTab,a=n.sorted,i=n.isMobile;return r.a.createElement(r.a.Fragment,null,r.a.createElement(En,null),r.a.createElement(j,null,r.a.createElement(N,null),r.a.createElement(W,null,r.a.createElement(J,{checkboxHandler:this.checkboxHandler,filter:t,isMobile:i}),r.a.createElement($,null,r.a.createElement(G,null,r.a.createElement(U,{changer:this.toggleTabs("left"),isActive:e,left:!0},"\u0441\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439"),r.a.createElement(V,{changer:this.toggleTabs("right"),isActive:e,right:!0},"\u0441\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439")),r.a.createElement(Z,null,a.length>0?a.slice(0,5).map((function(n){return r.a.createElement(gn,{key:"ticket-".concat(Math.random()),price:n.price,carrier:n.carrier,segments:n.segments})})):r.a.createElement(w.a,{tip:"\u0411\u0438\u043b\u0435\u0442\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f ...",size:"large"}))),r.a.createElement(kn,{filterShow:this.showFilter},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(On,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},44:function(n,t,e){n.exports=e.p+"static/media/Logo.d2a4807b.png"},53:function(n,t,e){n.exports=e(119)}},[[53,1,2]]]);
//# sourceMappingURL=main.f7276ad2.chunk.js.map