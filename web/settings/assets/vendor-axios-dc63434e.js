import{g as ke,b as Ie}from"./vendor-94ac8c48.js";function ye(e,t){return function(){return e.apply(t,arguments)}}const{toString:He}=Object.prototype,{getPrototypeOf:te}=Object,M=(e=>t=>{const n=He.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>M(t)===e),q=e=>t=>typeof t===e,{isArray:P}=Array,F=q("undefined");function Me(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&b(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const we=R("ArrayBuffer");function qe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&we(e.buffer),t}const ze=q("string"),b=q("function"),Ee=q("number"),z=e=>e!==null&&typeof e=="object",Ve=e=>e===!0||e===!1,L=e=>{if(M(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Je=R("Date"),$e=R("File"),We=R("Blob"),ve=R("FileList"),Ke=e=>z(e)&&b(e.pipe),Ge=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||b(e.append)&&((t=M(e))==="formdata"||t==="object"&&b(e.toString)&&e.toString()==="[object FormData]"))},Xe=R("URLSearchParams"),Qe=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function be(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Se=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:ke)(),Oe=e=>!F(e)&&e!==Se;function Q(){const{caseless:e}=Oe(this)&&this||{},t={},n=(r,s)=>{const o=e&&be(t,s)||s;L(t[o])&&L(r)?t[o]=Q(t[o],r):L(r)?t[o]=Q({},r):P(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&_(arguments[r],n);return t}const Ye=(e,t,n,{allOwnKeys:r}={})=>(_(t,(s,o)=>{n&&b(s)?e[o]=ye(s,n):e[o]=s},{allOwnKeys:r}),e),Ze=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),et=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},tt=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},nt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},rt=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Ee(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},st=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),ot=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},it=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},at=R("HTMLFormElement"),ct=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ie=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ut=R("RegExp"),Re=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},lt=e=>{Re(e,(t,n)=>{if(b(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(b(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ft=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return P(e)?r(e):r(String(e).split(t)),n},dt=()=>{},pt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),W="abcdefghijklmnopqrstuvwxyz",ae="0123456789",Ae={DIGIT:ae,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+ae},ht=(e=16,t=Ae.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function mt(e){return!!(e&&b(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const yt=e=>{const t=new Array(10),n=(r,s)=>{if(z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=P(r)?[]:{};return _(r,(i,u)=>{const d=n(i,s+1);!F(d)&&(o[u]=d)}),t[s]=void 0,o}}return r};return n(e,0)},wt=R("AsyncFunction"),Et=e=>e&&(z(e)||b(e))&&b(e.then)&&b(e.catch),a={isArray:P,isArrayBuffer:we,isBuffer:Me,isFormData:Ge,isArrayBufferView:qe,isString:ze,isNumber:Ee,isBoolean:Ve,isObject:z,isPlainObject:L,isUndefined:F,isDate:Je,isFile:$e,isBlob:We,isRegExp:ut,isFunction:b,isStream:Ke,isURLSearchParams:Xe,isTypedArray:st,isFileList:ve,forEach:_,merge:Q,extend:Ye,trim:Qe,stripBOM:Ze,inherits:et,toFlatObject:tt,kindOf:M,kindOfTest:R,endsWith:nt,toArray:rt,forEachEntry:ot,matchAll:it,isHTMLForm:at,hasOwnProperty:ie,hasOwnProp:ie,reduceDescriptors:Re,freezeMethods:lt,toObjectSet:ft,toCamelCase:ct,noop:dt,toFiniteNumber:pt,findKey:be,global:Se,isContextDefined:Oe,ALPHABET:Ae,generateString:ht,isSpecCompliantForm:mt,toJSONObject:yt,isAsyncFn:wt,isThenable:Et};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Te=m.prototype,xe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{xe[e]={value:e}});Object.defineProperties(m,xe);Object.defineProperty(Te,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Te);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const bt=null;function Y(e){return a.isPlainObject(e)||a.isArray(e)}function ge(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ce(e,t,n){return e?e.concat(t).map(function(s,o){return s=ge(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function St(e){return a.isArray(e)&&!e.some(Y)}const Ot=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,A){return!a.isUndefined(A[h])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Ie.Buffer.from(f):f}function l(f,h,A){let S=f;if(f&&!A&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&St(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(S=a.toArray(f)))return h=ge(h),S.forEach(function(D,je){!(a.isUndefined(D)||D===null)&&t.append(i===!0?ce([h],je,o):i===null?h:h+"[]",c(D))}),!1}return Y(f)?!0:(t.append(ce(A,h,o),c(f)),!1)}const p=[],E=Object.assign(Ot,{defaultVisitor:l,convertValue:c,isVisitable:Y});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(S,g){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(g)?g.trim():g,h,E))===!0&&y(S,h?h.concat(g):[g])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function ue(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ne(e,t){this._pairs=[],e&&V(e,this,t)}const Ne=ne.prototype;Ne.append=function(t,n){this._pairs.push([t,n])};Ne.toString=function(t){const n=t?function(r){return t.call(this,r,ue)}:ue;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Rt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Pe(e,t,n){if(!t)return e;const r=n&&n.encode||Rt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ne(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class At{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const le=At,Ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Tt=typeof URLSearchParams<"u"?URLSearchParams:ne,xt=typeof FormData<"u"?FormData:null,gt=typeof Blob<"u"?Blob:null,Nt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Pt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Tt,FormData:xt,Blob:gt},isStandardBrowserEnv:Nt,isStandardBrowserWebWorkerEnv:Pt,protocols:["http","https","file","blob","url","data"]};function Ct(e,t){return V(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ft(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function _t(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Fe(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=_t(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Ft(r),s,n,0)}),n}return null}const Bt={"Content-Type":void 0};function Dt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const J={transitional:Ce,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Fe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ct(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return V(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Dt(t)):t}],transformResponse:[function(t){const n=this.transitional||J.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){J.headers[t]={}});a.forEach(["post","put","patch"],function(t){J.headers[t]=a.merge(Bt)});const re=J,Lt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ut=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Lt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},fe=Symbol("internals");function C(e){return e&&String(e).trim().toLowerCase()}function U(e){return e===!1||e==null?e:a.isArray(e)?e.map(U):String(e)}function jt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const kt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function v(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function It(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ht(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class ${constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,d,c){const l=C(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=U(u))}const i=(u,d)=>a.forEach(u,(c,l)=>o(c,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!kt(t)?i(Ut(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=C(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return jt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=C(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||v(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=C(i),i){const u=a.findKey(r,i);u&&(!n||v(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||v(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=U(s),delete n[o];return}const u=t?It(o):String(o).trim();u!==o&&delete n[o],n[u]=U(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[fe]=this[fe]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=C(i);r[u]||(Ht(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}$.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods($.prototype);a.freezeMethods($);const T=$;function K(e,t){const n=this||re,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function _e(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});function Mt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const qt=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function zt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Vt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Be(e,t){return e&&!zt(t)?Vt(e,t):t}const Jt=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function $t(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Wt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),l=r[o];i||(i=c),n[s]=d,r[s]=c;let p=o,E=0;for(;p!==s;)E+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=l&&c-l;return y?Math.round(E*1e3/y):void 0}}function de(e,t){let n=0;const r=Wt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,d=r(u),c=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const vt=typeof XMLHttpRequest<"u",Kt=vt&&function(e){return new Promise(function(n,r){let s=e.data;const o=T.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+f))}const l=Be(e.baseURL,e.url);c.open(e.method.toUpperCase(),Pe(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Mt(function(S){n(S),d()},function(S){r(S),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Ce;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const y=(e.withCredentials||Jt(l))&&e.xsrfCookieName&&qt.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",de(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",de(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{c&&(r(!y||y.type?new B(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const E=$t(l);if(E&&O.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},j={http:bt,xhr:Kt};a.forEach(j,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Gt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?j[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(j,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:j};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function pe(e){return G(e),e.headers=T.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Gt.getAdapter(e.adapter||re.adapter)(e).then(function(r){return G(e),r.data=K.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return _e(r)||(G(e),r&&r.response&&(r.response.data=K.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const he=e=>e instanceof T?e.toJSON():e;function N(e,t){t=t||{};const n={};function r(c,l,p){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:p},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(c,l,p){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,l,p)}function o(c,l){if(!a.isUndefined(l))return r(void 0,l)}function i(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,p){if(p in t)return r(c,l);if(p in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,l)=>s(he(c),he(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=d[l]||s,E=p(e[l],t[l],l);a.isUndefined(E)&&p!==u||(n[l]=E)}),n}const De="1.4.0",se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{se[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const me={};se.transitional=function(t,n,r){function s(o,i){return"[Axios v"+De+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!me[i]&&(me[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function Xt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],d=u===void 0||i(u,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Z={assertOptions:Xt,validators:se},x=Z.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new le,response:new le}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=N(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Z.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Z.assertOptions(s,{encode:x.function,serialize:x.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=T.concat(i,o);const u=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,p=0,E;if(!d){const f=[pe.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,c),E=f.length,l=Promise.resolve(n);p<E;)l=l.then(f[p++],f[p++]);return l}E=u.length;let y=n;for(p=0;p<E;){const f=u[p++],h=u[p++];try{y=f(y)}catch(A){h.call(this,A);break}}try{l=pe.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,E=c.length;p<E;)l=l.then(c[p++],c[p++]);return l}getUri(t){t=N(this.defaults,t);const n=Be(t.baseURL,t.url);return Pe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(n,r){return this.request(N(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(N(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}I.prototype[t]=n(),I.prototype[t+"Form"]=n(!0)});const k=I;class oe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new B(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new oe(function(s){t=s}),cancel:t}}}const Qt=oe;function Yt(e){return function(n){return e.apply(null,n)}}function Zt(e){return a.isObject(e)&&e.isAxiosError===!0}const ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ee).forEach(([e,t])=>{ee[t]=e});const en=ee;function Le(e){const t=new k(e),n=ye(k.prototype.request,t);return a.extend(n,k.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Le(N(e,s))},n}const w=Le(re);w.Axios=k;w.CanceledError=B;w.CancelToken=Qt;w.isCancel=_e;w.VERSION=De;w.toFormData=V;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Yt;w.isAxiosError=Zt;w.mergeConfig=N;w.AxiosHeaders=T;w.formToJSON=e=>Fe(a.isHTMLForm(e)?new FormData(e):e);w.HttpStatusCode=en;w.default=w;const cn=w;function H(e){return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(e)}function X(e,t){if(!e.vueAxiosInstalled){var n=Ue(t)?rn(t):t;if(sn(n)){var r=on(e);if(r){var s=r<3?tn:nn;Object.keys(n).forEach(function(o){s(e,o,n[o])}),e.vueAxiosInstalled=!0}else console.error("[vue-axios] unknown Vue version")}else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }")}}function tn(e,t,n){Object.defineProperty(e.prototype,t,{get:function(){return n}}),e[t]=n}function nn(e,t,n){e.config.globalProperties[t]=n,e[t]=n}function Ue(e){return e&&typeof e.get=="function"&&typeof e.post=="function"}function rn(e){return{axios:e,$http:e}}function sn(e){return H(e)==="object"&&Object.keys(e).every(function(t){return Ue(e[t])})}function on(e){return e&&e.version&&Number(e.version.split(".")[0])}(typeof exports>"u"?"undefined":H(exports))=="object"?module.exports=X:typeof define=="function"&&define.amd?define([],function(){return X}):window.Vue&&window.axios&&window.Vue.use&&Vue.use(X,window.axios);export{cn as a,X as p};
