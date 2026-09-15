var zc=Object.defineProperty;var Rc=(e,t,n)=>t in e?zc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>Rc(e,typeof t!="symbol"?t+"":t,n);import{g as xl}from"./gsap-SFc2wnMY.js";import{V as Q,P as Ac,M as Fe,G as ln,C as Di,a as ie,S as Un,B as Dr,F as oa,O as Lc,b as Ur,c as Pt,I as Ic,D as sa,d as Oc,A as Fc,H as Dc,e as Uc,f as yo,g as Wt,h as Ui,i as Gi,j as Hi,k as xr,l as Gc,m as Hc,T as Bc,n as $c,o as Vc,R as Wc,p as Yc,W as Qc,q as Xc,r as Kc,s as Zc,t as wr,u as qc,v as Jc,w as ed}from"./three-BLuAq5hc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wl={exports:{}},Si={},kl={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),nd=Symbol.for("react.portal"),rd=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),ad=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),cd=Symbol.for("react.memo"),dd=Symbol.for("react.lazy"),aa=Symbol.iterator;function pd(e){return e===null||typeof e!="object"?null:(e=aa&&e[aa]||e["@@iterator"],typeof e=="function"?e:null)}var _l={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sl=Object.assign,El={};function _n(e,t,n){this.props=e,this.context=t,this.refs=El,this.updater=n||_l}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nl(){}Nl.prototype=_n.prototype;function ds(e,t,n){this.props=e,this.context=t,this.refs=El,this.updater=n||_l}var ps=ds.prototype=new Nl;ps.constructor=ds;Sl(ps,_n.prototype);ps.isPureReactComponent=!0;var la=Array.isArray,bl=Object.prototype.hasOwnProperty,fs={current:null},jl={key:!0,ref:!0,__self:!0,__source:!0};function Cl(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)bl.call(t,r)&&!jl.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fr,type:e,key:o,ref:s,props:i,_owner:fs.current}}function fd(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function hd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ua=/\/+/g;function Bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hd(""+e.key):t.toString(36)}function Gr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case fr:case nd:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Bi(s,0):r,la(i)?(n="",e!=null&&(n=e.replace(ua,"$&/")+"/"),Gr(i,t,n,"",function(d){return d})):i!=null&&(hs(i)&&(i=fd(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ua,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",la(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Bi(o,a);s+=Gr(o,t,n,u,i)}else if(u=pd(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Bi(o,a++),s+=Gr(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function kr(e,t,n){if(e==null)return e;var r=[],i=0;return Gr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function md(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Hr={transition:null},gd={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Hr,ReactCurrentOwner:fs};function Tl(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=_n;A.Fragment=rd;A.Profiler=od;A.PureComponent=ds;A.StrictMode=id;A.Suspense=ud;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gd;A.act=Tl;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sl({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=fs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)bl.call(t,u)&&!jl.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:fr,type:e.type,key:i,ref:o,props:r,_owner:s}};A.createContext=function(e){return e={$$typeof:ad,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sd,_context:e},e.Consumer=e};A.createElement=Cl;A.createFactory=function(e){var t=Cl.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:ld,render:e}};A.isValidElement=hs;A.lazy=function(e){return{$$typeof:dd,_payload:{_status:-1,_result:e},_init:md}};A.memo=function(e,t){return{$$typeof:cd,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Hr.transition;Hr.transition={};try{e()}finally{Hr.transition=t}};A.unstable_act=Tl;A.useCallback=function(e,t){return me.current.useCallback(e,t)};A.useContext=function(e){return me.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return me.current.useDeferredValue(e)};A.useEffect=function(e,t){return me.current.useEffect(e,t)};A.useId=function(){return me.current.useId()};A.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return me.current.useMemo(e,t)};A.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};A.useRef=function(e){return me.current.useRef(e)};A.useState=function(e){return me.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return me.current.useTransition()};A.version="18.3.1";kl.exports=A;var E=kl.exports;const yd=td(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=E,xd=Symbol.for("react.element"),wd=Symbol.for("react.fragment"),kd=Object.prototype.hasOwnProperty,_d=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sd={key:!0,ref:!0,__self:!0,__source:!0};function Pl(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)kd.call(t,r)&&!Sd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xd,type:e,key:o,ref:s,props:i,_owner:_d.current}}Si.Fragment=wd;Si.jsx=Pl;Si.jsxs=Pl;wl.exports=Si;var l=wl.exports,vo={},Ml={exports:{}},be={},zl={exports:{}},Rl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,z){var R=j.length;j.push(z);e:for(;0<R;){var W=R-1>>>1,Y=j[W];if(0<i(Y,z))j[W]=z,j[R]=Y,R=W;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var z=j[0],R=j.pop();if(R!==z){j[0]=R;e:for(var W=0,Y=j.length,pe=Y>>>1;W<pe;){var Z=2*(W+1)-1,Vt=j[Z],jt=Z+1,vr=j[jt];if(0>i(Vt,R))jt<Y&&0>i(vr,Vt)?(j[W]=vr,j[jt]=R,W=jt):(j[W]=Vt,j[Z]=R,W=Z);else if(jt<Y&&0>i(vr,R))j[W]=vr,j[jt]=R,W=jt;else break e}}return z}function i(j,z){var R=j.sortIndex-z.sortIndex;return R!==0?R:j.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],d=[],g=1,m=null,h=3,y=!1,x=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(j){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=j)r(d),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(d)}}function v(j){if(k=!1,f(j),!x)if(n(u)!==null)x=!0,$t(S);else{var z=n(d);z!==null&&bn(v,z.startTime-j)}}function S(j,z){x=!1,k&&(k=!1,p(T),T=-1),y=!0;var R=h;try{for(f(z),m=n(u);m!==null&&(!(m.expirationTime>z)||j&&!I());){var W=m.callback;if(typeof W=="function"){m.callback=null,h=m.priorityLevel;var Y=W(m.expirationTime<=z);z=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===n(u)&&r(u),f(z)}else r(u);m=n(u)}if(m!==null)var pe=!0;else{var Z=n(d);Z!==null&&bn(v,Z.startTime-z),pe=!1}return pe}finally{m=null,h=R,y=!1}}var b=!1,N=null,T=-1,O=5,P=-1;function I(){return!(e.unstable_now()-P<O)}function Ce(){if(N!==null){var j=e.unstable_now();P=j;var z=!0;try{z=N(!0,j)}finally{z?Xe():(b=!1,N=null)}}else b=!1}var Xe;if(typeof c=="function")Xe=function(){c(Ce)};else if(typeof MessageChannel<"u"){var Bt=new MessageChannel,Nn=Bt.port2;Bt.port1.onmessage=Ce,Xe=function(){Nn.postMessage(null)}}else Xe=function(){M(Ce,0)};function $t(j){N=j,b||(b=!0,Xe())}function bn(j,z){T=M(function(){j(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,$t(S))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var R=h;h=z;try{return j()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var R=h;h=j;try{return z()}finally{h=R}},e.unstable_scheduleCallback=function(j,z,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,j){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=R+Y,j={id:g++,callback:z,priorityLevel:j,startTime:R,expirationTime:Y,sortIndex:-1},R>W?(j.sortIndex=R,t(d,j),n(u)===null&&j===n(d)&&(k?(p(T),T=-1):k=!0,bn(v,R-W))):(j.sortIndex=Y,t(u,j),x||y||(x=!0,$t(S))),j},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(j){var z=h;return function(){var R=h;h=z;try{return j.apply(this,arguments)}finally{h=R}}}})(Rl);zl.exports=Rl;var Ed=zl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=E,Ne=Ed;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Al=new Set,Kn={};function Gt(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Kn[e]=t,e=0;e<t.length;e++)Al.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=Object.prototype.hasOwnProperty,bd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ca={},da={};function jd(e){return xo.call(da,e)?!0:xo.call(ca,e)?!1:bd.test(e)?da[e]=!0:(ca[e]=!0,!1)}function Cd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Td(e,t,n,r){if(t===null||typeof t>"u"||Cd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var ms=/[\-:]([a-z])/g;function gs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ms,gs);ae[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ms,gs);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ms,gs);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ys(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Td(t,n,i,r)&&(n=null),r||i===null?jd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ot=Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_r=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),vs=Symbol.for("react.strict_mode"),wo=Symbol.for("react.profiler"),Ll=Symbol.for("react.provider"),Il=Symbol.for("react.context"),xs=Symbol.for("react.forward_ref"),ko=Symbol.for("react.suspense"),_o=Symbol.for("react.suspense_list"),ws=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),Ol=Symbol.for("react.offscreen"),pa=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,$i;function In(e){if($i===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$i=t&&t[1]||""}return`
`+$i+e}var Vi=!1;function Wi(e,t){if(!e||Vi)return"";Vi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Vi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function Pd(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Wi(e.type,!1),e;case 11:return e=Wi(e.type.render,!1),e;case 1:return e=Wi(e.type,!0),e;default:return""}}function So(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Xt:return"Portal";case wo:return"Profiler";case vs:return"StrictMode";case ko:return"Suspense";case _o:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Il:return(e.displayName||"Context")+".Consumer";case Ll:return(e._context.displayName||"Context")+".Provider";case xs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ws:return t=e.displayName||null,t!==null?t:So(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return So(e(t))}catch{}}return null}function Md(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return So(t);case 8:return t===vs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zd(e){var t=Fl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sr(e){e._valueTracker||(e._valueTracker=zd(e))}function Dl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eo(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ul(e,t){t=t.checked,t!=null&&ys(e,"checked",t,!1)}function No(e,t){Ul(e,t);var n=_t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bo(e,t.type,n):t.hasOwnProperty("defaultValue")&&bo(e,t.type,_t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ha(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bo(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function jo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ma(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(On(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_t(n)}}function Gl(e,t){var n=_t(t.value),r=_t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Co(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,Bl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rd=["Webkit","ms","Moz","O"];Object.keys(Gn).forEach(function(e){Rd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gn[t]=Gn[e]})});function $l(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gn.hasOwnProperty(e)&&Gn[e]?(""+t).trim():t+"px"}function Vl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$l(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ad=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function To(e,t){if(t){if(Ad[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Po(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mo=null;function ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zo=null,cn=null,dn=null;function ya(e){if(e=gr(e)){if(typeof zo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Ci(t),zo(e.stateNode,e.type,t))}}function Wl(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Yl(){if(cn){var e=cn,t=dn;if(dn=cn=null,ya(e),t)for(e=0;e<t.length;e++)ya(t[e])}}function Ql(e,t){return e(t)}function Xl(){}var Yi=!1;function Kl(e,t,n){if(Yi)return e(t,n);Yi=!0;try{return Ql(e,t,n)}finally{Yi=!1,(cn!==null||dn!==null)&&(Xl(),Yl())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Ro=!1;if(tt)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Ro=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Ro=!1}function Ld(e,t,n,r,i,o,s,a,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Hn=!1,ei=null,ti=!1,Ao=null,Id={onError:function(e){Hn=!0,ei=e}};function Od(e,t,n,r,i,o,s,a,u){Hn=!1,ei=null,Ld.apply(Id,arguments)}function Fd(e,t,n,r,i,o,s,a,u){if(Od.apply(this,arguments),Hn){if(Hn){var d=ei;Hn=!1,ei=null}else throw Error(w(198));ti||(ti=!0,Ao=d)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function va(e){if(Ht(e)!==e)throw Error(w(188))}function Dd(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return va(i),e;if(o===r)return va(i),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function ql(e){return e=Dd(e),e!==null?Jl(e):null}function Jl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jl(e);if(t!==null)return t;e=e.sibling}return null}var eu=Ne.unstable_scheduleCallback,xa=Ne.unstable_cancelCallback,Ud=Ne.unstable_shouldYield,Gd=Ne.unstable_requestPaint,K=Ne.unstable_now,Hd=Ne.unstable_getCurrentPriorityLevel,_s=Ne.unstable_ImmediatePriority,tu=Ne.unstable_UserBlockingPriority,ni=Ne.unstable_NormalPriority,Bd=Ne.unstable_LowPriority,nu=Ne.unstable_IdlePriority,Ei=null,Ye=null;function $d(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ei,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:Yd,Vd=Math.log,Wd=Math.LN2;function Yd(e){return e>>>=0,e===0?32:31-(Vd(e)/Wd|0)|0}var Nr=64,br=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Fn(a):(o&=s,o!==0&&(r=Fn(o)))}else s=n&~i,s!==0?r=Fn(s):o!==0&&(r=Fn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),i=1<<n,r|=e[n],t&=~i;return r}function Qd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ge(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=Qd(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Lo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ru(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function Kd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ge(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ou,Es,su,au,lu,Io=!1,jr=[],ht=null,mt=null,gt=null,Jn=new Map,er=new Map,ct=[],Zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wa(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function Tn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=gr(t),t!==null&&Es(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qd(e,t,n,r,i){switch(t){case"focusin":return ht=Tn(ht,e,t,n,r,i),!0;case"dragenter":return mt=Tn(mt,e,t,n,r,i),!0;case"mouseover":return gt=Tn(gt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Jn.set(o,Tn(Jn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,er.set(o,Tn(er.get(o)||null,e,t,n,r,i)),!0}return!1}function uu(e){var t=Mt(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=Zl(n),t!==null){e.blockedOn=t,lu(e.priority,function(){su(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Mo=r,n.target.dispatchEvent(r),Mo=null}else return t=gr(n),t!==null&&Es(t),e.blockedOn=n,!1;t.shift()}return!0}function ka(e,t,n){Br(e)&&n.delete(t)}function Jd(){Io=!1,ht!==null&&Br(ht)&&(ht=null),mt!==null&&Br(mt)&&(mt=null),gt!==null&&Br(gt)&&(gt=null),Jn.forEach(ka),er.forEach(ka)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Io||(Io=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Jd)))}function tr(e){function t(i){return Pn(i,e)}if(0<jr.length){Pn(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&Pn(ht,e),mt!==null&&Pn(mt,e),gt!==null&&Pn(gt,e),Jn.forEach(t),er.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)uu(n),n.blockedOn===null&&ct.shift()}var pn=ot.ReactCurrentBatchConfig,ii=!0;function ep(e,t,n,r){var i=F,o=pn.transition;pn.transition=null;try{F=1,Ns(e,t,n,r)}finally{F=i,pn.transition=o}}function tp(e,t,n,r){var i=F,o=pn.transition;pn.transition=null;try{F=4,Ns(e,t,n,r)}finally{F=i,pn.transition=o}}function Ns(e,t,n,r){if(ii){var i=Oo(e,t,n,r);if(i===null)io(e,t,r,oi,n),wa(e,r);else if(qd(i,e,t,n,r))r.stopPropagation();else if(wa(e,r),t&4&&-1<Zd.indexOf(e)){for(;i!==null;){var o=gr(i);if(o!==null&&ou(o),o=Oo(e,t,n,r),o===null&&io(e,t,r,oi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else io(e,t,r,null,n)}}var oi=null;function Oo(e,t,n,r){if(oi=null,e=ks(r),e=Mt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oi=e,null}function cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hd()){case _s:return 1;case tu:return 4;case ni:case Bd:return 16;case nu:return 536870912;default:return 16}default:return 16}}var pt=null,bs=null,$r=null;function du(){if($r)return $r;var e,t=bs,n=t.length,r,i="value"in pt?pt.value:pt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return $r=i.slice(e,1<r?1-r:void 0)}function Vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function _a(){return!1}function je(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Cr:_a,this.isPropagationStopped=_a,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},js=je(Sn),mr=V({},Sn,{view:0,detail:0}),np=je(mr),Xi,Ki,Mn,Ni=V({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?(Xi=e.screenX-Mn.screenX,Ki=e.screenY-Mn.screenY):Ki=Xi=0,Mn=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Ki}}),Sa=je(Ni),rp=V({},Ni,{dataTransfer:0}),ip=je(rp),op=V({},mr,{relatedTarget:0}),Zi=je(op),sp=V({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),ap=je(sp),lp=V({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),up=je(lp),cp=V({},Sn,{data:0}),Ea=je(cp),dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fp[e])?!!t[e]:!1}function Cs(){return hp}var mp=V({},mr,{key:function(e){if(e.key){var t=dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cs,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gp=je(mp),yp=V({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Na=je(yp),vp=V({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cs}),xp=je(vp),wp=V({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kp=je(wp),_p=V({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sp=je(_p),Ep=[9,13,27,32],Ts=tt&&"CompositionEvent"in window,Bn=null;tt&&"documentMode"in document&&(Bn=document.documentMode);var Np=tt&&"TextEvent"in window&&!Bn,pu=tt&&(!Ts||Bn&&8<Bn&&11>=Bn),ba=" ",ja=!1;function fu(e,t){switch(e){case"keyup":return Ep.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function bp(e,t){switch(e){case"compositionend":return hu(t);case"keypress":return t.which!==32?null:(ja=!0,ba);case"textInput":return e=t.data,e===ba&&ja?null:e;default:return null}}function jp(e,t){if(Zt)return e==="compositionend"||!Ts&&fu(e,t)?(e=du(),$r=bs=pt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pu&&t.locale!=="ko"?null:t.data;default:return null}}var Cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cp[e.type]:t==="textarea"}function mu(e,t,n,r){Wl(r),t=si(t,"onChange"),0<t.length&&(n=new js("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,nr=null;function Tp(e){bu(e,0)}function bi(e){var t=en(e);if(Dl(t))return e}function Pp(e,t){if(e==="change")return t}var gu=!1;if(tt){var qi;if(tt){var Ji="oninput"in document;if(!Ji){var Ta=document.createElement("div");Ta.setAttribute("oninput","return;"),Ji=typeof Ta.oninput=="function"}qi=Ji}else qi=!1;gu=qi&&(!document.documentMode||9<document.documentMode)}function Pa(){$n&&($n.detachEvent("onpropertychange",yu),nr=$n=null)}function yu(e){if(e.propertyName==="value"&&bi(nr)){var t=[];mu(t,nr,e,ks(e)),Kl(Tp,t)}}function Mp(e,t,n){e==="focusin"?(Pa(),$n=t,nr=n,$n.attachEvent("onpropertychange",yu)):e==="focusout"&&Pa()}function zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(nr)}function Rp(e,t){if(e==="click")return bi(t)}function Ap(e,t){if(e==="input"||e==="change")return bi(t)}function Lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:Lp;function rr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xo.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function Ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function za(e,t){var n=Ma(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ma(n)}}function vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xu(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ip(e){var t=xu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vu(n.ownerDocument.documentElement,n)){if(r!==null&&Ps(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=za(n,o);var s=za(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Op=tt&&"documentMode"in document&&11>=document.documentMode,qt=null,Fo=null,Vn=null,Do=!1;function Ra(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Do||qt==null||qt!==Jr(r)||(r=qt,"selectionStart"in r&&Ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vn&&rr(Vn,r)||(Vn=r,r=si(Fo,"onSelect"),0<r.length&&(t=new js("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionend:Tr("Transition","TransitionEnd")},eo={},wu={};tt&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function ji(e){if(eo[e])return eo[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wu)return eo[e]=t[n];return e}var ku=ji("animationend"),_u=ji("animationiteration"),Su=ji("animationstart"),Eu=ji("transitionend"),Nu=new Map,Aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){Nu.set(e,t),Gt(t,[e])}for(var to=0;to<Aa.length;to++){var no=Aa[to],Fp=no.toLowerCase(),Dp=no[0].toUpperCase()+no.slice(1);Et(Fp,"on"+Dp)}Et(ku,"onAnimationEnd");Et(_u,"onAnimationIteration");Et(Su,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(Eu,"onTransitionEnd");mn("onMouseEnter",["mouseout","mouseover"]);mn("onMouseLeave",["mouseout","mouseover"]);mn("onPointerEnter",["pointerout","pointerover"]);mn("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Up=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function La(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fd(r,t,void 0,e),e.currentTarget=null}function bu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;La(i,a,d),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,d=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;La(i,a,d),o=u}}}if(ti)throw e=Ao,ti=!1,Ao=null,e}function U(e,t){var n=t[$o];n===void 0&&(n=t[$o]=new Set);var r=e+"__bubble";n.has(r)||(ju(t,e,2,!1),n.add(r))}function ro(e,t,n){var r=0;t&&(r|=4),ju(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function ir(e){if(!e[Pr]){e[Pr]=!0,Al.forEach(function(n){n!=="selectionchange"&&(Up.has(n)||ro(n,!1,e),ro(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,ro("selectionchange",!1,t))}}function ju(e,t,n,r){switch(cu(t)){case 1:var i=ep;break;case 4:i=tp;break;default:i=Ns}n=i.bind(null,t,n,e),i=void 0,!Ro||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function io(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Mt(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Kl(function(){var d=o,g=ks(n),m=[];e:{var h=Nu.get(e);if(h!==void 0){var y=js,x=e;switch(e){case"keypress":if(Vr(n)===0)break e;case"keydown":case"keyup":y=gp;break;case"focusin":x="focus",y=Zi;break;case"focusout":x="blur",y=Zi;break;case"beforeblur":case"afterblur":y=Zi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=xp;break;case ku:case _u:case Su:y=ap;break;case Eu:y=kp;break;case"scroll":y=np;break;case"wheel":y=Sp;break;case"copy":case"cut":case"paste":y=up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Na}var k=(t&4)!==0,M=!k&&e==="scroll",p=k?h!==null?h+"Capture":null:h;k=[];for(var c=d,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=qn(c,p),v!=null&&k.push(or(c,v,f)))),M)break;c=c.return}0<k.length&&(h=new y(h,x,null,n,g),m.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Mo&&(x=n.relatedTarget||n.fromElement)&&(Mt(x)||x[nt]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=d,x=x?Mt(x):null,x!==null&&(M=Ht(x),x!==M||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=d),y!==x)){if(k=Sa,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=Na,v="onPointerLeave",p="onPointerEnter",c="pointer"),M=y==null?h:en(y),f=x==null?h:en(x),h=new k(v,c+"leave",y,n,g),h.target=M,h.relatedTarget=f,v=null,Mt(g)===d&&(k=new k(p,c+"enter",x,n,g),k.target=f,k.relatedTarget=M,v=k),M=v,y&&x)t:{for(k=y,p=x,c=0,f=k;f;f=Yt(f))c++;for(f=0,v=p;v;v=Yt(v))f++;for(;0<c-f;)k=Yt(k),c--;for(;0<f-c;)p=Yt(p),f--;for(;c--;){if(k===p||p!==null&&k===p.alternate)break t;k=Yt(k),p=Yt(p)}k=null}else k=null;y!==null&&Ia(m,h,y,k,!1),x!==null&&M!==null&&Ia(m,M,x,k,!0)}}e:{if(h=d?en(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var S=Pp;else if(Ca(h))if(gu)S=Ap;else{S=zp;var b=Mp}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Rp);if(S&&(S=S(e,d))){mu(m,S,n,g);break e}b&&b(e,h,d),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&bo(h,"number",h.value)}switch(b=d?en(d):window,e){case"focusin":(Ca(b)||b.contentEditable==="true")&&(qt=b,Fo=d,Vn=null);break;case"focusout":Vn=Fo=qt=null;break;case"mousedown":Do=!0;break;case"contextmenu":case"mouseup":case"dragend":Do=!1,Ra(m,n,g);break;case"selectionchange":if(Op)break;case"keydown":case"keyup":Ra(m,n,g)}var N;if(Ts)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Zt?fu(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(pu&&n.locale!=="ko"&&(Zt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Zt&&(N=du()):(pt=g,bs="value"in pt?pt.value:pt.textContent,Zt=!0)),b=si(d,T),0<b.length&&(T=new Ea(T,e,null,n,g),m.push({event:T,listeners:b}),N?T.data=N:(N=hu(n),N!==null&&(T.data=N)))),(N=Np?bp(e,n):jp(e,n))&&(d=si(d,"onBeforeInput"),0<d.length&&(g=new Ea("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=N))}bu(m,t)})}function or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function si(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qn(e,n),o!=null&&r.unshift(or(e,o,i)),o=qn(e,t),o!=null&&r.push(or(e,o,i))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ia(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=qn(n,o),u!=null&&s.unshift(or(n,u,a))):i||(u=qn(n,o),u!=null&&s.push(or(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gp=/\r\n?/g,Hp=/\u0000|\uFFFD/g;function Oa(e){return(typeof e=="string"?e:""+e).replace(Gp,`
`).replace(Hp,"")}function Mr(e,t,n){if(t=Oa(t),Oa(e)!==t&&n)throw Error(w(425))}function ai(){}var Uo=null,Go=null;function Ho(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bo=typeof setTimeout=="function"?setTimeout:void 0,Bp=typeof clearTimeout=="function"?clearTimeout:void 0,Fa=typeof Promise=="function"?Promise:void 0,$p=typeof queueMicrotask=="function"?queueMicrotask:typeof Fa<"u"?function(e){return Fa.resolve(null).then(e).catch(Vp)}:Bo;function Vp(e){setTimeout(function(){throw e})}function oo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);tr(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Da(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var En=Math.random().toString(36).slice(2),We="__reactFiber$"+En,sr="__reactProps$"+En,nt="__reactContainer$"+En,$o="__reactEvents$"+En,Wp="__reactListeners$"+En,Yp="__reactHandles$"+En;function Mt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Da(e);e!==null;){if(n=e[We])return n;e=Da(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[We]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Ci(e){return e[sr]||null}var Vo=[],tn=-1;function Nt(e){return{current:e}}function G(e){0>tn||(e.current=Vo[tn],Vo[tn]=null,tn--)}function D(e,t){tn++,Vo[tn]=e.current,e.current=t}var St={},de=Nt(St),xe=Nt(!1),It=St;function gn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function li(){G(xe),G(de)}function Ua(e,t,n){if(de.current!==St)throw Error(w(168));D(de,t),D(xe,n)}function Cu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,Md(e)||"Unknown",i));return V({},n,r)}function ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,It=de.current,D(de,e),D(xe,xe.current),!0}function Ga(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Cu(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,G(xe),G(de),D(de,e)):G(xe),D(xe,n)}var Ze=null,Ti=!1,so=!1;function Tu(e){Ze===null?Ze=[e]:Ze.push(e)}function Qp(e){Ti=!0,Tu(e)}function bt(){if(!so&&Ze!==null){so=!0;var e=0,t=F;try{var n=Ze;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,Ti=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(e+1)),eu(_s,bt),i}finally{F=t,so=!1}}return null}var nn=[],rn=0,ci=null,di=0,Te=[],Pe=0,Ot=null,qe=1,Je="";function Ct(e,t){nn[rn++]=di,nn[rn++]=ci,ci=e,di=t}function Pu(e,t,n){Te[Pe++]=qe,Te[Pe++]=Je,Te[Pe++]=Ot,Ot=e;var r=qe;e=Je;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var o=32-Ge(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,qe=1<<32-Ge(t)+i|n<<i|r,Je=o+e}else qe=1<<o|n<<i|r,Je=e}function Ms(e){e.return!==null&&(Ct(e,1),Pu(e,1,0))}function zs(e){for(;e===ci;)ci=nn[--rn],nn[rn]=null,di=nn[--rn],nn[rn]=null;for(;e===Ot;)Ot=Te[--Pe],Te[Pe]=null,Je=Te[--Pe],Te[Pe]=null,qe=Te[--Pe],Te[Pe]=null}var Ee=null,Se=null,H=!1,Ue=null;function Mu(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ha(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Se=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:qe,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Se=null,!0):!1;default:return!1}}function Wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yo(e){if(H){var t=Se;if(t){var n=t;if(!Ha(e,t)){if(Wo(e))throw Error(w(418));t=yt(n.nextSibling);var r=Ee;t&&Ha(e,t)?Mu(r,n):(e.flags=e.flags&-4097|2,H=!1,Ee=e)}}else{if(Wo(e))throw Error(w(418));e.flags=e.flags&-4097|2,H=!1,Ee=e}}}function Ba(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function zr(e){if(e!==Ee)return!1;if(!H)return Ba(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ho(e.type,e.memoizedProps)),t&&(t=Se)){if(Wo(e))throw zu(),Error(w(418));for(;t;)Mu(e,t),t=yt(t.nextSibling)}if(Ba(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ee?yt(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=Se;e;)e=yt(e.nextSibling)}function yn(){Se=Ee=null,H=!1}function Rs(e){Ue===null?Ue=[e]:Ue.push(e)}var Xp=ot.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $a(e){var t=e._init;return t(e._payload)}function Ru(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=kt(p,c),p.index=0,p.sibling=null,p}function o(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,f,v){return c===null||c.tag!==6?(c=ho(f,p.mode,v),c.return=p,c):(c=i(c,f),c.return=p,c)}function u(p,c,f,v){var S=f.type;return S===Kt?g(p,c,f.props.children,v,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===lt&&$a(S)===c.type)?(v=i(c,f.props),v.ref=zn(p,c,f),v.return=p,v):(v=qr(f.type,f.key,f.props,null,p.mode,v),v.ref=zn(p,c,f),v.return=p,v)}function d(p,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=mo(f,p.mode,v),c.return=p,c):(c=i(c,f.children||[]),c.return=p,c)}function g(p,c,f,v,S){return c===null||c.tag!==7?(c=Lt(f,p.mode,v,S),c.return=p,c):(c=i(c,f),c.return=p,c)}function m(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ho(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case _r:return f=qr(c.type,c.key,c.props,null,p.mode,f),f.ref=zn(p,null,c),f.return=p,f;case Xt:return c=mo(c,p.mode,f),c.return=p,c;case lt:var v=c._init;return m(p,v(c._payload),f)}if(On(c)||jn(c))return c=Lt(c,p.mode,f,null),c.return=p,c;Rr(p,c)}return null}function h(p,c,f,v){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(p,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _r:return f.key===S?u(p,c,f,v):null;case Xt:return f.key===S?d(p,c,f,v):null;case lt:return S=f._init,h(p,c,S(f._payload),v)}if(On(f)||jn(f))return S!==null?null:g(p,c,f,v,null);Rr(p,f)}return null}function y(p,c,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,a(c,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _r:return p=p.get(v.key===null?f:v.key)||null,u(c,p,v,S);case Xt:return p=p.get(v.key===null?f:v.key)||null,d(c,p,v,S);case lt:var b=v._init;return y(p,c,f,b(v._payload),S)}if(On(v)||jn(v))return p=p.get(f)||null,g(c,p,v,S,null);Rr(c,v)}return null}function x(p,c,f,v){for(var S=null,b=null,N=c,T=c=0,O=null;N!==null&&T<f.length;T++){N.index>T?(O=N,N=null):O=N.sibling;var P=h(p,N,f[T],v);if(P===null){N===null&&(N=O);break}e&&N&&P.alternate===null&&t(p,N),c=o(P,c,T),b===null?S=P:b.sibling=P,b=P,N=O}if(T===f.length)return n(p,N),H&&Ct(p,T),S;if(N===null){for(;T<f.length;T++)N=m(p,f[T],v),N!==null&&(c=o(N,c,T),b===null?S=N:b.sibling=N,b=N);return H&&Ct(p,T),S}for(N=r(p,N);T<f.length;T++)O=y(N,p,T,f[T],v),O!==null&&(e&&O.alternate!==null&&N.delete(O.key===null?T:O.key),c=o(O,c,T),b===null?S=O:b.sibling=O,b=O);return e&&N.forEach(function(I){return t(p,I)}),H&&Ct(p,T),S}function k(p,c,f,v){var S=jn(f);if(typeof S!="function")throw Error(w(150));if(f=S.call(f),f==null)throw Error(w(151));for(var b=S=null,N=c,T=c=0,O=null,P=f.next();N!==null&&!P.done;T++,P=f.next()){N.index>T?(O=N,N=null):O=N.sibling;var I=h(p,N,P.value,v);if(I===null){N===null&&(N=O);break}e&&N&&I.alternate===null&&t(p,N),c=o(I,c,T),b===null?S=I:b.sibling=I,b=I,N=O}if(P.done)return n(p,N),H&&Ct(p,T),S;if(N===null){for(;!P.done;T++,P=f.next())P=m(p,P.value,v),P!==null&&(c=o(P,c,T),b===null?S=P:b.sibling=P,b=P);return H&&Ct(p,T),S}for(N=r(p,N);!P.done;T++,P=f.next())P=y(N,p,T,P.value,v),P!==null&&(e&&P.alternate!==null&&N.delete(P.key===null?T:P.key),c=o(P,c,T),b===null?S=P:b.sibling=P,b=P);return e&&N.forEach(function(Ce){return t(p,Ce)}),H&&Ct(p,T),S}function M(p,c,f,v){if(typeof f=="object"&&f!==null&&f.type===Kt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case _r:e:{for(var S=f.key,b=c;b!==null;){if(b.key===S){if(S=f.type,S===Kt){if(b.tag===7){n(p,b.sibling),c=i(b,f.props.children),c.return=p,p=c;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===lt&&$a(S)===b.type){n(p,b.sibling),c=i(b,f.props),c.ref=zn(p,b,f),c.return=p,p=c;break e}n(p,b);break}else t(p,b);b=b.sibling}f.type===Kt?(c=Lt(f.props.children,p.mode,v,f.key),c.return=p,p=c):(v=qr(f.type,f.key,f.props,null,p.mode,v),v.ref=zn(p,c,f),v.return=p,p=v)}return s(p);case Xt:e:{for(b=f.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=i(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=mo(f,p.mode,v),c.return=p,p=c}return s(p);case lt:return b=f._init,M(p,c,b(f._payload),v)}if(On(f))return x(p,c,f,v);if(jn(f))return k(p,c,f,v);Rr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,f),c.return=p,p=c):(n(p,c),c=ho(f,p.mode,v),c.return=p,p=c),s(p)):n(p,c)}return M}var vn=Ru(!0),Au=Ru(!1),pi=Nt(null),fi=null,on=null,As=null;function Ls(){As=on=fi=null}function Is(e){var t=pi.current;G(pi),e._currentValue=t}function Qo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){fi=e,As=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(As!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(fi===null)throw Error(w(308));on=e,fi.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var zt=null;function Os(e){zt===null?zt=[e]:zt.push(e)}function Lu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Os(t)):(n.next=i.next,i.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function Fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rt(e,n)}return i=r.interleaved,i===null?(t.next=t,Os(r)):(t.next=i.next,i.next=t),r.interleaved=t,rt(e,n)}function Wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ss(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hi(e,t,n,r){var i=e.updateQueue;ut=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,s===null?o=d:s.next=d,s=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==s&&(a===null?g.firstBaseUpdate=d:a.next=d,g.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,g=d=u=null,a=o;do{var h=a.lane,y=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,k=a;switch(h=t,y=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){m=x.call(y,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,h=typeof x=="function"?x.call(y,m,h):x,h==null)break e;m=V({},m,h);break e;case 2:ut=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(d=g=y,u=m):g=g.next=y,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Dt|=s,e.lanes=s,e.memoizedState=m}}function Wa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var yr={},Qe=Nt(yr),ar=Nt(yr),lr=Nt(yr);function Rt(e){if(e===yr)throw Error(w(174));return e}function Ds(e,t){switch(D(lr,t),D(ar,e),D(Qe,yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Co(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Co(t,e)}G(Qe),D(Qe,t)}function xn(){G(Qe),G(ar),G(lr)}function Ou(e){Rt(lr.current);var t=Rt(Qe.current),n=Co(t,e.type);t!==n&&(D(ar,e),D(Qe,n))}function Us(e){ar.current===e&&(G(Qe),G(ar))}var B=Nt(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ao=[];function Gs(){for(var e=0;e<ao.length;e++)ao[e]._workInProgressVersionPrimary=null;ao.length=0}var Yr=ot.ReactCurrentDispatcher,lo=ot.ReactCurrentBatchConfig,Ft=0,$=null,J=null,te=null,gi=!1,Wn=!1,ur=0,Kp=0;function le(){throw Error(w(321))}function Hs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Bs(e,t,n,r,i,o){if(Ft=o,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?ef:tf,e=n(r,i),Wn){o=0;do{if(Wn=!1,ur=0,25<=o)throw Error(w(301));o+=1,te=J=null,t.updateQueue=null,Yr.current=nf,e=n(r,i)}while(Wn)}if(Yr.current=yi,t=J!==null&&J.next!==null,Ft=0,te=J=$=null,gi=!1,t)throw Error(w(300));return e}function $s(){var e=ur!==0;return ur=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?$.memoizedState=te=e:te=te.next=e,te}function Ae(){if(J===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=te===null?$.memoizedState:te.next;if(t!==null)te=t,J=e;else{if(e===null)throw Error(w(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},te===null?$.memoizedState=te=e:te=te.next=e}return te}function cr(e,t){return typeof t=="function"?t(e):t}function uo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,d=o;do{var g=d.lane;if((Ft&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=m,s=r):u=u.next=m,$.lanes|=g,Dt|=g}d=d.next}while(d!==null&&d!==o);u===null?s=r:u.next=a,Be(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,$.lanes|=o,Dt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function co(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Be(o,t.memoizedState)||(ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fu(){}function Du(e,t){var n=$,r=Ae(),i=t(),o=!Be(r.memoizedState,i);if(o&&(r.memoizedState=i,ve=!0),r=r.queue,Vs(Hu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,dr(9,Gu.bind(null,n,r,i,t),void 0,null),ne===null)throw Error(w(349));Ft&30||Uu(n,t,i)}return i}function Uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gu(e,t,n,r){t.value=n,t.getSnapshot=r,Bu(t)&&$u(e)}function Hu(e,t,n){return n(function(){Bu(t)&&$u(e)})}function Bu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function $u(e){var t=rt(e,1);t!==null&&He(t,e,1,-1)}function Ya(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Jp.bind(null,$,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vu(){return Ae().memoizedState}function Qr(e,t,n,r){var i=Ve();$.flags|=e,i.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function Pi(e,t,n,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(J!==null){var s=J.memoizedState;if(o=s.destroy,r!==null&&Hs(r,s.deps)){i.memoizedState=dr(t,n,o,r);return}}$.flags|=e,i.memoizedState=dr(1|t,n,o,r)}function Qa(e,t){return Qr(8390656,8,e,t)}function Vs(e,t){return Pi(2048,8,e,t)}function Wu(e,t){return Pi(4,2,e,t)}function Yu(e,t){return Pi(4,4,e,t)}function Qu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xu(e,t,n){return n=n!=null?n.concat([e]):null,Pi(4,4,Qu.bind(null,t,e),n)}function Ws(){}function Ku(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zu(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qu(e,t,n){return Ft&21?(Be(n,t)||(n=ru(),$.lanes|=n,Dt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function Zp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=lo.transition;lo.transition={};try{e(!1),t()}finally{F=n,lo.transition=r}}function Ju(){return Ae().memoizedState}function qp(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ec(e))tc(t,n);else if(n=Lu(e,t,n,r),n!==null){var i=he();He(n,e,r,i),nc(n,t,r)}}function Jp(e,t,n){var r=wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ec(e))tc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Be(a,s)){var u=t.interleaved;u===null?(i.next=i,Os(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Lu(e,t,i,r),n!==null&&(i=he(),He(n,e,r,i),nc(n,t,r))}}function ec(e){var t=e.alternate;return e===$||t!==null&&t===$}function tc(e,t){Wn=gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ss(e,n)}}var yi={readContext:Re,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},ef={readContext:Re,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Qa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,Qu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qp.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Ya,useDebugValue:Ws,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Ya(!1),t=e[0];return e=Zp.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,i=Ve();if(H){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ne===null)throw Error(w(349));Ft&30||Uu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qa(Hu.bind(null,r,o,e),[e]),r.flags|=2048,dr(9,Gu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ve(),t=ne.identifierPrefix;if(H){var n=Je,r=qe;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tf={readContext:Re,useCallback:Ku,useContext:Re,useEffect:Vs,useImperativeHandle:Xu,useInsertionEffect:Wu,useLayoutEffect:Yu,useMemo:Zu,useReducer:uo,useRef:Vu,useState:function(){return uo(cr)},useDebugValue:Ws,useDeferredValue:function(e){var t=Ae();return qu(t,J.memoizedState,e)},useTransition:function(){var e=uo(cr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Du,useId:Ju,unstable_isNewReconciler:!1},nf={readContext:Re,useCallback:Ku,useContext:Re,useEffect:Vs,useImperativeHandle:Xu,useInsertionEffect:Wu,useLayoutEffect:Yu,useMemo:Zu,useReducer:co,useRef:Vu,useState:function(){return co(cr)},useDebugValue:Ws,useDeferredValue:function(e){var t=Ae();return J===null?t.memoizedState=e:qu(t,J.memoizedState,e)},useTransition:function(){var e=co(cr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Du,useId:Ju,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mi={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=wt(e),o=et(r,i);o.payload=t,n!=null&&(o.callback=n),t=vt(e,o,i),t!==null&&(He(t,e,i,r),Wr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=wt(e),o=et(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vt(e,o,i),t!==null&&(He(t,e,i,r),Wr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=wt(e),i=et(n,r);i.tag=2,t!=null&&(i.callback=t),t=vt(e,i,r),t!==null&&(He(t,e,r,n),Wr(t,e,r))}};function Xa(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!rr(n,r)||!rr(i,o):!0}function rc(e,t,n){var r=!1,i=St,o=t.contextType;return typeof o=="object"&&o!==null?o=Re(o):(i=we(t)?It:de.current,r=t.contextTypes,o=(r=r!=null)?gn(e,i):St),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ka(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mi.enqueueReplaceState(t,t.state,null)}function Ko(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Re(o):(o=we(t)?It:de.current,i.context=gn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mi.enqueueReplaceState(i,i.state,null),hi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=Pd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function po(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rf=typeof WeakMap=="function"?WeakMap:Map;function ic(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xi||(xi=!0,as=r),Zo(e,t)},n}function oc(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Zo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Zo(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Za(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vf.bind(null,e,t,n),t.then(e,e))}function qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ja(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var of=ot.ReactCurrentOwner,ve=!1;function fe(e,t,n,r){t.child=e===null?Au(t,null,n,r):vn(t,e.child,n,r)}function el(e,t,n,r,i){n=n.render;var o=t.ref;return fn(t,i),r=Bs(e,t,n,r,o,i),n=$s(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(H&&n&&Ms(t),t.flags|=1,fe(e,t,r,i),t.child)}function tl(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ea(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,sc(e,t,o,r,i)):(e=qr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(s,r)&&e.ref===t.ref)return it(e,t,i)}return t.flags|=1,e=kt(o,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(rr(o,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,it(e,t,i)}return qo(e,t,n,r,i)}function ac(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(an,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(an,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D(an,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D(an,_e),_e|=r;return fe(e,t,i,n),t.child}function lc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qo(e,t,n,r,i){var o=we(n)?It:de.current;return o=gn(t,o),fn(t,i),n=Bs(e,t,n,r,o,i),r=$s(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(H&&r&&Ms(t),t.flags|=1,fe(e,t,n,i),t.child)}function nl(e,t,n,r,i){if(we(n)){var o=!0;ui(t)}else o=!1;if(fn(t,i),t.stateNode===null)Xr(e,t),rc(t,n,r),Ko(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Re(d):(d=we(n)?It:de.current,d=gn(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Ka(t,s,r,d),ut=!1;var h=t.memoizedState;s.state=h,hi(t,r,s,i),u=t.memoizedState,a!==r||h!==u||xe.current||ut?(typeof g=="function"&&(Xo(t,n,g,r),u=t.memoizedState),(a=ut||Xa(t,n,a,r,h,u,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Iu(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Oe(t.type,a),s.props=d,m=t.pendingProps,h=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Re(u):(u=we(n)?It:de.current,u=gn(t,u));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||h!==u)&&Ka(t,s,r,u),ut=!1,h=t.memoizedState,s.state=h,hi(t,r,s,i);var x=t.memoizedState;a!==m||h!==x||xe.current||ut?(typeof y=="function"&&(Xo(t,n,y,r),x=t.memoizedState),(d=ut||Xa(t,n,d,r,h,x,u)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=u,r=d):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Jo(e,t,n,r,o,i)}function Jo(e,t,n,r,i,o){lc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ga(t,n,!1),it(e,t,o);r=t.stateNode,of.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=vn(t,e.child,null,o),t.child=vn(t,null,a,o)):fe(e,t,a,o),t.memoizedState=r.state,i&&Ga(t,n,!0),t.child}function uc(e){var t=e.stateNode;t.pendingContext?Ua(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ua(e,t.context,!1),Ds(e,t.containerInfo)}function rl(e,t,n,r,i){return yn(),Rs(i),t.flags|=256,fe(e,t,n,r),t.child}var es={dehydrated:null,treeContext:null,retryLane:0};function ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function cc(e,t,n){var r=t.pendingProps,i=B.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(B,i&1),e===null)return Yo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ai(s,r,0,null),e=Lt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ts(n),t.memoizedState=es,e):Ys(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sf(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=kt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=kt(a,o):(o=Lt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ts(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=es,r}return o=e.child,e=o.sibling,r=kt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ys(e,t){return t=Ai({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ar(e,t,n,r){return r!==null&&Rs(r),vn(t,e.child,null,n),e=Ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sf(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=po(Error(w(422))),Ar(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ai({mode:"visible",children:r.children},i,0,null),o=Lt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vn(t,e.child,null,s),t.child.memoizedState=ts(s),t.memoizedState=es,o);if(!(t.mode&1))return Ar(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(w(419)),r=po(o,r,void 0),Ar(e,t,s,r)}if(a=(s&e.childLanes)!==0,ve||a){if(r=ne,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rt(e,i),He(r,e,i,-1))}return Js(),r=po(Error(w(421))),Ar(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Se=yt(i.nextSibling),Ee=t,H=!0,Ue=null,e!==null&&(Te[Pe++]=qe,Te[Pe++]=Je,Te[Pe++]=Ot,qe=e.id,Je=e.overflow,Ot=t),t=Ys(t,r.children),t.flags|=4096,t)}function il(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qo(e.return,t,n)}function fo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&il(e,n,t);else if(e.tag===19)il(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fo(t,!0,n,null,o);break;case"together":fo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function af(e,t,n){switch(t.tag){case 3:uc(t),yn();break;case 5:Ou(t);break;case 1:we(t.type)&&ui(t);break;case 4:Ds(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(pi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?cc(e,t,n):(D(B,B.current&1),e=it(e,t,n),e!==null?e.sibling:null);D(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,ac(e,t,n)}return it(e,t,n)}var pc,ns,fc,hc;pc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ns=function(){};fc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rt(Qe.current);var o=null;switch(n){case"input":i=Eo(e,i),r=Eo(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=jo(e,i),r=jo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ai)}To(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Kn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(a=i?.[d],r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Kn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&U("scroll",e),o||a===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};hc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lf(e,t,n){var r=t.pendingProps;switch(zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return we(t.type)&&li(),ue(t),null;case 3:return r=t.stateNode,xn(),G(xe),G(de),Gs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(cs(Ue),Ue=null))),ns(e,t),ue(t),null;case 5:Us(t);var i=Rt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)fc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ue(t),null}if(e=Rt(Qe.current),zr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[We]=t,r[sr]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Dn.length;i++)U(Dn[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":fa(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":ma(r,o),U("invalid",r)}To(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Mr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Mr(r.textContent,a,e),i=["children",""+a]):Kn.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&U("scroll",r)}switch(n){case"input":Sr(r),ha(r,o,!0);break;case"textarea":Sr(r),ga(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[We]=t,e[sr]=r,pc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Po(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dn.length;i++)U(Dn[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":fa(e,r),i=Eo(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),U("invalid",e);break;case"textarea":ma(e,r),i=jo(e,r),U("invalid",e);break;default:i=r}To(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Vl(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Bl(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zn(e,u):typeof u=="number"&&Zn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Kn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&U("scroll",e):u!=null&&ys(e,o,u,s))}switch(n){case"input":Sr(e),ha(e,r,!1);break;case"textarea":Sr(e),ga(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?un(e,!!r.multiple,o,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)hc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Rt(lr.current),Rt(Qe.current),zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return ue(t),null;case 13:if(G(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Se!==null&&t.mode&1&&!(t.flags&128))zu(),yn(),t.flags|=98560,o=!1;else if(o=zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[We]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),o=!1}else Ue!==null&&(cs(Ue),Ue=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?ee===0&&(ee=3):Js())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return xn(),ns(e,t),e===null&&ir(t.stateNode.containerInfo),ue(t),null;case 10:return Is(t.type._context),ue(t),null;case 17:return we(t.type)&&li(),ue(t),null;case 19:if(G(B),o=t.memoizedState,o===null)return ue(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Rn(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=mi(e),s!==null){for(t.flags|=128,Rn(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>kn&&(t.flags|=128,r=!0,Rn(o,!1),t.lanes=4194304)}else{if(!r)if(e=mi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!H)return ue(t),null}else 2*K()-o.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=B.current,D(B,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return qs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function uf(e,t){switch(zs(t),t.tag){case 1:return we(t.type)&&li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),G(xe),G(de),Gs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Us(t),null;case 13:if(G(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(B),null;case 4:return xn(),null;case 10:return Is(t.type._context),null;case 22:case 23:return qs(),null;case 24:return null;default:return null}}var Lr=!1,ce=!1,cf=typeof WeakSet=="function"?WeakSet:Set,C=null;function sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function rs(e,t,n){try{n()}catch(r){X(e,t,r)}}var ol=!1;function df(e,t){if(Uo=ii,e=xu(),Ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,d=0,g=0,m=e,h=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++d===i&&(a=s),h===o&&++g===r&&(u=s),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Go={focusedElem:e,selectionRange:n},ii=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,M=x.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Oe(t.type,k),M);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=ol,ol=!1,x}function Yn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&rs(t,n,o)}i=i.next}while(i!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function is(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mc(e){var t=e.alternate;t!==null&&(e.alternate=null,mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[sr],delete t[$o],delete t[Wp],delete t[Yp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function sl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ai));else if(r!==4&&(e=e.child,e!==null))for(os(e,t,n),e=e.sibling;e!==null;)os(e,t,n),e=e.sibling}function ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ss(e,t,n),e=e.sibling;e!==null;)ss(e,t,n),e=e.sibling}var re=null,De=!1;function st(e,t,n){for(n=n.child;n!==null;)yc(e,t,n),n=n.sibling}function yc(e,t,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ei,n)}catch{}switch(n.tag){case 5:ce||sn(n,t);case 6:var r=re,i=De;re=null,st(e,t,n),re=r,De=i,re!==null&&(De?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(De?(e=re,n=n.stateNode,e.nodeType===8?oo(e.parentNode,n):e.nodeType===1&&oo(e,n),tr(e)):oo(re,n.stateNode));break;case 4:r=re,i=De,re=n.stateNode.containerInfo,De=!0,st(e,t,n),re=r,De=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&rs(n,t,s),i=i.next}while(i!==r)}st(e,t,n);break;case 1:if(!ce&&(sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,st(e,t,n),ce=r):st(e,t,n);break;default:st(e,t,n)}}function al(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cf),t.forEach(function(r){var i=wf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,De=!1;break e;case 3:re=a.stateNode.containerInfo,De=!0;break e;case 4:re=a.stateNode.containerInfo,De=!0;break e}a=a.return}if(re===null)throw Error(w(160));yc(o,s,i),re=null,De=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){X(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),$e(e),r&4){try{Yn(3,e,e.return),zi(3,e)}catch(k){X(e,e.return,k)}try{Yn(5,e,e.return)}catch(k){X(e,e.return,k)}}break;case 1:Le(t,e),$e(e),r&512&&n!==null&&sn(n,n.return);break;case 5:if(Le(t,e),$e(e),r&512&&n!==null&&sn(n,n.return),e.flags&32){var i=e.stateNode;try{Zn(i,"")}catch(k){X(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ul(i,o),Po(a,s);var d=Po(a,o);for(s=0;s<u.length;s+=2){var g=u[s],m=u[s+1];g==="style"?Vl(i,m):g==="dangerouslySetInnerHTML"?Bl(i,m):g==="children"?Zn(i,m):ys(i,g,m,d)}switch(a){case"input":No(i,o);break;case"textarea":Gl(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?un(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?un(i,!!o.multiple,o.defaultValue,!0):un(i,!!o.multiple,o.multiple?[]:"",!1))}i[sr]=o}catch(k){X(e,e.return,k)}}break;case 6:if(Le(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){X(e,e.return,k)}}break;case 3:if(Le(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(k){X(e,e.return,k)}break;case 4:Le(t,e),$e(e);break;case 13:Le(t,e),$e(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ks=K())),r&4&&al(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(d=ce)||g,Le(t,e),ce=d):Le(t,e),$e(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(C=e,g=e.child;g!==null;){for(m=C=g;C!==null;){switch(h=C,y=h.child,h.tag){case 0:case 11:case 14:case 15:Yn(4,h,h.return);break;case 1:sn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){X(r,n,k)}}break;case 5:sn(h,h.return);break;case 22:if(h.memoizedState!==null){ul(m);continue}}y!==null?(y.return=h,C=y):ul(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=$l("display",s))}catch(k){X(e,e.return,k)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(k){X(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(t,e),$e(e),r&4&&al(e);break;case 21:break;default:Le(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zn(i,""),r.flags&=-33);var o=sl(e);ss(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=sl(e);os(e,a,s);break;default:throw Error(w(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e,t,n){C=e,xc(e)}function xc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Lr;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ce;a=Lr;var d=ce;if(Lr=s,(ce=u)&&!d)for(C=i;C!==null;)s=C,u=s.child,s.tag===22&&s.memoizedState!==null?cl(i):u!==null?(u.return=s,C=u):cl(i);for(;o!==null;)C=o,xc(o),o=o.sibling;C=i,Lr=a,ce=d}ll(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):ll(e)}}function ll(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wa(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wa(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&tr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ce||t.flags&512&&is(t)}catch(h){X(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ul(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function cl(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){X(t,i,u)}}var o=t.return;try{is(t)}catch(u){X(t,o,u)}break;case 5:var s=t.return;try{is(t)}catch(u){X(t,s,u)}}}catch(u){X(t,t.return,u)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var ff=Math.ceil,vi=ot.ReactCurrentDispatcher,Qs=ot.ReactCurrentOwner,ze=ot.ReactCurrentBatchConfig,L=0,ne=null,q=null,se=0,_e=0,an=Nt(0),ee=0,pr=null,Dt=0,Ri=0,Xs=0,Qn=null,ye=null,Ks=0,kn=1/0,Ke=null,xi=!1,as=null,xt=null,Ir=!1,ft=null,wi=0,Xn=0,ls=null,Kr=-1,Zr=0;function he(){return L&6?K():Kr!==-1?Kr:Kr=K()}function wt(e){return e.mode&1?L&2&&se!==0?se&-se:Xp.transition!==null?(Zr===0&&(Zr=ru()),Zr):(e=F,e!==0||(e=window.event,e=e===void 0?16:cu(e.type)),e):1}function He(e,t,n,r){if(50<Xn)throw Xn=0,ls=null,Error(w(185));hr(e,n,r),(!(L&2)||e!==ne)&&(e===ne&&(!(L&2)&&(Ri|=n),ee===4&&dt(e,se)),ke(e,r),n===1&&L===0&&!(t.mode&1)&&(kn=K()+500,Ti&&bt()))}function ke(e,t){var n=e.callbackNode;Xd(e,t);var r=ri(e,e===ne?se:0);if(r===0)n!==null&&xa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xa(n),t===1)e.tag===0?Qp(dl.bind(null,e)):Tu(dl.bind(null,e)),$p(function(){!(L&6)&&bt()}),n=null;else{switch(iu(r)){case 1:n=_s;break;case 4:n=tu;break;case 16:n=ni;break;case 536870912:n=nu;break;default:n=ni}n=jc(n,wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wc(e,t){if(Kr=-1,Zr=0,L&6)throw Error(w(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=ri(e,e===ne?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ki(e,r);else{t=r;var i=L;L|=2;var o=_c();(ne!==e||se!==t)&&(Ke=null,kn=K()+500,At(e,t));do try{gf();break}catch(a){kc(e,a)}while(!0);Ls(),vi.current=o,L=i,q!==null?t=0:(ne=null,se=0,t=ee)}if(t!==0){if(t===2&&(i=Lo(e),i!==0&&(r=i,t=us(e,i))),t===1)throw n=pr,At(e,0),dt(e,r),ke(e,K()),n;if(t===6)dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!hf(i)&&(t=ki(e,r),t===2&&(o=Lo(e),o!==0&&(r=o,t=us(e,o))),t===1))throw n=pr,At(e,0),dt(e,r),ke(e,K()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Tt(e,ye,Ke);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=Ks+500-K(),10<t)){if(ri(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bo(Tt.bind(null,e,ye,Ke),t);break}Tt(e,ye,Ke);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ge(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ff(r/1960))-r,10<r){e.timeoutHandle=Bo(Tt.bind(null,e,ye,Ke),r);break}Tt(e,ye,Ke);break;case 5:Tt(e,ye,Ke);break;default:throw Error(w(329))}}}return ke(e,K()),e.callbackNode===n?wc.bind(null,e):null}function us(e,t){var n=Qn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=ki(e,t),e!==2&&(t=ye,ye=n,t!==null&&cs(t)),e}function cs(e){ye===null?ye=e:ye.push.apply(ye,e)}function hf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Be(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~Xs,t&=~Ri,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function dl(e){if(L&6)throw Error(w(327));hn();var t=ri(e,0);if(!(t&1))return ke(e,K()),null;var n=ki(e,t);if(e.tag!==0&&n===2){var r=Lo(e);r!==0&&(t=r,n=us(e,r))}if(n===1)throw n=pr,At(e,0),dt(e,t),ke(e,K()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,ye,Ke),ke(e,K()),null}function Zs(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(kn=K()+500,Ti&&bt())}}function Ut(e){ft!==null&&ft.tag===0&&!(L&6)&&hn();var t=L;L|=1;var n=ze.transition,r=F;try{if(ze.transition=null,F=1,e)return e()}finally{F=r,ze.transition=n,L=t,!(L&6)&&bt()}}function qs(){_e=an.current,G(an)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(zs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&li();break;case 3:xn(),G(xe),G(de),Gs();break;case 5:Us(r);break;case 4:xn();break;case 13:G(B);break;case 19:G(B);break;case 10:Is(r.type._context);break;case 22:case 23:qs()}n=n.return}if(ne=e,q=e=kt(e.current,null),se=_e=t,ee=0,pr=null,Xs=Ri=Dt=0,ye=Qn=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}zt=null}return e}function kc(e,t){do{var n=q;try{if(Ls(),Yr.current=yi,gi){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gi=!1}if(Ft=0,te=J=$=null,Wn=!1,ur=0,Qs.current=null,n===null||n.return===null){ee=1,pr=t,q=null;break}e:{var o=e,s=n.return,a=n,u=t;if(t=se,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=qa(s);if(y!==null){y.flags&=-257,Ja(y,s,a,o,t),y.mode&1&&Za(o,d,t),t=y,u=d;var x=t.updateQueue;if(x===null){var k=new Set;k.add(u),t.updateQueue=k}else x.add(u);break e}else{if(!(t&1)){Za(o,d,t),Js();break e}u=Error(w(426))}}else if(H&&a.mode&1){var M=qa(s);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Ja(M,s,a,o,t),Rs(wn(u,a));break e}}o=u=wn(u,a),ee!==4&&(ee=2),Qn===null?Qn=[o]:Qn.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=ic(o,u,t);Va(o,p);break e;case 1:a=u;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xt===null||!xt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=oc(o,a,t);Va(o,v);break e}}o=o.return}while(o!==null)}Ec(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function _c(){var e=vi.current;return vi.current=yi,e===null?yi:e}function Js(){(ee===0||ee===3||ee===2)&&(ee=4),ne===null||!(Dt&268435455)&&!(Ri&268435455)||dt(ne,se)}function ki(e,t){var n=L;L|=2;var r=_c();(ne!==e||se!==t)&&(Ke=null,At(e,t));do try{mf();break}catch(i){kc(e,i)}while(!0);if(Ls(),L=n,vi.current=r,q!==null)throw Error(w(261));return ne=null,se=0,ee}function mf(){for(;q!==null;)Sc(q)}function gf(){for(;q!==null&&!Ud();)Sc(q)}function Sc(e){var t=bc(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Ec(e):q=t,Qs.current=null}function Ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=uf(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,q=null;return}}else if(n=lf(n,t,_e),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ee===0&&(ee=5)}function Tt(e,t,n){var r=F,i=ze.transition;try{ze.transition=null,F=1,yf(e,t,n,r)}finally{ze.transition=i,F=r}return null}function yf(e,t,n,r){do hn();while(ft!==null);if(L&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Kd(e,o),e===ne&&(q=ne=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ir||(Ir=!0,jc(ni,function(){return hn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ze.transition,ze.transition=null;var s=F;F=1;var a=L;L|=4,Qs.current=null,df(e,n),vc(n,e),Ip(Go),ii=!!Uo,Go=Uo=null,e.current=n,pf(n),Gd(),L=a,F=s,ze.transition=o}else e.current=n;if(Ir&&(Ir=!1,ft=e,wi=i),o=e.pendingLanes,o===0&&(xt=null),$d(n.stateNode),ke(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xi)throw xi=!1,e=as,as=null,e;return wi&1&&e.tag!==0&&hn(),o=e.pendingLanes,o&1?e===ls?Xn++:(Xn=0,ls=e):Xn=0,bt(),null}function hn(){if(ft!==null){var e=iu(wi),t=ze.transition,n=F;try{if(ze.transition=null,F=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,wi=0,L&6)throw Error(w(331));var i=L;for(L|=4,C=e.current;C!==null;){var o=C,s=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(C=d;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:Yn(8,g,o)}var m=g.child;if(m!==null)m.return=g,C=m;else for(;C!==null;){g=C;var h=g.sibling,y=g.return;if(mc(g),g===d){C=null;break}if(h!==null){h.return=y,C=h;break}C=y}}}var x=o.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var M=k.sibling;k.sibling=null,k=M}while(k!==null)}}C=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,C=s;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,C=p;break e}C=o.return}}var c=e.current;for(C=c;C!==null;){s=C;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,C=f;else e:for(s=c;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zi(9,a)}}catch(S){X(a,a.return,S)}if(a===s){C=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,C=v;break e}C=a.return}}if(L=i,bt(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ei,e)}catch{}r=!0}return r}finally{F=n,ze.transition=t}}return!1}function pl(e,t,n){t=wn(n,t),t=ic(e,t,1),e=vt(e,t,1),t=he(),e!==null&&(hr(e,1,t),ke(e,t))}function X(e,t,n){if(e.tag===3)pl(e,e,n);else for(;t!==null;){if(t.tag===3){pl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=wn(n,e),e=oc(t,e,1),t=vt(t,e,1),e=he(),t!==null&&(hr(t,1,e),ke(t,e));break}}t=t.return}}function vf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(se&n)===n&&(ee===4||ee===3&&(se&130023424)===se&&500>K()-Ks?At(e,0):Xs|=n),ke(e,t)}function Nc(e,t){t===0&&(e.mode&1?(t=br,br<<=1,!(br&130023424)&&(br=4194304)):t=1);var n=he();e=rt(e,t),e!==null&&(hr(e,t,n),ke(e,n))}function xf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nc(e,n)}function wf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Nc(e,n)}var bc;bc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,af(e,t,n);ve=!!(e.flags&131072)}else ve=!1,H&&t.flags&1048576&&Pu(t,di,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xr(e,t),e=t.pendingProps;var i=gn(t,de.current);fn(t,n),i=Bs(null,t,r,e,i,n);var o=$s();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,ui(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fs(t),i.updater=Mi,t.stateNode=i,i._reactInternals=t,Ko(t,r,e,n),t=Jo(null,t,r,!0,o,n)):(t.tag=0,H&&o&&Ms(t),fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=_f(r),e=Oe(r,e),i){case 0:t=qo(null,t,r,e,n);break e;case 1:t=nl(null,t,r,e,n);break e;case 11:t=el(null,t,r,e,n);break e;case 14:t=tl(null,t,r,Oe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),qo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),nl(e,t,r,i,n);case 3:e:{if(uc(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Iu(e,t),hi(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=wn(Error(w(423)),t),t=rl(e,t,r,n,i);break e}else if(r!==i){i=wn(Error(w(424)),t),t=rl(e,t,r,n,i);break e}else for(Se=yt(t.stateNode.containerInfo.firstChild),Ee=t,H=!0,Ue=null,n=Au(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yn(),r===i){t=it(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Ou(t),e===null&&Yo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ho(r,i)?s=null:o!==null&&Ho(r,o)&&(t.flags|=32),lc(e,t),fe(e,t,s,n),t.child;case 6:return e===null&&Yo(t),null;case 13:return cc(e,t,n);case 4:return Ds(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),el(e,t,r,i,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,D(pi,r._currentValue),r._currentValue=s,o!==null)if(Be(o.value,s)){if(o.children===i.children&&!xe.current){t=it(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=et(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Qo(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(w(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Qo(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fn(t,n),i=Re(i),r=r(i),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,i=Oe(r,t.pendingProps),i=Oe(r.type,i),tl(e,t,r,i,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Xr(e,t),t.tag=1,we(r)?(e=!0,ui(t)):e=!1,fn(t,n),rc(t,r,i),Ko(t,r,i,n),Jo(null,t,r,!0,e,n);case 19:return dc(e,t,n);case 22:return ac(e,t,n)}throw Error(w(156,t.tag))};function jc(e,t){return eu(e,t)}function kf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new kf(e,t,n,r)}function ea(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _f(e){if(typeof e=="function")return ea(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xs)return 11;if(e===ws)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qr(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ea(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Kt:return Lt(n.children,i,o,t);case vs:s=8,i|=8;break;case wo:return e=Me(12,n,t,i|2),e.elementType=wo,e.lanes=o,e;case ko:return e=Me(13,n,t,i),e.elementType=ko,e.lanes=o,e;case _o:return e=Me(19,n,t,i),e.elementType=_o,e.lanes=o,e;case Ol:return Ai(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ll:s=10;break e;case Il:s=9;break e;case xs:s=11;break e;case ws:s=14;break e;case lt:s=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Me(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Lt(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Ai(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Ol,e.lanes=n,e.stateNode={isHidden:!1},e}function ho(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function mo(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ta(e,t,n,r,i,o,s,a,u){return e=new Sf(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Me(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fs(o),e}function Ef(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cc(e){if(!e)return St;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(we(n))return Cu(e,n,t)}return t}function Tc(e,t,n,r,i,o,s,a,u){return e=ta(n,r,!0,e,i,o,s,a,u),e.context=Cc(null),n=e.current,r=he(),i=wt(n),o=et(r,i),o.callback=t??null,vt(n,o,i),e.current.lanes=i,hr(e,i,r),ke(e,r),e}function Li(e,t,n,r){var i=t.current,o=he(),s=wt(i);return n=Cc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(i,t,s),e!==null&&(He(e,i,s,o),Wr(e,i,s)),s}function _i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function na(e,t){fl(e,t),(e=e.alternate)&&fl(e,t)}function Nf(){return null}var Pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ra(e){this._internalRoot=e}Ii.prototype.render=ra.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Li(e,t,null,null)};Ii.prototype.unmount=ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){Li(null,e,null,null)}),t[nt]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&uu(e)}};function ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hl(){}function bf(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=_i(s);o.call(d)}}var s=Tc(t,r,e,0,null,!1,!1,"",hl);return e._reactRootContainer=s,e[nt]=s.current,ir(e.nodeType===8?e.parentNode:e),Ut(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=_i(u);a.call(d)}}var u=ta(e,0,!1,null,null,!1,!1,"",hl);return e._reactRootContainer=u,e[nt]=u.current,ir(e.nodeType===8?e.parentNode:e),Ut(function(){Li(t,u,n,r)}),u}function Fi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=_i(s);a.call(u)}}Li(t,s,e,i)}else s=bf(n,t,e,i,r);return _i(s)}ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(Ss(t,n|1),ke(t,K()),!(L&6)&&(kn=K()+500,bt()))}break;case 13:Ut(function(){var r=rt(e,1);if(r!==null){var i=he();He(r,e,1,i)}}),na(e,1)}};Es=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=he();He(t,e,134217728,n)}na(e,134217728)}};su=function(e){if(e.tag===13){var t=wt(e),n=rt(e,t);if(n!==null){var r=he();He(n,e,t,r)}na(e,t)}};au=function(){return F};lu=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};zo=function(e,t,n){switch(t){case"input":if(No(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ci(r);if(!i)throw Error(w(90));Dl(r),No(r,i)}}}break;case"textarea":Gl(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Ql=Zs;Xl=Ut;var jf={usingClientEntryPoint:!1,Events:[gr,en,Ci,Wl,Yl,Zs]},An={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cf={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ql(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{Ei=Or.inject(Cf),Ye=Or}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jf;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ia(t))throw Error(w(200));return Ef(e,t,null,n)};be.createRoot=function(e,t){if(!ia(e))throw Error(w(299));var n=!1,r="",i=Pc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ta(e,1,!1,null,null,n,!1,r,i),e[nt]=t.current,ir(e.nodeType===8?e.parentNode:e),new ra(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=ql(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Ut(e)};be.hydrate=function(e,t,n){if(!Oi(t))throw Error(w(200));return Fi(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!ia(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Pc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Tc(t,null,e,1,n??null,i,!1,o,s),e[nt]=t.current,ir(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ii(t)};be.render=function(e,t,n){if(!Oi(t))throw Error(w(200));return Fi(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(w(40));return e._reactRootContainer?(Ut(function(){Fi(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};be.unstable_batchedUpdates=Zs;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oi(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Fi(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function Mc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mc)}catch(e){console.error(e)}}Mc(),Ml.exports=be;var Tf=Ml.exports,ml=Tf;vo.createRoot=ml.createRoot,vo.hydrateRoot=ml.hydrateRoot;function Pf({onComplete:e}){const[t,n]=E.useState(0),[r,i]=E.useState(0);return E.useEffect(()=>{const o=setTimeout(()=>n(1),800),s=setTimeout(()=>n(2),2e3),a=setInterval(()=>{i(d=>Math.min(100,d+Math.random()*15))},200),u=setTimeout(()=>{clearInterval(a),i(100),setTimeout(e,500)},2800);return()=>{clearTimeout(o),clearTimeout(s),clearTimeout(u),clearInterval(a)}},[e]),l.jsxs("div",{style:at.overlay,children:[[...Array(8)].map((o,s)=>l.jsx("div",{style:{...at.petal,left:`${10+s*11}%`,animationDelay:`${s*.3}s`,animationDuration:`${3+s%3}s`}},s)),l.jsxs("div",{style:at.content,children:[t<2?l.jsx("p",{style:at.text,children:t===0?"Preparing something slightly ridiculous... 🌹":"Almost there..."}):l.jsx("p",{style:at.text,children:"Ready! 🌹"}),l.jsx("div",{style:at.barWrap,children:l.jsx("div",{style:{...at.bar,width:`${r}%`}})}),l.jsxs("p",{style:at.percent,children:[Math.round(r),"%"]})]})]})}const at={overlay:{position:"fixed",inset:0,background:"radial-gradient(ellipse at center, #2a1040 0%, #1a0a1f 100%)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,overflow:"hidden"},content:{textAlign:"center",zIndex:2},text:{fontFamily:"var(--font-hand)",fontSize:"clamp(1.3rem, 4vw, 2rem)",color:"#ffb085",marginBottom:"1.5rem",opacity:.9},barWrap:{width:"min(280px, 60vw)",height:"3px",background:"rgba(255,255,255,0.1)",borderRadius:"999px",overflow:"hidden",margin:"0 auto"},bar:{height:"100%",background:"linear-gradient(90deg, #e63973, #ffd700)",borderRadius:"999px",transition:"width 0.3s ease"},percent:{fontFamily:"var(--font-serif)",fontSize:"0.85rem",color:"rgba(255,255,255,0.4)",marginTop:"0.5rem"},petal:{position:"absolute",bottom:"-20px",width:"14px",height:"14px",borderRadius:"50% 0 50% 50%",background:"linear-gradient(135deg, #e63973, #ff3b8d)",opacity:.5,animation:"float 4s ease-in-out infinite",transform:"rotate(45deg)",zIndex:1,filter:"blur(0.5px)",boxShadow:"0 0 10px rgba(230,57,115,0.3)",top:"auto",left:"0",animationName:"petalFall"}},oe={recipientName:"Ananya!",senderName:"Your slightly crazy friend",roseCount:100001,letterText:`Hey Ananya! ❤️ 

Happy Birthday! 🎂🥳

Do you like roses? 🌹

I thought of gifting you something nice for your birthday...
but honestly, I couldn't find anything worthy enough. 😭😂

So I thought...
why not do something completely unnecessary instead? 👀

I decided to make you a bouquet.
And then I may have gotten a LITTLE carried away... 😂🌹🌹🌹

Hopefully this makes your day a little brighter,
puts a smile on your face,
and reminds you that you deserve lots of beautiful things. ❤️

You deserve happiness,
good memories,
crazy adventures,
and a LOT of reasons to smile. 🫶✨

Anyway...
I have something waiting for you.
Don't worry...
it's not as crazy as it sounds.

Okay...
maybe it is. 😂

With lots of love,
Your slightly crazy friend ❤️

P.S. — Please press the button below.
I promise it's worth it. 👀🌹`,finalMessage:`Happy Birthday ❤️

I hope this year brings you
more happiness,
more laughter,
more adventures,
and more reasons to smile.

Stay exactly the way you are.

And yes...
I really did make you
100,001 virtual roses. 😂🌹

Because apparently
I had too much time. 😭

Have an amazing birthday! 🎂❤️

— From your slightly crazy friend 🌹`,specialRoseMessages:{1:"It had to start somewhere. 🌹",100:"A hundred down... only 99,901 to go. 😂",1e3:"A thousand roses! Still going strong. 🌹",10001:"10,000 down... apparently I still wasn't done. 😂",25e3:"Quarter of the way there.",5e4:"Halfway there. Still ridiculous. 😂",75e3:"Three quarters done.",1e5:"So close...",100001:"You found the last one. 🌹"},hiddenMessages:{42:"The answer to everything — including why I made so many roses. 😂",12345:"Hope you're smiling right now. ❤️",77777:"Lucky rose! 🍀🌹",88888:"Forever and always. ❤️",99999:"Almost the last one... but not quite. 😂"}},Mf=["🌹","✨","💌","🫶","🎂","💫","🌸","❤️","🥂","🌙","🦋","🎀"];function zf({onReveal:e}){const[t,n]=E.useState("sealed"),[r,i]=E.useState(0),[o,s]=E.useState(!1),a=E.useMemo(()=>oe.letterText.split(/\n+/).map(g=>g.trim()).filter(Boolean),[]);E.useEffect(()=>{if(t!=="open")return;i(0);const g=[];return a.forEach((m,h)=>{const y=window.setTimeout(()=>{i(h+1)},450+h*420);g.push(y)}),()=>{g.forEach(window.clearTimeout)}},[t,a]);const u=()=>{t==="sealed"&&(n("opening"),window.setTimeout(()=>{n("open")},950))},d=()=>{o||(s(!0),window.setTimeout(()=>{e()},1200))};return l.jsxs("main",{className:["intro-letter",`intro-letter--${t}`,o?"intro-letter--leaving":""].filter(Boolean).join(" "),children:[l.jsxs("div",{className:"letter-world",children:[l.jsx("div",{className:"letter-world__glow glow-one"}),l.jsx("div",{className:"letter-world__glow glow-two"}),l.jsx("div",{className:"letter-world__glow glow-three"}),l.jsx("div",{className:"letter-stars",children:Array.from({length:30}).map((g,m)=>l.jsx("span",{className:`letter-star star-${m+1}`,children:m%4===0?"✦":"·"},m))}),l.jsx("div",{className:"letter-emoji-field",children:Mf.map((g,m)=>l.jsx("span",{className:`letter-emoji emoji-${m+1}`,children:g},`${g}-${m}`))})]}),l.jsxs("div",{className:"letter-intro",children:[l.jsx("span",{className:"letter-intro__eyebrow",children:"✦ something made especially for you ✦"}),l.jsx("p",{className:"letter-intro__name",children:oe.recipientName})]}),t!=="open"&&l.jsxs("section",{className:"birthday-envelope",onClick:u,role:"button",tabIndex:0,onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&u()},"aria-label":"Open birthday letter",children:[l.jsx("div",{className:"envelope-shadow"}),l.jsxs("div",{className:"envelope",children:[l.jsx("div",{className:"envelope-back"}),l.jsx("div",{className:"envelope-paper",children:l.jsx("span",{children:"For you ❤️"})}),l.jsx("div",{className:"envelope-front"}),l.jsx("div",{className:"envelope-flap",children:l.jsx("div",{className:"envelope-flap__inner"})}),l.jsx("div",{className:"wax-seal",children:l.jsx("span",{children:"🌹"})})]}),l.jsxs("div",{className:"envelope-caption",children:[l.jsx("span",{className:"envelope-caption__main",children:t==="sealed"?"There is a little something inside...":"Opening your letter..."}),t==="sealed"&&l.jsx("span",{className:"envelope-caption__hint",children:"tap the letter 💌"})]})]}),t==="open"&&l.jsxs("section",{className:"cinematic-letter","aria-label":"Birthday letter",children:[l.jsxs("div",{className:"cinematic-letter__top",children:[l.jsx("span",{children:"✦"}),l.jsxs("span",{children:["A LETTER FOR ",oe.recipientName.toUpperCase()]}),l.jsx("span",{children:"✦"})]}),l.jsxs("div",{className:"cinematic-letter__body",children:[l.jsxs("p",{className:"letter-greeting",children:["Hey ",oe.recipientName,"..."]}),l.jsxs("h1",{children:["Happy",l.jsx("span",{children:"Birthday"})]}),l.jsxs("div",{className:"letter-flower-line",children:[l.jsx("span",{children:"🌸"}),l.jsx("i",{}),l.jsx("span",{children:"🌹"}),l.jsx("i",{}),l.jsx("span",{children:"✨"})]}),l.jsx("div",{className:"personal-letter",children:a.map((g,m)=>l.jsx("p",{className:m<r?"paragraph-visible":"",children:g},`${m}-${g.slice(0,15)}`))}),l.jsxs("div",{className:["letter-sign-off",r===a.length?"letter-sign-off--visible":""].join(" "),children:[l.jsx("span",{children:"with a little craziness,"}),l.jsxs("strong",{children:[oe.senderName," 🌹"]})]})]}),l.jsxs("div",{className:"letter-floating-note note-one",children:[l.jsx("span",{children:"👀"}),l.jsx("small",{children:"keep going..."})]}),l.jsxs("div",{className:"letter-floating-note note-two",children:[l.jsx("span",{children:"🫶"}),l.jsx("small",{children:"this part is important"})]})]}),t==="open"&&r===a.length&&l.jsxs("div",{className:"letter-next",children:[l.jsxs("div",{className:"letter-next__whisper",children:[l.jsx("span",{children:"✨"}),l.jsx("span",{children:"okay... that's enough sweetness."}),l.jsx("span",{children:"🌹"})]}),l.jsxs("button",{type:"button",className:"letter-next__button",onClick:d,children:[l.jsx("span",{children:"There's more..."}),l.jsx("strong",{children:"→"})]}),l.jsx("p",{children:"Don't leave yet 👀"})]}),o&&l.jsxs("div",{className:"letter-exit",children:[l.jsx("span",{children:"🌹"}),l.jsx("span",{children:"✨"}),l.jsx("span",{children:"💫"}),l.jsx("span",{children:"🌹"})]})]})}const Rf=Array.from({length:28},(e,t)=>({id:t,left:`${t*37%100}%`,delay:`${t%9*.7}s`,duration:`${8+t%6*1.3}s`,size:`${7+t%4*3}px`,rotation:`${t*47%360}deg`})),Af=Array.from({length:42},(e,t)=>({id:t,left:`${t*53%100}%`,top:`${t*29%67}%`,delay:`${t%8*.45}s`,size:`${1+t%3}px`}));function Lf({phase:e,onYes:t,onScared:n,onScaredConfirm:r,onApproachComplete:i,onOpened:o}){const[s,a]=E.useState(0),[u,d]=E.useState(0),[g,m]=E.useState(!1),[h,y]=E.useState(!1),x=E.useRef(!1),k=E.useRef(!1),M=E.useRef(!1);E.useEffect(()=>{if(e!=="approach"||x.current)return;x.current=!0;const c=performance.now(),f=6200;let v=0,S=!1;const b=()=>{S||(S=!0,a(1),m(!0),i())},N=T=>{const O=T-c,P=Math.min(O/f,1),I=P<.5?2*P*P:1-Math.pow(-2*P+2,2)/2;a(I),P<1?v=requestAnimationFrame(N):b()};return v=requestAnimationFrame(N),()=>{cancelAnimationFrame(v),x.current=!1}},[e,i]),E.useEffect(()=>{e==="approach"&&(a(0),d(0),m(!1),y(!1),k.current=!1,M.current=!1),(e==="question"||e==="scared")&&(d(0),y(!1),k.current=!1,M.current=!1)},[e]),E.useEffect(()=>{if(e!=="opening"){d(0),y(!1),k.current=!1,M.current=!1;return}if(k.current)return;k.current=!0,M.current=!1,m(!1),y(!0),d(0);const c=performance.now(),f=6200;let v=0,S=!1;const b=()=>{S||M.current||(M.current=!0,d(1),o())},N=T=>{if(S)return;const O=T-c,P=Math.min(O/f,1),I=1-Math.pow(1-P,3);d(I),P<1?v=requestAnimationFrame(N):b()};return v=requestAnimationFrame(N),()=>{S=!0,cancelAnimationFrame(v)}},[e,o]);const p=()=>e==="opening"?l.jsxs("div",{className:"rose-gate-opening-copy",children:[l.jsx("div",{className:"rose-gate-eyebrow",children:"BEYOND THIS DOOR"}),l.jsx("div",{className:"rose-gate-opening-title",children:"100,001"}),l.jsx("div",{className:"rose-gate-opening-subtitle",children:"little reasons to smile."})]}):e==="scared"?l.jsxs("div",{className:"rose-gate-question",children:[l.jsx("div",{className:"rose-gate-eyebrow",children:"HEY... DON'T BE SCARED"}),l.jsxs("h2",{children:["Maybe you just",l.jsx("br",{}),"need to be"," ",l.jsx("span",{children:"brave."})]}),l.jsxs("p",{children:["I promise...",l.jsx("br",{}),"there's nothing scary behind these doors."]}),l.jsxs("div",{className:"rose-gate-actions",children:[l.jsxs("button",{type:"button",className:"rose-gate-primary",onClick:()=>{r()},children:["Okay, I'll be brave",l.jsx("span",{children:" ✦"})]}),l.jsx("button",{type:"button",className:"rose-gate-secondary",onClick:()=>{t()},children:"Actually... open it anyway"})]})]}):e==="question"?l.jsxs("div",{className:"rose-gate-question",children:[l.jsx("div",{className:"rose-gate-eyebrow",children:"THERE'S SOMETHING FOR YOU"}),l.jsxs("h2",{children:["Will you open",l.jsx("br",{}),l.jsx("span",{children:"this door?"})]}),l.jsxs("p",{children:["I could tell you what's waiting inside...",l.jsx("br",{}),"but where's the fun in that?"]}),l.jsxs("div",{className:"rose-gate-actions",children:[l.jsxs("button",{type:"button",className:"rose-gate-primary",onClick:()=>{t()},children:["Open the doors",l.jsx("span",{children:" ✦"})]}),l.jsx("button",{type:"button",className:"rose-gate-secondary",onClick:()=>{n()},children:"I'm a little scared"})]})]}):l.jsxs("div",{className:"rose-gate-intro",children:[l.jsx("div",{className:"rose-gate-eyebrow",children:"SOMEWHERE BEYOND"}),l.jsxs("h1",{children:["There is a story",l.jsx("br",{}),l.jsx("span",{children:"waiting for you."})]}),l.jsx("p",{children:"Come a little closer..."})]});return l.jsxs("div",{className:"rose-gate-scene",children:[l.jsx("div",{className:"rose-gate-sky"}),l.jsx("div",{className:"rose-gate-moon",children:l.jsx("div",{className:"rose-gate-moon-core"})}),l.jsx("div",{className:"rose-gate-stars",children:Af.map(c=>l.jsx("span",{style:{left:c.left,top:c.top,width:c.size,height:c.size,animationDelay:c.delay}},c.id))}),l.jsx("div",{className:"rose-gate-horizon",children:l.jsxs("div",{className:"rose-gate-castle",children:[l.jsx("div",{className:"castle-tower castle-tower-left"}),l.jsx("div",{className:"castle-center"}),l.jsx("div",{className:"castle-tower castle-tower-right"})]})}),l.jsx("div",{className:"rose-gate-atmosphere"}),l.jsx("div",{className:"rose-gate-inside-light",style:{opacity:h?.95*u:0}}),l.jsxs("div",{className:"rose-gate-ground",children:[l.jsx("div",{className:"rose-gate-path"}),l.jsx("div",{className:"rose-gate-ground-glow"}),l.jsx("div",{className:"rose-gate-mist mist-one"}),l.jsx("div",{className:"rose-gate-mist mist-two"}),l.jsx("div",{className:"rose-gate-mist mist-three"})]}),l.jsx("div",{className:"rose-gate-petals",children:Rf.map(c=>l.jsx("span",{style:{left:c.left,animationDelay:c.delay,animationDuration:c.duration,width:c.size,height:c.size,transform:`rotate(${c.rotation})`}},c.id))}),l.jsxs("div",{className:"rose-gate-architecture",style:{transform:`translateY(${(1-s)*9}%)`},children:[l.jsxs("div",{className:"rose-gate-pillar rose-gate-pillar-left",children:[l.jsxs("div",{className:"rose-gate-pillar-cap",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]}),l.jsxs("div",{className:"rose-gate-pillar-body",children:[l.jsx("div",{className:"pillar-stone stone-one"}),l.jsx("div",{className:"pillar-stone stone-two"}),l.jsx("div",{className:"pillar-stone stone-three"}),l.jsx("div",{className:"pillar-stone stone-four"}),l.jsx("div",{className:"pillar-lamp",children:l.jsx("div",{className:"lamp-flame"})}),l.jsx("div",{className:"pillar-rose rose-one",children:"🌹"}),l.jsx("div",{className:"pillar-rose rose-two",children:"🌹"})]}),l.jsx("div",{className:"rose-gate-pillar-base"})]}),l.jsxs("div",{className:"rose-gate-pillar rose-gate-pillar-right",children:[l.jsxs("div",{className:"rose-gate-pillar-cap",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]}),l.jsxs("div",{className:"rose-gate-pillar-body",children:[l.jsx("div",{className:"pillar-stone stone-one"}),l.jsx("div",{className:"pillar-stone stone-two"}),l.jsx("div",{className:"pillar-stone stone-three"}),l.jsx("div",{className:"pillar-stone stone-four"}),l.jsx("div",{className:"pillar-lamp",children:l.jsx("div",{className:"lamp-flame"})}),l.jsx("div",{className:"pillar-rose rose-one",children:"🌹"}),l.jsx("div",{className:"pillar-rose rose-two",children:"🌹"})]}),l.jsx("div",{className:"rose-gate-pillar-base"})]}),l.jsx("div",{className:"rose-gate-arch",children:l.jsx("div",{className:"rose-gate-arch-inner",children:l.jsxs("div",{className:"rose-gate-emblem",children:[l.jsx("div",{children:"100001"}),l.jsx("span",{children:"ROSES"})]})})}),l.jsx("div",{className:"rose-gate-door-wrap rose-gate-door-wrap-left",style:{transform:`perspective(1800px) rotateY(${78*u}deg)`},children:l.jsx("div",{className:"rose-gate-door",children:l.jsxs("div",{className:"door-frame",children:[l.jsx("div",{className:"door-panel panel-one"}),l.jsx("div",{className:"door-panel panel-two"}),l.jsx("div",{className:"door-panel panel-three"}),l.jsx("div",{className:"door-rose-pattern",children:"🌹"}),l.jsx("div",{className:"door-handle",children:l.jsx("span",{})}),l.jsx("div",{className:"door-metal-detail detail-top"}),l.jsx("div",{className:"door-metal-detail detail-bottom"})]})})}),l.jsx("div",{className:"rose-gate-door-wrap rose-gate-door-wrap-right",style:{transform:`perspective(1800px) rotateY(${-78*u}deg)`},children:l.jsx("div",{className:"rose-gate-door",children:l.jsxs("div",{className:"door-frame",children:[l.jsx("div",{className:"door-panel panel-one"}),l.jsx("div",{className:"door-panel panel-two"}),l.jsx("div",{className:"door-panel panel-three"}),l.jsx("div",{className:"door-rose-pattern",children:"🌹"}),l.jsx("div",{className:"door-handle",children:l.jsx("span",{})}),l.jsx("div",{className:"door-metal-detail detail-top"}),l.jsx("div",{className:"door-metal-detail detail-bottom"})]})})})]}),l.jsx("div",{className:"rose-gate-copy",children:p()}),l.jsxs("div",{className:"rose-gate-top-label",children:[l.jsx("span",{children:"FOR SOMEONE SPECIAL"}),l.jsx("i",{})]}),l.jsxs("div",{className:"rose-gate-bottom-label",children:[l.jsxs("span",{children:["A LITTLE SOMETHING",l.jsx("br",{}),"FROM MY HEART"]}),l.jsx("div",{className:"bottom-line"})]}),l.jsx("div",{className:"rose-gate-vignette"}),l.jsx("div",{className:"rose-gate-grain"}),l.jsx("style",{children:`



        * {

          box-sizing: border-box;

        }



        .rose-gate-scene {

          position: fixed;

          inset: 0;

          width: 100vw;

          height: 100vh;

          overflow: hidden;

          background:

            radial-gradient(

              circle at 50% 55%,

              #241414 0%,

              #100b0d 42%,

              #050507 100%

            );

          color: #fff;

          font-family:

            Georgia,

            "Times New Roman",

            serif;

          isolation: isolate;

        }



        /* ====================================================

           SKY

        ==================================================== */



        .rose-gate-sky {

          position: absolute;

          inset: 0;

          background:

            linear-gradient(

              180deg,

              #05050a 0%,

              #0c0a13 26%,

              #24151a 56%,

              #100a0d 100%

            );

          z-index: -10;

        }



        .rose-gate-sky::after {

          content: "";

          position: absolute;

          inset: 0;

          background:

            radial-gradient(

              ellipse at 50% 68%,

              rgba(173, 77, 65, 0.23),

              transparent 48%

            );

        }



        /* ====================================================

           MOON

        ==================================================== */



        .rose-gate-moon {

          position: absolute;

          top: 7%;

          right: 12%;

          width: clamp(

            70px,

            9vw,

            150px

          );

          aspect-ratio: 1;

          border-radius: 50%;

          background:

            radial-gradient(

              circle at 35% 32%,

              #fffdf4,

              #eadfc4 50%,

              #a99b85 100%

            );

          box-shadow:

            0 0 40px

              rgba(

                255,

                243,

                211,

                0.28

              ),

            0 0 100px

              rgba(

                255,

                215,

                163,

                0.13

              );

          animation:

            moonFloat

            7s ease-in-out

            infinite;

          z-index: -6;

        }



        .rose-gate-moon-core {

          position: absolute;

          inset: 10%;

          border-radius: 50%;

          background:

            radial-gradient(

              circle at 30% 30%,

              rgba(

                255,

                255,

                255,

                0.3

              ),

              transparent 60%

            );

        }



        @keyframes moonFloat {

          0%,

          100% {

            transform:

              translateY(0);

          }



          50% {

            transform:

              translateY(-8px);

          }

        }



        /* ====================================================

           STARS

        ==================================================== */



        .rose-gate-stars {

          position: absolute;

          inset: 0;

          z-index: -7;

        }



        .rose-gate-stars span {

          position: absolute;

          border-radius: 50%;

          background: #fff;

          box-shadow:

            0 0 8px

              rgba(

                255,

                255,

                255,

                0.8

              );

          animation:

            starPulse

            3s ease-in-out

            infinite;

        }



        @keyframes starPulse {

          0%,

          100% {

            opacity: 0.25;

            transform: scale(0.7);

          }



          50% {

            opacity: 0.95;

            transform: scale(1.4);

          }

        }



        /* ====================================================

           DISTANT CASTLE

        ==================================================== */



        .rose-gate-horizon {

          position: absolute;

          left: 50%;

          bottom: 27%;

          transform:

            translateX(-50%);

          width: min(

            65vw,

            1000px

          );

          height: 24%;

          opacity: 0.58;

          z-index: -5;

        }



        .rose-gate-castle {

          position: absolute;

          inset: 0;

          display: flex;

          justify-content: center;

          align-items: flex-end;

          filter:

            drop-shadow(

              0 0 20px

              rgba(

                207,

                116,

                72,

                0.16

              )

            );

        }



        .castle-center {

          width: 35%;

          height: 70%;

          background:

            linear-gradient(

              90deg,

              #120d0f,

              #2b1818,

              #120d0f

            );

          clip-path:

            polygon(

              0 18%,

              22% 18%,

              22% 0,

              78% 0,

              78% 18%,

              100% 18%,

              100% 100%,

              0 100%

            );

        }



        .castle-tower {

          width: 18%;

          height: 100%;

          background:

            linear-gradient(

              90deg,

              #0c090c,

              #241417,

              #0c090c

            );

        }



        .castle-tower::before {

          content: "";

          display: block;

          height: 20%;

          background:

            linear-gradient(

              135deg,

              transparent 50%,

              #181014 50%

            );

        }



        /* ====================================================

           ATMOSPHERE

        ==================================================== */



        .rose-gate-atmosphere {

          position: absolute;

          inset: 0;

          z-index: -4;

          background:

            radial-gradient(

              ellipse at 50% 70%,

              rgba(

                255,

                126,

                81,

                0.13

              ),

              transparent 42%

            );

          animation:

            atmosphereBreath

            6s ease-in-out

            infinite;

        }



        @keyframes atmosphereBreath {

          0%,

          100% {

            opacity: 0.55;

            transform: scale(0.98);

          }



          50% {

            opacity: 1;

            transform: scale(1.04);

          }

        }



        /* ====================================================

           INSIDE LIGHT

        ==================================================== */



        .rose-gate-inside-light {

          position: absolute;

          left: 50%;

          top: 23%;

          width: 48%;

          height: 60%;

          transform:

            translateX(-50%);

          background:

            radial-gradient(

              ellipse,

              rgba(

                255,

                229,

                159,

                0.72

              ) 0%,

              rgba(

                255,

                172,

                82,

                0.25

              ) 30%,

              transparent 72%

            );

          filter:

            blur(15px);

          z-index: -1;

          pointer-events: none;

        }



        /* ====================================================

           GROUND

        ==================================================== */



        .rose-gate-ground {

          position: absolute;

          inset:

            48% 0 0;

          background:

            linear-gradient(

              180deg,

              transparent,

              #0a0809 25%,

              #040405 100%

            );

          z-index: -3;

        }



        .rose-gate-path {

          position: absolute;

          left: 50%;

          bottom: -5%;

          width: 42%;

          height: 95%;

          transform:

            translateX(-50%);

          clip-path:

            polygon(

              42% 0,

              58% 0,

              100% 100%,

              0 100%

            );

          background:

            linear-gradient(

              90deg,

              rgba(

                117,

                68,

                47,

                0.1

              ),

              rgba(

                204,

                112,

                67,

                0.24

              ),

              rgba(

                117,

                68,

                47,

                0.1

              )

            );

        }



        .rose-gate-ground-glow {

          position: absolute;

          left: 50%;

          bottom: 5%;

          width: 55%;

          height: 35%;

          transform:

            translateX(-50%);

          background:

            radial-gradient(

              ellipse,

              rgba(

                238,

                133,

                91,

                0.12

              ),

              transparent 70%

            );

          filter:

            blur(25px);

        }



        /* ====================================================

           MIST

        ==================================================== */



        .rose-gate-mist {

          position: absolute;

          width: 65%;

          height: 18%;

          border-radius: 50%;

          background:

            rgba(

              212,

              176,

              163,

              0.07

            );

          filter:

            blur(25px);

          animation:

            mistMove

            14s ease-in-out

            infinite;

        }



        .mist-one {

          left: -10%;

          bottom: 16%;

        }



        .mist-two {

          right: -12%;

          bottom: 27%;

          animation-delay: -5s;

        }



        .mist-three {

          left: 20%;

          bottom: 8%;

          animation-delay: -9s;

        }



        @keyframes mistMove {

          0%,

          100% {

            transform:

              translateX(-3%);

            opacity: 0.25;

          }



          50% {

            transform:

              translateX(8%);

            opacity: 0.65;

          }

        }



        /* ====================================================

           PETALS

        ==================================================== */



        .rose-gate-petals {

          position: absolute;

          inset: 0;

          overflow: hidden;

          z-index: 8;

          pointer-events: none;

        }



        .rose-gate-petals span {

          position: absolute;

          top: -30px;

          border-radius:

            70% 30% 70% 30%;

          background:

            linear-gradient(

              135deg,

              #ff9b91,

              #7b1721

            );

          box-shadow:

            0 2px 8px

              rgba(

                255,

                80,

                90,

                0.22

              );

          animation:

            petalFall

            11s linear

            infinite;

          opacity: 0.6;

        }



        @keyframes petalFall {

          0% {

            transform:

              translate3d(

                0,

                -40px,

                0

              )

              rotate(0deg);

            opacity: 0;

          }



          12% {

            opacity: 0.75;

          }



          70% {

            opacity: 0.5;

          }



          100% {

            transform:

              translate3d(

                80px,

                110vh,

                0

              )

              rotate(480deg);

            opacity: 0;

          }

        }



        /* ====================================================

           ARCHITECTURE

        ==================================================== */



        .rose-gate-architecture {

          position: absolute;

          inset: 4% 0 5%;

          transform-origin:

            center bottom;

          z-index: 2;

          perspective: 1800px;

        }



        /* ====================================================

           PILLARS

        ==================================================== */



        .rose-gate-pillar {

          position: absolute;

          top: 0;

          width: clamp(

            110px,

            13vw,

            235px

          );

          height: 92%;

          z-index: 8;

        }



        .rose-gate-pillar-left {

          left: 0;

        }



        .rose-gate-pillar-right {

          right: 0;

        }



        .rose-gate-pillar-body {

          position: absolute;

          left: 10%;

          right: 10%;

          top: 11%;

          bottom: 5%;

          border:

            2px solid

            rgba(

              196,

              153,

              103,

              0.55

            );

          background:

            linear-gradient(

              90deg,

              #241b19 0%,

              #574137 20%,

              #7a5a48 48%,

              #473329 74%,

              #1b1414 100%

            );

          box-shadow:

            inset 8px 0 18px

              rgba(

                0,

                0,

                0,

                0.48

              ),

            inset -8px 0 18px

              rgba(

                255,

                219,

                170,

                0.12

              ),

            0 10px 40px

              rgba(

                0,

                0,

                0,

                0.55

              );

        }



        .rose-gate-pillar-body::before {

          content: "";

          position: absolute;

          inset: 0;

          background:

            repeating-linear-gradient(

              90deg,

              transparent 0 28px,

              rgba(

                255,

                224,

                190,

                0.06

              ) 29px,

              transparent 31px

            );

          opacity: 0.5;

        }



        .rose-gate-pillar-cap {

          position: absolute;

          top: 0;

          left: 0;

          width: 100%;

          height: 13%;

          background:

            linear-gradient(

              180deg,

              #9a7556,

              #5c4336 55%,

              #241a18

            );

          border:

            2px solid

            rgba(

              220,

              177,

              120,

              0.7

            );

          box-shadow:

            0 8px 30px

              rgba(

                0,

                0,

                0,

                0.45

              );

          z-index: 3;

        }



        .rose-gate-pillar-cap span {

          position: absolute;

          bottom: -7px;

          height: 12px;

          background:

            #4c362c;

          border:

            1px solid

            rgba(

              225,

              184,

              126,

              0.5

            );

        }



        .rose-gate-pillar-cap span:nth-child(1) {

          left: 8%;

          width: 84%;

        }



        .rose-gate-pillar-cap span:nth-child(2) {

          left: 16%;

          bottom: -17px;

          width: 68%;

        }



        .rose-gate-pillar-cap span:nth-child(3) {

          left: 26%;

          bottom: -27px;

          width: 48%;

        }



        .rose-gate-pillar-base {

          position: absolute;

          left: -4%;

          right: -4%;

          bottom: 0;

          height: 9%;

          background:

            linear-gradient(

              180deg,

              #715340,

              #30231f

            );

          border:

            2px solid

            rgba(

              212,

              170,

              116,

              0.5

            );

          box-shadow:

            0 -5px 20px

              rgba(

                0,

                0,

                0,

                0.5

              );

        }



        .pillar-stone {

          position: absolute;

          left: 8%;

          right: 8%;

          height: 1px;

          background:

            rgba(

              225,

              194,

              161,

              0.2

            );

        }



        .stone-one {

          top: 24%;

        }



        .stone-two {

          top: 47%;

        }



        .stone-three {

          top: 68%;

        }



        .stone-four {

          top: 82%;

        }



        /* ====================================================

           LAMPS

        ==================================================== */



        .pillar-lamp {

          position: absolute;

          top: 34%;

          left: 50%;

          width: 28px;

          height: 52px;

          transform:

            translateX(-50%);

          border:

            2px solid

            rgba(

              216,

              178,

              118,

              0.8

            );

          background:

            rgba(

              34,

              20,

              16,

              0.9

            );

          border-radius:

            8px 8px 12px 12px;

          box-shadow:

            0 0 30px

              rgba(

                255,

                176,

                84,

                0.28

              );

        }



        .lamp-flame {

          position: absolute;

          left: 50%;

          top: 50%;

          width: 13px;

          height: 23px;

          transform:

            translate(

              -50%,

              -45%

            );

          border-radius:

            50% 50% 55% 45%;

          background:

            radial-gradient(

              circle at 50% 70%,

              #fff,

              #ffd06a 38%,

              #b8482d 70%,

              transparent 72%

            );

          animation:

            flame

            1.8s ease-in-out

            infinite;

        }



        @keyframes flame {

          0%,

          100% {

            transform:

              translate(

                -50%,

                -45%

              )

              scaleY(1);

          }



          50% {

            transform:

              translate(

                -48%,

                -48%

              )

              scaleY(1.15);

          }

        }



        /* ====================================================

           PILLAR ROSES

        ==================================================== */



        .pillar-rose {

          position: absolute;

          font-size:

            clamp(

              20px,

              2.5vw,

              38px

            );

          filter:

            drop-shadow(

              0 4px 7px

              rgba(

                0,

                0,

                0,

                0.55

              )

            );

          animation:

            roseSway

            4s ease-in-out

            infinite;

        }



        .rose-one {

          bottom: 17%;

          left: 17%;

        }



        .rose-two {

          bottom: 23%;

          right: 13%;

          animation-delay: -1.4s;

        }



        @keyframes roseSway {

          0%,

          100% {

            transform:

              rotate(-4deg)

              translateY(0);

          }



          50% {

            transform:

              rotate(5deg)

              translateY(-5px);

          }

        }



        /* ====================================================

           CENTRAL ARCH

        ==================================================== */



        .rose-gate-arch {

          position: absolute;

          top: 3%;

          left: 50%;

          width: min(

            66vw,

            1080px

          );

          height: 25%;

          transform:

            translateX(-50%);

          border:

            3px solid

            rgba(

              176,

              130,

              88,

              0.8

            );

          border-bottom: 0;

          border-radius:

            50% 50% 0 0;

          background:

            linear-gradient(

              180deg,

              rgba(

                95,

                64,

                52,

                0.95

              ),

              rgba(

                37,

                25,

                24,

                0.97

              )

            );

          box-shadow:

            inset 0 8px 20px

              rgba(

                255,

                219,

                171,

                0.08

              ),

            0 20px 45px

              rgba(

                0,

                0,

                0,

                0.45

              );

          z-index: 5;

        }



        .rose-gate-arch::before,

        .rose-gate-arch::after {

          content: "";

          position: absolute;

          top: 15%;

          width: 18%;

          height: 70%;

          border:

            1px solid

            rgba(

              220,

              174,

              117,

              0.25

            );

        }



        .rose-gate-arch::before {

          left: 8%;

        }



        .rose-gate-arch::after {

          right: 8%;

        }



        .rose-gate-arch-inner {

          position: absolute;

          inset: 16%;

          border:

            1px solid

            rgba(

              255,

              212,

              148,

              0.35

            );

          border-radius:

            50% 50% 0 0;

          display: flex;

          justify-content: center;

          align-items: center;

        }



        .rose-gate-emblem {

          text-align: center;

          color:

            rgba(

              245,

              203,

              143,

              0.92

            );

          text-shadow:

            0 0 18px

              rgba(

                244,

                175,

                92,

                0.25

              );

          letter-spacing:

            0.28em;

        }



        .rose-gate-emblem div {

          font-size:

            clamp(

              20px,

              3vw,

              46px

            );

          font-weight: 500;

        }



        .rose-gate-emblem span {

          display: block;

          margin-top: 4px;

          font-size:

            clamp(

              8px,

              0.8vw,

              12px

            );

          letter-spacing:

            0.55em;

        }



        /* ====================================================

           DOORS

        ==================================================== */



        .rose-gate-door-wrap {

          position: absolute;

          top: 23%;

          width: 31.5%;

          height: 69%;

          z-index: 7;

          transform-style:

            preserve-3d;

          backface-visibility:

            hidden;

          will-change:

            transform;

        }



        .rose-gate-door-wrap-left {

          left: 18.5%;

          transform-origin:

            left center;

        }



        .rose-gate-door-wrap-right {

          right: 18.5%;

          transform-origin:

            right center;

        }



        .rose-gate-door {

          position: absolute;

          inset: 0;

          transform-style:

            preserve-3d;

          backface-visibility:

            hidden;

        }



        .door-frame {

          position: absolute;

          inset: 0;

          border:

            5px solid

            #4a3328;

          background:

            linear-gradient(

              90deg,

              #1a1110,

              #493126 12%,

              #241714 28%,

              #604333 50%,

              #241714 72%,

              #4d3327 88%,

              #160f0f

            );

          box-shadow:

            inset 0 0 35px

              rgba(

                0,

                0,

                0,

                0.75

              ),

            0 15px 50px

              rgba(

                0,

                0,

                0,

                0.7

              );

        }



        .door-panel {

          position: absolute;

          top: 7%;

          bottom: 7%;

          width: 27%;

          border:

            2px solid

            rgba(

              202,

              158,

              104,

              0.4

            );

          background:

            linear-gradient(

              90deg,

              #171011,

              #39231e,

              #1a1011

            );

          box-shadow:

            inset 0 0 20px

              rgba(

                0,

                0,

                0,

                0.7

              );

        }



        .panel-one {

          left: 8%;

        }



        .panel-two {

          left: 36.5%;

        }



        .panel-three {

          right: 8%;

        }



        .door-panel::before {

          content: "";

          position: absolute;

          inset: 12%;

          border:

            1px solid

            rgba(

              222,

              174,

              111,

              0.22

            );

          border-radius:

            3px;

        }



        .door-rose-pattern {

          position: absolute;

          left: 50%;

          top: 50%;

          transform:

            translate(

              -50%,

              -50%

            );

          font-size:

            clamp(

              35px,

              5vw,

              80px

            );

          opacity: 0.72;

          filter:

            drop-shadow(

              0 0 18px

              rgba(

                225,

                81,

                73,

                0.3

              )

            );

        }



        .door-handle {

          position: absolute;

          top: 50%;

          width: 20px;

          height: 80px;

          transform:

            translateY(-50%);

          border-radius: 10px;

          background:

            linear-gradient(

              90deg,

              #4a2e20,

              #c08a4d,

              #503322

            );

          box-shadow:

            0 0 15px

              rgba(

                222,

                163,

                87,

                0.22

              );

        }



        .rose-gate-door-wrap-left

          .door-handle {

          right: 4%;

        }



        .rose-gate-door-wrap-right

          .door-handle {

          left: 4%;

        }



        .door-metal-detail {

          position: absolute;

          left: 7%;

          right: 7%;

          height: 8px;

          border-radius: 4px;

          background:

            linear-gradient(

              90deg,

              transparent,

              rgba(

                210,

                159,

                94,

                0.7

              ),

              transparent

            );

        }



        .detail-top {

          top: 12%;

        }



        .detail-bottom {

          bottom: 12%;

        }



        /* ====================================================

           COPY

        ==================================================== */



        .rose-gate-copy {

          position: absolute;

          inset: 0;

          z-index: 20;

          pointer-events: none;

          display: flex;

          justify-content: center;

          align-items: center;

          text-align: center;

          padding:

            0 20px;

        }



        .rose-gate-intro,

        .rose-gate-question,

        .rose-gate-opening-copy {

          max-width:

            760px;

          animation:

            copyAppear

            1.5s

            cubic-bezier(

              0.22,

              1,

              0.36,

              1

            )

            both;

        }



        @keyframes copyAppear {

          from {

            opacity: 0;

            transform:

              translateY(24px)

              scale(0.98);

            filter:

              blur(8px);

          }



          to {

            opacity: 1;

            transform:

              translateY(0)

              scale(1);

            filter:

              blur(0);

          }

        }



        .rose-gate-eyebrow {

          font-family:

            Arial,

            sans-serif;

          font-size:

            clamp(

              9px,

              1vw,

              13px

            );

          letter-spacing:

            0.45em;

          text-transform:

            uppercase;

          color:

            rgba(

              244,

              199,

              139,

              0.85

            );

          margin-bottom:

            18px;

        }



        .rose-gate-intro h1 {

          margin: 0;

          font-weight: 400;

          font-size:

            clamp(

              34px,

              5vw,

              78px

            );

          line-height: 1.05;

          text-shadow:

            0 4px 30px

              rgba(

                0,

                0,

                0,

                0.8

              );

        }



        .rose-gate-intro h1 span,

        .rose-gate-question h2 span {

          font-style: italic;

          color:

            #efb99d;

          text-shadow:

            0 0 25px

              rgba(

                239,

                146,

                113,

                0.22

              );

        }



        .rose-gate-intro p {

          margin-top: 25px;

          font-family:

            Arial,

            sans-serif;

          font-size:

            14px;

          letter-spacing:

            0.18em;

          color:

            rgba(

              255,

              255,

              255,

              0.58

            );

        }



        .rose-gate-question h2 {

          margin: 0;

          font-size:

            clamp(

              32px,

              5vw,

              70px

            );

          font-weight: 400;

          line-height: 1.02;

        }



        .rose-gate-question p {

          margin:

            24px auto

            28px;

          font-family:

            Arial,

            sans-serif;

          font-size:

            clamp(

              12px,

              1.2vw,

              16px

            );

          line-height: 1.7;

          letter-spacing:

            0.04em;

          color:

            rgba(

              255,

              255,

              255,

              0.64

            );

        }



        .rose-gate-actions {

          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 13px;

          pointer-events:

            auto;

        }



        .rose-gate-primary {

          border: 1px solid

            rgba(

              245,

              190,

              139,

              0.72

            );

          background:

            linear-gradient(

              135deg,

              rgba(

                113,

                48,

                39,

                0.92

              ),

              rgba(

                75,

                29,

                28,

                0.92

              )

            );

          color: #fff7ef;

          padding:

            14px 27px;

          border-radius: 999px;

          font-family:

            Arial,

            sans-serif;

          font-size: 13px;

          letter-spacing:

            0.08em;

          cursor: pointer;

          box-shadow:

            0 10px 35px

              rgba(

                83,

                27,

                22,

                0.35

              ),

            inset 0 1px

              rgba(

                255,

                255,

                255,

                0.12

              );

          transition:

            transform 0.3s,

            box-shadow 0.3s,

            background 0.3s;

        }



        .rose-gate-primary:hover {

          transform:

            translateY(-3px);

          box-shadow:

            0 15px 45px

              rgba(

                107,

                38,

                29,

                0.5

              ),

            0 0 25px

              rgba(

                236,

                155,

                107,

                0.15

              );

        }



        .rose-gate-secondary {

          border: 0;

          background:

            transparent;

          color:

            rgba(

              255,

              255,

              255,

              0.46

            );

          font-family:

            Arial,

            sans-serif;

          font-size:

            11px;

          letter-spacing:

            0.06em;

          cursor: pointer;

          padding:

            7px 15px;

          pointer-events:

            auto;

          transition:

            color 0.3s;

        }



        .rose-gate-secondary:hover {

          color:

            rgba(

              255,

              255,

              255,

              0.85

            );

        }



        /* ====================================================

           OPENING COPY

        ==================================================== */



        .rose-gate-opening-copy {

          transform:

            translateY(-8%);

        }



        .rose-gate-opening-title {

          font-size:

            clamp(

              64px,

              13vw,

              190px

            );

          line-height: 0.8;

          font-weight: 300;

          letter-spacing:

            0.08em;

          color:

            rgba(

              255,

              235,

              198,

              0.94

            );

          text-shadow:

            0 0 45px

              rgba(

                255,

                185,

                107,

                0.35

              ),

            0 8px 35px

              rgba(

                0,

                0,

                0,

                0.8

              );

        }



        .rose-gate-opening-subtitle {

          margin-top: 25px;

          font-size:

            clamp(

              18px,

              2.5vw,

              34px

            );

          font-style: italic;

          color:

            rgba(

              255,

              227,

              204,

              0.88

            );

        }



        /* ====================================================

           TOP LABEL

        ==================================================== */



        .rose-gate-top-label {

          position: absolute;

          top: 26px;

          left: 50%;

          transform:

            translateX(-50%);

          z-index: 30;

          display: flex;

          align-items: center;

          gap: 15px;

          font-family:

            Arial,

            sans-serif;

          font-size:

            9px;

          letter-spacing:

            0.35em;

          color:

            rgba(

              255,

              255,

              255,

              0.42

            );

          white-space:

            nowrap;

        }



        .rose-gate-top-label i {

          display: block;

          width: 34px;

          height: 1px;

          background:

            rgba(

              235,

              180,

              123,

              0.6

            );

        }



        /* ====================================================

           BOTTOM LABEL

        ==================================================== */



        .rose-gate-bottom-label {

          position: absolute;

          left: 34px;

          bottom: 28px;

          z-index: 30;

          display: flex;

          align-items: flex-end;

          gap: 14px;

          font-family:

            Arial,

            sans-serif;

          font-size: 8px;

          line-height: 1.6;

          letter-spacing:

            0.2em;

          color:

            rgba(

              255,

              255,

              255,

              0.32

            );

        }



        .bottom-line {

          width: 40px;

          height: 1px;

          margin-bottom: 4px;

          background:

            rgba(

              237,

              175,

              119,

              0.4

            );

        }



        /* ====================================================

           VIGNETTE

        ==================================================== */



        .rose-gate-vignette {

          position: absolute;

          inset: 0;

          z-index: 40;

          pointer-events: none;

          background:

            radial-gradient(

              ellipse at center,

              transparent 45%,

              rgba(

                0,

                0,

                0,

                0.2

              ) 75%,

              rgba(

                0,

                0,

                0,

                0.72

              ) 100%

            );

        }



        /* ====================================================

           GRAIN

        ==================================================== */



        .rose-gate-grain {

          position: absolute;

          inset: -50%;

          z-index: 50;

          pointer-events: none;

          opacity: 0.055;

          background-image:

            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");

          animation:

            grainMove

            0.25s steps(2)

            infinite;

        }



        @keyframes grainMove {

          0% {

            transform:

              translate(0, 0);

          }



          25% {

            transform:

              translate(2%, -1%);

          }



          50% {

            transform:

              translate(-1%, 2%);

          }



          75% {

            transform:

              translate(1%, 1%);

          }



          100% {

            transform:

              translate(-2%, -1%);

          }

        }



        /* ====================================================

           RESPONSIVE

        ==================================================== */



        @media (max-width: 800px) {



          .rose-gate-pillar {

            width: 18vw;

          }



          .rose-gate-door-wrap {

            width: 34%;

          }



          .rose-gate-door-wrap-left {

            left: 16%;

          }



          .rose-gate-door-wrap-right {

            right: 16%;

          }



          .rose-gate-arch {

            width: 72vw;

          }



          .rose-gate-question {

            max-width: 90vw;

          }



          .rose-gate-bottom-label {

            left: 18px;

            bottom: 18px;

          }

        }



        @media (max-width: 520px) {



          .rose-gate-pillar {

            width: 20vw;

          }



          .rose-gate-door-wrap {

            top: 27%;

            height: 62%;

            width: 35%;

          }



          .rose-gate-door-wrap-left {

            left: 14%;

          }



          .rose-gate-door-wrap-right {

            right: 14%;

          }



          .rose-gate-arch {

            top: 7%;

            width: 76vw;

            height: 22%;

          }



          .rose-gate-copy {

            align-items: center;

            padding-top: 7vh;

          }



          .rose-gate-eyebrow {

            letter-spacing:

              0.3em;

          }



          .rose-gate-intro h1,

          .rose-gate-question h2 {

            font-size:

              clamp(

                30px,

                9vw,

                50px

              );

          }



          .rose-gate-question p {

            font-size: 12px;

          }



          .rose-gate-top-label {

            top: 18px;

          }



          .rose-gate-bottom-label {

            font-size: 7px;

          }



          .pillar-lamp {

            transform:

              translateX(-50%)

              scale(0.7);

          }



          .pillar-rose {

            font-size: 18px;

          }

        }



        @media (

          prefers-reduced-motion: reduce

        ) {



          .rose-gate-stars span,

          .rose-gate-moon,

          .rose-gate-atmosphere,

          .rose-gate-mist,

          .rose-gate-petals span,

          .pillar-lamp,

          .pillar-rose,

          .rose-gate-grain {

            animation:

              none !important;

          }

        }



      `})]})}const If=14,Of=["Wait... don't look away just yet. 🌹","A bouquet is beautiful... but somehow, it still felt too ordinary for you. ✨","So I searched for something worthy enough to give you...","And then I realised... maybe I had to create it myself. ❤️‍🔥","This is only the beginning. Keep looking... 👀"],Ff="A little birthday secret 💌";function Df({phase:e,onPickRandom:t,onZoomOutHeart:n,onRevealComplete:r}){const[i,o]=E.useState(!1),[s,a]=E.useState(-1),[u,d]=E.useState(!1),[g,m]=E.useState(!1),[h,y]=E.useState(!1),[x,k]=E.useState(!1),M=E.useRef([]),p=E.useRef(null),c=E.useRef(null),f=E.useRef(null),v=E.useMemo(()=>Array.from({length:If},(P,I)=>({id:I,left:`${(I*29+5)%100}%`,delay:`${-(I%8*1.8)}s`,duration:`${13+I%5*2}s`,size:`${7+I%4*2}px`,drift:`${-70+I%7*23}px`,rotate:`${I*53}deg`})),[]),S=()=>{M.current.forEach(P=>window.clearTimeout(P)),M.current=[],p.current!==null&&(window.clearTimeout(p.current),p.current=null),c.current!==null&&(window.clearTimeout(c.current),c.current=null),f.current!==null&&(window.clearTimeout(f.current),f.current=null)};E.useEffect(()=>{S(),o(!1),a(-1),d(!1),m(!1),y(!1),k(!1);const P=window.setTimeout(()=>o(!0),40);if(e==="reveal"){[900,3500,6200,8900,11600].forEach((Xe,Bt)=>{const Nn=window.setTimeout(()=>a(Bt),Xe);M.current.push(Nn)});const Ce=window.setTimeout(()=>{a(-1),d(!0),r()},14600);M.current.push(Ce)}else a(-1),d(!0);return()=>{window.clearTimeout(P),S()}},[e,r]);const b=()=>{e==="explore"&&!g&&!h&&!x&&t()},N=()=>{x||(d(!1),m(!0),y(!1),c.current=window.setTimeout(()=>{y(!0),c.current=null},12500))},T=()=>{m(!1),y(!1),c.current!==null&&(window.clearTimeout(c.current),c.current=null),p.current=window.setTimeout(()=>{d(!0),p.current=null},1200)},O=()=>{x||(y(!1),m(!1),k(!0),f.current=window.setTimeout(()=>{n(),f.current=null},3800))};return l.jsxs("section",{className:`page3 ${i?"page3--visible":""} ${s>=0?"page3--story":""} ${g?"page3--drop-open":""} ${h?"page3--continue":""} ${x?"page3--heart":""}`,"aria-label":"100,001 Roses",children:[l.jsx("div",{className:"page3__backdrop","aria-hidden":"true",children:l.jsx("img",{src:"/assets/bouquet/bouquet-wide.jpg",alt:""})}),l.jsx("div",{className:"page3__art","aria-hidden":"true",children:l.jsx("img",{className:"page3__image",src:"/assets/bouquet/bouquet-wide.jpg",alt:"",draggable:!1})}),l.jsx("div",{className:"page3__shade","aria-hidden":"true"}),l.jsx("div",{className:"page3__warmth","aria-hidden":"true"}),l.jsx("div",{className:"page3__light-sweep","aria-hidden":"true"}),l.jsx("div",{className:"page3__vignette","aria-hidden":"true"}),l.jsx("div",{className:"page3__grain","aria-hidden":"true"}),l.jsx("div",{className:"page3__petals","aria-hidden":"true",children:v.map(P=>l.jsx("span",{className:"page3__petal",style:{left:P.left,animationDelay:P.delay,animationDuration:P.duration,width:P.size,height:`calc(${P.size} * .68)`,"--drift":P.drift,"--rotate":P.rotate}},P.id))}),l.jsx("div",{className:"page3__story","aria-live":"polite",children:Of.map((P,I)=>l.jsx("p",{className:`page3__story-line ${s===I?"page3__story-line--active":""}`,children:P},P))}),l.jsxs("span",{className:"page3__side-note page3__side-note--left","aria-hidden":"true",children:["not just flowers",l.jsx("b",{children:"🌹"})]}),l.jsxs("span",{className:"page3__side-note page3__side-note--right","aria-hidden":"true",children:["a little piece",l.jsx("b",{children:"of my heart ♡"})]}),e==="explore"&&u&&!g&&!x&&l.jsxs("button",{type:"button",className:"page3__message-drop",onClick:N,children:[l.jsx("span",{className:"page3__message-icon",children:"💌"}),l.jsxs("span",{className:"page3__message-body",children:[l.jsx("strong",{children:"New message"}),l.jsx("small",{children:"Check me... something special just arrived 👀"})]}),l.jsx("span",{className:"page3__message-arrow",children:"›"})]}),e==="explore"&&!g&&!h&&!x&&l.jsx("button",{type:"button",className:"page3__bouquet-hit",onClick:b,"aria-label":"Choose a rose from the bouquet"}),e==="explore"&&g&&!x&&l.jsxs("div",{className:"page3__letter page3__letter--reading",role:"dialog","aria-label":"Birthday letter",children:[l.jsx("div",{className:"page3__letter-flower",children:"🌹"}),l.jsx("button",{type:"button",className:"page3__letter-close",onClick:T,"aria-label":"Close birthday letter",children:"×"}),l.jsx("span",{className:"page3__letter-kicker",children:"✦ written for this little moment ✦"}),l.jsx("h2",{children:Ff}),l.jsx("div",{className:"page3__letter-rule",children:"♡"}),l.jsx("p",{className:"page3__letter-lead",children:"Happy Birthday, beautiful. ❤️"}),l.jsx("p",{className:"page3__letter-copy page3__letter-copy--1",children:"I could have simply sent you a message and said, “Happy Birthday.” But that felt far too ordinary for a day that belongs to you."}),l.jsx("p",{className:"page3__letter-copy page3__letter-copy--2",children:"So I made you this little journey instead — a few roses, a few feelings, and a tiny corner of the internet where you can pause for a moment and just enjoy being celebrated. ✨"}),l.jsx("p",{className:"page3__letter-copy page3__letter-copy--3",children:"I hope this new year of your life gives you beautiful surprises, ridiculous amounts of laughter, unforgettable memories, and people who remind you just how special you are. 🌷"}),l.jsx("p",{className:"page3__letter-copy page3__letter-copy--4 page3__letter-whisper",children:"And yes... there is still something I haven't shown you yet. 👀"}),l.jsx("span",{className:"page3__letter-signature",children:"With a little too much effort, a lot of love, and 100,001 roses. ❤️"}),l.jsx("div",{className:"page3__letter-progress",children:l.jsx("span",{})}),l.jsx("div",{className:"page3__letter-hint",children:"Read it slowly... the next part is waiting."})]}),e==="explore"&&h&&!x&&l.jsx("div",{className:"page3__permission-backdrop",children:l.jsxs("div",{className:"page3__permission",role:"dialog","aria-label":"Continue to the next page",children:[l.jsx("span",{className:"page3__permission-sparkles",children:"✦ 🌹 ✦"}),l.jsx("span",{className:"page3__permission-kicker",children:"one last little question..."}),l.jsx("h3",{children:"Are you ready to go a little further? 👀"}),l.jsxs("p",{children:["Because if you think this was the whole surprise...",l.jsx("br",{}),"you really don't know me yet. ❤️‍🔥"]}),l.jsx("button",{type:"button",onClick:O,children:"I WANT TO SEE WHAT'S NEXT ✨"}),l.jsx("span",{className:"page3__permission-foot",children:"no turning back after this... 😉"})]})}),l.jsxs("div",{className:"page3__heart","aria-hidden":"true",children:[l.jsx("div",{className:"page3__heart-aura"}),l.jsx("div",{className:"page3__heart-symbol",children:"♥"}),l.jsxs("div",{className:"page3__heart-copy",children:[l.jsx("span",{children:"100,001 roses"}),l.jsx("strong",{children:"and still... not enough"})]})]}),l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Great+Vibes&display=swap');

        .page3 {
          position: fixed;
          inset: 0;
          z-index: 100;
          overflow: hidden;
          background: #080308;
          color: #fff4ec;
          opacity: 0;
          transition: opacity .9s cubic-bezier(.16,.72,.2,1);
          isolation: isolate;
        }

        .page3--visible { opacity: 1; }

        .page3__backdrop,
        .page3__art {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .page3__backdrop {
          z-index: 0;
          background: #080308;
        }

        .page3__backdrop img {
          position: absolute;
          inset: -10%;
          width: 120%;
          height: 120%;
          object-fit: cover;
          filter: blur(30px) brightness(.34) saturate(1.1);
          transform: scale(1.08);
        }

        .page3__art {
          z-index: 1;
          display: grid;
          place-items: center;
        }

        .page3__image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          user-select: none;
          -webkit-user-drag: none;
          opacity: 0;
          transform: scale(1.035);
          filter: saturate(.88) contrast(1.02) brightness(.58);
          animation:
            page3ImageIn 1.15s cubic-bezier(.16,.72,.2,1) forwards,
            page3SlowMotion 18s ease-in-out 1.15s infinite alternate;
        }

        .page3--visible .page3__image { animation-play-state: running; }

        .page3__shade {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(5,0,9,.08), transparent 28%, transparent 64%, rgba(5,0,9,.38)),
            linear-gradient(90deg, rgba(5,0,9,.12), transparent 25%, transparent 75%, rgba(5,0,9,.12));
        }

        .page3__warmth {
          position: absolute;
          inset: -10%;
          z-index: 4;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 58%, rgba(255,172,119,.10), transparent 30%),
            radial-gradient(circle at 15% 75%, rgba(255,65,92,.06), transparent 22%),
            radial-gradient(circle at 87% 68%, rgba(255,194,137,.06), transparent 24%);
          mix-blend-mode: screen;
          animation: page3Warmth 7s ease-in-out infinite;
        }

        /* Repeated light pass: short cycle, but subtle enough to remain romantic. */
        .page3__light-sweep {
          position: absolute;
          top: -30%;
          left: -48%;
          width: 32%;
          height: 165%;
          z-index: 5;
          pointer-events: none;
          background: linear-gradient(90deg, transparent, rgba(255,228,205,.075), transparent);
          transform: rotate(12deg);
          filter: blur(12px);
          opacity: 0;
          animation: page3LightPass 12s cubic-bezier(.22,.65,.25,1) infinite;
        }

        .page3__art::after {
          content: "";
          position: absolute;
          inset: -15%;
          z-index: 2;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 18% 48%,
              rgba(255, 196, 154, .10) 0%,
              rgba(255, 196, 154, .035) 18%,
              transparent 42%
            );
          mix-blend-mode: screen;
          opacity: .55;
          transform: translate3d(-7%, 1%, 0) scale(1.05);
          animation: page3AmbientDrift 18s ease-in-out infinite alternate;
        }

        .page3__vignette {
          position: absolute;
          inset: 0;
          z-index: 6;
          pointer-events: none;
          background: radial-gradient(circle at center, transparent 48%, rgba(4,0,7,.36) 100%);
        }

        .page3__grain {
          position: absolute;
          inset: -50%;
          z-index: 7;
          pointer-events: none;
          opacity: .035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
          animation: page3Grain .28s steps(2) infinite;
        }

        .page3__petals {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          overflow: hidden;
        }

        .page3__petal {
          position: absolute;
          top: -8%;
          display: block;
          border-radius: 72% 28% 70% 30%;
          background: linear-gradient(135deg, rgba(255,112,128,.86), rgba(112,8,29,.74));
          box-shadow: 0 3px 14px rgba(65,0,16,.22);
          opacity: 0;
          animation: page3PetalFall linear infinite;
        }

        .page3__side-note {
          position: absolute;
          z-index: 17;
          top: 50%;
          width: clamp(190px, 14vw, 255px);
          color: rgba(255,239,231,.96);
          font: italic 600 clamp(24px, 2.05vw, 34px)/1.05 "Cormorant Garamond", Georgia, serif;
          letter-spacing: .015em;
          text-align: center;
          text-shadow:
            0 4px 18px rgba(0,0,0,.96),
            0 0 12px rgba(255,218,192,.28),
            0 0 34px rgba(177,36,67,.24);
          opacity: 0;
          transform: translateY(14px);
          animation: page3SideNoteIn 1.5s cubic-bezier(.16,.8,.2,1) .9s forwards;
          pointer-events: none;
        }

        .page3__side-note::before {
          content: "✦";
          display: block;
          margin-bottom: 10px;
          color: rgba(255,205,169,.88);
          font: 15px "Cormorant Garamond", Georgia, serif;
          text-shadow: 0 0 14px rgba(255,188,151,.45);
        }

        .page3__side-note::after {
          content: "";
          display: block;
          width: 58px;
          height: 1px;
          margin: 12px auto 0;
          background: linear-gradient(90deg, transparent, rgba(255,205,169,.72), transparent);
          box-shadow: 0 0 12px rgba(255,174,135,.22);
        }

        .page3__side-note b {
          display: block;
          margin-top: 9px;
          color: #ffd0c2;
          font: 400 clamp(18px, 1.45vw, 24px)/1.1 "Great Vibes", "Cormorant Garamond", cursive;
          letter-spacing: .025em;
          text-shadow: 0 0 18px rgba(255,115,142,.26);
        }

        .page3__side-note--left {
          left: clamp(24px, 10.5vw, 205px);
        }

        .page3__side-note--right {
          right: clamp(24px, 10.5vw, 205px);
        }

        .page3__story {
          position: absolute;
          z-index: 18;
          left: 50%;
          top: 34%;
          width: min(760px, 84vw);
          min-height: 110px;
          transform: translate(-50%, -50%);
          display: grid;
          place-items: center;
          pointer-events: none;
          text-align: center;
        }

        .page3__story-line {
          grid-area: 1 / 1;
          width: min(860px, 88vw);
          margin: 0;
          padding: 0 18px;
          color: #fff8f2;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(25px, 3vw, 43px);
          line-height: 1.2;
          font-style: italic;
          font-weight: 500;
          letter-spacing: .01em;
          text-shadow:
            0 3px 12px rgba(0,0,0,.96),
            0 0 24px rgba(0,0,0,.72);
          opacity: 0;
          transform: translateY(22px) scale(.985);
          filter: blur(9px);
          transition:
            opacity 1.05s ease,
            transform 1.2s cubic-bezier(.16,.8,.2,1),
            filter 1.2s ease;
        }

        .page3__story-line--active {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .page3__bouquet-hit {
          position: absolute;
          z-index: 20;
          left: 29%;
          top: 23%;
          width: 42%;
          height: 49%;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .page3__message-drop {
          position: absolute;
          z-index: 35;
          right: clamp(16px, 2.2vw, 34px);
          bottom: clamp(18px, 3vw, 34px);
          width: min(390px, 88vw);
          min-height: 76px;
          display: grid;
          grid-template-columns: 42px 1fr 18px;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: 1px solid rgba(255,203,193,.13);
          border-radius: 18px;
          background: rgba(24,8,17,.86);
          box-shadow: 0 18px 55px rgba(0,0,0,.42), 0 0 24px rgba(255,73,104,.18);
          color: #fff2e9;
          text-align: left;
          backdrop-filter: blur(17px) saturate(1.12);
          cursor: pointer;
          animation: page3NotificationDrop .8s cubic-bezier(.16,.82,.24,1) forwards,
                     page3NotificationPulse 2.2s ease-in-out 1s infinite;
        }

        .page3__message-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(165,30,62,.34);
          font-size: 20px;
        }

        .page3__message-body { display: flex; flex-direction: column; gap: 4px; }
        .page3__message-body strong {
          font: 600 13px "Cormorant Garamond", Georgia, serif;
          letter-spacing: .05em;
          text-transform: uppercase;
        }
        .page3__message-body small {
          color: rgba(255,235,224,.78);
          font: 15px/1.25 "Cormorant Garamond", Georgia, serif;
        }
        .page3__message-arrow { font-size: 28px; color: rgba(255,220,205,.72); }

        .page3__letter {
          position: absolute;
          z-index: 40;
          left: 50%;
          top: 50%;
          width: min(600px, 88vw);
          max-height: min(82vh, 760px);
          overflow-y: auto;
          transform: translate(-50%, -50%) scale(.93) rotateX(5deg);
          padding: clamp(34px, 4.5vw, 58px) clamp(27px, 5vw, 58px) 38px;
          color: #4c2632;
          text-align: center;
          background:
            radial-gradient(circle at 15% 10%, rgba(255,255,255,.72), transparent 21%),
            radial-gradient(circle at 90% 90%, rgba(180,78,78,.07), transparent 28%),
            linear-gradient(135deg, #fff8ea 0%, #f7e7d4 48%, #f3dfcc 100%);
          box-shadow: 0 38px 120px rgba(0,0,0,.62), 0 0 70px rgba(255,86,112,.17);
          border-radius: 3px;
          opacity: 0;
          animation: page3LetterIn .95s cubic-bezier(.16,.8,.2,1) forwards;
        }

        .page3__letter::before {
          content: "";
          position: absolute;
          inset: 13px;
          border: 1px solid rgba(119,55,69,.16);
          pointer-events: none;
        }

        .page3__letter::after {
          content: "";
          position: absolute;
          left: 10%;
          right: 10%;
          bottom: 20px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(125,58,73,.18), transparent);
        }

        .page3__letter-flower {
          font-size: 25px;
          margin-bottom: 4px;
          filter: drop-shadow(0 3px 8px rgba(112,20,38,.15));
        }

        .page3__letter-close {
          position: absolute;
          z-index: 2;
          top: 11px;
          right: 15px;
          border: 0;
          background: transparent;
          color: rgba(75,32,46,.55);
          font-size: 25px;
          cursor: pointer;
        }

        .page3__letter-kicker {
          display: block;
          margin-bottom: 9px;
          color: rgba(123,57,72,.67);
          font: 10px Arial, sans-serif;
          letter-spacing: .28em;
          text-transform: uppercase;
        }

        .page3__letter h2 {
          margin: 0;
          color: #772e46;
          font-family: "Great Vibes", "Cormorant Garamond", cursive;
          font-size: clamp(34px, 5vw, 50px);
          font-weight: 400;
          line-height: 1.08;
        }

        .page3__letter-rule {
          margin: 10px auto 17px;
          color: rgba(139,52,73,.55);
          font-family: "Cormorant Garamond", serif;
          font-size: 17px;
        }

        .page3__letter p {
          margin: 12px 0;
          color: rgba(57,27,37,.98);
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.62;
        }

        .page3__letter-lead {
          color: #7a2d45 !important;
          font-size: clamp(22px, 3vw, 27px) !important;
          font-style: italic;
        }

        .page3__letter-whisper {
          color: #6f263e !important;
          font-style: italic;
          font-weight: 600;
          margin-top: 18px !important;
        }

        .page3__letter-signature {
          display: block;
          margin-top: 19px;
          color: rgba(91,39,56,.92);
          font: italic 17px "Cormorant Garamond", Georgia, serif;
          font-weight: 600;
        }

        .page3__letter-progress {
          width: 100px;
          height: 1px;
          margin: 20px auto 10px;
          background: rgba(116,54,70,.13);
          overflow: hidden;
        }

        .page3__letter-progress span {
          display: block;
          width: 0;
          height: 100%;
          background: rgba(130,48,70,.52);
          animation: page3LetterRead 12.5s linear forwards;
        }

        .page3__letter-hint {
          color: rgba(82,40,54,.78);
          font: italic 13px "Cormorant Garamond", Georgia, serif;
        }

        .page3__letter--reading .page3__letter-flower,
        .page3__letter--reading .page3__letter-kicker,
        .page3__letter--reading h2,
        .page3__letter--reading .page3__letter-rule,
        .page3__letter--reading p,
        .page3__letter--reading .page3__letter-signature,
        .page3__letter--reading .page3__letter-hint {
          opacity: 0;
          transform: translateY(14px);
          animation: page3LetterContentIn 1s cubic-bezier(.16,.78,.2,1) forwards;
        }

        .page3__letter--reading .page3__letter-flower { animation-delay: .45s; }
        .page3__letter--reading .page3__letter-kicker { animation-delay: .75s; }
        .page3__letter--reading h2 { animation-delay: 1.05s; }
        .page3__letter--reading .page3__letter-rule { animation-delay: 1.35s; }
        .page3__letter--reading .page3__letter-lead { animation-delay: 1.75s; }

        /* Every paragraph gets its own deliberate reveal beat. */
        .page3__letter--reading .page3__letter-copy--1 { animation-delay: 2.35s; }
        .page3__letter--reading .page3__letter-copy--2 { animation-delay: 3.45s; }
        .page3__letter--reading .page3__letter-copy--3 {
          animation-delay: 4.65s;
          animation-duration: 1.25s;
        }
        .page3__letter--reading .page3__letter-copy--4 { animation-delay: 5.85s; }

        .page3__letter--reading .page3__letter-signature { animation-delay: 6.75s; }
        .page3__letter--reading .page3__letter-hint { animation-delay: 7.65s; }


        .page3__permission-backdrop {
          position: absolute;
          inset: 0;
          z-index: 60;
          display: grid;
          place-items: center;
          background: rgba(5,0,9,.54);
          backdrop-filter: blur(5px);
          animation: page3BackdropIn .7s ease forwards;
        }

        .page3__permission {
          width: min(500px, 86vw);
          padding: 38px 30px 30px;
          border: 1px solid rgba(255,194,180,.18);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(39,10,22,.96), rgba(17,4,12,.97));
          box-shadow: 0 35px 110px rgba(0,0,0,.62), 0 0 55px rgba(255,74,109,.16);
          text-align: center;
          animation: page3PermissionIn .8s cubic-bezier(.16,.8,.2,1) forwards;
        }

        .page3__permission-sparkles {
          display: block;
          margin-bottom: 10px;
          color: #f5b7ad;
          font-size: 15px;
          letter-spacing: .18em;
        }

        .page3__permission-kicker {
          color: rgba(255,213,201,.56);
          font: 9px Arial, sans-serif;
          letter-spacing: .34em;
          text-transform: uppercase;
        }

        .page3__permission h3 {
          margin: 15px 0 12px;
          color: #fff0e6;
          font: italic 500 clamp(26px, 4vw, 36px)/1.2 "Cormorant Garamond", Georgia, serif;
        }

        .page3__permission p {
          margin: 0;
          color: rgba(255,229,218,.74);
          font: 16px/1.6 "Cormorant Garamond", Georgia, serif;
        }

        .page3__permission button {
          margin-top: 22px;
          padding: 14px 25px;
          border: 1px solid rgba(255,191,178,.28);
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(153,34,64,.8), rgba(93,13,38,.82));
          color: #fff1e9;
          font: 600 11px Arial, sans-serif;
          letter-spacing: .12em;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,.3), 0 0 24px rgba(255,65,105,.14);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .page3__permission button:hover {
          transform: translateY(-2px) scale(1.015);
          box-shadow: 0 14px 35px rgba(0,0,0,.35), 0 0 34px rgba(255,65,105,.22);
        }

        .page3__permission-foot {
          display: block;
          margin-top: 13px;
          color: rgba(255,213,201,.38);
          font: italic 12px "Cormorant Garamond", Georgia, serif;
        }

        .page3__heart {
          position: absolute;
          inset: 0;
          z-index: 80;
          display: grid;
          place-items: center;
          background: radial-gradient(circle at center, rgba(112,7,40,.28), rgba(3,0,8,.98) 76%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 1.2s ease;
        }

        .page3--heart .page3__heart { opacity: 1; }

        .page3__heart-aura {
          position: absolute;
          width: min(40vw, 500px);
          height: min(40vw, 500px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,67,111,.36), transparent 68%);
          filter: blur(17px);
          transform: scale(.2);
          opacity: 0;
          transition: transform 3.1s cubic-bezier(.12,.78,.16,1), opacity 1.2s ease;
        }

        .page3--heart .page3__heart-aura { transform: scale(1.45); opacity: 1; }

        .page3__heart-symbol {
          color: rgba(255,222,210,.98);
          font-size: min(28vw, 320px);
          line-height: 1;
          transform: scale(.08);
          opacity: 0;
          text-shadow: 0 0 25px rgba(255,81,119,.95), 0 0 100px rgba(255,46,90,.5);
          transition: transform 3s cubic-bezier(.12,.78,.16,1), opacity 1.1s ease .35s;
        }

        .page3--heart .page3__heart-symbol { transform: scale(1); opacity: 1; }

        .page3__heart-copy {
          position: absolute;
          bottom: 12%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 7px;
          color: rgba(255,235,220,.92);
          text-align: center;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 1.2s ease 1.8s, transform 1.2s ease 1.8s;
        }

        .page3--heart .page3__heart-copy { opacity: 1; transform: translateY(0); }
        .page3__heart-copy span { font: 10px Arial, sans-serif; letter-spacing: .3em; text-transform: uppercase; }
        .page3__heart-copy strong { font: italic 400 clamp(22px, 3vw, 34px) "Cormorant Garamond", Georgia, serif; }

        @keyframes page3ImageIn {
          0% { opacity: 0; transform: scale(1.06); filter: saturate(.72) brightness(.34) blur(3px); }
          55% { opacity: .78; }
          100% { opacity: .98; transform: scale(1.035); filter: saturate(.96) contrast(1.03) brightness(.83); }
        }

        @keyframes page3SlowMotion {
          0% { transform: scale(1.035) translate3d(-.35%, .2%, 0); }
          50% { transform: scale(1.065) translate3d(.25%, -.15%, 0); }
          100% { transform: scale(1.09) translate3d(.4%, .28%, 0); }
        }

        @keyframes page3Warmth {
          0%,100% { opacity: .55; transform: scale(1); }
          50% { opacity: .86; transform: scale(1.025); }
        }

        @keyframes page3LightPass {
          0%, 24% {
            transform: translateX(-28vw) rotate(12deg);
            opacity: 0;
          }
          34% {
            opacity: .16;
          }
          50% {
            opacity: .28;
          }
          66% {
            opacity: .12;
          }
          82%, 100% {
            transform: translateX(250vw) rotate(12deg);
            opacity: 0;
          }
        }

        @keyframes page3Grain {
          0% { transform: translate3d(0,0,0); }
          25% { transform: translate3d(-2%,1%,0); }
          50% { transform: translate3d(1%,-2%,0); }
          75% { transform: translate3d(2%,2%,0); }
          100% { transform: translate3d(-1%,-1%,0); }
        }

        @keyframes page3PetalFall {
          0% { transform: translate3d(0,-10vh,0) rotate(var(--rotate)) scale(.72); opacity: 0; }
          10% { opacity: .52; }
          55% { opacity: .44; }
          100% { transform: translate3d(var(--drift),112vh,0) rotate(calc(var(--rotate) + 430deg)) scale(1); opacity: 0; }
        }

        @keyframes page3NotificationDrop {
          0% { transform: translate3d(120%, 0, 0); opacity: 0; }
          65% { transform: translate3d(-8px, 0, 0); opacity: 1; }
          100% { transform: translate3d(0, 0, 0); opacity: 1; }
        }

        @keyframes page3NotificationPulse {
          0%,100% { box-shadow: 0 18px 55px rgba(0,0,0,.42), 0 0 0 rgba(255,73,104,0); }
          50% { box-shadow: 0 18px 55px rgba(0,0,0,.42), 0 0 0 7px rgba(255,73,104,.07), 0 0 28px rgba(255,73,104,.2); }
        }

        @keyframes page3LetterIn {
          from { opacity: 0; transform: translate(-50%, -46%) scale(.93) rotateX(5deg); filter: blur(6px); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1) rotateX(0); filter: blur(0); }
        }

        @keyframes page3LetterRead { from { width: 0; } to { width: 100%; } }

        @keyframes page3SideNoteIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes page3LetterContentIn {
          from {
            opacity: 0;
            transform: translateY(14px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes page3AmbientDrift {
          0% {
            transform: translate3d(-7%, 1%, 0) scale(1.05);
            opacity: .38;
          }
          50% {
            transform: translate3d(3%, -1%, 0) scale(1.09);
            opacity: .58;
          }
          100% {
            transform: translate3d(8%, 2%, 0) scale(1.06);
            opacity: .42;
          }
        }
        @keyframes page3BackdropIn { from { opacity: 0; } to { opacity: 1; } }

        @keyframes page3PermissionIn {
          from { opacity: 0; transform: translateY(25px) scale(.93); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        @media (max-width: 700px) {
          .page3__image { object-fit: cover; }
          .page3__backdrop { display: none; }
          .page3__story { top: 35%; width: 88vw; }
          .page3__story-line { font-size: 25px; line-height: 1.12; }
          .page3__side-note { display: none; }
          .page3__bouquet-hit { left: 12%; top: 25%; width: 76%; height: 44%; }
          .page3__message-drop { right: 14px; bottom: 16px; width: calc(100vw - 28px); }
          .page3__letter { width: 84vw; max-height: 84vh; padding: 32px 22px 30px; }
          .page3__letter p { font-size: 15px; line-height: 1.55; }
          .page3__permission { width: 82vw; padding: 32px 22px 25px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .page3__image,
          .page3__warmth,
          .page3__light-sweep,
          .page3__grain,
          .page3__petal { animation: none; }
          .page3__image { opacity: .97; transform: none; filter: none; }
        }
      `})]})}Object.keys(oe.specialRoseMessages).map(Number).sort((e,t)=>e-t);function Uf(e){return e in oe.specialRoseMessages}function Gf(e){return e in oe.specialRoseMessages?oe.specialRoseMessages[e]:e in oe.hiddenMessages?oe.hiddenMessages[e]:null}function Hf(){return new Set([...Object.keys(oe.specialRoseMessages).map(Number),...Object.keys(oe.hiddenMessages).map(Number)])}const Bf=["You have a way of making ordinary moments feel special.","Some memories stay quietly beautiful because of people like you.","You make laughter feel easier and good days feel a little brighter.","There is something wonderfully unforgettable about the way you are.","Even the smallest moments can become beautiful when you are part of them.","You deserve to be reminded that you are deeply appreciated.","Some people bring flowers into a room; you bring warmth into it.","I hope you never forget how much joy you can bring without even trying.","There are moments I would happily replay just because you were there.","You make simple memories feel like stories worth keeping.","The best things about you are often the little things you don't notice.","You have a beautiful way of turning normal days into better ones."],$f=["Keep this little reminder close whenever you need a reason to smile.","May this be one tiny reason to believe that beautiful things are still ahead.","I hope this year gives you more moments that feel exactly like this.","Whatever comes next, I hope it brings you plenty of reasons to laugh.","You deserve memories that make you smile long after they happen.","May the next chapter be kinder, brighter, and slightly more crazy.","I hope you keep choosing happiness, even on the ordinary days.","Somewhere in all the chaos, I hope you always find your little moments of peace.","Never underestimate how much your presence can mean to someone.","Take this as a tiny reminder that you are worth celebrating.","I hope you collect beautiful memories faster than you can count them.","And if today gets a little difficult, remember that brighter moments are coming."],Vf=["Always keep that smile. ❤️","Stay wonderfully you. 🌹","Here's to more crazy memories. ✨","You deserve all the good things. 🫶","Keep shining. ❤️","One more reason to smile. 🌹","For you, always. ♡","Happy Birthday, beautiful soul. 🎂"];function Wf(e){let t=e|0;return t=Math.imul(t^t>>>16,73244475),t=Math.imul(t^t>>>16,73244475),t=t^t>>>16,t>>>0}function go(e,t){return e[Wf(t)%e.length]}function Yf(e){const t=Math.max(1,Math.min(100001,Math.floor(e))),n=go(Bf,t*3+11),r=go($f,t*5+17),i=go(Vf,t*7+23);return`${n} ${r}

Rose #${t.toLocaleString("en-US")} keeps this little reason just for you. ${i}`}function Qf({roseId:e,isRandom:t,onClose:n,onPrevious:r,onNext:i,onPickAnother:o}){const a=Gf(e)||Yf(e),u=Uf(e);return l.jsxs("div",{className:"rose-info-overlay",children:[l.jsxs("div",{className:"rose-info-panel",role:"dialog","aria-label":`Rose ${e} note`,children:[l.jsx("button",{className:"rose-info-close",type:"button",onClick:n,"aria-label":"Close rose note",children:"×"}),l.jsx("div",{className:"rose-info-glow","aria-hidden":"true"}),l.jsxs("div",{className:"rose-info-rose-art","aria-hidden":"true",children:[l.jsx("div",{className:"rose-art-flower",children:"🌹"}),l.jsx("div",{className:"rose-art-leaves",children:"✦"})]}),l.jsxs("div",{className:"rose-info-content",children:[l.jsxs("div",{className:"rose-info-pill",children:["Rose #",e.toLocaleString("en-US")]}),l.jsx("div",{className:"rose-info-count",children:"1 of 100,001 roses"}),l.jsxs("div",{className:"rose-note",children:[l.jsx("span",{className:"rose-note-pin",children:"♡"}),l.jsx("p",{children:a}),l.jsx("span",{className:"rose-note-heart",children:"♡"})]}),u&&l.jsx("div",{className:"rose-special",children:"✦ This one was hidden for you ✦"}),l.jsxs("div",{className:"rose-info-nav",children:[l.jsx("button",{type:"button",onClick:r,disabled:!r,"aria-label":"Previous rose",children:"‹"}),l.jsxs("span",{children:[e.toLocaleString("en-US")," / 100,001"]}),l.jsx("button",{type:"button",onClick:i,disabled:!i,"aria-label":"Next rose",children:"›"})]}),o&&l.jsx("button",{className:"rose-pick-button",type:"button",onClick:o,children:"♥ Pick another rose"})]})]}),l.jsx("style",{children:`
        .rose-info-overlay {
          position: fixed;
          inset: 0;
          z-index: 90;
          pointer-events: none;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: clamp(18px, 4vw, 54px);
        }

        .rose-info-panel {
          position: relative;
          width: min(460px, 90vw);
          max-height: min(760px, 88vh);
          overflow: auto;
          pointer-events: auto;
          border: 1px solid rgba(255, 215, 150, .42);
          border-radius: 28px;
          padding: 24px;
          color: #fff7ed;
          background:
            linear-gradient(145deg, rgba(38, 7, 16, .93), rgba(17, 7, 20, .91)),
            radial-gradient(circle at 30% 15%, rgba(255, 92, 130, .25), transparent 50%);
          box-shadow: 0 30px 100px rgba(0,0,0,.62), 0 0 55px rgba(255,75,120,.16);
          backdrop-filter: blur(18px);
          animation: rosePanelIn .65s cubic-bezier(.16,.72,.2,1) both;
        }

        .rose-info-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 3;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255, 215, 150, .4);
          background: rgba(0,0,0,.22);
          color: #fff6ec;
          font-size: 28px;
          line-height: 1;
          cursor: pointer;
        }

        .rose-info-glow {
          position: absolute;
          left: 50%;
          top: 40px;
          width: 240px;
          height: 240px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 65, 105, .34), transparent 68%);
          filter: blur(22px);
          pointer-events: none;
        }

        .rose-info-rose-art {
          position: relative;
          height: 220px;
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: 20px;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,80,115,.2), transparent 45%),
            linear-gradient(145deg, rgba(80,12,30,.75), rgba(17,8,20,.2));
        }

        .rose-art-flower {
          position: relative;
          z-index: 1;
          font-size: clamp(100px, 20vw, 160px);
          filter: drop-shadow(0 12px 30px rgba(255, 30, 80, .35));
          animation: roseFloat 4s ease-in-out infinite;
        }

        .rose-art-leaves {
          position: absolute;
          bottom: 18px;
          color: rgba(255,215,150,.7);
          font-size: 36px;
        }

        .rose-info-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 18px 8px 4px;
        }

        .rose-info-pill {
          display: inline-flex;
          padding: 7px 20px;
          border: 1px solid rgba(255,215,150,.55);
          border-radius: 999px;
          color: #ffe2bd;
          font: 600 15px/1.2 Georgia, serif;
          letter-spacing: .05em;
          background: rgba(0,0,0,.2);
        }

        .rose-info-count {
          margin-top: 8px;
          color: rgba(255,247,237,.62);
          font: italic 15px/1.3 Georgia, serif;
        }

        .rose-note {
          position: relative;
          margin: 18px auto 10px;
          padding: 28px 28px 24px;
          color: #3c2822;
          background: linear-gradient(145deg, #fff4dd, #f2d7bc);
          box-shadow: 0 15px 35px rgba(0,0,0,.35);
          transform: rotate(-1.2deg);
          clip-path: polygon(0 2%, 97% 0, 100% 96%, 3% 100%);
        }

        .rose-note-pin,
        .rose-note-heart {
          color: #a33b53;
          font-size: 24px;
        }

        .rose-note-pin {
          display: block;
          margin-bottom: 10px;
        }

        .rose-note p {
          margin: 0;
          white-space: pre-line;
          font: 500 clamp(17px, 3vw, 22px)/1.42 Georgia, serif;
          font-style: italic;
        }

        .rose-note-heart {
          display: block;
          margin-top: 12px;
        }

        .rose-special {
          color: #ffd88d;
          font: italic 14px Georgia, serif;
        }

        .rose-info-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 18px;
          color: rgba(255,247,237,.75);
          font: 15px Georgia, serif;
        }

        .rose-info-nav button {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,215,150,.45);
          background: rgba(0,0,0,.18);
          color: #ffe8c9;
          font-size: 32px;
          cursor: pointer;
        }

        .rose-info-nav button:disabled {
          opacity: .35;
          cursor: default;
        }

        .rose-pick-button {
          margin-top: 16px;
          padding: 11px 24px;
          border-radius: 999px;
          border: 1px solid rgba(255,215,150,.55);
          background: rgba(125,20,48,.42);
          color: #fff0df;
          font: 600 15px Georgia, serif;
          cursor: pointer;
        }

        @keyframes rosePanelIn {
          from { opacity: 0; transform: translateX(38px) scale(.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes roseFloat {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }

        @media (max-width: 760px) {
          .rose-info-overlay {
            align-items: flex-end;
            justify-content: center;
            padding: 12px;
          }
          .rose-info-panel {
            width: min(520px, 96vw);
            max-height: 82vh;
            padding: 16px;
          }
          .rose-info-rose-art { height: 145px; }
          .rose-art-flower { font-size: 95px; }
        }
      `})]})}const Ln=[{at:2800,title:"One last surprise…",body:"Out of 100,001 roses, there’s something I’ve always wanted to say…"},{at:6200,title:"Every rose has a reason…",body:"A memory. A moment. A feeling. A little piece of you."},{at:1e4,title:"And all of them lead to this…",body:""},{at:14e3,title:"Because at the end of it all…",body:"It’s always you. ❤️"}],gl=3500;function Xf({phase:e,onReset:t,onPickRandom:n}){const[r,i]=E.useState(-1),[o,s]=E.useState(!1),[a,u]=E.useState(!1),d=E.useRef([]);E.useEffect(()=>{if(d.current.forEach(h=>window.clearTimeout(h)),d.current=[],i(-1),s(!1),u(!1),e==="final"){i(Ln.length-1),s(!1);const h=window.setTimeout(()=>s(!0),gl);return d.current.push(h),()=>{d.current.forEach(y=>window.clearTimeout(y)),d.current=[]}}return Ln.forEach((h,y)=>{d.current.push(window.setTimeout(()=>{s(!1),i(y)},h.at))}),d.current.push(window.setTimeout(()=>s(!0),Ln[Ln.length-1].at+gl)),d.current.push(window.setTimeout(()=>u(!0),26e3)),()=>{d.current.forEach(h=>window.clearTimeout(h)),d.current=[]}},[e]);const g=r>=0?Ln[r]:null,m=e==="final";return l.jsxs("div",{className:"final-scene","aria-live":"polite",children:[l.jsx("div",{className:"heart-vignette","aria-hidden":"true"}),l.jsx("div",{className:"heart-top-glow","aria-hidden":"true"}),l.jsx("div",{className:"heart-particles","aria-hidden":"true",children:Array.from({length:28}).map((h,y)=>l.jsx("span",{style:{"--i":y}},y))}),m&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"explore-heading",children:[l.jsx("div",{className:"explore-eyebrow",children:"100,001 REASONS"}),l.jsx("h1",{children:"Now it’s your turn…"}),l.jsxs("div",{className:"explore-rule",children:[l.jsx("span",{}),"♡",l.jsx("span",{})]}),l.jsx("p",{children:"Click on any rose to read its note."}),l.jsx("small",{children:"Each rose holds a unique memory, a reason, a feeling… just for you."})]}),l.jsxs("div",{className:"explore-help",children:[l.jsxs("div",{className:"help-row",children:[l.jsx("b",{children:"◉"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Click a rose"}),l.jsx("em",{children:"Read its note"})]})]}),l.jsxs("div",{className:"help-row",children:[l.jsx("b",{children:"↕"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Scroll"}),l.jsx("em",{children:"Zoom in / out"})]})]}),l.jsxs("div",{className:"help-row",children:[l.jsx("b",{children:"✣"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Drag"}),l.jsx("em",{children:"Look around"})]})]}),l.jsxs("div",{className:"help-row",children:[l.jsx("b",{children:"⦿"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Double click"}),l.jsx("em",{children:"Reset view"})]})]})]}),l.jsxs("div",{className:"explore-footer",children:[l.jsx("span",{children:"♥"})," 100,001 REASONS. ALWAYS YOU."]}),l.jsx("button",{className:"random-rose",type:"button",onClick:n,children:"♥ Pick a rose for me"})]}),g&&!m&&l.jsx("div",{className:`story-copy ${o?"story-copy--fade":"story-copy--visible"}`,children:l.jsxs("div",{className:"story-block",children:[l.jsx("div",{className:"story-title",children:g.title}),g.body&&l.jsx("div",{className:"story-body",children:g.body}),l.jsxs("div",{className:"story-divider","aria-hidden":"true",children:[l.jsx("span",{}),l.jsx("b",{children:"♡"}),l.jsx("span",{})]})]},r)}),l.jsx("button",{type:"button",className:`heart-replay ${a||m?"heart-replay--visible":""}`,onClick:t,"aria-label":"Replay the journey",children:"Replay ↻"}),l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Great+Vibes&display=swap');

        .final-scene {
          position: fixed;
          inset: 0;
          z-index: 60;
          overflow: hidden;
          pointer-events: none;
          color: #fff8fb;
          font-family: 'Cormorant Garamond', Georgia, serif;
          isolation: isolate;
        }

        .heart-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 52%, transparent 30%, rgba(0,0,0,.12) 60%, rgba(0,0,0,.5) 100%);
          opacity: .78;
        }

        .heart-top-glow {
          position: absolute;
          left: 50%;
          top: -15%;
          width: min(80vw, 1000px);
          height: 55vh;
          transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(255,150,175,.12), rgba(255,80,120,.035) 34%, transparent 72%);
          filter: blur(12px);
          animation: heartGlow 6s ease-in-out infinite;
        }

        .heart-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: .4;
        }

        .heart-particles span {
          position: absolute;
          width: 2px;
          height: 2px;
          left: calc((var(--i) * 17.1%) % 100%);
          top: calc((var(--i) * 29.7%) % 100%);
          border-radius: 50%;
          background: rgba(255,225,235,.82);
          box-shadow: 0 0 8px rgba(255,150,180,.7);
          animation: particleFloat 7s ease-in-out infinite, particleBlink 3.4s ease-in-out infinite;
          animation-delay: calc(var(--i) * -.31s), calc(var(--i) * -.17s);
        }

        .story-copy {
          position: absolute;
          left: 50%;
          top: 12vh;
          width: min(820px, 88vw);
          transform: translate(-50%, 0);
          text-align: center;
          z-index: 5;
          opacity: 1;
          transition: opacity 1.2s ease, transform 1.2s ease;
        }

        .story-copy--visible { opacity: 1; }
        .story-copy--fade { opacity: 0; transform: translate(-50%, -16px); }

        .story-title {
          font-size: clamp(1.6rem, 4vw, 2.8rem);
          font-style: italic;
          text-shadow: 0 2px 20px rgba(0,0,0,.75);
        }

        .story-body {
          margin-top: .8rem;
          font-size: clamp(1.05rem, 2.2vw, 1.45rem);
          color: rgba(255,244,240,.82);
        }

        .story-divider, .explore-rule {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin: 18px auto 0;
          color: #ffd8a7;
        }

        .story-divider span, .explore-rule span {
          width: 80px;
          height: 1px;
          background: rgba(255,216,167,.45);
        }

        .explore-heading {
          position: absolute;
          top: clamp(22px, 4.5vh, 56px);
          left: 50%;
          width: min(900px, 88vw);
          transform: translateX(-50%);
          text-align: center;
          z-index: 8;
          text-shadow: 0 2px 18px rgba(0,0,0,.8);
        }

        .explore-eyebrow {
          color: rgba(255,220,180,.75);
          font-size: 11px;
          letter-spacing: .42em;
          margin-bottom: 5px;
        }

        .explore-heading h1 {
          margin: 0;
          font: 400 clamp(2.2rem, 5.4vw, 4.1rem)/1.05 'Great Vibes', cursive;
          color: #ffe4ca;
        }

        .explore-heading p {
          margin: 8px 0 0;
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-style: italic;
          color: rgba(255,244,235,.92);
        }

        .explore-heading small {
          display: block;
          margin-top: 4px;
          color: rgba(255,244,235,.62);
          font-size: clamp(.78rem, 1.5vw, .95rem);
        }

        .explore-help {
          position: absolute;
          left: 14px;
          bottom: 18vh;
          z-index: 9;
          width: 170px;
          padding: 16px 13px;
          border: 1px solid rgba(255,215,150,.32);
          border-radius: 16px;
          background: rgba(15,5,12,.48);
          backdrop-filter: blur(10px);
          box-shadow: 0 15px 40px rgba(0,0,0,.32);
        }

        .help-row {
          display: flex;
          gap: 10px;
          align-items: center;
          margin: 10px 0;
          color: #ffe1bf;
        }

        .help-row b {
          width: 28px;
          font-size: 20px;
          text-align: center;
          font-weight: 400;
        }

        .help-row span { display: flex; flex-direction: column; }
        .help-row strong { font-size: 13px; font-weight: 600; }
        .help-row em { color: rgba(255,240,230,.58); font-size: 11px; font-style: normal; margin-top: 2px; }

        .random-rose {
          position: absolute;
          left: 50%;
          bottom: 24px;
          transform: translateX(-50%);
          z-index: 10;
          pointer-events: auto;
          padding: 11px 22px;
          border: 1px solid rgba(255,215,150,.52);
          border-radius: 999px;
          background: rgba(70,10,25,.48);
          color: #fff0dc;
          font: 600 15px Georgia, serif;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0,0,0,.3);
        }

        .explore-footer {
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          color: rgba(255,224,198,.68);
          font-size: 11px;
          letter-spacing: .3em;
          white-space: nowrap;
        }

        .explore-footer span { color: #ffb2c8; margin-right: 8px; }

        .heart-replay {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 15;
          opacity: 0;
          pointer-events: none;
          border: 1px solid rgba(255,215,150,.35);
          border-radius: 999px;
          background: rgba(0,0,0,.25);
          color: rgba(255,244,235,.72);
          padding: 8px 13px;
          cursor: pointer;
        }

        .heart-replay--visible { opacity: 1; pointer-events: auto; }

        @keyframes heartGlow { 0%,100% { opacity:.55; transform:translateX(-50%) scale(.95); } 50% { opacity:1; transform:translateX(-50%) scale(1.05); } }
        @keyframes particleFloat { 0%,100% { transform:translate3d(0,0,0); } 50% { transform:translate3d(8px,-16px,0); } }
        @keyframes particleBlink { 0%,100% { opacity:.25; } 50% { opacity:.9; } }

        @media (max-width: 760px) {
          .explore-heading { top: 18px; width: 94vw; }
          .explore-eyebrow { letter-spacing: .22em; }
          .explore-heading h1 { font-size: 2.4rem; }
          .explore-heading p { font-size: .92rem; }
          .explore-heading small { font-size: .72rem; }
          .explore-help { left: 8px; bottom: 90px; width: 145px; padding: 8px; }
          .help-row { margin: 7px 0; }
          .help-row strong { font-size: 11px; }
          .help-row em { font-size: 9px; }
          .explore-footer { display: none; }
          .random-rose { bottom: 18px; }
        }
      `})]})}const yl="/assets/audio/birthday-music.mp3";function Kf({visible:e}){const[t,n]=E.useState(!1),[r,i]=E.useState(!1),o=E.useRef(null);E.useEffect(()=>{if(!e){i(!1);return}const u=window.setTimeout(()=>{t||i(!0)},1600);return()=>window.clearTimeout(u)},[e,t]);const s=async()=>{const u=o.current;try{let d=u;d||(d=new Audio(`${yl}?v=${Date.now()}`),d.loop=!1,d.preload="auto",d.volume=.62,d.addEventListener("ended",()=>{d&&(d.pause(),d.currentTime=0)}),o.current=d),u||(d.src=`${yl}?v=${Date.now()}`),await d.play(),n(!0),i(!1)}catch(d){console.warn("Birthday music could not start.",d)}},a=()=>{const u=o.current;u&&(u.pause(),n(!1))};return E.useEffect(()=>()=>{const u=o.current;u&&(u.pause(),u.removeAttribute("src"),u.load()),o.current=null},[]),e?l.jsxs(l.Fragment,{children:[r&&!t&&l.jsxs("div",{style:Qt.prompt,children:[l.jsx("p",{style:Qt.promptText,children:"🎵 A little song for you?"}),l.jsx("span",{style:Qt.promptSubtext,children:"the music I chose for this little journey ♡"}),l.jsx("button",{style:Qt.promptBtn,onClick:s,children:"Play the music 🌹"}),l.jsx("button",{style:Qt.promptBtnNo,onClick:()=>i(!1),children:"Maybe later"})]}),l.jsx("button",{style:Qt.toggleBtn,onClick:t?a:s,"aria-label":t?"Mute birthday music":"Play birthday music",children:t?"🎵":"🔇"})]}):null}const Qt={prompt:{position:"fixed",top:"max(1rem, env(safe-area-inset-top))",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.45rem",zIndex:1e3,width:"min(330px, calc(100vw - 32px))",background:"linear-gradient(145deg, rgba(31,13,24,.94), rgba(11,7,14,.94))",backdropFilter:"blur(18px)",padding:"1rem 1.25rem 0.9rem",borderRadius:"18px",border:"1px solid rgba(224,173,105,.28)",boxShadow:"0 18px 50px rgba(0,0,0,.45)"},promptText:{fontFamily:"var(--font-hand)",fontSize:"1.25rem",color:"#fff8e7",margin:0},promptSubtext:{fontFamily:"var(--font-serif)",fontSize:"0.72rem",letterSpacing:"0.05em",color:"rgba(232,205,164,.65)",textAlign:"center"},promptBtn:{marginTop:"0.25rem",fontFamily:"var(--font-hand)",fontSize:"1rem",padding:"0.5rem 1.2rem",borderRadius:"999px",background:"linear-gradient(135deg, #9d2847, #d04b68)",color:"#fff",border:"1px solid rgba(255,220,177,.18)",cursor:"pointer"},promptBtnNo:{fontFamily:"var(--font-serif)",fontSize:"0.82rem",padding:"0.2rem 0.8rem",borderRadius:"999px",background:"transparent",color:"rgba(255,255,255,.42)",border:"none",cursor:"pointer"},toggleBtn:{position:"fixed",right:"18px",bottom:"18px",zIndex:1e3,width:"46px",height:"46px",borderRadius:"50%",border:"1px solid rgba(255,220,177,.22)",background:"rgba(17,8,14,.72)",color:"#fff",backdropFilter:"blur(12px)",boxShadow:"0 10px 30px rgba(0,0,0,.3)",cursor:"pointer",fontSize:"19px"}};function Zf({active:e,onMid:t,onComplete:n}){const r=E.useRef(null),[i,o]=E.useState(!1);return E.useEffect(()=>{if(!e||!r.current)return;o(!1);const s=r.current,a=xl.timeline();return a.fromTo(s,{opacity:0},{opacity:1,duration:.75,ease:"power2.inOut"}),a.to(s,{opacity:1,duration:.18,onComplete:()=>{i||(o(!0),t?.())}}),a.to(s,{opacity:0,duration:.95,ease:"power2.inOut",onComplete:()=>{n?.()}}),()=>{a.kill()}},[e,t,n,i]),e?l.jsxs("div",{ref:r,className:"scene-transition","aria-hidden":"true",children:[l.jsx("div",{className:"scene-transition__glow"}),l.jsxs("div",{className:"scene-transition__petals",children:[l.jsx("span",{children:"🌹"}),l.jsx("span",{children:"✨"}),l.jsx("span",{children:"🌸"}),l.jsx("span",{children:"💗"}),l.jsx("span",{children:"🌹"}),l.jsx("span",{children:"✨"}),l.jsx("span",{children:"🌹"}),l.jsx("span",{children:"💫"})]}),l.jsxs("div",{className:"scene-transition__message",children:[l.jsx("span",{children:"🌹"}),l.jsxs("p",{children:["Something beautiful",l.jsx("br",{}),"is waiting..."]}),l.jsx("span",{children:"✨"})]})]}):null}function qf(){const[e,t]=E.useState("letter");return l.jsx("div",{style:Ie.scene,children:e==="letter"?l.jsx("div",{style:Ie.paper,children:l.jsxs("div",{style:Ie.letter,children:[oe.letterText.split(`
`).map((n,r)=>l.jsx("p",{style:Ie.line,children:n||" "},r)),l.jsx("button",{style:Ie.btn,onClick:()=>t("reveal"),children:"💝 Reveal the Surprise"})]})}):l.jsxs("div",{style:Ie.reveal,children:[l.jsx("div",{style:Ie.heart,children:"❤️"}),l.jsx("p",{style:Ie.revealTitle,children:"🌹 100,001 ROSES 🌹"}),l.jsx("div",{style:Ie.finalMsg,children:oe.finalMessage.split(`
`).map((n,r)=>l.jsx("p",{style:{...Ie.line,color:"#3a2a1a"},children:n||" "},r))}),l.jsx("button",{style:Ie.btn,onClick:()=>t("letter"),children:"Explore Again 🌹"})]})})}const Ie={scene:{position:"fixed",inset:0,background:"radial-gradient(ellipse at center, #4a1942 0%, #2a1040 60%, #1a0a1f 100%)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"auto",padding:"1rem"},paper:{background:"linear-gradient(135deg, #fdf6e3, #f5ead0)",borderRadius:"8px",padding:"2rem",maxWidth:"500px",boxShadow:"0 20px 60px rgba(0,0,0,0.4)",transform:"rotate(-1deg)"},letter:{fontFamily:"var(--font-hand)",color:"#3a2a1a",lineHeight:1.6,fontSize:"1.2rem"},line:{minHeight:"1.5em",margin:0},btn:{fontFamily:"var(--font-hand)",fontSize:"1.3rem",padding:"0.7rem 1.8rem",borderRadius:"999px",background:"linear-gradient(135deg, #e63973, #ff3b8d)",color:"#fff",border:"none",cursor:"pointer",marginTop:"1.5rem",boxShadow:"0 4px 20px rgba(230,57,115,0.4)"},reveal:{textAlign:"center",maxWidth:"500px"},heart:{fontSize:"5rem",animation:"float 3s ease-in-out infinite"},revealTitle:{fontFamily:"var(--font-hand)",fontSize:"clamp(1.8rem, 6vw, 3rem)",color:"#ffd700",textShadow:"0 0 30px rgba(255,215,0,0.5)",margin:"1rem 0"},finalMsg:{background:"rgba(253,246,227,0.95)",borderRadius:"8px",padding:"1.5rem",marginTop:"1.5rem",fontFamily:"var(--font-hand)",fontSize:"1.2rem",lineHeight:1.6,transform:"rotate(-1deg)",boxShadow:"0 20px 60px rgba(0,0,0,0.4)"}};class Jf{constructor(t){_(this,"camera");_(this,"target");_(this,"desiredPos");_(this,"desiredTarget");_(this,"lerpSpeed",2);_(this,"orbitEnabled",!1);_(this,"azimuth",0);_(this,"polar",Math.PI/2);_(this,"radius",35);_(this,"orbitTarget",new Q(0,5,0));_(this,"minRadius",5);_(this,"maxRadius",80);_(this,"velAzimuth",0);_(this,"velPolar",0);_(this,"velRadius",0);_(this,"damping",.92);_(this,"swayTime",0);_(this,"swayAmount",.3);_(this,"autoRotate",!1);_(this,"autoRotateSpeed",.1);this.camera=new Ac(55,t,.1,500),this.target=new Q(0,5,0),this.desiredPos=new Q(0,10,40),this.desiredTarget=new Q(0,5,0),this.camera.position.copy(this.desiredPos),this.camera.lookAt(this.target)}setAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setPosition(t,n,r=2){this.desiredPos.copy(t),this.desiredTarget.copy(n),this.lerpSpeed=r,this.orbitEnabled=!1}enableOrbit(t,n,r=Math.PI/2,i=Math.PI/2){this.orbitEnabled=!0,this.orbitTarget.copy(t),this.radius=n,this.azimuth=r,this.polar=i,this.updateOrbitPosition()}resetOrbit(t=34,n){n&&this.orbitTarget.copy(n),this.radius=Fe.clamp(t,this.minRadius,this.maxRadius),this.azimuth=Math.PI/2,this.polar=Math.PI/2,this.velAzimuth=0,this.velPolar=0,this.velRadius=0,this.orbitEnabled=!0,this.updateOrbitPosition()}focusOrbitTarget(t,n){this.orbitTarget.copy(t),n!==void 0&&(this.radius=Fe.clamp(n,this.minRadius,this.maxRadius)),this.velAzimuth=0,this.velPolar=0,this.velRadius=0,this.orbitEnabled=!0,this.updateOrbitPosition()}isOrbitEnabled(){return this.orbitEnabled}setAutoRotate(t){this.autoRotate=t}onDrag(t,n){this.orbitEnabled&&(this.velAzimuth-=t*.005,this.velPolar-=n*.005)}onZoom(t){this.orbitEnabled&&(this.velRadius+=t*.02)}setZoomLimits(t,n){this.minRadius=t,this.maxRadius=n}getZoomLevel(){return 1-(this.radius-this.minRadius)/(this.maxRadius-this.minRadius)}getRadius(){return this.radius}updateOrbitPosition(){this.polar=Fe.clamp(this.polar,.3,Math.PI-.3),this.radius=Fe.clamp(this.radius,this.minRadius,this.maxRadius);const t=this.orbitTarget.x+this.radius*Math.sin(this.polar)*Math.cos(this.azimuth),n=this.orbitTarget.y+this.radius*Math.cos(this.polar),r=this.orbitTarget.z+this.radius*Math.sin(this.polar)*Math.sin(this.azimuth);this.camera.position.set(t,n,r),this.camera.lookAt(this.orbitTarget)}update(t){if(this.orbitEnabled?(this.azimuth+=this.velAzimuth,this.polar+=this.velPolar,this.radius+=this.velRadius,this.velAzimuth*=this.damping,this.velPolar*=this.damping,this.velRadius*=this.damping,this.autoRotate&&Math.abs(this.velAzimuth)<.001&&(this.azimuth+=this.autoRotateSpeed*t),this.updateOrbitPosition()):(this.camera.position.lerp(this.desiredPos,Math.min(1,t*this.lerpSpeed)),this.target.lerp(this.desiredTarget,Math.min(1,t*this.lerpSpeed)),this.camera.lookAt(this.target)),this.swayTime+=t,!this.orbitEnabled){const n=Math.sin(this.swayTime*.5)*this.swayAmount,r=Math.cos(this.swayTime*.3)*this.swayAmount*.5;this.camera.position.x+=n,this.camera.position.y+=r}}setSway(t){this.swayAmount=t}dispose(){}}function eh(){const e=new ln,t=new Di(.45,.5,5);t.translate(0,.1,0);for(let s=0;s<5;s++){const a=s/5*Math.PI*2,u=new ie(t);u.position.set(Math.cos(a)*.28,.05,Math.sin(a)*.28),u.rotation.z=-.5,u.rotation.y=a,e.add(u)}const n=new Di(.3,.35,5);n.translate(0,.1,0);for(let s=0;s<7;s++){const a=s/7*Math.PI*2+.3,u=new ie(n);u.position.set(Math.cos(a)*.15,.15,Math.sin(a)*.15),u.rotation.z=-.3,u.rotation.y=a,e.add(u)}const r=new Di(.18,.22,5);r.translate(0,.08,0);for(let s=0;s<5;s++){const a=s/5*Math.PI*2,u=new ie(r);u.position.set(Math.cos(a)*.06,.25,Math.sin(a)*.06),u.rotation.z=-.15,u.rotation.y=a,e.add(u)}const i=new Un(.1,6,5);i.translate(0,.32,0),e.add(new ie(i));const o=th(e);return o.computeVertexNormals(),o}function th(e){const t=[];e.traverse(o=>{if(o instanceof ie&&o.geometry){o.geometry.clone().applyMatrix4(o.matrixWorld),o.updateMatrixWorld();const a=o.geometry.clone();a.applyMatrix4(o.matrixWorld),t.push(a)}});const n=new Dr,r=[],i=[];for(const o of t){const s=o.attributes.position,a=o.attributes.normal;for(let u=0;u<s.count;u++)r.push(s.getX(u),s.getY(u),s.getZ(u)),a?i.push(a.getX(u),a.getY(u),a.getZ(u)):i.push(0,1,0)}return n.setAttribute("position",new oa(r,3)),n.setAttribute("normal",new oa(i,3)),n.computeVertexNormals(),n}function nh(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function rh(e){const t=nh(42),n=new Float32Array(e*3),r=new Float32Array(e*3),i=new Float32Array(e*3),o=new Float32Array(e),s=new Float32Array(e*3),a=Hf();for(let u=0;u<e;u++){const d=t()*Math.PI*2,g=Math.acos(2*t()-1),m=Math.pow(t(),.5)*18;let h=m*Math.sin(g)*Math.cos(d),y=m*Math.cos(g)*.7+4,x=m*Math.sin(g)*Math.sin(d);const k=1-Math.max(0,(4-y)/8)*.6;h*=k,x*=k,h+=(t()-.5)*1.5,y+=(t()-.5)*1,x+=(t()-.5)*1.5;const M=u*3;n[M]=h,n[M+1]=y,n[M+2]=x,i[M]=(t()-.5)*.8,i[M+1]=t()*Math.PI*2,i[M+2]=(t()-.5)*.8;let p=.6+t()*.5;a.has(u+1)&&(p*=1.35),o[u]=p;const c=t();let f,v,S;a.has(u+1)?(f=1,v=.85,S=.3):c<.5?(f=.78+t()*.15,v=.08+t()*.1,S=.15+t()*.1):c<.8?(f=.9+t()*.1,v=.25+t()*.15,S=.45+t()*.15):(f=.85+t()*.1,v=.12+t()*.1,S=.35+t()*.2),s[M]=f,s[M+1]=v,s[M+2]=S}return oh(e,r,t),{positions:n,rotations:i,scales:o,colors:s,heartPositions:r}}function ih(e,t){return Math.pow(e*e+t*t-1,3)-e*e*Math.pow(t,3)<=0}function oh(e,t,n){let s=0,a=0;const u=-1.15,d=1.15,g=-1.15,m=1.15,h=Math.max(e*24,1e4);for(;s<e&&a<h;){a++;const y=u+n()*(d-u),x=g+n()*(m-g);if(!ih(y,x))continue;const k=Math.min(1,Math.sqrt((y/1.05)**2+(x/1.05)**2)),M=(n()-.5)*(3-k*1),p=s*3;t[p]=y*14.5,t[p+1]=x*8+5,t[p+2]=M,s++}for(;s<e;){const y=s/Math.max(1,e-1)*Math.PI*2,x=Math.sin(y)**3,k=.82*Math.cos(y)-.3*Math.cos(2*y)-.12*Math.cos(3*y)-.06*Math.cos(4*y),M=s*3;t[M]=x*14.5*1.02,t[M+1]=k*8+5,t[M+2]=(n()-.5)*1.8,s++}}class Fr{constructor(t,n){_(this,"mesh");_(this,"geometry");_(this,"material");_(this,"roseData");_(this,"count");_(this,"morphProgress",0);_(this,"morphTarget",0);_(this,"morphVelocity",0);_(this,"heartPulse",0);_(this,"floatTime",0);_(this,"sparkleTime",0);_(this,"highlightedId",-1);_(this,"originalScale",new Map);_(this,"dummy",new Lc);_(this,"tmpColor",new Ur);_(this,"quality");this.count=t,this.quality=n,this.geometry=eh(),this.roseData=rh(t),this.material=new Pt({vertexColors:!1,roughness:.65,metalness:.1,flatShading:!0}),this.mesh=new Ic(this.geometry,this.material,t),this.mesh.instanceMatrix.setUsage(sa),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1;const r=new Float32Array(t*3);for(let i=0;i<t;i++)r[i*3]=this.roseData.colors[i*3],r[i*3+1]=this.roseData.colors[i*3+1],r[i*3+2]=this.roseData.colors[i*3+2];this.mesh.instanceColor=new Oc(r,3),this.mesh.instanceColor.setUsage(sa),this.updateAllInstances()}updateAllInstances(){const{positions:t,heartPositions:n,rotations:r,scales:i}=this.roseData,o=Fe.clamp(this.morphProgress,0,1),s=Fe.smoothstep(o,0,1);for(let a=0;a<this.count;a++){const u=t[a*3],d=t[a*3+1],g=t[a*3+2],m=n[a*3],h=n[a*3+1],y=n[a*3+2];this.dummy.position.set(u+(m-u)*s,d+(h-d)*s,g+(y-g)*s);const x=1-s,k=Math.sin(this.floatTime*1.15+a*.071)*.045,M=Math.sin(this.floatTime*1.45+a*.113)*.075,p=Math.cos(this.floatTime*.92+a*.097)*.055;this.dummy.position.x+=k*x,this.dummy.position.y+=M*x,this.dummy.position.z+=p*x;const c=r[a*3],f=r[a*3+1],v=r[a*3+2];this.dummy.rotation.set(c+Math.sin(this.floatTime*.8+a*.13)*.06*x,f+this.floatTime*.055+a*.001,v+Math.cos(this.floatTime*.7+a*.17)*.05*x);let S=i[a];a===this.highlightedId&&(S*=1.5);const b=.985+Math.sin(this.sparkleTime*1.7+a*.037)*.015;if(S*=b,s>.96){const N=Fe.smoothstep(s,.96,1),T=1+Math.sin(this.heartPulse*2.6)*.012*N;S*=T}this.dummy.scale.setScalar(S),this.dummy.updateMatrix(),this.mesh.setMatrixAt(a,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}setMorphTarget(t){this.morphTarget=Fe.clamp(t,0,1)}getMorphProgress(){return this.morphProgress}update(t){const n=Math.min(Math.max(t,0),.05);this.floatTime+=n,this.sparkleTime+=n;const r=this.morphTarget-this.morphProgress;this.morphVelocity+=r*n*1.15,this.morphVelocity*=Math.pow(.91,n*60),this.morphProgress+=this.morphVelocity*n*3.5,Math.abs(this.morphTarget-this.morphProgress)<8e-4&&Math.abs(this.morphVelocity)<8e-4&&(this.morphProgress=this.morphTarget,this.morphVelocity=0),this.morphProgress=Fe.clamp(this.morphProgress,0,1),this.morphProgress>.94&&(this.heartPulse+=n),this.updateAllInstances()}highlightRose(t){t<0||t>=this.count||(this.highlightedId=t,this.updateAllInstances())}clearHighlight(){this.highlightedId=-1,this.updateAllInstances()}getRosePosition(t,n){if(t<0||t>=this.count){n.set(0,0,0);return}const{positions:r,heartPositions:i}=this.roseData,o=Fe.clamp(this.morphProgress,0,1),s=Fe.smoothstep(o,0,1);n.set(r[t*3]+(i[t*3]-r[t*3])*s,r[t*3+1]+(i[t*3+1]-r[t*3+1])*s,r[t*3+2]+(i[t*3+2]-r[t*3+2])*s)}static instanceIdToRoseNumber(t){return t+1}static roseNumberToInstanceId(t){return t-1}dispose(){this.geometry.dispose(),this.material.dispose(),this.mesh.dispose(),this.originalScale.clear()}}class sh{constructor(t){_(this,"group");_(this,"ambient");_(this,"directional");_(this,"point1");_(this,"point2");_(this,"hemi");_(this,"quality");this.quality=t,this.group=new ln,this.ambient=new Fc(16746598,.4),this.group.add(this.ambient),this.hemi=new Dc(16750950,3346756,.5),this.group.add(this.hemi),this.directional=new Uc(16755319,.8),this.directional.position.set(20,30,10),t!=="LOW"&&(this.directional.castShadow=!0,this.directional.shadow.mapSize.set(512,512),this.directional.shadow.camera.near=1,this.directional.shadow.camera.far=100),this.group.add(this.directional),this.point1=new yo(16766720,2,50,1.5),this.point1.position.set(0,8,-15),this.group.add(this.point1),this.point2=new yo(16726925,1.5,40,2),this.point2.position.set(-10,5,10),this.group.add(this.point2)}setMood(t){switch(xl.timeline(),t){case"garden":this.ambient.intensity=.4,this.directional.intensity=.8,this.point1.intensity=2,this.point2.intensity=1.5;break;case"gate":this.ambient.intensity=.25,this.directional.intensity=.5,this.point1.intensity=4,this.point2.intensity=1;break;case"bouquet":this.ambient.intensity=.5,this.directional.intensity=1,this.point1.intensity=3,this.point2.intensity=2;break;case"heart":this.ambient.intensity=.35,this.directional.intensity=.6,this.point1.intensity=2.5,this.point2.intensity=2;break}}dispose(){this.group.clear()}}class ah{constructor(t){_(this,"group");_(this,"petals");_(this,"fireflies");_(this,"dust");_(this,"quality");_(this,"petalVelocities");_(this,"fireflyData");_(this,"time",0);this.quality=t,this.group=new ln;const n=t==="LOW"?80:t==="MEDIUM"?200:400,r=t==="LOW"?40:t==="MEDIUM"?100:200,i=t==="LOW"?200:t==="MEDIUM"?500:1e3;this.petals=this.createPetals(n),this.petalVelocities=new Float32Array(n*3);for(let s=0;s<n;s++)this.petalVelocities[s*3]=(Math.random()-.5)*.5,this.petalVelocities[s*3+1]=-Math.random()*.3-.1,this.petalVelocities[s*3+2]=(Math.random()-.5)*.5;this.group.add(this.petals),this.fireflies=this.createFireflies(r),this.fireflyData=new Float32Array(r*3);const o=this.fireflies.geometry.attributes.position;for(let s=0;s<r;s++)this.fireflyData[s*3]=o.getX(s),this.fireflyData[s*3+1]=o.getY(s),this.fireflyData[s*3+2]=o.getZ(s);this.group.add(this.fireflies),this.dust=this.createDust(i),this.group.add(this.dust)}createPetals(t){const n=new Dr,r=new Float32Array(t*3),i=new Float32Array(t*3),o=new Float32Array(t);for(let a=0;a<t;a++){r[a*3]=(Math.random()-.5)*80,r[a*3+1]=Math.random()*40,r[a*3+2]=(Math.random()-.5)*80;const u=Math.random();i[a*3]=.9+u*.1,i[a*3+1]=.2+u*.3,i[a*3+2]=.4+u*.3,o[a]=.15+Math.random()*.2}n.setAttribute("position",new Wt(r,3)),n.setAttribute("color",new Wt(i,3)),n.setAttribute("size",new Wt(o,1));const s=new Ui({size:.3,vertexColors:!0,transparent:!0,opacity:.7,sizeAttenuation:!0,depthWrite:!1,blending:Gi});return new Hi(n,s)}createFireflies(t){const n=new Dr,r=new Float32Array(t*3),i=new Float32Array(t*3);for(let s=0;s<t;s++)r[s*3]=(Math.random()-.5)*60,r[s*3+1]=Math.random()*25+1,r[s*3+2]=(Math.random()-.5)*60,i[s*3]=1,i[s*3+1]=.85+Math.random()*.15,i[s*3+2]=.3+Math.random()*.3;n.setAttribute("position",new Wt(r,3)),n.setAttribute("color",new Wt(i,3));const o=new Ui({size:.25,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1,blending:Gi});return new Hi(n,o)}createDust(t){const n=new Dr,r=new Float32Array(t*3);for(let o=0;o<t;o++)r[o*3]=(Math.random()-.5)*100,r[o*3+1]=Math.random()*40,r[o*3+2]=(Math.random()-.5)*100;n.setAttribute("position",new Wt(r,3));const i=new Ui({size:.08,color:16768426,transparent:!0,opacity:.3,sizeAttenuation:!0,depthWrite:!1,blending:Gi});return new Hi(n,i)}update(t){this.time+=t;const n=this.petals.geometry.attributes.position;for(let i=0;i<n.count;i++){let o=n.getX(i),s=n.getY(i),a=n.getZ(i);o+=this.petalVelocities[i*3]*t+Math.sin(this.time+i)*.02,s+=this.petalVelocities[i*3+1]*t,a+=this.petalVelocities[i*3+2]*t+Math.cos(this.time+i)*.02,s<-2&&(s=35+Math.random()*5,o=(Math.random()-.5)*80,a=(Math.random()-.5)*80),n.setXYZ(i,o,s,a)}n.needsUpdate=!0;const r=this.fireflies.geometry.attributes.position;for(let i=0;i<r.count;i++){const o=this.fireflyData[i*3],s=this.fireflyData[i*3+1],a=this.fireflyData[i*3+2];r.setXYZ(i,o+Math.sin(this.time*.5+i*.7)*2,s+Math.cos(this.time*.3+i*.5)*1.5,a+Math.sin(this.time*.4+i*.3)*2)}r.needsUpdate=!0,this.fireflies.material.opacity=.6+Math.sin(this.time*2)*.3}setIntensity(t){this.petals.material.opacity=.7*t,this.fireflies.material.opacity=.9*t,this.dust.material.opacity=.3*t}dispose(){this.petals.geometry.dispose(),this.petals.material.dispose(),this.fireflies.geometry.dispose(),this.fireflies.material.dispose(),this.dust.geometry.dispose(),this.dust.material.dispose()}}class lh{constructor(){_(this,"group");_(this,"leftDoor");_(this,"rightDoor");_(this,"openAmount",0);_(this,"gateLight");this.group=new ln,this.leftDoor=this.createDoor(!0),this.rightDoor=this.createDoor(!1),this.leftDoor.position.x=-4,this.rightDoor.position.x=4,this.group.add(this.leftDoor),this.group.add(this.rightDoor),this.group.add(this.createArch()),this.gateLight=new yo(16766720,0,30,1.5),this.gateLight.position.set(0,6,-3),this.group.add(this.gateLight)}createDoor(t){const n=new ln,r=new Pt({color:12092939,roughness:.3,metalness:.8}),i=new Pt({color:2969622,roughness:.7,metalness:.1}),o=new Pt({color:12852794,roughness:.5,metalness:.2}),s=new ie(new xr(4,12,.4),r);s.position.y=6,n.add(s);for(let m=0;m<4;m++){const h=new ie(new xr(3.5,.15,.5),r);h.position.y=2+m*3,n.add(h)}for(let m=0;m<3;m++){const h=new ie(new xr(.15,11,.5),r);h.position.set((m-1)*1.2,6,.05),n.add(h)}const a=new ie(new Un(.3,8,6),r);a.position.set(t?1.5:-1.5,5,.3),n.add(a);for(let m=0;m<6;m++){const h=new ie(new Gc(.08,.08,8+Math.random()*3,4),i);h.position.set((Math.random()-.5)*3.5,2+Math.random()*8,.25),h.rotation.z=(Math.random()-.5)*.5,n.add(h)}for(let m=0;m<8;m++){const h=new ie(new Un(.25+Math.random()*.15,5,4),o);h.position.set((Math.random()-.5)*3.5,2+Math.random()*9,.3),n.add(h)}const u=new xr(4,.1,.45),d=new Hc({color:16766720}),g=new ie(u,d);return g.position.y=12,n.add(g),n}createArch(){const t=new ln,n=new Pt({color:12092939,roughness:.3,metalness:.8}),r=new Pt({color:12852794,roughness:.5}),i=new Bc(5,.3,8,16,Math.PI),o=new ie(i,n);o.position.set(0,12,0),o.rotation.z=Math.PI,t.add(o);for(let s=0;s<12;s++){const a=s/12*Math.PI,u=new ie(new Un(.3,5,4),r);u.position.set(Math.cos(a+Math.PI)*5,12+Math.sin(a)*5,0),t.add(u)}return t}setOpenAmount(t){this.openAmount=t,this.leftDoor.rotation.y=t*1.4,this.rightDoor.rotation.y=-t*1.4,this.gateLight.intensity=t*5}getOpenAmount(){return this.openAmount}dispose(){this.group.traverse(t=>{t instanceof ie&&(t.geometry.dispose(),t.material instanceof $c&&t.material.dispose())})}}class vl{constructor(t,n){_(this,"renderer");_(this,"scene");_(this,"cameraController");_(this,"lighting");_(this,"particles");_(this,"gate");_(this,"roseField",null);_(this,"clock",new Vc);_(this,"quality");_(this,"state","LOADING");_(this,"eventHandler",null);_(this,"raycaster",new Wc);_(this,"pointer",new Yc);_(this,"isDragging",!1);_(this,"lastPointerX",0);_(this,"lastPointerY",0);_(this,"lastPinchDist",0);_(this,"pointerDownX",0);_(this,"pointerDownY",0);_(this,"pointerMoved",!1);_(this,"skyMesh",null);_(this,"gateApproachProgress",0);_(this,"gateOpeningProgress",0);_(this,"bouquetRevealProgress",0);_(this,"heartMorphTimer",null);_(this,"heartInteractionTimer",null);_(this,"heartInteractionReady",!1);_(this,"heartFormedEmitted",!1);_(this,"lastZoomLevel",-1);_(this,"resizeObserver",null);_(this,"animate",()=>{requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);if(this.cameraController.update(t),this.particles.update(t),this.roseField&&this.roseField.update(t),this.state==="GATE_OPENING"&&(this.gateOpeningProgress=Math.min(1,this.gateOpeningProgress+t*.5),this.gate.setOpenAmount(this.gateOpeningProgress),this.gateOpeningProgress>=1&&this.emit({type:"gates-opened"})),this.state==="GATE_APPROACH"&&(this.gateApproachProgress=Math.min(1,this.gateApproachProgress+t*.3),this.gateApproachProgress>=1&&this.emit({type:"gates-reached"})),this.state==="BOUQUET_EXPLORE"){const n=this.cameraController.getZoomLevel(),r=Math.round(n*10)/10;r!==this.lastZoomLevel&&(this.lastZoomLevel=r,this.cameraController.getRadius()>=78?this.emit({type:"zoomed-out-fully"}):this.emit({type:"explore-ready"}))}this.state==="HEART_REVEAL"&&this.roseField&&this.heartInteractionReady&&!this.heartFormedEmitted&&this.roseField.getMorphProgress()>=.995&&(this.heartFormedEmitted=!0,this.emit({type:"heart-formed"})),this.renderer.render(this.scene,this.cameraController.camera)});this.quality=n,this.renderer=new Qc({antialias:n!=="LOW",powerPreference:"high-performance",alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,n==="LOW"?1:n==="MEDIUM"?1.5:2)),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.toneMapping=Xc,this.renderer.toneMappingExposure=1.1,this.renderer.outputColorSpace=Kc,t.appendChild(this.renderer.domElement),this.scene=new Zc,this.scene.fog=new wr(2756672,.008),this.cameraController=new Jf(t.clientWidth/t.clientHeight),this.lighting=new sh(n),this.scene.add(this.lighting.group),this.particles=new ah(n),this.scene.add(this.particles.group),this.gate=new lh,this.gate.group.position.set(0,0,-20),this.gate.group.visible=!1,this.scene.add(this.gate.group),this.createSky(),this.createGround(),this.setupInput(t),this.resizeObserver=new ResizeObserver(()=>this.onResize(t)),this.resizeObserver.observe(t),this.animate()}createSky(){const t=new Un(250,16,8),n=new qc({uniforms:{topColor:{value:new Ur(1706542)},midColor:{value:new Ur(4856130)},botColor:{value:new Ur(16739179)}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 botColor;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          vec3 col = mix(botColor, midColor, smoothstep(-0.1, 0.3, h));
          col = mix(col, topColor, smoothstep(0.2, 0.8, h));
          gl_FragColor = vec4(col, 1.0);
        }
      `,side:Jc,depthWrite:!1});this.skyMesh=new ie(t,n),this.scene.add(this.skyMesh)}createGround(){const t=new ed(300,300,1,1),n=new Pt({color:1717026,roughness:.9}),r=new ie(t,n);r.rotation.x=-Math.PI/2,r.position.y=-2,this.scene.add(r)}setState(t){switch(this.state=t,t){case"GARDEN":this.enterGarden();break;case"GATE_APPROACH":this.startGateApproach();break;case"GATE_OPENING":this.startGateOpening();break;case"BOUQUET_REVEAL":this.revealBouquet();break;case"BOUQUET_EXPLORE":this.enableExploration();break;case"HEART_REVEAL":this.startHeartReveal();break;case"FINAL_MESSAGE":this.showFinalMessage();break}}enterGarden(){this.gate.group.visible=!0,this.gate.setOpenAmount(0),this.lighting.setMood("garden"),this.particles.setIntensity(1),this.scene.fog=new wr(3807808,.006),this.cameraController.setPosition(new Q(0,5,30),new Q(0,6,-20),1.5)}startGateApproach(){this.lighting.setMood("gate"),this.cameraController.setPosition(new Q(0,6,12),new Q(0,6,-20),.5),this.cameraController.setSway(.15)}startGateOpening(){this.lighting.setMood("gate"),this.cameraController.setPosition(new Q(0,6,8),new Q(0,6,-20),1)}revealBouquet(){this.roseField&&(this.roseField.mesh.visible=!1),this.cameraController.setPosition(new Q(0,6.5,5),new Q(0,6,-20),1.1),this.lighting.setMood("bouquet"),this.scene.fog=new wr(2756672,.004),this.gate.setOpenAmount(1)}enableExploration(){this.cameraController.enableOrbit(new Q(0,5,-10),45),this.cameraController.setZoomLimits(3,80),this.cameraController.setAutoRotate(!1),this.cameraController.setSway(0),this.lighting.setMood("bouquet")}enableHeartExploration(){this.roseField&&(this.roseField.mesh.visible=!0,this.roseField.setMorphTarget(1),this.cameraController.enableOrbit(new Q(0,5,0),34,Math.PI/2,Math.PI/2),this.cameraController.setZoomLimits(12,72),this.cameraController.setAutoRotate(!1),this.cameraController.setSway(0),this.roseField.clearHighlight())}focusRose(t){if(!this.roseField)return;const n=Fr.roseNumberToInstanceId(t);if(n<0||n>=this.roseField.count)return;this.roseField.highlightRose(n);const r=new Q;this.roseField.getRosePosition(n,r),this.cameraController.focusOrbitTarget(r,Math.max(13,Math.min(24,this.cameraController.getRadius()*.72))),this.emit({type:"rose-selected",roseId:t,worldPosition:[r.x,r.y,r.z]})}startHeartReveal(){this.roseField||(this.roseField=new Fr(oe.roseCount,this.quality),this.scene.add(this.roseField.mesh)),this.roseField.mesh.visible=!0,this.roseField.setMorphTarget(0),this.heartFormedEmitted=!1,this.heartInteractionReady=!1,this.heartMorphTimer!==null&&(window.clearTimeout(this.heartMorphTimer),this.heartMorphTimer=null),this.heartInteractionTimer!==null&&(window.clearTimeout(this.heartInteractionTimer),this.heartInteractionTimer=null),this.cameraController.setPosition(new Q(0,10,46),new Q(0,5,0),1.35),this.cameraController.setSway(.08),this.lighting.setMood("heart"),this.scene.fog=new wr(1706544,.0042),this.roseField.setMorphTarget(1),this.heartInteractionTimer=window.setTimeout(()=>{this.state==="HEART_REVEAL"&&(this.heartInteractionReady=!0,this.heartInteractionTimer=null)},17500)}showFinalMessage(){this.enableHeartExploration()}selectRoseAtScreenPoint(t,n,r,i){if(!this.roseField||this.state!=="BOUQUET_EXPLORE"&&this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE")return;this.pointer.x=t/r*2-1,this.pointer.y=-(n/i)*2+1,this.raycaster.setFromCamera(this.pointer,this.cameraController.camera);const o=this.raycaster.intersectObject(this.roseField.mesh);if(o.length>0){const s=o[0].instanceId;if(s!==void 0&&s>=0){const a=Fr.instanceIdToRoseNumber(s);this.roseField.highlightRose(s);const u=new Q;this.roseField.getRosePosition(s,u),this.emit({type:"rose-selected",roseId:a,worldPosition:[u.x,u.y,u.z]})}}}pickRandomRose(){if(!this.roseField||this.state!=="BOUQUET_EXPLORE"&&this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE")return;const t=Math.floor(Math.random()*oe.roseCount),n=Fr.instanceIdToRoseNumber(t);this.roseField.highlightRose(t);const r=new Q;this.roseField.getRosePosition(t,r),this.cameraController.focusOrbitTarget(r,Math.max(13,Math.min(24,this.cameraController.getRadius()*.72))),this.emit({type:"rose-selected",roseId:n,worldPosition:[r.x,r.y,r.z]})}zoomOutFully(){this.state==="BOUQUET_EXPLORE"&&this.emit({type:"zoomed-out-fully"})}setupInput(t){const n=this.renderer.domElement;n.style.touchAction="none",n.addEventListener("pointerdown",s=>{this.state!=="BOUQUET_EXPLORE"&&this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE"||s.pointerType!=="touch"&&(this.isDragging=!0,this.pointerMoved=!1,this.pointerDownX=s.clientX,this.pointerDownY=s.clientY,this.lastPointerX=s.clientX,this.lastPointerY=s.clientY,n.setPointerCapture?.(s.pointerId))}),n.addEventListener("pointermove",s=>{if(!this.isDragging||s.pointerType==="touch")return;const a=s.clientX-this.lastPointerX,u=s.clientY-this.lastPointerY;Math.hypot(s.clientX-this.pointerDownX,s.clientY-this.pointerDownY)>5&&(this.pointerMoved=!0),this.lastPointerX=s.clientX,this.lastPointerY=s.clientY,this.cameraController.onDrag(a,u)}),n.addEventListener("pointerup",s=>{!this.isDragging||s.pointerType==="touch"||(this.isDragging=!1,n.releasePointerCapture?.(s.pointerId),!this.pointerMoved&&(this.state==="BOUQUET_EXPLORE"||this.state==="HEART_REVEAL"||this.state==="FINAL_MESSAGE")&&this.selectRoseAtScreenPoint(s.clientX,s.clientY,t.clientWidth,t.clientHeight))}),n.addEventListener("pointercancel",()=>{this.isDragging=!1}),n.addEventListener("dblclick",()=>{(this.state==="HEART_REVEAL"||this.state==="FINAL_MESSAGE")&&(this.cameraController.resetOrbit(34,new Q(0,4.5,0)),this.roseField?.clearHighlight())}),n.addEventListener("wheel",s=>{this.state!=="BOUQUET_EXPLORE"&&this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE"||(s.preventDefault(),this.cameraController.onZoom(s.deltaY*.5))},{passive:!1});let r=0,i=0,o=!1;n.addEventListener("touchstart",s=>{if(!(this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE")){if(s.touches.length===1)r=s.touches[0].clientX,i=s.touches[0].clientY,o=!1;else if(s.touches.length===2){const a=s.touches[0].clientX-s.touches[1].clientX,u=s.touches[0].clientY-s.touches[1].clientY;this.lastPinchDist=Math.hypot(a,u)}}},{passive:!1}),n.addEventListener("touchmove",s=>{if(!(this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE")){if(s.touches.length===1){const a=s.touches[0],u=a.clientX-r,d=a.clientY-i;Math.hypot(u,d)>6&&(o=!0),this.cameraController.isOrbitEnabled()&&(this.cameraController.onDrag(u*.35,d*.35),r=a.clientX,i=a.clientY)}else if(s.touches.length===2){s.preventDefault();const a=s.touches[0].clientX-s.touches[1].clientX,u=s.touches[0].clientY-s.touches[1].clientY,d=Math.hypot(a,u),g=this.lastPinchDist-d;this.lastPinchDist=d,this.cameraController.onZoom(g*.8),o=!0}}},{passive:!1}),n.addEventListener("touchend",s=>{if(this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE"||s.changedTouches.length!==1||o)return;const a=s.changedTouches[0];this.selectRoseAtScreenPoint(a.clientX,a.clientY,t.clientWidth,t.clientHeight)},{passive:!1})}onEvent(t){this.eventHandler=t}emit(t){this.eventHandler&&this.eventHandler(t)}resetExperience(){this.heartMorphTimer!==null&&(window.clearTimeout(this.heartMorphTimer),this.heartMorphTimer=null),this.heartInteractionTimer!==null&&(window.clearTimeout(this.heartInteractionTimer),this.heartInteractionTimer=null),this.heartInteractionReady=!1,this.state="LETTER",this.gateApproachProgress=0,this.gateOpeningProgress=0,this.bouquetRevealProgress=0,this.heartFormedEmitted=!1,this.lastZoomLevel=-1,this.roseField?.clearHighlight(),this.roseField&&(this.roseField.setMorphTarget(0),this.roseField.mesh.visible=!1),this.cameraController.setPosition(new Q(0,5,30),new Q(0,6,-20),1.5),this.cameraController.setSway(.3),this.gate.group.visible=!0,this.gate.setOpenAmount(0),this.lighting.setMood("garden")}onResize(t){const n=t.clientWidth,r=t.clientHeight;this.renderer.setSize(n,r),this.cameraController.setAspect(n/r)}dispose(){this.resizeObserver?.disconnect(),this.heartMorphTimer!==null&&(window.clearTimeout(this.heartMorphTimer),this.heartMorphTimer=null),this.heartInteractionTimer!==null&&(window.clearTimeout(this.heartInteractionTimer),this.heartInteractionTimer=null),this.renderer.domElement.remove(),this.roseField?.dispose(),this.particles.dispose(),this.gate.dispose(),this.lighting.dispose(),this.renderer.dispose()}static isWebGLAvailable(){try{const t=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl")))}catch{return!1}}}function uh(){const e=/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent),t=/iPad|Tablet|PlayBook|Silk/i.test(navigator.userAgent)||navigator.userAgent.includes("Android")&&navigator.userAgent.includes("Mobile")===!1,n=navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4,r=navigator.deviceMemory&&navigator.deviceMemory<=2;return e&&!t?r||n&&navigator.hardwareConcurrency<=2?"LOW":"MEDIUM":t?r?"LOW":"MEDIUM":n&&r?"MEDIUM":"HIGH"}function ch(){const[e,t]=E.useState("LOADING"),[n,r]=E.useState(!0),[i,o]=E.useState("approach"),[s,a]=E.useState("reveal"),[u,d]=E.useState("100,001 roses 🌹"),[g,m]=E.useState(null),[h,y]=E.useState("heart"),[x,k]=E.useState(!1),M=E.useRef(null),p=E.useRef(null),c=E.useRef("LOADING");E.useEffect(()=>{c.current=e},[e]),E.useEffect(()=>{r(vl.isWebGLAvailable())},[]),E.useEffect(()=>{if(!n||!M.current)return;const pe=uh(),Z=new vl(M.current,pe);return p.current=Z,Z.onEvent(Vt=>{switch(Vt.type){case"gates-reached":{(c.current==="GATE_APPROACH"||c.current==="GARDEN")&&(t("GATE_QUESTION"),Z.setState("GATE_QUESTION"),o("question"));break}case"gates-opened":break;case"bouquet-revealed":break;case"rose-selected":{m({id:Vt.roseId,isRandom:!1});break}case"heart-formed":{if(c.current!=="HEART_REVEAL")break;y("final"),t("FINAL_MESSAGE"),Z.setState("FINAL_MESSAGE");break}case"zoomed-out-fully":{c.current==="BOUQUET_EXPLORE"&&$t();break}case"explore-ready":{j();break}}}),()=>{Z.dispose(),p.current=null}},[n]);const f=E.useCallback(()=>{t("LETTER"),p.current?.setState("LETTER")},[]),v=E.useCallback(()=>{k(!1),o("approach"),t("GARDEN"),p.current?.setState("GARDEN")},[]),S=E.useCallback(()=>{},[]),b=E.useCallback(()=>{k(!1)},[]),N=E.useCallback(()=>{t("GATE_OPENING")},[]),T=E.useCallback(()=>{o("scared")},[]),O=E.useCallback(()=>{N()},[N]),P=E.useCallback(()=>{o("approach"),a("reveal"),m(null),t("BOUQUET_REVEAL"),p.current?.setState("BOUQUET_REVEAL")},[]),I=E.useCallback(()=>{const pe=c.current;if(pe==="FINAL_MESSAGE"||pe==="HEART_REVEAL"){p.current?.pickRandomRose();return}if(pe!=="BOUQUET_EXPLORE")return;const Z=Math.floor(Math.random()*100001)+1;m({id:Z,isRandom:!0})},[]),Ce=E.useCallback(pe=>{if(c.current!=="FINAL_MESSAGE"&&c.current!=="HEART_REVEAL")return;const Z=Math.max(1,Math.min(100001,pe));p.current?.focusRose(Z)},[]),Xe=E.useCallback(()=>{g&&Ce(g.id<=1?100001:g.id-1)},[g,Ce]),Bt=E.useCallback(()=>{g&&Ce(g.id>=100001?1:g.id+1)},[g,Ce]),Nn=E.useCallback(()=>{$t()},[]),$t=E.useCallback(()=>{c.current==="BOUQUET_EXPLORE"&&(m(null),y("heart"),t("HEART_REVEAL"),a("explore"),p.current?.setState("HEART_REVEAL"))},[]),bn=E.useCallback(()=>{m(null),p.current?.roseField&&p.current.roseField.clearHighlight()},[]),j=E.useCallback(()=>{const pe=p.current;if(!pe)return;const Z=pe.cameraController.getRadius();Z>60?d("100,001 roses 🌹"):Z>25?d("Go on... explore. 👀"):d("Find one. 🌹")},[]),z=E.useCallback(()=>{window.location.reload()},[]);if(!n)return l.jsx(qf,{});const Y=e==="LETTER"||(e==="GARDEN"||e==="GATE_APPROACH"||e==="GATE_QUESTION"||e==="GATE_OPENING")||(e==="BOUQUET_REVEAL"||e==="BOUQUET_EXPLORE");return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:M,"aria-hidden":Y,style:{position:"fixed",inset:0,zIndex:Y?-1:1,visibility:Y?"hidden":"visible",overflow:"hidden",pointerEvents:e==="HEART_REVEAL"||e==="FINAL_MESSAGE"?"auto":"none"}}),e==="LOADING"&&l.jsx(Pf,{onComplete:f}),e==="LETTER"&&l.jsx(zf,{onReveal:v}),(e==="GARDEN"||e==="GATE_APPROACH"||e==="GATE_QUESTION"||e==="GATE_OPENING")&&l.jsx(Lf,{phase:e==="GATE_QUESTION"?i==="scared"?"scared":"question":e==="GATE_OPENING"?"opening":"approach",onApproachComplete:()=>{t("GATE_QUESTION"),o("question")},onYes:N,onScared:T,onScaredConfirm:O,onOpened:P}),(e==="BOUQUET_REVEAL"||e==="BOUQUET_EXPLORE")&&l.jsx(Df,{phase:s,onPickRandom:I,onZoomOutHeart:Nn,onRevealComplete:()=>{a("explore"),t("BOUQUET_EXPLORE")}}),g&&(e==="BOUQUET_EXPLORE"||e==="HEART_REVEAL"||e==="FINAL_MESSAGE")&&l.jsx(Qf,{roseId:g.id,isRandom:g.isRandom,onClose:bn,onPrevious:e==="FINAL_MESSAGE"?Xe:void 0,onNext:e==="FINAL_MESSAGE"?Bt:void 0,onPickAnother:e==="FINAL_MESSAGE"?I:void 0}),(e==="HEART_REVEAL"||e==="FINAL_MESSAGE")&&l.jsx(Xf,{phase:h,onReset:z,onPickRandom:I}),l.jsx(Kf,{visible:e!=="LOADING"}),l.jsx(Zf,{active:x,onMid:S,onComplete:b})]})}vo.createRoot(document.getElementById("root")).render(l.jsx(yd.StrictMode,{children:l.jsx(ch,{})}));
