import{s as F,n as B,o as _e,c as M,u as N,g as P,a as z}from"./scheduler.CxpUwomz.js";import{S as G,i as J,e as $,b as T,j as k,k as E,m as q,d as m,n as g,o as D,q as p,w as x,t as O,z as he,a as A,x as me,s as U,f as W,v as ee,r as Y,c as K,g as Q,p as R,u as X,l as ue}from"./index.D1vC92I7.js";import{e as H}from"./Header.BZq1ybCa.js";function de(s){let e,n,t,o;return{c(){e=$("small"),n=$("a"),t=T("Back"),this.h()},l(i){e=k(i,"SMALL",{class:!0});var r=E(e);n=k(r,"A",{href:!0});var c=E(n);t=q(c,"Back"),c.forEach(m),r.forEach(m),this.h()},h(){g(n,"href",o=s[0]+"/#top"),g(e,"class","d-flex justify-content-end border-bottom pb-3 mb-3")},m(i,r){D(i,e,r),p(e,n),p(n,t)},p(i,[r]){r&1&&o!==(o=i[0]+"/#top")&&g(n,"href",o)},i:B,o:B,d(i){i&&m(e)}}}function pe(s,e,n){let t="";return _e(()=>{var o;n(0,t=(o=window==null?void 0:window.location)!=null&&o.href?window.location.href:"")}),[t]}class We extends G{constructor(e){super(),J(this,e,pe,de,F,{})}}function te(s,e,n){const t=s.slice();return t[4]=e[n],t}const ge=s=>({}),le=s=>({});function se(s,e,n){const t=s.slice();return t[7]=e[n],t}const ve=s=>({}),ne=s=>({});function oe(s){let e,n,t,o,i,r,c,v;const C=s[3]["mobile-title"],h=M(C,s,s[2],ne);let L=H(s[0]),d=[];for(let a=0;a<L.length;a+=1)d[a]=ie(se(s,L,a));const I=s[3]["desktop-title"],b=M(I,s,s[2],le);let V=H(s[0]),f=[];for(let a=0;a<V.length;a+=1)f[a]=ae(te(s,V,a));return{c(){e=$("div"),h&&h.c(),n=U(),t=$("div");for(let a=0;a<d.length;a+=1)d[a].c();o=U(),i=$("div"),b&&b.c(),r=U(),c=$("ul");for(let a=0;a<f.length;a+=1)f[a].c();this.h()},l(a){e=k(a,"DIV",{class:!0});var _=E(e);h&&h.l(_),n=W(_),t=k(_,"DIV",{class:!0});var l=E(t);for(let w=0;w<d.length;w+=1)d[w].l(l);l.forEach(m),_.forEach(m),o=W(a),i=k(a,"DIV",{class:!0});var u=E(i);b&&b.l(u),r=W(u),c=k(u,"UL",{class:!0});var S=E(c);for(let w=0;w<f.length;w+=1)f[w].l(S);S.forEach(m),u.forEach(m),this.h()},h(){g(t,"class","list-group svelte-1mlm68e"),g(e,"class","d-sm-flex d-md-flex d-lg-none d-xl-none flex-column gap-3"),g(c,"class","list-group list-group-flush svelte-1mlm68e"),g(i,"class","d-none flex-column d-lg-flex d-xl-flex d-print-none")},m(a,_){D(a,e,_),h&&h.m(e,null),p(e,n),p(e,t);for(let l=0;l<d.length;l+=1)d[l]&&d[l].m(t,null);D(a,o,_),D(a,i,_),b&&b.m(i,null),p(i,r),p(i,c);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(c,null);v=!0},p(a,_){if(h&&h.p&&(!v||_&4)&&N(h,C,a,a[2],v?z(C,a[2],_,ve):P(a[2]),ne),_&3){L=H(a[0]);let l;for(l=0;l<L.length;l+=1){const u=se(a,L,l);d[l]?d[l].p(u,_):(d[l]=ie(u),d[l].c(),d[l].m(t,null))}for(;l<d.length;l+=1)d[l].d(1);d.length=L.length}if(b&&b.p&&(!v||_&4)&&N(b,I,a,a[2],v?z(I,a[2],_,ge):P(a[2]),le),_&3){V=H(a[0]);let l;for(l=0;l<V.length;l+=1){const u=te(a,V,l);f[l]?f[l].p(u,_):(f[l]=ae(u),f[l].c(),f[l].m(c,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=V.length}},i(a){v||(O(h,a),O(b,a),v=!0)},o(a){A(h,a),A(b,a),v=!1},d(a){a&&(m(e),m(o),m(i)),h&&h.d(a),ee(d,a),b&&b.d(a),ee(f,a)}}}function ie(s){let e,n,t=s[7].label+"",o,i,r,c,v;return{c(){e=$("a"),n=$("span"),o=T(t),i=U(),r=$("i"),c=U(),this.h()},l(C){e=k(C,"A",{href:!0,class:!0});var h=E(e);n=k(h,"SPAN",{});var L=E(n);o=q(L,t),L.forEach(m),i=W(h),r=k(h,"I",{class:!0}),E(r).forEach(m),c=W(h),h.forEach(m),this.h()},h(){g(r,"class","bi bi-link"),g(e,"href",v=s[1]+"/"+s[7].url),g(e,"class","list-group-item list-group-item-action d-flex justify-content-between svelte-1mlm68e")},m(C,h){D(C,e,h),p(e,n),p(n,o),p(e,i),p(e,r),p(e,c)},p(C,h){h&1&&t!==(t=C[7].label+"")&&Y(o,t),h&3&&v!==(v=C[1]+"/"+C[7].url)&&g(e,"href",v)},d(C){C&&m(e)}}}function ae(s){let e,n=s[4].label+"",t,o;return{c(){e=$("a"),t=T(n),this.h()},l(i){e=k(i,"A",{class:!0,href:!0});var r=E(e);t=q(r,n),r.forEach(m),this.h()},h(){g(e,"class","list-group-item list-group-item-action svelte-1mlm68e"),g(e,"href",o=s[1]+"/"+s[4].url)},m(i,r){D(i,e,r),p(e,t)},p(i,r){r&1&&n!==(n=i[4].label+"")&&Y(t,n),r&3&&o!==(o=i[1]+"/"+i[4].url)&&g(e,"href",o)},d(i){i&&m(e)}}}function be(s){let e,n,t=s[0].length&&oe(s);return{c(){t&&t.c(),e=x()},l(o){t&&t.l(o),e=x()},m(o,i){t&&t.m(o,i),D(o,e,i),n=!0},p(o,[i]){o[0].length?t?(t.p(o,i),i&1&&O(t,1)):(t=oe(o),t.c(),O(t,1),t.m(e.parentNode,e)):t&&(he(),A(t,1,1,()=>{t=null}),me())},i(o){n||(O(t),n=!0)},o(o){A(t),n=!1},d(o){o&&m(e),t&&t.d(o)}}}function $e(s,e,n){let{$$slots:t={},$$scope:o}=e,{contentLinks:i=[]}=e,r="";return _e(()=>{var c;n(1,r=(c=window==null?void 0:window.location)!=null&&c.href?window.location.href:"")}),s.$$set=c=>{"contentLinks"in c&&n(0,i=c.contentLinks),"$$scope"in c&&n(2,o=c.$$scope)},[i,r,o,t]}class re extends G{constructor(e){super(),J(this,e,$e,be,F,{contentLinks:0})}}function ke(s){let e,n,t,o;return{c(){e=$("p"),n=T("Welcome and congratulations on your calling as a "),t=T(s[0]),o=T(` in the Lehi Utah 3rd Stake. We are so excited
	to have you part of the Lords work.`),this.h()},l(i){e=k(i,"P",{class:!0});var r=E(e);n=q(r,"Welcome and congratulations on your calling as a "),t=q(r,s[0]),o=q(r,` in the Lehi Utah 3rd Stake. We are so excited
	to have you part of the Lords work.`),r.forEach(m),this.h()},h(){g(e,"class","lead")},m(i,r){D(i,e,r),p(e,n),p(e,t),p(e,o)},p(i,[r]){r&1&&Y(t,i[0])},i:B,o:B,d(i){i&&m(e)}}}function we(s,e,n){let{title:t=""}=e;return s.$$set=o=>{"title"in o&&n(0,t=o.title)},[t]}class Ce extends G{constructor(e){super(),J(this,e,we,ke,F,{title:0})}}const Ee=s=>({}),ce=s=>({}),Le=s=>({}),fe=s=>({});function Ie(s){let e,n="Table of Contents";return{c(){e=$("h3"),e.textContent=n,this.h()},l(t){e=k(t,"H3",{slot:!0,"data-svelte-h":!0}),ue(e)!=="svelte-hkbuwl"&&(e.textContent=n),this.h()},h(){g(e,"slot","mobile-title")},m(t,o){D(t,e,o)},p:B,d(t){t&&m(e)}}}function De(s){let e,n="Table of Contents";return{c(){e=$("h3"),e.textContent=n,this.h()},l(t){e=k(t,"H3",{class:!0,slot:!0,"data-svelte-h":!0}),ue(e)!=="svelte-nuixmv"&&(e.textContent=n),this.h()},h(){g(e,"class","h5"),g(e,"slot","desktop-title")},m(t,o){D(t,e,o)},p:B,d(t){t&&m(e)}}}function Ve(s){let e,n,t,o,i,r,c,v,C,h,L,d,I,b;n=new Ce({props:{title:s[0]}});const V=s[2].intro,f=M(V,s,s[3],fe);v=new re({props:{contentLinks:s[1],$$slots:{"mobile-title":[Ie]},$$scope:{ctx:s}}});const a=s[2].content,_=M(a,s,s[3],ce);return I=new re({props:{contentLinks:s[1],$$slots:{"desktop-title":[De]},$$scope:{ctx:s}}}),{c(){e=$("div"),K(n.$$.fragment),t=U(),o=$("div"),i=$("div"),f&&f.c(),r=U(),c=$("div"),K(v.$$.fragment),C=U(),_&&_.c(),h=U(),L=$("div"),d=$("div"),K(I.$$.fragment),this.h()},l(l){e=k(l,"DIV",{class:!0});var u=E(e);Q(n.$$.fragment,u),t=W(u),o=k(u,"DIV",{class:!0});var S=E(o);i=k(S,"DIV",{class:!0});var w=E(i);f&&f.l(w),r=W(w),c=k(w,"DIV",{class:!0});var j=E(c);Q(v.$$.fragment,j),j.forEach(m),C=W(w),_&&_.l(w),w.forEach(m),h=W(S),L=k(S,"DIV",{class:!0});var Z=E(L);d=k(Z,"DIV",{class:!0});var y=E(d);Q(I.$$.fragment,y),y.forEach(m),Z.forEach(m),S.forEach(m),u.forEach(m),this.h()},h(){g(c,"class","d-lg-none d-xl-none"),g(i,"class","col-sm-12 col-md-12 col-lg-8 col-xl-8 d-flex flex-column gap-4"),g(d,"class","sticky-top"),g(L,"class","col-lg-4 col-xl-4 d-md-none d-sm-none d-lg-block d-xl-block"),g(o,"class","row"),g(e,"class","d-flex flex-column gap-4")},m(l,u){D(l,e,u),R(n,e,null),p(e,t),p(e,o),p(o,i),f&&f.m(i,null),p(i,r),p(i,c),R(v,c,null),p(i,C),_&&_.m(i,null),p(o,h),p(o,L),p(L,d),R(I,d,null),b=!0},p(l,[u]){const S={};u&1&&(S.title=l[0]),n.$set(S),f&&f.p&&(!b||u&8)&&N(f,V,l,l[3],b?z(V,l[3],u,Le):P(l[3]),fe);const w={};u&2&&(w.contentLinks=l[1]),u&8&&(w.$$scope={dirty:u,ctx:l}),v.$set(w),_&&_.p&&(!b||u&8)&&N(_,a,l,l[3],b?z(a,l[3],u,Ee):P(l[3]),ce);const j={};u&2&&(j.contentLinks=l[1]),u&8&&(j.$$scope={dirty:u,ctx:l}),I.$set(j)},i(l){b||(O(n.$$.fragment,l),O(f,l),O(v.$$.fragment,l),O(_,l),O(I.$$.fragment,l),b=!0)},o(l){A(n.$$.fragment,l),A(f,l),A(v.$$.fragment,l),A(_,l),A(I.$$.fragment,l),b=!1},d(l){l&&m(e),X(n),f&&f.d(l),X(v),_&&_.d(l),X(I)}}}function Se(s,e,n){let{$$slots:t={},$$scope:o}=e,{title:i=""}=e,{tableOfContents:r=[]}=e;return s.$$set=c=>{"title"in c&&n(0,i=c.title),"tableOfContents"in c&&n(1,r=c.tableOfContents),"$$scope"in c&&n(3,o=c.$$scope)},[i,r,t,o]}class je extends G{constructor(e){super(),J(this,e,Se,Ve,F,{title:0,tableOfContents:1})}}export{We as C,je as a};
