(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={ClockMain:"ClockMain_ClockMain__3RQCT"}},19:function(e,t,n){},23:function(e,t,n){e.exports=n(34)},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=n(6),a=n.n(s),o=n(4),l=n(1),c=n(15),m=n(16),u=n(17),S=n(21),T=n(18),E=n(5),g=n(22),I=n(12),d=n.n(I),f=n(19),p=n.n(f),k=Object(l.b)(null,function(e){return{decrementClickedHandler:function(t){return e(function(e){switch(!0){case"break-length"===e:return{type:"DECREMENT_CLICKED",lengthName:"break"};case"session-length"===e:return{type:"DECREMENT_CLICKED",lengthName:"session"};default:console.log("decrementClickedHandler default triggered")}}(t))},incrementClickedHandler:function(t){return e(function(e){switch(!0){case"break-length"===e:return{type:"INCREMENT_CLICKED",lengthName:"break"};case"session-length"===e:return{type:"INCREMENT_CLICKED",lengthName:"session"};default:console.log("incrementClickedHandler default triggered")}}(t))}}})(function(e){return i.a.createElement("div",{style:e.postion},i.a.createElement("h2",{id:e.sectionID,className:p.a.h3},e.sectionType),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("button",{id:e.decrementID,onClick:function(){return e.decrementClickedHandler(e.lengthID)}},"\u21ca"),i.a.createElement("h3",{id:e.lengthID},e.length),i.a.createElement("button",{id:e.incrementID,onClick:function(){return e.incrementClickedHandler(e.lengthID)}},"\u21c8")))}),h=n(7),b=n.n(h),R=Object(l.b)(function(e){return{breakTimeLeftInS:e.breakTimeLeftInS,sessionTimeLeftInS:e.sessionTimeLeftInS,timerSessionDisplaying:e.timerSessionDisplaying,displayText:e.displayText,timerSession:e.timerSession,timerBreak:e.timerBreak}},function(e){return{timerReachesZeroHandlerForTimer:function(t){return e(function(e){switch(e){case"Session":return console.log("Session timerReachesZeroHandlerForTimer"),function(e){var t=setInterval(function(){return e({type:"BREAK_TIMER_TICK"})},1e3);e({type:"BREAK_TIMER_START",timerBreak:t})};case"Break":return console.log("Break timerReachesZeroHandlerForTimer"),function(e){var t=setInterval(function(){return e({type:"SESSION_TIMER_TICK"})},1e3);e({type:"SESSION_TIMER_START",timerSession:t})};default:console.log("timerReachesZeroHandlerForTimer default triggered")}}(t))},timerReachesZeroHandlerForTimeLeft:function(t){return e(function(e){switch(e){case"Session":return console.log("Session timerReachesZeroHandlerForTimeLeft"),{type:"SESSION_TIMER_REACHES_ZERO"};case"Break":return console.log("Break timerReachesZeroHandlerForTimeLeft"),{type:"BREAK_TIMER_REACHES_ZERO"};default:console.log("timerReachesZeroHandlerForTimeLeft default triggered")}}(t))}}})(function(e){var t=function(e){var t=Math.floor(e/60),n=e-60*t;return(1===t.toString().length?"0"+t.toString():t.toString())+":"+(1===n.toString().length?"0"+n.toString():n.toString())},n=t(e.sessionTimeLeftInS);if(!1===e.timerSessionDisplaying&&(n=t(e.breakTimeLeftInS)),"00:01"===n&&(console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  "+e.displayText+"  "+n),e.timerReachesZeroHandlerForTimeLeft(e.displayText)),"00:00"===n){switch(document.getElementById("beep").play(),e.displayText){case"Session":case"Break":clearInterval(e.timerSession),clearInterval(e.timerBreak);break;default:console.log("startStopTimerClearInterval default triggered")}setTimeout(function(){return e.timerReachesZeroHandlerForTimer(e.displayText)},1e3)}var r=(new Date).getTime();return console.log(e.displayText+"    "+n+"    "+r),i.a.createElement("div",{className:b.a.TimerSection},i.a.createElement("h3",{id:"timer-label",className:b.a.h3},e.displayText),i.a.createElement("p",{id:"time-left",className:b.a.p},n),i.a.createElement("audio",{id:"beep",src:"http://soundbible.com/mp3/service-bell_daniel_simion.mp3",autoPlay:!1}))}),_=n(8),L=n.n(_),C=Object(l.b)(function(e){return{displayText:e.displayText,timerRunning:e.timerRunning,timerSession:e.timerSession,timerBreak:e.timerBreak}},function(e){return{startStopClickedHandler:function(t,n){return e(function(e,t){switch(e){case"Session":switch(t){case!1:return function(e){var t=setInterval(function(){return e({type:"SESSION_TIMER_TICK"})},1e3);e({type:"SESSION_TIMER_START",timerSession:t})};case!0:return function(e){e({type:"SESSION_TIMER_STOP"})};default:console.log("startStopClickedHandler Session default triggered")}case"Break":switch(t){case!1:return function(e){var t=setInterval(function(){return e({type:"BREAK_TIMER_TICK"})},1e3);e({type:"BREAK_TIMER_START",timerBreak:t})};case!0:return function(e){e({type:"BREAK_TIMER_STOP"})};default:console.log("startStopClickedHandler Break default triggered")}default:console.log("startStopClickedHandler default triggered")}}(t,n))},resetClickedHandler:function(){return e({type:"RESET_CLICKED"})}}})(function(e){var t=function(t){switch(t){case"Session":case"Break":clearInterval(e.timerSession),clearInterval(e.timerBreak);break;default:console.log("startStopTimerClearInterval default triggered")}};return i.a.createElement("div",{className:L.a.TimerControls},i.a.createElement("button",{id:"start_stop",className:L.a.p,onClick:function(){e.startStopClickedHandler(e.displayText,e.timerRunning),e.timerRunning&&t(e.displayText)}},"start_stop"),i.a.createElement("button",{id:"reset",className:L.a.p,onClick:function(){t(e.displayText),document.getElementById("beep").pause(),document.getElementById("beep").currentTime=0,e.resetClickedHandler()}},"reset"))}),y=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(S.a)(this,Object(T.a)(t).call(this,e))).sessionSetStateTimer=n.sessionSetStateTimer.bind(Object(E.a)(n)),n.breakSetStateTimer=n.breakSetStateTimer.bind(Object(E.a)(n)),n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"sessionSetStateTimer",value:function(){var e=this;this.setState(function(){return{timerSessionDisplaying:!0,displayText:"Session"}});var t=setInterval(function(){return e.setState(function(){return 0===e.state.sessionTimeLeftInS?(clearInterval(e.state.timerSession),document.getElementById("beep").play(),e.breakSetStateTimer(),{sessionTimeLeftInS:0,breakTimeLeftInS:60*e.state.breakLength}):{sessionTimeLeftInS:e.state.sessionTimeLeftInS-1}})},1e3);this.setState({timerSession:t})}},{key:"breakSetStateTimer",value:function(){var e=this;this.setState(function(){return{timerSessionDisplaying:!1,displayText:"Break"}});var t=setInterval(function(){return e.setState(function(){return 0===e.state.breakTimeLeftInS?(clearInterval(e.state.timerBreak),document.getElementById("beep").play(),e.sessionSetStateTimer(),{breakTimeLeftInS:0,sessionTimeLeftInS:60*e.state.sessionLength}):{breakTimeLeftInS:e.state.breakTimeLeftInS-1}})},1e3);this.setState({timerBreak:t})}},{key:"render",value:function(){return i.a.createElement("div",{className:d.a.ClockMain},i.a.createElement("h1",{className:d.a.h1},"Pomodoro Clock"),i.a.createElement(k,{sectionType:"Break Length",sectionID:"break-label",decrementID:"break-decrement",incrementID:"break-increment",lengthID:"break-length",postion:{display:"inline-block"},length:this.props.breakLength}),i.a.createElement(k,{sectionType:"Session Length",sectionID:"session-label",decrementID:"session-decrement",incrementID:"session-increment",lengthID:"session-length",postion:{display:"inline-block",marginLeft:"50px"},length:this.props.sessionLength}),i.a.createElement(R,null),i.a.createElement(C,null))}}]),t}(r.Component),O=Object(l.b)(function(e){return{breakLength:e.breakLength,sessionLength:e.sessionLength,breakTimeLeftInS:e.breakTimeLeftInS,sessionTimeLeftInS:e.sessionTimeLeftInS}})(y);var v=function(){return i.a.createElement("div",null,i.a.createElement(O,null))},D=n(20);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach(function(t){Object(D.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var M={breakLength:5,sessionLength:25,breakTimeLeftInS:300,sessionTimeLeftInS:1500,timerRunning:!1,timerSession:null,timerBreak:null,timerSessionDisplaying:!0,displayText:"Session"},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DECREMENT_CLICKED":switch(t.lengthName){case"break":return console.log("break DECREMENT_CLICKED"),1===e.breakLength?N({},e,{breakLength:1,breakTimeLeftInS:60}):N({},e,{breakLength:e.breakLength-1,breakTimeLeftInS:60*(e.breakLength-1)});case"session":return console.log("session DECREMENT_CLICKED"),1===e.sessionLength?N({},e,{sessionLength:1,sessionTimeLeftInS:60}):N({},e,{sessionLength:e.sessionLength-1,sessionTimeLeftInS:60*(e.sessionLength-1)});default:return e}case"INCREMENT_CLICKED":switch(t.lengthName){case"break":return console.log("break INCREMENT_CLICKED"),60===e.breakLength?N({},e,{breakLength:60,breakTimeLeftInS:3600}):N({},e,{breakLength:e.breakLength+1,breakTimeLeftInS:60*(e.breakLength+1)});case"session":return console.log("session INCREMENT_CLICKED"),60===e.sessionLength?N({},e,{sessionLength:60,sessionTimeLeftInS:3600}):N({},e,{sessionLength:e.sessionLength+1,sessionTimeLeftInS:60*(e.sessionLength+1)});default:return e}case"RESET_CLICKED":return console.log("RESET_CLICKED"),N({},e,{breakLength:5,sessionLength:25,breakTimeLeftInS:300,sessionTimeLeftInS:1500,timerRunning:!1,timerSession:null,timerBreak:null,timerSessionDisplaying:!0,displayText:"Session"});case"SESSION_TIMER_START":return console.log("SESSION_TIMER_START"),N({},e,{timerRunning:!0,timerSession:t.timerSession,timerBreak:null,timerSessionDisplaying:!0,displayText:"Session"});case"SESSION_TIMER_TICK":return console.log("SESSION_TIMER_TICK"),N({},e,{sessionTimeLeftInS:e.sessionTimeLeftInS-1});case"SESSION_TIMER_STOP":return console.log("SESSION_TIMER_STOP"),N({},e,{timerRunning:!1});case"SESSION_TIMER_REACHES_ZERO":return console.log("SESSION_TIMER_REACHES_ZERO"),N({},e,{breakTimeLeftInS:60*e.breakLength});case"BREAK_TIMER_START":return console.log("BREAK_TIMER_START"),N({},e,{timerRunning:!0,timerBreak:t.timerBreak,timerSession:null,timerSessionDisplaying:!1,displayText:"Break"});case"BREAK_TIMER_TICK":return console.log("BREAK_TIMER_TICK"),N({},e,{breakTimeLeftInS:e.breakTimeLeftInS-1});case"BREAK_TIMER_STOP":return console.log("BREAK_TIMER_STOP"),N({},e,{timerRunning:!1});case"BREAK_TIMER_REACHES_ZERO":return console.log("BREAK_TIMER_REACHES_ZERO"),N({},e,{sessionTimeLeftInS:60*e.sessionLength});default:return e}},A=(n(33),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c),H=Object(o.d)(K,A(Object(o.a)(c.a)));a.a.render(i.a.createElement(l.a,{store:H},i.a.createElement(v,null)),document.getElementById("root"))},7:function(e,t,n){e.exports={TimerSection:"TimerSection_TimerSection__1Zv6z"}},8:function(e,t,n){e.exports={TimerControls:"TimerControls_TimerControls__17Mpj"}}},[[23,1,2]]]);
//# sourceMappingURL=main.4cccf0c1.chunk.js.map