(this.webpackJsonpfeatures=this.webpackJsonpfeatures||[]).push([[9],{30:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(31);function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},31:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},32:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(30);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=t[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},33:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},34:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(33);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},92:function(t,e,r){"use strict";r.r(e);var n=r(34),o=r(32),a=r(0),u=r.n(a);e.default=function(){var t=Object(a.useState)({latitude:"",longitude:"",supported:!0}),e=Object(o.a)(t,2),r=e[0],i=e[1],c=function(t){i((function(e){return Object(n.a)(Object(n.a)({},e),{},{latitude:t.coords.latitude,longitude:t.coords.longitude})}))};return u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,"Mytidbit location finder..."),u.a.createElement("p",{style:{color:"red"}},r.supported?"":"Location feature not supported in your browser"),u.a.createElement("div",{style:{position:"relative",left:"40%",top:"250px"}},u.a.createElement("label",null,"Latitude:\xa0\xa0\xa0",u.a.createElement("input",{type:"number",value:r.latitude,readOnly:!0}),u.a.createElement("br",null)),u.a.createElement("br",null),u.a.createElement("label",null,"Longitude:\xa0",u.a.createElement("input",{type:"number",value:r.longitude,readOnly:!0}),u.a.createElement("br",null)),u.a.createElement("button",{onClick:function(){navigator.geolocation?navigator.geolocation.watchPosition(c):i((function(t){return Object(n.a)(Object(n.a)({},t),{},{supported:!1})}))},style:{backgroundColor:"black",color:"white",width:"250px"}},"Get Current Location Coordinates")))}}}]);
//# sourceMappingURL=9.fe8bed55.chunk.js.map