(this.webpackJsonpcryapp=this.webpackJsonpcryapp||[]).push([[0],{20:function(e,c,t){},40:function(e,c,t){},42:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t.n(a),s=t(14),r=t.n(s),i=t(5),o=(t(20),t(15)),l=t.n(o),p=(t(40),t(0)),j=function(e){var c=e.image,t=e.name,a=e.price,n=(e.volume,e.pricechange),s=e.marketcap;return Object(p.jsx)("div",{className:"coin-container",children:Object(p.jsxs)("div",{className:"coin-row",children:[Object(p.jsxs)("div",{className:"coin",children:[Object(p.jsx)("img",{src:c,alt:"crypto"}),Object(p.jsx)("h1",{children:t}),Object(p.jsx)("p",{className:"coin-symbol"})]}),Object(p.jsxs)("div",{className:"coin-data",children:[Object(p.jsxs)("p",{className:"coin-price",children:["Rs.",a]}),n<0?Object(p.jsxs)("p",{className:"coin-percent red",children:[n.toFixed(2),"%"]}):Object(p.jsxs)("p",{className:"coin-percent green",children:[n.toFixed(2),"%"]}),Object(p.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: Rs.",s.toLocaleString()]})]})]})})};var d=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],d=r[1];Object(a.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var m=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(p.jsxs)("div",{className:"coin-app",children:[Object(p.jsxs)("div",{className:"coin-search",children:[Object(p.jsx)("h1",{className:"coin-text",children:"Search your desired coin"}),Object(p.jsx)("form",{action:"",children:Object(p.jsx)("input",{type:"text",className:"coin-input",placeholder:"Provide the coin name",onChange:function(e){d(e.target.value)}})})]}),m.map((function(e){return Object(p.jsx)(j,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,pricechange:e.price_change_percentage_24h},e.id)}))]})};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(d,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c4384c5e.chunk.js.map