(this.webpackJsonplisttask=this.webpackJsonplisttask||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=(n(9),n(1));var l=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),o=n[0],c=n[1],l={year:"numeric",month:"long",day:"numeric",timeZone:"UTC"};return r.a.createElement("li",{className:"month-list-item",onMouseLeave:function(){c(!1)}},r.a.createElement("h4",{className:e.users.length<3?"month-item-grey":e.users.length<7?"month-item-blue":e.users.length<11?"month-item-green":"month-item-red",onMouseEnter:function(){c(!0)}}," ",e.month),r.a.createElement("ol",{className:o?"":"display-none"},e.users.map((function(e,t){return r.a.createElement("li",{className:"user-list-item",key:e.id},r.a.createElement("span",null,r.a.createElement("span",null,t+1)," ",e.firstName," ",e.lastName),r.a.createElement("span",null,new Date(e.dob).toLocaleDateString("en-EN",l)))}))))};var i=function(e){var t=Object(a.useMemo)((function(){var t={weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"UTC"};return["January","February","March","April","May","June","July","August","September","October","November","December"].map((function(n,a){var o=e.userData.filter((function(e){return new Date(e.dob).toLocaleDateString("en-US",t).includes(n)}));return r.a.createElement(l,{key:a,users:o,month:n})}))}),[e.userData]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Months: "),r.a.createElement("ul",null,t))};n(10);var u=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(i,{userData:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.d4d15998.chunk.js.map