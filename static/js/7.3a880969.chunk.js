(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{206:function(t,r,e){},214:function(t,r,e){"use strict";e.r(r);var n=e(4),o=e(2),a=e(6),c=e(1),i=e(31),u=e(9),s=e(27),l=(e(206),e(0)),h=function(t){var r=t.comics,e=r.title,n=r.description,o=r.pageCount,c=r.thumbnail,i=r.language,u=r.price;return Object(l.jsxs)("div",{className:"single-comic",children:[Object(l.jsx)("img",{src:c,alt:e,className:"single-comic__img"}),Object(l.jsxs)("div",{className:"single-comic__info",children:[Object(l.jsx)("h2",{className:"single-comic__name",children:e}),Object(l.jsx)("p",{className:"single-comic__descr",children:n}),Object(l.jsx)("p",{className:"single-comic__descr",children:o}),Object(l.jsx)("p",{className:"single-comic__descr",children:i}),Object(l.jsx)("div",{className:"single-comic__price",children:u})]}),Object(l.jsx)(a.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};r.default=function(){var t=Object(o.g)().comicId,r=Object(c.useState)(null),e=Object(n.a)(r,2),a=e[0],f=e[1],p=Object(i.a)(),d=p.loading,m=p.error,v=p.getComics,g=p.clearError;Object(c.useEffect)((function(){y()}),[t]);var y=function(){g(),v(t).then(b)},b=function(t){f(t)},w=m?Object(l.jsx)(s.a,{}):null,j=d?Object(l.jsx)(u.a,{}):null,x=d||m||!a?null:Object(l.jsx)(h,{comics:a});return Object(l.jsxs)(l.Fragment,{children:[w,j,x]})}},27:function(t,r,e){"use strict";var n=e.p+"static/media/error.42292aa1.gif",o=e(0);r.a=function(){return Object(o.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0, auto"},src:n,alt:"Error"})}},28:function(t,r,e){t.exports=e(36)},29:function(t,r,e){"use strict";function n(t,r,e,n,o,a,c){try{var i=t[a](c),u=i.value}catch(s){return void e(s)}i.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var c=t.apply(r,e);function i(t){n(c,o,a,i,u,"next",t)}function u(t){n(c,o,a,i,u,"throw",t)}i(void 0)}))}}e.d(r,"a",(function(){return o}))},31:function(t,r,e){"use strict";var n=e(28),o=e.n(n),a=e(29),c=e(4),i=e(1);r.a=function(){var t=function(){var t=Object(i.useState)(!1),r=Object(c.a)(t,2),e=r[0],n=r[1],u=Object(i.useState)(null),s=Object(c.a)(u,2),l=s[0],h=s[1];return{loading:e,request:Object(i.useCallback)(function(){var t=Object(a.a)(o.a.mark((function t(r){var e,a,c,i,u,s=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"GET",a=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},n(!0),t.prev=4,t.next=7,fetch(r,{method:e,body:a,headers:c});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return u=t.sent,n(!1),t.abrupt("return",u);case 17:throw t.prev=17,t.t0=t.catch(4),n(!1),h(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(r){return t.apply(this,arguments)}}(),[]),error:l,clearError:Object(i.useCallback)((function(){return h(null)}),[])}}(),r=t.loading,e=t.request,n=t.error,u=t.clearError,s="https://gateway.marvel.com:443/v1/public/",l="apikey=0f0b4c1cdd02b439fd1a6a3ba7c07876",h=function(){var t=Object(a.a)(o.a.mark((function t(){var r,n,a=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,e("".concat(s,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(o.a.mark((function t(r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters/").concat(r,"?&").concat(l));case 2:return n=t.sent,t.abrupt("return",v(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(o.a.mark((function t(){var r,n,a=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,e("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(o.a.mark((function t(r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"comics/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",g(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(o.a.mark((function t(r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters?name=").concat(r,"&").concat(l));case 2:return n=t.sent,console.log(r),t.abrupt("return",n.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[0].url,comics:t.comics.items}},g=function(t){return{id:t.id,title:t.title,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available",description:t.description||"There is no description for this character",language:t.textObjects.language||"en-us"}};return{loading:r,error:n,clearError:u,getAllCharacters:h,getCharacters:f,getComics:d,getAllComics:p,getCharacterByName:m}}},36:function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(G){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,a=Object.create(o.prototype),c=new N(n||[]);return a._invoke=function(t,r,e){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return T()}for(e.method=o,e.arg=a;;){var c=e.delegate;if(c){var i=E(c,e);if(i){if(i===m)continue;return i}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=l(t,r,e);if("normal"===u.type){if(n=e.done?d:f,u.arg===m)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=d,e.method="throw",e.arg=u.arg)}}}(t,e,c),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(G){return{type:"throw",arg:G}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={};function v(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(C([])));j&&j!==e&&n.call(j,a)&&(b=j);var x=y.prototype=v.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,a,c,i){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,c,i)}),(function(t){e("throw",t,c,i)})):r.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,i)}))}i(u.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return c.next=c}}return{next:T}}function T(){return{value:r,done:!0}}return g.prototype=y,u(x,"constructor",y),u(y,"constructor",g),g.displayName=u(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var c=new _(s(r,e,n,o),a);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(x),u(x,i,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return i.type="throw",i.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=r,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=7.3a880969.chunk.js.map