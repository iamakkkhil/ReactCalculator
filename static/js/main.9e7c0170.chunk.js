(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_iamakkkhil_Desktop_Projects_React_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_App_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_App_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);function App(){for(var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(_home_iamakkkhil_Desktop_Projects_React_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),calc=_useState2[0],setCalc=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState4=Object(_home_iamakkkhil_Desktop_Projects_React_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],ops=["/","*","+","-","."],updateCalc=function updateCalc(value){ops.includes(value)&&""===calc||ops.includes(value)&&ops.includes(calc.slice(-1))||(ops.includes(value)||setResult(eval(calc+value)),setCalc(calc+value))},Calculate=function Calculate(){setCalc(eval(calc).toString())},deleteLast=function(){if(""!==calc){var _=calc.slice(0,-1);setCalc(_)}},clearAll=function(){setCalc(""),setResult("")},digitsButton=[],_loop=function(_){digitsButton.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc(_.toString())},id:_,children:_}))},i=1;i<10;i++)_loop(i);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"App",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"output",children:[result?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:["(",result,")\xa0"]}):""," ",calc||0]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"operators",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:clearAll,children:"A/C"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("/")},children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("*")},children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("-")},children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("+")},children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:deleteLast,children:"DEL"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"digits",children:[digitsButton,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc(".")},children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("0")},children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:Calculate,id:"equalto",children:"="})]})]})})}__webpack_exports__.a=App},,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var c=t(1),a=t.n(c),r=t(4),s=t.n(r),n=(t(10),t(5)),u=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;t(_),c(_),a(_),r(_),s(_)}))},l=t(0);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(n.a,{})}),document.getElementById("root")),u()}],[[13,1,2]]]);
//# sourceMappingURL=main.9e7c0170.chunk.js.map