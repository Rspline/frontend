!function(){"use strict";function t(t){l.push(t),1==l.length&&u()}function e(){for(;l.length;)l[0](),l.shift()}function n(t){this.a=f,this.b=void 0,this.f=[];var e=this;try{t(function(t){r(e,t)},function(t){a(e,t)})}catch(t){a(e,t)}}function o(t){return new n(function(e,n){n(t)})}function i(t){return new n(function(e){e(t)})}function r(t,e){if(t.a==f){if(e==t)throw new TypeError;var n=!1;try{var o=e&&e.then;if(null!=e&&"object"==typeof e&&"function"==typeof o)return void o.call(e,function(e){n||r(t,e),n=!0},function(e){n||a(t,e),n=!0})}catch(e){return void(n||a(t,e))}t.a=0,t.b=e,s(t)}}function a(t,e){if(t.a==f){if(e==t)throw new TypeError;t.a=1,t.b=e,s(t)}}function s(e){t(function(){if(e.a!=f)for(;e.f.length;){var t=e.f.shift(),n=t[0],o=t[1],i=t[2],t=t[3];try{0==e.a?i("function"==typeof n?n.call(void 0,e.b):e.b):1==e.a&&("function"==typeof o?i(o.call(void 0,e.b)):t(e.b))}catch(e){t(e)}}})}function c(t){return new n(function(e,n){function o(n){return function(o){a[n]=o,r+=1,r==t.length&&e(a)}}var r=0,a=[];0==t.length&&e(a);for(var s=0;s<t.length;s+=1)i(t[s]).c(o(s),n)})}function d(t){return new n(function(e,n){for(var o=0;o<t.length;o+=1)i(t[o]).c(e,n)})}var u,l=[];u=function(){setTimeout(e)};var f=2;n.prototype.g=function(t){return this.c(void 0,t)},n.prototype.c=function(t,e){var o=this;return new n(function(n,i){o.f.push([t,e,n,i]),s(o)})},window.Promise||(window.Promise=n,window.Promise.resolve=i,window.Promise.reject=o,window.Promise.race=d,window.Promise.all=c,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype.catch=n.prototype.g)}(),function(){function t(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function e(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t()}):document.attachEvent("onreadystatechange",function e(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",e),t())})}function n(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function o(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+e+";"}function i(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e&&(t.g=e,!0)}function r(e,n){function o(){var t=r;i(t)&&null!==t.a.parentNode&&n(t.g)}var r=e;t(e.b,o),t(e.c,o),i(e)}function a(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function s(){if(null===u){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif"}catch(t){}u=""!==t.style.font}return u}function c(t,e){return[t.style,t.weight,s()?t.stretch:"","100px",e].join(" ")}var d=null,u=null,l=null;a.prototype.load=function(t,i){var a=this,s=t||"BESbswy",u=0,f=i||3e3,h=(new Date).getTime();return new Promise(function(t,i){if(null===l&&(l=!!document.fonts),l){var m=new Promise(function(t,e){function n(){(new Date).getTime()-h>=f?e():document.fonts.load(c(a,'"'+a.family+'"'),s).then(function(e){1<=e.length?t():setTimeout(n,25)},function(){e()})}n()}),p=new Promise(function(t,e){u=setTimeout(e,f)});Promise.race([p,m]).then(function(){clearTimeout(u),t(a)},function(){i(a)})}else e(function(){function e(){var e;(e=-1!=v&&-1!=y||-1!=v&&-1!=b||-1!=y&&-1!=b)&&((e=v!=y&&v!=b&&y!=b)||(null===d&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),d=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=d&&(v==g&&y==g&&b==g||v==x&&y==x&&b==x||v==E&&y==E&&b==E)),e=!e),e&&(null!==P.parentNode&&P.parentNode.removeChild(P),clearTimeout(u),t(a))}function l(){if((new Date).getTime()-h>=f)null!==P.parentNode&&P.parentNode.removeChild(P),i(a);else{var t=document.hidden;!0!==t&&void 0!==t||(v=m.a.offsetWidth,y=p.a.offsetWidth,b=w.a.offsetWidth,e()),u=setTimeout(l,50)}}var m=new n(s),p=new n(s),w=new n(s),v=-1,y=-1,b=-1,g=-1,x=-1,E=-1,P=document.createElement("div");P.dir="ltr",o(m,c(a,"sans-serif")),o(p,c(a,"serif")),o(w,c(a,"monospace")),P.appendChild(m.a),P.appendChild(p.a),P.appendChild(w.a),document.body.appendChild(P),g=m.a.offsetWidth,x=p.a.offsetWidth,E=w.a.offsetWidth,l(),r(m,function(t){v=t,e()}),o(m,c(a,'"'+a.family+'",sans-serif')),r(p,function(t){y=t,e()}),o(p,c(a,'"'+a.family+'",serif')),r(w,function(t){b=t,e()}),o(w,c(a,'"'+a.family+'",monospace'))})})},"undefined"!=typeof module?module.exports=a:(window.FontFaceObserver=a,window.FontFaceObserver.prototype.load=a.prototype.load)}(),function(){"use strict";var t=document.querySelector.bind(document),e=t('[href="#navigation"]'),n="navigation__drawer",o=t("#navigation__drawer"),i=function(t){e.setAttribute("aria-expanded",t),document.body.setAttribute("data-menu-expanded",t),o.setAttribute("aria-hidden",!t)};e&&(e.setAttribute("role","button"),e.setAttribute("aria-controls",n),e.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0),e.addEventListener("click",function(t){var n="false"===e.getAttribute("aria-expanded");i(n),t.preventDefault()}),window.addEventListener("keyup",function(t){27==t.keyCode&&i(!1)}))}(),function(){"use strict";if(document.documentElement.classList)for(var t=document.querySelectorAll.bind(document),e=function(){this.className=this.className.replace(" js-mouseout","")},n=function(){this.className+=" js-mouseout"},o=t(".c-summary"),i=o.length-1;i>=0;i--)o[i].addEventListener("js-mouseover",e,!1),o[i].addEventListener("js-mouseout",n,!1)}(),function(t,e){"use strict";var n=new FontFaceObserver("Source Sans Pro",{weight:"normal",style:"normal"}),o=new FontFaceObserver("Source Sans Pro",{weight:"700",style:"normal"}),n=new FontFaceObserver("Source Serif Pro",{weight:"normal",style:"normal"}),i=new FontFaceObserver("Source Serif Pro",{weight:"normal",style:"italic"}),r=new FontFaceObserver("Source Code Pro",{weight:"normal",style:"normal"});Promise.all([n.load(),o.load(),n.load(),i.load(),r.load()]).then(function(){e.documentElement.className+=" fonts-loaded"})}(this,this.document);
//# sourceMappingURL=app.js.map
