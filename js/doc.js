(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(function(){function e(e){if(e)if(a&&a.$a.removeClass("open"),a=l[e]){a.$a.addClass("open").get(0).focus();var t=a.$a.offset().top;(t>c.offsetTop+c.clientHeight||t<c.offsetTop)&&i.scrollTop(a.$a.get(0).offsetTop),s.removeClass("show")}else console.log("navPath can't find %s in toc",e)}function t(e){if(e)return g?void g.show(p+e):void(window.location.href=pubRef.relPath+e)}function n(e,t){return t&&e.slice(0,t.length)===t?e.slice(t.length):e}$('li > a:contains("Getting Started")').text("入门指南"),$('li > a:contains("Custom Builds")').text("版本定制"),$('li > a:contains("All-in-one Doc")').text("单页面方式浏览");var a,r=[],l={},o=$("html"),s=(o.get(0),$("#nav")),i=$("#toc"),c=i.get(0),h=$("#q"),f=h.get(0),u=/iPad|iPhone/i.test(navigator.userAgent),p=location.pathname.slice(0,location.pathname.length-pubRef.href.length);!function(){function e(e){if(e.shiftKey||e.metaKey||e.altKey||e.ctrlKey)return!0;switch(e.keyCode){case 27:case 9:return n(e,!0);case 37:case 38:case 39:case 40:return c(e,e.keyCode<39,e.keyCode%2);case 13:return d(e)}}function n(e,t){return m.$list.removeClass("show"),t&&(h.val(""),s.removeClass("show"),f.blur()),!0}function o(e){return!m.length||(m.$list.addClass("show"),!1)}function c(e,t,n){return!m.length||!p(".searchitem",t,m.$list).length}function p(e,t,n,a){e=e||"";var r=$(e+".selected",n),l=t?r.prev(e):r.next(e);return l.length||(l=t?r.prev().prev(e):r.next().next(e)),l.length||!n||!a&&r.length||(l=t?n.children(e).last():n.children(e).first()),l.length&&($(e+".selected").removeClass("selected"),l.addClass("selected").get(0).scrollIntoView(!1)),l}function g(e){var t=h.val();if(t===m.q)return!0;if(m.q=t,words=_.compact(t.split(/\W/)),!words.length)return n(e,!1);var a=new RegExp(_.map(words,_.escapeRegExp).join(".*"),"i"),l=_.filter(r,function(e){return e.text.search(a)>=0||e.href.search(a)>=0});return l.length?(m.$list.addClass("show").html(_.map(l,w).join("")),m.length=l.length,!0):n(e,!1)}function d(e){var a=$(e&&e.target).attr("href")||$(e&&e.target&&e.target.parentElement).attr("href")||$(".searchitem.selected a").attr("href")||$(".searchitem a").first().attr("href");return!a||(t(a),n(e,!0),!1)}localStorage.tocpos&&i.scrollTop(localStorage.tocpos),$(window).on(u?"pagehide":"beforeunload",function(){localStorage.tocpos=i.scrollTop()}),$("#nav > span.fa").click(function(e){s.toggleClass("show")}),r=[];var v;$("#toc a").each(function(){var e=$(this),t={href:e.attr("href").slice(pubRef.relPath.length),$a:e,text:e.text(),htmlText:this.innerHTML,title:e.attr("title")};v&&(t.prev=v.href,v.next=t.href),r.push(t),v=t}),l=_.keyBy(r,"href");var m={$list:$("#q-list"),length:0,q:""};h.focus(o).keydown(e).keyup(g),$(window).keydown(function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.target==f)return!0;var n=e.keyCode;return(n>=65&&n<=90||189===n||190===n)&&(f.focus(),s.addClass("show")),37===n&&t(a&&a.prev),39===n&&t(a&&a.next),!0}),$("#q-list").click(function(e){return d(e)}),_.templateSettings.interpolate=/\{\-\{(.+?)\}\-\}/g,_.templateSettings.escape=/\{\{(.+?)\}\}/g;var w=_.template('<li class="searchitem"><a href="{{href}}" title="{{title}}">{-{htmlText}-}</a></li>')}(),e(pubRef.href);var g=null;history&&history.pushState&&function(){var t=[],a=$("#content");g=require("page"),$.ajaxSetup({cache:!0}),$.getJSON(pubRef.relPath+"/pages.json").fail(function(e){console.log("unable to load /pages.json")}).done(function(r){t=r,page$=_.keyBy(r,"href"),page$["/all"]={href:"/all",html:_.map(t,"html").join("\n")},g("*",function(t){var r=t.path;r=n(r,p),r=r.split("?")[0];var l=page$[r];l&&(a.html(l.html),e(r),$("html,body").animate({scrollTop:0},200))}),g({dispatch:!1})})}()});
},{"page":2}],2:[function(require,module,exports){
(function (process){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.page=e()}(this,function(){"use strict";function t(t){for(var e,n=[],i=0,o=0,a="";null!=(e=k.exec(t));){var s=e[0],h=e[1],c=e.index;if(a+=t.slice(o,c),o=c+s.length,h)a+=h[1];else{a&&(n.push(a),a="");var p=e[2],u=e[3],f=e[4],d=e[5],l=e[6],v=e[7],g="+"===l||"*"===l,m="?"===l||"*"===l,w=p||"/",y=f||d||(v?".*":"[^"+w+"]+?");n.push({name:u||i++,prefix:p||"",delimiter:w,optional:m,repeat:g,pattern:r(y)})}}return o<t.length&&(a+=t.substr(o)),a&&n.push(a),n}function e(e){return n(t(e))}function n(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^"+t[n].pattern+"$"));return function(n){for(var i="",r=n||{},o=0;o<t.length;o++){var a=t[o];if("string"!=typeof a){var s,h=r[a.name];if(null==h){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(y(h)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+h+'"');if(0===h.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<h.length;c++){if(s=encodeURIComponent(h[c]),!e[o].test(s))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');i+=(0===c?a.prefix:a.delimiter)+s}}else{if(s=encodeURIComponent(h),!e[o].test(s))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');i+=a.prefix+s}}else i+=a}return i}}function i(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function r(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function o(t,e){return t.keys=e,t}function a(t){return t.sensitive?"":"i"}function s(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return o(t,e)}function h(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(u(t[r],e,n).source);return o(new RegExp("(?:"+i.join("|")+")",a(n)),e)}function c(e,n,i){for(var r=t(e),a=p(r,i),s=0;s<r.length;s++)"string"!=typeof r[s]&&n.push(r[s]);return o(a,n)}function p(t,e){e=e||{};for(var n=e.strict,r=!1!==e.end,o="",s=t[t.length-1],h="string"==typeof s&&/\/$/.test(s),c=0;c<t.length;c++){var p=t[c];if("string"==typeof p)o+=i(p);else{var u=i(p.prefix),f=p.pattern;p.repeat&&(f+="(?:"+u+f+")*"),f=p.optional?u?"(?:"+u+"("+f+"))?":"("+f+")?":u+"("+f+")",o+=f}}return n||(o=(h?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":n&&h?"":"(?=\\/|$)",new RegExp("^"+o,a(e))}function u(t,e,n){return e=e||[],y(e)?n||(n={}):(n=e,e=[]),t instanceof RegExp?s(t,e,n):y(t)?h(t,e,n):c(t,e,n)}function f(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function d(){function t(){return l.apply(e,arguments)}var e=new f;return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=d,Object.defineProperty(t,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(t,"current",{get:function(){return e.current},set:function(t){e.current=t}}),t.Context=m,t.Route=w,t}function l(t,e){if("function"==typeof t)return l.call(this,"*",t);if("function"==typeof e)for(var n=new w(t,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function v(t){if(!t.handled){var e,n=this,i=n._window;e=n._hashbang?A&&this._getBase()+i.location.hash.replace("#!",""):A&&i.location.pathname+i.location.search,e!==t.canonicalPath&&(n.stop(),t.handled=!1,A&&(i.location.href=t.canonicalPath))}}function g(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function m(t,e,n){var i=this.page=n||l,r=i._window,o=i._hashbang,a=i._getBase();"/"===t[0]&&0!==t.indexOf(a)&&(t=a+(o?"#!":"")+t);var s=t.indexOf("?");this.canonicalPath=t;var h=new RegExp("^"+g(a));if(this.path=t.replace(h,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=U&&r.document.title,this.state=e||{},this.state.path=t,this.querystring=~s?i._decodeURLEncodedURIComponent(t.slice(s+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~s?t.slice(0,s):t),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=i._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function w(t,e,n){var i=this.page=n||T,r=e||{};r.strict=r.strict||i._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=_(this.path,this.keys=[],r)}var y=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},_=u,b=t,x=e,E=n,R=p,k=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");_.parse=b,_.compile=x,_.tokensToFunction=E,_.tokensToRegExp=R;var U="undefined"!=typeof document,L="undefined"!=typeof window,C="undefined"!=typeof history,O="undefined"!=typeof process,P=U&&document.ontouchstart?"touchstart":"click",A=L&&!(!window.history.location&&!window.location);f.prototype.configure=function(t){var e=t||{};this._window=e.window||L&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&L,this._click=!1!==e.click&&U,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):L&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(P,this.clickHandler,!1):U&&n.document.removeEventListener(P,this.clickHandler,!1),this._hashbang&&L&&!C?n.addEventListener("hashchange",this._onpopstate,!1):L&&n.removeEventListener("hashchange",this._onpopstate,!1)},f.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},f.prototype._getBase=function(){var t=this._base;if(t)return t;var e=L&&this._window&&this._window.location;return L&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},f.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},f.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){this._running=!0;var n;if(A){var i=this._window,r=i.location;n=this._hashbang&&~r.hash.indexOf("#!")?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(n,null,!0,e.dispatch)}},f.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(P,this.clickHandler,!1),L&&t.removeEventListener("popstate",this._onpopstate,!1),L&&t.removeEventListener("hashchange",this._onpopstate,!1)}},f.prototype.show=function(t,e,n,i){var r=new m(t,e,this),o=this.prevContext;return this.prevContext=r,this.current=r.path,!1!==n&&this.dispatch(r,o),!1!==r.handled&&!1!==i&&r.pushState(),r},f.prototype.back=function(t,e){var n=this;if(this.len>0){var i=this._window;C&&i.history.back(),this.len--}else t?setTimeout(function(){n.show(t,e)}):setTimeout(function(){n.show(n._getBase(),e)})},f.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&l.call(this,t,function(t){setTimeout(function(){n.replace(e)},0)}),"string"==typeof t&&void 0===e&&setTimeout(function(){n.replace(t)},0)},f.prototype.replace=function(t,e,n,i){var r=new m(t,e,this),o=this.prevContext;return this.prevContext=r,this.current=r.path,r.init=n,r.save(),!1!==i&&this.dispatch(r,o),r},f.prototype.dispatch=function(t,e){function n(){var t=a.exits[o++];if(!t)return i();t(e,n)}function i(){var e=a.callbacks[r++];return t.path!==a.current?void(t.handled=!1):e?void e(t,i):v.call(a,t)}var r=0,o=0,a=this;e?n():i()},f.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new w(t,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))},f.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var i=0;i<n.length;i++)if(n[i].nodeName&&"A"===n[i].nodeName.toUpperCase()&&n[i].href){e=n[i];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var o=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==o)&&!(o&&o.indexOf("mailto:")>-1)&&(r?!e.target.baseVal:!e.target)&&(r||this.sameOrigin(e.href))){var a=r?e.href.baseVal:e.pathname+e.search+(e.hash||"");a="/"!==a[0]?"/"+a:a,O&&a.match(/^\/[a-zA-Z]:\//)&&(a=a.replace(/^\/[a-zA-Z]:\//,"/"));var s=a,h=this._getBase();0===a.indexOf(h)&&(a=a.substr(h.length)),this._hashbang&&(a=a.replace("#!","")),(!h||s!==a||A&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(s))}}}}},f.prototype._onpopstate=function(){var t=!1;return L?(U&&"complete"===document.readyState?t=!0:window.addEventListener("load",function(){setTimeout(function(){t=!0},0)}),function(e){if(t){var n=this;if(e.state){var i=e.state.path;n.replace(i,e.state)}else if(A){var r=n._window.location;n.show(r.pathname+r.search+r.hash,void 0,void 0,!1)}}}):function(){}}(),f.prototype._which=function(t){return t=t||L&&this._window.event,null==t.which?t.button:t.which},f.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&A)return new URL(t,e.location.toString());if(U){var n=e.document.createElement("a");return n.href=t,n}},f.prototype.sameOrigin=function(t){if(!t||!A)return!1;var e=this._toURL(t),n=this._window,i=n.location;return i.protocol===e.protocol&&i.hostname===e.hostname&&(i.port===e.port||""===i.port&&(80==e.port||443==e.port))},f.prototype._samePath=function(t){if(!A)return!1;var e=this._window,n=e.location;return t.pathname===n.pathname&&t.search===n.search},f.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},m.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,C&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},m.prototype.save=function(){var t=this.page;C&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},w.prototype.middleware=function(t){var e=this;return function(n,i){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,i);i()}},w.prototype.match=function(t,e){var n=this.keys,i=t.indexOf("?"),r=~i?t.slice(0,i):t,o=this.regexp.exec(decodeURIComponent(r));if(!o)return!1;delete e[0];for(var a=1,s=o.length;a<s;++a){var h=n[a-1],c=this.page._decodeURLEncodedURIComponent(o[a]);void 0===c&&hasOwnProperty.call(e,h.name)||(e[h.name]=c)}return!0};var T=d(),$=T,j=T;return $.default=j,$});
}).call(this,require('_process'))
},{"_process":3}],3:[function(require,module,exports){
function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(cachedSetTimeout===setTimeout)return setTimeout(e,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(e,0);try{return cachedSetTimeout(e,0)}catch(t){try{return cachedSetTimeout.call(null,e,0)}catch(t){return cachedSetTimeout.call(this,e,0)}}}function runClearTimeout(e){if(cachedClearTimeout===clearTimeout)return clearTimeout(e);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(e);try{return cachedClearTimeout(e)}catch(t){try{return cachedClearTimeout.call(null,e)}catch(t){return cachedClearTimeout.call(this,e)}}}function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var e=runTimeout(cleanUpNextTick);draining=!0;for(var t=queue.length;t;){for(currentQueue=queue,queue=[];++queueIndex<t;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,t=queue.length}currentQueue=null,draining=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}var process=module.exports={},cachedSetTimeout,cachedClearTimeout;!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var queue=[],draining=!1,currentQueue,queueIndex=-1;process.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];queue.push(new Item(e,t)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.prependListener=noop,process.prependOnceListener=noop,process.listeners=function(e){return[]},process.binding=function(e){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(e){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};
},{}]},{},[1]);
