import{s as te,n as U,o as oe}from"../chunks/B2QSKqcC.js";import{S as ae,i as se,d as $,c as B,b as M,o as ne,e as I,f as b,l as E,g as V,p as Y,q as le,j as w,s as q,H as Z,k as re,m as ie,n as de}from"../chunks/CGIUej4z.js";function W(r){let s,t;return{c(){s=w("h2"),t=de(r[1])},l(o){s=b(o,"H2",{});var a=E(s);t=ie(a,r[1]),a.forEach($)},m(o,a){B(o,s,a),M(s,t)},p(o,a){a&2&&re(t,o[1])},d(o){o&&$(s)}}}function X(r){let s,t;return{c(){s=w("small"),t=new Z(!1),this.h()},l(o){s=b(o,"SMALL",{class:!0});var a=E(s);t=Y(a,!1),a.forEach($),this.h()},h(){t.a=null,I(s,"class","svelte-jakce0")},m(o,a){B(o,s,a),t.m(r[2],s)},p(o,a){a&4&&t.p(o[2])},d(o){o&&$(s)}}}function he(r){let s,t,o,a,c,g,m,d,_='<div class="cat svelte-jakce0"><div class="dog svelte-jakce0"><i class="fal fa-smile"></i> <div>Blitz!</div></div></div>',u,p,i=r[1]&&W(r),l=r[2]&&X(r);return{c(){s=w("section"),t=w("div"),i&&i.c(),o=q(),a=w("div"),c=new Z(!1),g=q(),l&&l.c(),m=q(),d=w("div"),d.innerHTML=_,this.h()},l(n){s=b(n,"SECTION",{class:!0});var f=E(s);t=b(f,"DIV",{class:!0});var e=E(t);i&&i.l(e),o=V(e),a=b(e,"DIV",{});var v=E(a);c=Y(v,!1),v.forEach($),g=V(e),l&&l.l(e),m=V(e),d=b(e,"DIV",{class:!0,"data-svelte-h":!0}),le(d)!=="svelte-1cfdoow"&&(d.innerHTML=_),e.forEach($),f.forEach($),this.h()},h(){c.a=null,I(d,"class","father-div svelte-jakce0"),I(t,"class","main"),I(s,"class","svelte-jakce0")},m(n,f){B(n,s,f),M(s,t),i&&i.m(t,null),M(t,o),M(t,a),c.m(r[0],a),M(t,g),l&&l.m(t,null),M(t,m),M(t,d),u||(p=ne(d,"click",r[3]),u=!0)},p(n,[f]){n[1]?i?i.p(n,f):(i=W(n),i.c(),i.m(t,o)):i&&(i.d(1),i=null),f&1&&c.p(n[0]),n[2]?l?l.p(n,f):(l=X(n),l.c(),l.m(t,m)):l&&(l.d(1),l=null)},i:U,o:U,d(n){n&&$(s),i&&i.d(),l&&l.d(),u=!1,p()}}}async function fe(){try{const r=await fetch("./data/prompts.json");if(!r.ok)throw new Error("Network response was not ok");return await r.json()}catch(r){return console.error("Failed to fetch prompts:",r),null}}function ce(r,s,t){let o,a,c,g,m=null,d="",_=new Set,u=null,p=!1,i="Story Blitz",l=["Protagonist","Central figure","Main character","Lead character","Hero(ine)"],n=l[0],f="",e=h=>{if(!p&&h){let k=Math.floor(Math.random()*h.length);return h[k].description}return h?h[Math.floor(Math.random()*h.length)].name:"[...]"},v=h=>h[Math.floor(Math.random()*h.length)];oe(async()=>{t(4,m=await fe()),m&&(t(9,o=c(m)),t(0,d=g()))});function x(){t(6,p=!p),t(0,d=g())}return r.$$.update=()=>{r.$$.dirty&192&&t(8,c=(h=null)=>{if(!h)return;let{archetypes:k,protagonists:y,incidents:O,settings:H,goals:T,obstacles:ee,challenges:P,environments:L,tones:z,transformations:A,problems:S,genres:F,adventures:j,valuables:J,resolutions:R,flaws:G,powers:K,creatures:D,introductions:Q,plots:C=[]}=h;if(t(10,a=k),t(1,i=Q[Math.floor(Math.random()*Q.length)].name),t(7,n=p?l[Math.floor(Math.random()*l.length)]:k[Math.floor(Math.random()*k.length)].name),C.length>0){let N=Math.floor(Math.random()*C.length)||null;t(2,f=N?`<b>${C[N].name}:</b> ${C[N].description}`:"")}return[{id:1,body:`${e(O)}. ${n} ${e(y)} in ${v(H)} to ${e(T)}, facing ${e(ee)} and ${e(P)} along the way.`},{id:2,body:`${n} ${e(y)}  ${e(O)}, experiences ${e(P)} and ${e(j)}, and returns to ${e(L)} transformed.`},{id:3,body:`${n} ${e(y)} embarks on a journey to find ${e(J)} and ${e(T)}.`},{id:4,body:`${n} ${e(y)} travels to ${e(z)} ${v(H)}, experiences ${e(A)}, and returns to ${e(L)} with ${e(S)}.`},{id:5,body:`${n} ${e(y)} travels to ${e(L)}, experiences ${e(A)}, and returns to ${e(L)} with ${e(J)}.`},{id:6,body:`${e(z)} and ${e(F)} story that involves ${e(S)}, ${e(O)}, ${e(P)}  and ${e(j)}, leading to ${e(R)}.`},{id:7,body:`${e(F)} story that depicts ${e(z)} ${e(P)} of ${e(y)} due to ${e(G)}, ${e(K)}, and ${e(D)}, leading to ${e(R)}.`},{id:8,body:`${n} ${e(y)} undergoes ${e(S)}, ${e(A)} from ${v(H)} to ${e(T)}, after a period of ${e(P)} and ${e(j)}.`},{id:10,body:`${e(D)} ${e(j)} a ${e(S)} and saves the ${v(H)}.`},{id:11,body:`${n} ${e(D)} overcomes ${e(S)} through ${e(G)} and ${e(K)}`}]}),r.$$.dirty&1904&&(g=()=>{t(7,n=p||a.length<1?l[Math.floor(Math.random()*l.length)]:a[Math.floor(Math.random()*a.length)].name),_.size===o.length&&(_.clear(),t(9,o=c(m)),console.log("All prompts have been used. Starting over!"));do t(5,u=o[Math.floor(Math.random()*o.length)]);while(_.has(u.id));return _.add(u.id),u.body})},t(9,o=null),t(10,a=null),[d,i,f,x,m,u,p,n,c,o,a]}class pe extends ae{constructor(s){super(),se(this,s,ce,he,te,{})}}export{pe as component};
