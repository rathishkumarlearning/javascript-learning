(function(){const Y=document.createElement("link").relList;if(Y&&Y.supports&&Y.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))h(_);new MutationObserver(_=>{for(const V of _)if(V.type==="childList")for(const ie of V.addedNodes)ie.tagName==="LINK"&&ie.rel==="modulepreload"&&h(ie)}).observe(document,{childList:!0,subtree:!0});function k(_){const V={};return _.integrity&&(V.integrity=_.integrity),_.referrerPolicy&&(V.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?V.credentials="include":_.crossOrigin==="anonymous"?V.credentials="omit":V.credentials="same-origin",V}function h(_){if(_.ep)return;_.ep=!0;const V=k(_);fetch(_.href,V)}})();var ss={exports:{}},An={};var vd;function eg(){if(vd)return An;vd=1;var z=Symbol.for("react.transitional.element"),Y=Symbol.for("react.fragment");function k(h,_,V){var ie=null;if(V!==void 0&&(ie=""+V),_.key!==void 0&&(ie=""+_.key),"key"in _){V={};for(var Ae in _)Ae!=="key"&&(V[Ae]=_[Ae])}else V=_;return _=V.ref,{$$typeof:z,type:h,key:ie,ref:_!==void 0?_:null,props:V}}return An.Fragment=Y,An.jsx=k,An.jsxs=k,An}var bd;function tg(){return bd||(bd=1,ss.exports=eg()),ss.exports}var S=tg(),os={exports:{}},G={};var Sd;function lg(){if(Sd)return G;Sd=1;var z=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),me=Symbol.iterator;function Ge(r){return r===null||typeof r!="object"?null:(r=me&&r[me]||r["@@iterator"],typeof r=="function"?r:null)}var ke={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,R={};function Z(r,A,x){this.props=r,this.context=A,this.refs=R,this.updater=x||ke}Z.prototype.isReactComponent={},Z.prototype.setState=function(r,A){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,A,"setState")},Z.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function U(){}U.prototype=Z.prototype;function Te(r,A,x){this.props=r,this.context=A,this.refs=R,this.updater=x||ke}var Be=Te.prototype=new U;Be.constructor=Te,N(Be,Z.prototype),Be.isPureReactComponent=!0;var et=Array.isArray;function ae(){}var L={H:null,A:null,T:null,S:null},ze=Object.prototype.hasOwnProperty;function ye(r,A,x){var C=x.ref;return{$$typeof:z,type:r,key:A,ref:C!==void 0?C:null,props:x}}function Ot(r,A){return ye(r.type,A,r.props)}function ft(r){return typeof r=="object"&&r!==null&&r.$$typeof===z}function Xe(r){var A={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(x){return A[x]})}var zl=/\/+/g;function Ht(r,A){return typeof r=="object"&&r!==null&&r.key!=null?Xe(""+r.key):A.toString(36)}function At(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(ae,ae):(r.status="pending",r.then(function(A){r.status==="pending"&&(r.status="fulfilled",r.value=A)},function(A){r.status==="pending"&&(r.status="rejected",r.reason=A)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function v(r,A,x,C,X){var K=typeof r;(K==="undefined"||K==="boolean")&&(r=null);var ue=!1;if(r===null)ue=!0;else switch(K){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(r.$$typeof){case z:case Y:ue=!0;break;case P:return ue=r._init,v(ue(r._payload),A,x,C,X)}}if(ue)return X=X(r),ue=C===""?"."+Ht(r,0):C,et(X)?(x="",ue!=null&&(x=ue.replace(zl,"$&/")+"/"),v(X,A,x,"",function(Ca){return Ca})):X!=null&&(ft(X)&&(X=Ot(X,x+(X.key==null||r&&r.key===X.key?"":(""+X.key).replace(zl,"$&/")+"/")+ue)),A.push(X)),1;ue=0;var Je=C===""?".":C+":";if(et(r))for(var je=0;je<r.length;je++)C=r[je],K=Je+Ht(C,je),ue+=v(C,A,x,K,X);else if(je=Ge(r),typeof je=="function")for(r=je.call(r),je=0;!(C=r.next()).done;)C=C.value,K=Je+Ht(C,je++),ue+=v(C,A,x,K,X);else if(K==="object"){if(typeof r.then=="function")return v(At(r),A,x,C,X);throw A=String(r),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return ue}function j(r,A,x){if(r==null)return r;var C=[],X=0;return v(r,C,"","",function(K){return A.call(x,K,X++)}),C}function q(r){if(r._status===-1){var A=r._result;A=A(),A.then(function(x){(r._status===0||r._status===-1)&&(r._status=1,r._result=x)},function(x){(r._status===0||r._status===-1)&&(r._status=2,r._result=x)}),r._status===-1&&(r._status=0,r._result=A)}if(r._status===1)return r._result.default;throw r._result}var oe=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},he={map:j,forEach:function(r,A,x){j(r,function(){A.apply(this,arguments)},x)},count:function(r){var A=0;return j(r,function(){A++}),A},toArray:function(r){return j(r,function(A){return A})||[]},only:function(r){if(!ft(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return G.Activity=B,G.Children=he,G.Component=Z,G.Fragment=k,G.Profiler=_,G.PureComponent=Te,G.StrictMode=h,G.Suspense=D,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,G.__COMPILER_RUNTIME={__proto__:null,c:function(r){return L.H.useMemoCache(r)}},G.cache=function(r){return function(){return r.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(r,A,x){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var C=N({},r.props),X=r.key;if(A!=null)for(K in A.key!==void 0&&(X=""+A.key),A)!ze.call(A,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&A.ref===void 0||(C[K]=A[K]);var K=arguments.length-2;if(K===1)C.children=x;else if(1<K){for(var ue=Array(K),Je=0;Je<K;Je++)ue[Je]=arguments[Je+2];C.children=ue}return ye(r.type,X,C)},G.createContext=function(r){return r={$$typeof:ie,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:V,_context:r},r},G.createElement=function(r,A,x){var C,X={},K=null;if(A!=null)for(C in A.key!==void 0&&(K=""+A.key),A)ze.call(A,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(X[C]=A[C]);var ue=arguments.length-2;if(ue===1)X.children=x;else if(1<ue){for(var Je=Array(ue),je=0;je<ue;je++)Je[je]=arguments[je+2];X.children=Je}if(r&&r.defaultProps)for(C in ue=r.defaultProps,ue)X[C]===void 0&&(X[C]=ue[C]);return ye(r,K,X)},G.createRef=function(){return{current:null}},G.forwardRef=function(r){return{$$typeof:Ae,render:r}},G.isValidElement=ft,G.lazy=function(r){return{$$typeof:P,_payload:{_status:-1,_result:r},_init:q}},G.memo=function(r,A){return{$$typeof:T,type:r,compare:A===void 0?null:A}},G.startTransition=function(r){var A=L.T,x={};L.T=x;try{var C=r(),X=L.S;X!==null&&X(x,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(ae,oe)}catch(K){oe(K)}finally{A!==null&&x.types!==null&&(A.types=x.types),L.T=A}},G.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},G.use=function(r){return L.H.use(r)},G.useActionState=function(r,A,x){return L.H.useActionState(r,A,x)},G.useCallback=function(r,A){return L.H.useCallback(r,A)},G.useContext=function(r){return L.H.useContext(r)},G.useDebugValue=function(){},G.useDeferredValue=function(r,A){return L.H.useDeferredValue(r,A)},G.useEffect=function(r,A){return L.H.useEffect(r,A)},G.useEffectEvent=function(r){return L.H.useEffectEvent(r)},G.useId=function(){return L.H.useId()},G.useImperativeHandle=function(r,A,x){return L.H.useImperativeHandle(r,A,x)},G.useInsertionEffect=function(r,A){return L.H.useInsertionEffect(r,A)},G.useLayoutEffect=function(r,A){return L.H.useLayoutEffect(r,A)},G.useMemo=function(r,A){return L.H.useMemo(r,A)},G.useOptimistic=function(r,A){return L.H.useOptimistic(r,A)},G.useReducer=function(r,A,x){return L.H.useReducer(r,A,x)},G.useRef=function(r){return L.H.useRef(r)},G.useState=function(r){return L.H.useState(r)},G.useSyncExternalStore=function(r,A,x){return L.H.useSyncExternalStore(r,A,x)},G.useTransition=function(){return L.H.useTransition()},G.version="19.2.4",G}var Ed;function hs(){return Ed||(Ed=1,os.exports=lg()),os.exports}var Mt=hs(),rs={exports:{}},Tn={},fs={exports:{}},ds={};var Ad;function ag(){return Ad||(Ad=1,(function(z){function Y(v,j){var q=v.length;v.push(j);e:for(;0<q;){var oe=q-1>>>1,he=v[oe];if(0<_(he,j))v[oe]=j,v[q]=he,q=oe;else break e}}function k(v){return v.length===0?null:v[0]}function h(v){if(v.length===0)return null;var j=v[0],q=v.pop();if(q!==j){v[0]=q;e:for(var oe=0,he=v.length,r=he>>>1;oe<r;){var A=2*(oe+1)-1,x=v[A],C=A+1,X=v[C];if(0>_(x,q))C<he&&0>_(X,x)?(v[oe]=X,v[C]=q,oe=C):(v[oe]=x,v[A]=q,oe=A);else if(C<he&&0>_(X,q))v[oe]=X,v[C]=q,oe=C;else break e}}return j}function _(v,j){var q=v.sortIndex-j.sortIndex;return q!==0?q:v.id-j.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var V=performance;z.unstable_now=function(){return V.now()}}else{var ie=Date,Ae=ie.now();z.unstable_now=function(){return ie.now()-Ae}}var D=[],T=[],P=1,B=null,me=3,Ge=!1,ke=!1,N=!1,R=!1,Z=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,Te=typeof setImmediate<"u"?setImmediate:null;function Be(v){for(var j=k(T);j!==null;){if(j.callback===null)h(T);else if(j.startTime<=v)h(T),j.sortIndex=j.expirationTime,Y(D,j);else break;j=k(T)}}function et(v){if(N=!1,Be(v),!ke)if(k(D)!==null)ke=!0,ae||(ae=!0,Xe());else{var j=k(T);j!==null&&At(et,j.startTime-v)}}var ae=!1,L=-1,ze=5,ye=-1;function Ot(){return R?!0:!(z.unstable_now()-ye<ze)}function ft(){if(R=!1,ae){var v=z.unstable_now();ye=v;var j=!0;try{e:{ke=!1,N&&(N=!1,U(L),L=-1),Ge=!0;var q=me;try{t:{for(Be(v),B=k(D);B!==null&&!(B.expirationTime>v&&Ot());){var oe=B.callback;if(typeof oe=="function"){B.callback=null,me=B.priorityLevel;var he=oe(B.expirationTime<=v);if(v=z.unstable_now(),typeof he=="function"){B.callback=he,Be(v),j=!0;break t}B===k(D)&&h(D),Be(v)}else h(D);B=k(D)}if(B!==null)j=!0;else{var r=k(T);r!==null&&At(et,r.startTime-v),j=!1}}break e}finally{B=null,me=q,Ge=!1}j=void 0}}finally{j?Xe():ae=!1}}}var Xe;if(typeof Te=="function")Xe=function(){Te(ft)};else if(typeof MessageChannel<"u"){var zl=new MessageChannel,Ht=zl.port2;zl.port1.onmessage=ft,Xe=function(){Ht.postMessage(null)}}else Xe=function(){Z(ft,0)};function At(v,j){L=Z(function(){v(z.unstable_now())},j)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(v){v.callback=null},z.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<v?Math.floor(1e3/v):5},z.unstable_getCurrentPriorityLevel=function(){return me},z.unstable_next=function(v){switch(me){case 1:case 2:case 3:var j=3;break;default:j=me}var q=me;me=j;try{return v()}finally{me=q}},z.unstable_requestPaint=function(){R=!0},z.unstable_runWithPriority=function(v,j){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var q=me;me=v;try{return j()}finally{me=q}},z.unstable_scheduleCallback=function(v,j,q){var oe=z.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,v){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=q+he,v={id:P++,callback:j,priorityLevel:v,startTime:q,expirationTime:he,sortIndex:-1},q>oe?(v.sortIndex=q,Y(T,v),k(D)===null&&v===k(T)&&(N?(U(L),L=-1):N=!0,At(et,q-oe))):(v.sortIndex=he,Y(D,v),ke||Ge||(ke=!0,ae||(ae=!0,Xe()))),v},z.unstable_shouldYield=Ot,z.unstable_wrapCallback=function(v){var j=me;return function(){var q=me;me=j;try{return v.apply(this,arguments)}finally{me=q}}}})(ds)),ds}var Td;function ng(){return Td||(Td=1,fs.exports=ag()),fs.exports}var ms={exports:{}},Qe={};var zd;function ig(){if(zd)return Qe;zd=1;var z=hs();function Y(D){var T="https://react.dev/errors/"+D;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)T+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+D+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function k(){}var h={d:{f:k,r:function(){throw Error(Y(522))},D:k,C:k,L:k,m:k,X:k,S:k,M:k},p:0,findDOMNode:null},_=Symbol.for("react.portal");function V(D,T,P){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:B==null?null:""+B,children:D,containerInfo:T,implementation:P}}var ie=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ae(D,T){if(D==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Qe.createPortal=function(D,T){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(Y(299));return V(D,T,null,P)},Qe.flushSync=function(D){var T=ie.T,P=h.p;try{if(ie.T=null,h.p=2,D)return D()}finally{ie.T=T,h.p=P,h.d.f()}},Qe.preconnect=function(D,T){typeof D=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,h.d.C(D,T))},Qe.prefetchDNS=function(D){typeof D=="string"&&h.d.D(D)},Qe.preinit=function(D,T){if(typeof D=="string"&&T&&typeof T.as=="string"){var P=T.as,B=Ae(P,T.crossOrigin),me=typeof T.integrity=="string"?T.integrity:void 0,Ge=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;P==="style"?h.d.S(D,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:B,integrity:me,fetchPriority:Ge}):P==="script"&&h.d.X(D,{crossOrigin:B,integrity:me,fetchPriority:Ge,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Qe.preinitModule=function(D,T){if(typeof D=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var P=Ae(T.as,T.crossOrigin);h.d.M(D,{crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&h.d.M(D)},Qe.preload=function(D,T){if(typeof D=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var P=T.as,B=Ae(P,T.crossOrigin);h.d.L(D,P,{crossOrigin:B,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Qe.preloadModule=function(D,T){if(typeof D=="string")if(T){var P=Ae(T.as,T.crossOrigin);h.d.m(D,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else h.d.m(D)},Qe.requestFormReset=function(D){h.d.r(D)},Qe.unstable_batchedUpdates=function(D,T){return D(T)},Qe.useFormState=function(D,T,P){return ie.H.useFormState(D,T,P)},Qe.useFormStatus=function(){return ie.H.useHostTransitionStatus()},Qe.version="19.2.4",Qe}var jd;function ug(){if(jd)return ms.exports;jd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(Y){console.error(Y)}}return z(),ms.exports=ig(),ms.exports}var xd;function cg(){if(xd)return Tn;xd=1;var z=ng(),Y=hs(),k=ug();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function V(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ie(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ae(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(V(e)!==e)throw Error(h(188))}function T(e){var t=e.alternate;if(!t){if(t=V(e),t===null)throw Error(h(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return D(n),e;if(i===a)return D(n),t;i=i.sibling}throw Error(h(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(h(189))}}if(l.alternate!==a)throw Error(h(190))}if(l.tag!==3)throw Error(h(188));return l.stateNode.current===l?e:t}function P(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=P(e),t!==null)return t;e=e.sibling}return null}var B=Object.assign,me=Symbol.for("react.element"),Ge=Symbol.for("react.transitional.element"),ke=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),Te=Symbol.for("react.context"),Be=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),Ot=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var zl=Symbol.for("react.client.reference");function Ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case Z:return"Profiler";case R:return"StrictMode";case et:return"Suspense";case ae:return"SuspenseList";case ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ke:return"Portal";case Te:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case Be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:Ht(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return Ht(e(t))}catch{}}return null}var At=Array.isArray,v=Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},oe=[],he=-1;function r(e){return{current:e}}function A(e){0>he||(e.current=oe[he],oe[he]=null,he--)}function x(e,t){he++,oe[he]=e.current,e.current=t}var C=r(null),X=r(null),K=r(null),ue=r(null);function Je(e,t){switch(x(K,t),x(X,e),x(C,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gf(t),e=kf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(C),x(C,e)}function je(){A(C),A(X),A(K)}function Ca(e){e.memoizedState!==null&&x(ue,e);var t=C.current,l=kf(t,e.type);t!==l&&(x(X,e),x(C,l))}function jn(e){X.current===e&&(A(C),A(X)),ue.current===e&&(A(ue),vn._currentValue=q)}var Qi,gs;function jl(e){if(Qi===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Qi=t&&t[1]||"",gs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qi+e+gs}var Ji=!1;function Vi(e,t){if(!e||Ji)return"";Ji=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(y){var g=y}Reflect.construct(e,[],E)}else{try{E.call()}catch(y){g=y}e.call(E.prototype)}}else{try{throw Error()}catch(y){g=y}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),m=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===m.length)for(a=s.length-1,n=m.length-1;1<=a&&0<=n&&s[a]!==m[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==m[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==m[n]){var p=`
`+s[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=n);break}}}finally{Ji=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?jl(l):""}function Nd(e,t){switch(e.tag){case 26:case 27:case 5:return jl(e.type);case 16:return jl("Lazy");case 13:return e.child!==t&&t!==null?jl("Suspense Fallback"):jl("Suspense");case 19:return jl("SuspenseList");case 0:case 15:return Vi(e.type,!1);case 11:return Vi(e.type.render,!1);case 1:return Vi(e.type,!0);case 31:return jl("Activity");default:return""}}function ys(e){try{var t="",l=null;do t+=Nd(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Zi=Object.prototype.hasOwnProperty,Ki=z.unstable_scheduleCallback,Wi=z.unstable_cancelCallback,_d=z.unstable_shouldYield,Ud=z.unstable_requestPaint,tt=z.unstable_now,Hd=z.unstable_getCurrentPriorityLevel,ps=z.unstable_ImmediatePriority,vs=z.unstable_UserBlockingPriority,xn=z.unstable_NormalPriority,Bd=z.unstable_LowPriority,bs=z.unstable_IdlePriority,Rd=z.log,wd=z.unstable_setDisableYieldValue,Oa=null,lt=null;function Pt(e){if(typeof Rd=="function"&&wd(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Oa,e)}catch{}}var at=Math.clz32?Math.clz32:Yd,Ld=Math.log,qd=Math.LN2;function Yd(e){return e>>>=0,e===0?32:31-(Ld(e)/qd|0)|0}var Mn=256,Cn=262144,On=4194304;function xl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=xl(a):(u&=c,u!==0?n=xl(u):l||(l=c&~e,l!==0&&(n=xl(l))))):(c=a&~i,c!==0?n=xl(c):u!==0?n=xl(u):l||(l=a&~e,l!==0&&(n=xl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Da(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ss(){var e=On;return On<<=1,(On&62914560)===0&&(On=4194304),e}function $i(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kd(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,m=e.hiddenUpdates;for(l=u&~l;0<l;){var p=31-at(l),E=1<<p;c[p]=0,s[p]=-1;var g=m[p];if(g!==null)for(m[p]=null,p=0;p<g.length;p++){var y=g[p];y!==null&&(y.lane&=-536870913)}l&=~E}a!==0&&Es(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Es(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-at(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function As(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-at(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Ts(e,t){var l=t&-t;return l=(l&42)!==0?1:Fi(l),(l&(e.suspendedLanes|t))!==0?0:l}function Fi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ii(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zs(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:fd(e.type))}function js(e,t){var l=j.p;try{return j.p=e,t()}finally{j.p=l}}var el=Math.random().toString(36).slice(2),Re="__reactFiber$"+el,Ze="__reactProps$"+el,Ql="__reactContainer$"+el,Pi="__reactEvents$"+el,Xd="__reactListeners$"+el,Qd="__reactHandles$"+el,xs="__reactResources$"+el,_a="__reactMarker$"+el;function eu(e){delete e[Re],delete e[Ze],delete e[Pi],delete e[Xd],delete e[Qd]}function Jl(e){var t=e[Re];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ql]||l[Re]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Wf(e);e!==null;){if(l=e[Re])return l;e=Wf(e)}return t}e=l,l=e.parentNode}return null}function Vl(e){if(e=e[Re]||e[Ql]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ua(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function Zl(e){var t=e[xs];return t||(t=e[xs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[_a]=!0}var Ms=new Set,Cs={};function Ml(e,t){Kl(e,t),Kl(e+"Capture",t)}function Kl(e,t){for(Cs[e]=t,e=0;e<t.length;e++)Ms.add(t[e])}var Jd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Os={},Ds={};function Vd(e){return Zi.call(Ds,e)?!0:Zi.call(Os,e)?!1:Jd.test(e)?Ds[e]=!0:(Os[e]=!0,!1)}function Nn(e,t,l){if(Vd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function _n(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Bt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ns(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tu(e){if(!e._valueTracker){var t=Ns(e)?"checked":"value";e._valueTracker=Zd(e,t,""+e[t])}}function _s(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Ns(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Un(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kd=/[\n"\\]/g;function mt(e){return e.replace(Kd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function lu(e,t,l,a,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?au(e,u,dt(t)):l!=null?au(e,u,dt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+dt(c):e.removeAttribute("name")}function Us(e,t,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){tu(e);return}l=l!=null?""+dt(l):"",t=t!=null?""+dt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),tu(e)}function au(e,t,l){t==="number"&&Un(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Wl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+dt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Hs(e,t,l){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+dt(l):""}function Bs(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(h(92));if(At(a)){if(1<a.length)throw Error(h(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=dt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),tu(e)}function $l(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Wd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rs(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Wd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function ws(e,t,l){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Rs(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Rs(e,i,t[i])}function nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $d=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hn(e){return Fd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rt(){}var iu=null;function uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,Il=null;function Ls(e){var t=Vl(e);if(t&&(e=t.stateNode)){var l=e[Ze]||null;e:switch(e=t.stateNode,t.type){case"input":if(lu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Ze]||null;if(!n)throw Error(h(90));lu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&_s(a)}break e;case"textarea":Hs(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Wl(e,!!l.multiple,t,!1)}}}var cu=!1;function qs(e,t,l){if(cu)return e(t,l);cu=!0;try{var a=e(t);return a}finally{if(cu=!1,(Fl!==null||Il!==null)&&(Ei(),Fl&&(t=Fl,e=Il,Il=Fl=null,Ls(t),e)))for(t=0;t<e.length;t++)Ls(e[t])}}function Ha(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Ze]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(h(231,t,typeof l));return l}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(wt)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){su=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{su=!1}var tl=null,ou=null,Bn=null;function Ys(){if(Bn)return Bn;var e,t=ou,l=t.length,a,n="value"in tl?tl.value:tl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return Bn=n.slice(e,1<a?1-a:void 0)}function Rn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Gs(){return!1}function Ke(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wn:Gs,this.isPropagationStopped=Gs,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Cl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Ke(Cl),Ra=B({},Cl,{view:0,detail:0}),Id=Ke(Ra),ru,fu,wa,qn=B({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wa&&(wa&&e.type==="mousemove"?(ru=e.screenX-wa.screenX,fu=e.screenY-wa.screenY):fu=ru=0,wa=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:fu}}),ks=Ke(qn),Pd=B({},qn,{dataTransfer:0}),em=Ke(Pd),tm=B({},Ra,{relatedTarget:0}),du=Ke(tm),lm=B({},Cl,{animationName:0,elapsedTime:0,pseudoElement:0}),am=Ke(lm),nm=B({},Cl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),im=Ke(nm),um=B({},Cl,{data:0}),Xs=Ke(um),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=om[e])?!!t[e]:!1}function mu(){return rm}var fm=B({},Ra,{key:function(e){if(e.key){var t=cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?Rn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dm=Ke(fm),mm=B({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qs=Ke(mm),hm=B({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),gm=Ke(hm),ym=B({},Cl,{propertyName:0,elapsedTime:0,pseudoElement:0}),pm=Ke(ym),vm=B({},qn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=Ke(vm),Sm=B({},Cl,{newState:0,oldState:0}),Em=Ke(Sm),Am=[9,13,27,32],hu=wt&&"CompositionEvent"in window,La=null;wt&&"documentMode"in document&&(La=document.documentMode);var Tm=wt&&"TextEvent"in window&&!La,Js=wt&&(!hu||La&&8<La&&11>=La),Vs=" ",Zs=!1;function Ks(e,t){switch(e){case"keyup":return Am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pl=!1;function zm(e,t){switch(e){case"compositionend":return Ws(t);case"keypress":return t.which!==32?null:(Zs=!0,Vs);case"textInput":return e=t.data,e===Vs&&Zs?null:e;default:return null}}function jm(e,t){if(Pl)return e==="compositionend"||!hu&&Ks(e,t)?(e=Ys(),Bn=ou=tl=null,Pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Js&&t.locale!=="ko"?null:t.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xm[e.type]:t==="textarea"}function Fs(e,t,l,a){Fl?Il?Il.push(a):Il=[a]:Fl=a,t=Ci(t,"onChange"),0<t.length&&(l=new Ln("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var qa=null,Ya=null;function Mm(e){Bf(e,0)}function Yn(e){var t=Ua(e);if(_s(t))return e}function Is(e,t){if(e==="change")return t}var Ps=!1;if(wt){var gu;if(wt){var yu="oninput"in document;if(!yu){var eo=document.createElement("div");eo.setAttribute("oninput","return;"),yu=typeof eo.oninput=="function"}gu=yu}else gu=!1;Ps=gu&&(!document.documentMode||9<document.documentMode)}function to(){qa&&(qa.detachEvent("onpropertychange",lo),Ya=qa=null)}function lo(e){if(e.propertyName==="value"&&Yn(Ya)){var t=[];Fs(t,Ya,e,uu(e)),qs(Mm,t)}}function Cm(e,t,l){e==="focusin"?(to(),qa=t,Ya=l,qa.attachEvent("onpropertychange",lo)):e==="focusout"&&to()}function Om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yn(Ya)}function Dm(e,t){if(e==="click")return Yn(t)}function Nm(e,t){if(e==="input"||e==="change")return Yn(t)}function _m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:_m;function Ga(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Zi.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function ao(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function no(e,t){var l=ao(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ao(l)}}function io(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?io(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Un(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Un(e.document)}return t}function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Um=wt&&"documentMode"in document&&11>=document.documentMode,ea=null,vu=null,ka=null,bu=!1;function co(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bu||ea==null||ea!==Un(a)||(a=ea,"selectionStart"in a&&pu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ka&&Ga(ka,a)||(ka=a,a=Ci(vu,"onSelect"),0<a.length&&(t=new Ln("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ea)))}function Ol(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ta={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionrun:Ol("Transition","TransitionRun"),transitionstart:Ol("Transition","TransitionStart"),transitioncancel:Ol("Transition","TransitionCancel"),transitionend:Ol("Transition","TransitionEnd")},Su={},so={};wt&&(so=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Dl(e){if(Su[e])return Su[e];if(!ta[e])return e;var t=ta[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in so)return Su[e]=t[l];return e}var oo=Dl("animationend"),ro=Dl("animationiteration"),fo=Dl("animationstart"),Hm=Dl("transitionrun"),Bm=Dl("transitionstart"),Rm=Dl("transitioncancel"),mo=Dl("transitionend"),ho=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Tt(e,t){ho.set(e,t),Ml(t,[e])}var Gn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ht=[],la=0,Au=0;function kn(){for(var e=la,t=Au=la=0;t<e;){var l=ht[t];ht[t++]=null;var a=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&go(l,n,i)}}function Xn(e,t,l,a){ht[la++]=e,ht[la++]=t,ht[la++]=l,ht[la++]=a,Au|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Tu(e,t,l,a){return Xn(e,t,l,a),Qn(e)}function Nl(e,t){return Xn(e,null,null,t),Qn(e)}function go(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-at(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Qn(e){if(50<fn)throw fn=0,_c=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var aa={};function wm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,l,a){return new wm(e,t,l,a)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var l=e.alternate;return l===null?(l=it(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function yo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Jn(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")zu(e)&&(u=1);else if(typeof e=="string")u=kh(e,l,C.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ye:return e=it(31,l,t,n),e.elementType=ye,e.lanes=i,e;case N:return _l(l.children,n,i,t);case R:u=8,n|=24;break;case Z:return e=it(12,l,t,n|2),e.elementType=Z,e.lanes=i,e;case et:return e=it(13,l,t,n),e.elementType=et,e.lanes=i,e;case ae:return e=it(19,l,t,n),e.elementType=ae,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:u=10;break e;case U:u=9;break e;case Be:u=11;break e;case L:u=14;break e;case ze:u=16,a=null;break e}u=29,l=Error(h(130,e===null?"null":typeof e,"")),a=null}return t=it(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function _l(e,t,l,a){return e=it(7,e,a,t),e.lanes=l,e}function ju(e,t,l){return e=it(6,e,null,t),e.lanes=l,e}function po(e){var t=it(18,null,null,0);return t.stateNode=e,t}function xu(e,t,l){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vo=new WeakMap;function gt(e,t){if(typeof e=="object"&&e!==null){var l=vo.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ys(t)},vo.set(e,t),t)}return{value:e,source:t,stack:ys(t)}}var na=[],ia=0,Vn=null,Xa=0,yt=[],pt=0,ll=null,Dt=1,Nt="";function qt(e,t){na[ia++]=Xa,na[ia++]=Vn,Vn=e,Xa=t}function bo(e,t,l){yt[pt++]=Dt,yt[pt++]=Nt,yt[pt++]=ll,ll=e;var a=Dt;e=Nt;var n=32-at(a)-1;a&=~(1<<n),l+=1;var i=32-at(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Dt=1<<32-at(t)+n|l<<n|a,Nt=i+e}else Dt=1<<i|l<<n|a,Nt=e}function Mu(e){e.return!==null&&(qt(e,1),bo(e,1,0))}function Cu(e){for(;e===Vn;)Vn=na[--ia],na[ia]=null,Xa=na[--ia],na[ia]=null;for(;e===ll;)ll=yt[--pt],yt[pt]=null,Nt=yt[--pt],yt[pt]=null,Dt=yt[--pt],yt[pt]=null}function So(e,t){yt[pt++]=Dt,yt[pt++]=Nt,yt[pt++]=ll,Dt=t.id,Nt=t.overflow,ll=e}var we=null,pe=null,ee=!1,al=null,vt=!1,Ou=Error(h(519));function nl(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qa(gt(t,e)),Ou}function Eo(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Re]=e,t[Ze]=a,l){case"dialog":$("cancel",t),$("close",t);break;case"iframe":case"object":case"embed":$("load",t);break;case"video":case"audio":for(l=0;l<mn.length;l++)$(mn[l],t);break;case"source":$("error",t);break;case"img":case"image":case"link":$("error",t),$("load",t);break;case"details":$("toggle",t);break;case"input":$("invalid",t),Us(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":$("invalid",t);break;case"textarea":$("invalid",t),Bs(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||qf(t.textContent,l)?(a.popover!=null&&($("beforetoggle",t),$("toggle",t)),a.onScroll!=null&&$("scroll",t),a.onScrollEnd!=null&&$("scrollend",t),a.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||nl(e,!0)}function Ao(e){for(we=e.return;we;)switch(we.tag){case 5:case 31:case 13:vt=!1;return;case 27:case 3:vt=!0;return;default:we=we.return}}function ua(e){if(e!==we)return!1;if(!ee)return Ao(e),ee=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Zc(e.type,e.memoizedProps)),l=!l),l&&pe&&nl(e),Ao(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));pe=Kf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));pe=Kf(e)}else t===27?(t=pe,vl(e.type)?(e=Ic,Ic=null,pe=e):pe=t):pe=we?St(e.stateNode.nextSibling):null;return!0}function Ul(){pe=we=null,ee=!1}function Du(){var e=al;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),al=null),e}function Qa(e){al===null?al=[e]:al.push(e)}var Nu=r(null),Hl=null,Yt=null;function il(e,t,l){x(Nu,t._currentValue),t._currentValue=l}function Gt(e){e._currentValue=Nu.current,A(Nu)}function _u(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Uu(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var s=0;s<t.length;s++)if(c.context===t[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),_u(i.return,l,e),a||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(h(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),_u(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ca(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var c=n.type;nt(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===ue.current){if(u=n.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(vn):e=[vn])}n=n.return}e!==null&&Uu(t,e,l,a),t.flags|=262144}function Zn(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bl(e){Hl=e,Yt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Le(e){return To(Hl,e)}function Kn(e,t){return Hl===null&&Bl(e),To(e,t)}function To(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Yt===null){if(e===null)throw Error(h(308));Yt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yt=Yt.next=t;return l}var Lm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},qm=z.unstable_scheduleCallback,Ym=z.unstable_NormalPriority,Ce={$$typeof:Te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Lm,data:new Map,refCount:0}}function Ja(e){e.refCount--,e.refCount===0&&qm(Ym,function(){e.controller.abort()})}var Va=null,Bu=0,sa=0,oa=null;function Gm(e,t){if(Va===null){var l=Va=[];Bu=0,sa=Lc(),oa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Bu++,t.then(zo,zo),t}function zo(){if(--Bu===0&&Va!==null){oa!==null&&(oa.status="fulfilled");var e=Va;Va=null,sa=0,oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function km(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var jo=v.S;v.S=function(e,t){of=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gm(e,t),jo!==null&&jo(e,t)};var Rl=r(null);function Ru(){var e=Rl.current;return e!==null?e:ge.pooledCache}function Wn(e,t){t===null?x(Rl,Rl.current):x(Rl,t.pool)}function xo(){var e=Ru();return e===null?null:{parent:Ce._currentValue,pool:e}}var ra=Error(h(460)),wu=Error(h(474)),$n=Error(h(542)),Fn={then:function(){}};function Mo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Co(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Rt,Rt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Do(e),e;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Do(e),e}throw Ll=t,ra}}function wl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Ll=l,ra):l}}var Ll=null;function Oo(){if(Ll===null)throw Error(h(459));var e=Ll;return Ll=null,e}function Do(e){if(e===ra||e===$n)throw Error(h(483))}var fa=null,Za=0;function In(e){var t=Za;return Za+=1,fa===null&&(fa=[]),Co(fa,e,t)}function Ka(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pn(e,t){throw t.$$typeof===me?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function No(e){function t(f,o){if(e){var d=f.deletions;d===null?(f.deletions=[o],f.flags|=16):d.push(o)}}function l(f,o){if(!e)return null;for(;o!==null;)t(f,o),o=o.sibling;return null}function a(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function n(f,o){return f=Lt(f,o),f.index=0,f.sibling=null,f}function i(f,o,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<o?(f.flags|=67108866,o):d):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function u(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function c(f,o,d,b){return o===null||o.tag!==6?(o=ju(d,f.mode,b),o.return=f,o):(o=n(o,d),o.return=f,o)}function s(f,o,d,b){var H=d.type;return H===N?p(f,o,d.props.children,b,d.key):o!==null&&(o.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ze&&wl(H)===o.type)?(o=n(o,d.props),Ka(o,d),o.return=f,o):(o=Jn(d.type,d.key,d.props,null,f.mode,b),Ka(o,d),o.return=f,o)}function m(f,o,d,b){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=xu(d,f.mode,b),o.return=f,o):(o=n(o,d.children||[]),o.return=f,o)}function p(f,o,d,b,H){return o===null||o.tag!==7?(o=_l(d,f.mode,b,H),o.return=f,o):(o=n(o,d),o.return=f,o)}function E(f,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=ju(""+o,f.mode,d),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Ge:return d=Jn(o.type,o.key,o.props,null,f.mode,d),Ka(d,o),d.return=f,d;case ke:return o=xu(o,f.mode,d),o.return=f,o;case ze:return o=wl(o),E(f,o,d)}if(At(o)||Xe(o))return o=_l(o,f.mode,d,null),o.return=f,o;if(typeof o.then=="function")return E(f,In(o),d);if(o.$$typeof===Te)return E(f,Kn(f,o),d);Pn(f,o)}return null}function g(f,o,d,b){var H=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return H!==null?null:c(f,o,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ge:return d.key===H?s(f,o,d,b):null;case ke:return d.key===H?m(f,o,d,b):null;case ze:return d=wl(d),g(f,o,d,b)}if(At(d)||Xe(d))return H!==null?null:p(f,o,d,b,null);if(typeof d.then=="function")return g(f,o,In(d),b);if(d.$$typeof===Te)return g(f,o,Kn(f,d),b);Pn(f,d)}return null}function y(f,o,d,b,H){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return f=f.get(d)||null,c(o,f,""+b,H);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ge:return f=f.get(b.key===null?d:b.key)||null,s(o,f,b,H);case ke:return f=f.get(b.key===null?d:b.key)||null,m(o,f,b,H);case ze:return b=wl(b),y(f,o,d,b,H)}if(At(b)||Xe(b))return f=f.get(d)||null,p(o,f,b,H,null);if(typeof b.then=="function")return y(f,o,d,In(b),H);if(b.$$typeof===Te)return y(f,o,d,Kn(o,b),H);Pn(o,b)}return null}function M(f,o,d,b){for(var H=null,te=null,O=o,J=o=0,I=null;O!==null&&J<d.length;J++){O.index>J?(I=O,O=null):I=O.sibling;var le=g(f,O,d[J],b);if(le===null){O===null&&(O=I);break}e&&O&&le.alternate===null&&t(f,O),o=i(le,o,J),te===null?H=le:te.sibling=le,te=le,O=I}if(J===d.length)return l(f,O),ee&&qt(f,J),H;if(O===null){for(;J<d.length;J++)O=E(f,d[J],b),O!==null&&(o=i(O,o,J),te===null?H=O:te.sibling=O,te=O);return ee&&qt(f,J),H}for(O=a(O);J<d.length;J++)I=y(O,f,J,d[J],b),I!==null&&(e&&I.alternate!==null&&O.delete(I.key===null?J:I.key),o=i(I,o,J),te===null?H=I:te.sibling=I,te=I);return e&&O.forEach(function(Tl){return t(f,Tl)}),ee&&qt(f,J),H}function w(f,o,d,b){if(d==null)throw Error(h(151));for(var H=null,te=null,O=o,J=o=0,I=null,le=d.next();O!==null&&!le.done;J++,le=d.next()){O.index>J?(I=O,O=null):I=O.sibling;var Tl=g(f,O,le.value,b);if(Tl===null){O===null&&(O=I);break}e&&O&&Tl.alternate===null&&t(f,O),o=i(Tl,o,J),te===null?H=Tl:te.sibling=Tl,te=Tl,O=I}if(le.done)return l(f,O),ee&&qt(f,J),H;if(O===null){for(;!le.done;J++,le=d.next())le=E(f,le.value,b),le!==null&&(o=i(le,o,J),te===null?H=le:te.sibling=le,te=le);return ee&&qt(f,J),H}for(O=a(O);!le.done;J++,le=d.next())le=y(O,f,J,le.value,b),le!==null&&(e&&le.alternate!==null&&O.delete(le.key===null?J:le.key),o=i(le,o,J),te===null?H=le:te.sibling=le,te=le);return e&&O.forEach(function(Ph){return t(f,Ph)}),ee&&qt(f,J),H}function de(f,o,d,b){if(typeof d=="object"&&d!==null&&d.type===N&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Ge:e:{for(var H=d.key;o!==null;){if(o.key===H){if(H=d.type,H===N){if(o.tag===7){l(f,o.sibling),b=n(o,d.props.children),b.return=f,f=b;break e}}else if(o.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ze&&wl(H)===o.type){l(f,o.sibling),b=n(o,d.props),Ka(b,d),b.return=f,f=b;break e}l(f,o);break}else t(f,o);o=o.sibling}d.type===N?(b=_l(d.props.children,f.mode,b,d.key),b.return=f,f=b):(b=Jn(d.type,d.key,d.props,null,f.mode,b),Ka(b,d),b.return=f,f=b)}return u(f);case ke:e:{for(H=d.key;o!==null;){if(o.key===H)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){l(f,o.sibling),b=n(o,d.children||[]),b.return=f,f=b;break e}else{l(f,o);break}else t(f,o);o=o.sibling}b=xu(d,f.mode,b),b.return=f,f=b}return u(f);case ze:return d=wl(d),de(f,o,d,b)}if(At(d))return M(f,o,d,b);if(Xe(d)){if(H=Xe(d),typeof H!="function")throw Error(h(150));return d=H.call(d),w(f,o,d,b)}if(typeof d.then=="function")return de(f,o,In(d),b);if(d.$$typeof===Te)return de(f,o,Kn(f,d),b);Pn(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(l(f,o.sibling),b=n(o,d),b.return=f,f=b):(l(f,o),b=ju(d,f.mode,b),b.return=f,f=b),u(f)):l(f,o)}return function(f,o,d,b){try{Za=0;var H=de(f,o,d,b);return fa=null,H}catch(O){if(O===ra||O===$n)throw O;var te=it(29,O,null,f.mode);return te.lanes=b,te.return=f,te}}}var ql=No(!0),_o=No(!1),ul=!1;function Lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ne&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Qn(e),go(e,null,l),t}return Xn(e,a,t,l),Qn(e)}function Wa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,As(e,l)}}function Yu(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Gu=!1;function $a(){if(Gu){var e=oa;if(e!==null)throw e}}function Fa(e,t,l,a){Gu=!1;var n=e.updateQueue;ul=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,m=s.next;s.next=null,u===null?i=m:u.next=m,u=s;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==u&&(c===null?p.firstBaseUpdate=m:c.next=m,p.lastBaseUpdate=s))}if(i!==null){var E=n.baseState;u=0,p=m=s=null,c=i;do{var g=c.lane&-536870913,y=g!==c.lane;if(y?(F&g)===g:(a&g)===g){g!==0&&g===sa&&(Gu=!0),p!==null&&(p=p.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var M=e,w=c;g=t;var de=l;switch(w.tag){case 1:if(M=w.payload,typeof M=="function"){E=M.call(de,E,g);break e}E=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=w.payload,g=typeof M=="function"?M.call(de,E,g):M,g==null)break e;E=B({},E,g);break e;case 2:ul=!0}}g=c.callback,g!==null&&(e.flags|=64,y&&(e.flags|=8192),y=n.callbacks,y===null?n.callbacks=[g]:y.push(g))}else y={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(m=p=y,s=E):p=p.next=y,u|=g;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);p===null&&(s=E),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=p,i===null&&(n.shared.lanes=0),ml|=u,e.lanes=u,e.memoizedState=E}}function Uo(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Ho(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Uo(l[e],t)}var da=r(null),ei=r(0);function Bo(e,t){e=$t,x(ei,e),x(da,t),$t=e|t.baseLanes}function ku(){x(ei,$t),x(da,da.current)}function Xu(){$t=ei.current,A(da),A(ei)}var ut=r(null),bt=null;function ol(e){var t=e.alternate;x(xe,xe.current&1),x(ut,e),bt===null&&(t===null||da.current!==null||t.memoizedState!==null)&&(bt=e)}function Qu(e){x(xe,xe.current),x(ut,e),bt===null&&(bt=e)}function Ro(e){e.tag===22?(x(xe,xe.current),x(ut,e),bt===null&&(bt=e)):rl()}function rl(){x(xe,xe.current),x(ut,ut.current)}function ct(e){A(ut),bt===e&&(bt=null),A(xe)}var xe=r(0);function ti(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||$c(l)||Fc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kt=0,Q=null,re=null,Oe=null,li=!1,ma=!1,Yl=!1,ai=0,Ia=0,ha=null,Xm=0;function Se(){throw Error(h(321))}function Ju(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!nt(e[l],t[l]))return!1;return!0}function Vu(e,t,l,a,n,i){return kt=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?br:cc,Yl=!1,i=l(a,n),Yl=!1,ma&&(i=Lo(t,l,a,n)),wo(e),i}function wo(e){v.H=tn;var t=re!==null&&re.next!==null;if(kt=0,Oe=re=Q=null,li=!1,Ia=0,ha=null,t)throw Error(h(300));e===null||De||(e=e.dependencies,e!==null&&Zn(e)&&(De=!0))}function Lo(e,t,l,a){Q=e;var n=0;do{if(ma&&(ha=null),Ia=0,ma=!1,25<=n)throw Error(h(301));if(n+=1,Oe=re=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=Sr,i=t(l,a)}while(ma);return i}function Qm(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Pa(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(Q.flags|=1024),t}function Zu(){var e=ai!==0;return ai=0,e}function Ku(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Wu(e){if(li){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}li=!1}kt=0,Oe=re=Q=null,ma=!1,Ia=ai=0,ha=null}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Q.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Me(){if(re===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Oe===null?Q.memoizedState:Oe.next;if(t!==null)Oe=t,re=e;else{if(e===null)throw Q.alternate===null?Error(h(467)):Error(h(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Oe===null?Q.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(e){var t=Ia;return Ia+=1,ha===null&&(ha=[]),e=Co(ha,e,t),t=Q,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?br:cc),e}function ii(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pa(e);if(e.$$typeof===Te)return Le(e)}throw Error(h(438,String(e)))}function $u(e){var t=null,l=Q.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=Q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=ni(),Q.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Ot;return t.index++,l}function Xt(e,t){return typeof t=="function"?t(e):t}function ui(e){var t=Me();return Fu(t,re,e)}function Fu(e,t,l){var a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,s=null,m=t,p=!1;do{var E=m.lane&-536870913;if(E!==m.lane?(F&E)===E:(kt&E)===E){var g=m.revertLane;if(g===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),E===sa&&(p=!0);else if((kt&g)===g){m=m.next,g===sa&&(p=!0);continue}else E={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=E,u=i):s=s.next=E,Q.lanes|=g,ml|=g;E=m.action,Yl&&l(i,E),i=m.hasEagerState?m.eagerState:l(i,E)}else g={lane:E,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=g,u=i):s=s.next=g,Q.lanes|=E,ml|=E;m=m.next}while(m!==null&&m!==t);if(s===null?u=i:s.next=c,!nt(i,e.memoizedState)&&(De=!0,p&&(l=oa,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Iu(e){var t=Me(),l=t.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);nt(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function qo(e,t,l){var a=Q,n=Me(),i=ee;if(i){if(l===void 0)throw Error(h(407));l=l()}else l=t();var u=!nt((re||n).memoizedState,l);if(u&&(n.memoizedState=l,De=!0),n=n.queue,tc(ko.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||Oe!==null&&Oe.memoizedState.tag&1){if(a.flags|=2048,ga(9,{destroy:void 0},Go.bind(null,a,n,l,t),null),ge===null)throw Error(h(349));i||(kt&127)!==0||Yo(a,t,l)}return l}function Yo(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=Q.updateQueue,t===null?(t=ni(),Q.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Go(e,t,l,a){t.value=l,t.getSnapshot=a,Xo(t)&&Qo(e)}function ko(e,t,l){return l(function(){Xo(t)&&Qo(e)})}function Xo(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!nt(e,l)}catch{return!0}}function Qo(e){var t=Nl(e,2);t!==null&&Pe(t,e,2)}function Pu(e){var t=Ve();if(typeof e=="function"){var l=e;if(e=l(),Yl){Pt(!0);try{l()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Jo(e,t,l,a){return e.baseState=l,Fu(e,re,typeof a=="function"?a:Xt)}function Jm(e,t,l,a,n){if(oi(e))throw Error(h(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};v.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Vo(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Vo(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=v.T,u={};v.T=u;try{var c=l(n,a),s=v.S;s!==null&&s(u,c),Zo(e,t,c)}catch(m){ec(e,t,m)}finally{i!==null&&u.types!==null&&(i.types=u.types),v.T=i}}else try{i=l(n,a),Zo(e,t,i)}catch(m){ec(e,t,m)}}function Zo(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Ko(e,t,a)},function(a){return ec(e,t,a)}):Ko(e,t,l)}function Ko(e,t,l){t.status="fulfilled",t.value=l,Wo(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Vo(e,l)))}function ec(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Wo(t),t=t.next;while(t!==a)}e.action=null}function Wo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function Fo(e,t){if(ee){var l=ge.formState;if(l!==null){e:{var a=Q;if(ee){if(pe){t:{for(var n=pe,i=vt;n.nodeType!==8;){if(!i){n=null;break t}if(n=St(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){pe=St(n.nextSibling),a=n.data==="F!";break e}}nl(a)}a=!1}a&&(t=l[0])}}return l=Ve(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},l.queue=a,l=yr.bind(null,Q,a),a.dispatch=l,a=Pu(!1),i=uc.bind(null,Q,!1,a.queue),a=Ve(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Jm.bind(null,Q,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Io(e){var t=Me();return Po(t,re,e)}function Po(e,t,l){if(t=Fu(e,t,$o)[0],e=ui(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Pa(t)}catch(u){throw u===ra?$n:u}else a=t;t=Me();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(Q.flags|=2048,ga(9,{destroy:void 0},Vm.bind(null,n,l),null)),[a,i,e]}function Vm(e,t){e.action=t}function er(e){var t=Me(),l=re;if(l!==null)return Po(t,l,e);Me(),t=t.memoizedState,l=Me();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ga(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=Q.updateQueue,t===null&&(t=ni(),Q.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function tr(){return Me().memoizedState}function ci(e,t,l,a){var n=Ve();Q.flags|=e,n.memoizedState=ga(1|t,{destroy:void 0},l,a===void 0?null:a)}function si(e,t,l,a){var n=Me();a=a===void 0?null:a;var i=n.memoizedState.inst;re!==null&&a!==null&&Ju(a,re.memoizedState.deps)?n.memoizedState=ga(t,i,l,a):(Q.flags|=e,n.memoizedState=ga(1|t,i,l,a))}function lr(e,t){ci(8390656,8,e,t)}function tc(e,t){si(2048,8,e,t)}function Zm(e){Q.flags|=4;var t=Q.updateQueue;if(t===null)t=ni(),Q.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function ar(e){var t=Me().memoizedState;return Zm({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function nr(e,t){return si(4,2,e,t)}function ir(e,t){return si(4,4,e,t)}function ur(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cr(e,t,l){l=l!=null?l.concat([e]):null,si(4,4,ur.bind(null,t,e),l)}function lc(){}function sr(e,t){var l=Me();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Ju(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function or(e,t){var l=Me();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Ju(t,a[1]))return a[0];if(a=e(),Yl){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a}function ac(e,t,l){return l===void 0||(kt&1073741824)!==0&&(F&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=ff(),Q.lanes|=e,ml|=e,l)}function rr(e,t,l,a){return nt(l,t)?l:da.current!==null?(e=ac(e,l,a),nt(e,t)||(De=!0),e):(kt&42)===0||(kt&1073741824)!==0&&(F&261930)===0?(De=!0,e.memoizedState=l):(e=ff(),Q.lanes|=e,ml|=e,t)}function fr(e,t,l,a,n){var i=j.p;j.p=i!==0&&8>i?i:8;var u=v.T,c={};v.T=c,uc(e,!1,t,l);try{var s=n(),m=v.S;if(m!==null&&m(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=km(s,a);en(e,t,p,rt(e))}else en(e,t,a,rt(e))}catch(E){en(e,t,{then:function(){},status:"rejected",reason:E},rt())}finally{j.p=i,u!==null&&c.types!==null&&(u.types=c.types),v.T=u}}function Km(){}function nc(e,t,l,a){if(e.tag!==5)throw Error(h(476));var n=dr(e).queue;fr(e,n,t,q,l===null?Km:function(){return mr(e),l(a)})}function dr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:q},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mr(e){var t=dr(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},rt())}function ic(){return Le(vn)}function hr(){return Me().memoizedState}function gr(){return Me().memoizedState}function Wm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=rt();e=cl(l);var a=sl(t,e,l);a!==null&&(Pe(a,t,l),Wa(a,t,l)),t={cache:Hu()},e.payload=t;return}t=t.return}}function $m(e,t,l){var a=rt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},oi(e)?pr(t,l):(l=Tu(e,t,l,a),l!==null&&(Pe(l,e,a),vr(l,t,a)))}function yr(e,t,l){var a=rt();en(e,t,l,a)}function en(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(oi(e))pr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,nt(c,u))return Xn(e,t,n,0),ge===null&&kn(),!1}catch{}if(l=Tu(e,t,n,a),l!==null)return Pe(l,e,a),vr(l,t,a),!0}return!1}function uc(e,t,l,a){if(a={lane:2,revertLane:Lc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oi(e)){if(t)throw Error(h(479))}else t=Tu(e,l,a,2),t!==null&&Pe(t,e,2)}function oi(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function pr(e,t){ma=li=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function vr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,As(e,l)}}var tn={readContext:Le,use:ii,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se};tn.useEffectEvent=Se;var br={readContext:Le,use:ii,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:lr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,ci(4194308,4,ur.bind(null,t,e),l)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){ci(4,2,e,t)},useMemo:function(e,t){var l=Ve();t=t===void 0?null:t;var a=e();if(Yl){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ve();if(l!==void 0){var n=l(t);if(Yl){Pt(!0);try{l(t)}finally{Pt(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=$m.bind(null,Q,e),[a.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:function(e){e=Pu(e);var t=e.queue,l=yr.bind(null,Q,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:lc,useDeferredValue:function(e,t){var l=Ve();return ac(l,e,t)},useTransition:function(){var e=Pu(!1);return e=fr.bind(null,Q,e.queue,!0,!1),Ve().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=Q,n=Ve();if(ee){if(l===void 0)throw Error(h(407));l=l()}else{if(l=t(),ge===null)throw Error(h(349));(F&127)!==0||Yo(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,lr(ko.bind(null,a,i,e),[e]),a.flags|=2048,ga(9,{destroy:void 0},Go.bind(null,a,i,l,t),null),l},useId:function(){var e=Ve(),t=ge.identifierPrefix;if(ee){var l=Nt,a=Dt;l=(a&~(1<<32-at(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ai++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Xm++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ic,useFormState:Fo,useActionState:Fo,useOptimistic:function(e){var t=Ve();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=uc.bind(null,Q,!0,l),l.dispatch=t,[e,t]},useMemoCache:$u,useCacheRefresh:function(){return Ve().memoizedState=Wm.bind(null,Q)},useEffectEvent:function(e){var t=Ve(),l={impl:e};return t.memoizedState=l,function(){if((ne&2)!==0)throw Error(h(440));return l.impl.apply(void 0,arguments)}}},cc={readContext:Le,use:ii,useCallback:sr,useContext:Le,useEffect:tc,useImperativeHandle:cr,useInsertionEffect:nr,useLayoutEffect:ir,useMemo:or,useReducer:ui,useRef:tr,useState:function(){return ui(Xt)},useDebugValue:lc,useDeferredValue:function(e,t){var l=Me();return rr(l,re.memoizedState,e,t)},useTransition:function(){var e=ui(Xt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:qo,useId:hr,useHostTransitionStatus:ic,useFormState:Io,useActionState:Io,useOptimistic:function(e,t){var l=Me();return Jo(l,re,e,t)},useMemoCache:$u,useCacheRefresh:gr};cc.useEffectEvent=ar;var Sr={readContext:Le,use:ii,useCallback:sr,useContext:Le,useEffect:tc,useImperativeHandle:cr,useInsertionEffect:nr,useLayoutEffect:ir,useMemo:or,useReducer:Iu,useRef:tr,useState:function(){return Iu(Xt)},useDebugValue:lc,useDeferredValue:function(e,t){var l=Me();return re===null?ac(l,e,t):rr(l,re.memoizedState,e,t)},useTransition:function(){var e=Iu(Xt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:qo,useId:hr,useHostTransitionStatus:ic,useFormState:er,useActionState:er,useOptimistic:function(e,t){var l=Me();return re!==null?Jo(l,re,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:$u,useCacheRefresh:gr};Sr.useEffectEvent=ar;function sc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:B({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var oc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=rt(),n=cl(a);n.payload=t,l!=null&&(n.callback=l),t=sl(e,n,a),t!==null&&(Pe(t,e,a),Wa(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=rt(),n=cl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=sl(e,n,a),t!==null&&(Pe(t,e,a),Wa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=rt(),a=cl(l);a.tag=2,t!=null&&(a.callback=t),t=sl(e,a,l),t!==null&&(Pe(t,e,l),Wa(t,e,l))}};function Er(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ga(l,a)||!Ga(n,i):!0}function Ar(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&oc.enqueueReplaceState(t,t.state,null)}function Gl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=B({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Tr(e){Gn(e)}function zr(e){console.error(e)}function jr(e){Gn(e)}function ri(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function xr(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function rc(e,t,l){return l=cl(l),l.tag=3,l.payload={element:null},l.callback=function(){ri(e,t)},l}function Mr(e){return e=cl(e),e.tag=3,e}function Cr(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){xr(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){xr(t,l,a),typeof n!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Fm(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ca(t,l,n,!0),l=ut.current,l!==null){switch(l.tag){case 31:case 13:return bt===null?Ai():l.alternate===null&&Ee===0&&(Ee=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Fn?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Bc(e,a,n)),!1;case 22:return l.flags|=65536,a===Fn?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Bc(e,a,n)),!1}throw Error(h(435,l.tag))}return Bc(e,a,n),Ai(),!1}if(ee)return t=ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Ou&&(e=Error(h(422),{cause:a}),Qa(gt(e,l)))):(a!==Ou&&(t=Error(h(423),{cause:a}),Qa(gt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=gt(a,l),n=rc(e.stateNode,a,n),Yu(e,n),Ee!==4&&(Ee=2)),!1;var i=Error(h(520),{cause:a});if(i=gt(i,l),rn===null?rn=[i]:rn.push(i),Ee!==4&&(Ee=2),t===null)return!0;a=gt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=rc(l.stateNode,a,e),Yu(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(hl===null||!hl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Mr(n),Cr(n,e,l,a),Yu(l,n),!1}l=l.return}while(l!==null);return!1}var fc=Error(h(461)),De=!1;function qe(e,t,l,a){t.child=e===null?_o(t,null,l,a):ql(t,e.child,l,a)}function Or(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return Bl(t),a=Vu(e,t,l,u,i,n),c=Zu(),e!==null&&!De?(Ku(e,t,n),Qt(e,t,n)):(ee&&c&&Mu(t),t.flags|=1,qe(e,t,a,n),t.child)}function Dr(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!zu(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Nr(e,t,i,a,n)):(e=Jn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!bc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ga,l(u,a)&&e.ref===t.ref)return Qt(e,t,n)}return t.flags|=1,e=Lt(i,a),e.ref=t.ref,e.return=t,t.child=e}function Nr(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Ga(i,a)&&e.ref===t.ref)if(De=!1,t.pendingProps=a=i,bc(e,n))(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,Qt(e,t,n)}return dc(e,t,l,a,n)}function _r(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Ur(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wn(t,i!==null?i.cachePool:null),i!==null?Bo(t,i):ku(),Ro(t);else return a=t.lanes=536870912,Ur(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Wn(t,i.cachePool),Bo(t,i),rl(),t.memoizedState=null):(e!==null&&Wn(t,null),ku(),rl());return qe(e,t,n,l),t.child}function ln(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ur(e,t,l,a,n){var i=Ru();return i=i===null?null:{parent:Ce._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&Wn(t,null),ku(),Ro(t),e!==null&&ca(e,t,a,!0),t.childLanes=n,null}function fi(e,t){return t=mi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hr(e,t,l){return ql(t,e.child,null,l),e=fi(t,t.pendingProps),e.flags|=2,ct(t),t.memoizedState=null,e}function Im(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(a.mode==="hidden")return e=fi(t,a),t.lanes=536870912,ln(null,e);if(Qu(t),(e=pe)?(e=Zf(e,vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ll!==null?{id:Dt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},l=po(e),l.return=t,t.child=l,we=t,pe=null)):e=null,e===null)throw nl(t);return t.lanes=536870912,null}return fi(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Qu(t),n)if(t.flags&256)t.flags&=-257,t=Hr(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(De||ca(e,t,l,!1),n=(l&e.childLanes)!==0,De||n){if(a=ge,a!==null&&(u=Ts(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Nl(e,u),Pe(a,e,u),fc;Ai(),t=Hr(e,t,l)}else e=i.treeContext,pe=St(u.nextSibling),we=t,ee=!0,al=null,vt=!1,e!==null&&So(t,e),t=fi(t,a),t.flags|=4096;return t}return e=Lt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function di(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(h(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function dc(e,t,l,a,n){return Bl(t),l=Vu(e,t,l,a,void 0,n),a=Zu(),e!==null&&!De?(Ku(e,t,n),Qt(e,t,n)):(ee&&a&&Mu(t),t.flags|=1,qe(e,t,l,n),t.child)}function Br(e,t,l,a,n,i){return Bl(t),t.updateQueue=null,l=Lo(t,a,l,n),wo(e),a=Zu(),e!==null&&!De?(Ku(e,t,i),Qt(e,t,i)):(ee&&a&&Mu(t),t.flags|=1,qe(e,t,l,i),t.child)}function Rr(e,t,l,a,n){if(Bl(t),t.stateNode===null){var i=aa,u=l.contextType;typeof u=="object"&&u!==null&&(i=Le(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=oc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Lu(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?Le(u):aa,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(sc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&oc.enqueueReplaceState(i,i.state,null),Fa(t,a,i,n),$a(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,s=Gl(l,c);i.props=s;var m=i.context,p=l.contextType;u=aa,typeof p=="object"&&p!==null&&(u=Le(p));var E=l.getDerivedStateFromProps;p=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||m!==u)&&Ar(t,i,a,u),ul=!1;var g=t.memoizedState;i.state=g,Fa(t,a,i,n),$a(),m=t.memoizedState,c||g!==m||ul?(typeof E=="function"&&(sc(t,l,E,a),m=t.memoizedState),(s=ul||Er(t,l,s,a,g,m,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=m),i.props=a,i.state=m,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,qu(e,t),u=t.memoizedProps,p=Gl(l,u),i.props=p,E=t.pendingProps,g=i.context,m=l.contextType,s=aa,typeof m=="object"&&m!==null&&(s=Le(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==E||g!==s)&&Ar(t,i,a,s),ul=!1,g=t.memoizedState,i.state=g,Fa(t,a,i,n),$a();var y=t.memoizedState;u!==E||g!==y||ul||e!==null&&e.dependencies!==null&&Zn(e.dependencies)?(typeof c=="function"&&(sc(t,l,c,a),y=t.memoizedState),(p=ul||Er(t,l,p,a,g,y,s)||e!==null&&e.dependencies!==null&&Zn(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=y),i.props=a,i.state=y,i.context=s,a=p):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,di(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ql(t,e.child,null,n),t.child=ql(t,null,l,n)):qe(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Qt(e,t,n),e}function wr(e,t,l,a){return Ul(),t.flags|=256,qe(e,t,l,a),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(e){return{baseLanes:e,cachePool:xo()}}function gc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=ot),e}function Lr(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(xe.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(n?ol(t):rl(),(e=pe)?(e=Zf(e,vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ll!==null?{id:Dt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},l=po(e),l.return=t,t.child=l,we=t,pe=null)):e=null,e===null)throw nl(t);return Fc(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(rl(),n=t.mode,c=mi({mode:"hidden",children:c},n),a=_l(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=hc(l),a.childLanes=gc(e,u,l),t.memoizedState=mc,ln(null,a)):(ol(t),yc(t,c))}var s=e.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)t.flags&256?(ol(t),t.flags&=-257,t=pc(e,t,l)):t.memoizedState!==null?(rl(),t.child=e.child,t.flags|=128,t=null):(rl(),c=a.fallback,n=t.mode,a=mi({mode:"visible",children:a.children},n),c=_l(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,ql(t,e.child,null,l),a=t.child,a.memoizedState=hc(l),a.childLanes=gc(e,u,l),t.memoizedState=mc,t=ln(null,a));else if(ol(t),Fc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var m=u.dgst;u=m,a=Error(h(419)),a.stack="",a.digest=u,Qa({value:a,source:null,stack:null}),t=pc(e,t,l)}else if(De||ca(e,t,l,!1),u=(l&e.childLanes)!==0,De||u){if(u=ge,u!==null&&(a=Ts(u,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,Nl(e,a),Pe(u,e,a),fc;$c(c)||Ai(),t=pc(e,t,l)}else $c(c)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,pe=St(c.nextSibling),we=t,ee=!0,al=null,vt=!1,e!==null&&So(t,e),t=yc(t,a.children),t.flags|=4096);return t}return n?(rl(),c=a.fallback,n=t.mode,s=e.child,m=s.sibling,a=Lt(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,m!==null?c=Lt(m,c):(c=_l(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,ln(null,a),a=t.child,c=e.child.memoizedState,c===null?c=hc(l):(n=c.cachePool,n!==null?(s=Ce._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=xo(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=gc(e,u,l),t.memoizedState=mc,ln(e.child,a)):(ol(t),l=e.child,e=l.sibling,l=Lt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function yc(e,t){return t=mi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mi(e,t){return e=it(22,e,null,t),e.lanes=0,e}function pc(e,t,l){return ql(t,e.child,null,l),e=yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qr(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),_u(e.return,t,l)}function vc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Yr(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=xe.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,x(xe,u),qe(e,t,a,l),a=ee?Xa:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qr(e,l,t);else if(e.tag===19)qr(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&ti(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),vc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ti(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}vc(t,!0,l,null,i,a);break;case"together":vc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Qt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),ml|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ca(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,l=Lt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Lt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function bc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zn(e)))}function Pm(e,t,l){switch(t.tag){case 3:Je(t,t.stateNode.containerInfo),il(t,Ce,e.memoizedState.cache),Ul();break;case 27:case 5:Ca(t);break;case 4:Je(t,t.stateNode.containerInfo);break;case 10:il(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ol(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Lr(e,t,l):(ol(t),e=Qt(e,t,l),e!==null?e.sibling:null);ol(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ca(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Yr(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),x(xe,xe.current),a)break;return null;case 22:return t.lanes=0,_r(e,t,l,t.pendingProps);case 24:il(t,Ce,e.memoizedState.cache)}return Qt(e,t,l)}function Gr(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)De=!0;else{if(!bc(e,l)&&(t.flags&128)===0)return De=!1,Pm(e,t,l);De=(e.flags&131072)!==0}else De=!1,ee&&(t.flags&1048576)!==0&&bo(t,Xa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=wl(t.elementType),t.type=e,typeof e=="function")zu(e)?(a=Gl(e,a),t.tag=1,t=Rr(null,t,e,a,l)):(t.tag=0,t=dc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===Be){t.tag=11,t=Or(null,t,e,a,l);break e}else if(n===L){t.tag=14,t=Dr(null,t,e,a,l);break e}}throw t=Ht(e)||e,Error(h(306,t,""))}}return t;case 0:return dc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Gl(a,t.pendingProps),Rr(e,t,a,n,l);case 3:e:{if(Je(t,t.stateNode.containerInfo),e===null)throw Error(h(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,qu(e,t),Fa(t,a,null,l);var u=t.memoizedState;if(a=u.cache,il(t,Ce,a),a!==i.cache&&Uu(t,[Ce],l,!0),$a(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=wr(e,t,a,l);break e}else if(a!==n){n=gt(Error(h(424)),t),Qa(n),t=wr(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,pe=St(e.firstChild),we=t,ee=!0,al=null,vt=!0,l=_o(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ul(),a===n){t=Qt(e,t,l);break e}qe(e,t,a,l)}t=t.child}return t;case 26:return di(e,t),e===null?(l=Pf(t.type,null,t.pendingProps,null))?t.memoizedState=l:ee||(l=t.type,e=t.pendingProps,a=Oi(K.current).createElement(l),a[Re]=t,a[Ze]=e,Ye(a,l,e),Ue(a),t.stateNode=a):t.memoizedState=Pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ca(t),e===null&&ee&&(a=t.stateNode=$f(t.type,t.pendingProps,K.current),we=t,vt=!0,n=pe,vl(t.type)?(Ic=n,pe=St(a.firstChild)):pe=n),qe(e,t,t.pendingProps.children,l),di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((n=a=pe)&&(a=Oh(a,t.type,t.pendingProps,vt),a!==null?(t.stateNode=a,we=t,pe=St(a.firstChild),vt=!1,n=!0):n=!1),n||nl(t)),Ca(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,Zc(n,i)?a=null:u!==null&&Zc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Vu(e,t,Qm,null,null,l),vn._currentValue=n),di(e,t),qe(e,t,a,l),t.child;case 6:return e===null&&ee&&((e=l=pe)&&(l=Dh(l,t.pendingProps,vt),l!==null?(t.stateNode=l,we=t,pe=null,e=!0):e=!1),e||nl(t)),null;case 13:return Lr(e,t,l);case 4:return Je(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ql(t,null,a,l):qe(e,t,a,l),t.child;case 11:return Or(e,t,t.type,t.pendingProps,l);case 7:return qe(e,t,t.pendingProps,l),t.child;case 8:return qe(e,t,t.pendingProps.children,l),t.child;case 12:return qe(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,il(t,t.type,a.value),qe(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Bl(t),n=Le(n),a=a(n),t.flags|=1,qe(e,t,a,l),t.child;case 14:return Dr(e,t,t.type,t.pendingProps,l);case 15:return Nr(e,t,t.type,t.pendingProps,l);case 19:return Yr(e,t,l);case 31:return Im(e,t,l);case 22:return _r(e,t,l,t.pendingProps);case 24:return Bl(t),a=Le(Ce),e===null?(n=Ru(),n===null&&(n=ge,i=Hu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Lu(t),il(t,Ce,n)):((e.lanes&l)!==0&&(qu(e,t),Fa(t,null,null,l),$a()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),il(t,Ce,a)):(a=i.cache,il(t,Ce,a),a!==n.cache&&Uu(t,[Ce],l,!0))),qe(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Jt(e){e.flags|=4}function Sc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(gf())e.flags|=8192;else throw Ll=Fn,wu}else e.flags&=-16777217}function kr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nd(t))if(gf())e.flags|=8192;else throw Ll=Fn,wu}function hi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ss():536870912,e.lanes|=t,ba|=t)}function an(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function eh(e,t,l){var a=t.pendingProps;switch(Cu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return ve(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Gt(Ce),je(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ua(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Du())),ve(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Jt(t),i!==null?(ve(t),kr(t,i)):(ve(t),Sc(t,n,null,a,l))):i?i!==e.memoizedState?(Jt(t),ve(t),kr(t,i)):(ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Jt(t),ve(t),Sc(t,n,e,a,l)),null;case 27:if(jn(t),l=K.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Jt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return ve(t),null}e=C.current,ua(t)?Eo(t):(e=$f(n,a,l),t.stateNode=e,Jt(t))}return ve(t),null;case 5:if(jn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Jt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return ve(t),null}if(i=C.current,ua(t))Eo(t);else{var u=Oi(K.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Re]=t,i[Ze]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Ye(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Jt(t)}}return ve(t),Sc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Jt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(e=K.current,ua(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=we,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Re]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||qf(e.nodeValue,l)),e||nl(t,!0)}else e=Oi(e).createTextNode(a),e[Re]=t,t.stateNode=e}return ve(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ua(t),l!==null){if(e===null){if(!a)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[Re]=t}else Ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),e=!1}else l=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(ct(t),t):(ct(t),null);if((t.flags&128)!==0)throw Error(h(558))}return ve(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ua(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(h(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[Re]=t}else Ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),n=!1}else n=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ct(t),t):(ct(t),null)}return ct(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),hi(t,t.updateQueue),ve(t),null);case 4:return je(),e===null&&kc(t.stateNode.containerInfo),ve(t),null;case 10:return Gt(t.type),ve(t),null;case 19:if(A(xe),a=t.memoizedState,a===null)return ve(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)an(a,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ti(e),i!==null){for(t.flags|=128,an(a,!1),e=i.updateQueue,t.updateQueue=e,hi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)yo(l,e),l=l.sibling;return x(xe,xe.current&1|2),ee&&qt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&tt()>bi&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304)}else{if(!n)if(e=ti(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,hi(t,e),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ee)return ve(t),null}else 2*tt()-a.renderingStartTime>bi&&l!==536870912&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=tt(),e.sibling=null,l=xe.current,x(xe,n?l&1|2:l&1),ee&&qt(t,a.treeForkCount),e):(ve(t),null);case 22:case 23:return ct(t),Xu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),l=t.updateQueue,l!==null&&hi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&A(Rl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Gt(Ce),ve(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function th(e,t){switch(Cu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gt(Ce),je(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jn(t),null;case 31:if(t.memoizedState!==null){if(ct(t),t.alternate===null)throw Error(h(340));Ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(xe),null;case 4:return je(),null;case 10:return Gt(t.type),null;case 22:case 23:return ct(t),Xu(),e!==null&&A(Rl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gt(Ce),null;case 25:return null;default:return null}}function Xr(e,t){switch(Cu(t),t.tag){case 3:Gt(Ce),je();break;case 26:case 27:case 5:jn(t);break;case 4:je();break;case 31:t.memoizedState!==null&&ct(t);break;case 13:ct(t);break;case 19:A(xe);break;case 10:Gt(t.type);break;case 22:case 23:ct(t),Xu(),e!==null&&A(Rl);break;case 24:Gt(Ce)}}function nn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){se(t,t.return,c)}}function fl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var s=l,m=c;try{m()}catch(p){se(n,s,p)}}}a=a.next}while(a!==i)}}catch(p){se(t,t.return,p)}}function Qr(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Ho(t,l)}catch(a){se(e,e.return,a)}}}function Jr(e,t,l){l.props=Gl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){se(e,t,a)}}function un(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){se(e,t,n)}}function _t(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){se(e,t,n)}else l.current=null}function Vr(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){se(e,e.return,n)}}function Ec(e,t,l){try{var a=e.stateNode;Th(a,e.type,l,t),a[Ze]=t}catch(n){se(e,e.return,n)}}function Zr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vl(e.type)||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Rt));else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Tc(e,t,l),e=e.sibling;e!==null;)Tc(e,t,l),e=e.sibling}function gi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(gi(e,t,l),e=e.sibling;e!==null;)gi(e,t,l),e=e.sibling}function Kr(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ye(t,a,l),t[Re]=e,t[Ze]=l}catch(i){se(e,e.return,i)}}var Vt=!1,Ne=!1,zc=!1,Wr=typeof WeakSet=="function"?WeakSet:Set,He=null;function lh(e,t){if(e=e.containerInfo,Jc=Ri,e=uo(e),pu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,c=-1,s=-1,m=0,p=0,E=e,g=null;t:for(;;){for(var y;E!==l||n!==0&&E.nodeType!==3||(c=u+n),E!==i||a!==0&&E.nodeType!==3||(s=u+a),E.nodeType===3&&(u+=E.nodeValue.length),(y=E.firstChild)!==null;)g=E,E=y;for(;;){if(E===e)break t;if(g===l&&++m===n&&(c=u),g===i&&++p===a&&(s=u),(y=E.nextSibling)!==null)break;E=g,g=E.parentNode}E=y}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(Vc={focusedElem:e,selectionRange:l},Ri=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var M=Gl(l.type,n);e=a.getSnapshotBeforeUpdate(M,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(w){se(l,l.return,w)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Wc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function $r(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Kt(e,l),a&4&&nn(5,l);break;case 1:if(Kt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){se(l,l.return,u)}else{var n=Gl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){se(l,l.return,u)}}a&64&&Qr(l),a&512&&un(l,l.return);break;case 3:if(Kt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Ho(e,t)}catch(u){se(l,l.return,u)}}break;case 27:t===null&&a&4&&Kr(l);case 26:case 5:Kt(e,l),t===null&&a&4&&Vr(l),a&512&&un(l,l.return);break;case 12:Kt(e,l);break;case 31:Kt(e,l),a&4&&Pr(e,l);break;case 13:Kt(e,l),a&4&&ef(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=fh.bind(null,l),Nh(e,l))));break;case 22:if(a=l.memoizedState!==null||Vt,!a){t=t!==null&&t.memoizedState!==null||Ne,n=Vt;var i=Ne;Vt=a,(Ne=t)&&!i?Wt(e,l,(l.subtreeFlags&8772)!==0):Kt(e,l),Vt=n,Ne=i}break;case 30:break;default:Kt(e,l)}}function Fr(e){var t=e.alternate;t!==null&&(e.alternate=null,Fr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&eu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,We=!1;function Zt(e,t,l){for(l=l.child;l!==null;)Ir(e,t,l),l=l.sibling}function Ir(e,t,l){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Oa,l)}catch{}switch(l.tag){case 26:Ne||_t(l,t),Zt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ne||_t(l,t);var a=be,n=We;vl(l.type)&&(be=l.stateNode,We=!1),Zt(e,t,l),gn(l.stateNode),be=a,We=n;break;case 5:Ne||_t(l,t);case 6:if(a=be,n=We,be=null,Zt(e,t,l),be=a,We=n,be!==null)if(We)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(l.stateNode)}catch(i){se(l,t,i)}else try{be.removeChild(l.stateNode)}catch(i){se(l,t,i)}break;case 18:be!==null&&(We?(e=be,Jf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ma(e)):Jf(be,l.stateNode));break;case 4:a=be,n=We,be=l.stateNode.containerInfo,We=!0,Zt(e,t,l),be=a,We=n;break;case 0:case 11:case 14:case 15:fl(2,l,t),Ne||fl(4,l,t),Zt(e,t,l);break;case 1:Ne||(_t(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Jr(l,t,a)),Zt(e,t,l);break;case 21:Zt(e,t,l);break;case 22:Ne=(a=Ne)||l.memoizedState!==null,Zt(e,t,l),Ne=a;break;default:Zt(e,t,l)}}function Pr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ma(e)}catch(l){se(t,t.return,l)}}}function ef(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ma(e)}catch(l){se(t,t.return,l)}}function ah(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wr),t;default:throw Error(h(435,e.tag))}}function yi(e,t){var l=ah(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=dh.bind(null,e,a);a.then(n,n)}})}function $e(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(vl(c.type)){be=c.stateNode,We=!1;break e}break;case 5:be=c.stateNode,We=!1;break e;case 3:case 4:be=c.stateNode.containerInfo,We=!0;break e}c=c.return}if(be===null)throw Error(h(160));Ir(i,u,n),be=null,We=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)tf(t,e),t=t.sibling}var zt=null;function tf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$e(t,e),Fe(e),a&4&&(fl(3,e,e.return),nn(3,e),fl(5,e,e.return));break;case 1:$e(t,e),Fe(e),a&512&&(Ne||l===null||_t(l,l.return)),a&64&&Vt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=zt;if($e(t,e),Fe(e),a&512&&(Ne||l===null||_t(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[_a]||i[Re]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ye(i,a,l),i[Re]=e,Ue(i),a=i;break e;case"link":var u=ld("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(a),Ye(i,a,l),n.head.appendChild(i);break;case"meta":if(u=ld("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}i=n.createElement(a),Ye(i,a,l),n.head.appendChild(i);break;default:throw Error(h(468,a))}i[Re]=e,Ue(i),a=i}e.stateNode=a}else ad(n,e.type,e.stateNode);else e.stateNode=td(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?ad(n,e.type,e.stateNode):td(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ec(e,e.memoizedProps,l.memoizedProps)}break;case 27:$e(t,e),Fe(e),a&512&&(Ne||l===null||_t(l,l.return)),l!==null&&a&4&&Ec(e,e.memoizedProps,l.memoizedProps);break;case 5:if($e(t,e),Fe(e),a&512&&(Ne||l===null||_t(l,l.return)),e.flags&32){n=e.stateNode;try{$l(n,"")}catch(M){se(e,e.return,M)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Ec(e,n,l!==null?l.memoizedProps:n)),a&1024&&(zc=!0);break;case 6:if($e(t,e),Fe(e),a&4){if(e.stateNode===null)throw Error(h(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(M){se(e,e.return,M)}}break;case 3:if(_i=null,n=zt,zt=Di(t.containerInfo),$e(t,e),zt=n,Fe(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ma(t.containerInfo)}catch(M){se(e,e.return,M)}zc&&(zc=!1,lf(e));break;case 4:a=zt,zt=Di(e.stateNode.containerInfo),$e(t,e),Fe(e),zt=a;break;case 12:$e(t,e),Fe(e);break;case 31:$e(t,e),Fe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,yi(e,a)));break;case 13:$e(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(vi=tt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,yi(e,a)));break;case 22:n=e.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,m=Vt,p=Ne;if(Vt=m||n,Ne=p||s,$e(t,e),Ne=p,Vt=m,Fe(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||s||Vt||Ne||kl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){s=l=t;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var E=s.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(M){se(s,s.return,M)}}}else if(t.tag===6){if(l===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(M){se(s,s.return,M)}}}else if(t.tag===18){if(l===null){s=t;try{var y=s.stateNode;n?Vf(y,!0):Vf(s.stateNode,!1)}catch(M){se(s,s.return,M)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,yi(e,l))));break;case 19:$e(t,e),Fe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,yi(e,a)));break;case 30:break;case 21:break;default:$e(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Zr(a)){l=a;break}a=a.return}if(l==null)throw Error(h(160));switch(l.tag){case 27:var n=l.stateNode,i=Ac(e);gi(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&($l(u,""),l.flags&=-33);var c=Ac(e);gi(e,c,u);break;case 3:case 4:var s=l.stateNode.containerInfo,m=Ac(e);Tc(e,m,s);break;default:throw Error(h(161))}}catch(p){se(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;lf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Kt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$r(e,t.alternate,t),t=t.sibling}function kl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:fl(4,t,t.return),kl(t);break;case 1:_t(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Jr(t,t.return,l),kl(t);break;case 27:gn(t.stateNode);case 26:case 5:_t(t,t.return),kl(t);break;case 22:t.memoizedState===null&&kl(t);break;case 30:kl(t);break;default:kl(t)}e=e.sibling}}function Wt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Wt(n,i,l),nn(4,i);break;case 1:if(Wt(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){se(a,a.return,m)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Uo(s[n],c)}catch(m){se(a,a.return,m)}}l&&u&64&&Qr(i),un(i,i.return);break;case 27:Kr(i);case 26:case 5:Wt(n,i,l),l&&a===null&&u&4&&Vr(i),un(i,i.return);break;case 12:Wt(n,i,l);break;case 31:Wt(n,i,l),l&&u&4&&Pr(n,i);break;case 13:Wt(n,i,l),l&&u&4&&ef(n,i);break;case 22:i.memoizedState===null&&Wt(n,i,l),un(i,i.return);break;case 30:break;default:Wt(n,i,l)}t=t.sibling}}function jc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Ja(l))}function xc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ja(e))}function jt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)af(e,t,l,a),t=t.sibling}function af(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:jt(e,t,l,a),n&2048&&nn(9,t);break;case 1:jt(e,t,l,a);break;case 3:jt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ja(e)));break;case 12:if(n&2048){jt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){se(t,t.return,s)}}else jt(e,t,l,a);break;case 31:jt(e,t,l,a);break;case 13:jt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?jt(e,t,l,a):cn(e,t):i._visibility&2?jt(e,t,l,a):(i._visibility|=2,ya(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&jc(u,t);break;case 24:jt(e,t,l,a),n&2048&&xc(t.alternate,t);break;default:jt(e,t,l,a)}}function ya(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=l,s=a,m=u.flags;switch(u.tag){case 0:case 11:case 15:ya(i,u,c,s,n),nn(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&2?ya(i,u,c,s,n):cn(i,u):(p._visibility|=2,ya(i,u,c,s,n)),n&&m&2048&&jc(u.alternate,u);break;case 24:ya(i,u,c,s,n),n&&m&2048&&xc(u.alternate,u);break;default:ya(i,u,c,s,n)}t=t.sibling}}function cn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:cn(l,a),n&2048&&jc(a.alternate,a);break;case 24:cn(l,a),n&2048&&xc(a.alternate,a);break;default:cn(l,a)}t=t.sibling}}var sn=8192;function pa(e,t,l){if(e.subtreeFlags&sn)for(e=e.child;e!==null;)nf(e,t,l),e=e.sibling}function nf(e,t,l){switch(e.tag){case 26:pa(e,t,l),e.flags&sn&&e.memoizedState!==null&&Xh(l,zt,e.memoizedState,e.memoizedProps);break;case 5:pa(e,t,l);break;case 3:case 4:var a=zt;zt=Di(e.stateNode.containerInfo),pa(e,t,l),zt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=sn,sn=16777216,pa(e,t,l),sn=a):pa(e,t,l));break;default:pa(e,t,l)}}function uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function on(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];He=a,sf(a,e)}uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cf(e),e=e.sibling}function cf(e){switch(e.tag){case 0:case 11:case 15:on(e),e.flags&2048&&fl(9,e,e.return);break;case 3:on(e);break;case 12:on(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pi(e)):on(e);break;default:on(e)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];He=a,sf(a,e)}uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:fl(8,t,t.return),pi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,pi(t));break;default:pi(t)}e=e.sibling}}function sf(e,t){for(;He!==null;){var l=He;switch(l.tag){case 0:case 11:case 15:fl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ja(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,He=a;else e:for(l=e;He!==null;){a=He;var n=a.sibling,i=a.return;if(Fr(a),a===l){He=null;break e}if(n!==null){n.return=i,He=n;break e}He=i}}}var nh={getCacheForType:function(e){var t=Le(Ce),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Le(Ce).controller.signal}},ih=typeof WeakMap=="function"?WeakMap:Map,ne=0,ge=null,W=null,F=0,ce=0,st=null,dl=!1,va=!1,Mc=!1,$t=0,Ee=0,ml=0,Xl=0,Cc=0,ot=0,ba=0,rn=null,Ie=null,Oc=!1,vi=0,of=0,bi=1/0,Si=null,hl=null,_e=0,gl=null,Sa=null,Ft=0,Dc=0,Nc=null,rf=null,fn=0,_c=null;function rt(){return(ne&2)!==0&&F!==0?F&-F:v.T!==null?Lc():zs()}function ff(){if(ot===0)if((F&536870912)===0||ee){var e=Cn;Cn<<=1,(Cn&3932160)===0&&(Cn=262144),ot=e}else ot=536870912;return e=ut.current,e!==null&&(e.flags|=32),ot}function Pe(e,t,l){(e===ge&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Ea(e,0),yl(e,F,ot,!1)),Na(e,l),((ne&2)===0||e!==ge)&&(e===ge&&((ne&2)===0&&(Xl|=l),Ee===4&&yl(e,F,ot,!1)),Ut(e))}function df(e,t,l){if((ne&6)!==0)throw Error(h(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Da(e,t),n=a?sh(e,t):Hc(e,t,!0),i=a;do{if(n===0){va&&!a&&yl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!uh(l)){n=Hc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=rn;var s=c.current.memoizedState.isDehydrated;if(s&&(Ea(c,u).flags|=256),u=Hc(c,u,!1),u!==2){if(Mc&&!s){c.errorRecoveryDisabledLanes|=i,Xl|=i,n=4;break e}i=Ie,Ie=n,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ea(e,0),yl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:yl(a,t,ot,!dl);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(n=vi+300-tt(),10<n)){if(yl(a,t,ot,!dl),Dn(a,0,!0)!==0)break e;Ft=t,a.timeoutHandle=Xf(mf.bind(null,a,l,Ie,Si,Oc,t,ot,Xl,ba,dl,i,"Throttled",-0,0),n);break e}mf(a,l,Ie,Si,Oc,t,ot,Xl,ba,dl,i,null,-0,0)}}break}while(!0);Ut(e)}function mf(e,t,l,a,n,i,u,c,s,m,p,E,g,y){if(e.timeoutHandle=-1,E=t.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},nf(t,i,E);var M=(i&62914560)===i?vi-tt():(i&4194048)===i?of-tt():0;if(M=Qh(E,M),M!==null){Ft=i,e.cancelPendingCommit=M(Ef.bind(null,e,t,i,l,a,n,u,c,s,p,E,null,g,y)),yl(e,i,u,!m);return}}Ef(e,t,i,l,a,n,u,c,s)}function uh(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!nt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yl(e,t,l,a){t&=~Cc,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-at(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Es(e,l,t)}function Ei(){return(ne&6)===0?(dn(0),!1):!0}function Uc(){if(W!==null){if(ce===0)var e=W.return;else e=W,Yt=Hl=null,Wu(e),fa=null,Za=0,e=W;for(;e!==null;)Xr(e.alternate,e),e=e.return;W=null}}function Ea(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,xh(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Ft=0,Uc(),ge=e,W=l=Lt(e.current,null),F=t,ce=0,st=null,dl=!1,va=Da(e,t),Mc=!1,ba=ot=Cc=Xl=ml=Ee=0,Ie=rn=null,Oc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-at(a),i=1<<n;t|=e[n],a&=~i}return $t=t,kn(),l}function hf(e,t){Q=null,v.H=tn,t===ra||t===$n?(t=Oo(),ce=3):t===wu?(t=Oo(),ce=4):ce=t===fc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,W===null&&(Ee=1,ri(e,gt(t,e.current)))}function gf(){var e=ut.current;return e===null?!0:(F&4194048)===F?bt===null:(F&62914560)===F||(F&536870912)!==0?e===bt:!1}function yf(){var e=v.H;return v.H=tn,e===null?tn:e}function pf(){var e=v.A;return v.A=nh,e}function Ai(){Ee=4,dl||(F&4194048)!==F&&ut.current!==null||(va=!0),(ml&134217727)===0&&(Xl&134217727)===0||ge===null||yl(ge,F,ot,!1)}function Hc(e,t,l){var a=ne;ne|=2;var n=yf(),i=pf();(ge!==e||F!==t)&&(Si=null,Ea(e,t)),t=!1;var u=Ee;e:do try{if(ce!==0&&W!==null){var c=W,s=st;switch(ce){case 8:Uc(),u=6;break e;case 3:case 2:case 9:case 6:ut.current===null&&(t=!0);var m=ce;if(ce=0,st=null,Aa(e,c,s,m),l&&va){u=0;break e}break;default:m=ce,ce=0,st=null,Aa(e,c,s,m)}}ch(),u=Ee;break}catch(p){hf(e,p)}while(!0);return t&&e.shellSuspendCounter++,Yt=Hl=null,ne=a,v.H=n,v.A=i,W===null&&(ge=null,F=0,kn()),u}function ch(){for(;W!==null;)vf(W)}function sh(e,t){var l=ne;ne|=2;var a=yf(),n=pf();ge!==e||F!==t?(Si=null,bi=tt()+500,Ea(e,t)):va=Da(e,t);e:do try{if(ce!==0&&W!==null){t=W;var i=st;t:switch(ce){case 1:ce=0,st=null,Aa(e,t,i,1);break;case 2:case 9:if(Mo(i)){ce=0,st=null,bf(t);break}t=function(){ce!==2&&ce!==9||ge!==e||(ce=7),Ut(e)},i.then(t,t);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:Mo(i)?(ce=0,st=null,bf(t)):(ce=0,st=null,Aa(e,t,i,7));break;case 5:var u=null;switch(W.tag){case 26:u=W.memoizedState;case 5:case 27:var c=W;if(u?nd(u):c.stateNode.complete){ce=0,st=null;var s=c.sibling;if(s!==null)W=s;else{var m=c.return;m!==null?(W=m,Ti(m)):W=null}break t}}ce=0,st=null,Aa(e,t,i,5);break;case 6:ce=0,st=null,Aa(e,t,i,6);break;case 8:Uc(),Ee=6;break e;default:throw Error(h(462))}}oh();break}catch(p){hf(e,p)}while(!0);return Yt=Hl=null,v.H=a,v.A=n,ne=l,W!==null?0:(ge=null,F=0,kn(),Ee)}function oh(){for(;W!==null&&!_d();)vf(W)}function vf(e){var t=Gr(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?Ti(e):W=t}function bf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Br(l,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Br(l,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:Wu(t);default:Xr(l,t),t=W=yo(t,$t),t=Gr(l,t,$t)}e.memoizedProps=e.pendingProps,t===null?Ti(e):W=t}function Aa(e,t,l,a){Yt=Hl=null,Wu(t),fa=null,Za=0;var n=t.return;try{if(Fm(e,n,t,l,F)){Ee=1,ri(e,gt(l,e.current)),W=null;return}}catch(i){if(n!==null)throw W=n,i;Ee=1,ri(e,gt(l,e.current)),W=null;return}t.flags&32768?(ee||a===1?e=!0:va||(F&536870912)!==0?e=!1:(dl=e=!0,(a===2||a===9||a===3||a===6)&&(a=ut.current,a!==null&&a.tag===13&&(a.flags|=16384))),Sf(t,e)):Ti(t)}function Ti(e){var t=e;do{if((t.flags&32768)!==0){Sf(t,dl);return}e=t.return;var l=eh(t.alternate,t,$t);if(l!==null){W=l;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Ee===0&&(Ee=5)}function Sf(e,t){do{var l=th(e.alternate,e);if(l!==null){l.flags&=32767,W=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=l}while(e!==null);Ee=6,W=null}function Ef(e,t,l,a,n,i,u,c,s){e.cancelPendingCommit=null;do zi();while(_e!==0);if((ne&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(i=t.lanes|t.childLanes,i|=Au,kd(e,l,i,u,c,s),e===ge&&(W=ge=null,F=0),Sa=t,gl=e,Ft=l,Dc=i,Nc=n,rf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mh(xn,function(){return xf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null,n=j.p,j.p=2,u=ne,ne|=4;try{lh(e,t,l)}finally{ne=u,j.p=n,v.T=a}}_e=1,Af(),Tf(),zf()}}function Af(){if(_e===1){_e=0;var e=gl,t=Sa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=v.T,v.T=null;var a=j.p;j.p=2;var n=ne;ne|=4;try{tf(t,e);var i=Vc,u=uo(e.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&io(c.ownerDocument.documentElement,c)){if(s!==null&&pu(c)){var m=s.start,p=s.end;if(p===void 0&&(p=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(p,c.value.length);else{var E=c.ownerDocument||document,g=E&&E.defaultView||window;if(g.getSelection){var y=g.getSelection(),M=c.textContent.length,w=Math.min(s.start,M),de=s.end===void 0?w:Math.min(s.end,M);!y.extend&&w>de&&(u=de,de=w,w=u);var f=no(c,w),o=no(c,de);if(f&&o&&(y.rangeCount!==1||y.anchorNode!==f.node||y.anchorOffset!==f.offset||y.focusNode!==o.node||y.focusOffset!==o.offset)){var d=E.createRange();d.setStart(f.node,f.offset),y.removeAllRanges(),w>de?(y.addRange(d),y.extend(o.node,o.offset)):(d.setEnd(o.node,o.offset),y.addRange(d))}}}}for(E=[],y=c;y=y.parentNode;)y.nodeType===1&&E.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<E.length;c++){var b=E[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Ri=!!Jc,Vc=Jc=null}finally{ne=n,j.p=a,v.T=l}}e.current=t,_e=2}}function Tf(){if(_e===2){_e=0;var e=gl,t=Sa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=v.T,v.T=null;var a=j.p;j.p=2;var n=ne;ne|=4;try{$r(e,t.alternate,t)}finally{ne=n,j.p=a,v.T=l}}_e=3}}function zf(){if(_e===4||_e===3){_e=0,Ud();var e=gl,t=Sa,l=Ft,a=rf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?_e=5:(_e=0,Sa=gl=null,jf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(hl=null),Ii(l),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Oa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=v.T,n=j.p,j.p=2,v.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{v.T=t,j.p=n}}(Ft&3)!==0&&zi(),Ut(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===_c?fn++:(fn=0,_c=e):fn=0,dn(0)}}function jf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ja(t)))}function zi(){return Af(),Tf(),zf(),xf()}function xf(){if(_e!==5)return!1;var e=gl,t=Dc;Dc=0;var l=Ii(Ft),a=v.T,n=j.p;try{j.p=32>l?32:l,v.T=null,l=Nc,Nc=null;var i=gl,u=Ft;if(_e=0,Sa=gl=null,Ft=0,(ne&6)!==0)throw Error(h(331));var c=ne;if(ne|=4,cf(i.current),af(i,i.current,u,l),ne=c,dn(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Oa,i)}catch{}return!0}finally{j.p=n,v.T=a,jf(e,t)}}function Mf(e,t,l){t=gt(l,t),t=rc(e.stateNode,t,2),e=sl(e,t,2),e!==null&&(Na(e,2),Ut(e))}function se(e,t,l){if(e.tag===3)Mf(e,e,l);else for(;t!==null;){if(t.tag===3){Mf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(hl===null||!hl.has(a))){e=gt(l,e),l=Mr(2),a=sl(t,l,2),a!==null&&(Cr(l,a,t,e),Na(a,2),Ut(a));break}}t=t.return}}function Bc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new ih;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Mc=!0,n.add(l),e=rh.bind(null,e,t,l),t.then(e,e))}function rh(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ge===e&&(F&l)===l&&(Ee===4||Ee===3&&(F&62914560)===F&&300>tt()-vi?(ne&2)===0&&Ea(e,0):Cc|=l,ba===F&&(ba=0)),Ut(e)}function Cf(e,t){t===0&&(t=Ss()),e=Nl(e,t),e!==null&&(Na(e,t),Ut(e))}function fh(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Cf(e,l)}function dh(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(t),Cf(e,l)}function mh(e,t){return Ki(e,t)}var ji=null,Ta=null,Rc=!1,xi=!1,wc=!1,pl=0;function Ut(e){e!==Ta&&e.next===null&&(Ta===null?ji=Ta=e:Ta=Ta.next=e),xi=!0,Rc||(Rc=!0,gh())}function dn(e,t){if(!wc&&xi){wc=!0;do for(var l=!1,a=ji;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-at(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,_f(a,i))}else i=F,i=Dn(a,a===ge?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Da(a,i)||(l=!0,_f(a,i));a=a.next}while(l);wc=!1}}function hh(){Of()}function Of(){xi=Rc=!1;var e=0;pl!==0&&jh()&&(e=pl);for(var t=tt(),l=null,a=ji;a!==null;){var n=a.next,i=Df(a,t);i===0?(a.next=null,l===null?ji=n:l.next=n,n===null&&(Ta=l)):(l=a,(e!==0||(i&3)!==0)&&(xi=!0)),a=n}_e!==0&&_e!==5||dn(e),pl!==0&&(pl=0)}function Df(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-at(i),c=1<<u,s=n[u];s===-1?((c&l)===0||(c&a)!==0)&&(n[u]=Gd(c,t)):s<=t&&(e.expiredLanes|=c),i&=~c}if(t=ge,l=F,l=Dn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Wi(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Da(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Wi(a),Ii(l)){case 2:case 8:l=vs;break;case 32:l=xn;break;case 268435456:l=bs;break;default:l=xn}return a=Nf.bind(null,e),l=Ki(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Wi(a),e.callbackPriority=2,e.callbackNode=null,2}function Nf(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(zi()&&e.callbackNode!==l)return null;var a=F;return a=Dn(e,e===ge?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(df(e,a,t),Df(e,tt()),e.callbackNode!=null&&e.callbackNode===l?Nf.bind(null,e):null)}function _f(e,t){if(zi())return null;df(e,t,!0)}function gh(){Mh(function(){(ne&6)!==0?Ki(ps,hh):Of()})}function Lc(){if(pl===0){var e=sa;e===0&&(e=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),pl=e}return pl}function Uf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hn(""+e)}function Hf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function yh(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=Uf((n[Ze]||null).action),u=a.submitter;u&&(t=(t=u[Ze]||null)?Uf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new Ln("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(pl!==0){var s=u?Hf(n,u):new FormData(n);nc(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?Hf(n,u):new FormData(n),nc(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var qc=0;qc<Eu.length;qc++){var Yc=Eu[qc],ph=Yc.toLowerCase(),vh=Yc[0].toUpperCase()+Yc.slice(1);Tt(ph,"on"+vh)}Tt(oo,"onAnimationEnd"),Tt(ro,"onAnimationIteration"),Tt(fo,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(Hm,"onTransitionRun"),Tt(Bm,"onTransitionStart"),Tt(Rm,"onTransitionCancel"),Tt(mo,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),Ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ml("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Bf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],s=c.instance,m=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=m;try{i(n)}catch(p){Gn(p)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(c=a[u],s=c.instance,m=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=m;try{i(n)}catch(p){Gn(p)}n.currentTarget=null,i=s}}}}function $(e,t){var l=t[Pi];l===void 0&&(l=t[Pi]=new Set);var a=e+"__bubble";l.has(a)||(Rf(t,e,2,!1),l.add(a))}function Gc(e,t,l){var a=0;t&&(a|=4),Rf(l,e,a,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function kc(e){if(!e[Mi]){e[Mi]=!0,Ms.forEach(function(l){l!=="selectionchange"&&(bh.has(l)||Gc(l,!1,e),Gc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,Gc("selectionchange",!1,t))}}function Rf(e,t,l,a){switch(fd(t)){case 2:var n=Zh;break;case 8:n=Kh;break;default:n=as}l=n.bind(null,t,l,e),n=void 0,!su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Xc(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Jl(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue e}c=c.parentNode}}a=a.return}qs(function(){var m=i,p=uu(l),E=[];e:{var g=ho.get(e);if(g!==void 0){var y=Ln,M=e;switch(e){case"keypress":if(Rn(l)===0)break e;case"keydown":case"keyup":y=dm;break;case"focusin":M="focus",y=du;break;case"focusout":M="blur",y=du;break;case"beforeblur":case"afterblur":y=du;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=gm;break;case oo:case ro:case fo:y=am;break;case mo:y=pm;break;case"scroll":case"scrollend":y=Id;break;case"wheel":y=bm;break;case"copy":case"cut":case"paste":y=im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Qs;break;case"toggle":case"beforetoggle":y=Em}var w=(t&4)!==0,de=!w&&(e==="scroll"||e==="scrollend"),f=w?g!==null?g+"Capture":null:g;w=[];for(var o=m,d;o!==null;){var b=o;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||f===null||(b=Ha(o,f),b!=null&&w.push(hn(o,b,d))),de)break;o=o.return}0<w.length&&(g=new y(g,M,null,l,p),E.push({event:g,listeners:w}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&l!==iu&&(M=l.relatedTarget||l.fromElement)&&(Jl(M)||M[Ql]))break e;if((y||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,y?(M=l.relatedTarget||l.toElement,y=m,M=M?Jl(M):null,M!==null&&(de=V(M),w=M.tag,M!==de||w!==5&&w!==27&&w!==6)&&(M=null)):(y=null,M=m),y!==M)){if(w=ks,b="onMouseLeave",f="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(w=Qs,b="onPointerLeave",f="onPointerEnter",o="pointer"),de=y==null?g:Ua(y),d=M==null?g:Ua(M),g=new w(b,o+"leave",y,l,p),g.target=de,g.relatedTarget=d,b=null,Jl(p)===m&&(w=new w(f,o+"enter",M,l,p),w.target=d,w.relatedTarget=de,b=w),de=b,y&&M)t:{for(w=Sh,f=y,o=M,d=0,b=f;b;b=w(b))d++;b=0;for(var H=o;H;H=w(H))b++;for(;0<d-b;)f=w(f),d--;for(;0<b-d;)o=w(o),b--;for(;d--;){if(f===o||o!==null&&f===o.alternate){w=f;break t}f=w(f),o=w(o)}w=null}else w=null;y!==null&&wf(E,g,y,w,!1),M!==null&&de!==null&&wf(E,de,M,w,!0)}}e:{if(g=m?Ua(m):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var te=Is;else if($s(g))if(Ps)te=Nm;else{te=Om;var O=Cm}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?m&&nu(m.elementType)&&(te=Is):te=Dm;if(te&&(te=te(e,m))){Fs(E,te,l,p);break e}O&&O(e,g,m),e==="focusout"&&m&&g.type==="number"&&m.memoizedProps.value!=null&&au(g,"number",g.value)}switch(O=m?Ua(m):window,e){case"focusin":($s(O)||O.contentEditable==="true")&&(ea=O,vu=m,ka=null);break;case"focusout":ka=vu=ea=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,co(E,l,p);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":co(E,l,p)}var J;if(hu)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Pl?Ks(e,l)&&(I="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(I="onCompositionStart");I&&(Js&&l.locale!=="ko"&&(Pl||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pl&&(J=Ys()):(tl=p,ou="value"in tl?tl.value:tl.textContent,Pl=!0)),O=Ci(m,I),0<O.length&&(I=new Xs(I,e,null,l,p),E.push({event:I,listeners:O}),J?I.data=J:(J=Ws(l),J!==null&&(I.data=J)))),(J=Tm?zm(e,l):jm(e,l))&&(I=Ci(m,"onBeforeInput"),0<I.length&&(O=new Xs("onBeforeInput","beforeinput",null,l,p),E.push({event:O,listeners:I}),O.data=J)),yh(E,e,m,l,p)}Bf(E,t)})}function hn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Ci(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ha(e,l),n!=null&&a.unshift(hn(e,n,i)),n=Ha(e,t),n!=null&&a.push(hn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Sh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wf(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var c=l,s=c.alternate,m=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||m===null||(s=m,n?(m=Ha(l,i),m!=null&&u.unshift(hn(l,m,s))):n||(m=Ha(l,i),m!=null&&u.push(hn(l,m,s)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var Eh=/\r\n?/g,Ah=/\u0000|\uFFFD/g;function Lf(e){return(typeof e=="string"?e:""+e).replace(Eh,`
`).replace(Ah,"")}function qf(e,t){return t=Lf(t),Lf(e)===t}function fe(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||$l(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&$l(e,""+a);break;case"className":_n(e,"class",a);break;case"tabIndex":_n(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(e,l,a);break;case"style":ws(e,a,i);break;case"data":if(t!=="object"){_n(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Hn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&fe(e,t,"name",n.name,n,null),fe(e,t,"formEncType",n.formEncType,n,null),fe(e,t,"formMethod",n.formMethod,n,null),fe(e,t,"formTarget",n.formTarget,n,null)):(fe(e,t,"encType",n.encType,n,null),fe(e,t,"method",n.method,n,null),fe(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Hn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Rt);break;case"onScroll":a!=null&&$("scroll",e);break;case"onScrollEnd":a!=null&&$("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Hn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":$("beforetoggle",e),$("toggle",e),Nn(e,"popover",a);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Nn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=$d.get(l)||l,Nn(e,l,a))}}function Qc(e,t,l,a,n,i){switch(l){case"style":ws(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=l}}break;case"children":typeof a=="string"?$l(e,a):(typeof a=="number"||typeof a=="bigint")&&$l(e,""+a);break;case"onScroll":a!=null&&$("scroll",e);break;case"onScrollEnd":a!=null&&$("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cs.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[Ze]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Nn(e,l,a)}}}function Ye(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",e),$("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:fe(e,t,i,u,l,null)}}n&&fe(e,t,"srcSet",l.srcSet,l,null),a&&fe(e,t,"src",l.src,l,null);return;case"input":$("invalid",e);var c=i=u=n=null,s=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var p=l[a];if(p!=null)switch(a){case"name":n=p;break;case"type":u=p;break;case"checked":s=p;break;case"defaultChecked":m=p;break;case"value":i=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,t));break;default:fe(e,t,a,p,l,null)}}Us(e,i,c,s,m,u,n,!1);return;case"select":$("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:fe(e,t,n,c,l,null)}t=i,l=u,e.multiple=!!a,t!=null?Wl(e,!!a,t,!1):l!=null&&Wl(e,!!a,l,!0);return;case"textarea":$("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:fe(e,t,u,c,l,null)}Bs(e,a,n,i);return;case"option":for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null)&&(s==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":fe(e,t,s,a,l,null));return;case"dialog":$("beforetoggle",e),$("toggle",e),$("cancel",e),$("close",e);break;case"iframe":case"object":$("load",e);break;case"video":case"audio":for(a=0;a<mn.length;a++)$(mn[a],e);break;case"image":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"embed":case"source":case"link":$("error",e),$("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:fe(e,t,m,a,l,null)}return;default:if(nu(t)){for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!==void 0&&Qc(e,t,p,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&fe(e,t,c,a,l,null))}function Th(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,m=null,p=null;for(y in l){var E=l[y];if(l.hasOwnProperty(y)&&E!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":s=E;default:a.hasOwnProperty(y)||fe(e,t,y,null,a,E)}}for(var g in a){var y=a[g];if(E=l[g],a.hasOwnProperty(g)&&(y!=null||E!=null))switch(g){case"type":i=y;break;case"name":n=y;break;case"checked":m=y;break;case"defaultChecked":p=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:y!==E&&fe(e,t,g,y,a,E)}}lu(e,u,c,s,m,p,i,n);return;case"select":y=u=c=g=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":y=s;default:a.hasOwnProperty(i)||fe(e,t,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":g=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&fe(e,t,n,i,a,s)}t=c,l=u,a=y,g!=null?Wl(e,!!l,g,!1):!!a!=!!l&&(t!=null?Wl(e,!!l,t,!0):Wl(e,!!l,l?[]:"",!1));return;case"textarea":y=g=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:fe(e,t,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":g=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==i&&fe(e,t,u,n,a,i)}Hs(e,g,y);return;case"option":for(var M in l)g=l[M],l.hasOwnProperty(M)&&g!=null&&!a.hasOwnProperty(M)&&(M==="selected"?e.selected=!1:fe(e,t,M,null,a,g));for(s in a)g=a[s],y=l[s],a.hasOwnProperty(s)&&g!==y&&(g!=null||y!=null)&&(s==="selected"?e.selected=g&&typeof g!="function"&&typeof g!="symbol":fe(e,t,s,g,a,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in l)g=l[w],l.hasOwnProperty(w)&&g!=null&&!a.hasOwnProperty(w)&&fe(e,t,w,null,a,g);for(m in a)if(g=a[m],y=l[m],a.hasOwnProperty(m)&&g!==y&&(g!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:fe(e,t,m,g,a,y)}return;default:if(nu(t)){for(var de in l)g=l[de],l.hasOwnProperty(de)&&g!==void 0&&!a.hasOwnProperty(de)&&Qc(e,t,de,void 0,a,g);for(p in a)g=a[p],y=l[p],!a.hasOwnProperty(p)||g===y||g===void 0&&y===void 0||Qc(e,t,p,g,a,y);return}}for(var f in l)g=l[f],l.hasOwnProperty(f)&&g!=null&&!a.hasOwnProperty(f)&&fe(e,t,f,null,a,g);for(E in a)g=a[E],y=l[E],!a.hasOwnProperty(E)||g===y||g==null&&y==null||fe(e,t,E,g,a,y)}function Yf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Yf(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],m=s.startTime;if(m>c)break;var p=s.transferSize,E=s.initiatorType;p&&Yf(E)&&(s=s.responseEnd,u+=p*(s<c?1:(c-m)/(s-m)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jc=null,Vc=null;function Oi(e){return e.nodeType===9?e:e.ownerDocument}function Gf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kc=null;function jh(){var e=window.event;return e&&e.type==="popstate"?e===Kc?!1:(Kc=e,!0):(Kc=null,!1)}var Xf=typeof setTimeout=="function"?setTimeout:void 0,xh=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,Mh=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(e){return Qf.resolve(null).then(e).catch(Ch)}:Xf;function Ch(e){setTimeout(function(){throw e})}function vl(e){return e==="head"}function Jf(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ma(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")gn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,gn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[_a]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&gn(e.ownerDocument.body);l=n}while(l);Ma(t)}function Vf(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Wc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Wc(l),eu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Oh(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_a])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function Dh(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=St(e.nextSibling),e===null))return null;return e}function Zf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=St(e.nextSibling),e===null))return null;return e}function $c(e){return e.data==="$?"||e.data==="$~"}function Fc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Nh(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ic=null;function Kf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return St(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function $f(e,t,l){switch(t=Oi(l),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function gn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);eu(e)}var Et=new Map,Ff=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var It=j.d;j.d={f:_h,r:Uh,D:Hh,C:Bh,L:Rh,m:wh,X:qh,S:Lh,M:Yh};function _h(){var e=It.f(),t=Ei();return e||t}function Uh(e){var t=Vl(e);t!==null&&t.tag===5&&t.type==="form"?mr(t):It.r(e)}var za=typeof document>"u"?null:document;function If(e,t,l){var a=za;if(a&&typeof t=="string"&&t){var n=mt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Ff.has(n)||(Ff.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ye(t,"link",e),Ue(t),a.head.appendChild(t)))}}function Hh(e){It.D(e),If("dns-prefetch",e,null)}function Bh(e,t){It.C(e,t),If("preconnect",e,t)}function Rh(e,t,l){It.L(e,t,l);var a=za;if(a&&e&&t){var n='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+mt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+mt(l.imageSizes)+'"]')):n+='[href="'+mt(e)+'"]';var i=n;switch(t){case"style":i=ja(e);break;case"script":i=xa(e)}Et.has(i)||(e=B({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Et.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(yn(i))||t==="script"&&a.querySelector(pn(i))||(t=a.createElement("link"),Ye(t,"link",e),Ue(t),a.head.appendChild(t)))}}function wh(e,t){It.m(e,t);var l=za;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+mt(a)+'"][href="'+mt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=xa(e)}if(!Et.has(i)&&(e=B({rel:"modulepreload",href:e},t),Et.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(pn(i)))return}a=l.createElement("link"),Ye(a,"link",e),Ue(a),l.head.appendChild(a)}}}function Lh(e,t,l){It.S(e,t,l);var a=za;if(a&&e){var n=Zl(a).hoistableStyles,i=ja(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(yn(i)))c.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Et.get(i))&&Pc(e,l);var s=u=a.createElement("link");Ue(s),Ye(s,"link",e),s._p=new Promise(function(m,p){s.onload=m,s.onerror=p}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ni(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function qh(e,t){It.X(e,t);var l=za;if(l&&e){var a=Zl(l).hoistableScripts,n=xa(e),i=a.get(n);i||(i=l.querySelector(pn(n)),i||(e=B({src:e,async:!0},t),(t=Et.get(n))&&es(e,t),i=l.createElement("script"),Ue(i),Ye(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Yh(e,t){It.M(e,t);var l=za;if(l&&e){var a=Zl(l).hoistableScripts,n=xa(e),i=a.get(n);i||(i=l.querySelector(pn(n)),i||(e=B({src:e,async:!0,type:"module"},t),(t=Et.get(n))&&es(e,t),i=l.createElement("script"),Ue(i),Ye(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Pf(e,t,l,a){var n=(n=K.current)?Di(n):null;if(!n)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=ja(l.href),l=Zl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=ja(l.href);var i=Zl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(yn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Et.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Et.set(e,l),i||Gh(n,e,l,u.state))),t&&a===null)throw Error(h(528,""));return u}if(t&&a!==null)throw Error(h(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=xa(l),l=Zl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function ja(e){return'href="'+mt(e)+'"'}function yn(e){return'link[rel="stylesheet"]['+e+"]"}function ed(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function Gh(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ye(t,"link",l),Ue(t),e.head.appendChild(t))}function xa(e){return'[src="'+mt(e)+'"]'}function pn(e){return"script[async]"+e}function td(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+mt(l.href)+'"]');if(a)return t.instance=a,Ue(a),a;var n=B({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ue(a),Ye(a,"style",n),Ni(a,l.precedence,e),t.instance=a;case"stylesheet":n=ja(l.href);var i=e.querySelector(yn(n));if(i)return t.state.loading|=4,t.instance=i,Ue(i),i;a=ed(l),(n=Et.get(n))&&Pc(a,n),i=(e.ownerDocument||e).createElement("link"),Ue(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Ye(i,"link",a),t.state.loading|=4,Ni(i,l.precedence,e),t.instance=i;case"script":return i=xa(l.src),(n=e.querySelector(pn(i)))?(t.instance=n,Ue(n),n):(a=l,(n=Et.get(i))&&(a=B({},l),es(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ue(n),Ye(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ni(a,l.precedence,e));return t.instance}function Ni(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function es(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _i=null;function ld(e,t,l){if(_i===null){var a=new Map,n=_i=new Map;n.set(l,a)}else n=_i,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[_a]||i[Re]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function ad(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function kh(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xh(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=ja(a.href),i=t.querySelector(yn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ui.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Ue(i);return}i=t.ownerDocument||t,a=ed(a),(n=Et.get(n))&&Pc(a,n),i=i.createElement("link"),Ue(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Ye(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Ui.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var ts=0;function Qh(e,t){return e.stylesheets&&e.count===0&&Bi(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Bi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&ts===0&&(ts=62500*zh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>ts?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hi=null;function Bi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hi=new Map,t.forEach(Jh,e),Hi=null,Ui.call(e))}function Jh(e,t){if(!(t.state.loading&4)){var l=Hi.get(e);if(l)var a=l.get(null);else{l=new Map,Hi.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Ui.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var vn={$$typeof:Te,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Vh(e,t,l,a,n,i,u,c,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$i(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.hiddenUpdates=$i(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function id(e,t,l,a,n,i,u,c,s,m,p,E){return e=new Vh(e,t,l,u,s,m,p,E,c),t=1,i===!0&&(t|=24),i=it(3,null,null,t),e.current=i,i.stateNode=e,t=Hu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Lu(i),e}function ud(e){return e?(e=aa,e):aa}function cd(e,t,l,a,n,i){n=ud(n),a.context===null?a.context=n:a.pendingContext=n,a=cl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=sl(e,a,t),l!==null&&(Pe(l,e,t),Wa(l,e,t))}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function ls(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function od(e){if(e.tag===13||e.tag===31){var t=Nl(e,67108864);t!==null&&Pe(t,e,67108864),ls(e,67108864)}}function rd(e){if(e.tag===13||e.tag===31){var t=rt();t=Fi(t);var l=Nl(e,t);l!==null&&Pe(l,e,t),ls(e,t)}}var Ri=!0;function Zh(e,t,l,a){var n=v.T;v.T=null;var i=j.p;try{j.p=2,as(e,t,l,a)}finally{j.p=i,v.T=n}}function Kh(e,t,l,a){var n=v.T;v.T=null;var i=j.p;try{j.p=8,as(e,t,l,a)}finally{j.p=i,v.T=n}}function as(e,t,l,a){if(Ri){var n=ns(a);if(n===null)Xc(e,t,a,wi,l),dd(e,a);else if($h(n,e,t,l,a))a.stopPropagation();else if(dd(e,a),t&4&&-1<Wh.indexOf(e)){for(;n!==null;){var i=Vl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=xl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-at(u);c.entanglements[1]|=s,u&=~s}Ut(i),(ne&6)===0&&(bi=tt()+500,dn(0))}}break;case 31:case 13:c=Nl(i,2),c!==null&&Pe(c,i,2),Ei(),ls(i,2)}if(i=ns(a),i===null&&Xc(e,t,a,wi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Xc(e,t,a,null,l)}}function ns(e){return e=uu(e),is(e)}var wi=null;function is(e){if(wi=null,e=Jl(e),e!==null){var t=V(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ie(t),e!==null)return e;e=null}else if(l===31){if(e=Ae(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return wi=e,null}function fd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hd()){case ps:return 2;case vs:return 8;case xn:case Bd:return 32;case bs:return 268435456;default:return 32}default:return 32}}var us=!1,bl=null,Sl=null,El=null,bn=new Map,Sn=new Map,Al=[],Wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(e,t){switch(e){case"focusin":case"focusout":bl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":El=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function En(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Vl(t),t!==null&&od(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function $h(e,t,l,a,n){switch(t){case"focusin":return bl=En(bl,e,t,l,a,n),!0;case"dragenter":return Sl=En(Sl,e,t,l,a,n),!0;case"mouseover":return El=En(El,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,En(bn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Sn.set(i,En(Sn.get(i)||null,e,t,l,a,n)),!0}return!1}function md(e){var t=Jl(e.target);if(t!==null){var l=V(t);if(l!==null){if(t=l.tag,t===13){if(t=ie(l),t!==null){e.blockedOn=t,js(e.priority,function(){rd(l)});return}}else if(t===31){if(t=Ae(l),t!==null){e.blockedOn=t,js(e.priority,function(){rd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=ns(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);iu=a,l.target.dispatchEvent(a),iu=null}else return t=Vl(l),t!==null&&od(t),e.blockedOn=l,!1;t.shift()}return!0}function hd(e,t,l){Li(e)&&l.delete(t)}function Fh(){us=!1,bl!==null&&Li(bl)&&(bl=null),Sl!==null&&Li(Sl)&&(Sl=null),El!==null&&Li(El)&&(El=null),bn.forEach(hd),Sn.forEach(hd)}function qi(e,t){e.blockedOn===t&&(e.blockedOn=null,us||(us=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Fh)))}var Yi=null;function gd(e){Yi!==e&&(Yi=e,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Yi===e&&(Yi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(is(a||l)===null)continue;break}var i=Vl(l);i!==null&&(e.splice(t,3),t-=3,nc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ma(e){function t(s){return qi(s,e)}bl!==null&&qi(bl,e),Sl!==null&&qi(Sl,e),El!==null&&qi(El,e),bn.forEach(t),Sn.forEach(t);for(var l=0;l<Al.length;l++){var a=Al[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Al.length&&(l=Al[0],l.blockedOn===null);)md(l),l.blockedOn===null&&Al.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Ze]||null;if(typeof i=="function")u||gd(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Ze]||null)c=u.formAction;else if(is(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),gd(l)}}}function yd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function cs(e){this._internalRoot=e}Gi.prototype.render=cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var l=t.current,a=rt();cd(l,a,e,t,null,null)},Gi.prototype.unmount=cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cd(e.current,2,null,e,null,null),Ei(),t[Ql]=null}};function Gi(e){this._internalRoot=e}Gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=zs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Al.length&&t!==0&&t<Al[l].priority;l++);Al.splice(l,0,e),l===0&&md(e)}};var pd=Y.version;if(pd!=="19.2.4")throw Error(h(527,pd,"19.2.4"));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=T(t),e=e!==null?P(e):null,e=e===null?null:e.stateNode,e};var Ih={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{Oa=ki.inject(Ih),lt=ki}catch{}}return Tn.createRoot=function(e,t){if(!_(e))throw Error(h(299));var l=!1,a="",n=Tr,i=zr,u=jr;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=id(e,1,!1,null,null,l,a,null,n,i,u,yd),e[Ql]=t.current,kc(e),new cs(t)},Tn.hydrateRoot=function(e,t,l){if(!_(e))throw Error(h(299));var a=!1,n="",i=Tr,u=zr,c=jr,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),t=id(e,1,!0,t,l??null,a,n,s,i,u,c,yd),t.context=ud(null),l=t.current,a=rt(),a=Fi(a),n=cl(a),n.callback=null,sl(l,n,a),l=a,t.current.lanes=l,Na(t,l),Ut(t),e[Ql]=t.current,kc(e),new Gi(t)},Tn.version="19.2.4",Tn}var Md;function sg(){if(Md)return rs.exports;Md=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(Y){console.error(Y)}}return z(),rs.exports=cg(),rs.exports}var og=sg();const xt={chapters:[{id:1,title:"JavaScript Foundations",description:"Variables, types, and the basics",lessons:[{id:"1-1",title:"What is JavaScript?",duration:"10 min",content:`
## Welcome to JavaScript! 🚀

JavaScript is the **programming language of the web**. Every website you visit uses JavaScript to create interactive experiences, from simple animations to complex web applications.

### Why Learn JavaScript?

JavaScript is everywhere:
- **Websites** — Every browser runs JavaScript
- **Mobile Apps** — React Native, Ionic
- **Desktop Apps** — Electron (VS Code, Discord, Slack)
- **Servers** — Node.js powers millions of APIs
- **Games** — Browser games, game engines
- **IoT** — Even robots and smart devices!

### A Brief History

| Year | Milestone |
|------|-----------|
| 1995 | Brendan Eich creates JavaScript in 10 days at Netscape |
| 1997 | ECMAScript 1 standardized |
| 2009 | Node.js brings JavaScript to servers |
| 2015 | ES6 (ECMAScript 2015) — massive modern update |
| Today | Most popular programming language on GitHub |

### Your First JavaScript Code

Let's write some code! Open your browser's console (press F12 or Cmd+Option+J):

\`\`\`javascript
// This is a comment - JavaScript ignores it
console.log("Hello, World!");

// You can do math
console.log(2 + 2);  // Output: 4

// Store values in variables
let name = "JavaScript Learner";
console.log("Welcome, " + name + "!");
\`\`\`

### How JavaScript Runs

\`\`\`
Your Code (.js file)
      ↓
JavaScript Engine (V8, SpiderMonkey)
      ↓
Machine Code
      ↓
Computer executes it!
\`\`\`

Every browser has a JavaScript engine:
- **Chrome** → V8 (also powers Node.js!)
- **Firefox** → SpiderMonkey
- **Safari** → JavaScriptCore
- **Edge** → V8 (Chromium-based now)

### JavaScript vs Java

Despite the similar names, they're completely different languages!

| JavaScript | Java |
|------------|------|
| Runs in browsers | Runs on JVM |
| Dynamically typed | Statically typed |
| Prototype-based | Class-based |
| Interpreted | Compiled |
| Created in 10 days | Years of development |

<tip>
💡 The name "JavaScript" was a marketing decision — Java was popular in 1995, so Netscape wanted to ride that wave!
</tip>

### Setting Up Your Development Environment

You have several options:

**Option 1: Browser Console (Quickest)**
- Press F12 in any browser
- Go to Console tab
- Start typing JavaScript!

**Option 2: VS Code (Recommended)**
\`\`\`bash
# Install VS Code from code.visualstudio.com
# Create a file: script.js
# Open with Live Server extension
\`\`\`

**Option 3: Node.js (For backend)**
\`\`\`bash
# Install from nodejs.org
node script.js
\`\`\`

### HTML + JavaScript

JavaScript runs inside HTML pages:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My First JS</title>
</head>
<body>
    <h1 id="heading">Hello!</h1>
    
    <script>
        // JavaScript goes here
        document.getElementById("heading").textContent = "Hello, JavaScript!";
    <\/script>
</body>
</html>
\`\`\`

Or link an external file:

\`\`\`html
<script src="script.js"><\/script>
\`\`\`

<warning>
⚠️ Place your \`<script>\` tag at the end of \`<body>\` or use \`defer\` attribute — this ensures HTML loads before JavaScript runs!
</warning>

### What You'll Build in This Course

By the end, you'll be able to create:
- Interactive web pages
- Form validation
- API integrations
- Single-page applications
- Node.js servers
- And much more!

Let's start coding! 💪
### 🎯 Practice Exercise

**Exercise: JavaScript Exploration**

Open your browser console and try these:

\`\`\`javascript
// Challenge 1: Create variables for yourself
let myName = "Your Name";
let myAge = 25;
let isLearningJS = true;
console.log(myName + " is " + myAge + " and learning JS: " + isLearningJS);

// Challenge 2: Do some math
let price = 29.99;
let quantity = 3;
let tax = 0.08;
let total = price * quantity * (1 + tax);
console.log("Total: $" + total.toFixed(2));

// Challenge 3: Try typeof on different values
console.log(typeof "hello");     // ?
console.log(typeof 42);          // ?
console.log(typeof true);        // ?
console.log(typeof undefined);   // ?
console.log(typeof null);        // ?  (surprise!)
\`\`\`

Try creating 5 different variables of different types and logging them!

          `},{id:"1-2",title:"Variables and Data Types",duration:"15 min",content:`
## Storing and Using Data 📦

Variables are containers that hold data. Let's learn how to create and use them!

### Declaring Variables

JavaScript has three ways to declare variables:

\`\`\`javascript
// var - the old way (avoid in modern code)
var oldWay = "I'm old school";

// let - for values that change
let score = 0;
score = 100;  // Can be reassigned

// const - for values that don't change
const PI = 3.14159;
// PI = 3;  // Error! Cannot reassign const
\`\`\`

### var vs let vs const

| Keyword | Reassignable | Block Scoped | Hoisted |
|---------|-------------|--------------|---------|
| var | ✅ Yes | ❌ No (function) | ✅ Yes |
| let | ✅ Yes | ✅ Yes | ❌ No |
| const | ❌ No | ✅ Yes | ❌ No |

<tip>
💡 Rule of thumb: Use \`const\` by default. Use \`let\` when you need to reassign. Avoid \`var\` entirely!
</tip>

### Data Types

JavaScript has **8 data types**:

**Primitive Types (7):**
\`\`\`javascript
// String - text
let name = "JavaScript";
let greeting = 'Hello!';
let template = \`Hello, \${name}!\`;  // Template literal

// Number - integers and decimals
let age = 25;
let price = 19.99;
let billion = 1e9;  // 1,000,000,000

// BigInt - very large numbers
let huge = 9007199254740991n;

// Boolean - true or false
let isAwesome = true;
let isBoring = false;

// Undefined - declared but not assigned
let mystery;
console.log(mystery);  // undefined

// Null - intentionally empty
let empty = null;

// Symbol - unique identifier
let id = Symbol("id");
\`\`\`

**Reference Type (1):**
\`\`\`javascript
// Object - collections of data
let person = {
    name: "Alex",
    age: 30,
    isStudent: true
};

// Arrays are also objects!
let colors = ["red", "green", "blue"];
\`\`\`

### Type Checking

Use \`typeof\` to check types:

\`\`\`javascript
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (famous bug!)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
\`\`\`

<warning>
⚠️ \`typeof null\` returns "object" — this is a historical bug in JavaScript that can never be fixed for backward compatibility!
</warning>

### Type Coercion

JavaScript automatically converts types (sometimes unexpectedly):

\`\`\`javascript
// String concatenation wins
console.log("5" + 3);      // "53" (string)
console.log("5" + "3");    // "53" (string)

// Math operators convert to numbers
console.log("5" - 3);      // 2 (number)
console.log("5" * "3");    // 15 (number)
console.log("10" / 2);     // 5 (number)

// Boolean conversions
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("hello"));  // true
console.log(Boolean([]));       // true (arrays are truthy!)
\`\`\`

### Truthy and Falsy Values

**Falsy values** (evaluate to false):
\`\`\`javascript
false
0
-0
0n (BigInt zero)
"" (empty string)
null
undefined
NaN
\`\`\`

**Everything else is truthy!**

\`\`\`javascript
// Common gotcha
if ([]) {
    console.log("Empty array is truthy!");  // This runs!
}

if ({}) {
    console.log("Empty object is truthy!");  // This runs!
}
\`\`\`

### String Methods

\`\`\`javascript
let str = "JavaScript is awesome";

str.length;              // 21
str.toUpperCase();       // "JAVASCRIPT IS AWESOME"
str.toLowerCase();       // "javascript is awesome"
str.includes("Script");  // true
str.startsWith("Java");  // true
str.endsWith("some");    // true
str.slice(0, 4);         // "Java"
str.split(" ");          // ["JavaScript", "is", "awesome"]
str.replace("awesome", "cool"); // "JavaScript is cool"
str.trim();              // Remove whitespace
\`\`\`

### Template Literals (ES6)

The modern way to work with strings:

\`\`\`javascript
let name = "World";
let age = 25;

// Old way (concatenation)
let oldGreeting = "Hello, " + name + "! You are " + age + " years old.";

// New way (template literals)
let newGreeting = \`Hello, \${name}! You are \${age} years old.\`;

// Multi-line strings
let multiLine = \`
    This is line 1
    This is line 2
    This is line 3
\`;

// Expressions inside
let result = \`2 + 2 = \${2 + 2}\`;  // "2 + 2 = 4"
\`\`\`

### Number Methods

\`\`\`javascript
let num = 3.14159;

num.toFixed(2);          // "3.14" (string!)
num.toString();          // "3.14159"
parseInt("42px");        // 42
parseFloat("3.14");      // 3.14
Number("42");            // 42
Number.isInteger(42);    // true
Number.isNaN(NaN);       // true
Math.round(3.7);         // 4
Math.floor(3.7);         // 3
Math.ceil(3.2);          // 4
Math.random();           // 0.0 to 0.999...
Math.max(1, 5, 3);       // 5
Math.min(1, 5, 3);       // 1
\`\`\`

Now you understand how JavaScript stores and manipulates data! 🎯
### 🎯 Practice Exercise

**Exercise: Variable Types Challenge**

\`\`\`javascript
// Challenge 1: Fix these variable declarations
// (What's wrong with each one?)
// const age = 25; age = 26;  // Error! Why?
// let let = "hello";          // Error! Why?
// var 123name = "test";       // Error! Why?

// Challenge 2: Type coercion predictions
// Predict the output BEFORE running:
console.log("5" + 3);      // ?
console.log("5" - 3);      // ?
console.log("5" * "2");    // ?
console.log(true + 1);     // ?
console.log(false + "1");  // ?

// Challenge 3: Template literals
const firstName = "Jane";
const lastName = "Doe";
const age = 28;
const greeting = \`Hello, \${firstName} \${lastName}! You are \${age} years old. Next year you'll be \${age + 1}.\`;
console.log(greeting);

// Challenge 4: Number methods
const pi = 3.14159265359;
console.log(pi.toFixed(2));        // Round to 2 decimals
console.log(Number.isInteger(pi)); // Is it an integer?
console.log(parseInt("42px"));     // Extract number from string
\`\`\`

Try converting between all the primitive types (string → number → boolean)!

          `}]},{id:2,title:"Operators and Control Flow",description:"Making decisions in code",lessons:[{id:"2-1",title:"Operators",duration:"12 min",content:`
## Operators — Doing Things with Data 🔧

Operators let you perform actions on values — math, comparisons, logic, and more!

### Arithmetic Operators

\`\`\`javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (addition)
console.log(a - b);   // 7 (subtraction)
console.log(a * b);   // 30 (multiplication)
console.log(a / b);   // 3.333... (division)
console.log(a % b);   // 1 (modulo - remainder)
console.log(a ** b);  // 1000 (exponentiation - 10³)

// Increment and Decrement
let count = 5;
count++;  // 6 (same as count = count + 1)
count--;  // 5 (same as count = count - 1)

// Pre vs Post increment
let x = 5;
console.log(x++);  // 5 (returns, THEN increments)
console.log(x);    // 6

let y = 5;
console.log(++y);  // 6 (increments, THEN returns)
\`\`\`

### Assignment Operators

\`\`\`javascript
let x = 10;

x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 4;   // x = x % 4  → 2
x **= 3;  // x = x ** 3 → 8
\`\`\`

### Comparison Operators

\`\`\`javascript
// Equality
console.log(5 == "5");   // true (loose equality - type coercion!)
console.log(5 === "5");  // false (strict equality - no coercion)

// Inequality
console.log(5 != "5");   // false (loose)
console.log(5 !== "5");  // true (strict)

// Relational
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(5 <= 4);   // false
\`\`\`

<warning>
⚠️ ALWAYS use \`===\` (strict equality) and \`!==\` (strict inequality)! Loose equality causes subtle bugs.
</warning>

### Loose vs Strict Equality Gotchas

\`\`\`javascript
// These are all true with == (loose)
console.log(0 == "");        // true
console.log(0 == false);     // true
console.log("" == false);    // true
console.log(null == undefined); // true
console.log("1" == 1);       // true

// With === (strict) - all false
console.log(0 === "");       // false
console.log(0 === false);    // false
console.log("" === false);   // false
\`\`\`

### Logical Operators

\`\`\`javascript
// AND (&&) - both must be true
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false

// OR (||) - at least one must be true
console.log(true || false);   // true
console.log(false || false);  // false

// NOT (!) - inverts the value
console.log(!true);           // false
console.log(!false);          // true
console.log(!0);              // true (0 is falsy)
console.log(!"");             // true (empty string is falsy)

// Double NOT (!!) converts to boolean
console.log(!!"hello");       // true
console.log(!!0);             // false
\`\`\`

### Short-Circuit Evaluation

\`\`\`javascript
// AND returns first falsy value, or last value
console.log("hello" && "world");  // "world"
console.log(0 && "world");        // 0
console.log("" && "world");       // ""

// OR returns first truthy value, or last value
console.log("hello" || "world");  // "hello"
console.log(0 || "default");      // "default"
console.log("" || "fallback");    // "fallback"

// Practical use: default values
let username = userInput || "Guest";

// Nullish coalescing (??) - only null/undefined
let value = null ?? "default";     // "default"
let value2 = 0 ?? "default";       // 0 (0 is not null/undefined)
let value3 = "" ?? "default";      // "" (empty string is not null/undefined)
\`\`\`

<tip>
💡 Use \`||\` for default values when falsy values should trigger the default. Use \`??\` when ONLY null/undefined should trigger the default.
</tip>

### Ternary Operator

A shorthand for if-else:

\`\`\`javascript
// condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status);  // "adult"

// Nested ternary (use sparingly!)
let score = 85;
let grade = score >= 90 ? "A" 
          : score >= 80 ? "B"
          : score >= 70 ? "C"
          : score >= 60 ? "D"
          : "F";
console.log(grade);  // "B"
\`\`\`

### Optional Chaining (?.)

Safely access nested properties:

\`\`\`javascript
let user = {
    name: "Alex",
    address: {
        city: "New York"
    }
};

// Old way (verbose)
let city = user && user.address && user.address.city;

// New way (optional chaining)
let city2 = user?.address?.city;  // "New York"

// If property doesn't exist
let country = user?.address?.country;  // undefined (no error!)

// With arrays
let firstItem = arr?.[0];

// With methods
let result = obj?.method?.();
\`\`\`

### typeof and instanceof

\`\`\`javascript
// typeof for primitives
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"

// instanceof for objects
console.log([] instanceof Array);   // true
console.log({} instanceof Object);  // true
console.log(new Date() instanceof Date);  // true

// Array.isArray() is more reliable
console.log(Array.isArray([]));     // true
console.log(Array.isArray({}));     // false
\`\`\`

Operators are the building blocks of logic in your code! 🧱
### 🎯 Practice Exercise

**Exercise: Operator Olympics**

\`\`\`javascript
// Challenge 1: Comparison predictions (no cheating!)
console.log(0 == false);        // ?
console.log(0 === false);       // ?
console.log("" == false);       // ?
console.log(null == undefined); // ?
console.log(NaN == NaN);        // ?

// Challenge 2: Build a simple calculator
function calculate(a, operator, b) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Cannot divide by zero";
        case '%': return a % b;
        case '**': return a ** b;
        default: return "Unknown operator";
    }
}

console.log(calculate(10, '+', 5));   // 15
console.log(calculate(10, '/', 0));   // Cannot divide by zero
console.log(calculate(2, '**', 10));  // 1024

// Challenge 3: Short-circuit evaluation
const user = null;
const displayName = user?.name || "Guest";
console.log(displayName);  // "Guest"
\`\`\`

Try adding more operators (like bitwise operations) to the calculator!

          `},{id:"2-2",title:"Conditionals and Loops",duration:"15 min",content:`
## Control Flow — Making Decisions 🔀

Programs need to make decisions and repeat actions. Let's learn how!

### If Statements

\`\`\`javascript
let temperature = 75;

if (temperature > 90) {
    console.log("It's hot! 🥵");
} else if (temperature > 70) {
    console.log("It's nice! 😊");
} else if (temperature > 50) {
    console.log("It's cool 🧥");
} else {
    console.log("It's cold! 🥶");
}
// Output: "It's nice! 😊"
\`\`\`

### Switch Statements

Better than multiple if-else for checking specific values:

\`\`\`javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Midweek");
        break;
    case "Friday":
        console.log("TGIF! 🎉");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend! 🎊");
        break;
    default:
        console.log("Invalid day");
}
\`\`\`

<warning>
⚠️ Don't forget the \`break\` statement! Without it, execution "falls through" to the next case.
</warning>

### For Loops

\`\`\`javascript
// Classic for loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// Loop through array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For...of (values) - ES6
for (const fruit of fruits) {
    console.log(fruit);  // "apple", "banana", "cherry"
}

// For...in (keys/indices) - use for objects!
const person = { name: "Alex", age: 30 };
for (const key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}
// "name: Alex"
// "age: 30"
\`\`\`

<tip>
💡 Use \`for...of\` for arrays (iterates values). Use \`for...in\` for objects (iterates keys).
</tip>

### While Loops

\`\`\`javascript
// While - check condition first
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
// 0, 1, 2, 3, 4

// Do...while - always runs at least once
let num = 10;
do {
    console.log(num);
    num++;
} while (num < 5);
// 10 (runs once even though condition is false!)
\`\`\`

### Break and Continue

\`\`\`javascript
// break - exit the loop entirely
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);  // 0, 1, 2, 3, 4
}

// continue - skip to next iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);  // 0, 1, 3, 4 (skips 2)
}
\`\`\`

### Nested Loops

\`\`\`javascript
// Multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(\`\${i} x \${j} = \${i * j}\`);
    }
}
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 2 x 1 = 2
// ... etc
\`\`\`

### Labeled Statements

Break out of nested loops:

\`\`\`javascript
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;  // Exits BOTH loops!
        }
        console.log(i, j);
    }
}
// 0 0
// 0 1
// 0 2
// 1 0
// (stops here)
\`\`\`

### Loop Performance Tips

\`\`\`javascript
const arr = [1, 2, 3, 4, 5];

// ❌ Slower - length recalculated each iteration
for (let i = 0; i < arr.length; i++) { }

// ✅ Faster - cache the length
for (let i = 0, len = arr.length; i < len; i++) { }

// ✅ Even simpler - use for...of
for (const item of arr) { }

// ✅ Or array methods (most readable)
arr.forEach(item => console.log(item));
\`\`\`

### Practical Examples

\`\`\`javascript
// FizzBuzz - classic interview question!
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Find first even number
const numbers = [1, 3, 5, 8, 9, 10];
let firstEven;
for (const num of numbers) {
    if (num % 2 === 0) {
        firstEven = num;
        break;
    }
}
console.log(firstEven);  // 8

// Sum all numbers
let sum = 0;
for (const num of numbers) {
    sum += num;
}
console.log(sum);  // 36
\`\`\`

Control flow is the foundation of programming logic! 🧠
### 🎯 Practice Exercise

**Exercise: Loop & Conditional Challenges**

\`\`\`javascript
// Challenge 1: FizzBuzz (classic interview question!)
for (let i = 1; i <= 30; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Challenge 2: Build a number guessing game
function guessingGame(secret) {
    const guesses = [50, 25, 37, 42];
    for (const guess of guesses) {
        if (guess === secret) {
            console.log(\`Found it! The number is \${guess}\`);
            return;
        } else if (guess < secret) {
            console.log(\`\${guess} is too low!\`);
        } else {
            console.log(\`\${guess} is too high!\`);
        }
    }
    console.log("Out of guesses!");
}
guessingGame(42);

// Challenge 3: Create a multiplication table
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += String(i * j).padStart(4);
    }
    console.log(row);
}
\`\`\`

Try implementing a simple text-based tic-tac-toe game using loops and conditionals!

          `}]},{id:3,title:"Functions",description:"Reusable blocks of code",lessons:[{id:"3-1",title:"Function Basics",duration:"14 min",content:`
## Functions — Reusable Code Blocks 📦

Functions let you write code once and use it many times!

### Declaring Functions

\`\`\`javascript
// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Call the function
console.log(greet("World"));  // "Hello, World!"

// Function Expression
const greet2 = function(name) {
    return "Hi, " + name + "!";
};

// Arrow Function (ES6)
const greet3 = (name) => {
    return "Hey, " + name + "!";
};

// Arrow Function - short form (implicit return)
const greet4 = name => "Yo, " + name + "!";
\`\`\`

### Parameters and Arguments

\`\`\`javascript
// Parameters with default values
function createUser(name, age = 18, country = "USA") {
    return { name, age, country };
}

console.log(createUser("Alex"));
// { name: "Alex", age: 18, country: "USA" }

console.log(createUser("Maria", 25, "Spain"));
// { name: "Maria", age: 25, country: "Spain" }

// Rest parameters (collect remaining args)
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));  // 15

// Spread operator (opposite of rest)
const nums = [1, 2, 3];
console.log(sum(...nums));  // 6
\`\`\`

### Return Values

\`\`\`javascript
// Single return value
function square(x) {
    return x * x;
}

// Multiple values (return an object or array)
function getMinMax(numbers) {
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
}

const result = getMinMax([5, 2, 9, 1, 7]);
console.log(result.min);  // 1
console.log(result.max);  // 9

// Destructuring the return
const { min, max } = getMinMax([5, 2, 9, 1, 7]);

// No return = returns undefined
function noReturn() {
    console.log("I don't return anything");
}
console.log(noReturn());  // undefined
\`\`\`

### Arrow Functions

\`\`\`javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function - full form
const add2 = (a, b) => {
    return a + b;
};

// Arrow function - concise (implicit return)
const add3 = (a, b) => a + b;

// Single parameter - no parentheses needed
const double = x => x * 2;

// No parameters - empty parentheses required
const sayHello = () => "Hello!";

// Returning an object - wrap in parentheses
const createPerson = (name, age) => ({ name, age });
\`\`\`

<tip>
💡 Arrow functions don't have their own \`this\` binding — they inherit it from the surrounding scope. This is important for callbacks!
</tip>

### Function Scope

\`\`\`javascript
let globalVar = "I'm global";

function outer() {
    let outerVar = "I'm in outer";
    
    function inner() {
        let innerVar = "I'm in inner";
        
        console.log(globalVar);  // ✅ Accessible
        console.log(outerVar);   // ✅ Accessible
        console.log(innerVar);   // ✅ Accessible
    }
    
    inner();
    // console.log(innerVar);  // ❌ Error! Not accessible
}

outer();
// console.log(outerVar);  // ❌ Error! Not accessible
\`\`\`

### Hoisting

\`\`\`javascript
// Function declarations are hoisted
sayHi();  // Works! "Hi!"

function sayHi() {
    console.log("Hi!");
}

// Function expressions are NOT hoisted
// sayBye();  // ❌ Error! sayBye is not defined

const sayBye = function() {
    console.log("Bye!");
};

// Variables declared with var are hoisted (but not initialized)
console.log(x);  // undefined (not an error, but dangerous!)
var x = 5;

// let and const are NOT hoisted
// console.log(y);  // ❌ Error!
let y = 5;
\`\`\`

<warning>
⚠️ Hoisting can cause confusing bugs. Declare all functions and variables at the top of their scope!
</warning>

### IIFE (Immediately Invoked Function Expression)

\`\`\`javascript
// Execute a function immediately
(function() {
    console.log("I run immediately!");
})();

// With arrow function
(() => {
    console.log("Arrow IIFE!");
})();

// Useful for creating private scope
const counter = (function() {
    let count = 0;  // Private variable
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
})();

console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.getCount());   // 2
// console.log(count);  // ❌ Error! count is private
\`\`\`

Functions are the heart of JavaScript programming! ❤️
### 🎯 Practice Exercise

**Exercise: Function Workshop**

\`\`\`javascript
// Challenge 1: Write a function that checks if a string is a palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("racecar"));     // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

// Challenge 2: Create a function that returns a function (closure)
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15

// Challenge 3: Write a function with default parameters and rest params
function createProfile(name, age = 25, ...hobbies) {
    return \`\${name} (age \${age}) enjoys: \${hobbies.join(', ')}\`;
}
console.log(createProfile("Alice", 30, "coding", "hiking", "chess"));
\`\`\`

Try creating a function that composes two functions together: compose(f, g) returns a function that does f(g(x)).

          `},{id:"3-2",title:"Advanced Function Concepts",duration:"15 min",content:`
## Higher-Order Functions & Closures 🔮

Let's explore the powerful patterns that make JavaScript unique!

### Higher-Order Functions

Functions that take functions as arguments or return functions:

\`\`\`javascript
// Passing a function as an argument
function operate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(5, 3, add));       // 8
console.log(operate(5, 3, multiply));  // 15

// Returning a function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
\`\`\`

### Closures

A closure is when a function "remembers" variables from its outer scope:

\`\`\`javascript
function createCounter() {
    let count = 0;  // This variable is "enclosed"
    
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
console.log(counter.getCount());   // 1

// Each call creates a NEW closure with its own count
const counter2 = createCounter();
console.log(counter2.getCount());  // 0 (separate count!)
\`\`\`

<tip>
💡 Closures are powerful for data privacy — the \`count\` variable can't be accessed directly from outside!
</tip>

### Callback Functions

Functions passed to other functions to be called later:

\`\`\`javascript
// Synchronous callback
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2);
});
// 2, 4, 6, 8, 10

// Arrow function callback
numbers.forEach(num => console.log(num * 2));

// Asynchronous callback
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("This runs immediately");
// Output:
// "This runs immediately"
// (2 seconds later) "This runs after 2 seconds"
\`\`\`

### Array Methods with Callbacks

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter - keep elements that pass a test
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4]

// find - get first element that passes
const firstBig = numbers.find(n => n > 3);
console.log(firstBig);  // 4

// findIndex - get index of first match
const index = numbers.findIndex(n => n > 3);
console.log(index);  // 3

// some - check if ANY element passes
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven);  // true

// every - check if ALL elements pass
const allPositive = numbers.every(n => n > 0);
console.log(allPositive);  // true

// reduce - accumulate to a single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);  // 15

const product = numbers.reduce((acc, n) => acc * n, 1);
console.log(product);  // 120
\`\`\`

### Reduce Deep Dive

\`\`\`javascript
// Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const counts = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(counts);
// { apple: 3, banana: 2, orange: 1 }

// Group by property
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

const byAge = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) acc[age] = [];
    acc[age].push(person);
    return acc;
}, {});

console.log(byAge);
// { 25: [{Alice}, {Charlie}], 30: [{Bob}] }

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat);  // [1, 2, 3, 4, 5, 6]

// Or use flat() method
console.log(nested.flat());  // [1, 2, 3, 4, 5, 6]
\`\`\`

### Method Chaining

\`\`\`javascript
const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Shirt", price: 50, category: "Clothing" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "Pants", price: 80, category: "Clothing" },
    { name: "Tablet", price: 500, category: "Electronics" }
];

// Chain: filter → map → reduce
const totalElectronics = products
    .filter(p => p.category === "Electronics")
    .map(p => p.price)
    .reduce((sum, price) => sum + price, 0);

console.log(totalElectronics);  // 2500

// Get names of expensive products, sorted
const expensiveNames = products
    .filter(p => p.price > 100)
    .sort((a, b) => b.price - a.price)
    .map(p => p.name);

console.log(expensiveNames);  // ["Laptop", "Phone", "Tablet"]
\`\`\`

<warning>
⚠️ Long chains can be hard to debug. Break them up with intermediate variables if they get complex!
</warning>

Higher-order functions make your code declarative and elegant! ✨
### 🎯 Practice Exercise

**Exercise: Advanced Functions Challenge**

\`\`\`javascript
// Challenge 1: Implement a simple memoize function
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            console.log("From cache!");
            return cache[key];
        }
        cache[key] = fn(...args);
        return cache[key];
    };
}

const slowSquare = memoize((n) => {
    console.log("Computing...");
    return n * n;
});
console.log(slowSquare(5));  // Computing... 25
console.log(slowSquare(5));  // From cache! 25

// Challenge 2: Implement curry function
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) return fn(...args);
        return (...more) => curried(...args, ...more);
    };
}

const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));    // 6
console.log(add(1, 2)(3));    // 6
console.log(add(1)(2, 3));    // 6

// Challenge 3: Debounce implementation
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}
\`\`\`

Try implementing a throttle function (similar to debounce but fires at intervals)!

          `}]},{id:4,title:"Objects and Arrays",description:"Working with complex data",lessons:[{id:"4-1",title:"Objects Deep Dive",duration:"14 min",content:`
## Objects — Collections of Properties 🗂️

Objects are the foundation of JavaScript. Let's master them!

### Creating Objects

\`\`\`javascript
// Object literal (most common)
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Constructor
const person2 = new Object();
person2.name = "Bob";

// Object.create()
const person3 = Object.create(null);  // No prototype

// ES6 shorthand properties
const name = "Charlie";
const age = 25;
const person4 = { name, age };  // Same as { name: name, age: age }
\`\`\`

### Accessing Properties

\`\`\`javascript
const user = {
    name: "Alice",
    "full name": "Alice Smith",
    123: "numeric key"
};

// Dot notation
console.log(user.name);  // "Alice"

// Bracket notation (required for special keys)
console.log(user["full name"]);  // "Alice Smith"
console.log(user[123]);          // "numeric key"

// Dynamic property access
const key = "name";
console.log(user[key]);  // "Alice"

// Optional chaining
console.log(user?.address?.city);  // undefined (no error)
\`\`\`

### Modifying Objects

\`\`\`javascript
const car = {
    brand: "Toyota",
    model: "Camry"
};

// Add property
car.year = 2024;

// Modify property
car.model = "Corolla";

// Delete property
delete car.brand;

console.log(car);  // { model: "Corolla", year: 2024 }
\`\`\`

### Object Methods

\`\`\`javascript
const calculator = {
    value: 0,
    
    // Method shorthand (ES6)
    add(n) {
        this.value += n;
        return this;  // Enable chaining
    },
    
    subtract(n) {
        this.value -= n;
        return this;
    },
    
    multiply(n) {
        this.value *= n;
        return this;
    },
    
    getResult() {
        return this.value;
    }
};

// Method chaining
const result = calculator
    .add(10)
    .multiply(2)
    .subtract(5)
    .getResult();

console.log(result);  // 15
\`\`\`

### this Keyword

\`\`\`javascript
const person = {
    name: "Alice",
    
    // Regular function - this refers to the object
    greet() {
        console.log(\`Hi, I'm \${this.name}\`);
    },
    
    // Arrow function - this refers to outer scope!
    greetArrow: () => {
        console.log(\`Hi, I'm \${this.name}\`);  // undefined!
    }
};

person.greet();       // "Hi, I'm Alice"
person.greetArrow();  // "Hi, I'm undefined"
\`\`\`

<warning>
⚠️ Don't use arrow functions for object methods if you need \`this\` to refer to the object!
</warning>

### Object Destructuring

\`\`\`javascript
const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    country: "USA"
};

// Basic destructuring
const { name, age } = person;
console.log(name, age);  // "Alice" 30

// Rename variables
const { name: personName, age: personAge } = person;
console.log(personName);  // "Alice"

// Default values
const { phone = "N/A" } = person;
console.log(phone);  // "N/A"

// Nested destructuring
const user = {
    id: 1,
    profile: {
        name: "Bob",
        email: "bob@email.com"
    }
};

const { profile: { name: userName, email } } = user;
console.log(userName, email);  // "Bob" "bob@email.com"

// Rest pattern
const { name: n, ...rest } = person;
console.log(rest);  // { age: 30, city: "New York", country: "USA" }
\`\`\`

### Object Static Methods

\`\`\`javascript
const obj = { a: 1, b: 2, c: 3 };

// Get keys
console.log(Object.keys(obj));    // ["a", "b", "c"]

// Get values
console.log(Object.values(obj));  // [1, 2, 3]

// Get key-value pairs
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]

// Create from entries
const entries = [["x", 10], ["y", 20]];
console.log(Object.fromEntries(entries));  // { x: 10, y: 20 }

// Merge objects
const defaults = { theme: "dark", lang: "en" };
const userPrefs = { lang: "es" };
const settings = Object.assign({}, defaults, userPrefs);
console.log(settings);  // { theme: "dark", lang: "es" }

// Spread operator (preferred)
const settings2 = { ...defaults, ...userPrefs };
console.log(settings2);  // { theme: "dark", lang: "es" }

// Freeze object (prevent changes)
const frozen = Object.freeze({ x: 1 });
frozen.x = 2;  // Silently fails (error in strict mode)
console.log(frozen.x);  // 1
\`\`\`

<tip>
💡 Use spread \`{...obj}\` for shallow copies. For deep copies, use \`structuredClone(obj)\` or \`JSON.parse(JSON.stringify(obj))\`.
</tip>

Objects are everywhere in JavaScript — master them! 🎯
### 🎯 Practice Exercise

**Exercise: Object Mastery**

\`\`\`javascript
// Challenge 1: Create a bank account object with methods
const bankAccount = {
    balance: 1000,
    transactions: [],
    
    deposit(amount) {
        this.balance += amount;
        this.transactions.push({ type: 'deposit', amount, date: new Date() });
        return this;
    },
    
    withdraw(amount) {
        if (amount > this.balance) throw new Error("Insufficient funds");
        this.balance -= amount;
        this.transactions.push({ type: 'withdraw', amount, date: new Date() });
        return this;
    },
    
    getStatement() {
        console.log("--- Statement ---");
        this.transactions.forEach(t => 
            console.log(\`\${t.type}: $\${t.amount}\`));
        console.log(\`Balance: $\${this.balance}\`);
    }
};

bankAccount.deposit(500).withdraw(200).deposit(300).getStatement();

// Challenge 2: Deep clone an object
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
// Or use: structuredClone(obj) in modern JS

// Challenge 3: Create an object from two arrays (keys and values)
const fromArrays = (keys, values) => 
    Object.fromEntries(keys.map((k, i) => [k, values[i]]));
console.log(fromArrays(['a', 'b', 'c'], [1, 2, 3]));
\`\`\`

Try extending the bank account with an interest calculation method!

          `},{id:"4-2",title:"Arrays Deep Dive",duration:"15 min",content:`
## Arrays — Ordered Collections 📚

Arrays store lists of items. Let's explore all their features!

### Creating Arrays

\`\`\`javascript
// Array literal
const fruits = ["apple", "banana", "cherry"];

// Array constructor
const numbers = new Array(1, 2, 3);

// Array.from() - convert iterable to array
const chars = Array.from("hello");  // ["h", "e", "l", "l", "o"]

// Array.of() - create array from arguments
const arr = Array.of(7);  // [7] (not empty array of length 7!)

// Fill with values
const zeros = new Array(5).fill(0);  // [0, 0, 0, 0, 0]

// Generate sequence
const sequence = Array.from({ length: 5 }, (_, i) => i + 1);
// [1, 2, 3, 4, 5]
\`\`\`

### Accessing Elements

\`\`\`javascript
const arr = ["a", "b", "c", "d", "e"];

// By index
console.log(arr[0]);   // "a"
console.log(arr[4]);   // "e"
console.log(arr[-1]);  // undefined (no negative indexing!)

// at() method - supports negative indices (ES2022)
console.log(arr.at(0));   // "a"
console.log(arr.at(-1));  // "e" (last element!)
console.log(arr.at(-2));  // "d" (second to last!)

// Length
console.log(arr.length);  // 5

// First and last
const first = arr[0];
const last = arr[arr.length - 1];  // or arr.at(-1)
\`\`\`

### Modifying Arrays

\`\`\`javascript
const arr = ["a", "b", "c"];

// Add to end
arr.push("d");         // ["a", "b", "c", "d"]
arr.push("e", "f");    // ["a", "b", "c", "d", "e", "f"]

// Remove from end
const last = arr.pop();  // "f", arr = ["a", "b", "c", "d", "e"]

// Add to beginning
arr.unshift("z");      // ["z", "a", "b", "c", "d", "e"]

// Remove from beginning
const first = arr.shift();  // "z", arr = ["a", "b", "c", "d", "e"]

// Splice - remove/insert at any position
// splice(startIndex, deleteCount, ...itemsToAdd)
const nums = [1, 2, 3, 4, 5];
nums.splice(2, 1);        // Remove 1 element at index 2: [1, 2, 4, 5]
nums.splice(2, 0, 3);     // Insert 3 at index 2: [1, 2, 3, 4, 5]
nums.splice(1, 2, 'a', 'b'); // Replace 2 elements: [1, 'a', 'b', 4, 5]
\`\`\`

### Non-Mutating Methods

\`\`\`javascript
const original = [1, 2, 3, 4, 5];

// slice - copy portion of array
const slice1 = original.slice(1, 4);   // [2, 3, 4]
const slice2 = original.slice(-2);     // [4, 5]
const copy = original.slice();         // Full copy

// concat - merge arrays
const merged = original.concat([6, 7], [8, 9]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Spread operator (preferred)
const merged2 = [...original, 6, 7, ...[8, 9]];

// original is unchanged!
console.log(original);  // [1, 2, 3, 4, 5]
\`\`\`

<tip>
💡 Methods like \`push\`, \`pop\`, \`splice\` MUTATE the original array. Methods like \`slice\`, \`concat\`, \`map\`, \`filter\` return NEW arrays.
</tip>

### Array Destructuring

\`\`\`javascript
const colors = ["red", "green", "blue", "yellow"];

// Basic destructuring
const [first, second] = colors;
console.log(first, second);  // "red" "green"

// Skip elements
const [, , third] = colors;
console.log(third);  // "blue"

// Rest pattern
const [head, ...tail] = colors;
console.log(head);  // "red"
console.log(tail);  // ["green", "blue", "yellow"]

// Default values
const [a, b, c, d, e = "purple"] = colors;
console.log(e);  // "purple"

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);  // 2 1
\`\`\`

### Searching Arrays

\`\`\`javascript
const fruits = ["apple", "banana", "cherry", "banana"];

// indexOf / lastIndexOf
console.log(fruits.indexOf("banana"));      // 1
console.log(fruits.lastIndexOf("banana"));  // 3
console.log(fruits.indexOf("grape"));       // -1 (not found)

// includes
console.log(fruits.includes("cherry"));  // true
console.log(fruits.includes("grape"));   // false

// find - first element matching condition
const numbers = [1, 5, 10, 15, 20];
const found = numbers.find(n => n > 8);
console.log(found);  // 10

// findIndex
const foundIndex = numbers.findIndex(n => n > 8);
console.log(foundIndex);  // 2

// findLast / findLastIndex (ES2023)
const foundLast = numbers.findLast(n => n > 8);
console.log(foundLast);  // 20
\`\`\`

### Sorting Arrays

\`\`\`javascript
const fruits = ["cherry", "apple", "banana"];
fruits.sort();  // Alphabetical: ["apple", "banana", "cherry"]

// Numbers need a compare function!
const nums = [10, 2, 30, 4];
nums.sort();  // ❌ Wrong! ["10", "2", "30", "4"] (string sort)

nums.sort((a, b) => a - b);  // ✅ Ascending: [2, 4, 10, 30]
nums.sort((a, b) => b - a);  // ✅ Descending: [30, 10, 4, 2]

// Sort objects
const people = [
    { name: "Bob", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Charlie", age: 35 }
];

people.sort((a, b) => a.age - b.age);
// Sorted by age ascending

// Reverse
const arr = [1, 2, 3];
arr.reverse();  // [3, 2, 1]

// toSorted() / toReversed() - non-mutating (ES2023)
const original = [3, 1, 2];
const sorted = original.toSorted((a, b) => a - b);
console.log(original);  // [3, 1, 2] (unchanged!)
console.log(sorted);    // [1, 2, 3]
\`\`\`

<warning>
⚠️ \`sort()\` mutates the original array and sorts as strings by default. Always provide a compare function for numbers!
</warning>

Arrays are essential for working with collections of data! 📊
### 🎯 Practice Exercise

**Exercise: Array Gymnastics**

\`\`\`javascript
// Challenge 1: Implement common array utilities
const students = [
    { name: "Alice", grade: 92 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 78 },
    { name: "Diana", grade: 95 },
    { name: "Eve", grade: 88 }
];

// Get names of students with grade > 85
const topStudents = students
    .filter(s => s.grade > 85)
    .map(s => s.name);
console.log(topStudents);  // ["Alice", "Diana", "Eve"]

// Calculate class average
const average = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log("Average:", average);

// Challenge 2: Flatten a nested array
const nested = [[1, 2], [3, [4, 5]], [6]];
const flatten = (arr) => arr.reduce((flat, item) => 
    flat.concat(Array.isArray(item) ? flatten(item) : item), []);
console.log(flatten(nested));  // [1, 2, 3, 4, 5, 6]

// Challenge 3: Group array elements
const groupBy = (arr, key) => arr.reduce((groups, item) => {
    const group = item[key];
    groups[group] = groups[group] || [];
    groups[group].push(item);
    return groups;
}, {});

const people = [
    { name: "Alice", city: "NYC" },
    { name: "Bob", city: "LA" },
    { name: "Charlie", city: "NYC" }
];
console.log(groupBy(people, "city"));
\`\`\`

Try implementing \`unique\`, \`intersection\`, and \`difference\` functions for arrays!

          `}]},{id:5,title:"DOM Manipulation",description:"Making web pages interactive",lessons:[{id:"5-1",title:"Selecting and Modifying Elements",duration:"15 min",content:`
## The DOM — Your Page as Objects 🌳

The DOM (Document Object Model) represents your HTML as a tree of objects that JavaScript can manipulate!

### What is the DOM?

\`\`\`
HTML Document:
<html>
  <head><title>Page</title></head>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>

DOM Tree:
document
  └── html
        ├── head
        │     └── title
        │           └── "Page"
        └── body
              ├── h1
              │     └── "Hello"
              └── p
                    └── "World"
\`\`\`

### Selecting Elements

\`\`\`javascript
// By ID (returns single element)
const header = document.getElementById("header");

// By class (returns HTMLCollection)
const items = document.getElementsByClassName("item");

// By tag name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName("p");

// Query selector (returns first match)
const first = document.querySelector(".item");
const button = document.querySelector("#submit-btn");
const link = document.querySelector("a[href='#']");

// Query selector all (returns NodeList)
const allItems = document.querySelectorAll(".item");
const allLinks = document.querySelectorAll("nav a");

// Modern best practice: use querySelector/querySelectorAll
\`\`\`

<tip>
💡 \`querySelector\` uses CSS selector syntax — anything you can select in CSS, you can select in JavaScript!
</tip>

### HTMLCollection vs NodeList

\`\`\`javascript
// HTMLCollection (live - updates automatically)
const divs = document.getElementsByTagName("div");

// NodeList from querySelectorAll (static snapshot)
const items = document.querySelectorAll(".item");

// Convert to array for array methods
const divsArray = Array.from(divs);
const itemsArray = [...items];

// NodeList has forEach built-in
items.forEach(item => console.log(item));

// HTMLCollection doesn't!
// divs.forEach(...)  // Error!
Array.from(divs).forEach(div => console.log(div));
\`\`\`

### Modifying Content

\`\`\`javascript
const element = document.querySelector("#myDiv");

// Text content (plain text, safer)
element.textContent = "Hello, World!";
console.log(element.textContent);

// innerHTML (can include HTML, be careful!)
element.innerHTML = "<strong>Bold</strong> and <em>italic</em>";

// innerText (respects CSS visibility)
element.innerText = "Visible text only";

// Value (for form inputs)
const input = document.querySelector("input");
input.value = "Default text";
console.log(input.value);
\`\`\`

<warning>
⚠️ Never use \`innerHTML\` with user input! It can lead to XSS (cross-site scripting) attacks. Use \`textContent\` instead.
</warning>

### Modifying Attributes

\`\`\`javascript
const link = document.querySelector("a");

// Get attribute
const href = link.getAttribute("href");

// Set attribute
link.setAttribute("href", "https://example.com");
link.setAttribute("target", "_blank");

// Remove attribute
link.removeAttribute("target");

// Check if attribute exists
const hasHref = link.hasAttribute("href");

// Direct property access (for standard attributes)
const img = document.querySelector("img");
img.src = "image.jpg";
img.alt = "Description";

// data-* attributes
const card = document.querySelector(".card");
card.dataset.id = "123";       // Sets data-id="123"
card.dataset.userName = "Bob"; // Sets data-user-name="Bob"
console.log(card.dataset.id);  // "123"
\`\`\`

### Modifying Styles

\`\`\`javascript
const box = document.querySelector(".box");

// Individual style properties (camelCase!)
box.style.backgroundColor = "blue";
box.style.fontSize = "20px";
box.style.marginTop = "10px";
box.style.display = "flex";

// Multiple styles at once
box.style.cssText = "background: red; color: white; padding: 20px;";

// Get computed styles (includes CSS file styles)
const computed = window.getComputedStyle(box);
console.log(computed.backgroundColor);
console.log(computed.width);
\`\`\`

### Working with Classes

\`\`\`javascript
const element = document.querySelector(".card");

// Add class
element.classList.add("active");
element.classList.add("highlight", "visible");  // Multiple

// Remove class
element.classList.remove("active");

// Toggle class (add if missing, remove if present)
element.classList.toggle("active");

// Check if class exists
const hasActive = element.classList.contains("active");

// Replace class
element.classList.replace("old-class", "new-class");

// Old way (avoid)
element.className = "card active";  // Overwrites all classes!
\`\`\`

<tip>
💡 Use \`classList\` methods instead of setting \`className\` directly — it's safer and more flexible!
</tip>

### Practical Example

\`\`\`javascript
// Dark mode toggle
const toggleBtn = document.querySelector("#dark-mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    // Update button text
    const isDark = body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
    
    // Save preference
    localStorage.setItem("darkMode", isDark);
});

// Load saved preference on page load
if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "Light Mode";
}
\`\`\`

The DOM is your gateway to interactive web pages! 🎨
          `},{id:"5-2",title:"Events and Event Handling",duration:"15 min",content:`
## Events — Responding to User Actions 🎯

Events let your page respond to clicks, key presses, form submissions, and more!

### Adding Event Listeners

\`\`\`javascript
const button = document.querySelector("#myButton");

// addEventListener (recommended)
button.addEventListener("click", function(event) {
    console.log("Button clicked!");
    console.log(event);  // Event object with details
});

// Arrow function
button.addEventListener("click", (e) => {
    console.log("Clicked!", e.target);
});

// Named function (easier to remove later)
function handleClick(e) {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);
\`\`\`

### Common Event Types

\`\`\`javascript
// Mouse events
element.addEventListener("click", handler);      // Single click
element.addEventListener("dblclick", handler);   // Double click
element.addEventListener("mouseenter", handler); // Mouse enters
element.addEventListener("mouseleave", handler); // Mouse leaves
element.addEventListener("mousemove", handler);  // Mouse moves
element.addEventListener("mousedown", handler);  // Mouse button pressed
element.addEventListener("mouseup", handler);    // Mouse button released

// Keyboard events
document.addEventListener("keydown", handler);   // Key pressed
document.addEventListener("keyup", handler);     // Key released
document.addEventListener("keypress", handler);  // Character typed (deprecated)

// Form events
form.addEventListener("submit", handler);        // Form submitted
input.addEventListener("input", handler);        // Value changes (real-time)
input.addEventListener("change", handler);       // Value changes (on blur)
input.addEventListener("focus", handler);        // Element focused
input.addEventListener("blur", handler);         // Element loses focus

// Window events
window.addEventListener("load", handler);        // Page fully loaded
window.addEventListener("DOMContentLoaded", handler); // DOM ready
window.addEventListener("resize", handler);      // Window resized
window.addEventListener("scroll", handler);      // Page scrolled
\`\`\`

### The Event Object

\`\`\`javascript
document.addEventListener("click", (event) => {
    // Common properties
    console.log(event.type);       // "click"
    console.log(event.target);     // Element that triggered event
    console.log(event.currentTarget); // Element with the listener
    console.log(event.timeStamp);  // When event occurred
    
    // Mouse position
    console.log(event.clientX, event.clientY);  // Viewport position
    console.log(event.pageX, event.pageY);      // Page position
    
    // Modifier keys
    console.log(event.shiftKey);   // Was Shift held?
    console.log(event.ctrlKey);    // Was Ctrl held?
    console.log(event.altKey);     // Was Alt held?
    console.log(event.metaKey);    // Was Cmd/Win held?
});

// Keyboard events
document.addEventListener("keydown", (event) => {
    console.log(event.key);        // "a", "Enter", "Escape", etc.
    console.log(event.code);       // "KeyA", "Enter", etc.
    console.log(event.repeat);     // Is key being held?
});
\`\`\`

### Prevent Default Behavior

\`\`\`javascript
// Prevent form submission (page reload)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted without reload!");
    // Handle form data with JavaScript instead
});

// Prevent link navigation
link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Link clicked but not followed!");
});

// Prevent right-click menu
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log("Custom right-click menu!");
});
\`\`\`

### Event Bubbling and Capturing

\`\`\`javascript
// Events bubble UP by default
// grandparent → parent → child

// Click on child:
// 1. Child handler fires
// 2. Parent handler fires
// 3. Grandparent handler fires

parent.addEventListener("click", () => {
    console.log("Parent clicked!");
});

child.addEventListener("click", (e) => {
    console.log("Child clicked!");
    e.stopPropagation();  // Stop bubbling to parent!
});

// Capture phase (fires BEFORE bubbling)
parent.addEventListener("click", () => {
    console.log("Captured at parent!");
}, true);  // Third argument enables capture
\`\`\`

### Event Delegation

Instead of adding listeners to many elements, add ONE to the parent:

\`\`\`javascript
// ❌ Bad - listener on every button
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", handleClick);
});

// ✅ Good - one listener on parent (event delegation)
document.querySelector(".button-container").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        console.log("Button clicked:", e.target.textContent);
    }
});

// Works even for dynamically added buttons!
\`\`\`

<tip>
💡 Event delegation is essential for dynamic content! Elements added after page load will still trigger the parent's event listener.
</tip>

### Practical Examples

\`\`\`javascript
// Form validation
const form = document.querySelector("#signup-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const errors = [];
    
    if (!email.value.includes("@")) {
        errors.push("Please enter a valid email");
    }
    
    if (password.value.length < 8) {
        errors.push("Password must be at least 8 characters");
    }
    
    if (errors.length > 0) {
        alert(errors.join("\\n"));
    } else {
        console.log("Form is valid!");
        // Submit form data...
    }
});

// Real-time input feedback
email.addEventListener("input", (e) => {
    const isValid = e.target.value.includes("@");
    e.target.style.borderColor = isValid ? "green" : "red";
});
\`\`\`

Events make your pages come alive! ⚡
### 🎯 Practice Exercise

**Exercise: Event Handling Challenges**

\`\`\`javascript
// Challenge 1: Create a keyboard shortcut handler
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        console.log('Custom save triggered!');
    }
    if (e.key === 'Escape') {
        console.log('Escape pressed — close modal');
    }
});

// Challenge 2: Drag counter with event delegation
// HTML: <div id="drop-zone">Drop files here</div>
const dropZone = document.getElementById('drop-zone');
if (dropZone) {
    let dragCount = 0;
    dropZone.addEventListener('dragenter', () => {
        dragCount++;
        dropZone.classList.add('highlight');
    });
    dropZone.addEventListener('dragleave', () => {
        dragCount--;
        if (dragCount === 0) dropZone.classList.remove('highlight');
    });
}

// Challenge 3: Custom event system
class EventEmitter {
    constructor() { this.events = {}; }
    on(event, callback) {
        (this.events[event] ??= []).push(callback);
    }
    emit(event, ...args) {
        this.events[event]?.forEach(cb => cb(...args));
    }
}

const emitter = new EventEmitter();
emitter.on('message', (msg) => console.log('Got:', msg));
emitter.emit('message', 'Hello!');
\`\`\`

Build a simple to-do list using only DOM manipulation and events!
<warning>
⚠️ Be careful with event listeners on frequently-firing events like \`scroll\` and \`mousemove\`. Without throttling or debouncing, you can crash the browser with too many function calls per second!
</warning>


          `}]},{id:6,title:"Asynchronous JavaScript",description:"Callbacks, Promises, and async/await",lessons:[{id:"6-1",title:"Understanding Asynchronous Code",duration:"14 min",content:`
## Async JavaScript — Non-Blocking Code ⏳

JavaScript is single-threaded but can handle asynchronous operations without blocking!

### Synchronous vs Asynchronous

\`\`\`javascript
// Synchronous - blocks until complete
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3 (in order)

// Asynchronous - doesn't block
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// Output: 1, 3, 2 (2 comes after 1 second!)
\`\`\`

### The Event Loop

\`\`\`
┌─────────────────────────────────────────────────┐
│  Call Stack                                      │
│  (Executes code, one frame at a time)           │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│  Web APIs (Browser)                              │
│  setTimeout, fetch, DOM events, etc.            │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│  Callback Queue / Task Queue                     │
│  (Waits for call stack to be empty)             │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│  Event Loop                                      │
│  (Moves callbacks from queue to stack)          │
└─────────────────────────────────────────────────┘
\`\`\`

### Callbacks

Functions passed to be called later:

\`\`\`javascript
// Simple callback
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

greet("Alice", function() {
    console.log("Callback executed!");
});

// Async callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Alice", age: 30 };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Received:", data);
});
console.log("Fetching data...");
// Output:
// "Fetching data..."
// (2 seconds later) "Received: { name: 'Alice', age: 30 }"
\`\`\`

### Callback Hell 😱

\`\`\`javascript
// Nested callbacks become hard to read and maintain
getUserData(userId, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            getShippingInfo(details.shippingId, (shipping) => {
                // This is "callback hell" or "pyramid of doom"
                console.log(shipping);
            });
        });
    });
});
\`\`\`

### Promises

A cleaner way to handle async operations:

\`\`\`javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Data loaded!");  // Success
        } else {
            reject("Error loading data");  // Failure
        }
    }, 2000);
});

// Using a Promise
myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Promise completed");
    });
\`\`\`

### Promise States

\`\`\`
Promise States:
┌─────────────┐
│   PENDING   │  Initial state
└──────┬──────┘
       │
       ├──────────────────────┐
       ↓                      ↓
┌─────────────┐        ┌─────────────┐
│  FULFILLED  │        │  REJECTED   │
│  (resolved) │        │  (error)    │
└─────────────┘        └─────────────┘
\`\`\`

### Promise Chaining

\`\`\`javascript
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, name: "Alice" }), 500);
    });
}

function fetchOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => resolve([{ orderId: 1, userId: user.id }]), 500);
    });
}

// Clean chain (no callback hell!)
fetchUser(1)
    .then(user => {
        console.log("Got user:", user);
        return fetchOrders(user);
    })
    .then(orders => {
        console.log("Got orders:", orders);
    })
    .catch(error => {
        console.log("Error:", error);
    });
\`\`\`

### Promise.all, race, allSettled

\`\`\`javascript
const promise1 = fetch("/api/users");
const promise2 = fetch("/api/products");
const promise3 = fetch("/api/orders");

// Promise.all - wait for ALL (fails if ANY fails)
Promise.all([promise1, promise2, promise3])
    .then(results => console.log("All done:", results))
    .catch(error => console.log("One failed:", error));

// Promise.race - first to complete wins
Promise.race([promise1, promise2, promise3])
    .then(first => console.log("First done:", first));

// Promise.allSettled - wait for all, get all results
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach(result => {
            if (result.status === "fulfilled") {
                console.log("Success:", result.value);
            } else {
                console.log("Failed:", result.reason);
            }
        });
    });

// Promise.any - first SUCCESS wins (ignores failures)
Promise.any([promise1, promise2, promise3])
    .then(first => console.log("First success:", first));
\`\`\`

<tip>
💡 Use \`Promise.all\` when you need ALL results. Use \`Promise.allSettled\` when you want results even if some fail.
</tip>

Promises are the foundation of modern async JavaScript! 🔮
### 🎯 Practice Exercise

**Exercise: Async Programming Challenges**

\`\`\`javascript
// Challenge 1: Simulate async operations
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function simulateDataFetch() {
    console.log("Fetching user...");
    await delay(1000);
    const user = { id: 1, name: "Alice" };
    
    console.log("Fetching posts...");
    await delay(800);
    const posts = [{ id: 1, title: "Hello World" }];
    
    return { user, posts };
}

simulateDataFetch().then(data => console.log(data));

// Challenge 2: Promise.all vs Promise.allSettled
const promises = [
    Promise.resolve("Success 1"),
    Promise.reject("Error!"),
    Promise.resolve("Success 3")
];

// Promise.all fails on first rejection
Promise.all(promises).catch(e => console.log("all:", e));

// Promise.allSettled waits for everything
Promise.allSettled(promises).then(results => 
    console.log("allSettled:", results));
\`\`\`

Try implementing a retry function that retries a failed promise N times with exponential backoff!
<warning>
⚠️ Never use synchronous XMLHttpRequest in production — it blocks the entire browser UI, making your page completely unresponsive until the request completes!
</warning>


          `},{id:"6-2",title:"Async/Await and Fetch API",duration:"15 min",content:`
## Async/Await — Promises Made Beautiful ✨

Async/await is syntactic sugar over Promises that makes async code look synchronous!

### Basic Async/Await

\`\`\`javascript
// Promise way
function fetchData() {
    return fetch('/api/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

// Async/await way - same thing, cleaner!
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

### Rules of Async/Await

\`\`\`javascript
// 1. async functions ALWAYS return a Promise
async function greet() {
    return "Hello!";  // Wrapped in Promise.resolve()
}

greet().then(msg => console.log(msg));  // "Hello!"

// 2. await can ONLY be used inside async functions
// (or at top level in modules)

async function example() {
    const result = await somePromise();  // ✅ Works
}

// await somePromise();  // ❌ Error (not in async function)

// 3. await pauses execution until Promise resolves
async function demo() {
    console.log("Start");
    await new Promise(r => setTimeout(r, 2000));
    console.log("After 2 seconds");
}
\`\`\`

### Error Handling

\`\`\`javascript
// Try/catch for async errors
async function fetchUser(id) {
    try {
        const response = await fetch(\`/api/users/\${id}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;  // Re-throw to let caller handle it
    }
}

// Or use .catch() on the returned Promise
fetchUser(1)
    .then(user => console.log(user))
    .catch(error => console.error(error));
\`\`\`

### The Fetch API

\`\`\`javascript
// GET request
async function getUsers() {
    const response = await fetch('https://api.example.com/users');
    const users = await response.json();
    return users;
}

// POST request
async function createUser(userData) {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    
    const newUser = await response.json();
    return newUser;
}

// PUT, PATCH, DELETE
async function updateUser(id, data) {
    const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'PUT',  // or 'PATCH' for partial update
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
}

async function deleteUser(id) {
    const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'DELETE',
    });
    return response.ok;
}
\`\`\`

### Parallel vs Sequential

\`\`\`javascript
// Sequential - slow! Each awaits the previous
async function sequential() {
    const user = await fetchUser(1);       // Wait...
    const orders = await fetchOrders(1);   // Then wait...
    const products = await fetchProducts();  // Then wait...
    // Total time: sum of all
}

// Parallel - fast! All start at once
async function parallel() {
    const [user, orders, products] = await Promise.all([
        fetchUser(1),
        fetchOrders(1),
        fetchProducts()
    ]);
    // Total time: longest one
}

// Start parallel, process as they come
async function parallelProcess() {
    const userPromise = fetchUser(1);
    const ordersPromise = fetchOrders(1);
    
    // Do something else while waiting...
    console.log("Fetching...");
    
    const user = await userPromise;
    console.log("Got user!");
    
    const orders = await ordersPromise;
    console.log("Got orders!");
}
\`\`\`

<warning>
⚠️ Don't use \`await\` in a loop if the operations can run in parallel! Use \`Promise.all\` instead.
</warning>

### Real-World Example

\`\`\`javascript
// API service module
const API_BASE = 'https://api.example.com';

const api = {
    async get(endpoint) {
        const response = await fetch(\`\${API_BASE}\${endpoint}\`);
        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
        return response.json();
    },
    
    async post(endpoint, data) {
        const response = await fetch(\`\${API_BASE}\${endpoint}\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
        return response.json();
    }
};

// Usage
async function loadDashboard() {
    try {
        const [user, stats, notifications] = await Promise.all([
            api.get('/user/profile'),
            api.get('/user/stats'),
            api.get('/user/notifications')
        ]);
        
        renderDashboard({ user, stats, notifications });
    } catch (error) {
        showError('Failed to load dashboard');
    }
}

// With loading state
async function loadWithState(setState) {
    setState({ loading: true, error: null });
    
    try {
        const data = await api.get('/data');
        setState({ loading: false, data });
    } catch (error) {
        setState({ loading: false, error: error.message });
    }
}
\`\`\`

<tip>
💡 Always handle errors in async code! Unhandled Promise rejections can crash your app in Node.js.
</tip>

Async/await makes asynchronous code a joy to write! 🎉
### 🎯 Practice Exercise

**Exercise: Fetch API Workout**

\`\`\`javascript
// Challenge 1: Build a simple API wrapper
class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    async get(path) {
        const res = await fetch(this.baseUrl + path);
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
    }
    
    async post(path, data) {
        const res = await fetch(this.baseUrl + path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return res.json();
    }
}

// Usage:
const api = new ApiClient('https://jsonplaceholder.typicode.com');

// Challenge 2: Fetch with error handling and loading state
async function fetchWithState(url) {
    const state = { loading: true, data: null, error: null };
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        state.data = await res.json();
    } catch (err) {
        state.error = err.message;
    } finally {
        state.loading = false;
    }
    return state;
}

// Try it:
fetchWithState('https://jsonplaceholder.typicode.com/users/1')
    .then(console.log);
\`\`\`

Build a function that fetches data from multiple endpoints in parallel and combines the results!

          `}]},{id:7,title:"ES6+ Modern Features",description:"Modern JavaScript syntax and features",lessons:[{id:"7-1",title:"ES6 Essential Features",duration:"15 min",content:`
## Modern JavaScript — ES6 and Beyond 🚀

ES6 (2015) was a game-changer! Let's master the features that make JavaScript modern and powerful.

### Let and Const

\`\`\`javascript
// Block scoping
if (true) {
    var varVariable = "I leak!";
    let letVariable = "I stay here";
    const constVariable = "Me too";
}
console.log(varVariable);   // "I leak!"
// console.log(letVariable);   // Error! Not defined
// console.log(constVariable); // Error! Not defined

// Const with objects/arrays
const person = { name: "Alice" };
person.name = "Bob";  // ✅ OK - modifying content
// person = {};       // ❌ Error - can't reassign

const arr = [1, 2, 3];
arr.push(4);     // ✅ OK
// arr = [4, 5, 6];  // ❌ Error
\`\`\`

### Template Literals

\`\`\`javascript
const name = "World";
const price = 29.99;

// Multi-line strings
const html = \`
    <div class="card">
        <h2>\${name}</h2>
        <p>Price: $\${price.toFixed(2)}</p>
    </div>
\`;

// Expressions
const message = \`Total: $\${price * 1.1} (with tax)\`;

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? \`<mark>\${values[i]}</mark>\` : '';
        return result + str + value;
    }, '');
}

const result = highlight\`Hello \${name}, your total is \${price}\`;
// "Hello <mark>World</mark>, your total is <mark>29.99</mark>"
\`\`\`

### Destructuring

\`\`\`javascript
// Object destructuring
const user = { name: "Alice", age: 30, city: "NYC" };
const { name, age } = user;

// Rename + default
const { name: userName, country = "USA" } = user;

// Nested
const data = { user: { profile: { email: "a@b.com" } } };
const { user: { profile: { email } } } = data;

// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
const [primary, , tertiary] = colors;  // Skip green

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];  // a=2, b=1

// Function parameters
function createUser({ name, age = 18, email }) {
    return { name, age, email };
}

createUser({ name: "Bob", email: "bob@email.com" });
\`\`\`

### Spread and Rest Operators

\`\`\`javascript
// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]
const copy = [...arr1];  // Shallow copy

// Spread in objects
const defaults = { theme: "dark", lang: "en" };
const userPrefs = { lang: "es" };
const settings = { ...defaults, ...userPrefs };
// { theme: "dark", lang: "es" }

// Rest in destructuring
const [first, ...rest] = [1, 2, 3, 4, 5];
// first = 1, rest = [2, 3, 4, 5]

const { name, ...other } = { name: "Alice", age: 30, city: "NYC" };
// name = "Alice", other = { age: 30, city: "NYC" }

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4, 5);  // 15
\`\`\`

### Enhanced Object Literals

\`\`\`javascript
const name = "Alice";
const age = 30;

// Shorthand properties
const user = { name, age };  // Same as { name: name, age: age }

// Shorthand methods
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

// Computed property names
const key = "dynamic";
const obj = {
    [key]: "value",
    [\`\${key}Key\`]: "another value",
    [\`get\${key.charAt(0).toUpperCase() + key.slice(1)}\`]() {
        return this[key];
    }
};
// { dynamic: "value", dynamicKey: "another value", getDynamic: [Function] }
\`\`\`

### Default Parameters

\`\`\`javascript
// Old way
function greet(name) {
    name = name || "Guest";
    return "Hello, " + name;
}

// New way
function greet(name = "Guest") {
    return \`Hello, \${name}\`;
}

// With other defaults
function createUser(name, role = "user", active = true) {
    return { name, role, active };
}

// Expressions as defaults
function getDefault() {
    return "computed";
}

function example(value = getDefault()) {
    return value;
}
\`\`\`

<tip>
💡 Default parameters are only used when the argument is \`undefined\`, not for other falsy values like \`null\`, \`0\`, or \`""\`.
</tip>

### Classes

\`\`\`javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(\`\${this.name} makes a sound\`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        console.log(\`\${this.name} barks!\`);
    }
    
    // Static method
    static isDog(animal) {
        return animal instanceof Dog;
    }
}

const rex = new Dog("Rex", "German Shepherd");
rex.speak();  // "Rex barks!"
Dog.isDog(rex);  // true
\`\`\`

ES6 features make JavaScript cleaner and more expressive! ✨
### 🎯 Practice Exercise

**Exercise: ES6+ Feature Practice**

\`\`\`javascript
// Challenge 1: Destructuring workout
const { 
    name, 
    address: { city, zip },
    hobbies: [firstHobby, ...otherHobbies]
} = {
    name: "Alice",
    address: { city: "NYC", zip: "10001" },
    hobbies: ["coding", "hiking", "reading"]
};
console.log(city, firstHobby, otherHobbies);

// Challenge 2: Use Map and Set
const wordCount = new Map();
const words = "the cat sat on the mat the cat".split(' ');
words.forEach(w => wordCount.set(w, (wordCount.get(w) || 0) + 1));
console.log([...wordCount.entries()]);

const uniqueWords = new Set(words);
console.log("Unique:", [...uniqueWords]);

// Challenge 3: Generator function
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}
\`\`\`

Try creating a generator that yields prime numbers infinitely!
<warning>
⚠️ Arrow functions don't have their own \`this\`, \`arguments\`, or \`super\`. Don't use them as methods in objects or as constructors — you'll get unexpected \`undefined\` values!
</warning>


          `},{id:"7-2",title:"ES2017+ Features",duration:"12 min",content:`
## Beyond ES6 — Newer JavaScript Features 🆕

JavaScript keeps evolving! Let's explore features from ES2017 and beyond.

### Object Methods (ES2017)

\`\`\`javascript
const user = { name: "Alice", age: 30, city: "NYC" };

// Object.entries() - get key-value pairs
Object.entries(user);
// [["name", "Alice"], ["age", 30], ["city", "NYC"]]

// Object.values() - get values only
Object.values(user);  // ["Alice", 30, "NYC"]

// Object.keys() - get keys only (ES5)
Object.keys(user);  // ["name", "age", "city"]

// Object.fromEntries() (ES2019)
const entries = [["a", 1], ["b", 2]];
Object.fromEntries(entries);  // { a: 1, b: 2 }

// Transform object
const doubled = Object.fromEntries(
    Object.entries({ a: 1, b: 2, c: 3 })
        .map(([key, val]) => [key, val * 2])
);
// { a: 2, b: 4, c: 6 }
\`\`\`

### String Methods

\`\`\`javascript
// padStart / padEnd (ES2017)
"5".padStart(3, "0");   // "005"
"5".padEnd(3, "0");     // "500"
"hi".padStart(5);       // "   hi" (space padded)

// trimStart / trimEnd (ES2019)
"  hello  ".trimStart();  // "hello  "
"  hello  ".trimEnd();    // "  hello"
"  hello  ".trim();       // "hello"

// replaceAll (ES2021)
"banana".replace("a", "o");     // "bonana" (first only)
"banana".replaceAll("a", "o");  // "bonono" (all)

// at() (ES2022)
"hello".at(0);   // "h"
"hello".at(-1);  // "o" (last character!)
\`\`\`

### Array Methods

\`\`\`javascript
// flat() / flatMap() (ES2019)
[1, [2, [3, [4]]]].flat();     // [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(2);    // [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity); // [1, 2, 3, 4]

[[1, 2], [3, 4]].flatMap(arr => arr.map(x => x * 2));
// [2, 4, 6, 8]

// at() (ES2022)
const arr = [1, 2, 3, 4, 5];
arr.at(0);   // 1
arr.at(-1);  // 5 (last!)
arr.at(-2);  // 4 (second to last!)

// findLast / findLastIndex (ES2023)
[1, 2, 3, 4, 5].findLast(n => n > 2);      // 5
[1, 2, 3, 4, 5].findLastIndex(n => n > 2); // 4

// toSorted / toReversed / toSpliced (ES2023) - non-mutating!
const original = [3, 1, 2];
const sorted = original.toSorted((a, b) => a - b);  // [1, 2, 3]
const reversed = original.toReversed();  // [2, 1, 3]
console.log(original);  // [3, 1, 2] - unchanged!

// with() (ES2023) - replace at index without mutating
const arr2 = [1, 2, 3];
const newArr = arr2.with(1, 99);  // [1, 99, 3]
console.log(arr2);  // [1, 2, 3] - unchanged!
\`\`\`

### Optional Chaining & Nullish Coalescing

\`\`\`javascript
// Optional chaining (?.) - ES2020
const user = {
    name: "Alice",
    address: { city: "NYC" }
};

user?.address?.city;     // "NYC"
user?.phone?.number;     // undefined (no error!)
user?.getName?.();       // undefined (method doesn't exist)
user?.friends?.[0];      // undefined (no friends array)

// Nullish coalescing (??) - ES2020
const value = null ?? "default";     // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default";       // 0 (0 is not null/undefined!)
const value4 = "" ?? "default";      // "" (empty string is not null/undefined!)

// Compare with || (logical OR)
const value5 = 0 || "default";       // "default" (0 is falsy!)
const value6 = "" || "default";      // "default" (empty string is falsy!)

// Combining them
const result = user?.settings?.theme ?? "dark";
\`\`\`

<tip>
💡 Use \`??\` when you want to default ONLY for null/undefined. Use \`||\` when you want to default for ANY falsy value.
</tip>

### Logical Assignment Operators (ES2021)

\`\`\`javascript
// Logical OR assignment (||=)
let a = null;
a ||= "default";  // a = "default"

let b = "existing";
b ||= "default";  // b = "existing" (unchanged)

// Logical AND assignment (&&=)
let user = { name: "Alice" };
user &&= { ...user, active: true };  // Add property if user exists

// Nullish assignment (??=)
let config = { theme: null, lang: "en" };
config.theme ??= "dark";  // config.theme = "dark"
config.lang ??= "es";     // config.lang = "en" (unchanged)
\`\`\`

### Private Class Fields (ES2022)

\`\`\`javascript
class BankAccount {
    #balance = 0;  // Private field (# prefix)
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
    
    // Private method
    #validate(amount) {
        return amount > 0;
    }
}

const account = new BankAccount(100);
account.deposit(50);
account.getBalance();  // 150
// account.#balance;   // SyntaxError! Private field
\`\`\`

### Top-Level Await (ES2022)

\`\`\`javascript
// In ES modules (.mjs or "type": "module")
const data = await fetch('/api/data').then(r => r.json());
console.log(data);

// Before, you needed an async IIFE
(async () => {
    const data = await fetch('/api/data').then(r => r.json());
    console.log(data);
})();
\`\`\`

Stay current with JavaScript — it keeps getting better! 📈
<warning>
⚠️ Optional chaining (\`?.\`) returns \`undefined\` if the chain breaks, but it doesn't prevent you from calling methods on \`undefined\`. Always null-check before critical operations!
</warning>

          `}]},{id:8,title:"Projects & Best Practices",description:"Putting it all together",lessons:[{id:"8-1",title:"JavaScript Best Practices",duration:"12 min",content:`
## Writing Clean, Maintainable Code 📝

Let's learn the practices that separate amateur code from professional code!

### Naming Conventions

\`\`\`javascript
// Variables and functions: camelCase
let userName = "Alice";
let isActive = true;
function calculateTotal() {}

// Constants: UPPER_SNAKE_CASE
const MAX_RETRIES = 3;
const API_BASE_URL = "https://api.example.com";

// Classes: PascalCase
class UserAccount {}
class ShoppingCart {}

// Private (by convention): _prefix
class Example {
    _privateMethod() {}
}

// Boolean prefixes
let isLoading = false;
let hasPermission = true;
let canEdit = false;
let shouldUpdate = true;

// Descriptive names
// ❌ Bad
let d = new Date();
let arr = [];
function process(x) {}

// ✅ Good
let currentDate = new Date();
let userNames = [];
function processPayment(order) {}
\`\`\`

### Code Organization

\`\`\`javascript
// Single Responsibility - each function does ONE thing
// ❌ Bad
function processUserData(user) {
    validateUser(user);
    saveToDatabase(user);
    sendEmail(user);
    updateUI(user);
}

// ✅ Good
function processUserData(user) {
    if (!isValidUser(user)) return;
    const savedUser = await saveUser(user);
    await notifyUser(savedUser);
    return savedUser;
}

// Early returns (guard clauses)
// ❌ Bad
function getDiscount(user) {
    if (user) {
        if (user.isPremium) {
            if (user.yearsActive > 5) {
                return 0.2;
            }
            return 0.1;
        }
        return 0.05;
    }
    return 0;
}

// ✅ Good
function getDiscount(user) {
    if (!user) return 0;
    if (!user.isPremium) return 0.05;
    if (user.yearsActive <= 5) return 0.1;
    return 0.2;
}
\`\`\`

### Avoid Magic Numbers

\`\`\`javascript
// ❌ Bad
if (user.age >= 18) {}
setTimeout(fetchData, 300000);
if (password.length < 8) {}

// ✅ Good
const ADULT_AGE = 18;
const FIVE_MINUTES_MS = 5 * 60 * 1000;
const MIN_PASSWORD_LENGTH = 8;

if (user.age >= ADULT_AGE) {}
setTimeout(fetchData, FIVE_MINUTES_MS);
if (password.length < MIN_PASSWORD_LENGTH) {}
\`\`\`

### Error Handling

\`\`\`javascript
// Always handle errors
// ❌ Bad
const data = JSON.parse(userInput);

// ✅ Good
function parseJSON(str) {
    try {
        return { data: JSON.parse(str), error: null };
    } catch (error) {
        return { data: null, error: error.message };
    }
}

// Custom error classes
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

function validateEmail(email) {
    if (!email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email');
    }
}

// Async error handling
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(\`HTTP error: \${response.status}\`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error;  // Re-throw or handle appropriately
    }
}
\`\`\`

### Avoid Mutation

\`\`\`javascript
// ❌ Bad - mutating original
function addItem(cart, item) {
    cart.push(item);
    return cart;
}

// ✅ Good - return new array
function addItem(cart, item) {
    return [...cart, item];
}

// ❌ Bad - mutating object
function updateUser(user, updates) {
    Object.assign(user, updates);
    return user;
}

// ✅ Good - return new object
function updateUser(user, updates) {
    return { ...user, ...updates };
}
\`\`\`

<tip>
💡 Immutability makes your code more predictable and easier to debug. Always prefer returning new data over mutating existing data.
</tip>

### Use Modern Features

\`\`\`javascript
// ❌ Old way
var name = user && user.profile && user.profile.name || 'Guest';

// ✅ Modern way
const name = user?.profile?.name ?? 'Guest';

// ❌ Callback hell
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            console.log(c);
        });
    });
});

// ✅ Async/await
async function fetchAllData() {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getEvenMoreData(b);
    return c;
}

// ❌ Manual string building
var message = 'Hello, ' + name + '! You have ' + count + ' messages.';

// ✅ Template literals
const message = \`Hello, \${name}! You have \${count} messages.\`;
\`\`\`

### Comments — When and How

\`\`\`javascript
// ❌ Bad - obvious comments
// Increment i by 1
i++;

// Set name to "John"
const name = "John";

// ✅ Good - explain WHY, not WHAT
// Cache expires after 1 hour to balance freshness and performance
const CACHE_TTL = 60 * 60 * 1000;

// Using bitwise OR for faster floor operation
const index = (value / step) | 0;

// JSDoc for functions
/**
 * Calculates the total price including tax
 * @param {number} subtotal - The pre-tax amount
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.1 for 10%)
 * @returns {number} The total price including tax
 */
function calculateTotal(subtotal, taxRate) {
    return subtotal * (1 + taxRate);
}
\`\`\`

Write code that your future self will thank you for! 🙏
<warning>
⚠️ Never use \`eval()\` in production code — it's a massive security vulnerability that can execute arbitrary code. Use \`JSON.parse()\` for parsing JSON strings instead!
</warning>

          `},{id:"8-2",title:"Building a Complete Project",duration:"20 min",content:`
## Project: Task Manager App 📋

Let's build a complete task manager using everything we've learned!

### Project Structure

\`\`\`
task-manager/
├── index.html
├── styles.css
└── app.js
\`\`\`

### HTML Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>📋 Task Manager</h1>
        
        <form id="task-form">
            <input type="text" id="task-input" placeholder="Add a new task..." required>
            <select id="priority-select">
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
        
        <div class="filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="active">Active</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
        </div>
        
        <ul id="task-list"></ul>
        
        <div class="stats">
            <span id="task-count">0 tasks</span>
            <button id="clear-completed">Clear Completed</button>
        </div>
    </div>
    
    <script src="app.js"><\/script>
</body>
</html>
\`\`\`

### JavaScript Implementation

\`\`\`javascript
// Task Manager Application
class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.init();
    }
    
    init() {
        // Cache DOM elements
        this.form = document.getElementById('task-form');
        this.input = document.getElementById('task-input');
        this.prioritySelect = document.getElementById('priority-select');
        this.taskList = document.getElementById('task-list');
        this.taskCount = document.getElementById('task-count');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.clearBtn = document.getElementById('clear-completed');
        
        // Bind events
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.taskList.addEventListener('click', (e) => this.handleTaskClick(e));
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });
        this.clearBtn.addEventListener('click', () => this.clearCompleted());
        
        // Initial render
        this.render();
    }
    
    // Generate unique ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    // Load tasks from localStorage
    loadTasks() {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    }
    
    // Save tasks to localStorage
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    // Add new task
    addTask(text, priority) {
        const task = {
            id: this.generateId(),
            text: text.trim(),
            priority,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.tasks = [task, ...this.tasks];
        this.saveTasks();
        this.render();
    }
    
    // Toggle task completion
    toggleTask(id) {
        this.tasks = this.tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        this.saveTasks();
        this.render();
    }
    
    // Delete task
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.render();
    }
    
    // Edit task
    editTask(id, newText) {
        this.tasks = this.tasks.map(task =>
            task.id === id ? { ...task, text: newText } : task
        );
        this.saveTasks();
        this.render();
    }
    
    // Clear completed tasks
    clearCompleted() {
        this.tasks = this.tasks.filter(task => !task.completed);
        this.saveTasks();
        this.render();
    }
    
    // Filter tasks
    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(t => !t.completed);
            case 'completed':
                return this.tasks.filter(t => t.completed);
            default:
                return this.tasks;
        }
    }
    
    // Handle form submit
    handleSubmit(e) {
        e.preventDefault();
        const text = this.input.value.trim();
        const priority = this.prioritySelect.value;
        
        if (text) {
            this.addTask(text, priority);
            this.input.value = '';
            this.input.focus();
        }
    }
    
    // Handle task list clicks (event delegation)
    handleTaskClick(e) {
        const taskEl = e.target.closest('.task-item');
        if (!taskEl) return;
        
        const id = taskEl.dataset.id;
        
        if (e.target.classList.contains('task-checkbox')) {
            this.toggleTask(id);
        } else if (e.target.classList.contains('delete-btn')) {
            this.deleteTask(id);
        } else if (e.target.classList.contains('edit-btn')) {
            this.startEditing(taskEl, id);
        }
    }
    
    // Start editing a task
    startEditing(taskEl, id) {
        const task = this.tasks.find(t => t.id === id);
        const textEl = taskEl.querySelector('.task-text');
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = task.text;
        input.className = 'edit-input';
        
        textEl.replaceWith(input);
        input.focus();
        
        const saveEdit = () => {
            const newText = input.value.trim();
            if (newText && newText !== task.text) {
                this.editTask(id, newText);
            } else {
                this.render();
            }
        };
        
        input.addEventListener('blur', saveEdit);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') saveEdit();
            if (e.key === 'Escape') this.render();
        });
    }
    
    // Handle filter clicks
    handleFilter(e) {
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        this.currentFilter = e.target.dataset.filter;
        this.render();
    }
    
    // Render the task list
    render() {
        const filteredTasks = this.getFilteredTasks();
        
        this.taskList.innerHTML = filteredTasks.map(task => \`
            <li class="task-item \${task.completed ? 'completed' : ''} priority-\${task.priority}"
                data-id="\${task.id}">
                <input type="checkbox" class="task-checkbox" 
                       \${task.completed ? 'checked' : ''}>
                <span class="task-text">\${this.escapeHtml(task.text)}</span>
                <span class="priority-badge">\${task.priority}</span>
                <div class="task-actions">
                    <button class="edit-btn" title="Edit">✏️</button>
                    <button class="delete-btn" title="Delete">🗑️</button>
                </div>
            </li>
        \`).join('');
        
        // Update count
        const activeCount = this.tasks.filter(t => !t.completed).length;
        this.taskCount.textContent = \`\${activeCount} task\${activeCount !== 1 ? 's' : ''} remaining\`;
    }
    
    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app
const app = new TaskManager();
\`\`\`

<tip>
💡 This project demonstrates: Classes, DOM manipulation, event delegation, localStorage, array methods, template literals, and defensive coding!
</tip>

### Key Patterns Used

1. **Class-based architecture** — Encapsulates all logic
2. **Event delegation** — One listener handles all task clicks
3. **Immutable updates** — \`map\` and \`filter\` return new arrays
4. **LocalStorage** — Persists data across sessions
5. **XSS prevention** — \`escapeHtml\` sanitizes user input
6. **Separation of concerns** — Methods have single responsibilities

### Next Steps

To extend this project:
- Add due dates with date picker
- Add categories/tags
- Add drag-and-drop reordering
- Add search functionality
- Sync with a backend API
- Add user authentication

Congratulations! You've completed the JavaScript Mastery course! 🎉

You now have the skills to:
- Write modern, clean JavaScript
- Manipulate the DOM effectively
- Handle asynchronous operations
- Build complete web applications

Keep coding and building projects! 🚀
### 🎯 Practice Exercise

**Exercise: Build Your Own Project**

Plan and build a complete project using everything you've learned:

\`\`\`javascript
// Project ideas to try:
// 1. Weather Dashboard - Fetch weather API, display forecast
// 2. Todo App with LocalStorage - CRUD operations, persistence
// 3. Quiz Game - Questions, scoring, timer
// 4. Expense Tracker - Add/remove items, calculate totals
// 5. Recipe Finder - Search API, display results

// Project template:
class App {
    constructor() {
        this.state = {};
        this.init();
    }
    
    async init() {
        this.bindEvents();
        await this.loadData();
        this.render();
    }
    
    bindEvents() {
        // Set up event listeners
    }
    
    async loadData() {
        // Fetch data from API or localStorage
    }
    
    render() {
        // Update the DOM
    }
}

// Start your app
// new App();
\`\`\`

Pick one project, build it, and deploy it on GitHub Pages. That's your portfolio piece!
<warning>
⚠️ Before deploying, always remove \`console.log\` statements and API keys from your source code. Use environment variables for sensitive configuration!
</warning>


          `}]}]};const Dd=(...z)=>z.filter((Y,k,h)=>!!Y&&Y.trim()!==""&&h.indexOf(Y)===k).join(" ").trim();const rg=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const fg=z=>z.replace(/^([A-Z])|[\s-_]+(\w)/g,(Y,k,h)=>h?h.toUpperCase():k.toLowerCase());const Cd=z=>{const Y=fg(z);return Y.charAt(0).toUpperCase()+Y.slice(1)};var dg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const mg=z=>{for(const Y in z)if(Y.startsWith("aria-")||Y==="role"||Y==="title")return!0;return!1};const hg=Mt.forwardRef(({color:z="currentColor",size:Y=24,strokeWidth:k=2,absoluteStrokeWidth:h,className:_="",children:V,iconNode:ie,...Ae},D)=>Mt.createElement("svg",{ref:D,...dg,width:Y,height:Y,stroke:z,strokeWidth:h?Number(k)*24/Number(Y):k,className:Dd("lucide",_),...!V&&!mg(Ae)&&{"aria-hidden":"true"},...Ae},[...ie.map(([T,P])=>Mt.createElement(T,P)),...Array.isArray(V)?V:[V]]));const Ct=(z,Y)=>{const k=Mt.forwardRef(({className:h,..._},V)=>Mt.createElement(hg,{ref:V,iconNode:Y,className:Dd(`lucide-${rg(Cd(z))}`,`lucide-${z}`,h),..._}));return k.displayName=Cd(z),k};const gg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],yg=Ct("book-open",gg);const pg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xi=Ct("chevron-right",pg);const vg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],zn=Ct("circle-check",vg);const bg=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Sg=Ct("clock",bg);const Eg=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Od=Ct("code",Eg);const Ag=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Tg=Ct("house",Ag);const zg=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],jg=Ct("lightbulb",zg);const xg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Mg=Ct("menu",xg);const Cg=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Og=Ct("play",Cg);const Dg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ng=Ct("triangle-alert",Dg);const _g=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ug=Ct("x",_g);function Hg(){const[z,Y]=Mt.useState(!1),[k,h]=Mt.useState("home"),[_,V]=Mt.useState(null),[ie,Ae]=Mt.useState([]);Mt.useEffect(()=>{const N=localStorage.getItem("javascript-progress");N&&Ae(JSON.parse(N))},[]);const D=N=>{const R=[...ie,N];Ae(R),localStorage.setItem("javascript-progress",JSON.stringify(R))},T=xt.chapters.reduce((N,R)=>N+R.lessons.length,0),P=Math.round(ie.length/T*100),B=N=>{V(N),h("lesson"),Y(!1),window.scrollTo(0,0)},me=()=>{if(!_)return null;for(let N=0;N<xt.chapters.length;N++){const R=xt.chapters[N];for(let Z=0;Z<R.lessons.length;Z++)if(R.lessons[Z].id===_.id){if(Z<R.lessons.length-1)return R.lessons[Z+1];if(N<xt.chapters.length-1)return xt.chapters[N+1].lessons[0]}}return null},Ge=()=>{if(!_)return null;for(let N=0;N<xt.chapters.length;N++){const R=xt.chapters[N];for(let Z=0;Z<R.lessons.length;Z++)if(R.lessons[Z].id===_.id){if(Z>0)return R.lessons[Z-1];if(N>0){const U=xt.chapters[N-1];return U.lessons[U.lessons.length-1]}}}return null},ke=N=>{const R=N.trim().split(`
`),Z=[];let U=0,Te=!1,Be=[],et="";for(;U<R.length;){const ae=R[U];if(ae.startsWith("```")){Te?(Z.push(S.jsxs("div",{className:"code-block",children:[S.jsxs("div",{className:"code-header",children:[S.jsx("span",{className:"code-language",children:et}),S.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(Be.join(`
`)),children:"Copy"})]}),S.jsx("div",{className:"code-content",children:S.jsx("pre",{children:Be.join(`
`)})})]},`code-${U}`)),Te=!1):(Te=!0,et=ae.slice(3).trim()||"text",Be=[]),U++;continue}if(Te){Be.push(ae),U++;continue}if(ae.includes("<tip>")){let L=[];for(U++;U<R.length&&!R[U].includes("</tip>");)L.push(R[U]),U++;Z.push(S.jsxs("div",{className:"tip-box",children:[S.jsxs("div",{className:"tip-box-header",children:[S.jsx(jg,{size:18}),S.jsx("span",{children:"Pro Tip"})]}),S.jsx("p",{children:L.join(" ").replace("💡 ","")})]},`tip-${U}`)),U++;continue}if(ae.includes("<warning>")){let L=[];for(U++;U<R.length&&!R[U].includes("</warning>");)L.push(R[U]),U++;Z.push(S.jsxs("div",{className:"warning-box",children:[S.jsxs("div",{className:"warning-box-header",children:[S.jsx(Ng,{size:18}),S.jsx("span",{children:"Warning"})]}),S.jsx("p",{children:L.join(" ").replace("⚠️ ","")})]},`warn-${U}`)),U++;continue}if(ae.startsWith("## ")){Z.push(S.jsx("h2",{children:ae.slice(3)},`h2-${U}`)),U++;continue}if(ae.startsWith("### ")){Z.push(S.jsx("h3",{children:ae.slice(4)},`h3-${U}`)),U++;continue}if(ae.includes("|")&&R[U+1]?.includes("---")){const L=ae.split("|").filter(ye=>ye.trim()).map(ye=>ye.trim());U+=2;const ze=[];for(;U<R.length&&R[U].includes("|");)ze.push(R[U].split("|").filter(ye=>ye.trim()).map(ye=>ye.trim())),U++;Z.push(S.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:S.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[S.jsx("thead",{children:S.jsx("tr",{children:L.map((ye,Ot)=>S.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-primary)"},children:ye},Ot))})}),S.jsx("tbody",{children:ze.map((ye,Ot)=>S.jsx("tr",{children:ye.map((ft,Xe)=>S.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:S.jsx("span",{dangerouslySetInnerHTML:{__html:ft.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(245,158,11,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},Xe))},Ot))})]})},`table-${U}`));continue}if(ae.startsWith("- ")||ae.startsWith("* ")){const L=[];for(;U<R.length&&(R[U].startsWith("- ")||R[U].startsWith("* "));)L.push(R[U].slice(2)),U++;Z.push(S.jsx("ul",{children:L.map((ze,ye)=>S.jsx("li",{dangerouslySetInnerHTML:{__html:ze.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(245,158,11,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},ye))},`ul-${U}`));continue}if(/^\d+\. /.test(ae)){const L=[];for(;U<R.length&&/^\d+\. /.test(R[U]);)L.push(R[U].replace(/^\d+\. /,"")),U++;Z.push(S.jsx("ol",{children:L.map((ze,ye)=>S.jsx("li",{dangerouslySetInnerHTML:{__html:ze.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(245,158,11,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},ye))},`ol-${U}`));continue}ae.trim()&&Z.push(S.jsx("p",{dangerouslySetInnerHTML:{__html:ae.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(245,158,11,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-secondary)">$1</a>')}},`p-${U}`)),U++}return Z};return S.jsxs("div",{className:"app-container",children:[S.jsx("div",{className:"bg-grid"}),S.jsx("div",{className:"bg-noise"}),S.jsx("div",{className:"gradient-orb orb-primary"}),S.jsx("div",{className:"gradient-orb orb-secondary"}),S.jsx("div",{className:"gradient-orb orb-tertiary"}),S.jsx("button",{className:"mobile-menu-btn",onClick:()=>Y(!z),children:z?S.jsx(Ug,{size:24}):S.jsx(Mg,{size:24})}),S.jsx("div",{className:`sidebar-overlay ${z?"open":""}`,onClick:()=>Y(!1)}),S.jsxs("aside",{className:`sidebar ${z?"open":""}`,children:[S.jsxs("div",{className:"sidebar-header",children:[S.jsx("div",{className:"sidebar-logo",children:S.jsx(Od,{size:24})}),S.jsx("span",{className:"sidebar-title",children:"JavaScript"})]}),S.jsxs("nav",{className:"sidebar-nav",children:[S.jsxs("div",{className:`nav-item ${k==="home"?"active":""}`,onClick:()=>{h("home"),Y(!1)},children:[S.jsx(Tg,{size:20,className:"nav-item-icon"}),S.jsx("span",{children:"Home"})]}),xt.chapters.map(N=>S.jsxs("div",{className:"nav-section",children:[S.jsxs("div",{className:"nav-section-title",children:["Ch ",N.id,": ",N.title]}),N.lessons.map(R=>S.jsxs("div",{className:`nav-item ${_?.id===R.id?"active":""}`,onClick:()=>B(R),children:[ie.includes(R.id)?S.jsx(zn,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):S.jsx(yg,{size:18,className:"nav-item-icon"}),S.jsx("span",{children:R.title})]},R.id))]},N.id))]}),S.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[S.jsx("span",{children:"Progress"}),S.jsxs("span",{children:[P,"%"]})]}),S.jsx("div",{className:"progress-bar",children:S.jsx("div",{className:"progress-fill",style:{width:`${P}%`}})})]})]}),S.jsxs("main",{className:"main-content",children:[k==="home"&&S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"hero",children:[S.jsxs("div",{className:"hero-badge",children:[S.jsx(Od,{size:16}),S.jsx("span",{children:"JavaScript Mastery Course"})]}),S.jsxs("h1",{className:"hero-title",children:["Master",S.jsx("br",{}),S.jsx("span",{children:"JavaScript"})]}),S.jsx("p",{className:"hero-subtitle",children:"From fundamentals to advanced patterns. Learn modern JavaScript with hands-on examples and real-world projects."}),S.jsxs("button",{className:"nav-button primary",onClick:()=>B(xt.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[S.jsx(Og,{size:20}),"Start Learning"]})]}),S.jsxs("div",{style:{marginBottom:"48px"},children:[S.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),xt.chapters.map(N=>{const R=N.lessons.filter(Z=>ie.includes(Z.id)).length;return S.jsxs("div",{className:"chapter-card",onClick:()=>B(N.lessons[0]),children:[S.jsx("div",{className:"chapter-number",children:N.id}),S.jsxs("div",{className:"chapter-info",children:[S.jsx("div",{className:"chapter-title",children:N.title}),S.jsxs("div",{className:"chapter-meta",children:[N.description," • ",N.lessons.length," lessons",R>0&&S.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",R,"/",N.lessons.length," complete)"]})]})]}),S.jsx(Xi,{size:24,style:{color:"var(--text-muted)"}})]},N.id)})]}),S.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[S.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),S.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"Master modern JavaScript from basics to advanced concepts:"}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["Variables & Types","Functions","DOM Manipulation","Async/Await","ES6+ Features","Best Practices"].map(N=>S.jsxs("div",{style:{padding:"16px",background:"rgba(245, 158, 11, 0.1)",borderRadius:"12px",border:"1px solid rgba(245, 158, 11, 0.2)"},children:[S.jsx(zn,{size:24,style:{color:"var(--accent-primary)",marginBottom:"8px"}}),S.jsx("div",{style:{fontWeight:"500"},children:N})]},N))})]})]}),k==="lesson"&&_&&S.jsxs("div",{className:"lesson-container",children:[S.jsxs("div",{className:"lesson-header",children:[S.jsxs("div",{className:"lesson-breadcrumb",children:[S.jsx("a",{href:"#",onClick:N=>{N.preventDefault(),h("home")},children:"Home"}),S.jsx(Xi,{size:16}),S.jsx("span",{children:_.title})]}),S.jsx("h1",{className:"lesson-title",children:_.title}),S.jsxs("div",{className:"lesson-meta",children:[S.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[S.jsx(Sg,{size:16}),_.duration]}),ie.includes(_.id)&&S.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[S.jsx(zn,{size:16}),"Completed"]})]})]}),S.jsx("div",{className:"lesson-content",children:ke(_.content)}),!ie.includes(_.id)&&S.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>D(_.id),children:[S.jsx(zn,{size:20}),"Mark as Complete"]}),S.jsxs("div",{className:"lesson-nav",children:[Ge()?S.jsxs("button",{className:"nav-button",onClick:()=>B(Ge()),children:[S.jsx(Xi,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):S.jsx("div",{}),me()?S.jsxs("button",{className:"nav-button primary",onClick:()=>B(me()),children:["Next Lesson",S.jsx(Xi,{size:20})]}):S.jsxs("button",{className:"nav-button primary",onClick:()=>h("home"),children:["Finish Course",S.jsx(zn,{size:20})]})]})]})]})]})}og.createRoot(document.getElementById("root")).render(S.jsx(Mt.StrictMode,{children:S.jsx(Hg,{})}));
