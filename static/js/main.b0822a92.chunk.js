(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var _=a(0),s=a.n(_),i=a(1),l=a.n(i),r=a(3),n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}l.a.render(s.a.createElement(r.a,null),document.getElementById("js-calculator")),function(t){if("serviceWorker"in navigator){if(new URL("/javascript-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/javascript-calculator","/service-worker.js");n?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(a){var _=a.headers.get("content-type");404===a.status||null!=_&&-1===_.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):c(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):c(e,t)}))}}()},3:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_webapps_react_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_webapps_react_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_webapps_react_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),C_webapps_react_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),C_webapps_react_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),react_dom__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(14),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),endOperator=/[x+/-]$/,multiDivide=/[x/]/,plusMinus=/[+-]/,maxDigits=19,initialState={displayInput:0,displayStore:"0",stateDecimal:!1,firstValueZero:!0,firstValue:!0,stateOperator:!1,stateEquals:!1,formula:""},CalcPad=function(_React$Component){function CalcPad(t){var e;return Object(C_webapps_react_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalcPad),(e=Object(C_webapps_react_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_webapps_react_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(CalcPad).call(this,t))).state=initialState,e}return Object(C_webapps_react_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(CalcPad,_React$Component),Object(C_webapps_react_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalcPad,[{key:"handleNumberClick",value:function(t){"0"==this.state.displayInput?this.setState({displayInput:t.target.value}):!0===this.state.stateOperator&&!1===this.state.stateEquals?this.setState({displayStore:this.state.displayStore+this.state.displayInput,displayInput:t.target.value,stateOperator:!1,stateDecimal:!1}):!1===this.state.stateOperator&&!0===this.state.stateEquals?this.setState({displayStore:this.state.displayStore,displayInput:t.target.value,stateOperator:!1,stateDecimal:!1,stateEquals:!1,firstValue:!1}):this.state.displayInput.length<maxDigits&&this.setState({displayInput:this.state.displayInput+t.target.value})}},{key:"deciClick",value:function(t){this.state.stateOperator?this.setState({displayStore:this.state.displayStore+this.state.displayInput,displayInput:"0.",stateDecimal:!0,stateOperator:!1}):!1===this.state.stateDecimal&&this.setState({displayInput:this.state.displayInput+t.target.value,stateDecimal:!0})}},{key:"handleOperatorClick",value:function(t){"0"==this.state.displayStore&&(console.log("Hello You"),this.state.displayStore=""),!1===this.state.stateOperator&&!1===this.state.stateEquals&&!0===this.state.firstValue?this.setState({displayStore:this.state.displayStore+this.state.displayInput,displayInput:t.target.value,stateDecimal:!1,stateOperator:!0,stateEquals:!1}):!1===this.state.stateOperator&&!0===this.state.stateEquals&&!1===this.state.firstValue?this.setState({displayStore:this.state.displayInput,displayInput:t.target.value,stateDecimal:!1,stateOperator:!0,stateEquals:!1,firstValue:!0}):!1===this.state.stateOperator&&!1===this.state.stateEquals&&!1===this.state.firstValue?this.setState({displayStore:this.state.displayInput,displayInput:t.target.value,stateDecimal:!1,stateOperator:!0,stateEquals:!1,firstValue:!0}):multiDivide.test(this.state.displayInput)&&plusMinus.test(t.target.value)&&this.state.displayInput.length<=1?this.setState({displayInput:this.state.displayInput+t.target.value,stateDecimal:!1,stateOperator:!0}):this.setState({displayInput:t.target.value,stateDecimal:!1,stateOperator:!0})}},{key:"handleEqualsClick",value:function handleEqualsClick(){var formula=this.state.displayStore+this.state.displayInput;endOperator.test(formula)&&(formula=formula.slice(0,-1)),formula=formula.replace(/x/g,"*");var result=eval(formula);this.setState({displayStore:result,displayInput:result,firstValue:!1,stateDecimal:!1,stateOperator:!1,stateEquals:!0})}},{key:"clearClick",value:function(){this.setState(initialState)}},{key:"render",value:function(){var t=this;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",{id:"title"},"JavaScript Calculator"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"displayComplete"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{id:"displayFormula"},this.state.displayStore),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{id:"display"},this.state.displayInput)),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"numPad"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"zero",className:"btn btn-primary",onClick:this.handleNumberClick.bind(this),value:"0"},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"one",className:"btn btn-primary",onClick:this.handleNumberClick.bind(this),value:"1"},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"two",className:"btn btn-primary",onClick:this.handleNumberClick.bind(this),value:"2"},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"three",className:"btn btn-primary",onClick:this.handleNumberClick.bind(this),value:"3"},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"four",className:"btn btn-primary",onClick:this.handleNumberClick.bind(this),value:"4"},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"five",className:"btn btn-primary",onClick:this.handleNumberClick.bind(this),value:"5"},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"six",className:"btn btn-primary",onClick:this.handleNumberClick.bind(this),value:"6"},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"seven",className:"btn btn-primary",onClick:this.handleNumberClick.bind(this),value:"7"},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"eight",className:"btn btn-primary",onClick:this.handleNumberClick.bind(this),value:"8"},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"nine",className:"btn btn-primary",onClick:this.handleNumberClick.bind(this),value:"9"},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"add",className:"btn btn-warning",onClick:this.handleOperatorClick.bind(this),value:"+"},"+"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"subtract",className:"btn btn-warning",onClick:this.handleOperatorClick.bind(this),value:"-"},"-"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"multiply",className:"btn btn-warning",onClick:this.handleOperatorClick.bind(this),value:"x"},"*"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"divide",className:"btn btn-warning",onClick:this.handleOperatorClick.bind(this),value:"/"},"/"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"equals",className:"btn btn-warning",onClick:!0===this.state.decimal?this.handleEqualsClick.bind(this):"",value:"="},"="),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"decimal",className:"btn btn-warning",onClick:this.deciClick.bind(this),value:"."},"."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"clear",className:"btn btn-warning",onClick:function(){return t.clearClick()}},"CLEAR")))}}]),CalcPad}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcPad,null),document.getElementById("js-calculator")),__webpack_exports__.a=CalcPad},9:function(t,e,a){t.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.b0822a92.chunk.js.map