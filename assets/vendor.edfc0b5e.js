var Sm=Object.defineProperty;var ru=Object.getOwnPropertySymbols;var Am=Object.prototype.hasOwnProperty,Cm=Object.prototype.propertyIsEnumerable;var su=(t,e,n)=>e in t?Sm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,iu=(t,e)=>{for(var n in e||(e={}))Am.call(e,n)&&su(t,n,e[n]);if(ru)for(var n of ru(e))Cm.call(e,n)&&su(t,n,e[n]);return t};function Jo(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nm=Jo(Rm);function ou(t){return!!t||t===""}function Zo(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?Dm(r):Zo(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(je(t))return t;if(be(t))return t}}const km=/;(?![^(]*\))/g,Om=/:(.+)/;function Dm(t){const e={};return t.split(km).forEach(n=>{if(n){const r=n.split(Om);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ea(t){let e="";if(je(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=ea(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Pm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=pn(t[r],e[r]);return n}function pn(t,e){if(t===e)return!0;let n=lu(t),r=lu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=j(t),r=j(e),n||r)return n&&r?Pm(t,e):!1;if(n=be(t),r=be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!pn(t[o],e[o]))return!1}}return String(t)===String(e)}function ta(t,e){return t.findIndex(n=>pn(n,e))}const IA=t=>t==null?"":j(t)||be(t)&&(t.toString===hu||!X(t.toString))?JSON.stringify(t,au,2):String(t),au=(t,e)=>e&&e.__v_isRef?au(t,e.value):Gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Yn(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!j(e)&&!fu(e)?String(e):e,ue={},Wn=[],vt=()=>{},Mm=()=>!1,xm=/^on[^a-z]/,Xs=t=>xm.test(t),na=t=>t.startsWith("onUpdate:"),$e=Object.assign,cu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lm=Object.prototype.hasOwnProperty,ne=(t,e)=>Lm.call(t,e),j=Array.isArray,Gn=t=>Js(t)==="[object Map]",Yn=t=>Js(t)==="[object Set]",lu=t=>t instanceof Date,X=t=>typeof t=="function",je=t=>typeof t=="string",ra=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",uu=t=>be(t)&&X(t.then)&&X(t.catch),hu=Object.prototype.toString,Js=t=>hu.call(t),Um=t=>Js(t).slice(8,-1),fu=t=>Js(t)==="[object Object]",sa=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zs=Jo(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ei=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Fm=/-(\w)/g,Tt=ei(t=>t.replace(Fm,(e,n)=>n?n.toUpperCase():"")),Vm=/\B([A-Z])/g,Qn=ei(t=>t.replace(Vm,"-$1").toLowerCase()),ti=ei(t=>t.charAt(0).toUpperCase()+t.slice(1)),ia=ei(t=>t?`on${ti(t)}`:""),jr=(t,e)=>!Object.is(t,e),ni=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ri=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},si=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let du;const $m=()=>du||(du=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let gn;const ii=[];class jm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&gn&&(this.parent=gn,this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(ii.push(this),gn=this)}off(){this.active&&(ii.pop(),gn=ii[ii.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Bm(t,e){e=e||gn,e&&e.active&&e.effects.push(t)}const oa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},pu=t=>(t.w&Kt)>0,gu=t=>(t.n&Kt)>0,Hm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kt},qm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];pu(s)&&!gu(s)?s.delete(t):e[n++]=s,s.w&=~Kt,s.n&=~Kt}e.length=n}},aa=new WeakMap;let Br=0,Kt=1;const ca=30,Hr=[];let mn;const yn=Symbol(""),la=Symbol("");class ua{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Bm(this,r)}run(){if(!this.active)return this.fn();if(!Hr.includes(this))try{return Hr.push(mn=this),Km(),Kt=1<<++Br,Br<=ca?Hm(this):mu(this),this.fn()}finally{Br<=ca&&qm(this),Kt=1<<--Br,vn(),Hr.pop();const e=Hr.length;mn=e>0?Hr[e-1]:void 0}}stop(){this.active&&(mu(this),this.onStop&&this.onStop(),this.active=!1)}}function mu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xn=!0;const ha=[];function Jn(){ha.push(Xn),Xn=!1}function Km(){ha.push(Xn),Xn=!0}function vn(){const t=ha.pop();Xn=t===void 0?!0:t}function it(t,e,n){if(!yu())return;let r=aa.get(t);r||aa.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=oa()),vu(s)}function yu(){return Xn&&mn!==void 0}function vu(t,e){let n=!1;Br<=ca?gu(t)||(t.n|=Kt,n=!pu(t)):n=!t.has(mn),n&&(t.add(mn),mn.deps.push(t))}function Pt(t,e,n,r,s,i){const o=aa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?sa(n)&&a.push(o.get("length")):(a.push(o.get(yn)),Gn(t)&&a.push(o.get(la)));break;case"delete":j(t)||(a.push(o.get(yn)),Gn(t)&&a.push(o.get(la)));break;case"set":Gn(t)&&a.push(o.get(yn));break}if(a.length===1)a[0]&&fa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);fa(oa(c))}}function fa(t,e){for(const n of j(t)?t:[...t])(n!==mn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const zm=Jo("__proto__,__v_isRef,__isVue"),wu=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(ra)),Wm=da(),Gm=da(!1,!0),Ym=da(!0),_u=Qm();function Qm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)it(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Jn();const r=re(this)[e].apply(this,n);return vn(),r}}),t}function da(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?fy:Nu:e?Ru:Cu).get(r))return r;const o=j(r);if(!t&&o&&ne(_u,s))return Reflect.get(_u,s,i);const a=Reflect.get(r,s,i);return(ra(s)?wu.has(s):zm(s))||(t||it(r,"get",s),e)?a:Ze(a)?!o||!sa(s)?a.value:a:be(a)?t?ku(a):Zn(a):a}}const Xm=Eu(),Jm=Eu(!0);function Eu(t=!1){return function(n,r,s,i){let o=n[r];if(!t&&(s=re(s),o=re(o),!j(n)&&Ze(o)&&!Ze(s)))return o.value=s,!0;const a=j(n)&&sa(r)?Number(r)<n.length:ne(n,r),c=Reflect.set(n,r,s,i);return n===re(i)&&(a?jr(s,o)&&Pt(n,"set",r,s):Pt(n,"add",r,s)),c}}function Zm(t,e){const n=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Pt(t,"delete",e,void 0),r}function ey(t,e){const n=Reflect.has(t,e);return(!ra(e)||!wu.has(e))&&it(t,"has",e),n}function ty(t){return it(t,"iterate",j(t)?"length":yn),Reflect.ownKeys(t)}const Iu={get:Wm,set:Xm,deleteProperty:Zm,has:ey,ownKeys:ty},ny={get:Ym,set(t,e){return!0},deleteProperty(t,e){return!0}},ry=$e({},Iu,{get:Gm,set:Jm}),pa=t=>t,oi=t=>Reflect.getPrototypeOf(t);function ai(t,e,n=!1,r=!1){t=t.__v_raw;const s=re(t),i=re(e);e!==i&&!n&&it(s,"get",e),!n&&it(s,"get",i);const{has:o}=oi(s),a=r?pa:n?ya:qr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ci(t,e=!1){const n=this.__v_raw,r=re(n),s=re(t);return t!==s&&!e&&it(r,"has",t),!e&&it(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function li(t,e=!1){return t=t.__v_raw,!e&&it(re(t),"iterate",yn),Reflect.get(t,"size",t)}function Tu(t){t=re(t);const e=re(this);return oi(e).has.call(e,t)||(e.add(t),Pt(e,"add",t,t)),this}function bu(t,e){e=re(e);const n=re(this),{has:r,get:s}=oi(n);let i=r.call(n,t);i||(t=re(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?jr(e,o)&&Pt(n,"set",t,e):Pt(n,"add",t,e),this}function Su(t){const e=re(this),{has:n,get:r}=oi(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Pt(e,"delete",t,void 0),i}function Au(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Pt(t,"clear",void 0,void 0),n}function ui(t,e){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=e?pa:t?ya:qr;return!t&&it(a,"iterate",yn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function hi(t,e,n){return function(...r){const s=this.__v_raw,i=re(s),o=Gn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?pa:e?ya:qr;return!e&&it(i,"iterate",c?la:yn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function zt(t){return function(...e){return t==="delete"?!1:this}}function sy(){const t={get(i){return ai(this,i)},get size(){return li(this)},has:ci,add:Tu,set:bu,delete:Su,clear:Au,forEach:ui(!1,!1)},e={get(i){return ai(this,i,!1,!0)},get size(){return li(this)},has:ci,add:Tu,set:bu,delete:Su,clear:Au,forEach:ui(!1,!0)},n={get(i){return ai(this,i,!0)},get size(){return li(this,!0)},has(i){return ci.call(this,i,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:ui(!0,!1)},r={get(i){return ai(this,i,!0,!0)},get size(){return li(this,!0)},has(i){return ci.call(this,i,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:ui(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hi(i,!1,!1),n[i]=hi(i,!0,!1),e[i]=hi(i,!1,!0),r[i]=hi(i,!0,!0)}),[t,n,e,r]}const[iy,oy,ay,cy]=sy();function ga(t,e){const n=e?t?cy:ay:t?oy:iy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const ly={get:ga(!1,!1)},uy={get:ga(!1,!0)},hy={get:ga(!0,!1)},Cu=new WeakMap,Ru=new WeakMap,Nu=new WeakMap,fy=new WeakMap;function dy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function py(t){return t.__v_skip||!Object.isExtensible(t)?0:dy(Um(t))}function Zn(t){return t&&t.__v_isReadonly?t:ma(t,!1,Iu,ly,Cu)}function gy(t){return ma(t,!1,ry,uy,Ru)}function ku(t){return ma(t,!0,ny,hy,Nu)}function ma(t,e,n,r,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=py(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function er(t){return Ou(t)?er(t.__v_raw):!!(t&&t.__v_isReactive)}function Ou(t){return!!(t&&t.__v_isReadonly)}function Du(t){return er(t)||Ou(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Pu(t){return ri(t,"__v_skip",!0),t}const qr=t=>be(t)?Zn(t):t,ya=t=>be(t)?ku(t):t;function Mu(t){yu()&&(t=re(t),t.dep||(t.dep=oa()),vu(t.dep))}function xu(t,e){t=re(t),t.dep&&fa(t.dep)}function Ze(t){return Boolean(t&&t.__v_isRef===!0)}function my(t){return Lu(t,!1)}function yy(t){return Lu(t,!0)}function Lu(t,e){return Ze(t)?t:new vy(t,e)}class vy{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:qr(e)}get value(){return Mu(this),this._value}set value(e){e=this._shallow?e:re(e),jr(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:qr(e),xu(this))}}function Kr(t){return Ze(t)?t.value:t}const wy={get:(t,e,n)=>Kr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ze(s)&&!Ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Uu(t){return er(t)?t:new Proxy(t,wy)}class _y{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new ua(e,()=>{this._dirty||(this._dirty=!0,xu(this))}),this.__v_isReadonly=r}get value(){const e=re(this);return Mu(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function bt(t,e){let n,r;const s=X(t);return s?(n=t,r=vt):(n=t.get,r=t.set),new _y(n,r,s||!r)}Promise.resolve();function Ey(t,e,...n){const r=t.vnode.props||ue;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ue;f?s=n.map(g=>g.trim()):h&&(s=n.map(si))}let a,c=r[a=ia(e)]||r[a=ia(Tt(e))];!c&&i&&(c=r[a=ia(Qn(e))]),c&&gt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(l,t,6,s)}}function Fu(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=Fu(l,e,!0);u&&(a=!0,$e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):$e(o,i),r.set(t,o),o)}function va(t,e){return!t||!Xs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Qn(e))||ne(t,e))}let ft=null,Vu=null;function fi(t){const e=ft;return ft=t,Vu=t&&t.type.__scopeId||null,e}function Iy(t,e=ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&fh(-1);const i=fi(e),o=t(...s);return fi(i),r._d&&fh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function wa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:R}=t;let T,N;const V=fi(t);try{if(n.shapeFlag&4){const Y=s||r;T=Rt(u.call(Y,Y,h,i,g,f,y)),N=c}else{const Y=e;T=Rt(Y.length>1?Y(i,{attrs:c,slots:a,emit:l}):Y(i,null)),N=e.props?c:Ty(c)}}catch(Y){zr.length=0,Ii(Y,t,1),T=pt(Wt)}let z=T;if(N&&R!==!1){const Y=Object.keys(N),{shapeFlag:fe}=z;Y.length&&fe&(1|6)&&(o&&Y.some(na)&&(N=by(N,o)),z=tr(z,N))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),T=z,fi(V),T}const Ty=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xs(n))&&((e||(e={}))[n]=t[n]);return e},by=(t,e)=>{const n={};for(const r in t)(!na(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Sy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$u(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!va(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$u(r,o,l):!0:!!o;return!1}function $u(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!va(n,i))return!0}return!1}function Ay({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Cy=t=>t.__isSuspense;function Ry(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):Av(t)}function di(t,e){if(Ne){let n=Ne.provides;const r=Ne.parent&&Ne.parent.provides;r===n&&(n=Ne.provides=Object.create(r)),n[t]=e}}function St(t,e,n=!1){const r=Ne||ft;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r.proxy):e}}function Ny(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zu(()=>{t.isMounted=!0}),Wu(()=>{t.isUnmounting=!0}),t}const dt=[Function,Array],ky={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},setup(t,{slots:e}){const n=gv(),r=Ny();let s;return()=>{const i=e.default&&Hu(e.default(),!0);if(!i||!i.length)return;const o=re(t),{mode:a}=o,c=i[0];if(r.isLeaving)return Ea(c);const l=Bu(c);if(!l)return Ea(c);const u=_a(l,o,r,n);Ia(l,u);const h=n.subTree,f=h&&Bu(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const R=y();s===void 0?s=R:R!==s&&(s=R,g=!0)}if(f&&f.type!==Wt&&(!In(l,f)||g)){const R=_a(f,o,r,n);if(Ia(f,R),a==="out-in")return r.isLeaving=!0,R.afterLeave=()=>{r.isLeaving=!1,n.update()},Ea(c);a==="in-out"&&l.type!==Wt&&(R.delayLeave=(T,N,V)=>{const z=ju(r,f);z[String(f.key)]=f,T._leaveCb=()=>{N(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=V})}return c}}},Oy=ky;function ju(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function _a(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:R,onAppear:T,onAfterAppear:N,onAppearCancelled:V}=e,z=String(t.key),Y=ju(n,t),fe=(Z,Te)=>{Z&&gt(Z,r,9,Te)},we={mode:i,persisted:o,beforeEnter(Z){let Te=a;if(!n.isMounted)if(s)Te=R||a;else return;Z._leaveCb&&Z._leaveCb(!0);const de=Y[z];de&&In(t,de)&&de.el._leaveCb&&de.el._leaveCb(),fe(Te,[Z])},enter(Z){let Te=c,de=l,Fe=u;if(!n.isMounted)if(s)Te=T||c,de=N||l,Fe=V||u;else return;let Ve=!1;const ze=Z._enterCb=qt=>{Ve||(Ve=!0,qt?fe(Fe,[Z]):fe(de,[Z]),we.delayedLeave&&we.delayedLeave(),Z._enterCb=void 0)};Te?(Te(Z,ze),Te.length<=1&&ze()):ze()},leave(Z,Te){const de=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return Te();fe(h,[Z]);let Fe=!1;const Ve=Z._leaveCb=ze=>{Fe||(Fe=!0,Te(),ze?fe(y,[Z]):fe(g,[Z]),Z._leaveCb=void 0,Y[de]===t&&delete Y[de])};Y[de]=t,f?(f(Z,Ve),f.length<=1&&Ve()):Ve()},clone(Z){return _a(Z,e,n,r)}};return we}function Ea(t){if(pi(t))return t=tr(t),t.children=null,t}function Bu(t){return pi(t)?t.children?t.children[0]:void 0:t}function Ia(t,e){t.shapeFlag&6&&t.component?Ia(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Hu(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===Ct?(i.patchFlag&128&&r++,n=n.concat(Hu(i.children,e))):(e||i.type!==Wt)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function qu(t){return X(t)?{setup:t,name:t.name}:t}const Ta=t=>!!t.type.__asyncLoader,pi=t=>t.type.__isKeepAlive;function Dy(t,e){Ku(t,"a",e)}function Py(t,e){Ku(t,"da",e)}function Ku(t,e,n=Ne){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}t()});if(gi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pi(s.parent.vnode)&&My(r,e,n,s),s=s.parent}}function My(t,e,n,r){const s=gi(e,t,r,!0);Gu(()=>{cu(r[e],s)},n)}function gi(t,e,n=Ne,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Jn(),nr(n);const a=gt(e,n,t,o);return Tn(),vn(),a});return r?s.unshift(i):s.push(i),i}}const Mt=t=>(e,n=Ne)=>(!Ei||t==="sp")&&gi(t,e,n),xy=Mt("bm"),zu=Mt("m"),Ly=Mt("bu"),Uy=Mt("u"),Wu=Mt("bum"),Gu=Mt("um"),Fy=Mt("sp"),Vy=Mt("rtg"),$y=Mt("rtc");function jy(t,e=Ne){gi("ec",t,e)}let ba=!0;function By(t){const e=Xu(t),n=t.proxy,r=t.ctx;ba=!1,e.beforeCreate&&Yu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:R,deactivated:T,beforeDestroy:N,beforeUnmount:V,destroyed:z,unmounted:Y,render:fe,renderTracked:we,renderTriggered:Z,errorCaptured:Te,serverPrefetch:de,expose:Fe,inheritAttrs:Ve,components:ze,directives:qt,filters:Hn}=e;if(l&&Hy(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ae=o[pe];X(ae)&&(r[pe]=ae.bind(n))}if(s){const pe=s.call(n,n);be(pe)&&(t.data=Zn(pe))}if(ba=!0,i)for(const pe in i){const ae=i[pe],ut=X(ae)?ae.bind(n,n):X(ae.get)?ae.get.bind(n,n):vt,Kn=!X(ae)&&X(ae.set)?ae.set.bind(n):vt,Dt=bt({get:ut,set:Kn});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Et=>Dt.value=Et})}if(a)for(const pe in a)Qu(a[pe],r,n,pe);if(c){const pe=X(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ae=>{di(ae,pe[ae])})}u&&Yu(u,t,"c");function Re(pe,ae){j(ae)?ae.forEach(ut=>pe(ut.bind(n))):ae&&pe(ae.bind(n))}if(Re(xy,h),Re(zu,f),Re(Ly,g),Re(Uy,y),Re(Dy,R),Re(Py,T),Re(jy,Te),Re($y,we),Re(Vy,Z),Re(Wu,V),Re(Gu,Y),Re(Fy,de),j(Fe))if(Fe.length){const pe=t.exposed||(t.exposed={});Fe.forEach(ae=>{Object.defineProperty(pe,ae,{get:()=>n[ae],set:ut=>n[ae]=ut})})}else t.exposed||(t.exposed={});fe&&t.render===vt&&(t.render=fe),Ve!=null&&(t.inheritAttrs=Ve),ze&&(t.components=ze),qt&&(t.directives=qt)}function Hy(t,e,n=vt,r=!1){j(t)&&(t=Sa(t));for(const s in t){const i=t[s];let o;be(i)?"default"in i?o=St(i.from||s,i.default,!0):o=St(i.from||s):o=St(i),Ze(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Yu(t,e,n){gt(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qu(t,e,n,r){const s=r.includes(".")?Nh(n,r):()=>n[r];if(je(t)){const i=e[t];X(i)&&ir(s,i)}else if(X(t))ir(s,t.bind(n));else if(be(t))if(j(t))t.forEach(i=>Qu(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&ir(s,i,t)}}function Xu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>mi(c,l,o,!0)),mi(c,e,o)),i.set(e,c),c}function mi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&mi(t,i,n,!0),s&&s.forEach(o=>mi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=qy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qy={data:Ju,props:wn,emits:wn,methods:wn,computed:wn,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:wn,directives:wn,watch:zy,provide:Ju,inject:Ky};function Ju(t,e){return e?t?function(){return $e(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Ky(t,e){return wn(Sa(t),Sa(e))}function Sa(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function wn(t,e){return t?$e($e(Object.create(null),t),e):e}function zy(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const r in e)n[r]=We(t[r],e[r]);return n}function Wy(t,e,n,r=!1){const s={},i={};ri(i,vi,1),t.propsDefaults=Object.create(null),Zu(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:gy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Gy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const g=e[f];if(c)if(ne(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=Tt(f);s[y]=Aa(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Zu(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=Qn(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Aa(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ne(e,h))&&(delete i[h],l=!0)}l&&Pt(t,"set","$attrs")}function Zu(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Zs(c))continue;const l=e[c];let u;s&&ne(s,u=Tt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:va(t.emitsOptions,c)||l!==r[c]&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||ue;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Aa(s,c,h,l[h],t,!ne(l,h))}}return o}function Aa(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(nr(s),r=l[n]=c.call(null,e),Tn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Qn(n))&&(r=!0))}return r}function eh(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,g]=eh(h,e,!0);$e(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Wn),Wn;if(j(i))for(let u=0;u<i.length;u++){const h=Tt(i[u]);th(h)&&(o[h]=ue)}else if(i)for(const u in i){const h=Tt(u);if(th(h)){const f=i[u],g=o[h]=j(f)||X(f)?{type:f}:f;if(g){const y=sh(Boolean,g.type),R=sh(String,g.type);g[0]=y>-1,g[1]=R<0||y<R,(y>-1||ne(g,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function th(t){return t[0]!=="$"}function nh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function rh(t,e){return nh(t)===nh(e)}function sh(t,e){return j(e)?e.findIndex(n=>rh(n,t)):X(e)&&rh(e,t)?0:-1}const ih=t=>t[0]==="_"||t==="$stable",Ca=t=>j(t)?t.map(Rt):[Rt(t)],Yy=(t,e,n)=>{const r=Iy((...s)=>Ca(e(...s)),n);return r._c=!1,r},oh=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ih(s))continue;const i=t[s];if(X(i))e[s]=Yy(s,i,r);else if(i!=null){const o=Ca(i);e[s]=()=>o}}},ah=(t,e)=>{const n=Ca(e);t.slots.default=()=>n},Qy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),ri(e,"_",n)):oh(e,t.slots={})}else t.slots={},e&&ah(t,e);ri(t.slots,vi,1)},Xy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:($e(s,e),!n&&a===1&&delete s._):(i=!e.$stable,oh(e,s)),o=e}else e&&(ah(t,e),o={default:1});if(i)for(const a in s)!ih(a)&&!(a in o)&&delete s[a]};function TA(t,e){const n=ft;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ue]=e[i];X(o)&&(o={mounted:o,updated:o}),o.deep&&bn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function _n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Jn(),gt(c,n,8,[t.el,a,t,e]),vn())}}function ch(){return{app:null,config:{isNativeTag:Mm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jy=0;function Zy(t,e){return function(r,s=null){s!=null&&!be(s)&&(s=null);const i=ch(),o=new Set;let a=!1;const c=i.app={_uid:Jy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Rv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=pt(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ma(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}const Ge=Ry;function ev(t){return tv(t)}function tv(t,e){const n=$m();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=vt,cloneNode:y,insertStaticContent:R}=t,T=(d,p,m,_=null,w=null,A=null,k=!1,b=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!In(d,p)&&(_=x(d),ht(d,w,A,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:L,shapeFlag:P}=p;switch(E){case Na:N(d,p,m,_);break;case Wt:V(d,p,m,_);break;case ka:d==null&&z(p,m,_,k);break;case Ct:qt(d,p,m,_,w,A,k,b,S);break;default:P&1?we(d,p,m,_,w,A,k,b,S):P&6?Hn(d,p,m,_,w,A,k,b,S):(P&64||P&128)&&E.process(d,p,m,_,w,A,k,b,S,ge)}L!=null&&w&&Ra(L,d&&d.ref,A,p||d,!p)},N=(d,p,m,_)=>{if(d==null)r(p.el=a(p.children),m,_);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},V=(d,p,m,_)=>{d==null?r(p.el=c(p.children||""),m,_):p.el=d.el},z=(d,p,m,_)=>{[d.el,d.anchor]=R(d.children,p,m,_)},Y=({el:d,anchor:p},m,_)=>{let w;for(;d&&d!==p;)w=f(d),r(d,m,_),d=w;r(p,m,_)},fe=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},we=(d,p,m,_,w,A,k,b,S)=>{k=k||p.type==="svg",d==null?Z(p,m,_,w,A,k,b,S):Fe(d,p,w,A,k,b,S)},Z=(d,p,m,_,w,A,k,b)=>{let S,E;const{type:L,props:P,shapeFlag:U,transition:K,patchFlag:te,dirs:_e}=d;if(d.el&&y!==void 0&&te===-1)S=d.el=y(d.el);else{if(S=d.el=o(d.type,A,P&&P.is,P),U&8?u(S,d.children):U&16&&de(d.children,S,null,_,w,A&&L!=="foreignObject",k,b),_e&&_n(d,null,_,"created"),P){for(const ye in P)ye!=="value"&&!Zs(ye)&&i(S,ye,null,P[ye],A,d.children,_,w,C);"value"in P&&i(S,"value",null,P.value),(E=P.onVnodeBeforeMount)&&At(E,_,d)}Te(S,d,d.scopeId,k,_)}_e&&_n(d,null,_,"beforeMount");const le=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;le&&K.beforeEnter(S),r(S,p,m),((E=P&&P.onVnodeMounted)||le||_e)&&Ge(()=>{E&&At(E,_,d),le&&K.enter(S),_e&&_n(d,null,_,"mounted")},w)},Te=(d,p,m,_,w)=>{if(m&&g(d,m),_)for(let A=0;A<_.length;A++)g(d,_[A]);if(w){let A=w.subTree;if(p===A){const k=w.vnode;Te(d,k,k.scopeId,k.slotScopeIds,w.parent)}}},de=(d,p,m,_,w,A,k,b,S=0)=>{for(let E=S;E<d.length;E++){const L=d[E]=b?Gt(d[E]):Rt(d[E]);T(null,L,p,m,_,w,A,k,b)}},Fe=(d,p,m,_,w,A,k)=>{const b=p.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:L}=p;S|=d.patchFlag&16;const P=d.props||ue,U=p.props||ue;let K;(K=U.onVnodeBeforeUpdate)&&At(K,m,p,d),L&&_n(p,d,m,"beforeUpdate");const te=w&&p.type!=="foreignObject";if(E?Ve(d.dynamicChildren,E,b,m,_,te,A):k||ut(d,p,b,null,m,_,te,A,!1),S>0){if(S&16)ze(b,p,P,U,m,_,w);else if(S&2&&P.class!==U.class&&i(b,"class",null,U.class,w),S&4&&i(b,"style",P.style,U.style,w),S&8){const _e=p.dynamicProps;for(let le=0;le<_e.length;le++){const ye=_e[le],yt=P[ye],zn=U[ye];(zn!==yt||ye==="value")&&i(b,ye,yt,zn,w,d.children,m,_,C)}}S&1&&d.children!==p.children&&u(b,p.children)}else!k&&E==null&&ze(b,p,P,U,m,_,w);((K=U.onVnodeUpdated)||L)&&Ge(()=>{K&&At(K,m,p,d),L&&_n(p,d,m,"updated")},_)},Ve=(d,p,m,_,w,A,k)=>{for(let b=0;b<p.length;b++){const S=d[b],E=p[b],L=S.el&&(S.type===Ct||!In(S,E)||S.shapeFlag&(6|64))?h(S.el):m;T(S,E,L,null,_,w,A,k,!0)}},ze=(d,p,m,_,w,A,k)=>{if(m!==_){for(const b in _){if(Zs(b))continue;const S=_[b],E=m[b];S!==E&&b!=="value"&&i(d,b,E,S,k,p.children,w,A,C)}if(m!==ue)for(const b in m)!Zs(b)&&!(b in _)&&i(d,b,m[b],null,k,p.children,w,A,C);"value"in _&&i(d,"value",m.value,_.value)}},qt=(d,p,m,_,w,A,k,b,S)=>{const E=p.el=d?d.el:a(""),L=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:U,slotScopeIds:K}=p;K&&(b=b?b.concat(K):K),d==null?(r(E,m,_),r(L,m,_),de(p.children,m,L,w,A,k,b,S)):P>0&&P&64&&U&&d.dynamicChildren?(Ve(d.dynamicChildren,U,m,w,A,k,b),(p.key!=null||w&&p===w.subTree)&&lh(d,p,!0)):ut(d,p,m,L,w,A,k,b,S)},Hn=(d,p,m,_,w,A,k,b,S)=>{p.slotScopeIds=b,d==null?p.shapeFlag&512?w.ctx.activate(p,m,_,k,S):qn(p,m,_,w,A,k,S):Re(d,p,S)},qn=(d,p,m,_,w,A,k)=>{const b=d.component=pv(d,_,w);if(pi(d)&&(b.ctx.renderer=ge),mv(b),b.asyncDep){if(w&&w.registerDep(b,pe),!d.el){const S=b.subTree=pt(Wt);V(null,S,p,m)}return}pe(b,d,p,m,w,A,k)},Re=(d,p,m)=>{const _=p.component=d.component;if(Sy(d,p,m))if(_.asyncDep&&!_.asyncResolved){ae(_,p,m);return}else _.next=p,bv(_.update),_.update();else p.component=d.component,p.el=d.el,_.vnode=p},pe=(d,p,m,_,w,A,k)=>{const b=()=>{if(d.isMounted){let{next:L,bu:P,u:U,parent:K,vnode:te}=d,_e=L,le;S.allowRecurse=!1,L?(L.el=te.el,ae(d,L,k)):L=te,P&&ni(P),(le=L.props&&L.props.onVnodeBeforeUpdate)&&At(le,K,L,te),S.allowRecurse=!0;const ye=wa(d),yt=d.subTree;d.subTree=ye,T(yt,ye,h(yt.el),x(yt),d,w,A),L.el=ye.el,_e===null&&Ay(d,ye.el),U&&Ge(U,w),(le=L.props&&L.props.onVnodeUpdated)&&Ge(()=>At(le,K,L,te),w)}else{let L;const{el:P,props:U}=p,{bm:K,m:te,parent:_e}=d,le=Ta(p);if(S.allowRecurse=!1,K&&ni(K),!le&&(L=U&&U.onVnodeBeforeMount)&&At(L,_e,p),S.allowRecurse=!0,P&&Q){const ye=()=>{d.subTree=wa(d),Q(P,d.subTree,d,w,null)};le?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=wa(d);T(null,ye,m,_,d,w,A),p.el=ye.el}if(te&&Ge(te,w),!le&&(L=U&&U.onVnodeMounted)){const ye=p;Ge(()=>At(L,_e,ye),w)}p.shapeFlag&256&&d.a&&Ge(d.a,w),d.isMounted=!0,p=m=_=null}},S=new ua(b,()=>Ih(d.update),d.scope),E=d.update=S.run.bind(S);E.id=d.uid,S.allowRecurse=E.allowRecurse=!0,E()},ae=(d,p,m)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,Gy(d,p.props,_,m),Xy(d,p.children,m),Jn(),Fa(void 0,d.update),vn()},ut=(d,p,m,_,w,A,k,b,S=!1)=>{const E=d&&d.children,L=d?d.shapeFlag:0,P=p.children,{patchFlag:U,shapeFlag:K}=p;if(U>0){if(U&128){Dt(E,P,m,_,w,A,k,b,S);return}else if(U&256){Kn(E,P,m,_,w,A,k,b,S);return}}K&8?(L&16&&C(E,w,A),P!==E&&u(m,P)):L&16?K&16?Dt(E,P,m,_,w,A,k,b,S):C(E,w,A,!0):(L&8&&u(m,""),K&16&&de(P,m,_,w,A,k,b,S))},Kn=(d,p,m,_,w,A,k,b,S)=>{d=d||Wn,p=p||Wn;const E=d.length,L=p.length,P=Math.min(E,L);let U;for(U=0;U<P;U++){const K=p[U]=S?Gt(p[U]):Rt(p[U]);T(d[U],K,m,null,w,A,k,b,S)}E>L?C(d,w,A,!0,!1,P):de(p,m,_,w,A,k,b,S,P)},Dt=(d,p,m,_,w,A,k,b,S)=>{let E=0;const L=p.length;let P=d.length-1,U=L-1;for(;E<=P&&E<=U;){const K=d[E],te=p[E]=S?Gt(p[E]):Rt(p[E]);if(In(K,te))T(K,te,m,null,w,A,k,b,S);else break;E++}for(;E<=P&&E<=U;){const K=d[P],te=p[U]=S?Gt(p[U]):Rt(p[U]);if(In(K,te))T(K,te,m,null,w,A,k,b,S);else break;P--,U--}if(E>P){if(E<=U){const K=U+1,te=K<L?p[K].el:_;for(;E<=U;)T(null,p[E]=S?Gt(p[E]):Rt(p[E]),m,te,w,A,k,b,S),E++}}else if(E>U)for(;E<=P;)ht(d[E],w,A,!0),E++;else{const K=E,te=E,_e=new Map;for(E=te;E<=U;E++){const st=p[E]=S?Gt(p[E]):Rt(p[E]);st.key!=null&&_e.set(st.key,E)}let le,ye=0;const yt=U-te+1;let zn=!1,eu=0;const $r=new Array(yt);for(E=0;E<yt;E++)$r[E]=0;for(E=K;E<=P;E++){const st=d[E];if(ye>=yt){ht(st,w,A,!0);continue}let It;if(st.key!=null)It=_e.get(st.key);else for(le=te;le<=U;le++)if($r[le-te]===0&&In(st,p[le])){It=le;break}It===void 0?ht(st,w,A,!0):($r[It-te]=E+1,It>=eu?eu=It:zn=!0,T(st,p[It],m,null,w,A,k,b,S),ye++)}const tu=zn?nv($r):Wn;for(le=tu.length-1,E=yt-1;E>=0;E--){const st=te+E,It=p[st],nu=st+1<L?p[st+1].el:_;$r[E]===0?T(null,It,m,nu,w,A,k,b,S):zn&&(le<0||E!==tu[le]?Et(It,m,nu,2):le--)}}},Et=(d,p,m,_,w=null)=>{const{el:A,type:k,transition:b,children:S,shapeFlag:E}=d;if(E&6){Et(d.component.subTree,p,m,_);return}if(E&128){d.suspense.move(p,m,_);return}if(E&64){k.move(d,p,m,ge);return}if(k===Ct){r(A,p,m);for(let P=0;P<S.length;P++)Et(S[P],p,m,_);r(d.anchor,p,m);return}if(k===ka){Y(d,p,m);return}if(_!==2&&E&1&&b)if(_===0)b.beforeEnter(A),r(A,p,m),Ge(()=>b.enter(A),w);else{const{leave:P,delayLeave:U,afterLeave:K}=b,te=()=>r(A,p,m),_e=()=>{P(A,()=>{te(),K&&K()})};U?U(A,te,_e):_e()}else r(A,p,m)},ht=(d,p,m,_=!1,w=!1)=>{const{type:A,props:k,ref:b,children:S,dynamicChildren:E,shapeFlag:L,patchFlag:P,dirs:U}=d;if(b!=null&&Ra(b,null,m,d,!0),L&256){p.ctx.deactivate(d);return}const K=L&1&&U,te=!Ta(d);let _e;if(te&&(_e=k&&k.onVnodeBeforeUnmount)&&At(_e,p,d),L&6)M(d.component,m,_);else{if(L&128){d.suspense.unmount(m,_);return}K&&_n(d,null,p,"beforeUnmount"),L&64?d.type.remove(d,p,m,w,ge,_):E&&(A!==Ct||P>0&&P&64)?C(E,p,m,!1,!0):(A===Ct&&P&(128|256)||!w&&L&16)&&C(S,p,m),_&&Xo(d)}(te&&(_e=k&&k.onVnodeUnmounted)||K)&&Ge(()=>{_e&&At(_e,p,d),K&&_n(d,null,p,"unmounted")},m)},Xo=d=>{const{type:p,el:m,anchor:_,transition:w}=d;if(p===Ct){v(m,_);return}if(p===ka){fe(d);return}const A=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:k,delayLeave:b}=w,S=()=>k(m,A);b?b(d.el,A,S):S()}else A()},v=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},M=(d,p,m)=>{const{bum:_,scope:w,update:A,subTree:k,um:b}=d;_&&ni(_),w.stop(),A&&(A.active=!1,ht(k,d,p,m)),b&&Ge(b,p),Ge(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(d,p,m,_=!1,w=!1,A=0)=>{for(let k=A;k<d.length;k++)ht(d[k],p,m,_,w)},x=d=>d.shapeFlag&6?x(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ce=(d,p,m)=>{d==null?p._vnode&&ht(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,m),Sh(),p._vnode=d},ge={p:T,um:ht,m:Et,r:Xo,mt:qn,mc:de,pc:ut,pbc:Ve,n:x,o:t};let J,Q;return e&&([J,Q]=e(ge)),{render:ce,hydrate:J,createApp:Zy(ce,J)}}function Ra(t,e,n,r,s=!1){if(j(t)){t.forEach((f,g)=>Ra(f,e&&(j(e)?e[g]:e),n,r,s));return}if(Ta(r)&&!s)return;const i=r.shapeFlag&4?Ma(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ue?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(je(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):Ze(l)&&(l.value=null)),je(c)){const f=()=>{u[c]=o,ne(h,c)&&(h[c]=o)};o?(f.id=-1,Ge(f,n)):f()}else if(Ze(c)){const f=()=>{c.value=o};o?(f.id=-1,Ge(f,n)):f()}else X(c)&&Yt(c,a,12,[o,u])}function At(t,e,n,r=null){gt(t,e,7,[n,r])}function lh(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Gt(s[i]),a.el=o.el),n||lh(o,a))}}function nv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const rv=t=>t.__isTeleport,uh="components";function bA(t,e){return iv(uh,t,!0,e)||t}const sv=Symbol();function iv(t,e,n=!0,r=!1){const s=ft||Ne;if(s){const i=s.type;if(t===uh){const a=_v(i);if(a&&(a===e||a===Tt(e)||a===ti(Tt(e))))return i}const o=hh(s[t]||i[t],e)||hh(s.appContext[t],e);return!o&&r?i:o}}function hh(t,e){return t&&(t[e]||t[Tt(e)]||t[ti(Tt(e))])}const Ct=Symbol(void 0),Na=Symbol(void 0),Wt=Symbol(void 0),ka=Symbol(void 0),zr=[];let En=null;function SA(t=!1){zr.push(En=t?null:[])}function ov(){zr.pop(),En=zr[zr.length-1]||null}let yi=1;function fh(t){yi+=t}function dh(t){return t.dynamicChildren=yi>0?En||Wn:null,ov(),yi>0&&En&&En.push(t),t}function AA(t,e,n,r,s,i){return dh(gh(t,e,n,r,s,i,!0))}function CA(t,e,n,r,s){return dh(pt(t,e,n,r,s,!0))}function Oa(t){return t?t.__v_isVNode===!0:!1}function In(t,e){return t.type===e.type&&t.key===e.key}const vi="__vInternal",ph=({key:t})=>t!=null?t:null,wi=({ref:t})=>t!=null?je(t)||Ze(t)||X(t)?{i:ft,r:t}:t:null;function gh(t,e=null,n=null,r=0,s=null,i=t===Ct?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ph(e),ref:e&&wi(e),scopeId:Vu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Da(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),yi>0&&!o&&En&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&En.push(c),c}const pt=av;function av(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sv)&&(t=Wt),Oa(t)){const a=tr(t,e,!0);return n&&Da(a,n),a}if(Ev(t)&&(t=t.__vccOpts),e){e=cv(e);let{class:a,style:c}=e;a&&!je(a)&&(e.class=ea(a)),be(c)&&(Du(c)&&!j(c)&&(c=$e({},c)),e.style=Zo(c))}const o=je(t)?1:Cy(t)?128:rv(t)?64:be(t)?4:X(t)?2:0;return gh(t,e,n,r,s,o,i,!0)}function cv(t){return t?Du(t)||vi in t?$e({},t):t:null}function tr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?uv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ph(a),ref:e&&e.ref?n&&s?j(s)?s.concat(wi(e)):[s,wi(e)]:wi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tr(t.ssContent),ssFallback:t.ssFallback&&tr(t.ssFallback),el:t.el,anchor:t.anchor}}function lv(t=" ",e=0){return pt(Na,null,t,e)}function Rt(t){return t==null||typeof t=="boolean"?pt(Wt):j(t)?pt(Ct,null,t.slice()):typeof t=="object"?Gt(t):pt(Na,null,String(t))}function Gt(t){return t.el===null||t.memo?t:tr(t)}function Da(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),Da(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(vi in e)?e._ctx=ft:s===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[lv(e)]):n=8);t.children=e,t.shapeFlag|=n}function uv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ea([e.class,r.class]));else if(s==="style")e.style=Zo([e.style,r.style]);else if(Xs(s)){const i=e[s],o=r[s];i!==o&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}const Pa=t=>t?mh(t)?Ma(t)||t.proxy:Pa(t.parent):null,_i=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pa(t.parent),$root:t=>Pa(t.root),$emit:t=>t.emit,$options:t=>Xu(t),$forceUpdate:t=>()=>Ih(t.update),$nextTick:t=>Eh.bind(t.proxy),$watch:t=>Cv.bind(t)}),hv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 0:return r[e];case 1:return s[e];case 3:return n[e];case 2:return i[e]}else{if(r!==ue&&ne(r,e))return o[e]=0,r[e];if(s!==ue&&ne(s,e))return o[e]=1,s[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=2,i[e];if(n!==ue&&ne(n,e))return o[e]=3,n[e];ba&&(o[e]=4)}}const u=_i[e];let h,f;if(u)return e==="$attrs"&&it(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ue&&ne(n,e))return o[e]=3,n[e];if(f=c.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==ue&&ne(s,e))s[e]=n;else if(r!==ue&&ne(r,e))r[e]=n;else if(ne(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return n[o]!==void 0||t!==ue&&ne(t,o)||e!==ue&&ne(e,o)||(a=i[0])&&ne(a,o)||ne(r,o)||ne(_i,o)||ne(s.config.globalProperties,o)}},fv=ch();let dv=0;function pv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||fv,i={uid:dv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new jm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eh(r,s),emitsOptions:Fu(r,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ey.bind(null,i),t.ce&&t.ce(i),i}let Ne=null;const gv=()=>Ne||ft,nr=t=>{Ne=t,t.scope.on()},Tn=()=>{Ne&&Ne.scope.off(),Ne=null};function mh(t){return t.vnode.shapeFlag&4}let Ei=!1;function mv(t,e=!1){Ei=e;const{props:n,children:r}=t.vnode,s=mh(t);Wy(t,n,s,e),Qy(t,r);const i=s?yv(t,e):void 0;return Ei=!1,i}function yv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Pu(new Proxy(t.ctx,hv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?wv(t):null;nr(t),Jn();const i=Yt(r,t,0,[t.props,s]);if(vn(),Tn(),uu(i)){if(i.then(Tn,Tn),e)return i.then(o=>{yh(t,o,e)}).catch(o=>{Ii(o,t,0)});t.asyncDep=i}else yh(t,i,e)}else wh(t,e)}function yh(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Uu(e)),wh(t,n)}let vh;function wh(t,e,n){const r=t.type;if(!t.render){if(!e&&vh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=$e($e({isCustomElement:i,delimiters:a},o),c);r.render=vh(s,l)}}t.render=r.render||vt}nr(t),Jn(),By(t),vn(),Tn()}function vv(t){return new Proxy(t.attrs,{get(e,n){return it(t,"get","$attrs"),e[n]}})}function wv(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=vv(t))},slots:t.slots,emit:t.emit,expose:e}}function Ma(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Uu(Pu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _i)return _i[n](t)}}))}function _v(t){return X(t)&&t.displayName||t.name}function Ev(t){return X(t)&&"__vccOpts"in t}function Yt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ii(i,e,n)}return s}function gt(t,e,n,r){if(X(t)){const i=Yt(t,e,n,r);return i&&uu(i)&&i.catch(o=>{Ii(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(gt(t[i],e,n,r));return s}function Ii(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Yt(c,null,10,[t,o,a]);return}}Iv(t,n,s,r)}function Iv(t,e,n,r=!0){console.error(t)}let Ti=!1,xa=!1;const ot=[];let xt=0;const Wr=[];let Gr=null,rr=0;const Yr=[];let Qt=null,sr=0;const _h=Promise.resolve();let La=null,Ua=null;function Eh(t){const e=La||_h;return t?e.then(this?t.bind(this):t):e}function Tv(t){let e=xt+1,n=ot.length;for(;e<n;){const r=e+n>>>1;Qr(ot[r])<t?e=r+1:n=r}return e}function Ih(t){(!ot.length||!ot.includes(t,Ti&&t.allowRecurse?xt+1:xt))&&t!==Ua&&(t.id==null?ot.push(t):ot.splice(Tv(t.id),0,t),Th())}function Th(){!Ti&&!xa&&(xa=!0,La=_h.then(Ah))}function bv(t){const e=ot.indexOf(t);e>xt&&ot.splice(e,1)}function bh(t,e,n,r){j(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Th()}function Sv(t){bh(t,Gr,Wr,rr)}function Av(t){bh(t,Qt,Yr,sr)}function Fa(t,e=null){if(Wr.length){for(Ua=e,Gr=[...new Set(Wr)],Wr.length=0,rr=0;rr<Gr.length;rr++)Gr[rr]();Gr=null,rr=0,Ua=null,Fa(t,e)}}function Sh(t){if(Yr.length){const e=[...new Set(Yr)];if(Yr.length=0,Qt){Qt.push(...e);return}for(Qt=e,Qt.sort((n,r)=>Qr(n)-Qr(r)),sr=0;sr<Qt.length;sr++)Qt[sr]();Qt=null,sr=0}}const Qr=t=>t.id==null?1/0:t.id;function Ah(t){xa=!1,Ti=!0,Fa(t),ot.sort((n,r)=>Qr(n)-Qr(r));const e=vt;try{for(xt=0;xt<ot.length;xt++){const n=ot[xt];n&&n.active!==!1&&Yt(n,null,14)}}finally{xt=0,ot.length=0,Sh(),Ti=!1,La=null,(ot.length||Wr.length||Yr.length)&&Ah(t)}}const Ch={};function ir(t,e,n){return Rh(t,e,n)}function Rh(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ue){const a=Ne;let c,l=!1,u=!1;if(Ze(t)?(c=()=>t.value,l=!!t._shallow):er(t)?(c=()=>t,r=!0):j(t)?(u=!0,l=t.some(er),c=()=>t.map(N=>{if(Ze(N))return N.value;if(er(N))return bn(N);if(X(N))return Yt(N,a,2)})):X(t)?e?c=()=>Yt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),gt(t,a,3,[f])}:c=vt,e&&r){const N=c;c=()=>bn(N())}let h,f=N=>{h=T.onStop=()=>{Yt(N,a,4)}};if(Ei)return f=vt,e?n&&gt(e,a,3,[c(),u?[]:void 0,f]):c(),vt;let g=u?[]:Ch;const y=()=>{if(!!T.active)if(e){const N=T.run();(r||l||(u?N.some((V,z)=>jr(V,g[z])):jr(N,g)))&&(h&&h(),gt(e,a,3,[N,g===Ch?void 0:g,f]),g=N)}else T.run()};y.allowRecurse=!!e;let R;s==="sync"?R=y:s==="post"?R=()=>Ge(y,a&&a.suspense):R=()=>{!a||a.isMounted?Sv(y):y()};const T=new ua(c,R);return e?n?y():g=T.run():s==="post"?Ge(T.run.bind(T),a&&a.suspense):T.run(),()=>{T.stop(),a&&a.scope&&cu(a.scope.effects,T)}}function Cv(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?Nh(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=Ne;nr(this);const a=Rh(s,i.bind(r),n);return o?nr(o):Tn(),a}function Nh(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function bn(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ze(t))bn(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)bn(t[n],e);else if(Yn(t)||Gn(t))t.forEach(n=>{bn(n,e)});else if(fu(t))for(const n in t)bn(t[n],e);return t}function kh(t,e,n){const r=arguments.length;return r===2?be(e)&&!j(e)?Oa(e)?pt(t,null,[e]):pt(t,e):pt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Oa(n)&&(n=[n]),pt(t,e,n))}const Rv="3.2.20",Nv="http://www.w3.org/2000/svg",or=typeof document!="undefined"?document:null,Oh=new Map,kv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?or.createElementNS(Nv,t):or.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>or.createTextNode(t),createComment:t=>or.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>or.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const s=n?n.previousSibling:e.lastChild;let i=Oh.get(t);if(!i){const o=or.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}Oh.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ov(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Dv(t,e,n){const r=t.style,s=r.display;if(!n)t.removeAttribute("style");else if(je(n))e!==n&&(r.cssText=n);else{for(const i in n)Va(r,i,n[i]);if(e&&!je(e))for(const i in e)n[i]==null&&Va(r,i,"")}"_vod"in t&&(r.display=s)}const Dh=/\s*!important$/;function Va(t,e,n){if(j(n))n.forEach(r=>Va(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=Pv(t,e);Dh.test(n)?t.setProperty(Qn(r),n.replace(Dh,""),"important"):t[r]=n}}const Ph=["Webkit","Moz","ms"],$a={};function Pv(t,e){const n=$a[e];if(n)return n;let r=Tt(e);if(r!=="filter"&&r in t)return $a[e]=r;r=ti(r);for(let s=0;s<Ph.length;s++){const i=Ph[s]+r;if(i in t)return $a[e]=i}return e}const Mh="http://www.w3.org/1999/xlink";function Mv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mh,e.slice(6,e.length)):t.setAttributeNS(Mh,e,n);else{const i=Nm(e);n==null||i&&!ou(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=ou(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let bi=Date.now,xh=!1;if(typeof window!="undefined"){bi()>document.createEvent("Event").timeStamp&&(bi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);xh=!!(t&&Number(t[1])<=53)}let ja=0;const Lv=Promise.resolve(),Uv=()=>{ja=0},Fv=()=>ja||(Lv.then(Uv),ja=bi());function Lt(t,e,n,r){t.addEventListener(e,n,r)}function Vv(t,e,n,r){t.removeEventListener(e,n,r)}function $v(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=jv(e);if(r){const l=i[e]=Bv(r,s);Lt(t,a,l,c)}else o&&(Vv(t,a,o,c),i[e]=void 0)}}const Lh=/(?:Once|Passive|Capture)$/;function jv(t){let e;if(Lh.test(t)){e={};let n;for(;n=t.match(Lh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Qn(t.slice(2)),e]}function Bv(t,e){const n=r=>{const s=r.timeStamp||bi();(xh||s>=n.attached-1)&&gt(Hv(r,n.value),e,5,[r])};return n.value=t,n.attached=Fv(),n}function Hv(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r(s))}else return e}const Uh=/^on[a-z]/,qv=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Ov(t,r,s):e==="style"?Dv(t,n,r):Xs(e)?na(e)||$v(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kv(t,e,r,s))?xv(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Mv(t,e,r,s))};function Kv(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Uh.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uh.test(e)&&je(n)?!1:e in t}const zv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Oy.props;const Xt=t=>{const e=t.props["onUpdate:modelValue"];return j(e)?n=>ni(e,n):e};function Wv(t){t.target.composing=!0}function Fh(t){const e=t.target;e.composing&&(e.composing=!1,Gv(e,"input"))}function Gv(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Vh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Xt(s);const i=r||s.props&&s.props.type==="number";Lt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=si(a)),t._assign(a)}),n&&Lt(t,"change",()=>{t.value=t.value.trim()}),e||(Lt(t,"compositionstart",Wv),Lt(t,"compositionend",Fh),Lt(t,"change",Fh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Xt(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&si(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Yv={deep:!0,created(t,e,n){t._assign=Xt(n),Lt(t,"change",()=>{const r=t._modelValue,s=ar(t),i=t.checked,o=t._assign;if(j(r)){const a=ta(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Yn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Bh(t,i))})},mounted:$h,beforeUpdate(t,e,n){t._assign=Xt(n),$h(t,e,n)}};function $h(t,{value:e,oldValue:n},r){t._modelValue=e,j(e)?t.checked=ta(e,r.props.value)>-1:Yn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=pn(e,Bh(t,!0)))}const Qv={created(t,{value:e},n){t.checked=pn(e,n.props.value),t._assign=Xt(n),Lt(t,"change",()=>{t._assign(ar(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Xt(r),e!==n&&(t.checked=pn(e,r.props.value))}},Xv={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Yn(e);Lt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?si(ar(o)):ar(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Xt(r)},mounted(t,{value:e}){jh(t,e)},beforeUpdate(t,e,n){t._assign=Xt(n)},updated(t,{value:e}){jh(t,e)}};function jh(t,e){const n=t.multiple;if(!(n&&!j(e)&&!Yn(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=ar(i);if(n)j(e)?i.selected=ta(e,o)>-1:i.selected=e.has(o);else if(pn(ar(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ar(t){return"_value"in t?t._value:t.value}function Bh(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const RA={created(t,e,n){Si(t,e,n,null,"created")},mounted(t,e,n){Si(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Si(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Si(t,e,n,r,"updated")}};function Si(t,e,n,r,s){let i;switch(t.tagName){case"SELECT":i=Xv;break;case"TEXTAREA":i=Vh;break;default:switch(n.props&&n.props.type){case"checkbox":i=Yv;break;case"radio":i=Qv;break;default:i=Vh}}const o=i[s];o&&o(t,e,n,r)}const Jv=["ctrl","shift","alt","meta"],Zv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Jv.some(n=>t[`${n}Key`]&&!e.includes(n))},NA=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Zv[e[s]];if(i&&i(n,e))return}return t(n,...r)},kA={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Xr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Xr(t,!0),r.enter(t)):r.leave(t,()=>{Xr(t,!1)}):Xr(t,e))},beforeUnmount(t,{value:e}){Xr(t,e)}};function Xr(t,e){t.style.display=e?t._vod:"none"}const ew=$e({patchProp:qv},kv);let Hh;function tw(){return Hh||(Hh=ev(ew))}const OA=(...t)=>{const e=tw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=nw(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nw(t){return je(t)?document.querySelector(t):t}function rw(){return qh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function qh(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const sw=typeof Proxy=="function",iw="devtools-plugin:setup",ow="plugin:settings:set";class aw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=iu({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o}},n.on(ow,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function cw(t,e){const n=qh(),r=rw(),s=sw&&t.enableEarlyProxy;if(r&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(iw,t,e);else{const i=s?new aw(t,r):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:i}),i&&e(i.proxiedTarget)}}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Kh=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",cr=t=>Kh?Symbol(t):"_vr_"+t,lw=cr("rvlm"),zh=cr("rvd"),Ai=cr("r"),Wh=cr("rl"),Ba=cr("rvl"),lr=typeof window!="undefined";function uw(t){return t.__esModule||Kh&&t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Ha(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Jr=()=>{},hw=/\/$/,fw=t=>t.replace(hw,"");function qa(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=mw(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function dw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ur(e.matched[r],n.matched[s])&&Yh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Yh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gw(t[n],e[n]))return!1;return!0}function gw(t,e){return Array.isArray(t)?Qh(t,e):Array.isArray(e)?Qh(e,t):t===e}function Qh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Zr;(function(t){t.pop="pop",t.push="push"})(Zr||(Zr={}));var es;(function(t){t.back="back",t.forward="forward",t.unknown=""})(es||(es={}));function yw(t){if(!t)if(lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fw(t)}const vw=/^[^#]+#/;function ww(t,e){return t.replace(vw,"#")+e}function _w(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ci=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ew(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=_w(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Xh(t,e){return(history.state?history.state.position-e:-1)+t}const Ka=new Map;function Iw(t,e){Ka.set(t,e)}function Tw(t){const e=Ka.get(t);return Ka.delete(t),e}let bw=()=>location.protocol+"//"+location.host;function Jh(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Gh(c,"")}return Gh(n,t)+r+s}function Sw(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=Jh(t,location),y=n.value,R=e.value;let T=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}T=R?f.position-R.position:0}else r(g);s.forEach(N=>{N(n.value,y,{delta:T,type:Zr.pop,direction:T?T>0?es.forward:es.back:es.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(he({},f.state,{scroll:Ci()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Zh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ci():null}}function Aw(t){const{history:e,location:n}=window,r={value:Jh(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:bw()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=he({},e.state,Zh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=he({},s.value,e.state,{forward:c,scroll:Ci()});i(u.current,u,!0);const h=he({},Zh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function DA(t){t=yw(t);const e=Aw(t),n=Sw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=he({location:"",base:t,go:r,createHref:ww.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Cw(t){return typeof t=="string"||t&&typeof t=="object"}function ef(t){return typeof t=="string"||typeof t=="symbol"}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tf=cr("nf");var nf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nf||(nf={}));function hr(t,e){return he(new Error,{type:t,[tf]:!0},e)}function Sn(t,e){return t instanceof Error&&tf in t&&(e==null||!!(t.type&e))}const rf="[^/]+?",Rw={sensitive:!1,strict:!1,start:!0,end:!0},Nw=/[.+*?^${}()[\]/\\]/g;function kw(t,e){const n=he({},Rw,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Nw,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:R,optional:T,regexp:N}=f;i.push({name:y,repeatable:R,optional:T});const V=N||rf;if(V!==rf){g+=10;try{new RegExp(`(${V})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${y}" (${V}): `+Y.message)}}let z=R?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;h||(z=T&&l.length<2?`(?:/${z})`:"/"+z),T&&(z+="?"),s+=z,g+=20,T&&(g+=-8),R&&(g+=-20),V===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:R,optional:T}=g,N=y in l?l[y]:"";if(Array.isArray(N)&&!R)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const V=Array.isArray(N)?N.join("/"):N;if(!V)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=V}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ow(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Dw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ow(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Pw={type:0,value:""},Mw=/[a-zA-Z0-9_]/;function xw(t){if(!t)return[[]];if(t==="/")return[[Pw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:Mw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Lw(t,e,n){const r=kw(xw(t.path),n),s=he(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Uw(t,e){const n=[],r=new Map;e=of({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const g=!f,y=Vw(u);y.aliasOf=f&&f.record;const R=of(e,u),T=[y];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const Y of z)T.push(he({},y,{components:f?f.record.components:y.components,path:Y,aliasOf:f?f.record:y}))}let N,V;for(const z of T){const{path:Y}=z;if(h&&Y[0]!=="/"){const fe=h.record.path,we=fe[fe.length-1]==="/"?"":"/";z.path=h.record.path+(Y&&we+Y)}if(N=Lw(z,h,R),f?f.alias.push(N):(V=V||N,V!==N&&V.alias.push(N),g&&u.name&&!sf(N)&&o(u.name)),"children"in y){const fe=y.children;for(let we=0;we<fe.length;we++)i(fe[we],N,f&&f.children[we])}f=f||N,c(N)}return V?()=>{o(V)}:Jr}function o(u){if(ef(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Dw(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!sf(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},y,R;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw hr(1,{location:u});R=f.record.name,g=he(Fw(h.params,f.keys.filter(V=>!V.optional).map(V=>V.name)),u.params),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(V=>V.re.test(y)),f&&(g=f.parse(y),R=f.record.name);else{if(f=h.name?r.get(h.name):n.find(V=>V.re.test(h.path)),!f)throw hr(1,{location:u,currentLocation:h});R=f.record.name,g=he({},h.params,u.params),y=f.stringify(g)}const T=[];let N=f;for(;N;)T.unshift(N.record),N=N.parent;return{name:R,path:y,params:g,matched:T,meta:jw(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Fw(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Vw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$w(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function $w(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function sf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jw(t){return t.reduce((e,n)=>he(e,n.meta),{})}function of(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const af=/#/g,Bw=/&/g,Hw=/\//g,qw=/=/g,Kw=/\?/g,cf=/\+/g,zw=/%5B/g,Ww=/%5D/g,lf=/%5E/g,Gw=/%60/g,uf=/%7B/g,Yw=/%7C/g,hf=/%7D/g,Qw=/%20/g;function za(t){return encodeURI(""+t).replace(Yw,"|").replace(zw,"[").replace(Ww,"]")}function Xw(t){return za(t).replace(uf,"{").replace(hf,"}").replace(lf,"^")}function Wa(t){return za(t).replace(cf,"%2B").replace(Qw,"+").replace(af,"%23").replace(Bw,"%26").replace(Gw,"`").replace(uf,"{").replace(hf,"}").replace(lf,"^")}function Jw(t){return Wa(t).replace(qw,"%3D")}function Zw(t){return za(t).replace(af,"%23").replace(Kw,"%3F")}function e_(t){return t==null?"":Zw(t).replace(Hw,"%2F")}function Ri(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function t_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cf," "),o=i.indexOf("="),a=Ri(o<0?i:i.slice(0,o)),c=o<0?null:Ri(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ff(t){let e="";for(let n in t){const r=t[n];if(n=Jw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Wa(i)):[r&&Wa(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function n_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function ts(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Zt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(hr(4,{from:n,to:e})):h instanceof Error?a(h):Cw(h)?a(hr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ga(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(r_(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Zt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=uw(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Zt(f,n,r,i,o)()}))}}return s}function r_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function df(t){const e=St(Ai),n=St(Wh),r=bt(()=>e.resolve(Kr(t.to))),s=bt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ur.bind(null,u));if(f>-1)return f;const g=pf(c[l-2]);return l>1&&pf(u)===g&&h[h.length-1].path!==g?h.findIndex(ur.bind(null,c[l-2])):f}),i=bt(()=>s.value>-1&&a_(n.params,r.value.params)),o=bt(()=>s.value>-1&&s.value===n.matched.length-1&&Yh(n.params,r.value.params));function a(c={}){return o_(c)?e[Kr(t.replace)?"replace":"push"](Kr(t.to)).catch(Jr):Promise.resolve()}return{route:r,href:bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const s_=qu({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:df,setup(t,{slots:e}){const n=Zn(df(t)),{options:r}=St(Ai),s=bt(()=>({[gf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[gf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:kh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),i_=s_;function o_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function a_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function pf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gf=(t,e,n)=>t!=null?t:e!=null?e:n,c_=qu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=St(Ba),s=bt(()=>t.route||r.value),i=St(zh,0),o=bt(()=>s.value.matched[i]);di(zh,i+1),di(lw,o),di(Ba,s);const a=my();return ir(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!ur(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return mf(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,R=kh(u,he({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return mf(n.default,{Component:R,route:c})||R}}});function mf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const l_=c_;function PA(t){const e=Uw(t.routes,t),n=t.parseQuery||t_,r=t.stringifyQuery||ff,s=t.history,i=ts(),o=ts(),a=ts(),c=yy(Jt);let l=Jt;lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ha.bind(null,v=>""+v),h=Ha.bind(null,e_),f=Ha.bind(null,Ri);function g(v,M){let C,x;return ef(v)?(C=e.getRecordMatcher(v),x=M):x=v,e.addRoute(x,C)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function R(){return e.getRoutes().map(v=>v.record)}function T(v){return!!e.getRecordMatcher(v)}function N(v,M){if(M=he({},M||c.value),typeof v=="string"){const Q=qa(n,v,M.path),d=e.resolve({path:Q.path},M),p=s.createHref(Q.fullPath);return he(Q,d,{params:f(d.params),hash:Ri(Q.hash),redirectedFrom:void 0,href:p})}let C;if("path"in v)C=he({},v,{path:qa(n,v.path,M.path).path});else{const Q=he({},v.params);for(const d in Q)Q[d]==null&&delete Q[d];C=he({},v,{params:h(v.params)}),M.params=h(M.params)}const x=e.resolve(C,M),ce=v.hash||"";x.params=u(f(x.params));const ge=dw(r,he({},v,{hash:Xw(ce),path:x.path})),J=s.createHref(ge);return he({fullPath:ge,hash:ce,query:r===ff?n_(v.query):v.query||{}},x,{redirectedFrom:void 0,href:J})}function V(v){return typeof v=="string"?qa(n,v,c.value.path):he({},v)}function z(v,M){if(l!==v)return hr(8,{from:M,to:v})}function Y(v){return Z(v)}function fe(v){return Y(he(V(v),{replace:!0}))}function we(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:C}=M;let x=typeof C=="function"?C(v):C;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=V(x):{path:x},x.params={}),he({query:v.query,hash:v.hash,params:v.params},x)}}function Z(v,M){const C=l=N(v),x=c.value,ce=v.state,ge=v.force,J=v.replace===!0,Q=we(C);if(Q)return Z(he(V(Q),{state:ce,force:ge,replace:J}),M||C);const d=C;d.redirectedFrom=M;let p;return!ge&&pw(r,x,C)&&(p=hr(16,{to:d,from:x}),Kn(x,x,!0,!1)),(p?Promise.resolve(p):de(d,x)).catch(m=>Sn(m)?m:pe(m,d,x)).then(m=>{if(m){if(Sn(m,2))return Z(he(V(m.to),{state:ce,force:ge,replace:J}),M||d)}else m=Ve(d,x,!0,J,ce);return Fe(d,x,m),m})}function Te(v,M){const C=z(v,M);return C?Promise.reject(C):Promise.resolve()}function de(v,M){let C;const[x,ce,ge]=u_(v,M);C=Ga(x.reverse(),"beforeRouteLeave",v,M);for(const Q of x)Q.leaveGuards.forEach(d=>{C.push(Zt(d,v,M))});const J=Te.bind(null,v,M);return C.push(J),fr(C).then(()=>{C=[];for(const Q of i.list())C.push(Zt(Q,v,M));return C.push(J),fr(C)}).then(()=>{C=Ga(ce,"beforeRouteUpdate",v,M);for(const Q of ce)Q.updateGuards.forEach(d=>{C.push(Zt(d,v,M))});return C.push(J),fr(C)}).then(()=>{C=[];for(const Q of v.matched)if(Q.beforeEnter&&!M.matched.includes(Q))if(Array.isArray(Q.beforeEnter))for(const d of Q.beforeEnter)C.push(Zt(d,v,M));else C.push(Zt(Q.beforeEnter,v,M));return C.push(J),fr(C)}).then(()=>(v.matched.forEach(Q=>Q.enterCallbacks={}),C=Ga(ge,"beforeRouteEnter",v,M),C.push(J),fr(C))).then(()=>{C=[];for(const Q of o.list())C.push(Zt(Q,v,M));return C.push(J),fr(C)}).catch(Q=>Sn(Q,8)?Q:Promise.reject(Q))}function Fe(v,M,C){for(const x of a.list())x(v,M,C)}function Ve(v,M,C,x,ce){const ge=z(v,M);if(ge)return ge;const J=M===Jt,Q=lr?history.state:{};C&&(x||J?s.replace(v.fullPath,he({scroll:J&&Q&&Q.scroll},ce)):s.push(v.fullPath,ce)),c.value=v,Kn(v,M,C,J),ut()}let ze;function qt(){ze=s.listen((v,M,C)=>{const x=N(v),ce=we(x);if(ce){Z(he(ce,{replace:!0}),x).catch(Jr);return}l=x;const ge=c.value;lr&&Iw(Xh(ge.fullPath,C.delta),Ci()),de(x,ge).catch(J=>Sn(J,4|8)?J:Sn(J,2)?(Z(J.to,x).then(Q=>{Sn(Q,4|16)&&!C.delta&&C.type===Zr.pop&&s.go(-1,!1)}).catch(Jr),Promise.reject()):(C.delta&&s.go(-C.delta,!1),pe(J,x,ge))).then(J=>{J=J||Ve(x,ge,!1),J&&(C.delta?s.go(-C.delta,!1):C.type===Zr.pop&&Sn(J,4|16)&&s.go(-1,!1)),Fe(x,ge,J)}).catch(Jr)})}let Hn=ts(),qn=ts(),Re;function pe(v,M,C){ut(v);const x=qn.list();return x.length?x.forEach(ce=>ce(v,M,C)):console.error(v),Promise.reject(v)}function ae(){return Re&&c.value!==Jt?Promise.resolve():new Promise((v,M)=>{Hn.add([v,M])})}function ut(v){Re||(Re=!0,qt(),Hn.list().forEach(([M,C])=>v?C(v):M()),Hn.reset())}function Kn(v,M,C,x){const{scrollBehavior:ce}=t;if(!lr||!ce)return Promise.resolve();const ge=!C&&Tw(Xh(v.fullPath,0))||(x||!C)&&history.state&&history.state.scroll||null;return Eh().then(()=>ce(v,M,ge)).then(J=>J&&Ew(J)).catch(J=>pe(J,v,M))}const Dt=v=>s.go(v);let Et;const ht=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:T,getRoutes:R,resolve:N,options:t,push:Y,replace:fe,go:Dt,back:()=>Dt(-1),forward:()=>Dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:qn.add,isReady:ae,install(v){const M=this;v.component("RouterLink",i_),v.component("RouterView",l_),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Kr(c)}),lr&&!Et&&c.value===Jt&&(Et=!0,Y(s.location).catch(ce=>{}));const C={};for(const ce in Jt)C[ce]=bt(()=>c.value[ce]);v.provide(Ai,M),v.provide(Wh,Zn(C)),v.provide(Ba,c);const x=v.unmount;ht.add(v),v.unmount=function(){ht.delete(v),ht.size<1&&(l=Jt,ze&&ze(),c.value=Jt,Et=!1,Re=!1),x()}}}}function fr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function u_(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ur(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ur(l,c))||s.push(c))}return[n,r,s]}function MA(){return St(Ai)}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var yf="store";function xA(t){return t===void 0&&(t=null),St(t!==null?t:yf)}function dr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function h_(t){return t!==null&&typeof t=="object"}function f_(t){return t&&typeof t.then=="function"}function d_(t,e){return function(){return t(e)}}function vf(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function wf(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Ni(t,n,[],t._modules.root,!0),Ya(t,n,e)}function Ya(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};dr(s,function(o,a){i[a]=d_(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Zn({data:e}),t.strict&&v_(t),r&&n&&t._withCommit(function(){r.data=null})}function Ni(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Qa(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=p_(t,o,n);r.forEachMutation(function(u,h){var f=o+h;g_(t,f,u,l)}),r.forEachAction(function(u,h){var f=u.root?h:o+h,g=u.handler||u;m_(t,f,g,l)}),r.forEachGetter(function(u,h){var f=o+h;y_(t,f,u,l)}),r.forEachChild(function(u,h){Ni(t,e,n.concat(h),u,s)})}function p_(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=ki(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=ki(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return _f(t,e)}},state:{get:function(){return Qa(t.state,n)}}}),s}function _f(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function g_(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function m_(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return f_(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function y_(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function v_(t){ir(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Qa(t,e){return e.reduce(function(n,r){return n[r]},t)}function ki(t,e,n){return h_(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var w_="vuex bindings",Ef="vuex:mutations",Xa="vuex:actions",pr="vuex",__=0;function E_(t,e){cw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[w_]},function(n){n.addTimelineLayer({id:Ef,label:"Vuex Mutations",color:If}),n.addTimelineLayer({id:Xa,label:"Vuex Actions",color:If}),n.addInspector({id:pr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===pr)if(r.filter){var s=[];Af(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Sf(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===pr){var s=r.nodeId;_f(e,s),r.state=b_(A_(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===pr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(pr),n.sendInspectorState(pr),n.addTimelineEvent({layerId:Ef,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=__++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Xa,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Xa,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var If=8702998,I_=6710886,T_=16777215,Tf={label:"namespaced",textColor:T_,backgroundColor:I_};function bf(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Sf(t,e){return{id:e||"root",label:bf(e),tags:t.namespaced?[Tf]:[],children:Object.keys(t._children).map(function(n){return Sf(t._children[n],e+n+"/")})}}function Af(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Tf]:[]}),Object.keys(e._children).forEach(function(s){Af(t,e._children[s],n,r+s+"/")})}function b_(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=S_(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?bf(o):o,editable:!1,value:Ja(function(){return i[o]})}})}return s}function S_(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Ja(function(){return t[n]})}else e[n]=Ja(function(){return t[n]})}),e}function A_(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ja(t){try{return t()}catch(e){return e}}var wt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Cf={namespaced:{configurable:!0}};Cf.namespaced.get=function(){return!!this._rawModule.namespaced};wt.prototype.addChild=function(e,n){this._children[e]=n};wt.prototype.removeChild=function(e){delete this._children[e]};wt.prototype.getChild=function(e){return this._children[e]};wt.prototype.hasChild=function(e){return e in this._children};wt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};wt.prototype.forEachChild=function(e){dr(this._children,e)};wt.prototype.forEachGetter=function(e){this._rawModule.getters&&dr(this._rawModule.getters,e)};wt.prototype.forEachAction=function(e){this._rawModule.actions&&dr(this._rawModule.actions,e)};wt.prototype.forEachMutation=function(e){this._rawModule.mutations&&dr(this._rawModule.mutations,e)};Object.defineProperties(wt.prototype,Cf);var An=function(e){this.register([],e,!1)};An.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};An.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};An.prototype.update=function(e){Rf([],this.root,e)};An.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new wt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&dr(n.modules,function(a,c){s.register(e.concat(c),a,r)})};An.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};An.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Rf(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Rf(t.concat(r),e.getChild(r),n.modules[r])}}function LA(t){return new et(t)}var et=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new An(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,g){return c.call(o,f,g)},this.commit=function(f,g,y){return l.call(o,f,g,y)},this.strict=s;var u=this._modules.root.state;Ni(this,u,[],this._modules.root),Ya(this,u),r.forEach(function(h){return h(n)})},Za={state:{configurable:!0}};et.prototype.install=function(e,n){e.provide(n||yf,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&E_(e,this)};Za.state.get=function(){return this._state.data};Za.state.set=function(t){};et.prototype.commit=function(e,n,r){var s=this,i=ki(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};et.prototype.dispatch=function(e,n){var r=this,s=ki(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,f)})}catch{}h(f)})})}};et.prototype.subscribe=function(e,n){return vf(e,this._subscribers,n)};et.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return vf(r,this._actionSubscribers,n)};et.prototype.watch=function(e,n,r){var s=this;return ir(function(){return e(s.state,s.getters)},n,Object.assign({},r))};et.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};et.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Ni(this,this.state,e,this._modules.get(e),r.preserveState),Ya(this,this.state)};et.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Qa(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),wf(this)};et.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};et.prototype.hotUpdate=function(e){this._modules.update(e),wf(this,!0)};et.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(et.prototype,Za);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ec(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function C_(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(u){try{l(r.next(u))}catch(h){o(h)}}function c(u){try{l(r.throw(u))}catch(h){o(h)}}function l(u){u.done?i(u.value):s(u.value).then(a,c)}l((r=r.apply(t,e||[])).next())})}function R_(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=l[0]&2?s.return:l[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,l[1])).done)return i;switch(s=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,s=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(u){l=[6,u],s=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function tc(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Oi(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),s,i=[],o;try{for(;(e===void 0||e-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return i}function Nf(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},k_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},O_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(N_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):k_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},D_=function(t){try{return O_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Of(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Df(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function M_(){return ke().indexOf("Electron/")>=0}function Pf(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function x_(){return ke().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="FirebaseError";class gr extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=L_,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?U_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gr(s,a,r)}}function U_(t,e){return t.replace(F_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const F_=/\{\$([^}]+)}/g;function V_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Di(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Mf(i)&&Mf(o)){if(!Di(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Mf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ss(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function is(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $_(t,e){const n=new j_(t,e);return n.subscribe.bind(n)}class j_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");B_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nc),s.error===void 0&&(s.error=nc),s.complete===void 0&&(s.complete=nc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}var mr=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H_=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new P_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(K_(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}try{for(var s=tc(this.instancesDeferred.entries()),i=s.next();!i.done;i=s.next()){var o=Oi(i.value,2),a=o[0],c=o[1],l=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:l});c.resolve(u)}catch{}}}catch(h){n={error:h}}finally{try{i&&!i.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=Cn),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return C_(this,void 0,void 0,function(){var e;return R_(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Nf(Nf([],Oi(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Oi(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=Cn),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=Cn),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var s=e.options,i=s===void 0?{}:s,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var c=tc(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var u=Oi(l.value,2),h=u[0],f=u[1],g=this.normalizeInstanceIdentifier(h);o===g&&f.resolve(a)}}catch(y){n={error:y}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);var o=this.instances.get(s);return o&&e(o,s),function(){i.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,s,i=this.onInitCallbacks.get(n);if(!!i)try{for(var o=tc(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,n)}catch{}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,s=r===void 0?{}:r,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:q_(n),options:s}),this.instances.set(n,i),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch{}return i||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=Cn),this.component?this.component.multipleInstances?e:Cn:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function q_(t){return t===Cn?void 0:t}function K_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z_=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new H_(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const W_={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},G_=se.INFO,Y_={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Q_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Y_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rc{constructor(e){this.name=e,this._logLevel=G_,this._logHandler=Q_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?W_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sc="@firebase/app",xf="0.7.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new rc("@firebase/app"),Z_="@firebase/app-compat",eE="@firebase/analytics-compat",tE="@firebase/analytics",nE="@firebase/app-check-compat",rE="@firebase/app-check",sE="@firebase/auth",iE="@firebase/auth-compat",oE="@firebase/database",aE="@firebase/database-compat",cE="@firebase/functions",lE="@firebase/functions-compat",uE="@firebase/installations",hE="@firebase/installations-compat",fE="@firebase/messaging",dE="@firebase/messaging-compat",pE="@firebase/performance",gE="@firebase/performance-compat",mE="@firebase/remote-config",yE="@firebase/remote-config-compat",vE="@firebase/storage",wE="@firebase/storage-compat",_E="@firebase/firestore",EE="@firebase/firestore-compat",IE="firebase",TE="9.1.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="[DEFAULT]",bE={[sc]:"fire-core",[Z_]:"fire-core-compat",[tE]:"fire-analytics",[eE]:"fire-analytics-compat",[rE]:"fire-app-check",[nE]:"fire-app-check-compat",[sE]:"fire-auth",[iE]:"fire-auth-compat",[oE]:"fire-rtdb",[aE]:"fire-rtdb-compat",[cE]:"fire-fn",[lE]:"fire-fn-compat",[uE]:"fire-iid",[hE]:"fire-iid-compat",[fE]:"fire-fcm",[dE]:"fire-fcm-compat",[pE]:"fire-perf",[gE]:"fire-perf-compat",[mE]:"fire-rc",[yE]:"fire-rc-compat",[vE]:"fire-gcs",[wE]:"fire-gcs-compat",[_E]:"fire-fst",[EE]:"fire-fst-compat","fire-js":"fire-js",[IE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Map,oc=new Map;function SE(t,e){try{t.container.addComponent(e)}catch(n){ic.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(oc.has(e))return ic.debug(`There were multiple attempts to register component ${e}.`),!1;oc.set(e,t);for(const n of Pi.values())SE(n,t);return!0}function ac(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Mi=new ns("app","Firebase",AE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=TE;function UA(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Lf,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Mi.create("bad-app-name",{appName:String(r)});const s=Pi.get(r);if(s){if(Di(t,s.options)&&Di(n,s.config))return s;throw Mi.create("duplicate-app",{appName:r})}const i=new z_(r);for(const a of oc.values())i.addComponent(a);const o=new CE(t,n,i);return Pi.set(r,o),o}function Uf(t=Lf){const e=Pi.get(t);if(!e)throw Mi.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=bE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ic.warn(a.join(" "));return}os(new mr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t){os(new mr("platform-logger",e=>new X_(e),"PRIVATE")),en(sc,xf,t),en(sc,xf,"esm2017"),en("fire-js","")}RE("");var NE="firebase",kE="9.1.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(NE,kE,"app");function Ff(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OE=Ff,Vf=new ns("auth","Firebase",Ff());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new rc("@firebase/auth");function xi(t,...e){$f.logLevel<=se.ERROR&&$f.error(`Auth (${as}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,...e){throw cc(t,...e)}function Nt(t,...e){return cc(t,...e)}function DE(t,e,n){const r=Object.assign(Object.assign({},OE()),{[e]:n});return new ns("auth","Firebase",r).create(e,{appName:t.name})}function cc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vf.create(t,...e)}function B(t,e,...n){if(!t)throw cc(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xi(e),new Error(e)}function Ft(t,e){t||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Map;function Vt(t){Ft(t instanceof Function,"Expected a class definition");let e=jf.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t,e){const n=ac(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Di(i,e!=null?e:{}))return s;_t(s,"already-initialized")}return n.initialize({options:e})}function ME(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xE(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xE()||Of()||"connection"in navigator)?navigator.onLine:!0}function UE(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=kf()||Df()}get(){return LE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=new cs(3e4,6e4);function Li(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ls(t,e,n,r,s={}){return Hf(t,s,()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=rs(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(hc.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),hc.fetch()(qf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Hf(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FE),e);try{const s=new $E(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fc(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw DE(t,u,l);_t(t,u)}}catch(s){if(s instanceof gr)throw s;_t(t,"network-request-failed")}}async function Ui(t,e,n,r,s={}){const i=await ls(t,e,n,r,s);return"mfaPendingCredential"in i&&_t(t,"multi-factor-auth-required",{serverResponse:i}),i}function qf(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?uc(t.config,s):`${t.config.apiScheme}://${s}`}class $E{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"timeout")),VE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Nt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e){return ls(t,"POST","/v1/accounts:delete",e)}async function BE(t,e){return ls(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HE(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=pc(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:us(dc(s.auth_time)),issuedAtTime:us(dc(s.iat)),expirationTime:us(dc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dc(t){return Number(t)*1e3}function pc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xi("JWT malformed, contained fewer than 3 sections"),null;try{const s=D_(n);return s?JSON.parse(s):(xi("Failed to decode base64 JWT payload"),null)}catch(s){return xi("Caught error parsing JWT payload as JSON",s),null}}function qE(t){const e=pc(t);return B(e,"internal-error"),B(typeof e.exp!="undefined","internal-error"),B(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gr&&KE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t){var e;const n=t.auth,r=await t.getIdToken(),s=await hs(t,BE(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?YE(i.providerUserInfo):[],a=GE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Kf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function WE(t){const e=Ye(t);await Fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GE(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function YE(t){return t.map(e=>{var{providerId:n}=e,r=ec(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(t,e){const n=await Hf(t,{},()=>{const r=rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=qf(t,s,"/v1/token",`key=${i}`);return hc.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken!="undefined","internal-error"),B(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):qE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await QE(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new fs;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){B(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new zE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Kf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hs(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HE(this,e)}reload(){return WE(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hs(this,jE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(l=n.createdAt)!==null&&l!==void 0?l:void 0,V=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:Y,isAnonymous:fe,providerData:we,stsTokenManager:Z}=n;B(z&&Z,e,"internal-error");const Te=fs.fromJSON(this.name,Z);B(typeof z=="string",e,"internal-error"),tn(h,e.name),tn(f,e.name),B(typeof Y=="boolean",e,"internal-error"),B(typeof fe=="boolean",e,"internal-error"),tn(g,e.name),tn(y,e.name),tn(R,e.name),tn(T,e.name),tn(N,e.name),tn(V,e.name);const de=new Rn({uid:z,auth:e,email:f,emailVerified:Y,displayName:h,isAnonymous:fe,photoURL:y,phoneNumber:g,tenantId:R,stsTokenManager:Te,createdAt:N,lastLoginAt:V});return we&&Array.isArray(we)&&(de.providerData=we.map(Fe=>Object.assign({},Fe))),T&&(de._redirectEventId=T),de}static async _fromIdTokenResponse(e,n,r=!1){const s=new fs;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fi(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zf.type="NONE";const Wf=zf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,e,n){return`firebase:${t}:${e}:${n}`}class yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Vi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yr(Vt(Wf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Vt(Wf);const o=Vi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Rn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new yr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new yr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zf(e))return"Blackberry";if(ed(e))return"Webos";if(gc(e))return"Safari";if((e.includes("chrome/")||Qf(e))&&!e.includes("edge/"))return"Chrome";if(Jf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yf(t=ke()){return/firefox\//i.test(t)}function gc(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qf(t=ke()){return/crios\//i.test(t)}function Xf(t=ke()){return/iemobile/i.test(t)}function Jf(t=ke()){return/android/i.test(t)}function Zf(t=ke()){return/blackberry/i.test(t)}function ed(t=ke()){return/webos/i.test(t)}function $i(t=ke()){return/iphone|ipad|ipod/i.test(t)}function XE(t=ke()){var e;return $i(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function JE(){return Pf()&&document.documentMode===10}function td(t=ke()){return $i(t)||Jf(t)||ed(t)||Zf(t)||/windows phone/i.test(t)||Xf(t)}function ZE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t,e=[]){let n;switch(t){case"Browser":n=Gf(ke());break;case"Worker":n=`${Gf(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rd(this),this.idTokenSubscription=new rd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await yr.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fi(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function mc(t){return Ye(t)}class rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=$_(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}async function t0(t,e){return ls(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t,e){return Ui(t,"POST","/v1/accounts:signInWithPassword",Li(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",Li(t,e))}async function s0(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",Li(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends yc{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ds(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ds(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return n0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return r0(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return t0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return s0(e,{idToken:n,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(t,e){return Ui(t,"POST","/v1/accounts:signInWithIdp",Li(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="http://localhost";class Nn extends yc{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ec(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vr(e,n)}buildRequest(){const e={requestUri:i0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function a0(t){const e=ss(is(t)).link,n=e?ss(is(e)).deep_link_id:null,r=ss(is(t)).deep_link_id;return(r?ss(is(r)).link:null)||r||n||e||t}class vc{constructor(e){var n,r,s,i,o,a;const c=ss(is(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=o0((s=c.mode)!==null&&s!==void 0?s:null);B(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=a0(e);try{return new vc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.providerId=wr.PROVIDER_ID}static credential(e,n){return ds._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vc.parseLink(n);return B(r,"argument-error"),ds._fromEmailAndCode(e,r.code,r.tenantId)}}wr.PROVIDER_ID="password";wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends sd{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends ps{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ps{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Nn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends ps{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends ps{constructor(){super("twitter.com")}static credential(e,n){return Nn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=id(r);return new _r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=id(r);return new _r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function id(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends gr{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,this.name="FirebaseError",Object.setPrototypeOf(this,ji.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(i=e.tenantId)!==null&&i!==void 0?i:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,s){return new ji(e,n,r,s)}}function od(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ji._fromErrorAndOperation(t,i,e,r):i})}async function c0(t,e,n=!1){const r=await hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await hs(t,od(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=pc(i.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),_r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(t,e,n=!1){const r="signIn",s=await od(t,r,e),i=await _r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function u0(t,e){return ad(mc(t),e)}function FA(t,e,n){return u0(Ye(t),wr.credential(e,n))}function VA(t){return Ye(t).signOut()}const Bi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bi,"1"),this.storage.removeItem(Bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(){const t=ke();return gc(t)||$i(t)}const f0=1e3,d0=10;class ld extends cd{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=h0()&&ZE(),this.fallbackToPolling=td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);JE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,d0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},f0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ld.type="LOCAL";const p0=ld;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends cd{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ud.type="SESSION";const hd=ud;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Hi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await g0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=wc("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function y0(t){kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(){return typeof kt().WorkerGlobalScope!="undefined"&&typeof kt().importScripts=="function"}async function v0(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function w0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _0(){return fd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="firebaseLocalStorageDb",E0=1,qi="firebaseLocalStorage",pd="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ki(t,e){return t.transaction([qi],e?"readwrite":"readonly").objectStore(qi)}function I0(){const t=indexedDB.deleteDatabase(dd);return new gs(t).toPromise()}function _c(){const t=indexedDB.open(dd,E0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qi,{keyPath:pd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qi)?e(r):(r.close(),await I0(),e(await _c()))})})}async function gd(t,e,n){const r=Ki(t,!0).put({[pd]:e,value:n});return new gs(r).toPromise()}async function T0(t,e){const n=Ki(t,!1).get(e),r=await new gs(n).toPromise();return r===void 0?null:r.value}function md(t,e){const n=Ki(t,!0).delete(e);return new gs(n).toPromise()}const b0=800,S0=3;class yd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>S0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hi._getInstance(_0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await v0(),!this.activeServiceWorker)return;this.sender=new m0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||w0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _c();return await gd(e,Bi,"1"),await md(e,Bi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>T0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>md(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ki(s,!1).getAll();return new gs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),b0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yd.type="LOCAL";const A0=yd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function R0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",C0().appendChild(r)})}function N0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new cs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t,e){return e?Vt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends yc{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function O0(t){return ad(t.auth,new Ec(t),t.bypassAuthState)}function D0(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),l0(n,new Ec(t),t.bypassAuthState)}async function P0(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),c0(n,new Ec(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return O0;case"linkViaPopup":case"linkViaRedirect":return P0;case"reauthViaPopup":case"reauthViaRedirect":return D0;default:_t(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new cs(2e3,1e4);class Er extends vd{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=wc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,M0.get())};e()}}Er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="pendingRedirect",wd=new Map;class L0 extends vd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=wd.get(this.auth._key());if(!e){try{const r=await U0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wd.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U0(t,e){const n=F0(e),r=await _d(t)._get(n)==="true";return await _d(t)._remove(n),r}function _d(t){return Vt(t._redirectPersistence)}function F0(t){return Vi(x0,t.config.apiKey,t.name)}async function V0(t,e,n=!1){const r=mc(t),s=k0(r,e),o=await new L0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=10*60*1e3;class j0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Id(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ed(e))}saveEventToCache(e){this.cachedEventUids.add(Ed(e)),this.lastProcessedEventTime=Date.now()}}function Ed(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Id({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function B0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Id(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H0(t,e={}){return ls(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,K0=/^https?/;async function z0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await H0(t);for(const n of e)try{if(W0(n))return}catch{}_t(t,"unauthorized-domain")}function W0(t){const e=lc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!K0.test(n))return!1;if(q0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=new cs(3e4,6e4);function Td(){const t=kt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Y0(t){return new Promise((e,n)=>{var r,s,i;function o(){Td(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Td(),n(Nt(t,"network-request-failed"))},timeout:G0.get()})}if((s=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=kt().gapi)===null||i===void 0?void 0:i.load)o();else{const a=N0("iframefcb");return kt()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},R0(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw zi=null,e})}let zi=null;function Q0(t){return zi=zi||Y0(t),zi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new cs(5e3,15e3),J0="__/auth/iframe",Z0="emulator/auth/iframe",eI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},tI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nI(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uc(e,Z0):`https://${t.config.authDomain}/${J0}`,r={apiKey:e.apiKey,appName:t.name,v:as},s=tI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${rs(r).slice(1)}`}async function rI(t){const e=await Q0(t),n=kt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:nI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=kt().setTimeout(()=>{i(o)},X0.get());function c(){kt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iI=500,oI=600,aI="_blank",cI="http://localhost";class bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lI(t,e,n,r=iI,s=oI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},sI),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ke().toLowerCase();n&&(a=Qf(l)?aI:n),Yf(l)&&(e=e||cI,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(XE(l)&&a!=="_self")return uI(e||"",a),new bd(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new bd(h)}function uI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="__/auth/handler",fI="emulator/auth/handler";function Sd(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:as,eventId:s};if(e instanceof sd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",V_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ps){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${dI(t)}?${rs(a).slice(1)}`}function dI({config:t}){return t.emulator?uc(t,fI):`https://${t.authDomain}/${hI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="webStorageSupport";class pI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hd,this._completeRedirectFn=V0}async _openPopup(e,n,r,s){var i;Ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Sd(e,n,r,lc(),s);return lI(e,o,wc())}async _openRedirect(e,n,r,s){return await this._originValidation(e),y0(Sd(e,n,r,lc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await rI(e),r=new j0(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ic];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return td()||gc()||$i()}}const gI=pI;var Ad="@firebase/auth",Cd="0.18.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vI(t){os(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{B(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),B(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nd(t)},c=new e0(o,a);return ME(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new mr("auth-internal",e=>{const n=mc(e.getProvider("auth").getImmediate());return(r=>new mI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Ad,Cd,yI(t)),en(Ad,Cd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t=Uf()){const e=ac(t,"auth");return e.isInitialized()?e.getImmediate():PE(t,{popupRedirectResolver:gI,persistence:[A0,p0,hd]})}vI("Browser");var wI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,Tc=Tc||{},H=wI||self;function Wi(){}function bc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ms(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _I(t){return Object.prototype.hasOwnProperty.call(t,Sc)&&t[Sc]||(t[Sc]=++EI)}var Sc="closure_uid_"+(1e9*Math.random()>>>0),EI=0;function II(t,e,n){return t.call.apply(t.bind,arguments)}function TI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=II:Pe=TI,Pe.apply(null,arguments)}function Gi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function an(){this.s=this.s,this.o=this.o}var bI=0,SI={};an.prototype.s=!1;an.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),bI!=0)){var t=_I(this);delete SI[t]}};an.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Nd=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function AI(t){e:{var e=yT;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function kd(t){return Array.prototype.concat.apply([],arguments)}function Ac(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Yi(t){return/^[\s\xa0]*$/.test(t)}var Od=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Qe(t,e){return t.indexOf(e)!=-1}function Cc(t,e){return t<e?-1:t>e?1:0}var Xe;e:{var Dd=H.navigator;if(Dd){var Pd=Dd.userAgent;if(Pd){Xe=Pd;break e}}Xe=""}function Rc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Md(t){const e={};for(const n in t)e[n]=t[n];return e}var xd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ld(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<xd.length;i++)n=xd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Nc(t){return Nc[" "](t),t}Nc[" "]=Wi;function CI(t){var e=kI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var RI=Qe(Xe,"Opera"),Ir=Qe(Xe,"Trident")||Qe(Xe,"MSIE"),Ud=Qe(Xe,"Edge"),kc=Ud||Ir,Fd=Qe(Xe,"Gecko")&&!(Qe(Xe.toLowerCase(),"webkit")&&!Qe(Xe,"Edge"))&&!(Qe(Xe,"Trident")||Qe(Xe,"MSIE"))&&!Qe(Xe,"Edge"),NI=Qe(Xe.toLowerCase(),"webkit")&&!Qe(Xe,"Edge");function Vd(){var t=H.document;return t?t.documentMode:void 0}var Qi;e:{var Oc="",Dc=function(){var t=Xe;if(Fd)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ud)return/Edge\/([\d\.]+)/.exec(t);if(Ir)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(NI)return/WebKit\/(\S+)/.exec(t);if(RI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dc&&(Oc=Dc?Dc[1]:""),Ir){var Pc=Vd();if(Pc!=null&&Pc>parseFloat(Oc)){Qi=String(Pc);break e}}Qi=Oc}var kI={};function OI(){return CI(function(){let t=0;const e=Od(String(Qi)).split("."),n=Od("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Cc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Cc(s[2].length==0,i[2].length==0)||Cc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Mc;if(H.document&&Ir){var $d=Vd();Mc=$d||parseInt(Qi,10)||void 0}else Mc=void 0;var DI=Mc,PI=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Wi,e),H.removeEventListener("test",Wi,e)}catch{}return t}();function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};function ys(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fd){e:{try{Nc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:MI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ys.Z.h.call(this)}}Me(ys,Be);var MI={2:"touch",3:"pen",4:"mouse"};ys.prototype.h=function(){ys.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vs="closure_listenable_"+(1e6*Math.random()|0),xI=0;function LI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++xI,this.ca=this.fa=!1}function Xi(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ji(t){this.src=t,this.g={},this.h=0}Ji.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Lc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new LI(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function xc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Rd(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Xi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Lc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Uc="closure_lm_"+(1e6*Math.random()|0),Fc={};function jd(t,e,n,r,s){if(r&&r.once)return Hd(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)jd(t,e[i],n,r,s);return null}return n=Bc(n),t&&t[vs]?t.N(e,n,ms(r)?!!r.capture:!!r,s):Bd(t,e,n,!1,r,s)}function Bd(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ms(s)?!!s.capture:!!s,a=$c(t);if(a||(t[Uc]=a=new Ji(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=UI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)PI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Kd(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function UI(){function t(n){return e.call(t.src,t.listener,n)}var e=FI;return t}function Hd(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Hd(t,e[i],n,r,s);return null}return n=Bc(n),t&&t[vs]?t.O(e,n,ms(r)?!!r.capture:!!r,s):Bd(t,e,n,!0,r,s)}function qd(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)qd(t,e[i],n,r,s);else r=ms(r)?!!r.capture:!!r,n=Bc(n),t&&t[vs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Lc(i,n,r,s),-1<n&&(Xi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=$c(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lc(e,n,r,s)),(n=-1<t?e[t]:null)&&Vc(n))}function Vc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[vs])xc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Kd(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=$c(e))?(xc(n,t),n.h==0&&(n.src=null,e[Uc]=null)):Xi(t)}}}function Kd(t){return t in Fc?Fc[t]:Fc[t]="on"+t}function FI(t,e){if(t.ca)t=!0;else{e=new ys(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Vc(t),t=n.call(r,e)}return t}function $c(t){return t=t[Uc],t instanceof Ji?t:null}var jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bc(t){return typeof t=="function"?t:(t[jc]||(t[jc]=function(e){return t.handleEvent(e)}),t[jc])}function Oe(){an.call(this),this.i=new Ji(this),this.P=this,this.I=null}Me(Oe,an);Oe.prototype[vs]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){qd(this,t,e,n,r)};function xe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var s=e;e=new Be(r,t),Ld(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Zi(o,r,!0,e)&&s}if(o=e.g=t,s=Zi(o,r,!0,e)&&s,s=Zi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Zi(o,r,!1,e)&&s}Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xi(n[r]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Zi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&xc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Hc=H.JSON.stringify;function VI(){var t=Wd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $I{constructor(){this.h=this.g=null}add(e,n){const r=zd.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var zd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jI,t=>t.reset());class jI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function BI(t){H.setTimeout(()=>{throw t},0)}function qc(t,e){Kc||HI(),zc||(Kc(),zc=!0),Wd.add(t,e)}var Kc;function HI(){var t=H.Promise.resolve(void 0);Kc=function(){t.then(qI)}}var zc=!1,Wd=new $I;function qI(){for(var t;t=VI();){try{t.h.call(t.g)}catch(n){BI(n)}var e=zd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}zc=!1}function eo(t,e){Oe.call(this),this.h=t||1,this.g=e||H,this.j=Pe(this.kb,this),this.l=Date.now()}Me(eo,Oe);D=eo.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xe(this,"tick"),this.da&&(Wc(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){eo.Z.M.call(this),Wc(this),delete this.g};function Gc(t,e,n){if(typeof t=="function")n&&(t=Pe(t,n));else if(t&&typeof t.handleEvent=="function")t=Pe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function Gd(t){t.g=Gc(()=>{t.g=null,t.i&&(t.i=!1,Gd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KI extends an{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Gd(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ws(t){an.call(this),this.h=t,this.g={}}Me(ws,an);var Yd=[];function Qd(t,e,n,r){Array.isArray(n)||(n&&(Yd[0]=n.toString()),n=Yd);for(var s=0;s<n.length;s++){var i=jd(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Xd(t){Rc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Vc(e)},t),t.g={}}ws.prototype.M=function(){ws.Z.M.call(this),Xd(this)};ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function to(){this.g=!0}to.prototype.Aa=function(){this.g=!1};function zI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function WI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Tr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+YI(t,n)+(r?" "+r:"")})}function GI(t,e){t.info(function(){return"TIMEOUT: "+e})}to.prototype.info=function(){};function YI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Hc(n)}catch{return e}}var kn={},Jd=null;function no(){return Jd=Jd||new Oe}kn.Ma="serverreachability";function Zd(t){Be.call(this,kn.Ma,t)}Me(Zd,Be);function _s(t){const e=no();xe(e,new Zd(e,t))}kn.STAT_EVENT="statevent";function ep(t,e){Be.call(this,kn.STAT_EVENT,t),this.stat=e}Me(ep,Be);function Je(t){const e=no();xe(e,new ep(e,t))}kn.Na="timingevent";function tp(t,e){Be.call(this,kn.Na,t),this.size=e}Me(tp,Be);function Es(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var ro={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},np={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yc(){}Yc.prototype.h=null;function rp(t){return t.h||(t.h=t.i())}function sp(){}var Is={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Qc(){Be.call(this,"d")}Me(Qc,Be);function Xc(){Be.call(this,"c")}Me(Xc,Be);var Jc;function so(){}Me(so,Yc);so.prototype.g=function(){return new XMLHttpRequest};so.prototype.i=function(){return{}};Jc=new so;function Ts(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ws(this),this.P=QI,t=kc?125:void 0,this.W=new eo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ip}function ip(){this.i=null,this.g="",this.h=!1}var QI=45e3,Zc={},io={};D=Ts.prototype;D.setTimeout=function(t){this.P=t};function el(t,e,n){t.K=1,t.v=uo($t(e)),t.s=n,t.U=!0,op(t,null)}function op(t,e){t.F=Date.now(),bs(t),t.A=$t(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),gp(n.h,"t",r),t.C=0,n=t.l.H,t.h=new ip,t.g=Fp(t.l,n?e:null,!t.s),0<t.O&&(t.L=new KI(Pe(t.Ia,t,t.g),t.O)),Qd(t.V,t.g,"readystatechange",t.gb),e=t.H?Md(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),_s(1),zI(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&jt(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const u=jt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||kc||this.g&&(this.h.h||this.g.ga()||Cp(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?_s(3):_s(2)),oo(this);var n=this.g.ba();this.N=n;t:if(ap(this)){var r=Cp(this.g);t="";var s=r.length,i=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){On(this),Ss(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,WI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yi(a)){var l=a;break t}}l=null}if(n=l)Tr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tl(this,n);else{this.i=!1,this.o=3,Je(12),On(this),Ss(this);break e}}this.U?(cp(this,u,o),kc&&this.i&&u==3&&(Qd(this.V,this.W,"tick",this.fb),this.W.start())):(Tr(this.j,this.m,o,null),tl(this,o)),u==4&&On(this),this.i&&!this.I&&(u==4?Mp(this.l,this):(this.i=!1,bs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),On(this),Ss(this)}}}catch{}finally{}};function ap(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function cp(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=XI(t,n),s==io){e==4&&(t.o=4,Je(14),r=!1),Tr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Zc){t.o=4,Je(15),Tr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Tr(t.j,t.m,s,null),tl(t,s);ap(t)&&s!=io&&s!=Zc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Je(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),fl(e),e.L=!0,Je(11))):(Tr(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),Ss(t))}D.fb=function(){if(this.g){var t=jt(this.g),e=this.g.ga();this.C<e.length&&(oo(this),cp(this,t,e),this.i&&t!=4&&bs(this))}};function XI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?io:(n=Number(e.substring(n,r)),isNaN(n)?Zc:(r+=1,r+n>e.length?io:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,On(this)};function bs(t){t.Y=Date.now()+t.P,lp(t,t.P)}function lp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Es(Pe(t.eb,t),e)}function oo(t){t.B&&(H.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(GI(this.j,this.A),this.K!=2&&(_s(3),Je(17)),On(this),this.o=2,Ss(this)):lp(this,this.Y-t)};function Ss(t){t.l.G==0||t.I||Mp(t.l,t)}function On(t){oo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wc(t.W),Xd(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function tl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||sl(n.i,t))){if(n.I=t.N,!t.J&&sl(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)yo(n),go(n);else break e;hl(n),Je(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Es(Pe(n.ab,n),6e3));if(1>=vp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Mn(n,11)}else if((t.J||n.g==t)&&yo(n),!Yi(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;!i.g&&(Qe(y,"spdy")||Qe(y,"quic")||Qe(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(il(i,i.h),i.h=null))}if(r.D){const R=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.sa=R,Ee(r.F,r.D,R))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Up(r,r.H?r.la:null,r.W),o.J){wp(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(oo(a),bs(a)),r.g=o}else Dp(r);0<n.l.length&&mo(n)}else l[0]!="stop"&&l[0]!="close"||Mn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mn(n,7):ll(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}_s(4)}catch{}}function JI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(bc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function nl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bc(t)||typeof t=="string")Nd(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(bc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=JI(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function br(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof br)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}D=br.prototype;D.R=function(){rl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return rl(this),this.g.concat()};function rl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Dn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Dn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}D.get=function(t,e){return Dn(this.h,t)?this.h[t]:e};D.set=function(t,e){Dn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var up=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ZI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Pn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Pn){this.g=e!==void 0?e:t.g,ao(this,t.j),this.s=t.s,co(this,t.i),lo(this,t.m),this.l=t.l,e=t.h;var n=new Rs;n.i=e.i,e.g&&(n.g=new br(e.g),n.h=e.h),hp(this,n),this.o=t.o}else t&&(n=String(t).match(up))?(this.g=!!e,ao(this,n[1]||"",!0),this.s=As(n[2]||""),co(this,n[3]||"",!0),lo(this,n[4]),this.l=As(n[5]||"",!0),hp(this,n[6]||"",!0),this.o=As(n[7]||"")):(this.g=!!e,this.h=new Rs(null,this.g))}Pn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cs(e,fp,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Cs(e,fp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Cs(n,n.charAt(0)=="/"?sT:rT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cs(n,oT)),t.join("")};function $t(t){return new Pn(t)}function ao(t,e,n){t.j=n?As(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function co(t,e,n){t.i=n?As(e,!0):e}function lo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hp(t,e,n){e instanceof Rs?(t.h=e,aT(t.h,t.g)):(n||(e=Cs(e,iT)),t.h=new Rs(e,t.g))}function Ee(t,e,n){t.h.set(e,n)}function uo(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function eT(t){return t instanceof Pn?$t(t):new Pn(t,void 0)}function tT(t,e,n,r){var s=new Pn(null,void 0);return t&&ao(s,t),e&&co(s,e),n&&lo(s,n),r&&(s.l=r),s}function As(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,nT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fp=/[#\/\?@]/g,rT=/[#\?:]/g,sT=/[#\?]/g,iT=/[#\?@]/g,oT=/#/g;function Rs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function cn(t){t.g||(t.g=new br,t.h=0,t.i&&ZI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Rs.prototype;D.add=function(t,e){cn(this),this.i=null,t=Sr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dp(t,e){cn(t),e=Sr(t,e),Dn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Dn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&rl(t)))}function pp(t,e){return cn(t),e=Sr(t,e),Dn(t.g.h,e)}D.forEach=function(t,e){cn(this),this.g.forEach(function(n,r){Nd(n,function(s){t.call(e,s,r,this)},this)},this)};D.T=function(){cn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};D.R=function(t){cn(this);var e=[];if(typeof t=="string")pp(this,t)&&(e=kd(e,this.g.get(Sr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=kd(e,t[n])}return e};D.set=function(t,e){return cn(this),this.i=null,t=Sr(this,t),pp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function gp(t,e,n){dp(t,e),0<n.length&&(t.i=null,t.g.set(Sr(t,e),Ac(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Sr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function aT(t,e){e&&!t.j&&(cn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(dp(this,r),gp(this,s,n))},t)),t.j=e}var cT=class{constructor(t,e){this.h=t,this.g=e}};function mp(t){this.l=t||lT,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lT=10;function yp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function vp(t){return t.h?1:t.g?t.g.size:0}function sl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function il(t,e){t.g?t.g.add(e):t.h=e}function wp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mp.prototype.cancel=function(){if(this.i=_p(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _p(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ac(t.i)}function ol(){}ol.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};ol.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function uT(){this.g=new ol}function hT(t,e,n){const r=n||"";try{nl(t,function(s,i){let o=s;ms(s)&&(o=Hc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function fT(t,e){const n=new to;if(H.Image){const r=new Image;r.onload=Gi(ho,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Gi(ho,n,r,"TestLoadImage: error",!1,e),r.onabort=Gi(ho,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gi(ho,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ho(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ns(t){this.l=t.$b||null,this.j=t.ib||!1}Me(Ns,Yc);Ns.prototype.g=function(){return new fo(this.l,this.j)};Ns.prototype.i=function(t){return function(){return t}}({});function fo(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=al,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(fo,Oe);var al=0;D=fo.prototype;D.open=function(t,e){if(this.readyState!=al)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Os(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=al};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof H.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ep(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ep(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ks(this):Os(this),this.readyState==3&&Ep(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,ks(this))};D.Ta=function(t){this.g&&(this.response=t,ks(this))};D.ha=function(){this.g&&ks(this)};function ks(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Os(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Os(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var dT=H.JSON.parse;function Se(t){Oe.call(this),this.headers=new br,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ip,this.K=this.L=!1}Me(Se,Oe);var Ip="",pT=/^https?$/i,gT=["POST","PUT"];D=Se.prototype;D.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Jc.g(),this.C=this.u?rp(this.u):rp(Jc),this.g.onreadystatechange=Pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Tp(this,i);return}t=n||"";const s=new br(this.headers);r&&nl(r,function(i,o){s.set(o,i)}),r=AI(s.T()),n=H.FormData&&t instanceof H.FormData,!(0<=Rd(gT,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ap(this),0<this.B&&((this.K=mT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.pa,this)):this.A=Gc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Tp(this,i)}};function mT(t){return Ir&&OI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function yT(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof Tc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))};function Tp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bp(t),po(t)}function bp(t){t.D||(t.D=!0,xe(t,"complete"),xe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xe(this,"complete"),xe(this,"abort"),po(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),po(this,!0)),Se.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?Sp(this):this.cb())};D.cb=function(){Sp(this)};function Sp(t){if(t.h&&typeof Tc!="undefined"&&(!t.C[1]||jt(t)!=4||t.ba()!=2)){if(t.v&&jt(t)==4)Gc(t.Fa,0,t);else if(xe(t,"readystatechange"),jt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(up)[1]||null;if(!s&&H.self&&H.self.location){var i=H.self.location.protocol;s=i.substr(0,i.length-1)}r=!pT.test(s?s.toLowerCase():"")}n=r}if(n)xe(t,"complete"),xe(t,"success");else{t.m=6;try{var o=2<jt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",bp(t)}}finally{po(t)}}}}function po(t,e){if(t.g){Ap(t);const n=t.g,r=t.C[0]?Wi:null;t.g=null,t.C=null,e||xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ap(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function jt(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),dT(e)}};function Cp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ip:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function vT(t){let e="";return Rc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function cl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Ds(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Rp(t){this.za=0,this.l=[],this.h=new to,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ds("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ds("baseRetryDelayMs",5e3,t),this.$a=Ds("retryDelaySeedMs",1e4,t),this.Ya=Ds("forwardChannelMaxRetries",2,t),this.ra=Ds("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new mp(t&&t.concurrentRequestLimit),this.Ca=new uT,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=Rp.prototype;D.ma=8;D.G=1;function ll(t){if(Np(t),t.G==3){var e=t.V++,n=$t(t.F);Ee(n,"SID",t.J),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Ps(t,n),e=new Ts(t,t.h,e,void 0),e.K=2,e.v=uo($t(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Fp(e.l,null),e.g.ea(e.v)),e.F=Date.now(),bs(e)}Lp(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function go(t){t.g&&(fl(t),t.g.cancel(),t.g=null)}function Np(t){go(t),t.u&&(H.clearTimeout(t.u),t.u=null),yo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function ul(t,e){t.l.push(new cT(t.Za++,e)),t.G==3&&mo(t)}function mo(t){yp(t.i)||t.m||(t.m=!0,qc(t.Ha,t),t.C=0)}function wT(t,e){return vp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Es(Pe(t.Ha,t,e),xp(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ts(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Md(i),Ld(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Op(this,s,e),n=$t(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),Ps(this,n),this.o&&i&&cl(n,this.o,i),il(this.i,s),this.Ra&&Ee(n,"TYPE","init"),this.ja?(Ee(n,"$req",e),Ee(n,"SID","null"),s.$=!0,el(s,n,null)):el(s,n,e),this.G=2}}else this.G==3&&(t?kp(this,t):this.l.length==0||yp(this.i)||kp(this))};function kp(t,e){var n;e?n=e.m:n=t.V++;const r=$t(t.F);Ee(r,"SID",t.J),Ee(r,"RID",n),Ee(r,"AID",t.U),Ps(t,r),t.o&&t.s&&cl(r,t.o,t.s),n=new Ts(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Op(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),il(t.i,n),el(n,r,e)}function Ps(t,e){t.j&&nl({},function(n,r){Ee(e,r,n)})}function Op(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Pe(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{hT(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Dp(t){t.g||t.u||(t.Y=1,qc(t.Ga,t),t.A=0)}function hl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Es(Pe(t.Ga,t),xp(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,Pp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Es(Pe(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Je(10),go(this),Pp(this))};function fl(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function Pp(t){t.g=new Ts(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=$t(t.oa);Ee(e,"RID","rpc"),Ee(e,"SID",t.J),Ee(e,"CI",t.N?"0":"1"),Ee(e,"AID",t.U),Ps(t,e),Ee(e,"TYPE","xmlhttp"),t.o&&t.s&&cl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=uo($t(e)),n.s=null,n.U=!0,op(n,t)}D.ab=function(){this.v!=null&&(this.v=null,go(this),hl(this),Je(19))};function yo(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function Mp(t,e){var n=null;if(t.g==e){yo(t),fl(t),t.g=null;var r=2}else if(sl(t.i,e))n=e.D,wp(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=no(),xe(r,new tp(r,n,e,s)),mo(t)}else Dp(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&wT(t,e)||r==2&&hl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Mn(t,5);break;case 4:Mn(t,10);break;case 3:Mn(t,6);break;default:Mn(t,2)}}}function xp(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Mn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Pe(t.jb,t);n||(n=new Pn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||ao(n,"https"),uo(n)),fT(n.toString(),r)}else Je(2);t.G=0,t.j&&t.j.va(e),Lp(t),Np(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Je(2)):(this.h.info("Failed to ping google.com"),Je(1))};function Lp(t){t.G=0,t.I=-1,t.j&&((_p(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Ac(t.l),t.l.length=0),t.j.ua())}function Up(t,e,n){let r=eT(n);if(r.i!="")e&&co(r,e+"."+r.i),lo(r,r.m);else{const s=H.location;r=tT(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Rc(t.aa,function(s,i){Ee(r,i,s)}),e=t.D,n=t.sa,e&&n&&Ee(r,e,n),Ee(r,"VER",t.ma),Ps(t,r),r}function Fp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Se(new Ns({ib:!0})):new Se(t.qa),e.L=t.H,e}function Vp(){}D=Vp.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function vo(){if(Ir&&!(10<=Number(DI)))throw Error("Environmental error: no available transport.")}vo.prototype.g=function(t,e){return new at(t,e)};function at(t,e){Oe.call(this),this.g=new Rp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Yi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Yi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ar(this)}Me(at,Oe);at.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),qc(Pe(t.hb,t,e))),Je(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Up(t,null,t.W),mo(t)};at.prototype.close=function(){ll(this.g)};at.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ul(this.g,e)}else this.v?(e={},e.__data__=Hc(t),ul(this.g,e)):ul(this.g,t)};at.prototype.M=function(){this.g.j=null,delete this.j,ll(this.g),delete this.g,at.Z.M.call(this)};function $p(t){Qc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me($p,Qc);function jp(){Xc.call(this),this.status=1}Me(jp,Xc);function Ar(t){this.g=t}Me(Ar,Vp);Ar.prototype.xa=function(){xe(this.g,"a")};Ar.prototype.wa=function(t){xe(this.g,new $p(t))};Ar.prototype.va=function(t){xe(this.g,new jp(t))};Ar.prototype.ua=function(){xe(this.g,"b")};vo.prototype.createWebChannel=vo.prototype.g;at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;ro.NO_ERROR=0;ro.TIMEOUT=8;ro.HTTP_ERROR=6;np.COMPLETE="complete";sp.EventType=Is;Is.OPEN="a";Is.CLOSE="b";Is.ERROR="c";Is.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;Se.prototype.listenOnce=Se.prototype.O;Se.prototype.getLastError=Se.prototype.La;Se.prototype.getLastErrorCode=Se.prototype.Da;Se.prototype.getStatus=Se.prototype.ba;Se.prototype.getResponseJson=Se.prototype.Qa;Se.prototype.getResponseText=Se.prototype.ga;Se.prototype.send=Se.prototype.ea;var _T=function(){return new vo},ET=function(){return no()},dl=ro,IT=np,TT=kn,Bp={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},bT=Ns,wo=sp,ST=Se;const Hp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr="9.1.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new rc("@firebase/firestore");function qp(){return xn.logLevel}function $(t,...e){if(xn.logLevel<=se.DEBUG){const n=e.map(pl);xn.debug(`Firestore (${Cr}): ${t}`,...n)}}function ln(t,...e){if(xn.logLevel<=se.ERROR){const n=e.map(pl);xn.error(`Firestore (${Cr}): ${t}`,...n)}}function Kp(t,...e){if(xn.logLevel<=se.WARN){const n=e.map(pl);xn.warn(`Firestore (${Cr}): ${t}`,...n)}}function pl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Cr}) INTERNAL ASSERTION FAILED: `+t;throw ln(e),new Error(e)}function me(t,e){t||W()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class CT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class RT{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new AT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new tt(e)}}class NT{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=tt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class kT{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new NT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gl.T=-1;class zp{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=OT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Rr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new ct(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ln(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ms.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ms?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Ms{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const DT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Ms{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return DT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new F(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new F(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.fields=e,e.sort(nt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new He(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new He(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const PT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(t){if(me(!!t),typeof t=="string"){let e=0;const n=PT.exec(t);if(me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qp(t){const e=t.mapValue.fields.__previous_value__;return Yp(e)?Qp(e):e}function Ls(t){const e=hn(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t){return t==null}function _o(t){return t===0&&1/t==-1/0}function MT(t){return typeof t=="number"&&Number.isInteger(t)&&!_o(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ie.fromString(e))}static fromName(e){return new q(Ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yp(t)?4:10:W()}function Ot(t,e){const n=Un(t);if(n!==Un(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ls(t).isEqual(Ls(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=hn(r.timestampValue),o=hn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Nr(r.bytesValue).isEqual(Nr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ae(r.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(r.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ae(r.integerValue)===Ae(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ae(r.doubleValue),o=Ae(s.doubleValue);return i===o?_o(i)===_o(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Rr(t.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Wp(i)!==Wp(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ot(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function Us(t,e){return(t.values||[]).find(n=>Ot(n,e))!==void 0}function Or(t,e){const n=Un(t),r=Un(e);if(n!==r)return oe(n,r);switch(n){case 0:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ae(s.integerValue||s.doubleValue),a=Ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xp(t.timestampValue,e.timestampValue);case 4:return Xp(Ls(t),Ls(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Nr(s),a=Nr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=oe(o[c],a[c]);if(l!==0)return l}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=oe(Ae(s.latitude),Ae(i.latitude));return o!==0?o:oe(Ae(s.longitude),Ae(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Or(o[c],a[c]);if(l)return l}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=oe(a[u],l[u]);if(h!==0)return h;const f=Or(o[a[u]],c[l[u]]);if(f!==0)return f}return oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function Xp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=hn(t),r=hn(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function ml(t){return yl(t)}function yl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=hn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Nr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=yl(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${yl(r.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function vl(t){return!!t&&"integerValue"in t}function wl(t){return!!t&&"arrayValue"in t}function Jp(t){return!!t&&"nullValue"in t}function Zp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eo(t){return!!t&&"mapValue"in t}function Fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ln(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Eo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Fs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Eo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Eo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ln(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new lt(Fs(this.value))}}function eg(t){const e=[];return Ln(t.fields,(n,r)=>{const s=new nt([n]);if(Eo(r)){const i=eg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xs(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new qe(e,0,ie.min(),lt.empty(),0)}static newFoundDocument(e,n,r){return new qe(e,1,n,r,0)}static newNoDocument(e,n){return new qe(e,2,n,lt.empty(),0)}static newUnknownDocument(e,n){return new qe(e,3,n,lt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new qe(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function tg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xT(t,e,n,r,s,i,o)}function _l(t){const e=G(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>UT(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),kr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Io(e.startAt)),e.endAt&&(n+="|ub:",n+=Io(e.endAt)),e.A=n}return e.A}function LT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ml(r.value)}`;var r}).join(", ")}]`),kr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Io(t.startAt)),t.endAt&&(e+=", endAt: "+Io(t.endAt)),`Target(${e})`}function El(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!KT(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Ot(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sg(t.startAt,e.startAt)&&sg(t.endAt,e.endAt)}function Il(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class rt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new FT(e,n,r):n==="array-contains"?new jT(e,r):n==="in"?new BT(e,r):n==="not-in"?new HT(e,r):n==="array-contains-any"?new qT(e,r):new rt(e,n,r)}static R(e,n,r){return n==="in"?new VT(e,r):new $T(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(Or(n,this.value)):n!==null&&Un(this.value)===Un(n)&&this.P(Or(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function UT(t){return t.field.canonicalString()+t.op.toString()+ml(t.value)}class FT extends rt{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.P(n)}}class VT extends rt{constructor(e,n){super(e,"in",n),this.keys=ng("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $T extends rt{constructor(e,n){super(e,"not-in",n),this.keys=ng("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ng(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class jT extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wl(n)&&Us(n.arrayValue,this.value)}}class BT extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Us(this.value.arrayValue,n)}}class HT extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Us(this.value.arrayValue,n)}}class qT extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Us(this.value.arrayValue,r))}}class Tl{constructor(e,n){this.position=e,this.before=n}}function Io(t){return`${t.before?"b":"a"}:${t.position.map(e=>ml(e)).join(",")}`}class Vs{constructor(e,n="asc"){this.field=e,this.dir=n}}function KT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function rg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Or(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function sg(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ot(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function zT(t,e,n,r,s,i,o,a){return new To(t,e,n,r,s,i,o,a)}function ig(t){return new To(t)}function bo(t){return!kr(t.limit)&&t.limitType==="F"}function So(t){return!kr(t.limit)&&t.limitType==="L"}function WT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function GT(t){for(const e of t.filters)if(e.v())return e.field;return null}function YT(t){return t.collectionGroup!==null}function $s(t){const e=G(t);if(e.V===null){e.V=[];const n=GT(e),r=WT(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new Vs(n)),e.V.push(new Vs(nt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Vs(nt.keyField(),i))}}}return e.V}function Fn(t){const e=G(t);if(!e.S)if(e.limitType==="F")e.S=tg(e.path,e.collectionGroup,$s(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of $s(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Vs(i.field,o))}const r=e.endAt?new Tl(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Tl(e.startAt.position,!e.startAt.before):null;e.S=tg(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.S}function QT(t,e,n){return new To(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ao(t,e){return El(Fn(t),Fn(e))&&t.limitType===e.limitType}function og(t){return`${_l(Fn(t))}|lt:${t.limitType}`}function bl(t){return`Query(target=${LT(Fn(t))}; limitType=${t.limitType})`}function Co(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):q.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!rg(n.startAt,$s(n),r)||n.endAt&&rg(n.endAt,$s(n),r))}(t,e)}function ag(t){return(e,n)=>{let r=!1;for(const s of $s(t)){const i=XT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function XT(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Or(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_o(e)?"-0":e}}function lg(t){return{integerValue:""+t}}function JT(t,e){return MT(e)?lg(e):cg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this._=void 0}}function ZT(t,e,n){return t instanceof No?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Dr?hg(t,e):t instanceof js?fg(t,e):function(r,s){const i=ug(r,s),o=dg(i)+dg(r.C);return vl(i)&&vl(r.C)?lg(o):cg(r.N,o)}(t,e)}function eb(t,e,n){return t instanceof Dr?hg(t,e):t instanceof js?fg(t,e):n}function ug(t,e){return t instanceof ko?vl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class No extends Ro{}class Dr extends Ro{constructor(e){super(),this.elements=e}}function hg(t,e){const n=pg(e);for(const r of t.elements)n.some(s=>Ot(s,r))||n.push(r);return{arrayValue:{values:n}}}class js extends Ro{constructor(e){super(),this.elements=e}}function fg(t,e){let n=pg(e);for(const r of t.elements)n=n.filter(s=>!Ot(s,r));return{arrayValue:{values:n}}}class ko extends Ro{constructor(e,n){super(),this.N=e,this.C=n}}function dg(t){return Ae(t.integerValue||t.doubleValue)}function pg(t){return wl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.field=e,this.transform=n}}function nb(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Dr&&r instanceof Dr||n instanceof js&&r instanceof js?Rr(n.elements,r.elements,Ot):n instanceof ko&&r instanceof ko?Ot(n.C,r.C):n instanceof No&&r instanceof No}(t.transform,e.transform)}class rb{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Do{}function sb(t,e,n){t instanceof Po?function(r,s,i){const o=r.value.clone(),a=vg(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vn?function(r,s,i){if(!Oo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=vg(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(yg(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Sl(t,e,n){t instanceof Po?function(r,s,i){if(!Oo(r.precondition,s))return;const o=r.value.clone(),a=wg(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(mg(s),o).setHasLocalMutations()}(t,e,n):t instanceof Vn?function(r,s,i){if(!Oo(r.precondition,s))return;const o=wg(r.fieldTransforms,i,s),a=s.data;a.setAll(yg(r)),a.setAll(o),s.convertToFoundDocument(mg(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Oo(r.precondition,s)&&s.convertToNoDocument(ie.min())}(t,e)}function ib(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ug(r.transform,s||null);i!=null&&(n==null&&(n=lt.empty()),n.set(r.field,i))}return n||null}function gg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Rr(n,r,(s,i)=>nb(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function mg(t){return t.isFoundDocument()?t.version:ie.min()}class Po extends Do{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Vn extends Do{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function yg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vg(t,e,n){const r=new Map;me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,eb(o,a,n[s]))}return r}function wg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ZT(i,o,e))}return r}class _g extends Do{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class ob extends Do{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ee;function cb(t){switch(t){default:return W();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Eg(t){if(t===void 0)return ln("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ce.OK:return I.OK;case Ce.CANCELLED:return I.CANCELLED;case Ce.UNKNOWN:return I.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return I.INTERNAL;case Ce.UNAVAILABLE:return I.UNAVAILABLE;case Ce.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ce.NOT_FOUND:return I.NOT_FOUND;case Ce.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ce.ABORTED:return I.ABORTED;case Ce.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ce.DATA_LOSS:return I.DATA_LOSS;default:return W()}}(ee=Ce||(Ce={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}}class Mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Le.RED,this.left=s!=null?s:Le.EMPTY,this.right=i!=null?i:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Le(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ig(this.data.getIterator())}getIteratorFrom(e){return new Ig(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Ig{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new Ke(q.comparator);function $n(){return lb}const ub=new Ke(q.comparator);function Al(){return ub}const hb=new Ke(q.comparator);function fb(){return hb}const db=new Ue(q.comparator);function ve(...t){let e=db;for(const n of t)e=e.add(n);return e}const pb=new Ue(oe);function Tg(){return pb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Bs.createSynthesizedTargetChangeForCurrentChange(e,n)),new xo(ie.min(),r,Tg(),$n(),ve())}}class Bs{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Bs(He.EMPTY_BYTE_STRING,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,r,s){this.k=e,this.removedTargetIds=n,this.key=r,this.$=s}}class bg{constructor(e,n){this.targetId=e,this.O=n}}class Sg{constructor(e,n,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ag{constructor(){this.F=0,this.M=Rg(),this.L=He.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=ve(),n=ve(),r=ve();return this.M.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:W()}}),new Bs(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=Rg()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class gb{constructor(e){this.tt=e,this.et=new Map,this.nt=$n(),this.st=Cg(),this.it=new Ue(oe)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ct(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,r=e.O.count,s=this.dt(n);if(s){const i=s.target;if(Il(i))if(r===0){const o=new q(i.path);this.at(n,o,qe.newNoDocument(o,ie.min()))}else me(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&Il(a.target)){const c=new q(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.at(o,c,qe.newNoDocument(c,e))}i.K&&(n.set(o,i.W()),i.G())}});let r=ve();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.dt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new xo(e,n,this.it,this.nt,r);return this.nt=$n(),this.st=Cg(),this.it=new Ue(oe),s}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}at(e,n,r){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Ag,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Ue(oe),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Ag),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Cg(){return new Ke(q.comparator)}function Rg(){return new Ke(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class vb{constructor(e,n){this.databaseId=e,this.D=n}}function Uo(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ng(t,e){return t.D?e.toBase64():e.toUint8Array()}function wb(t,e){return Uo(t,e.toTimestamp())}function Ht(t){return me(!!t),ie.fromTimestamp(function(e){const n=hn(e);return new ct(n.seconds,n.nanos)}(t))}function Cl(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kg(t){const e=Ie.fromString(t);return me(Lg(e)),e}function Rl(t,e){return Cl(t.databaseId,e.path)}function Nl(t,e){const n=kg(e);if(n.get(1)!==t.databaseId.projectId)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Og(n))}function kl(t,e){return Cl(t.databaseId,e)}function _b(t){const e=kg(t);return e.length===4?Ie.emptyPath():Og(e)}function Ol(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Og(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dg(t,e,n){return{name:Rl(t,e),fields:n.value.mapValue.fields}}function Eb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.D?(me(l===void 0||typeof l=="string"),He.fromBase64String(l||"")):(me(l===void 0||l instanceof Uint8Array),He.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:Eg(c.code);return new F(l,c.message||"")}(o);n=new Sg(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nl(t,r.document.name),i=Ht(r.document.updateTime),o=new lt({mapValue:{fields:r.document.fields}}),a=qe.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Lo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nl(t,r.document),i=r.readTime?Ht(r.readTime):ie.min(),o=qe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Lo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nl(t,r.document),i=r.removedTargetIds||[];n=new Lo([],i,s,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new ab(s),o=r.targetId;n=new bg(o,i)}}return n}function Ib(t,e){let n;if(e instanceof Po)n={update:Dg(t,e.key,e.value)};else if(e instanceof _g)n={delete:Rl(t,e.key)};else if(e instanceof Vn)n={update:Dg(t,e.key,e.data),updateMask:Db(e.fieldMask)};else{if(!(e instanceof ob))return W();n={verify:Rl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof No)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Dr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof js)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ko)return{fieldPath:i.field.canonicalString(),increment:o.C};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:wb(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function Tb(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Ht(r.updateTime):Ht(s);return i.isEqual(ie.min())&&(i=Ht(s)),new rb(i,r.transformResults||[])}(n,e))):[]}function bb(t,e){return{documents:[kl(t,e.path)]}}function Sb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=kl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(Zp(u.value))return{unaryFilter:{field:Pr(u.field),op:"IS_NAN"}};if(Jp(u.value))return{unaryFilter:{field:Pr(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Zp(u.value))return{unaryFilter:{field:Pr(u.field),op:"IS_NOT_NAN"}};if(Jp(u.value))return{unaryFilter:{field:Pr(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(u.field),op:Nb(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:Pr(l.field),direction:Rb(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.D||kr(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Mg(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Mg(e.endAt)),n}function Ab(t){let e=_b(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){me(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Pg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Vs(Mr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,kr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=xg(n.startAt));let l=null;return n.endAt&&(l=xg(n.endAt)),zT(e,s,o,i,a,"F",c,l)}function Cb(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pg(t){return t?t.unaryFilter!==void 0?[Ob(t)]:t.fieldFilter!==void 0?[kb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Pg(e)).reduce((e,n)=>e.concat(n)):W():[]}function Mg(t){return{before:t.before,values:t.position}}function xg(t){const e=!!t.before,n=t.values||[];return new Tl(n,e)}function Rb(t){return mb[t]}function Nb(t){return yb[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function Mr(t){return nt.fromServerFormat(t.fieldPath)}function kb(t){return rt.create(Mr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ob(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Mr(t.unaryFilter.field);return rt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Mr(t.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Mr(t.unaryFilter.field);return rt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Mr(t.unaryFilter.field);return rt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function Db(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const Pb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Hs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sb(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Sl(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Sl(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(ie.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Rr(this.mutations,e.mutations,(n,r)=>gg(n,r))&&Rr(this.baseMutations,e.baseMutations,(n,r)=>gg(n,r))}}class Dl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){me(e.mutations.length===r.length);let s=fb();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Dl(e,n,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r,s,i=ie.min(),o=ie.min(),a=He.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.Wt=e}}function Ub(t){const e=Ab({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?QT(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.Gt=new Vb}addToCollectionParentIndex(e,n){return this.Gt.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Gt.getEntries(n))}}class Vb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ue(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ue(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new xr(0)}static ie(){return new xr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Pb)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){Ln(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Gp(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:ie.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:qe.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}bn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):YT(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new q(n)).next(r=>{let s=Al();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Sn(e,n,r){const s=n.collectionGroup;let i=Al();return this.Ht.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const c=function(l,u){return new To(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.Dn(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Dn(e,n,r){let s,i;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Cn(e,i,s).next(a=>{s=a;for(const c of i)for(const l of c.mutations){const u=l.key;let h=s.get(u);h==null&&(h=qe.newInvalidDocument(u),s=s.insert(u,h)),Sl(l,h,c.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{Co(n,a)||(s=s.remove(o))}),s))}Cn(e,n,r){let s=ve();for(const o of n)for(const a of o.mutations)a instanceof Vn&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.He.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=s}static kn(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ie.min())?this.Fn(e,n):this.On.Pn(e,s).next(i=>{const o=this.Mn(n,i);return(bo(n)||So(n))&&this.Ln(n.limitType,o,s,r)?this.Fn(e,n):(qp()<=se.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),bl(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let r=new Ue(ag(e));return n.forEach((s,i)=>{Co(e,i)&&(r=r.add(i))}),r}Ln(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,n){return qp()<=se.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",bl(n)),this.On.getDocumentsMatchingQuery(e,n,ie.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,r,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new Ke(oe),this.qn=new Ks(i=>_l(i),El),this.Kn=ie.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Ug(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function Hb(t,e,n,r){return new Bb(t,e,n,r)}async function Fg(t,e){const n=G(t);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),s=new Ug(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=ve();for(const f of a){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of c){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return s.Pn(o,h).next(f=>({Wn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function qb(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=O.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(y=>{const R=c.docVersions.get(g);me(R!==null),y.version.compareTo(R)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&l.addEntry(y,c.commitVersion))})}),f.next(()=>o.In.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,s))})}function Vg(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function Kb(t,e){const n=G(t),r=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.ze.addMatchingKeys(i,l.addedDocuments,u)));const f=l.resumeToken;if(f.approximateByteSize()>0){const g=h.withResumeToken(f,r).withSequenceNumber(i.currentSequenceNumber);s=s.insert(u,g),function(y,R,T){return me(R.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(h,g,l)&&a.push(n.ze.updateTargetData(i,g))}});let c=$n();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(zb(i,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(ie.min())){const l=n.ze.getLastRemoteSnapshotVersion(i).next(u=>n.ze.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.Qn.vn(i,c)).next(()=>c)}).then(i=>(n.Un=s,i))}function zb(t,e,n,r,s){let i=ve();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=$n();return n.forEach((c,l)=>{const u=o.get(c),h=(s==null?void 0:s.get(c))||r;l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):$("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function Wb(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function Gb(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ze.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.ze.allocateTargetId(r).next(o=>(s=new jn(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Un.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function Ml(t,e,n){const r=G(t),s=r.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Hs(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(s.target)}function $g(t,e,n){const r=G(t);let s=ie.min(),i=ve();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.qn.get(l);return h!==void 0?O.resolve(u.Un.get(h)):u.ze.getTargetData(c,l)}(r,o,Fn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?s:ie.min(),n?i:ve())).next(a=>({documents:a,Gn:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return O.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ht(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:Ub(r.bundledQuery),readTime:Ht(r.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.Zn=new Ue(De.ts),this.es=new Ue(De.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new De(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new De(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new q(new Ie([])),r=new De(n,e),s=new De(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new q(new Ie([])),r=new De(n,e),s=new De(n,e+1);let i=ve();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new De(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return q.comparator(e.key,n.key)||oe(e.ls,n.ls)}static ns(e,n){return oe(e.ls,n.ls)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Ue(De.ts)}checkEmpty(e){return O.resolve(this.In.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new xb(i,n,r,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new De(a.key,i)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this._s(r),i=s<0?0:s;return O.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return O.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),s=new De(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this.ws(o.ls);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(oe);return n.forEach(s=>{const i=new De(s,0),o=new De(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),O.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new De(new q(i),0);let a=new Ue(oe);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),O.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this.ws(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){me(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return O.forEach(n.mutations,s=>{const i=new De(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new De(n,0),s=this.ds.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,O.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new Ke(q.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.clone():qe.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.clone():qe.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=$n();const i=new q(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Co(n,c)&&(s=s.insert(c.key,c.clone()))}return O.resolve(s)}Ts(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Jb(this)}getSize(e){return O.resolve(this.size)}}class Jb extends $b{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(r))):this.Se.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.persistence=e,this.Es=new Ks(n=>_l(n),El),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Is=0,this.As=new xl,this.targetCount=0,this.Rs=xr.se()}forEachTarget(e,n){return this.Es.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),O.resolve()}ae(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new xr(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.ae(n),O.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n){this.bs={},this.Le=new gl(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Zb(this),this.Ht=new Fb,this.He=function(r,s){return new Xb(r,s)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new Lb(n),this.Je=new Yb(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new Qb(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new tS(this.Le.next());return this.referenceDelegate.vs(),r(s).next(i=>this.referenceDelegate.Vs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ss(e,n){return O.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class tS extends Mb{constructor(e){super(),this.currentSequenceNumber=e}}class Ll{constructor(e){this.persistence=e,this.Ds=new xl,this.Cs=null}static Ns(e){return new Ll(e)}get xs(){if(this.Cs)return this.Cs;throw W()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.xs,r=>{const s=q.fromPath(r);return this.ks(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return O.or([()=>O.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class jg{constructor(){this.activeTargetIds=Tg()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nS{constructor(){this.yi=new jg,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new jg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{Ti(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,s){const i=this.Bi(e,n);$("RestConnection","Sending: ",i,r);const o={};return this.Ui(o,s),this.qi(e,i,o,r).then(a=>($("RestConnection","Received: ",a),a),a=>{throw Kp("RestConnection",`${e} failed with error: `,a,"url: ",i,"request:",r),a})}Ki(e,n,r,s){return this.Li(e,n,r,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Cr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=sS[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,s){return new Promise((i,o)=>{const a=new ST;a.listenOnce(IT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case dl.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),i(l);break;case dl.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new F(I.DEADLINE_EXCEEDED,"Request time out"));break;case dl.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(y)>=0?y:I.UNKNOWN}(h.status);o(new F(f,h.message))}else o(new F(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new F(I.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=_T(),i=ET(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new bT({})),this.Ui(o.initMessageHeaders,n),kf()||Df()||M_()||Pf()||x_()||Of()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");$("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new iS({vi:g=>{u?$("Connection","Not sending because WebChannel is closed:",g):(l||($("Connection","Opening WebChannel transport."),c.open(),l=!0),$("Connection","WebChannel sending:",g),c.send(g))},Vi:()=>c.close()}),f=(g,y,R)=>{g.listen(y,T=>{try{R(T)}catch(N){setTimeout(()=>{throw N},0)}})};return f(c,wo.EventType.OPEN,()=>{u||$("Connection","WebChannel transport opened.")}),f(c,wo.EventType.CLOSE,()=>{u||(u=!0,$("Connection","WebChannel transport closed"),h.$i())}),f(c,wo.EventType.ERROR,g=>{u||(u=!0,Kp("Connection","WebChannel transport errored:",g),h.$i(new F(I.UNAVAILABLE,"The operation could not be completed")))}),f(c,wo.EventType.MESSAGE,g=>{var y;if(!u){const R=g.data[0];me(!!R);const T=R,N=T.error||((y=T[0])===null||y===void 0?void 0:y.error);if(N){$("Connection","WebChannel received error:",N);const V=N.status;let z=function(fe){const we=Ce[fe];if(we!==void 0)return Eg(we)}(V),Y=N.message;z===void 0&&(z=I.INTERNAL,Y="Unknown error status: "+V+" with message "+N.message),u=!0,h.$i(new F(z,Y)),c.close()}else $("Connection","WebChannel received:",R),h.Oi(R)}}),f(i,TT.STAT_EVENT,g=>{g.stat===Bp.PROXY?$("Connection","Detected buffering proxy"):g.stat===Bp.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Ul(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){return new vb(t,!0)}class Hg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=s,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r,s,i,o){this.Oe=e,this.er=r,this.nr=s,this.credentialsProvider=i,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Hg(e,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,n){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(ln(n.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===I.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(r=>{this.sr===n&&this.yr(r)},r=>{e(()=>{const s=new F(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.pr(s)})})}yr(e){const n=this.gr(this.sr);this.stream=this.Tr(e),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.pr(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return n=>{this.Oe.enqueueAndForget(()=>this.sr===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aS extends qg{constructor(e,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",n,r,i),this.N=s}Tr(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const n=Eb(this.N,e),r=function(s){if(!("targetChange"in s))return ie.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ie.min():i.readTime?Ht(i.readTime):ie.min()}(e);return this.listener.Er(n,r)}Ir(e){const n={};n.database=Ol(this.N),n.addTarget=function(s,i){let o;const a=i.target;return o=Il(a)?{documents:bb(s,a)}:{query:Sb(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ng(s,i.resumeToken):i.snapshotVersion.compareTo(ie.min())>0&&(o.readTime=Uo(s,i.snapshotVersion.toTimestamp())),o}(this.N,e);const r=Cb(this.N,e);r&&(n.labels=r),this.wr(n)}Ar(e){const n={};n.database=Ol(this.N),n.removeTarget=e,this.wr(n)}}class cS extends qg{constructor(e,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle",n,r,i),this.N=s,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(e){return this.nr.ji("Write",e)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const n=Tb(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.vr(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Ol(this.N),this.wr(e)}Pr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ib(this.N,r))};this.wr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS extends class{}{constructor(e,n,r){super(),this.credentials=e,this.nr=n,this.N=r,this.Dr=!1}Cr(){if(this.Dr)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.Cr(),this.credentials.getToken().then(s=>this.nr.Li(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new F(I.UNKNOWN,s.toString())})}Ki(e,n,r){return this.Cr(),this.credentials.getToken().then(s=>this.nr.Ki(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new F(I.UNKNOWN,s.toString())})}terminate(){this.Dr=!0}}class uS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(ln(n),this.$r=!1):$("OnlineStateTracker",n)}Br(){this.kr!==null&&(this.kr.cancel(),this.kr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ti(o=>{r.enqueueAndForget(async()=>{Bn(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c.Kr.add(4),await zs(c),c.Wr.set("Unknown"),c.Kr.delete(4),await Vo(c)}(this))})}),this.Wr=new uS(r,s)}}async function Vo(t){if(Bn(t))for(const e of t.jr)await e(!0)}async function zs(t){for(const e of t.jr)await e(!1)}function Kg(t,e){const n=G(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),$l(n)?Vl(n):Lr(n).cr()&&Fl(n,e))}function zg(t,e){const n=G(t),r=Lr(n);n.qr.delete(e),r.cr()&&Wg(n,e),n.qr.size===0&&(r.cr()?r.lr():Bn(n)&&n.Wr.set("Unknown"))}function Fl(t,e){t.Gr.Y(e.targetId),Lr(t).Ir(e)}function Wg(t,e){t.Gr.Y(e),Lr(t).Ar(e)}function Vl(t){t.Gr=new gb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qr.get(e)||null}),Lr(t).start(),t.Wr.Or()}function $l(t){return Bn(t)&&!Lr(t).ar()&&t.qr.size>0}function Bn(t){return G(t).Kr.size===0}function Gg(t){t.Gr=void 0}async function fS(t){t.qr.forEach((e,n)=>{Fl(t,e)})}async function dS(t,e){Gg(t),$l(t)?(t.Wr.Lr(e),Vl(t)):t.Wr.set("Unknown")}async function pS(t,e,n){if(t.Wr.set("Online"),e instanceof Sg&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.qr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.qr.delete(o),r.Gr.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $o(t,r)}else if(e instanceof Lo?t.Gr.rt(e):e instanceof bg?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(ie.min()))try{const r=await Vg(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Gr._t(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.qr.get(c);l&&s.qr.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.qr.get(a);if(!c)return;s.qr.set(a,c.withResumeToken(He.EMPTY_BYTE_STRING,c.snapshotVersion)),Wg(s,a);const l=new jn(c.target,a,1,c.sequenceNumber);Fl(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await $o(t,r)}}async function $o(t,e,n){if(!Hs(e))throw e;t.Kr.add(1),await zs(t),t.Wr.set("Offline"),n||(n=()=>Vg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Vo(t)})}function Yg(t,e){return e().catch(n=>$o(t,n,e))}async function jo(t){const e=G(t),n=fn(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;gS(e);)try{const s=await Wb(e.localStore,r);if(s===null){e.Ur.length===0&&n.lr();break}r=s.batchId,mS(e,s)}catch(s){await $o(e,s)}Qg(e)&&Xg(e)}function gS(t){return Bn(t)&&t.Ur.length<10}function mS(t,e){t.Ur.push(e);const n=fn(t);n.cr()&&n.br&&n.Pr(e.mutations)}function Qg(t){return Bn(t)&&!fn(t).ar()&&t.Ur.length>0}function Xg(t){fn(t).start()}async function yS(t){fn(t).Sr()}async function vS(t){const e=fn(t);for(const n of t.Ur)e.Pr(n.mutations)}async function wS(t,e,n){const r=t.Ur.shift(),s=Dl.from(r,e,n);await Yg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await jo(t)}async function _S(t,e){e&&fn(t).br&&await async function(n,r){if(s=r.code,cb(s)&&s!==I.ABORTED){const i=n.Ur.shift();fn(n).hr(),await Yg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await jo(n)}var s}(t,e),Qg(t)&&Xg(t)}async function ES(t,e){const n=G(t);e?(n.Kr.delete(2),await Vo(n)):e||(n.Kr.add(2),await zs(n),n.Wr.set("Unknown"))}function Lr(t){return t.zr||(t.zr=function(e,n,r){const s=G(e);return s.Cr(),new aS(n,s.nr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:fS.bind(null,t),Ci:dS.bind(null,t),Er:pS.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),$l(t)?Vl(t):t.Wr.set("Unknown")):(await t.zr.stop(),Gg(t))})),t.zr}function fn(t){return t.Hr||(t.Hr=function(e,n,r){const s=G(e);return s.Cr(),new cS(n,s.nr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:yS.bind(null,t),Ci:_S.bind(null,t),Vr:vS.bind(null,t),vr:wS.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await jo(t)):(await t.Hr.stop(),t.Ur.length>0&&($("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new jl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bl(t,e){if(ln("AsyncQueue",`${e}: ${t}`),Hs(t))return new F(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Al(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new Ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ur)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(){this.Jr=new Ke(q.comparator)}track(e){const n=e.doc.key,r=this.Jr.get(n);r?e.type!==0&&r.type===3?this.Jr=this.Jr.insert(n,e):e.type===3&&r.type!==1?this.Jr=this.Jr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jr=this.Jr.remove(n):e.type===1&&r.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):W():this.Jr=this.Jr.insert(n,e)}Yr(){const e=[];return this.Jr.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fr{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Fr(e,n,Ur.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ao(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(){this.Xr=void 0,this.listeners=[]}}class TS{constructor(){this.queries=new Ks(e=>og(e),Ao),this.onlineState="Unknown",this.Zr=new Set}}async function bS(t,e){const n=G(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new IS),s)try{i.Xr=await n.onListen(r)}catch(o){const a=Bl(o,`Initialization of query '${bl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.eo(n.onlineState),i.Xr&&e.no(i.Xr)&&Hl(n)}async function SS(t,e){const n=G(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function AS(t,e){const n=G(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.no(s)&&(r=!0);o.Xr=s}}r&&Hl(n)}function CS(t,e,n){const r=G(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Hl(t){t.Zr.forEach(e=>{e.next()})}class RS{constructor(e,n,r){this.query=e,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=r||{}}no(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.io?this.oo(e)&&(this.so.next(e),n=!0):this.ao(e,this.onlineState)&&(this.co(e),n=!0),this.ro=e,n}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),n=!0),n}ao(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uo||!r)&&(!e.docs.isEmpty()||n==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(e){e=Fr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.key=e}}class em{constructor(e){this.key=e}}class NS{constructor(e,n){this.query=e,this._o=n,this.mo=null,this.current=!1,this.yo=ve(),this.mutatedKeys=ve(),this.po=ag(e),this.To=new Ur(this.po)}get Eo(){return this._o}Io(e,n){const r=n?n.Ao:new Jg,s=n?n.To:this.To;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=bo(this.query)&&s.size===this.query.limit?s.last():null,l=So(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),g=Co(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?y!==R&&(r.track({type:3,doc:g}),T=!0):this.Ro(f,g)||(r.track({type:2,doc:g}),T=!0,(c&&this.po(g,c)>0||l&&this.po(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),T=!0):f&&!g&&(r.track({type:1,doc:f}),T=!0,(c||l)&&(a=!0)),T&&(g?(o=o.add(g),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),bo(this.query)||So(this.query))for(;o.size>this.query.limit;){const u=bo(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{To:o,Ao:r,Ln:a,mutatedKeys:i}}Ro(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.To;this.To=e.To,this.mutatedKeys=e.mutatedKeys;const i=e.Ao.Yr();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(f)}(l.type,u.type)||this.po(l.doc,u.doc)),this.bo(r);const o=n?this.Po():[],a=this.yo.size===0&&this.current?1:0,c=a!==this.mo;return this.mo=a,i.length!==0||c?{snapshot:new Fr(this.query,e.To,s,i,e.mutatedKeys,a===0,c,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({To:this.To,Ao:new Jg,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.To.has(e)&&!this.To.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(n=>this._o=this._o.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=ve(),this.To.forEach(r=>{this.Vo(r.key)&&(this.yo=this.yo.add(r.key))});const n=[];return e.forEach(r=>{this.yo.has(r)||n.push(new em(r))}),this.yo.forEach(r=>{e.has(r)||n.push(new Zg(r))}),n}So(e){this._o=e.Gn,this.yo=ve();const n=this.Io(e.documents);return this.applyChanges(n,!0)}Do(){return Fr.fromInitialDocuments(this.query,this.To,this.mutatedKeys,this.mo===0)}}class kS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OS{constructor(e){this.key=e,this.Co=!1}}class DS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new Ks(a=>og(a),Ao),this.ko=new Map,this.$o=new Set,this.Oo=new Ke(q.comparator),this.Fo=new Map,this.Mo=new xl,this.Lo={},this.Bo=new Map,this.Uo=xr.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function PS(t,e){const n=HS(t);let r,s;const i=n.xo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Do();else{const o=await Gb(n.localStore,Fn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await MS(n,e,r,a==="current"),n.isPrimaryClient&&Kg(n.remoteStore,o)}return s}async function MS(t,e,n,r){t.Ko=(u,h,f)=>async function(g,y,R,T){let N=y.view.Io(R);N.Ln&&(N=await $g(g.localStore,y.query,!1).then(({documents:Y})=>y.view.Io(Y,N)));const V=T&&T.targetChanges.get(y.targetId),z=y.view.applyChanges(N,g.isPrimaryClient,V);return om(g,y.targetId,z.vo),z.snapshot}(t,u,h,f);const s=await $g(t.localStore,e,!0),i=new NS(e,s.Gn),o=i.Io(s.documents),a=Bs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);om(t,n,c.vo);const l=new kS(e,n,i);return t.xo.set(e,l),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function xS(t,e){const n=G(t),r=n.xo.get(e),s=n.ko.get(r.targetId);if(s.length>1)return n.ko.set(r.targetId,s.filter(i=>!Ao(i,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ml(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),zg(n.remoteStore,r.targetId),ql(n,r.targetId)}).catch(qs)):(ql(n,r.targetId),await Ml(n.localStore,r.targetId,!0))}async function LS(t,e,n){const r=qS(t);try{const s=await function(i,o){const a=G(i),c=ct.now(),l=o.reduce((h,f)=>h.add(f.key),ve());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(f=>{u=f;const g=[];for(const y of o){const R=ib(y,u.get(y.key));R!=null&&g.push(new Vn(y.key,R,eg(R.value.mapValue),Bt.exists(!0)))}return a.In.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Lo[i.currentUser.toKey()];c||(c=new Ke(oe)),c=c.insert(o,a),i.Lo[i.currentUser.toKey()]=c}(r,s.batchId,n),await Ws(r,s.changes),await jo(r.remoteStore)}catch(s){const i=Bl(s,"Failed to persist write");n.reject(i)}}async function tm(t,e){const n=G(t);try{const r=await Kb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fo.get(i);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Co=!0:s.modifiedDocuments.size>0?me(o.Co):s.removedDocuments.size>0&&(me(o.Co),o.Co=!1))}),await Ws(n,r,e)}catch(r){await qs(r)}}function nm(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xo.forEach((i,o)=>{const a=o.view.eo(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.eo(o)&&(c=!0)}),c&&Hl(a)}(r.eventManager,e),s.length&&r.No.Er(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function US(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fo.get(e),i=s&&s.key;if(i){let o=new Ke(q.comparator);o=o.insert(i,qe.newNoDocument(i,ie.min()));const a=ve().add(i),c=new xo(ie.min(),new Map,new Ue(oe),o,a);await tm(r,c),r.Oo=r.Oo.remove(i),r.Fo.delete(e),Kl(r)}else await Ml(r.localStore,e,!1).then(()=>ql(r,e,n)).catch(qs)}async function FS(t,e){const n=G(t),r=e.batch.batchId;try{const s=await qb(n.localStore,e);sm(n,r,null),rm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ws(n,s)}catch(s){await qs(s)}}async function VS(t,e,n){const r=G(t);try{const s=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.In.lookupMutationBatch(c,o).next(u=>(me(u!==null),l=u.keys(),a.In.removeMutationBatch(c,u))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,l))})}(r.localStore,e);sm(r,e,n),rm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ws(r,s)}catch(s){await qs(s)}}function rm(t,e){(t.Bo.get(e)||[]).forEach(n=>{n.resolve()}),t.Bo.delete(e)}function sm(t,e,n){const r=G(t);let s=r.Lo[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Lo[r.currentUser.toKey()]=s}}function ql(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(r=>{t.Mo.containsKey(r)||im(t,r)})}function im(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);n!==null&&(zg(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),Kl(t))}function om(t,e,n){for(const r of n)r instanceof Zg?(t.Mo.addReference(r.key,e),$S(t,r)):r instanceof em?($("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||im(t,r.key)):W()}function $S(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||($("SyncEngine","New document in limbo: "+n),t.$o.add(r),Kl(t))}function Kl(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new q(Ie.fromString(e)),r=t.Uo.next();t.Fo.set(r,new OS(n)),t.Oo=t.Oo.insert(n,r),Kg(t.remoteStore,new jn(Fn(ig(n.path)),r,2,gl.T))}}async function Ws(t,e,n){const r=G(t),s=[],i=[],o=[];r.xo.isEmpty()||(r.xo.forEach((a,c)=>{o.push(r.Ko(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Pl.kn(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.No.Er(s),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.Nn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Hs(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Un.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.Un=l.Un.insert(h,y)}}}(r.localStore,i))}async function jS(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await Fg(n.localStore,e);n.currentUser=e,function(s,i){s.Bo.forEach(o=>{o.forEach(a=>{a.reject(new F(I.CANCELLED,i))})}),s.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ws(n,r.Wn)}}function BS(t,e){const n=G(t),r=n.Fo.get(e);if(r&&r.Co)return ve().add(r.key);{let s=ve();const i=n.ko.get(e);if(!i)return s;for(const o of i){const a=n.xo.get(o);s=s.unionWith(a.view.Eo)}return s}}function HS(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=US.bind(null,e),e.No.Er=AS.bind(null,e.eventManager),e.No.jo=CS.bind(null,e.eventManager),e}function qS(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VS.bind(null,e),e}class KS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Fo(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return Hb(this.persistence,new jb,e.initialUser,this.N)}Go(e){return new eS(Ll.Ns,this.N)}Wo(e){return new nS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jS.bind(null,this.syncEngine),await ES(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new TS}createDatastore(e){const n=Fo(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new oS(s));var s;return function(i,o,a){return new lS(i,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>nm(this.syncEngine,a,0),o=Bg.bt()?new Bg:new rS,new hS(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new DS(r,s,i,o,a,c);return l&&(u.qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);$("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await zs(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=tt.UNAUTHENTICATED,this.clientId=zp.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{$("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=Bl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function YS(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function QS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XS(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>async function(i,o){const a=G(i);a.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const c=Bn(a);a.Kr.add(3),await zs(a),c&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await Vo(a)}(e.remoteStore,s)),t.onlineComponents=e}async function XS(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await YS(t,new KS)),t.offlineComponents}async function am(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await QS(t,new zS)),t.onlineComponents}function JS(t){return am(t).then(e=>e.syncEngine)}async function ZS(t){const e=await am(t),n=e.eventManager;return n.onListen=PS.bind(null,e.syncEngine),n.onUnlisten=xS.bind(null,e.syncEngine),n}function eA(t,e,n={}){const r=new un;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new WS({next:h=>{i.enqueueAndForget(()=>SS(s,u)),h.fromCache&&a.source==="server"?c.reject(new F(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new RS(o,l,{includeMetadataChanges:!0,uo:!0});return bS(s,u)}(await ZS(t),t.asyncQueue,e,n,r)),r.promise}class tA{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Gs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t,e,n){if(!n)throw new F(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nA(t,e,n,r){if(e===!0&&r===!0)throw new F(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function um(t){if(!q.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hm(t){if(q.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Ys(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zl(t);throw new F(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fm({}),this._settingsFrozen=!1,e instanceof Gs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new F(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gs(r.options.projectId)}(e))}get app(){if(!this._app)throw new F(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fm(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new CT;switch(n.type){case"gapi":const r=n.client;return me(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new kT(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new F(I.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=cm.get(e);n&&($("ComponentProvider","Removing Datastore"),cm.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class Bo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bo(this.firestore,e,this._query)}}class dn extends Bo{constructor(e,n,r){super(e,n,ig(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new q(e))}withConverter(e){return new dn(this.firestore,e,this._path)}}function jA(t,e,...n){if(t=Ye(t),lm("collection","path",e),t instanceof Wl){const r=Ie.fromString(e,...n);return hm(r),new dn(t,null,r)}{if(!(t instanceof mt||t instanceof dn))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return hm(r),new dn(t.firestore,null,r)}}function BA(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=zp.I()),lm("doc","path",e),t instanceof Wl){const r=Ie.fromString(e,...n);return um(r),new mt(t,null,new q(r))}{if(!(t instanceof mt||t instanceof dn))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return um(r),new mt(t.firestore,t instanceof dn?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Hg(this,"async_queue_retry"),this.Ta=()=>{const n=Ul();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=Ul();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ea(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=Ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ta)}}enqueue(e){if(this.Ea(),this.wa)return new Promise(()=>{});const n=new un;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!Hs(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(r=>{this.ma=r,this.ga=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ga=!1,r))));return this.fa=n,n}enqueueAfterDelay(e,n,r){this.Ea(),this.pa.indexOf(e)>-1&&(n=0);const s=jl.createAndSchedule(this,e,n,r,i=>this.Ra(i));return this._a.push(s),s}Ea(){this.ma&&W()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}class Ho extends Wl{constructor(e,n){super(e,n),this.type="firestore",this._queue=new rA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||dm(this),this._firestoreClient.terminate()}}function HA(t=Uf()){return ac(t,"firestore").getImmediate()}function Gl(t){return t._firestoreClient||dm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dm(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new tA(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new GS(t._credentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vr(He.fromBase64String(e))}catch(n){throw new F(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vr(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=/^__.*__$/;class iA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Po(e,this.data,n,this.fieldTransforms)}}class pm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class zo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new zo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Ca({path:r,xa:!1});return s.ka(e),s}$a(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Ca({path:r,xa:!1});return s.Sa(),s}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Go(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(e.length===0)throw this.Fa("Document fields must not be empty");if(gm(this.Da)&&sA.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class oA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||Fo(e)}Ba(e,n,r,s=!1){return new zo({Da:e,methodName:n,La:r,path:nt.emptyPath(),xa:!1,Ma:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function mm(t){const e=t._freezeSettings(),n=Fo(t._databaseId);return new oA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ym(t,e,n,r,s,i={}){const o=t.Ba(i.merge||i.mergeFields?2:0,e,n,s);Ql("Data must be an object, but it was:",o,r);const a=vm(r,o);let c,l;if(i.merge)c=new xs(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Xl(e,h,n);if(!o.contains(f))throw new F(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);_m(u,f)||u.push(f)}c=new xs(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new iA(new lt(a),c,l)}class Wo extends Ko{_toFieldTransform(e){if(e.Da!==2)throw e.Da===1?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wo}}function aA(t,e,n){return new zo({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class cA extends Ko{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=aA(this,e,!0),r=this.Ua.map(i=>Qs(i,n)),s=new Dr(r);return new tb(e.path,s)}isEqual(e){return this===e}}function lA(t,e,n,r){const s=t.Ba(1,e,n);Ql("Data must be an object, but it was:",s,r);const i=[],o=lt.empty();Ln(r,(c,l)=>{const u=Jl(e,c,n);l=Ye(l);const h=s.$a(u);if(l instanceof Wo)i.push(u);else{const f=Qs(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new xs(i);return new pm(o,a,s.fieldTransforms)}function uA(t,e,n,r,s,i){const o=t.Ba(1,e,n),a=[Xl(e,r,n)],c=[s];if(i.length%2!=0)throw new F(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Xl(e,i[f])),c.push(i[f+1]);const l=[],u=lt.empty();for(let f=a.length-1;f>=0;--f)if(!_m(l,a[f])){const g=a[f];let y=c[f];y=Ye(y);const R=o.$a(g);if(y instanceof Wo)l.push(g);else{const T=Qs(y,R);T!=null&&(l.push(g),u.set(g,T))}}const h=new xs(l);return new pm(u,h,o.fieldTransforms)}function Qs(t,e){if(wm(t=Ye(t)))return Ql("Unsupported field value:",e,t),vm(t,e);if(t instanceof Ko)return function(n,r){if(!gm(r.Da))throw r.Fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&e.Da!==4)throw e.Fa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Qs(o,r.Oa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return JT(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ct.fromDate(n);return{timestampValue:Uo(r.N,s)}}if(n instanceof ct){const s=new ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Uo(r.N,s)}}if(n instanceof Yl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Vr)return{bytesValue:Ng(r.N,n._byteString)};if(n instanceof mt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.Fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Cl(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fa(`Unsupported field value: ${zl(n)}`)}(t,e)}function vm(t,e){const n={};return Gp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ln(t,(r,s)=>{const i=Qs(s,e.Na(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function wm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof Yl||t instanceof Vr||t instanceof mt||t instanceof Ko)}function Ql(t,e,n){if(!wm(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=zl(n);throw r==="an object"?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function Xl(t,e,n){if((e=Ye(e))instanceof qo)return e._internalPath;if(typeof e=="string")return Jl(t,e);throw Go("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const hA=new RegExp("[~\\*/\\[\\]]");function Jl(t,e,n){if(e.search(hA)>=0)throw Go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qo(...e.split("."))._internalPath}catch{throw Go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Go(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new F(I.INVALID_ARGUMENT,a+t+c)}function _m(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Im("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fA extends Em{data(){return super.data()}}function Im(t,e){return typeof e=="string"?Jl(t,e):e instanceof qo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dA extends Em{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Im("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Qo extends dA{data(e={}){return super.data(e)}}class pA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Yo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Qo(this._firestore,this._userDataWriter,r.key,r,new Yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Qo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Yo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Qo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Yo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:gA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){if(So(t)&&t.explicitOrderBy.length===0)throw new F(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function qA(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{convertValue(e,n="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const r={};return Ln(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Yl(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ls(e));default:return null}}convertTimestamp(e){const n=hn(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);me(Lg(r));const s=new Gs(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=mm(e)}set(e,n,r){this._verifyNotCommitted();const s=Zl(e,this._firestore),i=Tm(s.converter,n,r),o=ym(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Bt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Zl(e,this._firestore);let o;return o=typeof(n=Ye(n))=="string"||n instanceof qo?uA(this._dataReader,"WriteBatch.update",i._key,n,r,s):lA(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Bt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Zl(e,this._firestore);return this._mutations=this._mutations.concat(new _g(n._key,Bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Zl(t,e){if((t=Ye(t)).firestore!==e)throw new F(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}class wA extends yA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function KA(t){t=Ys(t,Bo);const e=Ys(t.firestore,Ho),n=Gl(e),r=new wA(e);return mA(t._query),eA(n,t._query).then(s=>new pA(e,r,t,s))}function zA(t,e,n){t=Ys(t,mt);const r=Ys(t.firestore,Ho),s=Tm(t.converter,e,n);return bm(r,[ym(mm(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Bt.none())])}function bm(t,e){return function(n,r){const s=new un;return n.asyncQueue.enqueueAndForget(async()=>LS(await JS(n),r,s)),s.promise}(Gl(t),e)}function WA(...t){return new cA("arrayUnion",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){return Gl(t=Ys(t,Ho)),new vA(t,e=>bm(t,e))}var _A;(function(t){Cr=t})(as),os(new mr("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Ho(n,new RT(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),en(Hp,"3.1.1",_A),en(Hp,"3.1.1","esm2017");export{bt as A,kA as B,IA as C,Kr as D,RA as E,ea as F,Iy as G,qA as M,HA as O,WA as P,GA as S,AA as a,gh as b,CA as c,lv as d,my as e,xA as f,zu as g,pt as h,TA as i,UA as j,$A as k,jA as l,KA as m,BA as n,SA as o,zA as p,VA as q,bA as r,FA as s,PA as t,MA as u,Vh as v,NA as w,DA as x,LA as y,OA as z};
