var C=Object.defineProperty;var B=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var d=(e,t,n)=>B(e,typeof t!="symbol"?t+"":t,n);import{r as $,n as g,i as S,f as P,h as j,j as v,k as D,l as E,m as I,p as A,q as R,v as q,w as G}from"./B2QSKqcC.js";let y=!1;function O(){y=!0}function z(){y=!1}function U(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function V(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let a=0;a<t.length;a++){const u=t[a];u.claim_order!==void 0&&r.push(u)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const a=t[r].claim_order,u=(s>0&&t[n[s]].claim_order<=a?s+1:U(1,s,h=>t[n[h]].claim_order,a))-1;i[r]=n[u]+1;const o=u+1;n[o]=r,s=Math.max(o,s)}const c=[],l=[];let f=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);f>=r;f--)l.push(t[f]);f--}for(;f>=0;f--)l.push(t[f]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;e.insertBefore(l[r],u)}}function W(e,t){if(y){for(V(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function F(e,t,n){e.insertBefore(t,n||null)}function J(e,t,n){y&&!n?W(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function H(e){return document.createElement(e)}function K(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function T(e){return document.createTextNode(e)}function le(){return T(" ")}function ae(){return T("")}function ce(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function fe(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function oe(e){return e.dataset.svelteH}function Q(e){return Array.from(e.childNodes)}function L(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function M(e,t,n,i,s=!1){L(e);const c=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s||(e.claim_info.last_index=l),f}}for(let l=e.claim_info.last_index-1;l>=0;l--){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,f}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function X(e,t,n,i){return M(e,s=>s.nodeName===t,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||c.push(f.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(t))}function ue(e,t,n){return X(e,t,n,H)}function Y(e,t){return M(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(t),!0)}function de(e){return Y(e," ")}function b(e,t,n){for(let i=n;i<e.length;i+=1){const s=e[i];if(s.nodeType===8&&s.textContent.trim()===t)return i}return-1}function _e(e,t){const n=b(e,"HTML_TAG_START",0),i=b(e,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new x(t);L(e);const s=e.splice(n,i-n+1);p(s[0]),p(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new x(t);for(const l of c)l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new x(t,c)}function he(e,t){t=""+t,e.data!==t&&(e.data=t)}function me(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function pe(e,t){const n=[];let i=0;for(const s of t.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${e}_END`?(i-=1,n.push(s)):c===`HEAD_${e}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Z{constructor(t=!1){d(this,"is_svg",!1);d(this,"e");d(this,"n");d(this,"t");d(this,"a");this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=K(n.nodeName):this.e=H(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)F(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(p)}}class x extends Z{constructor(n=!1,i){super(n);d(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)J(this.t,this.n[i],n)}}function $e(e,t){return new e(t)}const m=new Set;let _;function ye(){_={r:0,c:[],p:_}}function xe(){_.r||$(_.c),_=_.p}function k(e,t){e&&e.i&&(m.delete(e),e.i(t))}function ge(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Te(e){e&&e.c()}function we(e,t){e&&e.l(t)}function ee(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),A(()=>{const c=e.$$.on_mount.map(R).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...c):$(c),e.$$.on_mount=[]}),s.forEach(A)}function te(e,t){const n=e.$$;n.fragment!==null&&(I(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(q.push(e),G(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ne(e,t,n,i,s,c,l=null,f=[-1]){const r=j;E(e);const a=e.$$={fragment:null,ctx:[],props:c,update:g,not_equal:s,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:v(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};l&&l(a.root);let u=!1;if(a.ctx=n?n(e,t.props||{},(o,h,...w)=>{const N=w.length?w[0]:h;return a.ctx&&s(a.ctx[o],a.ctx[o]=N)&&(!a.skip_bound&&a.bound[o]&&a.bound[o](N),u&&ne(e,o)),h}):[],a.update(),u=!0,$(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){O();const o=Q(t.target);a.fragment&&a.fragment.l(o),o.forEach(p)}else a.fragment&&a.fragment.c();t.intro&&k(e.$$.fragment),ee(e,t.target,t.anchor),z(),D()}E(r)}class ve{constructor(){d(this,"$$");d(this,"$$set")}$destroy(){te(this,1),this.$destroy=g}$on(t,n){if(!S(n))return g;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!P(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ie);export{we as A,me as B,x as H,ve as S,k as a,W as b,J as c,p as d,fe as e,ue as f,de as g,pe as h,Ne as i,H as j,he as k,Q as l,Y as m,T as n,ce as o,_e as p,oe as q,ye as r,le as s,ge as t,xe as u,ae as v,$e as w,te as x,Te as y,ee as z};
