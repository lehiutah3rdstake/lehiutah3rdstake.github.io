import{s as S,n as d}from"../chunks/scheduler.tWunq22O.js";import{S as E,i as P,e as m,j as h,k as p,d as o,n as _,o as g,v as A,b as D,s as v,m as H,f as k,q as u,c as j,g as w,p as C,t as I,a as L,u as q}from"../chunks/index.DvliyZZ7.js";import{e as b}from"../chunks/Header.RhaYf7J2.js";import{P as O}from"../chunks/PageLayout.C-Q9yyVH.js";const T=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,prerender:T},Symbol.toStringTag,{value:"Module"}));function y(r,t,a){const e=r.slice();return e[1]=t[a],e}function V(r){let t,a=b(r[0]),e=[];for(let n=0;n<a.length;n+=1)e[n]=x(y(r,a,n));return{c(){t=m("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=h(n,"DIV",{class:!0});var s=p(t);for(let l=0;l<e.length;l+=1)e[l].l(s);s.forEach(o),this.h()},h(){_(t,"class","list-group")},m(n,s){g(n,t,s);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null)},p(n,s){if(s&1){a=b(n[0]);let l;for(l=0;l<a.length;l+=1){const i=y(n,a,l);e[l]?e[l].p(i,s):(e[l]=x(i),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=a.length}},d(n){n&&o(t),A(e,n)}}}function x(r){let t,a,e=r[1].label+"",n,s,l,i;return{c(){t=m("a"),a=m("span"),n=D(e),s=v(),l=m("i"),i=v(),this.h()},l(f){t=h(f,"A",{href:!0,class:!0});var c=p(t);a=h(c,"SPAN",{});var $=p(a);n=H($,e),$.forEach(o),s=k(c),l=h(c,"I",{class:!0}),p(l).forEach(o),i=k(c),c.forEach(o),this.h()},h(){_(l,"class","bi bi-link"),_(t,"href",r[1].url),_(t,"class","list-group-item list-group-item-action d-flex justify-content-between")},m(f,c){g(f,t,c),u(t,a),u(a,n),u(t,s),u(t,l),u(t,i)},p:d,d(f){f&&o(t)}}}function z(r){let t,a=r[0].length&&V(r);return{c(){t=m("div"),a&&a.c(),this.h()},l(e){t=h(e,"DIV",{class:!0});var n=p(t);a&&a.l(n),n.forEach(o),this.h()},h(){_(t,"class","d-flex flex-column gap-4")},m(e,n){g(e,t,n),a&&a.m(t,null)},p(e,[n]){e[0].length&&a.p(e,n)},i:d,o:d,d(e){e&&o(t),a&&a.d()}}}function M(r){return[[{label:"Stake Clerk",url:"/stake-clerk"},{label:"Ward Clerk",url:"/ward-clerk"}]]}class N extends E{constructor(t){super(),P(this,t,M,z,S,{})}}function W(r){let t,a;return t=new N({}),{c(){j(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,n){C(t,e,n),a=!0},i(e){a||(I(t.$$.fragment,e),a=!0)},o(e){L(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}function B(r){let t,a;return t=new O({props:{pageTitle:"Home",$$slots:{default:[W]},$$scope:{ctx:r}}}),{c(){j(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,n){C(t,e,n),a=!0},p(e,[n]){const s={};n&1&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(I(t.$$.fragment,e),a=!0)},o(e){L(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}class R extends E{constructor(t){super(),P(this,t,null,B,S,{})}}export{R as component,Q as universal};
