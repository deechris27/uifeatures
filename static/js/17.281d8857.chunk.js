(this.webpackJsonpfeatures=this.webpackJsonpfeatures||[]).push([[17],{107:function(e,a,t){"use strict";t.r(a);var n=t(24),l=t(0),r=t.n(l),c=(t(77),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Name"}),r.a.createElement("input",{type:"email",placeholder:"Email"}),r.a.createElement("input",{type:"password",placeholder:"Password"}),r.a.createElement("input",{type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",null,"Sign Up"))),o=r.a.createElement("div",null,r.a.createElement("input",{type:"email",placeholder:"Email"}),r.a.createElement("input",{type:"password",placeholder:"Password"}),r.a.createElement("a",{href:"#"},"Forgot your password?"),r.a.createElement("button",null,"Sign In")),i=r.a.createElement("div",{className:"social-container"},r.a.createElement("a",{href:"#",className:"social"},r.a.createElement("i",{className:"fa fa-fw fa-facebook"})),r.a.createElement("a",{href:"#",className:"social"},r.a.createElement("i",{className:"fa fa-fw fa-google"})),r.a.createElement("a",{href:"#",className:"social"},r.a.createElement("i",{className:"fa fa-fw fa-linkedin"})));var s=function(e){var a="SigninBit"===e.name?o:c;return function(t){return r.a.createElement(e,Object.assign({formFields:a,socialIcons:i},t))}};var m=s((function(e){var a=e.formFields,t=e.socialIcons;return r.a.createElement("div",{className:"form-container sign-up-container"},r.a.createElement("form",{action:"#"},r.a.createElement("h1",null,"Create Account"),t,r.a.createElement("span",null,"or use your email for registration"),a))}));var u=s((function(e){var a=e.formFields,t=e.socialIcons;return r.a.createElement("div",{className:"form-container sign-in-container"},r.a.createElement("form",{action:"#"},r.a.createElement("h1",null,"Sign in"),t,r.a.createElement("span",null,"or use your account"),a))}));var E=function(e){var a=e.handleSignInUp;return r.a.createElement("div",{className:"overlay-container"},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"overlay-panel overlay-left"},r.a.createElement("h1",null,"Good to see you!"),r.a.createElement("p",null,"Login with Facebook, Google LinkedIn or with your registered email."),r.a.createElement("button",{className:"ghost",name:"signin",onClick:a},"Sign In")),r.a.createElement("div",{className:"overlay-panel overlay-right"},r.a.createElement("h1",null,"Hello, Deepak!"),r.a.createElement("p",null,"Enter your name and email address to get started"),r.a.createElement("button",{className:"ghost",name:"signup",onClick:a},"Sign Up"))))};var p=function(){var e=Object(l.useState)(""),a=Object(n.a)(e,2),t=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Mytidbit overlay signin signup"),r.a.createElement("div",{className:"container ".concat(t||"")},r.a.createElement(m,null),r.a.createElement(u,null),r.a.createElement(E,{handleSignInUp:function(e){return console.log(e.target.name),"signup"===e.target.name?c("right-panel-active"):c("")}})))};a.default=function(){var e=r.a.createRef(),a=Object(l.useState)("none"),t=Object(n.a)(a,2),c=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement("button",{style:{position:"relative",bottom:"270px",left:"570px",cursor:"pointer"},onClick:function(){o("block")}},"Login"),r.a.createElement("div",{className:"overlay-effect",ref:e,style:{display:"".concat(c)}},r.a.createElement("div",{style:{display:"".concat(c)},className:"close-signinup",name:"none",onClick:function(){o("none")}},"X"),r.a.createElement(p,null)))}},77:function(e,a,t){}}]);
//# sourceMappingURL=17.281d8857.chunk.js.map