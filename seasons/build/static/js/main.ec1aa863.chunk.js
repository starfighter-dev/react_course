(this.webpackJsonpseasons=this.webpackJsonpseasons||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(3),r=n(4),o=n(7),i=n(6),c=n(1),l=n.n(c),u=n(5),d=n.n(u),m=(n(13),{summer:{text:"Bit hot innit?",iconName:"sun"},winter:{text:"Brr, it is chilly",iconName:"snowflake"}}),j=function(e){var t,n,a=(t=e.lat,(n=(new Date).getMonth())>2&&n<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=m[a],o=r.text,i=r.iconName;return Object(s.jsxs)("div",{className:"season-display ".concat(a),children:[Object(s.jsx)("i",{className:"icon-left massive ".concat(i," icon")}),Object(s.jsx)("h1",{children:o}),Object(s.jsx)("i",{className:"icon-right massive ".concat(i," icon")})]})},h=function(e){return Object(s.jsx)("div",{className:"ui active dimmer",children:Object(s.jsx)("div",{className:"ui big text loader",children:e.message})})};h.defaultProps={message:"Loading..."};var b=h,g=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={lat:null,errorMessage:""},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount()"),window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({lat:t.coords.latitude})}),(function(t){return e.setState({errorMessage:t.message})}))}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate()")}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?Object(s.jsxs)("div",{children:["Error: ",this.state.errorMessage]}):!this.state.errorMessage&&this.state.lat?Object(s.jsx)(j,{lat:this.state.lat}):Object(s.jsx)(b,{message:"boobs"})}},{key:"render",value:function(){return console.log("render()"),Object(s.jsx)("div",{className:"border red",children:this.renderContent()})}}]),n}(l.a.Component);d.a.render(Object(s.jsx)(g,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ec1aa863.chunk.js.map