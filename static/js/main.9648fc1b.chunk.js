(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],{13:function(n,e,t){n.exports=t.p+"static/media/Logo.d2a4807b.png"},18:function(n,e,t){n.exports=t(29)},29:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(7),c=t.n(l),o=t(8),i=t(9),s=t(14),u=t(10),p=t(15),d=t(1),f=(t(23),t(2));function h(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f3f7fa;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 40px;\n"]);return h=function(){return n},n}var b=f.b.main(h()),m=t(13),x=t.n(m);function g(){var n=Object(d.a)(["\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n  width: 200px;\n  background: red;\n"]);return g=function(){return n},n}var k=Object(f.b)((function(){return r.a.createElement("a",{href:"https://www.aviasales.ru/"},r.a.createElement("img",{src:x.a,alt:"logo"}))}))(g());function v(){var n=Object(d.a)(["\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  position: relative;\n  &::before {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    display: block;\n    width: 20px;\n    height: 20px;\n    /* background-color: #fff; */\n    background-color: {(props) => props.checkState ? 'blue' : '#fff')};\n    border: 1px solid #9abbce;\n    border-radius: 2px;\n    z-index: 10;\n  }\n"]);return v=function(){return n},n}var w=function(n){var e=n.className,t=n.checkboxHandler,a=n.checkState;return r.a.createElement("input",{type:"checkbox",checked:a,className:e,onChange:t})},E=Object(f.b)(w)(v());function O(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 14px;\n  height: 40px;\n  cursor: pointer;\n  width: 100%;\n"]);return O=function(){return n},n}w.defaultProps={className:"",checkboxHandler:null,checkState:!1};var j=f.b.label(O());function T(){var n=Object(d.a)(["\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 20px;\n  margin: 0;\n  padding: 0;\n  /* padding-bottom: 20px; */\n"]);return T=function(){return n},n}var y=f.b.h1(T());function S(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 232px;\n  height: 252;\n  background-color: #fff;\n  border: 1px solid red;\n  color: #4a4a4a;\n  padding: 13px;\n"]);return S=function(){return n},n}var H=function(n){var e=n.className,t=n.checkboxHandler,a=n.filter;return r.a.createElement("section",{className:e},r.a.createElement(y,null,"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),r.a.createElement(j,null,r.a.createElement(E,{checkState:a.all,checkboxHandler:t("all")}),"\u0412\u0441\u0435"),r.a.createElement(j,null,r.a.createElement(E,{checkState:a.withoutTransplant,filter:a,checkboxHandler:t("widhoutTransplant")}),"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),r.a.createElement(j,null,r.a.createElement(E,{checkState:a.oneTransplant,filter:a,checkboxHandler:t("oneTransplant")}),"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"),r.a.createElement(j,null,r.a.createElement(E,{checkState:a.twoTransplant,filter:a,checkboxHandler:t("twoTransplant")}),"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"),r.a.createElement(j,null,r.a.createElement(E,{checkState:a.threeTransplant,filter:a,checkboxHandler:t("threeTransplant")}),"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"))},N=Object(f.b)(H)(S());function z(){var n=Object(d.a)(["\n  display: flex;\n  border: 1px solid black;\n  width: 960px;\n  height: 500px;\n  padding: 11px 100px 0;\n"]);return z=function(){return n},n}H.defaultProps={className:"",checkboxHandler:null,filter:{all:!1,withoutTransplant:!1,oneTransplant:!1,twoTransplant:!1,threeTransplant:!1}};var B=f.b.div(z());function C(){var n=Object(d.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n\tbody {\n\t\tfont-family: 'Open Sans';\n\t}\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n"]);return C=function(){return n},n}var J=Object(f.a)(C()),P=function(n){function e(n){var t;return Object(o.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this,n))).checkboxHandler=function(n){return function(){var e=t.state.filterState;e[n]=!e[n],t.setState({filterState:e})}},t.state={filterState:{all:!1,withoutTransplant:!1,oneTransplant:!1,twoTransplant:!1,threeTransplant:!1},gettedTickets:[]},t}return Object(p.a)(e,n),Object(i.a)(e,[{key:"render",value:function(){var n=this.state,e=n.filterState,t=n.gettedTickets;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement(b,null,r.a.createElement(k,null),r.a.createElement(B,null,r.a.createElement(N,{checkboxHandler:this.checkboxHandler,filter:e}))))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.9648fc1b.chunk.js.map