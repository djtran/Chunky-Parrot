(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{61:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var l=n(0),a=n.n(l),o=n(21),c=n(13);function r(){var e=Object(c.useRouteData)().wfiles;return console.log(e),e.map((function(e){console.log(e.title)})),a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("h1",null," Workflows "),a.a.createElement("ul",{className:"no-bullets"},e.map((function(e){return a.a.createElement("li",null,a.a.createElement(o.a,{to:"/index/workflow/".concat(e.title.replace(/\s/g,"-"))},e.title))}))))}}}]);