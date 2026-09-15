var m1=Object.defineProperty;var g1=(n,e,t)=>e in n?m1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ie=(n,e,t)=>g1(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function _1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var T_={exports:{}},Mu={},b_={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),v1=Symbol.for("react.portal"),x1=Symbol.for("react.fragment"),y1=Symbol.for("react.strict_mode"),S1=Symbol.for("react.profiler"),M1=Symbol.for("react.provider"),E1=Symbol.for("react.context"),w1=Symbol.for("react.forward_ref"),T1=Symbol.for("react.suspense"),b1=Symbol.for("react.memo"),A1=Symbol.for("react.lazy"),Wm=Symbol.iterator;function R1(n){return n===null||typeof n!="object"?null:(n=Wm&&n[Wm]||n["@@iterator"],typeof n=="function"?n:null)}var A_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R_=Object.assign,C_={};function $a(n,e,t){this.props=n,this.context=e,this.refs=C_,this.updater=t||A_}$a.prototype.isReactComponent={};$a.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};$a.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function P_(){}P_.prototype=$a.prototype;function op(n,e,t){this.props=n,this.context=e,this.refs=C_,this.updater=t||A_}var lp=op.prototype=new P_;lp.constructor=op;R_(lp,$a.prototype);lp.isPureReactComponent=!0;var jm=Array.isArray,L_=Object.prototype.hasOwnProperty,cp={current:null},D_={key:!0,ref:!0,__self:!0,__source:!0};function N_(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)L_.call(e,i)&&!D_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:_l,type:n,key:s,ref:a,props:r,_owner:cp.current}}function C1(n,e){return{$$typeof:_l,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function up(n){return typeof n=="object"&&n!==null&&n.$$typeof===_l}function P1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Xm=/\/+/g;function Ku(n,e){return typeof n=="object"&&n!==null&&n.key!=null?P1(""+n.key):e.toString(36)}function _c(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case _l:case v1:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Ku(a,0):i,jm(r)?(t="",n!=null&&(t=n.replace(Xm,"$&/")+"/"),_c(r,e,t,"",function(c){return c})):r!=null&&(up(r)&&(r=C1(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Xm,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",jm(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Ku(s,o);a+=_c(s,e,t,l,r)}else if(l=R1(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Ku(s,o++),a+=_c(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Rl(n,e,t){if(n==null)return n;var i=[],r=0;return _c(n,i,"","",function(s){return e.call(t,s,r++)}),i}function L1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var hn={current:null},vc={transition:null},D1={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:vc,ReactCurrentOwner:cp};function I_(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Rl,forEach:function(n,e,t){Rl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Rl(n,function(){e++}),e},toArray:function(n){return Rl(n,function(e){return e})||[]},only:function(n){if(!up(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ze.Component=$a;ze.Fragment=x1;ze.Profiler=S1;ze.PureComponent=op;ze.StrictMode=y1;ze.Suspense=T1;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;ze.act=I_;ze.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=R_({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=cp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)L_.call(e,l)&&!D_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:_l,type:n.type,key:r,ref:s,props:i,_owner:a}};ze.createContext=function(n){return n={$$typeof:E1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:M1,_context:n},n.Consumer=n};ze.createElement=N_;ze.createFactory=function(n){var e=N_.bind(null,n);return e.type=n,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(n){return{$$typeof:w1,render:n}};ze.isValidElement=up;ze.lazy=function(n){return{$$typeof:A1,_payload:{_status:-1,_result:n},_init:L1}};ze.memo=function(n,e){return{$$typeof:b1,type:n,compare:e===void 0?null:e}};ze.startTransition=function(n){var e=vc.transition;vc.transition={};try{n()}finally{vc.transition=e}};ze.unstable_act=I_;ze.useCallback=function(n,e){return hn.current.useCallback(n,e)};ze.useContext=function(n){return hn.current.useContext(n)};ze.useDebugValue=function(){};ze.useDeferredValue=function(n){return hn.current.useDeferredValue(n)};ze.useEffect=function(n,e){return hn.current.useEffect(n,e)};ze.useId=function(){return hn.current.useId()};ze.useImperativeHandle=function(n,e,t){return hn.current.useImperativeHandle(n,e,t)};ze.useInsertionEffect=function(n,e){return hn.current.useInsertionEffect(n,e)};ze.useLayoutEffect=function(n,e){return hn.current.useLayoutEffect(n,e)};ze.useMemo=function(n,e){return hn.current.useMemo(n,e)};ze.useReducer=function(n,e,t){return hn.current.useReducer(n,e,t)};ze.useRef=function(n){return hn.current.useRef(n)};ze.useState=function(n){return hn.current.useState(n)};ze.useSyncExternalStore=function(n,e,t){return hn.current.useSyncExternalStore(n,e,t)};ze.useTransition=function(){return hn.current.useTransition()};ze.version="18.3.1";b_.exports=ze;var oe=b_.exports;const N1=_1(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1=oe,U1=Symbol.for("react.element"),O1=Symbol.for("react.fragment"),F1=Object.prototype.hasOwnProperty,k1=I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z1={key:!0,ref:!0,__self:!0,__source:!0};function U_(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)F1.call(e,i)&&!z1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:U1,type:n,key:s,ref:a,props:r,_owner:k1.current}}Mu.Fragment=O1;Mu.jsx=U_;Mu.jsxs=U_;T_.exports=Mu;var M=T_.exports,ud={},O_={exports:{}},Xn={},F_={exports:{}},k_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,$){var Z=L.length;L.push($);e:for(;0<Z;){var re=Z-1>>>1,Se=L[re];if(0<r(Se,$))L[re]=$,L[Z]=Se,Z=re;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var $=L[0],Z=L.pop();if(Z!==$){L[0]=Z;e:for(var re=0,Se=L.length,ve=Se>>>1;re<ve;){var W=2*(re+1)-1,J=L[W],he=W+1,ue=L[he];if(0>r(J,Z))he<Se&&0>r(ue,J)?(L[re]=ue,L[he]=Z,re=he):(L[re]=J,L[W]=Z,re=W);else if(he<Se&&0>r(ue,Z))L[re]=ue,L[he]=Z,re=he;else break e}}return $}function r(L,$){var Z=L.sortIndex-$.sortIndex;return Z!==0?Z:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,f=null,d=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var $=t(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=L)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(c)}}function S(L){if(g=!1,x(L),!_)if(t(l)!==null)_=!0,B(b);else{var $=t(c);$!==null&&q(S,$.startTime-L)}}function b(L,$){_=!1,g&&(g=!1,h(C),C=-1),p=!0;var Z=d;try{for(x($),f=t(l);f!==null&&(!(f.expirationTime>$)||L&&!w());){var re=f.callback;if(typeof re=="function"){f.callback=null,d=f.priorityLevel;var Se=re(f.expirationTime<=$);$=n.unstable_now(),typeof Se=="function"?f.callback=Se:f===t(l)&&i(l),x($)}else i(l);f=t(l)}if(f!==null)var ve=!0;else{var W=t(c);W!==null&&q(S,W.startTime-$),ve=!1}return ve}finally{f=null,d=Z,p=!1}}var R=!1,E=null,C=-1,D=5,y=-1;function w(){return!(n.unstable_now()-y<D)}function k(){if(E!==null){var L=n.unstable_now();y=L;var $=!0;try{$=E(!0,L)}finally{$?z():(R=!1,E=null)}}else R=!1}var z;if(typeof v=="function")z=function(){v(k)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,X=H.port2;H.port1.onmessage=k,z=function(){X.postMessage(null)}}else z=function(){m(k,0)};function B(L){E=L,R||(R=!0,z())}function q(L,$){C=m(function(){L(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,B(b))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var Z=d;d=$;try{return L()}finally{d=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=d;d=L;try{return $()}finally{d=Z}},n.unstable_scheduleCallback=function(L,$,Z){var re=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,L){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,L={id:u++,callback:$,priorityLevel:L,startTime:Z,expirationTime:Se,sortIndex:-1},Z>re?(L.sortIndex=Z,e(c,L),t(l)===null&&L===t(c)&&(g?(h(C),C=-1):g=!0,q(S,Z-re))):(L.sortIndex=Se,e(l,L),_||p||(_=!0,B(b))),L},n.unstable_shouldYield=w,n.unstable_wrapCallback=function(L){var $=d;return function(){var Z=d;d=$;try{return L.apply(this,arguments)}finally{d=Z}}}})(k_);F_.exports=k_;var B1=F_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=oe,Vn=B1;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z_=new Set,Wo={};function Ds(n,e){La(n,e),La(n+"Capture",e)}function La(n,e){for(Wo[n]=e,n=0;n<e.length;n++)z_.add(e[n])}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,H1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ym={},qm={};function V1(n){return fd.call(qm,n)?!0:fd.call(Ym,n)?!1:H1.test(n)?qm[n]=!0:(Ym[n]=!0,!1)}function W1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function j1(n,e,t,i){if(e===null||typeof e>"u"||W1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$t[n]=new pn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];$t[e]=new pn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){$t[n]=new pn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$t[n]=new pn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$t[n]=new pn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){$t[n]=new pn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){$t[n]=new pn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){$t[n]=new pn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){$t[n]=new pn(n,5,!1,n.toLowerCase(),null,!1,!1)});var fp=/[\-:]([a-z])/g;function dp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(fp,dp);$t[e]=new pn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(fp,dp);$t[e]=new pn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(fp,dp);$t[e]=new pn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){$t[n]=new pn(n,1,!1,n.toLowerCase(),null,!1,!1)});$t.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){$t[n]=new pn(n,1,!1,n.toLowerCase(),null,!0,!0)});function hp(n,e,t,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(j1(e,t,r,i)&&(t=null),i||r===null?V1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ar=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cl=Symbol.for("react.element"),ia=Symbol.for("react.portal"),ra=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),B_=Symbol.for("react.provider"),G_=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),gp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),H_=Symbol.for("react.offscreen"),$m=Symbol.iterator;function no(n){return n===null||typeof n!="object"?null:(n=$m&&n[$m]||n["@@iterator"],typeof n=="function"?n:null)}var Mt=Object.assign,Zu;function So(n){if(Zu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||""}return`
`+Zu+n}var Qu=!1;function Ju(n,e){if(!n||Qu)return"";Qu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Qu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?So(n):""}function X1(n){switch(n.tag){case 5:return So(n.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return n=Ju(n.type,!1),n;case 11:return n=Ju(n.type.render,!1),n;case 1:return n=Ju(n.type,!0),n;default:return""}}function md(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ra:return"Fragment";case ia:return"Portal";case dd:return"Profiler";case pp:return"StrictMode";case hd:return"Suspense";case pd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G_:return(n.displayName||"Context")+".Consumer";case B_:return(n._context.displayName||"Context")+".Provider";case mp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case gp:return e=n.displayName||null,e!==null?e:md(n.type)||"Memo";case gr:e=n._payload,n=n._init;try{return md(n(e))}catch{}}return null}function Y1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(e);case 8:return e===pp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function V_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q1(n){var e=V_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Pl(n){n._valueTracker||(n._valueTracker=q1(n))}function W_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=V_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Bc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gd(n,e){var t=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Km(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=kr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j_(n,e){e=e.checked,e!=null&&hp(n,"checked",e,!1)}function _d(n,e){j_(n,e);var t=kr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?vd(n,e.type,t):e.hasOwnProperty("defaultValue")&&vd(n,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Zm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function vd(n,e,t){(e!=="number"||Bc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Mo=Array.isArray;function xa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+kr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function xd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Qm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(Mo(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:kr(t)}}function X_(n,e){var t=kr(e.value),i=kr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Jm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Y_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Y_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ll,q_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ll=Ll||document.createElement("div"),Ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ll.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function jo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$1=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(n){$1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ro[e]=Ro[n]})});function $_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ro.hasOwnProperty(n)&&Ro[n]?(""+e).trim():e+"px"}function K_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=$_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var K1=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sd(n,e){if(e){if(K1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Md(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=null;function _p(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var wd=null,ya=null,Sa=null;function eg(n){if(n=yl(n)){if(typeof wd!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Au(e),wd(n.stateNode,n.type,e))}}function Z_(n){ya?Sa?Sa.push(n):Sa=[n]:ya=n}function Q_(){if(ya){var n=ya,e=Sa;if(Sa=ya=null,eg(n),e)for(n=0;n<e.length;n++)eg(e[n])}}function J_(n,e){return n(e)}function ev(){}var ef=!1;function tv(n,e,t){if(ef)return n(e,t);ef=!0;try{return J_(n,e,t)}finally{ef=!1,(ya!==null||Sa!==null)&&(ev(),Q_())}}function Xo(n,e){var t=n.stateNode;if(t===null)return null;var i=Au(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var Td=!1;if(Qi)try{var io={};Object.defineProperty(io,"passive",{get:function(){Td=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Td=!1}function Z1(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Co=!1,Gc=null,Hc=!1,bd=null,Q1={onError:function(n){Co=!0,Gc=n}};function J1(n,e,t,i,r,s,a,o,l){Co=!1,Gc=null,Z1.apply(Q1,arguments)}function eS(n,e,t,i,r,s,a,o,l){if(J1.apply(this,arguments),Co){if(Co){var c=Gc;Co=!1,Gc=null}else throw Error(ne(198));Hc||(Hc=!0,bd=c)}}function Ns(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function nv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function tg(n){if(Ns(n)!==n)throw Error(ne(188))}function tS(n){var e=n.alternate;if(!e){if(e=Ns(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return tg(r),n;if(s===i)return tg(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function iv(n){return n=tS(n),n!==null?rv(n):null}function rv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=rv(n);if(e!==null)return e;n=n.sibling}return null}var sv=Vn.unstable_scheduleCallback,ng=Vn.unstable_cancelCallback,nS=Vn.unstable_shouldYield,iS=Vn.unstable_requestPaint,Rt=Vn.unstable_now,rS=Vn.unstable_getCurrentPriorityLevel,vp=Vn.unstable_ImmediatePriority,av=Vn.unstable_UserBlockingPriority,Vc=Vn.unstable_NormalPriority,sS=Vn.unstable_LowPriority,ov=Vn.unstable_IdlePriority,Eu=null,Li=null;function aS(n){if(Li&&typeof Li.onCommitFiberRoot=="function")try{Li.onCommitFiberRoot(Eu,n,void 0,(n.current.flags&128)===128)}catch{}}var xi=Math.clz32?Math.clz32:cS,oS=Math.log,lS=Math.LN2;function cS(n){return n>>>=0,n===0?32:31-(oS(n)/lS|0)|0}var Dl=64,Nl=4194304;function Eo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Eo(o):(s&=a,s!==0&&(i=Eo(s)))}else a=t&~r,a!==0?i=Eo(a):s!==0&&(i=Eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-xi(e),r=1<<t,i|=n[t],e&=~r;return i}function uS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-xi(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=uS(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Ad(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function lv(){var n=Dl;return Dl<<=1,!(Dl&4194240)&&(Dl=64),n}function tf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function vl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-xi(e),n[e]=t}function dS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-xi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function xp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-xi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var tt=0;function cv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var uv,yp,fv,dv,hv,Rd=!1,Il=[],br=null,Ar=null,Rr=null,Yo=new Map,qo=new Map,vr=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ig(n,e){switch(n){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function ro(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=yl(e),e!==null&&yp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function pS(n,e,t,i,r){switch(e){case"focusin":return br=ro(br,n,e,t,i,r),!0;case"dragenter":return Ar=ro(Ar,n,e,t,i,r),!0;case"mouseover":return Rr=ro(Rr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Yo.set(s,ro(Yo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,qo.set(s,ro(qo.get(s)||null,n,e,t,i,r)),!0}return!1}function pv(n){var e=ds(n.target);if(e!==null){var t=Ns(e);if(t!==null){if(e=t.tag,e===13){if(e=nv(t),e!==null){n.blockedOn=e,hv(n.priority,function(){fv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Cd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ed=i,t.target.dispatchEvent(i),Ed=null}else return e=yl(t),e!==null&&yp(e),n.blockedOn=t,!1;e.shift()}return!0}function rg(n,e,t){xc(n)&&t.delete(e)}function mS(){Rd=!1,br!==null&&xc(br)&&(br=null),Ar!==null&&xc(Ar)&&(Ar=null),Rr!==null&&xc(Rr)&&(Rr=null),Yo.forEach(rg),qo.forEach(rg)}function so(n,e){n.blockedOn===e&&(n.blockedOn=null,Rd||(Rd=!0,Vn.unstable_scheduleCallback(Vn.unstable_NormalPriority,mS)))}function $o(n){function e(r){return so(r,n)}if(0<Il.length){so(Il[0],n);for(var t=1;t<Il.length;t++){var i=Il[t];i.blockedOn===n&&(i.blockedOn=null)}}for(br!==null&&so(br,n),Ar!==null&&so(Ar,n),Rr!==null&&so(Rr,n),Yo.forEach(e),qo.forEach(e),t=0;t<vr.length;t++)i=vr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<vr.length&&(t=vr[0],t.blockedOn===null);)pv(t),t.blockedOn===null&&vr.shift()}var Ma=ar.ReactCurrentBatchConfig,jc=!0;function gS(n,e,t,i){var r=tt,s=Ma.transition;Ma.transition=null;try{tt=1,Sp(n,e,t,i)}finally{tt=r,Ma.transition=s}}function _S(n,e,t,i){var r=tt,s=Ma.transition;Ma.transition=null;try{tt=4,Sp(n,e,t,i)}finally{tt=r,Ma.transition=s}}function Sp(n,e,t,i){if(jc){var r=Cd(n,e,t,i);if(r===null)df(n,e,i,Xc,t),ig(n,i);else if(pS(r,n,e,t,i))i.stopPropagation();else if(ig(n,i),e&4&&-1<hS.indexOf(n)){for(;r!==null;){var s=yl(r);if(s!==null&&uv(s),s=Cd(n,e,t,i),s===null&&df(n,e,i,Xc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else df(n,e,i,null,t)}}var Xc=null;function Cd(n,e,t,i){if(Xc=null,n=_p(i),n=ds(n),n!==null)if(e=Ns(n),e===null)n=null;else if(t=e.tag,t===13){if(n=nv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Xc=n,null}function mv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rS()){case vp:return 1;case av:return 4;case Vc:case sS:return 16;case ov:return 536870912;default:return 16}default:return 16}}var Sr=null,Mp=null,yc=null;function gv(){if(yc)return yc;var n,e=Mp,t=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return yc=r.slice(n,1<i?1-i:void 0)}function Sc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ul(){return!0}function sg(){return!1}function Yn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ul:sg,this.isPropagationStopped=sg,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ep=Yn(Ka),xl=Mt({},Ka,{view:0,detail:0}),vS=Yn(xl),nf,rf,ao,wu=Mt({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ao&&(ao&&n.type==="mousemove"?(nf=n.screenX-ao.screenX,rf=n.screenY-ao.screenY):rf=nf=0,ao=n),nf)},movementY:function(n){return"movementY"in n?n.movementY:rf}}),ag=Yn(wu),xS=Mt({},wu,{dataTransfer:0}),yS=Yn(xS),SS=Mt({},xl,{relatedTarget:0}),sf=Yn(SS),MS=Mt({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),ES=Yn(MS),wS=Mt({},Ka,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),TS=Yn(wS),bS=Mt({},Ka,{data:0}),og=Yn(bS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=CS[n])?!!e[n]:!1}function wp(){return PS}var LS=Mt({},xl,{key:function(n){if(n.key){var e=AS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Sc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?RS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wp,charCode:function(n){return n.type==="keypress"?Sc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Sc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),DS=Yn(LS),NS=Mt({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lg=Yn(NS),IS=Mt({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wp}),US=Yn(IS),OS=Mt({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),FS=Yn(OS),kS=Mt({},wu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),zS=Yn(kS),BS=[9,13,27,32],Tp=Qi&&"CompositionEvent"in window,Po=null;Qi&&"documentMode"in document&&(Po=document.documentMode);var GS=Qi&&"TextEvent"in window&&!Po,_v=Qi&&(!Tp||Po&&8<Po&&11>=Po),cg=" ",ug=!1;function vv(n,e){switch(n){case"keyup":return BS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var sa=!1;function HS(n,e){switch(n){case"compositionend":return xv(e);case"keypress":return e.which!==32?null:(ug=!0,cg);case"textInput":return n=e.data,n===cg&&ug?null:n;default:return null}}function VS(n,e){if(sa)return n==="compositionend"||!Tp&&vv(n,e)?(n=gv(),yc=Mp=Sr=null,sa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!WS[n.type]:e==="textarea"}function yv(n,e,t,i){Z_(i),e=Yc(e,"onChange"),0<e.length&&(t=new Ep("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Lo=null,Ko=null;function jS(n){Lv(n,0)}function Tu(n){var e=la(n);if(W_(e))return n}function XS(n,e){if(n==="change")return e}var Sv=!1;if(Qi){var af;if(Qi){var of="oninput"in document;if(!of){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),of=typeof dg.oninput=="function"}af=of}else af=!1;Sv=af&&(!document.documentMode||9<document.documentMode)}function hg(){Lo&&(Lo.detachEvent("onpropertychange",Mv),Ko=Lo=null)}function Mv(n){if(n.propertyName==="value"&&Tu(Ko)){var e=[];yv(e,Ko,n,_p(n)),tv(jS,e)}}function YS(n,e,t){n==="focusin"?(hg(),Lo=e,Ko=t,Lo.attachEvent("onpropertychange",Mv)):n==="focusout"&&hg()}function qS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tu(Ko)}function $S(n,e){if(n==="click")return Tu(e)}function KS(n,e){if(n==="input"||n==="change")return Tu(e)}function ZS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Si=typeof Object.is=="function"?Object.is:ZS;function Zo(n,e){if(Si(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!fd.call(e,r)||!Si(n[r],e[r]))return!1}return!0}function pg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function mg(n,e){var t=pg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=pg(t)}}function Ev(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ev(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function wv(){for(var n=window,e=Bc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Bc(n.document)}return e}function bp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function QS(n){var e=wv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ev(t.ownerDocument.documentElement,t)){if(i!==null&&bp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=mg(t,s);var a=mg(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var JS=Qi&&"documentMode"in document&&11>=document.documentMode,aa=null,Pd=null,Do=null,Ld=!1;function gg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ld||aa==null||aa!==Bc(i)||(i=aa,"selectionStart"in i&&bp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Do&&Zo(Do,i)||(Do=i,i=Yc(Pd,"onSelect"),0<i.length&&(e=new Ep("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=aa)))}function Ol(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var oa={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},lf={},Tv={};Qi&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function bu(n){if(lf[n])return lf[n];if(!oa[n])return n;var e=oa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Tv)return lf[n]=e[t];return n}var bv=bu("animationend"),Av=bu("animationiteration"),Rv=bu("animationstart"),Cv=bu("transitionend"),Pv=new Map,_g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(n,e){Pv.set(n,e),Ds(e,[n])}for(var cf=0;cf<_g.length;cf++){var uf=_g[cf],eM=uf.toLowerCase(),tM=uf[0].toUpperCase()+uf.slice(1);Wr(eM,"on"+tM)}Wr(bv,"onAnimationEnd");Wr(Av,"onAnimationIteration");Wr(Rv,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(Cv,"onTransitionEnd");La("onMouseEnter",["mouseout","mouseover"]);La("onMouseLeave",["mouseout","mouseover"]);La("onPointerEnter",["pointerout","pointerover"]);La("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nM=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function vg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,eS(i,e,void 0,n),n.currentTarget=null}function Lv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;vg(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;vg(r,o,c),s=l}}}if(Hc)throw n=bd,Hc=!1,bd=null,n}function dt(n,e){var t=e[Od];t===void 0&&(t=e[Od]=new Set);var i=n+"__bubble";t.has(i)||(Dv(e,n,2,!1),t.add(i))}function ff(n,e,t){var i=0;e&&(i|=4),Dv(t,n,i,e)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[Fl]){n[Fl]=!0,z_.forEach(function(t){t!=="selectionchange"&&(nM.has(t)||ff(t,!1,n),ff(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Fl]||(e[Fl]=!0,ff("selectionchange",!1,e))}}function Dv(n,e,t,i){switch(mv(e)){case 1:var r=gS;break;case 4:r=_S;break;default:r=Sp}t=r.bind(null,e,t,n),r=void 0,!Td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function df(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ds(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}tv(function(){var c=s,u=_p(t),f=[];e:{var d=Pv.get(n);if(d!==void 0){var p=Ep,_=n;switch(n){case"keypress":if(Sc(t)===0)break e;case"keydown":case"keyup":p=DS;break;case"focusin":_="focus",p=sf;break;case"focusout":_="blur",p=sf;break;case"beforeblur":case"afterblur":p=sf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=yS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=US;break;case bv:case Av:case Rv:p=ES;break;case Cv:p=FS;break;case"scroll":p=vS;break;case"wheel":p=zS;break;case"copy":case"cut":case"paste":p=TS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=lg}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?d!==null?d+"Capture":null:d;g=[];for(var v=c,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=Xo(v,h),S!=null&&g.push(Jo(v,S,x)))),m)break;v=v.return}0<g.length&&(d=new p(d,_,null,t,u),f.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Ed&&(_=t.relatedTarget||t.fromElement)&&(ds(_)||_[Ji]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=c,_=_?ds(_):null,_!==null&&(m=Ns(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(g=ag,S="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=lg,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:la(p),x=_==null?d:la(_),d=new g(S,v+"leave",p,t,u),d.target=m,d.relatedTarget=x,S=null,ds(u)===c&&(g=new g(h,v+"enter",_,t,u),g.target=x,g.relatedTarget=m,S=g),m=S,p&&_)t:{for(g=p,h=_,v=0,x=g;x;x=ks(x))v++;for(x=0,S=h;S;S=ks(S))x++;for(;0<v-x;)g=ks(g),v--;for(;0<x-v;)h=ks(h),x--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=ks(g),h=ks(h)}g=null}else g=null;p!==null&&xg(f,d,p,g,!1),_!==null&&m!==null&&xg(f,m,_,g,!0)}}e:{if(d=c?la(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=XS;else if(fg(d))if(Sv)b=KS;else{b=qS;var R=YS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=$S);if(b&&(b=b(n,c))){yv(f,b,t,u);break e}R&&R(n,d,c),n==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&vd(d,"number",d.value)}switch(R=c?la(c):window,n){case"focusin":(fg(R)||R.contentEditable==="true")&&(aa=R,Pd=c,Do=null);break;case"focusout":Do=Pd=aa=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,gg(f,t,u);break;case"selectionchange":if(JS)break;case"keydown":case"keyup":gg(f,t,u)}var E;if(Tp)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else sa?vv(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(_v&&t.locale!=="ko"&&(sa||C!=="onCompositionStart"?C==="onCompositionEnd"&&sa&&(E=gv()):(Sr=u,Mp="value"in Sr?Sr.value:Sr.textContent,sa=!0)),R=Yc(c,C),0<R.length&&(C=new og(C,n,null,t,u),f.push({event:C,listeners:R}),E?C.data=E:(E=xv(t),E!==null&&(C.data=E)))),(E=GS?HS(n,t):VS(n,t))&&(c=Yc(c,"onBeforeInput"),0<c.length&&(u=new og("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=E))}Lv(f,e)})}function Jo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Yc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xo(n,t),s!=null&&i.unshift(Jo(n,s,r)),s=Xo(n,e),s!=null&&i.push(Jo(n,s,r))),n=n.return}return i}function ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xg(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Xo(t,s),l!=null&&a.unshift(Jo(t,l,o))):r||(l=Xo(t,s),l!=null&&a.push(Jo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var iM=/\r\n?/g,rM=/\u0000|\uFFFD/g;function yg(n){return(typeof n=="string"?n:""+n).replace(iM,`
`).replace(rM,"")}function kl(n,e,t){if(e=yg(e),yg(n)!==e&&t)throw Error(ne(425))}function qc(){}var Dd=null,Nd=null;function Id(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,sM=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,aM=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(n){return Sg.resolve(null).then(n).catch(oM)}:Ud;function oM(n){setTimeout(function(){throw n})}function hf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),$o(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);$o(e)}function Cr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Mg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Za=Math.random().toString(36).slice(2),bi="__reactFiber$"+Za,el="__reactProps$"+Za,Ji="__reactContainer$"+Za,Od="__reactEvents$"+Za,lM="__reactListeners$"+Za,cM="__reactHandles$"+Za;function ds(n){var e=n[bi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ji]||t[bi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Mg(n);n!==null;){if(t=n[bi])return t;n=Mg(n)}return e}n=t,t=n.parentNode}return null}function yl(n){return n=n[bi]||n[Ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function la(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Au(n){return n[el]||null}var Fd=[],ca=-1;function jr(n){return{current:n}}function pt(n){0>ca||(n.current=Fd[ca],Fd[ca]=null,ca--)}function ct(n,e){ca++,Fd[ca]=n.current,n.current=e}var zr={},rn=jr(zr),Sn=jr(!1),Ts=zr;function Da(n,e){var t=n.type.contextTypes;if(!t)return zr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(n){return n=n.childContextTypes,n!=null}function $c(){pt(Sn),pt(rn)}function Eg(n,e,t){if(rn.current!==zr)throw Error(ne(168));ct(rn,e),ct(Sn,t)}function Nv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Y1(n)||"Unknown",r));return Mt({},t,i)}function Kc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zr,Ts=rn.current,ct(rn,n),ct(Sn,Sn.current),!0}function wg(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=Nv(n,e,Ts),i.__reactInternalMemoizedMergedChildContext=n,pt(Sn),pt(rn),ct(rn,n)):pt(Sn),ct(Sn,t)}var Wi=null,Ru=!1,pf=!1;function Iv(n){Wi===null?Wi=[n]:Wi.push(n)}function uM(n){Ru=!0,Iv(n)}function Xr(){if(!pf&&Wi!==null){pf=!0;var n=0,e=tt;try{var t=Wi;for(tt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Wi=null,Ru=!1}catch(r){throw Wi!==null&&(Wi=Wi.slice(n+1)),sv(vp,Xr),r}finally{tt=e,pf=!1}}return null}var ua=[],fa=0,Zc=null,Qc=0,Zn=[],Qn=0,bs=null,Yi=1,qi="";function rs(n,e){ua[fa++]=Qc,ua[fa++]=Zc,Zc=n,Qc=e}function Uv(n,e,t){Zn[Qn++]=Yi,Zn[Qn++]=qi,Zn[Qn++]=bs,bs=n;var i=Yi;n=qi;var r=32-xi(i)-1;i&=~(1<<r),t+=1;var s=32-xi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Yi=1<<32-xi(e)+r|t<<r|i,qi=s+n}else Yi=1<<s|t<<r|i,qi=n}function Ap(n){n.return!==null&&(rs(n,1),Uv(n,1,0))}function Rp(n){for(;n===Zc;)Zc=ua[--fa],ua[fa]=null,Qc=ua[--fa],ua[fa]=null;for(;n===bs;)bs=Zn[--Qn],Zn[Qn]=null,qi=Zn[--Qn],Zn[Qn]=null,Yi=Zn[--Qn],Zn[Qn]=null}var Gn=null,kn=null,mt=!1,mi=null;function Ov(n,e){var t=Jn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Tg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Gn=n,kn=Cr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Gn=n,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=bs!==null?{id:Yi,overflow:qi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Jn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Gn=n,kn=null,!0):!1;default:return!1}}function kd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zd(n){if(mt){var e=kn;if(e){var t=e;if(!Tg(n,e)){if(kd(n))throw Error(ne(418));e=Cr(t.nextSibling);var i=Gn;e&&Tg(n,e)?Ov(i,t):(n.flags=n.flags&-4097|2,mt=!1,Gn=n)}}else{if(kd(n))throw Error(ne(418));n.flags=n.flags&-4097|2,mt=!1,Gn=n}}}function bg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gn=n}function zl(n){if(n!==Gn)return!1;if(!mt)return bg(n),mt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Id(n.type,n.memoizedProps)),e&&(e=kn)){if(kd(n))throw Fv(),Error(ne(418));for(;e;)Ov(n,e),e=Cr(e.nextSibling)}if(bg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){kn=Cr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}kn=null}}else kn=Gn?Cr(n.stateNode.nextSibling):null;return!0}function Fv(){for(var n=kn;n;)n=Cr(n.nextSibling)}function Na(){kn=Gn=null,mt=!1}function Cp(n){mi===null?mi=[n]:mi.push(n)}var fM=ar.ReactCurrentBatchConfig;function oo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Bl(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ag(n){var e=n._init;return e(n._payload)}function kv(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Nr(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return n&&h.alternate===null&&(h.flags|=2),h}function o(h,v,x,S){return v===null||v.tag!==6?(v=Sf(x,h.mode,S),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,S){var b=x.type;return b===ra?u(h,v,x.props.children,S,x.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===gr&&Ag(b)===v.type)?(S=r(v,x.props),S.ref=oo(h,v,x),S.return=h,S):(S=Rc(x.type,x.key,x.props,null,h.mode,S),S.ref=oo(h,v,x),S.return=h,S)}function c(h,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Mf(x,h.mode,S),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function u(h,v,x,S,b){return v===null||v.tag!==7?(v=xs(x,h.mode,S,b),v.return=h,v):(v=r(v,x),v.return=h,v)}function f(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Sf(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cl:return x=Rc(v.type,v.key,v.props,null,h.mode,x),x.ref=oo(h,null,v),x.return=h,x;case ia:return v=Mf(v,h.mode,x),v.return=h,v;case gr:var S=v._init;return f(h,S(v._payload),x)}if(Mo(v)||no(v))return v=xs(v,h.mode,x,null),v.return=h,v;Bl(h,v)}return null}function d(h,v,x,S){var b=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return b!==null?null:o(h,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Cl:return x.key===b?l(h,v,x,S):null;case ia:return x.key===b?c(h,v,x,S):null;case gr:return b=x._init,d(h,v,b(x._payload),S)}if(Mo(x)||no(x))return b!==null?null:u(h,v,x,S,null);Bl(h,x)}return null}function p(h,v,x,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,o(v,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Cl:return h=h.get(S.key===null?x:S.key)||null,l(v,h,S,b);case ia:return h=h.get(S.key===null?x:S.key)||null,c(v,h,S,b);case gr:var R=S._init;return p(h,v,x,R(S._payload),b)}if(Mo(S)||no(S))return h=h.get(x)||null,u(v,h,S,b,null);Bl(v,S)}return null}function _(h,v,x,S){for(var b=null,R=null,E=v,C=v=0,D=null;E!==null&&C<x.length;C++){E.index>C?(D=E,E=null):D=E.sibling;var y=d(h,E,x[C],S);if(y===null){E===null&&(E=D);break}n&&E&&y.alternate===null&&e(h,E),v=s(y,v,C),R===null?b=y:R.sibling=y,R=y,E=D}if(C===x.length)return t(h,E),mt&&rs(h,C),b;if(E===null){for(;C<x.length;C++)E=f(h,x[C],S),E!==null&&(v=s(E,v,C),R===null?b=E:R.sibling=E,R=E);return mt&&rs(h,C),b}for(E=i(h,E);C<x.length;C++)D=p(E,h,C,x[C],S),D!==null&&(n&&D.alternate!==null&&E.delete(D.key===null?C:D.key),v=s(D,v,C),R===null?b=D:R.sibling=D,R=D);return n&&E.forEach(function(w){return e(h,w)}),mt&&rs(h,C),b}function g(h,v,x,S){var b=no(x);if(typeof b!="function")throw Error(ne(150));if(x=b.call(x),x==null)throw Error(ne(151));for(var R=b=null,E=v,C=v=0,D=null,y=x.next();E!==null&&!y.done;C++,y=x.next()){E.index>C?(D=E,E=null):D=E.sibling;var w=d(h,E,y.value,S);if(w===null){E===null&&(E=D);break}n&&E&&w.alternate===null&&e(h,E),v=s(w,v,C),R===null?b=w:R.sibling=w,R=w,E=D}if(y.done)return t(h,E),mt&&rs(h,C),b;if(E===null){for(;!y.done;C++,y=x.next())y=f(h,y.value,S),y!==null&&(v=s(y,v,C),R===null?b=y:R.sibling=y,R=y);return mt&&rs(h,C),b}for(E=i(h,E);!y.done;C++,y=x.next())y=p(E,h,C,y.value,S),y!==null&&(n&&y.alternate!==null&&E.delete(y.key===null?C:y.key),v=s(y,v,C),R===null?b=y:R.sibling=y,R=y);return n&&E.forEach(function(k){return e(h,k)}),mt&&rs(h,C),b}function m(h,v,x,S){if(typeof x=="object"&&x!==null&&x.type===ra&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Cl:e:{for(var b=x.key,R=v;R!==null;){if(R.key===b){if(b=x.type,b===ra){if(R.tag===7){t(h,R.sibling),v=r(R,x.props.children),v.return=h,h=v;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===gr&&Ag(b)===R.type){t(h,R.sibling),v=r(R,x.props),v.ref=oo(h,R,x),v.return=h,h=v;break e}t(h,R);break}else e(h,R);R=R.sibling}x.type===ra?(v=xs(x.props.children,h.mode,S,x.key),v.return=h,h=v):(S=Rc(x.type,x.key,x.props,null,h.mode,S),S.ref=oo(h,v,x),S.return=h,h=S)}return a(h);case ia:e:{for(R=x.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=Mf(x,h.mode,S),v.return=h,h=v}return a(h);case gr:return R=x._init,m(h,v,R(x._payload),S)}if(Mo(x))return _(h,v,x,S);if(no(x))return g(h,v,x,S);Bl(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=Sf(x,h.mode,S),v.return=h,h=v),a(h)):t(h,v)}return m}var Ia=kv(!0),zv=kv(!1),Jc=jr(null),eu=null,da=null,Pp=null;function Lp(){Pp=da=eu=null}function Dp(n){var e=Jc.current;pt(Jc),n._currentValue=e}function Bd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ea(n,e){eu=n,Pp=da=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(xn=!0),n.firstContext=null)}function ii(n){var e=n._currentValue;if(Pp!==n)if(n={context:n,memoizedValue:e,next:null},da===null){if(eu===null)throw Error(ne(308));da=n,eu.dependencies={lanes:0,firstContext:n}}else da=da.next=n;return e}var hs=null;function Np(n){hs===null?hs=[n]:hs.push(n)}function Bv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Np(e)):(t.next=r.next,r.next=t),e.interleaved=t,er(n,i)}function er(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var _r=!1;function Ip(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,er(n,t)}return r=i.interleaved,r===null?(e.next=e,Np(i)):(e.next=r.next,r.next=e),i.interleaved=e,er(n,t)}function Mc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,xp(n,t)}}function Rg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function tu(n,e,t,i){var r=n.updateQueue;_r=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=n,g=o;switch(d=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=Mt({},f,d);break e;case 2:_r=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rs|=a,n.lanes=a,n.memoizedState=f}}function Cg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Sl={},Di=jr(Sl),tl=jr(Sl),nl=jr(Sl);function ps(n){if(n===Sl)throw Error(ne(174));return n}function Up(n,e){switch(ct(nl,e),ct(tl,n),ct(Di,Sl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=yd(e,n)}pt(Di),ct(Di,e)}function Ua(){pt(Di),pt(tl),pt(nl)}function Hv(n){ps(nl.current);var e=ps(Di.current),t=yd(e,n.type);e!==t&&(ct(tl,n),ct(Di,t))}function Op(n){tl.current===n&&(pt(Di),pt(tl))}var vt=jr(0);function nu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mf=[];function Fp(){for(var n=0;n<mf.length;n++)mf[n]._workInProgressVersionPrimary=null;mf.length=0}var Ec=ar.ReactCurrentDispatcher,gf=ar.ReactCurrentBatchConfig,As=0,St=null,Nt=null,zt=null,iu=!1,No=!1,il=0,dM=0;function Kt(){throw Error(ne(321))}function kp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Si(n[t],e[t]))return!1;return!0}function zp(n,e,t,i,r,s){if(As=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ec.current=n===null||n.memoizedState===null?gM:_M,n=t(i,r),No){s=0;do{if(No=!1,il=0,25<=s)throw Error(ne(301));s+=1,zt=Nt=null,e.updateQueue=null,Ec.current=vM,n=t(i,r)}while(No)}if(Ec.current=ru,e=Nt!==null&&Nt.next!==null,As=0,zt=Nt=St=null,iu=!1,e)throw Error(ne(300));return n}function Bp(){var n=il!==0;return il=0,n}function Ei(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?St.memoizedState=zt=n:zt=zt.next=n,zt}function ri(){if(Nt===null){var n=St.alternate;n=n!==null?n.memoizedState:null}else n=Nt.next;var e=zt===null?St.memoizedState:zt.next;if(e!==null)zt=e,Nt=n;else{if(n===null)throw Error(ne(310));Nt=n,n={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},zt===null?St.memoizedState=zt=n:zt=zt.next=n}return zt}function rl(n,e){return typeof e=="function"?e(n):e}function _f(n){var e=ri(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Nt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((As&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,St.lanes|=u,Rs|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Si(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,St.lanes|=s,Rs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function vf(n){var e=ri(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);Si(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Vv(){}function Wv(n,e){var t=St,i=ri(),r=e(),s=!Si(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,Gp(Yv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(t.flags|=2048,sl(9,Xv.bind(null,t,i,r,e),void 0,null),Bt===null)throw Error(ne(349));As&30||jv(t,e,r)}return r}function jv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Xv(n,e,t,i){e.value=t,e.getSnapshot=i,qv(e)&&$v(n)}function Yv(n,e,t){return t(function(){qv(e)&&$v(n)})}function qv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Si(n,t)}catch{return!0}}function $v(n){var e=er(n,1);e!==null&&yi(e,n,1,-1)}function Pg(n){var e=Ei();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:n},e.queue=n,n=n.dispatch=mM.bind(null,St,n),[e.memoizedState,n]}function sl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Kv(){return ri().memoizedState}function wc(n,e,t,i){var r=Ei();St.flags|=n,r.memoizedState=sl(1|e,t,void 0,i===void 0?null:i)}function Cu(n,e,t,i){var r=ri();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var a=Nt.memoizedState;if(s=a.destroy,i!==null&&kp(i,a.deps)){r.memoizedState=sl(e,t,s,i);return}}St.flags|=n,r.memoizedState=sl(1|e,t,s,i)}function Lg(n,e){return wc(8390656,8,n,e)}function Gp(n,e){return Cu(2048,8,n,e)}function Zv(n,e){return Cu(4,2,n,e)}function Qv(n,e){return Cu(4,4,n,e)}function Jv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ex(n,e,t){return t=t!=null?t.concat([n]):null,Cu(4,4,Jv.bind(null,e,n),t)}function Hp(){}function tx(n,e){var t=ri();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function nx(n,e){var t=ri();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function ix(n,e,t){return As&21?(Si(t,e)||(t=lv(),St.lanes|=t,Rs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,xn=!0),n.memoizedState=t)}function hM(n,e){var t=tt;tt=t!==0&&4>t?t:4,n(!0);var i=gf.transition;gf.transition={};try{n(!1),e()}finally{tt=t,gf.transition=i}}function rx(){return ri().memoizedState}function pM(n,e,t){var i=Dr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},sx(n))ax(e,t);else if(t=Bv(n,e,t,i),t!==null){var r=cn();yi(t,n,i,r),ox(t,e,i)}}function mM(n,e,t){var i=Dr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(sx(n))ax(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,Si(o,a)){var l=e.interleaved;l===null?(r.next=r,Np(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Bv(n,e,r,i),t!==null&&(r=cn(),yi(t,n,i,r),ox(t,e,i))}}function sx(n){var e=n.alternate;return n===St||e!==null&&e===St}function ax(n,e){No=iu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function ox(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,xp(n,t)}}var ru={readContext:ii,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},gM={readContext:ii,useCallback:function(n,e){return Ei().memoizedState=[n,e===void 0?null:e],n},useContext:ii,useEffect:Lg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,wc(4194308,4,Jv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return wc(4194308,4,n,e)},useInsertionEffect:function(n,e){return wc(4,2,n,e)},useMemo:function(n,e){var t=Ei();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ei();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=pM.bind(null,St,n),[i.memoizedState,n]},useRef:function(n){var e=Ei();return n={current:n},e.memoizedState=n},useState:Pg,useDebugValue:Hp,useDeferredValue:function(n){return Ei().memoizedState=n},useTransition:function(){var n=Pg(!1),e=n[0];return n=hM.bind(null,n[1]),Ei().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=St,r=Ei();if(mt){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Bt===null)throw Error(ne(349));As&30||jv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Lg(Yv.bind(null,i,s,n),[n]),i.flags|=2048,sl(9,Xv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ei(),e=Bt.identifierPrefix;if(mt){var t=qi,i=Yi;t=(i&~(1<<32-xi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=il++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=dM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},_M={readContext:ii,useCallback:tx,useContext:ii,useEffect:Gp,useImperativeHandle:ex,useInsertionEffect:Zv,useLayoutEffect:Qv,useMemo:nx,useReducer:_f,useRef:Kv,useState:function(){return _f(rl)},useDebugValue:Hp,useDeferredValue:function(n){var e=ri();return ix(e,Nt.memoizedState,n)},useTransition:function(){var n=_f(rl)[0],e=ri().memoizedState;return[n,e]},useMutableSource:Vv,useSyncExternalStore:Wv,useId:rx,unstable_isNewReconciler:!1},vM={readContext:ii,useCallback:tx,useContext:ii,useEffect:Gp,useImperativeHandle:ex,useInsertionEffect:Zv,useLayoutEffect:Qv,useMemo:nx,useReducer:vf,useRef:Kv,useState:function(){return vf(rl)},useDebugValue:Hp,useDeferredValue:function(n){var e=ri();return Nt===null?e.memoizedState=n:ix(e,Nt.memoizedState,n)},useTransition:function(){var n=vf(rl)[0],e=ri().memoizedState;return[n,e]},useMutableSource:Vv,useSyncExternalStore:Wv,useId:rx,unstable_isNewReconciler:!1};function fi(n,e){if(n&&n.defaultProps){e=Mt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Gd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Mt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Pu={isMounted:function(n){return(n=n._reactInternals)?Ns(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=cn(),r=Dr(n),s=Zi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Pr(n,s,r),e!==null&&(yi(e,n,r,i),Mc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=cn(),r=Dr(n),s=Zi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Pr(n,s,r),e!==null&&(yi(e,n,r,i),Mc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=cn(),i=Dr(n),r=Zi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Pr(n,r,i),e!==null&&(yi(e,n,i,t),Mc(e,n,i))}};function Dg(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Zo(t,i)||!Zo(r,s):!0}function lx(n,e,t){var i=!1,r=zr,s=e.contextType;return typeof s=="object"&&s!==null?s=ii(s):(r=Mn(e)?Ts:rn.current,i=e.contextTypes,s=(i=i!=null)?Da(n,r):zr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Ng(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Pu.enqueueReplaceState(e,e.state,null)}function Hd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Ip(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ii(s):(s=Mn(e)?Ts:rn.current,r.context=Da(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pu.enqueueReplaceState(r,r.state,null),tu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Oa(n,e){try{var t="",i=e;do t+=X1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function xf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Vd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var xM=typeof WeakMap=="function"?WeakMap:Map;function cx(n,e,t){t=Zi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){au||(au=!0,Jd=i),Vd(n,e)},t}function ux(n,e,t){t=Zi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Vd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Vd(n,e),typeof i!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Ig(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new xM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=NM.bind(null,n,e,t),e.then(n,n))}function Ug(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Og(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Zi(-1,1),e.tag=2,Pr(t,e,1))),t.lanes|=1),n)}var yM=ar.ReactCurrentOwner,xn=!1;function on(n,e,t,i){e.child=n===null?zv(e,null,t,i):Ia(e,n.child,t,i)}function Fg(n,e,t,i,r){t=t.render;var s=e.ref;return Ea(e,r),i=zp(n,e,t,i,s,r),t=Bp(),n!==null&&!xn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,tr(n,e,r)):(mt&&t&&Ap(e),e.flags|=1,on(n,e,i,r),e.child)}function kg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Kp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,fx(n,e,s,i,r)):(n=Rc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Zo,t(a,i)&&n.ref===e.ref)return tr(n,e,r)}return e.flags|=1,n=Nr(s,i),n.ref=e.ref,n.return=e,e.child=n}function fx(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Zo(s,i)&&n.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(xn=!0);else return e.lanes=n.lanes,tr(n,e,r)}return Wd(n,e,t,i,r)}function dx(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(pa,In),In|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ct(pa,In),In|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ct(pa,In),In|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ct(pa,In),In|=i;return on(n,e,r,t),e.child}function hx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Wd(n,e,t,i,r){var s=Mn(t)?Ts:rn.current;return s=Da(e,s),Ea(e,r),t=zp(n,e,t,i,s,r),i=Bp(),n!==null&&!xn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,tr(n,e,r)):(mt&&i&&Ap(e),e.flags|=1,on(n,e,t,r),e.child)}function zg(n,e,t,i,r){if(Mn(t)){var s=!0;Kc(e)}else s=!1;if(Ea(e,r),e.stateNode===null)Tc(n,e),lx(e,t,i),Hd(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=ii(c):(c=Mn(t)?Ts:rn.current,c=Da(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Ng(e,a,i,c),_r=!1;var d=e.memoizedState;a.state=d,tu(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Sn.current||_r?(typeof u=="function"&&(Gd(e,t,u,i),l=e.memoizedState),(o=_r||Dg(e,t,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Gv(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:fi(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=ii(l):(l=Mn(t)?Ts:rn.current,l=Da(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&Ng(e,a,i,l),_r=!1,d=e.memoizedState,a.state=d,tu(e,i,a,r);var _=e.memoizedState;o!==f||d!==_||Sn.current||_r?(typeof p=="function"&&(Gd(e,t,p,i),_=e.memoizedState),(c=_r||Dg(e,t,c,i,d,_,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return jd(n,e,t,i,s,r)}function jd(n,e,t,i,r,s){hx(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&wg(e,t,!1),tr(n,e,s);i=e.stateNode,yM.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Ia(e,n.child,null,s),e.child=Ia(e,null,o,s)):on(n,e,o,s),e.memoizedState=i.state,r&&wg(e,t,!0),e.child}function px(n){var e=n.stateNode;e.pendingContext?Eg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Eg(n,e.context,!1),Up(n,e.containerInfo)}function Bg(n,e,t,i,r){return Na(),Cp(r),e.flags|=256,on(n,e,t,i),e.child}var Xd={dehydrated:null,treeContext:null,retryLane:0};function Yd(n){return{baseLanes:n,cachePool:null,transitions:null}}function mx(n,e,t){var i=e.pendingProps,r=vt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ct(vt,r&1),n===null)return zd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Nu(a,i,0,null),n=xs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Yd(t),e.memoizedState=Xd,n):Vp(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return SM(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Nr(o,s):(s=xs(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Yd(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Xd,i}return s=n.child,n=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Vp(n,e){return e=Nu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Gl(n,e,t,i){return i!==null&&Cp(i),Ia(e,n.child,null,t),n=Vp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function SM(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=xf(Error(ne(422))),Gl(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Nu({mode:"visible",children:i.children},r,0,null),s=xs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ia(e,n.child,null,a),e.child.memoizedState=Yd(a),e.memoizedState=Xd,s);if(!(e.mode&1))return Gl(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=xf(s,i,void 0),Gl(n,e,a,i)}if(o=(a&n.childLanes)!==0,xn||o){if(i=Bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,er(n,r),yi(i,n,r,-1))}return $p(),i=xf(Error(ne(421))),Gl(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=IM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,kn=Cr(r.nextSibling),Gn=e,mt=!0,mi=null,n!==null&&(Zn[Qn++]=Yi,Zn[Qn++]=qi,Zn[Qn++]=bs,Yi=n.id,qi=n.overflow,bs=e),e=Vp(e,i.children),e.flags|=4096,e)}function Gg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Bd(n.return,e,t)}function yf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function gx(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(n,e,i.children,t),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Gg(n,t,e);else if(n.tag===19)Gg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ct(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&nu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),yf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&nu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}yf(e,!0,t,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function tr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Rs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=Nr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Nr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function MM(n,e,t){switch(e.tag){case 3:px(e),Na();break;case 5:Hv(e);break;case 1:Mn(e.type)&&Kc(e);break;case 4:Up(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(Jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(vt,vt.current&1),e.flags|=128,null):t&e.child.childLanes?mx(n,e,t):(ct(vt,vt.current&1),n=tr(n,e,t),n!==null?n.sibling:null);ct(vt,vt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return gx(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,dx(n,e,t)}return tr(n,e,t)}var _x,qd,vx,xx;_x=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};qd=function(){};vx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ps(Di.current);var s=null;switch(t){case"input":r=gd(n,r),i=gd(n,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=xd(n,r),i=xd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=qc)}Sd(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};xx=function(n,e,t,i){t!==i&&(e.flags|=4)};function lo(n,e){if(!mt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Zt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function EM(n,e,t){var i=e.pendingProps;switch(Rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return Mn(e.type)&&$c(),Zt(e),null;case 3:return i=e.stateNode,Ua(),pt(Sn),pt(rn),Fp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(zl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mi!==null&&(nh(mi),mi=null))),qd(n,e),Zt(e),null;case 5:Op(e);var r=ps(nl.current);if(t=e.type,n!==null&&e.stateNode!=null)vx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Zt(e),null}if(n=ps(Di.current),zl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[bi]=e,i[el]=s,n=(e.mode&1)!==0,t){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)dt(wo[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":Km(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":Qm(i,s),dt("invalid",i)}Sd(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&kl(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&kl(i.textContent,o,n),r=["children",""+o]):Wo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(t){case"input":Pl(i),Zm(i,s,!0);break;case"textarea":Pl(i),Jm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=qc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Y_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[bi]=e,n[el]=i,_x(n,e,!1,!1),e.stateNode=n;e:{switch(a=Md(t,i),t){case"dialog":dt("cancel",n),dt("close",n),r=i;break;case"iframe":case"object":case"embed":dt("load",n),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)dt(wo[r],n);r=i;break;case"source":dt("error",n),r=i;break;case"img":case"image":case"link":dt("error",n),dt("load",n),r=i;break;case"details":dt("toggle",n),r=i;break;case"input":Km(n,i),r=gd(n,i),dt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),dt("invalid",n);break;case"textarea":Qm(n,i),r=xd(n,i),dt("invalid",n);break;default:r=i}Sd(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?K_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&q_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&jo(n,l):typeof l=="number"&&jo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",n):l!=null&&hp(n,s,l,a))}switch(t){case"input":Pl(n),Zm(n,i,!1);break;case"textarea":Pl(n),Jm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+kr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?xa(n,!!i.multiple,s,!1):i.defaultValue!=null&&xa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=qc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(n&&e.stateNode!=null)xx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=ps(nl.current),ps(Di.current),zl(e)){if(i=e.stateNode,t=e.memoizedProps,i[bi]=e,(s=i.nodeValue!==t)&&(n=Gn,n!==null))switch(n.tag){case 3:kl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&kl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[bi]=e,e.stateNode=i}return Zt(e),null;case 13:if(pt(vt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(mt&&kn!==null&&e.mode&1&&!(e.flags&128))Fv(),Na(),e.flags|=98560,s=!1;else if(s=zl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[bi]=e}else Na(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else mi!==null&&(nh(mi),mi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||vt.current&1?It===0&&(It=3):$p())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Ua(),qd(n,e),n===null&&Qo(e.stateNode.containerInfo),Zt(e),null;case 10:return Dp(e.type._context),Zt(e),null;case 17:return Mn(e.type)&&$c(),Zt(e),null;case 19:if(pt(vt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)lo(s,!1);else{if(It!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=nu(n),a!==null){for(e.flags|=128,lo(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ct(vt,vt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Rt()>Fa&&(e.flags|=128,i=!0,lo(s,!1),e.lanes=4194304)}else{if(!i)if(n=nu(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return Zt(e),null}else 2*Rt()-s.renderingStartTime>Fa&&t!==1073741824&&(e.flags|=128,i=!0,lo(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,t=vt.current,ct(vt,i?t&1|2:t&1),e):(Zt(e),null);case 22:case 23:return qp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?In&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function wM(n,e){switch(Rp(e),e.tag){case 1:return Mn(e.type)&&$c(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ua(),pt(Sn),pt(rn),Fp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Op(e),null;case 13:if(pt(vt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Na()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return pt(vt),null;case 4:return Ua(),null;case 10:return Dp(e.type._context),null;case 22:case 23:return qp(),null;case 24:return null;default:return null}}var Hl=!1,en=!1,TM=typeof WeakSet=="function"?WeakSet:Set,ge=null;function ha(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){wt(n,e,i)}else t.current=null}function $d(n,e,t){try{t()}catch(i){wt(n,e,i)}}var Hg=!1;function bM(n,e){if(Dd=jc,n=wv(),bp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Nd={focusedElem:n,selectionRange:t},jc=!1,ge=e;ge!==null;)if(e=ge,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ge=n;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:fi(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){wt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}return _=Hg,Hg=!1,_}function Io(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&$d(e,t,s)}r=r.next}while(r!==i)}}function Lu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Kd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function yx(n){var e=n.alternate;e!==null&&(n.alternate=null,yx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[bi],delete e[el],delete e[Od],delete e[lM],delete e[cM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sx(n){return n.tag===5||n.tag===3||n.tag===4}function Vg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=qc));else if(i!==4&&(n=n.child,n!==null))for(Zd(n,e,t),n=n.sibling;n!==null;)Zd(n,e,t),n=n.sibling}function Qd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Qd(n,e,t),n=n.sibling;n!==null;)Qd(n,e,t),n=n.sibling}var Wt=null,di=!1;function lr(n,e,t){for(t=t.child;t!==null;)Mx(n,e,t),t=t.sibling}function Mx(n,e,t){if(Li&&typeof Li.onCommitFiberUnmount=="function")try{Li.onCommitFiberUnmount(Eu,t)}catch{}switch(t.tag){case 5:en||ha(t,e);case 6:var i=Wt,r=di;Wt=null,lr(n,e,t),Wt=i,di=r,Wt!==null&&(di?(n=Wt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Wt.removeChild(t.stateNode));break;case 18:Wt!==null&&(di?(n=Wt,t=t.stateNode,n.nodeType===8?hf(n.parentNode,t):n.nodeType===1&&hf(n,t),$o(n)):hf(Wt,t.stateNode));break;case 4:i=Wt,r=di,Wt=t.stateNode.containerInfo,di=!0,lr(n,e,t),Wt=i,di=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&$d(t,e,a),r=r.next}while(r!==i)}lr(n,e,t);break;case 1:if(!en&&(ha(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){wt(t,e,o)}lr(n,e,t);break;case 21:lr(n,e,t);break;case 22:t.mode&1?(en=(i=en)||t.memoizedState!==null,lr(n,e,t),en=i):lr(n,e,t);break;default:lr(n,e,t)}}function Wg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new TM),e.forEach(function(i){var r=UM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ai(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Wt=o.stateNode,di=!1;break e;case 3:Wt=o.stateNode.containerInfo,di=!0;break e;case 4:Wt=o.stateNode.containerInfo,di=!0;break e}o=o.return}if(Wt===null)throw Error(ne(160));Mx(s,a,r),Wt=null,di=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ex(e,n),e=e.sibling}function Ex(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(e,n),Mi(n),i&4){try{Io(3,n,n.return),Lu(3,n)}catch(g){wt(n,n.return,g)}try{Io(5,n,n.return)}catch(g){wt(n,n.return,g)}}break;case 1:ai(e,n),Mi(n),i&512&&t!==null&&ha(t,t.return);break;case 5:if(ai(e,n),Mi(n),i&512&&t!==null&&ha(t,t.return),n.flags&32){var r=n.stateNode;try{jo(r,"")}catch(g){wt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&j_(r,s),Md(o,a);var c=Md(o,s);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?K_(r,f):u==="dangerouslySetInnerHTML"?q_(r,f):u==="children"?jo(r,f):hp(r,u,f,c)}switch(o){case"input":_d(r,s);break;case"textarea":X_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?xa(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?xa(r,!!s.multiple,s.defaultValue,!0):xa(r,!!s.multiple,s.multiple?[]:"",!1))}r[el]=s}catch(g){wt(n,n.return,g)}}break;case 6:if(ai(e,n),Mi(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){wt(n,n.return,g)}}break;case 3:if(ai(e,n),Mi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(g){wt(n,n.return,g)}break;case 4:ai(e,n),Mi(n);break;case 13:ai(e,n),Mi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xp=Rt())),i&4&&Wg(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(en=(c=en)||u,ai(e,n),en=c):ai(e,n),Mi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(ge=n,u=n.child;u!==null;){for(f=ge=u;ge!==null;){switch(d=ge,p=d.child,d.tag){case 0:case 11:case 14:case 15:Io(4,d,d.return);break;case 1:ha(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){wt(i,t,g)}}break;case 5:ha(d,d.return);break;case 22:if(d.memoizedState!==null){Xg(f);continue}}p!==null?(p.return=d,ge=p):Xg(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=$_("display",a))}catch(g){wt(n,n.return,g)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){wt(n,n.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ai(e,n),Mi(n),i&4&&Wg(n);break;case 21:break;default:ai(e,n),Mi(n)}}function Mi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Sx(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(jo(r,""),i.flags&=-33);var s=Vg(n);Qd(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Vg(n);Zd(n,o,a);break;default:throw Error(ne(161))}}catch(l){wt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function AM(n,e,t){ge=n,wx(n)}function wx(n,e,t){for(var i=(n.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Hl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||en;o=Hl;var c=en;if(Hl=a,(en=l)&&!c)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?Yg(r):l!==null?(l.return=a,ge=l):Yg(r);for(;s!==null;)ge=s,wx(s),s=s.sibling;ge=r,Hl=o,en=c}jg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):jg(n)}}function jg(n){for(;ge!==null;){var e=ge;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||Lu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:fi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cg(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Cg(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&$o(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}en||e.flags&512&&Kd(e)}catch(d){wt(e,e.return,d)}}if(e===n){ge=null;break}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}}function Xg(n){for(;ge!==null;){var e=ge;if(e===n){ge=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ge=t;break}ge=e.return}}function Yg(n){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Lu(4,e)}catch(l){wt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Kd(e)}catch(l){wt(e,s,l)}break;case 5:var a=e.return;try{Kd(e)}catch(l){wt(e,a,l)}}}catch(l){wt(e,e.return,l)}if(e===n){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var RM=Math.ceil,su=ar.ReactCurrentDispatcher,Wp=ar.ReactCurrentOwner,ni=ar.ReactCurrentBatchConfig,Xe=0,Bt=null,Dt=null,Yt=0,In=0,pa=jr(0),It=0,al=null,Rs=0,Du=0,jp=0,Uo=null,_n=null,Xp=0,Fa=1/0,Hi=null,au=!1,Jd=null,Lr=null,Vl=!1,Mr=null,ou=0,Oo=0,eh=null,bc=-1,Ac=0;function cn(){return Xe&6?Rt():bc!==-1?bc:bc=Rt()}function Dr(n){return n.mode&1?Xe&2&&Yt!==0?Yt&-Yt:fM.transition!==null?(Ac===0&&(Ac=lv()),Ac):(n=tt,n!==0||(n=window.event,n=n===void 0?16:mv(n.type)),n):1}function yi(n,e,t,i){if(50<Oo)throw Oo=0,eh=null,Error(ne(185));vl(n,t,i),(!(Xe&2)||n!==Bt)&&(n===Bt&&(!(Xe&2)&&(Du|=t),It===4&&xr(n,Yt)),En(n,i),t===1&&Xe===0&&!(e.mode&1)&&(Fa=Rt()+500,Ru&&Xr()))}function En(n,e){var t=n.callbackNode;fS(n,e);var i=Wc(n,n===Bt?Yt:0);if(i===0)t!==null&&ng(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&ng(t),e===1)n.tag===0?uM(qg.bind(null,n)):Iv(qg.bind(null,n)),aM(function(){!(Xe&6)&&Xr()}),t=null;else{switch(cv(i)){case 1:t=vp;break;case 4:t=av;break;case 16:t=Vc;break;case 536870912:t=ov;break;default:t=Vc}t=Dx(t,Tx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Tx(n,e){if(bc=-1,Ac=0,Xe&6)throw Error(ne(327));var t=n.callbackNode;if(wa()&&n.callbackNode!==t)return null;var i=Wc(n,n===Bt?Yt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=lu(n,i);else{e=i;var r=Xe;Xe|=2;var s=Ax();(Bt!==n||Yt!==e)&&(Hi=null,Fa=Rt()+500,vs(n,e));do try{LM();break}catch(o){bx(n,o)}while(!0);Lp(),su.current=s,Xe=r,Dt!==null?e=0:(Bt=null,Yt=0,e=It)}if(e!==0){if(e===2&&(r=Ad(n),r!==0&&(i=r,e=th(n,r))),e===1)throw t=al,vs(n,0),xr(n,i),En(n,Rt()),t;if(e===6)xr(n,i);else{if(r=n.current.alternate,!(i&30)&&!CM(r)&&(e=lu(n,i),e===2&&(s=Ad(n),s!==0&&(i=s,e=th(n,s))),e===1))throw t=al,vs(n,0),xr(n,i),En(n,Rt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:ss(n,_n,Hi);break;case 3:if(xr(n,i),(i&130023424)===i&&(e=Xp+500-Rt(),10<e)){if(Wc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){cn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ud(ss.bind(null,n,_n,Hi),e);break}ss(n,_n,Hi);break;case 4:if(xr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-xi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*RM(i/1960))-i,10<i){n.timeoutHandle=Ud(ss.bind(null,n,_n,Hi),i);break}ss(n,_n,Hi);break;case 5:ss(n,_n,Hi);break;default:throw Error(ne(329))}}}return En(n,Rt()),n.callbackNode===t?Tx.bind(null,n):null}function th(n,e){var t=Uo;return n.current.memoizedState.isDehydrated&&(vs(n,e).flags|=256),n=lu(n,e),n!==2&&(e=_n,_n=t,e!==null&&nh(e)),n}function nh(n){_n===null?_n=n:_n.push.apply(_n,n)}function CM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Si(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(n,e){for(e&=~jp,e&=~Du,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-xi(e),i=1<<t;n[t]=-1,e&=~i}}function qg(n){if(Xe&6)throw Error(ne(327));wa();var e=Wc(n,0);if(!(e&1))return En(n,Rt()),null;var t=lu(n,e);if(n.tag!==0&&t===2){var i=Ad(n);i!==0&&(e=i,t=th(n,i))}if(t===1)throw t=al,vs(n,0),xr(n,e),En(n,Rt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ss(n,_n,Hi),En(n,Rt()),null}function Yp(n,e){var t=Xe;Xe|=1;try{return n(e)}finally{Xe=t,Xe===0&&(Fa=Rt()+500,Ru&&Xr())}}function Cs(n){Mr!==null&&Mr.tag===0&&!(Xe&6)&&wa();var e=Xe;Xe|=1;var t=ni.transition,i=tt;try{if(ni.transition=null,tt=1,n)return n()}finally{tt=i,ni.transition=t,Xe=e,!(Xe&6)&&Xr()}}function qp(){In=pa.current,pt(pa)}function vs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,sM(t)),Dt!==null)for(t=Dt.return;t!==null;){var i=t;switch(Rp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$c();break;case 3:Ua(),pt(Sn),pt(rn),Fp();break;case 5:Op(i);break;case 4:Ua();break;case 13:pt(vt);break;case 19:pt(vt);break;case 10:Dp(i.type._context);break;case 22:case 23:qp()}t=t.return}if(Bt=n,Dt=n=Nr(n.current,null),Yt=In=e,It=0,al=null,jp=Du=Rs=0,_n=Uo=null,hs!==null){for(e=0;e<hs.length;e++)if(t=hs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}hs=null}return n}function bx(n,e){do{var t=Dt;try{if(Lp(),Ec.current=ru,iu){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}iu=!1}if(As=0,zt=Nt=St=null,No=!1,il=0,Wp.current=null,t===null||t.return===null){It=1,al=e,Dt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=Yt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Ug(a);if(p!==null){p.flags&=-257,Og(p,a,o,s,e),p.mode&1&&Ig(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){Ig(s,c,e),$p();break e}l=Error(ne(426))}}else if(mt&&o.mode&1){var m=Ug(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Og(m,a,o,s,e),Cp(Oa(l,o));break e}}s=l=Oa(l,o),It!==4&&(It=2),Uo===null?Uo=[s]:Uo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=cx(s,l,e);Rg(s,h);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Lr===null||!Lr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ux(s,o,e);Rg(s,S);break e}}s=s.return}while(s!==null)}Cx(t)}catch(b){e=b,Dt===t&&t!==null&&(Dt=t=t.return);continue}break}while(!0)}function Ax(){var n=su.current;return su.current=ru,n===null?ru:n}function $p(){(It===0||It===3||It===2)&&(It=4),Bt===null||!(Rs&268435455)&&!(Du&268435455)||xr(Bt,Yt)}function lu(n,e){var t=Xe;Xe|=2;var i=Ax();(Bt!==n||Yt!==e)&&(Hi=null,vs(n,e));do try{PM();break}catch(r){bx(n,r)}while(!0);if(Lp(),Xe=t,su.current=i,Dt!==null)throw Error(ne(261));return Bt=null,Yt=0,It}function PM(){for(;Dt!==null;)Rx(Dt)}function LM(){for(;Dt!==null&&!nS();)Rx(Dt)}function Rx(n){var e=Lx(n.alternate,n,In);n.memoizedProps=n.pendingProps,e===null?Cx(n):Dt=e,Wp.current=null}function Cx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=wM(t,e),t!==null){t.flags&=32767,Dt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{It=6,Dt=null;return}}else if(t=EM(t,e,In),t!==null){Dt=t;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=n}while(e!==null);It===0&&(It=5)}function ss(n,e,t){var i=tt,r=ni.transition;try{ni.transition=null,tt=1,DM(n,e,t,i)}finally{ni.transition=r,tt=i}return null}function DM(n,e,t,i){do wa();while(Mr!==null);if(Xe&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(dS(n,s),n===Bt&&(Dt=Bt=null,Yt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Vl||(Vl=!0,Dx(Vc,function(){return wa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ni.transition,ni.transition=null;var a=tt;tt=1;var o=Xe;Xe|=4,Wp.current=null,bM(n,t),Ex(t,n),QS(Nd),jc=!!Dd,Nd=Dd=null,n.current=t,AM(t),iS(),Xe=o,tt=a,ni.transition=s}else n.current=t;if(Vl&&(Vl=!1,Mr=n,ou=r),s=n.pendingLanes,s===0&&(Lr=null),aS(t.stateNode),En(n,Rt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(au)throw au=!1,n=Jd,Jd=null,n;return ou&1&&n.tag!==0&&wa(),s=n.pendingLanes,s&1?n===eh?Oo++:(Oo=0,eh=n):Oo=0,Xr(),null}function wa(){if(Mr!==null){var n=cv(ou),e=ni.transition,t=tt;try{if(ni.transition=null,tt=16>n?16:n,Mr===null)var i=!1;else{if(n=Mr,Mr=null,ou=0,Xe&6)throw Error(ne(331));var r=Xe;for(Xe|=4,ge=n.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var u=ge;switch(u.tag){case 0:case 11:case 15:Io(8,u,s)}var f=u.child;if(f!==null)f.return=u,ge=f;else for(;ge!==null;){u=ge;var d=u.sibling,p=u.return;if(yx(u),u===c){ge=null;break}if(d!==null){d.return=p,ge=d;break}ge=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ge=h;break e}ge=s.return}}var v=n.current;for(ge=v;ge!==null;){a=ge;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ge=x;else e:for(a=v;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Lu(9,o)}}catch(b){wt(o,o.return,b)}if(o===a){ge=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ge=S;break e}ge=o.return}}if(Xe=r,Xr(),Li&&typeof Li.onPostCommitFiberRoot=="function")try{Li.onPostCommitFiberRoot(Eu,n)}catch{}i=!0}return i}finally{tt=t,ni.transition=e}}return!1}function $g(n,e,t){e=Oa(t,e),e=cx(n,e,1),n=Pr(n,e,1),e=cn(),n!==null&&(vl(n,1,e),En(n,e))}function wt(n,e,t){if(n.tag===3)$g(n,n,t);else for(;e!==null;){if(e.tag===3){$g(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Lr===null||!Lr.has(i))){n=Oa(t,n),n=ux(e,n,1),e=Pr(e,n,1),n=cn(),e!==null&&(vl(e,1,n),En(e,n));break}}e=e.return}}function NM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=cn(),n.pingedLanes|=n.suspendedLanes&t,Bt===n&&(Yt&t)===t&&(It===4||It===3&&(Yt&130023424)===Yt&&500>Rt()-Xp?vs(n,0):jp|=t),En(n,e)}function Px(n,e){e===0&&(n.mode&1?(e=Nl,Nl<<=1,!(Nl&130023424)&&(Nl=4194304)):e=1);var t=cn();n=er(n,e),n!==null&&(vl(n,e,t),En(n,t))}function IM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Px(n,t)}function UM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Px(n,t)}var Lx;Lx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Sn.current)xn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return xn=!1,MM(n,e,t);xn=!!(n.flags&131072)}else xn=!1,mt&&e.flags&1048576&&Uv(e,Qc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Tc(n,e),n=e.pendingProps;var r=Da(e,rn.current);Ea(e,t),r=zp(null,e,i,n,r,t);var s=Bp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,Kc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ip(e),r.updater=Pu,e.stateNode=r,r._reactInternals=e,Hd(e,i,n,t),e=jd(null,e,i,!0,s,t)):(e.tag=0,mt&&s&&Ap(e),on(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Tc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=FM(i),n=fi(i,n),r){case 0:e=Wd(null,e,i,n,t);break e;case 1:e=zg(null,e,i,n,t);break e;case 11:e=Fg(null,e,i,n,t);break e;case 14:e=kg(null,e,i,fi(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Wd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),zg(n,e,i,r,t);case 3:e:{if(px(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gv(n,e),tu(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Oa(Error(ne(423)),e),e=Bg(n,e,i,t,r);break e}else if(i!==r){r=Oa(Error(ne(424)),e),e=Bg(n,e,i,t,r);break e}else for(kn=Cr(e.stateNode.containerInfo.firstChild),Gn=e,mt=!0,mi=null,t=zv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Na(),i===r){e=tr(n,e,t);break e}on(n,e,i,t)}e=e.child}return e;case 5:return Hv(e),n===null&&zd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Id(i,r)?a=null:s!==null&&Id(i,s)&&(e.flags|=32),hx(n,e),on(n,e,a,t),e.child;case 6:return n===null&&zd(e),null;case 13:return mx(n,e,t);case 4:return Up(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ia(e,null,i,t):on(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Fg(n,e,i,r,t);case 7:return on(n,e,e.pendingProps,t),e.child;case 8:return on(n,e,e.pendingProps.children,t),e.child;case 12:return on(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(Jc,i._currentValue),i._currentValue=a,s!==null)if(Si(s.value,a)){if(s.children===r.children&&!Sn.current){e=tr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Zi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Bd(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Bd(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}on(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ea(e,t),r=ii(r),i=i(r),e.flags|=1,on(n,e,i,t),e.child;case 14:return i=e.type,r=fi(i,e.pendingProps),r=fi(i.type,r),kg(n,e,i,r,t);case 15:return fx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Tc(n,e),e.tag=1,Mn(i)?(n=!0,Kc(e)):n=!1,Ea(e,t),lx(e,i,r),Hd(e,i,r,t),jd(null,e,i,!0,n,t);case 19:return gx(n,e,t);case 22:return dx(n,e,t)}throw Error(ne(156,e.tag))};function Dx(n,e){return sv(n,e)}function OM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,e,t,i){return new OM(n,e,t,i)}function Kp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function FM(n){if(typeof n=="function")return Kp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===mp)return 11;if(n===gp)return 14}return 2}function Nr(n,e){var t=n.alternate;return t===null?(t=Jn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Rc(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Kp(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case ra:return xs(t.children,r,s,e);case pp:a=8,r|=8;break;case dd:return n=Jn(12,t,e,r|2),n.elementType=dd,n.lanes=s,n;case hd:return n=Jn(13,t,e,r),n.elementType=hd,n.lanes=s,n;case pd:return n=Jn(19,t,e,r),n.elementType=pd,n.lanes=s,n;case H_:return Nu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B_:a=10;break e;case G_:a=9;break e;case mp:a=11;break e;case gp:a=14;break e;case gr:a=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Jn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function xs(n,e,t,i){return n=Jn(7,n,i,e),n.lanes=t,n}function Nu(n,e,t,i){return n=Jn(22,n,i,e),n.elementType=H_,n.lanes=t,n.stateNode={isHidden:!1},n}function Sf(n,e,t){return n=Jn(6,n,null,e),n.lanes=t,n}function Mf(n,e,t){return e=Jn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function kM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tf(0),this.expirationTimes=tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zp(n,e,t,i,r,s,a,o,l){return n=new kM(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ip(s),n}function zM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ia,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Nx(n){if(!n)return zr;n=n._reactInternals;e:{if(Ns(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(Mn(t))return Nv(n,t,e)}return e}function Ix(n,e,t,i,r,s,a,o,l){return n=Zp(t,i,!0,n,r,s,a,o,l),n.context=Nx(null),t=n.current,i=cn(),r=Dr(t),s=Zi(i,r),s.callback=e??null,Pr(t,s,r),n.current.lanes=r,vl(n,r,i),En(n,i),n}function Iu(n,e,t,i){var r=e.current,s=cn(),a=Dr(r);return t=Nx(t),e.context===null?e.context=t:e.pendingContext=t,e=Zi(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Pr(r,e,a),n!==null&&(yi(n,r,a,s),Mc(n,r,a)),a}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Kg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Qp(n,e){Kg(n,e),(n=n.alternate)&&Kg(n,e)}function BM(){return null}var Ux=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jp(n){this._internalRoot=n}Uu.prototype.render=Jp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Iu(n,e,null,null)};Uu.prototype.unmount=Jp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Cs(function(){Iu(null,n,null,null)}),e[Ji]=null}};function Uu(n){this._internalRoot=n}Uu.prototype.unstable_scheduleHydration=function(n){if(n){var e=dv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<vr.length&&e!==0&&e<vr[t].priority;t++);vr.splice(t,0,n),t===0&&pv(n)}};function em(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zg(){}function GM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=cu(a);s.call(c)}}var a=Ix(e,i,n,0,null,!1,!1,"",Zg);return n._reactRootContainer=a,n[Ji]=a.current,Qo(n.nodeType===8?n.parentNode:n),Cs(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=cu(l);o.call(c)}}var l=Zp(n,0,!1,null,null,!1,!1,"",Zg);return n._reactRootContainer=l,n[Ji]=l.current,Qo(n.nodeType===8?n.parentNode:n),Cs(function(){Iu(e,l,t,i)}),l}function Fu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=cu(a);o.call(l)}}Iu(e,a,n,r)}else a=GM(t,e,n,r,i);return cu(a)}uv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Eo(e.pendingLanes);t!==0&&(xp(e,t|1),En(e,Rt()),!(Xe&6)&&(Fa=Rt()+500,Xr()))}break;case 13:Cs(function(){var i=er(n,1);if(i!==null){var r=cn();yi(i,n,1,r)}}),Qp(n,1)}};yp=function(n){if(n.tag===13){var e=er(n,134217728);if(e!==null){var t=cn();yi(e,n,134217728,t)}Qp(n,134217728)}};fv=function(n){if(n.tag===13){var e=Dr(n),t=er(n,e);if(t!==null){var i=cn();yi(t,n,e,i)}Qp(n,e)}};dv=function(){return tt};hv=function(n,e){var t=tt;try{return tt=n,e()}finally{tt=t}};wd=function(n,e,t){switch(e){case"input":if(_d(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Au(i);if(!r)throw Error(ne(90));W_(i),_d(i,r)}}}break;case"textarea":X_(n,t);break;case"select":e=t.value,e!=null&&xa(n,!!t.multiple,e,!1)}};J_=Yp;ev=Cs;var HM={usingClientEntryPoint:!1,Events:[yl,la,Au,Z_,Q_,Yp]},co={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VM={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=iv(n),n===null?null:n.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||BM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Eu=Wl.inject(VM),Li=Wl}catch{}}Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HM;Xn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!em(e))throw Error(ne(200));return zM(n,e,null,t)};Xn.createRoot=function(n,e){if(!em(n))throw Error(ne(299));var t=!1,i="",r=Ux;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zp(n,1,!1,null,null,t,!1,i,r),n[Ji]=e.current,Qo(n.nodeType===8?n.parentNode:n),new Jp(e)};Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=iv(e),n=n===null?null:n.stateNode,n};Xn.flushSync=function(n){return Cs(n)};Xn.hydrate=function(n,e,t){if(!Ou(e))throw Error(ne(200));return Fu(null,n,e,!0,t)};Xn.hydrateRoot=function(n,e,t){if(!em(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=Ux;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=Ix(e,null,n,1,t??null,r,!1,s,a),n[Ji]=e.current,Qo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Uu(e)};Xn.render=function(n,e,t){if(!Ou(e))throw Error(ne(200));return Fu(null,n,e,!1,t)};Xn.unmountComponentAtNode=function(n){if(!Ou(n))throw Error(ne(40));return n._reactRootContainer?(Cs(function(){Fu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ji]=null})}),!0):!1};Xn.unstable_batchedUpdates=Yp;Xn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ou(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return Fu(n,e,t,!1,i)};Xn.version="18.3.1-next-f1338f8080-20240426";function Ox(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ox)}catch(n){console.error(n)}}Ox(),O_.exports=Xn;var WM=O_.exports,Qg=WM;ud.createRoot=Qg.createRoot,ud.hydrateRoot=Qg.hydrateRoot;function jM({onComplete:n}){const[e,t]=oe.useState(0),[i,r]=oe.useState(0);return oe.useEffect(()=>{const s=setTimeout(()=>t(1),800),a=setTimeout(()=>t(2),2e3),o=setInterval(()=>{r(c=>Math.min(100,c+Math.random()*15))},200),l=setTimeout(()=>{clearInterval(o),r(100),setTimeout(n,500)},2800);return()=>{clearTimeout(s),clearTimeout(a),clearTimeout(l),clearInterval(o)}},[n]),M.jsxs("div",{style:cr.overlay,children:[[...Array(8)].map((s,a)=>M.jsx("div",{style:{...cr.petal,left:`${10+a*11}%`,animationDelay:`${a*.3}s`,animationDuration:`${3+a%3}s`}},a)),M.jsxs("div",{style:cr.content,children:[e<2?M.jsx("p",{style:cr.text,children:e===0?"Preparing something slightly ridiculous... 🌹":"Almost there..."}):M.jsx("p",{style:cr.text,children:"Ready! 🌹"}),M.jsx("div",{style:cr.barWrap,children:M.jsx("div",{style:{...cr.bar,width:`${i}%`}})}),M.jsxs("p",{style:cr.percent,children:[Math.round(i),"%"]})]})]})}const cr={overlay:{position:"fixed",inset:0,background:"radial-gradient(ellipse at center, #2a1040 0%, #1a0a1f 100%)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,overflow:"hidden"},content:{textAlign:"center",zIndex:2},text:{fontFamily:"var(--font-hand)",fontSize:"clamp(1.3rem, 4vw, 2rem)",color:"#ffb085",marginBottom:"1.5rem",opacity:.9},barWrap:{width:"min(280px, 60vw)",height:"3px",background:"rgba(255,255,255,0.1)",borderRadius:"999px",overflow:"hidden",margin:"0 auto"},bar:{height:"100%",background:"linear-gradient(90deg, #e63973, #ffd700)",borderRadius:"999px",transition:"width 0.3s ease"},percent:{fontFamily:"var(--font-serif)",fontSize:"0.85rem",color:"rgba(255,255,255,0.4)",marginTop:"0.5rem"},petal:{position:"absolute",bottom:"-20px",width:"14px",height:"14px",borderRadius:"50% 0 50% 50%",background:"linear-gradient(135deg, #e63973, #ff3b8d)",opacity:.5,animation:"float 4s ease-in-out infinite",transform:"rotate(45deg)",zIndex:1,filter:"blur(0.5px)",boxShadow:"0 0 10px rgba(230,57,115,0.3)",top:"auto",left:"0",animationName:"petalFall"}},Xt={recipientName:"Beautiful!",senderName:"Your slightly crazy friend",roseCount:100001,letterText:`Hey Beautiful! ❤️ 

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

— From your slightly crazy friend 🌹`,specialRoseMessages:{1:"It had to start somewhere. 🌹",100:"A hundred down... only 99,901 to go. 😂",1e3:"A thousand roses! Still going strong. 🌹",10001:"10,000 down... apparently I still wasn't done. 😂",25e3:"Quarter of the way there.",5e4:"Halfway there. Still ridiculous. 😂",75e3:"Three quarters done.",1e5:"So close...",100001:"You found the last one. 🌹"},hiddenMessages:{42:"The answer to everything — including why I made so many roses. 😂",12345:"Hope you're smiling right now. ❤️",77777:"Lucky rose! 🍀🌹",88888:"Forever and always. ❤️",99999:"Almost the last one... but not quite. 😂"}},XM=["🌹","✨","💌","🫶","🎂","💫","🌸","❤️","🥂","🌙","🦋","🎀"];function YM({onReveal:n}){const[e,t]=oe.useState("sealed"),[i,r]=oe.useState(0),[s,a]=oe.useState(!1),o=oe.useMemo(()=>Xt.letterText.split(/\n+/).map(u=>u.trim()).filter(Boolean),[]);oe.useEffect(()=>{if(e!=="open")return;r(0);const u=[];return o.forEach((f,d)=>{const p=window.setTimeout(()=>{r(d+1)},450+d*420);u.push(p)}),()=>{u.forEach(window.clearTimeout)}},[e,o]);const l=()=>{e==="sealed"&&(t("opening"),window.setTimeout(()=>{t("open")},950))},c=()=>{s||(a(!0),window.setTimeout(()=>{n()},1200))};return M.jsxs("main",{className:["intro-letter",`intro-letter--${e}`,s?"intro-letter--leaving":""].filter(Boolean).join(" "),children:[M.jsxs("div",{className:"letter-world",children:[M.jsx("div",{className:"letter-world__glow glow-one"}),M.jsx("div",{className:"letter-world__glow glow-two"}),M.jsx("div",{className:"letter-world__glow glow-three"}),M.jsx("div",{className:"letter-stars",children:Array.from({length:30}).map((u,f)=>M.jsx("span",{className:`letter-star star-${f+1}`,children:f%4===0?"✦":"·"},f))}),M.jsx("div",{className:"letter-emoji-field",children:XM.map((u,f)=>M.jsx("span",{className:`letter-emoji emoji-${f+1}`,children:u},`${u}-${f}`))})]}),M.jsxs("div",{className:"letter-intro",children:[M.jsx("span",{className:"letter-intro__eyebrow",children:"✦ something made especially for you ✦"}),M.jsx("p",{className:"letter-intro__name",children:Xt.recipientName})]}),e!=="open"&&M.jsxs("section",{className:"birthday-envelope",onClick:l,role:"button",tabIndex:0,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&l()},"aria-label":"Open birthday letter",children:[M.jsx("div",{className:"envelope-shadow"}),M.jsxs("div",{className:"envelope",children:[M.jsx("div",{className:"envelope-back"}),M.jsx("div",{className:"envelope-paper",children:M.jsx("span",{children:"For you ❤️"})}),M.jsx("div",{className:"envelope-front"}),M.jsx("div",{className:"envelope-flap",children:M.jsx("div",{className:"envelope-flap__inner"})}),M.jsx("div",{className:"wax-seal",children:M.jsx("span",{children:"🌹"})})]}),M.jsxs("div",{className:"envelope-caption",children:[M.jsx("span",{className:"envelope-caption__main",children:e==="sealed"?"There is a little something inside...":"Opening your letter..."}),e==="sealed"&&M.jsx("span",{className:"envelope-caption__hint",children:"tap the letter 💌"})]})]}),e==="open"&&M.jsxs("section",{className:"cinematic-letter","aria-label":"Birthday letter",children:[M.jsxs("div",{className:"cinematic-letter__top",children:[M.jsx("span",{children:"✦"}),M.jsxs("span",{children:["A LETTER FOR ",Xt.recipientName.toUpperCase()]}),M.jsx("span",{children:"✦"})]}),M.jsxs("div",{className:"cinematic-letter__body",children:[M.jsxs("p",{className:"letter-greeting",children:["Hey ",Xt.recipientName,"..."]}),M.jsxs("h1",{children:["Happy",M.jsx("span",{children:"Birthday"})]}),M.jsxs("div",{className:"letter-flower-line",children:[M.jsx("span",{children:"🌸"}),M.jsx("i",{}),M.jsx("span",{children:"🌹"}),M.jsx("i",{}),M.jsx("span",{children:"✨"})]}),M.jsx("div",{className:"personal-letter",children:o.map((u,f)=>M.jsx("p",{className:f<i?"paragraph-visible":"",children:u},`${f}-${u.slice(0,15)}`))}),M.jsxs("div",{className:["letter-sign-off",i===o.length?"letter-sign-off--visible":""].join(" "),children:[M.jsx("span",{children:"with a little craziness,"}),M.jsxs("strong",{children:[Xt.senderName," 🌹"]})]})]}),M.jsxs("div",{className:"letter-floating-note note-one",children:[M.jsx("span",{children:"👀"}),M.jsx("small",{children:"keep going..."})]}),M.jsxs("div",{className:"letter-floating-note note-two",children:[M.jsx("span",{children:"🫶"}),M.jsx("small",{children:"this part is important"})]})]}),e==="open"&&i===o.length&&M.jsxs("div",{className:"letter-next",children:[M.jsxs("div",{className:"letter-next__whisper",children:[M.jsx("span",{children:"✨"}),M.jsx("span",{children:"okay... that's enough sweetness."}),M.jsx("span",{children:"🌹"})]}),M.jsxs("button",{type:"button",className:"letter-next__button",onClick:c,children:[M.jsx("span",{children:"There's more..."}),M.jsx("strong",{children:"→"})]}),M.jsx("p",{children:"Don't leave yet 👀"})]}),s&&M.jsxs("div",{className:"letter-exit",children:[M.jsx("span",{children:"🌹"}),M.jsx("span",{children:"✨"}),M.jsx("span",{children:"💫"}),M.jsx("span",{children:"🌹"})]})]})}const qM=Array.from({length:28},(n,e)=>({id:e,left:`${e*37%100}%`,delay:`${e%9*.7}s`,duration:`${8+e%6*1.3}s`,size:`${7+e%4*3}px`,rotation:`${e*47%360}deg`})),$M=Array.from({length:42},(n,e)=>({id:e,left:`${e*53%100}%`,top:`${e*29%67}%`,delay:`${e%8*.45}s`,size:`${1+e%3}px`}));function KM({phase:n,onYes:e,onScared:t,onScaredConfirm:i,onApproachComplete:r,onOpened:s}){const[a,o]=oe.useState(0),[l,c]=oe.useState(0),[u,f]=oe.useState(!1),[d,p]=oe.useState(!1),_=oe.useRef(!1),g=oe.useRef(!1),m=oe.useRef(!1);oe.useEffect(()=>{if(n!=="approach"||_.current)return;_.current=!0;const v=performance.now(),x=6200;let S=0,b=!1;const R=()=>{b||(b=!0,o(1),f(!0),r())},E=C=>{const D=C-v,y=Math.min(D/x,1),w=y<.5?2*y*y:1-Math.pow(-2*y+2,2)/2;o(w),y<1?S=requestAnimationFrame(E):R()};return S=requestAnimationFrame(E),()=>{cancelAnimationFrame(S),_.current=!1}},[n,r]),oe.useEffect(()=>{n==="approach"&&(o(0),c(0),f(!1),p(!1),g.current=!1,m.current=!1),(n==="question"||n==="scared")&&(c(0),p(!1),g.current=!1,m.current=!1)},[n]),oe.useEffect(()=>{if(n!=="opening"){c(0),p(!1),g.current=!1,m.current=!1;return}if(g.current)return;g.current=!0,m.current=!1,f(!1),p(!0),c(0);const v=performance.now(),x=6200;let S=0,b=!1;const R=()=>{b||m.current||(m.current=!0,c(1),s())},E=C=>{if(b)return;const D=C-v,y=Math.min(D/x,1),w=1-Math.pow(1-y,3);c(w),y<1?S=requestAnimationFrame(E):R()};return S=requestAnimationFrame(E),()=>{b=!0,cancelAnimationFrame(S)}},[n,s]);const h=()=>n==="opening"?M.jsxs("div",{className:"rose-gate-opening-copy",children:[M.jsx("div",{className:"rose-gate-eyebrow",children:"BEYOND THIS DOOR"}),M.jsx("div",{className:"rose-gate-opening-title",children:"100,001"}),M.jsx("div",{className:"rose-gate-opening-subtitle",children:"little reasons to smile."})]}):n==="scared"?M.jsxs("div",{className:"rose-gate-question",children:[M.jsx("div",{className:"rose-gate-eyebrow",children:"HEY... DON'T BE SCARED"}),M.jsxs("h2",{children:["Maybe you just",M.jsx("br",{}),"need to be"," ",M.jsx("span",{children:"brave."})]}),M.jsxs("p",{children:["I promise...",M.jsx("br",{}),"there's nothing scary behind these doors."]}),M.jsxs("div",{className:"rose-gate-actions",children:[M.jsxs("button",{type:"button",className:"rose-gate-primary",onClick:()=>{i()},children:["Okay, I'll be brave",M.jsx("span",{children:" ✦"})]}),M.jsx("button",{type:"button",className:"rose-gate-secondary",onClick:()=>{e()},children:"Actually... open it anyway"})]})]}):n==="question"?M.jsxs("div",{className:"rose-gate-question",children:[M.jsx("div",{className:"rose-gate-eyebrow",children:"THERE'S SOMETHING FOR YOU"}),M.jsxs("h2",{children:["Will you open",M.jsx("br",{}),M.jsx("span",{children:"this door?"})]}),M.jsxs("p",{children:["I could tell you what's waiting inside...",M.jsx("br",{}),"but where's the fun in that?"]}),M.jsxs("div",{className:"rose-gate-actions",children:[M.jsxs("button",{type:"button",className:"rose-gate-primary",onClick:()=>{e()},children:["Open the doors",M.jsx("span",{children:" ✦"})]}),M.jsx("button",{type:"button",className:"rose-gate-secondary",onClick:()=>{t()},children:"I'm a little scared"})]})]}):M.jsxs("div",{className:"rose-gate-intro",children:[M.jsx("div",{className:"rose-gate-eyebrow",children:"SOMEWHERE BEYOND"}),M.jsxs("h1",{children:["There is a story",M.jsx("br",{}),M.jsx("span",{children:"waiting for you."})]}),M.jsx("p",{children:"Come a little closer..."})]});return M.jsxs("div",{className:"rose-gate-scene",children:[M.jsx("div",{className:"rose-gate-sky"}),M.jsx("div",{className:"rose-gate-moon",children:M.jsx("div",{className:"rose-gate-moon-core"})}),M.jsx("div",{className:"rose-gate-stars",children:$M.map(v=>M.jsx("span",{style:{left:v.left,top:v.top,width:v.size,height:v.size,animationDelay:v.delay}},v.id))}),M.jsx("div",{className:"rose-gate-horizon",children:M.jsxs("div",{className:"rose-gate-castle",children:[M.jsx("div",{className:"castle-tower castle-tower-left"}),M.jsx("div",{className:"castle-center"}),M.jsx("div",{className:"castle-tower castle-tower-right"})]})}),M.jsx("div",{className:"rose-gate-atmosphere"}),M.jsx("div",{className:"rose-gate-inside-light",style:{opacity:d?.95*l:0}}),M.jsxs("div",{className:"rose-gate-ground",children:[M.jsx("div",{className:"rose-gate-path"}),M.jsx("div",{className:"rose-gate-ground-glow"}),M.jsx("div",{className:"rose-gate-mist mist-one"}),M.jsx("div",{className:"rose-gate-mist mist-two"}),M.jsx("div",{className:"rose-gate-mist mist-three"})]}),M.jsx("div",{className:"rose-gate-petals",children:qM.map(v=>M.jsx("span",{style:{left:v.left,animationDelay:v.delay,animationDuration:v.duration,width:v.size,height:v.size,transform:`rotate(${v.rotation})`}},v.id))}),M.jsxs("div",{className:"rose-gate-architecture",style:{transform:`translateY(${(1-a)*9}%)`},children:[M.jsxs("div",{className:"rose-gate-pillar rose-gate-pillar-left",children:[M.jsxs("div",{className:"rose-gate-pillar-cap",children:[M.jsx("span",{}),M.jsx("span",{}),M.jsx("span",{})]}),M.jsxs("div",{className:"rose-gate-pillar-body",children:[M.jsx("div",{className:"pillar-stone stone-one"}),M.jsx("div",{className:"pillar-stone stone-two"}),M.jsx("div",{className:"pillar-stone stone-three"}),M.jsx("div",{className:"pillar-stone stone-four"}),M.jsx("div",{className:"pillar-lamp",children:M.jsx("div",{className:"lamp-flame"})}),M.jsx("div",{className:"pillar-rose rose-one",children:"🌹"}),M.jsx("div",{className:"pillar-rose rose-two",children:"🌹"})]}),M.jsx("div",{className:"rose-gate-pillar-base"})]}),M.jsxs("div",{className:"rose-gate-pillar rose-gate-pillar-right",children:[M.jsxs("div",{className:"rose-gate-pillar-cap",children:[M.jsx("span",{}),M.jsx("span",{}),M.jsx("span",{})]}),M.jsxs("div",{className:"rose-gate-pillar-body",children:[M.jsx("div",{className:"pillar-stone stone-one"}),M.jsx("div",{className:"pillar-stone stone-two"}),M.jsx("div",{className:"pillar-stone stone-three"}),M.jsx("div",{className:"pillar-stone stone-four"}),M.jsx("div",{className:"pillar-lamp",children:M.jsx("div",{className:"lamp-flame"})}),M.jsx("div",{className:"pillar-rose rose-one",children:"🌹"}),M.jsx("div",{className:"pillar-rose rose-two",children:"🌹"})]}),M.jsx("div",{className:"rose-gate-pillar-base"})]}),M.jsx("div",{className:"rose-gate-arch",children:M.jsx("div",{className:"rose-gate-arch-inner",children:M.jsxs("div",{className:"rose-gate-emblem",children:[M.jsx("div",{children:"100001"}),M.jsx("span",{children:"ROSES"})]})})}),M.jsx("div",{className:"rose-gate-door-wrap rose-gate-door-wrap-left",style:{transform:`perspective(1800px) rotateY(${78*l}deg)`},children:M.jsx("div",{className:"rose-gate-door",children:M.jsxs("div",{className:"door-frame",children:[M.jsx("div",{className:"door-panel panel-one"}),M.jsx("div",{className:"door-panel panel-two"}),M.jsx("div",{className:"door-panel panel-three"}),M.jsx("div",{className:"door-rose-pattern",children:"🌹"}),M.jsx("div",{className:"door-handle",children:M.jsx("span",{})}),M.jsx("div",{className:"door-metal-detail detail-top"}),M.jsx("div",{className:"door-metal-detail detail-bottom"})]})})}),M.jsx("div",{className:"rose-gate-door-wrap rose-gate-door-wrap-right",style:{transform:`perspective(1800px) rotateY(${-78*l}deg)`},children:M.jsx("div",{className:"rose-gate-door",children:M.jsxs("div",{className:"door-frame",children:[M.jsx("div",{className:"door-panel panel-one"}),M.jsx("div",{className:"door-panel panel-two"}),M.jsx("div",{className:"door-panel panel-three"}),M.jsx("div",{className:"door-rose-pattern",children:"🌹"}),M.jsx("div",{className:"door-handle",children:M.jsx("span",{})}),M.jsx("div",{className:"door-metal-detail detail-top"}),M.jsx("div",{className:"door-metal-detail detail-bottom"})]})})})]}),M.jsx("div",{className:"rose-gate-copy",children:h()}),M.jsxs("div",{className:"rose-gate-top-label",children:[M.jsx("span",{children:"FOR SOMEONE SPECIAL"}),M.jsx("i",{})]}),M.jsxs("div",{className:"rose-gate-bottom-label",children:[M.jsxs("span",{children:["A LITTLE SOMETHING",M.jsx("br",{}),"FROM MY HEART"]}),M.jsx("div",{className:"bottom-line"})]}),M.jsx("div",{className:"rose-gate-vignette"}),M.jsx("div",{className:"rose-gate-grain"}),M.jsx("style",{children:`



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



      `})]})}const Jg="/100001-Roses/",ZM=14,QM=["Wait... don't look away just yet. 🌹","A bouquet is beautiful... but somehow, it still felt too ordinary for you. ✨","So I searched for something worthy enough to give you...","And then I realised... maybe I had to create it myself. ❤️‍🔥","This is only the beginning. Keep looking... 👀"],JM="A little birthday secret 💌";function eE({phase:n,onPickRandom:e,onZoomOutHeart:t,onRevealComplete:i}){const[r,s]=oe.useState(!1),[a,o]=oe.useState(-1),[l,c]=oe.useState(!1),[u,f]=oe.useState(!1),[d,p]=oe.useState(!1),[_,g]=oe.useState(!1),m=oe.useRef([]),h=oe.useRef(null),v=oe.useRef(null),x=oe.useRef(null),S=oe.useMemo(()=>Array.from({length:ZM},(y,w)=>({id:w,left:`${(w*29+5)%100}%`,delay:`${-(w%8*1.8)}s`,duration:`${13+w%5*2}s`,size:`${7+w%4*2}px`,drift:`${-70+w%7*23}px`,rotate:`${w*53}deg`})),[]),b=()=>{m.current.forEach(y=>window.clearTimeout(y)),m.current=[],h.current!==null&&(window.clearTimeout(h.current),h.current=null),v.current!==null&&(window.clearTimeout(v.current),v.current=null),x.current!==null&&(window.clearTimeout(x.current),x.current=null)};oe.useEffect(()=>{b(),s(!1),o(-1),c(!1),f(!1),p(!1),g(!1);const y=window.setTimeout(()=>s(!0),40);if(n==="reveal"){[900,3500,6200,8900,11600].forEach((z,H)=>{const X=window.setTimeout(()=>o(H),z);m.current.push(X)});const k=window.setTimeout(()=>{o(-1),c(!0),i()},14600);m.current.push(k)}else o(-1),c(!0);return()=>{window.clearTimeout(y),b()}},[n,i]);const R=()=>{n==="explore"&&!u&&!d&&!_&&e()},E=()=>{_||(c(!1),f(!0),p(!1),v.current=window.setTimeout(()=>{p(!0),v.current=null},12500))},C=()=>{f(!1),p(!1),v.current!==null&&(window.clearTimeout(v.current),v.current=null),h.current=window.setTimeout(()=>{c(!0),h.current=null},1200)},D=()=>{_||(p(!1),f(!1),g(!0),x.current=window.setTimeout(()=>{t(),x.current=null},3800))};return M.jsxs("section",{className:`page3 ${r?"page3--visible":""} ${a>=0?"page3--story":""} ${u?"page3--drop-open":""} ${d?"page3--continue":""} ${_?"page3--heart":""}`,"aria-label":"100,001 Roses",children:[M.jsx("div",{className:"page3__backdrop","aria-hidden":"true",children:M.jsx("img",{src:`${Jg}assets/bouquet/bouquet-wide.jpg`,alt:""})}),M.jsx("div",{className:"page3__art","aria-hidden":"true",children:M.jsx("img",{className:"page3__image",src:`${Jg}assets/bouquet/bouquet-wide.jpg`,alt:"",draggable:!1})}),M.jsx("div",{className:"page3__shade","aria-hidden":"true"}),M.jsx("div",{className:"page3__warmth","aria-hidden":"true"}),M.jsx("div",{className:"page3__light-sweep","aria-hidden":"true"}),M.jsx("div",{className:"page3__vignette","aria-hidden":"true"}),M.jsx("div",{className:"page3__grain","aria-hidden":"true"}),M.jsx("div",{className:"page3__petals","aria-hidden":"true",children:S.map(y=>M.jsx("span",{className:"page3__petal",style:{left:y.left,animationDelay:y.delay,animationDuration:y.duration,width:y.size,height:`calc(${y.size} * .68)`,"--drift":y.drift,"--rotate":y.rotate}},y.id))}),M.jsx("div",{className:"page3__story","aria-live":"polite",children:QM.map((y,w)=>M.jsx("p",{className:`page3__story-line ${a===w?"page3__story-line--active":""}`,children:y},y))}),M.jsxs("span",{className:"page3__side-note page3__side-note--left","aria-hidden":"true",children:["not just flowers",M.jsx("b",{children:"🌹"})]}),M.jsxs("span",{className:"page3__side-note page3__side-note--right","aria-hidden":"true",children:["a little piece",M.jsx("b",{children:"of my heart ♡"})]}),n==="explore"&&l&&!u&&!_&&M.jsxs("button",{type:"button",className:"page3__message-drop",onClick:E,children:[M.jsx("span",{className:"page3__message-icon",children:"💌"}),M.jsxs("span",{className:"page3__message-body",children:[M.jsx("strong",{children:"New message"}),M.jsx("small",{children:"Check me... something special just arrived 👀"})]}),M.jsx("span",{className:"page3__message-arrow",children:"›"})]}),n==="explore"&&!u&&!d&&!_&&M.jsx("button",{type:"button",className:"page3__bouquet-hit",onClick:R,"aria-label":"Choose a rose from the bouquet"}),n==="explore"&&u&&!_&&M.jsxs("div",{className:"page3__letter page3__letter--reading",role:"dialog","aria-label":"Birthday letter",children:[M.jsx("div",{className:"page3__letter-flower",children:"🌹"}),M.jsx("button",{type:"button",className:"page3__letter-close",onClick:C,"aria-label":"Close birthday letter",children:"×"}),M.jsx("span",{className:"page3__letter-kicker",children:"✦ written for this little moment ✦"}),M.jsx("h2",{children:JM}),M.jsx("div",{className:"page3__letter-rule",children:"♡"}),M.jsx("p",{className:"page3__letter-lead",children:"Happy Birthday, beautiful. ❤️"}),M.jsx("p",{className:"page3__letter-copy page3__letter-copy--1",children:"I could have simply sent you a message and said, “Happy Birthday.” But that felt far too ordinary for a day that belongs to you."}),M.jsx("p",{className:"page3__letter-copy page3__letter-copy--2",children:"So I made you this little journey instead — a few roses, a few feelings, and a tiny corner of the internet where you can pause for a moment and just enjoy being celebrated. ✨"}),M.jsx("p",{className:"page3__letter-copy page3__letter-copy--3",children:"I hope this new year of your life gives you beautiful surprises, ridiculous amounts of laughter, unforgettable memories, and people who remind you just how special you are. 🌷"}),M.jsx("p",{className:"page3__letter-copy page3__letter-copy--4 page3__letter-whisper",children:"And yes... there is still something I haven't shown you yet. 👀"}),M.jsx("span",{className:"page3__letter-signature",children:"With a little too much effort, a lot of love, and 100,001 roses. ❤️"}),M.jsx("div",{className:"page3__letter-progress",children:M.jsx("span",{})}),M.jsx("div",{className:"page3__letter-hint",children:"Read it slowly... the next part is waiting."})]}),n==="explore"&&d&&!_&&M.jsx("div",{className:"page3__permission-backdrop",children:M.jsxs("div",{className:"page3__permission",role:"dialog","aria-label":"Continue to the next page",children:[M.jsx("span",{className:"page3__permission-sparkles",children:"✦ 🌹 ✦"}),M.jsx("span",{className:"page3__permission-kicker",children:"one last little question..."}),M.jsx("h3",{children:"Are you ready to go a little further? 👀"}),M.jsxs("p",{children:["Because if you think this was the whole surprise...",M.jsx("br",{}),"you really don't know me yet. ❤️‍🔥"]}),M.jsx("button",{type:"button",onClick:D,children:"I WANT TO SEE WHAT'S NEXT ✨"}),M.jsx("span",{className:"page3__permission-foot",children:"no turning back after this... 😉"})]})}),M.jsxs("div",{className:"page3__heart","aria-hidden":"true",children:[M.jsx("div",{className:"page3__heart-aura"}),M.jsx("div",{className:"page3__heart-symbol",children:"♥"}),M.jsxs("div",{className:"page3__heart-copy",children:[M.jsx("span",{children:"100,001 roses"}),M.jsx("strong",{children:"and still... not enough"})]})]}),M.jsx("style",{children:`
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
      `})]})}Object.keys(Xt.specialRoseMessages).map(Number).sort((n,e)=>n-e);function tE(n){return n in Xt.specialRoseMessages}function nE(n){return n in Xt.specialRoseMessages?Xt.specialRoseMessages[n]:n in Xt.hiddenMessages?Xt.hiddenMessages[n]:null}function iE(){return new Set([...Object.keys(Xt.specialRoseMessages).map(Number),...Object.keys(Xt.hiddenMessages).map(Number)])}const rE=["You have a way of making ordinary moments feel special.","Some memories stay quietly beautiful because of people like you.","You make laughter feel easier and good days feel a little brighter.","There is something wonderfully unforgettable about the way you are.","Even the smallest moments can become beautiful when you are part of them.","You deserve to be reminded that you are deeply appreciated.","Some people bring flowers into a room; you bring warmth into it.","I hope you never forget how much joy you can bring without even trying.","There are moments I would happily replay just because you were there.","You make simple memories feel like stories worth keeping.","The best things about you are often the little things you don't notice.","You have a beautiful way of turning normal days into better ones."],sE=["Keep this little reminder close whenever you need a reason to smile.","May this be one tiny reason to believe that beautiful things are still ahead.","I hope this year gives you more moments that feel exactly like this.","Whatever comes next, I hope it brings you plenty of reasons to laugh.","You deserve memories that make you smile long after they happen.","May the next chapter be kinder, brighter, and slightly more crazy.","I hope you keep choosing happiness, even on the ordinary days.","Somewhere in all the chaos, I hope you always find your little moments of peace.","Never underestimate how much your presence can mean to someone.","Take this as a tiny reminder that you are worth celebrating.","I hope you collect beautiful memories faster than you can count them.","And if today gets a little difficult, remember that brighter moments are coming."],aE=["Always keep that smile. ❤️","Stay wonderfully you. 🌹","Here's to more crazy memories. ✨","You deserve all the good things. 🫶","Keep shining. ❤️","One more reason to smile. 🌹","For you, always. ♡","Happy Birthday, beautiful soul. 🎂"];function oE(n){let e=n|0;return e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),e=e^e>>>16,e>>>0}function Ef(n,e){return n[oE(e)%n.length]}function lE(n){const e=Math.max(1,Math.min(100001,Math.floor(n))),t=Ef(rE,e*3+11),i=Ef(sE,e*5+17),r=Ef(aE,e*7+23);return`${t} ${i}

Rose #${e.toLocaleString("en-US")} keeps this little reason just for you. ${r}`}function cE({roseId:n,isRandom:e,onClose:t,onPrevious:i,onNext:r,onPickAnother:s}){const o=nE(n)||lE(n),l=tE(n);return M.jsxs("div",{className:"rose-info-overlay",children:[M.jsxs("div",{className:"rose-info-panel",role:"dialog","aria-label":`Rose ${n} note`,children:[M.jsx("button",{className:"rose-info-close",type:"button",onClick:t,"aria-label":"Close rose note",children:"×"}),M.jsx("div",{className:"rose-info-glow","aria-hidden":"true"}),M.jsxs("div",{className:"rose-info-rose-art","aria-hidden":"true",children:[M.jsx("div",{className:"rose-art-flower",children:"🌹"}),M.jsx("div",{className:"rose-art-leaves",children:"✦"})]}),M.jsxs("div",{className:"rose-info-content",children:[M.jsxs("div",{className:"rose-info-pill",children:["Rose #",n.toLocaleString("en-US")]}),M.jsx("div",{className:"rose-info-count",children:"1 of 100,001 roses"}),M.jsxs("div",{className:"rose-note",children:[M.jsx("span",{className:"rose-note-pin",children:"♡"}),M.jsx("p",{children:o}),M.jsx("span",{className:"rose-note-heart",children:"♡"})]}),l&&M.jsx("div",{className:"rose-special",children:"✦ This one was hidden for you ✦"}),M.jsxs("div",{className:"rose-info-nav",children:[M.jsx("button",{type:"button",onClick:i,disabled:!i,"aria-label":"Previous rose",children:"‹"}),M.jsxs("span",{children:[n.toLocaleString("en-US")," / 100,001"]}),M.jsx("button",{type:"button",onClick:r,disabled:!r,"aria-label":"Next rose",children:"›"})]}),s&&M.jsx("button",{className:"rose-pick-button",type:"button",onClick:s,children:"♥ Pick another rose"})]})]}),M.jsx("style",{children:`
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
      `})]})}const uo=[{at:2800,title:"One last surprise…",body:"Out of 100,001 roses, there’s something I’ve always wanted to say…"},{at:6200,title:"Every rose has a reason…",body:"A memory. A moment. A feeling. A little piece of you."},{at:1e4,title:"And all of them lead to this…",body:""},{at:14e3,title:"Because at the end of it all…",body:"It’s always you. ❤️"}],e0=3500;function uE({phase:n,onReset:e,onPickRandom:t}){const[i,r]=oe.useState(-1),[s,a]=oe.useState(!1),[o,l]=oe.useState(!1),c=oe.useRef([]);oe.useEffect(()=>{if(c.current.forEach(d=>window.clearTimeout(d)),c.current=[],r(-1),a(!1),l(!1),n==="final"){r(uo.length-1),a(!1);const d=window.setTimeout(()=>a(!0),e0);return c.current.push(d),()=>{c.current.forEach(p=>window.clearTimeout(p)),c.current=[]}}return uo.forEach((d,p)=>{c.current.push(window.setTimeout(()=>{a(!1),r(p)},d.at))}),c.current.push(window.setTimeout(()=>a(!0),uo[uo.length-1].at+e0)),c.current.push(window.setTimeout(()=>l(!0),26e3)),()=>{c.current.forEach(d=>window.clearTimeout(d)),c.current=[]}},[n]);const u=i>=0?uo[i]:null,f=n==="final";return M.jsxs("div",{className:"final-scene","aria-live":"polite",children:[M.jsx("div",{className:"heart-vignette","aria-hidden":"true"}),M.jsx("div",{className:"heart-top-glow","aria-hidden":"true"}),M.jsx("div",{className:"heart-particles","aria-hidden":"true",children:Array.from({length:28}).map((d,p)=>M.jsx("span",{style:{"--i":p}},p))}),f&&M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"explore-heading",children:[M.jsx("div",{className:"explore-eyebrow",children:"100,001 REASONS"}),M.jsx("h1",{children:"Now it’s your turn…"}),M.jsxs("div",{className:"explore-rule",children:[M.jsx("span",{}),"♡",M.jsx("span",{})]}),M.jsx("p",{children:"Click on any rose to read its note."}),M.jsx("small",{children:"Each rose holds a unique memory, a reason, a feeling… just for you."})]}),M.jsxs("div",{className:"explore-help",children:[M.jsxs("div",{className:"help-row",children:[M.jsx("b",{children:"◉"}),M.jsxs("span",{children:[M.jsx("strong",{children:"Click a rose"}),M.jsx("em",{children:"Read its note"})]})]}),M.jsxs("div",{className:"help-row",children:[M.jsx("b",{children:"↕"}),M.jsxs("span",{children:[M.jsx("strong",{children:"Scroll"}),M.jsx("em",{children:"Zoom in / out"})]})]}),M.jsxs("div",{className:"help-row",children:[M.jsx("b",{children:"✣"}),M.jsxs("span",{children:[M.jsx("strong",{children:"Drag"}),M.jsx("em",{children:"Look around"})]})]}),M.jsxs("div",{className:"help-row",children:[M.jsx("b",{children:"⦿"}),M.jsxs("span",{children:[M.jsx("strong",{children:"Double click"}),M.jsx("em",{children:"Reset view"})]})]})]}),M.jsxs("div",{className:"explore-footer",children:[M.jsx("span",{children:"♥"})," 100,001 REASONS. ALWAYS YOU."]}),M.jsx("button",{className:"random-rose",type:"button",onClick:t,children:"♥ Pick a rose for me"})]}),u&&!f&&M.jsx("div",{className:`story-copy ${s?"story-copy--fade":"story-copy--visible"}`,children:M.jsxs("div",{className:"story-block",children:[M.jsx("div",{className:"story-title",children:u.title}),u.body&&M.jsx("div",{className:"story-body",children:u.body}),M.jsxs("div",{className:"story-divider","aria-hidden":"true",children:[M.jsx("span",{}),M.jsx("b",{children:"♡"}),M.jsx("span",{})]})]},i)}),M.jsx("button",{type:"button",className:`heart-replay ${o||f?"heart-replay--visible":""}`,onClick:e,"aria-label":"Replay the journey",children:"Replay ↻"}),M.jsx("style",{children:`
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
      `})]})}function fE({visible:n}){const e="/100001-Roses/assets/audio/birthday-music.mp3",[t,i]=oe.useState(!1),[r,s]=oe.useState(!1),a=oe.useRef(null);oe.useEffect(()=>{if(!n){s(!1);return}const c=window.setTimeout(()=>{t||s(!0)},1600);return()=>window.clearTimeout(c)},[n,t]);const o=async()=>{const c=a.current;try{let u=c;u||(u=new Audio(`${e}?v=${Date.now()}`),u.loop=!1,u.preload="auto",u.volume=.62,u.addEventListener("ended",()=>{u&&(u.pause(),u.currentTime=0)}),a.current=u),c||(u.src=`${e}?v=${Date.now()}`),await u.play(),i(!0),s(!1)}catch(u){console.warn("Birthday music could not start.",u)}},l=()=>{const c=a.current;c&&(c.pause(),i(!1))};return oe.useEffect(()=>()=>{const c=a.current;c&&(c.pause(),c.removeAttribute("src"),c.load()),a.current=null},[]),n?M.jsxs(M.Fragment,{children:[r&&!t&&M.jsxs("div",{style:zs.prompt,children:[M.jsx("p",{style:zs.promptText,children:"🎵 A little song for you?"}),M.jsx("span",{style:zs.promptSubtext,children:"the music I chose for this little journey ♡"}),M.jsx("button",{style:zs.promptBtn,onClick:o,children:"Play the music 🌹"}),M.jsx("button",{style:zs.promptBtnNo,onClick:()=>s(!1),children:"Maybe later"})]}),M.jsx("button",{style:zs.toggleBtn,onClick:t?l:o,"aria-label":t?"Mute birthday music":"Play birthday music",children:t?"🎵":"🔇"})]}):null}const zs={prompt:{position:"fixed",top:"max(1rem, env(safe-area-inset-top))",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.45rem",zIndex:1e3,width:"min(330px, calc(100vw - 32px))",background:"linear-gradient(145deg, rgba(31,13,24,.94), rgba(11,7,14,.94))",backdropFilter:"blur(18px)",padding:"1rem 1.25rem 0.9rem",borderRadius:"18px",border:"1px solid rgba(224,173,105,.28)",boxShadow:"0 18px 50px rgba(0,0,0,.45)"},promptText:{fontFamily:"var(--font-hand)",fontSize:"1.25rem",color:"#fff8e7",margin:0},promptSubtext:{fontFamily:"var(--font-serif)",fontSize:"0.72rem",letterSpacing:"0.05em",color:"rgba(232,205,164,.65)",textAlign:"center"},promptBtn:{marginTop:"0.25rem",fontFamily:"var(--font-hand)",fontSize:"1rem",padding:"0.5rem 1.2rem",borderRadius:"999px",background:"linear-gradient(135deg, #9d2847, #d04b68)",color:"#fff",border:"1px solid rgba(255,220,177,.18)",cursor:"pointer"},promptBtnNo:{fontFamily:"var(--font-serif)",fontSize:"0.82rem",padding:"0.2rem 0.8rem",borderRadius:"999px",background:"transparent",color:"rgba(255,255,255,.42)",border:"none",cursor:"pointer"},toggleBtn:{position:"fixed",right:"18px",bottom:"18px",zIndex:1e3,width:"46px",height:"46px",borderRadius:"50%",border:"1px solid rgba(255,220,177,.22)",background:"rgba(17,8,14,.72)",color:"#fff",backdropFilter:"blur(12px)",boxShadow:"0 10px 30px rgba(0,0,0,.3)",cursor:"pointer",fontSize:"19px"}};function Vi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Fx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ol={duration:.5,overwrite:!1,delay:0},tm,qt,gt,ei=1e8,ot=1/ei,ih=Math.PI*2,dE=ih/4,hE=0,kx=Math.sqrt,pE=Math.cos,mE=Math.sin,Ht=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},nr=function(e){return typeof e=="number"},nm=function(e){return typeof e>"u"},Ni=function(e){return typeof e=="object"},wn=function(e){return e!==!1},im=function(){return typeof window<"u"},jl=function(e){return Tt(e)||Ht(e)},zx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},nn=Array.isArray,gE=/random\([^)]+\)/g,_E=/,\s*/g,t0=/(?:-?\.?\d|\.)+/gi,Bx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gx=/[+-]=-?[.\d]+/,vE=/[^,'"\[\]\s]+/gi,xE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,wi,rh,rm,Wn={},uu={},Hx,Vx=function(e){return(uu=ka(e,Wn))&&Rn},sm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ll=function(e,t){return!t&&console.warn(e)},Wx=function(e,t){return e&&(Wn[e]=t)&&uu&&(uu[e]=t)||Wn},cl=function(){return 0},yE={suppressEvents:!0,isStart:!0,kill:!1},Cc={suppressEvents:!0,kill:!1},SE={suppressEvents:!0},am={},Ir=[],sh={},jx,Un={},Tf={},n0=30,Pc=[],om="",lm=function(e){var t=e[0],i,r;if(Ni(t)||Tt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Pc.length;r--&&!Pc[r].targetTest(t););i=Pc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new hy(e[r],i)))||e.splice(r,1);return e},ys=function(e){return e._gsap||lm(ti(e))[0]._gsap},Xx=function(e,t,i){return(i=e[t])&&Tt(i)?e[t]():nm(i)&&e.getAttribute&&e.getAttribute(t)||i},Tn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},_t=function(e){return Math.round(e*1e7)/1e7||0},Ta=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},ME=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},fu=function(){var e=Ir.length,t=Ir.slice(0),i,r;for(sh={},Ir.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},cm=function(e){return!!(e._initted||e._startAt||e.add)},Yx=function(e,t,i,r){Ir.length&&!qt&&fu(),e.render(t,i,!!(qt&&t<0&&cm(e))),Ir.length&&!qt&&fu()},qx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(vE).length<2?t:Ht(e)?e.trim():e},$x=function(e){return e},jn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},EE=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},ka=function(e,t){for(var i in t)e[i]=t[i];return e},i0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ni(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},du=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Fo=function(e){var t=e.parent||xt,i=e.keyframes?EE(nn(e.keyframes)):jn;if(wn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},wE=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Kx=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},ku=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ss=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},TE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ah=function(e,t,i,r){return e._startAt&&(qt?e._startAt.revert(Cc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},bE=function n(e){return!e||e._ts&&n(e.parent)},r0=function(e){return e._repeat?za(e._tTime,e=e.duration()+e._rDelay)*e:0},za=function(e,t){var i=Math.floor(e=_t(e/t));return e&&i===e?i-1:i},hu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},zu=function(e){return e._end=_t(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},Bu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=_t(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),zu(e),i._dirty||Ss(i,e)),e},Zx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=hu(e.rawTime(),t),(!t._dur||Ml(0,t.totalDuration(),i)-t._tTime>ot)&&t.render(i,!0)),Ss(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ot}},Ai=function(e,t,i,r){return t.parent&&Br(t),t._start=_t((nr(i)?i:i||e!==xt?Kn(e,i,t):e._time)+t._delay),t._end=_t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Kx(e,t,"_first","_last",e._sort?"_start":0),oh(t)||(e._recent=t),r||Zx(e,t),e._ts<0&&Bu(e,e._tTime),e},Qx=function(e,t){return(Wn.ScrollTrigger||sm("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},Jx=function(e,t,i,r,s){if(fm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jx!==Fn.frame)return Ir.push(e),e._lazy=[s,r],1},AE=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},oh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},RE=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&AE(e)&&!(!e._initted&&oh(e))||(e._ts<0||e._dp._ts<0)&&!oh(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Ml(0,e._tDur,t),u=za(l,o),e._yoyo&&u&1&&(a=1-a),u!==za(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||qt||r||e._zTime===ot||!t&&e._zTime){if(!e._initted&&Jx(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?ot:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ah(e,t,i,!0),e._onUpdate&&!i&&zn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Br(e,1),!i&&!qt&&(zn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},CE=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ba=function(e,t,i,r){var s=e._repeat,a=_t(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:_t(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Bu(e,e._tTime=e._tDur*o),e.parent&&zu(e),i||Ss(e.parent,e),e},s0=function(e){return e instanceof vn?Ss(e):Ba(e,e._dur)},PE={_start:0,endTime:cl,totalDuration:cl},Kn=function n(e,t,i){var r=e.labels,s=e._recent||PE,a=e.duration()>=ei?s.endTime(!1):e._dur,o,l,c;return Ht(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(nn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},ko=function(e,t,i){var r=nr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=wn(l.vars.inherit)&&l.parent;a.immediateRender=wn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Lt(t[0],a,t[s+1])},Yr=function(e,t){return e||e===0?t(e):t},Ml=function(e,t,i){return i<e?e:i>t?t:i},tn=function(e,t){return!Ht(e)||!(t=xE.exec(e))?"":t[1]},LE=function(e,t,i){return Yr(i,function(r){return Ml(e,t,r)})},lh=[].slice,ey=function(e,t){return e&&Ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ni(e[0]))&&!e.nodeType&&e!==wi},DE=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ht(r)&&!t||ey(r,1)?(s=i).push.apply(s,ti(r)):i.push(r)})||i},ti=function(e,t,i){return gt&&!t&&gt.selector?gt.selector(e):Ht(e)&&!i&&(rh||!Ga())?lh.call((t||rm).querySelectorAll(e),0):nn(e)?DE(e,i):ey(e)?lh.call(e,0):e?[e]:[]},ch=function(e){return e=ti(e)[0]||ll("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ti(t,i.querySelectorAll?i:i===e?ll("Invalid scope")||rm.createElement("div"):e)}},ty=function(e){return e.sort(function(){return .5-Math.random()})},ny=function(e){if(Tt(e))return e;var t=Ni(e)?e:{each:e},i=Ms(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return Ht(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(d,p,_){var g=(_||t).length,m=a[g],h,v,x,S,b,R,E,C,D;if(!m){if(D=t.grid==="auto"?0:(t.grid||[1,ei])[1],!D){for(E=-ei;E<(E=_[D++].getBoundingClientRect().left)&&D<g;);D<g&&D--}for(m=a[g]=[],h=l?Math.min(D,g)*u-.5:r%D,v=D===ei?0:l?g*f/D-.5:r/D|0,E=0,C=ei,R=0;R<g;R++)x=R%D-h,S=v-(R/D|0),m[R]=b=c?Math.abs(c==="y"?S:x):kx(x*x+S*S),b>E&&(E=b),b<C&&(C=b);r==="random"&&ty(m),m.max=E-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(D>g?g-1:c?c==="y"?g/D:D:Math.max(D,g/D))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=tn(t.amount||t.each)||0,i=i&&g<0?jE(i):i}return g=(m[d]-m.min)/m.max||0,_t(m.b+(i?i(g):g)*m.v)+m.u}},uh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=_t(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(nr(i)?0:tn(i))}},iy=function(e,t){var i=nn(e),r,s;return!i&&Ni(e)&&(r=i=e.radius||ei,e.values?(e=ti(e.values),(s=!nr(e[0]))&&(r*=r)):e=uh(e.increment)),Yr(t,i?Tt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ei,u=0,f=e.length,d,p;f--;)s?(d=e[f].x-o,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:a,s||u===a||nr(a)?u:u+tn(a)}:uh(e))},ry=function(e,t,i,r){return Yr(nn(e)?!t:i===!0?!!(i=0):!r,function(){return nn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},NE=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},IE=function(e,t){return function(i){return e(parseFloat(i))+(t||tn(i))}},UE=function(e,t,i){return ay(e,t,0,1,i)},sy=function(e,t,i){return Yr(i,function(r){return e[~~t(r)]})},OE=function n(e,t,i){var r=t-e;return nn(e)?sy(e,n(0,e.length),t):Yr(i,function(s){return(r+(s-e)%r)%r+e})},FE=function n(e,t,i){var r=t-e,s=r*2;return nn(e)?sy(e,n(0,e.length-1),t):Yr(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},ul=function(e){return e.replace(gE,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(_E);return ry(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},ay=function(e,t,i,r,s){var a=t-e,o=r-i;return Yr(s,function(l){return i+((l-e)/a*o||0)})},kE=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Ht(e),o={},l,c,u,f,d;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(nn(e)&&!nn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(d,~~_);return u[g](_-g)},i=t}else r||(e=ka(nn(e)?[]:{},e));if(!u){for(l in t)um.call(o,e,l,"get",t[l]);s=function(_){return pm(_,o)||(a?e.p:e)}}}return Yr(i,s)},a0=function(e,t,i){var r=e.labels,s=ei,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},zn=function(e,t,i){var r=e.vars,s=r[t],a=gt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ir.length&&fu(),o&&(gt=o),u=l?s.apply(c,l):s.call(c),gt=a,u},To=function(e){return Br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&zn(e,"onInterrupt"),e},ga,oy=[],ly=function(e){if(e)if(e=!e.name&&e.default||e,im()||e.headless){var t=e.name,i=Tt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:cl,render:pm,add:um,kill:tw,modifier:ew,rawVars:0},a={targetTest:0,get:0,getSetter:hm,aliases:{},register:0};if(Ga(),e!==r){if(Un[t])return;jn(r,jn(du(e,s),a)),ka(r.prototype,ka(s,du(e,a))),Un[r.prop=t]=r,e.targetTest&&(Pc.push(r),am[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wx(t,r),e.register&&e.register(Rn,r,bn)}else oy.push(e)},at=255,bo={aqua:[0,at,at],lime:[0,at,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,at],navy:[0,0,128],white:[at,at,at],olive:[128,128,0],yellow:[at,at,0],orange:[at,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[at,0,0],pink:[at,192,203],cyan:[0,at,at],transparent:[at,at,at,0]},bf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*at+.5|0},cy=function(e,t,i){var r=e?nr(e)?[e>>16,e>>8&at,e&at]:0:bo.black,s,a,o,l,c,u,f,d,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),bo[e])r=bo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&at,r&at,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&at,e&at]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(t0),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=bf(l+1/3,s,a),r[1]=bf(l,s,a),r[2]=bf(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Bx),i&&r.length<4&&(r[3]=1),r}else r=e.match(t0)||bo.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/at,a=r[1]/at,o=r[2]/at,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(p=f-d,c=u>.5?p/(2-f-d):p/(f+d),l=f===s?(a-o)/p+(a<o?6:0):f===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},uy=function(e){var t=[],i=[],r=-1;return e.split(Ur).forEach(function(s){var a=s.match(ma)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},o0=function(e,t,i){var r="",s=(e+r).match(Ur),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=cy(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=uy(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ur,"1").split(ma),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ur),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},Ur=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in bo)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),zE=/hsl[a]?\(/,fy=function(e){var t=e.join(" "),i;if(Ur.lastIndex=0,Ur.test(t))return i=zE.test(t),e[1]=o0(e[1],i),e[0]=o0(e[0],i,uy(e[1])),!0},fl,Fn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,f,d,p,_=function g(m){var h=n()-r,v=m===!0,x,S,b,R;if((h>e||h<0)&&(i+=h-t),r+=h,b=r-i,x=b-a,(x>0||v)&&(R=++f.frame,d=b-f.time*1e3,f.time=b=b/1e3,a+=x+(x>=s?4:s-x),S=1),v||(l=c(g)),S)for(p=0;p<o.length;p++)o[p](b,d,R,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Hx&&(!rh&&im()&&(wi=rh=window,rm=wi.document||{},Wn.gsap=Rn,(wi.gsapVersions||(wi.gsapVersions=[])).push(Rn.version),Vx(uu||wi.GreenSockGlobals||!wi.gsap&&wi||{}),oy.forEach(ly)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},fl=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),fl=0,c=cl},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,h,v){var x=h?function(S,b,R,E){m(S,b,R,E),f.remove(x)}:m;return f.remove(m),o[v?"unshift":"push"](x),Ga(),x},remove:function(m,h){~(h=o.indexOf(m))&&o.splice(h,1)&&p>=h&&p--},_listeners:o},f}(),Ga=function(){return!fl&&Fn.wake()},Be={},BE=/^[\d.\-M][\d.\-,\s]/,GE=/["']/g,HE=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(GE,"").trim():+c,r=l.substr(o+1).trim();return t},VE=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},WE=function(e){var t=(e+"").split("("),i=Be[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[HE(t[1])]:VE(e).split(",").map(qx)):Be._CE&&BE.test(e)?Be._CE("",e):i},jE=function(e){return function(t){return 1-e(1-t)}},Ms=function(e,t){return e&&(Tt(e)?e:Be[e]||WE(e))||t},Is=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Tn(e,function(o){Be[o]=Wn[o]=s,Be[a=o.toLowerCase()]=i;for(var l in s)Be[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Be[o+"."+l]=s[l]}),s},dy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Af=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/ih*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*mE((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:dy(o);return s=ih/s,l.config=function(c,u){return n(e,c,u)},l},Rf=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:dy(i);return r.config=function(s){return n(e,s)},r};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Is(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Be.Linear.easeNone=Be.none=Be.Linear.easeIn;Is("Elastic",Af("in"),Af("out"),Af());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Is("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Is("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Is("Circ",function(n){return-(kx(1-n*n)-1)});Is("Sine",function(n){return n===1?1:-pE(n*dE)+1});Is("Back",Rf("in"),Rf("out"),Rf());Be.SteppedEase=Be.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-ot;return function(o){return((r*Ml(0,a,o)|0)+s)*i}}};ol.ease=Be["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return om+=n+","+n+"Params,"});var hy=function(e,t){this.id=hE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xx,this.set=t?t.getSetter:hm},dl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ba(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),fl||Fn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ba(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ga(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bu(this,i),!s._dp||s.parent||Zx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ot||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Yx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+r0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+r0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?za(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?hu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ot?0:this._rts,this.totalTime(Ml(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),zu(this),TE(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ga(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=_t(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ai(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(wn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=SE);var r=qt;return qt=i,cm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),qt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,s0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,s0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Kn(this,i),wn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,wn(r)),this._dur||(this._zTime=-ot),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ot)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Tt(i)?i:$x,l=function(){var u=r.then;r.then=null,s&&s(),Tt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){To(this)},n}();jn(dl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var vn=function(n){Fx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=wn(i.sortChildren),xt&&Ai(i.parent||xt,Vi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Qx(Vi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return ko(0,arguments,this),this},t.from=function(r,s,a){return ko(1,arguments,this),this},t.fromTo=function(r,s,a,o){return ko(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Fo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(r,s,Kn(this,a),1),this},t.call=function(r,s,a){return Ai(this,Lt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Lt(r,a,Kn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Fo(a).immediateRender=wn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Fo(o).immediateRender=wn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:_t(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,p,_,g,m,h,v,x,S,b,R,E;if(this!==xt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,S=this._start,x=this._ts,h=!x,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(d=_t(u%m),u===l?(g=this._repeat,d=c):(b=_t(u/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=za(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),R&&g&1&&(d=c-d,E=1),g!==b&&!this._lock){var C=R&&b&1,D=C===(R&&g&1);if(g<b&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(E?0:_t(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,D&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=CE(this,_t(o),_t(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!b&&(zn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,a),d!==this._time||!this._ts&&!h){v=0,_&&(u+=this._zTime=-ot);break}}p=_}else{p=this._last;for(var y=r<0?r:d;p;){if(_=p._prev,(p._act||y<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,s,a||qt&&cm(p)),d!==this._time||!this._ts&&!h){v=0,_&&(u+=this._zTime=y?-ot:ot);break}}p=_}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-ot)._zTime=d>=o?1:-1,this._ts))return this._start=S,zu(this),this.render(r,s,a);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Br(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(zn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(nr(s)||(s=Kn(this,s,r)),!(r instanceof dl)){if(nn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ht(r))return this.addLabel(r,s);if(Tt(r))r=Lt.delayedCall(0,r);else return this}return this!==r?Ai(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ei);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Lt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Ht(r)?this.removeLabel(r):Tt(r)?this.killTweensOf(r):(r.parent===this&&ku(this,r),r===this._recent&&(this._recent=this._last),Ss(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_t(Fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Kn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Lt.delayedCall(0,s||cl,a);return o.data="isPause",this._hasPause=1,Ai(this,o,Kn(this,r))},t.removePause=function(r){var s=this._first;for(r=Kn(this,r);s;)s._start===r&&s.data==="isPause"&&Br(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Er!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=ti(r),l=this._first,c=nr(s),u;l;)l instanceof Lt?ME(l._targets,o)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Kn(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,p,_=Lt.to(a,jn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ot,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Ba(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,f||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,jn({startAt:{time:Kn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),a0(this,Kn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),a0(this,Kn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=_t(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Ss(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ss(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=ei,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ai(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=_t(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ba(a,a===xt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(xt._ts&&(Yx(xt,hu(r,xt)),jx=Fn.frame),Fn.frame>=n0){n0+=Hn.autoSleep||120;var s=xt._first;if((!s||!s._ts)&&Hn.autoSleep&&Fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fn.sleep()}}},e}(dl);jn(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var XE=function(e,t,i,r,s,a,o){var l=new bn(this._pt,e,t,0,1,xy,null,s),c=0,u=0,f,d,p,_,g,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=ul(r)),a&&(v=[i,r],a(v,e,t),i=v[0],r=v[1]),d=i.match(wf)||[];f=wf.exec(r);)_=f[0],g=r.substring(c,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Ta(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=wf.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Gx.test(r)||h)&&(l.e=0),this._pt=l,l},um=function(e,t,i,r,s,a,o,l,c,u){Tt(r)&&(r=r(s||0,e,a));var f=e[t],d=i!=="get"?i:Tt(f)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=Tt(f)?c?ZE:_y:dm,_;if(Ht(r)&&(~r.indexOf("random(")&&(r=ul(r)),r.charAt(1)==="="&&(_=Ta(d,r)+(tn(d)||0),(_||_===0)&&(r=_))),!u||d!==r||fh)return!isNaN(d*r)&&r!==""?(_=new bn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?JE:vy,0,p),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&sm(t,r),XE.call(this,e,t,d,r,p,l||Hn.stringFilter,c))},YE=function(e,t,i,r,s){if(Tt(e)&&(e=zo(e,s,t,i,r)),!Ni(e)||e.style&&e.nodeType||nn(e)||zx(e))return Ht(e)?zo(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=zo(e[o],s,t,i,r);return a},py=function(e,t,i,r,s,a){var o,l,c,u;if(Un[e]&&(o=new Un[e]).init(s,o.rawVars?t[e]:YE(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new bn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==ga))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Er,fh,fm=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!tm,S=e.timeline,b=r.easeReverse||f,R,E,C,D,y,w,k,z,H,X,B,q,L;if(S&&(!d||!s)&&(s="none"),e._ease=Ms(s,ol.ease),e._rEase=b&&(Ms(b)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(z=m[0]?ys(m[0]).harness:0,q=z&&r[z.prop],R=du(r,am),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!p?g.render(-1,!0):g.revert(u&&_?Cc:yE),g._lazy=0),a){if(Br(e._startAt=Lt.set(m,jn({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&wn(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!o&&!p)&&e._startAt.revert(Cc),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),C=jn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&wn(l),immediateRender:o,stagger:0,parent:h},R),q&&(C[z.prop]=q),Br(e._startAt=Lt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(Cc):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,ot,ot);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&wn(l)||l&&!_,E=0;E<m.length;E++){if(y=m[E],k=y._gsap||lm(m)[E]._gsap,e._ptLookup[E]=X={},sh[k.id]&&Ir.length&&fu(),B=v===m?E:v.indexOf(y),z&&(H=new z).init(y,q||R,e,B,v)!==!1&&(e._pt=D=new bn(e._pt,y,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function($){X[$]=D}),H.priority&&(w=1)),!z||q)for(C in R)Un[C]&&(H=py(C,R,e,B,y,v))?H.priority&&(w=1):X[C]=D=um.call(e,y,C,"get",R[C],B,v,0,r.stringFilter);e._op&&e._op[E]&&e.kill(y,e._op[E]),x&&e._pt&&(Er=e,xt.killTweensOf(y,X,e.globalTime(t)),L=!e.parent,Er=0),e._pt&&l&&(sh[k.id]=1)}w&&yy(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!L,d&&t<=0&&S.render(ei,!0,!0)},qE=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(u=d[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return fh=1,e.vars[t]="+=0",fm(e,o),fh=0,l?ll(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)f=c[p],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=At(i)+tn(f.e)),f.b&&(f.b=u.s+tn(f.b))},$E=function(e,t){var i=e[0]?ys(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=ka({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},KE=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(nn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},zo=function(e,t,i,r,s){return Tt(e)?e.call(t,i,r,s):Ht(e)&&~e.indexOf("random(")?ul(e):e},my=om+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",gy={};Tn(my+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return gy[n]=1});var Lt=function(n){Fx(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Fo(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=r.parent||xt,v=(nn(i)||zx(i)?nr(i[0]):"length"in r)?[i]:ti(i),x,S,b,R,E,C,D,y;if(o._targets=v.length?lm(v):ll("GSAP target "+i+" not found. https://gsap.com",!Hn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||d||jl(c)||jl(u)){r=o.vars;var w=r.easeReverse||r.yoyoEase;if(x=o.timeline=new vn({data:"nested",defaults:g||{},targets:h&&h.data==="nested"?h.vars.targets:v}),x.kill(),x.parent=x._dp=Vi(o),x._start=0,d||jl(c)||jl(u)){if(R=v.length,D=d&&ny(d),Ni(d))for(E in d)~my.indexOf(E)&&(y||(y={}),y[E]=d[E]);for(S=0;S<R;S++)b=du(r,gy),b.stagger=0,w&&(b.easeReverse=w),y&&ka(b,y),C=v[S],b.duration=+zo(c,Vi(o),S,C,v),b.delay=(+zo(u,Vi(o),S,C,v)||0)-o._delay,!d&&R===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),x.to(C,b,D?D(S,C,v):0),x._ease=Be.none;x.duration()?c=u=0:o.timeline=0}else if(_){Fo(jn(x.vars.defaults,{ease:"none"})),x._ease=Ms(_.ease||r.ease||"none");var k=0,z,H,X;if(nn(_))_.forEach(function(B){return x.to(v,B,">")}),x.duration();else{b={};for(E in _)E==="ease"||E==="easeEach"||KE(E,_[E],b,_.easeEach);for(E in b)for(z=b[E].sort(function(B,q){return B.t-q.t}),k=0,S=0;S<z.length;S++)H=z[S],X={ease:H.e,duration:(H.t-(S?z[S-1].t:0))/100*c},X[E]=H.v,x.to(v,X,k),k+=X.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return p===!0&&!tm&&(Er=Vi(o),xt.killTweensOf(v),Er=0),Ai(h,Vi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!_&&o._start===_t(h._time)&&wn(f)&&bE(Vi(o))&&h.data!=="nested")&&(o._tTime=-ot,o.render(Math.max(0,-u)||0)),m&&Qx(Vi(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-ot&&!u?l:r<ot?0:r,d,p,_,g,m,h,v,x;if(!c)RE(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,a);if(d=_t(f%g),f===l?(_=this._repeat,d=c):(m=_t(f/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),h=this._yoyo&&_&1,h&&(d=c-d),m=za(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!h&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(_t(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Jx(this,u?r:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=d<o;if(S!==this._inv){var b=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(S?-1:1)/b:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!m&&(zn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&ah(this,r,s,a),zn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ah(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Br(this,1),!s&&!(u&&!o)&&(f||o||h)&&(zn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){fl||Fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||fm(this,c),u=this._ease(c/this._dur),qE(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Bu(this,0),this.parent||Kx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?To(this):this.scrollTrigger&&this.scrollTrigger.kill(!!qt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Er&&Er.vars.overwrite!==!0)._first||To(this),this.parent&&a!==this.timeline.totalDuration()&&Ba(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?ti(r):o,c=this._ptLookup,u=this._pt,f,d,p,_,g,m,h;if((!s||s==="all")&&wE(o,l))return s==="all"&&(this._pt=0),To(this);for(f=this._op=this._op||[],s!=="all"&&(Ht(s)&&(g={},Tn(s,function(v){return g[v]=1}),s=g),s=$E(o,s)),h=o.length;h--;)if(~l.indexOf(o[h])){d=c[h],s==="all"?(f[h]=s,_=d,p={}):(p=f[h]=f[h]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ku(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&To(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ko(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return ko(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return xt.killTweensOf(r,s,a)},e}(dl);jn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(n){Lt[n]=function(){var e=new vn,t=lh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var dm=function(e,t,i){return e[t]=i},_y=function(e,t,i){return e[t](i)},ZE=function(e,t,i,r){return e[t](r.fp,i)},QE=function(e,t,i){return e.setAttribute(t,i)},hm=function(e,t){return Tt(e[t])?_y:nm(e[t])&&e.setAttribute?QE:dm},vy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},JE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},pm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},ew=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},tw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ku(this,t,"_pt"):t.dep||(i=1),t=r;return!i},nw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},yy=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},bn=function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||vy,this.d=l||this,this.set=c||dm,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=nw,this.m=i,this.mt=s,this.tween=r},n}();Tn(om+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return am[n]=1});Wn.TweenMax=Wn.TweenLite=Lt;Wn.TimelineLite=Wn.TimelineMax=vn;xt=new vn({sortChildren:!1,defaults:ol,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Hn.stringFilter=fy;var Es=[],Lc={},iw=[],l0=0,rw=0,Cf=function(e){return(Lc[e]||iw).map(function(t){return t()})},dh=function(){var e=Date.now(),t=[];e-l0>2&&(Cf("matchMediaInit"),Es.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=wi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Cf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),l0=e,Cf("matchMedia"))},Sy=function(){function n(t,i){this.selector=i&&ch(i),this.data=[],this._r=[],this.isReverted=!1,this.id=rw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Tt(i)&&(s=r,r=i,i=Tt);var a=this,o=function(){var c=gt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=ch(s)),gt=a,f=r.apply(a,arguments),Tt(f)&&a._r.push(f),gt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===Tt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=gt;gt=null,i(this),gt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Lt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Lt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Es.length;a--;)Es[a].id===this.id&&Es.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),sw=function(){function n(t){this.contexts=[],this.scope=t,gt&&gt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ni(i)||(i={matches:i});var a=new Sy(0,s||this.scope),o=a.conditions={},l,c,u;gt&&!a.selector&&(a.selector=gt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=wi.matchMedia(i[c]),l&&(Es.indexOf(a)<0&&Es.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(dh):l.addEventListener("change",dh)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),pu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ly(r)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ht(e)&&(e=ti(e)[0]);var s=ys(e||{}).get,a=i?$x:qx;return i==="native"&&(i=""),e&&(t?a((Un[t]&&Un[t].get||s)(e,t,i,r)):function(o,l,c){return a((Un[o]&&Un[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=ti(e),e.length>1){var r=e.map(function(u){return Rn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=Un[t],o=ys(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;ga._pt=0,f.init(e,i?u+i:u,ga,0,[e]),f.render(1,f),ga._pt&&pm(1,ga)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=Rn.to(e,jn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ms(e.ease,ol.ease)),i0(ol,e||{})},config:function(e){return i0(Hn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Un[o]&&!Wn[o]&&ll(t+" effect requires "+o+" plugin.")}),Tf[t]=function(o,l,c){return i(ti(o),jn(l||{},s),c)},a&&(vn.prototype[t]=function(o,l,c){return this.add(Tf[t](o,Ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Be[e]=Ms(t)},parseEase:function(e,t){return arguments.length?Ms(e,t):Be},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new vn(e),r,s;for(i.smoothChildTiming=wn(e.smoothChildTiming),xt.remove(i),i._dp=0,i._time=i._tTime=xt._time,r=xt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Lt&&r.vars.onComplete===r._targets[0]))&&Ai(i,r,r._start-r._delay),r=s;return Ai(xt,i,0),i},context:function(e,t){return e?new Sy(e,t):gt},matchMedia:function(e){return new sw(e)},matchMediaRefresh:function(){return Es.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||dh()},addEventListener:function(e,t){var i=Lc[e]||(Lc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Lc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:OE,wrapYoyo:FE,distribute:ny,random:ry,snap:iy,normalize:UE,getUnit:tn,clamp:LE,splitColor:cy,toArray:ti,selector:ch,mapRange:ay,pipe:NE,unitize:IE,interpolate:kE,shuffle:ty},install:Vx,effects:Tf,ticker:Fn,updateRoot:vn.updateRoot,plugins:Un,globalTimeline:xt,core:{PropTween:bn,globals:Wx,Tween:Lt,Timeline:vn,Animation:dl,getCache:ys,_removeLinkedListItem:ku,reverting:function(){return qt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return tm=e}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return pu[n]=Lt[n]});Fn.add(vn.updateRoot);ga=pu.to({},{duration:0});var aw=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},ow=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=aw(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},Pf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Ht(s)&&(l={},Tn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ow(o,s)}}}},Rn=pu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)qt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Pf("roundProps",uh),Pf("modifiers"),Pf("snap",iy))||pu;Lt.version=vn.version=Rn.version="3.15.0";Hx=1;im()&&Ga();Be.Power0;Be.Power1;Be.Power2;Be.Power3;Be.Power4;Be.Linear;Be.Quad;Be.Cubic;Be.Quart;Be.Quint;Be.Strong;Be.Elastic;Be.Back;Be.SteppedEase;Be.Bounce;Be.Sine;Be.Expo;Be.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var c0,wr,ba,mm,ms,u0,gm,lw=function(){return typeof window<"u"},ir={},as=180/Math.PI,Aa=Math.PI/180,Bs=Math.atan2,f0=1e8,_m=/([A-Z])/g,cw=/(left|right|width|margin|padding|x)/i,uw=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},pw=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},My=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ey=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},mw=function(e,t,i){return e.style[t]=i},gw=function(e,t,i){return e.style.setProperty(t,i)},_w=function(e,t,i){return e._gsap[t]=i},vw=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},xw=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},yw=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},yt="transform",An=yt+"Origin",Sw=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in ir&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ji(r,o)}):this.tfm[e]=a.x?a[e]:ji(r,e),e===An&&(this.tfm.zOrigin=a.zOrigin);else return Ri.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(yt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(An,t,"")),e=yt}(s||t)&&this.props.push(e,t,s[e])},wy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Mw=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(_m,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=gm(),(!s||!s.isStart)&&!i[yt]&&(wy(i),r.zOrigin&&i[An]&&(i[An]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ty=function(e,t){var i={target:e,props:[],revert:Mw,save:Sw};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},by,ph=function(e,t){var i=wr.createElementNS?wr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wr.createElement(e);return i&&i.style?i:wr.createElement(e)},Bn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(_m,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ha(t)||t,1)||""},d0="O,Moz,ms,Ms,Webkit".split(","),Ha=function(e,t,i){var r=t||ms,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(d0[a]+e in s););return a<0?null:(a===3?"ms":a>=0?d0[a]:"")+e},mh=function(){lw()&&window.document&&(c0=window,wr=c0.document,ba=wr.documentElement,ms=ph("div")||{style:{}},ph("div"),yt=Ha(yt),An=yt+"Origin",ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",by=!!Ha("perspective"),gm=Rn.core.reverting,mm=1)},h0=function(e){var t=e.ownerSVGElement,i=ph("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ba.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ba.removeChild(i),s},p0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Ay=function(e){var t,i;try{t=e.getBBox()}catch{t=h0(e),i=1}return t&&(t.width||t.height)||i||(t=h0(e)),t&&!t.width&&!t.x&&!t.y?{x:+p0(e,["x","cx","x1"])||0,y:+p0(e,["y","cy","y1"])||0,width:0,height:0}:t},Ry=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ay(e))},Gr=function(e,t){if(t){var i=e.style,r;t in ir&&t!==An&&(t=yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(_m,"-$1").toLowerCase())):i.removeAttribute(t)}},Tr=function(e,t,i,r,s,a){var o=new bn(e._pt,t,i,0,1,a?Ey:My);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},m0={deg:1,rad:1,turn:1},Ew={grid:1,flex:1},Hr=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=ms.style,l=cw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",p=r==="%",_,g,m,h;if(r===a||!s||m0[r]||m0[a])return s;if(a!=="px"&&!d&&(s=n(e,t,i,"px")),h=e.getCTM&&Ry(e),(p||a==="%")&&(ir[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[u],At(p?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(d?a:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===wr||!g.appendChild)&&(g=wr.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Fn.time&&!m.uncache)return At(s/m.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,_=e[u],v?e.style[t]=v:Gr(e,t)}else(p||a==="%")&&!Ew[Bn(g,"display")]&&(o.position=Bn(e,"position")),g===e&&(o.position="static"),g.appendChild(ms),_=ms[u],g.removeChild(ms),o.position="absolute";return l&&p&&(m=ys(g),m.time=Fn.time,m.width=g[u]),At(d?_*s/f:_&&s?f/_*s:0)},ji=function(e,t,i,r){var s;return mm||mh(),t in Ri&&t!=="transform"&&(t=Ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),ir[t]&&t!=="transform"?(s=pl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:gu(Bn(e,An))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=mu[t]&&mu[t](e,t,i)||Bn(e,t)||Xx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Hr(e,t,s,i)+i:s},ww=function(e,t,i,r){if(!i||i==="none"){var s=Ha(t,e,1),a=s&&Bn(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Bn(e,"borderTopColor"))}var o=new bn(this._pt,e.style,t,0,1,xy),l=0,c=0,u,f,d,p,_,g,m,h,v,x,S,b;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Bn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Bn(e,t)||r,g?e.style[t]=g:Gr(e,t)),u=[i,r],fy(u),i=u[0],r=u[1],d=i.match(ma)||[],b=r.match(ma)||[],b.length){for(;f=ma.exec(r);)m=f[0],v=r.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,S=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ta(p,m)+S),h=parseFloat(m),x=m.substr((h+"").length),l=ma.lastIndex-x.length,x||(x=x||Hn.units[t]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(p=Hr(e,t,g,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?Ey:My;return Gx.test(r)&&(o.e=0),this._pt=o,o},g0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Tw=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=g0[i]||i,t[1]=g0[r]||r,t.join(" ")},bw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ir[o]&&(l=1,o=o==="transformOrigin"?An:yt),Gr(i,o);l&&(Gr(i,yt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",pl(i,1),a.uncache=1,wy(r)))}},mu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new bn(e._pt,t,i,0,0,bw);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},hl=[1,0,0,1,0,0],Cy={},Py=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_0=function(e){var t=Bn(e,yt);return Py(t)?hl:t.substr(7).match(Bx).map(At)},vm=function(e,t){var i=e._gsap||ys(e),r=e.style,s=_0(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?hl:s):(s===hl&&!e.offsetParent&&e!==ba&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ba.appendChild(e)),s=_0(e),l?r.display=l:Gr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ba.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gh=function(e,t,i,r,s,a){var o=e._gsap,l=s||vm(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,b=parseFloat(x[1])||0,R,E,C,D;i?l!==hl&&(E=p*m-_*g)&&(C=S*(m/E)+b*(-g/E)+(g*v-m*h)/E,D=S*(-_/E)+b*(p/E)-(p*v-_*h)/E,S=C,b=D):(R=Ay(e),S=R.x+(~x[0].indexOf("%")?S/100*R.width:S),b=R.y+(~(x[1]||x[0]).indexOf("%")?b/100*R.height:b)),r||r!==!1&&o.smooth?(h=S-c,v=b-u,o.xOffset=f+(h*p+v*g)-h,o.yOffset=d+(h*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[An]="0px 0px",a&&(Tr(a,o,"xOrigin",c,S),Tr(a,o,"yOrigin",u,b),Tr(a,o,"xOffset",f,o.xOffset),Tr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+b)},pl=function(e,t){var i=e._gsap||new hy(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Bn(e,An)||"0",u,f,d,p,_,g,m,h,v,x,S,b,R,E,C,D,y,w,k,z,H,X,B,q,L,$,Z,re,Se,ve,W,J;return u=f=d=g=m=h=v=x=S=0,p=_=1,i.svg=!!(e.getCTM&&Ry(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),r.scale=r.rotate=r.translate="none"),E=vm(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),c=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),gh(e,q||c,!!q||i.originIsAbsolute,i.smooth!==!1,E)),b=i.xOrigin||0,R=i.yOrigin||0,E!==hl&&(w=E[0],k=E[1],z=E[2],H=E[3],u=X=E[4],f=B=E[5],E.length===6?(p=Math.sqrt(w*w+k*k),_=Math.sqrt(H*H+z*z),g=w||k?Bs(k,w)*as:0,v=z||H?Bs(z,H)*as+g:0,v&&(_*=Math.abs(Math.cos(v*Aa))),i.svg&&(u-=b-(b*w+R*z),f-=R-(b*k+R*H))):(J=E[6],ve=E[7],Z=E[8],re=E[9],Se=E[10],W=E[11],u=E[12],f=E[13],d=E[14],C=Bs(J,Se),m=C*as,C&&(D=Math.cos(-C),y=Math.sin(-C),q=X*D+Z*y,L=B*D+re*y,$=J*D+Se*y,Z=X*-y+Z*D,re=B*-y+re*D,Se=J*-y+Se*D,W=ve*-y+W*D,X=q,B=L,J=$),C=Bs(-z,Se),h=C*as,C&&(D=Math.cos(-C),y=Math.sin(-C),q=w*D-Z*y,L=k*D-re*y,$=z*D-Se*y,W=H*y+W*D,w=q,k=L,z=$),C=Bs(k,w),g=C*as,C&&(D=Math.cos(C),y=Math.sin(C),q=w*D+k*y,L=X*D+B*y,k=k*D-w*y,B=B*D-X*y,w=q,X=L),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=At(Math.sqrt(w*w+k*k+z*z)),_=At(Math.sqrt(B*B+J*J)),C=Bs(X,B),v=Math.abs(C)>2e-4?C*as:0,S=W?1/(W<0?-W:W):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Py(Bn(e,yt)),q&&e.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=At(p),i.scaleY=At(_),i.rotation=At(g)+o,i.rotationX=At(m)+o,i.rotationY=At(h)+o,i.skewX=v+o,i.skewY=x+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[An]=gu(c)),i.xOffset=i.yOffset=0,i.force3D=Hn.force3D,i.renderTransform=i.svg?Rw:by?Ly:Aw,i.uncache=0,i},gu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Lf=function(e,t,i){var r=tn(t);return At(parseFloat(t)+parseFloat(Hr(e,"x",i+"px",r)))+r},Aw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ly(e,t)},Kr="0deg",fo="0px",Zr=") ",Ly=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,d=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,S="",b=h==="auto"&&e&&e!==1||h===!0;if(x&&(f!==Kr||u!==Kr)){var R=parseFloat(u)*Aa,E=Math.sin(R),C=Math.cos(R),D;R=parseFloat(f)*Aa,D=Math.cos(R),a=Lf(v,a,E*D*-x),o=Lf(v,o,-Math.sin(R)*-x),l=Lf(v,l,C*D*-x+x)}m!==fo&&(S+="perspective("+m+Zr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(b||a!==fo||o!==fo||l!==fo)&&(S+=l!==fo||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Zr),c!==Kr&&(S+="rotate("+c+Zr),u!==Kr&&(S+="rotateY("+u+Zr),f!==Kr&&(S+="rotateX("+f+Zr),(d!==Kr||p!==Kr)&&(S+="skew("+d+", "+p+Zr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Zr),v.style[yt]=S||"translate(0, 0)"},Rw=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,d=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(a),S=parseFloat(o),b,R,E,C,D;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Aa,c*=Aa,b=Math.cos(l)*f,R=Math.sin(l)*f,E=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=Aa,D=Math.tan(c-u),D=Math.sqrt(1+D*D),E*=D,C*=D,u&&(D=Math.tan(u),D=Math.sqrt(1+D*D),b*=D,R*=D)),b=At(b),R=At(R),E=At(E),C=At(C)):(b=f,C=d,R=E=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=Hr(p,"x",a,"px"),S=Hr(p,"y",o,"px")),(_||g||m||h)&&(x=At(x+_-(_*b+g*E)+m),S=At(S+g-(_*R+g*C)+h)),(r||s)&&(D=p.getBBox(),x=At(x+r/100*D.width),S=At(S+s/100*D.height)),D="matrix("+b+","+R+","+E+","+C+","+x+","+S+")",p.setAttribute("transform",D),v&&(p.style[yt]=D)},Cw=function(e,t,i,r,s){var a=360,o=Ht(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?as:1),c=l-r,u=r+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*f0)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*f0)%a-~~(c/a)*a)),e._pt=d=new bn(e._pt,t,i,r,c,fw),d.e=u,d.u="deg",e._props.push(i),d},v0=function(e,t){for(var i in t)e[i]=t[i];return e},Pw=function(e,t,i){var r=v0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,d,p,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[yt]=t,o=pl(i,1),Gr(i,yt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[yt],a[yt]=t,o=pl(i,1),a[yt]=c);for(l in ir)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=tn(c),_=tn(u),f=p!==_?Hr(i,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new bn(e._pt,o,l,f,d-f,hh),e._pt.u=_||0,e._props.push(l));v0(o,r)};Tn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});mu[e>1?"border"+n:n]=function(o,l,c,u,f){var d,p;if(arguments.length<4)return d=a.map(function(_){return ji(o,_,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},a.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,p,f)}});var Dy={name:"css",register:mh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,f,d,p,_,g,m,h,v,x,S,b,R,E,C,D;mm||mh(),this.styles=this.styles||Ty(e),C=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Un[g]&&py(g,t,i,r,e,s)))){if(p=typeof u,_=mu[g],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=ul(u)),_)_(this,e,g,u,i)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Ur.lastIndex=0,Ur.test(c)||(m=tn(c),h=tn(u),h?m!==h&&(c=Hr(e,g,c,h)+h):m&&(u+=m)),this.add(o,"setProperty",c,u,r,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Ht(c)&&~c.indexOf("random(")&&(c=ul(c)),tn(c+"")||c==="auto"||(c+=Hn.units[g]||tn(ji(e,g))||""),(c+"").charAt(1)==="="&&(c=ji(e,g))):c=ji(e,g),d=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),g in Ri&&(g==="autoAlpha"&&(d===1&&ji(e,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,o.visibility),Tr(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ri[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ir,x){if(this.styles.save(g),D=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=Bn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=Bn(e,"perspective"),y?e.style.perspective=y:Gr(e,"perspective")}f=parseFloat(u)}if(S||(b=e._gsap,b.renderTransform&&!t.parseTransform||pl(e,t.parseTransform),R=t.smoothOrigin!==!1&&b.smooth,S=this._pt=new bn(this._pt,o,yt,0,1,b.renderTransform,b,0,-1),S.dep=1),g==="scale")this._pt=new bn(this._pt,b,"scaleY",b.scaleY,(v?Ta(b.scaleY,v+f):f)-b.scaleY||0,hh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(An,0,o[An]),u=Tw(u),b.svg?gh(e,u,0,R,0,this):(h=parseFloat(u.split(" ")[2])||0,h!==b.zOrigin&&Tr(this,b,"zOrigin",b.zOrigin,h),Tr(this,o,g,gu(c),gu(u)));continue}else if(g==="svgOrigin"){gh(e,u,1,R,0,this);continue}else if(g in Cy){Cw(this,b,g,d,v?Ta(d,v+u):u);continue}else if(g==="smoothOrigin"){Tr(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){Pw(this,u,e);continue}}else g in o||(g=Ha(g)||g);if(x||(f||f===0)&&(d||d===0)&&!uw.test(u)&&g in o)m=(c+"").substr((d+"").length),f||(f=0),h=tn(u)||(g in Hn.units?Hn.units[g]:m),m!==h&&(d=Hr(e,g,c,h)),this._pt=new bn(this._pt,x?b:o,g,d,(v?Ta(d,v+f):f)-d,!x&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?pw:hh),this._pt.u=h||0,x&&D!==u?(this._pt.b=c,this._pt.e=D,this._pt.r=hw):m!==h&&h!=="%"&&(this._pt.b=c,this._pt.r=dw);else if(g in o)ww.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,r,s);else if(g!=="parseTransform"){sm(g,u);continue}x||(g in o?C.push(g,0,o[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),a.push(g)}}E&&yy(this)},render:function(e,t){if(t.tween._time||!gm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ji,aliases:Ri,getSetter:function(e,t,i){var r=Ri[t];return r&&r.indexOf(",")<0&&(t=r),t in ir&&t!==An&&(e._gsap.x||ji(e,"x"))?i&&u0===i?t==="scale"?vw:_w:(u0=i||{})&&(t==="scale"?xw:yw):e.style&&!nm(e.style[t])?mw:~t.indexOf("-")?gw:hm(e,t)},core:{_removeProperty:Gr,_getMatrix:vm}};Rn.utils.checkPrefix=Ha;Rn.core.getStyleSaver=Ty;(function(n,e,t,i){var r=Tn(n+","+e+","+t,function(s){ir[s]=1});Tn(e,function(s){Hn.units[s]="deg",Cy[s]=1}),Ri[r[13]]=n+","+e,Tn(i,function(s){var a=s.split(":");Ri[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Hn.units[n]="px"});Rn.registerPlugin(Dy);var xm=Rn.registerPlugin(Dy)||Rn;xm.core.Tween;function Lw({active:n,onMid:e,onComplete:t}){const i=oe.useRef(null),[r,s]=oe.useState(!1);return oe.useEffect(()=>{if(!n||!i.current)return;s(!1);const a=i.current,o=xm.timeline();return o.fromTo(a,{opacity:0},{opacity:1,duration:.75,ease:"power2.inOut"}),o.to(a,{opacity:1,duration:.18,onComplete:()=>{r||(s(!0),e==null||e())}}),o.to(a,{opacity:0,duration:.95,ease:"power2.inOut",onComplete:()=>{t==null||t()}}),()=>{o.kill()}},[n,e,t,r]),n?M.jsxs("div",{ref:i,className:"scene-transition","aria-hidden":"true",children:[M.jsx("div",{className:"scene-transition__glow"}),M.jsxs("div",{className:"scene-transition__petals",children:[M.jsx("span",{children:"🌹"}),M.jsx("span",{children:"✨"}),M.jsx("span",{children:"🌸"}),M.jsx("span",{children:"💗"}),M.jsx("span",{children:"🌹"}),M.jsx("span",{children:"✨"}),M.jsx("span",{children:"🌹"}),M.jsx("span",{children:"💫"})]}),M.jsxs("div",{className:"scene-transition__message",children:[M.jsx("span",{children:"🌹"}),M.jsxs("p",{children:["Something beautiful",M.jsx("br",{}),"is waiting..."]}),M.jsx("span",{children:"✨"})]})]}):null}function Dw(){const[n,e]=oe.useState("letter");return M.jsx("div",{style:oi.scene,children:n==="letter"?M.jsx("div",{style:oi.paper,children:M.jsxs("div",{style:oi.letter,children:[Xt.letterText.split(`
`).map((t,i)=>M.jsx("p",{style:oi.line,children:t||" "},i)),M.jsx("button",{style:oi.btn,onClick:()=>e("reveal"),children:"💝 Reveal the Surprise"})]})}):M.jsxs("div",{style:oi.reveal,children:[M.jsx("div",{style:oi.heart,children:"❤️"}),M.jsx("p",{style:oi.revealTitle,children:"🌹 100,001 ROSES 🌹"}),M.jsx("div",{style:oi.finalMsg,children:Xt.finalMessage.split(`
`).map((t,i)=>M.jsx("p",{style:{...oi.line,color:"#3a2a1a"},children:t||" "},i))}),M.jsx("button",{style:oi.btn,onClick:()=>e("letter"),children:"Explore Again 🌹"})]})})}const oi={scene:{position:"fixed",inset:0,background:"radial-gradient(ellipse at center, #4a1942 0%, #2a1040 60%, #1a0a1f 100%)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"auto",padding:"1rem"},paper:{background:"linear-gradient(135deg, #fdf6e3, #f5ead0)",borderRadius:"8px",padding:"2rem",maxWidth:"500px",boxShadow:"0 20px 60px rgba(0,0,0,0.4)",transform:"rotate(-1deg)"},letter:{fontFamily:"var(--font-hand)",color:"#3a2a1a",lineHeight:1.6,fontSize:"1.2rem"},line:{minHeight:"1.5em",margin:0},btn:{fontFamily:"var(--font-hand)",fontSize:"1.3rem",padding:"0.7rem 1.8rem",borderRadius:"999px",background:"linear-gradient(135deg, #e63973, #ff3b8d)",color:"#fff",border:"none",cursor:"pointer",marginTop:"1.5rem",boxShadow:"0 4px 20px rgba(230,57,115,0.4)"},reveal:{textAlign:"center",maxWidth:"500px"},heart:{fontSize:"5rem",animation:"float 3s ease-in-out infinite"},revealTitle:{fontFamily:"var(--font-hand)",fontSize:"clamp(1.8rem, 6vw, 3rem)",color:"#ffd700",textShadow:"0 0 30px rgba(255,215,0,0.5)",margin:"1rem 0"},finalMsg:{background:"rgba(253,246,227,0.95)",borderRadius:"8px",padding:"1.5rem",marginTop:"1.5rem",fontFamily:"var(--font-hand)",fontSize:"1.2rem",lineHeight:1.6,transform:"rotate(-1deg)",boxShadow:"0 20px 60px rgba(0,0,0,0.4)"}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ym="169",Nw=0,x0=1,Iw=2,Ny=1,Uw=2,Gi=3,Vr=0,un=1,Xi=2,Or=0,Ra=1,Bo=2,y0=3,S0=4,Ow=5,cs=100,Fw=101,kw=102,zw=103,Bw=104,Gw=200,Hw=201,Vw=202,Ww=203,_h=204,vh=205,jw=206,Xw=207,Yw=208,qw=209,$w=210,Kw=211,Zw=212,Qw=213,Jw=214,xh=0,yh=1,Sh=2,Va=3,Mh=4,Eh=5,wh=6,Th=7,Iy=0,eT=1,tT=2,Fr=0,nT=1,iT=2,rT=3,Uy=4,sT=5,aT=6,oT=7,Oy=300,Wa=301,ja=302,bh=303,Ah=304,Gu=306,Rh=1e3,gs=1001,Ch=1002,yn=1003,lT=1004,Xl=1005,gi=1006,Df=1007,_s=1008,rr=1009,Fy=1010,ky=1011,ml=1012,Sm=1013,Ps=1014,Ci=1015,El=1016,Mm=1017,Em=1018,Xa=1020,zy=35902,By=1021,Gy=1022,vi=1023,Hy=1024,Vy=1025,Ca=1026,Ya=1027,wm=1028,Tm=1029,Wy=1030,bm=1031,Am=1033,Dc=33776,Nc=33777,Ic=33778,Uc=33779,Ph=35840,Lh=35841,Dh=35842,Nh=35843,Ih=36196,Uh=37492,Oh=37496,Fh=37808,kh=37809,zh=37810,Bh=37811,Gh=37812,Hh=37813,Vh=37814,Wh=37815,jh=37816,Xh=37817,Yh=37818,qh=37819,$h=37820,Kh=37821,Oc=36492,Zh=36494,Qh=36495,jy=36283,Jh=36284,ep=36285,tp=36286,cT=3200,uT=3201,Xy=0,fT=1,yr="",hi="srgb",qr="srgb-linear",Rm="display-p3",Hu="display-p3-linear",_u="linear",ht="srgb",vu="rec709",xu="p3",Gs=7680,M0=519,dT=512,hT=513,pT=514,Yy=515,mT=516,gT=517,_T=518,vT=519,E0=35044,w0=35048,T0="300 es",$i=2e3,yu=2001;class Qa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let b0=1234567;const Go=Math.PI/180,gl=180/Math.PI;function Ja(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function ln(n,e,t){return Math.max(e,Math.min(t,n))}function Cm(n,e){return(n%e+e)%e}function xT(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function yT(n,e,t){return n!==e?(t-n)/(e-n):0}function Ho(n,e,t){return(1-t)*n+t*e}function ST(n,e,t,i){return Ho(n,e,1-Math.exp(-t*i))}function MT(n,e=1){return e-Math.abs(Cm(n,e*2)-e)}function ET(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function wT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function TT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function bT(n,e){return n+Math.random()*(e-n)}function AT(n){return n*(.5-Math.random())}function RT(n){n!==void 0&&(b0=n);let e=b0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function CT(n){return n*Go}function PT(n){return n*gl}function LT(n){return(n&n-1)===0&&n!==0}function DT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function NT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function IT(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function na(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pi={DEG2RAD:Go,RAD2DEG:gl,generateUUID:Ja,clamp:ln,euclideanModulo:Cm,mapLinear:xT,inverseLerp:yT,lerp:Ho,damp:ST,pingpong:MT,smoothstep:ET,smootherstep:wT,randInt:TT,randFloat:bT,randFloatSpread:AT,seededRandom:RT,degToRad:CT,radToDeg:PT,isPowerOfTwo:LT,ceilPowerOfTwo:DT,floorPowerOfTwo:NT,setQuaternionFromProperEuler:IT,normalize:sn,denormalize:na};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,i,r,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],v=r[1],x=r[4],S=r[7],b=r[2],R=r[5],E=r[8];return s[0]=a*g+o*v+l*b,s[3]=a*m+o*x+l*R,s[6]=a*h+o*S+l*E,s[1]=c*g+u*v+f*b,s[4]=c*m+u*x+f*R,s[7]=c*h+u*S+f*E,s[2]=d*g+p*v+_*b,s[5]=d*m+p*x+_*R,s[8]=d*h+p*S+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Nf.makeScale(e,t)),this}rotate(e){return this.premultiply(Nf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new Fe;function qy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Su(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function UT(){const n=Su("canvas");return n.style.display="block",n}const A0={};function Fc(n){n in A0||(A0[n]=!0,console.warn(n))}function OT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function FT(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kT(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const R0=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),C0=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ho={[qr]:{transfer:_u,primaries:vu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[hi]:{transfer:ht,primaries:vu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Hu]:{transfer:_u,primaries:xu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(C0),fromReference:n=>n.applyMatrix3(R0)},[Rm]:{transfer:ht,primaries:xu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(C0),fromReference:n=>n.applyMatrix3(R0).convertLinearToSRGB()}},zT=new Set([qr,Hu]),Je={enabled:!0,_workingColorSpace:qr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!zT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ho[e].toReference,r=ho[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ho[n].primaries},getTransfer:function(n){return n===yr?_u:ho[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ho[e].luminanceCoefficients)}};function Pa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function If(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hs;class BT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=Su("canvas")),Hs.width=e.width,Hs.height=e.height;const i=Hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Su("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pa(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pa(t[i]/255)*255):t[i]=Pa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GT=0;class $y{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uf(r[a].image)):s.push(Uf(r[a]))}else s=Uf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Uf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?BT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HT=0;class fn extends Qa{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=gs,r=gs,s=gi,a=_s,o=vi,l=rr,c=fn.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=Ja(),this.name="",this.source=new $y(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Oy;fn.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(p+1)/2,b=(h+1)/2,R=(u+d)/4,E=(f+g)/4,C=(_+m)/4;return x>S&&x>b?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=E/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=C/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=E/s,r=C/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VT extends Qa{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $y(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends VT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ky extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WT extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==p||u!==_){let m=1-o;const h=l*d+c*p+u*_+f*g,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const b=Math.sqrt(x),R=Math.atan2(b,h*v);m=Math.sin(m*R)/b,o=Math.sin(o*R)/b}const S=o*v;if(l=l*m+d*S,c=c*m+p*S,u=u*m+_*S,f=f*m+g*S,m===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*p-c*d,e[t+1]=l*_+u*d+c*f-o*p,e[t+2]=c*_+u*p+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(P0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(P0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Of.copy(this).projectOnVector(e),this.sub(Of)}reflect(e){return this.sub(Of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Of=new I,P0=new wl;class Us{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(s,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yl.copy(i.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),ql.subVectors(this.max,po),Vs.subVectors(e.a,po),Ws.subVectors(e.b,po),js.subVectors(e.c,po),ur.subVectors(Ws,Vs),fr.subVectors(js,Ws),Qr.subVectors(Vs,js);let t=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-Qr.z,Qr.y,ur.z,0,-ur.x,fr.z,0,-fr.x,Qr.z,0,-Qr.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-Qr.y,Qr.x,0];return!Ff(t,Vs,Ws,js,ql)||(t=[1,0,0,0,1,0,0,0,1],!Ff(t,Vs,Ws,js,ql))?!1:($l.crossVectors(ur,fr),t=[$l.x,$l.y,$l.z],Ff(t,Vs,Ws,js,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new I,new I,new I,new I,new I,new I,new I,new I],li=new I,Yl=new Us,Vs=new I,Ws=new I,js=new I,ur=new I,fr=new I,Qr=new I,po=new I,ql=new I,$l=new I,Jr=new I;function Ff(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Jr.fromArray(n,s);const o=r.x*Math.abs(Jr.x)+r.y*Math.abs(Jr.y)+r.z*Math.abs(Jr.z),l=e.dot(Jr),c=t.dot(Jr),u=i.dot(Jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jT=new Us,mo=new I,kf=new I;class eo{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const t=mo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(kf)),this.expandByPoint(mo.copy(e.center).sub(kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new I,zf=new I,Kl=new I,dr=new I,Bf=new I,Zl=new I,Gf=new I;class Pm{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zf.copy(e).add(t).multiplyScalar(.5),Kl.copy(t).sub(e).normalize(),dr.copy(this.origin).sub(zf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Kl),o=dr.dot(this.direction),l=-dr.dot(Kl),c=dr.lengthSq(),u=Math.abs(1-a*a);let f,d,p,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(zf).addScaledVector(Kl,d),p}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,r,s){Bf.subVectors(t,e),Zl.subVectors(i,e),Gf.crossVectors(Bf,Zl);let a=this.direction.dot(Gf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dr.subVectors(this.origin,e);const l=o*this.direction.dot(Zl.crossVectors(dr,Zl));if(l<0)return null;const c=o*this.direction.dot(Bf.cross(dr));if(c<0||l+c>a)return null;const u=-o*dr.dot(Gf);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,r,s,a,o,l,c,u,f,d,p,_,g,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,p,_,g,m)}set(e,t,i,r,s,a,o,l,c,u,f,d,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,g=c*f;t[0]=d+g*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,g=c*f;t[0]=d-g*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=a*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XT,e,YT)}lookAt(e,t,i){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),hr.crossVectors(i,Dn),hr.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),hr.crossVectors(i,Dn)),hr.normalize(),Ql.crossVectors(Dn,hr),r[0]=hr.x,r[4]=Ql.x,r[8]=Dn.x,r[1]=hr.y,r[5]=Ql.y,r[9]=Dn.y,r[2]=hr.z,r[6]=Ql.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],v=i[3],x=i[7],S=i[11],b=i[15],R=r[0],E=r[4],C=r[8],D=r[12],y=r[1],w=r[5],k=r[9],z=r[13],H=r[2],X=r[6],B=r[10],q=r[14],L=r[3],$=r[7],Z=r[11],re=r[15];return s[0]=a*R+o*y+l*H+c*L,s[4]=a*E+o*w+l*X+c*$,s[8]=a*C+o*k+l*B+c*Z,s[12]=a*D+o*z+l*q+c*re,s[1]=u*R+f*y+d*H+p*L,s[5]=u*E+f*w+d*X+p*$,s[9]=u*C+f*k+d*B+p*Z,s[13]=u*D+f*z+d*q+p*re,s[2]=_*R+g*y+m*H+h*L,s[6]=_*E+g*w+m*X+h*$,s[10]=_*C+g*k+m*B+h*Z,s[14]=_*D+g*z+m*q+h*re,s[3]=v*R+x*y+S*H+b*L,s[7]=v*E+x*w+S*X+b*$,s[11]=v*C+x*k+S*B+b*Z,s[15]=v*D+x*z+S*q+b*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+g*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*f-t*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],v=f*m*c-g*d*c+g*l*p-o*m*p-f*l*h+o*d*h,x=_*d*c-u*m*c-_*l*p+a*m*p+u*l*h-a*d*h,S=u*g*c-_*f*c+_*o*p-a*g*p-u*o*h+a*f*h,b=_*f*l-u*g*l-_*o*d+a*g*d+u*o*m-a*f*m,R=t*v+i*x+r*S+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return e[0]=v*E,e[1]=(g*d*s-f*m*s-g*r*p+i*m*p+f*r*h-i*d*h)*E,e[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*h+i*l*h)*E,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*E,e[4]=x*E,e[5]=(u*m*s-_*d*s+_*r*p-t*m*p-u*r*h+t*d*h)*E,e[6]=(_*l*s-a*m*s-_*r*c+t*m*c+a*r*h-t*l*h)*E,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*E,e[8]=S*E,e[9]=(_*f*s-u*g*s-_*i*p+t*g*p+u*i*h-t*f*h)*E,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*h+t*o*h)*E,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*E,e[12]=b*E,e[13]=(u*g*r-_*f*r+_*i*d-t*g*d-u*i*m+t*f*m)*E,e[14]=(_*o*r-a*g*r-_*i*l+t*g*l+a*i*m-t*o*m)*E,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,_=s*f,g=a*u,m=a*f,h=o*f,v=l*c,x=l*u,S=l*f,b=i.x,R=i.y,E=i.z;return r[0]=(1-(g+h))*b,r[1]=(p+S)*b,r[2]=(_-x)*b,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(d+h))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(_+x)*E,r[9]=(m-v)*E,r[10]=(1-(d+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Xs.set(r[0],r[1],r[2]).length();const a=Xs.set(r[4],r[5],r[6]).length(),o=Xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ci.copy(this);const c=1/s,u=1/a,f=1/o;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=f,ci.elements[9]*=f,ci.elements[10]*=f,t.setFromRotationMatrix(ci),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=$i){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,_;if(o===$i)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===yu)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=$i){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,p=(i+r)*u;let _,g;if(o===$i)_=(a+s)*f,g=-2*f;else if(o===yu)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xs=new I,ci=new st,XT=new I(0,0,0),YT=new I(1,1,1),hr=new I,Ql=new I,Dn=new I,L0=new st,D0=new wl;class Ii{constructor(e=0,t=0,i=0,r=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return L0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return D0.setFromEuler(this),this.setFromQuaternion(D0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Lm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qT=0;const N0=new I,Ys=new wl,ki=new st,Jl=new I,go=new I,$T=new I,KT=new wl,I0=new I(1,0,0),U0=new I(0,1,0),O0=new I(0,0,1),F0={type:"added"},ZT={type:"removed"},qs={type:"childadded",child:null},Hf={type:"childremoved",child:null};class Ut extends Qa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new I,t=new Ii,i=new wl,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Fe}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(I0,e)}rotateY(e){return this.rotateOnAxis(U0,e)}rotateZ(e){return this.rotateOnAxis(O0,e)}translateOnAxis(e,t){return N0.copy(e).applyQuaternion(this.quaternion),this.position.add(N0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(I0,e)}translateY(e){return this.translateOnAxis(U0,e)}translateZ(e){return this.translateOnAxis(O0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jl.copy(e):Jl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(go,Jl,this.up):ki.lookAt(Jl,go,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),Ys.setFromRotationMatrix(ki),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F0),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ZT),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F0),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,$T),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,KT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new I,zi=new I,Vf=new I,Bi=new I,$s=new I,Ks=new I,k0=new I,Wf=new I,jf=new I,Xf=new I,Yf=new rt,qf=new rt,$f=new rt;class _i{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ui.subVectors(e,t),r.cross(ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ui.subVectors(r,t),zi.subVectors(i,t),Vf.subVectors(e,t);const a=ui.dot(ui),o=ui.dot(zi),l=ui.dot(Vf),c=zi.dot(zi),u=zi.dot(Vf),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Yf.setScalar(0),qf.setScalar(0),$f.setScalar(0),Yf.fromBufferAttribute(e,t),qf.fromBufferAttribute(e,i),$f.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yf,s.x),a.addScaledVector(qf,s.y),a.addScaledVector($f,s.z),a}static isFrontFacing(e,t,i,r){return ui.subVectors(i,t),zi.subVectors(e,t),ui.cross(zi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ui.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;$s.subVectors(r,i),Ks.subVectors(s,i),Wf.subVectors(e,i);const l=$s.dot(Wf),c=Ks.dot(Wf);if(l<=0&&c<=0)return t.copy(i);jf.subVectors(e,r);const u=$s.dot(jf),f=Ks.dot(jf);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector($s,a);Xf.subVectors(e,s);const p=$s.dot(Xf),_=Ks.dot(Xf);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ks,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return k0.subVectors(s,r),o=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(k0,o);const h=1/(m+g+d);return a=g*h,o=d*h,t.copy(i).addScaledVector($s,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},ec={h:0,s:0,l:0};function Kf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Cm(e,1),t=ln(t,0,1),i=ln(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Kf(a,s,e+1/3),this.g=Kf(a,s,e),this.b=Kf(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=hi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const i=Zy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=If(e.r),this.g=If(e.g),this.b=If(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Je.fromWorkingColorSpace(Jt.copy(this),e),Math.round(ln(Jt.r*255,0,255))*65536+Math.round(ln(Jt.g*255,0,255))*256+Math.round(ln(Jt.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Jt.copy(this),t);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=hi){Je.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,r=Jt.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(ec);const i=Ho(pr.h,ec.h,t),r=Ho(pr.s,ec.s,t),s=Ho(pr.l,ec.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new ke;ke.NAMES=Zy;let QT=0;class Os extends Qa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Ra,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ra&&(i.blending=this.blending),this.side!==Vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_h&&(i.blendSrc=this.blendSrc),this.blendDst!==vh&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Va&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dm extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Iy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new I,tc=new Ye;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=E0,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix3(e),this.setXY(t,tc.x,tc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=na(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=na(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=na(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E0&&(e.usage=this.usage),e}}class Qy extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jy extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gt extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let JT=0;const $n=new st,Zf=new Ut,Zs=new I,Nn=new Us,_o=new Us,kt=new I;class dn extends Qa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qy(e)?Jy:Qy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return Zf.lookAt(e),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_o.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(Nn.min,_o.min),Nn.expandByPoint(kt),kt.addVectors(Nn.max,_o.max),Nn.expandByPoint(kt)):(Nn.expandByPoint(_o.min),Nn.expandByPoint(_o.max))}Nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),kt.add(Zs)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new I,l[C]=new I;const c=new I,u=new I,f=new I,d=new Ye,p=new Ye,_=new Ye,g=new I,m=new I;function h(C,D,y){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,D),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,D),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const w=1/(p.x*_.y-_.x*p.y);isFinite(w)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(w),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(w),o[C].add(g),o[D].add(g),o[y].add(g),l[C].add(m),l[D].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,D=v.length;C<D;++C){const y=v[C],w=y.start,k=y.count;for(let z=w,H=w+k;z<H;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new I,S=new I,b=new I,R=new I;function E(C){b.fromBufferAttribute(r,C),R.copy(b);const D=o[C];x.copy(D),x.sub(b.multiplyScalar(b.dot(D))).normalize(),S.crossVectors(R,D);const w=S.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,w)}for(let C=0,D=v.length;C<D;++C){const y=v[C],w=y.start,k=y.count;for(let z=w,H=w+k;z<H;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new jt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const z0=new st,es=new Pm,nc=new eo,B0=new I,ic=new I,rc=new I,sc=new I,Qf=new I,ac=new I,G0=new I,oc=new I;class it extends Ut{constructor(e=new dn,t=new Dm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ac.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Qf.fromBufferAttribute(f,e),a?ac.addScaledVector(Qf,u):ac.addScaledVector(Qf.sub(t),u))}t.add(ac)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(s),es.copy(e.ray).recast(e.near),!(nc.containsPoint(es.origin)===!1&&(es.intersectSphere(nc,B0)===null||es.origin.distanceToSquared(B0)>(e.far-e.near)**2))&&(z0.copy(s).invert(),es.copy(e.ray).applyMatrix4(z0),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=x;S<b;S+=3){const R=o.getX(S),E=o.getX(S+1),C=o.getX(S+2);r=lc(this,h,e,i,c,u,f,R,E,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);r=lc(this,a,e,i,c,u,f,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=x;S<b;S+=3){const R=S,E=S+1,C=S+2;r=lc(this,h,e,i,c,u,f,R,E,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=m,x=m+1,S=m+2;r=lc(this,a,e,i,c,u,f,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function eb(n,e,t,i,r,s,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Vr,o),l===null)return null;oc.copy(o),oc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(oc);return c<t.near||c>t.far?null:{distance:c,point:oc.clone(),object:n}}function lc(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ic),n.getVertexPosition(l,rc),n.getVertexPosition(c,sc);const u=eb(n,e,t,i,ic,rc,sc,G0);if(u){const f=new I;_i.getBarycoord(G0,ic,rc,sc,f),r&&(u.uv=_i.getInterpolatedAttribute(r,o,l,c,f,new Ye)),s&&(u.uv1=_i.getInterpolatedAttribute(s,o,l,c,f,new Ye)),a&&(u.normal=_i.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};_i.getNormal(ic,rc,sc,d.normal),u.face=d,u.barycoord=f}return u}class Ki extends dn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function _(g,m,h,v,x,S,b,R,E,C,D){const y=S/E,w=b/C,k=S/2,z=b/2,H=R/2,X=E+1,B=C+1;let q=0,L=0;const $=new I;for(let Z=0;Z<B;Z++){const re=Z*w-z;for(let Se=0;Se<X;Se++){const ve=Se*y-k;$[g]=ve*v,$[m]=re*x,$[h]=H,c.push($.x,$.y,$.z),$[g]=0,$[m]=0,$[h]=R>0?1:-1,u.push($.x,$.y,$.z),f.push(Se/E),f.push(1-Z/C),q+=1}}for(let Z=0;Z<C;Z++)for(let re=0;re<E;re++){const Se=d+re+X*Z,ve=d+re+X*(Z+1),W=d+(re+1)+X*(Z+1),J=d+(re+1)+X*Z;l.push(Se,ve,J),l.push(ve,W,J),L+=6}o.addGroup(p,L,D),p+=L,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=qa(n[t]);for(const r in i)e[r]=i[r]}return e}function tb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function e1(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const nb={clone:qa,merge:an};var ib=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ib,this.fragmentShader=rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qa(e.uniforms),this.uniformsGroups=tb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class t1 extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new I,H0=new Ye,V0=new Ye;class On extends t1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,H0,V0),t.subVectors(V0,H0)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,Js=1;class sb extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(Qs,Js,e,t);r.layers=this.layers,this.add(r);const s=new On(Qs,Js,e,t);s.layers=this.layers,this.add(s);const a=new On(Qs,Js,e,t);a.layers=this.layers,this.add(a);const o=new On(Qs,Js,e,t);o.layers=this.layers,this.add(o);const l=new On(Qs,Js,e,t);l.layers=this.layers,this.add(l);const c=new On(Qs,Js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===$i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class n1 extends fn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wa,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ab extends Ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new n1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ki(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Or});s.uniforms.tEquirect.value=t;const a=new it(r,s),o=t.minFilter;return t.minFilter===_s&&(t.minFilter=gi),new sb(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Jf=new I,ob=new I,lb=new Fe;class os{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Jf.subVectors(i,t).cross(ob.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Jf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lb.getNormalMatrix(e),r=this.coplanarPoint(Jf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new eo,cc=new I;class Nm{constructor(e=new os,t=new os,i=new os,r=new os,s=new os,a=new os){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$i){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-p,S-h).normalize(),i[1].setComponents(l+s,d+c,m+p,S+h).normalize(),i[2].setComponents(l+a,d+u,m+_,S+v).normalize(),i[3].setComponents(l-a,d-u,m-_,S-v).normalize(),i[4].setComponents(l-o,d-f,m-g,S-x).normalize(),t===$i)i[5].setComponents(l+o,d+f,m+g,S+x).normalize();else if(t===yu)i[5].setComponents(o,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cc.x=r.normal.x>0?e.max.x:e.min.x,cc.y=r.normal.y>0?e.max.y:e.min.y,cc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i1(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cb(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],g=f[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const g=f[p];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Tl extends dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<u;h++){const v=h*d-a;for(let x=0;x<c;x++){const S=x*f-s;_.push(S,-v,0),g.push(0,0,1),m.push(x/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const x=v+c*h,S=v+c*(h+1),b=v+1+c*(h+1),R=v+1+c*h;p.push(x,S,R),p.push(S,b,R)}this.setIndex(p),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.widthSegments,e.heightSegments)}}var ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ib=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,n2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,c2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,z2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Z2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_A=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:ub,alphahash_pars_fragment:fb,alphamap_fragment:db,alphamap_pars_fragment:hb,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:_b,batching_pars_vertex:vb,batching_vertex:xb,begin_vertex:yb,beginnormal_vertex:Sb,bsdfs:Mb,iridescence_fragment:Eb,bumpmap_pars_fragment:wb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Ab,clipping_planes_vertex:Rb,color_fragment:Cb,color_pars_fragment:Pb,color_pars_vertex:Lb,color_vertex:Db,common:Nb,cube_uv_reflection_fragment:Ib,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Ob,displacementmap_vertex:Fb,emissivemap_fragment:kb,emissivemap_pars_fragment:zb,colorspace_fragment:Bb,colorspace_pars_fragment:Gb,envmap_fragment:Hb,envmap_common_pars_fragment:Vb,envmap_pars_fragment:Wb,envmap_pars_vertex:jb,envmap_physical_pars_fragment:n2,envmap_vertex:Xb,fog_vertex:Yb,fog_pars_vertex:qb,fog_fragment:$b,fog_pars_fragment:Kb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Qb,lights_lambert_fragment:Jb,lights_lambert_pars_fragment:e2,lights_pars_begin:t2,lights_toon_fragment:i2,lights_toon_pars_fragment:r2,lights_phong_fragment:s2,lights_phong_pars_fragment:a2,lights_physical_fragment:o2,lights_physical_pars_fragment:l2,lights_fragment_begin:c2,lights_fragment_maps:u2,lights_fragment_end:f2,logdepthbuf_fragment:d2,logdepthbuf_pars_fragment:h2,logdepthbuf_pars_vertex:p2,logdepthbuf_vertex:m2,map_fragment:g2,map_pars_fragment:_2,map_particle_fragment:v2,map_particle_pars_fragment:x2,metalnessmap_fragment:y2,metalnessmap_pars_fragment:S2,morphinstance_vertex:M2,morphcolor_vertex:E2,morphnormal_vertex:w2,morphtarget_pars_vertex:T2,morphtarget_vertex:b2,normal_fragment_begin:A2,normal_fragment_maps:R2,normal_pars_fragment:C2,normal_pars_vertex:P2,normal_vertex:L2,normalmap_pars_fragment:D2,clearcoat_normal_fragment_begin:N2,clearcoat_normal_fragment_maps:I2,clearcoat_pars_fragment:U2,iridescence_pars_fragment:O2,opaque_fragment:F2,packing:k2,premultiplied_alpha_fragment:z2,project_vertex:B2,dithering_fragment:G2,dithering_pars_fragment:H2,roughnessmap_fragment:V2,roughnessmap_pars_fragment:W2,shadowmap_pars_fragment:j2,shadowmap_pars_vertex:X2,shadowmap_vertex:Y2,shadowmask_pars_fragment:q2,skinbase_vertex:$2,skinning_pars_vertex:K2,skinning_vertex:Z2,skinnormal_vertex:Q2,specularmap_fragment:J2,specularmap_pars_fragment:eA,tonemapping_fragment:tA,tonemapping_pars_fragment:nA,transmission_fragment:iA,transmission_pars_fragment:rA,uv_pars_fragment:sA,uv_pars_vertex:aA,uv_vertex:oA,worldpos_vertex:lA,background_vert:cA,background_frag:uA,backgroundCube_vert:fA,backgroundCube_frag:dA,cube_vert:hA,cube_frag:pA,depth_vert:mA,depth_frag:gA,distanceRGBA_vert:_A,distanceRGBA_frag:vA,equirect_vert:xA,equirect_frag:yA,linedashed_vert:SA,linedashed_frag:MA,meshbasic_vert:EA,meshbasic_frag:wA,meshlambert_vert:TA,meshlambert_frag:bA,meshmatcap_vert:AA,meshmatcap_frag:RA,meshnormal_vert:CA,meshnormal_frag:PA,meshphong_vert:LA,meshphong_frag:DA,meshphysical_vert:NA,meshphysical_frag:IA,meshtoon_vert:UA,meshtoon_frag:OA,points_vert:FA,points_frag:kA,shadow_vert:zA,shadow_frag:BA,sprite_vert:GA,sprite_frag:HA},le={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Ti={basic:{uniforms:an([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:an([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:an([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:an([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:an([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:an([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:an([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:an([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:an([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:an([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:an([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:an([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:an([le.lights,le.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Ti.physical={uniforms:an([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const uc={r:0,b:0,g:0},ns=new Ii,VA=new st;function WA(n,e,t,i,r,s,a){const o=new ke(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function g(v){let x=!1;const S=_(v);S===null?h(o,l):S&&S.isColor&&(h(S,1),x=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Gu)?(u===void 0&&(u=new it(new Ki(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:qa(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ns.copy(x.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(VA.makeRotationFromEuler(ns)),u.material.toneMapped=Je.getTransfer(S.colorSpace)!==ht,(f!==S||d!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new it(new Tl(2,2),new sr({name:"BackgroundMaterial",uniforms:qa(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,x){v.getRGB(uc,e1(n)),i.buffers.color.setClear(uc.r,uc.g,uc.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(o,l)},render:g,addToRenderList:m}}function jA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,w,k,z,H){let X=!1;const B=f(z,k,w);s!==B&&(s=B,c(s.object)),X=p(y,z,k,H),X&&_(y,z,k,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(y,w,k,z),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,w,k){const z=k.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let X=H[w.id];X===void 0&&(X={},H[w.id]=X);let B=X[z];return B===void 0&&(B=d(l()),X[z]=B),B}function d(y){const w=[],k=[],z=[];for(let H=0;H<t;H++)w[H]=0,k[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,w,k,z){const H=s.attributes,X=w.attributes;let B=0;const q=k.getAttributes();for(const L in q)if(q[L].location>=0){const Z=H[L];let re=X[L];if(re===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;B++}return s.attributesNum!==B||s.index!==z}function _(y,w,k,z){const H={},X=w.attributes;let B=0;const q=k.getAttributes();for(const L in q)if(q[L].location>=0){let Z=X[L];Z===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),H[L]=re,B++}s.attributes=H,s.attributesNum=B,s.index=z}function g(){const y=s.newAttributes;for(let w=0,k=y.length;w<k;w++)y[w]=0}function m(y){h(y,0)}function h(y,w){const k=s.newAttributes,z=s.enabledAttributes,H=s.attributeDivisors;k[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),H[y]!==w&&(n.vertexAttribDivisor(y,w),H[y]=w)}function v(){const y=s.newAttributes,w=s.enabledAttributes;for(let k=0,z=w.length;k<z;k++)w[k]!==y[k]&&(n.disableVertexAttribArray(k),w[k]=0)}function x(y,w,k,z,H,X,B){B===!0?n.vertexAttribIPointer(y,w,k,H,X):n.vertexAttribPointer(y,w,k,z,H,X)}function S(y,w,k,z){g();const H=z.attributes,X=k.getAttributes(),B=w.defaultAttributeValues;for(const q in X){const L=X[q];if(L.location>=0){let $=H[q];if($===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const Z=$.normalized,re=$.itemSize,Se=e.get($);if(Se===void 0)continue;const ve=Se.buffer,W=Se.type,J=Se.bytesPerElement,he=W===n.INT||W===n.UNSIGNED_INT||$.gpuType===Sm;if($.isInterleavedBufferAttribute){const ue=$.data,Ie=ue.stride,Re=$.offset;if(ue.isInstancedInterleavedBuffer){for(let Ve=0;Ve<L.locationSize;Ve++)h(L.location+Ve,ue.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ve=0;Ve<L.locationSize;Ve++)m(L.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Ve=0;Ve<L.locationSize;Ve++)x(L.location+Ve,re/L.locationSize,W,Z,Ie*J,(Re+re/L.locationSize*Ve)*J,he)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<L.locationSize;ue++)h(L.location+ue,$.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<L.locationSize;ue++)m(L.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ue=0;ue<L.locationSize;ue++)x(L.location+ue,re/L.locationSize,W,Z,re*J,re/L.locationSize*ue*J,he)}}else if(B!==void 0){const Z=B[q];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(L.location,Z);break;case 3:n.vertexAttrib3fv(L.location,Z);break;case 4:n.vertexAttrib4fv(L.location,Z);break;default:n.vertexAttrib1fv(L.location,Z)}}}}v()}function b(){C();for(const y in i){const w=i[y];for(const k in w){const z=w[k];for(const H in z)u(z[H].object),delete z[H];delete w[k]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const k in w){const z=w[k];for(const H in z)u(z[H].object),delete z[H];delete w[k]}delete i[y.id]}function E(y){for(const w in i){const k=i[w];if(k[y.id]===void 0)continue;const z=k[y.id];for(const H in z)u(z[H].object),delete z[H];delete k[y.id]}}function C(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function XA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];for(let g=0;g<d.length;g++)t.update(_,i,d[g])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function YA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==vi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===El&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==rr&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ci&&!C)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:b,maxSamples:R}}function qA(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new os,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,x=v*4;let S=h.clippingState||null;l.value=S,S=u(_,d,x,p);for(let b=0;b!==x;++b)S[b]=t[b];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==g;++x,S+=4)a.copy(f[x]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function $A(n){let e=new WeakMap;function t(a,o){return o===bh?a.mapping=Wa:o===Ah&&(a.mapping=ja),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===bh||o===Ah)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ab(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class r1 extends t1{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _a=4,W0=[.125,.215,.35,.446,.526,.582],us=20,ed=new r1,j0=new ke;let td=null,nd=0,id=0,rd=!1;const ls=(1+Math.sqrt(5))/2,ea=1/ls,X0=[new I(-ls,ea,0),new I(ls,ea,0),new I(-ea,0,ls),new I(ea,0,ls),new I(0,ls,-ea),new I(0,ls,ea),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Y0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wa||e.mapping===ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:El,format:vi,colorSpace:qr,depthBuffer:!1},r=q0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KA(s)),this._blurMaterial=ZA(s,e,t)}return r}_compileMaterial(e){const t=new it(this._lodPlanes[0],e);this._renderer.compile(t,ed)}_sceneToCubeUV(e,t,i,r){const o=new On(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(j0),u.toneMapping=Fr,u.autoClear=!1;const p=new Dm({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),_=new it(new Ki,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(j0),g=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):v===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const x=this._cubeSize;fc(r,v*x,h>2?x:0,x,x),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Wa||e.mapping===ja;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=K0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;fc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ed)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=X0[(r-s-1)%X0.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new it(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*us-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):us;m>us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const h=[];let v=0;for(let E=0;E<us;++E){const C=E/g,D=Math.exp(-C*C/2);h.push(D),E===0?v+=D:E<m&&(v+=2*D)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const S=this._sizeLods[r],b=3*S*(r>x-_a?r-x+_a:0),R=4*(this._cubeSize-S);fc(t,b,R,3*S,2*S),l.setRenderTarget(t),l.render(f,ed)}}function KA(n){const e=[],t=[],i=[];let r=n;const s=n-_a+1+W0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-_a?l=W0[a-n+_a-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,g=3,m=2,h=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let R=0;R<p;R++){const E=R%3*2/3-1,C=R>2?0:-1,D=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(D,g*_*R),x.set(d,m*_*R);const y=[R,R,R,R,R,R];S.set(y,h*_*R)}const b=new dn;b.setAttribute("position",new jt(v,g)),b.setAttribute("uv",new jt(x,m)),b.setAttribute("faceIndex",new jt(S,h)),e.push(b),r>_a&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function q0(n,e,t){const i=new Ls(n,e,t);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ZA(n,e,t){const i=new Float32Array(us),r=new I(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function $0(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function K0(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Im(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function QA(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===bh||l===Ah,u=l===Wa||l===ja;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Y0(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Y0(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function JA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function eR(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,S=v.length;x<S;x+=3){const b=v[x+0],R=v[x+1],E=v[x+2];d.push(b,R,R,E,E,b)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const b=x+0,R=x+1,E=x+2;d.push(b,R,R,E,E,b)}}else return;const m=new(qy(d)?Jy:Qy)(d,1);m.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function tR(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,d*a,_),t.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function f(d,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,g,0,_);let h=0;for(let v=0;v<_;v++)h+=p[v];for(let v=0;v<g.length;v++)t.update(h,i,g[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function nR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function iR(n,e,t){const i=new WeakMap,r=new rt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*R*4*f),C=new Ky(E,b,R,f);C.type=Ci,C.needsUpdate=!0;const D=S*4;for(let w=0;w<f;w++){const k=h[w],z=v[w],H=x[w],X=b*R*4*w;for(let B=0;B<k.count;B++){const q=B*D;_===!0&&(r.fromBufferAttribute(k,B),E[X+q+0]=r.x,E[X+q+1]=r.y,E[X+q+2]=r.z,E[X+q+3]=0),g===!0&&(r.fromBufferAttribute(z,B),E[X+q+4]=r.x,E[X+q+5]=r.y,E[X+q+6]=r.z,E[X+q+7]=0),m===!0&&(r.fromBufferAttribute(H,B),E[X+q+8]=r.x,E[X+q+9]=r.y,E[X+q+10]=r.z,E[X+q+11]=H.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new Ye(b,R)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function rR(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class s1 extends fn{constructor(e,t,i,r,s,a,o,l,c,u=Ca){if(u!==Ca&&u!==Ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ca&&(i=Ps),i===void 0&&u===Ya&&(i=Xa),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const a1=new fn,Z0=new s1(1,1),o1=new Ky,l1=new WT,c1=new n1,Q0=[],J0=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function to(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Q0[r];if(s===void 0&&(s=new Float32Array(r),Q0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vu(n,e){let t=J0[e];t===void 0&&(t=new Int32Array(e),J0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function oR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function lR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function cR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;n_.set(i),n.uniformMatrix2fv(this.addr,!1,n_),Ft(t,i)}}function uR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;t_.set(i),n.uniformMatrix3fv(this.addr,!1,t_),Ft(t,i)}}function fR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;e_.set(i),n.uniformMatrix4fv(this.addr,!1,e_),Ft(t,i)}}function dR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function pR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function mR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function gR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _R(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function vR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function xR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function yR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Z0.compareFunction=Yy,s=Z0):s=a1,t.setTexture2D(e||s,r)}function SR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||l1,r)}function MR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||c1,r)}function ER(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||o1,r)}function wR(n){switch(n){case 5126:return sR;case 35664:return aR;case 35665:return oR;case 35666:return lR;case 35674:return cR;case 35675:return uR;case 35676:return fR;case 5124:case 35670:return dR;case 35667:case 35671:return hR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return gR;case 36294:return _R;case 36295:return vR;case 36296:return xR;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return MR;case 36289:case 36303:case 36311:case 36292:return ER}}function TR(n,e){n.uniform1fv(this.addr,e)}function bR(n,e){const t=to(e,this.size,2);n.uniform2fv(this.addr,t)}function AR(n,e){const t=to(e,this.size,3);n.uniform3fv(this.addr,t)}function RR(n,e){const t=to(e,this.size,4);n.uniform4fv(this.addr,t)}function CR(n,e){const t=to(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function PR(n,e){const t=to(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function LR(n,e){const t=to(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function DR(n,e){n.uniform1iv(this.addr,e)}function NR(n,e){n.uniform2iv(this.addr,e)}function IR(n,e){n.uniform3iv(this.addr,e)}function UR(n,e){n.uniform4iv(this.addr,e)}function OR(n,e){n.uniform1uiv(this.addr,e)}function FR(n,e){n.uniform2uiv(this.addr,e)}function kR(n,e){n.uniform3uiv(this.addr,e)}function zR(n,e){n.uniform4uiv(this.addr,e)}function BR(n,e,t){const i=this.cache,r=e.length,s=Vu(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||a1,s[a])}function GR(n,e,t){const i=this.cache,r=e.length,s=Vu(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||l1,s[a])}function HR(n,e,t){const i=this.cache,r=e.length,s=Vu(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||c1,s[a])}function VR(n,e,t){const i=this.cache,r=e.length,s=Vu(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||o1,s[a])}function WR(n){switch(n){case 5126:return TR;case 35664:return bR;case 35665:return AR;case 35666:return RR;case 35674:return CR;case 35675:return PR;case 35676:return LR;case 5124:case 35670:return DR;case 35667:case 35671:return NR;case 35668:case 35672:return IR;case 35669:case 35673:return UR;case 5125:return OR;case 36294:return FR;case 36295:return kR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return HR;case 36289:case 36303:case 36311:case 36292:return VR}}class jR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wR(t.type)}}class XR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WR(t.type)}}class YR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function i_(n,e){n.seq.push(e),n.map[e.id]=e}function qR(n,e,t){const i=n.name,r=i.length;for(sd.lastIndex=0;;){const s=sd.exec(i),a=sd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){i_(t,c===void 0?new jR(o,n,e):new XR(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new YR(o),i_(t,f)),t=f}}}class kc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);qR(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function r_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $R=37297;let KR=0;function ZR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function QR(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===xu&&t===vu?i="LinearDisplayP3ToLinearSRGB":e===vu&&t===xu&&(i="LinearSRGBToLinearDisplayP3"),n){case qr:case Hu:return[i,"LinearTransferOETF"];case hi:case Rm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function s_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ZR(n.getShaderSource(e),a)}else return r}function JR(n,e){const t=QR(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function eC(n,e){let t;switch(e){case nT:t="Linear";break;case iT:t="Reinhard";break;case rT:t="Cineon";break;case Uy:t="ACESFilmic";break;case aT:t="AgX";break;case oT:t="Neutral";break;case sT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dc=new I;function tC(){Je.getLuminanceCoefficients(dc);const n=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function iC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ao(n){return n!==""}function a_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sC=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(n){return n.replace(sC,oC)}const aC=new Map;function oC(n,e){let t=Oe[e];if(t===void 0){const i=aC.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return np(t)}const lC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l_(n){return n.replace(lC,cC)}function cC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function c_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ny?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function fC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wa:case ja:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dC(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ja:e="ENVMAP_MODE_REFRACTION";break}return e}function hC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Iy:e="ENVMAP_BLENDING_MULTIPLY";break;case eT:e="ENVMAP_BLENDING_MIX";break;case tT:e="ENVMAP_BLENDING_ADD";break}return e}function pC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mC(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=uC(t),c=fC(t),u=dC(t),f=hC(t),d=pC(t),p=nC(t),_=iC(s),g=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ao).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ao).join(`
`),h.length>0&&(h+=`
`)):(m=[c_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),h=[c_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Fr?eC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,JR("linearToOutputTexel",t.outputColorSpace),tC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ao).join(`
`)),a=np(a),a=a_(a,t),a=o_(a,t),o=np(o),o=a_(o,t),o=o_(o,t),a=l_(a),o=l_(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===T0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===T0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+a,S=v+h+o,b=r_(r,r.VERTEX_SHADER,x),R=r_(r,r.FRAGMENT_SHADER,S);r.attachShader(g,b),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function E(w){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(b).trim(),H=r.getShaderInfoLog(R).trim();let X=!0,B=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,b,R);else{const q=s_(r,b,"vertex"),L=s_(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+q+`
`+L)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||H==="")&&(B=!1);B&&(w.diagnostics={runnable:X,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:h}})}r.deleteShader(b),r.deleteShader(R),C=new kc(r,g),D=rC(r,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let D;this.getAttributes=function(){return D===void 0&&E(this),D};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,$R)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=R,this}let gC=0;class _C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vC(e),t.set(e,i)),i}}class vC{constructor(e){this.id=gC++,this.code=e,this.usedTimes=0}}function xC(n,e,t,i,r,s,a){const o=new Lm,l=new _C,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function h(y,w,k,z,H){const X=z.fog,B=H.geometry,q=y.isMeshStandardMaterial?z.environment:null,L=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),$=L&&L.mapping===Gu?L.image.height:null,Z=g[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=re!==void 0?re.length:0;let ve=0;B.morphAttributes.position!==void 0&&(ve=1),B.morphAttributes.normal!==void 0&&(ve=2),B.morphAttributes.color!==void 0&&(ve=3);let W,J,he,ue;if(Z){const gn=Ti[Z];W=gn.vertexShader,J=gn.fragmentShader}else W=y.vertexShader,J=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const Ie=n.getRenderTarget(),Re=H.isInstancedMesh===!0,Ve=H.isBatchedMesh===!0,nt=!!y.map,We=!!y.matcap,N=!!L,Cn=!!y.aoMap,Ge=!!y.lightMap,qe=!!y.bumpMap,Pe=!!y.normalMap,ut=!!y.displacementMap,Ne=!!y.emissiveMap,P=!!y.metalnessMap,T=!!y.roughnessMap,G=y.anisotropy>0,Q=y.clearcoat>0,te=y.dispersion>0,K=y.iridescence>0,we=y.sheen>0,ce=y.transmission>0,_e=G&&!!y.anisotropyMap,$e=Q&&!!y.clearcoatMap,se=Q&&!!y.clearcoatNormalMap,xe=Q&&!!y.clearcoatRoughnessMap,Le=K&&!!y.iridescenceMap,De=K&&!!y.iridescenceThicknessMap,ye=we&&!!y.sheenColorMap,He=we&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,lt=!!y.specularColorMap,U=!!y.specularIntensityMap,pe=ce&&!!y.transmissionMap,Y=ce&&!!y.thicknessMap,ee=!!y.gradientMap,fe=!!y.alphaMap,me=y.alphaTest>0,je=!!y.alphaHash,Ct=!!y.extensions;let mn=Fr;y.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(mn=n.toneMapping);const Ke={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:J,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ve,batchingColor:Ve&&H._colorsTexture!==null,instancing:Re,instancingColor:Re&&H.instanceColor!==null,instancingMorph:Re&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ie===null?n.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:qr,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:We,envMap:N,envMapMode:N&&L.mapping,envMapCubeUVHeight:$,aoMap:Cn,lightMap:Ge,bumpMap:qe,normalMap:Pe,displacementMap:p&&ut,emissiveMap:Ne,normalMapObjectSpace:Pe&&y.normalMapType===fT,normalMapTangentSpace:Pe&&y.normalMapType===Xy,metalnessMap:P,roughnessMap:T,anisotropy:G,anisotropyMap:_e,clearcoat:Q,clearcoatMap:$e,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:te,iridescence:K,iridescenceMap:Le,iridescenceThicknessMap:De,sheen:we,sheenColorMap:ye,sheenRoughnessMap:He,specularMap:Ue,specularColorMap:lt,specularIntensityMap:U,transmission:ce,transmissionMap:pe,thicknessMap:Y,gradientMap:ee,opaque:y.transparent===!1&&y.blending===Ra&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:me,alphaHash:je,combine:y.combine,mapUv:nt&&m(y.map.channel),aoMapUv:Cn&&m(y.aoMap.channel),lightMapUv:Ge&&m(y.lightMap.channel),bumpMapUv:qe&&m(y.bumpMap.channel),normalMapUv:Pe&&m(y.normalMap.channel),displacementMapUv:ut&&m(y.displacementMap.channel),emissiveMapUv:Ne&&m(y.emissiveMap.channel),metalnessMapUv:P&&m(y.metalnessMap.channel),roughnessMapUv:T&&m(y.roughnessMap.channel),anisotropyMapUv:_e&&m(y.anisotropyMap.channel),clearcoatMapUv:$e&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(y.sheenRoughnessMap.channel),specularMapUv:Ue&&m(y.specularMap.channel),specularColorMapUv:lt&&m(y.specularColorMap.channel),specularIntensityMapUv:U&&m(y.specularIntensityMap.channel),transmissionMapUv:pe&&m(y.transmissionMap.channel),thicknessMapUv:Y&&m(y.thicknessMap.channel),alphaMapUv:fe&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Pe||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!B.attributes.uv&&(nt||fe),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ve,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:mn,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xi,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ct&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&y.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function v(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)w.push(k),w.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(x(w,y),S(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),y.push(o.mask)}function b(y){const w=g[y.type];let k;if(w){const z=Ti[w];k=nb.clone(z.uniforms)}else k=y.uniforms;return k}function R(y,w){let k;for(let z=0,H=u.length;z<H;z++){const X=u[z];if(X.cacheKey===w){k=X,++k.usedTimes;break}}return k===void 0&&(k=new mC(n,w,y,s),u.push(k)),k}function E(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function D(){l.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:D}}function yC(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function SC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function u_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function f_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,p,_,g,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function o(f,d,p,_,g,m){const h=a(f,d,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,_,g,m){const h=a(f,d,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||SC),i.length>1&&i.sort(d||u_),r.length>1&&r.sort(d||u_)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function MC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new f_,n.set(i,[a])):r>=s.length?(a=new f_,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function EC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function wC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let TC=0;function bC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AC(n){const e=new EC,t=wC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new st,a=new st;function o(c){let u=0,f=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let p=0,_=0,g=0,m=0,h=0,v=0,x=0,S=0,b=0,R=0,E=0;c.sort(bC);for(let D=0,y=c.length;D<y;D++){const w=c[D],k=w.color,z=w.intensity,H=w.distance,X=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=k.r*z,f+=k.g*z,d+=k.b*z;else if(w.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(w.sh.coefficients[B],z);E++}else if(w.isDirectionalLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const q=w.shadow,L=t.get(w);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=w.shadow.matrix,v++}i.directional[p]=B,p++}else if(w.isSpotLight){const B=e.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(k).multiplyScalar(z),B.distance=H,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,i.spot[g]=B;const q=w.shadow;if(w.map&&(i.spotLightMap[b]=w.map,b++,q.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[g]=q.matrix,w.castShadow){const L=t.get(w);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.spotShadow[g]=L,i.spotShadowMap[g]=X,S++}g++}else if(w.isRectAreaLight){const B=e.get(w);B.color.copy(k).multiplyScalar(z),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=B,m++}else if(w.isPointLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const q=w.shadow,L=t.get(w);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,L.shadowCameraNear=q.camera.near,L.shadowCameraFar=q.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=w.shadow.matrix,x++}i.point[_]=B,_++}else if(w.isHemisphereLight){const B=e.get(w);B.skyColor.copy(w.color).multiplyScalar(z),B.groundColor.copy(w.groundColor).multiplyScalar(z),i.hemi[h]=B,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==h||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==S||C.numSpotMaps!==b||C.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=E,C.directionalLength=p,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=h,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=S,C.numSpotMaps=b,C.numLightProbes=E,i.version=TC++)}function l(c,u){let f=0,d=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const x=c[h];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function d_(n){const e=new AC(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function RC(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new d_(n),e.set(r,[o])):s>=a.length?(o=new d_(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class CC extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PC extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const LC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NC(n,e,t){let i=new Nm;const r=new Ye,s=new Ye,a=new rt,o=new CC({depthPacking:uT}),l=new PC,c={},u=t.maxTextureSize,f={[Vr]:un,[un]:Vr,[Xi]:Xi},d=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:LC,fragmentShader:DC}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new dn;_.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new it(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ny;let h=this.type;this.render=function(R,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const D=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Or),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=h!==Gi&&this.type===Gi,H=h===Gi&&this.type!==Gi;for(let X=0,B=R.length;X<B;X++){const q=R[X],L=q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const $=L.getFrameExtents();if(r.multiply($),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,L.mapSize.y=s.y)),L.map===null||z===!0||H===!0){const re=this.type!==Gi?{minFilter:yn,magFilter:yn}:{};L.map!==null&&L.map.dispose(),L.map=new Ls(r.x,r.y,re),L.map.texture.name=q.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const Z=L.getViewportCount();for(let re=0;re<Z;re++){const Se=L.getViewport(re);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),k.viewport(a),L.updateMatrices(q,re),i=L.getFrustum(),S(E,C,L.camera,q,this.type)}L.isPointLightShadow!==!0&&this.type===Gi&&v(L,C),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(D,y,w)};function v(R,E){const C=e.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ls(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(E,null,C,d,g,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(E,null,C,p,g,null)}function x(R,E,C,D){let y=null;const w=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)y=w;else if(y=C.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=y.uuid,z=E.uuid;let H=c[k];H===void 0&&(H={},c[k]=H);let X=H[z];X===void 0&&(X=y.clone(),H[z]=X,E.addEventListener("dispose",b)),y=X}if(y.visible=E.visible,y.wireframe=E.wireframe,D===Gi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=n.properties.get(y);k.light=C}return y}function S(R,E,C,D,y){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Gi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const z=e.update(R),H=R.material;if(Array.isArray(H)){const X=z.groups;for(let B=0,q=X.length;B<q;B++){const L=X[B],$=H[L.materialIndex];if($&&$.visible){const Z=x(R,$,D,y);R.onBeforeShadow(n,R,E,C,z,Z,L),n.renderBufferDirect(C,null,z,Z,R,L),R.onAfterShadow(n,R,E,C,z,Z,L)}}}else if(H.visible){const X=x(R,H,D,y);R.onBeforeShadow(n,R,E,C,z,X,null),n.renderBufferDirect(C,null,z,X,R,null),R.onAfterShadow(n,R,E,C,z,X,null)}}const k=R.children;for(let z=0,H=k.length;z<H;z++)S(k[z],E,C,D,y)}function b(R){R.target.removeEventListener("dispose",b);for(const C in c){const D=c[C],y=R.target.uuid;y in D&&(D[y].dispose(),delete D[y])}}}const IC={[xh]:yh,[Sh]:wh,[Mh]:Th,[Va]:Eh,[yh]:xh,[wh]:Sh,[Th]:Mh,[Eh]:Va};function UC(n){function e(){let U=!1;const pe=new rt;let Y=null;const ee=new rt(0,0,0,0);return{setMask:function(fe){Y!==fe&&!U&&(n.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){U=fe},setClear:function(fe,me,je,Ct,mn){mn===!0&&(fe*=Ct,me*=Ct,je*=Ct),pe.set(fe,me,je,Ct),ee.equals(pe)===!1&&(n.clearColor(fe,me,je,Ct),ee.copy(pe))},reset:function(){U=!1,Y=null,ee.set(-1,0,0,0)}}}function t(){let U=!1,pe=!1,Y=null,ee=null,fe=null;return{setReversed:function(me){pe=me},setTest:function(me){me?he(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(me){Y!==me&&!U&&(n.depthMask(me),Y=me)},setFunc:function(me){if(pe&&(me=IC[me]),ee!==me){switch(me){case xh:n.depthFunc(n.NEVER);break;case yh:n.depthFunc(n.ALWAYS);break;case Sh:n.depthFunc(n.LESS);break;case Va:n.depthFunc(n.LEQUAL);break;case Mh:n.depthFunc(n.EQUAL);break;case Eh:n.depthFunc(n.GEQUAL);break;case wh:n.depthFunc(n.GREATER);break;case Th:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=me}},setLocked:function(me){U=me},setClear:function(me){fe!==me&&(n.clearDepth(me),fe=me)},reset:function(){U=!1,Y=null,ee=null,fe=null}}}function i(){let U=!1,pe=null,Y=null,ee=null,fe=null,me=null,je=null,Ct=null,mn=null;return{setTest:function(Ke){U||(Ke?he(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(Ke){pe!==Ke&&!U&&(n.stencilMask(Ke),pe=Ke)},setFunc:function(Ke,gn,Ui){(Y!==Ke||ee!==gn||fe!==Ui)&&(n.stencilFunc(Ke,gn,Ui),Y=Ke,ee=gn,fe=Ui)},setOp:function(Ke,gn,Ui){(me!==Ke||je!==gn||Ct!==Ui)&&(n.stencilOp(Ke,gn,Ui),me=Ke,je=gn,Ct=Ui)},setLocked:function(Ke){U=Ke},setClear:function(Ke){mn!==Ke&&(n.clearStencil(Ke),mn=Ke)},reset:function(){U=!1,pe=null,Y=null,ee=null,fe=null,me=null,je=null,Ct=null,mn=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,S=null,b=null,R=new ke(0,0,0),E=0,C=!1,D=null,y=null,w=null,k=null,z=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=B>=2);let L=null,$={};const Z=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Se=new rt().fromArray(Z),ve=new rt().fromArray(re);function W(U,pe,Y,ee){const fe=new Uint8Array(4),me=n.createTexture();n.bindTexture(U,me),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<Y;je++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(pe+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return me}const J={};J[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),he(n.DEPTH_TEST),s.setFunc(Va),Ge(!1),qe(x0),he(n.CULL_FACE),N(Or);function he(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function ue(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Ie(U,pe){return u[U]!==pe?(n.bindFramebuffer(U,pe),u[U]=pe,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pe),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function Re(U,pe){let Y=d,ee=!1;if(U){Y=f.get(pe),Y===void 0&&(Y=[],f.set(pe,Y));const fe=U.textures;if(Y.length!==fe.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let me=0,je=fe.length;me<je;me++)Y[me]=n.COLOR_ATTACHMENT0+me;Y.length=fe.length,ee=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ee=!0);ee&&n.drawBuffers(Y)}function Ve(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const nt={[cs]:n.FUNC_ADD,[Fw]:n.FUNC_SUBTRACT,[kw]:n.FUNC_REVERSE_SUBTRACT};nt[zw]=n.MIN,nt[Bw]=n.MAX;const We={[Gw]:n.ZERO,[Hw]:n.ONE,[Vw]:n.SRC_COLOR,[_h]:n.SRC_ALPHA,[$w]:n.SRC_ALPHA_SATURATE,[Yw]:n.DST_COLOR,[jw]:n.DST_ALPHA,[Ww]:n.ONE_MINUS_SRC_COLOR,[vh]:n.ONE_MINUS_SRC_ALPHA,[qw]:n.ONE_MINUS_DST_COLOR,[Xw]:n.ONE_MINUS_DST_ALPHA,[Kw]:n.CONSTANT_COLOR,[Zw]:n.ONE_MINUS_CONSTANT_COLOR,[Qw]:n.CONSTANT_ALPHA,[Jw]:n.ONE_MINUS_CONSTANT_ALPHA};function N(U,pe,Y,ee,fe,me,je,Ct,mn,Ke){if(U===Or){_===!0&&(ue(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),U!==Ow){if(U!==g||Ke!==C){if((m!==cs||x!==cs)&&(n.blendEquation(n.FUNC_ADD),m=cs,x=cs),Ke)switch(U){case Ra:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bo:n.blendFunc(n.ONE,n.ONE);break;case y0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case S0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ra:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case y0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case S0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,v=null,S=null,b=null,R.set(0,0,0),E=0,g=U,C=Ke}return}fe=fe||pe,me=me||Y,je=je||ee,(pe!==m||fe!==x)&&(n.blendEquationSeparate(nt[pe],nt[fe]),m=pe,x=fe),(Y!==h||ee!==v||me!==S||je!==b)&&(n.blendFuncSeparate(We[Y],We[ee],We[me],We[je]),h=Y,v=ee,S=me,b=je),(Ct.equals(R)===!1||mn!==E)&&(n.blendColor(Ct.r,Ct.g,Ct.b,mn),R.copy(Ct),E=mn),g=U,C=!1}function Cn(U,pe){U.side===Xi?ue(n.CULL_FACE):he(n.CULL_FACE);let Y=U.side===un;pe&&(Y=!Y),Ge(Y),U.blending===Ra&&U.transparent===!1?N(Or):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ee=U.stencilWrite;a.setTest(ee),ee&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){D!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),D=U)}function qe(U){U!==Nw?(he(n.CULL_FACE),U!==y&&(U===x0?n.cullFace(n.BACK):U===Iw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),y=U}function Pe(U){U!==w&&(X&&n.lineWidth(U),w=U)}function ut(U,pe,Y){U?(he(n.POLYGON_OFFSET_FILL),(k!==pe||z!==Y)&&(n.polygonOffset(pe,Y),k=pe,z=Y)):ue(n.POLYGON_OFFSET_FILL)}function Ne(U){U?he(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function P(U){U===void 0&&(U=n.TEXTURE0+H-1),L!==U&&(n.activeTexture(U),L=U)}function T(U,pe,Y){Y===void 0&&(L===null?Y=n.TEXTURE0+H-1:Y=L);let ee=$[Y];ee===void 0&&(ee={type:void 0,texture:void 0},$[Y]=ee),(ee.type!==U||ee.texture!==pe)&&(L!==Y&&(n.activeTexture(Y),L=Y),n.bindTexture(U,pe||J[U]),ee.type=U,ee.texture=pe)}function G(){const U=$[L];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(U){Se.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Se.copy(U))}function ye(U){ve.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ve.copy(U))}function He(U,pe){let Y=l.get(pe);Y===void 0&&(Y=new WeakMap,l.set(pe,Y));let ee=Y.get(U);ee===void 0&&(ee=n.getUniformBlockIndex(pe,U.name),Y.set(U,ee))}function Ue(U,pe){const ee=l.get(pe).get(U);o.get(pe)!==ee&&(n.uniformBlockBinding(pe,ee,U.__bindingPointIndex),o.set(pe,ee))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},L=null,$={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,S=null,b=null,R=new ke(0,0,0),E=0,C=!1,D=null,y=null,w=null,k=null,z=null,Se.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:he,disable:ue,bindFramebuffer:Ie,drawBuffers:Re,useProgram:Ve,setBlending:N,setMaterial:Cn,setFlipSided:Ge,setCullFace:qe,setLineWidth:Pe,setPolygonOffset:ut,setScissorTest:Ne,activeTexture:P,bindTexture:T,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:xe,texImage3D:Le,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:$e,texStorage3D:se,texSubImage2D:K,texSubImage3D:we,compressedTexSubImage2D:ce,compressedTexSubImage3D:_e,scissor:De,viewport:ye,reset:lt}}function h_(n,e,t,i){const r=OC(i);switch(t){case By:return n*e;case Hy:return n*e;case Vy:return n*e*2;case wm:return n*e/r.components*r.byteLength;case Tm:return n*e/r.components*r.byteLength;case Wy:return n*e*2/r.components*r.byteLength;case bm:return n*e*2/r.components*r.byteLength;case Gy:return n*e*3/r.components*r.byteLength;case vi:return n*e*4/r.components*r.byteLength;case Am:return n*e*4/r.components*r.byteLength;case Dc:case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Nh:return Math.max(n,16)*Math.max(e,8)/4;case Ph:case Dh:return Math.max(n,8)*Math.max(e,8)/2;case Ih:case Uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Oc:case Zh:case Qh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jy:case Jh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OC(n){switch(n){case rr:case Fy:return{byteLength:1,components:1};case ml:case ky:case El:return{byteLength:2,components:1};case Mm:case Em:return{byteLength:2,components:4};case Ps:case Sm:case Ci:return{byteLength:4,components:1};case zy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function FC(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return p?new OffscreenCanvas(P,T):Su("canvas")}function g(P,T,G){let Q=1;const te=Ne(P);if((te.width>G||te.height>G)&&(Q=G/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Q*te.width),we=Math.floor(Q*te.height);f===void 0&&(f=_(K,we));const ce=T?_(K,we):f;return ce.width=K,ce.height=we,ce.getContext("2d").drawImage(P,0,0,K,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+we+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==yn&&P.minFilter!==gi}function h(P){n.generateMipmap(P)}function v(P,T,G,Q,te=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=T;if(T===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8)),T===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),T===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8)),T===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),T===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),T===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),T===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),T===n.RGBA){const we=te?_u:Je.getTransfer(Q);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=we===ht?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(P,T){let G;return P?T===null||T===Ps||T===Xa?G=n.DEPTH24_STENCIL8:T===Ci?G=n.DEPTH32F_STENCIL8:T===ml&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ps||T===Xa?G=n.DEPTH_COMPONENT24:T===Ci?G=n.DEPTH_COMPONENT32F:T===ml&&(G=n.DEPTH_COMPONENT16),G}function S(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==yn&&P.minFilter!==gi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function b(P){const T=P.target;T.removeEventListener("dispose",b),E(T),T.isVideoTexture&&u.delete(T)}function R(P){const T=P.target;T.removeEventListener("dispose",R),D(T)}function E(P){const T=i.get(P);if(T.__webglInit===void 0)return;const G=P.source,Q=d.get(G);if(Q){const te=Q[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(P),Object.keys(Q).length===0&&d.delete(G)}i.remove(P)}function C(P){const T=i.get(P);n.deleteTexture(T.__webglTexture);const G=P.source,Q=d.get(G);delete Q[T.__cacheKey],a.memory.textures--}function D(P){const T=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let te=0;te<T.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(T.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[Q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=P.textures;for(let Q=0,te=G.length;Q<te;Q++){const K=i.get(G[Q]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(G[Q])}i.remove(P)}let y=0;function w(){y=0}function k(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function z(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function H(P,T){const G=i.get(P);if(P.isVideoTexture&&Pe(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,P,T);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+T)}function X(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){ve(G,P,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+T)}function B(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){ve(G,P,T);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+T)}function q(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){W(G,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+T)}const L={[Rh]:n.REPEAT,[gs]:n.CLAMP_TO_EDGE,[Ch]:n.MIRRORED_REPEAT},$={[yn]:n.NEAREST,[lT]:n.NEAREST_MIPMAP_NEAREST,[Xl]:n.NEAREST_MIPMAP_LINEAR,[gi]:n.LINEAR,[Df]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},Z={[dT]:n.NEVER,[vT]:n.ALWAYS,[hT]:n.LESS,[Yy]:n.LEQUAL,[pT]:n.EQUAL,[_T]:n.GEQUAL,[mT]:n.GREATER,[gT]:n.NOTEQUAL};function re(P,T){if(T.type===Ci&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===gi||T.magFilter===Df||T.magFilter===Xl||T.magFilter===_s||T.minFilter===gi||T.minFilter===Df||T.minFilter===Xl||T.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,L[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,L[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,L[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,$[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,$[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yn||T.minFilter!==Xl&&T.minFilter!==_s||T.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Se(P,T){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",b));const Q=T.source;let te=d.get(Q);te===void 0&&(te={},d.set(Q,te));const K=z(T);if(K!==P.__cacheKey){te[K]===void 0&&(te[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[K].usedTimes++;const we=te[P.__cacheKey];we!==void 0&&(te[P.__cacheKey].usedTimes--,we.usedTimes===0&&C(T)),P.__cacheKey=K,P.__webglTexture=te[K].texture}return G}function ve(P,T,G){let Q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=n.TEXTURE_3D);const te=Se(P,T),K=T.source;t.bindTexture(Q,P.__webglTexture,n.TEXTURE0+G);const we=i.get(K);if(K.version!==we.__version||te===!0){t.activeTexture(n.TEXTURE0+G);const ce=Je.getPrimaries(Je.workingColorSpace),_e=T.colorSpace===yr?null:Je.getPrimaries(T.colorSpace),$e=T.colorSpace===yr||ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let se=g(T.image,!1,r.maxTextureSize);se=ut(T,se);const xe=s.convert(T.format,T.colorSpace),Le=s.convert(T.type);let De=v(T.internalFormat,xe,Le,T.colorSpace,T.isVideoTexture);re(Q,T);let ye;const He=T.mipmaps,Ue=T.isVideoTexture!==!0,lt=we.__version===void 0||te===!0,U=K.dataReady,pe=S(T,se);if(T.isDepthTexture)De=x(T.format===Ya,T.type),lt&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,xe,Le,null));else if(T.isDataTexture)if(He.length>0){Ue&&lt&&t.texStorage2D(n.TEXTURE_2D,pe,De,He[0].width,He[0].height);for(let Y=0,ee=He.length;Y<ee;Y++)ye=He[Y],Ue?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ye.width,ye.height,xe,Le,ye.data):t.texImage2D(n.TEXTURE_2D,Y,De,ye.width,ye.height,0,xe,Le,ye.data);T.generateMipmaps=!1}else Ue?(lt&&t.texStorage2D(n.TEXTURE_2D,pe,De,se.width,se.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,xe,Le,se.data)):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,xe,Le,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ue&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,De,He[0].width,He[0].height,se.depth);for(let Y=0,ee=He.length;Y<ee;Y++)if(ye=He[Y],T.format!==vi)if(xe!==null)if(Ue){if(U)if(T.layerUpdates.size>0){const fe=h_(ye.width,ye.height,T.format,T.type);for(const me of T.layerUpdates){const je=ye.data.subarray(me*fe/ye.data.BYTES_PER_ELEMENT,(me+1)*fe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,me,ye.width,ye.height,1,xe,je,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,se.depth,xe,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,De,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,se.depth,xe,Le,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,De,ye.width,ye.height,se.depth,0,xe,Le,ye.data)}else{Ue&&lt&&t.texStorage2D(n.TEXTURE_2D,pe,De,He[0].width,He[0].height);for(let Y=0,ee=He.length;Y<ee;Y++)ye=He[Y],T.format!==vi?xe!==null?Ue?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ye.width,ye.height,xe,Le,ye.data):t.texImage2D(n.TEXTURE_2D,Y,De,ye.width,ye.height,0,xe,Le,ye.data)}else if(T.isDataArrayTexture)if(Ue){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,De,se.width,se.height,se.depth),U)if(T.layerUpdates.size>0){const Y=h_(se.width,se.height,T.format,T.type);for(const ee of T.layerUpdates){const fe=se.data.subarray(ee*Y/se.data.BYTES_PER_ELEMENT,(ee+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,xe,Le,fe)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Le,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,xe,Le,se.data);else if(T.isData3DTexture)Ue?(lt&&t.texStorage3D(n.TEXTURE_3D,pe,De,se.width,se.height,se.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Le,se.data)):t.texImage3D(n.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,xe,Le,se.data);else if(T.isFramebufferTexture){if(lt)if(Ue)t.texStorage2D(n.TEXTURE_2D,pe,De,se.width,se.height);else{let Y=se.width,ee=se.height;for(let fe=0;fe<pe;fe++)t.texImage2D(n.TEXTURE_2D,fe,De,Y,ee,0,xe,Le,null),Y>>=1,ee>>=1}}else if(He.length>0){if(Ue&&lt){const Y=Ne(He[0]);t.texStorage2D(n.TEXTURE_2D,pe,De,Y.width,Y.height)}for(let Y=0,ee=He.length;Y<ee;Y++)ye=He[Y],Ue?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,xe,Le,ye):t.texImage2D(n.TEXTURE_2D,Y,De,xe,Le,ye);T.generateMipmaps=!1}else if(Ue){if(lt){const Y=Ne(se);t.texStorage2D(n.TEXTURE_2D,pe,De,Y.width,Y.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Le,se)}else t.texImage2D(n.TEXTURE_2D,0,De,xe,Le,se);m(T)&&h(Q),we.__version=K.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function W(P,T,G){if(T.image.length!==6)return;const Q=Se(P,T),te=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const K=i.get(te);if(te.version!==K.__version||Q===!0){t.activeTexture(n.TEXTURE0+G);const we=Je.getPrimaries(Je.workingColorSpace),ce=T.colorSpace===yr?null:Je.getPrimaries(T.colorSpace),_e=T.colorSpace===yr||we===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,xe=[];for(let ee=0;ee<6;ee++)!$e&&!se?xe[ee]=g(T.image[ee],!0,r.maxCubemapSize):xe[ee]=se?T.image[ee].image:T.image[ee],xe[ee]=ut(T,xe[ee]);const Le=xe[0],De=s.convert(T.format,T.colorSpace),ye=s.convert(T.type),He=v(T.internalFormat,De,ye,T.colorSpace),Ue=T.isVideoTexture!==!0,lt=K.__version===void 0||Q===!0,U=te.dataReady;let pe=S(T,Le);re(n.TEXTURE_CUBE_MAP,T);let Y;if($e){Ue&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,He,Le.width,Le.height);for(let ee=0;ee<6;ee++){Y=xe[ee].mipmaps;for(let fe=0;fe<Y.length;fe++){const me=Y[fe];T.format!==vi?De!==null?Ue?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,me.width,me.height,De,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,He,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,me.width,me.height,De,ye,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,He,me.width,me.height,0,De,ye,me.data)}}}else{if(Y=T.mipmaps,Ue&&lt){Y.length>0&&pe++;const ee=Ne(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,He,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ue?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,xe[ee].width,xe[ee].height,De,ye,xe[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,xe[ee].width,xe[ee].height,0,De,ye,xe[ee].data);for(let fe=0;fe<Y.length;fe++){const je=Y[fe].image[ee].image;Ue?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,je.width,je.height,De,ye,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,He,je.width,je.height,0,De,ye,je.data)}}else{Ue?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,ye,xe[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,De,ye,xe[ee]);for(let fe=0;fe<Y.length;fe++){const me=Y[fe];Ue?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,De,ye,me.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,He,De,ye,me.image[ee])}}}m(T)&&h(n.TEXTURE_CUBE_MAP),K.__version=te.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function J(P,T,G,Q,te,K){const we=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),_e=v(G.internalFormat,we,ce,G.colorSpace);if(!i.get(T).__hasExternalTextures){const se=Math.max(1,T.width>>K),xe=Math.max(1,T.height>>K);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,K,_e,se,xe,T.depth,0,we,ce,null):t.texImage2D(te,K,_e,se,xe,0,we,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),qe(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,te,i.get(G).__webglTexture,0,Ge(T)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,te,i.get(G).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(P,T,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){const Q=T.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,K=x(T.stencilBuffer,te),we=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Ge(T);qe(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,K,T.width,T.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,K,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,K,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,P)}else{const Q=T.textures;for(let te=0;te<Q.length;te++){const K=Q[te],we=s.convert(K.format,K.colorSpace),ce=s.convert(K.type),_e=v(K.internalFormat,we,ce,K.colorSpace),$e=Ge(T);G&&qe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,_e,T.width,T.height):qe(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,_e,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,_e,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const Q=i.get(T.depthTexture).__webglTexture,te=Ge(T);if(T.depthTexture.format===Ca)qe(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Ya)qe(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ie(P){const T=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=Q}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ue(T.__webglFramebuffer,P)}else if(G){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=n.createRenderbuffer(),he(T.__webglDepthbuffer[Q],P,!1);else{const te=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),he(T.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(P,T,G){const Q=i.get(P);T!==void 0&&J(Q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ie(P)}function Ve(P){const T=P.texture,G=i.get(P),Q=i.get(T);P.addEventListener("dispose",R);const te=P.textures,K=P.isWebGLCubeRenderTarget===!0,we=te.length>1;if(we||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=T.version,a.memory.textures++),K){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let _e=0;_e<T.mipmaps.length;_e++)G.__webglFramebuffer[ce][_e]=n.createFramebuffer()}else G.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)G.__webglFramebuffer[ce]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(we)for(let ce=0,_e=te.length;ce<_e;ce++){const $e=i.get(te[ce]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&qe(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const _e=te[ce];G.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const $e=s.convert(_e.format,_e.colorSpace),se=s.convert(_e.type),xe=v(_e.internalFormat,$e,se,_e.colorSpace,P.isXRRenderTarget===!0),Le=Ge(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,xe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),he(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),re(n.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)J(G.__webglFramebuffer[ce][_e],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else J(G.__webglFramebuffer[ce],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(T)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ce=0,_e=te.length;ce<_e;ce++){const $e=te[ce],se=i.get($e);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),re(n.TEXTURE_2D,$e),J(G.__webglFramebuffer,P,$e,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m($e)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),re(ce,T),T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)J(G.__webglFramebuffer[_e],P,T,n.COLOR_ATTACHMENT0,ce,_e);else J(G.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,ce,0);m(T)&&h(ce),t.unbindTexture()}P.depthBuffer&&Ie(P)}function nt(P){const T=P.textures;for(let G=0,Q=T.length;G<Q;G++){const te=T[G];if(m(te)){const K=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(te).__webglTexture;t.bindTexture(K,we),h(K),t.unbindTexture()}}}const We=[],N=[];function Cn(P){if(P.samples>0){if(qe(P)===!1){const T=P.textures,G=P.width,Q=P.height;let te=n.COLOR_BUFFER_BIT;const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(P),ce=T.length>1;if(ce)for(let _e=0;_e<T.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let _e=0;_e<T.length;_e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);const $e=i.get(T[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,te,n.NEAREST),l===!0&&(We.length=0,N.length=0,We.push(n.COLOR_ATTACHMENT0+_e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(We.push(K),N.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<T.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);const $e=i.get(T[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ge(P){return Math.min(r.maxSamples,P.samples)}function qe(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Pe(P){const T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function ut(P,T){const G=P.colorSpace,Q=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==qr&&G!==yr&&(Je.getTransfer(G)===ht?(Q!==vi||te!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function Ne(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=w,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=Re,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=J,this.useMultisampledRTT=qe}function kC(n,e){function t(i,r=yr){let s;const a=Je.getTransfer(r);if(i===rr)return n.UNSIGNED_BYTE;if(i===Mm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Em)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fy)return n.BYTE;if(i===ky)return n.SHORT;if(i===ml)return n.UNSIGNED_SHORT;if(i===Sm)return n.INT;if(i===Ps)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===El)return n.HALF_FLOAT;if(i===By)return n.ALPHA;if(i===Gy)return n.RGB;if(i===vi)return n.RGBA;if(i===Hy)return n.LUMINANCE;if(i===Vy)return n.LUMINANCE_ALPHA;if(i===Ca)return n.DEPTH_COMPONENT;if(i===Ya)return n.DEPTH_STENCIL;if(i===wm)return n.RED;if(i===Tm)return n.RED_INTEGER;if(i===Wy)return n.RG;if(i===bm)return n.RG_INTEGER;if(i===Am)return n.RGBA_INTEGER;if(i===Dc||i===Nc||i===Ic||i===Uc)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ph||i===Lh||i===Dh||i===Nh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ih||i===Uh||i===Oh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ih||i===Uh)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Oh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fh||i===kh||i===zh||i===Bh||i===Gh||i===Hh||i===Vh||i===Wh||i===jh||i===Xh||i===Yh||i===qh||i===$h||i===Kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$h)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kh)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oc||i===Zh||i===Qh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Oc)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jy||i===Jh||i===ep||i===tp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Oc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ep)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class zC extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pi extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BC={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const GC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new fn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new sr({vertexShader:GC,fragmentShader:HC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new Tl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WC extends Qa{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const g=new VC,m=t.getContextAttributes();let h=null,v=null;const x=[],S=[],b=new Ye;let R=null;const E=new On;E.layers.enable(1),E.viewport=new rt;const C=new On;C.layers.enable(2),C.viewport=new rt;const D=[E,C],y=new zC;y.layers.enable(1),y.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=x[W];return J===void 0&&(J=new ad,x[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=x[W];return J===void 0&&(J=new ad,x[W]=J),J.getGripSpace()},this.getHand=function(W){let J=x[W];return J===void 0&&(J=new ad,x[W]=J),J.getHandSpace()};function z(W){const J=S.indexOf(W.inputSource);if(J===-1)return;const he=x[J];he!==void 0&&(he.update(W.inputSource,W.frame,c||a),he.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",X);for(let W=0;W<x.length;W++){const J=S[W];J!==null&&(S[W]=null,x[W].disconnect(J))}w=null,k=null,g.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,v=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",H),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ls(p.framebufferWidth,p.framebufferHeight,{format:vi,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,he=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Ya:Ca,he=m.stencil?Xa:Ps);const Ie={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ls(d.textureWidth,d.textureHeight,{format:vi,type:rr,depthTexture:new s1(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(W){for(let J=0;J<W.removed.length;J++){const he=W.removed[J],ue=S.indexOf(he);ue>=0&&(S[ue]=null,x[ue].disconnect(he))}for(let J=0;J<W.added.length;J++){const he=W.added[J];let ue=S.indexOf(he);if(ue===-1){for(let Re=0;Re<x.length;Re++)if(Re>=S.length){S.push(he),ue=Re;break}else if(S[Re]===null){S[Re]=he,ue=Re;break}if(ue===-1)break}const Ie=x[ue];Ie&&Ie.connect(he)}}const B=new I,q=new I;function L(W,J,he){B.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(he.matrixWorld);const ue=B.distanceTo(q),Ie=J.projectionMatrix.elements,Re=he.projectionMatrix.elements,Ve=Ie[14]/(Ie[10]-1),nt=Ie[14]/(Ie[10]+1),We=(Ie[9]+1)/Ie[5],N=(Ie[9]-1)/Ie[5],Cn=(Ie[8]-1)/Ie[0],Ge=(Re[8]+1)/Re[0],qe=Ve*Cn,Pe=Ve*Ge,ut=ue/(-Cn+Ge),Ne=ut*-Cn;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ne),W.translateZ(ut),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ie[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const P=Ve+ut,T=nt+ut,G=qe-Ne,Q=Pe+(ue-Ne),te=We*nt/T*P,K=N*nt/T*P;W.projectionMatrix.makePerspective(G,Q,te,K,P,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let J=W.near,he=W.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(he=g.depthFar)),y.near=C.near=E.near=J,y.far=C.far=E.far=he,(w!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,k=y.far);const ue=W.parent,Ie=y.cameras;$(y,ue);for(let Re=0;Re<Ie.length;Re++)$(Ie[Re],ue);Ie.length===2?L(y,E,C):y.projectionMatrix.copy(E.projectionMatrix),Z(W,y,ue)};function Z(W,J,he){he===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(he.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=gl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let re=null;function Se(W,J){if(u=J.getViewerPose(c||a),_=J,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ue=!1;he.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let Re=0;Re<he.length;Re++){const Ve=he[Re];let nt=null;if(p!==null)nt=p.getViewport(Ve);else{const N=f.getViewSubImage(d,Ve);nt=N.viewport,Re===0&&(e.setRenderTargetTextures(v,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(v))}let We=D[Re];We===void 0&&(We=new On,We.layers.enable(Re),We.viewport=new rt,D[Re]=We),We.matrix.fromArray(Ve.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ve.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(nt.x,nt.y,nt.width,nt.height),Re===0&&(y.matrix.copy(We.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(We)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Re=f.getDepthInformation(he[0]);Re&&Re.isValid&&Re.texture&&g.init(e,Re,r.renderState)}}for(let he=0;he<x.length;he++){const ue=S[he],Ie=x[he];ue!==null&&Ie!==void 0&&Ie.update(ue,J,c||a)}re&&re(W,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const ve=new i1;ve.setAnimationLoop(Se),this.setAnimationLoop=function(W){re=W},this.dispose=function(){}}}const is=new Ii,jC=new st;function XC(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,e1(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===un&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===un&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,is.copy(S),is.x*=-1,is.y*=-1,is.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(jC.makeRotationFromEuler(is)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YC(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function c(v,x){let S=r[v.id];S===void 0&&(_(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const b=x.program;i.updateUBOMapping(v,b);const R=e.render.frame;s[v.id]!==R&&(d(v),s[v.id]=R)}function u(v){const x=f();v.__bindingPointIndex=x;const S=n.createBuffer(),b=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,b,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],S=v.uniforms,b=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,E=S.length;R<E;R++){const C=Array.isArray(S[R])?S[R]:[S[R]];for(let D=0,y=C.length;D<y;D++){const w=C[D];if(p(w,R,D,b)===!0){const k=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let H=0;for(let X=0;X<z.length;X++){const B=z[X],q=g(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,k+H,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,H),H+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,S,b){const R=v.value,E=x+"_"+S;if(b[E]===void 0)return typeof R=="number"||typeof R=="boolean"?b[E]=R:b[E]=R.clone(),!0;{const C=b[E];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return b[E]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function _(v){const x=v.uniforms;let S=0;const b=16;for(let E=0,C=x.length;E<C;E++){const D=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,w=D.length;y<w;y++){const k=D[y],z=Array.isArray(k.value)?k.value:[k.value];for(let H=0,X=z.length;H<X;H++){const B=z[H],q=g(B),L=S%b,$=L%q.boundary,Z=L+$;S+=$,Z!==0&&b-Z<q.storage&&(S+=b-Z),k.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=q.storage}}}const R=S%b;return R>0&&(S+=b-R),v.__size=S,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class qC{constructor(e={}){const{canvas:t=UT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=Fr,this.toneMappingExposure=1;const x=this;let S=!1,b=0,R=0,E=null,C=-1,D=null;const y=new rt,w=new rt;let k=null;const z=new ke(0);let H=0,X=t.width,B=t.height,q=1,L=null,$=null;const Z=new rt(0,0,X,B),re=new rt(0,0,X,B);let Se=!1;const ve=new Nm;let W=!1,J=!1;const he=new st,ue=new st,Ie=new I,Re=new rt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function We(){return E===null?q:1}let N=i;function Cn(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ym}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",me,!1),N===null){const O="webgl2";if(N=Cn(O,A),N===null)throw Cn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ge,qe,Pe,ut,Ne,P,T,G,Q,te,K,we,ce,_e,$e,se,xe,Le,De,ye,He,Ue,lt,U;function pe(){Ge=new JA(N),Ge.init(),Ue=new kC(N,Ge),qe=new YA(N,Ge,e,Ue),Pe=new UC(N),qe.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),ut=new nR(N),Ne=new yC,P=new FC(N,Ge,Pe,Ne,qe,Ue,ut),T=new $A(x),G=new QA(x),Q=new cb(N),lt=new jA(N,Q),te=new eR(N,Q,ut,lt),K=new rR(N,te,Q,ut),De=new iR(N,qe,P),se=new qA(Ne),we=new xC(x,T,G,Ge,qe,lt,se),ce=new XC(x,Ne),_e=new MC,$e=new RC(Ge),Le=new WA(x,T,G,Pe,K,d,l),xe=new NC(x,K,qe),U=new YC(N,ut,qe,Pe),ye=new XA(N,Ge,ut),He=new tR(N,Ge,ut),ut.programs=we.programs,x.capabilities=qe,x.extensions=Ge,x.properties=Ne,x.renderLists=_e,x.shadowMap=xe,x.state=Pe,x.info=ut}pe();const Y=new WC(x,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(X,B,!1))},this.getSize=function(A){return A.set(X,B)},this.setSize=function(A,O,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,B=O,t.width=Math.floor(A*q),t.height=Math.floor(O*q),V===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(X*q,B*q).floor()},this.setDrawingBufferSize=function(A,O,V){X=A,B=O,q=V,t.width=Math.floor(A*V),t.height=Math.floor(O*V),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,O,V,j){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,O,V,j),Pe.viewport(y.copy(Z).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,O,V,j){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,O,V,j),Pe.scissor(w.copy(re).multiplyScalar(q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(A){Pe.setScissorTest(Se=A)},this.setOpaqueSort=function(A){L=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(A=!0,O=!0,V=!0){let j=0;if(A){let F=!1;if(E!==null){const ae=E.texture.format;F=ae===Am||ae===bm||ae===Tm}if(F){const ae=E.texture.type,de=ae===rr||ae===Ps||ae===ml||ae===Xa||ae===Mm||ae===Em,Me=Le.getClearColor(),Ee=Le.getClearAlpha(),Ae=Me.r,Ce=Me.g,Te=Me.b;de?(p[0]=Ae,p[1]=Ce,p[2]=Te,p[3]=Ee,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=Ae,_[1]=Ce,_[2]=Te,_[3]=Ee,N.clearBufferiv(N.COLOR,0,_))}else j|=N.COLOR_BUFFER_BIT}O&&(j|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),_e.dispose(),$e.dispose(),Ne.dispose(),T.dispose(),G.dispose(),K.dispose(),lt.dispose(),U.dispose(),we.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Om),Y.removeEventListener("sessionend",Fm),$r.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ut.autoReset,O=xe.enabled,V=xe.autoUpdate,j=xe.needsUpdate,F=xe.type;pe(),ut.autoReset=A,xe.enabled=O,xe.autoUpdate=V,xe.needsUpdate=j,xe.type=F}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function je(A){const O=A.target;O.removeEventListener("dispose",je),Ct(O)}function Ct(A){mn(A),Ne.remove(A)}function mn(A){const O=Ne.get(A).programs;O!==void 0&&(O.forEach(function(V){we.releaseProgram(V)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,V,j,F,ae){O===null&&(O=Ve);const de=F.isMesh&&F.matrixWorld.determinant()<0,Me=f1(A,O,V,j,F);Pe.setMaterial(j,de);let Ee=V.index,Ae=1;if(j.wireframe===!0){if(Ee=te.getWireframeAttribute(V),Ee===void 0)return;Ae=2}const Ce=V.drawRange,Te=V.attributes.position;let et=Ce.start*Ae,ft=(Ce.start+Ce.count)*Ae;ae!==null&&(et=Math.max(et,ae.start*Ae),ft=Math.min(ft,(ae.start+ae.count)*Ae)),Ee!==null?(et=Math.max(et,0),ft=Math.min(ft,Ee.count)):Te!=null&&(et=Math.max(et,0),ft=Math.min(ft,Te.count));const Et=ft-et;if(Et<0||Et===1/0)return;lt.setup(F,j,Me,V,Ee);let Pn,Ze=ye;if(Ee!==null&&(Pn=Q.get(Ee),Ze=He,Ze.setIndex(Pn)),F.isMesh)j.wireframe===!0?(Pe.setLineWidth(j.wireframeLinewidth*We()),Ze.setMode(N.LINES)):Ze.setMode(N.TRIANGLES);else if(F.isLine){let be=j.linewidth;be===void 0&&(be=1),Pe.setLineWidth(be*We()),F.isLineSegments?Ze.setMode(N.LINES):F.isLineLoop?Ze.setMode(N.LINE_LOOP):Ze.setMode(N.LINE_STRIP)}else F.isPoints?Ze.setMode(N.POINTS):F.isSprite&&Ze.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ze.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ze.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const be=F._multiDrawStarts,Vt=F._multiDrawCounts,Qe=F._multiDrawCount,si=Ee?Q.get(Ee).bytesPerElement:1,Fs=Ne.get(j).currentProgram.getUniforms();for(let Ln=0;Ln<Qe;Ln++)Fs.setValue(N,"_gl_DrawID",Ln),Ze.render(be[Ln]/si,Vt[Ln])}else if(F.isInstancedMesh)Ze.renderInstances(et,Et,F.count);else if(V.isInstancedBufferGeometry){const be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Vt=Math.min(V.instanceCount,be);Ze.renderInstances(et,Et,Vt)}else Ze.render(et,Et)};function Ke(A,O,V){A.transparent===!0&&A.side===Xi&&A.forceSinglePass===!1?(A.side=un,A.needsUpdate=!0,Al(A,O,V),A.side=Vr,A.needsUpdate=!0,Al(A,O,V),A.side=Xi):Al(A,O,V)}this.compile=function(A,O,V=null){V===null&&(V=A),m=$e.get(V),m.init(O),v.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==V&&A.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const j=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let de=0;de<ae.length;de++){const Me=ae[de];Ke(Me,V,F),j.add(Me)}else Ke(ae,V,F),j.add(ae)}),v.pop(),m=null,j},this.compileAsync=function(A,O,V=null){const j=this.compile(A,O,V);return new Promise(F=>{function ae(){if(j.forEach(function(de){Ne.get(de).currentProgram.isReady()&&j.delete(de)}),j.size===0){F(A);return}setTimeout(ae,10)}Ge.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let gn=null;function Ui(A){gn&&gn(A)}function Om(){$r.stop()}function Fm(){$r.start()}const $r=new i1;$r.setAnimationLoop(Ui),typeof self<"u"&&$r.setContext(self),this.setAnimationLoop=function(A){gn=A,Y.setAnimationLoop(A),A===null?$r.stop():$r.start()},Y.addEventListener("sessionstart",Om),Y.addEventListener("sessionend",Fm),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,E),m=$e.get(A,v.length),m.init(O),v.push(m),ue.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ve.setFromProjectionMatrix(ue),J=this.localClippingEnabled,W=se.init(this.clippingPlanes,J),g=_e.get(A,h.length),g.init(),h.push(g),Y.enabled===!0&&Y.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&Xu(ae,O,-1/0,x.sortObjects)}Xu(A,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(L,$),nt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,nt&&Le.addToRenderList(g,A),this.info.render.frame++,W===!0&&se.beginShadows();const V=m.state.shadowsArray;xe.render(V,A,O),W===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,F=g.transmissive;if(m.setupLights(),O.isArrayCamera){const ae=O.cameras;if(F.length>0)for(let de=0,Me=ae.length;de<Me;de++){const Ee=ae[de];zm(j,F,A,Ee)}nt&&Le.render(A);for(let de=0,Me=ae.length;de<Me;de++){const Ee=ae[de];km(g,A,Ee,Ee.viewport)}}else F.length>0&&zm(j,F,A,O),nt&&Le.render(A),km(g,A,O);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,O),lt.resetDefaultState(),C=-1,D=null,v.pop(),v.length>0?(m=v[v.length-1],W===!0&&se.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Xu(A,O,V,j){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ve.intersectsSprite(A)){j&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const de=K.update(A),Me=A.material;Me.visible&&g.push(A,de,Me,V,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ve.intersectsObject(A))){const de=K.update(A),Me=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Re.copy(de.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(Me)){const Ee=de.groups;for(let Ae=0,Ce=Ee.length;Ae<Ce;Ae++){const Te=Ee[Ae],et=Me[Te.materialIndex];et&&et.visible&&g.push(A,de,et,V,Re.z,Te)}}else Me.visible&&g.push(A,de,Me,V,Re.z,null)}}const ae=A.children;for(let de=0,Me=ae.length;de<Me;de++)Xu(ae[de],O,V,j)}function km(A,O,V,j){const F=A.opaque,ae=A.transmissive,de=A.transparent;m.setupLightsView(V),W===!0&&se.setGlobalState(x.clippingPlanes,V),j&&Pe.viewport(y.copy(j)),F.length>0&&bl(F,O,V),ae.length>0&&bl(ae,O,V),de.length>0&&bl(de,O,V),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function zm(A,O,V,j){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Ls(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?El:rr,minFilter:_s,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=m.state.transmissionRenderTarget[j.id],de=j.viewport||y;ae.setSize(de.z,de.w);const Me=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(z),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),nt&&Le.render(V);const Ee=x.toneMapping;x.toneMapping=Fr;const Ae=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),W===!0&&se.setGlobalState(x.clippingPlanes,j),bl(A,V,j),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Te=0,et=O.length;Te<et;Te++){const ft=O[Te],Et=ft.object,Pn=ft.geometry,Ze=ft.material,be=ft.group;if(Ze.side===Xi&&Et.layers.test(j.layers)){const Vt=Ze.side;Ze.side=un,Ze.needsUpdate=!0,Bm(Et,V,j,Pn,Ze,be),Ze.side=Vt,Ze.needsUpdate=!0,Ce=!0}}Ce===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}x.setRenderTarget(Me),x.setClearColor(z,H),Ae!==void 0&&(j.viewport=Ae),x.toneMapping=Ee}function bl(A,O,V){const j=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ae=A.length;F<ae;F++){const de=A[F],Me=de.object,Ee=de.geometry,Ae=j===null?de.material:j,Ce=de.group;Me.layers.test(V.layers)&&Bm(Me,O,V,Ee,Ae,Ce)}}function Bm(A,O,V,j,F,ae){A.onBeforeRender(x,O,V,j,F,ae),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(x,O,V,j,A,ae),F.transparent===!0&&F.side===Xi&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,x.renderBufferDirect(V,O,j,F,A,ae),F.side=Vr,F.needsUpdate=!0,x.renderBufferDirect(V,O,j,F,A,ae),F.side=Xi):x.renderBufferDirect(V,O,j,F,A,ae),A.onAfterRender(x,O,V,j,F,ae)}function Al(A,O,V){O.isScene!==!0&&(O=Ve);const j=Ne.get(A),F=m.state.lights,ae=m.state.shadowsArray,de=F.state.version,Me=we.getParameters(A,F.state,ae,O,V),Ee=we.getProgramCacheKey(Me);let Ae=j.programs;j.environment=A.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(A.isMeshStandardMaterial?G:T).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ae===void 0&&(A.addEventListener("dispose",je),Ae=new Map,j.programs=Ae);let Ce=Ae.get(Ee);if(Ce!==void 0){if(j.currentProgram===Ce&&j.lightsStateVersion===de)return Hm(A,Me),Ce}else Me.uniforms=we.getUniforms(A),A.onBeforeCompile(Me,x),Ce=we.acquireProgram(Me,Ee),Ae.set(Ee,Ce),j.uniforms=Me.uniforms;const Te=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Te.clippingPlanes=se.uniform),Hm(A,Me),j.needsLights=h1(A),j.lightsStateVersion=de,j.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),j.currentProgram=Ce,j.uniformsList=null,Ce}function Gm(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=kc.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Hm(A,O){const V=Ne.get(A);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function f1(A,O,V,j,F){O.isScene!==!0&&(O=Ve),P.resetTextureUnits();const ae=O.fog,de=j.isMeshStandardMaterial?O.environment:null,Me=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:qr,Ee=(j.isMeshStandardMaterial?G:T).get(j.envMap||de),Ae=j.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ce=!!V.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Te=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,ft=!!V.morphAttributes.color;let Et=Fr;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Et=x.toneMapping);const Pn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=Pn!==void 0?Pn.length:0,be=Ne.get(j),Vt=m.state.lights;if(W===!0&&(J===!0||A!==D)){const qn=A===D&&j.id===C;se.setState(j,A,qn)}let Qe=!1;j.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Vt.state.version||be.outputColorSpace!==Me||F.isBatchedMesh&&be.batching===!1||!F.isBatchedMesh&&be.batching===!0||F.isBatchedMesh&&be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&be.instancing===!1||!F.isInstancedMesh&&be.instancing===!0||F.isSkinnedMesh&&be.skinning===!1||!F.isSkinnedMesh&&be.skinning===!0||F.isInstancedMesh&&be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&be.instancingMorph===!1&&F.morphTexture!==null||be.envMap!==Ee||j.fog===!0&&be.fog!==ae||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==se.numPlanes||be.numIntersection!==se.numIntersection)||be.vertexAlphas!==Ae||be.vertexTangents!==Ce||be.morphTargets!==Te||be.morphNormals!==et||be.morphColors!==ft||be.toneMapping!==Et||be.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,be.__version=j.version);let si=be.currentProgram;Qe===!0&&(si=Al(j,O,F));let Fs=!1,Ln=!1,Yu=!1;const bt=si.getUniforms(),or=be.uniforms;if(Pe.useProgram(si.program)&&(Fs=!0,Ln=!0,Yu=!0),j.id!==C&&(C=j.id,Ln=!0),Fs||D!==A){qe.reverseDepthBuffer?(he.copy(A.projectionMatrix),FT(he),kT(he),bt.setValue(N,"projectionMatrix",he)):bt.setValue(N,"projectionMatrix",A.projectionMatrix),bt.setValue(N,"viewMatrix",A.matrixWorldInverse);const qn=bt.map.cameraPosition;qn!==void 0&&qn.setValue(N,Ie.setFromMatrixPosition(A.matrixWorld)),qe.logarithmicDepthBuffer&&bt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&bt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Ln=!0,Yu=!0)}if(F.isSkinnedMesh){bt.setOptional(N,F,"bindMatrix"),bt.setOptional(N,F,"bindMatrixInverse");const qn=F.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),bt.setValue(N,"boneTexture",qn.boneTexture,P))}F.isBatchedMesh&&(bt.setOptional(N,F,"batchingTexture"),bt.setValue(N,"batchingTexture",F._matricesTexture,P),bt.setOptional(N,F,"batchingIdTexture"),bt.setValue(N,"batchingIdTexture",F._indirectTexture,P),bt.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&bt.setValue(N,"batchingColorTexture",F._colorsTexture,P));const qu=V.morphAttributes;if((qu.position!==void 0||qu.normal!==void 0||qu.color!==void 0)&&De.update(F,V,si),(Ln||be.receiveShadow!==F.receiveShadow)&&(be.receiveShadow=F.receiveShadow,bt.setValue(N,"receiveShadow",F.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(or.envMap.value=Ee,or.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(or.envMapIntensity.value=O.environmentIntensity),Ln&&(bt.setValue(N,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&d1(or,Yu),ae&&j.fog===!0&&ce.refreshFogUniforms(or,ae),ce.refreshMaterialUniforms(or,j,q,B,m.state.transmissionRenderTarget[A.id]),kc.upload(N,Gm(be),or,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(kc.upload(N,Gm(be),or,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&bt.setValue(N,"center",F.center),bt.setValue(N,"modelViewMatrix",F.modelViewMatrix),bt.setValue(N,"normalMatrix",F.normalMatrix),bt.setValue(N,"modelMatrix",F.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const qn=j.uniformsGroups;for(let $u=0,p1=qn.length;$u<p1;$u++){const Vm=qn[$u];U.update(Vm,si),U.bind(Vm,si)}}return si}function d1(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function h1(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,O,V){Ne.get(A.texture).__webglTexture=O,Ne.get(A.depthTexture).__webglTexture=V;const j=Ne.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=V===void 0,j.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const V=Ne.get(A);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,V=0){E=A,b=O,R=V;let j=!0,F=null,ae=!1,de=!1;if(A){const Ee=Ne.get(A);if(Ee.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(Ee.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ee.__hasExternalTextures)P.rebindTextures(A,Ne.get(A.texture).__webglTexture,Ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Te=A.depthTexture;if(Ee.__boundDepthTexture!==Te){if(Te!==null&&Ne.has(Te)&&(A.width!==Te.image.width||A.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(de=!0);const Ce=Ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ce[O])?F=Ce[O][V]:F=Ce[O],ae=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?F=Ne.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?F=Ce[V]:F=Ce,y.copy(A.viewport),w.copy(A.scissor),k=A.scissorTest}else y.copy(Z).multiplyScalar(q).floor(),w.copy(re).multiplyScalar(q).floor(),k=Se;if(Pe.bindFramebuffer(N.FRAMEBUFFER,F)&&j&&Pe.drawBuffers(A,F),Pe.viewport(y),Pe.scissor(w),Pe.setScissorTest(k),ae){const Ee=Ne.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,V)}else if(de){const Ee=Ne.get(A.texture),Ae=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Ae)}C=-1},this.readRenderTargetPixels=function(A,O,V,j,F,ae,de){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){Pe.bindFramebuffer(N.FRAMEBUFFER,Me);try{const Ee=A.texture,Ae=Ee.format,Ce=Ee.type;if(!qe.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-j&&V>=0&&V<=A.height-F&&N.readPixels(O,V,j,F,Ue.convert(Ae),Ue.convert(Ce),ae)}finally{const Ee=E!==null?Ne.get(E).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(A,O,V,j,F,ae,de){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){const Ee=A.texture,Ae=Ee.format,Ce=Ee.type;if(!qe.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-j&&V>=0&&V<=A.height-F){Pe.bindFramebuffer(N.FRAMEBUFFER,Me);const Te=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Te),N.bufferData(N.PIXEL_PACK_BUFFER,ae.byteLength,N.STREAM_READ),N.readPixels(O,V,j,F,Ue.convert(Ae),Ue.convert(Ce),0);const et=E!==null?Ne.get(E).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,et);const ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await OT(N,ft,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Te),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ae),N.deleteBuffer(Te),N.deleteSync(ft),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,V=0){A.isTexture!==!0&&(Fc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-V),F=Math.floor(A.image.width*j),ae=Math.floor(A.image.height*j),de=O!==null?O.x:0,Me=O!==null?O.y:0;P.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,de,Me,F,ae),Pe.unbindTexture()},this.copyTextureToTexture=function(A,O,V=null,j=null,F=0){A.isTexture!==!0&&(Fc("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],O=arguments[2],F=arguments[3]||0,V=null);let ae,de,Me,Ee,Ae,Ce;V!==null?(ae=V.max.x-V.min.x,de=V.max.y-V.min.y,Me=V.min.x,Ee=V.min.y):(ae=A.image.width,de=A.image.height,Me=0,Ee=0),j!==null?(Ae=j.x,Ce=j.y):(Ae=0,Ce=0);const Te=Ue.convert(O.format),et=Ue.convert(O.type);P.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const ft=N.getParameter(N.UNPACK_ROW_LENGTH),Et=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Pn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ze=N.getParameter(N.UNPACK_SKIP_ROWS),be=N.getParameter(N.UNPACK_SKIP_IMAGES),Vt=A.isCompressedTexture?A.mipmaps[F]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ee),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Ae,Ce,ae,de,Te,et,Vt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Ae,Ce,Vt.width,Vt.height,Te,Vt.data):N.texSubImage2D(N.TEXTURE_2D,F,Ae,Ce,ae,de,Te,et,Vt),N.pixelStorei(N.UNPACK_ROW_LENGTH,ft),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Pn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,be),F===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(A,O,V=null,j=null,F=0){A.isTexture!==!0&&(Fc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,j=arguments[1]||null,A=arguments[2],O=arguments[3],F=arguments[4]||0);let ae,de,Me,Ee,Ae,Ce,Te,et,ft;const Et=A.isCompressedTexture?A.mipmaps[F]:A.image;V!==null?(ae=V.max.x-V.min.x,de=V.max.y-V.min.y,Me=V.max.z-V.min.z,Ee=V.min.x,Ae=V.min.y,Ce=V.min.z):(ae=Et.width,de=Et.height,Me=Et.depth,Ee=0,Ae=0,Ce=0),j!==null?(Te=j.x,et=j.y,ft=j.z):(Te=0,et=0,ft=0);const Pn=Ue.convert(O.format),Ze=Ue.convert(O.type);let be;if(O.isData3DTexture)P.setTexture3D(O,0),be=N.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)P.setTexture2DArray(O,0),be=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const Vt=N.getParameter(N.UNPACK_ROW_LENGTH),Qe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),si=N.getParameter(N.UNPACK_SKIP_PIXELS),Fs=N.getParameter(N.UNPACK_SKIP_ROWS),Ln=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Et.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ae),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ce),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(be,F,Te,et,ft,ae,de,Me,Pn,Ze,Et.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(be,F,Te,et,ft,ae,de,Me,Pn,Et.data):N.texSubImage3D(be,F,Te,et,ft,ae,de,Me,Pn,Ze,Et),N.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,si),N.pixelStorei(N.UNPACK_SKIP_ROWS,Fs),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ln),F===0&&O.generateMipmaps&&N.generateMipmap(be),Pe.unbindTexture()},this.initRenderTarget=function(A){Ne.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){b=0,R=0,E=null,Pe.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Rm?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Hu?"display-p3":"srgb"}}class va{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new va(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $C extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class KC extends fn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=yn,u=yn,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ip extends jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ta=new st,p_=new st,hc=[],m_=new Us,ZC=new st,vo=new it,xo=new eo;class QC extends it{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ip(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ZC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Us),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ta),m_.copy(e.boundingBox).applyMatrix4(ta),this.boundingBox.union(m_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new eo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ta),xo.copy(e.boundingSphere).applyMatrix4(ta),this.boundingSphere.union(xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(i),e.ray.intersectsSphere(xo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ta),p_.multiplyMatrices(i,ta),vo.matrixWorld=p_,vo.raycast(e,hc);for(let a=0,o=hc.length;a<o;a++){const l=hc[a];l.instanceId=s,l.object=this,t.push(l)}hc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ip(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new KC(new Float32Array(r*this.count),r,this.count,wm,Ci));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class zc extends Os{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const g_=new st,rp=new Pm,pc=new eo,mc=new I;class od extends Ut{constructor(e=new dn,t=new zc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(r),pc.radius+=s,e.ray.intersectsSphere(pc)===!1)return;g_.copy(r).invert(),rp.copy(e.ray).applyMatrix4(g_);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);mc.fromBufferAttribute(f,m),__(mc,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,g=p;_<g;_++)mc.fromBufferAttribute(f,_),__(mc,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function __(n,e,t,i,r,s,a){const o=rp.distanceSqToPoint(n);if(o<t){const l=new I;rp.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wu extends dn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let _=0;const g=[],m=i/2;let h=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(p,2));function v(){const S=new I,b=new I;let R=0;const E=(t-e)/i;for(let C=0;C<=s;C++){const D=[],y=C/s,w=y*(t-e)+e;for(let k=0;k<=r;k++){const z=k/r,H=z*l+o,X=Math.sin(H),B=Math.cos(H);b.x=w*X,b.y=-y*i+m,b.z=w*B,f.push(b.x,b.y,b.z),S.set(X,E,B).normalize(),d.push(S.x,S.y,S.z),p.push(z,1-y),D.push(_++)}g.push(D)}for(let C=0;C<r;C++)for(let D=0;D<s;D++){const y=g[D][C],w=g[D+1][C],k=g[D+1][C+1],z=g[D][C+1];e>0&&(u.push(y,w,z),R+=3),t>0&&(u.push(w,k,z),R+=3)}c.addGroup(h,R,0),h+=R}function x(S){const b=_,R=new Ye,E=new I;let C=0;const D=S===!0?e:t,y=S===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),_++;const w=_;for(let k=0;k<=r;k++){const H=k/r*l+o,X=Math.cos(H),B=Math.sin(H);E.x=D*B,E.y=m*y,E.z=D*X,f.push(E.x,E.y,E.z),d.push(0,y,0),R.x=X*.5+.5,R.y=B*.5*y+.5,p.push(R.x,R.y),_++}for(let k=0;k<r;k++){const z=b+k,H=w+k;S===!0?u.push(H,H+1,z):u.push(H+1,H,z),C+=3}c.addGroup(h,C,S===!0?1:2),h+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vo extends Wu{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Vo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ws extends dn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new I,d=new I,p=[],_=[],g=[],m=[];for(let h=0;h<=i;h++){const v=[],x=h/i;let S=0;h===0&&a===0?S=.5/t:h===i&&l===Math.PI&&(S=-.5/t);for(let b=0;b<=t;b++){const R=b/t;f.x=-e*Math.cos(r+R*s)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(r+R*s)*Math.sin(a+x*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),m.push(R+S,1-x),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<t;v++){const x=u[h][v+1],S=u[h][v],b=u[h+1][v],R=u[h+1][v+1];(h!==0||a>0)&&p.push(x,S,R),(h!==i-1||l<Math.PI)&&p.push(S,b,R)}this.setIndex(p),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Um extends dn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new I,f=new I,d=new I;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const g=_/r*s,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(g),f.y=(e+t*Math.cos(m))*Math.sin(g),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const g=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,v=(r+1)*p+_;a.push(g,m,v),a.push(m,h,v)}this.setIndex(a),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Um(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fs extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xy,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ju extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class JC extends ju{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ld=new st,v_=new I,x_=new I;class u1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nm,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;v_.setFromMatrixPosition(e.matrixWorld),t.position.copy(v_),x_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(x_),t.updateMatrixWorld(),ld.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const y_=new st,yo=new I,cd=new I;class e3 extends u1{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),yo.setFromMatrixPosition(e.matrixWorld),i.position.copy(yo),cd.copy(i.position),cd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(cd),i.updateMatrixWorld(),r.makeTranslation(-yo.x,-yo.y,-yo.z),y_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(y_)}}class sp extends ju{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new e3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class t3 extends u1{constructor(){super(new r1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class n3 extends ju{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new t3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class i3 extends ju{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class r3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=S_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=S_();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function S_(){return performance.now()}const M_=new st;class s3{constructor(e,t,i=0,r=1/0){this.ray=new Pm(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Lm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return M_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(M_),this}intersectObject(e,t=!0,i=[]){return ap(e,this,i,t),i.sort(E_),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ap(e[r],this,i,t);return i.sort(E_),i}}function E_(n,e){return n.distance-e.distance}function ap(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)ap(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ym}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ym);class a3{constructor(e){ie(this,"camera");ie(this,"target");ie(this,"desiredPos");ie(this,"desiredTarget");ie(this,"lerpSpeed",2);ie(this,"orbitEnabled",!1);ie(this,"azimuth",0);ie(this,"polar",Math.PI/2);ie(this,"radius",35);ie(this,"orbitTarget",new I(0,5,0));ie(this,"minRadius",5);ie(this,"maxRadius",80);ie(this,"velAzimuth",0);ie(this,"velPolar",0);ie(this,"velRadius",0);ie(this,"damping",.92);ie(this,"swayTime",0);ie(this,"swayAmount",.3);ie(this,"autoRotate",!1);ie(this,"autoRotateSpeed",.1);this.camera=new On(55,e,.1,500),this.target=new I(0,5,0),this.desiredPos=new I(0,10,40),this.desiredTarget=new I(0,5,0),this.camera.position.copy(this.desiredPos),this.camera.lookAt(this.target)}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setPosition(e,t,i=2){this.desiredPos.copy(e),this.desiredTarget.copy(t),this.lerpSpeed=i,this.orbitEnabled=!1}enableOrbit(e,t,i=Math.PI/2,r=Math.PI/2){this.orbitEnabled=!0,this.orbitTarget.copy(e),this.radius=t,this.azimuth=i,this.polar=r,this.updateOrbitPosition()}resetOrbit(e=34,t){t&&this.orbitTarget.copy(t),this.radius=pi.clamp(e,this.minRadius,this.maxRadius),this.azimuth=Math.PI/2,this.polar=Math.PI/2,this.velAzimuth=0,this.velPolar=0,this.velRadius=0,this.orbitEnabled=!0,this.updateOrbitPosition()}focusOrbitTarget(e,t){this.orbitTarget.copy(e),t!==void 0&&(this.radius=pi.clamp(t,this.minRadius,this.maxRadius)),this.velAzimuth=0,this.velPolar=0,this.velRadius=0,this.orbitEnabled=!0,this.updateOrbitPosition()}isOrbitEnabled(){return this.orbitEnabled}setAutoRotate(e){this.autoRotate=e}onDrag(e,t){this.orbitEnabled&&(this.velAzimuth-=e*.005,this.velPolar-=t*.005)}onZoom(e){this.orbitEnabled&&(this.velRadius+=e*.02)}setZoomLimits(e,t){this.minRadius=e,this.maxRadius=t}getZoomLevel(){return 1-(this.radius-this.minRadius)/(this.maxRadius-this.minRadius)}getRadius(){return this.radius}updateOrbitPosition(){this.polar=pi.clamp(this.polar,.3,Math.PI-.3),this.radius=pi.clamp(this.radius,this.minRadius,this.maxRadius);const e=this.orbitTarget.x+this.radius*Math.sin(this.polar)*Math.cos(this.azimuth),t=this.orbitTarget.y+this.radius*Math.cos(this.polar),i=this.orbitTarget.z+this.radius*Math.sin(this.polar)*Math.sin(this.azimuth);this.camera.position.set(e,t,i),this.camera.lookAt(this.orbitTarget)}update(e){if(this.orbitEnabled?(this.azimuth+=this.velAzimuth,this.polar+=this.velPolar,this.radius+=this.velRadius,this.velAzimuth*=this.damping,this.velPolar*=this.damping,this.velRadius*=this.damping,this.autoRotate&&Math.abs(this.velAzimuth)<.001&&(this.azimuth+=this.autoRotateSpeed*e),this.updateOrbitPosition()):(this.camera.position.lerp(this.desiredPos,Math.min(1,e*this.lerpSpeed)),this.target.lerp(this.desiredTarget,Math.min(1,e*this.lerpSpeed)),this.camera.lookAt(this.target)),this.swayTime+=e,!this.orbitEnabled){const t=Math.sin(this.swayTime*.5)*this.swayAmount,i=Math.cos(this.swayTime*.3)*this.swayAmount*.5;this.camera.position.x+=t,this.camera.position.y+=i}}setSway(e){this.swayAmount=e}dispose(){}}function o3(){const n=new Pi,e=new Vo(.45,.5,5);e.translate(0,.1,0);for(let a=0;a<5;a++){const o=a/5*Math.PI*2,l=new it(e);l.position.set(Math.cos(o)*.28,.05,Math.sin(o)*.28),l.rotation.z=-.5,l.rotation.y=o,n.add(l)}const t=new Vo(.3,.35,5);t.translate(0,.1,0);for(let a=0;a<7;a++){const o=a/7*Math.PI*2+.3,l=new it(t);l.position.set(Math.cos(o)*.15,.15,Math.sin(o)*.15),l.rotation.z=-.3,l.rotation.y=o,n.add(l)}const i=new Vo(.18,.22,5);i.translate(0,.08,0);for(let a=0;a<5;a++){const o=a/5*Math.PI*2,l=new it(i);l.position.set(Math.cos(o)*.06,.25,Math.sin(o)*.06),l.rotation.z=-.15,l.rotation.y=o,n.add(l)}const r=new ws(.1,6,5);r.translate(0,.32,0),n.add(new it(r));const s=l3(n);return s.computeVertexNormals(),s}function l3(n){const e=[];n.traverse(s=>{if(s instanceof it&&s.geometry){s.geometry.clone().applyMatrix4(s.matrixWorld),s.updateMatrixWorld();const o=s.geometry.clone();o.applyMatrix4(s.matrixWorld),e.push(o)}});const t=new dn,i=[],r=[];for(const s of e){const a=s.attributes.position,o=s.attributes.normal;for(let l=0;l<a.count;l++)i.push(a.getX(l),a.getY(l),a.getZ(l)),o?r.push(o.getX(l),o.getY(l),o.getZ(l)):r.push(0,1,0)}return t.setAttribute("position",new Gt(i,3)),t.setAttribute("normal",new Gt(r,3)),t.computeVertexNormals(),t}function c3(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function u3(n){const e=c3(42),t=new Float32Array(n*3),i=new Float32Array(n*3),r=new Float32Array(n*3),s=new Float32Array(n),a=new Float32Array(n*3),o=iE();for(let l=0;l<n;l++){const c=e()*Math.PI*2,u=Math.acos(2*e()-1),f=Math.pow(e(),.5)*18;let d=f*Math.sin(u)*Math.cos(c),p=f*Math.cos(u)*.7+4,_=f*Math.sin(u)*Math.sin(c);const g=1-Math.max(0,(4-p)/8)*.6;d*=g,_*=g,d+=(e()-.5)*1.5,p+=(e()-.5)*1,_+=(e()-.5)*1.5;const m=l*3;t[m]=d,t[m+1]=p,t[m+2]=_,r[m]=(e()-.5)*.8,r[m+1]=e()*Math.PI*2,r[m+2]=(e()-.5)*.8;let h=.6+e()*.5;o.has(l+1)&&(h*=1.35),s[l]=h;const v=e();let x,S,b;o.has(l+1)?(x=1,S=.85,b=.3):v<.5?(x=.78+e()*.15,S=.08+e()*.1,b=.15+e()*.1):v<.8?(x=.9+e()*.1,S=.25+e()*.15,b=.45+e()*.15):(x=.85+e()*.1,S=.12+e()*.1,b=.35+e()*.2),a[m]=x,a[m+1]=S,a[m+2]=b}return d3(n,i,e),{positions:t,rotations:r,scales:s,colors:a,heartPositions:i}}function f3(n,e){return Math.pow(n*n+e*e-1,3)-n*n*Math.pow(e,3)<=0}function d3(n,e,t){let a=0,o=0;const l=-1.15,c=1.15,u=-1.15,f=1.15,d=Math.max(n*24,1e4);for(;a<n&&o<d;){o++;const p=l+t()*(c-l),_=u+t()*(f-u);if(!f3(p,_))continue;const g=Math.min(1,Math.sqrt((p/1.05)**2+(_/1.05)**2)),m=(t()-.5)*(3-g*1),h=a*3;e[h]=p*14.5,e[h+1]=_*8+5,e[h+2]=m,a++}for(;a<n;){const p=a/Math.max(1,n-1)*Math.PI*2,_=Math.sin(p)**3,g=.82*Math.cos(p)-.3*Math.cos(2*p)-.12*Math.cos(3*p)-.06*Math.cos(4*p),m=a*3;e[m]=_*14.5*1.02,e[m+1]=g*8+5,e[m+2]=(t()-.5)*1.8,a++}}class gc{constructor(e,t){ie(this,"mesh");ie(this,"geometry");ie(this,"material");ie(this,"roseData");ie(this,"count");ie(this,"morphProgress",0);ie(this,"morphTarget",0);ie(this,"morphVelocity",0);ie(this,"heartPulse",0);ie(this,"floatTime",0);ie(this,"sparkleTime",0);ie(this,"highlightedId",-1);ie(this,"originalScale",new Map);ie(this,"dummy",new Ut);ie(this,"tmpColor",new ke);ie(this,"quality");this.count=e,this.quality=t,this.geometry=o3(),this.roseData=u3(e),this.material=new fs({vertexColors:!1,roughness:.65,metalness:.1,flatShading:!0}),this.mesh=new QC(this.geometry,this.material,e),this.mesh.instanceMatrix.setUsage(w0),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1;const i=new Float32Array(e*3);for(let r=0;r<e;r++)i[r*3]=this.roseData.colors[r*3],i[r*3+1]=this.roseData.colors[r*3+1],i[r*3+2]=this.roseData.colors[r*3+2];this.mesh.instanceColor=new ip(i,3),this.mesh.instanceColor.setUsage(w0),this.updateAllInstances()}updateAllInstances(){const{positions:e,heartPositions:t,rotations:i,scales:r}=this.roseData,s=pi.clamp(this.morphProgress,0,1),a=pi.smoothstep(s,0,1);for(let o=0;o<this.count;o++){const l=e[o*3],c=e[o*3+1],u=e[o*3+2],f=t[o*3],d=t[o*3+1],p=t[o*3+2];this.dummy.position.set(l+(f-l)*a,c+(d-c)*a,u+(p-u)*a);const _=1-a,g=Math.sin(this.floatTime*1.15+o*.071)*.045,m=Math.sin(this.floatTime*1.45+o*.113)*.075,h=Math.cos(this.floatTime*.92+o*.097)*.055;this.dummy.position.x+=g*_,this.dummy.position.y+=m*_,this.dummy.position.z+=h*_;const v=i[o*3],x=i[o*3+1],S=i[o*3+2];this.dummy.rotation.set(v+Math.sin(this.floatTime*.8+o*.13)*.06*_,x+this.floatTime*.055+o*.001,S+Math.cos(this.floatTime*.7+o*.17)*.05*_);let b=r[o];o===this.highlightedId&&(b*=1.5);const R=.985+Math.sin(this.sparkleTime*1.7+o*.037)*.015;if(b*=R,a>.96){const E=pi.smoothstep(a,.96,1),C=1+Math.sin(this.heartPulse*2.6)*.012*E;b*=C}this.dummy.scale.setScalar(b),this.dummy.updateMatrix(),this.mesh.setMatrixAt(o,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}setMorphTarget(e){this.morphTarget=pi.clamp(e,0,1)}getMorphProgress(){return this.morphProgress}update(e){const t=Math.min(Math.max(e,0),.05);this.floatTime+=t,this.sparkleTime+=t;const i=this.morphTarget-this.morphProgress;this.morphVelocity+=i*t*1.15,this.morphVelocity*=Math.pow(.91,t*60),this.morphProgress+=this.morphVelocity*t*3.5,Math.abs(this.morphTarget-this.morphProgress)<8e-4&&Math.abs(this.morphVelocity)<8e-4&&(this.morphProgress=this.morphTarget,this.morphVelocity=0),this.morphProgress=pi.clamp(this.morphProgress,0,1),this.morphProgress>.94&&(this.heartPulse+=t),this.updateAllInstances()}highlightRose(e){e<0||e>=this.count||(this.highlightedId=e,this.updateAllInstances())}clearHighlight(){this.highlightedId=-1,this.updateAllInstances()}getRosePosition(e,t){if(e<0||e>=this.count){t.set(0,0,0);return}const{positions:i,heartPositions:r}=this.roseData,s=pi.clamp(this.morphProgress,0,1),a=pi.smoothstep(s,0,1);t.set(i[e*3]+(r[e*3]-i[e*3])*a,i[e*3+1]+(r[e*3+1]-i[e*3+1])*a,i[e*3+2]+(r[e*3+2]-i[e*3+2])*a)}static instanceIdToRoseNumber(e){return e+1}static roseNumberToInstanceId(e){return e-1}dispose(){this.geometry.dispose(),this.material.dispose(),this.mesh.dispose(),this.originalScale.clear()}}class h3{constructor(e){ie(this,"group");ie(this,"ambient");ie(this,"directional");ie(this,"point1");ie(this,"point2");ie(this,"hemi");ie(this,"quality");this.quality=e,this.group=new Pi,this.ambient=new i3(16746598,.4),this.group.add(this.ambient),this.hemi=new JC(16750950,3346756,.5),this.group.add(this.hemi),this.directional=new n3(16755319,.8),this.directional.position.set(20,30,10),e!=="LOW"&&(this.directional.castShadow=!0,this.directional.shadow.mapSize.set(512,512),this.directional.shadow.camera.near=1,this.directional.shadow.camera.far=100),this.group.add(this.directional),this.point1=new sp(16766720,2,50,1.5),this.point1.position.set(0,8,-15),this.group.add(this.point1),this.point2=new sp(16726925,1.5,40,2),this.point2.position.set(-10,5,10),this.group.add(this.point2)}setMood(e){switch(xm.timeline(),e){case"garden":this.ambient.intensity=.4,this.directional.intensity=.8,this.point1.intensity=2,this.point2.intensity=1.5;break;case"gate":this.ambient.intensity=.25,this.directional.intensity=.5,this.point1.intensity=4,this.point2.intensity=1;break;case"bouquet":this.ambient.intensity=.5,this.directional.intensity=1,this.point1.intensity=3,this.point2.intensity=2;break;case"heart":this.ambient.intensity=.35,this.directional.intensity=.6,this.point1.intensity=2.5,this.point2.intensity=2;break}}dispose(){this.group.clear()}}class p3{constructor(e){ie(this,"group");ie(this,"petals");ie(this,"fireflies");ie(this,"dust");ie(this,"quality");ie(this,"petalVelocities");ie(this,"fireflyData");ie(this,"time",0);this.quality=e,this.group=new Pi;const t=e==="LOW"?80:e==="MEDIUM"?200:400,i=e==="LOW"?40:e==="MEDIUM"?100:200,r=e==="LOW"?200:e==="MEDIUM"?500:1e3;this.petals=this.createPetals(t),this.petalVelocities=new Float32Array(t*3);for(let a=0;a<t;a++)this.petalVelocities[a*3]=(Math.random()-.5)*.5,this.petalVelocities[a*3+1]=-Math.random()*.3-.1,this.petalVelocities[a*3+2]=(Math.random()-.5)*.5;this.group.add(this.petals),this.fireflies=this.createFireflies(i),this.fireflyData=new Float32Array(i*3);const s=this.fireflies.geometry.attributes.position;for(let a=0;a<i;a++)this.fireflyData[a*3]=s.getX(a),this.fireflyData[a*3+1]=s.getY(a),this.fireflyData[a*3+2]=s.getZ(a);this.group.add(this.fireflies),this.dust=this.createDust(r),this.group.add(this.dust)}createPetals(e){const t=new dn,i=new Float32Array(e*3),r=new Float32Array(e*3),s=new Float32Array(e);for(let o=0;o<e;o++){i[o*3]=(Math.random()-.5)*80,i[o*3+1]=Math.random()*40,i[o*3+2]=(Math.random()-.5)*80;const l=Math.random();r[o*3]=.9+l*.1,r[o*3+1]=.2+l*.3,r[o*3+2]=.4+l*.3,s[o]=.15+Math.random()*.2}t.setAttribute("position",new jt(i,3)),t.setAttribute("color",new jt(r,3)),t.setAttribute("size",new jt(s,1));const a=new zc({size:.3,vertexColors:!0,transparent:!0,opacity:.7,sizeAttenuation:!0,depthWrite:!1,blending:Bo});return new od(t,a)}createFireflies(e){const t=new dn,i=new Float32Array(e*3),r=new Float32Array(e*3);for(let a=0;a<e;a++)i[a*3]=(Math.random()-.5)*60,i[a*3+1]=Math.random()*25+1,i[a*3+2]=(Math.random()-.5)*60,r[a*3]=1,r[a*3+1]=.85+Math.random()*.15,r[a*3+2]=.3+Math.random()*.3;t.setAttribute("position",new jt(i,3)),t.setAttribute("color",new jt(r,3));const s=new zc({size:.25,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1,blending:Bo});return new od(t,s)}createDust(e){const t=new dn,i=new Float32Array(e*3);for(let s=0;s<e;s++)i[s*3]=(Math.random()-.5)*100,i[s*3+1]=Math.random()*40,i[s*3+2]=(Math.random()-.5)*100;t.setAttribute("position",new jt(i,3));const r=new zc({size:.08,color:16768426,transparent:!0,opacity:.3,sizeAttenuation:!0,depthWrite:!1,blending:Bo});return new od(t,r)}update(e){this.time+=e;const t=this.petals.geometry.attributes.position;for(let r=0;r<t.count;r++){let s=t.getX(r),a=t.getY(r),o=t.getZ(r);s+=this.petalVelocities[r*3]*e+Math.sin(this.time+r)*.02,a+=this.petalVelocities[r*3+1]*e,o+=this.petalVelocities[r*3+2]*e+Math.cos(this.time+r)*.02,a<-2&&(a=35+Math.random()*5,s=(Math.random()-.5)*80,o=(Math.random()-.5)*80),t.setXYZ(r,s,a,o)}t.needsUpdate=!0;const i=this.fireflies.geometry.attributes.position;for(let r=0;r<i.count;r++){const s=this.fireflyData[r*3],a=this.fireflyData[r*3+1],o=this.fireflyData[r*3+2];i.setXYZ(r,s+Math.sin(this.time*.5+r*.7)*2,a+Math.cos(this.time*.3+r*.5)*1.5,o+Math.sin(this.time*.4+r*.3)*2)}i.needsUpdate=!0,this.fireflies.material.opacity=.6+Math.sin(this.time*2)*.3}setIntensity(e){this.petals.material.opacity=.7*e,this.fireflies.material.opacity=.9*e,this.dust.material.opacity=.3*e}dispose(){this.petals.geometry.dispose(),this.petals.material.dispose(),this.fireflies.geometry.dispose(),this.fireflies.material.dispose(),this.dust.geometry.dispose(),this.dust.material.dispose()}}class m3{constructor(){ie(this,"group");ie(this,"leftDoor");ie(this,"rightDoor");ie(this,"openAmount",0);ie(this,"gateLight");this.group=new Pi,this.leftDoor=this.createDoor(!0),this.rightDoor=this.createDoor(!1),this.leftDoor.position.x=-4,this.rightDoor.position.x=4,this.group.add(this.leftDoor),this.group.add(this.rightDoor),this.group.add(this.createArch()),this.gateLight=new sp(16766720,0,30,1.5),this.gateLight.position.set(0,6,-3),this.group.add(this.gateLight)}createDoor(e){const t=new Pi,i=new fs({color:12092939,roughness:.3,metalness:.8}),r=new fs({color:2969622,roughness:.7,metalness:.1}),s=new fs({color:12852794,roughness:.5,metalness:.2}),a=new it(new Ki(4,12,.4),i);a.position.y=6,t.add(a);for(let f=0;f<4;f++){const d=new it(new Ki(3.5,.15,.5),i);d.position.y=2+f*3,t.add(d)}for(let f=0;f<3;f++){const d=new it(new Ki(.15,11,.5),i);d.position.set((f-1)*1.2,6,.05),t.add(d)}const o=new it(new ws(.3,8,6),i);o.position.set(e?1.5:-1.5,5,.3),t.add(o);for(let f=0;f<6;f++){const d=new it(new Wu(.08,.08,8+Math.random()*3,4),r);d.position.set((Math.random()-.5)*3.5,2+Math.random()*8,.25),d.rotation.z=(Math.random()-.5)*.5,t.add(d)}for(let f=0;f<8;f++){const d=new it(new ws(.25+Math.random()*.15,5,4),s);d.position.set((Math.random()-.5)*3.5,2+Math.random()*9,.3),t.add(d)}const l=new Ki(4,.1,.45),c=new Dm({color:16766720}),u=new it(l,c);return u.position.y=12,t.add(u),t}createArch(){const e=new Pi,t=new fs({color:12092939,roughness:.3,metalness:.8}),i=new fs({color:12852794,roughness:.5}),r=new Um(5,.3,8,16,Math.PI),s=new it(r,t);s.position.set(0,12,0),s.rotation.z=Math.PI,e.add(s);for(let a=0;a<12;a++){const o=a/12*Math.PI,l=new it(new ws(.3,5,4),i);l.position.set(Math.cos(o+Math.PI)*5,12+Math.sin(o)*5,0),e.add(l)}return e}setOpenAmount(e){this.openAmount=e,this.leftDoor.rotation.y=e*1.4,this.rightDoor.rotation.y=-e*1.4,this.gateLight.intensity=e*5}getOpenAmount(){return this.openAmount}dispose(){this.group.traverse(e=>{e instanceof it&&(e.geometry.dispose(),e.material instanceof Os&&e.material.dispose())})}}class w_{constructor(e,t){ie(this,"renderer");ie(this,"scene");ie(this,"cameraController");ie(this,"lighting");ie(this,"particles");ie(this,"gate");ie(this,"roseField",null);ie(this,"clock",new r3);ie(this,"quality");ie(this,"state","LOADING");ie(this,"eventHandler",null);ie(this,"raycaster",new s3);ie(this,"pointer",new Ye);ie(this,"isDragging",!1);ie(this,"lastPointerX",0);ie(this,"lastPointerY",0);ie(this,"lastPinchDist",0);ie(this,"pointerDownX",0);ie(this,"pointerDownY",0);ie(this,"pointerMoved",!1);ie(this,"skyMesh",null);ie(this,"gateApproachProgress",0);ie(this,"gateOpeningProgress",0);ie(this,"bouquetRevealProgress",0);ie(this,"heartMorphTimer",null);ie(this,"heartInteractionTimer",null);ie(this,"heartInteractionReady",!1);ie(this,"heartFormedEmitted",!1);ie(this,"lastZoomLevel",-1);ie(this,"resizeObserver",null);ie(this,"animate",()=>{requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.05);if(this.cameraController.update(e),this.particles.update(e),this.roseField&&this.roseField.update(e),this.state==="GATE_OPENING"&&(this.gateOpeningProgress=Math.min(1,this.gateOpeningProgress+e*.5),this.gate.setOpenAmount(this.gateOpeningProgress),this.gateOpeningProgress>=1&&this.emit({type:"gates-opened"})),this.state==="GATE_APPROACH"&&(this.gateApproachProgress=Math.min(1,this.gateApproachProgress+e*.3),this.gateApproachProgress>=1&&this.emit({type:"gates-reached"})),this.state==="BOUQUET_EXPLORE"){const t=this.cameraController.getZoomLevel(),i=Math.round(t*10)/10;i!==this.lastZoomLevel&&(this.lastZoomLevel=i,this.cameraController.getRadius()>=78?this.emit({type:"zoomed-out-fully"}):this.emit({type:"explore-ready"}))}this.state==="HEART_REVEAL"&&this.roseField&&this.heartInteractionReady&&!this.heartFormedEmitted&&this.roseField.getMorphProgress()>=.995&&(this.heartFormedEmitted=!0,this.emit({type:"heart-formed"})),this.renderer.render(this.scene,this.cameraController.camera)});this.quality=t,this.renderer=new qC({antialias:t!=="LOW",powerPreference:"high-performance",alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t==="LOW"?1:t==="MEDIUM"?1.5:2)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.toneMapping=Uy,this.renderer.toneMappingExposure=1.1,this.renderer.outputColorSpace=hi,e.appendChild(this.renderer.domElement),this.scene=new $C,this.scene.fog=new va(2756672,.008),this.cameraController=new a3(e.clientWidth/e.clientHeight),this.lighting=new h3(t),this.scene.add(this.lighting.group),this.particles=new p3(t),this.scene.add(this.particles.group),this.gate=new m3,this.gate.group.position.set(0,0,-20),this.gate.group.visible=!1,this.scene.add(this.gate.group),this.createSky(),this.createGround(),this.setupInput(e),this.resizeObserver=new ResizeObserver(()=>this.onResize(e)),this.resizeObserver.observe(e),this.animate()}createSky(){const e=new ws(250,16,8),t=new sr({uniforms:{topColor:{value:new ke(1706542)},midColor:{value:new ke(4856130)},botColor:{value:new ke(16739179)}},vertexShader:`
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
      `,side:un,depthWrite:!1});this.skyMesh=new it(e,t),this.scene.add(this.skyMesh)}createGround(){const e=new Tl(300,300,1,1),t=new fs({color:1717026,roughness:.9}),i=new it(e,t);i.rotation.x=-Math.PI/2,i.position.y=-2,this.scene.add(i)}setState(e){switch(this.state=e,e){case"GARDEN":this.enterGarden();break;case"GATE_APPROACH":this.startGateApproach();break;case"GATE_OPENING":this.startGateOpening();break;case"BOUQUET_REVEAL":this.revealBouquet();break;case"BOUQUET_EXPLORE":this.enableExploration();break;case"HEART_REVEAL":this.startHeartReveal();break;case"FINAL_MESSAGE":this.showFinalMessage();break}}enterGarden(){this.gate.group.visible=!0,this.gate.setOpenAmount(0),this.lighting.setMood("garden"),this.particles.setIntensity(1),this.scene.fog=new va(3807808,.006),this.cameraController.setPosition(new I(0,5,30),new I(0,6,-20),1.5)}startGateApproach(){this.lighting.setMood("gate"),this.cameraController.setPosition(new I(0,6,12),new I(0,6,-20),.5),this.cameraController.setSway(.15)}startGateOpening(){this.lighting.setMood("gate"),this.cameraController.setPosition(new I(0,6,8),new I(0,6,-20),1)}revealBouquet(){this.roseField&&(this.roseField.mesh.visible=!1),this.cameraController.setPosition(new I(0,6.5,5),new I(0,6,-20),1.1),this.lighting.setMood("bouquet"),this.scene.fog=new va(2756672,.004),this.gate.setOpenAmount(1)}enableExploration(){this.cameraController.enableOrbit(new I(0,5,-10),45),this.cameraController.setZoomLimits(3,80),this.cameraController.setAutoRotate(!1),this.cameraController.setSway(0),this.lighting.setMood("bouquet")}enableHeartExploration(){this.roseField&&(this.roseField.mesh.visible=!0,this.roseField.setMorphTarget(1),this.cameraController.enableOrbit(new I(0,5,0),34,Math.PI/2,Math.PI/2),this.cameraController.setZoomLimits(12,72),this.cameraController.setAutoRotate(!1),this.cameraController.setSway(0),this.roseField.clearHighlight())}focusRose(e){if(!this.roseField)return;const t=gc.roseNumberToInstanceId(e);if(t<0||t>=this.roseField.count)return;this.roseField.highlightRose(t);const i=new I;this.roseField.getRosePosition(t,i),this.cameraController.focusOrbitTarget(i,Math.max(13,Math.min(24,this.cameraController.getRadius()*.72))),this.emit({type:"rose-selected",roseId:e,worldPosition:[i.x,i.y,i.z]})}startHeartReveal(){this.roseField||(this.roseField=new gc(Xt.roseCount,this.quality),this.scene.add(this.roseField.mesh)),this.roseField.mesh.visible=!0,this.roseField.setMorphTarget(0),this.heartFormedEmitted=!1,this.heartInteractionReady=!1,this.heartMorphTimer!==null&&(window.clearTimeout(this.heartMorphTimer),this.heartMorphTimer=null),this.heartInteractionTimer!==null&&(window.clearTimeout(this.heartInteractionTimer),this.heartInteractionTimer=null),this.cameraController.setPosition(new I(0,10,46),new I(0,5,0),1.35),this.cameraController.setSway(.08),this.lighting.setMood("heart"),this.scene.fog=new va(1706544,.0042),this.roseField.setMorphTarget(1),this.heartInteractionTimer=window.setTimeout(()=>{this.state==="HEART_REVEAL"&&(this.heartInteractionReady=!0,this.heartInteractionTimer=null)},17500)}showFinalMessage(){this.enableHeartExploration()}selectRoseAtScreenPoint(e,t,i,r){if(!this.roseField||this.state!=="BOUQUET_EXPLORE"&&this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE")return;this.pointer.x=e/i*2-1,this.pointer.y=-(t/r)*2+1,this.raycaster.setFromCamera(this.pointer,this.cameraController.camera);const s=this.raycaster.intersectObject(this.roseField.mesh);if(s.length>0){const a=s[0].instanceId;if(a!==void 0&&a>=0){const o=gc.instanceIdToRoseNumber(a);this.roseField.highlightRose(a);const l=new I;this.roseField.getRosePosition(a,l),this.emit({type:"rose-selected",roseId:o,worldPosition:[l.x,l.y,l.z]})}}}pickRandomRose(){if(!this.roseField||this.state!=="BOUQUET_EXPLORE"&&this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE")return;const e=Math.floor(Math.random()*Xt.roseCount),t=gc.instanceIdToRoseNumber(e);this.roseField.highlightRose(e);const i=new I;this.roseField.getRosePosition(e,i),this.cameraController.focusOrbitTarget(i,Math.max(13,Math.min(24,this.cameraController.getRadius()*.72))),this.emit({type:"rose-selected",roseId:t,worldPosition:[i.x,i.y,i.z]})}zoomOutFully(){this.state==="BOUQUET_EXPLORE"&&this.emit({type:"zoomed-out-fully"})}setupInput(e){const t=this.renderer.domElement;t.style.touchAction="none",t.addEventListener("pointerdown",a=>{var o;this.state!=="BOUQUET_EXPLORE"&&this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE"||a.pointerType!=="touch"&&(this.isDragging=!0,this.pointerMoved=!1,this.pointerDownX=a.clientX,this.pointerDownY=a.clientY,this.lastPointerX=a.clientX,this.lastPointerY=a.clientY,(o=t.setPointerCapture)==null||o.call(t,a.pointerId))}),t.addEventListener("pointermove",a=>{if(!this.isDragging||a.pointerType==="touch")return;const o=a.clientX-this.lastPointerX,l=a.clientY-this.lastPointerY;Math.hypot(a.clientX-this.pointerDownX,a.clientY-this.pointerDownY)>5&&(this.pointerMoved=!0),this.lastPointerX=a.clientX,this.lastPointerY=a.clientY,this.cameraController.onDrag(o,l)}),t.addEventListener("pointerup",a=>{var o;!this.isDragging||a.pointerType==="touch"||(this.isDragging=!1,(o=t.releasePointerCapture)==null||o.call(t,a.pointerId),!this.pointerMoved&&(this.state==="BOUQUET_EXPLORE"||this.state==="HEART_REVEAL"||this.state==="FINAL_MESSAGE")&&this.selectRoseAtScreenPoint(a.clientX,a.clientY,e.clientWidth,e.clientHeight))}),t.addEventListener("pointercancel",()=>{this.isDragging=!1}),t.addEventListener("dblclick",()=>{var a;(this.state==="HEART_REVEAL"||this.state==="FINAL_MESSAGE")&&(this.cameraController.resetOrbit(34,new I(0,4.5,0)),(a=this.roseField)==null||a.clearHighlight())}),t.addEventListener("wheel",a=>{this.state!=="BOUQUET_EXPLORE"&&this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE"||(a.preventDefault(),this.cameraController.onZoom(a.deltaY*.5))},{passive:!1});let i=0,r=0,s=!1;t.addEventListener("touchstart",a=>{if(!(this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE")){if(a.touches.length===1)i=a.touches[0].clientX,r=a.touches[0].clientY,s=!1;else if(a.touches.length===2){const o=a.touches[0].clientX-a.touches[1].clientX,l=a.touches[0].clientY-a.touches[1].clientY;this.lastPinchDist=Math.hypot(o,l)}}},{passive:!1}),t.addEventListener("touchmove",a=>{if(!(this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE")){if(a.touches.length===1){const o=a.touches[0],l=o.clientX-i,c=o.clientY-r;Math.hypot(l,c)>6&&(s=!0),this.cameraController.isOrbitEnabled()&&(this.cameraController.onDrag(l*.35,c*.35),i=o.clientX,r=o.clientY)}else if(a.touches.length===2){a.preventDefault();const o=a.touches[0].clientX-a.touches[1].clientX,l=a.touches[0].clientY-a.touches[1].clientY,c=Math.hypot(o,l),u=this.lastPinchDist-c;this.lastPinchDist=c,this.cameraController.onZoom(u*.8),s=!0}}},{passive:!1}),t.addEventListener("touchend",a=>{if(this.state!=="HEART_REVEAL"&&this.state!=="FINAL_MESSAGE"||a.changedTouches.length!==1||s)return;const o=a.changedTouches[0];this.selectRoseAtScreenPoint(o.clientX,o.clientY,e.clientWidth,e.clientHeight)},{passive:!1})}onEvent(e){this.eventHandler=e}emit(e){this.eventHandler&&this.eventHandler(e)}resetExperience(){var e;this.heartMorphTimer!==null&&(window.clearTimeout(this.heartMorphTimer),this.heartMorphTimer=null),this.heartInteractionTimer!==null&&(window.clearTimeout(this.heartInteractionTimer),this.heartInteractionTimer=null),this.heartInteractionReady=!1,this.state="LETTER",this.gateApproachProgress=0,this.gateOpeningProgress=0,this.bouquetRevealProgress=0,this.heartFormedEmitted=!1,this.lastZoomLevel=-1,(e=this.roseField)==null||e.clearHighlight(),this.roseField&&(this.roseField.setMorphTarget(0),this.roseField.mesh.visible=!1),this.cameraController.setPosition(new I(0,5,30),new I(0,6,-20),1.5),this.cameraController.setSway(.3),this.gate.group.visible=!0,this.gate.setOpenAmount(0),this.lighting.setMood("garden")}onResize(e){const t=e.clientWidth,i=e.clientHeight;this.renderer.setSize(t,i),this.cameraController.setAspect(t/i)}dispose(){var e,t;(e=this.resizeObserver)==null||e.disconnect(),this.heartMorphTimer!==null&&(window.clearTimeout(this.heartMorphTimer),this.heartMorphTimer=null),this.heartInteractionTimer!==null&&(window.clearTimeout(this.heartInteractionTimer),this.heartInteractionTimer=null),this.renderer.domElement.remove(),(t=this.roseField)==null||t.dispose(),this.particles.dispose(),this.gate.dispose(),this.lighting.dispose(),this.renderer.dispose()}static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}}function g3(){const n=/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent),e=/iPad|Tablet|PlayBook|Silk/i.test(navigator.userAgent)||navigator.userAgent.includes("Android")&&navigator.userAgent.includes("Mobile")===!1,t=navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4,i=navigator.deviceMemory&&navigator.deviceMemory<=2;return n&&!e?i||t&&navigator.hardwareConcurrency<=2?"LOW":"MEDIUM":e?i?"LOW":"MEDIUM":t&&i?"MEDIUM":"HIGH"}function _3(){const[n,e]=oe.useState("LOADING"),[t,i]=oe.useState(!0),[r,s]=oe.useState("approach"),[a,o]=oe.useState("reveal"),[l,c]=oe.useState("100,001 roses 🌹"),[u,f]=oe.useState(null),[d,p]=oe.useState("heart"),[_,g]=oe.useState(!1),m=oe.useRef(null),h=oe.useRef(null),v=oe.useRef("LOADING");oe.useEffect(()=>{v.current=n},[n]),oe.useEffect(()=>{i(w_.isWebGLAvailable())},[]),oe.useEffect(()=>{if(!t||!m.current)return;const ve=g3(),W=new w_(m.current,ve);return h.current=W,W.onEvent(J=>{switch(J.type){case"gates-reached":{(v.current==="GATE_APPROACH"||v.current==="GARDEN")&&(e("GATE_QUESTION"),W.setState("GATE_QUESTION"),s("question"));break}case"gates-opened":break;case"bouquet-revealed":break;case"rose-selected":{f({id:J.roseId,isRandom:!1});break}case"heart-formed":{if(v.current!=="HEART_REVEAL")break;p("final"),e("FINAL_MESSAGE"),W.setState("FINAL_MESSAGE");break}case"zoomed-out-fully":{v.current==="BOUQUET_EXPLORE"&&B();break}case"explore-ready":{L();break}}}),()=>{W.dispose(),h.current=null}},[t]);const x=oe.useCallback(()=>{var ve;e("LETTER"),(ve=h.current)==null||ve.setState("LETTER")},[]),S=oe.useCallback(()=>{var ve;g(!1),s("approach"),e("GARDEN"),(ve=h.current)==null||ve.setState("GARDEN")},[]),b=oe.useCallback(()=>{},[]),R=oe.useCallback(()=>{g(!1)},[]),E=oe.useCallback(()=>{e("GATE_OPENING")},[]),C=oe.useCallback(()=>{s("scared")},[]),D=oe.useCallback(()=>{E()},[E]),y=oe.useCallback(()=>{var ve;s("approach"),o("reveal"),f(null),e("BOUQUET_REVEAL"),(ve=h.current)==null||ve.setState("BOUQUET_REVEAL")},[]),w=oe.useCallback(()=>{var J;const ve=v.current;if(ve==="FINAL_MESSAGE"||ve==="HEART_REVEAL"){(J=h.current)==null||J.pickRandomRose();return}if(ve!=="BOUQUET_EXPLORE")return;const W=Math.floor(Math.random()*100001)+1;f({id:W,isRandom:!0})},[]),k=oe.useCallback(ve=>{var J;if(v.current!=="FINAL_MESSAGE"&&v.current!=="HEART_REVEAL")return;const W=Math.max(1,Math.min(100001,ve));(J=h.current)==null||J.focusRose(W)},[]),z=oe.useCallback(()=>{u&&k(u.id<=1?100001:u.id-1)},[u,k]),H=oe.useCallback(()=>{u&&k(u.id>=100001?1:u.id+1)},[u,k]),X=oe.useCallback(()=>{B()},[]),B=oe.useCallback(()=>{var ve;v.current==="BOUQUET_EXPLORE"&&(f(null),p("heart"),e("HEART_REVEAL"),o("explore"),(ve=h.current)==null||ve.setState("HEART_REVEAL"))},[]),q=oe.useCallback(()=>{var ve;f(null),(ve=h.current)!=null&&ve.roseField&&h.current.roseField.clearHighlight()},[]),L=oe.useCallback(()=>{const ve=h.current;if(!ve)return;const W=ve.cameraController.getRadius();W>60?c("100,001 roses 🌹"):W>25?c("Go on... explore. 👀"):c("Find one. 🌹")},[]),$=oe.useCallback(()=>{window.location.reload()},[]);if(!t)return M.jsx(Dw,{});const Se=n==="LETTER"||(n==="GARDEN"||n==="GATE_APPROACH"||n==="GATE_QUESTION"||n==="GATE_OPENING")||(n==="BOUQUET_REVEAL"||n==="BOUQUET_EXPLORE");return M.jsxs(M.Fragment,{children:[M.jsx("div",{ref:m,"aria-hidden":Se,style:{position:"fixed",inset:0,zIndex:Se?-1:1,visibility:Se?"hidden":"visible",overflow:"hidden",pointerEvents:n==="HEART_REVEAL"||n==="FINAL_MESSAGE"?"auto":"none"}}),n==="LOADING"&&M.jsx(jM,{onComplete:x}),n==="LETTER"&&M.jsx(YM,{onReveal:S}),(n==="GARDEN"||n==="GATE_APPROACH"||n==="GATE_QUESTION"||n==="GATE_OPENING")&&M.jsx(KM,{phase:n==="GATE_QUESTION"?r==="scared"?"scared":"question":n==="GATE_OPENING"?"opening":"approach",onApproachComplete:()=>{e("GATE_QUESTION"),s("question")},onYes:E,onScared:C,onScaredConfirm:D,onOpened:y}),(n==="BOUQUET_REVEAL"||n==="BOUQUET_EXPLORE")&&M.jsx(eE,{phase:a,onPickRandom:w,onZoomOutHeart:X,onRevealComplete:()=>{o("explore"),e("BOUQUET_EXPLORE")}}),u&&(n==="BOUQUET_EXPLORE"||n==="HEART_REVEAL"||n==="FINAL_MESSAGE")&&M.jsx(cE,{roseId:u.id,isRandom:u.isRandom,onClose:q,onPrevious:n==="FINAL_MESSAGE"?z:void 0,onNext:n==="FINAL_MESSAGE"?H:void 0,onPickAnother:n==="FINAL_MESSAGE"?w:void 0}),(n==="HEART_REVEAL"||n==="FINAL_MESSAGE")&&M.jsx(uE,{phase:d,onReset:$,onPickRandom:w}),M.jsx(fE,{visible:n!=="LOADING"}),M.jsx(Lw,{active:_,onMid:b,onComplete:R})]})}ud.createRoot(document.getElementById("root")).render(M.jsx(N1.StrictMode,{children:M.jsx(_3,{})}));
