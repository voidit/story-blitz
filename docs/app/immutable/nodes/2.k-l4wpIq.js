import{s as V,n as C,o as q}from"../chunks/B2QSKqcC.js";import{S as A,i as F,d as g,b as J,c as y,m as R,n as z,e as w,f as E,o as B,h as G,p as K,j as _,H as Q,l as U}from"../chunks/DmuDJF2h.js";function W(a){let l,t,n,i,p,s,u='<div class="cat svelte-1cwlzej"><div class="dog svelte-1cwlzej"><div></div></div></div>',c,h;return{c(){l=_("section"),t=_("div"),n=_("div"),i=new Q(!1),p=U(),s=_("div"),s.innerHTML=u,this.h()},l(r){l=w(r,"SECTION",{class:!0});var e=E(l);t=w(e,"DIV",{class:!0});var f=E(t);n=w(f,"DIV",{});var $=E(n);i=B($,!1),$.forEach(g),p=G(f),s=w(f,"DIV",{class:!0,"data-svelte-h":!0}),K(s)!=="svelte-1mxaaar"&&(s.innerHTML=u),f.forEach(g),e.forEach(g),this.h()},h(){i.a=null,z(s,"class","father-div svelte-1cwlzej"),z(t,"class","main"),z(l,"class","svelte-1cwlzej")},m(r,e){J(r,l,e),y(l,t),y(t,n),i.m(a[0],n),y(t,p),y(t,s),c||(h=R(s,"click",a[1]),c=!0)},p(r,[e]){e&1&&i.p(r[0])},i:C,o:C,d(r){r&&g(l),c=!1,h()}}}async function X(){try{const a=await fetch("./data/prompts.json");if(!a.ok)throw new Error("Network response was not ok");return await a.json()}catch(a){return console.error("Failed to fetch prompts:",a),null}}function Y(a,l,t){let n,i,p,s=null,u="",c=new Set,h=null,r=!1,e=o=>{if(!r&&o){let d=Math.floor(Math.random()*o.length);return o[d].description}return o?o[Math.floor(Math.random()*o.length)].name:"[...]"},f=o=>o[Math.floor(Math.random()*o.length)];q(async()=>{t(2,s=await X()),s&&(t(5,n=i(s)),t(0,u=p()))});function $(){r=!r,t(0,u=p())}return a.$$.update=()=>{a.$$.dirty&60&&(p=()=>{c.size===n.length&&(c.clear(),t(5,n=i(s)),console.log("All prompts have been used. Starting over!"));do t(3,h=n[Math.floor(Math.random()*n.length)]);while(c.has(h.id));return c.add(h.id),h.body})},t(5,n=null),t(4,i=(o=null)=>{if(!o)return;let{protagonists:d,incidents:M,settings:b,goals:x,obstacles:H,challenges:m,environments:v,tones:P,transformations:S,problems:k,genres:I,adventures:O,valuables:T,resolutions:j,flaws:D,powers:L,creatures:N}=o;return[{id:1,body:`${e(d)} ${e(M)} in ${f(b)} to ${e(x)}, facing ${e(H)} and ${e(m)} along the way.`},{id:2,body:`${e(d)}  ${e(M)}, experiences ${e(m)}  and ${e(O)}, and returns to ${e(v)} transformed.`},{id:3,body:`${e(d)} embarks on a journey to find ${e(T)} and ${e(x)}.`},{id:4,body:`${e(d)} travels to ${e(P)} ${f(b)}, experiences ${e(S)}, and returns to ${e(v)} with ${e(k)}.`},{id:5,body:`${e(d)} travels to ${e(v)}, experiences ${e(S)}, and returns to ${e(v)} with ${e(T)}.`},{id:6,body:`${e(P)} and ${e(I)} story that involves ${e(k)},  ${e(M)}, ${e(m)}  and ${e(O)}, leading to ${e(j)}.`},{id:7,body:`${e(I)} story that depicts ${e(P)} ${e(m)}  of ${e(d)} due to ${e(D)}, ${e(L)}, and ${e(N)}, leading to ${e(j)}.`},{id:8,body:`${e(d)} undergoes ${e(k)}, ${e(S)} from ${f(b)} to ${e(x)}, after a period of ${e(m)}  and ${e(H)}.`}]}),[u,$,s,h,i,n]}class te extends A{constructor(l){super(),F(this,l,Y,W,V,{})}}export{te as component};
