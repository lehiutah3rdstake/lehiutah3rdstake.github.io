function m(){}function j(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function M(){return Object.create(null)}function E(t){t.forEach(v)}function q(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function B(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function F(t){return Object.keys(t).length===0}function x(t,...n){if(t==null){for(const r of n)r(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t){let n;return x(t,e=>n=e)(),n}function S(t,n,e){t.$$.on_destroy.push(x(n,e))}function U(t,n,e,r){if(t){const o=k(t,n,e,r);return t[0](o)}}function k(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const i=[],d=Math.max(n.dirty.length,o.length);for(let s=0;s<d;s+=1)i[s]=n.dirty[s]|o[s];return i}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,i){if(o){const d=k(n,e,r,i);t.p(d,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){return t&&q(t.destroy)?t.destroy:m}let _;function h(t){_=t}function l(){if(!_)throw new Error("Function called outside component initialization");return _}function K(t){l().$$.on_mount.push(t)}function L(t){l().$$.after_update.push(t)}function N(t){l().$$.on_destroy.push(t)}function Q(t,n){return l().$$.context.set(t,n),n}function R(t){return l().$$.context.get(t)}const a=[],b=[];let c=[];const y=[],w=Promise.resolve();let g=!1;function C(){g||(g=!0,w.then(z))}function T(){return C(),w}function O(t){c.push(t)}const p=new Set;let u=0;function z(){if(u!==0)return;const t=_;do{try{for(;u<a.length;){const n=a[u];u++,h(n),D(n.$$)}}catch(n){throw a.length=0,u=0,n}for(h(null),a.length=0,u=0;b.length;)b.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];p.has(e)||(p.add(e),e())}c.length=0}while(a.length);for(;y.length;)y.pop()();g=!1,p.clear(),h(t)}function D(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function V(t){const n=[],e=[];c.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),c=n}export{P as A,R as B,Q as C,N as D,G as a,S as b,U as c,x as d,B as e,L as f,I as g,b as h,q as i,J as j,M as k,z as l,F as m,m as n,K as o,O as p,V as q,E as r,A as s,T as t,H as u,_ as v,h as w,v as x,a as y,C as z};
