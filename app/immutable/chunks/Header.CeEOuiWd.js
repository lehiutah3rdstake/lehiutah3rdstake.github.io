import{A as C,s as z,n as M,o as Y,b as Z}from"./scheduler.tWunq22O.js";import{S as F,i as J,e as p,s as T,c as _,b as v,d,l as y,f,g as k,h as V,j as P,k as Q,m as b,u as W,n as ee,q as K,p as te,r as ne,B as le,t as se,a as ae,v as re}from"./index.DzzFXS6D.js";import{g as X,U as D,N as ie}from"./app.state.Bv-Znvfq.js";function E(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function oe(n){const e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new n.constructor(+n):typeof n=="number"||e==="[object Number]"||typeof n=="string"||e==="[object String]"?new Date(n):new Date(NaN)}function ce(n){return oe(n).getDay()===0}const ue=()=>{const{stores:{authenticated:n,currentUser:e},actions:{init:t}}=X();t();const r=C(n),h=C(e);let i=[];const o={label:"Login",url:"/auth/login",roles:[D.UnAuthenticated],index:100},a={label:"Logout",url:"/auth/logout",roles:[D.Authenticated,D.Admin],index:100},l=r?[a]:[o];i=[...i,...ie,...l];const c=(s,u)=>{if(!s)return!0;const g=s.find($=>$.role===u);return g!=null&&g.sundayOnly?ce(new Date):!0};return i.filter(s=>{const u=h.role,g=!!s.roles.find(N=>N===u),$=c(s.visibilities,u);return g&&$}).sort((s,u)=>s.index-u.index)},ke=n=>{const e=/(\+?\d{1,4}[\s-]?(?:\(\d{1,3}\)|\d{1,3})[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,4})/g,t=/(\S+@\S+\.\S+)/g;return n=n.replace(e,'<a href="tel:$1">$1</a>'),n=n.replace(t,'<a href="mailto:$1">$1</a>'),n};function R(n,e,t){const r=n.slice();return r[1]=e[t],r}function B(n,e,t){const r=n.slice();return r[1]=e[t],r}function G(n){let e,t,r=n[1].label+"",h,i,o;return{c(){e=p("li"),t=p("a"),h=P(r),o=T(),this.h()},l(a){e=_(a,"LI",{class:!0});var l=v(e);t=_(l,"A",{class:!0,href:!0});var c=v(t);h=Q(c,r),c.forEach(d),o=y(l),l.forEach(d),this.h()},h(){f(t,"class","nav-link"),f(t,"href",i=n[1].url),f(e,"class","nav-item")},m(a,l){k(a,e,l),b(e,t),b(t,h),b(e,o)},p(a,l){l&1&&r!==(r=a[1].label+"")&&W(h,r),l&1&&i!==(i=a[1].url)&&f(t,"href",i)},d(a){a&&d(e)}}}function q(n){let e,t=n[1].label+"",r,h,i;return{c(){e=p("a"),r=P(t),h=T(),this.h()},l(o){e=_(o,"A",{href:!0,class:!0});var a=v(e);r=Q(a,t),h=y(a),a.forEach(d),this.h()},h(){f(e,"href",i=n[1].url),f(e,"class","list-group-item list-group-item-action")},m(o,a){k(o,e,a),b(e,r),b(e,h)},p(o,a){a&1&&t!==(t=o[1].label+"")&&W(r,t),a&1&&i!==(i=o[1].url)&&f(e,"href",i)},d(o){o&&d(e)}}}function fe(n){let e,t,r,h=E(n[0]),i=[];for(let l=0;l<h.length;l+=1)i[l]=G(B(n,h,l));let o=E(n[0]),a=[];for(let l=0;l<o.length;l+=1)a[l]=q(R(n,o,l));return{c(){e=p("ul");for(let l=0;l<i.length;l+=1)i[l].c();t=T(),r=p("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=_(l,"UL",{class:!0});var c=v(e);for(let u=0;u<i.length;u+=1)i[u].l(c);c.forEach(d),t=y(l),r=_(l,"DIV",{class:!0});var s=v(r);for(let u=0;u<a.length;u+=1)a[u].l(s);s.forEach(d),this.h()},h(){f(e,"class","nav flex-column mt-3 d-none d-lg-flex d-xl-flex d-print-none text-end"),f(r,"class","list-group d-flex d-xl-none d-lg-none d-print-none")},m(l,c){k(l,e,c);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(e,null);k(l,t,c),k(l,r,c);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(r,null)},p(l,[c]){if(c&1){h=E(l[0]);let s;for(s=0;s<h.length;s+=1){const u=B(l,h,s);i[s]?i[s].p(u,c):(i[s]=G(u),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=h.length}if(c&1){o=E(l[0]);let s;for(s=0;s<o.length;s+=1){const u=R(l,o,s);a[s]?a[s].p(u,c):(a[s]=q(u),a[s].c(),a[s].m(r,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=o.length}},i:M,o:M,d(l){l&&(d(e),d(t),d(r)),V(i,l),V(a,l)}}}function he(n,e,t){let r=[];return Y(()=>{t(0,r=ue())}),[r]}class de extends F{constructor(e){super(),J(this,e,he,fe,z,{})}}function me(n){let e;return{c(){e=p("i"),this.h()},l(t){e=_(t,"I",{class:!0}),v(e).forEach(d),this.h()},h(){f(e,"class","bi bi-moon")},m(t,r){k(t,e,r)},d(t){t&&d(e)}}}function ge(n){let e;return{c(){e=p("i"),this.h()},l(t){e=_(t,"I",{class:!0}),v(e).forEach(d),this.h()},h(){f(e,"class","bi bi-sun")},m(t,r){k(t,e,r)},d(t){t&&d(e)}}}function pe(n){let e,t,r,h='<img src="/assets/logo.png" alt="logo" class="logo svelte-193wsx5"/> <div class="navbar-brand mb-0 h1">Lehi Utah 3rd Stake</div>',i,o,a,l,c,s='<i class="bi bi-list"></i>',u,g,$,N,U,H;function O(m,x){return m[0]?ge:me}let I=O(n),L=I(n);return $=new de({}),{c(){e=p("nav"),t=p("div"),r=p("a"),r.innerHTML=h,i=T(),o=p("div"),a=p("button"),L.c(),l=T(),c=p("button"),c.innerHTML=s,u=T(),g=p("div"),ee($.$$.fragment),this.h()},l(m){e=_(m,"NAV",{class:!0});var x=v(e);t=_(x,"DIV",{class:!0});var A=v(t);r=_(A,"A",{href:!0,class:!0,"data-svelte-h":!0}),K(r)!=="svelte-1yos2j0"&&(r.innerHTML=h),i=y(A),o=_(A,"DIV",{});var S=v(o);a=_(S,"BUTTON",{class:!0,type:!0});var j=v(a);L.l(j),j.forEach(d),l=y(S),c=_(S,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0,"data-svelte-h":!0}),K(c)!=="svelte-1s10gm3"&&(c.innerHTML=s),S.forEach(d),A.forEach(d),x.forEach(d),u=y(m),g=_(m,"DIV",{class:!0,id:!0});var w=v(g);te($.$$.fragment,w),w.forEach(d),this.h()},h(){f(r,"href","/home"),f(r,"class","d-flex align-items-center gap-2 text-decoration-none"),f(a,"class","btn btn-link"),f(a,"type","button"),f(c,"class","btn btn-link d-lg-none d-xl-none d-md-inline d-sm-inline"),f(c,"type","button"),f(c,"data-bs-toggle","collapse"),f(c,"data-bs-target","#mini-menu"),f(c,"aria-expanded","false"),f(c,"aria-controls","mini-menu"),f(t,"class","container"),f(e,"class","navbar bg-body-tertiary d-print-none"),f(g,"class","container collapse mt-5"),f(g,"id","mini-menu")},m(m,x){k(m,e,x),b(e,t),b(t,r),b(t,i),b(t,o),b(o,a),L.m(a,null),b(o,l),b(o,c),k(m,u,x),k(m,g,x),ne($,g,null),N=!0,U||(H=le(a,"click",n[2]),U=!0)},p(m,[x]){I!==(I=O(m))&&(L.d(1),L=I(m),L&&(L.c(),L.m(a,null)))},i(m){N||(se($.$$.fragment,m),N=!0)},o(m){ae($.$$.fragment,m),N=!1},d(m){m&&(d(e),d(u),d(g)),L.d(),re($),U=!1,H()}}}function _e(n,e,t){let r;const{stores:{darkTheme:h},actions:{toggleTheme:i}}=X();return Z(n,h,o=>t(0,r=o)),[r,h,i]}class Le extends F{constructor(e){super(),J(this,e,_e,pe,z,{})}}export{Le as H,de as N,ke as c,E as e};
