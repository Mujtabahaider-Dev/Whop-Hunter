"use strict";(()=>{var $p=Object.create;var ns=Object.defineProperty;var Hp=Object.getOwnPropertyDescriptor;var jp=Object.getOwnPropertyNames;var Bp=Object.getPrototypeOf,Wp=Object.prototype.hasOwnProperty;var ut=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Qp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of jp(t))!Wp.call(e,l)&&l!==n&&ns(e,l,{get:()=>t[l],enumerable:!(r=Hp(t,l))||r.enumerable});return e};var z=(e,t,n)=>(n=e!=null?$p(Bp(e)):{},Qp(t||!e||!e.__esModule?ns(n,"default",{value:e,enumerable:!0}):n,e));var ms=ut(T=>{"use strict";var Wn=Symbol.for("react.element"),Yp=Symbol.for("react.portal"),Gp=Symbol.for("react.fragment"),Kp=Symbol.for("react.strict_mode"),Xp=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),Jp=Symbol.for("react.context"),qp=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.memo"),nf=Symbol.for("react.lazy"),rs=Symbol.iterator;function rf(e){return e===null||typeof e!="object"?null:(e=rs&&e[rs]||e["@@iterator"],typeof e=="function"?e:null)}var is={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},us=Object.assign,ss={};function pn(e,t,n){this.props=e,this.context=t,this.refs=ss,this.updater=n||is}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function as(){}as.prototype=pn.prototype;function ko(e,t,n){this.props=e,this.context=t,this.refs=ss,this.updater=n||is}var So=ko.prototype=new as;So.constructor=ko;us(So,pn.prototype);So.isPureReactComponent=!0;var ls=Array.isArray,cs=Object.prototype.hasOwnProperty,Eo={current:null},ds={key:!0,ref:!0,__self:!0,__source:!0};function ps(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)cs.call(t,r)&&!ds.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Wn,type:e,key:o,ref:i,props:l,_owner:Eo.current}}function lf(e,t){return{$$typeof:Wn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _o(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wn}function of(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var os=/\/+/g;function xo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?of(""+e.key):t.toString(36)}function Hr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Wn:case Yp:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+xo(i,0):r,ls(l)?(n="",e!=null&&(n=e.replace(os,"$&/")+"/"),Hr(l,t,n,"",function(c){return c})):l!=null&&(_o(l)&&(l=lf(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(os,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ls(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+xo(o,u);i+=Hr(o,t,n,s,l)}else if(s=rf(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+xo(o,u++),i+=Hr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $r(e,t,n){if(e==null)return e;var r=[],l=0;return Hr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function uf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},jr={transition:null},sf={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:jr,ReactCurrentOwner:Eo};function fs(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:$r,forEach:function(e,t,n){$r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $r(e,function(){t++}),t},toArray:function(e){return $r(e,function(t){return t})||[]},only:function(e){if(!_o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=pn;T.Fragment=Gp;T.Profiler=Xp;T.PureComponent=ko;T.StrictMode=Kp;T.Suspense=ef;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sf;T.act=fs;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=us({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Eo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)cs.call(t,s)&&!ds.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Wn,type:e.type,key:l,ref:o,props:r,_owner:i}};T.createContext=function(e){return e={$$typeof:Jp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zp,_context:e},e.Consumer=e};T.createElement=ps;T.createFactory=function(e){var t=ps.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:qp,render:e}};T.isValidElement=_o;T.lazy=function(e){return{$$typeof:nf,_payload:{_status:-1,_result:e},_init:uf}};T.memo=function(e,t){return{$$typeof:tf,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=jr.transition;jr.transition={};try{e()}finally{jr.transition=t}};T.unstable_act=fs;T.useCallback=function(e,t){return pe.current.useCallback(e,t)};T.useContext=function(e){return pe.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};T.useEffect=function(e,t){return pe.current.useEffect(e,t)};T.useId=function(){return pe.current.useId()};T.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return pe.current.useMemo(e,t)};T.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};T.useRef=function(e){return pe.current.useRef(e)};T.useState=function(e){return pe.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return pe.current.useTransition()};T.version="18.3.1"});var st=ut((bh,hs)=>{"use strict";hs.exports=ms()});var Cs=ut(D=>{"use strict";function Po(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,l=e[r];if(0<Br(l,t))e[r]=t,e[n]=l,n=r;else break e}}function De(e){return e.length===0?null:e[0]}function Qr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,l=e.length,o=l>>>1;r<o;){var i=2*(r+1)-1,u=e[i],s=i+1,c=e[s];if(0>Br(u,n))s<l&&0>Br(c,u)?(e[r]=c,e[s]=n,r=s):(e[r]=u,e[i]=n,r=i);else if(s<l&&0>Br(c,n))e[r]=c,e[s]=n,r=s;else break e}}return t}function Br(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(gs=performance,D.unstable_now=function(){return gs.now()}):(Co=Date,vs=Co.now(),D.unstable_now=function(){return Co.now()-vs});var gs,Co,vs,Ze=[],kt=[],af=1,Me=null,ue=3,Yr=!1,Wt=!1,Yn=!1,xs=typeof setTimeout=="function"?setTimeout:null,ks=typeof clearTimeout=="function"?clearTimeout:null,ys=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function To(e){for(var t=De(kt);t!==null;){if(t.callback===null)Qr(kt);else if(t.startTime<=e)Qr(kt),t.sortIndex=t.expirationTime,Po(Ze,t);else break;t=De(kt)}}function Mo(e){if(Yn=!1,To(e),!Wt)if(De(Ze)!==null)Wt=!0,zo(Lo);else{var t=De(kt);t!==null&&Oo(Mo,t.startTime-e)}}function Lo(e,t){Wt=!1,Yn&&(Yn=!1,ks(Gn),Gn=-1),Yr=!0;var n=ue;try{for(To(t),Me=De(Ze);Me!==null&&(!(Me.expirationTime>t)||e&&!_s());){var r=Me.callback;if(typeof r=="function"){Me.callback=null,ue=Me.priorityLevel;var l=r(Me.expirationTime<=t);t=D.unstable_now(),typeof l=="function"?Me.callback=l:Me===De(Ze)&&Qr(Ze),To(t)}else Qr(Ze);Me=De(Ze)}if(Me!==null)var o=!0;else{var i=De(kt);i!==null&&Oo(Mo,i.startTime-t),o=!1}return o}finally{Me=null,ue=n,Yr=!1}}var Gr=!1,Wr=null,Gn=-1,Ss=5,Es=-1;function _s(){return!(D.unstable_now()-Es<Ss)}function No(){if(Wr!==null){var e=D.unstable_now();Es=e;var t=!0;try{t=Wr(!0,e)}finally{t?Qn():(Gr=!1,Wr=null)}}else Gr=!1}var Qn;typeof ys=="function"?Qn=function(){ys(No)}:typeof MessageChannel<"u"?(Ro=new MessageChannel,ws=Ro.port2,Ro.port1.onmessage=No,Qn=function(){ws.postMessage(null)}):Qn=function(){xs(No,0)};var Ro,ws;function zo(e){Wr=e,Gr||(Gr=!0,Qn())}function Oo(e,t){Gn=xs(function(){e(D.unstable_now())},t)}D.unstable_IdlePriority=5;D.unstable_ImmediatePriority=1;D.unstable_LowPriority=4;D.unstable_NormalPriority=3;D.unstable_Profiling=null;D.unstable_UserBlockingPriority=2;D.unstable_cancelCallback=function(e){e.callback=null};D.unstable_continueExecution=function(){Wt||Yr||(Wt=!0,zo(Lo))};D.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ss=0<e?Math.floor(1e3/e):5};D.unstable_getCurrentPriorityLevel=function(){return ue};D.unstable_getFirstCallbackNode=function(){return De(Ze)};D.unstable_next=function(e){switch(ue){case 1:case 2:case 3:var t=3;break;default:t=ue}var n=ue;ue=t;try{return e()}finally{ue=n}};D.unstable_pauseExecution=function(){};D.unstable_requestPaint=function(){};D.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=ue;ue=e;try{return t()}finally{ue=n}};D.unstable_scheduleCallback=function(e,t,n){var r=D.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return l=n+l,e={id:af++,callback:t,priorityLevel:e,startTime:n,expirationTime:l,sortIndex:-1},n>r?(e.sortIndex=n,Po(kt,e),De(Ze)===null&&e===De(kt)&&(Yn?(ks(Gn),Gn=-1):Yn=!0,Oo(Mo,n-r))):(e.sortIndex=l,Po(Ze,e),Wt||Yr||(Wt=!0,zo(Lo))),e};D.unstable_shouldYield=_s;D.unstable_wrapCallback=function(e){var t=ue;return function(){var n=ue;ue=t;try{return e.apply(this,arguments)}finally{ue=n}}}});var Rs=ut((Uh,Ns)=>{"use strict";Ns.exports=Cs()});var Ld=ut(Te=>{"use strict";var cf=st(),Re=Rs();function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ia=new Set,gr={};function ln(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(gr[e]=t,e=0;e<t.length;e++)Ia.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=Object.prototype.hasOwnProperty,df=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ps={},Ts={};function pf(e){return ni.call(Ts,e)?!0:ni.call(Ps,e)?!1:df.test(e)?Ts[e]=!0:(Ps[e]=!0,!1)}function ff(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mf(e,t,n,r){if(t===null||typeof t>"u"||ff(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gi=/[\-:]([a-z])/g;function Ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gi,Ki);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gi,Ki);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gi,Ki);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xi(e,t,n,r){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mf(t,n,l,r)&&(n=null),r||l===null?pf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kr=Symbol.for("react.element"),hn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),Aa=Symbol.for("react.provider"),Fa=Symbol.for("react.context"),Ji=Symbol.for("react.forward_ref"),li=Symbol.for("react.suspense"),oi=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),Et=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var ba=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ms=Symbol.iterator;function Kn(e){return e===null||typeof e!="object"?null:(e=Ms&&e[Ms]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Io;function rr(e){if(Io===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Io=t&&t[1]||""}return`
`+Io+e}var Ao=!1;function Fo(e,t){if(!e||Ao)return"";Ao=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{Ao=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?rr(e):""}function hf(e){switch(e.tag){case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return e=Fo(e.type,!1),e;case 11:return e=Fo(e.type.render,!1),e;case 1:return e=Fo(e.type,!0),e;default:return""}}function ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gn:return"Fragment";case hn:return"Portal";case ri:return"Profiler";case Zi:return"StrictMode";case li:return"Suspense";case oi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fa:return(e.displayName||"Context")+".Consumer";case Aa:return(e._context.displayName||"Context")+".Provider";case Ji:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return t=e.displayName||null,t!==null?t:ii(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return ii(e(t))}catch{}}return null}function gf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ii(t);case 8:return t===Zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Da(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vf(e){var t=Da(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){e._valueTracker||(e._valueTracker=vf(e))}function Ua(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Da(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ui(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ls(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Va(e,t){t=t.checked,t!=null&&Xi(e,"checked",t,!1)}function si(e,t){Va(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&ai(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ai(e,t,n){(t!=="number"||_l(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lr=Array.isArray;function Rn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ci(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Os(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(lr(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function $a(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Is(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ha(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ha(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,ja=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yf=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){yf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Ba(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function Wa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ba(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var wf=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pi(e,t){if(t){if(wf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function fi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,Pn=null,Tn=null;function As(e){if(e=Ar(e)){if(typeof hi!="function")throw Error(v(280));var t=e.stateNode;t&&(t=Jl(t),hi(e.stateNode,e.type,t))}}function Qa(e){Pn?Tn?Tn.push(e):Tn=[e]:Pn=e}function Ya(){if(Pn){var e=Pn,t=Tn;if(Tn=Pn=null,As(e),t)for(e=0;e<t.length;e++)As(t[e])}}function Ga(e,t){return e(t)}function Ka(){}var bo=!1;function Xa(e,t,n){if(bo)return e(t,n);bo=!0;try{return Ga(e,t,n)}finally{bo=!1,(Pn!==null||Tn!==null)&&(Ka(),Ya())}}function yr(e,t){var n=e.stateNode;if(n===null)return null;var r=Jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var gi=!1;if(mt)try{fn={},Object.defineProperty(fn,"passive",{get:function(){gi=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{gi=!1}var fn;function xf(e,t,n,r,l,o,i,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var sr=!1,Cl=null,Nl=!1,vi=null,kf={onError:function(e){sr=!0,Cl=e}};function Sf(e,t,n,r,l,o,i,u,s){sr=!1,Cl=null,xf.apply(kf,arguments)}function Ef(e,t,n,r,l,o,i,u,s){if(Sf.apply(this,arguments),sr){if(sr){var c=Cl;sr=!1,Cl=null}else throw Error(v(198));Nl||(Nl=!0,vi=c)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Za(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fs(e){if(on(e)!==e)throw Error(v(188))}function _f(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Fs(l),e;if(o===r)return Fs(l),t;o=o.sibling}throw Error(v(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Ja(e){return e=_f(e),e!==null?qa(e):null}function qa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qa(e);if(t!==null)return t;e=e.sibling}return null}var ec=Re.unstable_scheduleCallback,bs=Re.unstable_cancelCallback,Cf=Re.unstable_shouldYield,Nf=Re.unstable_requestPaint,K=Re.unstable_now,Rf=Re.unstable_getCurrentPriorityLevel,tu=Re.unstable_ImmediatePriority,tc=Re.unstable_UserBlockingPriority,Rl=Re.unstable_NormalPriority,Pf=Re.unstable_LowPriority,nc=Re.unstable_IdlePriority,Gl=null,tt=null;function Tf(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Gl,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:zf,Mf=Math.log,Lf=Math.LN2;function zf(e){return e>>>=0,e===0?32:31-(Mf(e)/Lf|0)|0}var Jr=64,qr=4194304;function or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~l;u!==0?r=or(u):(o&=i,o!==0&&(r=or(o)))}else i=n&~l,i!==0?r=or(i):o!==0&&(r=or(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-je(t),l=1<<n,r|=e[n],t&=~l;return r}function Of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function If(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-je(o),u=1<<i,s=l[i];s===-1?(!(u&n)||u&r)&&(l[i]=Of(u,t)):s<=t&&(e.expiredLanes|=u),o&=~u}}function yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rc(){var e=Jr;return Jr<<=1,!(Jr&4194240)&&(Jr=64),e}function Do(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-je(t),e[t]=n}function Af(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-je(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-je(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var A=0;function lc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var oc,ru,ic,uc,sc,wi=!1,el=[],Tt=null,Mt=null,Lt=null,wr=new Map,xr=new Map,Ct=[],Ff="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ds(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(t.pointerId)}}function Xn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Ar(t),t!==null&&ru(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function bf(e,t,n,r,l){switch(t){case"focusin":return Tt=Xn(Tt,e,t,n,r,l),!0;case"dragenter":return Mt=Xn(Mt,e,t,n,r,l),!0;case"mouseover":return Lt=Xn(Lt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return wr.set(o,Xn(wr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,xr.set(o,Xn(xr.get(o)||null,e,t,n,r,l)),!0}return!1}function ac(e){var t=Gt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=Za(n),t!==null){e.blockedOn=t,sc(e.priority,function(){ic(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ml(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mi=r,n.target.dispatchEvent(r),mi=null}else return t=Ar(n),t!==null&&ru(t),e.blockedOn=n,!1;t.shift()}return!0}function Us(e,t,n){ml(e)&&n.delete(t)}function Df(){wi=!1,Tt!==null&&ml(Tt)&&(Tt=null),Mt!==null&&ml(Mt)&&(Mt=null),Lt!==null&&ml(Lt)&&(Lt=null),wr.forEach(Us),xr.forEach(Us)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,wi||(wi=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Df)))}function kr(e){function t(l){return Zn(l,e)}if(0<el.length){Zn(el[0],e);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&Zn(Tt,e),Mt!==null&&Zn(Mt,e),Lt!==null&&Zn(Lt,e),wr.forEach(t),xr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)ac(n),n.blockedOn===null&&Ct.shift()}var Mn=yt.ReactCurrentBatchConfig,Tl=!0;function Uf(e,t,n,r){var l=A,o=Mn.transition;Mn.transition=null;try{A=1,lu(e,t,n,r)}finally{A=l,Mn.transition=o}}function Vf(e,t,n,r){var l=A,o=Mn.transition;Mn.transition=null;try{A=4,lu(e,t,n,r)}finally{A=l,Mn.transition=o}}function lu(e,t,n,r){if(Tl){var l=xi(e,t,n,r);if(l===null)Wo(e,t,r,Ml,n),Ds(e,r);else if(bf(l,e,t,n,r))r.stopPropagation();else if(Ds(e,r),t&4&&-1<Ff.indexOf(e)){for(;l!==null;){var o=Ar(l);if(o!==null&&oc(o),o=xi(e,t,n,r),o===null&&Wo(e,t,r,Ml,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Wo(e,t,r,null,n)}}var Ml=null;function xi(e,t,n,r){if(Ml=null,e=eu(r),e=Gt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Za(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ml=e,null}function cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rf()){case tu:return 1;case tc:return 4;case Rl:case Pf:return 16;case nc:return 536870912;default:return 16}default:return 16}}var Rt=null,ou=null,hl=null;function dc(){if(hl)return hl;var e,t=ou,n=t.length,r,l="value"in Rt?Rt.value:Rt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return hl=l.slice(e,1<r?1-r:void 0)}function gl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Vs(){return!1}function Pe(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?tl:Vs,this.isPropagationStopped=Vs,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Pe(Vn),Ir=Q({},Vn,{view:0,detail:0}),$f=Pe(Ir),Uo,Vo,Jn,Kl=Q({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(Uo=e.screenX-Jn.screenX,Vo=e.screenY-Jn.screenY):Vo=Uo=0,Jn=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),$s=Pe(Kl),Hf=Q({},Kl,{dataTransfer:0}),jf=Pe(Hf),Bf=Q({},Ir,{relatedTarget:0}),$o=Pe(Bf),Wf=Q({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Qf=Pe(Wf),Yf=Q({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gf=Pe(Yf),Kf=Q({},Vn,{data:0}),Hs=Pe(Kf),Xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jf[e])?!!t[e]:!1}function uu(){return qf}var em=Q({},Ir,{key:function(e){if(e.key){var t=Xf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tm=Pe(em),nm=Q({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),js=Pe(nm),rm=Q({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),lm=Pe(rm),om=Q({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),im=Pe(om),um=Q({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sm=Pe(um),am=[9,13,27,32],su=mt&&"CompositionEvent"in window,ar=null;mt&&"documentMode"in document&&(ar=document.documentMode);var cm=mt&&"TextEvent"in window&&!ar,pc=mt&&(!su||ar&&8<ar&&11>=ar),Bs=" ",Ws=!1;function fc(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function dm(e,t){switch(e){case"compositionend":return mc(t);case"keypress":return t.which!==32?null:(Ws=!0,Bs);case"textInput":return e=t.data,e===Bs&&Ws?null:e;default:return null}}function pm(e,t){if(vn)return e==="compositionend"||!su&&fc(e,t)?(e=dc(),hl=ou=Rt=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pc&&t.locale!=="ko"?null:t.data;default:return null}}var fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fm[e.type]:t==="textarea"}function hc(e,t,n,r){Qa(r),t=Ll(t,"onChange"),0<t.length&&(n=new iu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,Sr=null;function mm(e){Nc(e,0)}function Xl(e){var t=xn(e);if(Ua(t))return e}function hm(e,t){if(e==="change")return t}var gc=!1;mt&&(mt?(rl="oninput"in document,rl||(Ho=document.createElement("div"),Ho.setAttribute("oninput","return;"),rl=typeof Ho.oninput=="function"),nl=rl):nl=!1,gc=nl&&(!document.documentMode||9<document.documentMode));var nl,rl,Ho;function Ys(){cr&&(cr.detachEvent("onpropertychange",vc),Sr=cr=null)}function vc(e){if(e.propertyName==="value"&&Xl(Sr)){var t=[];hc(t,Sr,e,eu(e)),Xa(mm,t)}}function gm(e,t,n){e==="focusin"?(Ys(),cr=t,Sr=n,cr.attachEvent("onpropertychange",vc)):e==="focusout"&&Ys()}function vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xl(Sr)}function ym(e,t){if(e==="click")return Xl(t)}function wm(e,t){if(e==="input"||e==="change")return Xl(t)}function xm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:xm;function Er(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ni.call(t,l)||!We(e[l],t[l]))return!1}return!0}function Gs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ks(e,t){var n=Gs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gs(n)}}function yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wc(){for(var e=window,t=_l();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_l(e.document)}return t}function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function km(e){var t=wc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yc(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ks(n,o);var i=Ks(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sm=mt&&"documentMode"in document&&11>=document.documentMode,yn=null,ki=null,dr=null,Si=!1;function Xs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Si||yn==null||yn!==_l(r)||(r=yn,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&Er(dr,r)||(dr=r,r=Ll(ki,"onSelect"),0<r.length&&(t=new iu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},jo={},xc={};mt&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function Zl(e){if(jo[e])return jo[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xc)return jo[e]=t[n];return e}var kc=Zl("animationend"),Sc=Zl("animationiteration"),Ec=Zl("animationstart"),_c=Zl("transitionend"),Cc=new Map,Zs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){Cc.set(e,t),ln(t,[e])}for(ol=0;ol<Zs.length;ol++)il=Zs[ol],Js=il.toLowerCase(),qs=il[0].toUpperCase()+il.slice(1),Ut(Js,"on"+qs);var il,Js,qs,ol;Ut(kc,"onAnimationEnd");Ut(Sc,"onAnimationIteration");Ut(Ec,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(_c,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Em=new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));function ea(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ef(r,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==o&&l.isPropagationStopped())break e;ea(l,u,c),o=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,c=u.currentTarget,u=u.listener,s!==o&&l.isPropagationStopped())break e;ea(l,u,c),o=s}}}if(Nl)throw e=vi,Nl=!1,vi=null,e}function V(e,t){var n=t[Ri];n===void 0&&(n=t[Ri]=new Set);var r=e+"__bubble";n.has(r)||(Rc(t,e,2,!1),n.add(r))}function Bo(e,t,n){var r=0;t&&(r|=4),Rc(n,e,r,t)}var ul="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[ul]){e[ul]=!0,Ia.forEach(function(n){n!=="selectionchange"&&(Em.has(n)||Bo(n,!1,e),Bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ul]||(t[ul]=!0,Bo("selectionchange",!1,t))}}function Rc(e,t,n,r){switch(cc(t)){case 1:var l=Uf;break;case 4:l=Vf;break;default:l=lu}n=l.bind(null,t,n,e),l=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Wo(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;u!==null;){if(i=Gt(u),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}u=u.parentNode}}r=r.return}Xa(function(){var c=o,m=eu(n),p=[];e:{var h=Cc.get(e);if(h!==void 0){var y=iu,x=e;switch(e){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":y=tm;break;case"focusin":x="focus",y=$o;break;case"focusout":x="blur",y=$o;break;case"beforeblur":case"afterblur":y=$o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=lm;break;case kc:case Sc:case Ec:y=Qf;break;case _c:y=im;break;case"scroll":y=$f;break;case"wheel":y=sm;break;case"copy":case"cut":case"paste":y=Gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=js}var w=(t&4)!==0,b=!w&&e==="scroll",d=w?h!==null?h+"Capture":null:h;w=[];for(var a=c,f;a!==null;){f=a;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=yr(a,d),g!=null&&w.push(Cr(a,g,f)))),b)break;a=a.return}0<w.length&&(h=new y(h,x,null,n,m),p.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==mi&&(x=n.relatedTarget||n.fromElement)&&(Gt(x)||x[ht]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?Gt(x):null,x!==null&&(b=on(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(w=$s,g="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(w=js,g="onPointerLeave",d="onPointerEnter",a="pointer"),b=y==null?h:xn(y),f=x==null?h:xn(x),h=new w(g,a+"leave",y,n,m),h.target=b,h.relatedTarget=f,g=null,Gt(m)===c&&(w=new w(d,a+"enter",x,n,m),w.target=f,w.relatedTarget=b,g=w),b=g,y&&x)t:{for(w=y,d=x,a=0,f=w;f;f=mn(f))a++;for(f=0,g=d;g;g=mn(g))f++;for(;0<a-f;)w=mn(w),a--;for(;0<f-a;)d=mn(d),f--;for(;a--;){if(w===d||d!==null&&w===d.alternate)break t;w=mn(w),d=mn(d)}w=null}else w=null;y!==null&&ta(p,h,y,w,!1),x!==null&&b!==null&&ta(p,b,x,w,!0)}}e:{if(h=c?xn(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var k=hm;else if(Qs(h))if(gc)k=wm;else{k=vm;var _=gm}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=ym);if(k&&(k=k(e,c))){hc(p,k,n,m);break e}_&&_(e,h,c),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&ai(h,"number",h.value)}switch(_=c?xn(c):window,e){case"focusin":(Qs(_)||_.contentEditable==="true")&&(yn=_,ki=c,dr=null);break;case"focusout":dr=ki=yn=null;break;case"mousedown":Si=!0;break;case"contextmenu":case"mouseup":case"dragend":Si=!1,Xs(p,n,m);break;case"selectionchange":if(Sm)break;case"keydown":case"keyup":Xs(p,n,m)}var E;if(su)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else vn?fc(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(pc&&n.locale!=="ko"&&(vn||C!=="onCompositionStart"?C==="onCompositionEnd"&&vn&&(E=dc()):(Rt=m,ou="value"in Rt?Rt.value:Rt.textContent,vn=!0)),_=Ll(c,C),0<_.length&&(C=new Hs(C,e,null,n,m),p.push({event:C,listeners:_}),E?C.data=E:(E=mc(n),E!==null&&(C.data=E)))),(E=cm?dm(e,n):pm(e,n))&&(c=Ll(c,"onBeforeInput"),0<c.length&&(m=new Hs("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=E))}Nc(p,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ll(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=yr(e,n),o!=null&&r.unshift(Cr(e,o,l)),o=yr(e,t),o!=null&&r.push(Cr(e,o,l))),e=e.return}return r}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ta(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=yr(n,o),s!=null&&i.unshift(Cr(n,s,u))):l||(s=yr(n,o),s!=null&&i.push(Cr(n,s,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var _m=/\r\n?/g,Cm=/\u0000|\uFFFD/g;function na(e){return(typeof e=="string"?e:""+e).replace(_m,`
`).replace(Cm,"")}function sl(e,t,n){if(t=na(t),na(e)!==t&&n)throw Error(v(425))}function zl(){}var Ei=null,_i=null;function Ci(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ni=typeof setTimeout=="function"?setTimeout:void 0,Nm=typeof clearTimeout=="function"?clearTimeout:void 0,ra=typeof Promise=="function"?Promise:void 0,Rm=typeof queueMicrotask=="function"?queueMicrotask:typeof ra<"u"?function(e){return ra.resolve(null).then(e).catch(Pm)}:Ni;function Pm(e){setTimeout(function(){throw e})}function Qo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);kr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function la(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $n=Math.random().toString(36).slice(2),et="__reactFiber$"+$n,Nr="__reactProps$"+$n,ht="__reactContainer$"+$n,Ri="__reactEvents$"+$n,Tm="__reactListeners$"+$n,Mm="__reactHandles$"+$n;function Gt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=la(e);e!==null;){if(n=e[et])return n;e=la(e)}return t}e=n,n=e.parentNode}return null}function Ar(e){return e=e[et]||e[ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function Jl(e){return e[Nr]||null}var Pi=[],kn=-1;function Vt(e){return{current:e}}function $(e){0>kn||(e.current=Pi[kn],Pi[kn]=null,kn--)}function U(e,t){kn++,Pi[kn]=e.current,e.current=t}var Dt={},de=Vt(Dt),we=Vt(!1),qt=Dt;function In(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function xe(e){return e=e.childContextTypes,e!=null}function Ol(){$(we),$(de)}function oa(e,t,n){if(de.current!==Dt)throw Error(v(168));U(de,t),U(we,n)}function Pc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(v(108,gf(e)||"Unknown",l));return Q({},n,r)}function Il(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,qt=de.current,U(de,e),U(we,we.current),!0}function ia(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=Pc(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,$(we),$(de),U(de,e)):$(we),U(we,n)}var ct=null,ql=!1,Yo=!1;function Tc(e){ct===null?ct=[e]:ct.push(e)}function Lm(e){ql=!0,Tc(e)}function $t(){if(!Yo&&ct!==null){Yo=!0;var e=0,t=A;try{var n=ct;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,ql=!1}catch(l){throw ct!==null&&(ct=ct.slice(e+1)),ec(tu,$t),l}finally{A=t,Yo=!1}}return null}var Sn=[],En=0,Al=null,Fl=0,Le=[],ze=0,en=null,dt=1,pt="";function Qt(e,t){Sn[En++]=Fl,Sn[En++]=Al,Al=e,Fl=t}function Mc(e,t,n){Le[ze++]=dt,Le[ze++]=pt,Le[ze++]=en,en=e;var r=dt;e=pt;var l=32-je(r)-1;r&=~(1<<l),n+=1;var o=32-je(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,dt=1<<32-je(t)+l|n<<l|r,pt=o+e}else dt=1<<o|n<<l|r,pt=e}function cu(e){e.return!==null&&(Qt(e,1),Mc(e,1,0))}function du(e){for(;e===Al;)Al=Sn[--En],Sn[En]=null,Fl=Sn[--En],Sn[En]=null;for(;e===en;)en=Le[--ze],Le[ze]=null,pt=Le[--ze],Le[ze]=null,dt=Le[--ze],Le[ze]=null}var Ne=null,Ce=null,H=!1,He=null;function Lc(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ua(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Ce=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Ce=null,!0):!1;default:return!1}}function Ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mi(e){if(H){var t=Ce;if(t){var n=t;if(!ua(e,t)){if(Ti(e))throw Error(v(418));t=zt(n.nextSibling);var r=Ne;t&&ua(e,t)?Lc(r,n):(e.flags=e.flags&-4097|2,H=!1,Ne=e)}}else{if(Ti(e))throw Error(v(418));e.flags=e.flags&-4097|2,H=!1,Ne=e}}}function sa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function al(e){if(e!==Ne)return!1;if(!H)return sa(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ci(e.type,e.memoizedProps)),t&&(t=Ce)){if(Ti(e))throw zc(),Error(v(418));for(;t;)Lc(e,t),t=zt(t.nextSibling)}if(sa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Ne?zt(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=Ce;e;)e=zt(e.nextSibling)}function An(){Ce=Ne=null,H=!1}function pu(e){He===null?He=[e]:He.push(e)}var zm=yt.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var u=l.refs;i===null?delete u[o]:u[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function cl(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function aa(e){var t=e._init;return t(e._payload)}function Oc(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function l(d,a){return d=Ft(d,a),d.index=0,d.sibling=null,d}function o(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,a,f,g){return a===null||a.tag!==6?(a=ei(f,d.mode,g),a.return=d,a):(a=l(a,f),a.return=d,a)}function s(d,a,f,g){var k=f.type;return k===gn?m(d,a,f.props.children,g,f.key):a!==null&&(a.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&aa(k)===a.type)?(g=l(a,f.props),g.ref=qn(d,a,f),g.return=d,g):(g=El(f.type,f.key,f.props,null,d.mode,g),g.ref=qn(d,a,f),g.return=d,g)}function c(d,a,f,g){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=ti(f,d.mode,g),a.return=d,a):(a=l(a,f.children||[]),a.return=d,a)}function m(d,a,f,g,k){return a===null||a.tag!==7?(a=Jt(f,d.mode,g,k),a.return=d,a):(a=l(a,f),a.return=d,a)}function p(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=ei(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case Kr:return f=El(a.type,a.key,a.props,null,d.mode,f),f.ref=qn(d,null,a),f.return=d,f;case hn:return a=ti(a,d.mode,f),a.return=d,a;case Et:var g=a._init;return p(d,g(a._payload),f)}if(lr(a)||Kn(a))return a=Jt(a,d.mode,f,null),a.return=d,a;cl(d,a)}return null}function h(d,a,f,g){var k=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:u(d,a,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Kr:return f.key===k?s(d,a,f,g):null;case hn:return f.key===k?c(d,a,f,g):null;case Et:return k=f._init,h(d,a,k(f._payload),g)}if(lr(f)||Kn(f))return k!==null?null:m(d,a,f,g,null);cl(d,f)}return null}function y(d,a,f,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,u(a,d,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Kr:return d=d.get(g.key===null?f:g.key)||null,s(a,d,g,k);case hn:return d=d.get(g.key===null?f:g.key)||null,c(a,d,g,k);case Et:var _=g._init;return y(d,a,f,_(g._payload),k)}if(lr(g)||Kn(g))return d=d.get(f)||null,m(a,d,g,k,null);cl(a,g)}return null}function x(d,a,f,g){for(var k=null,_=null,E=a,C=a=0,Y=null;E!==null&&C<f.length;C++){E.index>C?(Y=E,E=null):Y=E.sibling;var L=h(d,E,f[C],g);if(L===null){E===null&&(E=Y);break}e&&E&&L.alternate===null&&t(d,E),a=o(L,a,C),_===null?k=L:_.sibling=L,_=L,E=Y}if(C===f.length)return n(d,E),H&&Qt(d,C),k;if(E===null){for(;C<f.length;C++)E=p(d,f[C],g),E!==null&&(a=o(E,a,C),_===null?k=E:_.sibling=E,_=E);return H&&Qt(d,C),k}for(E=r(d,E);C<f.length;C++)Y=y(E,d,C,f[C],g),Y!==null&&(e&&Y.alternate!==null&&E.delete(Y.key===null?C:Y.key),a=o(Y,a,C),_===null?k=Y:_.sibling=Y,_=Y);return e&&E.forEach(function(ge){return t(d,ge)}),H&&Qt(d,C),k}function w(d,a,f,g){var k=Kn(f);if(typeof k!="function")throw Error(v(150));if(f=k.call(f),f==null)throw Error(v(151));for(var _=k=null,E=a,C=a=0,Y=null,L=f.next();E!==null&&!L.done;C++,L=f.next()){E.index>C?(Y=E,E=null):Y=E.sibling;var ge=h(d,E,L.value,g);if(ge===null){E===null&&(E=Y);break}e&&E&&ge.alternate===null&&t(d,E),a=o(ge,a,C),_===null?k=ge:_.sibling=ge,_=ge,E=Y}if(L.done)return n(d,E),H&&Qt(d,C),k;if(E===null){for(;!L.done;C++,L=f.next())L=p(d,L.value,g),L!==null&&(a=o(L,a,C),_===null?k=L:_.sibling=L,_=L);return H&&Qt(d,C),k}for(E=r(d,E);!L.done;C++,L=f.next())L=y(E,d,C,L.value,g),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?C:L.key),a=o(L,a,C),_===null?k=L:_.sibling=L,_=L);return e&&E.forEach(function(Dr){return t(d,Dr)}),H&&Qt(d,C),k}function b(d,a,f,g){if(typeof f=="object"&&f!==null&&f.type===gn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Kr:e:{for(var k=f.key,_=a;_!==null;){if(_.key===k){if(k=f.type,k===gn){if(_.tag===7){n(d,_.sibling),a=l(_,f.props.children),a.return=d,d=a;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&aa(k)===_.type){n(d,_.sibling),a=l(_,f.props),a.ref=qn(d,_,f),a.return=d,d=a;break e}n(d,_);break}else t(d,_);_=_.sibling}f.type===gn?(a=Jt(f.props.children,d.mode,g,f.key),a.return=d,d=a):(g=El(f.type,f.key,f.props,null,d.mode,g),g.ref=qn(d,a,f),g.return=d,d=g)}return i(d);case hn:e:{for(_=f.key;a!==null;){if(a.key===_)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=l(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=ti(f,d.mode,g),a.return=d,d=a}return i(d);case Et:return _=f._init,b(d,a,_(f._payload),g)}if(lr(f))return x(d,a,f,g);if(Kn(f))return w(d,a,f,g);cl(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=l(a,f),a.return=d,d=a):(n(d,a),a=ei(f,d.mode,g),a.return=d,d=a),i(d)):n(d,a)}return b}var Fn=Oc(!0),Ic=Oc(!1),bl=Vt(null),Dl=null,_n=null,fu=null;function mu(){fu=_n=Dl=null}function hu(e){var t=bl.current;$(bl),e._currentValue=t}function Li(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){Dl=e,fu=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(fu!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(Dl===null)throw Error(v(308));_n=e,Dl.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var Kt=null;function gu(e){Kt===null?Kt=[e]:Kt.push(e)}function Ac(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,gu(t)):(n.next=l.next,l.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,gt(e,n)}return l=r.interleaved,l===null?(t.next=t,gu(r)):(t.next=l.next,l.next=t),r.interleaved=t,gt(e,n)}function vl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}function ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ul(e,t,n,r){var l=e.updateQueue;_t=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==i&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=s))}if(o!==null){var p=l.baseState;i=0,m=c=s=null,u=o;do{var h=u.lane,y=u.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,w=u;switch(h=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){p=x.call(y,p,h);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(y,p,h):x,h==null)break e;p=Q({},p,h);break e;case 2:_t=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[u]:h.push(u))}else y={eventTime:y,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=y,s=p):m=m.next=y,i|=h;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;h=u,u=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(s=p),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);nn|=i,e.lanes=i,e.memoizedState=p}}function da(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var Fr={},nt=Vt(Fr),Rr=Vt(Fr),Pr=Vt(Fr);function Xt(e){if(e===Fr)throw Error(v(174));return e}function yu(e,t){switch(U(Pr,t),U(Rr,e),U(nt,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=di(t,e)}$(nt),U(nt,t)}function bn(){$(nt),$(Rr),$(Pr)}function bc(e){Xt(Pr.current);var t=Xt(nt.current),n=di(t,e.type);t!==n&&(U(Rr,e),U(nt,n))}function wu(e){Rr.current===e&&($(nt),$(Rr))}var B=Vt(0);function Vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Go=[];function xu(){for(var e=0;e<Go.length;e++)Go[e]._workInProgressVersionPrimary=null;Go.length=0}var yl=yt.ReactCurrentDispatcher,Ko=yt.ReactCurrentBatchConfig,tn=0,W=null,J=null,te=null,$l=!1,pr=!1,Tr=0,Om=0;function se(){throw Error(v(321))}function ku(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function Su(e,t,n,r,l,o){if(tn=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yl.current=e===null||e.memoizedState===null?bm:Dm,e=n(r,l),pr){o=0;do{if(pr=!1,Tr=0,25<=o)throw Error(v(301));o+=1,te=J=null,t.updateQueue=null,yl.current=Um,e=n(r,l)}while(pr)}if(yl.current=Hl,t=J!==null&&J.next!==null,tn=0,te=J=W=null,$l=!1,t)throw Error(v(300));return e}function Eu(){var e=Tr!==0;return Tr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?W.memoizedState=te=e:te=te.next=e,te}function Fe(){if(J===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=te===null?W.memoizedState:te.next;if(t!==null)te=t,J=e;else{if(e===null)throw Error(v(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},te===null?W.memoizedState=te=e:te=te.next=e}return te}function Mr(e,t){return typeof t=="function"?t(e):t}function Xo(e){var t=Fe(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,s=null,c=o;do{var m=c.lane;if((tn&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=p,i=r):s=s.next=p,W.lanes|=m,nn|=m}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=u,We(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,W.lanes|=o,nn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zo(e){var t=Fe(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);We(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Dc(){}function Uc(e,t){var n=W,r=Fe(),l=t(),o=!We(r.memoizedState,l);if(o&&(r.memoizedState=l,ye=!0),r=r.queue,_u(Hc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Lr(9,$c.bind(null,n,r,l,t),void 0,null),ne===null)throw Error(v(349));tn&30||Vc(n,t,l)}return l}function Vc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $c(e,t,n,r){t.value=n,t.getSnapshot=r,jc(t)&&Bc(e)}function Hc(e,t,n){return n(function(){jc(t)&&Bc(e)})}function jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function Bc(e){var t=gt(e,1);t!==null&&Be(t,e,1,-1)}function pa(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=Fm.bind(null,W,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wc(){return Fe().memoizedState}function wl(e,t,n,r){var l=qe();W.flags|=e,l.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function eo(e,t,n,r){var l=Fe();r=r===void 0?null:r;var o=void 0;if(J!==null){var i=J.memoizedState;if(o=i.destroy,r!==null&&ku(r,i.deps)){l.memoizedState=Lr(t,n,o,r);return}}W.flags|=e,l.memoizedState=Lr(1|t,n,o,r)}function fa(e,t){return wl(8390656,8,e,t)}function _u(e,t){return eo(2048,8,e,t)}function Qc(e,t){return eo(4,2,e,t)}function Yc(e,t){return eo(4,4,e,t)}function Gc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kc(e,t,n){return n=n!=null?n.concat([e]):null,eo(4,4,Gc.bind(null,t,e),n)}function Cu(){}function Xc(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ku(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zc(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ku(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jc(e,t,n){return tn&21?(We(n,t)||(n=rc(),W.lanes|=n,nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Im(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Ko.transition;Ko.transition={};try{e(!1),t()}finally{A=n,Ko.transition=r}}function qc(){return Fe().memoizedState}function Am(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ed(e))td(t,n);else if(n=Ac(e,t,n,r),n!==null){var l=me();Be(n,e,r,l),nd(n,t,r)}}function Fm(e,t,n){var r=At(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ed(e))td(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.hasEagerState=!0,l.eagerState=u,We(u,i)){var s=t.interleaved;s===null?(l.next=l,gu(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Ac(e,t,l,r),n!==null&&(l=me(),Be(n,e,r,l),nd(n,t,r))}}function ed(e){var t=e.alternate;return e===W||t!==null&&t===W}function td(e,t){pr=$l=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}var Hl={readContext:Ae,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},bm={readContext:Ae,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:fa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wl(4194308,4,Gc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wl(4194308,4,e,t)},useInsertionEffect:function(e,t){return wl(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Am.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:pa,useDebugValue:Cu,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=pa(!1),t=e[0];return e=Im.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=qe();if(H){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),ne===null)throw Error(v(349));tn&30||Vc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,fa(Hc.bind(null,r,o,e),[e]),r.flags|=2048,Lr(9,$c.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qe(),t=ne.identifierPrefix;if(H){var n=pt,r=dt;n=(r&~(1<<32-je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Om++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dm={readContext:Ae,useCallback:Xc,useContext:Ae,useEffect:_u,useImperativeHandle:Kc,useInsertionEffect:Qc,useLayoutEffect:Yc,useMemo:Zc,useReducer:Xo,useRef:Wc,useState:function(){return Xo(Mr)},useDebugValue:Cu,useDeferredValue:function(e){var t=Fe();return Jc(t,J.memoizedState,e)},useTransition:function(){var e=Xo(Mr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Uc,useId:qc,unstable_isNewReconciler:!1},Um={readContext:Ae,useCallback:Xc,useContext:Ae,useEffect:_u,useImperativeHandle:Kc,useInsertionEffect:Qc,useLayoutEffect:Yc,useMemo:Zc,useReducer:Zo,useRef:Wc,useState:function(){return Zo(Mr)},useDebugValue:Cu,useDeferredValue:function(e){var t=Fe();return J===null?t.memoizedState=e:Jc(t,J.memoizedState,e)},useTransition:function(){var e=Zo(Mr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Uc,useId:qc,unstable_isNewReconciler:!1};function Ve(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var to={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),l=At(e),o=ft(r,l);o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,l),t!==null&&(Be(t,e,l,r),vl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),l=At(e),o=ft(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,l),t!==null&&(Be(t,e,l,r),vl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=At(e),l=ft(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ot(e,l,r),t!==null&&(Be(t,e,r,n),vl(t,e,r))}};function ma(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(l,o):!0}function rd(e,t,n){var r=!1,l=Dt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(l=xe(t)?qt:de.current,r=t.contextTypes,o=(r=r!=null)?In(e,l):Dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=to,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function ha(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&to.enqueueReplaceState(t,t.state,null)}function Oi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},vu(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ae(o):(o=xe(t)?qt:de.current,l.context=In(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&to.enqueueReplaceState(l,l.state,null),Ul(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Dn(e,t){try{var n="",r=t;do n+=hf(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Jo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ii(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vm=typeof WeakMap=="function"?WeakMap:Map;function ld(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bl||(Bl=!0,Bi=r),Ii(e,t)},n}function od(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ii(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ii(e,t),typeof r!="function"&&(It===null?It=new Set([this]):It.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ga(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vm;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=eh.bind(null,e,t,n),t.then(e,e))}function va(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ya(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var $m=yt.ReactCurrentOwner,ye=!1;function fe(e,t,n,r){t.child=e===null?Ic(t,null,n,r):Fn(t,e.child,n,r)}function wa(e,t,n,r,l){n=n.render;var o=t.ref;return Ln(t,l),r=Su(e,t,n,r,o,l),n=Eu(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,vt(e,t,l)):(H&&n&&cu(t),t.flags|=1,fe(e,t,r,l),t.child)}function xa(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ou(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,id(e,t,o,r,l)):(e=El(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Er,n(i,r)&&e.ref===t.ref)return vt(e,t,l)}return t.flags|=1,e=Ft(o,r),e.ref=t.ref,e.return=t,t.child=e}function id(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Er(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,vt(e,t,l)}return Ai(e,t,n,r,l)}function ud(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Nn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Nn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(Nn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(Nn,_e),_e|=r;return fe(e,t,l,n),t.child}function sd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ai(e,t,n,r,l){var o=xe(n)?qt:de.current;return o=In(t,o),Ln(t,l),n=Su(e,t,n,r,o,l),r=Eu(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,vt(e,t,l)):(H&&r&&cu(t),t.flags|=1,fe(e,t,n,l),t.child)}function ka(e,t,n,r,l){if(xe(n)){var o=!0;Il(t)}else o=!1;if(Ln(t,l),t.stateNode===null)xl(e,t),rd(t,n,r),Oi(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=xe(n)?qt:de.current,c=In(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==c)&&ha(t,i,r,c),_t=!1;var h=t.memoizedState;i.state=h,Ul(t,r,i,l),s=t.memoizedState,u!==r||h!==s||we.current||_t?(typeof m=="function"&&(zi(t,n,m,r),s=t.memoizedState),(u=_t||ma(t,n,u,r,h,s,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Fc(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Ve(t.type,u),i.props=c,p=t.pendingProps,h=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=xe(n)?qt:de.current,s=In(t,s));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==p||h!==s)&&ha(t,i,r,s),_t=!1,h=t.memoizedState,i.state=h,Ul(t,r,i,l);var x=t.memoizedState;u!==p||h!==x||we.current||_t?(typeof y=="function"&&(zi(t,n,y,r),x=t.memoizedState),(c=_t||ma(t,n,c,r,h,x,s)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Fi(e,t,n,r,o,l)}function Fi(e,t,n,r,l,o){sd(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&ia(t,n,!1),vt(e,t,o);r=t.stateNode,$m.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Fn(t,e.child,null,o),t.child=Fn(t,null,u,o)):fe(e,t,u,o),t.memoizedState=r.state,l&&ia(t,n,!0),t.child}function ad(e){var t=e.stateNode;t.pendingContext?oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oa(e,t.context,!1),yu(e,t.containerInfo)}function Sa(e,t,n,r,l){return An(),pu(l),t.flags|=256,fe(e,t,n,r),t.child}var bi={dehydrated:null,treeContext:null,retryLane:0};function Di(e){return{baseLanes:e,cachePool:null,transitions:null}}function cd(e,t,n){var r=t.pendingProps,l=B.current,o=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(B,l&1),e===null)return Mi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=lo(i,r,0,null),e=Jt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Di(n),t.memoizedState=bi,e):Nu(t,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Hm(e,t,i,r,u,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ft(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=Ft(u,o):(o=Jt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Di(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=bi,r}return o=e.child,e=o.sibling,r=Ft(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nu(e,t){return t=lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dl(e,t,n,r){return r!==null&&pu(r),Fn(t,e.child,null,n),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hm(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Jo(Error(v(422))),dl(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=lo({mode:"visible",children:r.children},l,0,null),o=Jt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Fn(t,e.child,null,i),t.child.memoizedState=Di(i),t.memoizedState=bi,o);if(!(t.mode&1))return dl(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(v(419)),r=Jo(o,r,void 0),dl(e,t,i,r)}if(u=(i&e.childLanes)!==0,ye||u){if(r=ne,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,gt(e,l),Be(r,e,l,-1))}return zu(),r=Jo(Error(v(421))),dl(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=th.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ce=zt(l.nextSibling),Ne=t,H=!0,He=null,e!==null&&(Le[ze++]=dt,Le[ze++]=pt,Le[ze++]=en,dt=e.id,pt=e.overflow,en=t),t=Nu(t,r.children),t.flags|=4096,t)}function Ea(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Li(e.return,t,n)}function qo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function dd(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ea(e,n,t);else if(e.tag===19)Ea(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Vl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),qo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Vl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}qo(t,!0,n,null,o);break;case"together":qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jm(e,t,n){switch(t.tag){case 3:ad(t),An();break;case 5:bc(t);break;case 1:xe(t.type)&&Il(t);break;case 4:yu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(bl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?cd(e,t,n):(U(B,B.current&1),e=vt(e,t,n),e!==null?e.sibling:null);U(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,ud(e,t,n)}return vt(e,t,n)}var pd,Ui,fd,md;pd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ui=function(){};fd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Xt(nt.current);var o=null;switch(n){case"input":l=ui(e,l),r=ui(e,r),o=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":l=ci(e,l),r=ci(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zl)}pi(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(u=l?.[c],r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&V("scroll",e),o||u===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};md=function(e,t,n,r){n!==r&&(t.flags|=4)};function er(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bm(e,t,n){var r=t.pendingProps;switch(du(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return xe(t.type)&&Ol(),ae(t),null;case 3:return r=t.stateNode,bn(),$(we),$(de),xu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(al(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(Yi(He),He=null))),Ui(e,t),ae(t),null;case 5:wu(t);var l=Xt(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)fd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ae(t),null}if(e=Xt(nt.current),al(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[et]=t,r[Nr]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(l=0;l<ir.length;l++)V(ir[l],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Ls(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Os(r,o),V("invalid",r)}pi(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&sl(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&sl(r.textContent,u,e),l=["children",""+u]):gr.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&V("scroll",r)}switch(n){case"input":Xr(r),zs(r,o,!0);break;case"textarea":Xr(r),Is(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=zl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ha(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[et]=t,e[Nr]=r,pd(e,t,!1,!1),t.stateNode=e;e:{switch(i=fi(n,r),n){case"dialog":V("cancel",e),V("close",e),l=r;break;case"iframe":case"object":case"embed":V("load",e),l=r;break;case"video":case"audio":for(l=0;l<ir.length;l++)V(ir[l],e);l=r;break;case"source":V("error",e),l=r;break;case"img":case"image":case"link":V("error",e),V("load",e),l=r;break;case"details":V("toggle",e),l=r;break;case"input":Ls(e,r),l=ui(e,r),V("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),V("invalid",e);break;case"textarea":Os(e,r),l=ci(e,r),V("invalid",e);break;default:l=r}pi(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?Wa(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ja(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&vr(e,s):typeof s=="number"&&vr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(gr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&V("scroll",e):s!=null&&Xi(e,o,s,i))}switch(n){case"input":Xr(e),zs(e,r,!1);break;case"textarea":Xr(e),Is(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Rn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)md(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=Xt(Pr.current),Xt(nt.current),al(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:sl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sl(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return ae(t),null;case 13:if($(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Ce!==null&&t.mode&1&&!(t.flags&128))zc(),An(),t.flags|=98560,o=!1;else if(o=al(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[et]=t}else An(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else He!==null&&(Yi(He),He=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?q===0&&(q=3):zu())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return bn(),Ui(e,t),e===null&&_r(t.stateNode.containerInfo),ae(t),null;case 10:return hu(t.type._context),ae(t),null;case 17:return xe(t.type)&&Ol(),ae(t),null;case 19:if($(B),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)er(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Vl(e),i!==null){for(t.flags|=128,er(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>Un&&(t.flags|=128,r=!0,er(o,!1),t.lanes=4194304)}else{if(!r)if(e=Vl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),er(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!H)return ae(t),null}else 2*K()-o.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,er(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=B.current,U(B,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Lu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function Wm(e,t){switch(du(t),t.tag){case 1:return xe(t.type)&&Ol(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),$(we),$(de),xu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wu(t),null;case 13:if($(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(B),null;case 4:return bn(),null;case 10:return hu(t.type._context),null;case 22:case 23:return Lu(),null;case 24:return null;default:return null}}var pl=!1,ce=!1,Qm=typeof WeakSet=="function"?WeakSet:Set,S=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Vi(e,t,n){try{n()}catch(r){G(e,t,r)}}var _a=!1;function Ym(e,t){if(Ei=Tl,e=wc(),au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,u=-1,s=-1,c=0,m=0,p=e,h=null;t:for(;;){for(var y;p!==n||l!==0&&p.nodeType!==3||(u=i+l),p!==o||r!==0&&p.nodeType!==3||(s=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break t;if(h===n&&++c===l&&(u=i),h===o&&++m===r&&(s=i),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(_i={focusedElem:e,selectionRange:n},Tl=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,b=x.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ve(t.type,w),b);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){G(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return x=_a,_a=!1,x}function fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Vi(t,n,o)}l=l.next}while(l!==r)}}function no(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $i(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hd(e){var t=e.alternate;t!==null&&(e.alternate=null,hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[Nr],delete t[Ri],delete t[Tm],delete t[Mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gd(e){return e.tag===5||e.tag===3||e.tag===4}function Ca(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zl));else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}function ji(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ji(e,t,n),e=e.sibling;e!==null;)ji(e,t,n),e=e.sibling}var le=null,$e=!1;function St(e,t,n){for(n=n.child;n!==null;)vd(e,t,n),n=n.sibling}function vd(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:ce||Cn(n,t);case 6:var r=le,l=$e;le=null,St(e,t,n),le=r,$e=l,le!==null&&($e?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&($e?(e=le,n=n.stateNode,e.nodeType===8?Qo(e.parentNode,n):e.nodeType===1&&Qo(e,n),kr(e)):Qo(le,n.stateNode));break;case 4:r=le,l=$e,le=n.stateNode.containerInfo,$e=!0,St(e,t,n),le=r,$e=l;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Vi(n,t,i),l=l.next}while(l!==r)}St(e,t,n);break;case 1:if(!ce&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){G(n,t,u)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,St(e,t,n),ce=r):St(e,t,n);break;default:St(e,t,n)}}function Na(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qm),t.forEach(function(r){var l=nh.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:le=u.stateNode,$e=!1;break e;case 3:le=u.stateNode.containerInfo,$e=!0;break e;case 4:le=u.stateNode.containerInfo,$e=!0;break e}u=u.return}if(le===null)throw Error(v(160));vd(o,i,l),le=null,$e=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){G(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Je(e),r&4){try{fr(3,e,e.return),no(3,e)}catch(w){G(e,e.return,w)}try{fr(5,e,e.return)}catch(w){G(e,e.return,w)}}break;case 1:Ue(t,e),Je(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(Ue(t,e),Je(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var l=e.stateNode;try{vr(l,"")}catch(w){G(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Va(l,o),fi(u,i);var c=fi(u,o);for(i=0;i<s.length;i+=2){var m=s[i],p=s[i+1];m==="style"?Wa(l,p):m==="dangerouslySetInnerHTML"?ja(l,p):m==="children"?vr(l,p):Xi(l,m,p,c)}switch(u){case"input":si(l,o);break;case"textarea":$a(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Rn(l,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Rn(l,!!o.multiple,o.defaultValue,!0):Rn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Nr]=o}catch(w){G(e,e.return,w)}}break;case 6:if(Ue(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(w){G(e,e.return,w)}}break;case 3:if(Ue(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(w){G(e,e.return,w)}break;case 4:Ue(t,e),Je(e);break;case 13:Ue(t,e),Je(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Tu=K())),r&4&&Na(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(c=ce)||m,Ue(t,e),ce=c):Ue(t,e),Je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(S=e,m=e.child;m!==null;){for(p=S=m;S!==null;){switch(h=S,y=h.child,h.tag){case 0:case 11:case 14:case 15:fr(4,h,h.return);break;case 1:Cn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){G(r,n,w)}}break;case 5:Cn(h,h.return);break;case 22:if(h.memoizedState!==null){Pa(p);continue}}y!==null?(y.return=h,S=y):Pa(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=p.stateNode,s=p.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Ba("display",i))}catch(w){G(e,e.return,w)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){G(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ue(t,e),Je(e),r&4&&Na(e);break;case 21:break;default:Ue(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gd(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(vr(l,""),r.flags&=-33);var o=Ca(e);ji(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Ca(e);Hi(e,u,i);break;default:throw Error(v(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gm(e,t,n){S=e,wd(e,t,n)}function wd(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||pl;if(!i){var u=l.alternate,s=u!==null&&u.memoizedState!==null||ce;u=pl;var c=ce;if(pl=i,(ce=s)&&!c)for(S=l;S!==null;)i=S,s=i.child,i.tag===22&&i.memoizedState!==null?Ta(l):s!==null?(s.return=i,S=s):Ta(l);for(;o!==null;)S=o,wd(o,t,n),o=o.sibling;S=l,pl=u,ce=c}Ra(e,t,n)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):Ra(e,t,n)}}function Ra(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||no(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&da(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}da(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&kr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}ce||t.flags&512&&$i(t)}catch(h){G(t,t.return,h)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Pa(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Ta(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{no(4,t)}catch(s){G(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){G(t,l,s)}}var o=t.return;try{$i(t)}catch(s){G(t,o,s)}break;case 5:var i=t.return;try{$i(t)}catch(s){G(t,i,s)}}}catch(s){G(t,t.return,s)}if(t===e){S=null;break}var u=t.sibling;if(u!==null){u.return=t.return,S=u;break}S=t.return}}var Km=Math.ceil,jl=yt.ReactCurrentDispatcher,Ru=yt.ReactCurrentOwner,Ie=yt.ReactCurrentBatchConfig,O=0,ne=null,X=null,oe=0,_e=0,Nn=Vt(0),q=0,zr=null,nn=0,ro=0,Pu=0,mr=null,ve=null,Tu=0,Un=1/0,at=null,Bl=!1,Bi=null,It=null,fl=!1,Pt=null,Wl=0,hr=0,Wi=null,kl=-1,Sl=0;function me(){return O&6?K():kl!==-1?kl:kl=K()}function At(e){return e.mode&1?O&2&&oe!==0?oe&-oe:zm.transition!==null?(Sl===0&&(Sl=rc()),Sl):(e=A,e!==0||(e=window.event,e=e===void 0?16:cc(e.type)),e):1}function Be(e,t,n,r){if(50<hr)throw hr=0,Wi=null,Error(v(185));Or(e,n,r),(!(O&2)||e!==ne)&&(e===ne&&(!(O&2)&&(ro|=n),q===4&&Nt(e,oe)),ke(e,r),n===1&&O===0&&!(t.mode&1)&&(Un=K()+500,ql&&$t()))}function ke(e,t){var n=e.callbackNode;If(e,t);var r=Pl(e,e===ne?oe:0);if(r===0)n!==null&&bs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bs(n),t===1)e.tag===0?Lm(Ma.bind(null,e)):Tc(Ma.bind(null,e)),Rm(function(){!(O&6)&&$t()}),n=null;else{switch(lc(r)){case 1:n=tu;break;case 4:n=tc;break;case 16:n=Rl;break;case 536870912:n=nc;break;default:n=Rl}n=Rd(n,xd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xd(e,t){if(kl=-1,Sl=0,O&6)throw Error(v(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=Pl(e,e===ne?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ql(e,r);else{t=r;var l=O;O|=2;var o=Sd();(ne!==e||oe!==t)&&(at=null,Un=K()+500,Zt(e,t));do try{Jm();break}catch(u){kd(e,u)}while(!0);mu(),jl.current=o,O=l,X!==null?t=0:(ne=null,oe=0,t=q)}if(t!==0){if(t===2&&(l=yi(e),l!==0&&(r=l,t=Qi(e,l))),t===1)throw n=zr,Zt(e,0),Nt(e,r),ke(e,K()),n;if(t===6)Nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Xm(l)&&(t=Ql(e,r),t===2&&(o=yi(e),o!==0&&(r=o,t=Qi(e,o))),t===1))throw n=zr,Zt(e,0),Nt(e,r),ke(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:Yt(e,ve,at);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=Tu+500-K(),10<t)){if(Pl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ni(Yt.bind(null,e,ve,at),t);break}Yt(e,ve,at);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-je(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Km(r/1960))-r,10<r){e.timeoutHandle=Ni(Yt.bind(null,e,ve,at),r);break}Yt(e,ve,at);break;case 5:Yt(e,ve,at);break;default:throw Error(v(329))}}}return ke(e,K()),e.callbackNode===n?xd.bind(null,e):null}function Qi(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=Ql(e,t),e!==2&&(t=ve,ve=n,t!==null&&Yi(t)),e}function Yi(e){ve===null?ve=e:ve.push.apply(ve,e)}function Xm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!We(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~Pu,t&=~ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-je(t),r=1<<n;e[n]=-1,t&=~r}}function Ma(e){if(O&6)throw Error(v(327));zn();var t=Pl(e,0);if(!(t&1))return ke(e,K()),null;var n=Ql(e,t);if(e.tag!==0&&n===2){var r=yi(e);r!==0&&(t=r,n=Qi(e,r))}if(n===1)throw n=zr,Zt(e,0),Nt(e,t),ke(e,K()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,ve,at),ke(e,K()),null}function Mu(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Un=K()+500,ql&&$t())}}function rn(e){Pt!==null&&Pt.tag===0&&!(O&6)&&zn();var t=O;O|=1;var n=Ie.transition,r=A;try{if(Ie.transition=null,A=1,e)return e()}finally{A=r,Ie.transition=n,O=t,!(O&6)&&$t()}}function Lu(){_e=Nn.current,$(Nn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nm(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(du(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ol();break;case 3:bn(),$(we),$(de),xu();break;case 5:wu(r);break;case 4:bn();break;case 13:$(B);break;case 19:$(B);break;case 10:hu(r.type._context);break;case 22:case 23:Lu()}n=n.return}if(ne=e,X=e=Ft(e.current,null),oe=_e=t,q=0,zr=null,Pu=ro=nn=0,ve=mr=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Kt=null}return e}function kd(e,t){do{var n=X;try{if(mu(),yl.current=Hl,$l){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}$l=!1}if(tn=0,te=J=W=null,pr=!1,Tr=0,Ru.current=null,n===null||n.return===null){q=1,zr=t,X=null;break}e:{var o=e,i=n.return,u=n,s=t;if(t=oe,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=u,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=va(i);if(y!==null){y.flags&=-257,ya(y,i,u,o,t),y.mode&1&&ga(o,c,t),t=y,s=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if(!(t&1)){ga(o,c,t),zu();break e}s=Error(v(426))}}else if(H&&u.mode&1){var b=va(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),ya(b,i,u,o,t),pu(Dn(s,u));break e}}o=s=Dn(s,u),q!==4&&(q=2),mr===null?mr=[o]:mr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=ld(o,s,t);ca(o,d);break e;case 1:u=s;var a=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(It===null||!It.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=od(o,u,t);ca(o,g);break e}}o=o.return}while(o!==null)}_d(n)}catch(k){t=k,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function Sd(){var e=jl.current;return jl.current=Hl,e===null?Hl:e}function zu(){(q===0||q===3||q===2)&&(q=4),ne===null||!(nn&268435455)&&!(ro&268435455)||Nt(ne,oe)}function Ql(e,t){var n=O;O|=2;var r=Sd();(ne!==e||oe!==t)&&(at=null,Zt(e,t));do try{Zm();break}catch(l){kd(e,l)}while(!0);if(mu(),O=n,jl.current=r,X!==null)throw Error(v(261));return ne=null,oe=0,q}function Zm(){for(;X!==null;)Ed(X)}function Jm(){for(;X!==null&&!Cf();)Ed(X)}function Ed(e){var t=Nd(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?_d(e):X=t,Ru.current=null}function _d(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wm(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,X=null;return}}else if(n=Bm(n,t,_e),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);q===0&&(q=5)}function Yt(e,t,n){var r=A,l=Ie.transition;try{Ie.transition=null,A=1,qm(e,t,n,r)}finally{Ie.transition=l,A=r}return null}function qm(e,t,n,r){do zn();while(Pt!==null);if(O&6)throw Error(v(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Af(e,o),e===ne&&(X=ne=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,Rd(Rl,function(){return zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var i=A;A=1;var u=O;O|=4,Ru.current=null,Ym(e,n),yd(n,e),km(_i),Tl=!!Ei,_i=Ei=null,e.current=n,Gm(n,e,l),Nf(),O=u,A=i,Ie.transition=o}else e.current=n;if(fl&&(fl=!1,Pt=e,Wl=l),o=e.pendingLanes,o===0&&(It=null),Tf(n.stateNode,r),ke(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Bl)throw Bl=!1,e=Bi,Bi=null,e;return Wl&1&&e.tag!==0&&zn(),o=e.pendingLanes,o&1?e===Wi?hr++:(hr=0,Wi=e):hr=0,$t(),null}function zn(){if(Pt!==null){var e=lc(Wl),t=Ie.transition,n=A;try{if(Ie.transition=null,A=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,Wl=0,O&6)throw Error(v(331));var l=O;for(O|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(S=c;S!==null;){var m=S;switch(m.tag){case 0:case 11:case 15:fr(8,m,o)}var p=m.child;if(p!==null)p.return=m,S=p;else for(;S!==null;){m=S;var h=m.sibling,y=m.return;if(hd(m),m===c){S=null;break}if(h!==null){h.return=y,S=h;break}S=y}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,S=d;break e}S=o.return}}var a=e.current;for(S=a;S!==null;){i=S;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,S=f;else e:for(i=a;S!==null;){if(u=S,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:no(9,u)}}catch(k){G(u,u.return,k)}if(u===i){S=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,S=g;break e}S=u.return}}if(O=l,$t(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Gl,e)}catch{}r=!0}return r}finally{A=n,Ie.transition=t}}return!1}function La(e,t,n){t=Dn(n,t),t=ld(e,t,1),e=Ot(e,t,1),t=me(),e!==null&&(Or(e,1,t),ke(e,t))}function G(e,t,n){if(e.tag===3)La(e,e,n);else for(;t!==null;){if(t.tag===3){La(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=Dn(n,e),e=od(t,e,1),t=Ot(t,e,1),e=me(),t!==null&&(Or(t,1,e),ke(t,e));break}}t=t.return}}function eh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(oe&n)===n&&(q===4||q===3&&(oe&130023424)===oe&&500>K()-Tu?Zt(e,0):Pu|=n),ke(e,t)}function Cd(e,t){t===0&&(e.mode&1?(t=qr,qr<<=1,!(qr&130023424)&&(qr=4194304)):t=1);var n=me();e=gt(e,t),e!==null&&(Or(e,t,n),ke(e,n))}function th(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cd(e,n)}function nh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Cd(e,n)}var Nd;Nd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,jm(e,t,n);ye=!!(e.flags&131072)}else ye=!1,H&&t.flags&1048576&&Mc(t,Fl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xl(e,t),e=t.pendingProps;var l=In(t,de.current);Ln(t,n),l=Su(null,t,r,e,l,n);var o=Eu();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(o=!0,Il(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,vu(t),l.updater=to,t.stateNode=l,l._reactInternals=t,Oi(t,r,e,n),t=Fi(null,t,r,!0,o,n)):(t.tag=0,H&&o&&cu(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=lh(r),e=Ve(r,e),l){case 0:t=Ai(null,t,r,e,n);break e;case 1:t=ka(null,t,r,e,n);break e;case 11:t=wa(null,t,r,e,n);break e;case 14:t=xa(null,t,r,Ve(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ve(r,l),Ai(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ve(r,l),ka(e,t,r,l,n);case 3:e:{if(ad(t),e===null)throw Error(v(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Fc(e,t),Ul(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Dn(Error(v(423)),t),t=Sa(e,t,r,n,l);break e}else if(r!==l){l=Dn(Error(v(424)),t),t=Sa(e,t,r,n,l);break e}else for(Ce=zt(t.stateNode.containerInfo.firstChild),Ne=t,H=!0,He=null,n=Ic(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===l){t=vt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return bc(t),e===null&&Mi(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Ci(r,l)?i=null:o!==null&&Ci(r,o)&&(t.flags|=32),sd(e,t),fe(e,t,i,n),t.child;case 6:return e===null&&Mi(t),null;case 13:return cd(e,t,n);case 4:return yu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ve(r,l),wa(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,U(bl,r._currentValue),r._currentValue=i,o!==null)if(We(o.value,i)){if(o.children===l.children&&!we.current){t=vt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=ft(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Li(o.return,n,t),u.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(v(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Li(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Ln(t,n),l=Ae(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=Ve(r,t.pendingProps),l=Ve(r.type,l),xa(e,t,r,l,n);case 15:return id(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ve(r,l),xl(e,t),t.tag=1,xe(r)?(e=!0,Il(t)):e=!1,Ln(t,n),rd(t,r,l),Oi(t,r,l,n),Fi(null,t,r,!0,e,n);case 19:return dd(e,t,n);case 22:return ud(e,t,n)}throw Error(v(156,t.tag))};function Rd(e,t){return ec(e,t)}function rh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new rh(e,t,n,r)}function Ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lh(e){if(typeof e=="function")return Ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ji)return 11;if(e===qi)return 14}return 2}function Ft(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function El(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ou(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case gn:return Jt(n.children,l,o,t);case Zi:i=8,l|=8;break;case ri:return e=Oe(12,n,t,l|2),e.elementType=ri,e.lanes=o,e;case li:return e=Oe(13,n,t,l),e.elementType=li,e.lanes=o,e;case oi:return e=Oe(19,n,t,l),e.elementType=oi,e.lanes=o,e;case ba:return lo(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Aa:i=10;break e;case Fa:i=9;break e;case Ji:i=11;break e;case qi:i=14;break e;case Et:i=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Oe(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Jt(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function lo(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=ba,e.lanes=n,e.stateNode={isHidden:!1},e}function ei(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function ti(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function oh(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Iu(e,t,n,r,l,o,i,u,s){return e=new oh(e,t,n,u,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Oe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(o),e}function ih(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pd(e){if(!e)return Dt;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(xe(n))return Pc(e,n,t)}return t}function Td(e,t,n,r,l,o,i,u,s){return e=Iu(n,r,!0,e,l,o,i,u,s),e.context=Pd(null),n=e.current,r=me(),l=At(n),o=ft(r,l),o.callback=t??null,Ot(n,o,l),e.current.lanes=l,Or(e,l,r),ke(e,r),e}function oo(e,t,n,r){var l=t.current,o=me(),i=At(l);return n=Pd(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(l,t,i),e!==null&&(Be(e,l,i,o),vl(e,l,i)),i}function Yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function za(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Au(e,t){za(e,t),(e=e.alternate)&&za(e,t)}function uh(){return null}var Md=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fu(e){this._internalRoot=e}io.prototype.render=Fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));oo(e,t,null,null)};io.prototype.unmount=Fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){oo(null,e,null,null)}),t[ht]=null}};function io(e){this._internalRoot=e}io.prototype.unstable_scheduleHydration=function(e){if(e){var t=uc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&ac(e)}};function bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oa(){}function sh(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=Yl(i);o.call(c)}}var i=Td(t,r,e,0,null,!1,!1,"",Oa);return e._reactRootContainer=i,e[ht]=i.current,_r(e.nodeType===8?e.parentNode:e),rn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=Yl(s);u.call(c)}}var s=Iu(e,0,!1,null,null,!1,!1,"",Oa);return e._reactRootContainer=s,e[ht]=s.current,_r(e.nodeType===8?e.parentNode:e),rn(function(){oo(t,s,n,r)}),s}function so(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var s=Yl(i);u.call(s)}}oo(t,i,e,l)}else i=sh(n,t,e,l,r);return Yl(i)}oc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=or(t.pendingLanes);n!==0&&(nu(t,n|1),ke(t,K()),!(O&6)&&(Un=K()+500,$t()))}break;case 13:rn(function(){var r=gt(e,1);if(r!==null){var l=me();Be(r,e,1,l)}}),Au(e,1)}};ru=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=me();Be(t,e,134217728,n)}Au(e,134217728)}};ic=function(e){if(e.tag===13){var t=At(e),n=gt(e,t);if(n!==null){var r=me();Be(n,e,t,r)}Au(e,t)}};uc=function(){return A};sc=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};hi=function(e,t,n){switch(t){case"input":if(si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Jl(r);if(!l)throw Error(v(90));Ua(r),si(r,l)}}}break;case"textarea":$a(e,n);break;case"select":t=n.value,t!=null&&Rn(e,!!n.multiple,t,!1)}};Ga=Mu;Ka=rn;var ah={usingClientEntryPoint:!1,Events:[Ar,xn,Jl,Qa,Ya,Mu]},tr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ch={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ja(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(nr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!nr.isDisabled&&nr.supportsFiber))try{Gl=nr.inject(ch),tt=nr}catch{}var nr;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ah;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bu(t))throw Error(v(200));return ih(e,t,null,n)};Te.createRoot=function(e,t){if(!bu(e))throw Error(v(299));var n=!1,r="",l=Md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Iu(e,1,!1,null,null,n,!1,r,l),e[ht]=t.current,_r(e.nodeType===8?e.parentNode:e),new Fu(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Ja(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return rn(e)};Te.hydrate=function(e,t,n){if(!uo(t))throw Error(v(200));return so(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!bu(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Md;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Td(t,null,e,1,n??null,l,!1,o,i),e[ht]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new io(t)};Te.render=function(e,t,n){if(!uo(t))throw Error(v(200));return so(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!uo(e))throw Error(v(40));return e._reactRootContainer?(rn(function(){so(null,null,e,!1,function(){e._reactRootContainer=null,e[ht]=null})}),!0):!1};Te.unstable_batchedUpdates=Mu;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!uo(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return so(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426"});var Id=ut(($h,Od)=>{"use strict";function zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zd)}catch(e){console.error(e)}}zd(),Od.exports=Ld()});var Fd=ut(Du=>{"use strict";var Ad=Id();Du.createRoot=Ad.createRoot,Du.hydrateRoot=Ad.hydrateRoot;var Hh});var op=ut(ho=>{"use strict";var mh=st(),hh=Symbol.for("react.element"),gh=Symbol.for("react.fragment"),vh=Object.prototype.hasOwnProperty,yh=mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wh={key:!0,ref:!0,__self:!0,__source:!0};function lp(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)vh.call(t,r)&&!wh.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:hh,type:e,key:o,ref:i,props:l,_owner:yh.current}}ho.Fragment=gh;ho.jsx=lp;ho.jsxs=lp});var F=ut((a0,ip)=>{"use strict";ip.exports=op()});var jn=z(st(),1),Lp=z(Fd(),1);var Hn="Whop Hunter",ao="/discover/app/app_QRxsQodZgK1r4D",bd=`https://whop.com${ao}`,Dd="whop.com",Ud=2147483647,Qe="whophunter",Uu="https://whophunter.com",Vd="contact@whophunter.com";function co(){return`https://chromewebstore.google.com/detail/${chrome.runtime.id}/reviews`}var Bh=`data-${Qe}-cid`,Wh=`data-${Qe}-hide`,Qh=`data-${Qe}-pill`,Yh=`${Qe}-style`,Gh=`${Qe}:page`,Kh=`${Qe}:stamp`,Xh=`${Qe}:loadmore`,Zh=`${Qe}:hookready`,Jh=`${Qe}:hookping`;var $d=[5,20,40],Hd={runs:0,asked:0,ratedAt:null},jd=1200,Bd=1e3,Wd=400;function dh(e){return!!e&&typeof e=="object"&&e.__ws===!0}async function Ht(e){try{return await chrome.runtime.sendMessage({__ws:!0,to:"background",msg:e})??null}catch{return null}}function Ye(e,t){try{chrome.runtime.sendMessage({__ws:!0,to:e,msg:t}).catch(()=>{})}catch{}}function po(e,t){let n=r=>{!dh(r)||r.to!==e||t(r.msg)};return chrome.runtime.onMessage.addListener(n),()=>chrome.runtime.onMessage.removeListener(n)}var P=z(st(),1);var re=[{value:"tiktok",label:"TikTok"},{value:"youtube",label:"YouTube"},{value:"instagram",label:"Instagram"},{value:"facebook",label:"Facebook"},{value:"x",label:"X"}],fo={tiktok:null,youtube:null,instagram:null,facebook:null,x:null},Qd={tiktok:{min:null,max:null},youtube:{min:null,max:null},instagram:{min:null,max:null},facebook:{min:null,max:null},x:{min:null,max:null}},rt={paidOutPercentMax:null,budgetMin:null,budgetMax:null,pricePer1kMin:fo,priceMode:"all",clippersMin:null,clippersMax:null,ageMinDays:null,ageMaxDays:null,platforms:[],payoutViews:Qd,payoutMinMode:"all",payoutMaxMode:"all",viewsRemainingMin:null,verified:"any"},Vu={paidOut:"Paid out",budget:"Budget total",pricePer1k:"Price per 1k views",clippers:"Clippers",age:"Campaign age",platforms:"Platforms",payoutMinViews:"Minimum Payout Based on Views",payoutMaxViews:"Maximum Payout Based on Views",viewsRemaining:"Views remaining",verified:"Owner verified"};var un={matches:0,scanned:0,unchecked:0,checking:0,total:null,stopped:!1,running:!1,partial:!1};var jt={auth:"ws:auth",filters:"ws:filters",ent:"ws:ent",review:"ws:review"};async function Yd(e){try{return(await chrome.storage.local.get(e))?.[e]??null}catch{return null}}async function $u(e,t){try{await chrome.storage.local.set({[e]:t})}catch{}}async function Gd(){let e=await Yd(jt.filters);return e?{...rt,...e,pricePer1kMin:{...rt.pricePer1kMin,...e.pricePer1kMin??{}},payoutViews:{...rt.payoutViews,...e.payoutViews??{}}}:rt}var mo=null;function Kd(e){mo!=null&&clearTimeout(mo),mo=setTimeout(()=>{mo=null,$u(jt.filters,e)},Wd)}async function Xd(){let e=await Yd(jt.review);return{...Hd,...e??{}}}async function Zd(){let e=await Xd(),t=e.runs+1,n=$d[e.asked]??null,r=e.ratedAt===null&&n!==null&&t>=n;return await $u(jt.review,{...e,runs:t,asked:r?e.asked+1:e.asked}),{due:r,runs:t,threshold:n}}async function Jd(){let e=await Xd();await $u(jt.review,{...e,ratedAt:Date.now()})}var qd={min:0,max:15e3,step:500,onValue:500},ep={min:0,max:1e6,step:1e4,onValue:1e5};function ph(e){return re.some(t=>e.payoutViews[t.value].min!=null||e.payoutViews[t.value].max!=null)}function fh(e){return re.some(t=>e.pricePer1kMin[t.value]!=null)}function tp(e){return re.filter(t=>e[t.value]!=null).length}function np(e){return re.filter(t=>e[t.value].min!=null).length}function rp(e){return re.filter(t=>e[t.value].max!=null).length}function Hu(e){return e.paidOutPercentMax==null&&e.budgetMin==null&&e.budgetMax==null&&!fh(e)&&e.clippersMin==null&&e.clippersMax==null&&e.ageMinDays==null&&e.ageMaxDays==null&&e.platforms.length===0&&!ph(e)&&e.viewsRemainingMin==null&&e.verified==="any"}var dp=z(st(),1);var sn=z(st(),1);var Z=z(F(),1);function xh(e){if(e==null)return null;let t=e-Date.now();return t<=0?0:Math.max(1,Math.ceil(t/864e5))}function up(e){let t=xh(e?.resetsAt??null);return t==null?null:t===0?"Resets today":t===1?"Resets tomorrow":`Resets in ${t} days`}function go(e){Ye("background",{t:"TRACK",name:"upgrade_clicked",props:{from:e}}),window.open(`${Uu}/pricing`,"_blank","noopener,noreferrer")}function ju(){window.open(`${Uu}/account`,"_blank","noopener,noreferrer")}function sp({ent:e}){return(0,Z.jsxs)("div",{className:"ws-plan",children:[(0,Z.jsx)("span",{className:"ws-pill",children:"FREE"}),(0,Z.jsx)("span",{className:"ws-planinfo",children:"100% Free Forever"})]})}function ap({ent:e,onClose:t}){return null}var lt=z(F(),1);function kh(e){return((e.trim().split("@")[0]??"").replace(/[^a-z0-9]/gi,"").slice(0,2)||e.slice(0,2)).toUpperCase()}function cp({user:e,onSignOut:t}){let[n,r]=(0,sn.useState)(!1),[l,o]=(0,sn.useState)(!1),i=(0,sn.useRef)(null);(0,sn.useEffect)(()=>{if(!n)return;let s=m=>{let p=m.composedPath?.()??[];i.current&&p.includes(i.current)||r(!1)},c=m=>{m.key==="Escape"&&r(!1)};return window.addEventListener("pointerdown",s,!0),window.addEventListener("keydown",c,!0),()=>{window.removeEventListener("pointerdown",s,!0),window.removeEventListener("keydown",c,!0)}},[n]);let u=!l&&e.avatarUrl?e.avatarUrl:null;return(0,lt.jsxs)("div",{className:"ws-acct",ref:i,children:[(0,lt.jsx)("button",{type:"button",className:"ws-acctbtn",title:e.email,"aria-label":`Account: ${e.email}`,"aria-haspopup":"menu","aria-expanded":n,onClick:()=>r(s=>!s),children:(0,lt.jsx)("span",{className:`ws-avatar${u?" photo":""}`,children:u?(0,lt.jsx)("img",{src:u,alt:"",referrerPolicy:"no-referrer",onError:()=>o(!0)}):kh(e.email)})}),n?(0,lt.jsxs)("div",{className:"ws-acctmenu",role:"menu",children:[(0,lt.jsx)("div",{className:"ws-acctemail",title:e.email,children:e.email}),(0,lt.jsx)("button",{type:"button",role:"menuitem",className:"ws-acctitem",onClick:()=>{r(!1),ju()},children:"Account"}),(0,lt.jsx)("button",{type:"button",role:"menuitem",className:"ws-acctitem",onClick:()=>{r(!1),t()},children:"Sign out"})]}):null]})}var ee=z(F(),1);function Sh(){return(0,ee.jsx)("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true",focusable:"false",children:(0,ee.jsx)("path",{fill:"currentColor",d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})})}function pp({filterOn:e,filtering:t,dirty:n,blockedReason:r,user:l,ent:o,onFilter:i,onStop:u,onClear:s,onSignOut:c}){let[m,p]=(0,dp.useState)(!1),h=r!=null,w=!1;return(0,ee.jsxs)("div",{className:"ws-footer",children:[(0,ee.jsxs)("div",{className:"ws-actions",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[h&&m&&!t?(0,ee.jsx)("div",{className:"ws-tip ws-tip-actions",children:r}):null,t?(0,ee.jsx)("button",{type:"button",className:"ws-btn clear",onClick:u,children:"Stop"}):(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("button",{type:"button",className:`ws-btn ${e&&!n?"clear":"gold"}${h?" off":""}`,"aria-disabled":h,onClick:()=>{h||(e&&!n?s():i())},children:n?"Apply changes":e?"Clear filter":"Filter"}),n?(0,ee.jsx)("button",{type:"button",className:"ws-btn",onClick:s,children:"Clear"}):null]})]}),l?(0,ee.jsx)(sp,{ent:o}):null,l?(0,ee.jsxs)("div",{className:"ws-account",children:[(0,ee.jsxs)("a",{className:"ws-acctlink",href:co(),target:"_blank",rel:"noopener noreferrer",children:[(0,ee.jsx)(Sh,{}),"Rate us"]}),(0,ee.jsx)("a",{className:"ws-acctlink",href:`mailto:${Vd}`,children:"Contact us"})]}):null]})}var an=z(st(),1);var Eh="https://kmftgtvpwvvtrtfnkcod.supabase.co",_h="sb_publishable_oTggpnmtWaNoo85IymeyAQ_nRyH_hem";function fp(){return Eh.startsWith("http")&&_h.length>20}var w0=5*60*1e3;var R=z(F(),1);function Ch(){return(0,R.jsxs)("svg",{width:"17",height:"17",viewBox:"0 0 48 48","aria-hidden":"true",children:[(0,R.jsx)("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),(0,R.jsx)("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),(0,R.jsx)("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.55 10.78l7.98-6.19z"}),(0,R.jsx)("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]})}function Nh(){return(0,R.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[(0,R.jsx)("rect",{x:"1.6",y:"3.4",width:"12.8",height:"9.2",rx:"1.6",stroke:"currentColor",strokeWidth:"1.3"}),(0,R.jsx)("path",{d:"m2.4 4.6 5.6 4 5.6-4",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]})}function Rh(){return(0,R.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[(0,R.jsx)("rect",{x:"3",y:"7",width:"10",height:"6.6",rx:"1.6",stroke:"currentColor",strokeWidth:"1.3"}),(0,R.jsx)("path",{d:"M5.4 7V5.4a2.6 2.6 0 0 1 5.2 0V7",stroke:"currentColor",strokeWidth:"1.3"})]})}function mp({onSignedIn:e}){let[t,n]=(0,an.useState)("up"),[r,l]=(0,an.useState)(""),[o,i]=(0,an.useState)(""),[u,s]=(0,an.useState)(null),[c,m]=(0,an.useState)(null),[p,h]=(0,an.useState)(null),y=fp();function x(g){if(!g)return m("Something went wrong. Try again.");if(!g.ok)return m(g.error??"Something went wrong.");if(t==="reset"){h("Check your inbox for the reset link."),n("in");return}if(g.pending){h("Account created. Confirm your email, then sign in."),n("in"),i("");return}g.user&&e(g.user)}async function w(g){if(g.preventDefault(),u)return;if(m(null),h(null),!r.trim())return m("Enter your email.");if(t!=="reset"&&o.length<6)return m("Password must be at least 6 characters.");s("form");let k=await Ht(t==="up"?{t:"AUTH_SIGN_UP",email:r.trim(),password:o}:t==="in"?{t:"AUTH_SIGN_IN",email:r.trim(),password:o}:{t:"AUTH_RESET",email:r.trim()});s(null),x(k)}async function b(){if(u)return;m(null),h(null),s("google");let g=await Ht({t:"AUTH_GOOGLE"});s(null),x(g)}return(0,R.jsxs)("form",{className:"ws-auth",onSubmit:w,children:[(0,R.jsx)("h2",{children:t==="up"?"Create an account":t==="in"?"Sign in":"Reset password"}),y?null:(0,R.jsxs)("div",{className:"ws-notice error",children:["Backend not configured. Add your Supabase URL and anon key to ",(0,R.jsx)("code",{children:"src/shared/config.ts"}),", then rebuild."]}),(0,R.jsxs)("div",{className:"ws-iconfield",children:[(0,R.jsx)("span",{className:"ws-iconcell",children:(0,R.jsx)(Nh,{})}),(0,R.jsx)("input",{className:"ws-authinput",type:"email",autoComplete:"email",value:r,onChange:g=>l(g.target.value),placeholder:"Mail","aria-label":"Email"})]}),t!=="reset"?(0,R.jsxs)("div",{className:"ws-iconfield",children:[(0,R.jsx)("span",{className:"ws-iconcell",children:(0,R.jsx)(Rh,{})}),(0,R.jsx)("input",{className:"ws-authinput",type:"password",autoComplete:t==="up"?"new-password":"current-password",value:o,onChange:g=>i(g.target.value),placeholder:"Password","aria-label":"Password"})]}):null,c?(0,R.jsx)("div",{className:"ws-notice error",children:c}):null,p?(0,R.jsx)("div",{className:"ws-notice warn",children:p}):null,(0,R.jsx)("button",{className:"ws-primary",type:"submit",disabled:!!u||!y,children:u==="form"?t==="up"?"Creating account\u2026":t==="in"?"Signing in\u2026":"Sending link\u2026":t==="up"?"Sign up with Email":t==="in"?"Sign in with Email":"Send reset link"}),(0,R.jsx)("div",{className:"ws-authlinks",children:t==="up"?(0,R.jsx)("button",{type:"button",onClick:()=>n("in"),children:"Sign in"}):t==="in"?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("button",{type:"button",onClick:()=>n("up"),children:"Create an account"}),(0,R.jsx)("button",{type:"button",onClick:()=>n("reset"),children:"Forgot password"})]}):(0,R.jsx)("button",{type:"button",onClick:()=>n("in"),children:"Back to sign in"})})]})}var br=z(st(),1),M=z(F(),1);function hp(e){e.currentTarget.blur()}function Ge({label:e,value:t,onClear:n,children:r,note:l,afterLabel:o}){return(0,M.jsxs)("div",{className:"ws-row",children:[(0,M.jsxs)("div",{className:"ws-row-head",children:[(0,M.jsxs)("div",{className:"ws-row-label",children:[e,o]}),(0,M.jsxs)("div",{className:"ws-row-right",children:[t,n?(0,M.jsx)("button",{className:"ws-clear",onClick:n,type:"button",children:"clear"}):null]})]}),l?(0,M.jsx)("div",{className:"ws-row-note",children:l}):null,r]})}function Bu({value:e,onChange:t,min:n=0,max:r=100,step:l=1}){return(0,M.jsx)("div",{className:`ws-slider${e==null?" off":""}`,children:(0,M.jsx)("input",{type:"range",min:n,max:r,step:l,value:e??n,onWheel:hp,onChange:o=>t(Number(o.target.value))})})}function vo({text:e,on:t}){return t?(0,M.jsx)("span",{className:"ws-row-value",children:e}):null}function wt({value:e,onChange:t,placeholder:n,prefix:r,inputRef:l}){let o=(0,M.jsx)("input",{ref:l,className:"ws-input",type:"number",inputMode:"decimal",placeholder:n,value:e??"",onWheel:hp,onChange:i=>{let u=i.target.value.trim();t(u===""?null:Number(u))}});return r?(0,M.jsxs)("div",{className:"ws-prefix",children:[(0,M.jsx)("span",{children:r}),o]}):o}function Wu({value:e,options:t,onChange:n}){return(0,M.jsx)("div",{className:"ws-seg",children:t.map(r=>(0,M.jsx)("button",{type:"button",className:e===r.value?"on":"",onClick:()=>n(r.value),children:r.label},r.value))})}function Qu({label:e,title:t,detail:n,children:r}){let[l,o]=(0,br.useState)(!1),[i,u]=(0,br.useState)(!1),s=l||i;return(0,M.jsxs)("span",{className:"ws-info",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[(0,M.jsx)("button",{type:"button",className:"ws-infobtn","aria-label":e,"aria-expanded":s,onClick:()=>u(c=>!c),onFocus:()=>o(!0),onBlur:()=>o(!1),children:"i"}),s?(0,M.jsxs)("span",{className:"ws-infopop",role:"tooltip",children:[(0,M.jsx)("span",{className:"ws-infolead",children:"Example:"}),r,(0,M.jsx)("span",{className:"ws-infotitle",children:t}),(0,M.jsx)("span",{className:"ws-infodetail",children:n})]}):null]})}function gp({value:e,options:t,onChange:n}){let r=l=>n(e.includes(l)?e.filter(o=>o!==l):[...e,l]);return(0,M.jsx)("div",{className:"ws-icons",children:t.map(l=>{let o=e.includes(l.value);return(0,M.jsx)("button",{type:"button",role:"checkbox","aria-checked":o,"aria-label":l.label,title:l.label,className:`ws-icon ws-icon-${l.value}${o?" on":""}`,onClick:()=>r(l.value),children:l.icon},l.value)})})}function vp({value:e,options:t,onChange:n,prefix:r,placeholder:l}){let o=(0,br.useRef)({}),i=(u,s)=>n({...e,[u]:s});return(0,M.jsx)("div",{className:"ws-iinputs",children:t.map(u=>{let s=e[u.value],c=s!=null;return(0,M.jsxs)("div",{className:"ws-iinput",children:[(0,M.jsx)("button",{type:"button",role:"checkbox","aria-checked":c,"aria-label":u.label,title:u.label,className:`ws-icon ws-icon-${u.value}${c?" on":""}`,onClick:()=>c?i(u.value,null):o.current[u.value]?.focus(),children:u.icon}),(0,M.jsx)(wt,{value:s,onChange:m=>i(u.value,m),placeholder:l,prefix:r,inputRef:m=>{o.current[u.value]=m}})]},u.value)})})}function Yu({value:e,options:t,onChange:n,bounds:r,suffix:l}){let o=(i,u)=>n({...e,[i]:u});return(0,M.jsx)("div",{className:"ws-isliders",children:t.map(i=>{let u=e[i.value],s=u!=null;return(0,M.jsxs)("div",{className:"ws-islider",children:[(0,M.jsxs)("div",{className:"ws-islider-vals",children:[(0,M.jsx)("span",{className:"ws-islider-gap"}),(0,M.jsx)("span",{className:"ws-islider-full",children:(0,M.jsx)(vo,{on:s,text:s?`${r.format(u)} ${l}`:""})})]}),(0,M.jsxs)("div",{className:"ws-islider-line",children:[(0,M.jsx)("button",{type:"button",role:"checkbox","aria-checked":s,"aria-label":i.label,title:i.label,className:`ws-icon ws-icon-${i.value}${s?" on":""}`,onClick:()=>o(i.value,s?null:r.onValue),children:i.icon}),(0,M.jsx)(Bu,{value:u,onChange:c=>o(i.value,c===r.min?null:c),min:r.min,max:r.max,step:r.step})]})]},i.value)})})}function yp(e){if(e<1e3)return String(e);let t=e/1e3;return`${Number.isInteger(t)?t:t.toFixed(1)}k`}function Gu(e){return Number.isFinite(e)?e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(0)}k`:String(e):"\u221E"}var Ke=z(F(),1),cn={tiktok:(0,Ke.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 26 26",height:"20",width:"20","aria-hidden":"true",focusable:"false",children:(0,Ke.jsx)("path",{fill:"currentColor",d:"M13.324.824c1.31-.02 2.61-.01 3.91-.02a6.2 6.2 0 0 0 1.75 4.17l-.001-.001A7 7 0 0 0 23.2 6.76l.022.001v4.029a10.7 10.7 0 0 1-4.265-.998l.066.028a12 12 0 0 1-1.662-.957l.042.027c-.01 2.92.01 5.838-.02 8.747a7.6 7.6 0 0 1-1.366 3.963l.016-.024c-1.321 1.892-3.462 3.135-5.897 3.208h-.01a7.257 7.257 0 0 1-4.111-1.048l.031.019C4.04 22.549 2.656 20.483 2.4 18.08l-.004-.033c-.02-.5-.03-1-.01-1.49.393-3.823 3.596-6.78 7.49-6.78q.657 0 1.283.108l-.045-.006c.02 1.479-.04 2.959-.04 4.438a3.432 3.432 0 0 0-4.372 2.095l-.007.024a3.9 3.9 0 0 0-.168 1.141q0 .248.03.488l-.002-.02a3.41 3.41 0 0 0 3.505 2.87h-.007a3.36 3.36 0 0 0 2.761-1.596l.008-.014c.214-.297.36-.658.409-1.049v-.01c.1-1.79.06-3.57.07-5.36.01-4.028-.01-8.047.02-12.066z"})}),youtube:(0,Ke.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 28 22",height:"20",width:"20","aria-hidden":"true",focusable:"false",children:(0,Ke.jsx)("path",{fill:"currentColor",d:"M27.291 3.69a3 3 0 0 0-1.811-2.05C21.195-.015 14.375 0 14 0S6.805-.015 2.52 1.64A3 3 0 0 0 .709 3.69C.385 4.938 0 7.218 0 11c0 3.783.385 6.063.709 7.31a3 3 0 0 0 1.811 2.051C6.625 21.945 13.05 22 13.918 22h.165c.867 0 7.296-.055 11.397-1.639a3 3 0 0 0 1.811-2.051c.324-1.25.709-3.527.709-7.31s-.385-6.062-.709-7.31m-9.217 8.125-5 3.5A1 1 0 0 1 11.5 14.5v-7a1 1 0 0 1 1.574-.819l5 3.5a1 1 0 0 1 0 1.638z"})}),instagram:(0,Ke.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 26 26",height:"20",width:"20","aria-hidden":"true",focusable:"false",children:(0,Ke.jsx)("path",{fill:"currentColor",d:"M19 0H7a7.01 7.01 0 0 0-7 7v12a7.01 7.01 0 0 0 7 7h12a7.01 7.01 0 0 0 7-7V7a7.01 7.01 0 0 0-7-7m-6 19a6 6 0 1 1 0-11.998A6 6 0 0 1 13 19m7.5-12a1.5 1.5 0 1 1 0-3.001A1.5 1.5 0 0 1 20.5 7M17 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0"})}),facebook:(0,Ke.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 26 26",height:"20",width:"20","aria-hidden":"true",focusable:"false",children:(0,Ke.jsx)("path",{fill:"currentColor",d:"M26 13c0-7.18-5.82-13-13-13S0 5.82 0 13c0 6.488 4.752 11.864 10.968 12.84v-9.08H7.664V13h3.304v-2.868c0-3.264 1.944-5.068 4.92-5.068 1.424 0 2.916.256 2.916.256v3.204H17.16c-1.616 0-2.12 1.004-2.12 2.032V13h3.612l-.576 3.76H15.04v9.08C21.248 24.864 26 19.488 26 13"})}),x:(0,Ke.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 22 22",height:"20",width:"20","aria-hidden":"true",focusable:"false",children:(0,Ke.jsx)("path",{fill:"currentColor",d:"M12.812 9.316 20.825 0h-1.899l-6.958 8.089L6.41 0H0l8.404 12.231L0 22h1.9l7.347-8.542L15.117 22h6.41zm-2.602 3.023-.851-1.218L2.583 1.43H5.5l5.468 7.82.852 1.219 7.107 10.166H16.01z"})})};var Xe=z(F(),1);function Ku(){return(0,Xe.jsxs)("div",{className:"ws-example",children:[(0,Xe.jsxs)("div",{className:"ws-example-head",children:[(0,Xe.jsx)("span",{className:"ws-example-mark",children:cn.tiktok}),(0,Xe.jsxs)("span",{className:"ws-example-who",children:[(0,Xe.jsx)("span",{className:"ws-example-name",children:"TikTok"}),(0,Xe.jsx)("span",{className:"ws-example-rate",children:"$2 per 1k views"})]})]}),(0,Xe.jsxs)("div",{className:"ws-example-pills",children:[(0,Xe.jsx)("span",{className:"ws-example-pill",children:"$20 min"}),(0,Xe.jsx)("span",{className:"ws-example-pill",children:"$200 max"})]})]})}var N=z(F(),1);function Xu({count:e,value:t,onChange:n}){return e<2?null:(0,N.jsx)("div",{className:"ws-mode",children:(0,N.jsx)(Wu,{value:t,onChange:n,options:[{value:"all",label:"Match all"},{value:"any",label:"Match any"}]})})}function wp(e,t){let n={};for(let r of re)n[r.value]=e[r.value][t];return n}function xp(e,t,n){let r={};for(let l of re)r[l.value]={...e[l.value],[t]:n[l.value]};return r}function kp(e,t){let n={};for(let r of re)n[r.value]={...e[r.value],[t]:null};return n}
function Sp({value:e,onChange:t}){let n=(p,h)=>t({...e,[p]:h}),r=e.budgetMin!=null||e.budgetMax!=null,l=e.clippersMin!=null||e.clippersMax!=null,o=e.ageMinDays!=null||e.ageMaxDays!=null,i=e.platforms.length>0,u=re.some(p=>e.pricePer1kMin[p.value]!=null),s=re.some(p=>e.payoutViews[p.value].min!=null),c=re.some(p=>e.payoutViews[p.value].max!=null),m=e.viewsRemainingMin!=null;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:"ws-section",children:"Campaign filters"}),(0,N.jsx)(Ge,{label:"Paid out",value:(0,N.jsx)(vo,{on:e.paidOutPercentMax!=null,text:`${e.paidOutPercentMax}% max`}),onClear:e.paidOutPercentMax!=null?()=>n("paidOutPercentMax",null):void 0,children:(0,N.jsx)(Bu,{value:e.paidOutPercentMax,onChange:p=>n("paidOutPercentMax",p)})}),(0,N.jsx)(Ge,{label:"Platforms",note:"Keep only campaigns that accept the selected platform.",onClear:i?()=>n("platforms",[]):void 0,children:(0,N.jsx)(gp,{value:e.platforms,onChange:p=>n("platforms",p),options:re.map(p=>({...p,icon:cn[p.value]}))})}),(0,N.jsxs)(Ge,{label:"Price per 1k views",onClear:u?()=>n("pricePer1kMin",fo):void 0,children:[(0,N.jsx)(vp,{value:e.pricePer1kMin,onChange:p=>n("pricePer1kMin",p),options:re.map(p=>({...p,icon:cn[p.value]})),placeholder:"min",prefix:"$"}),(0,N.jsx)(Xu,{count:tp(e.pricePer1kMin),value:e.priceMode,onChange:p=>n("priceMode",p)})]}),(0,N.jsxs)(Ge,{label:"Minimum Payout Based on Views",afterLabel:(0,N.jsx)(Qu,{label:"How minimum payout based on views is worked out",title:"Minimum Payout Based on Views:",detail:"$20 \xF7 $2 \xD7 1K = 10K views",children:(0,N.jsx)(Ku,{})}),note:"The minimum number of views a clip must reach to qualify for earnings.",onClear:s?()=>n("payoutViews",kp(e.payoutViews,"min")):void 0,children:[(0,N.jsx)(Yu,{value:wp(e.payoutViews,"min"),onChange:p=>n("payoutViews",xp(e.payoutViews,"min",p)),options:re.map(p=>({...p,icon:cn[p.value]})),bounds:{...qd,format:yp},suffix:"max"}),(0,N.jsx)(Xu,{count:np(e.payoutViews),value:e.payoutMinMode,onChange:p=>n("payoutMinMode",p)})]}),(0,N.jsxs)(Ge,{label:"Maximum Payout Based on Views",afterLabel:(0,N.jsx)(Qu,{label:"How maximum payout based on views is worked out",title:"Maximum Payout Based on Views:",detail:"$200 \xF7 $2 \xD7 1K = 100k views",children:(0,N.jsx)(Ku,{})}),note:"The maximum number of views a clip can reach that still qualify for earnings.",onClear:c?()=>n("payoutViews",kp(e.payoutViews,"max")):void 0,children:[(0,N.jsx)(Yu,{value:wp(e.payoutViews,"max"),onChange:p=>n("payoutViews",xp(e.payoutViews,"max",p)),options:re.map(p=>({...p,icon:cn[p.value]})),bounds:{...ep,format:Gu},suffix:"min"}),(0,N.jsx)(Xu,{count:rp(e.payoutViews),value:e.payoutMaxMode,onChange:p=>n("payoutMaxMode",p)})]}),(0,N.jsx)(Ge,{label:"Budget total",onClear:r?()=>t({...e,budgetMin:null,budgetMax:null}):void 0,children:(0,N.jsxs)("div",{className:"ws-inputs ws-range",children:[(0,N.jsx)(wt,{value:e.budgetMin,onChange:p=>n("budgetMin",p),placeholder:"from",prefix:"$"}),(0,N.jsx)("span",{className:"ws-sep",children:"to"}),(0,N.jsx)(wt,{value:e.budgetMax,onChange:p=>n("budgetMax",p),placeholder:"to",prefix:"$"})]})}),(0,N.jsx)(Ge,{label:"Views remaining",note:"How many views the campaign can still pay for.",value:(0,N.jsx)(vo,{on:m,text:`${Gu(e.viewsRemainingMin)} min`}),onClear:m?()=>n("viewsRemainingMin",null):void 0,children:(0,N.jsx)("div",{className:"ws-inputs",children:(0,N.jsx)(wt,{value:e.viewsRemainingMin,onChange:p=>n("viewsRemainingMin",p),placeholder:"minimum"})})}),(0,N.jsx)(Ge,{label:"Clippers",note:"How many clippers have already joined.",onClear:l?()=>t({...e,clippersMin:null,clippersMax:null}):void 0,children:(0,N.jsxs)("div",{className:"ws-inputs ws-range",children:[(0,N.jsx)(wt,{value:e.clippersMin,onChange:p=>n("clippersMin",p),placeholder:"from"}),(0,N.jsx)("span",{className:"ws-sep",children:"to"}),(0,N.jsx)(wt,{value:e.clippersMax,onChange:p=>n("clippersMax",p),placeholder:"to"})]})}),(0,N.jsx)(Ge,{label:"Campaign age",note:"How many days the campaign has been running.",onClear:o?()=>t({...e,ageMinDays:null,ageMaxDays:null}):void 0,children:(0,N.jsxs)("div",{className:"ws-inputs ws-range",children:[(0,N.jsx)(wt,{value:e.ageMinDays,onChange:p=>n("ageMinDays",p),placeholder:"from"}),(0,N.jsx)("span",{className:"ws-sep",children:"to"}),(0,N.jsx)(wt,{value:e.ageMaxDays,onChange:p=>n("ageMaxDays",p),placeholder:"to"})]})}),(0,N.jsx)(Ge,{label:"Owner verified",children:(0,N.jsx)(Wu,{value:e.verified,onChange:p=>n("verified",p),options:[{value:"any",label:"Any"},{value:"yes",label:"Verified"},{value:"no",label:"Not verified"}]})})]})}var Ep="data:image/png;base64,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";var dn=z(F(),1);function _p({onClose:e}){return(0,dn.jsxs)("div",{className:"ws-header",children:[(0,dn.jsx)("img",{className:"ws-logo",src:Ep,alt:""}),(0,dn.jsx)("div",{className:"ws-brand",children:(0,dn.jsx)("b",{children:Hn})}),(0,dn.jsx)("button",{className:"ws-iconbtn",title:"Close",onClick:e,type:"button",children:"\xD7"})]})}var ot=z(F(),1);function Th(){return(0,ot.jsx)("div",{className:"ws-stars","aria-hidden":"true",children:"\u2605\u2605\u2605\u2605\u2605"})}function Cp({onClose:e}){return(0,ot.jsxs)("div",{className:"ws-review",children:[(0,ot.jsx)("button",{className:"ws-iconbtn ws-review-close",title:"Close",onClick:()=>e("closed"),type:"button",children:"\xD7"}),(0,ot.jsx)(Th,{}),(0,ot.jsxs)("div",{className:"ws-upgradetitle",children:["Enjoying ",Hn,"?"]}),(0,ot.jsx)("div",{className:"ws-upgradesub",children:"A quick review helps other creators find it. It takes 20 seconds."}),(0,ot.jsx)("button",{className:"ws-primary",type:"button",onClick:()=>{window.open(co(),"_blank","noopener,noreferrer"),e("rated")},children:"Rate on Chrome"}),(0,ot.jsx)("button",{className:"ws-upgradeclose",type:"button",onClick:()=>e("later"),children:"Maybe later"})]})}var Se=z(F(),1),Np=(e,t,n)=>`${e.toLocaleString()} ${e===1?t:n}`;function Rp({counters:e,filterOn:t,filtering:n,dirty:r,result:l,blameLine:o}){if(!t&&!n)return null;let i=n?e.matches:l?.matches??0,u=n?e.scanned:l?.scanned??0,s=[];return n&&e.checking>0&&s.push(`${e.checking} checking`),!n&&l&&l.unchecked>0&&s.push(`${l.unchecked} unchecked`),(0,Se.jsxs)("div",{className:"ws-status",children:[(0,Se.jsxs)("div",{className:"ws-counts",children:[(0,Se.jsx)("span",{className:"ws-count-matches",children:Np(i,"match","matches")}),(0,Se.jsx)("span",{className:"ws-count-sep",children:"\xB7"}),(0,Se.jsx)("span",{children:Np(u,"campaign","campaigns")}),s.map(c=>(0,Se.jsxs)("span",{className:"ws-count-extra",children:[(0,Se.jsx)("span",{className:"ws-count-sep",children:"\xB7"}),c]},c))]}),o?(0,Se.jsx)("div",{className:"ws-statusnote",children:o}):null,l?.stopped?(0,Se.jsx)("div",{className:"ws-statusnote",children:"Stopped \u2014 campaigns that were never checked are hidden."}):null,l?.partial?(0,Se.jsx)("div",{className:"ws-statusnote warn",children:"Could not load more campaigns \u2014 showing the first page only."}):null,l&&l.unchecked>0?(0,Se.jsxs)("div",{className:"ws-statusnote",children:[l.unchecked," could not be checked and are marked with a red ?."]}):null,r&&!n?(0,Se.jsx)("div",{className:"ws-statusnote",children:"Your settings changed \u2014 apply them to update the page."}):null]})}var j=z(F(),1),Mh=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function Lh(){let[e,t]=(0,P.useState)(()=>location.pathname.startsWith(ao));return(0,P.useEffect)(()=>{let n=window.setInterval(()=>{t(location.pathname.startsWith(ao))},1e3);return()=>clearInterval(n)},[]),e}function Pp({open:e,setOpen:t}){let[n,r]=(0,P.useState)(!1),[l,o]=(0,P.useState)({id:"free_user",email:"free@whophunter.com"}),[i,u]=(0,P.useState)(rt),[s,c]=(0,P.useState)(!1),[m,p]=(0,P.useState)(un),[h,y]=(0,P.useState)(null),[x,w]=(0,P.useState)(null),[b,d]=(0,P.useState)(!1),[a,f]=(0,P.useState)(!1),[g,k]=(0,P.useState)(null),[_,E]=(0,P.useState)(null),[C,Y]=(0,P.useState)(!1),L=Lh(),ge=(0,P.useRef)(0),Dr=(0,P.useRef)(rt),Bt=(0,P.useRef)(null),Zu=(0,P.useRef)(0),Bn=(0,P.useRef)(null),it=(0,P.useCallback)(()=>{Bt.current!=null&&clearTimeout(Bt.current),Bt.current=null,Y(!1)},[]),wo=(0,P.useCallback)(()=>{Bt.current!=null&&clearTimeout(Bt.current),Y(!0),Bt.current=window.setTimeout(()=>{Bt.current=null,Y(!1)},jd)},[]),be=(0,P.useCallback)(()=>{Bn.current!=null&&clearTimeout(Bn.current),Bn.current=null},[]);(0,P.useEffect)(()=>()=>{it(),be()},[it,be]),(0,P.useEffect)(()=>{(async()=>{let[I,Ee]=await Promise.all([Ht({t:"AUTH_GET"}),Gd()]);o(I?.user??null),u(Ee),r(!0)})()},[]),(0,P.useEffect)(()=>{l&&Ht({t:"ENT_GET"}).then(I=>w(I))},[l]),(0,P.useEffect)(()=>{let I=(Ee,xt)=>{xt==="local"&&Ee[jt.auth]&&!Ee[jt.auth]?.newValue&&o(null)};return chrome.storage.onChanged.addListener(I),()=>chrome.storage.onChanged.removeListener(I)},[]),(0,P.useEffect)(()=>po("panel",I=>{switch(I.t){case"COUNTERS":if(I.runId!==ge.current)break;p(I.counters);break;case"RUN_DONE":{if(I.runId!==ge.current)break;let Ee=I.runId,xt=I.result,Vr=()=>{Bn.current=null,Ee===ge.current&&(it(),y(xt),p(Vp=>({...Vp,running:!1,checking:0})),zp(xt,Dr.current))};be();let ts=Bd-(Date.now()-Zu.current);ts>0&&!xt.stopped&&!xt.gridReset?(wo(),Bn.current=window.setTimeout(Vr,ts)):Vr();break}case"FILTER_CLEARED":be(),it(),c(!1),E(null),y(null),p(un),k("Whop reloaded the list \u2014 filter again.");break;default:break}}),[it,be]);let zp=(0,P.useCallback)(async(I,Ee)=>{if(Ye("background",{t:"TRACK_RUN",filters:Ee,result:I}),I.matches<=0||I.gridReset)return;let{due:xt,runs:Vr}=await Zd();xt&&(f(!0),Ye("background",{t:"TRACK",name:"review_shown",props:{run_number:Vr}}))},[]),Op=(0,P.useCallback)(I=>{u(I),Kd(I),Hu(I)&&(E(null),c(Ee=>(Ee&&Ye("scanner",{t:"FILTER_CLEAR"}),!1)))},[]),Ip=(0,P.useCallback)(async()=>{await Ht({t:"AUTH_SIGN_OUT"}),be(),Ye("scanner",{t:"FILTER_CLEAR"}),o(null),p(un),y(null),c(!1),E(null),w(null),d(!1)},[be]),Ap=(0,P.useCallback)(async()=>{k(null);let I=await Ht({t:"ENT_CONSUME"});I&&w(I);let Ee=Math.max(Date.now(),ge.current+1);ge.current=Ee,be(),Zu.current=Date.now(),wo(),y(null),E(i),Dr.current=i,c(!0),p({...un,running:!0}),Ye("scanner",{t:"FILTER_START",filters:i,runId:Ee})},[i,wo,be]),Ju=(0,P.useCallback)(()=>{Ye("scanner",{t:"CANCEL"}),it()},[it]),Fp=(0,P.useCallback)(()=>{be(),it(),Ye("scanner",{t:"FILTER_CLEAR"}),E(null),p(un),y(null),c(!1),k(null)},[it,be]),bp=(0,P.useCallback)(I=>{f(!1),I==="rated"&&Jd(),Ye("background",{t:"TRACK",name:I==="rated"?"review_rated":I==="later"?"review_later":"review_closed",props:{}})},[]);if(!n)return(0,j.jsx)("div",{className:"ws-root ws-loading"});let Ur=m.running||C,qu=s&&_!=null&&!Mh(_,i),Dp=L?Hu(i)?"Add at least one setting first.":null:"Open the Content Rewards page first.",Up=h&&h.matches===0&&h.blame?`${Vu[h.blame.filter]} removed ${h.blame.removed.toLocaleString()} campaigns \u2014 try loosening it.`:null,es=b||a||Ur;return(0,j.jsxs)("div",{className:`ws-root${e?" open":""}`,children:[(0,j.jsx)(_p,{onClose:()=>t(!1)}),l?(0,j.jsxs)(j.Fragment,{children:[L?null:(0,j.jsxs)("div",{className:"ws-notice warn",children:[Hn," only scans the Content Rewards listing.",(0,j.jsx)("button",{className:"ws-noticebtn",type:"button",onClick:()=>{location.href=bd},children:"Open it"})]}),g?(0,j.jsx)("div",{className:"ws-notice warn",children:g}):null,(0,j.jsxs)("div",{className:"ws-bodywrap",children:[(0,j.jsx)("div",{className:`ws-body${es?" busy":""}`,"aria-hidden":es,children:(0,j.jsx)(Sp,{value:i,onChange:Op})}),b?(0,j.jsx)(ap,{ent:x,onClose:()=>d(!1)}):Ur?(0,j.jsxs)("div",{className:"ws-busy",children:[(0,j.jsx)("span",{className:"ws-spin big"}),(0,j.jsx)("div",{className:"ws-busytitle",children:"Filtering\u2026"}),(0,j.jsx)("div",{className:"ws-busysub",children:m.checking>0?`${m.checking} checking`:m.scanned>0?`${m.scanned} scanned`:"Loading campaigns\u2026"}),(0,j.jsx)("button",{className:"ws-upgradeclose",type:"button",onClick:Ju,children:"Stop"})]}):a?(0,j.jsx)(Cp,{onClose:bp}):null]}),(0,j.jsx)(Rp,{counters:m,filterOn:s,filtering:Ur,dirty:qu,result:h,blameLine:Up}),(0,j.jsx)(pp,{filterOn:s,filtering:Ur,dirty:qu,blockedReason:Dp,user:l,ent:x,onFilter:()=>void Ap(),onStop:Ju,onClear:Fp,onSignOut:()=>void Ip()})]}):(0,j.jsx)(mp,{onSignedIn:o})]})}var Tp=`\uFEFF:host {\r
  all: initial;\r
}\r
\r
*,\r
*::before,\r
*::after {\r
  box-sizing: border-box;\r
}\r
\r
/* \`all: initial\` on the host wipes the page's selection colours too, so without\r
   this, selected text in the panel looks exactly like unselected text */\r
::selection {\r
  background: rgba(109, 40, 217, 0.45);\r
  color: #fff;\r
}\r
\r
.ws-root {\r
  --bg: #090514;\r
  --surface: #0f0a21;\r
  --surface2: #171033;\r
  --line: #2d1f5e;\r
  --text: #ffffff;\r
  --muted: #94a3b8;\r
  --accent: #a78bfa;\r
  --gold: #6d28d9;\r
  /* text that sits on top of the accent */\r
  --on-accent: #ffffff;\r
  --danger: #ef4444;\r
  --good: #22c55e;\r
\r
  /* keeps the native dropdown list dark instead of white */\r
  color-scheme: dark;\r
  position: fixed;
  top: 14px;
  right: 14px;
  bottom: 14px;
  width: 410px;
  max-width: calc(100vw - 28px);
  display: flex;
  flex-direction: column;
  background: rgba(9, 5, 20, 0.9);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  color: var(--text);
  border: 1px solid rgba(139, 92, 246, 0.35);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.75), 0 0 32px rgba(109, 40, 217, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  font: 400 13px/1.45 'Plus Jakarta Sans', Inter, -apple-system, system-ui, sans-serif;
  transform: translateX(calc(100% + 24px));
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s ease;
  overscroll-behavior: contain;
  opacity: 0;
}

.ws-root.open {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}\r
\r
/* a translated element can still extend the page's scrollable area, so take it\r
   out of the layout entirely while closed */\r
.ws-root:not(.open) {\r
  visibility: hidden;\r
  pointer-events: none;\r
}\r
\r
/* ------------------------------------------------------------------ header */\r
\r
.ws-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 12px 14px;\r
  border-bottom: 1px solid var(--line);\r
  background: var(--surface);\r
  flex: none;\r
}\r
\r
.ws-logo {\r
  width: 26px;\r
  height: 26px;\r
  border-radius: 7px;\r
  display: block;\r
  object-fit: cover;\r
  flex: none;\r
}\r
\r
.ws-brand {\r
  display: flex;\r
  flex-direction: column;\r
  min-width: 0;\r
  flex: 1;\r
}\r
\r
.ws-brand b {\r
  font-size: 14px;\r
  font-weight: 700;\r
  letter-spacing: -0.01em;\r
}\r
\r
\r
.ws-iconbtn {\r
  all: unset;\r
  cursor: pointer;\r
  width: 26px;\r
  height: 26px;\r
  display: grid;\r
  place-items: center;\r
  border-radius: 6px;\r
  color: var(--muted);\r
  font-size: 16px;\r
  line-height: 1;\r
  flex: none;\r
}\r
\r
.ws-iconbtn:hover {\r
  color: var(--text);\r
  background: rgba(255, 255, 255, 0.07);\r
}\r
\r
/* -------------------------------------------------------------------- body */\r
\r
/* holds the body and the filtering overlay in the same box, so the overlay can\r
   sit on top without the panel's column layout shifting when it appears */\r
.ws-bodywrap {\r
  position: relative;\r
  flex: 1;\r
  min-height: 0;\r
  display: flex;\r
}\r
\r
.ws-body {\r
  flex: 1;\r
  overflow-y: auto;\r
  overflow-x: hidden;\r
  padding: 4px 0 12px;\r
  scrollbar-width: thin;\r
  scrollbar-color: var(--line) transparent;\r
}\r
\r
.ws-body::-webkit-scrollbar {\r
  width: 8px;\r
}\r
\r
.ws-body::-webkit-scrollbar-thumb {\r
  background: var(--line);\r
  border-radius: 4px;\r
}\r
\r
.ws-section {\r
  padding: 12px 14px 4px;\r
  font-size: 10px;\r
  letter-spacing: 0.08em;\r
  text-transform: uppercase;\r
  color: var(--muted);\r
  font-weight: 600;\r
}\r
\r
.ws-row {\r
  position: relative;\r
  padding: 11px 14px;\r
  border-bottom: 1px solid var(--line);\r
}\r
\r
.ws-row-head {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 10px;\r
}\r
\r
.ws-row-label {\r
  display: flex;\r
  align-items: center;\r
  gap: 7px;\r
  font-size: 12.5px;\r
  font-weight: 500;\r
}\r
\r
/* a row's explanation, matching the note under a toggle's label */\r
.ws-row-note {\r
  margin-top: 3px;\r
  font-size: 10.5px;\r
  line-height: 1.35;\r
  color: var(--muted);\r
}\r
\r
.ws-row-right {\r
  display: flex;\r
  align-items: center;\r
  gap: 7px;\r
  flex: none;\r
}\r
\r
.ws-row-value {\r
  font-size: 12px;\r
  color: var(--accent);\r
  font-weight: 600;\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
/* --------------------------------------------------------------- tooltip */\r
\r
/* anchored to the row, not the icon, so it can never be clipped by the panel */\r
.ws-tip {\r
  position: absolute;\r
  top: 32px;\r
  left: 14px;\r
  right: 14px;\r
  z-index: 5;\r
  padding: 7px 9px;\r
  border-radius: 8px;\r
  border: 1px solid var(--line);\r
  background: var(--surface2);\r
  color: var(--muted);\r
  font-size: 11px;\r
  line-height: 1.45;\r
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);\r
}\r
\r
.ws-clear {\r
  all: unset;\r
  cursor: pointer;\r
  font-size: 10px;\r
  color: var(--muted);\r
  border: 1px solid var(--line);\r
  border-radius: 5px;\r
  padding: 2px 6px;\r
}\r
\r
.ws-clear:hover {\r
  color: var(--text);\r
  border-color: var(--accent);\r
}\r
\r
/* ------------------------------------------------------------------ slider */\r
\r
.ws-slider {\r
  margin-top: 10px;\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
}\r
\r
.ws-slider input[type="range"] {\r
  -webkit-appearance: none;\r
  appearance: none;\r
  flex: 1;\r
  height: 4px;\r
  border-radius: 2px;\r
  background: var(--line);\r
  outline: none;\r
  cursor: pointer;\r
}\r
\r
.ws-slider input[type="range"]::-webkit-slider-thumb {\r
  -webkit-appearance: none;\r
  appearance: none;\r
  width: 14px;\r
  height: 14px;\r
  border-radius: 50%;\r
  background: var(--accent);\r
  border: 2px solid var(--bg);\r
  box-shadow: 0 0 0 1px var(--accent);\r
  cursor: pointer;\r
}\r
\r
.ws-slider.off input[type="range"]::-webkit-slider-thumb {\r
  background: var(--muted);\r
  box-shadow: 0 0 0 1px var(--muted);\r
}\r
\r
/* ------------------------------------------------------------------ inputs */\r
\r
.ws-inputs {\r
  margin-top: 10px;\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
.ws-input {\r
  flex: 1 1 0;\r
  width: 100%;\r
  min-width: 0;\r
  background: var(--surface2);\r
  border: 1px solid var(--line);\r
  border-radius: 7px;\r
  color: var(--text);\r
  padding: 7px 9px;\r
  font: inherit;\r
  font-size: 12px;\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.ws-input::placeholder {\r
  color: #5c5c66;\r
}\r
\r
.ws-input:focus {\r
  outline: none;\r
  border-color: var(--accent);\r
}\r
\r
.ws-input::-webkit-outer-spin-button,\r
.ws-input::-webkit-inner-spin-button {\r
  -webkit-appearance: none;\r
  margin: 0;\r
}\r
\r
.ws-sep {\r
  color: var(--muted);\r
  font-size: 11px;\r
  flex: none;\r
}\r
\r
/* a two-box range has to fit twice over, so both sides get tighter */\r
.ws-range {\r
  gap: 6px;\r
}\r
\r
.ws-range .ws-input {\r
  padding: 6px 7px;\r
  font-size: 11.5px;\r
}\r
\r
.ws-range .ws-prefix .ws-input {\r
  padding-left: 17px;\r
}\r
\r
.ws-range .ws-prefix span {\r
  left: 7px;\r
  font-size: 11.5px;\r
}\r
\r
.ws-prefix {\r
  position: relative;\r
  flex: 1 1 0;\r
  min-width: 0;\r
  display: flex;\r
  align-items: center;\r
}\r
\r
.ws-prefix span {\r
  position: absolute;\r
  left: 9px;\r
  color: var(--muted);\r
  font-size: 12px;\r
  pointer-events: none;\r
}\r
\r
.ws-prefix .ws-input {\r
  padding-left: 20px;\r
}\r
\r
/* ------------------------------------------------------------ check boxes */\r
\r
.ws-modes {\r
  display: inline-flex;\r
  gap: 4px;\r
  flex: none;\r
}\r
\r
.ws-check {\r
  all: unset;\r
  cursor: pointer;\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  font-size: 11px;\r
  color: var(--muted);\r
  padding: 1px 5px 1px 3px;\r
  border-radius: 5px;\r
}\r
\r
.ws-check:hover {\r
  color: var(--text);\r
}\r
\r
.ws-check .ws-box {\r
  width: 11px;\r
  height: 11px;\r
  border-radius: 3px;\r
  border: 1px solid var(--line);\r
  background: var(--surface2);\r
}\r
\r
.ws-check.on {\r
  color: var(--accent);\r
  font-weight: 700;\r
}\r
\r
.ws-check.on .ws-box {\r
  background: var(--accent);\r
  border-color: var(--accent);\r
  box-shadow: inset 0 0 0 2px var(--surface2);\r
}\r
\r
/* ------------------------------------------------------------ icon picker */\r
\r
.ws-icons {\r
  margin-top: 10px;\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 8px;\r
}\r
\r
/* modelled on Whop's own filter pill: a circle holding the brand mark */\r
.ws-icon {\r
  all: unset;\r
  cursor: pointer;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 30px;\r
  height: 30px;\r
  flex: none;\r
  border-radius: 50%;\r
  border: 1px solid var(--line);\r
  background: var(--surface2);\r
  color: var(--muted);\r
  transition:\r
    transform 150ms cubic-bezier(0.165, 0.84, 0.44, 1),\r
    background 150ms cubic-bezier(0.165, 0.84, 0.44, 1),\r
    color 150ms cubic-bezier(0.165, 0.84, 0.44, 1),\r
    border-color 150ms cubic-bezier(0.165, 0.84, 0.44, 1);\r
}\r
\r
 /* the marks ship at 20px, so they are sized down here rather than per icon */\r
.ws-icon svg {\r
  width: 16px;\r
  height: 16px;\r
}\r
\r
/* the X mark fills its whole box, while the others are circles with their own\r
   padding, so it needs trimming to look the same size */\r
.ws-icon-x svg {\r
  width: 13px;\r
  height: 13px;\r
}\r
\r
.ws-icon:hover {\r
  color: var(--text);\r
  border-color: var(--muted);\r
}\r
\r
.ws-icon:active {\r
  transform: scale(0.95);\r
}\r
\r
.ws-icon.on {\r
  background: var(--accent);\r
  border-color: var(--accent);\r
  color: var(--on-accent);\r
}\r
\r
/* -------------------------------------------------------- per-icon inputs */\r
\r
/* two platforms to a line, so five marks fill three rows */\r
.ws-iinputs {\r
  margin-top: 10px;\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
  gap: 8px 10px;\r
}\r
\r
.ws-iinput {\r
  display: flex;\r
  align-items: center;\r
  gap: 7px;\r
  min-width: 0;\r
}\r
\r
/* matched to the slider rows below, so both blocks read as one family */\r
.ws-iinput .ws-icon {\r
  width: 25px;\r
  height: 25px;\r
}\r
\r
.ws-iinput .ws-icon svg {\r
  width: 13px;\r
  height: 13px;\r
}\r
\r
.ws-iinput .ws-icon-x svg {\r
  width: 11px;\r
  height: 11px;\r
}\r
\r
.ws-iinput .ws-input {\r
  padding: 6px 7px;\r
  font-size: 11.5px;\r
}\r
\r
.ws-iinput .ws-prefix .ws-input {\r
  padding-left: 17px;\r
}\r
\r
.ws-iinput .ws-prefix span {\r
  left: 7px;\r
  font-size: 11.5px;\r
}\r
\r
/* ------------------------------------------------------- per-icon sliders */\r
\r
.ws-isliders {\r
  margin-top: 10px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 9px;\r
}\r
\r
.ws-islider {\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
/* the icon shares a line with both bars, and the read-out sits above them all */\r
.ws-islider-line {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
/* the two bars split what one used to take, so each stays a usable width */\r
.ws-islider-line .ws-slider {\r
  flex: 1 1 0;\r
  min-width: 0;\r
  margin-top: 0;\r
}\r
\r
/* smaller than the platform pills, so the stacked lines stay compact */\r
.ws-islider .ws-icon {\r
  width: 25px;\r
  height: 25px;\r
}\r
\r
.ws-islider .ws-icon svg {\r
  width: 13px;\r
  height: 13px;\r
}\r
\r
.ws-islider .ws-icon-x svg {\r
  width: 11px;\r
  height: 11px;\r
}\r
\r
/* one read-out per bar, sat directly above it. The height is fixed so an empty\r
   row takes exactly as much room as a filled one */\r
.ws-islider-vals {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  height: 14px;\r
  line-height: 14px;\r
}\r
\r
/* stands in for the brand mark, so the read-outs start where the bars do */\r
.ws-islider-gap {\r
  width: 25px;\r
  flex: none;\r
}\r
\r
/* the read-out for a row's single bar, which now spans the whole width.\r
   Right aligned: the value belongs at the end the slider travels toward, and a\r
   left-aligned number sat oddly far from the handle it describes. */\r
.ws-islider-full {\r
  flex: 1 1 0;\r
  min-width: 0;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-align: right;\r
}\r
\r
.ws-islider-full .ws-row-value {\r
  font-size: 11px;\r
}\r
\r
/* ------------------------------------------------------------- info icon */\r
\r
.ws-info {\r
  position: relative;\r
  display: inline-flex;\r
  align-items: center;\r
}\r
\r
/* gold rather than grey: this is the one control in a row that is not a filter,\r
   and a faint grey dot on a dark panel was not being noticed at all */\r
.ws-infobtn {\r
  all: unset;\r
  box-sizing: border-box;\r
  cursor: pointer;\r
  flex: none;\r
  width: 16px;\r
  height: 16px;\r
  border-radius: 999px;\r
  border: 1px solid var(--gold);\r
  background: rgba(109, 40, 217, 0.18);\r
  color: var(--gold);\r
  font-size: 10px;\r
  font-weight: 700;\r
  font-family: Georgia, 'Times New Roman', serif;\r
  line-height: 1;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.ws-infobtn:hover,\r
.ws-infobtn:focus-visible,\r
.ws-infobtn[aria-expanded='true'] {\r
  background: var(--gold);\r
  color: #1a1a1a;\r
}\r
\r
/* the panel is 400px wide and this sits inside the row, so it cannot be clipped\r
   horizontally; it opens downward and the body simply scrolls to it */\r
.ws-infopop {\r
  position: absolute;\r
  top: calc(100% + 7px);\r
  /* centred on the icon rather than hung off its left edge. The icons sit just\r
     past their row titles, so a 264px panel centred there also reads as centred\r
     within the 400px panel, and stays clear of both edges. */\r
  left: 50%;\r
  transform: translateX(-50%);\r
  z-index: 20;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 3px;\r
  width: 264px;\r
  padding: 11px;\r
  background: var(--surface2);\r
  border: 1px solid var(--line);\r
  border-radius: 12px;\r
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55);\r
  cursor: default;\r
}\r
\r
/* the card comes first and the explanation reads off it, so this just says\r
   what is being shown before showing it */\r
.ws-infolead {\r
  font-size: 11.5px;\r
  font-weight: 600;\r
  color: var(--muted);\r
  margin-bottom: 5px;\r
}\r
\r
.ws-infotitle {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: var(--text);\r
  margin-top: 10px;\r
}\r
\r
/* the arithmetic is the point of the panel, so it gets the accent */\r
.ws-infodetail {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: var(--gold);\r
}\r
\r
/* ------------------------------------------------- the worked payout example\r
   Mirrors the payout card on a Whop campaign page, rebuilt with our own markup\r
   because Whop's utility classes do not reach inside this shadow root. */\r
\r
.ws-example {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 12px;\r
  padding: 12px;\r
  border-radius: 14px;\r
  background: rgba(255, 255, 255, 0.07);\r
}\r
\r
.ws-example-head {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
}\r
\r
.ws-example-mark {\r
  flex: none;\r
  width: 34px;\r
  height: 34px;\r
  border-radius: 999px;\r
  background: rgba(255, 255, 255, 0.04);\r
  color: var(--text);\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.ws-example-mark svg {\r
  width: 17px;\r
  height: 17px;\r
}\r
\r
.ws-example-who {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
  min-width: 0;\r
}\r
\r
.ws-example-name {\r
  font-size: 12.5px;\r
  font-weight: 500;\r
  color: var(--text);\r
}\r
\r
.ws-example-rate {\r
  font-size: 12.5px;\r
  color: var(--muted);\r
}\r
\r
.ws-example-pills {\r
  display: flex;\r
  gap: 8px;\r
}\r
\r
.ws-example-pill {\r
  padding: 5px 10px;\r
  border-radius: 999px;\r
  background: rgba(255, 255, 255, 0.04);\r
  font-size: 12px;\r
  font-weight: 500;\r
  color: var(--text);\r
}\r
\r
/* --------------------------------------------------------------- segmented */\r
\r
.ws-seg {\r
  margin-top: 10px;\r
  display: flex;\r
  background: var(--surface2);\r
  border: 1px solid var(--line);\r
  border-radius: 8px;\r
  padding: 2px;\r
  gap: 2px;\r
}\r
\r
.ws-seg button {\r
  all: unset;\r
  cursor: pointer;\r
  flex: 1;\r
  text-align: center;\r
  font-size: 11.5px;\r
  padding: 5px 0;\r
  border-radius: 6px;\r
  color: var(--muted);\r
}\r
\r
.ws-seg button.on {\r
  background: var(--accent);\r
  color: var(--on-accent);\r
  font-weight: 700;\r
}\r
\r
/* ----------------------------------------------------------- row sub-options */\r
\r
.ws-toggles {\r
  margin-top: 12px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 10px;\r
}\r
\r
/* these only bite once a minimum is set, so they fade until one is */\r
.ws-toggles.dim {\r
  opacity: 0.55;\r
}\r
\r
.ws-toggle {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 12px;\r
}\r
\r
.ws-toggle-text {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
  min-width: 0;\r
}\r
\r
.ws-toggle-label {\r
  font-size: 12px;\r
  font-weight: 500;\r
  color: var(--text);\r
}\r
\r
.ws-toggle-note {\r
  font-size: 10.5px;\r
  line-height: 1.35;\r
  color: var(--muted);\r
}\r
\r
/* ------------------------------------------------------------------ switch */\r
\r
.ws-switch {\r
  all: unset;\r
  cursor: pointer;\r
  width: 34px;\r
  height: 19px;\r
  border-radius: 999px;\r
  background: var(--line);\r
  position: relative;\r
  flex: none;\r
  transition: background 0.15s ease;\r
}\r
\r
.ws-switch::after {\r
  content: "";\r
  position: absolute;\r
  top: 2px;\r
  left: 2px;\r
  width: 15px;\r
  height: 15px;\r
  border-radius: 50%;\r
  background: #6a6a76;\r
  transition: transform 0.15s ease, background 0.15s ease;\r
}\r
\r
.ws-switch.on {\r
  background: #6d28d9;\r
}\r
\r
.ws-switch.on::after {\r
  transform: translateX(15px);\r
  background: var(--accent);\r
}\r
\r
/* --------------------------------------------------------- filtering overlay */\r
\r
/* the settings underneath are still meaningful, so they are blurred rather than\r
   hidden: the user can see what is running without being able to change it\r
   halfway through */\r
.ws-body.busy {\r
  filter: blur(3px);\r
  opacity: 0.5;\r
  pointer-events: none;\r
  user-select: none;\r
}\r
\r
.ws-busy {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 2;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  padding: 0 24px;\r
  text-align: center;\r
  background: rgba(26, 26, 26, 0.45);\r
}\r
\r
.ws-busytitle {\r
  margin-top: 6px;\r
  font-size: 13.5px;\r
  font-weight: 600;\r
  color: var(--text);\r
}\r
\r
.ws-busysub {\r
  font-size: 11.5px;\r
  color: var(--muted);\r
}\r
\r
.ws-busystop {\r
  all: unset;\r
  cursor: pointer;\r
  margin-top: 12px;\r
  padding: 7px 22px;\r
  border-radius: 9px;\r
  font-size: 12px;\r
  font-weight: 600;\r
  border: 1px solid var(--line);\r
  background: var(--surface2);\r
  color: var(--text);\r
  transition: border-color 0.12s ease, color 0.12s ease;\r
}\r
\r
.ws-busystop:hover {\r
  border-color: var(--accent);\r
  color: var(--accent);\r
}\r
\r
/* ------------------------------------------------------------------ footer */\r
\r
.ws-footer {\r
  flex: none;\r
  border-top: 1px solid var(--line);\r
  background: var(--surface);\r
  padding: 10px 14px 10px;\r
}\r
\r
.ws-actions {\r
  position: relative;\r
  display: flex;\r
  gap: 8px;\r
}\r
\r
/* the reason the buttons are dead, shown only while the pointer is on them */\r
.ws-tip-actions {\r
  position: absolute;\r
  bottom: calc(100% + 8px);\r
  left: 0;\r
  right: 0;\r
  top: auto;\r
  text-align: center;\r
}\r
\r
.ws-btn {\r
  all: unset;\r
  cursor: pointer;\r
  flex: 1;\r
  text-align: center;\r
  padding: 9px 0;\r
  border-radius: 9px;\r
  font-size: 12.5px;\r
  font-weight: 600;\r
  border: 1px solid var(--line);\r
  background: var(--surface2);\r
  color: var(--text);\r
  transition: background 0.12s ease, border-color 0.12s ease;\r
}\r
\r
.ws-btn:hover:not(:disabled) {\r
  border-color: #3a3a42;\r
}\r
\r
.ws-btn.gold {\r
  background: var(--gold);\r
  border-color: var(--gold);\r
  color: var(--on-accent);\r
}\r
\r
.ws-btn.gold:hover:not(.off) {\r
  border-color: var(--gold);\r
  filter: brightness(1.06);\r
}\r
\r
.ws-btn.clear {\r
  background: transparent;\r
  border-color: var(--gold);\r
  color: var(--gold);\r
}\r
\r
.ws-btn.clear:hover:not(.off) {\r
  background: rgba(109, 40, 217, 0.18);\r
}\r
\r
.ws-btn.off {\r
  opacity: 0.4;\r
  cursor: not-allowed;\r
}\r
\r
/* ---------------------------------------------------------- account strip */\r
\r
.ws-account {\r
  display: flex;\r
  align-items: center;\r
  gap: 14px;\r
  margin-top: 10px;\r
  padding-top: 9px;\r
  border-top: 1px solid var(--line);\r
  font-size: 11px;\r
  color: var(--muted);\r
}\r
\r
.ws-acctlink {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 5px;\r
  font-size: 11px;\r
  font-weight: 500;\r
  color: var(--muted);\r
  text-decoration: none;\r
  cursor: pointer;\r
}\r
\r
.ws-acctlink:hover {\r
  color: var(--text);\r
}\r
\r
/* the star keeps its colour whatever the label does, so "Rate us" reads as the\r
   one invitation in a row of plain links */\r
.ws-acctlink svg {\r
  color: var(--gold);\r
  flex: none;\r
}\r
\r
/* pushes the avatar to the far right, links stay left */\r
.ws-acct {\r
  margin-left: auto;\r
}\r
\r
/* --------------------------------------------------------- account menu */\r
\r
.ws-acct {\r
  position: relative;\r
  flex: none;\r
}\r
\r
.ws-acctbtn {\r
  all: unset;\r
  cursor: pointer;\r
  display: inline-flex;\r
  border-radius: 999px;\r
}\r
\r
.ws-acctbtn:focus-visible .ws-avatar {\r
  outline: 2px solid var(--accent);\r
  outline-offset: 2px;\r
}\r
\r
.ws-avatar {\r
  box-sizing: border-box;\r
  width: 26px;\r
  height: 26px;\r
  border-radius: 999px;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  background: #e8792b;\r
  color: #fff;\r
  font-size: 10.5px;\r
  font-weight: 700;\r
  letter-spacing: 0.2px;\r
  line-height: 1;\r
}\r
\r
/* a real photo replaces the coloured ground rather than sitting on it */\r
.ws-avatar.photo {\r
  background: var(--surface2);\r
  overflow: hidden;\r
}\r
\r
.ws-avatar img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
  display: block;\r
}\r
\r
.ws-acctbtn:hover .ws-avatar {\r
  filter: brightness(1.08);\r
}\r
\r
/* opens upward and to the left: the avatar sits in the panel's bottom-right\r
   corner, so anchoring the menu's left edge would run it off the panel */\r
.ws-acctmenu {\r
  position: absolute;\r
  bottom: calc(100% + 8px);\r
  right: 0;\r
  z-index: 30;\r
  min-width: 170px;\r
  max-width: 260px;\r
  padding: 5px;\r
  background: var(--surface2);\r
  border: 1px solid var(--line);\r
  border-radius: 10px;\r
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55);\r
}\r
\r
.ws-acctemail {\r
  padding: 6px 8px 7px;\r
  margin-bottom: 4px;\r
  border-bottom: 1px solid var(--line);\r
  font-size: 11px;\r
  color: var(--muted);\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.ws-acctitem {\r
  all: unset;\r
  cursor: pointer;\r
  display: block;\r
  width: 100%;\r
  box-sizing: border-box;\r
  padding: 7px 8px;\r
  border-radius: 7px;\r
  font-size: 12px;\r
  color: var(--text);\r
}\r
\r
.ws-acctitem:hover,\r
.ws-acctitem:focus-visible {\r
  background: rgba(255, 255, 255, 0.07);\r
}\r
\r
/* ------------------------------------------------------------------ status */\r
\r
.ws-status {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  gap: 4px;\r
  padding: 8px 14px;\r
  border-top: 1px solid var(--line);\r
  background: var(--bg);\r
  font-size: 11px;\r
  color: var(--muted);\r
}\r
\r
/* the headline count, kept a step brighter than the notes under it */\r
.ws-counts {\r
  display: flex;\r
  align-items: baseline;\r
  flex-wrap: wrap;\r
  gap: 5px;\r
  color: var(--text);\r
  font-size: 12px;\r
  font-weight: 600;\r
}\r
\r
/* the number they came for is the only thing in gold */\r
.ws-count-matches {\r
  color: var(--gold);\r
}\r
\r
.ws-count-sep {\r
  color: var(--muted);\r
  font-weight: 400;\r
}\r
\r
.ws-count-extra {\r
  display: inline-flex;\r
  align-items: baseline;\r
  gap: 5px;\r
  color: var(--muted);\r
  font-weight: 400;\r
}\r
\r
.ws-statusnote {\r
  line-height: 1.4;\r
}\r
\r
.ws-statusnote.warn {\r
  color: var(--gold);\r
}\r
\r
/* match any / match all, shown only once a row has two platforms set */\r
.ws-mode {\r
  margin-top: 8px;\r
}\r
\r
.ws-mode .ws-seg {\r
  font-size: 10px;\r
}\r
\r
.ws-stat b {\r
  color: var(--text);\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.ws-stat.match b {\r
  color: var(--gold);\r
}\r
\r
.ws-linkbtn {\r
  all: unset;\r
  cursor: pointer;\r
  color: var(--accent);\r
  font-size: 11px;\r
  font-weight: 600;\r
  margin-left: auto;\r
}\r
\r
.ws-linkbtn:hover {\r
  text-decoration: underline;\r
}\r
\r
.ws-notice {\r
  margin: 8px 14px 0;\r
  padding: 8px 10px;\r
  border-radius: 8px;\r
  font-size: 11.5px;\r
  line-height: 1.4;\r
  border: 1px solid;\r
}\r
\r
.ws-noticebtn {\r
  all: unset;\r
  cursor: pointer;\r
  margin-left: 6px;\r
  font-weight: 700;\r
  text-decoration: underline;\r
  color: inherit;\r
}\r
\r
.ws-notice.warn {\r
  border-color: rgba(109, 40, 217, 0.5);\r
  background: rgba(109, 40, 217, 0.15);\r
  color: #f7ab6d;\r
}\r
\r
.ws-notice.error {\r
  border-color: rgba(239, 68, 68, 0.4);\r
  background: rgba(239, 68, 68, 0.1);\r
  color: #f79a9a;\r
}\r
\r
.ws-spin {\r
  display: inline-block;\r
  width: 9px;\r
  height: 9px;\r
  border-radius: 50%;\r
  border: 2px solid rgba(109, 40, 217, 0.35);\r
  border-top-color: var(--accent);\r
  animation: ws-spin 0.7s linear infinite;\r
}\r
\r
.ws-spin.big {\r
  width: 22px;\r
  height: 22px;\r
  border-width: 3px;\r
}\r
\r
@keyframes ws-spin {\r
  to {\r
    transform: rotate(360deg);\r
  }\r
}\r
\r
/* -------------------------------------------------------------------- auth */\r
\r
.ws-auth {\r
  flex: 1;\r
  display: flex;\r
  flex-direction: column;\r
  padding: 28px 24px;\r
  gap: 18px;\r
  overflow-y: auto;\r
}\r
\r
.ws-auth h2 {\r
  margin: 0 0 8px;\r
  font-size: 21px;\r
  font-weight: 700;\r
  letter-spacing: -0.01em;\r
}\r
\r
/* google, and any provider added later */\r
.ws-oauth {\r
  all: unset;\r
  box-sizing: border-box;\r
  cursor: pointer;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 9px;\r
  height: 44px;\r
  border-radius: 8px;\r
  border: 1px solid var(--line);\r
  background: transparent;\r
  color: var(--text);\r
  font-size: 13px;\r
  font-weight: 700;\r
}\r
\r
.ws-oauth:hover:not(:disabled) {\r
  background: rgba(255, 255, 255, 0.04);\r
  border-color: #3a3a42;\r
}\r
\r
.ws-oauth:disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
}\r
\r
/* the icon sits in its own cell, divided from the input by a hairline */\r
.ws-iconfield {\r
  display: flex;\r
  align-items: stretch;\r
  height: 44px;\r
  border-radius: 8px;\r
  border: 1px solid var(--line);\r
  overflow: hidden;\r
}\r
\r
.ws-iconfield:focus-within {\r
  border-color: var(--accent);\r
}\r
\r
.ws-iconcell {\r
  flex: none;\r
  width: 52px;\r
  display: grid;\r
  place-items: center;\r
  border-right: 1px solid var(--line);\r
  color: var(--muted);\r
}\r
\r
.ws-authinput {\r
  flex: 1;\r
  min-width: 0;\r
  background: transparent;\r
  border: none;\r
  outline: none;\r
  color: var(--text);\r
  font: inherit;\r
  font-size: 13px;\r
  padding: 0 12px;\r
}\r
\r
.ws-authinput::placeholder {\r
  color: #6c6c78;\r
}\r
\r
.ws-primary {\r
  all: unset;\r
  box-sizing: border-box;\r
  cursor: pointer;\r
  text-align: center;\r
  height: 44px;\r
  line-height: 44px;\r
  border-radius: 8px;\r
  background: var(--gold);\r
  color: #1a1503;\r
  font-weight: 700;\r
  font-size: 13px;\r
}\r
\r
.ws-primary:disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
}\r
\r
.ws-authlinks {\r
  display: flex;\r
  gap: 14px;\r
  font-size: 12px;\r
}\r
\r
.ws-authlinks button {\r
  all: unset;\r
  cursor: pointer;\r
  color: var(--gold);\r
  font-weight: 700;\r
  font-size: 12px;\r
}\r
\r
.ws-authlinks button:hover {\r
  text-decoration: underline;\r
}\r
\r
\r
\r
\r
/* -------------------------------------------------------------- plan strip */\r
\r
.ws-plan {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  margin-top: 10px;\r
  padding-top: 9px;\r
  border-top: 1px solid var(--line);\r
  font-size: 11px;\r
  color: var(--muted);\r
}\r
\r
.ws-planinfo {\r
  flex: 1;\r
  min-width: 0;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.ws-planinfo b {\r
  color: var(--text);\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.ws-planinfo.out {\r
  color: var(--gold);\r
}\r
\r
.ws-pill {\r
  flex: none;\r
  font-size: 10px;\r
  font-weight: 700;\r
  letter-spacing: 0.03em;\r
  text-transform: uppercase;\r
  color: var(--on-accent);\r
  background: var(--gold);\r
  border-radius: 5px;\r
  padding: 2px 6px;\r
}\r
\r
.ws-planbtn {\r
  all: unset;\r
  cursor: pointer;\r
  flex: none;\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: var(--muted);\r
  border: 1px solid var(--line);\r
  border-radius: 6px;\r
  padding: 3px 9px;\r
}\r
\r
.ws-planbtn:hover {\r
  color: var(--text);\r
  border-color: var(--accent);\r
}\r
\r
.ws-planbtn.gold {\r
  color: var(--gold);\r
  border-color: var(--gold);\r
}\r
\r
.ws-planbtn.gold:hover {\r
  background: rgba(109, 40, 217, 0.18);\r
  color: var(--gold);\r
}\r
\r
/* ----------------------------------------------------------- upgrade panel */\r
\r
/* sits in the same overlay slot as the filtering spinner, so the controls\r
   behind it are dimmed rather than removed */\r
.ws-upgrade,\r
.ws-review {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 2;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 10px;\r
  padding: 0 28px;\r
  text-align: center;\r
  background: rgba(26, 26, 26, 0.72);\r
}\r
\r
.ws-review-close {\r
  position: absolute;\r
  top: 10px;\r
  right: 10px;\r
}\r
\r
.ws-upgradetitle {\r
  font-size: 14px;\r
  font-weight: 700;\r
  color: var(--text);\r
}\r
\r
.ws-upgradesub {\r
  font-size: 12px;\r
  line-height: 1.5;\r
  color: var(--muted);\r
  margin-bottom: 2px;\r
}\r
\r
.ws-upgrade .ws-primary,\r
.ws-review .ws-primary {\r
  width: 100%;\r
  max-width: 220px;\r
}\r
\r
.ws-upgradeclose {\r
  all: unset;\r
  cursor: pointer;\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: var(--muted);\r
  padding: 4px 8px;\r
}\r
\r
.ws-upgradeclose:hover {\r
  color: var(--text);\r
}\r
\r
/* the stars are decoration, not a rating widget \u2014 nothing here is clickable */\r
.ws-stars {\r
  font-size: 17px;\r
  letter-spacing: 3px;\r
  color: var(--gold);\r
  margin-bottom: 2px;\r
}\r
`;var yo=z(F(),1);function Oh(){return window.top!==window?!1:location.hostname===Dd?!0:globalThis.__wsPreview===!0}function Mp(){let e=`${Qe}-panel-host`;if(document.getElementById(e))return;let t=document.createElement("div");t.id=e,t.style.position="fixed",t.style.top="0",t.style.right="0",t.style.width="0",t.style.height="0",t.style.zIndex=String(Ud);let n=t.attachShadow({mode:"open"}),r=document.createElement("style");r.textContent=Tp,n.appendChild(r);let l=document.createElement("div");n.appendChild(l),document.documentElement.appendChild(t),(0,Lp.createRoot)(l).render((0,yo.jsx)(jn.StrictMode,{children:(0,yo.jsx)(Ih,{})}))}function Ih(){let[e,t]=(0,jn.useState)(!1);return(0,jn.useEffect)(()=>po("panel",n=>{n.t==="TOGGLE_PANEL"&&t(r=>!r)}),[]),(0,yo.jsx)(Pp,{open:e,setOpen:t})}Oh()&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Mp,{once:!0}):Mp());})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
