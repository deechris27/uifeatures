(this.webpackJsonpfeatures=this.webpackJsonpfeatures||[]).push([[11],{30:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(31);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},31:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},32:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(30);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(i){r=!0,l=i}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},65:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(0),l=a.n(r),c=(a(65),l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Name"}),l.a.createElement("input",{type:"email",placeholder:"Email"}),l.a.createElement("input",{type:"password",placeholder:"Password"}),l.a.createElement("input",{type:"password",placeholder:"Confirm Password"}),l.a.createElement("button",null,"Sign Up"))),o=l.a.createElement("div",null,l.a.createElement("input",{type:"email",placeholder:"Email"}),l.a.createElement("input",{type:"password",placeholder:"Password"}),l.a.createElement("a",{href:"#"},"Forgot your password?"),l.a.createElement("button",null,"Sign In")),i=l.a.createElement("div",{className:"social-container"},l.a.createElement("a",{href:"#",className:"social"},l.a.createElement("i",{className:"fa fa-fw fa-facebook"})),l.a.createElement("a",{href:"#",className:"social"},l.a.createElement("i",{className:"fa fa-fw fa-google"})),l.a.createElement("a",{href:"#",className:"social"},l.a.createElement("i",{className:"fa fa-fw fa-linkedin"})));var s=function(e){var t="SigninBit"===e.name?o:c;return function(a){return l.a.createElement(e,Object.assign({formFields:t,socialIcons:i},a))}};var u=s((function(e){var t=e.formFields,a=e.socialIcons;return l.a.createElement("div",{className:"form-container sign-up-container"},l.a.createElement("form",{action:"#"},l.a.createElement("h1",null,"Create Account"),a,l.a.createElement("span",null,"or use your email for registration"),t))}));var m=s((function(e){var t=e.formFields,a=e.socialIcons;return l.a.createElement("div",{className:"form-container sign-in-container"},l.a.createElement("form",{action:"#"},l.a.createElement("h1",null,"Sign in"),a,l.a.createElement("span",null,"or use your account"),t))}));var f=function(e){var t=e.handleSignInUp;return l.a.createElement("div",{className:"overlay-container"},l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay-panel overlay-left"},l.a.createElement("h1",null,"Good to see you!"),l.a.createElement("p",null,"Login with Facebook, Google LinkedIn or with your registered email."),l.a.createElement("button",{className:"ghost",name:"signin",onClick:t},"Sign In")),l.a.createElement("div",{className:"overlay-panel overlay-right"},l.a.createElement("h1",null,"Hello, Deepak!"),l.a.createElement("p",null,"Enter your name and email address to get started"),l.a.createElement("button",{className:"ghost",name:"signup",onClick:t},"Sign Up"))))};var p=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Mytidbit overlay signin signup"),l.a.createElement("div",{className:"container ".concat(a||"")},l.a.createElement(u,null),l.a.createElement(m,null),l.a.createElement(f,{handleSignInUp:function(e){return console.log(e.target.name),"signup"===e.target.name?c("right-panel-active"):c("")}})))};t.default=function(){var e=l.a.createRef(),t=Object(r.useState)("none"),a=Object(n.a)(t,2),c=a[0],o=a[1];return l.a.createElement("div",null,l.a.createElement("button",{style:{position:"relative",bottom:"270px",left:"570px",cursor:"pointer"},onClick:function(){o("block")}},"Login"),l.a.createElement("div",{className:"overlay-effect",ref:e,style:{display:"".concat(c)}},l.a.createElement("div",{style:{display:"".concat(c)},className:"close-signinup",name:"none",onClick:function(){o("none")}},"X"),l.a.createElement(p,null)))}}}]);
//# sourceMappingURL=11.370652d4.chunk.js.map