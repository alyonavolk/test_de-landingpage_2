/*! For license information please see index.4b5c93ebf5432472c362.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}function o(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var i,u,a,c=new WeakSet,l=new WeakSet,s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[data-js-modal=modal1]";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,l),n(this,c),this.modal=document.querySelector(e),this.openButton=document.querySelectorAll(t.selectors.openButton),this.closeButton=document.querySelectorAll(t.selectors.closeButton),this.unlock=!0,this.timeout=300,this.modal&&this.openButton&&(this.clickOpenBtn(),this.clickCloseBtn())}var r,i,u;return r=t,i=[{key:"clickOpenBtn",value:function(){var t=this;this.openButton.forEach((function(e){o(t,c,f).call(t,e)}))}},{key:"clickCloseBtn",value:function(){var t=this;this.closeButton.forEach((function(e){o(t,l,h).call(t,e)}))}},{key:"modalOpen",value:function(){if(this.unlock){var t=document.querySelector(".open");t?this.modalClose(t,!1):(this.unlock,e=this.timeout,n=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px",document.body.style.paddingRight=n,document.body.style.overflow="hidden",setTimeout((function(){}),e)),this.modal.classList.remove("close"),this.modal.classList.add("open"),this.backgroundClose(this.modal)}var e,n}},{key:"modalClose",value:function(t){var e,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.unlock&&(t.classList.remove("open"),t.classList.add("close"),n&&(this.unlock,e=this.timeout,setTimeout((function(){document.body.style.paddingRight="0px",document.body.style.overflow="visible"}),e),setTimeout((function(){}),e)))}},{key:"backgroundClose",value:function(t){var e=this;t.addEventListener("click",(function(n){n.target.closest(".modal__content")||e.modalClose(t.closest(".modal"))}),{once:!0})}}],i&&e(r.prototype,i),u&&e(r,u),Object.defineProperty(r,"prototype",{writable:!1}),t}();function f(t){var e=this;t.addEventListener("click",(function(n){n.preventDefault();var r=t.getAttribute("data-js-open");e.modal.getAttribute("data-js-modal")===r&&e.modalOpen(e.modal)}))}function h(t){var e=this;t.addEventListener("click",(function(n){n.preventDefault(),e.modalClose(t.closest(".modal"))}))}function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(){p=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var i=e&&e.prototype instanceof h?e:h,u=Object.create(i.prototype),a=new x(o||[]);return r(u,"_invoke",{value:S(t,n,a)}),u}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function v(){}function y(){}var m={};c(m,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(j([])));b&&b!==e&&n.call(b,i)&&(m=b);var w=y.prototype=h.prototype=Object.create(m);function F(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(r,i,u,a){var c=s(t[r],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==d(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,u,a)}),(function(t){o("throw",t,u,a)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,a)}))}a(c.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function S(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var a=D(u,n);if(a){if(a===f)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function D(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,D(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=y,r(w,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:v,configurable:!0}),v.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},F(E.prototype),c(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var u=new E(l(e,n,r,o),i);return t.isGeneratorFunction(n)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},F(w),c(w,a,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return u.type="throw",u.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function v(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,F(r.key),r)}}function g(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function b(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function w(t,e,n){return(e=F(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function F(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===d(e)?e:String(e)}i=s,a={openButton:"[data-js-open]",closeButton:"[data-js-close]"},(u=r(u="selectors"))in i?Object.defineProperty(i,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[u]=a;var E=new WeakSet,S=function(){function t(e){y(this,t),b(this,E),this.instance=e,this.inputs=Array.from(this.instance.querySelectorAll(t.selectors.input)),this.url=this.instance.getAttribute("action"),this.instance&&(this.modal=new s("[data-js-modal=modal2]"),this.bindEvents())}var e,n;return g(t,[{key:"bindEvents",value:function(){var t=this;this.instance.addEventListener("submit",(function(e){return function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}(t,E,D).call(t,e)}))}}],[{key:"setInputErrorState",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.classList.toggle("isValid",e),t.classList.remove("isNotValid"),e||t.classList.add("isNotValid")}},{key:"isEmailValid",value:function(t){return/^(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])+(\.(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])+)*)|("(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+"))@(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])+\.)+(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF]){2,})$/i.test(t.value)}},{key:"isDefaultInputValid",value:function(t){return!!t.value.length}},{key:"isValid",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){var n,r="email"===(n=e).getAttribute("data-js-input")?t.isEmailValid(n):t.isDefaultInputValid(n);return t.setInputErrorState(e,r),r})).every((function(t){return!!t}))}},{key:"send",value:(e=p().mark((function t(e,n){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){fetch(e,{mode:"no-cors",method:"POST",headers:{"Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"OPTIONS,POST,GET,PATCH"},body:new FormData(n)}).then((function(e){e.ok?t(e):r(new Error("Error: ".concat(e.status," ").concat(e.statusText)))})).catch((function(t){r(t)}))})));case 1:case"end":return t.stop()}}),t)})),n=function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(t){v(i,r,o,u,a,"next",t)}function a(t){v(i,r,o,u,a,"throw",t)}u(void 0)}))},function(t,e){return n.apply(this,arguments)})}]),t}();function D(t){var e=this;t.preventDefault();var n=S.isValid(this.inputs),r=this.instance.querySelector('input[type="submit"]');n&&(r.disabled=!0,S.send(this.url,this.instance).then((function(){e.modal.modalOpen(),r.disabled=!1})).catch((function(){document.querySelector('[data-js-modal="modal2"]').querySelector(".message__descr").innerText="An error has occurred",e.modal.modalOpen(),r.disabled=!1})))}w(S,"selectors",{input:"[data-js-input]"});var k=function(){function t(){y(this,t),this.form=document.querySelectorAll(t.selector),this.form.length&&this.init()}return g(t,[{key:"init",value:function(){this.form.forEach((function(t){return new S(t)}))}}]),t}();w(k,"selector","[data-js-form]"),document.addEventListener("DOMContentLoaded",(function(){new k,new s("[data-js-modal=modal1]")}))})();
//# sourceMappingURL=index.4b5c93ebf5432472c362.js.map