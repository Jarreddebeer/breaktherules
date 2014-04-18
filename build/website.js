window.Modernizr=function(a,b,c){function d(a){s.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&s[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+v.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+w.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.7.1",n={},o=!0,p=b.documentElement,q="modernizr",r=b.createElement(q),s=r.style,t=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),u="Webkit Moz O ms",v=u.split(" "),w=u.toLowerCase().split(" "),x={},y=[],z=y.slice,A=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:q+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',q,'">',a,"</style>"].join(""),j.id=q,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=p.style.overflow,p.style.overflow="hidden",p.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),p.style.overflow=i),!!g},B={}.hasOwnProperty;l=e(B,"undefined")||e(B.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return B.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=z.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(z.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(z.call(arguments)))};return d}),x.csstransforms3d=function(){var a=!!i("perspective");return a&&"webkitPerspective"in p.style&&A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},x.csstransitions=function(){return i("transition")};for(var C in x)l(x,C)&&(k=C.toLowerCase(),n[k]=x[C](),y.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof o&&o&&(p.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),r=j=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return s.shivCSS&&!j&&!d.hasCSS&&(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),n._version=m,n._prefixes=t,n._domPrefixes=w,n._cssomPrefixes=v,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=A,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(o?" js "+y.join(" "):""),n}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==q.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=r.shift();s=1,a?a.t?o(function(){("c"==a.t?m.injectCss:m.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):s=0}function i(a,c,d,e,f,i,j){function k(b){if(!n&&g(l.readyState)&&(t.r=n=1,!s&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&o(function(){v.removeChild(l)},50);for(var d in A[c])A[c].hasOwnProperty(d)&&A[c][d].onload()}}var j=j||m.errorTimeout,l=b.createElement(a),n=0,q=0,t={t:d,s:c,e:f,a:i,x:j};1===A[c]&&(q=1,A[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,q)},r.splice(e,0,t),"img"!=a&&(q||2===A[c]?(v.insertBefore(l,u?null:p),o(k,j)):A[c].push(l))}function j(a,b,c,d,f){return s=0,b=b||"j",e(a)?i("c"==b?x:w,a,b,this.i++,c,d,f):(r.splice(this.i++,0,a),1==r.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=b.documentElement,o=a.setTimeout,p=b.getElementsByTagName("script")[0],q={}.toString,r=[],s=0,t="MozAppearance"in n.style,u=t&&!!b.createRange().compareNode,v=u?n:p.parentNode,n=a.opera&&"[object Opera]"==q.call(a.opera),n=!!b.attachEvent&&!n,w=t?"object":n?"script":"img",x=n?"script":w,y=Array.isArray||function(a){return"[object Array]"==q.call(a)},z=[],A={},B={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};m=function(a){function b(a){var b,c,d,a=a.split("!"),e=z.length,f=a.pop(),g=a.length,f={url:f,origUrl:f,prefixes:a};for(c=0;g>c;c++)d=a[c].split("="),(b=B[d.shift()])&&(f=b(f,d));for(c=0;e>c;c++)f=z[c](f);return f}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(A[i.url]?i.noexec=!0:A[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),A[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}),g(a,l,b,0,j);else if(Object(a)===a)for(i in h=function(){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c}(),a)a.hasOwnProperty(i)&&(!c&&!--h&&(d(l)?l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}:l[i]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),n()}}(m[i])),g(a[i],l,b,i,j))}else!c&&n()}var h,i,j=!!a.test,k=a.load||a.both,l=a.callback||f,m=l,n=a.complete||f;c(j?a.yep:a.nope,!!k),k&&c(k)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(y(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):y(j)?m(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},m.addPrefix=function(a,b){B[a]=b},m.addFilter=function(a){z.push(a)},m.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",l=function(){b.removeEventListener("DOMContentLoaded",l,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k,l,n=b.createElement("script"),e=e||m.errorTimeout;n.src=a;for(l in d)n.setAttribute(l,d[l]);c=j?h:c||f,n.onreadystatechange=n.onload=function(){!k&&g(n.readyState)&&(k=1,c(),n.onload=n.onreadystatechange=null)},o(function(){k||(k=1,c(1))},e),i?n.onload():p.parentNode.insertBefore(n,p)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(p.parentNode.insertBefore(e,p),o(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(a){"use strict";function b(a,b){a.style.WebkitTransform=b,a.style.msTransform=b,a.style.transform=b}function c(){var b=f.clientWidth,c=a.innerWidth;return c>b?c:b}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function e(a,b){this.el=a,this.options=d({},this.options),d(this.options,b),this._init()}var f=a.document.documentElement,g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},h=g[Modernizr.prefixed("transition")],i={transitions:Modernizr.csstransitions,support3d:Modernizr.csstransforms3d};e.prototype.options={},e.prototype._init=function(){this.grid=this.el.querySelector("section.grid-wrap > ul.grid"),this.gridItems=[].slice.call(this.grid.querySelectorAll("li:not(.grid-sizer)")),this.itemsCount=this.gridItems.length,this.slideshow=this.el.querySelector("section.slideshow > ul"),this.slideshowItems=[].slice.call(this.slideshow.children),this.current=-1,this.ctrlPrev=this.el.querySelector("section.slideshow > nav > span.nav-prev"),this.ctrlNext=this.el.querySelector("section.slideshow > nav > span.nav-next"),this.ctrlClose=this.el.querySelector("section.slideshow > nav > span.nav-close"),this._initEvents()},e.prototype._initEvents=function(){var b=this;this.gridItems.forEach(function(a,c){a.addEventListener("click",function(){b._openSlideshow(c)})}),this.ctrlPrev.addEventListener("click",function(){b._navigate("prev")}),this.ctrlNext.addEventListener("click",function(){b._navigate("next")}),this.ctrlClose.addEventListener("click",function(){b._closeSlideshow()}),a.addEventListener("resize",function(){b._resizeHandler()}),document.addEventListener("keydown",function(a){if(b.isSlideshowVisible){var c=a.keyCode||a.which;switch(c){case 37:b._navigate("prev");break;case 39:b._navigate("next");break;case 27:b._closeSlideshow()}}}),a.addEventListener("scroll",function(){b.isSlideshowVisible?a.scrollTo(b.scrollPosition?b.scrollPosition.x:0,b.scrollPosition?b.scrollPosition.y:0):b.scrollPosition={x:a.pageXOffset||f.scrollLeft,y:a.pageYOffset||f.scrollTop}})},e.prototype._openSlideshow=function(a){if(this.isSlideshowVisible=!0,this.current=a,classie.addClass(this.el,"slideshow-open"),this._setViewportItems(),classie.addClass(this.currentItem,"current"),classie.addClass(this.currentItem,"show"),this.prevItem){classie.addClass(this.prevItem,"show");var d=Number(-1*(c()/2+this.prevItem.offsetWidth/2));b(this.prevItem,i.support3d?"translate3d("+d+"px, 0, -150px)":"translate("+d+"px)")}if(this.nextItem){classie.addClass(this.nextItem,"show");var d=Number(c()/2+this.nextItem.offsetWidth/2);b(this.nextItem,i.support3d?"translate3d("+d+"px, 0, -150px)":"translate("+d+"px)")}},e.prototype._navigate=function(a){if(!this.isAnimating){if("next"===a&&this.current===this.itemsCount-1||"prev"===a&&0===this.current)return void this._closeSlideshow();this.isAnimating=!0,this._setViewportItems();var d,e,f,g=this,j=this.currentItem.offsetWidth,k=i.support3d?"translate3d(-"+Number(c()/2+j/2)+"px, 0, -150px)":"translate(-"+Number(c()/2+j/2)+"px)",l=i.support3d?"translate3d("+Number(c()/2+j/2)+"px, 0, -150px)":"translate("+Number(c()/2+j/2)+"px)",m="";"next"===a?(d=i.support3d?"translate3d( -"+Number(2*c()/2+j/2)+"px, 0, -150px )":"translate(-"+Number(2*c()/2+j/2)+"px)",e=i.support3d?"translate3d( "+Number(2*c()/2+j/2)+"px, 0, -150px )":"translate("+Number(2*c()/2+j/2)+"px)"):(d=i.support3d?"translate3d( "+Number(2*c()/2+j/2)+"px, 0, -150px )":"translate("+Number(2*c()/2+j/2)+"px)",e=i.support3d?"translate3d( -"+Number(2*c()/2+j/2)+"px, 0, -150px )":"translate(-"+Number(2*c()/2+j/2)+"px)"),classie.removeClass(g.slideshow,"animatable"),("next"===a&&this.current<this.itemsCount-2||"prev"===a&&this.current>1)&&(f=this.slideshowItems["next"===a?this.current+2:this.current-2],b(f,e),classie.addClass(f,"show"));var n=function(){classie.addClass(g.slideshow,"animatable"),classie.removeClass(g.currentItem,"current");var c="next"===a?g.nextItem:g.prevItem;classie.addClass(c,"current"),b(g.currentItem,"next"===a?k:l),g.nextItem&&b(g.nextItem,"next"===a?m:d),g.prevItem&&b(g.prevItem,"next"===a?d:m),f&&b(f,"next"===a?l:k);var e=function(b){if(i.transitions){if(-1===b.propertyName.indexOf("transform"))return!1;this.removeEventListener(h,e)}g.prevItem&&"next"===a?classie.removeClass(g.prevItem,"show"):g.nextItem&&"prev"===a&&classie.removeClass(g.nextItem,"show"),"next"===a?(g.prevItem=g.currentItem,g.currentItem=g.nextItem,f&&(g.nextItem=f)):(g.nextItem=g.currentItem,g.currentItem=g.prevItem,f&&(g.prevItem=f)),g.current="next"===a?g.current+1:g.current-1,g.isAnimating=!1};i.transitions?g.currentItem.addEventListener(h,e):e()};setTimeout(n,25)}},e.prototype._closeSlideshow=function(){classie.removeClass(this.el,"slideshow-open"),classie.removeClass(this.slideshow,"animatable");var a=this,c=function(d){if(i.transitions){if("ul"!==d.target.tagName.toLowerCase())return;this.removeEventListener(h,c)}classie.removeClass(a.currentItem,"current"),classie.removeClass(a.currentItem,"show"),a.prevItem&&classie.removeClass(a.prevItem,"show"),a.nextItem&&classie.removeClass(a.nextItem,"show"),a.slideshowItems.forEach(function(a){b(a,"")}),a.isSlideshowVisible=!1};i.transitions?this.el.addEventListener(h,c):c()},e.prototype._setViewportItems=function(){this.currentItem=null,this.prevItem=null,this.nextItem=null,this.current>0&&(this.prevItem=this.slideshowItems[this.current-1]),this.current<this.itemsCount-1&&(this.nextItem=this.slideshowItems[this.current+1]),this.currentItem=this.slideshowItems[this.current]},e.prototype._resizeHandler=function(){function a(){b._resize(),b._resizeTimeout=null}var b=this;this._resizeTimeout&&clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout(a,50)},e.prototype._resize=function(){if(this.isSlideshowVisible){if(this.prevItem){var a=Number(-1*(c()/2+this.prevItem.offsetWidth/2));b(this.prevItem,i.support3d?"translate3d("+a+"px, 0, -150px)":"translate("+a+"px)")}if(this.nextItem){var a=Number(c()/2+this.nextItem.offsetWidth/2);b(this.nextItem,i.support3d?"translate3d("+a+"px, 0, -150px)":"translate("+a+"px)")}}},a.CBPGridGallery=e}(window),function(a){function b(c,d){var e={align:"center",valign:"center"};if(a.extend(e,d),0===c.height())return void c.load(function(){b(a(this),d)});var g,h,i,j=f(),k=j.width,l=j.height,m=c.width(),n=c.height(),o=l/k,p=n/m;o>p?(g=l/p,h=l):(g=k,h=k*p),i={width:g+"px",height:h+"px",top:"auto",bottom:"auto",left:"auto",right:"auto"},isNaN(parseInt(e.valign,10))?"top"==e.valign?i.top=0:"bottom"==e.valign?i.bottom=0:i.top=(l-h)/2:i.top=0-(h-l)/100*parseInt(e.valign,10)+"px",isNaN(parseInt(e.align,10))?"left"==e.align?i.left=0:"right"==e.align?i.right=0:i.left=(k-g)/2:i.left=0-(g-k)/100*parseInt(e.align,10)+"px",c.css(i)}function c(){j.prependTo("body").fadeIn()}function d(){j.fadeOut("fast",function(){a(this).remove()})}function e(){return a("body").css("backgroundImage")?a("body").css("backgroundImage").replace(/url\("?(.*?)"?\)/i,"$1"):void 0}function f(){var a=window,b="inner";return"innerWidth"in window||(a=document.documentElement||document.body,b="client"),{width:a[b+"Width"],height:a[b+"Height"]}}var g,h=a("<img />").addClass("vegas-background"),i=a("<div />").addClass("vegas-overlay"),j=a("<div />").addClass("vegas-loading"),k=a(),l=null,m=[],n=0,o=5e3,p=function(){},q={init:function(f){var g={src:e(),align:"center",valign:"center",fade:0,loading:!0,load:function(){},complete:function(){}};a.extend(g,a.vegas.defaults.background,f),g.loading&&c();var i=h.clone();return i.css({position:"fixed",left:"0px",top:"0px"}).bind("load",function(){i!=k&&(a(window).bind("load resize.vegas",function(){b(i,g)}),k.is("img")?(k.stop(),i.hide().insertAfter(k).fadeIn(g.fade,function(){a(".vegas-background").not(this).remove(),a("body").trigger("vegascomplete",[this,n-1]),g.complete.apply(i,[n-1])})):i.hide().prependTo("body").fadeIn(g.fade,function(){a("body").trigger("vegascomplete",[this,n-1]),g.complete.apply(this,[n-1])}),k=i,b(k,g),g.loading&&d(),a("body").trigger("vegasload",[k.get(0),n-1]),g.load.apply(k.get(0),[n-1]),n&&(a("body").trigger("vegaswalk",[k.get(0),n-1]),g.walk.apply(k.get(0),[n-1])))}).attr("src",g.src),a.vegas},destroy:function(b){return b&&"background"!=b||(a(".vegas-background, .vegas-loading").remove(),a(window).unbind("*.vegas"),k=a()),b&&"overlay"!=b||a(".vegas-overlay").remove(),clearInterval(g),a.vegas},overlay:function(b){var c={src:null,opacity:null};return a.extend(c,a.vegas.defaults.overlay,b),i.remove(),i.css({margin:"0",padding:"0",position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),c.src===!1&&i.css("backgroundImage","none"),c.src&&i.css("backgroundImage","url("+c.src+")"),c.opacity&&i.css("opacity",c.opacity),i.prependTo("body"),a.vegas},slideshow:function(b,c){var d={step:n,delay:o,preload:!1,loading:!0,backgrounds:m,walk:p};if(a.extend(d,a.vegas.defaults.slideshow,b),d.backgrounds!=m&&(b.step||(d.step=0),b.walk||(d.walk=function(){}),d.preload&&a.vegas("preload",d.backgrounds)),m=d.backgrounds,o=d.delay,n=d.step,p=d.walk,clearInterval(g),!m.length)return a.vegas;var e=function(){0>n&&(n=m.length-1),(n>=m.length||!m[n-1])&&(n=0);var b=m[n++];b.walk=d.walk,b.loading=d.loading,"undefined"==typeof b.fade&&(b.fade=d.fade),b.fade>d.delay&&(b.fade=d.delay),a.vegas(b)};return e(),c||(l=!1,a("body").trigger("vegasstart",[k.get(0),n-1])),l||(g=setInterval(e,d.delay)),a.vegas},next:function(){var b=n;return n&&(a.vegas("slideshow",{step:n},!0),a("body").trigger("vegasnext",[k.get(0),n-1,b-1])),a.vegas},previous:function(){var b=n;return n&&(a.vegas("slideshow",{step:n-2},!0),a("body").trigger("vegasprevious",[k.get(0),n-1,b-1])),a.vegas},jump:function(b){var c=n;return n&&(a.vegas("slideshow",{step:b},!0),a("body").trigger("vegasjump",[k.get(0),n-1,c-1])),a.vegas},stop:function(){var b=n;return n=0,l=null,clearInterval(g),a("body").trigger("vegasstop",[k.get(0),b-1]),a.vegas},pause:function(){return l=!0,clearInterval(g),a("body").trigger("vegaspause",[k.get(0),n-1]),a.vegas},get:function(a){return null===a||"background"==a?k.get(0):"overlay"==a?i.get(0):"step"==a?n-1:"paused"==a?l:void 0},preload:function(b){var c=[];for(var d in b)if(b[d].src){var e=document.createElement("img");e.src=b[d].src,c.push(e)}return a.vegas}};a.vegas=function(b){return q[b]?q[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist"):q.init.apply(this,arguments)},a.vegas.defaults={background:{},slideshow:{},overlay:{}}}(jQuery),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if("object"==typeof a){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;a.length>b;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;a.length>b;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if("object"===c)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.EventEmitter=a}.call(this),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):a.eventie=f}(this),function(a,b){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("eventEmitter"),require("eventie")):a.imagesLoaded=b(a,a.EventEmitter,a.eventie)}(this,function(a,b,c){function d(a,b){for(var c in b)a[c]=b[c];return a}function e(a){return"[object Array]"===m.call(a)}function f(a){var b=[];if(e(a))b=a;else if("number"==typeof a.length)for(var c=0,d=a.length;d>c;c++)b.push(a[c]);else b.push(a);return b}function g(a,b,c){if(!(this instanceof g))return new g(a,b);"string"==typeof a&&(a=document.querySelectorAll(a)),this.elements=f(a),this.options=d({},this.options),"function"==typeof b?c=b:d(this.options,b),c&&this.on("always",c),this.getImages(),j&&(this.jqDeferred=new j.Deferred);var e=this;setTimeout(function(){e.check()})}function h(a){this.img=a}function i(a){this.src=a,n[a]=this}var j=a.jQuery,k=a.console,l=void 0!==k,m=Object.prototype.toString;g.prototype=new b,g.prototype.options={},g.prototype.getImages=function(){this.images=[];for(var a=0,b=this.elements.length;b>a;a++){var c=this.elements[a];"IMG"===c.nodeName&&this.addImage(c);for(var d=c.querySelectorAll("img"),e=0,f=d.length;f>e;e++){var g=d[e];this.addImage(g)}}},g.prototype.addImage=function(a){var b=new h(a);this.images.push(b)},g.prototype.check=function(){function a(a,e){return b.options.debug&&l&&k.log("confirm",a,e),b.progress(a),c++,c===d&&b.complete(),!0}var b=this,c=0,d=this.images.length;if(this.hasAnyBroken=!1,!d)return void this.complete();for(var e=0;d>e;e++){var f=this.images[e];f.on("confirm",a),f.check()}},g.prototype.progress=function(a){this.hasAnyBroken=this.hasAnyBroken||!a.isLoaded;var b=this;setTimeout(function(){b.emit("progress",b,a),b.jqDeferred&&b.jqDeferred.notify&&b.jqDeferred.notify(b,a)})},g.prototype.complete=function(){var a=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var b=this;setTimeout(function(){if(b.emit(a,b),b.emit("always",b),b.jqDeferred){var c=b.hasAnyBroken?"reject":"resolve";b.jqDeferred[c](b)}})},j&&(j.fn.imagesLoaded=function(a,b){var c=new g(this,a,b);return c.jqDeferred.promise(j(this))}),h.prototype=new b,h.prototype.check=function(){var a=n[this.img.src]||new i(this.img.src);if(a.isConfirmed)return void this.confirm(a.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var b=this;a.on("confirm",function(a,c){return b.confirm(a.isLoaded,c),!0}),a.check()},h.prototype.confirm=function(a,b){this.isLoaded=a,this.emit("confirm",this,b)};var n={};return i.prototype=new b,i.prototype.check=function(){if(!this.isChecked){var a=new Image;c.bind(a,"load",this),c.bind(a,"error",this),a.src=this.src,this.isChecked=!0}},i.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},i.prototype.onload=function(a){this.confirm(!0,"onload"),this.unbindProxyEvents(a)},i.prototype.onerror=function(a){this.confirm(!1,"onerror"),this.unbindProxyEvents(a)},i.prototype.confirm=function(a,b){this.isConfirmed=!0,this.isLoaded=a,this.emit("confirm",this,b)},i.prototype.unbindProxyEvents=function(a){c.unbind(a.target,"load",this),c.unbind(a.target,"error",this)},g}),function(a){"use strict";function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function c(a,b){var c=d(a,b)?f:e;c(a,b)}var d,e,f;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},f=function(a,b){a.classList.remove(b)}):(d=function(a,c){return b(c).test(a.className)},e=function(a,b){d(a,b)||(a.className=a.className+" "+b)},f=function(a,c){a.className=a.className.replace(b(c)," ")});var g={hasClass:d,addClass:e,removeClass:f,toggleClass:c,has:d,add:e,remove:f,toggle:c};"function"==typeof define&&define.amd?define(g):a.classie=g}(window);