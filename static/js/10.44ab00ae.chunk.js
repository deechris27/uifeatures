(this.webpackJsonpfeatures=this.webpackJsonpfeatures||[]).push([[10],{30:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(31);function a(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},31:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},32:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(30);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(c){a=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},55:function(t,e,r){},89:function(t,e,r){"use strict";r.r(e);var n=r(32),a=r(0),i=r.n(a);r(55);e.default=function(){var t=Object(a.useState)(""),e=Object(n.a)(t,2),r=e[0],o=e[1],u=["Deepak","Mytidbit","Deepika","Mytid","Suga","Hello","World","Chris","Bestie","Sugar"].filter((function(t){return t.toLowerCase().includes(r.toLowerCase())}));return i.a.createElement("div",null,i.a.createElement("input",{type:"text",className:"list-filter-input",onKeyUp:function(t){o(t.target.value)},placeholder:"Search names...."}),i.a.createElement("span",{style:{position:"absolute",left:"0",marginLeft:"30px",marginTop:"0.80%"}},i.a.createElement("i",{className:"fa fa-fw fa-search"})),i.a.createElement("ul",{className:"list-filter-ul"},u.map((function(t){return i.a.createElement("li",{key:t},i.a.createElement("a",{href:"#"},t))}))))}}}]);
//# sourceMappingURL=10.44ab00ae.chunk.js.map