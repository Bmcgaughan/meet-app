(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(t,e,n){t.exports=n(65)},34:function(t,e,n){},36:function(t,e,n){},60:function(t,e,n){},63:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(24),i=n.n(o),c=(n(34),n(2)),s=n(3),u=n(5),l=n(4),h=n(6),f=(n(36),function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).handleDetailClick=function(){t.setState({showDetails:!t.state.showDetails})},t.state={showDetails:!1},t}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.event;return a.a.createElement("div",{className:"event"},a.a.createElement("h1",{className:"summary"},t.summary),a.a.createElement("p",{className:"start-time"},t.start.dateTime),a.a.createElement("p",{className:"location"},t.location),this.state.showDetails&&a.a.createElement("p",{className:"description"},t.description),a.a.createElement("button",{className:"show-button",onClick:this.handleDetailClick},"Show Details"))}}]),e}(r.Component)),p=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.events;return a.a.createElement("ul",{className:"EventList"},t.map(function(t){return a.a.createElement("li",{key:t.id},a.a.createElement(f,{event:t}))}))}}]),e}(r.Component),d=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).handleInputChanged=function(e){var n=e.target.value,r=t.props.locations.filter(function(t){return t.toUpperCase().indexOf(n.toUpperCase())>-1});t.setState({query:n,suggestions:r})},t.handleItemClicked=function(e){t.setState({query:e,showSuggestions:!1}),t.props.updateEvents(e)},t.state={query:"",suggestions:[],showSuggestions:void 0},t}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"CitySearch"},a.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){t.setState({showSuggestions:!0})}}),a.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(e){return a.a.createElement("li",{key:e,onClick:function(){return t.handleItemClicked(e)}},e)}),a.a.createElement("li",{onClick:function(){return t.handleItemClicked("all")},key:"all"},a.a.createElement("b",null,"See all Cities"))))}}]),e}(r.Component),m=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).handleInputChanged=function(e){var n=e.target.value;t.setState({numberOfEvents:n})},t.state={numberOfEvents:32},t}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"numberOfEvents"},a.a.createElement("input",{className:"event-input",type:"number",value:this.state.numberOfEvents,onChange:this.handleInputChanged}))}}]),e}(r.Component),v=n(25),g=n(8),y=n(13),w=n.n(y),b=n(10),k=n.n(b),E=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}];function x(){x=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=s;var l={};function h(){}function f(){}function p(){}var d={};c(d,a,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(O([])));v&&v!==e&&n.call(v,a)&&(d=v);var g=p.prototype=h.prototype=Object.create(d);function y(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var r;this._invoke=function(a,o){function i(){return new e(function(r,i){!function r(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(s.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),c(w.prototype,o,function(){return this}),t.AsyncIterator=w,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new w(s(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}var j=function(){var t=Object(g.a)(x().mark(function t(e){var n;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(e)).then(function(t){return t.json()}).catch(function(t){return t.json()});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),O=function(){if(window.history.pushState&&window.location.pahtname){var t=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",t)}else{var e=window.location.protocol+"//"+window.location.host;window.history.pushState("","",e)}},S=function(){var t=Object(g.a)(x().mark(function t(e){var n,r,a;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=encodeURIComponent(e),t.next=4,fetch("https://k3676qtod7.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then(function(t){return t.json()}).catch(function(t){return t});case 4:return r=t.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),t.abrupt("return",a);case 10:t.prev=10,t.t0=t.catch(0),t.t0.json();case 13:case"end":return t.stop()}},t,null,[[0,10]])}));return function(e){return t.apply(this,arguments)}}(),L=function(t){var e=t.map(function(t){return t.location});return Object(v.a)(new Set(e))},T=function(){var t=Object(g.a)(x().mark(function t(){var e,n,r,a;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(k.a.start(),!window.location.href.startsWith("http://localhost")){t.next=4;break}return k.a.done(),t.abrupt("return",E);case 4:return t.next=6,C();case 6:if(!(e=t.sent)){t.next=16;break}return O(),n="https://k3676qtod7.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+e,t.next=12,w.a.get(n);case 12:return(r=t.sent).data&&(a=L(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(a))),k.a.done(),t.abrupt("return",r.data.events);case 16:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(g.a)(x().mark(function t(){var e,n,r,a,o,i;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("access_token"),t.t0=e,!t.t0){t.next=6;break}return t.next=5,j(e);case 5:t.t0=t.sent;case 6:if(n=t.t0,e&&!n.error){t.next=21;break}return t.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),t.next=13,r.get("code");case 13:if(a=t.sent){t.next=20;break}return t.next=17,w.a.get("https://k3676qtod7.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=t.sent,i=o.data.authURL,t.abrupt("return",window.location.href=i);case 20:return t.abrupt("return",a&&S(a));case 21:return t.abrupt("return",e);case 22:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),N=(n(60),n(63),function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).state={events:[],locations:[]},n.updateEvents=function(t){T().then(function(e){var r="all"===t?e:e.filter(function(e){return e.location===t});n.setState({events:r})})},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.mounted=!0,T().then(function(e){t.mounted&&t.setState({events:e,locations:L(e)})})}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(d,{locations:this.state.locations,updateEvents:this.updateEvents}),a.a.createElement(p,{events:this.state.events}),a.a.createElement(m,null))}}]),e}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,66)).then(function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),o(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(N,null))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){console.error(t.message)}),Z()}},[[26,3,2]]]);
//# sourceMappingURL=main.695ff307.chunk.js.map