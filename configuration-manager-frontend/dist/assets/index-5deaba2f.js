(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function _i(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ie={},en=[],$e=()=>{},gu=()=>!1,_u=/^on[^a-z]/,Kr=e=>_u.test(e),yi=e=>e.startsWith("onUpdate:"),_e=Object.assign,bi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yu=Object.prototype.hasOwnProperty,q=(e,t)=>yu.call(e,t),B=Array.isArray,tn=e=>qr(e)==="[object Map]",ja=e=>qr(e)==="[object Set]",j=e=>typeof e=="function",pe=e=>typeof e=="string",Ei=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Wa=e=>oe(e)&&j(e.then)&&j(e.catch),Va=Object.prototype.toString,qr=e=>Va.call(e),bu=e=>qr(e).slice(8,-1),za=e=>qr(e)==="[object Object]",vi=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,br=_i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Eu=/-(\w)/g,Ze=Gr(e=>e.replace(Eu,(t,n)=>n?n.toUpperCase():"")),vu=/\B([A-Z])/g,gn=Gr(e=>e.replace(vu,"-$1").toLowerCase()),Jr=Gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Es=Gr(e=>e?`on${Jr(e)}`:""),$n=(e,t)=>!Object.is(e,t),Er=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Hs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let co;const js=()=>co||(co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wi(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=pe(r)?Ru(r):wi(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(pe(e))return e;if(oe(e))return e}}const wu=/;(?![^(]*\))/g,Iu=/:([^]+)/,Tu=/\/\*[^]*?\*\//g;function Ru(e){const t={};return e.replace(Tu,"").split(wu).forEach(n=>{if(n){const r=n.split(Iu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ii(e){let t="";if(pe(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=Ii(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Su="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Au=_i(Su);function Ka(e){return!!e||e===""}const Le=e=>pe(e)?e:e==null?"":B(e)||oe(e)&&(e.toString===Va||!j(e.toString))?JSON.stringify(e,qa,2):String(e),qa=(e,t)=>t&&t.__v_isRef?qa(e,t.value):tn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ja(t)?{[`Set(${t.size})`]:[...t.values()]}:oe(t)&&!B(t)&&!za(t)?String(t):t;let Pe;class Ga{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!t&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ja(e){return new Ga(e)}function Cu(e,t=Pe){t&&t.active&&t.effects.push(e)}function Ya(){return Pe}function Ou(e){Pe&&Pe.cleanups.push(e)}const Ti=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Qa=e=>(e.w&Ct)>0,Xa=e=>(e.n&Ct)>0,Pu=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ct},ku=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Qa(s)&&!Xa(s)?s.delete(e):t[n++]=s,s.w&=~Ct,s.n&=~Ct}t.length=n}},Dr=new WeakMap;let Cn=0,Ct=1;const Ws=30;let Fe;const Bt=Symbol(""),Vs=Symbol("");class Ri{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cu(this,r)}run(){if(!this.active)return this.fn();let t=Fe,n=It;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Fe,Fe=this,It=!0,Ct=1<<++Cn,Cn<=Ws?Pu(this):lo(this),this.fn()}finally{Cn<=Ws&&ku(this),Ct=1<<--Cn,Fe=this.parent,It=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fe===this?this.deferStop=!0:this.active&&(lo(this),this.onStop&&this.onStop(),this.active=!1)}}function lo(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let It=!0;const Za=[];function _n(){Za.push(It),It=!1}function yn(){const e=Za.pop();It=e===void 0?!0:e}function Ae(e,t,n){if(It&&Fe){let r=Dr.get(e);r||Dr.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Ti()),ec(s)}}function ec(e,t){let n=!1;Cn<=Ws?Xa(e)||(e.n|=Ct,n=!Qa(e)):n=!e.has(Fe),n&&(e.add(Fe),Fe.deps.push(e))}function at(e,t,n,r,s,i){const o=Dr.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&B(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":B(e)?vi(n)&&a.push(o.get("length")):(a.push(o.get(Bt)),tn(e)&&a.push(o.get(Vs)));break;case"delete":B(e)||(a.push(o.get(Bt)),tn(e)&&a.push(o.get(Vs)));break;case"set":tn(e)&&a.push(o.get(Bt));break}if(a.length===1)a[0]&&zs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);zs(Ti(c))}}function zs(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&uo(r);for(const r of n)r.computed||uo(r)}function uo(e,t){(e!==Fe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Nu(e,t){var n;return(n=Dr.get(e))==null?void 0:n.get(t)}const Du=_i("__proto__,__v_isRef,__isVue"),tc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ei)),xu=Si(),Mu=Si(!1,!0),Lu=Si(!0),fo=Uu();function Uu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_n();const r=J(this)[t].apply(this,n);return yn(),r}}),e}function Fu(e){const t=J(this);return Ae(t,"has",e),t.hasOwnProperty(e)}function Si(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?ef:oc:t?ic:sc).get(r))return r;const o=B(r);if(!e){if(o&&q(fo,s))return Reflect.get(fo,s,i);if(s==="hasOwnProperty")return Fu}const a=Reflect.get(r,s,i);return(Ei(s)?tc.has(s):Du(s))||(e||Ae(r,"get",s),t)?a:ue(a)?o&&vi(s)?a:a.value:oe(a)?e?cc(a):er(a):a}}const Bu=nc(),$u=nc(!0);function nc(e=!1){return function(n,r,s,i){let o=n[r];if(cn(o)&&ue(o)&&!ue(s))return!1;if(!e&&(!xr(s)&&!cn(s)&&(o=J(o),s=J(s)),!B(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=B(n)&&vi(r)?Number(r)<n.length:q(n,r),c=Reflect.set(n,r,s,i);return n===J(i)&&(a?$n(s,o)&&at(n,"set",r,s):at(n,"add",r,s)),c}}function Hu(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&at(e,"delete",t,void 0),r}function ju(e,t){const n=Reflect.has(e,t);return(!Ei(t)||!tc.has(t))&&Ae(e,"has",t),n}function Wu(e){return Ae(e,"iterate",B(e)?"length":Bt),Reflect.ownKeys(e)}const rc={get:xu,set:Bu,deleteProperty:Hu,has:ju,ownKeys:Wu},Vu={get:Lu,set(e,t){return!0},deleteProperty(e,t){return!0}},zu=_e({},rc,{get:Mu,set:$u}),Ai=e=>e,Yr=e=>Reflect.getPrototypeOf(e);function dr(e,t,n=!1,r=!1){e=e.__v_raw;const s=J(e),i=J(t);n||(t!==i&&Ae(s,"get",t),Ae(s,"get",i));const{has:o}=Yr(s),a=r?Ai:n?Pi:Hn;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function hr(e,t=!1){const n=this.__v_raw,r=J(n),s=J(e);return t||(e!==s&&Ae(r,"has",e),Ae(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function pr(e,t=!1){return e=e.__v_raw,!t&&Ae(J(e),"iterate",Bt),Reflect.get(e,"size",e)}function ho(e){e=J(e);const t=J(this);return Yr(t).has.call(t,e)||(t.add(e),at(t,"add",e,e)),this}function po(e,t){t=J(t);const n=J(this),{has:r,get:s}=Yr(n);let i=r.call(n,e);i||(e=J(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?$n(t,o)&&at(n,"set",e,t):at(n,"add",e,t),this}function mo(e){const t=J(this),{has:n,get:r}=Yr(t);let s=n.call(t,e);s||(e=J(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&at(t,"delete",e,void 0),i}function go(){const e=J(this),t=e.size!==0,n=e.clear();return t&&at(e,"clear",void 0,void 0),n}function mr(e,t){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=t?Ai:e?Pi:Hn;return!e&&Ae(a,"iterate",Bt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function gr(e,t,n){return function(...r){const s=this.__v_raw,i=J(s),o=tn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?Ai:t?Pi:Hn;return!t&&Ae(i,"iterate",c?Vs:Bt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function ft(e){return function(...t){return e==="delete"?!1:this}}function Ku(){const e={get(i){return dr(this,i)},get size(){return pr(this)},has:hr,add:ho,set:po,delete:mo,clear:go,forEach:mr(!1,!1)},t={get(i){return dr(this,i,!1,!0)},get size(){return pr(this)},has:hr,add:ho,set:po,delete:mo,clear:go,forEach:mr(!1,!0)},n={get(i){return dr(this,i,!0)},get size(){return pr(this,!0)},has(i){return hr.call(this,i,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:mr(!0,!1)},r={get(i){return dr(this,i,!0,!0)},get size(){return pr(this,!0)},has(i){return hr.call(this,i,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:mr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=gr(i,!1,!1),n[i]=gr(i,!0,!1),t[i]=gr(i,!1,!0),r[i]=gr(i,!0,!0)}),[e,n,t,r]}const[qu,Gu,Ju,Yu]=Ku();function Ci(e,t){const n=t?e?Yu:Ju:e?Gu:qu;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const Qu={get:Ci(!1,!1)},Xu={get:Ci(!1,!0)},Zu={get:Ci(!0,!1)},sc=new WeakMap,ic=new WeakMap,oc=new WeakMap,ef=new WeakMap;function tf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nf(e){return e.__v_skip||!Object.isExtensible(e)?0:tf(bu(e))}function er(e){return cn(e)?e:Oi(e,!1,rc,Qu,sc)}function ac(e){return Oi(e,!1,zu,Xu,ic)}function cc(e){return Oi(e,!0,Vu,Zu,oc)}function Oi(e,t,n,r,s){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=nf(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Tt(e){return cn(e)?Tt(e.__v_raw):!!(e&&e.__v_isReactive)}function cn(e){return!!(e&&e.__v_isReadonly)}function xr(e){return!!(e&&e.__v_isShallow)}function lc(e){return Tt(e)||cn(e)}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function Qr(e){return Nr(e,"__v_skip",!0),e}const Hn=e=>oe(e)?er(e):e,Pi=e=>oe(e)?cc(e):e;function uc(e){It&&Fe&&(e=J(e),ec(e.dep||(e.dep=Ti())))}function fc(e,t){e=J(e);const n=e.dep;n&&zs(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function wt(e){return dc(e,!1)}function rf(e){return dc(e,!0)}function dc(e,t){return ue(e)?e:new sf(e,t)}class sf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:Hn(t)}get value(){return uc(this),this._value}set value(t){const n=this.__v_isShallow||xr(t)||cn(t);t=n?t:J(t),$n(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Hn(t),fc(this))}}function nn(e){return ue(e)?e.value:e}const of={get:(e,t,n)=>nn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function hc(e){return Tt(e)?e:new Proxy(e,of)}function af(e){const t=B(e)?new Array(e.length):{};for(const n in e)t[n]=lf(e,n);return t}class cf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Nu(J(this._object),this._key)}}function lf(e,t,n){const r=e[t];return ue(r)?r:new cf(e,t,n)}class uf{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ri(t,()=>{this._dirty||(this._dirty=!0,fc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=J(this);return uc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ff(e,t,n=!1){let r,s;const i=j(e);return i?(r=e,s=$e):(r=e.get,s=e.set),new uf(r,s,i||!s,n)}function Rt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){Xr(i,t,n)}return s}function He(e,t,n,r){if(j(e)){const i=Rt(e,t,n,r);return i&&Wa(i)&&i.catch(o=>{Xr(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(He(e[i],t,n,r));return s}function Xr(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Rt(c,null,10,[e,o,a]);return}}df(e,n,s,r)}function df(e,t,n,r=!0){console.error(e)}let jn=!1,Ks=!1;const Ee=[];let Ge=0;const rn=[];let rt=null,Mt=0;const pc=Promise.resolve();let ki=null;function Ni(e){const t=ki||pc;return e?t.then(this?e.bind(this):e):t}function hf(e){let t=Ge+1,n=Ee.length;for(;t<n;){const r=t+n>>>1;Wn(Ee[r])<e?t=r+1:n=r}return t}function Di(e){(!Ee.length||!Ee.includes(e,jn&&e.allowRecurse?Ge+1:Ge))&&(e.id==null?Ee.push(e):Ee.splice(hf(e.id),0,e),mc())}function mc(){!jn&&!Ks&&(Ks=!0,ki=pc.then(_c))}function pf(e){const t=Ee.indexOf(e);t>Ge&&Ee.splice(t,1)}function mf(e){B(e)?rn.push(...e):(!rt||!rt.includes(e,e.allowRecurse?Mt+1:Mt))&&rn.push(e),mc()}function _o(e,t=jn?Ge+1:0){for(;t<Ee.length;t++){const n=Ee[t];n&&n.pre&&(Ee.splice(t,1),t--,n())}}function gc(e){if(rn.length){const t=[...new Set(rn)];if(rn.length=0,rt){rt.push(...t);return}for(rt=t,rt.sort((n,r)=>Wn(n)-Wn(r)),Mt=0;Mt<rt.length;Mt++)rt[Mt]();rt=null,Mt=0}}const Wn=e=>e.id==null?1/0:e.id,gf=(e,t)=>{const n=Wn(e)-Wn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function _c(e){Ks=!1,jn=!0,Ee.sort(gf);const t=$e;try{for(Ge=0;Ge<Ee.length;Ge++){const n=Ee[Ge];n&&n.active!==!1&&Rt(n,null,14)}}finally{Ge=0,Ee.length=0,gc(),jn=!1,ki=null,(Ee.length||rn.length)&&_c()}}function _f(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ie;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||ie;p&&(s=n.map(g=>pe(g)?g.trim():g)),d&&(s=n.map(Hs))}let a,c=r[a=Es(t)]||r[a=Es(Ze(t))];!c&&i&&(c=r[a=Es(gn(t))]),c&&He(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,He(l,e,6,s)}}function yc(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!j(e)){const c=l=>{const u=yc(l,t,!0);u&&(a=!0,_e(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(oe(e)&&r.set(e,null),null):(B(i)?i.forEach(c=>o[c]=null):_e(o,i),oe(e)&&r.set(e,o),o)}function Zr(e,t){return!e||!Kr(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,gn(t))||q(e,t))}let ke=null,es=null;function Mr(e){const t=ke;return ke=e,es=e&&e.type.__scopeId||null,t}function bc(e){es=e}function Ec(){es=null}function yf(e,t=ke,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Oo(-1);const i=Mr(t);let o;try{o=e(...s)}finally{Mr(i),r._d&&Oo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function vs(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:p,setupState:g,ctx:_,inheritAttrs:w}=e;let D,R;const A=Mr(e);try{if(n.shapeFlag&4){const N=s||r;D=qe(u.call(N,N,d,i,g,p,_)),R=c}else{const N=t;D=qe(N.length>1?N(i,{attrs:c,slots:a,emit:l}):N(i,null)),R=t.props?c:bf(c)}}catch(N){xn.length=0,Xr(N,e,1),D=ve(jt)}let L=D;if(R&&w!==!1){const N=Object.keys(R),{shapeFlag:Q}=L;N.length&&Q&7&&(o&&N.some(yi)&&(R=Ef(R,o)),L=ln(L,R))}return n.dirs&&(L=ln(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),D=L,Mr(A),D}const bf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Kr(n))&&((t||(t={}))[n]=e[n]);return t},Ef=(e,t)=>{const n={};for(const r in e)(!yi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function vf(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?yo(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Zr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?yo(r,o,l):!0:!!o;return!1}function yo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Zr(n,i))return!0}return!1}function wf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const If=e=>e.__isSuspense;function Tf(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):mf(e)}const _r={};function Nn(e,t,n){return vc(e,t,n)}function vc(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ie){var a;const c=Ya()===((a=ge)==null?void 0:a.scope)?ge:null;let l,u=!1,d=!1;if(ue(e)?(l=()=>e.value,u=xr(e)):Tt(e)?(l=()=>e,r=!0):B(e)?(d=!0,u=e.some(N=>Tt(N)||xr(N)),l=()=>e.map(N=>{if(ue(N))return N.value;if(Tt(N))return Ft(N);if(j(N))return Rt(N,c,2)})):j(e)?t?l=()=>Rt(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),He(e,c,3,[g])}:l=$e,t&&r){const N=l;l=()=>Ft(N())}let p,g=N=>{p=A.onStop=()=>{Rt(N,c,4)}},_;if(Kn)if(g=$e,t?n&&He(t,c,3,[l(),d?[]:void 0,g]):l(),s==="sync"){const N=_d();_=N.__watcherHandles||(N.__watcherHandles=[])}else return $e;let w=d?new Array(e.length).fill(_r):_r;const D=()=>{if(A.active)if(t){const N=A.run();(r||u||(d?N.some((Q,ce)=>$n(Q,w[ce])):$n(N,w)))&&(p&&p(),He(t,c,3,[N,w===_r?void 0:d&&w[0]===_r?[]:w,g]),w=N)}else A.run()};D.allowRecurse=!!t;let R;s==="sync"?R=D:s==="post"?R=()=>Se(D,c&&c.suspense):(D.pre=!0,c&&(D.id=c.uid),R=()=>Di(D));const A=new Ri(l,R);t?n?D():w=A.run():s==="post"?Se(A.run.bind(A),c&&c.suspense):A.run();const L=()=>{A.stop(),c&&c.scope&&bi(c.scope.effects,A)};return _&&_.push(L),L}function Rf(e,t,n){const r=this.proxy,s=pe(e)?e.includes(".")?wc(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=ge;un(this);const a=vc(s,i.bind(r),n);return o?un(o):$t(),a}function wc(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ft(e,t){if(!oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))Ft(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Ft(e[n],t);else if(ja(e)||tn(e))e.forEach(n=>{Ft(n,t)});else if(za(e))for(const n in e)Ft(e[n],t);return e}function In(e,t){const n=ke;if(n===null)return e;const r=is(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=ie]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&Ft(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Nt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(_n(),He(c,n,8,[e.el,a,e,t]),yn())}}function ts(e,t){return j(e)?(()=>_e({name:e.name},t,{setup:e}))():e}const vr=e=>!!e.type.__asyncLoader,Ic=e=>e.type.__isKeepAlive;function Sf(e,t){Tc(e,"a",t)}function Af(e,t){Tc(e,"da",t)}function Tc(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ns(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Ic(s.parent.vnode)&&Cf(r,t,n,s),s=s.parent}}function Cf(e,t,n,r){const s=ns(t,e,r,!0);Ac(()=>{bi(r[t],s)},n)}function ns(e,t,n=ge,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;_n(),un(n);const a=He(t,n,e,o);return $t(),yn(),a});return r?s.unshift(i):s.push(i),i}}const lt=e=>(t,n=ge)=>(!Kn||e==="sp")&&ns(e,(...r)=>t(...r),n),Rc=lt("bm"),Sc=lt("m"),Of=lt("bu"),Pf=lt("u"),kf=lt("bum"),Ac=lt("um"),Nf=lt("sp"),Df=lt("rtg"),xf=lt("rtc");function Mf(e,t=ge){ns("ec",e,t)}const Cc="components";function qs(e,t){return Uf(Cc,e,!0,t)||e}const Lf=Symbol.for("v-ndc");function Uf(e,t,n=!0,r=!1){const s=ke||ge;if(s){const i=s.type;if(e===Cc){const a=pd(i,!1);if(a&&(a===t||a===Ze(t)||a===Jr(Ze(t))))return i}const o=bo(s[e]||i[e],t)||bo(s.appContext[e],t);return!o&&r?i:o}}function bo(e,t){return e&&(e[t]||e[Ze(t)]||e[Jr(Ze(t))])}function Eo(e,t,n,r){let s;const i=n&&n[r];if(B(e)||pe(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(oe(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Gs=e=>e?$c(e)?is(e)||e.proxy:Gs(e.parent):null,Dn=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gs(e.parent),$root:e=>Gs(e.root),$emit:e=>e.emit,$options:e=>xi(e),$forceUpdate:e=>e.f||(e.f=()=>Di(e.update)),$nextTick:e=>e.n||(e.n=Ni.bind(e.proxy)),$watch:e=>Rf.bind(e)}),ws=(e,t)=>e!==ie&&!e.__isScriptSetup&&q(e,t),Ff={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ws(r,t))return o[t]=1,r[t];if(s!==ie&&q(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&q(l,t))return o[t]=3,i[t];if(n!==ie&&q(n,t))return o[t]=4,n[t];Js&&(o[t]=0)}}const u=Dn[t];let d,p;if(u)return t==="$attrs"&&Ae(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==ie&&q(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return ws(s,t)?(s[t]=n,!0):r!==ie&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==ie&&q(e,o)||ws(t,o)||(a=i[0])&&q(a,o)||q(r,o)||q(Dn,o)||q(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function vo(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Js=!0;function Bf(e){const t=xi(e),n=e.proxy,r=e.ctx;Js=!1,t.beforeCreate&&wo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:_,activated:w,deactivated:D,beforeDestroy:R,beforeUnmount:A,destroyed:L,unmounted:N,render:Q,renderTracked:ce,renderTriggered:he,errorCaptured:K,serverPrefetch:V,expose:ae,inheritAttrs:ye,components:Ce,directives:Ne,filters:kt}=t;if(l&&$f(l,r,null),o)for(const ne in o){const X=o[ne];j(X)&&(r[ne]=X.bind(n))}if(s){const ne=s.call(n,n);oe(ne)&&(e.data=er(ne))}if(Js=!0,i)for(const ne in i){const X=i[ne],tt=j(X)?X.bind(n,n):j(X.get)?X.get.bind(n,n):$e,ut=!j(X)&&j(X.set)?X.set.bind(n):$e,Ve=Te({get:tt,set:ut});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:Re=>Ve.value=Re})}if(a)for(const ne in a)Oc(a[ne],r,n,ne);if(c){const ne=j(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(X=>{wr(X,ne[X])})}u&&wo(u,e,"c");function Y(ne,X){B(X)?X.forEach(tt=>ne(tt.bind(n))):X&&ne(X.bind(n))}if(Y(Rc,d),Y(Sc,p),Y(Of,g),Y(Pf,_),Y(Sf,w),Y(Af,D),Y(Mf,K),Y(xf,ce),Y(Df,he),Y(kf,A),Y(Ac,N),Y(Nf,V),B(ae))if(ae.length){const ne=e.exposed||(e.exposed={});ae.forEach(X=>{Object.defineProperty(ne,X,{get:()=>n[X],set:tt=>n[X]=tt})})}else e.exposed||(e.exposed={});Q&&e.render===$e&&(e.render=Q),ye!=null&&(e.inheritAttrs=ye),Ce&&(e.components=Ce),Ne&&(e.directives=Ne)}function $f(e,t,n=$e){B(e)&&(e=Ys(e));for(const r in e){const s=e[r];let i;oe(s)?"default"in s?i=Ye(s.from||r,s.default,!0):i=Ye(s.from||r):i=Ye(s),ue(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function wo(e,t,n){He(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oc(e,t,n,r){const s=r.includes(".")?wc(n,r):()=>n[r];if(pe(e)){const i=t[e];j(i)&&Nn(s,i)}else if(j(e))Nn(s,e.bind(n));else if(oe(e))if(B(e))e.forEach(i=>Oc(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Nn(s,i,e)}}function xi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Lr(c,l,o,!0)),Lr(c,t,o)),oe(t)&&i.set(t,c),c}function Lr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Lr(e,i,n,!0),s&&s.forEach(o=>Lr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Hf[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Hf={data:Io,props:To,emits:To,methods:On,computed:On,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:On,directives:On,watch:Wf,provide:Io,inject:jf};function Io(e,t){return t?e?function(){return _e(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function jf(e,t){return On(Ys(e),Ys(t))}function Ys(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function On(e,t){return e?_e(Object.create(null),e,t):t}function To(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:_e(Object.create(null),vo(e),vo(t??{})):t}function Wf(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const r in t)n[r]=Ie(e[r],t[r]);return n}function Pc(){return{app:null,config:{isNativeTag:gu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vf=0;function zf(e,t){return function(r,s=null){j(r)||(r=_e({},r)),s!=null&&!oe(s)&&(s=null);const i=Pc(),o=new Set;let a=!1;const c=i.app={_uid:Vf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...u)):j(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const p=ve(r,s);return p.appContext=i,u&&t?t(p,l):e(p,l,d),a=!0,c._container=l,l.__vue_app__=c,is(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Vn=c;try{return l()}finally{Vn=null}}};return c}}let Vn=null;function wr(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function Ye(e,t,n=!1){const r=ge||ke;if(r||Vn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Vn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function Kf(){return!!(ge||ke||Vn)}function qf(e,t,n,r=!1){const s={},i={};Nr(i,ss,1),e.propsDefaults=Object.create(null),kc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:ac(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Gf(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=J(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Zr(e.emitsOptions,p))continue;const g=t[p];if(c)if(q(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const _=Ze(p);s[_]=Qs(c,a,_,g,e,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{kc(e,t,s,i)&&(l=!0);let u;for(const d in a)(!t||!q(t,d)&&((u=gn(d))===d||!q(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Qs(c,a,d,void 0,e,!0)):delete s[d]);if(i!==a)for(const d in i)(!t||!q(t,d))&&(delete i[d],l=!0)}l&&at(e,"set","$attrs")}function kc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(br(c))continue;const l=t[c];let u;s&&q(s,u=Ze(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Zr(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||ie;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Qs(s,c,d,l[d],e,!q(l,d))}}return o}function Qs(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(un(s),r=l[n]=c.call(null,t),$t())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===gn(n))&&(r=!0))}return r}function Nc(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!j(e)){const u=d=>{c=!0;const[p,g]=Nc(d,t,!0);_e(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return oe(e)&&r.set(e,en),en;if(B(i))for(let u=0;u<i.length;u++){const d=Ze(i[u]);Ro(d)&&(o[d]=ie)}else if(i)for(const u in i){const d=Ze(u);if(Ro(d)){const p=i[u],g=o[d]=B(p)||j(p)?{type:p}:_e({},p);if(g){const _=Co(Boolean,g.type),w=Co(String,g.type);g[0]=_>-1,g[1]=w<0||_<w,(_>-1||q(g,"default"))&&a.push(d)}}}const l=[o,a];return oe(e)&&r.set(e,l),l}function Ro(e){return e[0]!=="$"}function So(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ao(e,t){return So(e)===So(t)}function Co(e,t){return B(t)?t.findIndex(n=>Ao(n,e)):j(t)&&Ao(t,e)?0:-1}const Dc=e=>e[0]==="_"||e==="$stable",Mi=e=>B(e)?e.map(qe):[qe(e)],Jf=(e,t,n)=>{if(t._n)return t;const r=yf((...s)=>Mi(t(...s)),n);return r._c=!1,r},xc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Dc(s))continue;const i=e[s];if(j(i))t[s]=Jf(s,i,r);else if(i!=null){const o=Mi(i);t[s]=()=>o}}},Mc=(e,t)=>{const n=Mi(t);e.slots.default=()=>n},Yf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=J(t),Nr(t,"_",n)):xc(t,e.slots={})}else e.slots={},t&&Mc(e,t);Nr(e.slots,ss,1)},Qf=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ie;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(_e(s,t),!n&&a===1&&delete s._):(i=!t.$stable,xc(t,s)),o=t}else t&&(Mc(e,t),o={default:1});if(i)for(const a in s)!Dc(a)&&!(a in o)&&delete s[a]};function Xs(e,t,n,r,s=!1){if(B(e)){e.forEach((p,g)=>Xs(p,t&&(B(t)?t[g]:t),n,r,s));return}if(vr(r)&&!s)return;const i=r.shapeFlag&4?is(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(pe(l)?(u[l]=null,q(d,l)&&(d[l]=null)):ue(l)&&(l.value=null)),j(c))Rt(c,a,12,[o,u]);else{const p=pe(c),g=ue(c);if(p||g){const _=()=>{if(e.f){const w=p?q(d,c)?d[c]:u[c]:c.value;s?B(w)&&bi(w,i):B(w)?w.includes(i)||w.push(i):p?(u[c]=[i],q(d,c)&&(d[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else p?(u[c]=o,q(d,c)&&(d[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(_.id=-1,Se(_,n)):_()}}}const Se=Tf;function Xf(e){return Zf(e)}function Zf(e,t){const n=js();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=$e,insertStaticContent:_}=e,w=(f,h,m,y=null,v=null,I=null,P=!1,S=null,C=!!h.dynamicChildren)=>{if(f===h)return;f&&!Tn(f,h)&&(y=E(f),Re(f,v,I,!0),f=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:T,ref:U,shapeFlag:x}=h;switch(T){case rs:D(f,h,m,y);break;case jt:R(f,h,m,y);break;case Is:f==null&&A(h,m,y,P);break;case Ue:Ce(f,h,m,y,v,I,P,S,C);break;default:x&1?Q(f,h,m,y,v,I,P,S,C):x&6?Ne(f,h,m,y,v,I,P,S,C):(x&64||x&128)&&T.process(f,h,m,y,v,I,P,S,C,O)}U!=null&&v&&Xs(U,f&&f.ref,I,h||f,!h)},D=(f,h,m,y)=>{if(f==null)r(h.el=a(h.children),m,y);else{const v=h.el=f.el;h.children!==f.children&&l(v,h.children)}},R=(f,h,m,y)=>{f==null?r(h.el=c(h.children||""),m,y):h.el=f.el},A=(f,h,m,y)=>{[f.el,f.anchor]=_(f.children,h,m,y,f.el,f.anchor)},L=({el:f,anchor:h},m,y)=>{let v;for(;f&&f!==h;)v=p(f),r(f,m,y),f=v;r(h,m,y)},N=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),s(f),f=m;s(h)},Q=(f,h,m,y,v,I,P,S,C)=>{P=P||h.type==="svg",f==null?ce(h,m,y,v,I,P,S,C):V(f,h,v,I,P,S,C)},ce=(f,h,m,y,v,I,P,S)=>{let C,T;const{type:U,props:x,shapeFlag:F,transition:H,dirs:z}=f;if(C=f.el=o(f.type,I,x&&x.is,x),F&8?u(C,f.children):F&16&&K(f.children,C,null,y,v,I&&U!=="foreignObject",P,S),z&&Nt(f,null,y,"created"),he(C,f,f.scopeId,P,y),x){for(const te in x)te!=="value"&&!br(te)&&i(C,te,null,x[te],I,f.children,y,v,be);"value"in x&&i(C,"value",null,x.value),(T=x.onVnodeBeforeMount)&&Ke(T,y,f)}z&&Nt(f,null,y,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&H&&!H.persisted;se&&H.beforeEnter(C),r(C,h,m),((T=x&&x.onVnodeMounted)||se||z)&&Se(()=>{T&&Ke(T,y,f),se&&H.enter(C),z&&Nt(f,null,y,"mounted")},v)},he=(f,h,m,y,v)=>{if(m&&g(f,m),y)for(let I=0;I<y.length;I++)g(f,y[I]);if(v){let I=v.subTree;if(h===I){const P=v.vnode;he(f,P,P.scopeId,P.slotScopeIds,v.parent)}}},K=(f,h,m,y,v,I,P,S,C=0)=>{for(let T=C;T<f.length;T++){const U=f[T]=S?gt(f[T]):qe(f[T]);w(null,U,h,m,y,v,I,P,S)}},V=(f,h,m,y,v,I,P)=>{const S=h.el=f.el;let{patchFlag:C,dynamicChildren:T,dirs:U}=h;C|=f.patchFlag&16;const x=f.props||ie,F=h.props||ie;let H;m&&Dt(m,!1),(H=F.onVnodeBeforeUpdate)&&Ke(H,m,h,f),U&&Nt(h,f,m,"beforeUpdate"),m&&Dt(m,!0);const z=v&&h.type!=="foreignObject";if(T?ae(f.dynamicChildren,T,S,m,y,z,I):P||X(f,h,S,null,m,y,z,I,!1),C>0){if(C&16)ye(S,h,x,F,m,y,v);else if(C&2&&x.class!==F.class&&i(S,"class",null,F.class,v),C&4&&i(S,"style",x.style,F.style,v),C&8){const se=h.dynamicProps;for(let te=0;te<se.length;te++){const fe=se[te],Me=x[fe],qt=F[fe];(qt!==Me||fe==="value")&&i(S,fe,Me,qt,v,f.children,m,y,be)}}C&1&&f.children!==h.children&&u(S,h.children)}else!P&&T==null&&ye(S,h,x,F,m,y,v);((H=F.onVnodeUpdated)||U)&&Se(()=>{H&&Ke(H,m,h,f),U&&Nt(h,f,m,"updated")},y)},ae=(f,h,m,y,v,I,P)=>{for(let S=0;S<h.length;S++){const C=f[S],T=h[S],U=C.el&&(C.type===Ue||!Tn(C,T)||C.shapeFlag&70)?d(C.el):m;w(C,T,U,null,y,v,I,P,!0)}},ye=(f,h,m,y,v,I,P)=>{if(m!==y){if(m!==ie)for(const S in m)!br(S)&&!(S in y)&&i(f,S,m[S],null,P,h.children,v,I,be);for(const S in y){if(br(S))continue;const C=y[S],T=m[S];C!==T&&S!=="value"&&i(f,S,T,C,P,h.children,v,I,be)}"value"in y&&i(f,"value",m.value,y.value)}},Ce=(f,h,m,y,v,I,P,S,C)=>{const T=h.el=f?f.el:a(""),U=h.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:F,slotScopeIds:H}=h;H&&(S=S?S.concat(H):H),f==null?(r(T,m,y),r(U,m,y),K(h.children,m,U,v,I,P,S,C)):x>0&&x&64&&F&&f.dynamicChildren?(ae(f.dynamicChildren,F,m,v,I,P,S),(h.key!=null||v&&h===v.subTree)&&Lc(f,h,!0)):X(f,h,m,U,v,I,P,S,C)},Ne=(f,h,m,y,v,I,P,S,C)=>{h.slotScopeIds=S,f==null?h.shapeFlag&512?v.ctx.activate(h,m,y,P,C):kt(h,m,y,v,I,P,C):De(f,h,C)},kt=(f,h,m,y,v,I,P)=>{const S=f.component=ld(f,y,v);if(Ic(f)&&(S.ctx.renderer=O),ud(S),S.asyncDep){if(v&&v.registerDep(S,Y),!f.el){const C=S.subTree=ve(jt);R(null,C,h,m)}return}Y(S,f,h,m,v,I,P)},De=(f,h,m)=>{const y=h.component=f.component;if(vf(f,h,m))if(y.asyncDep&&!y.asyncResolved){ne(y,h,m);return}else y.next=h,pf(y.update),y.update();else h.el=f.el,y.vnode=h},Y=(f,h,m,y,v,I,P)=>{const S=()=>{if(f.isMounted){let{next:U,bu:x,u:F,parent:H,vnode:z}=f,se=U,te;Dt(f,!1),U?(U.el=z.el,ne(f,U,P)):U=z,x&&Er(x),(te=U.props&&U.props.onVnodeBeforeUpdate)&&Ke(te,H,U,z),Dt(f,!0);const fe=vs(f),Me=f.subTree;f.subTree=fe,w(Me,fe,d(Me.el),E(Me),f,v,I),U.el=fe.el,se===null&&wf(f,fe.el),F&&Se(F,v),(te=U.props&&U.props.onVnodeUpdated)&&Se(()=>Ke(te,H,U,z),v)}else{let U;const{el:x,props:F}=h,{bm:H,m:z,parent:se}=f,te=vr(h);if(Dt(f,!1),H&&Er(H),!te&&(U=F&&F.onVnodeBeforeMount)&&Ke(U,se,h),Dt(f,!0),x&&Z){const fe=()=>{f.subTree=vs(f),Z(x,f.subTree,f,v,null)};te?h.type.__asyncLoader().then(()=>!f.isUnmounted&&fe()):fe()}else{const fe=f.subTree=vs(f);w(null,fe,m,y,f,v,I),h.el=fe.el}if(z&&Se(z,v),!te&&(U=F&&F.onVnodeMounted)){const fe=h;Se(()=>Ke(U,se,fe),v)}(h.shapeFlag&256||se&&vr(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&Se(f.a,v),f.isMounted=!0,h=m=y=null}},C=f.effect=new Ri(S,()=>Di(T),f.scope),T=f.update=()=>C.run();T.id=f.uid,Dt(f,!0),T()},ne=(f,h,m)=>{h.component=f;const y=f.vnode.props;f.vnode=h,f.next=null,Gf(f,h.props,y,m),Qf(f,h.children,m),_n(),_o(),yn()},X=(f,h,m,y,v,I,P,S,C=!1)=>{const T=f&&f.children,U=f?f.shapeFlag:0,x=h.children,{patchFlag:F,shapeFlag:H}=h;if(F>0){if(F&128){ut(T,x,m,y,v,I,P,S,C);return}else if(F&256){tt(T,x,m,y,v,I,P,S,C);return}}H&8?(U&16&&be(T,v,I),x!==T&&u(m,x)):U&16?H&16?ut(T,x,m,y,v,I,P,S,C):be(T,v,I,!0):(U&8&&u(m,""),H&16&&K(x,m,y,v,I,P,S,C))},tt=(f,h,m,y,v,I,P,S,C)=>{f=f||en,h=h||en;const T=f.length,U=h.length,x=Math.min(T,U);let F;for(F=0;F<x;F++){const H=h[F]=C?gt(h[F]):qe(h[F]);w(f[F],H,m,null,v,I,P,S,C)}T>U?be(f,v,I,!0,!1,x):K(h,m,y,v,I,P,S,C,x)},ut=(f,h,m,y,v,I,P,S,C)=>{let T=0;const U=h.length;let x=f.length-1,F=U-1;for(;T<=x&&T<=F;){const H=f[T],z=h[T]=C?gt(h[T]):qe(h[T]);if(Tn(H,z))w(H,z,m,null,v,I,P,S,C);else break;T++}for(;T<=x&&T<=F;){const H=f[x],z=h[F]=C?gt(h[F]):qe(h[F]);if(Tn(H,z))w(H,z,m,null,v,I,P,S,C);else break;x--,F--}if(T>x){if(T<=F){const H=F+1,z=H<U?h[H].el:y;for(;T<=F;)w(null,h[T]=C?gt(h[T]):qe(h[T]),m,z,v,I,P,S,C),T++}}else if(T>F)for(;T<=x;)Re(f[T],v,I,!0),T++;else{const H=T,z=T,se=new Map;for(T=z;T<=F;T++){const Oe=h[T]=C?gt(h[T]):qe(h[T]);Oe.key!=null&&se.set(Oe.key,T)}let te,fe=0;const Me=F-z+1;let qt=!1,io=0;const wn=new Array(Me);for(T=0;T<Me;T++)wn[T]=0;for(T=H;T<=x;T++){const Oe=f[T];if(fe>=Me){Re(Oe,v,I,!0);continue}let ze;if(Oe.key!=null)ze=se.get(Oe.key);else for(te=z;te<=F;te++)if(wn[te-z]===0&&Tn(Oe,h[te])){ze=te;break}ze===void 0?Re(Oe,v,I,!0):(wn[ze-z]=T+1,ze>=io?io=ze:qt=!0,w(Oe,h[ze],m,null,v,I,P,S,C),fe++)}const oo=qt?ed(wn):en;for(te=oo.length-1,T=Me-1;T>=0;T--){const Oe=z+T,ze=h[Oe],ao=Oe+1<U?h[Oe+1].el:y;wn[T]===0?w(null,ze,m,ao,v,I,P,S,C):qt&&(te<0||T!==oo[te]?Ve(ze,m,ao,2):te--)}}},Ve=(f,h,m,y,v=null)=>{const{el:I,type:P,transition:S,children:C,shapeFlag:T}=f;if(T&6){Ve(f.component.subTree,h,m,y);return}if(T&128){f.suspense.move(h,m,y);return}if(T&64){P.move(f,h,m,O);return}if(P===Ue){r(I,h,m);for(let x=0;x<C.length;x++)Ve(C[x],h,m,y);r(f.anchor,h,m);return}if(P===Is){L(f,h,m);return}if(y!==2&&T&1&&S)if(y===0)S.beforeEnter(I),r(I,h,m),Se(()=>S.enter(I),v);else{const{leave:x,delayLeave:F,afterLeave:H}=S,z=()=>r(I,h,m),se=()=>{x(I,()=>{z(),H&&H()})};F?F(I,z,se):se()}else r(I,h,m)},Re=(f,h,m,y=!1,v=!1)=>{const{type:I,props:P,ref:S,children:C,dynamicChildren:T,shapeFlag:U,patchFlag:x,dirs:F}=f;if(S!=null&&Xs(S,null,m,f,!0),U&256){h.ctx.deactivate(f);return}const H=U&1&&F,z=!vr(f);let se;if(z&&(se=P&&P.onVnodeBeforeUnmount)&&Ke(se,h,f),U&6)fr(f.component,m,y);else{if(U&128){f.suspense.unmount(m,y);return}H&&Nt(f,null,h,"beforeUnmount"),U&64?f.type.remove(f,h,m,v,O,y):T&&(I!==Ue||x>0&&x&64)?be(T,h,m,!1,!0):(I===Ue&&x&384||!v&&U&16)&&be(C,h,m),y&&zt(f)}(z&&(se=P&&P.onVnodeUnmounted)||H)&&Se(()=>{se&&Ke(se,h,f),H&&Nt(f,null,h,"unmounted")},m)},zt=f=>{const{type:h,el:m,anchor:y,transition:v}=f;if(h===Ue){Kt(m,y);return}if(h===Is){N(f);return}const I=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:S}=v,C=()=>P(m,I);S?S(f.el,I,C):C()}else I()},Kt=(f,h)=>{let m;for(;f!==h;)m=p(f),s(f),f=m;s(h)},fr=(f,h,m)=>{const{bum:y,scope:v,update:I,subTree:P,um:S}=f;y&&Er(y),v.stop(),I&&(I.active=!1,Re(P,f,h,m)),S&&Se(S,h),Se(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},be=(f,h,m,y=!1,v=!1,I=0)=>{for(let P=I;P<f.length;P++)Re(f[P],h,m,y,v)},E=f=>f.shapeFlag&6?E(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),k=(f,h,m)=>{f==null?h._vnode&&Re(h._vnode,null,null,!0):w(h._vnode||null,f,h,null,null,null,m),_o(),gc(),h._vnode=f},O={p:w,um:Re,m:Ve,r:zt,mt:kt,mc:K,pc:X,pbc:ae,n:E,o:e};let M,Z;return t&&([M,Z]=t(O)),{render:k,hydrate:M,createApp:zf(k,M)}}function Dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Lc(e,t,n=!1){const r=e.children,s=t.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=gt(s[i]),a.el=o.el),n||Lc(o,a)),a.type===rs&&(a.el=o.el)}}function ed(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const td=e=>e.__isTeleport,Ue=Symbol.for("v-fgt"),rs=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Is=Symbol.for("v-stc"),xn=[];let Be=null;function le(e=!1){xn.push(Be=e?null:[])}function nd(){xn.pop(),Be=xn[xn.length-1]||null}let zn=1;function Oo(e){zn+=e}function Uc(e){return e.dynamicChildren=zn>0?Be||en:null,nd(),zn>0&&Be&&Be.push(e),e}function de(e,t,n,r,s,i){return Uc(W(e,t,n,r,s,i,!0))}function rd(e,t,n,r,s){return Uc(ve(e,t,n,r,s,!0))}function Zs(e){return e?e.__v_isVNode===!0:!1}function Tn(e,t){return e.type===t.type&&e.key===t.key}const ss="__vInternal",Fc=({key:e})=>e??null,Ir=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||ue(e)||j(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function W(e,t=null,n=null,r=0,s=null,i=e===Ue?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fc(t),ref:t&&Ir(t),scopeId:es,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ke};return a?(Li(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),zn>0&&!o&&Be&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Be.push(c),c}const ve=sd;function sd(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Lf)&&(e=jt),Zs(e)){const a=ln(e,t,!0);return n&&Li(a,n),zn>0&&!i&&Be&&(a.shapeFlag&6?Be[Be.indexOf(e)]=a:Be.push(a)),a.patchFlag|=-2,a}if(md(e)&&(e=e.__vccOpts),t){t=id(t);let{class:a,style:c}=t;a&&!pe(a)&&(t.class=Ii(a)),oe(c)&&(lc(c)&&!B(c)&&(c=_e({},c)),t.style=wi(c))}const o=pe(e)?1:If(e)?128:td(e)?64:oe(e)?4:j(e)?2:0;return W(e,t,n,r,s,o,i,!0)}function id(e){return e?lc(e)||ss in e?_e({},e):e:null}function ln(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?od(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Fc(a),ref:t&&t.ref?n&&s?B(s)?s.concat(Ir(t)):[s,Ir(t)]:Ir(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ln(e.ssContent),ssFallback:e.ssFallback&&ln(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Mn(e=" ",t=0){return ve(rs,null,e,t)}function Bc(e="",t=!1){return t?(le(),rd(jt,null,e)):ve(jt,null,e)}function qe(e){return e==null||typeof e=="boolean"?ve(jt):B(e)?ve(Ue,null,e.slice()):typeof e=="object"?gt(e):ve(rs,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ln(e)}function Li(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Li(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(ss in t)?t._ctx=ke:s===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),r&64?(n=16,t=[Mn(t)]):n=8);e.children=t,e.shapeFlag|=n}function od(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ii([t.class,r.class]));else if(s==="style")t.style=wi([t.style,r.style]);else if(Kr(s)){const i=t[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Ke(e,t,n,r=null){He(e,t,7,[n,r])}const ad=Pc();let cd=0;function ld(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||ad,i={uid:cd++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ga(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nc(r,s),emitsOptions:yc(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=_f.bind(null,i),e.ce&&e.ce(i),i}let ge=null,Ui,Gt,Po="__VUE_INSTANCE_SETTERS__";(Gt=js()[Po])||(Gt=js()[Po]=[]),Gt.push(e=>ge=e),Ui=e=>{Gt.length>1?Gt.forEach(t=>t(e)):Gt[0](e)};const un=e=>{Ui(e),e.scope.on()},$t=()=>{ge&&ge.scope.off(),Ui(null)};function $c(e){return e.vnode.shapeFlag&4}let Kn=!1;function ud(e,t=!1){Kn=t;const{props:n,children:r}=e.vnode,s=$c(e);qf(e,n,s,t),Yf(e,r);const i=s?fd(e,t):void 0;return Kn=!1,i}function fd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qr(new Proxy(e.ctx,Ff));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?hd(e):null;un(e),_n();const i=Rt(r,e,0,[e.props,s]);if(yn(),$t(),Wa(i)){if(i.then($t,$t),t)return i.then(o=>{ko(e,o,t)}).catch(o=>{Xr(o,e,0)});e.asyncDep=i}else ko(e,i,t)}else Hc(e,t)}function ko(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=hc(t)),Hc(e,n)}let No;function Hc(e,t,n){const r=e.type;if(!e.render){if(!t&&No&&!r.render){const s=r.template||xi(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=_e(_e({isCustomElement:i,delimiters:a},o),c);r.render=No(s,l)}}e.render=r.render||$e}un(e),_n(),Bf(e),yn(),$t()}function dd(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}}))}function hd(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return dd(e)},slots:e.slots,emit:e.emit,expose:t}}function is(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(hc(Qr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dn)return Dn[n](e)},has(t,n){return n in t||n in Dn}}))}function pd(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function md(e){return j(e)&&"__vccOpts"in e}const Te=(e,t)=>ff(e,t,Kn);function jc(e,t,n){const r=arguments.length;return r===2?oe(t)&&!B(t)?Zs(t)?ve(e,null,[t]):ve(e,t):ve(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zs(n)&&(n=[n]),ve(e,t,n))}const gd=Symbol.for("v-scx"),_d=()=>Ye(gd),yd="3.3.4",bd="http://www.w3.org/2000/svg",Lt=typeof document<"u"?document:null,Do=Lt&&Lt.createElement("template"),Ed={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?Lt.createElementNS(bd,e):Lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Lt.createTextNode(e),createComment:e=>Lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Do.innerHTML=r?`<svg>${e}</svg>`:e;const a=Do.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vd(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function wd(e,t,n){const r=e.style,s=pe(n);if(n&&!s){if(t&&!pe(t))for(const i in t)n[i]==null&&ei(r,i,"");for(const i in n)ei(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const xo=/\s*!important$/;function ei(e,t,n){if(B(n))n.forEach(r=>ei(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Id(e,t);xo.test(n)?e.setProperty(gn(r),n.replace(xo,""),"important"):e[r]=n}}const Mo=["Webkit","Moz","ms"],Ts={};function Id(e,t){const n=Ts[t];if(n)return n;let r=Ze(t);if(r!=="filter"&&r in e)return Ts[t]=r;r=Jr(r);for(let s=0;s<Mo.length;s++){const i=Mo[s]+r;if(i in e)return Ts[t]=i}return t}const Lo="http://www.w3.org/1999/xlink";function Td(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Lo,t.slice(6,t.length)):e.setAttributeNS(Lo,t,n);else{const i=Au(t);n==null||i&&!Ka(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Rd(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ka(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Yt(e,t,n,r){e.addEventListener(t,n,r)}function Sd(e,t,n,r){e.removeEventListener(t,n,r)}function Ad(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Cd(t);if(r){const l=i[t]=kd(r,s);Yt(e,a,l,c)}else o&&(Sd(e,a,o,c),i[t]=void 0)}}const Uo=/(?:Once|Passive|Capture)$/;function Cd(e){let t;if(Uo.test(e)){t={};let r;for(;r=e.match(Uo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gn(e.slice(2)),t]}let Rs=0;const Od=Promise.resolve(),Pd=()=>Rs||(Od.then(()=>Rs=0),Rs=Date.now());function kd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;He(Nd(r,n.value),t,5,[r])};return n.value=e,n.attached=Pd(),n}function Nd(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Fo=/^on[a-z]/,Dd=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?vd(e,r,s):t==="style"?wd(e,n,r):Kr(t)?yi(t)||Ad(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xd(e,t,r,s))?Rd(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Td(e,t,r,s))};function xd(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Fo.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Fo.test(t)&&pe(n)?!1:t in e}const Bo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return B(t)?n=>Er(t,n):t};function Md(e){e.target.composing=!0}function $o(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Rn={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=Bo(s);const i=r||s.props&&s.props.type==="number";Yt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Hs(a)),e._assign(a)}),n&&Yt(e,"change",()=>{e.value=e.value.trim()}),t||(Yt(e,"compositionstart",Md),Yt(e,"compositionend",$o),Yt(e,"change",$o))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=Bo(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&Hs(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Ld=["ctrl","shift","alt","meta"],Ud={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ld.some(n=>e[`${n}Key`]&&!t.includes(n))},eE=(e,t)=>(n,...r)=>{for(let s=0;s<t.length;s++){const i=Ud[t[s]];if(i&&i(n,t))return}return e(n,...r)},Fd=_e({patchProp:Dd},Ed);let Ho;function Bd(){return Ho||(Ho=Xf(Fd))}const $d=(...e)=>{const t=Bd().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Hd(r);if(!s)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Hd(e){return pe(e)?document.querySelector(e):e}var jd=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Wc;const os=e=>Wc=e,Vc=Symbol();function ti(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ln;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ln||(Ln={}));function Wd(){const e=Ja(!0),t=e.run(()=>wt({}));let n=[],r=[];const s=Qr({install(i){os(s),s._a=i,i.provide(Vc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!jd?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const zc=()=>{};function jo(e,t,n,r=zc){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Ya()&&Ou(s),s}function Jt(e,...t){e.slice().forEach(n=>{n(...t)})}const Vd=e=>e();function ni(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];ti(s)&&ti(r)&&e.hasOwnProperty(n)&&!ue(r)&&!Tt(r)?e[n]=ni(s,r):e[n]=r}return e}const zd=Symbol();function Kd(e){return!ti(e)||!e.hasOwnProperty(zd)}const{assign:mt}=Object;function qd(e){return!!(ue(e)&&e.effect)}function Gd(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=af(n.state.value[e]);return mt(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Qr(Te(()=>{os(n);const g=n._s.get(e);return o[p].call(g,g)})),d),{}))}return c=Kc(e,l,t,n,r,!0),c}function Kc(e,t,n={},r,s,i){let o;const a=mt({actions:{}},n),c={deep:!0};let l,u,d=[],p=[],g;const _=r.state.value[e];!i&&!_&&(r.state.value[e]={}),wt({});let w;function D(K){let V;l=u=!1,typeof K=="function"?(K(r.state.value[e]),V={type:Ln.patchFunction,storeId:e,events:g}):(ni(r.state.value[e],K),V={type:Ln.patchObject,payload:K,storeId:e,events:g});const ae=w=Symbol();Ni().then(()=>{w===ae&&(l=!0)}),u=!0,Jt(d,V,r.state.value[e])}const R=i?function(){const{state:V}=n,ae=V?V():{};this.$patch(ye=>{mt(ye,ae)})}:zc;function A(){o.stop(),d=[],p=[],r._s.delete(e)}function L(K,V){return function(){os(r);const ae=Array.from(arguments),ye=[],Ce=[];function Ne(Y){ye.push(Y)}function kt(Y){Ce.push(Y)}Jt(p,{args:ae,name:K,store:Q,after:Ne,onError:kt});let De;try{De=V.apply(this&&this.$id===e?this:Q,ae)}catch(Y){throw Jt(Ce,Y),Y}return De instanceof Promise?De.then(Y=>(Jt(ye,Y),Y)).catch(Y=>(Jt(Ce,Y),Promise.reject(Y))):(Jt(ye,De),De)}}const N={_p:r,$id:e,$onAction:jo.bind(null,p),$patch:D,$reset:R,$subscribe(K,V={}){const ae=jo(d,K,V.detached,()=>ye()),ye=o.run(()=>Nn(()=>r.state.value[e],Ce=>{(V.flush==="sync"?u:l)&&K({storeId:e,type:Ln.direct,events:g},Ce)},mt({},c,V)));return ae},$dispose:A},Q=er(N);r._s.set(e,Q);const ce=r._a&&r._a.runWithContext||Vd,he=r._e.run(()=>(o=Ja(),ce(()=>o.run(t))));for(const K in he){const V=he[K];if(ue(V)&&!qd(V)||Tt(V))i||(_&&Kd(V)&&(ue(V)?V.value=_[K]:ni(V,_[K])),r.state.value[e][K]=V);else if(typeof V=="function"){const ae=L(K,V);he[K]=ae,a.actions[K]=V}}return mt(Q,he),mt(J(Q),he),Object.defineProperty(Q,"$state",{get:()=>r.state.value[e],set:K=>{D(V=>{mt(V,K)})}}),r._p.forEach(K=>{mt(Q,o.run(()=>K({store:Q,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(Q.$state,_),l=!0,u=!0,Q}function Jd(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(a,c){const l=Kf();return a=a||(l?Ye(Vc,null):null),a&&os(a),a=Wc,a._s.has(r)||(i?Kc(r,t,s,a):Gd(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Qt=typeof window<"u";function Yd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Ss(e,t){const n={};for(const r in t){const s=t[r];n[r]=je(s)?s.map(e):e(s)}return n}const Un=()=>{},je=Array.isArray,Qd=/\/$/,Xd=e=>e.replace(Qd,"");function As(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=nh(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Zd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Wo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function eh(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fn(t.matched[r],n.matched[s])&&qc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function fn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!th(e[n],t[n]))return!1;return!0}function th(e,t){return je(e)?Vo(e,t):je(t)?Vo(t,e):e===t}function Vo(e,t){return je(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function nh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var qn;(function(e){e.pop="pop",e.push="push"})(qn||(qn={}));var Fn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Fn||(Fn={}));function rh(e){if(!e)if(Qt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Xd(e)}const sh=/^[^#]+#/;function ih(e,t){return e.replace(sh,"#")+t}function oh(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const as=()=>({left:window.pageXOffset,top:window.pageYOffset});function ah(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=oh(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function zo(e,t){return(history.state?history.state.position-t:-1)+e}const ri=new Map;function ch(e,t){ri.set(e,t)}function lh(e){const t=ri.get(e);return ri.delete(e),t}let uh=()=>location.protocol+"//"+location.host;function Gc(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Wo(c,"")}return Wo(n,e)+r+s}function fh(e,t,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=Gc(e,location),_=n.value,w=t.value;let D=0;if(p){if(n.value=g,t.value=p,o&&o===_){o=null;return}D=w?p.position-w.position:0}else r(g);s.forEach(R=>{R(n.value,_,{delta:D,type:qn.pop,direction:D?D>0?Fn.forward:Fn.back:Fn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ee({},p.state,{scroll:as()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function Ko(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?as():null}}function dh(e){const{history:t,location:n}=window,r={value:Gc(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:uh()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=ee({},t.state,Ko(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ee({},s.value,t.state,{forward:c,scroll:as()});i(u.current,u,!0);const d=ee({},Ko(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function hh(e){e=rh(e);const t=dh(e),n=fh(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ee({location:"",base:e,go:r,createHref:ih.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function ph(e){return typeof e=="string"||e&&typeof e=="object"}function Jc(e){return typeof e=="string"||typeof e=="symbol"}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yc=Symbol("");var qo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(qo||(qo={}));function dn(e,t){return ee(new Error,{type:e,[Yc]:!0},t)}function nt(e,t){return e instanceof Error&&Yc in e&&(t==null||!!(e.type&t))}const Go="[^/]+?",mh={sensitive:!1,strict:!1,start:!0,end:!0},gh=/[.+*?^${}()[\]/\\]/g;function _h(e,t){const n=ee({},mh,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(gh,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:w,optional:D,regexp:R}=p;i.push({name:_,repeatable:w,optional:D});const A=R||Go;if(A!==Go){g+=10;try{new RegExp(`(${A})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+N.message)}}let L=w?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;d||(L=D&&l.length<2?`(?:/${L})`:"/"+L),D&&(L+="?"),s+=L,g+=20,D&&(g+=-8),w&&(g+=-20),A===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",_=i[p-1];d[_.name]=g&&_.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:w,optional:D}=g,R=_ in l?l[_]:"";if(je(R)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=je(R)?R.join("/"):R;if(!A)if(D)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=A}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function yh(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function bh(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=yh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Jo(r))return 1;if(Jo(s))return-1}return s.length-r.length}function Jo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Eh={type:0,value:""},vh=/[a-zA-Z0-9_]/;function wh(e){if(!e)return[[]];if(e==="/")return[[Eh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:vh.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Ih(e,t,n){const r=_h(wh(e.path),n),s=ee(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Th(e,t){const n=[],r=new Map;t=Xo({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,d,p){const g=!p,_=Rh(u);_.aliasOf=p&&p.record;const w=Xo(t,u),D=[_];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of L)D.push(ee({},_,{components:p?p.record.components:_.components,path:N,aliasOf:p?p.record:_}))}let R,A;for(const L of D){const{path:N}=L;if(d&&N[0]!=="/"){const Q=d.record.path,ce=Q[Q.length-1]==="/"?"":"/";L.path=d.record.path+(N&&ce+N)}if(R=Ih(L,d,w),p?p.alias.push(R):(A=A||R,A!==R&&A.alias.push(R),g&&u.name&&!Qo(R)&&o(u.name)),_.children){const Q=_.children;for(let ce=0;ce<Q.length;ce++)i(Q[ce],R,p&&p.children[ce])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return A?()=>{o(A)}:Un}function o(u){if(Jc(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&bh(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Qc(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Qo(u)&&r.set(u.record.name,u)}function l(u,d){let p,g={},_,w;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw dn(1,{location:u});w=p.record.name,g=ee(Yo(d.params,p.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&Yo(u.params,p.keys.map(A=>A.name))),_=p.stringify(g)}else if("path"in u)_=u.path,p=n.find(A=>A.re.test(_)),p&&(g=p.parse(_),w=p.record.name);else{if(p=d.name?r.get(d.name):n.find(A=>A.re.test(d.path)),!p)throw dn(1,{location:u,currentLocation:d});w=p.record.name,g=ee({},d.params,u.params),_=p.stringify(g)}const D=[];let R=p;for(;R;)D.unshift(R.record),R=R.parent;return{name:w,path:_,params:g,matched:D,meta:Ah(D)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Yo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Rh(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Sh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Sh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Qo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ah(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function Xo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Qc(e,t){return t.children.some(n=>n===e||Qc(e,n))}const Xc=/#/g,Ch=/&/g,Oh=/\//g,Ph=/=/g,kh=/\?/g,Zc=/\+/g,Nh=/%5B/g,Dh=/%5D/g,el=/%5E/g,xh=/%60/g,tl=/%7B/g,Mh=/%7C/g,nl=/%7D/g,Lh=/%20/g;function Fi(e){return encodeURI(""+e).replace(Mh,"|").replace(Nh,"[").replace(Dh,"]")}function Uh(e){return Fi(e).replace(tl,"{").replace(nl,"}").replace(el,"^")}function si(e){return Fi(e).replace(Zc,"%2B").replace(Lh,"+").replace(Xc,"%23").replace(Ch,"%26").replace(xh,"`").replace(tl,"{").replace(nl,"}").replace(el,"^")}function Fh(e){return si(e).replace(Ph,"%3D")}function Bh(e){return Fi(e).replace(Xc,"%23").replace(kh,"%3F")}function $h(e){return e==null?"":Bh(e).replace(Oh,"%2F")}function Ur(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Hh(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Zc," "),o=i.indexOf("="),a=Ur(o<0?i:i.slice(0,o)),c=o<0?null:Ur(i.slice(o+1));if(a in t){let l=t[a];je(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Zo(e){let t="";for(let n in e){const r=e[n];if(n=Fh(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&si(i)):[r&&si(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function jh(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Wh=Symbol(""),ea=Symbol(""),Bi=Symbol(""),rl=Symbol(""),ii=Symbol("");function Sn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function _t(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(dn(4,{from:n,to:t})):d instanceof Error?a(d):ph(d)?a(dn(2,{from:t,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Cs(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Vh(a)){const l=(a.__vccOpts||a)[t];l&&s.push(_t(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Yd(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&_t(p,n,r,i,o)()}))}}return s}function Vh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ta(e){const t=Ye(Bi),n=Ye(rl),r=Te(()=>t.resolve(nn(e.to))),s=Te(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(fn.bind(null,u));if(p>-1)return p;const g=na(c[l-2]);return l>1&&na(u)===g&&d[d.length-1].path!==g?d.findIndex(fn.bind(null,c[l-2])):p}),i=Te(()=>s.value>-1&&Gh(n.params,r.value.params)),o=Te(()=>s.value>-1&&s.value===n.matched.length-1&&qc(n.params,r.value.params));function a(c={}){return qh(c)?t[nn(e.replace)?"replace":"push"](nn(e.to)).catch(Un):Promise.resolve()}return{route:r,href:Te(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const zh=ts({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ta,setup(e,{slots:t}){const n=er(ta(e)),{options:r}=Ye(Bi),s=Te(()=>({[ra(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ra(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:jc("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Kh=zh;function qh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Gh(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function na(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ra=(e,t,n)=>e??t??n,Jh=ts({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ye(ii),s=Te(()=>e.route||r.value),i=Ye(ea,0),o=Te(()=>{let l=nn(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Te(()=>s.value.matched[o.value]);wr(ea,Te(()=>o.value+1)),wr(Wh,a),wr(ii,s);const c=wt();return Nn(()=>[c.value,a.value,e.name],([l,u,d],[p,g,_])=>{u&&(u.instances[d]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!fn(u,g)||!p)&&(u.enterCallbacks[d]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,d=a.value,p=d&&d.components[u];if(!p)return sa(n.default,{Component:p,route:l});const g=d.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,D=jc(p,ee({},_,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return sa(n.default,{Component:D,route:l})||D}}});function sa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const sl=Jh;function Yh(e){const t=Th(e.routes,e),n=e.parseQuery||Hh,r=e.stringifyQuery||Zo,s=e.history,i=Sn(),o=Sn(),a=Sn(),c=rf(dt);let l=dt;Qt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ss.bind(null,E=>""+E),d=Ss.bind(null,$h),p=Ss.bind(null,Ur);function g(E,k){let O,M;return Jc(E)?(O=t.getRecordMatcher(E),M=k):M=E,t.addRoute(M,O)}function _(E){const k=t.getRecordMatcher(E);k&&t.removeRoute(k)}function w(){return t.getRoutes().map(E=>E.record)}function D(E){return!!t.getRecordMatcher(E)}function R(E,k){if(k=ee({},k||c.value),typeof E=="string"){const m=As(n,E,k.path),y=t.resolve({path:m.path},k),v=s.createHref(m.fullPath);return ee(m,y,{params:p(y.params),hash:Ur(m.hash),redirectedFrom:void 0,href:v})}let O;if("path"in E)O=ee({},E,{path:As(n,E.path,k.path).path});else{const m=ee({},E.params);for(const y in m)m[y]==null&&delete m[y];O=ee({},E,{params:d(m)}),k.params=d(k.params)}const M=t.resolve(O,k),Z=E.hash||"";M.params=u(p(M.params));const f=Zd(r,ee({},E,{hash:Uh(Z),path:M.path})),h=s.createHref(f);return ee({fullPath:f,hash:Z,query:r===Zo?jh(E.query):E.query||{}},M,{redirectedFrom:void 0,href:h})}function A(E){return typeof E=="string"?As(n,E,c.value.path):ee({},E)}function L(E,k){if(l!==E)return dn(8,{from:k,to:E})}function N(E){return he(E)}function Q(E){return N(ee(A(E),{replace:!0}))}function ce(E){const k=E.matched[E.matched.length-1];if(k&&k.redirect){const{redirect:O}=k;let M=typeof O=="function"?O(E):O;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=A(M):{path:M},M.params={}),ee({query:E.query,hash:E.hash,params:"path"in M?{}:E.params},M)}}function he(E,k){const O=l=R(E),M=c.value,Z=E.state,f=E.force,h=E.replace===!0,m=ce(O);if(m)return he(ee(A(m),{state:typeof m=="object"?ee({},Z,m.state):Z,force:f,replace:h}),k||O);const y=O;y.redirectedFrom=k;let v;return!f&&eh(r,M,O)&&(v=dn(16,{to:y,from:M}),Ve(M,M,!0,!1)),(v?Promise.resolve(v):ae(y,M)).catch(I=>nt(I)?nt(I,2)?I:ut(I):X(I,y,M)).then(I=>{if(I){if(nt(I,2))return he(ee({replace:h},A(I.to),{state:typeof I.to=="object"?ee({},Z,I.to.state):Z,force:f}),k||y)}else I=Ce(y,M,!0,h,Z);return ye(y,M,I),I})}function K(E,k){const O=L(E,k);return O?Promise.reject(O):Promise.resolve()}function V(E){const k=Kt.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(E):E()}function ae(E,k){let O;const[M,Z,f]=Qh(E,k);O=Cs(M.reverse(),"beforeRouteLeave",E,k);for(const m of M)m.leaveGuards.forEach(y=>{O.push(_t(y,E,k))});const h=K.bind(null,E,k);return O.push(h),be(O).then(()=>{O=[];for(const m of i.list())O.push(_t(m,E,k));return O.push(h),be(O)}).then(()=>{O=Cs(Z,"beforeRouteUpdate",E,k);for(const m of Z)m.updateGuards.forEach(y=>{O.push(_t(y,E,k))});return O.push(h),be(O)}).then(()=>{O=[];for(const m of f)if(m.beforeEnter)if(je(m.beforeEnter))for(const y of m.beforeEnter)O.push(_t(y,E,k));else O.push(_t(m.beforeEnter,E,k));return O.push(h),be(O)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),O=Cs(f,"beforeRouteEnter",E,k),O.push(h),be(O))).then(()=>{O=[];for(const m of o.list())O.push(_t(m,E,k));return O.push(h),be(O)}).catch(m=>nt(m,8)?m:Promise.reject(m))}function ye(E,k,O){a.list().forEach(M=>V(()=>M(E,k,O)))}function Ce(E,k,O,M,Z){const f=L(E,k);if(f)return f;const h=k===dt,m=Qt?history.state:{};O&&(M||h?s.replace(E.fullPath,ee({scroll:h&&m&&m.scroll},Z)):s.push(E.fullPath,Z)),c.value=E,Ve(E,k,O,h),ut()}let Ne;function kt(){Ne||(Ne=s.listen((E,k,O)=>{if(!fr.listening)return;const M=R(E),Z=ce(M);if(Z){he(ee(Z,{replace:!0}),M).catch(Un);return}l=M;const f=c.value;Qt&&ch(zo(f.fullPath,O.delta),as()),ae(M,f).catch(h=>nt(h,12)?h:nt(h,2)?(he(h.to,M).then(m=>{nt(m,20)&&!O.delta&&O.type===qn.pop&&s.go(-1,!1)}).catch(Un),Promise.reject()):(O.delta&&s.go(-O.delta,!1),X(h,M,f))).then(h=>{h=h||Ce(M,f,!1),h&&(O.delta&&!nt(h,8)?s.go(-O.delta,!1):O.type===qn.pop&&nt(h,20)&&s.go(-1,!1)),ye(M,f,h)}).catch(Un)}))}let De=Sn(),Y=Sn(),ne;function X(E,k,O){ut(E);const M=Y.list();return M.length?M.forEach(Z=>Z(E,k,O)):console.error(E),Promise.reject(E)}function tt(){return ne&&c.value!==dt?Promise.resolve():new Promise((E,k)=>{De.add([E,k])})}function ut(E){return ne||(ne=!E,kt(),De.list().forEach(([k,O])=>E?O(E):k()),De.reset()),E}function Ve(E,k,O,M){const{scrollBehavior:Z}=e;if(!Qt||!Z)return Promise.resolve();const f=!O&&lh(zo(E.fullPath,0))||(M||!O)&&history.state&&history.state.scroll||null;return Ni().then(()=>Z(E,k,f)).then(h=>h&&ah(h)).catch(h=>X(h,E,k))}const Re=E=>s.go(E);let zt;const Kt=new Set,fr={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:D,getRoutes:w,resolve:R,options:e,push:N,replace:Q,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:tt,install(E){const k=this;E.component("RouterLink",Kh),E.component("RouterView",sl),E.config.globalProperties.$router=k,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>nn(c)}),Qt&&!zt&&c.value===dt&&(zt=!0,N(s.location).catch(Z=>{}));const O={};for(const Z in dt)Object.defineProperty(O,Z,{get:()=>c.value[Z],enumerable:!0});E.provide(Bi,k),E.provide(rl,ac(O)),E.provide(ii,c);const M=E.unmount;Kt.add(E),E.unmount=function(){Kt.delete(E),Kt.size<1&&(l=dt,Ne&&Ne(),Ne=null,c.value=dt,zt=!1,ne=!1),M()}}};function be(E){return E.reduce((k,O)=>k.then(()=>V(O)),Promise.resolve())}return fr}function Qh(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>fn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>fn(l,c))||s.push(c))}return[n,r,s]}const Xh="modulepreload",Zh=function(e){return"/"+e},ia={},ep=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Zh(i),i in ia)return;ia[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Xh,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},tp="/assets/icon-68726c63.png",np="/assets/profile-icon-82448b7e.svg",rp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR4nO3aO05DMRBGYUNBiwQtG0FZGG0aXjvJCmgQC6AIUNDR5rKNE01kikjJlSfRDf+MfHpL88nJfckFuACegV90GoBHm620Bjyh24MHYnrrtogEzOpMg2fRpiIW3rk6ZOLoOyIWfUfEAu5SXLUsYF4yQFx1yIQBC+AFuAz90wKWdaz3Zowo5Ab4qaMZ6iok5CCMKmQH5mMUowxxYdQhezDXJSKkCRMFsgPzuYWJBBnFRIPsxRwDAc6AL/6/5bGQ8/rHiw1J89OSugwTCMLYvSQKhAw3RFqet9QhtD7OK0PwvJOoQsjwYkWWV13gO8vHhzfgNfznoIPqkBNEho/YwNw1lzBk03QLThTeuTpk4ug7kmBHhrpmVvQO1aw8i+xclGr3HogdPDPM384otDKE5+DZGhon/IxufD43AAAAAElFTkSuQmCC";const cs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},sp=ts({name:"NavigationBar",setup(){const e=ro(),t=wt(!1),n=e.user.email;return{store:e,userMail:n,isDropdownOpen:t,toggleDropdown:()=>{t.value=!t.value}}}}),$i=e=>(bc("data-v-e5553b56"),e=e(),Ec(),e),ip={class:"navbar"},op=$i(()=>W("div",{class:"logo-container"},[W("img",{src:tp,alt:"App Logo",class:"logo"})],-1)),ap=$i(()=>W("div",null,[W("img",{src:np,alt:"Profile Icon",class:"logo"}),W("span",{class:"arrow"})],-1)),cp={key:0,class:"dropdown-menu"},lp={class:"user-email"},up=$i(()=>W("img",{src:rp,alt:"Signout Icon",class:"signout-icon"},null,-1));function fp(e,t,n,r,s,i){return le(),de("div",ip,[op,W("div",{class:"dropdown",onClick:t[1]||(t[1]=(...o)=>e.toggleDropdown&&e.toggleDropdown(...o))},[ap,e.isDropdownOpen?(le(),de("ul",cp,[W("span",lp,Le(e.userMail),1),W("li",{class:"dropdown-menu-item",onClick:t[0]||(t[0]=(...o)=>e.store.signout&&e.store.signout(...o))},[up,Mn(" Sign out ")])])):Bc("",!0)])])}const dp=cs(sp,[["render",fp],["__scopeId","data-v-e5553b56"]]);function il(e,t){return function(){return e.apply(t,arguments)}}const{toString:hp}=Object.prototype,{getPrototypeOf:Hi}=Object,ls=(e=>t=>{const n=hp.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),et=e=>(e=e.toLowerCase(),t=>ls(t)===e),us=e=>t=>typeof t===e,{isArray:bn}=Array,Gn=us("undefined");function pp(e){return e!==null&&!Gn(e)&&e.constructor!==null&&!Gn(e.constructor)&&xe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ol=et("ArrayBuffer");function mp(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ol(e.buffer),t}const gp=us("string"),xe=us("function"),al=us("number"),fs=e=>e!==null&&typeof e=="object",_p=e=>e===!0||e===!1,Tr=e=>{if(ls(e)!=="object")return!1;const t=Hi(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yp=et("Date"),bp=et("File"),Ep=et("Blob"),vp=et("FileList"),wp=e=>fs(e)&&xe(e.pipe),Ip=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||xe(e.append)&&((t=ls(e))==="formdata"||t==="object"&&xe(e.toString)&&e.toString()==="[object FormData]"))},Tp=et("URLSearchParams"),Rp=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function tr(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),bn(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function cl(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ll=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ul=e=>!Gn(e)&&e!==ll;function oi(){const{caseless:e}=ul(this)&&this||{},t={},n=(r,s)=>{const i=e&&cl(t,s)||s;Tr(t[i])&&Tr(r)?t[i]=oi(t[i],r):Tr(r)?t[i]=oi({},r):bn(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&tr(arguments[r],n);return t}const Sp=(e,t,n,{allOwnKeys:r}={})=>(tr(t,(s,i)=>{n&&xe(s)?e[i]=il(s,n):e[i]=s},{allOwnKeys:r}),e),Ap=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Cp=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Op=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&Hi(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Pp=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},kp=e=>{if(!e)return null;if(bn(e))return e;let t=e.length;if(!al(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Np=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Hi(Uint8Array)),Dp=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},xp=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Mp=et("HTMLFormElement"),Lp=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),oa=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Up=et("RegExp"),fl=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};tr(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},Fp=e=>{fl(e,(t,n)=>{if(xe(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(xe(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Bp=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return bn(e)?r(e):r(String(e).split(t)),n},$p=()=>{},Hp=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Os="abcdefghijklmnopqrstuvwxyz",aa="0123456789",dl={DIGIT:aa,ALPHA:Os,ALPHA_DIGIT:Os+Os.toUpperCase()+aa},jp=(e=16,t=dl.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Wp(e){return!!(e&&xe(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Vp=e=>{const t=new Array(10),n=(r,s)=>{if(fs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=bn(r)?[]:{};return tr(r,(o,a)=>{const c=n(o,s+1);!Gn(c)&&(i[a]=c)}),t[s]=void 0,i}}return r};return n(e,0)},zp=et("AsyncFunction"),Kp=e=>e&&(fs(e)||xe(e))&&xe(e.then)&&xe(e.catch),b={isArray:bn,isArrayBuffer:ol,isBuffer:pp,isFormData:Ip,isArrayBufferView:mp,isString:gp,isNumber:al,isBoolean:_p,isObject:fs,isPlainObject:Tr,isUndefined:Gn,isDate:yp,isFile:bp,isBlob:Ep,isRegExp:Up,isFunction:xe,isStream:wp,isURLSearchParams:Tp,isTypedArray:Np,isFileList:vp,forEach:tr,merge:oi,extend:Sp,trim:Rp,stripBOM:Ap,inherits:Cp,toFlatObject:Op,kindOf:ls,kindOfTest:et,endsWith:Pp,toArray:kp,forEachEntry:Dp,matchAll:xp,isHTMLForm:Mp,hasOwnProperty:oa,hasOwnProp:oa,reduceDescriptors:fl,freezeMethods:Fp,toObjectSet:Bp,toCamelCase:Lp,noop:$p,toFiniteNumber:Hp,findKey:cl,global:ll,isContextDefined:ul,ALPHABET:dl,generateString:jp,isSpecCompliantForm:Wp,toJSONObject:Vp,isAsyncFn:zp,isThenable:Kp};function G(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}b.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const hl=G.prototype,pl={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{pl[e]={value:e}});Object.defineProperties(G,pl);Object.defineProperty(hl,"isAxiosError",{value:!0});G.from=(e,t,n,r,s,i)=>{const o=Object.create(hl);return b.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),G.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const qp=null;function ai(e){return b.isPlainObject(e)||b.isArray(e)}function ml(e){return b.endsWith(e,"[]")?e.slice(0,-2):e}function ca(e,t,n){return e?e.concat(t).map(function(s,i){return s=ml(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Gp(e){return b.isArray(e)&&!e.some(ai)}const Jp=b.toFlatObject(b,{},null,function(t){return/^is[A-Z]/.test(t)});function ds(e,t,n){if(!b.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,D){return!b.isUndefined(D[w])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(t);if(!b.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(b.isDate(_))return _.toISOString();if(!c&&b.isBlob(_))throw new G("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(_)||b.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,w,D){let R=_;if(_&&!D&&typeof _=="object"){if(b.endsWith(w,"{}"))w=r?w:w.slice(0,-2),_=JSON.stringify(_);else if(b.isArray(_)&&Gp(_)||(b.isFileList(_)||b.endsWith(w,"[]"))&&(R=b.toArray(_)))return w=ml(w),R.forEach(function(L,N){!(b.isUndefined(L)||L===null)&&t.append(o===!0?ca([w],N,i):o===null?w:w+"[]",l(L))}),!1}return ai(_)?!0:(t.append(ca(D,w,i),l(_)),!1)}const d=[],p=Object.assign(Jp,{defaultVisitor:u,convertValue:l,isVisitable:ai});function g(_,w){if(!b.isUndefined(_)){if(d.indexOf(_)!==-1)throw Error("Circular reference detected in "+w.join("."));d.push(_),b.forEach(_,function(R,A){(!(b.isUndefined(R)||R===null)&&s.call(t,R,b.isString(A)?A.trim():A,w,p))===!0&&g(R,w?w.concat(A):[A])}),d.pop()}}if(!b.isObject(e))throw new TypeError("data must be an object");return g(e),t}function la(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ji(e,t){this._pairs=[],e&&ds(e,this,t)}const gl=ji.prototype;gl.append=function(t,n){this._pairs.push([t,n])};gl.toString=function(t){const n=t?function(r){return t.call(this,r,la)}:la;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Yp(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _l(e,t,n){if(!t)return e;const r=n&&n.encode||Yp,s=n&&n.serialize;let i;if(s?i=s(t,n):i=b.isURLSearchParams(t)?t.toString():new ji(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Qp{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){b.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ua=Qp,yl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Xp=typeof URLSearchParams<"u"?URLSearchParams:ji,Zp=typeof FormData<"u"?FormData:null,em=typeof Blob<"u"?Blob:null,tm=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),nm=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Je={isBrowser:!0,classes:{URLSearchParams:Xp,FormData:Zp,Blob:em},isStandardBrowserEnv:tm,isStandardBrowserWebWorkerEnv:nm,protocols:["http","https","file","blob","url","data"]};function rm(e,t){return ds(e,new Je.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Je.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function sm(e){return b.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function im(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function bl(e){function t(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&b.isArray(s)?s.length:o,c?(b.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!b.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&b.isArray(s[o])&&(s[o]=im(s[o])),!a)}if(b.isFormData(e)&&b.isFunction(e.entries)){const n={};return b.forEachEntry(e,(r,s)=>{t(sm(r),s,n,0)}),n}return null}const om={"Content-Type":void 0};function am(e,t,n){if(b.isString(e))try{return(t||JSON.parse)(e),b.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const hs={transitional:yl,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=b.isObject(t);if(i&&b.isHTMLForm(t)&&(t=new FormData(t)),b.isFormData(t))return s&&s?JSON.stringify(bl(t)):t;if(b.isArrayBuffer(t)||b.isBuffer(t)||b.isStream(t)||b.isFile(t)||b.isBlob(t))return t;if(b.isArrayBufferView(t))return t.buffer;if(b.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return rm(t,this.formSerializer).toString();if((a=b.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ds(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),am(t)):t}],transformResponse:[function(t){const n=this.transitional||hs.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&b.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?G.from(a,G.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Je.classes.FormData,Blob:Je.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};b.forEach(["delete","get","head"],function(t){hs.headers[t]={}});b.forEach(["post","put","patch"],function(t){hs.headers[t]=b.merge(om)});const Wi=hs,cm=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lm=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&cm[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},fa=Symbol("internals");function An(e){return e&&String(e).trim().toLowerCase()}function Rr(e){return e===!1||e==null?e:b.isArray(e)?e.map(Rr):String(e)}function um(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const fm=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ps(e,t,n,r,s){if(b.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!b.isString(t)){if(b.isString(r))return t.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(t)}}function dm(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function hm(e,t){const n=b.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class ps{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,c,l){const u=An(c);if(!u)throw new Error("header name must be a non-empty string");const d=b.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||c]=Rr(a))}const o=(a,c)=>b.forEach(a,(l,u)=>i(l,u,c));return b.isPlainObject(t)||t instanceof this.constructor?o(t,n):b.isString(t)&&(t=t.trim())&&!fm(t)?o(lm(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=An(t),t){const r=b.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return um(s);if(b.isFunction(n))return n.call(this,s,r);if(b.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=An(t),t){const r=b.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ps(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=An(o),o){const a=b.findKey(r,o);a&&(!n||Ps(r,r[a],a,n))&&(delete r[a],s=!0)}}return b.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Ps(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return b.forEach(this,(s,i)=>{const o=b.findKey(r,i);if(o){n[o]=Rr(s),delete n[i];return}const a=t?dm(i):String(i).trim();a!==i&&delete n[i],n[a]=Rr(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return b.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[fa]=this[fa]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=An(o);r[a]||(hm(s,o),r[a]=!0)}return b.isArray(t)?t.forEach(i):i(t),this}}ps.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.freezeMethods(ps.prototype);b.freezeMethods(ps);const ot=ps;function ks(e,t){const n=this||Wi,r=t||n,s=ot.from(r.headers);let i=r.data;return b.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function El(e){return!!(e&&e.__CANCEL__)}function nr(e,t,n){G.call(this,e??"canceled",G.ERR_CANCELED,t,n),this.name="CanceledError"}b.inherits(nr,G,{__CANCEL__:!0});function pm(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const mm=Je.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),b.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),b.isString(i)&&c.push("path="+i),b.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function gm(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function _m(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function vl(e,t){return e&&!gm(t)?_m(e,t):t}const ym=Je.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=b.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function bm(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Em(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let d=i,p=0;for(;d!==s;)p+=n[d++],d=d%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const g=u&&l-u;return g?Math.round(p*1e3/g):void 0}}function da(e,t){let n=0;const r=Em(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const vm=typeof XMLHttpRequest<"u",wm=vm&&function(e){return new Promise(function(n,r){let s=e.data;const i=ot.from(e.headers).normalize(),o=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}b.isFormData(s)&&(Je.isStandardBrowserEnv||Je.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+_))}const u=vl(e.baseURL,e.url);l.open(e.method.toUpperCase(),_l(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function d(){if(!l)return;const g=ot.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),w={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:e,request:l};pm(function(R){n(R),c()},function(R){r(R),c()},w),l=null}if("onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(d)},l.onabort=function(){l&&(r(new G("Request aborted",G.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new G("Network Error",G.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let _=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||yl;e.timeoutErrorMessage&&(_=e.timeoutErrorMessage),r(new G(_,w.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,e,l)),l=null},Je.isStandardBrowserEnv){const g=(e.withCredentials||ym(u))&&e.xsrfCookieName&&mm.read(e.xsrfCookieName);g&&i.set(e.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&b.forEach(i.toJSON(),function(_,w){l.setRequestHeader(w,_)}),b.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",da(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",da(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=g=>{l&&(r(!g||g.type?new nr(null,e,l):g),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const p=bm(u);if(p&&Je.protocols.indexOf(p)===-1){r(new G("Unsupported protocol "+p+":",G.ERR_BAD_REQUEST,e));return}l.send(s||null)})},Sr={http:qp,xhr:wm};b.forEach(Sr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Im={getAdapter:e=>{e=b.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=b.isString(n)?Sr[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new G(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(b.hasOwnProp(Sr,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!b.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Sr};function Ns(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new nr(null,e)}function ha(e){return Ns(e),e.headers=ot.from(e.headers),e.data=ks.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Im.getAdapter(e.adapter||Wi.adapter)(e).then(function(r){return Ns(e),r.data=ks.call(e,e.transformResponse,r),r.headers=ot.from(r.headers),r},function(r){return El(r)||(Ns(e),r&&r.response&&(r.response.data=ks.call(e,e.transformResponse,r.response),r.response.headers=ot.from(r.response.headers))),Promise.reject(r)})}const pa=e=>e instanceof ot?e.toJSON():e;function hn(e,t){t=t||{};const n={};function r(l,u,d){return b.isPlainObject(l)&&b.isPlainObject(u)?b.merge.call({caseless:d},l,u):b.isPlainObject(u)?b.merge({},u):b.isArray(u)?u.slice():u}function s(l,u,d){if(b.isUndefined(u)){if(!b.isUndefined(l))return r(void 0,l,d)}else return r(l,u,d)}function i(l,u){if(!b.isUndefined(u))return r(void 0,u)}function o(l,u){if(b.isUndefined(u)){if(!b.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(pa(l),pa(u),!0)};return b.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=c[u]||s,p=d(e[u],t[u],u);b.isUndefined(p)&&d!==a||(n[u]=p)}),n}const wl="1.4.0",Vi={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Vi[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ma={};Vi.transitional=function(t,n,r){function s(i,o){return"[Axios v"+wl+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new G(s(o," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!ma[o]&&(ma[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function Tm(e,t,n){if(typeof e!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new G("option "+i+" must be "+c,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+i,G.ERR_BAD_OPTION)}}const ci={assertOptions:Tm,validators:Vi},ht=ci.validators;class Fr{constructor(t){this.defaults=t,this.interceptors={request:new ua,response:new ua}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=hn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ci.assertOptions(r,{silentJSONParsing:ht.transitional(ht.boolean),forcedJSONParsing:ht.transitional(ht.boolean),clarifyTimeoutError:ht.transitional(ht.boolean)},!1),s!=null&&(b.isFunction(s)?n.paramsSerializer={serialize:s}:ci.assertOptions(s,{encode:ht.function,serialize:ht.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&b.merge(i.common,i[n.method]),o&&b.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=ot.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let u,d=0,p;if(!c){const _=[ha.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),p=_.length,u=Promise.resolve(n);d<p;)u=u.then(_[d++],_[d++]);return u}p=a.length;let g=n;for(d=0;d<p;){const _=a[d++],w=a[d++];try{g=_(g)}catch(D){w.call(this,D);break}}try{u=ha.call(this,g)}catch(_){return Promise.reject(_)}for(d=0,p=l.length;d<p;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=hn(this.defaults,t);const n=vl(t.baseURL,t.url);return _l(n,t.params,t.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(t){Fr.prototype[t]=function(n,r){return this.request(hn(r||{},{method:t,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(hn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Fr.prototype[t]=n(),Fr.prototype[t+"Form"]=n(!0)});const Ar=Fr;class zi{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new nr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new zi(function(s){t=s}),cancel:t}}}const Rm=zi;function Sm(e){return function(n){return e.apply(null,n)}}function Am(e){return b.isObject(e)&&e.isAxiosError===!0}const li={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(li).forEach(([e,t])=>{li[t]=e});const Cm=li;function Il(e){const t=new Ar(e),n=il(Ar.prototype.request,t);return b.extend(n,Ar.prototype,t,{allOwnKeys:!0}),b.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Il(hn(e,s))},n}const me=Il(Wi);me.Axios=Ar;me.CanceledError=nr;me.CancelToken=Rm;me.isCancel=El;me.VERSION=wl;me.toFormData=ds;me.AxiosError=G;me.Cancel=me.CanceledError;me.all=function(t){return Promise.all(t)};me.spread=Sm;me.isAxiosError=Am;me.mergeConfig=hn;me.AxiosHeaders=ot;me.formToJSON=e=>bl(b.isHTMLForm(e)?new FormData(e):e);me.HttpStatusCode=Cm;me.default=me;const Om=me,ms=Om.create({baseURL:"http://localhost:3000/api"});async function Pm(e){return ms.get("/config-params",{headers:{Authorization:e}}).then(t=>t.data).catch(t=>{throw t})}async function km(e,t){return ms.delete(`/config-params/${t}`,{headers:{Authorization:e}}).then(n=>n.data).catch(n=>{throw n})}async function Nm(e,t){return ms.put("/config-params",t,{headers:{Authorization:e}}).then(n=>n.data).catch(n=>{throw n})}async function Dm(e,t){return ms.post("/config-params",t,{headers:{Authorization:e}}).then(n=>n.data).catch(n=>{throw n})}const xm=ts({name:"ParametersTable",setup(){const t=ro().user,n=wt({}),r=wt([]),s=wt("asc"),i=wt("Create Date"),o=Te(()=>["Parameter Key","Value","Description","Create Date"]),a=Te(()=>r.value.slice().sort((R,A)=>{const L=new Date(R.creation_date).getTime(),N=new Date(A.creation_date).getTime();return s.value==="asc"?L-N:N-L})),c=Te(()=>window.innerWidth>=768);Sc(()=>{l()});const l=async()=>{if(t)try{const R=await t.getIdToken(),A=await Pm(R);r.value=A.map(L=>({...L,editing:!1}))}catch(R){alert(R.response.data.message)}},u=async R=>{if(t)try{const A=await t.getIdToken();if(confirm("Are you sure that you want to delete this parameter ?")){const L=await km(A,R);alert(L.message),l()}}catch(A){alert(A.response.data.message)}},d=async R=>{if(t)try{const A=await t.getIdToken(),L=await Nm(A,R);alert(L.message),g(R),l()}catch(A){alert(A.response.data.message)}},p=async R=>{if(t)try{const A=await t.getIdToken(),L=await Dm(A,R);alert(L.message),l()}catch(A){alert(A.response.data.message)}},g=R=>{R.editing=!R.editing};return{user:t,parameter_form:n,configParams:r,sortColumn:i,sortOrder:s,sortedParams:a,columnHeaders:o,isDesktop:c,fetchConfigParams:l,removeParameter:u,saveParameter:d,addParameter:p,toggleEdit:g,formatTimestamp:R=>{const A={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return new Date(R).toLocaleString("tr-TR",A).replace(/\./g,"/")},toggleSort:R=>{console.log(R),i.value===R&&(console.log("e burası ?"),s.value=s.value==="asc"?"desc":"asc")},transformHeaderString:R=>R.split(/[\s_]+/).map(N=>N.length>0?N.charAt(0).toUpperCase()+N.slice(1).toLowerCase():"").join(" ")}}}),Mm=e=>(bc("data-v-a64053a8"),e=e(),Ec(),e),Lm={class:"table-heads"},Um=["onClick"],Fm={key:0},Bm={key:0},$m={class:"parameter-fields"},Hm={class:"parameter-fields"},jm={key:0},Wm=["onUpdate:modelValue"],Vm={class:"parameter-description"},zm={class:"parameter-fields"},Km={key:0},qm=["onUpdate:modelValue"],Gm={class:"parameter-fields"},Jm={key:0,class:"buttons"},Ym=["onClick"],Qm=["onClick"],Xm={key:0},Zm={key:1},eg={key:1,class:"buttons"},tg=["onClick"],ng={class:"text-white"},rg={colspan:"2"},sg={class:"buttons"},ig={key:1},og=Mm(()=>W("tr",null,[W("td",{colspan:"5",class:"loading-text"},"Loading...")],-1)),ag=[og];function cg(e,t,n,r,s,i){return le(),de("table",null,[W("thead",Lm,[W("tr",null,[(le(!0),de(Ue,null,Eo(e.columnHeaders,(o,a)=>(le(),de("th",{key:a,onClick:c=>e.toggleSort(o),class:"table-category"},[Mn(Le(o)+" ",1),o==="Create Date"?(le(),de("span",Fm,Le(e.sortOrder==="asc"?"↑":"↓"),1)):Bc("",!0)],8,Um))),128))])]),e.sortedParams.length>0?(le(),de("tbody",Bm,[(le(!0),de(Ue,null,Eo(e.sortedParams,(o,a)=>(le(),de("tr",{key:a,class:"text-white"},[W("td",null,[W("span",$m,Le(e.columnHeaders[0])+" : ",1),Mn(" "+Le(o.parameter_key),1)]),W("td",null,[W("span",Hm,Le(e.columnHeaders[1])+" : ",1),o.editing?In((le(),de("input",{key:1,"onUpdate:modelValue":c=>o.value=c},null,8,Wm)),[[Rn,o.value]]):(le(),de("span",jm,Le(o.value),1))]),W("td",Vm,[W("span",zm,Le(e.columnHeaders[2])+" : ",1),o.editing?In((le(),de("input",{key:1,"onUpdate:modelValue":c=>o.description=c},null,8,qm)),[[Rn,o.description]]):(le(),de("span",Km,Le(o.description),1))]),W("td",null,[W("span",Gm,Le(e.columnHeaders[3])+" : ",1),Mn(" "+Le(e.formatTimestamp(o.creation_date)),1)]),W("td",null,[o.editing?(le(),de("span",eg,[W("button",{onClick:c=>e.saveParameter(o),class:"btn-add"},"Save",8,tg)])):(le(),de("span",Jm,[W("button",{onClick:c=>e.toggleEdit(o),class:"btn-edit"}," Edit ",8,Ym),W("button",{type:"button",onClick:c=>e.removeParameter(o.parameter_key),class:"btn-delete"},[e.isDesktop?(le(),de("span",Xm," Delete ")):(le(),de("span",Zm," Del "))],8,Qm)]))])]))),128)),W("tr",ng,[W("td",null,[In(W("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.parameter_form.parameter_key=o),placeholder:"New Parameter"},null,512),[[Rn,e.parameter_form.parameter_key]])]),W("td",null,[In(W("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>e.parameter_form.value=o),placeholder:"Value"},null,512),[[Rn,e.parameter_form.value]])]),W("td",rg,[In(W("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>e.parameter_form.description=o),placeholder:"New Description"},null,512),[[Rn,e.parameter_form.description]])]),W("td",null,[W("span",sg,[W("button",{onClick:t[3]||(t[3]=o=>e.addParameter(e.parameter_form)),class:"btn-add"},"ADD")])])])])):(le(),de("tbody",ig,ag))])}const lg=cs(xm,[["render",cg],["__scopeId","data-v-a64053a8"]]);const ug={name:"HomePage",components:{ParametersTable:lg,NavigationBar:dp},setup(){}},fg={class:"centered-container"};function dg(e,t,n,r,s,i){const o=qs("NavigationBar"),a=qs("ParametersTable");return le(),de("div",null,[ve(o),W("div",fg,[ve(a,{class:"parameters-table"})])])}const hg=cs(ug,[["render",dg],["__scopeId","data-v-ebcf6ec2"]]);/**
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
 */const Tl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},pg=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[d],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Tl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new mg;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),d!==64){const _=l<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class mg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gg=function(e){const t=Tl(e);return Rl.encodeByteArray(t,!0)},Sl=function(e){return gg(e).replace(/\./g,"")},Al=function(e){try{return Rl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function _g(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const yg=()=>_g().__FIREBASE_DEFAULTS__,bg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Eg=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Al(e[1]);return t&&JSON.parse(t)},Ki=()=>{try{return yg()||bg()||Eg()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},vg=e=>{var t,n;return(n=(t=Ki())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Cl=()=>{var e;return(e=Ki())===null||e===void 0?void 0:e.config},Ol=e=>{var t;return(t=Ki())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class wg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ig(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Tg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Rg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sg(){const e=we();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ag(){try{return typeof indexedDB=="object"}catch{return!1}}function Cg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Og="FirebaseError";class Ot extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Og,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Pg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ot(s,a,r)}}function Pg(e,t){return e.replace(kg,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const kg=/\{\$([^}]+)}/g;function Ng(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Br(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(ga(i)&&ga(o)){if(!Br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ga(e){return e!==null&&typeof e=="object"}/**
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
 */function sr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Pn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function kn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Dg(e,t){const n=new xg(e,t);return n.subscribe.bind(n)}class xg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mg(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Ds),s.error===void 0&&(s.error=Ds),s.complete===void 0&&(s.complete=Ds);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ds(){}/**
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
 */function Pt(e){return e&&e._delegate?e._delegate:e}class pn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const xt="[DEFAULT]";/**
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
 */class Lg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new wg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fg(t))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xt){return this.instances.has(t)}getOptions(t=xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ug(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=xt){return this.component?this.component.multipleInstances?t:xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ug(e){return e===xt?void 0:e}function Fg(e){return e.instantiationMode==="EAGER"}/**
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
 */class Bg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Lg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const $g={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Hg=re.INFO,jg={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Wg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=jg[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pl{constructor(t){this.name=t,this._logLevel=Hg,this._logHandler=Wg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$g[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const Vg=(e,t)=>t.some(n=>e instanceof n);let _a,ya;function zg(){return _a||(_a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kg(){return ya||(ya=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kl=new WeakMap,ui=new WeakMap,Nl=new WeakMap,xs=new WeakMap,qi=new WeakMap;function qg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(St(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&kl.set(n,e)}).catch(()=>{}),qi.set(t,e),t}function Gg(e){if(ui.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ui.set(e,t)}let fi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ui.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Nl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Jg(e){fi=e(fi)}function Yg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ms(this),t,...n);return Nl.set(r,t.sort?t.sort():[t]),St(r)}:Kg().includes(e)?function(...t){return e.apply(Ms(this),t),St(kl.get(this))}:function(...t){return St(e.apply(Ms(this),t))}}function Qg(e){return typeof e=="function"?Yg(e):(e instanceof IDBTransaction&&Gg(e),Vg(e,zg())?new Proxy(e,fi):e)}function St(e){if(e instanceof IDBRequest)return qg(e);if(xs.has(e))return xs.get(e);const t=Qg(e);return t!==e&&(xs.set(e,t),qi.set(t,e)),t}const Ms=e=>qi.get(e);function Xg(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=St(o);return r&&o.addEventListener("upgradeneeded",c=>{r(St(o.result),c.oldVersion,c.newVersion,St(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Zg=["get","getKey","getAll","getAllKeys","count"],e_=["put","add","delete","clear"],Ls=new Map;function ba(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ls.get(t))return Ls.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=e_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ls.set(t,i),i}Jg(e=>({...e,get:(t,n,r)=>ba(t,n)||e.get(t,n,r),has:(t,n)=>!!ba(t,n)||e.has(t,n)}));/**
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
 */class t_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(n_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function n_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const di="@firebase/app",Ea="0.9.15";/**
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
 */const Wt=new Pl("@firebase/app"),r_="@firebase/app-compat",s_="@firebase/analytics-compat",i_="@firebase/analytics",o_="@firebase/app-check-compat",a_="@firebase/app-check",c_="@firebase/auth",l_="@firebase/auth-compat",u_="@firebase/database",f_="@firebase/database-compat",d_="@firebase/functions",h_="@firebase/functions-compat",p_="@firebase/installations",m_="@firebase/installations-compat",g_="@firebase/messaging",__="@firebase/messaging-compat",y_="@firebase/performance",b_="@firebase/performance-compat",E_="@firebase/remote-config",v_="@firebase/remote-config-compat",w_="@firebase/storage",I_="@firebase/storage-compat",T_="@firebase/firestore",R_="@firebase/firestore-compat",S_="firebase",A_="10.1.0";/**
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
 */const hi="[DEFAULT]",C_={[di]:"fire-core",[r_]:"fire-core-compat",[i_]:"fire-analytics",[s_]:"fire-analytics-compat",[a_]:"fire-app-check",[o_]:"fire-app-check-compat",[c_]:"fire-auth",[l_]:"fire-auth-compat",[u_]:"fire-rtdb",[f_]:"fire-rtdb-compat",[d_]:"fire-fn",[h_]:"fire-fn-compat",[p_]:"fire-iid",[m_]:"fire-iid-compat",[g_]:"fire-fcm",[__]:"fire-fcm-compat",[y_]:"fire-perf",[b_]:"fire-perf-compat",[E_]:"fire-rc",[v_]:"fire-rc-compat",[w_]:"fire-gcs",[I_]:"fire-gcs-compat",[T_]:"fire-fst",[R_]:"fire-fst-compat","fire-js":"fire-js",[S_]:"fire-js-all"};/**
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
 */const $r=new Map,pi=new Map;function O_(e,t){try{e.container.addComponent(t)}catch(n){Wt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Jn(e){const t=e.name;if(pi.has(t))return Wt.debug(`There were multiple attempts to register component ${t}.`),!1;pi.set(t,e);for(const n of $r.values())O_(n,e);return!0}function Dl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const P_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new rr("app","Firebase",P_);/**
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
 */class k_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const ir=A_;function xl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:hi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw At.create("bad-app-name",{appName:String(s)});if(n||(n=Cl()),!n)throw At.create("no-options");const i=$r.get(s);if(i){if(Br(n,i.options)&&Br(r,i.config))return i;throw At.create("duplicate-app",{appName:s})}const o=new Bg(s);for(const c of pi.values())o.addComponent(c);const a=new k_(n,r,o);return $r.set(s,a),a}function N_(e=hi){const t=$r.get(e);if(!t&&e===hi&&Cl())return xl();if(!t)throw At.create("no-app",{appName:e});return t}function sn(e,t,n){var r;let s=(r=C_[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wt.warn(a.join(" "));return}Jn(new pn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const D_="firebase-heartbeat-database",x_=1,Yn="firebase-heartbeat-store";let Us=null;function Ml(){return Us||(Us=Xg(D_,x_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Yn)}}}).catch(e=>{throw At.create("idb-open",{originalErrorMessage:e.message})})),Us}async function M_(e){try{return await(await Ml()).transaction(Yn).objectStore(Yn).get(Ll(e))}catch(t){if(t instanceof Ot)Wt.warn(t.message);else{const n=At.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(n.message)}}}async function va(e,t){try{const r=(await Ml()).transaction(Yn,"readwrite");await r.objectStore(Yn).put(t,Ll(e)),await r.done}catch(n){if(n instanceof Ot)Wt.warn(n.message);else{const r=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(r.message)}}}function Ll(e){return`${e.name}!${e.options.appId}`}/**
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
 */const L_=1024,U_=30*24*60*60*1e3;class F_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=U_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wa(),{heartbeatsToSend:n,unsentEntries:r}=B_(this._heartbeatsCache.heartbeats),s=Sl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function wa(){return new Date().toISOString().substring(0,10)}function B_(e,t=L_){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ia(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ia(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ag()?Cg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await M_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return va(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return va(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ia(e){return Sl(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function H_(e){Jn(new pn("platform-logger",t=>new t_(t),"PRIVATE")),Jn(new pn("heartbeat",t=>new F_(t),"PRIVATE")),sn(di,Ea,e),sn(di,Ea,"esm2017"),sn("fire-js","")}H_("");var j_="firebase",W_="10.1.0";/**
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
 */sn(j_,W_,"app");function Gi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Ul(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const V_=Ul,Fl=new rr("auth","Firebase",Ul());/**
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
 */const Hr=new Pl("@firebase/auth");function z_(e,...t){Hr.logLevel<=re.WARN&&Hr.warn(`Auth (${ir}): ${e}`,...t)}function Cr(e,...t){Hr.logLevel<=re.ERROR&&Hr.error(`Auth (${ir}): ${e}`,...t)}/**
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
 */function We(e,...t){throw Ji(e,...t)}function Qe(e,...t){return Ji(e,...t)}function K_(e,t,n){const r=Object.assign(Object.assign({},V_()),{[t]:n});return new rr("auth","Firebase",r).create(t,{appName:e.name})}function Ji(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Fl.create(e,...t)}function $(e,t,...n){if(!e)throw Ji(t,...n)}function st(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Cr(t),new Error(t)}function ct(e,t){e||st(t)}/**
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
 */function mi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function q_(){return Ta()==="http:"||Ta()==="https:"}function Ta(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function G_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q_()||Tg()||"connection"in navigator)?navigator.onLine:!0}function J_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class or{constructor(t,n){this.shortDelay=t,this.longDelay=n,ct(n>t,"Short delay should be less than long delay!"),this.isMobile=Ig()||Rg()}get(){return G_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yi(e,t){ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Bl{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Y_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Q_=new or(3e4,6e4);function ar(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function En(e,t,n,r,s={}){return $l(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=sr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Bl.fetch()(Hl(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function $l(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Y_),t);try{const s=new X_(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw yr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw yr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw K_(e,u,l);We(e,u)}}catch(s){if(s instanceof Ot)throw s;We(e,"network-request-failed",{message:String(s)})}}async function gs(e,t,n,r,s={}){const i=await En(e,t,n,r,s);return"mfaPendingCredential"in i&&We(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Hl(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Yi(e.config,s):`${e.config.apiScheme}://${s}`}class X_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),Q_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qe(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Z_(e,t){return En(e,"POST","/v1/accounts:delete",t)}async function ey(e,t){return En(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Bn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ty(e,t=!1){const n=Pt(e),r=await n.getIdToken(t),s=Qi(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bn(Fs(s.auth_time)),issuedAtTime:Bn(Fs(s.iat)),expirationTime:Bn(Fs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fs(e){return Number(e)*1e3}function Qi(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Cr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Al(n);return s?JSON.parse(s):(Cr("Failed to decode base64 JWT payload"),null)}catch(s){return Cr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ny(e){const t=Qi(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Qn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ot&&ry(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ry({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class sy{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Qn(e,ey(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?ay(i.providerUserInfo):[],a=oy(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function iy(e){const t=Pt(e);await jr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oy(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function ay(e){return e.map(t=>{var{providerId:n}=t,r=Gi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cy(e,t){const n=await $l(e,{},async()=>{const r=sr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Hl(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ny(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return $(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cy(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Xn;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function pt(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ht{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Gi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Qn(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return ty(this,t)}reload(){return iy(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ht(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Qn(this,Z_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:N,isAnonymous:Q,providerData:ce,stsTokenManager:he}=n;$(L&&he,t,"internal-error");const K=Xn.fromJSON(this.name,he);$(typeof L=="string",t,"internal-error"),pt(d,t.name),pt(p,t.name),$(typeof N=="boolean",t,"internal-error"),$(typeof Q=="boolean",t,"internal-error"),pt(g,t.name),pt(_,t.name),pt(w,t.name),pt(D,t.name),pt(R,t.name),pt(A,t.name);const V=new Ht({uid:L,auth:t,email:p,emailVerified:N,displayName:d,isAnonymous:Q,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:K,createdAt:R,lastLoginAt:A});return ce&&Array.isArray(ce)&&(V.providerData=ce.map(ae=>Object.assign({},ae))),D&&(V._redirectEventId=D),V}static async _fromIdTokenResponse(t,n,r=!1){const s=new Xn;s.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await jr(i),i}}/**
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
 */const Ra=new Map;function it(e){ct(e instanceof Function,"Expected a class definition");let t=Ra.get(e);return t?(ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ra.set(e,t),t)}/**
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
 */class Wl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Wl.type="NONE";const Sa=Wl;/**
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
 */function Or(e,t,n){return`firebase:${e}:${t}:${n}`}class on{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Or(this.userKey,s.apiKey,i),this.fullPersistenceKey=Or("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ht._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new on(it(Sa),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||it(Sa);const o=Or(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Ht._fromJSON(t,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new on(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new on(i,t,r))}}/**
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
 */function Aa(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Kl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Vl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gl(t))return"Blackberry";if(Jl(t))return"Webos";if(Xi(t))return"Safari";if((t.includes("chrome/")||zl(t))&&!t.includes("edge/"))return"Chrome";if(ql(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vl(e=we()){return/firefox\//i.test(e)}function Xi(e=we()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zl(e=we()){return/crios\//i.test(e)}function Kl(e=we()){return/iemobile/i.test(e)}function ql(e=we()){return/android/i.test(e)}function Gl(e=we()){return/blackberry/i.test(e)}function Jl(e=we()){return/webos/i.test(e)}function _s(e=we()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ly(e=we()){var t;return _s(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function uy(){return Sg()&&document.documentMode===10}function Yl(e=we()){return _s(e)||ql(e)||Jl(e)||Gl(e)||/windows phone/i.test(e)||Kl(e)}function fy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ql(e,t=[]){let n;switch(e){case"Browser":n=Aa(we());break;case"Worker":n=`${Aa(we())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ir}/${r}`}async function Xl(e,t){return En(e,"GET","/v2/recaptchaConfig",ar(e,t))}function Ca(e){return e!==void 0&&e.enterprise!==void 0}class Zl{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function dy(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function eu(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=Qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dy().appendChild(r)})}function hy(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const py="https://www.google.com/recaptcha/enterprise.js?render=",my="recaptcha-enterprise",gy="NO_RECAPTCHA";class tu{constructor(t){this.type=my,this.auth=cr(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Xl(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Zl(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Ca(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(gy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Ca(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}eu(py+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Oa(e,t,n,r=!1){const s=new tu(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class _y{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class yy{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pa(this),this.idTokenSubscription=new Pa(this),this.beforeStateQueue=new _y(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await on.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await jr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=J_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Pt(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(t))})}async initializeRecaptchaConfig(){const t=await Xl(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Zl(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new tu(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new rr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&it(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,r,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ql(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&z_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cr(e){return Pt(e)}class Pa{constructor(t){this.auth=t,this.observer=null,this.addObserver=Dg(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function by(e,t){const n=Dl(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Br(i,t??{}))return s;We(s,"already-initialized")}return n.initialize({options:t})}function Ey(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function vy(e,t,n){const r=cr(e);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=nu(t),{host:o,port:a}=wy(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Iy()}function nu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function wy(e){const t=nu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ka(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ka(o)}}}function ka(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Iy(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Zi{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(t){return st("not implemented")}_linkToIdToken(t,n){return st("not implemented")}_getReauthenticationResolver(t){return st("not implemented")}}async function Ty(e,t){return En(e,"POST","/v1/accounts:update",t)}/**
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
 */async function Bs(e,t){return gs(e,"POST","/v1/accounts:signInWithPassword",ar(e,t))}/**
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
 */async function Ry(e,t){return gs(e,"POST","/v1/accounts:signInWithEmailLink",ar(e,t))}async function Sy(e,t){return gs(e,"POST","/v1/accounts:signInWithEmailLink",ar(e,t))}/**
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
 */class Zn extends Zi{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Zn(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Zn(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Oa(t,r,"signInWithPassword");return Bs(t,s)}else return Bs(t,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Oa(t,r,"signInWithPassword");return Bs(t,i)}else return Promise.reject(s)});case"emailLink":return Ry(t,{email:this._email,oobCode:this._password});default:We(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Ty(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sy(t,{idToken:n,email:this._email,oobCode:this._password});default:We(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function an(e,t){return gs(e,"POST","/v1/accounts:signInWithIdp",ar(e,t))}/**
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
 */const Ay="http://localhost";class Vt extends Zi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Vt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Gi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return an(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,an(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,an(t,n)}buildRequest(){const t={requestUri:Ay,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=sr(n)}return t}}/**
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
 */function Cy(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Oy(e){const t=Pn(kn(e)).link,n=t?Pn(kn(t)).deep_link_id:null,r=Pn(kn(e)).deep_link_id;return(r?Pn(kn(r)).link:null)||r||n||t||e}class eo{constructor(t){var n,r,s,i,o,a;const c=Pn(kn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Cy((s=c.mode)!==null&&s!==void 0?s:null);$(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Oy(t);try{return new eo(n)}catch{return null}}}/**
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
 */class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(t,n){return Zn._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=eo.parseLink(n);return $(r,"argument-error"),Zn._fromEmailAndCode(t,r.code,r.tenantId)}}vn.PROVIDER_ID="password";vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ru{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class lr extends ru{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class yt extends lr{constructor(){super("facebook.com")}static credential(t){return Vt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yt.credentialFromTaggedObject(t)}static credentialFromError(t){return yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yt.credential(t.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
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
 */class bt extends lr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Vt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class Et extends lr{constructor(){super("github.com")}static credential(t){return Vt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class vt extends lr{constructor(){super("twitter.com")}static credential(t,n){return Vt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return vt.credentialFromTaggedObject(t)}static credentialFromError(t){return vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
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
 */class mn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Ht._fromIdTokenResponse(t,r,s),o=Na(r);return new mn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Na(r);return new mn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Na(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Wr extends Ot{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Wr(t,n,r,s)}}function su(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wr._fromErrorAndOperation(e,i,t,r):i})}async function Py(e,t,n=!1){const r=await Qn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return mn._forOperation(e,"link",r)}/**
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
 */async function ky(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await Qn(e,su(r,s,t,e),n);$(i.idToken,r,"internal-error");const o=Qi(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(e.uid===a,r,"user-mismatch"),mn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&We(r,"user-mismatch"),i}}/**
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
 */async function iu(e,t,n=!1){const r="signIn",s=await su(e,r,t),i=await mn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Ny(e,t){return iu(cr(e),t)}function Dy(e,t,n){return Ny(Pt(e),vn.credential(t,n))}function xy(e,t,n,r){return Pt(e).onIdTokenChanged(t,n,r)}function My(e,t,n){return Pt(e).beforeAuthStateChanged(t,n)}function Ly(e){return Pt(e).signOut()}const Vr="__sak";/**
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
 */class ou{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vr,"1"),this.storage.removeItem(Vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Uy(){const e=we();return Xi(e)||_s(e)}const Fy=1e3,By=10;class au extends ou{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Uy()&&fy(),this.fallbackToPolling=Yl(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uy()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,By):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Fy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}au.type="LOCAL";const $y=au;/**
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
 */class cu extends ou{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}cu.type="SESSION";const lu=cu;/**
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
 */function Hy(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ys{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ys(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Hy(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ys.receivers=[];/**
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
 */function to(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class jy{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=to("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xe(){return window}function Wy(e){Xe().location.href=e}/**
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
 */function uu(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function Vy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zy(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ky(){return uu()?self:null}/**
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
 */const fu="firebaseLocalStorageDb",qy=1,zr="firebaseLocalStorage",du="fbase_key";class ur{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bs(e,t){return e.transaction([zr],t?"readwrite":"readonly").objectStore(zr)}function Gy(){const e=indexedDB.deleteDatabase(fu);return new ur(e).toPromise()}function gi(){const e=indexedDB.open(fu,qy);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(zr,{keyPath:du})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(zr)?t(r):(r.close(),await Gy(),t(await gi()))})})}async function Da(e,t,n){const r=bs(e,!0).put({[du]:t,value:n});return new ur(r).toPromise()}async function Jy(e,t){const n=bs(e,!1).get(t),r=await new ur(n).toPromise();return r===void 0?null:r.value}function xa(e,t){const n=bs(e,!0).delete(t);return new ur(n).toPromise()}const Yy=800,Qy=3;class hu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Qy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ys._getInstance(Ky()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Vy(),!this.activeServiceWorker)return;this.sender=new jy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||zy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await gi();return await Da(t,Vr,"1"),await xa(t,Vr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Da(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Jy(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>xa(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=bs(s,!1).getAll();return new ur(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hu.type="LOCAL";const Xy=hu;new or(3e4,6e4);/**
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
 */function Zy(e,t){return t?it(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class no extends Zi{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return an(t,this._buildIdpRequest())}_linkToIdToken(t,n){return an(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return an(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function eb(e){return iu(e.auth,new no(e),e.bypassAuthState)}function tb(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),ky(n,new no(e),e.bypassAuthState)}async function nb(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),Py(n,new no(e),e.bypassAuthState)}/**
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
 */class pu{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return eb;case"linkViaPopup":case"linkViaRedirect":return nb;case"reauthViaPopup":case"reauthViaRedirect":return tb;default:We(this.auth,"internal-error")}}resolve(t){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rb=new or(2e3,1e4);class Xt extends pu{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const t=to();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,rb.get())};t()}}Xt.currentPopupAction=null;/**
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
 */const sb="pendingRedirect",Pr=new Map;class ib extends pu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Pr.get(this.auth._key());if(!t){try{const r=await ob(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Pr.set(this.auth._key(),t)}return this.bypassAuthState||Pr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ob(e,t){const n=lb(t),r=cb(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ab(e,t){Pr.set(e._key(),t)}function cb(e){return it(e._redirectPersistence)}function lb(e){return Or(sb,e.config.apiKey,e.name)}async function ub(e,t,n=!1){const r=cr(e),s=Zy(r,t),o=await new ib(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const fb=10*60*1e3;class db{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!hb(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!mu(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=fb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ma(t))}saveEventToCache(t){this.cachedEventUids.add(Ma(t)),this.lastProcessedEventTime=Date.now()}}function Ma(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function mu({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function hb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mu(e);default:return!1}}/**
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
 */async function pb(e,t={}){return En(e,"GET","/v1/projects",t)}/**
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
 */const mb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gb=/^https?/;async function _b(e){if(e.config.emulator)return;const{authorizedDomains:t}=await pb(e);for(const n of t)try{if(yb(n))return}catch{}We(e,"unauthorized-domain")}function yb(e){const t=mi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gb.test(n))return!1;if(mb.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const bb=new or(3e4,6e4);function La(){const e=Xe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Eb(e){return new Promise((t,n)=>{var r,s,i;function o(){La(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{La(),n(Qe(e,"network-request-failed"))},timeout:bb.get()})}if(!((s=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=Xe().gapi)===null||i===void 0)&&i.load)o();else{const a=hy("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Qe(e,"network-request-failed"))},eu(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw kr=null,t})}let kr=null;function vb(e){return kr=kr||Eb(e),kr}/**
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
 */const wb=new or(5e3,15e3),Ib="__/auth/iframe",Tb="emulator/auth/iframe",Rb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ab(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Yi(t,Tb):`https://${e.config.authDomain}/${Ib}`,r={apiKey:t.apiKey,appName:e.name,v:ir},s=Sb.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${sr(r).slice(1)}`}async function Cb(e){const t=await vb(e),n=Xe().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:Ab(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(e,"network-request-failed"),a=Xe().setTimeout(()=>{i(o)},wb.get());function c(){Xe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pb=500,kb=600,Nb="_blank",Db="http://localhost";class Ua{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xb(e,t,n,r=Pb,s=kb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ob),{width:r.toString(),height:s.toString(),top:i,left:o}),l=we().toLowerCase();n&&(a=zl(l)?Nb:n),Vl(l)&&(t=t||Db,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(ly(l)&&a!=="_self")return Mb(t||"",a),new Ua(null);const d=window.open(t||"",a,u);$(d,e,"popup-blocked");try{d.focus()}catch{}return new Ua(d)}function Mb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Lb="__/auth/handler",Ub="emulator/auth/handler",Fb=encodeURIComponent("fac");async function Fa(e,t,n,r,s,i){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ir,eventId:s};if(t instanceof ru){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ng(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(t instanceof lr){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Fb}=${encodeURIComponent(c)}`:"";return`${Bb(e)}?${sr(a).slice(1)}${l}`}function Bb({config:e}){return e.emulator?Yi(e,Ub):`https://${e.authDomain}/${Lb}`}/**
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
 */const $s="webStorageSupport";class $b{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lu,this._completeRedirectFn=ub,this._overrideRedirectResult=ab}async _openPopup(t,n,r,s){var i;ct((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Fa(t,n,r,mi(),s);return xb(t,o,to())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Fa(t,n,r,mi(),s);return Wy(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Cb(t),r=new db(t);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($s,{type:$s},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$s];o!==void 0&&n(!!o),We(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_b(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yl()||Xi()||_s()}}const Hb=$b;var Ba="@firebase/auth",$a="1.1.0";/**
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
 */class jb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vb(e){Jn(new pn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ql(e)},l=new yy(r,s,i,c);return Ey(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Jn(new pn("auth-internal",t=>{const n=cr(t.getProvider("auth").getImmediate());return(r=>new jb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(Ba,$a,Wb(e)),sn(Ba,$a,"esm2017")}/**
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
 */const zb=5*60,Kb=Ol("authIdTokenMaxAge")||zb;let Ha=null;const qb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kb)return;const s=n==null?void 0:n.token;Ha!==s&&(Ha=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gb(e=N_()){const t=Dl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=by(e,{popupRedirectResolver:Hb,persistence:[Xy,$y,lu]}),r=Ol("authTokenSyncURL");if(r){const i=qb(r);My(n,i,()=>i(n.currentUser)),xy(n,o=>i(o))}const s=vg("auth");return s&&vy(n,`http://${s}`),n}Vb("Browser");const Jb={apiKey:"AIzaSyDxGraxDAApTF9-cxqiOSj_U6Y0P8P8ouM",authDomain:"configuration-manager-4a193.firebaseapp.com",projectId:"configuration-manager-4a193",storageBucket:"configuration-manager-4a193.appspot.com",messagingSenderId:"672568935448",appId:"1:672568935448:web:b52e3f22a73f8d52b5ef6d",measurementId:"G-0FKKMQBW56"},Yb=xl(Jb),Zt=Gb(Yb),Ut=Yh({history:hh("/"),routes:[{path:"/",name:"home",component:hg,meta:{requiresAuth:!0}},{path:"/signin",name:"signin",component:()=>ep(()=>import("./SigninPage-a24b4c5f.js"),["assets/SigninPage-a24b4c5f.js","assets/SigninPage-103b9b49.css"])}]});Ut.beforeEach((e,t,n)=>{if(e.path==="/signin"&&Zt.currentUser){n("/");return}if(e.matched.some(r=>r.meta.requiresAuth)&&!Zt.currentUser){n("/signin");return}n()});const ro=Jd("user",{state:()=>({user:null}),getters:{},actions:{SET_USER(e){this.user=e},CLEAR_USER(){this.user=null},async signin(e){const{email:t,password:n}=e;try{await Dy(Zt,t,n)}catch(r){switch(r.code){case"auth/user-not-found":alert("User not found");break;case"auth/wrong-password":alert("Wrong password");break;default:alert(r.message)}return}this.SET_USER(Zt.currentUser),Ut.push("/")},async signout(){await Ly(Zt),this.CLEAR_USER(),Ut.push("/signin")},async fetchUser(){Zt.onAuthStateChanged(async e=>{e===null?this.CLEAR_USER():(this.SET_USER(e),Ut.isReady()&&Ut.currentRoute.value.path==="/signin"&&Ut.push("/"))})}}}),Qb={setup(){const e=ro();return Rc(async()=>{await e.fetchUser()}),{RouterView:sl}}};function Xb(e,t,n,r,s,i){const o=qs("RouterView");return le(),de("div",null,[ve(o)])}const Zb=cs(Qb,[["render",Xb]]),so=$d(Zb);so.use(Wd());so.use(Ut);so.mount("#app");export{cs as _,W as a,eE as b,de as c,ts as d,Ec as e,qs as f,ve as g,tp as h,le as o,bc as p,wt as r,ro as u,Rn as v,In as w};
