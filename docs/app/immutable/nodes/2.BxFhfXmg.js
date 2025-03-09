import{s as _t,x as Nt,n as Ut,e as un,y as we,z as Ie,A as Jn,o as Qn}from"../chunks/BuafDj9_.js";import{S as Ft,i as Lt,d as O,c as st,z as Zn,A as $n,l as J,B as ue,C as ta,H as me,t as ht,a as nt,o as ea,p as na,q as Ne,D as aa,u as de,w as ge,x as he,v as pe,E as mn,e as mt,f as V,j as q,b as W,g as St,F as ra,s as Et,k as sa,m as ia,n as oa}from"../chunks/CSimxX-B.js";function la(t,e){const n={},a={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],o=e[s];if(o){for(const c in i)c in o||(a[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[s]=o}else for(const c in i)r[c]=1}for(const i in a)i in n||(n[i]=void 0);return n}function fa(t){return typeof t=="object"&&t!==null?t:{}}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Te={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},Me={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};function ca(t){const{beat:e,fade:n,beatFade:a,bounce:r,shake:s,flash:i,spin:o,spinPulse:c,spinReverse:u,pulse:m,fixedWidth:h,inverse:p,border:A,listItem:b,flip:x,size:l,rotation:v,pull:k}=t,y={"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":s,"fa-flash":i,"fa-spin":o,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":h,"fa-inverse":p,"fa-border":A,"fa-li":b,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both",[`fa-${l}`]:typeof l<"u"&&l!==null,[`fa-rotate-${v}`]:typeof v<"u"&&v!==null&&v!==0,[`fa-pull-${k}`]:typeof k<"u"&&k!==null,"fa-swap-opacity":t.swapOpacity};return Object.keys(y).map(S=>y[S]?S:null).filter(S=>S)}function ua(t){return t=t-0,t===t}function ma(t){return ua(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function da(t){return typeof t=="string"?t:Object.keys(t).reduce((e,n)=>e+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+t[n]+";","")}function dn(t,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(s=>dn(t,s)),r=Object.keys(e.attributes||{}).reduce((s,i)=>{const o=e.attributes[i];return i==="style"?s.attrs.style=da(o):i.indexOf("aria-")===0||i.indexOf("data-")===0?s.attrs[i.toLowerCase()]=o:s.attrs[ma(i)]=o,s},{attrs:{}});return t(e.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function ga(t,e,n){return(e=pa(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_e(Object(n),!0).forEach(function(a){ga(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ha(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pa(t){var e=ha(t,"string");return typeof e=="symbol"?e:e+""}const Fe=()=>{};let be={},gn={},hn=null,pn={mark:Fe,measure:Fe};try{typeof window<"u"&&(be=window),typeof document<"u"&&(gn=document),typeof MutationObserver<"u"&&(hn=MutationObserver),typeof performance<"u"&&(pn=performance)}catch{}const{userAgent:Le=""}=be.navigator||{},H=be,P=gn,ze=hn,Ct=pn;H.document;const R=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",bn=~Le.indexOf("MSIE")||~Le.indexOf("Trident/");var ba=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ya=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,yn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},va={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},vn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",zt="duotone",xa="sharp",ka="sharp-duotone",xn=[C,zt,xa,ka],Aa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Pa={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Sa=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ea={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ca=["fak","fa-kit","fakd","fa-kit-duotone"],Re={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Oa=["kit"],wa={kit:{"fa-kit":"fak"}},Ia=["fak","fakd"],Na={kit:{fak:"fa-kit"}},De={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ta=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ma=["fak","fa-kit","fakd","fa-kit-duotone"],_a={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Fa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},La={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},qt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},za=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Kt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ta,...za],Ra=["solid","regular","light","thin","duotone","brands"],kn=[1,2,3,4,5,6,7,8,9,10],Da=kn.concat([11,12,13,14,15,16,17,18,19,20]),ja=[...Object.keys(La),...Ra,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY].concat(kn.map(t=>"".concat(t,"x"))).concat(Da.map(t=>"w-".concat(t))),Ya={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const L="___FONT_AWESOME___",Jt=16,An="fa",Pn="svg-inline--fa",Q="data-fa-i2svg",Qt="data-fa-pseudo-element",Ua="data-fa-pseudo-element-pending",ye="data-prefix",ve="data-icon",je="fontawesome-i2svg",Wa="async",Ha=["HTML","HEAD","STYLE","SCRIPT"],Sn=(()=>{try{return!0}catch{return!1}})();function yt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[C]}})}const En=f({},yn);En[C]=f(f(f(f({},{"fa-duotone":"duotone"}),yn[C]),Re.kit),Re["kit-duotone"]);const Ga=yt(En),Zt=f({},Ea);Zt[C]=f(f(f(f({},{duotone:"fad"}),Zt[C]),De.kit),De["kit-duotone"]);const Ye=yt(Zt),$t=f({},qt);$t[C]=f(f({},$t[C]),Na.kit);const xe=yt($t),te=f({},Fa);te[C]=f(f({},te[C]),wa.kit);yt(te);const Xa=ba,Cn="fa-layers-text",Ba=ya,Va=f({},Aa);yt(Va);const qa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wt=va,Ka=[...Oa,...ja],dt=H.FontAwesomeConfig||{};function Ja(t){var e=P.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Qa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}P&&typeof P.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Qa(Ja(n));r!=null&&(dt[a]=r)});const On={styleDefault:"solid",familyDefault:C,cssPrefix:An,replacementClass:Pn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};dt.familyPrefix&&(dt.cssPrefix=dt.familyPrefix);const rt=f(f({},On),dt);rt.autoReplaceSvg||(rt.observeMutations=!1);const g={};Object.keys(On).forEach(t=>{Object.defineProperty(g,t,{enumerable:!0,set:function(e){rt[t]=e,gt.forEach(n=>n(g))},get:function(){return rt[t]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(t){rt.cssPrefix=t,gt.forEach(e=>e(g))},get:function(){return rt.cssPrefix}});H.FontAwesomeConfig=g;const gt=[];function Za(t){return gt.push(t),()=>{gt.splice(gt.indexOf(t),1)}}const U=Jt,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $a(t){if(!t||!R)return;const e=P.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=P.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return P.head.insertBefore(e,a),t}const tr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pt(){let t=12,e="";for(;t-- >0;)e+=tr[Math.random()*62|0];return e}function it(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ke(t){return t.classList?it(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function wn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function er(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(wn(t[n]),'" '),"").trim()}function Rt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ae(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function nr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(i," ").concat(o)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:u}}function ar(t){let{transform:e,width:n=Jt,height:a=Jt,startCentered:r=!1}=t,s="";return r&&bn?s+="translate(".concat(e.x/U-n/2,"em, ").concat(e.y/U-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/U,"em), calc(-50% + ").concat(e.y/U,"em)) "):s+="translate(".concat(e.x/U,"em, ").concat(e.y/U,"em) "),s+="scale(".concat(e.size/U*(e.flipX?-1:1),", ").concat(e.size/U*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var rr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function In(){const t=An,e=Pn,n=g.cssPrefix,a=g.replacementClass;let r=rr;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let Ue=!1;function Ht(){g.autoAddCss&&!Ue&&($a(In()),Ue=!0)}var sr={mixout(){return{dom:{css:In,insertCss:Ht}}},hooks(){return{beforeDOMElementCreation(){Ht()},beforeI2svg(){Ht()}}}};const z=H||{};z[L]||(z[L]={});z[L].styles||(z[L].styles={});z[L].hooks||(z[L].hooks={});z[L].shims||(z[L].shims=[]);var M=z[L];const Nn=[],Tn=function(){P.removeEventListener("DOMContentLoaded",Tn),Tt=1,Nn.map(t=>t())};let Tt=!1;R&&(Tt=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Tt||P.addEventListener("DOMContentLoaded",Tn));function ir(t){R&&(Tt?setTimeout(t,0):Nn.push(t))}function vt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?wn(t):"<".concat(e," ").concat(er(n),">").concat(a.map(vt).join(""),"</").concat(e,">")}function We(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Gt=function(e,n,a,r){var s=Object.keys(e),i=s.length,o=n,c,u,m;for(a===void 0?(c=1,m=e[s[0]]):(c=0,m=a);c<i;c++)u=s[c],m=o(m,e[u],u,e);return m};function or(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ee(t){const e=or(t);return e.length===1?e[0].toString(16):null}function lr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function He(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function ne(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=He(e);typeof M.hooks.addPack=="function"&&!a?M.hooks.addPack(t,He(e)):M.styles[t]=f(f({},M.styles[t]||{}),r),t==="fas"&&ne("fa",e)}const{styles:bt,shims:fr}=M,Mn=Object.keys(xe),cr=Mn.reduce((t,e)=>(t[e]=Object.keys(xe[e]),t),{});let Pe=null,_n={},Fn={},Ln={},zn={},Rn={};function ur(t){return~Ka.indexOf(t)}function mr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ur(r)?r:null}const Dn=()=>{const t=a=>Gt(bt,(r,s,i)=>(r[i]=Gt(s,a,{}),r),{});_n=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),Fn=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),Rn=t((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const e="far"in bt||g.autoFetchSvg,n=Gt(fr,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});Ln=n.names,zn=n.unicodes,Pe=Dt(g.styleDefault,{family:g.familyDefault})};Za(t=>{Pe=Dt(t.styleDefault,{family:g.familyDefault})});Dn();function Se(t,e){return(_n[t]||{})[e]}function dr(t,e){return(Fn[t]||{})[e]}function K(t,e){return(Rn[t]||{})[e]}function jn(t){return Ln[t]||{prefix:null,iconName:null}}function gr(t){const e=zn[t],n=Se("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function G(){return Pe}const Yn=()=>({prefix:null,iconName:null,rest:[]});function hr(t){let e=C;const n=Mn.reduce((a,r)=>(a[r]="".concat(g.cssPrefix,"-").concat(r),a),{});return xn.forEach(a=>{(t.includes(n[a])||t.some(r=>cr[a].includes(r)))&&(e=a)}),e}function Dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=C}=e,a=Ga[n][t];if(n===zt&&!t)return"fad";const r=Ye[n][t]||Ye[n][a],s=t in M.styles?t:null;return r||s||null}function pr(t){let e=[],n=null;return t.forEach(a=>{const r=mr(g.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Ge(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function jt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Kt.concat(Ma),s=Ge(t.filter(h=>r.includes(h))),i=Ge(t.filter(h=>!Kt.includes(h))),o=s.filter(h=>(a=h,!vn.includes(h))),[c=null]=o,u=hr(s),m=f(f({},pr(i)),{},{prefix:Dt(c,{family:u})});return f(f(f({},m),xr({values:t,family:u,styles:bt,config:g,canonical:m,givenPrefix:a})),br(n,a,m))}function br(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const s=e==="fa"?jn(r):{},i=K(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!bt.far&&bt.fas&&!g.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const yr=xn.filter(t=>t!==C||t!==zt),vr=Object.keys(qt).filter(t=>t!==C).map(t=>Object.keys(qt[t])).flat();function xr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=t,o=n===zt,c=e.includes("fa-duotone")||e.includes("fad"),u=i.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(c||u||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&yr.includes(n)&&(Object.keys(s).find(p=>vr.includes(p))||i.autoFetchSvg)){const p=Sa.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=K(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=G()||"fas"),a}class kr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=f(f({},this.definitions[s]||{}),r[s]),ne(s,r[s]);const i=xe[C][s];i&&ne(i,r[s]),Dn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],c=o[2];e[s]||(e[s]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[s][u]=o)}),e[s][i]=o}),e}}let Xe=[],et={};const at={},Ar=Object.keys(at);function Pr(t,e){let{mixoutsTo:n}=e;return Xe=t,et={},Object.keys(at).forEach(a=>{Ar.indexOf(a)===-1&&delete at[a]}),Xe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{et[i]||(et[i]=[]),et[i].push(s[i])})}a.provides&&a.provides(at)}),n}function ae(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(et[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function Z(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(et[t]||[]).forEach(s=>{s.apply(null,n)})}function X(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return at[t]?at[t].apply(null,e):void 0}function re(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||G();if(e)return e=K(n,e)||e,We(Un.definitions,n,e)||We(M.styles,n,e)}const Un=new kr,Sr=()=>{g.autoReplaceSvg=!1,g.observeMutations=!1,Z("noAuto")},Er={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(Z("beforeI2svg",t),X("pseudoElements2svg",t),X("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,ir(()=>{Or({autoReplaceSvgRoot:e}),Z("watch",t)})}},Cr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:K(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Dt(t[0]);return{prefix:n,iconName:K(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(g.cssPrefix,"-"))>-1||t.match(Xa))){const e=jt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||G(),iconName:K(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=G();return{prefix:e,iconName:K(e,t)||t}}}},w={noAuto:Sr,config:g,dom:Er,parse:Cr,library:Un,findIconDefinition:re,toHtml:vt},Or=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=P}=t;(Object.keys(M.styles).length>0||g.autoFetchSvg)&&R&&g.autoReplaceSvg&&w.dom.i2svg({node:e})};function Yt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>vt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!R)return;const n=P.createElement("div");return n.innerHTML=t.html,n.children}}),t}function wr(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:i}=t;if(Ae(i)&&n.found&&!a.found){const{width:o,height:c}=n,u={x:o/c/2,y:.5};r.style=Rt(f(f({},s),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ir(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(g.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:i}),children:a}]}]}function Ee(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:c,titleId:u,extra:m,watchable:h=!1}=t,{width:p,height:A}=n.found?n:e,b=Ia.includes(a),x=[g.replacementClass,r?"".concat(g.cssPrefix,"-").concat(r):""].filter(E=>m.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(m.classes).join(" ");let l={children:[],attributes:f(f({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(A)})};const v=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(p/A*16*.0625,"em")}:{};h&&(l.attributes[Q]=""),o&&(l.children.push({tag:"title",attributes:{id:l.attributes["aria-labelledby"]||"title-".concat(u||pt())},children:[o]}),delete l.attributes.title);const k=f(f({},l),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:s,symbol:i,styles:f(f({},v),m.styles)}),{children:y,attributes:S}=n.found&&e.found?X("generateAbstractMask",k)||{children:[],attributes:{}}:X("generateAbstractIcon",k)||{children:[],attributes:{}};return k.children=y,k.attributes=S,i?Ir(k):wr(k)}function Be(t){const{content:e,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=t,c=f(f(f({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(c[Q]="");const u=f({},i.styles);Ae(r)&&(u.transform=ar({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);const m=Rt(u);m.length>0&&(c.style=m);const h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Nr(t){const{content:e,title:n,extra:a}=t,r=f(f(f({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=Rt(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Xt}=M;function se(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Wt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Wt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Tr={found:!1,width:512,height:512};function Mr(t,e){!Sn&&!g.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ie(t,e){let n=e;return e==="fa"&&g.styleDefault!==null&&(e=G()),new Promise((a,r)=>{if(n==="fa"){const s=jn(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Xt[e]&&Xt[e][t]){const s=Xt[e][t];return a(se(s))}Mr(t,e),a(f(f({},Tr),{},{icon:g.showMissingIcons&&t?X("missingIconAbstract")||{}:{}}))})}const Ve=()=>{},oe=g.measurePerformance&&Ct&&Ct.mark&&Ct.measure?Ct:{mark:Ve,measure:Ve},ut='FA "6.7.2"',_r=t=>(oe.mark("".concat(ut," ").concat(t," begins")),()=>Wn(t)),Wn=t=>{oe.mark("".concat(ut," ").concat(t," ends")),oe.measure("".concat(ut," ").concat(t),"".concat(ut," ").concat(t," begins"),"".concat(ut," ").concat(t," ends"))};var Ce={begin:_r,end:Wn};const wt=()=>{};function qe(t){return typeof(t.getAttribute?t.getAttribute(Q):null)=="string"}function Fr(t){const e=t.getAttribute?t.getAttribute(ye):null,n=t.getAttribute?t.getAttribute(ve):null;return e&&n}function Lr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(g.replacementClass)}function zr(){return g.autoReplaceSvg===!0?It.replace:It[g.autoReplaceSvg]||It.replace}function Rr(t){return P.createElementNS("http://www.w3.org/2000/svg",t)}function Dr(t){return P.createElement(t)}function Hn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Rr:Dr}=e;if(typeof t=="string")return P.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(Hn(s,{ceFn:n}))}),a}function jr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const It={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Hn(n),e)}),e.getAttribute(Q)===null&&g.keepOriginalSource){let n=P.createComment(jr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~ke(e).indexOf(g.replacementClass))return It.replace(t);const a=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===g.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>vt(s)).join(`
`);e.setAttribute(Q,""),e.innerHTML=r}};function Ke(t){t()}function Gn(t,e){const n=typeof e=="function"?e:wt;if(t.length===0)n();else{let a=Ke;g.mutateApproach===Wa&&(a=H.requestAnimationFrame||Ke),a(()=>{const r=zr(),s=Ce.begin("mutate");t.map(r),s(),n()})}}let Oe=!1;function Xn(){Oe=!0}function le(){Oe=!1}let Mt=null;function Je(t){if(!ze||!g.observeMutations)return;const{treeCallback:e=wt,nodeCallback:n=wt,pseudoElementsCallback:a=wt,observeMutationsRoot:r=P}=t;Mt=new ze(s=>{if(Oe)return;const i=G();it(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!qe(o.addedNodes[0])&&(g.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&g.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&qe(o.target)&&~qa.indexOf(o.attributeName))if(o.attributeName==="class"&&Fr(o.target)){const{prefix:c,iconName:u}=jt(ke(o.target));o.target.setAttribute(ye,c||i),u&&o.target.setAttribute(ve,u)}else Lr(o.target)&&n(o.target)})}),R&&Mt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Yr(){Mt&&Mt.disconnect()}function Ur(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function Wr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=jt(ke(t));return r.prefix||(r.prefix=G()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=dr(r.prefix,t.innerText)||Se(r.prefix,ee(t.innerText))),!r.iconName&&g.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Hr(t){const e=it(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return g.autoA11y&&(n?e["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(a||pt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Gr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Wr(t),s=Hr(t),i=ae("parseNodeAttributes",{},t);let o=e.styleParser?Ur(t):[];return f({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:Xr}=M;function Bn(t){const e=g.autoReplaceSvg==="nest"?Qe(t,{styleParser:!1}):Qe(t);return~e.extra.classes.indexOf(Cn)?X("generateLayersText",t,e):X("generateSvgReplacementMutation",t,e)}function Br(){return[...Ca,...Kt]}function Ze(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();const n=P.documentElement.classList,a=m=>n.add("".concat(je,"-").concat(m)),r=m=>n.remove("".concat(je,"-").concat(m)),s=g.autoFetchSvg?Br():vn.concat(Object.keys(Xr));s.includes("fa")||s.push("fa");const i=[".".concat(Cn,":not([").concat(Q,"])")].concat(s.map(m=>".".concat(m,":not([").concat(Q,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=it(t.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const c=Ce.begin("onTree"),u=o.reduce((m,h)=>{try{const p=Bn(h);p&&m.push(p)}catch(p){Sn||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise((m,h)=>{Promise.all(u).then(p=>{Gn(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),m()})}).catch(p=>{c(),h(p)})})}function Vr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bn(t).then(n=>{n&&Gn([n],e)})}function qr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:re(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:re(r||{})),t(a,f(f({},n),{},{mask:r}))}}const Kr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:c=[],attributes:u={},styles:m={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:A}=t;return Yt(f({type:"icon"},t),()=>(Z("beforeDOMElementCreation",{iconDefinition:t,params:e}),g.autoA11y&&(i?u["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(o||pt()):(u["aria-hidden"]="true",u.focusable="false")),Ee({icons:{main:se(A),mask:r?se(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:f(f({},T),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:u,styles:m,classes:c}})))};var Jr={mixout(){return{icon:qr(Kr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ze,t.nodeCallback=Vr,t}}},provides(t){t.i2svg=function(e){const{node:n=P,callback:a=()=>{}}=e;return Ze(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:c,mask:u,maskId:m,extra:h}=n;return new Promise((p,A)=>{Promise.all([ie(a,i),u.iconName?ie(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[x,l]=b;p([e,Ee({icons:{main:x,mask:l},prefix:i,iconName:a,transform:o,symbol:c,maskId:m,title:r,titleId:s,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:i}=e;const o=Rt(i);o.length>0&&(a.style=o);let c;return Ae(s)&&(c=X("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Qr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Yt({type:"layer"},()=>{Z("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Zr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return Yt({type:"counter",content:t},()=>(Z("beforeDOMElementCreation",{content:t,params:e}),Nr({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(g.cssPrefix,"-layers-counter"),...a]}})))}}}},$r={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,title:a=null,classes:r=[],attributes:s={},styles:i={}}=e;return Yt({type:"text",content:t},()=>(Z("beforeDOMElementCreation",{content:t,params:e}),Be({content:t,transform:f(f({},T),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(g.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(bn){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();i=u.width/c,o=u.height/c}return g.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Be({content:e.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const ts=new RegExp('"',"ug"),$e=[1105920,1112319],tn=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Pa),Ya),_a),fe=Object.keys(tn).reduce((t,e)=>(t[e.toLowerCase()]=tn[e],t),{}),es=Object.keys(fe).reduce((t,e)=>{const n=fe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ns(t){const e=t.replace(ts,""),n=lr(e,0),a=n>=$e[0]&&n<=$e[1],r=e.length===2?e[0]===e[1]:!1;return{value:ee(r?e[0]:e),isSecondary:a||r}}function as(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(fe[n]||{})[r]||es[n]}function en(t,e){const n="".concat(Ua).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=it(t.children).filter(p=>p.getAttribute(Qt)===e)[0],o=H.getComputedStyle(t,e),c=o.getPropertyValue("font-family"),u=c.match(Ba),m=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(i&&!u)return t.removeChild(i),a();if(u&&h!=="none"&&h!==""){const p=o.getPropertyValue("content");let A=as(c,m);const{value:b,isSecondary:x}=ns(p),l=u[0].startsWith("FontAwesome");let v=Se(A,b),k=v;if(l){const y=gr(b);y.iconName&&y.prefix&&(v=y.iconName,A=y.prefix)}if(v&&!x&&(!i||i.getAttribute(ye)!==A||i.getAttribute(ve)!==k)){t.setAttribute(n,k),i&&t.removeChild(i);const y=Gr(),{extra:S}=y;S.attributes[Qt]=e,ie(v,A).then(E=>{const D=Ee(f(f({},y),{},{icons:{main:E,mask:Yn()},prefix:A,iconName:k,extra:S,watchable:!0})),I=P.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=D.map(j=>vt(j)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function rs(t){return Promise.all([en(t,"::before"),en(t,"::after")])}function ss(t){return t.parentNode!==document.head&&!~Ha.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Qt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function nn(t){if(R)return new Promise((e,n)=>{const a=it(t.querySelectorAll("*")).filter(ss).map(rs),r=Ce.begin("searchPseudoElements");Xn(),Promise.all(a).then(()=>{r(),le(),e()}).catch(()=>{r(),le(),n()})})}var is={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=nn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=P}=e;g.searchPseudoElements&&nn(n)}}};let an=!1;var os={mixout(){return{dom:{unwatch(){Xn(),an=!0}}}},hooks(){return{bootstrap(){Je(ae("mutationObserverCallbacks",{}))},noAuto(){Yr()},watch(t){const{observeMutationsRoot:e}=t;an?le():Je(ae("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const rn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var ls={mixout(){return{parse:{transform:t=>rn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=rn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(o," ").concat(c," ").concat(u)},h={transform:"translate(".concat(s/2*-1," -256)")},p={outer:i,inner:m,path:h};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),p.path)}]}]}}}};const Bt={x:0,y:0,width:"100%",height:"100%"};function sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function fs(t){return t.tag==="g"?t.children:[t]}var cs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?jt(n.split(" ").map(r=>r.trim())):Yn();return a.prefix||(a.prefix=G()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=e;const{width:c,icon:u}=r,{width:m,icon:h}=s,p=nr({transform:o,containerWidth:m,iconWidth:c}),A={tag:"rect",attributes:f(f({},Bt),{},{fill:"white"})},b=u.children?{children:u.children.map(sn)}:{},x={tag:"g",attributes:f({},p.inner),children:[sn(f({tag:u.tag,attributes:f(f({},u.attributes),p.path)},b))]},l={tag:"g",attributes:f({},p.outer),children:[x]},v="mask-".concat(i||pt()),k="clip-".concat(i||pt()),y={tag:"mask",attributes:f(f({},Bt),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,l]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:fs(h)},y]};return n.push(S,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(v,")")},Bt)}),{children:n,attributes:a}}}},us={provides(t){let e=!1;H.matchMedia&&(e=H.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=f(f({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:f(f({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:f(f({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:f(f({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:f(f({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:f(f({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ms={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},ds=[sr,Jr,Qr,Zr,$r,is,os,ls,cs,us,ms];Pr(ds,{mixoutsTo:w});w.noAuto;w.config;w.library;w.dom;const ce=w.parse;w.findIconDefinition;w.toHtml;const gs=w.icon;w.layer;w.text;w.counter;let Vn=!1;try{Vn=!0}catch{}function hs(...t){!Vn&&console&&typeof console.error=="function"&&console.error(...t)}function on(t){if(t&&typeof t=="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ce.icon)return ce.icon(t);if(t===null)return null;if(t&&typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Vt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?{[t]:e}:{}}function ps(t){let e,n,a=[t[2]],r={};for(let s=0;s<a.length;s+=1)r=Nt(r,a[s]);return{c(){e=ta("svg"),n=new me(!0),this.h()},l(s){e=$n(s,"svg",{});var i=J(e);n=ue(i,!0),i.forEach(O),this.h()},h(){n.a=null,Zn(e,r)},m(s,i){st(s,e,i),n.m(t[1],e),t[7](e)},p:Ut,i:Ut,o:Ut,d(s){s&&O(e),t[7](null)}}}function bs(t,e,n){let{tag:a}=e,{props:r}=e,{children:s}=e,{style:i=null}=e,{ref:o=null}=e;if(a!=="svg")throw new Error('SvgElement requires a tag of "svg"');function c(b){return(b==null?void 0:b.reduce((x,l)=>x+(l.tag?u(l):l),""))||""}function u({tag:b,props:x,children:l}){const v=Object.keys(x).map(k=>`${k}="${x[k]}"`).join(" ");return`<${b} ${v}>${c(l)}</${b}>`}const m=c(s),h=r!=null&&r.style?`${r.style}${i||""}`:i,p={...r,style:h};function A(b){un[b?"unshift":"push"](()=>{o=b,n(0,o)})}return t.$$set=b=>{"tag"in b&&n(3,a=b.tag),"props"in b&&n(4,r=b.props),"children"in b&&n(5,s=b.children),"style"in b&&n(6,i=b.style),"ref"in b&&n(0,o=b.ref)},[o,m,p,a,r,s,i,A]}class ys extends Ft{constructor(e){super(),Lt(this,e,bs,ps,_t,{tag:3,props:4,children:5,style:6,ref:0})}}function ln(t){let e,n,a;const r=[t[2],{style:t[1]}];function s(o){t[28](o)}let i={};for(let o=0;o<r.length;o+=1)i=Nt(i,r[o]);return t[0]!==void 0&&(i.ref=t[0]),e=new ys({props:i}),un.push(()=>aa(e,"ref",s)),{c(){pe(e.$$.fragment)},l(o){he(e.$$.fragment,o)},m(o,c){ge(e,o,c),a=!0},p(o,c){const u=c[0]&6?la(r,[c[0]&4&&fa(o[2]),c[0]&2&&{style:o[1]}]):{};!n&&c[0]&1&&(n=!0,u.ref=o[0],Jn(()=>n=!1)),e.$set(u)},i(o){a||(nt(e.$$.fragment,o),a=!0)},o(o){ht(e.$$.fragment,o),a=!1},d(o){de(e,o)}}}function vs(t){let e,n,a=t[2]&&ln(t);return{c(){a&&a.c(),e=Ne()},l(r){a&&a.l(r),e=Ne()},m(r,s){a&&a.m(r,s),st(r,e,s),n=!0},p(r,s){r[2]?a?(a.p(r,s),s[0]&4&&nt(a,1)):(a=ln(r),a.c(),nt(a,1),a.m(e.parentNode,e)):a&&(ea(),ht(a,1,1,()=>{a=null}),na())},i(r){n||(nt(a),n=!0)},o(r){ht(a),n=!1},d(r){r&&O(e),a&&a.d(r)}}}function xs(t,e,n){const a=["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"];let r=we(e,a),{border:s=!1}=e,{mask:i=null}=e,{maskId:o=null}=e,{fixedWidth:c=!1}=e,{inverse:u=!1}=e,{flip:m=!1}=e,{icon:h=null}=e,{listItem:p=!1}=e,{pull:A=null}=e,{pulse:b=!1}=e,{rotation:x=null}=e,{size:l=null}=e,{spin:v=!1}=e,{spinPulse:k=!1}=e,{spinReverse:y=!1}=e,{beat:S=!1}=e,{fade:E=!1}=e,{beatFade:D=!1}=e,{bounce:I=!1}=e,{shake:j=!1}=e,{symbol:ot=!1}=e,{title:_=""}=e,{titleId:Y=null}=e,{transform:F=null}=e,{swapOpacity:$=!1}=e,{ref:N=null}=e,{style:lt=null}=e;const B=on(h),xt=Vt("classes",[...ca(e),...(e.class||"").split(" ")]),kt=Vt("transform",typeof F=="string"?ce.transform(F):F),At=Vt("mask",on(i)),ft=gs(B,{...xt,...kt,...At,symbol:ot,title:_,titleId:Y,maskId:o});let tt=null;if(!ft)hs("Could not find icon",B);else{const{abstract:d}=ft;tt=dn((ct,qn,Kn)=>({tag:ct,props:qn,children:Kn}),d[0],r)}function Pt(d){N=d,n(0,N)}return t.$$set=d=>{n(35,e=Nt(Nt({},e),Ie(d))),n(34,r=we(e,a)),"border"in d&&n(3,s=d.border),"mask"in d&&n(4,i=d.mask),"maskId"in d&&n(5,o=d.maskId),"fixedWidth"in d&&n(6,c=d.fixedWidth),"inverse"in d&&n(7,u=d.inverse),"flip"in d&&n(8,m=d.flip),"icon"in d&&n(9,h=d.icon),"listItem"in d&&n(10,p=d.listItem),"pull"in d&&n(11,A=d.pull),"pulse"in d&&n(12,b=d.pulse),"rotation"in d&&n(13,x=d.rotation),"size"in d&&n(14,l=d.size),"spin"in d&&n(15,v=d.spin),"spinPulse"in d&&n(16,k=d.spinPulse),"spinReverse"in d&&n(17,y=d.spinReverse),"beat"in d&&n(18,S=d.beat),"fade"in d&&n(19,E=d.fade),"beatFade"in d&&n(20,D=d.beatFade),"bounce"in d&&n(21,I=d.bounce),"shake"in d&&n(22,j=d.shake),"symbol"in d&&n(23,ot=d.symbol),"title"in d&&n(24,_=d.title),"titleId"in d&&n(25,Y=d.titleId),"transform"in d&&n(26,F=d.transform),"swapOpacity"in d&&n(27,$=d.swapOpacity),"ref"in d&&n(0,N=d.ref),"style"in d&&n(1,lt=d.style)},e=Ie(e),[N,lt,tt,s,i,o,c,u,m,h,p,A,b,x,l,v,k,y,S,E,D,I,j,ot,_,Y,F,$,Pt]}class ks extends Ft{constructor(e){super(),Lt(this,e,xs,vs,_t,{border:3,mask:4,maskId:5,fixedWidth:6,inverse:7,flip:8,icon:9,listItem:10,pull:11,pulse:12,rotation:13,size:14,spin:15,spinPulse:16,spinReverse:17,beat:18,fade:19,beatFade:20,bounce:21,shake:22,symbol:23,title:24,titleId:25,transform:26,swapOpacity:27,ref:0,style:1},null,[-1,-1])}}function As(t){let e,n,a,r,s;return n=new ks({props:{icon:t[0]?Me:Te}}),{c(){e=q("button"),pe(n.$$.fragment),this.h()},l(i){e=V(i,"BUTTON",{class:!0});var o=J(e);he(n.$$.fragment,o),o.forEach(O),this.h()},h(){mt(e,"class","svelte-1qvilbc")},m(i,o){st(i,e,o),ge(n,e,null),a=!0,r||(s=mn(e,"click",t[1]),r=!0)},p(i,[o]){const c={};o&1&&(c.icon=i[0]?Me:Te),n.$set(c)},i(i){a||(nt(n.$$.fragment,i),a=!0)},o(i){ht(n.$$.fragment,i),a=!1},d(i){i&&O(e),de(n),r=!1,s()}}}function Ps(t,e,n){let a="",r=!1;async function s(){if(navigator.clipboard&&window.isSecureContext)try{await navigator.clipboard.writeText(a),n(0,r=!0),setTimeout(()=>{n(0,r=!1)},2e3)}catch(c){console.error("Could not copy text: ",c),i(a)}else i(a)}function i(c){const u=document.createElement("textarea");u.value=c,u.style.top="0",u.style.left="0",u.style.position="fixed",document.body.appendChild(u),u.focus(),u.select();try{const h=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+h),n(0,r=!0),setTimeout(()=>{n(0,r=!1)},2e3)}catch(m){console.error("Fallback: Oops, unable to copy",m),alert("Fallback: Copy failed.")}document.body.removeChild(u)}let{textToCopy:o="This is the text to copy."}=e;return t.$$set=c=>{"textToCopy"in c&&n(2,o=c.textToCopy)},t.$$.update=()=>{t.$$.dirty&4&&(a=o)},[r,s,o]}class Ss extends Ft{constructor(e){super(),Lt(this,e,Ps,As,_t,{textToCopy:2})}}function fn(t){let e,n;return{c(){e=q("h2"),n=oa(t[1])},l(a){e=V(a,"H2",{});var r=J(e);n=ia(r,t[1]),r.forEach(O)},m(a,r){st(a,e,r),W(e,n)},p(a,r){r&2&&sa(n,a[1])},d(a){a&&O(e)}}}function cn(t){let e,n;return{c(){e=q("small"),n=new me(!1),this.h()},l(a){e=V(a,"SMALL",{class:!0});var r=J(e);n=ue(r,!1),r.forEach(O),this.h()},h(){n.a=null,mt(e,"class","svelte-jakce0")},m(a,r){st(a,e,r),n.m(t[2],e)},p(a,r){r&4&&n.p(a[2])},d(a){a&&O(e)}}}function Es(t){let e,n,a,r,s,i,o,c,u,m,h='<div class="cat svelte-jakce0"><div class="dog svelte-jakce0"><i class="fal fa-smile"></i> <div>Blitz!</div></div></div>',p,A,b;a=new Ss({props:{textToCopy:t[0]}});let x=t[1]&&fn(t),l=t[2]&&cn(t);return{c(){e=q("section"),n=q("div"),pe(a.$$.fragment),r=Et(),x&&x.c(),s=Et(),i=q("div"),o=new me(!1),c=Et(),l&&l.c(),u=Et(),m=q("div"),m.innerHTML=h,this.h()},l(v){e=V(v,"SECTION",{class:!0});var k=J(e);n=V(k,"DIV",{class:!0});var y=J(n);he(a.$$.fragment,y),r=St(y),x&&x.l(y),s=St(y),i=V(y,"DIV",{});var S=J(i);o=ue(S,!1),S.forEach(O),c=St(y),l&&l.l(y),u=St(y),m=V(y,"DIV",{class:!0,"data-svelte-h":!0}),ra(m)!=="svelte-1cfdoow"&&(m.innerHTML=h),y.forEach(O),k.forEach(O),this.h()},h(){o.a=null,mt(m,"class","father-div svelte-jakce0"),mt(n,"class","main"),mt(e,"class","svelte-jakce0")},m(v,k){st(v,e,k),W(e,n),ge(a,n,null),W(n,r),x&&x.m(n,null),W(n,s),W(n,i),o.m(t[0],i),W(n,c),l&&l.m(n,null),W(n,u),W(n,m),p=!0,A||(b=mn(m,"click",t[3]),A=!0)},p(v,[k]){const y={};k&1&&(y.textToCopy=v[0]),a.$set(y),v[1]?x?x.p(v,k):(x=fn(v),x.c(),x.m(n,s)):x&&(x.d(1),x=null),(!p||k&1)&&o.p(v[0]),v[2]?l?l.p(v,k):(l=cn(v),l.c(),l.m(n,u)):l&&(l.d(1),l=null)},i(v){p||(nt(a.$$.fragment,v),p=!0)},o(v){ht(a.$$.fragment,v),p=!1},d(v){v&&O(e),de(a),x&&x.d(),l&&l.d(),A=!1,b()}}}async function Cs(){try{const t=await fetch("./data/prompts.json");if(!t.ok)throw new Error("Network response was not ok");return await t.json()}catch(t){return console.error("Failed to fetch prompts:",t),null}}function Os(t,e,n){let a,r,s,i,o=null,c="",u=new Set,m=null,h=!1,p="Story Blitz",A=["Protagonist","Central figure","Main character","Lead character","Hero(ine)"],b=A[0],x="",l=y=>{if(!h&&y){let S=Math.floor(Math.random()*y.length);return y[S].description}return y?y[Math.floor(Math.random()*y.length)].name:"[...]"},v=y=>y[Math.floor(Math.random()*y.length)];Qn(async()=>{n(4,o=await Cs()),o&&(n(9,a=s(o)),n(0,c=i()))});function k(){n(6,h=!h),n(0,c=i())}return t.$$.update=()=>{t.$$.dirty&192&&n(8,s=(y=null)=>{if(!y)return;let{archetypes:S,protagonists:E,incidents:D,settings:I,goals:j,obstacles:ot,challenges:_,environments:Y,tones:F,transformations:$,problems:N,genres:lt,adventures:B,valuables:xt,resolutions:kt,flaws:At,powers:ft,creatures:tt,introductions:Pt,plots:d=[]}=y;if(n(10,r=S),n(1,p=Pt[Math.floor(Math.random()*Pt.length)].name),n(7,b=h?A[Math.floor(Math.random()*A.length)]:S[Math.floor(Math.random()*S.length)].name),d.length>0){let ct=Math.floor(Math.random()*d.length)||null;n(2,x=ct?`<b>${d[ct].name}:</b> ${d[ct].description}`:"")}return[{id:1,body:`${l(D)}. ${b} ${l(E)} in ${v(I)} to ${l(j)}, facing ${l(ot)} and ${l(_)} along the way.`},{id:2,body:`${b} ${l(E)}  ${l(D)}, experiences ${l(_)} and ${l(B)}, and returns to ${l(Y)} transformed.`},{id:3,body:`${b} ${l(E)} embarks on a journey to find ${l(xt)} and ${l(j)}.`},{id:4,body:`${b} ${l(E)} travels to ${l(F)} ${v(I)}, experiences ${l($)}, and returns to ${l(Y)} with ${l(N)}.`},{id:5,body:`${b} ${l(E)} travels to ${l(Y)}, experiences ${l($)}, and returns to ${l(Y)} with ${l(xt)}.`},{id:6,body:`${l(F)} and ${l(lt)} story that involves ${l(N)}, ${l(D)}, ${l(_)}  and ${l(B)}, leading to ${l(kt)}.`},{id:7,body:`${l(lt)} story that depicts ${l(F)} ${l(_)} of ${l(E)} due to ${l(At)}, ${l(ft)}, and ${l(tt)}, leading to ${l(kt)}.`},{id:8,body:`${b} ${l(E)} undergoes ${l(N)}, ${l($)} from ${v(I)} to ${l(j)}, after a period of ${l(_)} and ${l(B)}.`},{id:10,body:`${l(tt)} ${l(B)} and ${l(N)}, and saves the ${v(I)}.`},{id:11,body:`${b} ${l(tt)} overcomes ${l(N)} through ${l(At)} and ${l(ft)}`}]}),t.$$.dirty&1904&&(i=()=>{n(7,b=h||r.length<1?A[Math.floor(Math.random()*A.length)]:r[Math.floor(Math.random()*r.length)].name),u.size===a.length&&(u.clear(),n(9,a=s(o)),console.log("All prompts have been used. Starting over!"));do n(5,m=a[Math.floor(Math.random()*a.length)]);while(u.has(m.id));return u.add(m.id),m.body})},n(9,a=null),n(10,r=null),[c,p,x,k,o,m,h,b,s,a,r]}class Ns extends Ft{constructor(e){super(),Lt(this,e,Os,Es,_t,{})}}export{Ns as component};
