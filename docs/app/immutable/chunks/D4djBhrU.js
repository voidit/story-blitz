var we=Object.defineProperty;var ye=(t,e,n)=>e in t?we(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var x=(t,e,n)=>ye(t,typeof e!="symbol"?e+"":e,n);import{n as ht,s as _e,o as $t,t as ve}from"./B2QSKqcC.js";new URL("sveltekit-internal://");function be(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Ae(t){return t.split("%25").map(decodeURI).join("%25")}function Se(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function pt({href:t}){return t.split("#")[0]}function ke(t,e,n,a=!1){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];a&&s.push("hash");for(const i of s)Object.defineProperty(r,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return r}function Ee(...t){let e=5381;for(const n of t)if(typeof n=="string"){let a=n.length;for(;a;)e=e*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)e=e*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Re(t){const e=atob(t),n=new Uint8Array(e.length);for(let a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return n.buffer}const Ie=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&M.delete(bt(t)),Ie(t,e));const M=new Map;function Ue(t,e){const n=bt(t,e),a=document.querySelector(n);if(a!=null&&a.textContent){let{body:r,...s}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&M.set(n,{body:r,init:s,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Re(r)),Promise.resolve(new Response(r,s))}return window.fetch(t,e)}function Le(t,e,n){if(M.size>0){const a=bt(t,n),r=M.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);M.delete(a)}}return window.fetch(e,n)}function bt(t,e){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const r=[];e.headers&&r.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&r.push(e.body),a+=`[data-hash="${Ee(...r)}"]`}return a}const Te=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function xe(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ce(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return gt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return gt(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const u=Te.exec(c),[,p,w,f,m]=u;return e.push({name:f,matcher:m,optional:!!p,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return gt(c)}).join("")}).join("")}/?$`),params:e}}function Pe(t){return!/^\([^)]+\)$/.test(t)}function Ce(t){return t.slice(1).split("/").filter(Pe)}function Oe(t,e,n){const a={},r=t.slice(1),s=r.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=r[o-i];if(c.chained&&c.rest&&i&&(l=r.slice(o-i,o+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){a[c.name]=l;const u=e[o+1],p=r[o+1];u&&!u.rest&&u.optional&&p&&c.chained&&(i=0),!u&&!p&&Object.keys(a).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function gt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ne({nodes:t,server_loads:e,dictionary:n,matchers:a}){const r=new Set(e);return Object.entries(n).map(([o,[c,l,u]])=>{const{pattern:p,params:w}=xe(o),f={id:o,exec:m=>{const h=p.exec(m);if(h)return Oe(h,w,a)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[r.has(o),t[o]]}}function Wt(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function jt(t,e,n=JSON.stringify){const a=n(e);try{sessionStorage[t]=a}catch{}}const j=[];function At(t,e=ht){let n;const a=new Set;function r(o){if(_e(t,o)&&(t=o,n)){const c=!j.length;for(const l of a)l[1](),j.push(l,t);if(c){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function s(o){r(o(t))}function i(o,c=ht){const l=[o,c];return a.add(l),a.size===1&&(n=e(r,s)||ht),o(t),()=>{a.delete(l),a.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:i}}var Ht;const T=((Ht=globalThis.__sveltekit_sa6z14)==null?void 0:Ht.base)??"";var Kt;const $e=((Kt=globalThis.__sveltekit_sa6z14)==null?void 0:Kt.assets)??T,je="1741066253831",Yt="sveltekit:snapshot",Jt="sveltekit:scroll",Xt="sveltekit:states",De="sveltekit:pageurl",F="sveltekit:history",K="sveltekit:navigation",Z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},X=location.origin;function Zt(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function St(){return{x:pageXOffset,y:pageYOffset}}function D(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Dt={...Z,"":Z.hover};function Qt(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function te(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Qt(t)}}function yt(t,e,n){let a;try{if(a=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&a.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";a.hash=`#${o}${a.hash}`}}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,s=!a||!!r||it(a,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===X&&t.hasAttribute("download");return{url:a,external:s,target:r,download:i}}function Q(t){let e=null,n=null,a=null,r=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)a===null&&(a=D(o,"preload-code")),r===null&&(r=D(o,"preload-data")),e===null&&(e=D(o,"keepfocus")),n===null&&(n=D(o,"noscroll")),s===null&&(s=D(o,"reload")),i===null&&(i=D(o,"replacestate")),o=Qt(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Dt[a??"off"],preload_data:Dt[r??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ft(t){const e=At(t);let n=!0;function a(){n=!0,e.update(i=>i)}function r(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:a,set:r,subscribe:s}}const ee={v:()=>{}};function Fe(){const{set:t,subscribe:e}=At(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${$e}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==je;return i&&(t(!0),ee.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:a}}function it(t,e,n){return t.origin!==X||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Sn(t){}function Vt(t){const e=Be(t),n=new ArrayBuffer(e.length),a=new DataView(n);for(let r=0;r<n.byteLength;r++)a.setUint8(r,e.charCodeAt(r));return n}const Ve="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Be(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,a=0;for(let r=0;r<t.length;r++)n<<=6,n|=Ve.indexOf(t[r]),a+=6,a===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=a=0);return a===12?(n>>=4,e+=String.fromCharCode(n)):a===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const qe=-1,Ge=-2,Me=-3,ze=-4,He=-5,Ke=-6;function We(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,a=Array(n.length);function r(s,i=!1){if(s===qe)return;if(s===Me)return NaN;if(s===ze)return 1/0;if(s===He)return-1/0;if(s===Ke)return-0;if(i)throw new Error("Invalid input");if(s in a)return a[s];const o=n[s];if(!o||typeof o!="object")a[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return a[s]=l(r(o[1]));switch(c){case"Date":a[s]=new Date(o[1]);break;case"Set":const u=new Set;a[s]=u;for(let f=1;f<o.length;f+=1)u.add(r(o[f]));break;case"Map":const p=new Map;a[s]=p;for(let f=1;f<o.length;f+=2)p.set(r(o[f]),r(o[f+1]));break;case"RegExp":a[s]=new RegExp(o[1],o[2]);break;case"Object":a[s]=Object(o[1]);break;case"BigInt":a[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);a[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=r(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],h=Vt(m),d=new f(h);a[s]=d;break}case"ArrayBuffer":{const f=o[1],m=Vt(f);a[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);a[s]=c;for(let l=0;l<o.length;l+=1){const u=o[l];u!==Ge&&(c[l]=r(u))}}else{const c={};a[s]=c;for(const l in o){const u=o[l];c[l]=r(u)}}return a[s]}return r(0)}const ne=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ne];const Ye=new Set([...ne]);[...Ye];function Je(t){return t.filter(e=>e!=null)}class ct{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class kt{constructor(e,n){this.status=e,this.location=n}}class Et extends Error{constructor(e,n,a){super(a),this.status=e,this.text=n}}const Xe="x-sveltekit-invalidated",Ze="x-sveltekit-trailing-slash";function tt(t){return t instanceof ct||t instanceof Et?t.status:500}function Qe(t){return t instanceof Et?t.text:"Internal Error"}let I,W,mt;const tn=$t.toString().includes("$$")||/function \w+\(\) \{\}/.test($t.toString());tn?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},W={current:null},mt={current:!1}):(I=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},W=new class{constructor(){x(this,"current",$state.raw(null))}},mt=new class{constructor(){x(this,"current",$state.raw(!1))}},ee.v=()=>mt.current=!0);function en(t){Object.assign(I,t)}const nn="/__data.json",an=".html__data.json";function rn(t){return t.endsWith(".html")?t.replace(/\.html$/,an):t.replace(/\/$/,"")+nn}const on=new Set(["icon","shortcut icon","apple-touch-icon"]),$=Wt(Jt)??{},Y=Wt(Yt)??{},C={url:Ft({}),page:Ft({}),navigating:At(null),updated:Fe()};function Rt(t){$[t]=St()}function sn(t,e){let n=t+1;for(;$[n];)delete $[n],n+=1;for(n=e+1;Y[n];)delete Y[n],n+=1}function B(t){return location.href=t.href,new Promise(()=>{})}async function ae(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(T||"/");t&&await t.update()}}function Bt(){}let It,_t,et,P,vt,A;const nt=[],at=[];let U=null;const re=new Set,cn=new Set,z=new Set;let v={branch:[],error:null,url:null},Ut=!1,rt=!1,qt=!0,J=!1,q=!1,oe=!1,Lt=!1,se,E,L,N;const H=new Set;async function In(t,e,n){var r,s,i,o;document.URL!==location.href&&(location.href=location.href),A=t,await((s=(r=t.hooks).init)==null?void 0:s.call(r)),It=Ne(t),P=document.documentElement,vt=e,_t=t.nodes[0],et=t.nodes[1],_t(),et(),E=(i=history.state)==null?void 0:i[F],L=(o=history.state)==null?void 0:o[K],E||(E=L=Date.now(),history.replaceState({...history.state,[F]:E,[K]:L},""));const a=$[E];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await _n(vt,n):await mn(A.hash?me(new URL(location.href)):location.href,{replaceState:!0}),yn()}function ln(){nt.length=0,Lt=!1}function ie(t){at.some(e=>e==null?void 0:e.snapshot)&&(Y[t]=at.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function ce(t){var e;(e=Y[t])==null||e.forEach((n,a)=>{var r,s;(s=(r=at[a])==null?void 0:r.snapshot)==null||s.restore(n)})}function Gt(){Rt(E),jt(Jt,$),ie(L),jt(Yt,Y)}async function Tt(t,e,n,a){return G({type:"goto",url:Zt(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:a,accept:()=>{e.invalidateAll&&(Lt=!0),e.invalidate&&e.invalidate.forEach(wn)}})}async function fn(t){if(t.id!==(U==null?void 0:U.id)){const e={};H.add(e),U={id:t.id,token:e,promise:fe({...t,preload:e}).then(n=>(H.delete(e),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function wt(t){var n;const e=(n=await ft(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(a=>a==null?void 0:a[1]()))}function le(t,e,n){var s;v=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(I,t.props.page),se=new A.root({target:e,props:{...t.props,stores:C,components:at},hydrate:n,sync:!1}),ce(L);const r={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};z.forEach(i=>i(r)),rt=!0}function ot({url:t,params:e,branch:n,status:a,error:r,route:s,form:i}){let o="never";if(T&&(t.pathname===T||t.pathname===T+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);t.pathname=be(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:r,route:s},props:{constructors:Je(n).map(f=>f.node.component),page:Ct(I)}};i!==void 0&&(c.props.form=i);let l={},u=!I,p=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],h=v.branch[f];(m==null?void 0:m.data)!==(h==null?void 0:h.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${p}`]=l),p+=1)}return(!v.url||t.href!==v.url.href||v.error!==r||i!==void 0&&i!==I.form||u)&&(c.props.page={error:r,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:a,url:new URL(t),form:i??null,data:u?l:I.data}),c}async function xt({loader:t,parent:e,url:n,params:a,route:r,server_data_node:s}){var u,p,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let f=function(...h){for(const d of h){const{href:y}=new URL(d,n);c.dependencies.add(y)}};const m={route:new Proxy(r,{get:(h,d)=>(o&&(c.route=!0),h[d])}),params:new Proxy(a,{get:(h,d)=>(o&&c.params.add(d),h[d])}),data:(s==null?void 0:s.data)??null,url:ke(n,()=>{o&&(c.url=!0)},h=>{o&&c.search_params.add(h)},A.hash),async fetch(h,d){let y;h instanceof Request?(y=h.url,d={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:[...h.headers].length?h.headers:void 0,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...d}):y=h;const S=new URL(y,n);return o&&f(S.href),S.origin===n.origin&&(y=S.href.slice(n.origin.length)),rt?Le(y,S.href,d):Ue(y,d)},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),e()},untrack(h){o=!1;try{return h()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(p=l.universal)!=null&&p.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function Mt(t,e,n,a,r,s){if(Lt)return!0;if(!r)return!1;if(r.parent&&t||r.route&&e||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(s[i]!==v.params[i])return!0;for(const i of r.dependencies)if(nt.some(o=>o(new URL(i))))return!0;return!1}function Pt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function un(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const a of n){const r=t.searchParams.getAll(a),s=e.searchParams.getAll(a);r.every(i=>s.includes(i))&&s.every(i=>r.includes(i))&&n.delete(a)}return n}function zt({error:t,url:e,route:n,params:a}){return{type:"loaded",state:{error:t,url:e,route:n,params:a,branch:[]},props:{page:Ct(I),constructors:[]}}}async function fe({id:t,invalidating:e,url:n,params:a,route:r,preload:s}){if((U==null?void 0:U.id)===t)return H.delete(U.token),U.promise;const{errors:i,layouts:o,leaf:c}=r,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const p=v.url?t!==st(v.url):!1,w=v.route?r.id!==v.route.id:!1,f=un(v.url,n);let m=!1;const h=l.map((g,_)=>{var O;const b=v.branch[_],k=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||Mt(m,w,p,f,(O=b.server)==null?void 0:O.uses,a));return k&&(m=!0),k});if(h.some(Boolean)){try{u=await he(n,h)}catch(g){const _=await V(g,{url:n,params:a,route:{id:t}});return H.has(s)?zt({error:_,url:n,params:a,route:r}):lt({status:tt(g),error:_,url:n,route:r})}if(u.type==="redirect")return u}const d=u==null?void 0:u.nodes;let y=!1;const S=l.map(async(g,_)=>{var ut;if(!g)return;const b=v.branch[_],k=d==null?void 0:d[_];if((!k||k.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!Mt(y,w,p,f,(ut=b.universal)==null?void 0:ut.uses,a))return b;if(y=!0,(k==null?void 0:k.type)==="error")throw k;return xt({loader:g[1],url:n,params:a,route:r,parent:async()=>{var Nt;const Ot={};for(let dt=0;dt<_;dt+=1)Object.assign(Ot,(Nt=await S[dt])==null?void 0:Nt.data);return Ot},server_data_node:Pt(k===void 0&&g[0]?{type:"skip"}:k??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of S)g.catch(()=>{});const R=[];for(let g=0;g<l.length;g+=1)if(l[g])try{R.push(await S[g])}catch(_){if(_ instanceof kt)return{type:"redirect",location:_.location};if(H.has(s))return zt({error:await V(_,{params:a,url:n,route:{id:r.id}}),url:n,params:a,route:r});let b=tt(_),k;if(d!=null&&d.includes(_))b=_.status??b,k=_.error;else if(_ instanceof ct)k=_.body;else{if(await C.updated.check())return await ae(),await B(n);k=await V(_,{params:a,url:n,route:{id:r.id}})}const O=await dn(g,R,i);return O?ot({url:n,params:a,branch:R.slice(0,O.idx).concat(O.node),status:b,error:k,route:r}):await de(n,{id:r.id},k,b)}else R.push(void 0);return ot({url:n,params:a,branch:R,status:200,error:null,route:r,form:e?void 0:null})}async function dn(t,e,n){for(;t--;)if(n[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function lt({status:t,error:e,url:n,route:a}){const r={};let s=null;if(A.server_loads[0]===0)try{const o=await he(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==X||n.pathname!==location.pathname||Ut)&&await B(n)}try{const o=await xt({loader:_t,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Pt(s)}),c={node:await et(),loader:et,universal:null,server:null,data:null};return ot({url:n,params:r,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof kt)return Tt(new URL(o.location,location.href),{},0);throw o}}function hn(t){let e;try{if(e=A.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);A.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}async function ft(t,e){if(t&&!it(t,T,A.hash)){const n=hn(t);if(!n)return;const a=pn(n);for(const r of It){const s=r.exec(a);if(s)return{id:st(t),invalidating:e,route:r,params:Se(s),url:t}}}}function pn(t){return Ae(A.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(T.length))||"/"}function st(t){return(A.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function ue({url:t,type:e,intent:n,delta:a}){let r=!1;const s=ge(v,n,t,e);a!==void 0&&(s.navigation.delta=a);const i={...s.navigation,cancel:()=>{r=!0,s.reject(new Error("navigation cancelled"))}};return J||re.forEach(o=>o(i)),r?null:s}async function G({type:t,url:e,popped:n,keepfocus:a,noscroll:r,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=Bt,block:u=Bt}){const p=N;N=c;const w=await ft(e,!1),f=ue({url:e,type:t,delta:n==null?void 0:n.delta,intent:w});if(!f){u(),N===c&&(N=p);return}const m=E,h=L;l(),J=!0,rt&&C.navigating.set(W.current=f.navigation);let d=w&&await fe(w);if(!d){if(it(e,T,A.hash))return await B(e);d=await de(e,{id:null},await V(new Et(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(w==null?void 0:w.url)||e,N!==c)return f.reject(new Error("navigation aborted")),!1;if(d.type==="redirect")if(o>=20)d=await lt({status:500,error:await V(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await Tt(new URL(d.location,e).href,{},o+1,c),!1;else d.props.page.status>=400&&await C.updated.check()&&(await ae(),await B(e));if(ln(),Rt(m),ie(h),d.props.page.url.pathname!==e.pathname&&(e.pathname=d.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[F]:E+=g,[K]:L+=g,[Xt]:i};(s?history.replaceState:history.pushState).call(history,_,"",e),s||sn(E,L)}if(U=null,d.props.page.state=i,rt){v=d.state,d.props.page&&(d.props.page.url=e);const g=(await Promise.all(Array.from(cn,_=>_(f.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(b=>{z.delete(b)})};g.push(_),g.forEach(b=>{z.add(b)})}se.$set(d.props),en(d.props.page),oe=!0}else le(d,vt,!1);const{activeElement:y}=document;await ve();const S=n?n.scroll:r?St():null;if(qt){const g=e.hash&&document.getElementById(decodeURIComponent(A.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));S?scrollTo(S.x,S.y):g?g.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==y&&document.activeElement!==document.body;!a&&!R&&vn(),qt=!0,d.props.page&&Object.assign(I,d.props.page),J=!1,t==="popstate"&&ce(L),f.fulfil(void 0),z.forEach(g=>g(f.navigation)),C.navigating.set(W.current=null)}async function de(t,e,n,a){return t.origin===X&&t.pathname===location.pathname&&!Ut?await lt({status:a,error:n,url:t,route:e}):await B(t)}function gn(){let t,e;P.addEventListener("mousemove",i=>{const o=i.target;clearTimeout(t),t=setTimeout(()=>{r(o,2)},20)});function n(i){i.defaultPrevented||r(i.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const a=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(wt(new URL(o.target.href)),a.unobserve(o.target))},{threshold:0});async function r(i,o){const c=te(i,P);if(!c||c===e)return;const{url:l,external:u,download:p}=yt(c,T,A.hash);if(u||p)return;const w=Q(c),f=l&&st(v.url)===st(l);if(!w.reload&&!f)if(o<=w.preload_data){e=c;const m=await ft(l,!1);m&&fn(m)}else o<=w.preload_code&&(e=c,wt(l))}function s(){a.disconnect();for(const i of P.querySelectorAll("a")){const{url:o,external:c,download:l}=yt(i,T,A.hash);if(c||l)continue;const u=Q(i);u.reload||(u.preload_code===Z.viewport&&a.observe(i),u.preload_code===Z.eager&&wt(o))}}z.add(s),s()}function V(t,e){if(t instanceof ct)return t.body;const n=tt(t),a=Qe(t);return A.hooks.handleError({error:t,event:e,status:n,message:a})??{message:a}}function mn(t,e={}){return t=new URL(Zt(t)),t.origin!==X?Promise.reject(new Error("goto: invalid URL")):Tt(t,e,0)}function wn(t){if(typeof t=="function")nt.push(t);else{const{href:e}=new URL(t,location.href);nt.push(n=>n.href===e)}}function yn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let a=!1;if(Gt(),!J){const r=ge(v,void 0,null,"leave"),s={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};re.forEach(i=>i(s))}a?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Gt()}),(e=navigator.connection)!=null&&e.saveData||gn(),P.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const a=te(n.composedPath()[0],P);if(!a)return;const{url:r,external:s,target:i,download:o}=yt(a,T,A.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Q(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||o)return;const[u,p]=(A.hash?r.hash.replace(/^#/,""):r.href).split("#"),w=u===pt(location);if(s||c.reload&&(!w||!p)){ue({url:r,type:"link"})?J=!0:n.preventDefault();return}if(p!==void 0&&w){const[,f]=v.url.href.split("#");if(f===p){if(n.preventDefault(),p===""||p==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=a.ownerDocument.getElementById(decodeURIComponent(p));m&&(m.scrollIntoView(),m.focus())}return}if(q=!0,Rt(E),t(r),!c.replace_state)return;q=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await G({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),P.addEventListener("submit",n=>{if(n.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const o=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(it(o,T,!1))return;const c=n.target,l=Q(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const u=new FormData(c),p=r==null?void 0:r.getAttribute("name");p&&u.append(p,(r==null?void 0:r.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),G({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var a;if((a=n.state)!=null&&a[F]){const r=n.state[F];if(N={},r===E)return;const s=$[r],i=n.state[Xt]??{},o=new URL(n.state[De]??location.href),c=n.state[K],l=v.url?pt(location)===pt(v.url):!1;if(c===L&&(oe||l)){i!==I.state&&(I.state=i),t(o),$[E]=St(),s&&scrollTo(s.x,s.y),E=r;return}const p=r-E;await G({type:"popstate",url:o,popped:{state:i,scroll:s,delta:p},accept:()=>{E=r,L=c},block:()=>{history.go(-p)},nav_token:N})}else if(!q){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{q?(q=!1,history.replaceState({...history.state,[F]:++E,[K]:L},"",location.href)):A.hash&&v.url.hash===location.hash&&G({type:"goto",url:me(v.url)})});for(const n of document.querySelectorAll("link"))on.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&C.navigating.set(W.current=null)});function t(n){v.url=I.url=n,C.page.set(Ct(I)),C.page.notify()}}async function _n(t,{status:e=200,error:n,node_ids:a,params:r,route:s,server_route:i,data:o,form:c}){Ut=!0;const l=new URL(location.href);let u;({params:r={},route:s={id:null}}=await ft(l,!1)||{}),u=It.find(({id:f})=>f===s.id);let p,w=!0;try{const f=a.map(async(h,d)=>{const y=o[d];return y!=null&&y.uses&&(y.uses=pe(y.uses)),xt({loader:A.nodes[h],url:l,params:r,route:s,parent:async()=>{const S={};for(let R=0;R<d;R+=1)Object.assign(S,(await f[R]).data);return S},server_data_node:Pt(y)})}),m=await Promise.all(f);if(u){const h=u.layouts;for(let d=0;d<h.length;d++)h[d]||m.splice(d,0,void 0)}p=ot({url:l,params:r,branch:m,status:e,error:n,form:c,route:u??null})}catch(f){if(f instanceof kt){await B(new URL(f.location,location.href));return}p=await lt({status:tt(f),error:await V(f,{url:l,params:r,route:s}),url:l,route:s}),t.textContent="",w=!1}p.props.page&&(p.props.page.state={}),le(p,t,w)}async function he(t,e){var s;const n=new URL(t);n.pathname=rn(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(Ze,"1"),n.searchParams.append(Xe,e.map(i=>i?"1":"0").join(""));const a=window.fetch,r=await a(n.href,{});if(!r.ok){let i;throw(s=r.headers.get("content-type"))!=null&&s.includes("application/json")?i=await r.json():r.status===404?i="Not Found":r.status===500&&(i="Internal Error"),new ct(r.status,i)}return new Promise(async i=>{var w;const o=new Map,c=r.body.getReader(),l=new TextDecoder;function u(f){return We(f,{...A.decoders,Promise:m=>new Promise((h,d)=>{o.set(m,{fulfil:h,reject:d})})})}let p="";for(;;){const{done:f,value:m}=await c.read();if(f&&!p)break;for(p+=!m&&p?`
`:l.decode(m,{stream:!0});;){const h=p.indexOf(`
`);if(h===-1)break;const d=JSON.parse(p.slice(0,h));if(p=p.slice(h+1),d.type==="redirect")return i(d);if(d.type==="data")(w=d.nodes)==null||w.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=pe(y.uses),y.data=u(y.data))}),i(d);else if(d.type==="chunk"){const{id:y,data:S,error:R}=d,g=o.get(y);o.delete(y),R?g.reject(u(R)):g.fulfil(u(S))}}}})}function pe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function vn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let s=0;s<a.rangeCount;s+=1)r.push(a.getRangeAt(s));setTimeout(()=>{if(a.rangeCount===r.length){for(let s=0;s<a.rangeCount;s+=1){const i=r[s],o=a.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}a.removeAllRanges()}})}}}function ge(t,e,n,a){var c,l;let r,s;const i=new Promise((u,p)=>{r=u,s=p});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:a,complete:i},fulfil:r,reject:s}}function Ct(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function me(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{In as a,Sn as l,C as s};
