'use strict';mix_d("SBXGwentCards__multi-brand-creative-desktop:multi-brand-creative-desktop__2ns_y39v","exports @c/dom @c/aui-utils tslib @c/pagemarker @c/logger @c/metrics @c/aui-feature-detect @c/browser-operations @p/a-ajax @c/aui-modal @p/A @c/scoped-dom @c/aui-untrusted-ajax".split(" "),function(Z,Aa,Ba,t,Ca,Da,Ea,Fa,aa,Ga,Ha,Ia,Ja,Ka){function y(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}function B(a,b){return function(c){c=u(a,c);return b?b(c):c}}function ba(a){return Array.isArray(a)?
a.map(function(b){return t.__assign(t.__assign({},b),{width:0,height:0})}):{url:a.url,width:0,height:0}}var D=y(Aa),ca=y(Ba),La=y(Ca),P=y(Da),da=y(Ea),Ma=y(Fa),V=y(aa),Na=y(Ga),ea=y(Ha),J=y(Ia),Oa=y(Ja),Pa=y(Ka),E,F,M;(function(a){a.Cornerstone="CSTONE";a.Axiom="AXIOM"})(M||(M={}));var Qa=(E={},E.e="basebe.ClientErrors.4",E.i="basebe.Impressions.5",E.c="basebe.Clicks.4",E.s="basebe.Swipes.4",E.v="basebe.Viewabilities.4",E.vc="basebe.VisualCompleteness.6",E.ss="basebe.slideshow.1",E),Ra=(F={},F.e=
"basebe.ClientErrors.4",F.i="basebe.Impressions.6",F.c="basebe.Clicks.5",F.s="basebe.Swipes.5",F.v="basebe.Viewabilities.5",F.vc="basebe.VisualCompleteness.7",F.ss="basebe.slideshow.1",F),fa=function(a,b){return"matches"in a?a.matches(b):"msMatchesSelector"in a?a.msMatchesSelector(b):"webkitMatchesSelector"in a?a.webkitMatchesSelector(b):0<=z(b,C().body).indexOf(a)},r=function(a,b){b=b||D["default"].cardRoot;return!a||fa(b,a)?b:b.querySelector(a)},z=function(a,b){return Array.prototype.slice.call((b||
D["default"].cardRoot).querySelectorAll(a))},u=function(a,b){return(b=r("["+a+"]",b))?b.getAttribute(a):null},W=function(a,b){for(;b&&b!==D["default"].cardRoot;){if(fa(b,a))return b;b=b.parentElement}return null},ha=function(a,b){return(b=W("["+a+"]",b))?b.getAttribute(a):null},Q=function(a){if(a)return a=a.getBoundingClientRect(),{left:a.left,right:a.right,top:a.top,bottom:a.bottom};a=C().defaultView;return{left:0,top:0,right:a.innerWidth,bottom:a.innerHeight}},C=function(){return r().ownerDocument},
G=function(a,b){P["default"].log(a,"ERROR",b||"SBX_GWENT")},ia=function(a){var b;a=/\?([^#]+)/.exec(a);if(!a)return[];a=a[1].split("&");var c=null;try{for(var d=t.__values(a),e=d.next();!e.done;e=d.next()){var g=e.value;if(0===g.indexOf("ref_=")){c=g;break}}}catch(k){var f={error:k}}finally{try{e&&!e.done&&(b=d.return)&&b.call(d)}finally{if(f)throw f.error;}}return c?(f=c.split("=").pop()||"")?f.split("_"):[]:[]},ja=function(a,b,c){var d={};if(5<c.length){d.el=c.pop()||null;a:{var e;try{for(var g=
t.__values(c),f=g.next();!f.done;f=g.next()){var k=f.value;if(/^\d+$/.test(k)){var l=k;break a}}}catch(h){var m={error:h}}finally{try{f&&!f.done&&(e=g.return)&&e.call(g)}finally{if(m)throw m.error;}}l=null}d.index=l;d.asin=ha("data-asin",b);d.type=ha("data-avar",b)}a.c(d,b)},Sa=function(a,b){var c=ia(b.href);ja(a,b,c)},Ta=function(a,b){var c=C().defaultView,d=function(e){2!==e.button&&(Sa(a,b),e.metaKey||e.altKey||e.shiftKey||e.ctrlKey||1===e.button||"_blank"===b.target||(e.preventDefault(),c.setTimeout(function(){c.open(b.href,
b.target||"_top")},50)))};b.addEventListener("click",d);b.addEventListener("auxclick",d)},Ua=function(a,b){z("[href]",b).filter(function(c){return!c.classList.contains("a-carousel-button")}).forEach(function(c){Ta(a,c)});z(".amazon-follow",b).forEach(function(c){c.addEventListener("click",function(){var d=ia("?&ref_="+c.getAttribute("data-ref"));ja(a,c,d)})})},Va=B("data-card-metrics-id",function(a){return(a||"").split("_")[0]}),Wa=B("data-var"),Xa=B("data-mrkt"),Ya=B("data-nm",function(a){return"true"===
a}),Za=B("data-rid"),$a=B("data-cid"),ab=B("data-iid"),bb=B("data-idt",function(a){switch(a){case M.Axiom:return M.Axiom;default:return M.Cornerstone}}),cb=B("data-wl",function(a){return a?a.split(","):[]}),db=B("data-slot"),eb=B("data-ts"),fb=function(a){return{id:u("data-asin",a),prime:!!r(".a-icon-prime",a),price:!!r(".a-price",a),savings:!!r('.a-price[data-a-strike="true"]',a),rating:u("data-rt",a),badge:u("data-deal",a)}},R=function(a,b,c){return a>=b&&a<=c},ka=function(a,b){var c=C().defaultView,
d,e=function(){d||(d=c.setTimeout(a,b))};e.cancel=function(){c.clearTimeout(d);d=0};return e},gb=function(a,b){void 0===b&&(b=0);return function(){ca["default"].delay(a,b)}},la=function(a,b,c){var d=(c||{}).ms||25,e=(c||{}).el||C().defaultView,g=ca["default"].throttle(b,d);e.addEventListener(a,g);return function(){e.removeEventListener(a,g)}},S=function(a,b){return la("resize",a,b)},ma=function(a,b){return la("scroll",a,b)},na=JSON.stringify({v:{def:"iab",event:"VIEWED"},programType:"SBC"}),pa=function(a,
b){var c=a.getBoundingClientRect();if(a=c.width*c.height){var d=c.top,e=c.bottom,g=c.left,f=c.right,k=C().defaultView;c=k.innerHeight;g=oa(g,f,k.innerWidth);d=oa(d,e,c);.5<=g*d/a?b():b.cancel()}},oa=function(a,b,c){return 0<=a?Math.max(Math.min(c-a,b-a),0):0<b?Math.max(Math.min(Math.min(b,c),b-a),0):0},qa=function(a){a="/"===a.substr(-1)?a+"v/":a+"/v/";fetch(a+encodeURI(na),{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:na}).then(function(b){b.ok||0===b.status||P["default"].log(b.status+
" "+b.statusText,"ERROR","sbx-ce-vcpm-fetch")}).catch(function(b){P["default"].log(b,"ERROR","sbx-ce-vcpm-fetch")})},hb=function(a,b){var c=function(){pa(b?b:r(),d)},d=ka(function(){var f=u("data-view-pixel",b?b:r());f&&(qa(f),null===b||void 0===b?void 0:b.removeAttribute("data-view-pixel"));e();g();a.v(null,b)},1E3),e=ma(c),g=S(c);c()},ra=function(a){a&&a.forEach(function(b){var c=ka(function(){var d=u("data-view-pixel",b);d&&(qa(d),null===b||void 0===b?void 0:b.removeAttribute("data-view-pixel"))},
1E3);pa(b,c)})},sa=function(a,b){var c=null,d=null;a.addEventListener("touchstart",function(e){c=e.touches[0].pageX});a.addEventListener("touchmove",function(e){null===c&&(c=e.touches[0].pageX);d=e.touches[0].pageX});a.addEventListener("touchend",function(){null!==c&&null!==d&&b(d-c);c=d=null})},ib=function(a){if(Ma["default"].isSupported("touch")){var b=r("[data-track-swipe]"),c=r("[data-trackswipe]"),d=function(e){var g=Math.abs(e);if(30<g){var f=z("[data-view-pixel]");ra(f);a.s({direction:0>e?
"left":"right",length:g})}};b?sa(b,d):c&&sa(c,d)}},jb=function(a,b){var c=Date.now();b=z("img",b);var d=b.length,e=0,g=function(){++e===d&&a.vc({delay:Date.now()-c})};b.forEach(function(f){null!==u("data-lazy",f)&&null!==u("data-src",f)?f.addEventListener("load",function(){f.src===f.dataset.src&&g()}):f.complete?g():f.addEventListener("load",g)})},kb=function(a,b){var c=a.anonymizedRequestId,d=a.campaignId,e=a.idType;a=a.slotName;void 0===b&&(b=!1);var g=b?Ra:Qa,f={anonymizedRequestId:c,campaignId:d,
slotName:a};b&&(f.idType=e);var k=function(l,m){try{var h=da["default"],p=h.event,n=t.__assign({},f);if(m)for(var q in m)Object.prototype.hasOwnProperty.call(m,q)&&(n[q]=m[q]);p.call(h,n,"base-be",g[l],{ssd:!0})}catch(w){G(w)}};return{i:k.bind(null,"i"),v:k.bind(null,"v"),vc:k.bind(null,"vc"),c:k.bind(null,"c"),s:k.bind(null,"s"),ss:k.bind(null,"ss"),e:function(l){k("e",l&&{name:l.name,message:l.message,stack:l.stack})}}},ta=function(a){var b=$a(a);b=kb({anonymizedRequestId:Za(),campaignId:b,idType:bb(a),
slotName:db()},Ya(a));var c=b.i,d=[].map.call(z("[data-asin]",a),fb),e=Va(),g=Wa(a),f=Xa(a),k=eb(a),l=C().defaultView;c.call(b,{asins:d,creativeType:e,creativeVariation:g,market:f,version:k,viewport:l.innerWidth+"x"+l.innerHeight,weblabs:cb(a)});Ua(b,a);jb(b,a);hb(b,a);ib(b)},N=function(a,b){void 0===b&&(b=1);da["default"].count("sbxGwentClient"+a,b)},I={log:function(a){var b=C().defaultView;var c=ab();(b=c&&b.sbxGwentClient&&"number"===typeof b.sbxGwentClient[c]?Date.now()-b.sbxGwentClient[c]:null)?
N(a,b):N("NoPageTime")}},lb=function(a){var b=a.url,c=a.onSuccess,d=a.onError;b||d();Na["default"].get(b,{success:function(e){e&&"ok"===e.status?c(e):d()},error:d,abort:d})},X;(X||(X={})).adFeedbackHandler="adFeedbackHandler";var mb=function(a,b,c,d,e){try{var g=JSON.parse(a),f=t.__read(g,6),k=f[0],l=f[1],m=f[2],h=f[3],p=f[4],n=f[5],q=[];Array.isArray(k)?k.forEach(function(v){return q.push({campaignId:c,creativeId:v})}):q.push({campaignId:c,creativeId:k});var w={adCreativeMetaData:{adCreativeId:Array.isArray(k)?
k[0]:k,adId:b,adImpressionId:l,adNetwork:"aax",adProgramId:1010,adCreativeDetails:q},adPlacementMetaData:{adElementId:m,pageType:h,pageUrl:p,searchTerms:n,slotName:d,adProgramId:1010}};return e+"?pl="+encodeURIComponent(JSON.stringify(w))}catch(v){return null}},nb=function(a){var b=V["default"].setup().define,c=!!u("data-ad-feedback-clicks"),d=!!u("data-ad-feedback-simulate"),e=a||"AdFeedbackSuccess",g="AdFeedbackPlaceholderClick",f=!1;c&&b(X.adFeedbackHandler,"click",function(){I.log(g);"AdFeedbackPlaceholderClick"===
g&&(f=!0)});a=u("data-ad-feedback");b=u("data-ad-feedback-url")||"/gp/aq-feedback/lazyLoad/handler/af-link-handler.html";if(a){c=u("data-slot");var k=u("data-aid"),l=u("data-cid");a=mb(a,k,l,c,b);lb({url:a,onSuccess:function(m){var h=m.html;var p=r('[data-id="afb-content"]');p&&h?(p.innerHTML=h,h=p):h=null;if(m=m.script)p=C().createElement("script"),p.type="text/javascript",p.innerHTML=m,r().appendChild(p);I.log(e);g="AdFeedbackLinkClick";h&&f&&d&&((m=r("a",h))?(m.click(),m=!0):m=!1,I.log(m?"AdFeedbackSimulateClickSuccess":
"AdFeedbackSimulateClickFail"))},onError:function(){I.log("AdFeedbackFallback");f&&d&&I.log("AdFeedbackSimulateClickFail")}})}},pb=function(a,b,c,d,e,g,f){return t.__awaiter(void 0,void 0,void 0,function(){var k,l,m;return t.__generator(this,function(h){switch(h.label){case 0:k=function(){return{adCreativeMetaData:{adCreativeDetails:ob(b,g,f)},adFeedbackLabelId:a}},l=function(p,n,q){N(p);n&&(p=p+"_"+n,q&&(p+="_"+q),N(p))},h.label=1;case 1:return h.trys.push([1,3,,4]),[4,c(k)];case 2:return h.sent(),
l("EnableAdFeedbackSuccess",d,e),[3,4];case 3:return m=h.sent(),l("EnableAdFeedbackFailure",d,e),G(m),[3,4];case 4:return[2]}})})},qb=function(a){if(a){var b=a.split(" ");b.map(function(c,d){0<d&&(b[d]=c.substring(3,c.length))});b.pop();b.shift();return b}},ob=function(a,b,c){var d=[];a.forEach(function(e,g){var f='[data-aid="'+e.adId+'"]';for(var k=r(f),l=b&&b()||document.body,m,h=0;(c?h<c.length:0>h)&&!(m=r(f+' div[class*="'+(null===c||void 0===c?void 0:c[h])+'"] img'));h++);f=(null===m||void 0===
m?void 0:m.getAttribute("src"))||void 0;h=qb((null===m||void 0===m?void 0:m.getAttribute("srcset"))||void 0);var p=(null===h||void 0===h?void 0:h.length)||1;m=[];for(var n=0;n<p;n++)m.push({url:(null===h||void 0===h?void 0:h[n])||""});f={url:f?f:""};if(k){if(k=Q(k),l?(l=Q(l),k.left===l.left||k.right===l.right?l=R(k.left,l.left,l.right)||R(k.right,l.left,l.right):(h=k.left,(h=h>l.left&&h<l.right)||(k=k.right,h=k>l.left&&k<l.right),l=h)):l=void 0,l){l=d.push;k=e.campaignId;h=e.adId;p=e.title;m={lowResolutionImage:ba(f),
highResolutionImages:ba(m)};if(e.selectionSignals){f=e.selectionSignals;switch(f.pastActivity){case "STORE_ONLY":n=1;break;default:n=0}f=t.__assign(t.__assign({},f),{pastActivity:n})}else f=void 0;l.call(d,{campaignId:k,adId:h,adCreativeIndex:g,title:p,adCreativeImage:m,selectionSignals:f,advertiserIdNS:e.advertiserIdNS})}}else P["default"].log("adElement is not found: "+JSON.stringify(e),"WARN","sbx-ce")});return d},ua=function(){z('[data-id="cta"]').forEach(function(a){if(a.parentElement){var b=
r('[data-id*="cta-fallback"]',a.parentElement),c=r(".a-truncate",a),d=r(".a-truncate-full",a);c&&d&&(d.clientHeight>c.clientHeight&&b?(b.style.display="block",a.parentElement.removeChild(a)):(b=a.parentElement.getAttribute("aria-hidden"),b&&"false"!==b||(b=a.getAttribute("data-label")||d.innerHTML,a.parentElement.setAttribute("aria-label",b)),(c=r('[data-id*="cta-chevron"]',a))&&!d.hasAttribute("data-chevron")&&(d.setAttribute("data-chevron","true"),a=d.innerHTML.split(" "),b=a.pop(),c=c.innerHTML,
d.innerHTML="<span>"+a.join(" ")+" </span><span>"+b+"&nbsp;"+c+"</span>")))}})},rb=function(a){var b=u("data-src",a)||"",c=u("data-srcset",a)||"",d=a.cloneNode();d.removeAttribute("data-src");d.removeAttribute("data-srcset");d.removeAttribute("data-lazy");d.srcset=c;d.src=b;a.parentNode&&a.parentNode.insertBefore(d,a);d.onload=function(){a.style.opacity="0";I.log("LazyLoaded")}},sb=function(){var a=z('[class*="eelModalRoot"]');a&&a.forEach(function(b,c){var d=u("data-modal-trigger",b),e=u("data-title",
b),g=u("data-modal-settings",b);g=JSON.parse(g||"{}");if(d){c="eel-cards-modal-"+c;var f="."+b.className.split(" ")[0],k=ea["default"].create(c,f,{closeButton:(null===g||void 0===g?void 0:g.closeButton)||!1,a11yOpenMessage:e||"Energy Efficiency & Product Fiche",width:(null===g||void 0===g?void 0:g.width)||800});e=aa.setup();g=e.define;e=e.attach;k.once("beforeShow",function(){J["default"].loadDescendantImagesManually(b)});g("modal-handler-"+d,["click"],function(){k.show()});g("modal-close-handler-"+
d,["click"],function(){k.hide()});g=r('[data-mix-operations="modal-handler-'+d+'"]');d=r('[data-mix-operations="modal-close-handler-'+d+'"]');g&&d&&(e("modalHandler",g),e("modalClose",d))}})},tb=function(a){var b=function(d,e){d={$event:{preventDefault:J["default"].$.noop,stopPropagation:J["default"].$.noop},$target:d.getContent().find('[data-a-tab-name="'+e+'"]'),data:{name:"energyEfficiencyTabSet"}};J["default"].trigger("a:declarative:a-tabs:click",d)},c=function(d,e){var g=d&&d.$event,f=d&&d.data||
{},k=f.name;g&&g.preventDefault&&g.preventDefault();g&&g.stopPropagation&&g.stopPropagation();d&&g&&f&&k&&e&&(g=e.get(k),g||(J["default"].on("a:popover:beforeShow:"+k,function(l){var m,h,p;l.popover&&l.popover.getContent&&(l=l.popover.getContent(),null===(h=null===(m=null===l||void 0===l?void 0:l.find(".a-manually-loaded"))||void 0===m?void 0:m.parent())||void 0===h?void 0:h.css("min-height",null!==(p=f.modalHeight)&&void 0!==p?p:800),J["default"].loadDescendantImagesManually(l))}),g=e.create(d.$target,
f)),g&&(g.show(),f.activeTabName&&b(g,f.activeTabName)))};a&&a.when("a-secondary-view").execute("RegisterEnergyEfficiencyEventMobile",function(d){J["default"].declarative("card-energy-efficiency-secondary-view","click",function(e){c(e,d)})})},ub=function(a,b){return function(){var c,d=z("[data-pixel]"),e=0;try{for(var g=t.__values(d),f=g.next();!f.done;f=g.next()){var k=f.value,l=a,m=Q(k),h=Q(l);if(R(m.left,h.left,h.right)||R(m.right,h.left,h.right)){var p=k.getAttribute("data-pixel");p&&p.length&&
((new Image).src=p);k.removeAttribute("data-pixel");++e}}}catch(q){var n={error:q}}finally{try{f&&!f.done&&(c=g.return)&&c.call(g)}finally{if(n)throw n.error;}}n=z("[data-view-pixel]");e===d.length&&0===n.length?b():ra(n)}},vb=function(a,b){var c=ub(a,function(){d();e();"function"===typeof b&&b()}),d=ma(c,{el:a}),e=S(c);c();return c},wb=function(){},va=function(a){a.setAttribute("disabled","disabled");if(a=W(".a-button",a))a.classList.add("a-button-disabled"),a.classList.remove("a-button-focus")},
wa=function(a){a.removeAttribute("disabled");(a=W(".a-button",a))&&a.classList.remove("a-button-disabled")},xa=function(a,b){var c=gb(b,350);a.addEventListener("click",c);return function(){a.removeEventListener("click",c)}},xb=function(a,b,c){var d=r('[data-id="track"]'),e=r('[data-button="prev"]'),g=r('[data-button="next"]'),f=12;if(!d||!e||!g)return wb;var k=!!C().querySelector('[dir="rtl"]'),l=0,m=0,h=2,p=function(){var v=c&&c.minWidth||350,A=c&&c.maxWidth||600,T=[[0,0],[2*v,1],[1E3,2],[1500,3],
[1900,4]],x=c&&c.borderWidth||0,ya=C().defaultView,O=parseInt(ya.getComputedStyle(d).width,10);h=(T.find(function(K){return K[0]>O})||[O,4])[1]||0;if(!(1>h)){var H=Math.floor(O/h)+2*x-24;f=12;H>A&&(H=A,f=(O-H*h)/(2*h));H<v&&(H=v,f=(O-H*h)/(2*h));Array.from(d.children).forEach(function(K){K.style.width=H+"px";K.style.minWidth=H+"px";K.style.maxWidth=H+"px";K.style.marginLeft=f+"px";K.style.marginRight=f+"px"});d.children&&d.children[0]&&(l=parseInt(ya.getComputedStyle(d.children[0]).width,10))}},n=
function(v){p();v>d.children.length-h&&(v=m=d.children.length-h);d.style.transform="translateX("+(k?"":"-")+v*(l+2*f)+"px)";wa(e);wa(g);m===d.children.length-h&&va(g);0===m&&va(e)};a=function(v){var A="next"===v?1:-1;return function(){m+=A;n(m)}};S(function(){return n(m)});g.addEventListener("click",a("next"));e.addEventListener("click",a("prev"));var q=xa(g,b),w=xa(e,b);n(m);return function(){q();w()}},L=function(a,b){return a.querySelector("[class*="+b+"]")},yb=function(a,b,c){a=JSON.parse(a);a.adCreativeMetaData=
b.adCreativeMetaData;a.feedbackFormContainerId=c;return encodeURI(JSON.stringify(a))},zb=function(a,b,c,d){return t.__awaiter(void 0,void 0,void 0,function(){var e,g,f,k,l,m,h,p;return t.__generator(this,function(n){e="adFeedbackModal_"+a;n=(null===(p=L(b,"ad-feedback-modal-container"))||void 0===p?void 0:p.className)||"";g="."+b.className+" ."+n.replace(" ",".");k=(f=c().adCreativeMetaData.adCreativeDetails)?f.length:0;l=b.dataset.deviceType||"desktop";n=Math.max(560,125*k+130);var q=k;var w=l;q=
d&&"true"===d.toLowerCase()?2>q?590:810:"tablet"==w?2>q?545:775:2>q?430:645;m={a11yOpenMessage:"",width:n,height:q};h=ea["default"].create(e,g,m);return[2,h]})})},Cb=function(a,b,c,d,e,g){var f="rtl"===document.getElementsByTagName("html")[0].dir?"ad-feedback-loading-spinnner-rtl":"ad-feedback-loading-spinnner";var k=L(D["default"].cardRoot,f);a.on("beforeShow",function(){return t.__awaiter(void 0,void 0,void 0,function(){var l;return t.__generator(this,function(m){switch(m.label){case 0:return l=
Ab(a,b,c),[4,a.render(function(h){var p="250px",n=c().adCreativeMetaData.adCreativeDetails;n&&2>n.length&&(p="150px");k.style.marginTop=p;h.innerHTML="";p=h.appendChild;n=document.getElementsByTagName("html")[0].dir;var q=D["default"].createElement("div"),w=D["default"].createElement("div");q.innerHTML=e;"rtl"===n?(q.setAttribute("style",'box-sizing: border-box; color: rgb(15, 17, 17); font-family: "Amazon Ember", Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; margin-bottom: 0px; margin-left: 28px; margin-right: 0px; margin-top: 0px; min-height: 56px; padding-bottom: 16px; padding-left: 0px; padding-right: 25px; padding-top: 16px; text-align: right; text-rendering: optimizelegibility; visibility: visible;'),
w.setAttribute("style",'background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 242, 242); background-image: linear-gradient(to left, #EFEFEF 66.72%, #FFFFFF); background-origin: padding-box; background-position: 0% 0%; background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(213, 217, 217); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; color: rgb(15, 17, 17); display: block; font-family: "Amazon Ember", Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 24px; padding-right: 24px; padding-top: 0px; position: relative; text-align: right; visibility: visible; z-index: 10;')):
(q.setAttribute("style",'box-sizing: border-box; color: rgb(15, 17, 17); font-family: "Amazon Ember", Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; margin-bottom: 0px; margin-left: 0px; margin-right: 28px; margin-top: 0px; min-height: 56px; padding-bottom: 16px; padding-left: 25px; padding-right: 0px; padding-top: 16px; text-align: left; text-rendering: optimizelegibility; visibility: visible;'),w.setAttribute("style",'background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 242, 242); background-image: linear-gradient(to right, #EFEFEF 66.72%, #FFFFFF); background-origin: padding-box; background-position: 0% 0%; background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(213, 217, 217); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; color: rgb(15, 17, 17); display: block; font-family: "Amazon Ember", Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 24px; padding-right: 24px; padding-top: 0px; position: relative; text-align: left; visibility: visible; z-index: 10;'));
w.appendChild(q);p.call(h,w);p=document.getElementsByTagName("html")[0].dir;n=D["default"].createElement("div");"rtl"===p?n.setAttribute("style","padding-bottom: 16px; padding-right: 50px ; padding-top: 16px; justify-content: center; align-items: center;"):n.setAttribute("style","padding-bottom: 16px; padding-left: 50px ; padding-top: 16px; justify-content: center; align-items: center;");Bb(k,n,d,l,g);h.appendChild(n)})];case 1:return m.sent(),[2]}})})})},Ab=function(a,b,c){c=c();var d=c.adCreativeMetaData.adCreativeDetails;
null===d||void 0===d?void 0:d.sort(function(e,g){return e.adCreativeIndex<g.adCreativeIndex?-1:1});return yb(b,c,a.id)},Bb=function(a,b,c,d,e){b.appendChild(a);Pa["default"].post("/af/multi-creative/feedback-form",{accepts:"application/json",contentType:"application/json",additionalHeaders:{"Accept-Language":""===c?"en-US":c}},{pl:d}).then(function(g){return t.__awaiter(void 0,void 0,void 0,function(){var f,k,l;return t.__generator(this,function(m){f=D["default"].createElement("div");f.innerHTML=
String(g.responseBody);for(k=0;k<f.children.length;++k)l=f.children[k],"SCRIPT"===l.tagName?Y("script",l,b):"LINK"===l.tagName?Y("link",l,b):Y("div",l,b);b.removeChild(a);return[2]})})}).catch(function(){b.innerHTML=e})},Y=function(a,b,c){var d=D["default"].createElement(a);d.innerHTML=b.innerHTML;b.getAttributeNames().forEach(function(e){d.setAttribute(e,b.getAttribute(e)||"")});c.appendChild(d)},za={},Db=function(a,b){return t.__awaiter(void 0,void 0,void 0,function(){var c,d,e,g,f,k,l,m,h;return t.__generator(this,
function(p){c=L(a,"ad-feedback-primary-link");d=b().adFeedbackLabelId;e=V["default"].setup();g="open-modal"+d;f=b().adCreativeMetaData.adCreativeDetails;k=a.dataset;l=k.isDsaEnabled;m=k.weblabTreatment;h=String(l);"undefined"===h&&(h=f&&0<f.length?f[0].selectionSignals?"true":"false":"false");"true"===h&&"T1"!==m&&(h="false");e.attach(g,c);e.define(g,"click",function(){return t.__awaiter(void 0,void 0,void 0,function(){var n;return t.__generator(this,function(q){switch(q.label){case 0:return(n=za[d])?
[3,2]:[4,zb(d,a,b,h)];case 1:n=q.sent();var w=a.dataset,v=w.formHeaderText,A=w.dsaFormHeaderText;Cb(n,w.adFeedbackPayload,b,w.currentLocale,"true"===h?A:v,w.formLoadErrorText);za[d]=n;q.label=2;case 2:return n.show(),[2]}})})});return[2]})})},Eb=function(a,b){var c=V["default"].setup(),d="mouse-enter"+b;b="mouse-leave"+b;var e=L(a,"ad-feedback-primary-link"),g=L(a,"ad-feedback-text-desktop"),f=L(a,"ad-feedback-sprite");c.attach(d,e);c.define(d,"mouseenter",function(){f.style.backgroundPosition="0px -12px";
g.style.color="#111111"});c.attach(b,e);c.define(b,"mouseleave",function(){f.style.backgroundPosition="0px 0px";g.style.color="#555"})},U,Fb=function(a){return function(){return t.__awaiter(void 0,void 0,void 0,function(){var b,c,d,e,g,f,k,l,m,h,p,n,q,w;return t.__generator(this,function(v){switch(v.label){case 0:return I.log("Loaded"),b=a||{},c=b.loadAdFeedback,d=b.onLoad,e=b.onInit,g=b.isMobile,f=b.enableAdFeedback,k=b.creativeContainer,l=b.creativeImageContainer,e&&e(),[4,La["default"].pageReady];
case 1:v.sent();I.log("Ready");try{var A=r(".sbx-no-js",void 0);A&&A.classList.remove("sbx-no-js");try{var T=z("[data-cid]");T.length?T.forEach(ta):ta()}catch(x){G(x)}try{ua(),S(ua)}catch(x){G(x)}try{z('img[data-lazy="true"]').forEach(rb)}catch(x){G(x)}r('[class*="eelModalRoot"]')?sb():r('[data-action*="card-energy-efficiency-"]')&&tb(window.P);d&&d();A=g;if(void 0!==A&&!window.sbxGwentClientDPR)try{window.sbxGwentClientDPR=!0,N((A?"Mobile":"Desktop")+"DPR"+(4>=Math.round(2*window.devicePixelRatio)/
2?Math.round(2*window.devicePixelRatio)/2:"4Plus"))}catch(x){G(x)}}catch(x){G(x)}if(!f)return[3,6];v.label=2;case 2:v.trys.push([2,5,,6]);m=u("data-ad-feedback-label-id");h=u("data-ad-creative-list");p=u("data-device-type")||"";n=u("data-tablet-env")||"";if(!m||!h)return[3,4];q=JSON.parse(h);return[4,pb(m,q,f,p,n,k,l)];case 3:v.sent(),v.label=4;case 4:return[3,6];case 5:return w=v.sent(),G(w),[3,6];case 6:try{c&&nb()}catch(x){G(x)}return[2]}})})}}({onLoad:function(){if(U=r('[data-id="carousel"]')){var a=
function(){},b=vb(U,function(){a()});r('[data-enhanced-mbc="true"]')&&(a=xb(U,b,{minWidth:304,maxWidth:460,borderWidth:1,isLifestyle:!0}))}},loadAdFeedback:!0,enableAdFeedback:function(a){return t.__awaiter(void 0,void 0,void 0,function(){var b,c,d;return t.__generator(this,function(e){switch(e.label){case 0:return b=a(),c=Oa["default"].cardRoot.getElementsByClassName("adFeedbackMainComponent_"+b.adFeedbackLabelId)[0],d=c.dataset.isSponsoredLabelActive,"false"===(d||"false").toLowerCase()?[2]:[4,
Eb(c,b.adFeedbackLabelId)];case 1:return e.sent(),[4,Db(c,a)];case 2:return e.sent(),[2]}})})},creativeContainer:function(){return U},creativeImageContainer:["mainImage","customImageContainer"]});Z._operationNames=[];Z.card=Fb});
