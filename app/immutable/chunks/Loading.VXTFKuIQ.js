import{s as g,n as _}from"./scheduler.CxpUwomz.js";import{S as b,i as x,e as f,s as E,j as d,k as m,d as c,f as L,n as h,o as v,q as u,b as k,m as y,r as D}from"./index.D1vC92I7.js";function p(n){let e,s;return{c(){e=f("small"),s=k(n[0]),this.h()},l(a){e=d(a,"SMALL",{class:!0});var l=m(e);s=y(l,n[0]),l.forEach(c),this.h()},h(){h(e,"class","text-muted")},m(a,l){v(a,e,l),u(e,s)},p(a,l){l&1&&D(s,a[0])},d(a){a&&c(e)}}}function I(n){let e,s,a,l,t=n[0]&&p(n);return{c(){e=f("div"),s=f("div"),a=f("div"),l=E(),t&&t.c(),this.h()},l(i){e=d(i,"DIV",{class:!0});var r=m(e);s=d(r,"DIV",{class:!0});var o=m(s);a=d(o,"DIV",{class:!0}),m(a).forEach(c),l=L(o),t&&t.l(o),o.forEach(c),r.forEach(c),this.h()},h(){h(a,"class","loader svelte-1cbfzdg"),h(s,"class","d-flex flex-column gap-5 align-items-center"),h(e,"class","d-flex gap-4 justify-content-center")},m(i,r){v(i,e,r),u(e,s),u(s,a),u(s,l),t&&t.m(s,null)},p(i,[r]){i[0]?t?t.p(i,r):(t=p(i),t.c(),t.m(s,null)):t&&(t.d(1),t=null)},i:_,o:_,d(i){i&&c(e),t&&t.d()}}}function S(n,e,s){let{message:a}=e;return n.$$set=l=>{"message"in l&&s(0,a=l.message)},[a]}class q extends b{constructor(e){super(),x(this,e,S,I,g,{message:0})}}export{q as L};
