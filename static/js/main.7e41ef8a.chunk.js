(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){},163:function(e,t,n){e.exports=n.p+"static/media/wm_back.829ef3c3.svg"},164:function(e,t,n){e.exports=n.p+"static/media/arrow-down.3dabedf0.svg"},165:function(e,t,n){e.exports=n.p+"static/media/arrow-up.151d81e1.svg"},178:function(e,t,n){e.exports=n(333)},184:function(e,t,n){},187:function(e,t,n){},326:function(e,t,n){},329:function(e,t,n){},333:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(161),i=n.n(o),c=(n(184),n(51)),s=n(23),u=n(29),l=n(26),h=n(24),f=n(25),p=(n(115),n(362)),m=n(367),d=n(368),v=n(331),g=n(332),y=n(360),w=n(361),b=n(17),E=(n(187),n(163)),x=n.n(E);var k=function(e){var t=Object(r.useState)(!1),n=Object(b.a)(t,2),o=n[0],i=n[1];return Object(r.useEffect)(function(){setTimeout(function(){i(!0)},1e3)},[]),e.showWelcomeScreen?a.a.createElement("div",{className:"WelcomeScreen"},a.a.createElement("img",{className:"welcome-background",alt:"",src:x.a}),a.a.createElement("div",{className:"welcome-content-wrapper ".concat(o?"fadeIn":"fadeOut")},a.a.createElement("h1",null,"Welcome to the Meet app"),a.a.createElement("h4",null,"Log in to see upcoming events around the world for full-stack developers"),a.a.createElement("div",{className:"button_cont",align:"center"},a.a.createElement("div",{className:"google-btn"},a.a.createElement("div",{className:"google-icon-wrapper"},a.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\no.svg",alt:"Google sign-in"})),a.a.createElement("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text"},a.a.createElement("b",null,"Sign in with google")))),a.a.createElement("a",{className:"priv-link",href:"https://bmcgaughan.github.io/meet-app/privacy.html",rel:"nofollow noopener"},"Privacy policy"))):null},O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).handleDetailClick=function(){e.setState({showDetails:!e.state.showDetails})},e.state={showDetails:!1},e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"formatDate",value:function(e){return new Date(e).toLocaleString()}},{key:"render",value:function(){var e=this.props.event,t=this.formatDate(e.start.dateTime);return a.a.createElement("div",{className:"event"},a.a.createElement("h1",{className:"summary"},e.summary),a.a.createElement("p",{className:"start-time"},t),a.a.createElement("p",{className:"location"},e.location),this.state.showDetails&&a.a.createElement("p",{className:"description"},e.description),a.a.createElement("button",{className:"show-button",onClick:this.handleDetailClick},this.state.showDetails?"Hide Details":"Show Details"))}}]),t}(r.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.events;return a.a.createElement("ul",{className:"EventList"},e.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(O,{event:e}))}))}}]),t}(r.Component),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Alert ".concat(this.props.alertName)},a.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(r.Component),L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).color="blue",n}return Object(f.a)(t,e),t}(S),N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).color="red",n}return Object(f.a)(t,e),t}(S),T=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).handleInputChanged=function(t){var n=t.target.value,r=e.props.locations.filter(function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1});if(0!==r.length)return e.setState({query:n,suggestions:r,infoText:""});e.setState({query:n,infoText:"No city with that name"})},e.handleFocus=function(){e.setState({showSuggestions:!e.state.showSuggestions})},e.handleItemClicked=function(t){console.log(t),e.setState({query:t,infoText:"",showSuggestions:!1}),e.props.updateEvents(t,null)},e.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.suggestions.length>0?this.state.suggestions:this.props.locations;return a.a.createElement("div",{className:"CitySearch"},a.a.createElement("p",null,"Search for a city:"),a.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){return e.handleFocus()},ref:this.clickRef}),a.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},t.map(function(t){return a.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)}),a.a.createElement("li",{onClick:function(){return e.handleItemClicked("all")},key:"all"},a.a.createElement("b",null,"See all Cities"))),a.a.createElement(L,{alertName:"info-alert",text:this.state.infoText}))}}]),t}(r.Component),_=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).handleInputChanged=function(t){var n=t.target.value;n>32||n<1||!t.target.value?e.setState({numberOfEvents:n,errorText:"Must be between 1 and 32"}):(e.setState({numberOfEvents:parseInt(n),errorText:""}),e.props.updateEvents("pass",n))},e.state={numberOfEvents:32,errorText:""},e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"numberOfEvents"},a.a.createElement("p",null,"Number of Events to Show:"),a.a.createElement("div",{className:"event-num-wrapper"},a.a.createElement("input",{className:"event-input",type:"number",value:this.state.numberOfEvents,onChange:this.handleInputChanged})),a.a.createElement(N,{alertName:"error-alert",text:this.state.errorText}))}}]),t}(r.Component),C=n(164),I=n.n(C),q=n(165),D=n.n(q);var F=function(e){var t=Object(r.useState)(""),n=Object(b.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(!1),s=Object(b.a)(c,2),u=s[0],l=s[1];return a.a.createElement("div",{className:"top-bar-wrapper ".concat(u?"expand":"")},a.a.createElement("div",{className:"top-stick"},e.offlineText&&a.a.createElement(L,{alertName:"offline-alert",text:e.offlineText}),u?null:a.a.createElement("div",{className:"top-info"},a.a.createElement("div",{className:"top-row"},a.a.createElement("div",{className:"top-col"},a.a.createElement("div",{className:"top-query-val"},e.query?"all"===e.query?"Searching All Cities":e.query:"Searching All Cities"),a.a.createElement("div",{className:"top-event-count"},"".concat(e.eventDisplay," of ").concat(e.eventCount," Events"))),a.a.createElement("div",{className:"top-title"},"Meet App"))),a.a.createElement("div",{className:"top-bar ".concat(o)},a.a.createElement(T,{locations:e.locations,updateEvents:e.updateEvents}),a.a.createElement(_,{updateEvents:e.updateEvents})),a.a.createElement("div",{className:"input-expand",onClick:function(){return l(!u),void i(u?"":"top-bar-show")}},a.a.createElement("img",{src:u?D.a:I.a,alt:"expander arrow"}))))},Z=n(371),W=n(152),A=n(75),G=function(e){var t=e.events,n=Object(r.useState)([]),o=Object(b.a)(n,2),i=o[0],c=o[1],s=["#0088FE","#00C49F","#FFBB28","#FF8042","#6a0dad"];Object(r.useEffect)(function(){console.log("fired"),c(function(){return u()})},[t]);var u=function(){return["React","Angular","JavaScript","Node","jQuery"].map(function(e){var n=t.filter(function(t){return t.summary.includes(e)}).length;return{name:e,value:n}})};return a.a.createElement(p.a,{height:400,width:"100%"},a.a.createElement(Z.a,{height:400,width:400},a.a.createElement(W.a,{data:i,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;if(n>0)return"".concat(t," ").concat((100*n).toFixed(0),"%")}},i.map(function(e,t){return a.a.createElement(A.a,{key:"cell-".concat(t),fill:s[t%s.length]})}))))},M=n(339),P=n(153),R=n.n(P),B=n(78),J=n.n(B),U=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}];function Y(){Y=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var l={};function h(){}function f(){}function p(){}var m={};c(m,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==t&&n.call(v,a)&&(m=v);var g=p.prototype=h.prototype=Object.create(m);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var s=u(e[a],e,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){l.value=e,i(l)},function(e){return r("throw",e,i,c)})}c(s.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(w.prototype),c(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}var z=function(){var e=Object(c.a)(Y().mark(function e(t){var n;return Y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(e){return e.json()}).catch(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(c.a)(Y().mark(function e(t){var n,r,a;return Y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=encodeURIComponent(t),e.next=4,fetch("https://k3676qtod7.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then(function(e){return e.json()}).catch(function(e){return e});case 4:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),e.t0.json();case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),K=function(e){var t=e.map(function(e){return e.location});return Object(M.a)(new Set(t))},V=function(){var e=Object(c.a)(Y().mark(function e(){var t,n,r,a,o;return Y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(J.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return J.a.done(),e.abrupt("return",U);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),J.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,X();case 10:if(!(n=e.sent)){e.next=20;break}return Q(),r="https://k3676qtod7.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,R.a.get(r);case 16:return(a=e.sent).data&&(o=K(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),J.a.done(),e.abrupt("return",a.data.events);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(c.a)(Y().mark(function e(){var t,n,r,a,o,i;return Y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,R.a.get("https://k3676qtod7.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",a&&H(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else{var t=window.location.protocol+"//"+window.location.host;window.history.pushState("","",t)}};n(326),n(329);function $(){$=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var l={};function h(){}function f(){}function p(){}var m={};c(m,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==t&&n.call(v,a)&&(m=v);var g=p.prototype=h.prototype=Object.create(m);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var s=u(e[a],e,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){l.value=e,i(l)},function(e){return r("throw",e,i,c)})}c(s.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(w.prototype),c(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}var ee=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={events:[],locations:[],numberOfEvents:32,availableEvents:0,query:"",showWelcomeScreen:void 0,offlineText:""},n.updateEvents=function(e,t){t?(t=parseInt(t),n.setState({numberOfEvents:t})):t=n.state.numberOfEvents,"pass"===e&&(e=n.state.query),e!==n.state.query&&n.setState({query:e}),V().then(function(r){var a="all"===e?r:r.filter(function(t){return t.location===e});n.setState({availableEvents:a.length}),n.setState({events:a.slice(0,t)})})},n.getData=function(){var e=n.state,t=e.locations,r=e.events;return t.map(function(e){var t=r.filter(function(t){return t.location===e}).length;return{city:e.split(", ").shift(),number:t}})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)($().mark(function e(){var t,n,r,a,o=this;return $().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,z(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,r=new URLSearchParams(window.location.search),a=r.get("code"),this.setState({showWelcomeScreen:!(a||n)}),(a||n)&&this.mounted&&V().then(function(e){o.mounted&&o.setState({events:e,locations:K(e),availableEvents:e.length})}),navigator.onLine?this.setState({offlineText:""}):this.setState({offlineText:"You are offline - info may not be up to date"});case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?a.a.createElement("div",{className:"App"}):a.a.createElement("div",{className:"App"},this.state.showWelcomeScreen?a.a.createElement(k,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){X()}}):a.a.createElement("div",{className:"main-wrapper"},a.a.createElement(F,{locations:this.state.locations,updateEvents:this.updateEvents,query:this.state.query,numEvents:this.state.numberOfEvents,eventCount:this.state.availableEvents,eventDisplay:this.state.events.length,offlineText:this.state.offlineText}),a.a.createElement("div",{className:"chart-wrapper"},a.a.createElement("div",{className:"genre-chart"},a.a.createElement(G,{events:this.state.events})),a.a.createElement("div",{className:"scatter-chart"},a.a.createElement(p.a,{height:400,width:"100%"},a.a.createElement(m.a,{width:800,height:400,margin:{top:60,right:20,bottom:20,left:0}},a.a.createElement(d.a,null),a.a.createElement(v.a,{type:"category",dataKey:"city",name:"city"}),a.a.createElement(g.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),a.a.createElement(y.a,{cursor:{strokeDasharray:"3 3"}}),a.a.createElement(w.a,{name:"Events by City",data:this.getData(),fill:"#fff"}))))),a.a.createElement("div",{className:"event-list-wrapper"},a.a.createElement(j,{events:this.state.events}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,369)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ee,null))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)}),te()}},[[178,3,2]]]);
//# sourceMappingURL=main.7e41ef8a.chunk.js.map