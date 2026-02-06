(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))h(_);new MutationObserver(_=>{for(const J of _)if(J.type==="childList")for(const ue of J.addedNodes)ue.tagName==="LINK"&&ue.rel==="modulepreload"&&h(ue)}).observe(document,{childList:!0,subtree:!0});function k(_){const J={};return _.integrity&&(J.integrity=_.integrity),_.referrerPolicy&&(J.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?J.credentials="include":_.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function h(_){if(_.ep)return;_.ep=!0;const J=k(_);fetch(_.href,J)}})();var ss={exports:{}},An={};var pd;function eg(){if(pd)return An;pd=1;var z=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function k(h,_,J){var ue=null;if(J!==void 0&&(ue=""+J),_.key!==void 0&&(ue=""+_.key),"key"in _){J={};for(var Ae in _)Ae!=="key"&&(J[Ae]=_[Ae])}else J=_;return _=J.ref,{$$typeof:z,type:h,key:ue,ref:_!==void 0?_:null,props:J}}return An.Fragment=w,An.jsx=k,An.jsxs=k,An}var bd;function tg(){return bd||(bd=1,ss.exports=eg()),ss.exports}var S=tg(),os={exports:{}},G={};var Sd;function lg(){if(Sd)return G;Sd=1;var z=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),me=Symbol.iterator;function Ge(r){return r===null||typeof r!="object"?null:(r=me&&r[me]||r["@@iterator"],typeof r=="function"?r:null)}var ke={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,R={};function Z(r,A,j){this.props=r,this.context=A,this.refs=R,this.updater=j||ke}Z.prototype.isReactComponent={},Z.prototype.setState=function(r,A){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,A,"setState")},Z.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function U(){}U.prototype=Z.prototype;function Te(r,A,j){this.props=r,this.context=A,this.refs=R,this.updater=j||ke}var Be=Te.prototype=new U;Be.constructor=Te,N(Be,Z.prototype),Be.isPureReactComponent=!0;var et=Array.isArray;function ae(){}var q={H:null,A:null,T:null,S:null},ze=Object.prototype.hasOwnProperty;function ve(r,A,j){var O=j.ref;return{$$typeof:z,type:r,key:A,ref:O!==void 0?O:null,props:j}}function Dt(r,A){return ve(r.type,A,r.props)}function ft(r){return typeof r=="object"&&r!==null&&r.$$typeof===z}function Xe(r){var A={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(j){return A[j]})}var zl=/\/+/g;function Ht(r,A){return typeof r=="object"&&r!==null&&r.key!=null?Xe(""+r.key):A.toString(36)}function At(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(ae,ae):(r.status="pending",r.then(function(A){r.status==="pending"&&(r.status="fulfilled",r.value=A)},function(A){r.status==="pending"&&(r.status="rejected",r.reason=A)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function p(r,A,j,O,X){var K=typeof r;(K==="undefined"||K==="boolean")&&(r=null);var ie=!1;if(r===null)ie=!0;else switch(K){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(r.$$typeof){case z:case w:ie=!0;break;case P:return ie=r._init,p(ie(r._payload),A,j,O,X)}}if(ie)return X=X(r),ie=O===""?"."+Ht(r,0):O,et(X)?(j="",ie!=null&&(j=ie.replace(zl,"$&/")+"/"),p(X,A,j,"",function(Oa){return Oa})):X!=null&&(ft(X)&&(X=Dt(X,j+(X.key==null||r&&r.key===X.key?"":(""+X.key).replace(zl,"$&/")+"/")+ie)),A.push(X)),1;ie=0;var Ve=O===""?".":O+":";if(et(r))for(var Me=0;Me<r.length;Me++)O=r[Me],K=Ve+Ht(O,Me),ie+=p(O,A,j,K,X);else if(Me=Ge(r),typeof Me=="function")for(r=Me.call(r),Me=0;!(O=r.next()).done;)O=O.value,K=Ve+Ht(O,Me++),ie+=p(O,A,j,K,X);else if(K==="object"){if(typeof r.then=="function")return p(At(r),A,j,O,X);throw A=String(r),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return ie}function M(r,A,j){if(r==null)return r;var O=[],X=0;return p(r,O,"","",function(K){return A.call(j,K,X++)}),O}function Y(r){if(r._status===-1){var A=r._result;A=A(),A.then(function(j){(r._status===0||r._status===-1)&&(r._status=1,r._result=j)},function(j){(r._status===0||r._status===-1)&&(r._status=2,r._result=j)}),r._status===-1&&(r._status=0,r._result=A)}if(r._status===1)return r._result.default;throw r._result}var oe=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},he={map:M,forEach:function(r,A,j){M(r,function(){A.apply(this,arguments)},j)},count:function(r){var A=0;return M(r,function(){A++}),A},toArray:function(r){return M(r,function(A){return A})||[]},only:function(r){if(!ft(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return G.Activity=B,G.Children=he,G.Component=Z,G.Fragment=k,G.Profiler=_,G.PureComponent=Te,G.StrictMode=h,G.Suspense=C,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,G.__COMPILER_RUNTIME={__proto__:null,c:function(r){return q.H.useMemoCache(r)}},G.cache=function(r){return function(){return r.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(r,A,j){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var O=N({},r.props),X=r.key;if(A!=null)for(K in A.key!==void 0&&(X=""+A.key),A)!ze.call(A,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&A.ref===void 0||(O[K]=A[K]);var K=arguments.length-2;if(K===1)O.children=j;else if(1<K){for(var ie=Array(K),Ve=0;Ve<K;Ve++)ie[Ve]=arguments[Ve+2];O.children=ie}return ve(r.type,X,O)},G.createContext=function(r){return r={$$typeof:ue,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:J,_context:r},r},G.createElement=function(r,A,j){var O,X={},K=null;if(A!=null)for(O in A.key!==void 0&&(K=""+A.key),A)ze.call(A,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(X[O]=A[O]);var ie=arguments.length-2;if(ie===1)X.children=j;else if(1<ie){for(var Ve=Array(ie),Me=0;Me<ie;Me++)Ve[Me]=arguments[Me+2];X.children=Ve}if(r&&r.defaultProps)for(O in ie=r.defaultProps,ie)X[O]===void 0&&(X[O]=ie[O]);return ve(r,K,X)},G.createRef=function(){return{current:null}},G.forwardRef=function(r){return{$$typeof:Ae,render:r}},G.isValidElement=ft,G.lazy=function(r){return{$$typeof:P,_payload:{_status:-1,_result:r},_init:Y}},G.memo=function(r,A){return{$$typeof:T,type:r,compare:A===void 0?null:A}},G.startTransition=function(r){var A=q.T,j={};q.T=j;try{var O=r(),X=q.S;X!==null&&X(j,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(ae,oe)}catch(K){oe(K)}finally{A!==null&&j.types!==null&&(A.types=j.types),q.T=A}},G.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},G.use=function(r){return q.H.use(r)},G.useActionState=function(r,A,j){return q.H.useActionState(r,A,j)},G.useCallback=function(r,A){return q.H.useCallback(r,A)},G.useContext=function(r){return q.H.useContext(r)},G.useDebugValue=function(){},G.useDeferredValue=function(r,A){return q.H.useDeferredValue(r,A)},G.useEffect=function(r,A){return q.H.useEffect(r,A)},G.useEffectEvent=function(r){return q.H.useEffectEvent(r)},G.useId=function(){return q.H.useId()},G.useImperativeHandle=function(r,A,j){return q.H.useImperativeHandle(r,A,j)},G.useInsertionEffect=function(r,A){return q.H.useInsertionEffect(r,A)},G.useLayoutEffect=function(r,A){return q.H.useLayoutEffect(r,A)},G.useMemo=function(r,A){return q.H.useMemo(r,A)},G.useOptimistic=function(r,A){return q.H.useOptimistic(r,A)},G.useReducer=function(r,A,j){return q.H.useReducer(r,A,j)},G.useRef=function(r){return q.H.useRef(r)},G.useState=function(r){return q.H.useState(r)},G.useSyncExternalStore=function(r,A,j){return q.H.useSyncExternalStore(r,A,j)},G.useTransition=function(){return q.H.useTransition()},G.version="19.2.4",G}var Ed;function hs(){return Ed||(Ed=1,os.exports=lg()),os.exports}var xt=hs(),rs={exports:{}},Tn={},fs={exports:{}},ds={};var Ad;function ag(){return Ad||(Ad=1,(function(z){function w(p,M){var Y=p.length;p.push(M);e:for(;0<Y;){var oe=Y-1>>>1,he=p[oe];if(0<_(he,M))p[oe]=M,p[Y]=he,Y=oe;else break e}}function k(p){return p.length===0?null:p[0]}function h(p){if(p.length===0)return null;var M=p[0],Y=p.pop();if(Y!==M){p[0]=Y;e:for(var oe=0,he=p.length,r=he>>>1;oe<r;){var A=2*(oe+1)-1,j=p[A],O=A+1,X=p[O];if(0>_(j,Y))O<he&&0>_(X,j)?(p[oe]=X,p[O]=Y,oe=O):(p[oe]=j,p[A]=Y,oe=A);else if(O<he&&0>_(X,Y))p[oe]=X,p[O]=Y,oe=O;else break e}}return M}function _(p,M){var Y=p.sortIndex-M.sortIndex;return Y!==0?Y:p.id-M.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;z.unstable_now=function(){return J.now()}}else{var ue=Date,Ae=ue.now();z.unstable_now=function(){return ue.now()-Ae}}var C=[],T=[],P=1,B=null,me=3,Ge=!1,ke=!1,N=!1,R=!1,Z=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,Te=typeof setImmediate<"u"?setImmediate:null;function Be(p){for(var M=k(T);M!==null;){if(M.callback===null)h(T);else if(M.startTime<=p)h(T),M.sortIndex=M.expirationTime,w(C,M);else break;M=k(T)}}function et(p){if(N=!1,Be(p),!ke)if(k(C)!==null)ke=!0,ae||(ae=!0,Xe());else{var M=k(T);M!==null&&At(et,M.startTime-p)}}var ae=!1,q=-1,ze=5,ve=-1;function Dt(){return R?!0:!(z.unstable_now()-ve<ze)}function ft(){if(R=!1,ae){var p=z.unstable_now();ve=p;var M=!0;try{e:{ke=!1,N&&(N=!1,U(q),q=-1),Ge=!0;var Y=me;try{t:{for(Be(p),B=k(C);B!==null&&!(B.expirationTime>p&&Dt());){var oe=B.callback;if(typeof oe=="function"){B.callback=null,me=B.priorityLevel;var he=oe(B.expirationTime<=p);if(p=z.unstable_now(),typeof he=="function"){B.callback=he,Be(p),M=!0;break t}B===k(C)&&h(C),Be(p)}else h(C);B=k(C)}if(B!==null)M=!0;else{var r=k(T);r!==null&&At(et,r.startTime-p),M=!1}}break e}finally{B=null,me=Y,Ge=!1}M=void 0}}finally{M?Xe():ae=!1}}}var Xe;if(typeof Te=="function")Xe=function(){Te(ft)};else if(typeof MessageChannel<"u"){var zl=new MessageChannel,Ht=zl.port2;zl.port1.onmessage=ft,Xe=function(){Ht.postMessage(null)}}else Xe=function(){Z(ft,0)};function At(p,M){q=Z(function(){p(z.unstable_now())},M)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(p){p.callback=null},z.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<p?Math.floor(1e3/p):5},z.unstable_getCurrentPriorityLevel=function(){return me},z.unstable_next=function(p){switch(me){case 1:case 2:case 3:var M=3;break;default:M=me}var Y=me;me=M;try{return p()}finally{me=Y}},z.unstable_requestPaint=function(){R=!0},z.unstable_runWithPriority=function(p,M){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var Y=me;me=p;try{return M()}finally{me=Y}},z.unstable_scheduleCallback=function(p,M,Y){var oe=z.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?oe+Y:oe):Y=oe,p){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Y+he,p={id:P++,callback:M,priorityLevel:p,startTime:Y,expirationTime:he,sortIndex:-1},Y>oe?(p.sortIndex=Y,w(T,p),k(C)===null&&p===k(T)&&(N?(U(q),q=-1):N=!0,At(et,Y-oe))):(p.sortIndex=he,w(C,p),ke||Ge||(ke=!0,ae||(ae=!0,Xe()))),p},z.unstable_shouldYield=Dt,z.unstable_wrapCallback=function(p){var M=me;return function(){var Y=me;me=M;try{return p.apply(this,arguments)}finally{me=Y}}}})(ds)),ds}var Td;function ng(){return Td||(Td=1,fs.exports=ag()),fs.exports}var ms={exports:{}},Qe={};var zd;function ug(){if(zd)return Qe;zd=1;var z=hs();function w(C){var T="https://react.dev/errors/"+C;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)T+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+C+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function k(){}var h={d:{f:k,r:function(){throw Error(w(522))},D:k,C:k,L:k,m:k,X:k,S:k,M:k},p:0,findDOMNode:null},_=Symbol.for("react.portal");function J(C,T,P){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:B==null?null:""+B,children:C,containerInfo:T,implementation:P}}var ue=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ae(C,T){if(C==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Qe.createPortal=function(C,T){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(w(299));return J(C,T,null,P)},Qe.flushSync=function(C){var T=ue.T,P=h.p;try{if(ue.T=null,h.p=2,C)return C()}finally{ue.T=T,h.p=P,h.d.f()}},Qe.preconnect=function(C,T){typeof C=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,h.d.C(C,T))},Qe.prefetchDNS=function(C){typeof C=="string"&&h.d.D(C)},Qe.preinit=function(C,T){if(typeof C=="string"&&T&&typeof T.as=="string"){var P=T.as,B=Ae(P,T.crossOrigin),me=typeof T.integrity=="string"?T.integrity:void 0,Ge=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;P==="style"?h.d.S(C,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:B,integrity:me,fetchPriority:Ge}):P==="script"&&h.d.X(C,{crossOrigin:B,integrity:me,fetchPriority:Ge,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Qe.preinitModule=function(C,T){if(typeof C=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var P=Ae(T.as,T.crossOrigin);h.d.M(C,{crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&h.d.M(C)},Qe.preload=function(C,T){if(typeof C=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var P=T.as,B=Ae(P,T.crossOrigin);h.d.L(C,P,{crossOrigin:B,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Qe.preloadModule=function(C,T){if(typeof C=="string")if(T){var P=Ae(T.as,T.crossOrigin);h.d.m(C,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else h.d.m(C)},Qe.requestFormReset=function(C){h.d.r(C)},Qe.unstable_batchedUpdates=function(C,T){return C(T)},Qe.useFormState=function(C,T,P){return ue.H.useFormState(C,T,P)},Qe.useFormStatus=function(){return ue.H.useHostTransitionStatus()},Qe.version="19.2.4",Qe}var Md;function ig(){if(Md)return ms.exports;Md=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(w){console.error(w)}}return z(),ms.exports=ug(),ms.exports}var jd;function cg(){if(jd)return Tn;jd=1;var z=ng(),w=hs(),k=ig();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function J(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ue(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ae(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(J(e)!==e)throw Error(h(188))}function T(e){var t=e.alternate;if(!t){if(t=J(e),t===null)throw Error(h(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return C(n),e;if(u===a)return C(n),t;u=u.sibling}throw Error(h(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i)throw Error(h(189))}}if(l.alternate!==a)throw Error(h(190))}if(l.tag!==3)throw Error(h(188));return l.stateNode.current===l?e:t}function P(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=P(e),t!==null)return t;e=e.sibling}return null}var B=Object.assign,me=Symbol.for("react.element"),Ge=Symbol.for("react.transitional.element"),ke=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),Te=Symbol.for("react.context"),Be=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),Dt=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var zl=Symbol.for("react.client.reference");function Ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case Z:return"Profiler";case R:return"StrictMode";case et:return"Suspense";case ae:return"SuspenseList";case ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ke:return"Portal";case Te:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case Be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:Ht(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return Ht(e(t))}catch{}}return null}var At=Array.isArray,p=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},oe=[],he=-1;function r(e){return{current:e}}function A(e){0>he||(e.current=oe[he],oe[he]=null,he--)}function j(e,t){he++,oe[he]=e.current,e.current=t}var O=r(null),X=r(null),K=r(null),ie=r(null);function Ve(e,t){switch(j(K,t),j(X,e),j(O,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gf(t),e=kf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(O),j(O,e)}function Me(){A(O),A(X),A(K)}function Oa(e){e.memoizedState!==null&&j(ie,e);var t=O.current,l=kf(t,e.type);t!==l&&(j(X,e),j(O,l))}function Mn(e){X.current===e&&(A(O),A(X)),ie.current===e&&(A(ie),pn._currentValue=Y)}var Qu,gs;function Ml(e){if(Qu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Qu=t&&t[1]||"",gs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qu+e+gs}var Vu=!1;function Ju(e,t){if(!e||Vu)return"";Vu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(v){var g=v}Reflect.construct(e,[],E)}else{try{E.call()}catch(v){g=v}e.call(E.prototype)}}else{try{throw Error()}catch(v){g=v}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(v){if(v&&g&&typeof v.stack=="string")return[v.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var s=i.split(`
`),m=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===m.length)for(a=s.length-1,n=m.length-1;1<=a&&0<=n&&s[a]!==m[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==m[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==m[n]){var y=`
`+s[a].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=a&&0<=n);break}}}finally{Vu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Ml(l):""}function Nd(e,t){switch(e.tag){case 26:case 27:case 5:return Ml(e.type);case 16:return Ml("Lazy");case 13:return e.child!==t&&t!==null?Ml("Suspense Fallback"):Ml("Suspense");case 19:return Ml("SuspenseList");case 0:case 15:return Ju(e.type,!1);case 11:return Ju(e.type.render,!1);case 1:return Ju(e.type,!0);case 31:return Ml("Activity");default:return""}}function vs(e){try{var t="",l=null;do t+=Nd(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Zu=Object.prototype.hasOwnProperty,Ku=z.unstable_scheduleCallback,Wu=z.unstable_cancelCallback,_d=z.unstable_shouldYield,Ud=z.unstable_requestPaint,tt=z.unstable_now,Hd=z.unstable_getCurrentPriorityLevel,ys=z.unstable_ImmediatePriority,ps=z.unstable_UserBlockingPriority,jn=z.unstable_NormalPriority,Bd=z.unstable_LowPriority,bs=z.unstable_IdlePriority,Rd=z.log,Ld=z.unstable_setDisableYieldValue,Da=null,lt=null;function Pt(e){if(typeof Rd=="function"&&Ld(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Da,e)}catch{}}var at=Math.clz32?Math.clz32:wd,qd=Math.log,Yd=Math.LN2;function wd(e){return e>>>=0,e===0?32:31-(qd(e)/Yd|0)|0}var xn=256,On=262144,Dn=4194304;function jl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Cn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=jl(a):(i&=c,i!==0?n=jl(i):l||(l=c&~e,l!==0&&(n=jl(l))))):(c=a&~u,c!==0?n=jl(c):i!==0?n=jl(i):l||(l=a&~e,l!==0&&(n=jl(l)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:n}function Ca(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ss(){var e=Dn;return Dn<<=1,(Dn&62914560)===0&&(Dn=4194304),e}function $u(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kd(e,t,l,a,n,u){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,m=e.hiddenUpdates;for(l=i&~l;0<l;){var y=31-at(l),E=1<<y;c[y]=0,s[y]=-1;var g=m[y];if(g!==null)for(m[y]=null,y=0;y<g.length;y++){var v=g[y];v!==null&&(v.lane&=-536870913)}l&=~E}a!==0&&Es(e,a,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function Es(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-at(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function As(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-at(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Ts(e,t){var l=t&-t;return l=(l&42)!==0?1:Fu(l),(l&(e.suspendedLanes|t))!==0?0:l}function Fu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Iu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zs(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:fd(e.type))}function Ms(e,t){var l=M.p;try{return M.p=e,t()}finally{M.p=l}}var el=Math.random().toString(36).slice(2),Re="__reactFiber$"+el,Ze="__reactProps$"+el,Ql="__reactContainer$"+el,Pu="__reactEvents$"+el,Xd="__reactListeners$"+el,Qd="__reactHandles$"+el,js="__reactResources$"+el,_a="__reactMarker$"+el;function ei(e){delete e[Re],delete e[Ze],delete e[Pu],delete e[Xd],delete e[Qd]}function Vl(e){var t=e[Re];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ql]||l[Re]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Wf(e);e!==null;){if(l=e[Re])return l;e=Wf(e)}return t}e=l,l=e.parentNode}return null}function Jl(e){if(e=e[Re]||e[Ql]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ua(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function Zl(e){var t=e[js];return t||(t=e[js]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[_a]=!0}var xs=new Set,Os={};function xl(e,t){Kl(e,t),Kl(e+"Capture",t)}function Kl(e,t){for(Os[e]=t,e=0;e<t.length;e++)xs.add(t[e])}var Vd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ds={},Cs={};function Jd(e){return Zu.call(Cs,e)?!0:Zu.call(Ds,e)?!1:Vd.test(e)?Cs[e]=!0:(Ds[e]=!0,!1)}function Nn(e,t,l){if(Jd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function _n(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Bt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ns(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ti(e){if(!e._valueTracker){var t=Ns(e)?"checked":"value";e._valueTracker=Zd(e,t,""+e[t])}}function _s(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Ns(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Un(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kd=/[\n"\\]/g;function mt(e){return e.replace(Kd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function li(e,t,l,a,n,u,i,c){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?ai(e,i,dt(t)):l!=null?ai(e,i,dt(l)):a!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+dt(c):e.removeAttribute("name")}function Us(e,t,l,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){ti(e);return}l=l!=null?""+dt(l):"",t=t!=null?""+dt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),ti(e)}function ai(e,t,l){t==="number"&&Un(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Wl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+dt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Hs(e,t,l){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+dt(l):""}function Bs(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(h(92));if(At(a)){if(1<a.length)throw Error(h(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=dt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),ti(e)}function $l(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Wd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rs(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Wd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Ls(e,t,l){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Rs(e,n,a)}else for(var u in t)t.hasOwnProperty(u)&&Rs(e,u,t[u])}function ni(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $d=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hn(e){return Fd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rt(){}var ui=null;function ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,Il=null;function qs(e){var t=Jl(e);if(t&&(e=t.stateNode)){var l=e[Ze]||null;e:switch(e=t.stateNode,t.type){case"input":if(li(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Ze]||null;if(!n)throw Error(h(90));li(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&_s(a)}break e;case"textarea":Hs(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Wl(e,!!l.multiple,t,!1)}}}var ci=!1;function Ys(e,t,l){if(ci)return e(t,l);ci=!0;try{var a=e(t);return a}finally{if(ci=!1,(Fl!==null||Il!==null)&&(Eu(),Fl&&(t=Fl,e=Il,Il=Fl=null,qs(t),e)))for(t=0;t<e.length;t++)qs(e[t])}}function Ha(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Ze]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(h(231,t,typeof l));return l}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=!1;if(Lt)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){si=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{si=!1}var tl=null,oi=null,Bn=null;function ws(){if(Bn)return Bn;var e,t=oi,l=t.length,a,n="value"in tl?tl.value:tl.textContent,u=n.length;for(e=0;e<l&&t[e]===n[e];e++);var i=l-e;for(a=1;a<=i&&t[l-a]===n[u-a];a++);return Bn=n.slice(e,1<a?1-a:void 0)}function Rn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function Gs(){return!1}function Ke(e){function t(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ln:Gs,this.isPropagationStopped=Gs,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qn=Ke(Ol),Ra=B({},Ol,{view:0,detail:0}),Id=Ke(Ra),ri,fi,La,Yn=B({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==La&&(La&&e.type==="mousemove"?(ri=e.screenX-La.screenX,fi=e.screenY-La.screenY):fi=ri=0,La=e),ri)},movementY:function(e){return"movementY"in e?e.movementY:fi}}),ks=Ke(Yn),Pd=B({},Yn,{dataTransfer:0}),em=Ke(Pd),tm=B({},Ra,{relatedTarget:0}),di=Ke(tm),lm=B({},Ol,{animationName:0,elapsedTime:0,pseudoElement:0}),am=Ke(lm),nm=B({},Ol,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),um=Ke(nm),im=B({},Ol,{data:0}),Xs=Ke(im),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=om[e])?!!t[e]:!1}function mi(){return rm}var fm=B({},Ra,{key:function(e){if(e.key){var t=cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(e){return e.type==="keypress"?Rn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dm=Ke(fm),mm=B({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qs=Ke(mm),hm=B({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),gm=Ke(hm),vm=B({},Ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=Ke(vm),pm=B({},Yn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=Ke(pm),Sm=B({},Ol,{newState:0,oldState:0}),Em=Ke(Sm),Am=[9,13,27,32],hi=Lt&&"CompositionEvent"in window,qa=null;Lt&&"documentMode"in document&&(qa=document.documentMode);var Tm=Lt&&"TextEvent"in window&&!qa,Vs=Lt&&(!hi||qa&&8<qa&&11>=qa),Js=" ",Zs=!1;function Ks(e,t){switch(e){case"keyup":return Am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pl=!1;function zm(e,t){switch(e){case"compositionend":return Ws(t);case"keypress":return t.which!==32?null:(Zs=!0,Js);case"textInput":return e=t.data,e===Js&&Zs?null:e;default:return null}}function Mm(e,t){if(Pl)return e==="compositionend"||!hi&&Ks(e,t)?(e=ws(),Bn=oi=tl=null,Pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vs&&t.locale!=="ko"?null:t.data;default:return null}}var jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jm[e.type]:t==="textarea"}function Fs(e,t,l,a){Fl?Il?Il.push(a):Il=[a]:Fl=a,t=Ou(t,"onChange"),0<t.length&&(l=new qn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ya=null,wa=null;function xm(e){Bf(e,0)}function wn(e){var t=Ua(e);if(_s(t))return e}function Is(e,t){if(e==="change")return t}var Ps=!1;if(Lt){var gi;if(Lt){var vi="oninput"in document;if(!vi){var eo=document.createElement("div");eo.setAttribute("oninput","return;"),vi=typeof eo.oninput=="function"}gi=vi}else gi=!1;Ps=gi&&(!document.documentMode||9<document.documentMode)}function to(){Ya&&(Ya.detachEvent("onpropertychange",lo),wa=Ya=null)}function lo(e){if(e.propertyName==="value"&&wn(wa)){var t=[];Fs(t,wa,e,ii(e)),Ys(xm,t)}}function Om(e,t,l){e==="focusin"?(to(),Ya=t,wa=l,Ya.attachEvent("onpropertychange",lo)):e==="focusout"&&to()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wn(wa)}function Cm(e,t){if(e==="click")return wn(t)}function Nm(e,t){if(e==="input"||e==="change")return wn(t)}function _m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:_m;function Ga(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Zu.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function ao(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function no(e,t){var l=ao(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ao(l)}}function uo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function io(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Un(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Un(e.document)}return t}function yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Um=Lt&&"documentMode"in document&&11>=document.documentMode,ea=null,pi=null,ka=null,bi=!1;function co(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bi||ea==null||ea!==Un(a)||(a=ea,"selectionStart"in a&&yi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ka&&Ga(ka,a)||(ka=a,a=Ou(pi,"onSelect"),0<a.length&&(t=new qn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ea)))}function Dl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ta={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionrun:Dl("Transition","TransitionRun"),transitionstart:Dl("Transition","TransitionStart"),transitioncancel:Dl("Transition","TransitionCancel"),transitionend:Dl("Transition","TransitionEnd")},Si={},so={};Lt&&(so=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Cl(e){if(Si[e])return Si[e];if(!ta[e])return e;var t=ta[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in so)return Si[e]=t[l];return e}var oo=Cl("animationend"),ro=Cl("animationiteration"),fo=Cl("animationstart"),Hm=Cl("transitionrun"),Bm=Cl("transitionstart"),Rm=Cl("transitioncancel"),mo=Cl("transitionend"),ho=new Map,Ei="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ei.push("scrollEnd");function Tt(e,t){ho.set(e,t),xl(t,[e])}var Gn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ht=[],la=0,Ai=0;function kn(){for(var e=la,t=Ai=la=0;t<e;){var l=ht[t];ht[t++]=null;var a=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var u=ht[t];if(ht[t++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&go(l,n,u)}}function Xn(e,t,l,a){ht[la++]=e,ht[la++]=t,ht[la++]=l,ht[la++]=a,Ai|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ti(e,t,l,a){return Xn(e,t,l,a),Qn(e)}function Nl(e,t){return Xn(e,null,null,t),Qn(e)}function go(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=e.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-at(l),e=u.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),u):null}function Qn(e){if(50<fn)throw fn=0,_c=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var aa={};function Lm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,l,a){return new Lm(e,t,l,a)}function zi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qt(e,t){var l=e.alternate;return l===null?(l=ut(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function vo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vn(e,t,l,a,n,u){var i=0;if(a=e,typeof e=="function")zi(e)&&(i=1);else if(typeof e=="string")i=kh(e,l,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ve:return e=ut(31,l,t,n),e.elementType=ve,e.lanes=u,e;case N:return _l(l.children,n,u,t);case R:i=8,n|=24;break;case Z:return e=ut(12,l,t,n|2),e.elementType=Z,e.lanes=u,e;case et:return e=ut(13,l,t,n),e.elementType=et,e.lanes=u,e;case ae:return e=ut(19,l,t,n),e.elementType=ae,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:i=10;break e;case U:i=9;break e;case Be:i=11;break e;case q:i=14;break e;case ze:i=16,a=null;break e}i=29,l=Error(h(130,e===null?"null":typeof e,"")),a=null}return t=ut(i,l,t,n),t.elementType=e,t.type=a,t.lanes=u,t}function _l(e,t,l,a){return e=ut(7,e,a,t),e.lanes=l,e}function Mi(e,t,l){return e=ut(6,e,null,t),e.lanes=l,e}function yo(e){var t=ut(18,null,null,0);return t.stateNode=e,t}function ji(e,t,l){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var po=new WeakMap;function gt(e,t){if(typeof e=="object"&&e!==null){var l=po.get(e);return l!==void 0?l:(t={value:e,source:t,stack:vs(t)},po.set(e,t),t)}return{value:e,source:t,stack:vs(t)}}var na=[],ua=0,Jn=null,Xa=0,vt=[],yt=0,ll=null,Ct=1,Nt="";function Yt(e,t){na[ua++]=Xa,na[ua++]=Jn,Jn=e,Xa=t}function bo(e,t,l){vt[yt++]=Ct,vt[yt++]=Nt,vt[yt++]=ll,ll=e;var a=Ct;e=Nt;var n=32-at(a)-1;a&=~(1<<n),l+=1;var u=32-at(t)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,Ct=1<<32-at(t)+n|l<<n|a,Nt=u+e}else Ct=1<<u|l<<n|a,Nt=e}function xi(e){e.return!==null&&(Yt(e,1),bo(e,1,0))}function Oi(e){for(;e===Jn;)Jn=na[--ua],na[ua]=null,Xa=na[--ua],na[ua]=null;for(;e===ll;)ll=vt[--yt],vt[yt]=null,Nt=vt[--yt],vt[yt]=null,Ct=vt[--yt],vt[yt]=null}function So(e,t){vt[yt++]=Ct,vt[yt++]=Nt,vt[yt++]=ll,Ct=t.id,Nt=t.overflow,ll=e}var Le=null,ye=null,ee=!1,al=null,pt=!1,Di=Error(h(519));function nl(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qa(gt(t,e)),Di}function Eo(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Re]=e,t[Ze]=a,l){case"dialog":$("cancel",t),$("close",t);break;case"iframe":case"object":case"embed":$("load",t);break;case"video":case"audio":for(l=0;l<mn.length;l++)$(mn[l],t);break;case"source":$("error",t);break;case"img":case"image":case"link":$("error",t),$("load",t);break;case"details":$("toggle",t);break;case"input":$("invalid",t),Us(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":$("invalid",t);break;case"textarea":$("invalid",t),Bs(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Yf(t.textContent,l)?(a.popover!=null&&($("beforetoggle",t),$("toggle",t)),a.onScroll!=null&&$("scroll",t),a.onScrollEnd!=null&&$("scrollend",t),a.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||nl(e,!0)}function Ao(e){for(Le=e.return;Le;)switch(Le.tag){case 5:case 31:case 13:pt=!1;return;case 27:case 3:pt=!0;return;default:Le=Le.return}}function ia(e){if(e!==Le)return!1;if(!ee)return Ao(e),ee=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Zc(e.type,e.memoizedProps)),l=!l),l&&ye&&nl(e),Ao(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ye=Kf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ye=Kf(e)}else t===27?(t=ye,pl(e.type)?(e=Ic,Ic=null,ye=e):ye=t):ye=Le?St(e.stateNode.nextSibling):null;return!0}function Ul(){ye=Le=null,ee=!1}function Ci(){var e=al;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),al=null),e}function Qa(e){al===null?al=[e]:al.push(e)}var Ni=r(null),Hl=null,wt=null;function ul(e,t,l){j(Ni,t._currentValue),t._currentValue=l}function Gt(e){e._currentValue=Ni.current,A(Ni)}function _i(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Ui(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var c=u;u=n;for(var s=0;s<t.length;s++)if(c.context===t[s]){u.lanes|=l,c=u.alternate,c!==null&&(c.lanes|=l),_i(u.return,l,e),a||(i=null);break e}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(h(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),_i(i,l,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ca(e,t,l,a){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(h(387));if(i=i.memoizedProps,i!==null){var c=n.type;nt(n.pendingProps.value,i.value)||(e!==null?e.push(c):e=[c])}}else if(n===ie.current){if(i=n.alternate,i===null)throw Error(h(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(pn):e=[pn])}n=n.return}e!==null&&Ui(t,e,l,a),t.flags|=262144}function Zn(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bl(e){Hl=e,wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qe(e){return To(Hl,e)}function Kn(e,t){return Hl===null&&Bl(e),To(e,t)}function To(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},wt===null){if(e===null)throw Error(h(308));wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wt=wt.next=t;return l}var qm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Ym=z.unstable_scheduleCallback,wm=z.unstable_NormalPriority,Oe={$$typeof:Te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hi(){return{controller:new qm,data:new Map,refCount:0}}function Va(e){e.refCount--,e.refCount===0&&Ym(wm,function(){e.controller.abort()})}var Ja=null,Bi=0,sa=0,oa=null;function Gm(e,t){if(Ja===null){var l=Ja=[];Bi=0,sa=qc(),oa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Bi++,t.then(zo,zo),t}function zo(){if(--Bi===0&&Ja!==null){oa!==null&&(oa.status="fulfilled");var e=Ja;Ja=null,sa=0,oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function km(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Mo=p.S;p.S=function(e,t){of=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gm(e,t),Mo!==null&&Mo(e,t)};var Rl=r(null);function Ri(){var e=Rl.current;return e!==null?e:ge.pooledCache}function Wn(e,t){t===null?j(Rl,Rl.current):j(Rl,t.pool)}function jo(){var e=Ri();return e===null?null:{parent:Oe._currentValue,pool:e}}var ra=Error(h(460)),Li=Error(h(474)),$n=Error(h(542)),Fn={then:function(){}};function xo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Oo(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Rt,Rt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Co(e),e;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Co(e),e}throw ql=t,ra}}function Ll(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ql=l,ra):l}}var ql=null;function Do(){if(ql===null)throw Error(h(459));var e=ql;return ql=null,e}function Co(e){if(e===ra||e===$n)throw Error(h(483))}var fa=null,Za=0;function In(e){var t=Za;return Za+=1,fa===null&&(fa=[]),Oo(fa,e,t)}function Ka(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pn(e,t){throw t.$$typeof===me?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function No(e){function t(f,o){if(e){var d=f.deletions;d===null?(f.deletions=[o],f.flags|=16):d.push(o)}}function l(f,o){if(!e)return null;for(;o!==null;)t(f,o),o=o.sibling;return null}function a(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function n(f,o){return f=qt(f,o),f.index=0,f.sibling=null,f}function u(f,o,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<o?(f.flags|=67108866,o):d):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function i(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function c(f,o,d,b){return o===null||o.tag!==6?(o=Mi(d,f.mode,b),o.return=f,o):(o=n(o,d),o.return=f,o)}function s(f,o,d,b){var H=d.type;return H===N?y(f,o,d.props.children,b,d.key):o!==null&&(o.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ze&&Ll(H)===o.type)?(o=n(o,d.props),Ka(o,d),o.return=f,o):(o=Vn(d.type,d.key,d.props,null,f.mode,b),Ka(o,d),o.return=f,o)}function m(f,o,d,b){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=ji(d,f.mode,b),o.return=f,o):(o=n(o,d.children||[]),o.return=f,o)}function y(f,o,d,b,H){return o===null||o.tag!==7?(o=_l(d,f.mode,b,H),o.return=f,o):(o=n(o,d),o.return=f,o)}function E(f,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Mi(""+o,f.mode,d),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Ge:return d=Vn(o.type,o.key,o.props,null,f.mode,d),Ka(d,o),d.return=f,d;case ke:return o=ji(o,f.mode,d),o.return=f,o;case ze:return o=Ll(o),E(f,o,d)}if(At(o)||Xe(o))return o=_l(o,f.mode,d,null),o.return=f,o;if(typeof o.then=="function")return E(f,In(o),d);if(o.$$typeof===Te)return E(f,Kn(f,o),d);Pn(f,o)}return null}function g(f,o,d,b){var H=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return H!==null?null:c(f,o,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ge:return d.key===H?s(f,o,d,b):null;case ke:return d.key===H?m(f,o,d,b):null;case ze:return d=Ll(d),g(f,o,d,b)}if(At(d)||Xe(d))return H!==null?null:y(f,o,d,b,null);if(typeof d.then=="function")return g(f,o,In(d),b);if(d.$$typeof===Te)return g(f,o,Kn(f,d),b);Pn(f,d)}return null}function v(f,o,d,b,H){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return f=f.get(d)||null,c(o,f,""+b,H);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ge:return f=f.get(b.key===null?d:b.key)||null,s(o,f,b,H);case ke:return f=f.get(b.key===null?d:b.key)||null,m(o,f,b,H);case ze:return b=Ll(b),v(f,o,d,b,H)}if(At(b)||Xe(b))return f=f.get(d)||null,y(o,f,b,H,null);if(typeof b.then=="function")return v(f,o,d,In(b),H);if(b.$$typeof===Te)return v(f,o,d,Kn(o,b),H);Pn(o,b)}return null}function x(f,o,d,b){for(var H=null,te=null,D=o,V=o=0,I=null;D!==null&&V<d.length;V++){D.index>V?(I=D,D=null):I=D.sibling;var le=g(f,D,d[V],b);if(le===null){D===null&&(D=I);break}e&&D&&le.alternate===null&&t(f,D),o=u(le,o,V),te===null?H=le:te.sibling=le,te=le,D=I}if(V===d.length)return l(f,D),ee&&Yt(f,V),H;if(D===null){for(;V<d.length;V++)D=E(f,d[V],b),D!==null&&(o=u(D,o,V),te===null?H=D:te.sibling=D,te=D);return ee&&Yt(f,V),H}for(D=a(D);V<d.length;V++)I=v(D,f,V,d[V],b),I!==null&&(e&&I.alternate!==null&&D.delete(I.key===null?V:I.key),o=u(I,o,V),te===null?H=I:te.sibling=I,te=I);return e&&D.forEach(function(Tl){return t(f,Tl)}),ee&&Yt(f,V),H}function L(f,o,d,b){if(d==null)throw Error(h(151));for(var H=null,te=null,D=o,V=o=0,I=null,le=d.next();D!==null&&!le.done;V++,le=d.next()){D.index>V?(I=D,D=null):I=D.sibling;var Tl=g(f,D,le.value,b);if(Tl===null){D===null&&(D=I);break}e&&D&&Tl.alternate===null&&t(f,D),o=u(Tl,o,V),te===null?H=Tl:te.sibling=Tl,te=Tl,D=I}if(le.done)return l(f,D),ee&&Yt(f,V),H;if(D===null){for(;!le.done;V++,le=d.next())le=E(f,le.value,b),le!==null&&(o=u(le,o,V),te===null?H=le:te.sibling=le,te=le);return ee&&Yt(f,V),H}for(D=a(D);!le.done;V++,le=d.next())le=v(D,f,V,le.value,b),le!==null&&(e&&le.alternate!==null&&D.delete(le.key===null?V:le.key),o=u(le,o,V),te===null?H=le:te.sibling=le,te=le);return e&&D.forEach(function(Ph){return t(f,Ph)}),ee&&Yt(f,V),H}function de(f,o,d,b){if(typeof d=="object"&&d!==null&&d.type===N&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Ge:e:{for(var H=d.key;o!==null;){if(o.key===H){if(H=d.type,H===N){if(o.tag===7){l(f,o.sibling),b=n(o,d.props.children),b.return=f,f=b;break e}}else if(o.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ze&&Ll(H)===o.type){l(f,o.sibling),b=n(o,d.props),Ka(b,d),b.return=f,f=b;break e}l(f,o);break}else t(f,o);o=o.sibling}d.type===N?(b=_l(d.props.children,f.mode,b,d.key),b.return=f,f=b):(b=Vn(d.type,d.key,d.props,null,f.mode,b),Ka(b,d),b.return=f,f=b)}return i(f);case ke:e:{for(H=d.key;o!==null;){if(o.key===H)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){l(f,o.sibling),b=n(o,d.children||[]),b.return=f,f=b;break e}else{l(f,o);break}else t(f,o);o=o.sibling}b=ji(d,f.mode,b),b.return=f,f=b}return i(f);case ze:return d=Ll(d),de(f,o,d,b)}if(At(d))return x(f,o,d,b);if(Xe(d)){if(H=Xe(d),typeof H!="function")throw Error(h(150));return d=H.call(d),L(f,o,d,b)}if(typeof d.then=="function")return de(f,o,In(d),b);if(d.$$typeof===Te)return de(f,o,Kn(f,d),b);Pn(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(l(f,o.sibling),b=n(o,d),b.return=f,f=b):(l(f,o),b=Mi(d,f.mode,b),b.return=f,f=b),i(f)):l(f,o)}return function(f,o,d,b){try{Za=0;var H=de(f,o,d,b);return fa=null,H}catch(D){if(D===ra||D===$n)throw D;var te=ut(29,D,null,f.mode);return te.lanes=b,te.return=f,te}}}var Yl=No(!0),_o=No(!1),il=!1;function qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ne&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Qn(e),go(e,null,l),t}return Xn(e,a,t,l),Qn(e)}function Wa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,As(e,l)}}function wi(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=t:u=u.next=t}else n=u=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Gi=!1;function $a(){if(Gi){var e=oa;if(e!==null)throw e}}function Fa(e,t,l,a){Gi=!1;var n=e.updateQueue;il=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,m=s.next;s.next=null,i===null?u=m:i.next=m,i=s;var y=e.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==i&&(c===null?y.firstBaseUpdate=m:c.next=m,y.lastBaseUpdate=s))}if(u!==null){var E=n.baseState;i=0,y=m=s=null,c=u;do{var g=c.lane&-536870913,v=g!==c.lane;if(v?(F&g)===g:(a&g)===g){g!==0&&g===sa&&(Gi=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var x=e,L=c;g=t;var de=l;switch(L.tag){case 1:if(x=L.payload,typeof x=="function"){E=x.call(de,E,g);break e}E=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=L.payload,g=typeof x=="function"?x.call(de,E,g):x,g==null)break e;E=B({},E,g);break e;case 2:il=!0}}g=c.callback,g!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[g]:v.push(g))}else v={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(m=y=v,s=E):y=y.next=v,i|=g;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;v=c,c=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);y===null&&(s=E),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=y,u===null&&(n.shared.lanes=0),ml|=i,e.lanes=i,e.memoizedState=E}}function Uo(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Ho(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Uo(l[e],t)}var da=r(null),eu=r(0);function Bo(e,t){e=$t,j(eu,e),j(da,t),$t=e|t.baseLanes}function ki(){j(eu,$t),j(da,da.current)}function Xi(){$t=eu.current,A(da),A(eu)}var it=r(null),bt=null;function ol(e){var t=e.alternate;j(je,je.current&1),j(it,e),bt===null&&(t===null||da.current!==null||t.memoizedState!==null)&&(bt=e)}function Qi(e){j(je,je.current),j(it,e),bt===null&&(bt=e)}function Ro(e){e.tag===22?(j(je,je.current),j(it,e),bt===null&&(bt=e)):rl()}function rl(){j(je,je.current),j(it,it.current)}function ct(e){A(it),bt===e&&(bt=null),A(je)}var je=r(0);function tu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||$c(l)||Fc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kt=0,Q=null,re=null,De=null,lu=!1,ma=!1,wl=!1,au=0,Ia=0,ha=null,Xm=0;function Se(){throw Error(h(321))}function Vi(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!nt(e[l],t[l]))return!1;return!0}function Ji(e,t,l,a,n,u){return kt=u,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,p.H=e===null||e.memoizedState===null?br:cc,wl=!1,u=l(a,n),wl=!1,ma&&(u=qo(t,l,a,n)),Lo(e),u}function Lo(e){p.H=tn;var t=re!==null&&re.next!==null;if(kt=0,De=re=Q=null,lu=!1,Ia=0,ha=null,t)throw Error(h(300));e===null||Ce||(e=e.dependencies,e!==null&&Zn(e)&&(Ce=!0))}function qo(e,t,l,a){Q=e;var n=0;do{if(ma&&(ha=null),Ia=0,ma=!1,25<=n)throw Error(h(301));if(n+=1,De=re=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}p.H=Sr,u=t(l,a)}while(ma);return u}function Qm(){var e=p.H,t=e.useState()[0];return t=typeof t.then=="function"?Pa(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(Q.flags|=1024),t}function Zi(){var e=au!==0;return au=0,e}function Ki(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Wi(e){if(lu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lu=!1}kt=0,De=re=Q=null,ma=!1,Ia=au=0,ha=null}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Q.memoizedState=De=e:De=De.next=e,De}function xe(){if(re===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=De===null?Q.memoizedState:De.next;if(t!==null)De=t,re=e;else{if(e===null)throw Q.alternate===null?Error(h(467)):Error(h(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},De===null?Q.memoizedState=De=e:De=De.next=e}return De}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(e){var t=Ia;return Ia+=1,ha===null&&(ha=[]),e=Oo(ha,e,t),t=Q,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,p.H=t===null||t.memoizedState===null?br:cc),e}function uu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pa(e);if(e.$$typeof===Te)return qe(e)}throw Error(h(438,String(e)))}function $i(e){var t=null,l=Q.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=Q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=nu(),Q.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Dt;return t.index++,l}function Xt(e,t){return typeof t=="function"?t(e):t}function iu(e){var t=xe();return Fi(t,re,e)}function Fi(e,t,l){var a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=l;var n=e.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,a.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var c=i=null,s=null,m=t,y=!1;do{var E=m.lane&-536870913;if(E!==m.lane?(F&E)===E:(kt&E)===E){var g=m.revertLane;if(g===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),E===sa&&(y=!0);else if((kt&g)===g){m=m.next,g===sa&&(y=!0);continue}else E={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=E,i=u):s=s.next=E,Q.lanes|=g,ml|=g;E=m.action,wl&&l(u,E),u=m.hasEagerState?m.eagerState:l(u,E)}else g={lane:E,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=g,i=u):s=s.next=g,Q.lanes|=E,ml|=E;m=m.next}while(m!==null&&m!==t);if(s===null?i=u:s.next=c,!nt(u,e.memoizedState)&&(Ce=!0,y&&(l=oa,l!==null)))throw l;e.memoizedState=u,e.baseState=i,e.baseQueue=s,a.lastRenderedState=u}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ii(e){var t=xe(),l=t.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,u=t.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);nt(u,t.memoizedState)||(Ce=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,a]}function Yo(e,t,l){var a=Q,n=xe(),u=ee;if(u){if(l===void 0)throw Error(h(407));l=l()}else l=t();var i=!nt((re||n).memoizedState,l);if(i&&(n.memoizedState=l,Ce=!0),n=n.queue,tc(ko.bind(null,a,n,e),[e]),n.getSnapshot!==t||i||De!==null&&De.memoizedState.tag&1){if(a.flags|=2048,ga(9,{destroy:void 0},Go.bind(null,a,n,l,t),null),ge===null)throw Error(h(349));u||(kt&127)!==0||wo(a,t,l)}return l}function wo(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=Q.updateQueue,t===null?(t=nu(),Q.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Go(e,t,l,a){t.value=l,t.getSnapshot=a,Xo(t)&&Qo(e)}function ko(e,t,l){return l(function(){Xo(t)&&Qo(e)})}function Xo(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!nt(e,l)}catch{return!0}}function Qo(e){var t=Nl(e,2);t!==null&&Pe(t,e,2)}function Pi(e){var t=Je();if(typeof e=="function"){var l=e;if(e=l(),wl){Pt(!0);try{l()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Vo(e,t,l,a){return e.baseState=l,Fi(e,re,typeof a=="function"?a:Xt)}function Vm(e,t,l,a,n){if(ou(e))throw Error(h(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};p.T!==null?l(!0):u.isTransition=!1,a(u),l=t.pending,l===null?(u.next=t.pending=u,Jo(t,u)):(u.next=l.next,t.pending=l.next=u)}}function Jo(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var u=p.T,i={};p.T=i;try{var c=l(n,a),s=p.S;s!==null&&s(i,c),Zo(e,t,c)}catch(m){ec(e,t,m)}finally{u!==null&&i.types!==null&&(u.types=i.types),p.T=u}}else try{u=l(n,a),Zo(e,t,u)}catch(m){ec(e,t,m)}}function Zo(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Ko(e,t,a)},function(a){return ec(e,t,a)}):Ko(e,t,l)}function Ko(e,t,l){t.status="fulfilled",t.value=l,Wo(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Jo(e,l)))}function ec(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Wo(t),t=t.next;while(t!==a)}e.action=null}function Wo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function Fo(e,t){if(ee){var l=ge.formState;if(l!==null){e:{var a=Q;if(ee){if(ye){t:{for(var n=ye,u=pt;n.nodeType!==8;){if(!u){n=null;break t}if(n=St(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){ye=St(n.nextSibling),a=n.data==="F!";break e}}nl(a)}a=!1}a&&(t=l[0])}}return l=Je(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},l.queue=a,l=vr.bind(null,Q,a),a.dispatch=l,a=Pi(!1),u=ic.bind(null,Q,!1,a.queue),a=Je(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Vm.bind(null,Q,n,u,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Io(e){var t=xe();return Po(t,re,e)}function Po(e,t,l){if(t=Fi(e,t,$o)[0],e=iu(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Pa(t)}catch(i){throw i===ra?$n:i}else a=t;t=xe();var n=t.queue,u=n.dispatch;return l!==t.memoizedState&&(Q.flags|=2048,ga(9,{destroy:void 0},Jm.bind(null,n,l),null)),[a,u,e]}function Jm(e,t){e.action=t}function er(e){var t=xe(),l=re;if(l!==null)return Po(t,l,e);xe(),t=t.memoizedState,l=xe();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ga(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=Q.updateQueue,t===null&&(t=nu(),Q.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function tr(){return xe().memoizedState}function cu(e,t,l,a){var n=Je();Q.flags|=e,n.memoizedState=ga(1|t,{destroy:void 0},l,a===void 0?null:a)}function su(e,t,l,a){var n=xe();a=a===void 0?null:a;var u=n.memoizedState.inst;re!==null&&a!==null&&Vi(a,re.memoizedState.deps)?n.memoizedState=ga(t,u,l,a):(Q.flags|=e,n.memoizedState=ga(1|t,u,l,a))}function lr(e,t){cu(8390656,8,e,t)}function tc(e,t){su(2048,8,e,t)}function Zm(e){Q.flags|=4;var t=Q.updateQueue;if(t===null)t=nu(),Q.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function ar(e){var t=xe().memoizedState;return Zm({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function nr(e,t){return su(4,2,e,t)}function ur(e,t){return su(4,4,e,t)}function ir(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cr(e,t,l){l=l!=null?l.concat([e]):null,su(4,4,ir.bind(null,t,e),l)}function lc(){}function sr(e,t){var l=xe();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Vi(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function or(e,t){var l=xe();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Vi(t,a[1]))return a[0];if(a=e(),wl){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a}function ac(e,t,l){return l===void 0||(kt&1073741824)!==0&&(F&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=ff(),Q.lanes|=e,ml|=e,l)}function rr(e,t,l,a){return nt(l,t)?l:da.current!==null?(e=ac(e,l,a),nt(e,t)||(Ce=!0),e):(kt&42)===0||(kt&1073741824)!==0&&(F&261930)===0?(Ce=!0,e.memoizedState=l):(e=ff(),Q.lanes|=e,ml|=e,t)}function fr(e,t,l,a,n){var u=M.p;M.p=u!==0&&8>u?u:8;var i=p.T,c={};p.T=c,ic(e,!1,t,l);try{var s=n(),m=p.S;if(m!==null&&m(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var y=km(s,a);en(e,t,y,rt(e))}else en(e,t,a,rt(e))}catch(E){en(e,t,{then:function(){},status:"rejected",reason:E},rt())}finally{M.p=u,i!==null&&c.types!==null&&(i.types=c.types),p.T=i}}function Km(){}function nc(e,t,l,a){if(e.tag!==5)throw Error(h(476));var n=dr(e).queue;fr(e,n,t,Y,l===null?Km:function(){return mr(e),l(a)})}function dr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:Y},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mr(e){var t=dr(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},rt())}function uc(){return qe(pn)}function hr(){return xe().memoizedState}function gr(){return xe().memoizedState}function Wm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=rt();e=cl(l);var a=sl(t,e,l);a!==null&&(Pe(a,t,l),Wa(a,t,l)),t={cache:Hi()},e.payload=t;return}t=t.return}}function $m(e,t,l){var a=rt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ou(e)?yr(t,l):(l=Ti(e,t,l,a),l!==null&&(Pe(l,e,a),pr(l,t,a)))}function vr(e,t,l){var a=rt();en(e,t,l,a)}function en(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ou(e))yr(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,c=u(i,l);if(n.hasEagerState=!0,n.eagerState=c,nt(c,i))return Xn(e,t,n,0),ge===null&&kn(),!1}catch{}if(l=Ti(e,t,n,a),l!==null)return Pe(l,e,a),pr(l,t,a),!0}return!1}function ic(e,t,l,a){if(a={lane:2,revertLane:qc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ou(e)){if(t)throw Error(h(479))}else t=Ti(e,l,a,2),t!==null&&Pe(t,e,2)}function ou(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function yr(e,t){ma=lu=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function pr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,As(e,l)}}var tn={readContext:qe,use:uu,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se};tn.useEffectEvent=Se;var br={readContext:qe,use:uu,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:lr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,cu(4194308,4,ir.bind(null,t,e),l)},useLayoutEffect:function(e,t){return cu(4194308,4,e,t)},useInsertionEffect:function(e,t){cu(4,2,e,t)},useMemo:function(e,t){var l=Je();t=t===void 0?null:t;var a=e();if(wl){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Je();if(l!==void 0){var n=l(t);if(wl){Pt(!0);try{l(t)}finally{Pt(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=$m.bind(null,Q,e),[a.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:function(e){e=Pi(e);var t=e.queue,l=vr.bind(null,Q,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:lc,useDeferredValue:function(e,t){var l=Je();return ac(l,e,t)},useTransition:function(){var e=Pi(!1);return e=fr.bind(null,Q,e.queue,!0,!1),Je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=Q,n=Je();if(ee){if(l===void 0)throw Error(h(407));l=l()}else{if(l=t(),ge===null)throw Error(h(349));(F&127)!==0||wo(a,t,l)}n.memoizedState=l;var u={value:l,getSnapshot:t};return n.queue=u,lr(ko.bind(null,a,u,e),[e]),a.flags|=2048,ga(9,{destroy:void 0},Go.bind(null,a,u,l,t),null),l},useId:function(){var e=Je(),t=ge.identifierPrefix;if(ee){var l=Nt,a=Ct;l=(a&~(1<<32-at(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=au++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Xm++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:uc,useFormState:Fo,useActionState:Fo,useOptimistic:function(e){var t=Je();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=ic.bind(null,Q,!0,l),l.dispatch=t,[e,t]},useMemoCache:$i,useCacheRefresh:function(){return Je().memoizedState=Wm.bind(null,Q)},useEffectEvent:function(e){var t=Je(),l={impl:e};return t.memoizedState=l,function(){if((ne&2)!==0)throw Error(h(440));return l.impl.apply(void 0,arguments)}}},cc={readContext:qe,use:uu,useCallback:sr,useContext:qe,useEffect:tc,useImperativeHandle:cr,useInsertionEffect:nr,useLayoutEffect:ur,useMemo:or,useReducer:iu,useRef:tr,useState:function(){return iu(Xt)},useDebugValue:lc,useDeferredValue:function(e,t){var l=xe();return rr(l,re.memoizedState,e,t)},useTransition:function(){var e=iu(Xt)[0],t=xe().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:Yo,useId:hr,useHostTransitionStatus:uc,useFormState:Io,useActionState:Io,useOptimistic:function(e,t){var l=xe();return Vo(l,re,e,t)},useMemoCache:$i,useCacheRefresh:gr};cc.useEffectEvent=ar;var Sr={readContext:qe,use:uu,useCallback:sr,useContext:qe,useEffect:tc,useImperativeHandle:cr,useInsertionEffect:nr,useLayoutEffect:ur,useMemo:or,useReducer:Ii,useRef:tr,useState:function(){return Ii(Xt)},useDebugValue:lc,useDeferredValue:function(e,t){var l=xe();return re===null?ac(l,e,t):rr(l,re.memoizedState,e,t)},useTransition:function(){var e=Ii(Xt)[0],t=xe().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:Yo,useId:hr,useHostTransitionStatus:uc,useFormState:er,useActionState:er,useOptimistic:function(e,t){var l=xe();return re!==null?Vo(l,re,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:$i,useCacheRefresh:gr};Sr.useEffectEvent=ar;function sc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:B({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var oc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=rt(),n=cl(a);n.payload=t,l!=null&&(n.callback=l),t=sl(e,n,a),t!==null&&(Pe(t,e,a),Wa(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=rt(),n=cl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=sl(e,n,a),t!==null&&(Pe(t,e,a),Wa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=rt(),a=cl(l);a.tag=2,t!=null&&(a.callback=t),t=sl(e,a,l),t!==null&&(Pe(t,e,l),Wa(t,e,l))}};function Er(e,t,l,a,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,i):t.prototype&&t.prototype.isPureReactComponent?!Ga(l,a)||!Ga(n,u):!0}function Ar(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&oc.enqueueReplaceState(t,t.state,null)}function Gl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=B({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Tr(e){Gn(e)}function zr(e){console.error(e)}function Mr(e){Gn(e)}function ru(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function jr(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function rc(e,t,l){return l=cl(l),l.tag=3,l.payload={element:null},l.callback=function(){ru(e,t)},l}function xr(e){return e=cl(e),e.tag=3,e}function Or(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;e.payload=function(){return n(u)},e.callback=function(){jr(t,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){jr(t,l,a),typeof n!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Fm(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ca(t,l,n,!0),l=it.current,l!==null){switch(l.tag){case 31:case 13:return bt===null?Au():l.alternate===null&&Ee===0&&(Ee=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Fn?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Bc(e,a,n)),!1;case 22:return l.flags|=65536,a===Fn?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Bc(e,a,n)),!1}throw Error(h(435,l.tag))}return Bc(e,a,n),Au(),!1}if(ee)return t=it.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Di&&(e=Error(h(422),{cause:a}),Qa(gt(e,l)))):(a!==Di&&(t=Error(h(423),{cause:a}),Qa(gt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=gt(a,l),n=rc(e.stateNode,a,n),wi(e,n),Ee!==4&&(Ee=2)),!1;var u=Error(h(520),{cause:a});if(u=gt(u,l),rn===null?rn=[u]:rn.push(u),Ee!==4&&(Ee=2),t===null)return!0;a=gt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=rc(l.stateNode,a,e),wi(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(hl===null||!hl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=xr(n),Or(n,e,l,a),wi(l,n),!1}l=l.return}while(l!==null);return!1}var fc=Error(h(461)),Ce=!1;function Ye(e,t,l,a){t.child=e===null?_o(t,null,l,a):Yl(t,e.child,l,a)}function Dr(e,t,l,a,n){l=l.render;var u=t.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Bl(t),a=Ji(e,t,l,i,u,n),c=Zi(),e!==null&&!Ce?(Ki(e,t,n),Qt(e,t,n)):(ee&&c&&xi(t),t.flags|=1,Ye(e,t,a,n),t.child)}function Cr(e,t,l,a,n){if(e===null){var u=l.type;return typeof u=="function"&&!zi(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,Nr(e,t,u,a,n)):(e=Vn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!bc(e,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Ga,l(i,a)&&e.ref===t.ref)return Qt(e,t,n)}return t.flags|=1,e=qt(u,a),e.ref=t.ref,e.return=t,t.child=e}function Nr(e,t,l,a,n){if(e!==null){var u=e.memoizedProps;if(Ga(u,a)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=a=u,bc(e,n))(e.flags&131072)!==0&&(Ce=!0);else return t.lanes=e.lanes,Qt(e,t,n)}return dc(e,t,l,a,n)}function _r(e,t,l,a){var n=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return Ur(e,t,u,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wn(t,u!==null?u.cachePool:null),u!==null?Bo(t,u):ki(),Ro(t);else return a=t.lanes=536870912,Ur(e,t,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(Wn(t,u.cachePool),Bo(t,u),rl(),t.memoizedState=null):(e!==null&&Wn(t,null),ki(),rl());return Ye(e,t,n,l),t.child}function ln(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ur(e,t,l,a,n){var u=Ri();return u=u===null?null:{parent:Oe._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&Wn(t,null),ki(),Ro(t),e!==null&&ca(e,t,a,!0),t.childLanes=n,null}function fu(e,t){return t=mu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hr(e,t,l){return Yl(t,e.child,null,l),e=fu(t,t.pendingProps),e.flags|=2,ct(t),t.memoizedState=null,e}function Im(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(a.mode==="hidden")return e=fu(t,a),t.lanes=536870912,ln(null,e);if(Qi(t),(e=ye)?(e=Zf(e,pt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ll!==null?{id:Ct,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},l=yo(e),l.return=t,t.child=l,Le=t,ye=null)):e=null,e===null)throw nl(t);return t.lanes=536870912,null}return fu(t,a)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(Qi(t),n)if(t.flags&256)t.flags&=-257,t=Hr(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Ce||ca(e,t,l,!1),n=(l&e.childLanes)!==0,Ce||n){if(a=ge,a!==null&&(i=Ts(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Nl(e,i),Pe(a,e,i),fc;Au(),t=Hr(e,t,l)}else e=u.treeContext,ye=St(i.nextSibling),Le=t,ee=!0,al=null,pt=!1,e!==null&&So(t,e),t=fu(t,a),t.flags|=4096;return t}return e=qt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function du(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(h(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function dc(e,t,l,a,n){return Bl(t),l=Ji(e,t,l,a,void 0,n),a=Zi(),e!==null&&!Ce?(Ki(e,t,n),Qt(e,t,n)):(ee&&a&&xi(t),t.flags|=1,Ye(e,t,l,n),t.child)}function Br(e,t,l,a,n,u){return Bl(t),t.updateQueue=null,l=qo(t,a,l,n),Lo(e),a=Zi(),e!==null&&!Ce?(Ki(e,t,u),Qt(e,t,u)):(ee&&a&&xi(t),t.flags|=1,Ye(e,t,l,u),t.child)}function Rr(e,t,l,a,n){if(Bl(t),t.stateNode===null){var u=aa,i=l.contextType;typeof i=="object"&&i!==null&&(u=qe(i)),u=new l(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=oc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},qi(t),i=l.contextType,u.context=typeof i=="object"&&i!==null?qe(i):aa,u.state=t.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(sc(t,l,i,a),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&oc.enqueueReplaceState(u,u.state,null),Fa(t,a,u,n),$a(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var c=t.memoizedProps,s=Gl(l,c);u.props=s;var m=u.context,y=l.contextType;i=aa,typeof y=="object"&&y!==null&&(i=qe(y));var E=l.getDerivedStateFromProps;y=typeof E=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||m!==i)&&Ar(t,u,a,i),il=!1;var g=t.memoizedState;u.state=g,Fa(t,a,u,n),$a(),m=t.memoizedState,c||g!==m||il?(typeof E=="function"&&(sc(t,l,E,a),m=t.memoizedState),(s=il||Er(t,l,s,a,g,m,i))?(y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=m),u.props=a,u.state=m,u.context=i,a=s):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,Yi(e,t),i=t.memoizedProps,y=Gl(l,i),u.props=y,E=t.pendingProps,g=u.context,m=l.contextType,s=aa,typeof m=="object"&&m!==null&&(s=qe(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==E||g!==s)&&Ar(t,u,a,s),il=!1,g=t.memoizedState,u.state=g,Fa(t,a,u,n),$a();var v=t.memoizedState;i!==E||g!==v||il||e!==null&&e.dependencies!==null&&Zn(e.dependencies)?(typeof c=="function"&&(sc(t,l,c,a),v=t.memoizedState),(y=il||Er(t,l,y,a,g,v,s)||e!==null&&e.dependencies!==null&&Zn(e.dependencies))?(m||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,v,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,v,s)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),u.props=a,u.state=v,u.context=s,a=y):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,du(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=Yl(t,e.child,null,n),t.child=Yl(t,null,l,n)):Ye(e,t,l,n),t.memoizedState=u.state,e=t.child):e=Qt(e,t,n),e}function Lr(e,t,l,a){return Ul(),t.flags|=256,Ye(e,t,l,a),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(e){return{baseLanes:e,cachePool:jo()}}function gc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=ot),e}function qr(e,t,l){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(n?ol(t):rl(),(e=ye)?(e=Zf(e,pt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ll!==null?{id:Ct,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},l=yo(e),l.return=t,t.child=l,Le=t,ye=null)):e=null,e===null)throw nl(t);return Fc(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(rl(),n=t.mode,c=mu({mode:"hidden",children:c},n),a=_l(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=hc(l),a.childLanes=gc(e,i,l),t.memoizedState=mc,ln(null,a)):(ol(t),vc(t,c))}var s=e.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(u)t.flags&256?(ol(t),t.flags&=-257,t=yc(e,t,l)):t.memoizedState!==null?(rl(),t.child=e.child,t.flags|=128,t=null):(rl(),c=a.fallback,n=t.mode,a=mu({mode:"visible",children:a.children},n),c=_l(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,Yl(t,e.child,null,l),a=t.child,a.memoizedState=hc(l),a.childLanes=gc(e,i,l),t.memoizedState=mc,t=ln(null,a));else if(ol(t),Fc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,a=Error(h(419)),a.stack="",a.digest=i,Qa({value:a,source:null,stack:null}),t=yc(e,t,l)}else if(Ce||ca(e,t,l,!1),i=(l&e.childLanes)!==0,Ce||i){if(i=ge,i!==null&&(a=Ts(i,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,Nl(e,a),Pe(i,e,a),fc;$c(c)||Au(),t=yc(e,t,l)}else $c(c)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,ye=St(c.nextSibling),Le=t,ee=!0,al=null,pt=!1,e!==null&&So(t,e),t=vc(t,a.children),t.flags|=4096);return t}return n?(rl(),c=a.fallback,n=t.mode,s=e.child,m=s.sibling,a=qt(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,m!==null?c=qt(m,c):(c=_l(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,ln(null,a),a=t.child,c=e.child.memoizedState,c===null?c=hc(l):(n=c.cachePool,n!==null?(s=Oe._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=jo(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=gc(e,i,l),t.memoizedState=mc,ln(e.child,a)):(ol(t),l=e.child,e=l.sibling,l=qt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l)}function vc(e,t){return t=mu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mu(e,t){return e=ut(22,e,null,t),e.lanes=0,e}function yc(e,t,l){return Yl(t,e.child,null,l),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yr(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),_i(e.return,t,l)}function pc(e,t,l,a,n,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function wr(e,t,l){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=je.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,j(je,i),Ye(e,t,a,l),a=ee?Xa:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yr(e,l,t);else if(e.tag===19)Yr(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&tu(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),pc(t,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&tu(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}pc(t,!0,l,null,u,a);break;case"together":pc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Qt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),ml|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ca(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,l=qt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=qt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function bc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zn(e)))}function Pm(e,t,l){switch(t.tag){case 3:Ve(t,t.stateNode.containerInfo),ul(t,Oe,e.memoizedState.cache),Ul();break;case 27:case 5:Oa(t);break;case 4:Ve(t,t.stateNode.containerInfo);break;case 10:ul(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qi(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ol(t),t.flags|=128,null):(l&t.child.childLanes)!==0?qr(e,t,l):(ol(t),e=Qt(e,t,l),e!==null?e.sibling:null);ol(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ca(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return wr(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),j(je,je.current),a)break;return null;case 22:return t.lanes=0,_r(e,t,l,t.pendingProps);case 24:ul(t,Oe,e.memoizedState.cache)}return Qt(e,t,l)}function Gr(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ce=!0;else{if(!bc(e,l)&&(t.flags&128)===0)return Ce=!1,Pm(e,t,l);Ce=(e.flags&131072)!==0}else Ce=!1,ee&&(t.flags&1048576)!==0&&bo(t,Xa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ll(t.elementType),t.type=e,typeof e=="function")zi(e)?(a=Gl(e,a),t.tag=1,t=Rr(null,t,e,a,l)):(t.tag=0,t=dc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===Be){t.tag=11,t=Dr(null,t,e,a,l);break e}else if(n===q){t.tag=14,t=Cr(null,t,e,a,l);break e}}throw t=Ht(e)||e,Error(h(306,t,""))}}return t;case 0:return dc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Gl(a,t.pendingProps),Rr(e,t,a,n,l);case 3:e:{if(Ve(t,t.stateNode.containerInfo),e===null)throw Error(h(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,Yi(e,t),Fa(t,a,null,l);var i=t.memoizedState;if(a=i.cache,ul(t,Oe,a),a!==u.cache&&Ui(t,[Oe],l,!0),$a(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Lr(e,t,a,l);break e}else if(a!==n){n=gt(Error(h(424)),t),Qa(n),t=Lr(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ye=St(e.firstChild),Le=t,ee=!0,al=null,pt=!0,l=_o(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ul(),a===n){t=Qt(e,t,l);break e}Ye(e,t,a,l)}t=t.child}return t;case 26:return du(e,t),e===null?(l=Pf(t.type,null,t.pendingProps,null))?t.memoizedState=l:ee||(l=t.type,e=t.pendingProps,a=Du(K.current).createElement(l),a[Re]=t,a[Ze]=e,we(a,l,e),Ue(a),t.stateNode=a):t.memoizedState=Pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oa(t),e===null&&ee&&(a=t.stateNode=$f(t.type,t.pendingProps,K.current),Le=t,pt=!0,n=ye,pl(t.type)?(Ic=n,ye=St(a.firstChild)):ye=n),Ye(e,t,t.pendingProps.children,l),du(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((n=a=ye)&&(a=Dh(a,t.type,t.pendingProps,pt),a!==null?(t.stateNode=a,Le=t,ye=St(a.firstChild),pt=!1,n=!0):n=!1),n||nl(t)),Oa(t),n=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,a=u.children,Zc(n,u)?a=null:i!==null&&Zc(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Ji(e,t,Qm,null,null,l),pn._currentValue=n),du(e,t),Ye(e,t,a,l),t.child;case 6:return e===null&&ee&&((e=l=ye)&&(l=Ch(l,t.pendingProps,pt),l!==null?(t.stateNode=l,Le=t,ye=null,e=!0):e=!1),e||nl(t)),null;case 13:return qr(e,t,l);case 4:return Ve(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Yl(t,null,a,l):Ye(e,t,a,l),t.child;case 11:return Dr(e,t,t.type,t.pendingProps,l);case 7:return Ye(e,t,t.pendingProps,l),t.child;case 8:return Ye(e,t,t.pendingProps.children,l),t.child;case 12:return Ye(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,ul(t,t.type,a.value),Ye(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Bl(t),n=qe(n),a=a(n),t.flags|=1,Ye(e,t,a,l),t.child;case 14:return Cr(e,t,t.type,t.pendingProps,l);case 15:return Nr(e,t,t.type,t.pendingProps,l);case 19:return wr(e,t,l);case 31:return Im(e,t,l);case 22:return _r(e,t,l,t.pendingProps);case 24:return Bl(t),a=qe(Oe),e===null?(n=Ri(),n===null&&(n=ge,u=Hi(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),t.memoizedState={parent:a,cache:n},qi(t),ul(t,Oe,n)):((e.lanes&l)!==0&&(Yi(e,t),Fa(t,null,null,l),$a()),n=e.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ul(t,Oe,a)):(a=u.cache,ul(t,Oe,a),a!==n.cache&&Ui(t,[Oe],l,!0))),Ye(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Vt(e){e.flags|=4}function Sc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(gf())e.flags|=8192;else throw ql=Fn,Li}else e.flags&=-16777217}function kr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nd(t))if(gf())e.flags|=8192;else throw ql=Fn,Li}function hu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ss():536870912,e.lanes|=t,ba|=t)}function an(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function eh(e,t,l){var a=t.pendingProps;switch(Oi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return pe(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Gt(Oe),Me(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ia(t)?Vt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ci())),pe(t),null;case 26:var n=t.type,u=t.memoizedState;return e===null?(Vt(t),u!==null?(pe(t),kr(t,u)):(pe(t),Sc(t,n,null,a,l))):u?u!==e.memoizedState?(Vt(t),pe(t),kr(t,u)):(pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Vt(t),pe(t),Sc(t,n,e,a,l)),null;case 27:if(Mn(t),l=K.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Vt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return pe(t),null}e=O.current,ia(t)?Eo(t):(e=$f(n,a,l),t.stateNode=e,Vt(t))}return pe(t),null;case 5:if(Mn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Vt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return pe(t),null}if(u=O.current,ia(t))Eo(t);else{var i=Du(K.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[Re]=t,u[Ze]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(we(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Vt(t)}}return pe(t),Sc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Vt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(e=K.current,ia(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Le,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Re]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Yf(e.nodeValue,l)),e||nl(t,!0)}else e=Du(e).createTextNode(a),e[Re]=t,t.stateNode=e}return pe(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ia(t),l!==null){if(e===null){if(!a)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[Re]=t}else Ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),e=!1}else l=Ci(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(ct(t),t):(ct(t),null);if((t.flags&128)!==0)throw Error(h(558))}return pe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ia(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(h(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[Re]=t}else Ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),n=!1}else n=Ci(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ct(t),t):(ct(t),null)}return ct(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),hu(t,t.updateQueue),pe(t),null);case 4:return Me(),e===null&&kc(t.stateNode.containerInfo),pe(t),null;case 10:return Gt(t.type),pe(t),null;case 19:if(A(je),a=t.memoizedState,a===null)return pe(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)an(a,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=tu(e),u!==null){for(t.flags|=128,an(a,!1),e=u.updateQueue,t.updateQueue=e,hu(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)vo(l,e),l=l.sibling;return j(je,je.current&1|2),ee&&Yt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&tt()>bu&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304)}else{if(!n)if(e=tu(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,hu(t,e),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!ee)return pe(t),null}else 2*tt()-a.renderingStartTime>bu&&l!==536870912&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=tt(),e.sibling=null,l=je.current,j(je,n?l&1|2:l&1),ee&&Yt(t,a.treeForkCount),e):(pe(t),null);case 22:case 23:return ct(t),Xi(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),l=t.updateQueue,l!==null&&hu(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&A(Rl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Gt(Oe),pe(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function th(e,t){switch(Oi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gt(Oe),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mn(t),null;case 31:if(t.memoizedState!==null){if(ct(t),t.alternate===null)throw Error(h(340));Ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(je),null;case 4:return Me(),null;case 10:return Gt(t.type),null;case 22:case 23:return ct(t),Xi(),e!==null&&A(Rl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gt(Oe),null;case 25:return null;default:return null}}function Xr(e,t){switch(Oi(t),t.tag){case 3:Gt(Oe),Me();break;case 26:case 27:case 5:Mn(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&ct(t);break;case 13:ct(t);break;case 19:A(je);break;case 10:Gt(t.type);break;case 22:case 23:ct(t),Xi(),e!==null&&A(Rl);break;case 24:Gt(Oe)}}function nn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(c){se(t,t.return,c)}}function fl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&e)===e){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=t;var s=l,m=c;try{m()}catch(y){se(n,s,y)}}}a=a.next}while(a!==u)}}catch(y){se(t,t.return,y)}}function Qr(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Ho(t,l)}catch(a){se(e,e.return,a)}}}function Vr(e,t,l){l.props=Gl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){se(e,t,a)}}function un(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){se(e,t,n)}}function _t(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){se(e,t,n)}else l.current=null}function Jr(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){se(e,e.return,n)}}function Ec(e,t,l){try{var a=e.stateNode;Th(a,e.type,l,t),a[Ze]=t}catch(n){se(e,e.return,n)}}function Zr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pl(e.type)||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Rt));else if(a!==4&&(a===27&&pl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Tc(e,t,l),e=e.sibling;e!==null;)Tc(e,t,l),e=e.sibling}function gu(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&pl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(gu(e,t,l),e=e.sibling;e!==null;)gu(e,t,l),e=e.sibling}function Kr(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);we(t,a,l),t[Re]=e,t[Ze]=l}catch(u){se(e,e.return,u)}}var Jt=!1,Ne=!1,zc=!1,Wr=typeof WeakSet=="function"?WeakSet:Set,He=null;function lh(e,t){if(e=e.containerInfo,Vc=Ru,e=io(e),yi(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var i=0,c=-1,s=-1,m=0,y=0,E=e,g=null;t:for(;;){for(var v;E!==l||n!==0&&E.nodeType!==3||(c=i+n),E!==u||a!==0&&E.nodeType!==3||(s=i+a),E.nodeType===3&&(i+=E.nodeValue.length),(v=E.firstChild)!==null;)g=E,E=v;for(;;){if(E===e)break t;if(g===l&&++m===n&&(c=i),g===u&&++y===a&&(s=i),(v=E.nextSibling)!==null)break;E=g,g=E.parentNode}E=v}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(Jc={focusedElem:e,selectionRange:l},Ru=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,l=t,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var x=Gl(l.type,n);e=a.getSnapshotBeforeUpdate(x,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(L){se(l,l.return,L)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Wc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function $r(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Kt(e,l),a&4&&nn(5,l);break;case 1:if(Kt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(i){se(l,l.return,i)}else{var n=Gl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){se(l,l.return,i)}}a&64&&Qr(l),a&512&&un(l,l.return);break;case 3:if(Kt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Ho(e,t)}catch(i){se(l,l.return,i)}}break;case 27:t===null&&a&4&&Kr(l);case 26:case 5:Kt(e,l),t===null&&a&4&&Jr(l),a&512&&un(l,l.return);break;case 12:Kt(e,l);break;case 31:Kt(e,l),a&4&&Pr(e,l);break;case 13:Kt(e,l),a&4&&ef(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=fh.bind(null,l),Nh(e,l))));break;case 22:if(a=l.memoizedState!==null||Jt,!a){t=t!==null&&t.memoizedState!==null||Ne,n=Jt;var u=Ne;Jt=a,(Ne=t)&&!u?Wt(e,l,(l.subtreeFlags&8772)!==0):Kt(e,l),Jt=n,Ne=u}break;case 30:break;default:Kt(e,l)}}function Fr(e){var t=e.alternate;t!==null&&(e.alternate=null,Fr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ei(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,We=!1;function Zt(e,t,l){for(l=l.child;l!==null;)Ir(e,t,l),l=l.sibling}function Ir(e,t,l){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Da,l)}catch{}switch(l.tag){case 26:Ne||_t(l,t),Zt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ne||_t(l,t);var a=be,n=We;pl(l.type)&&(be=l.stateNode,We=!1),Zt(e,t,l),gn(l.stateNode),be=a,We=n;break;case 5:Ne||_t(l,t);case 6:if(a=be,n=We,be=null,Zt(e,t,l),be=a,We=n,be!==null)if(We)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(l.stateNode)}catch(u){se(l,t,u)}else try{be.removeChild(l.stateNode)}catch(u){se(l,t,u)}break;case 18:be!==null&&(We?(e=be,Vf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),xa(e)):Vf(be,l.stateNode));break;case 4:a=be,n=We,be=l.stateNode.containerInfo,We=!0,Zt(e,t,l),be=a,We=n;break;case 0:case 11:case 14:case 15:fl(2,l,t),Ne||fl(4,l,t),Zt(e,t,l);break;case 1:Ne||(_t(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Vr(l,t,a)),Zt(e,t,l);break;case 21:Zt(e,t,l);break;case 22:Ne=(a=Ne)||l.memoizedState!==null,Zt(e,t,l),Ne=a;break;default:Zt(e,t,l)}}function Pr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xa(e)}catch(l){se(t,t.return,l)}}}function ef(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xa(e)}catch(l){se(t,t.return,l)}}function ah(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wr),t;default:throw Error(h(435,e.tag))}}function vu(e,t){var l=ah(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=dh.bind(null,e,a);a.then(n,n)}})}function $e(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 27:if(pl(c.type)){be=c.stateNode,We=!1;break e}break;case 5:be=c.stateNode,We=!1;break e;case 3:case 4:be=c.stateNode.containerInfo,We=!0;break e}c=c.return}if(be===null)throw Error(h(160));Ir(u,i,n),be=null,We=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)tf(t,e),t=t.sibling}var zt=null;function tf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$e(t,e),Fe(e),a&4&&(fl(3,e,e.return),nn(3,e),fl(5,e,e.return));break;case 1:$e(t,e),Fe(e),a&512&&(Ne||l===null||_t(l,l.return)),a&64&&Jt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=zt;if($e(t,e),Fe(e),a&512&&(Ne||l===null||_t(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[_a]||u[Re]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),we(u,a,l),u[Re]=e,Ue(u),a=u;break e;case"link":var i=ld("link","href",n).get(a+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break t}}u=n.createElement(a),we(u,a,l),n.head.appendChild(u);break;case"meta":if(i=ld("meta","content",n).get(a+(l.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break t}}u=n.createElement(a),we(u,a,l),n.head.appendChild(u);break;default:throw Error(h(468,a))}u[Re]=e,Ue(u),a=u}e.stateNode=a}else ad(n,e.type,e.stateNode);else e.stateNode=td(n,a,e.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?ad(n,e.type,e.stateNode):td(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ec(e,e.memoizedProps,l.memoizedProps)}break;case 27:$e(t,e),Fe(e),a&512&&(Ne||l===null||_t(l,l.return)),l!==null&&a&4&&Ec(e,e.memoizedProps,l.memoizedProps);break;case 5:if($e(t,e),Fe(e),a&512&&(Ne||l===null||_t(l,l.return)),e.flags&32){n=e.stateNode;try{$l(n,"")}catch(x){se(e,e.return,x)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Ec(e,n,l!==null?l.memoizedProps:n)),a&1024&&(zc=!0);break;case 6:if($e(t,e),Fe(e),a&4){if(e.stateNode===null)throw Error(h(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(x){se(e,e.return,x)}}break;case 3:if(_u=null,n=zt,zt=Cu(t.containerInfo),$e(t,e),zt=n,Fe(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{xa(t.containerInfo)}catch(x){se(e,e.return,x)}zc&&(zc=!1,lf(e));break;case 4:a=zt,zt=Cu(e.stateNode.containerInfo),$e(t,e),Fe(e),zt=a;break;case 12:$e(t,e),Fe(e);break;case 31:$e(t,e),Fe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vu(e,a)));break;case 13:$e(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(pu=tt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vu(e,a)));break;case 22:n=e.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,m=Jt,y=Ne;if(Jt=m||n,Ne=y||s,$e(t,e),Ne=y,Jt=m,Fe(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||s||Jt||Ne||kl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){s=l=t;try{if(u=s.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=s.stateNode;var E=s.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(x){se(s,s.return,x)}}}else if(t.tag===6){if(l===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(x){se(s,s.return,x)}}}else if(t.tag===18){if(l===null){s=t;try{var v=s.stateNode;n?Jf(v,!0):Jf(s.stateNode,!1)}catch(x){se(s,s.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,vu(e,l))));break;case 19:$e(t,e),Fe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vu(e,a)));break;case 30:break;case 21:break;default:$e(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Zr(a)){l=a;break}a=a.return}if(l==null)throw Error(h(160));switch(l.tag){case 27:var n=l.stateNode,u=Ac(e);gu(e,u,n);break;case 5:var i=l.stateNode;l.flags&32&&($l(i,""),l.flags&=-33);var c=Ac(e);gu(e,c,i);break;case 3:case 4:var s=l.stateNode.containerInfo,m=Ac(e);Tc(e,m,s);break;default:throw Error(h(161))}}catch(y){se(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;lf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Kt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$r(e,t.alternate,t),t=t.sibling}function kl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:fl(4,t,t.return),kl(t);break;case 1:_t(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Vr(t,t.return,l),kl(t);break;case 27:gn(t.stateNode);case 26:case 5:_t(t,t.return),kl(t);break;case 22:t.memoizedState===null&&kl(t);break;case 30:kl(t);break;default:kl(t)}e=e.sibling}}function Wt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:Wt(n,u,l),nn(4,u);break;case 1:if(Wt(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){se(a,a.return,m)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Uo(s[n],c)}catch(m){se(a,a.return,m)}}l&&i&64&&Qr(u),un(u,u.return);break;case 27:Kr(u);case 26:case 5:Wt(n,u,l),l&&a===null&&i&4&&Jr(u),un(u,u.return);break;case 12:Wt(n,u,l);break;case 31:Wt(n,u,l),l&&i&4&&Pr(n,u);break;case 13:Wt(n,u,l),l&&i&4&&ef(n,u);break;case 22:u.memoizedState===null&&Wt(n,u,l),un(u,u.return);break;case 30:break;default:Wt(n,u,l)}t=t.sibling}}function Mc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Va(l))}function jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Va(e))}function Mt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)af(e,t,l,a),t=t.sibling}function af(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,l,a),n&2048&&nn(9,t);break;case 1:Mt(e,t,l,a);break;case 3:Mt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Va(e)));break;case 12:if(n&2048){Mt(e,t,l,a),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){se(t,t.return,s)}}else Mt(e,t,l,a);break;case 31:Mt(e,t,l,a);break;case 13:Mt(e,t,l,a);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?Mt(e,t,l,a):cn(e,t):u._visibility&2?Mt(e,t,l,a):(u._visibility|=2,va(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Mc(i,t);break;case 24:Mt(e,t,l,a),n&2048&&jc(t.alternate,t);break;default:Mt(e,t,l,a)}}function va(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,c=l,s=a,m=i.flags;switch(i.tag){case 0:case 11:case 15:va(u,i,c,s,n),nn(8,i);break;case 23:break;case 22:var y=i.stateNode;i.memoizedState!==null?y._visibility&2?va(u,i,c,s,n):cn(u,i):(y._visibility|=2,va(u,i,c,s,n)),n&&m&2048&&Mc(i.alternate,i);break;case 24:va(u,i,c,s,n),n&&m&2048&&jc(i.alternate,i);break;default:va(u,i,c,s,n)}t=t.sibling}}function cn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:cn(l,a),n&2048&&Mc(a.alternate,a);break;case 24:cn(l,a),n&2048&&jc(a.alternate,a);break;default:cn(l,a)}t=t.sibling}}var sn=8192;function ya(e,t,l){if(e.subtreeFlags&sn)for(e=e.child;e!==null;)nf(e,t,l),e=e.sibling}function nf(e,t,l){switch(e.tag){case 26:ya(e,t,l),e.flags&sn&&e.memoizedState!==null&&Xh(l,zt,e.memoizedState,e.memoizedProps);break;case 5:ya(e,t,l);break;case 3:case 4:var a=zt;zt=Cu(e.stateNode.containerInfo),ya(e,t,l),zt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=sn,sn=16777216,ya(e,t,l),sn=a):ya(e,t,l));break;default:ya(e,t,l)}}function uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function on(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];He=a,sf(a,e)}uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cf(e),e=e.sibling}function cf(e){switch(e.tag){case 0:case 11:case 15:on(e),e.flags&2048&&fl(9,e,e.return);break;case 3:on(e);break;case 12:on(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yu(e)):on(e);break;default:on(e)}}function yu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];He=a,sf(a,e)}uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:fl(8,t,t.return),yu(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,yu(t));break;default:yu(t)}e=e.sibling}}function sf(e,t){for(;He!==null;){var l=He;switch(l.tag){case 0:case 11:case 15:fl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,He=a;else e:for(l=e;He!==null;){a=He;var n=a.sibling,u=a.return;if(Fr(a),a===l){He=null;break e}if(n!==null){n.return=u,He=n;break e}He=u}}}var nh={getCacheForType:function(e){var t=qe(Oe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return qe(Oe).controller.signal}},uh=typeof WeakMap=="function"?WeakMap:Map,ne=0,ge=null,W=null,F=0,ce=0,st=null,dl=!1,pa=!1,xc=!1,$t=0,Ee=0,ml=0,Xl=0,Oc=0,ot=0,ba=0,rn=null,Ie=null,Dc=!1,pu=0,of=0,bu=1/0,Su=null,hl=null,_e=0,gl=null,Sa=null,Ft=0,Cc=0,Nc=null,rf=null,fn=0,_c=null;function rt(){return(ne&2)!==0&&F!==0?F&-F:p.T!==null?qc():zs()}function ff(){if(ot===0)if((F&536870912)===0||ee){var e=On;On<<=1,(On&3932160)===0&&(On=262144),ot=e}else ot=536870912;return e=it.current,e!==null&&(e.flags|=32),ot}function Pe(e,t,l){(e===ge&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Ea(e,0),vl(e,F,ot,!1)),Na(e,l),((ne&2)===0||e!==ge)&&(e===ge&&((ne&2)===0&&(Xl|=l),Ee===4&&vl(e,F,ot,!1)),Ut(e))}function df(e,t,l){if((ne&6)!==0)throw Error(h(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ca(e,t),n=a?sh(e,t):Hc(e,t,!0),u=a;do{if(n===0){pa&&!a&&vl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!ih(l)){n=Hc(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var c=e;n=rn;var s=c.current.memoizedState.isDehydrated;if(s&&(Ea(c,i).flags|=256),i=Hc(c,i,!1),i!==2){if(xc&&!s){c.errorRecoveryDisabledLanes|=u,Xl|=u,n=4;break e}u=Ie,Ie=n,u!==null&&(Ie===null?Ie=u:Ie.push.apply(Ie,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Ea(e,0),vl(e,t,0,!0);break}e:{switch(a=e,u=n,u){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:vl(a,t,ot,!dl);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(n=pu+300-tt(),10<n)){if(vl(a,t,ot,!dl),Cn(a,0,!0)!==0)break e;Ft=t,a.timeoutHandle=Xf(mf.bind(null,a,l,Ie,Su,Dc,t,ot,Xl,ba,dl,u,"Throttled",-0,0),n);break e}mf(a,l,Ie,Su,Dc,t,ot,Xl,ba,dl,u,null,-0,0)}}break}while(!0);Ut(e)}function mf(e,t,l,a,n,u,i,c,s,m,y,E,g,v){if(e.timeoutHandle=-1,E=t.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},nf(t,u,E);var x=(u&62914560)===u?pu-tt():(u&4194048)===u?of-tt():0;if(x=Qh(E,x),x!==null){Ft=u,e.cancelPendingCommit=x(Ef.bind(null,e,t,u,l,a,n,i,c,s,y,E,null,g,v)),vl(e,u,i,!m);return}}Ef(e,t,u,l,a,n,i,c,s)}function ih(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!nt(u(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vl(e,t,l,a){t&=~Oc,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var u=31-at(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&Es(e,l,t)}function Eu(){return(ne&6)===0?(dn(0),!1):!0}function Uc(){if(W!==null){if(ce===0)var e=W.return;else e=W,wt=Hl=null,Wi(e),fa=null,Za=0,e=W;for(;e!==null;)Xr(e.alternate,e),e=e.return;W=null}}function Ea(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,jh(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Ft=0,Uc(),ge=e,W=l=qt(e.current,null),F=t,ce=0,st=null,dl=!1,pa=Ca(e,t),xc=!1,ba=ot=Oc=Xl=ml=Ee=0,Ie=rn=null,Dc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-at(a),u=1<<n;t|=e[n],a&=~u}return $t=t,kn(),l}function hf(e,t){Q=null,p.H=tn,t===ra||t===$n?(t=Do(),ce=3):t===Li?(t=Do(),ce=4):ce=t===fc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,W===null&&(Ee=1,ru(e,gt(t,e.current)))}function gf(){var e=it.current;return e===null?!0:(F&4194048)===F?bt===null:(F&62914560)===F||(F&536870912)!==0?e===bt:!1}function vf(){var e=p.H;return p.H=tn,e===null?tn:e}function yf(){var e=p.A;return p.A=nh,e}function Au(){Ee=4,dl||(F&4194048)!==F&&it.current!==null||(pa=!0),(ml&134217727)===0&&(Xl&134217727)===0||ge===null||vl(ge,F,ot,!1)}function Hc(e,t,l){var a=ne;ne|=2;var n=vf(),u=yf();(ge!==e||F!==t)&&(Su=null,Ea(e,t)),t=!1;var i=Ee;e:do try{if(ce!==0&&W!==null){var c=W,s=st;switch(ce){case 8:Uc(),i=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var m=ce;if(ce=0,st=null,Aa(e,c,s,m),l&&pa){i=0;break e}break;default:m=ce,ce=0,st=null,Aa(e,c,s,m)}}ch(),i=Ee;break}catch(y){hf(e,y)}while(!0);return t&&e.shellSuspendCounter++,wt=Hl=null,ne=a,p.H=n,p.A=u,W===null&&(ge=null,F=0,kn()),i}function ch(){for(;W!==null;)pf(W)}function sh(e,t){var l=ne;ne|=2;var a=vf(),n=yf();ge!==e||F!==t?(Su=null,bu=tt()+500,Ea(e,t)):pa=Ca(e,t);e:do try{if(ce!==0&&W!==null){t=W;var u=st;t:switch(ce){case 1:ce=0,st=null,Aa(e,t,u,1);break;case 2:case 9:if(xo(u)){ce=0,st=null,bf(t);break}t=function(){ce!==2&&ce!==9||ge!==e||(ce=7),Ut(e)},u.then(t,t);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:xo(u)?(ce=0,st=null,bf(t)):(ce=0,st=null,Aa(e,t,u,7));break;case 5:var i=null;switch(W.tag){case 26:i=W.memoizedState;case 5:case 27:var c=W;if(i?nd(i):c.stateNode.complete){ce=0,st=null;var s=c.sibling;if(s!==null)W=s;else{var m=c.return;m!==null?(W=m,Tu(m)):W=null}break t}}ce=0,st=null,Aa(e,t,u,5);break;case 6:ce=0,st=null,Aa(e,t,u,6);break;case 8:Uc(),Ee=6;break e;default:throw Error(h(462))}}oh();break}catch(y){hf(e,y)}while(!0);return wt=Hl=null,p.H=a,p.A=n,ne=l,W!==null?0:(ge=null,F=0,kn(),Ee)}function oh(){for(;W!==null&&!_d();)pf(W)}function pf(e){var t=Gr(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?Tu(e):W=t}function bf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Br(l,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Br(l,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:Wi(t);default:Xr(l,t),t=W=vo(t,$t),t=Gr(l,t,$t)}e.memoizedProps=e.pendingProps,t===null?Tu(e):W=t}function Aa(e,t,l,a){wt=Hl=null,Wi(t),fa=null,Za=0;var n=t.return;try{if(Fm(e,n,t,l,F)){Ee=1,ru(e,gt(l,e.current)),W=null;return}}catch(u){if(n!==null)throw W=n,u;Ee=1,ru(e,gt(l,e.current)),W=null;return}t.flags&32768?(ee||a===1?e=!0:pa||(F&536870912)!==0?e=!1:(dl=e=!0,(a===2||a===9||a===3||a===6)&&(a=it.current,a!==null&&a.tag===13&&(a.flags|=16384))),Sf(t,e)):Tu(t)}function Tu(e){var t=e;do{if((t.flags&32768)!==0){Sf(t,dl);return}e=t.return;var l=eh(t.alternate,t,$t);if(l!==null){W=l;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Ee===0&&(Ee=5)}function Sf(e,t){do{var l=th(e.alternate,e);if(l!==null){l.flags&=32767,W=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=l}while(e!==null);Ee=6,W=null}function Ef(e,t,l,a,n,u,i,c,s){e.cancelPendingCommit=null;do zu();while(_e!==0);if((ne&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(u=t.lanes|t.childLanes,u|=Ai,kd(e,l,u,i,c,s),e===ge&&(W=ge=null,F=0),Sa=t,gl=e,Ft=l,Cc=u,Nc=n,rf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mh(jn,function(){return jf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=p.T,p.T=null,n=M.p,M.p=2,i=ne,ne|=4;try{lh(e,t,l)}finally{ne=i,M.p=n,p.T=a}}_e=1,Af(),Tf(),zf()}}function Af(){if(_e===1){_e=0;var e=gl,t=Sa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=p.T,p.T=null;var a=M.p;M.p=2;var n=ne;ne|=4;try{tf(t,e);var u=Jc,i=io(e.containerInfo),c=u.focusedElem,s=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&uo(c.ownerDocument.documentElement,c)){if(s!==null&&yi(c)){var m=s.start,y=s.end;if(y===void 0&&(y=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(y,c.value.length);else{var E=c.ownerDocument||document,g=E&&E.defaultView||window;if(g.getSelection){var v=g.getSelection(),x=c.textContent.length,L=Math.min(s.start,x),de=s.end===void 0?L:Math.min(s.end,x);!v.extend&&L>de&&(i=de,de=L,L=i);var f=no(c,L),o=no(c,de);if(f&&o&&(v.rangeCount!==1||v.anchorNode!==f.node||v.anchorOffset!==f.offset||v.focusNode!==o.node||v.focusOffset!==o.offset)){var d=E.createRange();d.setStart(f.node,f.offset),v.removeAllRanges(),L>de?(v.addRange(d),v.extend(o.node,o.offset)):(d.setEnd(o.node,o.offset),v.addRange(d))}}}}for(E=[],v=c;v=v.parentNode;)v.nodeType===1&&E.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<E.length;c++){var b=E[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Ru=!!Vc,Jc=Vc=null}finally{ne=n,M.p=a,p.T=l}}e.current=t,_e=2}}function Tf(){if(_e===2){_e=0;var e=gl,t=Sa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=p.T,p.T=null;var a=M.p;M.p=2;var n=ne;ne|=4;try{$r(e,t.alternate,t)}finally{ne=n,M.p=a,p.T=l}}_e=3}}function zf(){if(_e===4||_e===3){_e=0,Ud();var e=gl,t=Sa,l=Ft,a=rf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?_e=5:(_e=0,Sa=gl=null,Mf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(hl=null),Iu(l),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Da,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=p.T,n=M.p,M.p=2,p.T=null;try{for(var u=e.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{p.T=t,M.p=n}}(Ft&3)!==0&&zu(),Ut(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===_c?fn++:(fn=0,_c=e):fn=0,dn(0)}}function Mf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Va(t)))}function zu(){return Af(),Tf(),zf(),jf()}function jf(){if(_e!==5)return!1;var e=gl,t=Cc;Cc=0;var l=Iu(Ft),a=p.T,n=M.p;try{M.p=32>l?32:l,p.T=null,l=Nc,Nc=null;var u=gl,i=Ft;if(_e=0,Sa=gl=null,Ft=0,(ne&6)!==0)throw Error(h(331));var c=ne;if(ne|=4,cf(u.current),af(u,u.current,i,l),ne=c,dn(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Da,u)}catch{}return!0}finally{M.p=n,p.T=a,Mf(e,t)}}function xf(e,t,l){t=gt(l,t),t=rc(e.stateNode,t,2),e=sl(e,t,2),e!==null&&(Na(e,2),Ut(e))}function se(e,t,l){if(e.tag===3)xf(e,e,l);else for(;t!==null;){if(t.tag===3){xf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(hl===null||!hl.has(a))){e=gt(l,e),l=xr(2),a=sl(t,l,2),a!==null&&(Or(l,a,t,e),Na(a,2),Ut(a));break}}t=t.return}}function Bc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new uh;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(xc=!0,n.add(l),e=rh.bind(null,e,t,l),t.then(e,e))}function rh(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ge===e&&(F&l)===l&&(Ee===4||Ee===3&&(F&62914560)===F&&300>tt()-pu?(ne&2)===0&&Ea(e,0):Oc|=l,ba===F&&(ba=0)),Ut(e)}function Of(e,t){t===0&&(t=Ss()),e=Nl(e,t),e!==null&&(Na(e,t),Ut(e))}function fh(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Of(e,l)}function dh(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(t),Of(e,l)}function mh(e,t){return Ku(e,t)}var Mu=null,Ta=null,Rc=!1,ju=!1,Lc=!1,yl=0;function Ut(e){e!==Ta&&e.next===null&&(Ta===null?Mu=Ta=e:Ta=Ta.next=e),ju=!0,Rc||(Rc=!0,gh())}function dn(e,t){if(!Lc&&ju){Lc=!0;do for(var l=!1,a=Mu;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-at(42|e)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,_f(a,u))}else u=F,u=Cn(a,a===ge?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Ca(a,u)||(l=!0,_f(a,u));a=a.next}while(l);Lc=!1}}function hh(){Df()}function Df(){ju=Rc=!1;var e=0;yl!==0&&Mh()&&(e=yl);for(var t=tt(),l=null,a=Mu;a!==null;){var n=a.next,u=Cf(a,t);u===0?(a.next=null,l===null?Mu=n:l.next=n,n===null&&(Ta=l)):(l=a,(e!==0||(u&3)!==0)&&(ju=!0)),a=n}_e!==0&&_e!==5||dn(e),yl!==0&&(yl=0)}function Cf(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-at(u),c=1<<i,s=n[i];s===-1?((c&l)===0||(c&a)!==0)&&(n[i]=Gd(c,t)):s<=t&&(e.expiredLanes|=c),u&=~c}if(t=ge,l=F,l=Cn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Wu(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ca(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Wu(a),Iu(l)){case 2:case 8:l=ps;break;case 32:l=jn;break;case 268435456:l=bs;break;default:l=jn}return a=Nf.bind(null,e),l=Ku(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Wu(a),e.callbackPriority=2,e.callbackNode=null,2}function Nf(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(zu()&&e.callbackNode!==l)return null;var a=F;return a=Cn(e,e===ge?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(df(e,a,t),Cf(e,tt()),e.callbackNode!=null&&e.callbackNode===l?Nf.bind(null,e):null)}function _f(e,t){if(zu())return null;df(e,t,!0)}function gh(){xh(function(){(ne&6)!==0?Ku(ys,hh):Df()})}function qc(){if(yl===0){var e=sa;e===0&&(e=xn,xn<<=1,(xn&261888)===0&&(xn=256)),yl=e}return yl}function Uf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hn(""+e)}function Hf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function vh(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var u=Uf((n[Ze]||null).action),i=a.submitter;i&&(t=(t=i[Ze]||null)?Uf(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var c=new qn("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(yl!==0){var s=i?Hf(n,i):new FormData(n);nc(l,{pending:!0,data:s,method:n.method,action:u},null,s)}}else typeof u=="function"&&(c.preventDefault(),s=i?Hf(n,i):new FormData(n),nc(l,{pending:!0,data:s,method:n.method,action:u},u,s))},currentTarget:n}]})}}for(var Yc=0;Yc<Ei.length;Yc++){var wc=Ei[Yc],yh=wc.toLowerCase(),ph=wc[0].toUpperCase()+wc.slice(1);Tt(yh,"on"+ph)}Tt(oo,"onAnimationEnd"),Tt(ro,"onAnimationIteration"),Tt(fo,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(Hm,"onTransitionRun"),Tt(Bm,"onTransitionStart"),Tt(Rm,"onTransitionCancel"),Tt(mo,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),xl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xl("onBeforeInput",["compositionend","keypress","textInput","paste"]),xl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Bf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var i=a.length-1;0<=i;i--){var c=a[i],s=c.instance,m=c.currentTarget;if(c=c.listener,s!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(y){Gn(y)}n.currentTarget=null,u=s}else for(i=0;i<a.length;i++){if(c=a[i],s=c.instance,m=c.currentTarget,c=c.listener,s!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(y){Gn(y)}n.currentTarget=null,u=s}}}}function $(e,t){var l=t[Pu];l===void 0&&(l=t[Pu]=new Set);var a=e+"__bubble";l.has(a)||(Rf(t,e,2,!1),l.add(a))}function Gc(e,t,l){var a=0;t&&(a|=4),Rf(l,e,a,t)}var xu="_reactListening"+Math.random().toString(36).slice(2);function kc(e){if(!e[xu]){e[xu]=!0,xs.forEach(function(l){l!=="selectionchange"&&(bh.has(l)||Gc(l,!1,e),Gc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xu]||(t[xu]=!0,Gc("selectionchange",!1,t))}}function Rf(e,t,l,a){switch(fd(t)){case 2:var n=Zh;break;case 8:n=Kh;break;default:n=as}l=n.bind(null,t,l,e),n=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Xc(e,t,l,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Vl(c),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){a=u=i;continue e}c=c.parentNode}}a=a.return}Ys(function(){var m=u,y=ii(l),E=[];e:{var g=ho.get(e);if(g!==void 0){var v=qn,x=e;switch(e){case"keypress":if(Rn(l)===0)break e;case"keydown":case"keyup":v=dm;break;case"focusin":x="focus",v=di;break;case"focusout":x="blur",v=di;break;case"beforeblur":case"afterblur":v=di;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=gm;break;case oo:case ro:case fo:v=am;break;case mo:v=ym;break;case"scroll":case"scrollend":v=Id;break;case"wheel":v=bm;break;case"copy":case"cut":case"paste":v=um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Qs;break;case"toggle":case"beforetoggle":v=Em}var L=(t&4)!==0,de=!L&&(e==="scroll"||e==="scrollend"),f=L?g!==null?g+"Capture":null:g;L=[];for(var o=m,d;o!==null;){var b=o;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||f===null||(b=Ha(o,f),b!=null&&L.push(hn(o,b,d))),de)break;o=o.return}0<L.length&&(g=new v(g,x,null,l,y),E.push({event:g,listeners:L}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&l!==ui&&(x=l.relatedTarget||l.fromElement)&&(Vl(x)||x[Ql]))break e;if((v||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=l.relatedTarget||l.toElement,v=m,x=x?Vl(x):null,x!==null&&(de=J(x),L=x.tag,x!==de||L!==5&&L!==27&&L!==6)&&(x=null)):(v=null,x=m),v!==x)){if(L=ks,b="onMouseLeave",f="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(L=Qs,b="onPointerLeave",f="onPointerEnter",o="pointer"),de=v==null?g:Ua(v),d=x==null?g:Ua(x),g=new L(b,o+"leave",v,l,y),g.target=de,g.relatedTarget=d,b=null,Vl(y)===m&&(L=new L(f,o+"enter",x,l,y),L.target=d,L.relatedTarget=de,b=L),de=b,v&&x)t:{for(L=Sh,f=v,o=x,d=0,b=f;b;b=L(b))d++;b=0;for(var H=o;H;H=L(H))b++;for(;0<d-b;)f=L(f),d--;for(;0<b-d;)o=L(o),b--;for(;d--;){if(f===o||o!==null&&f===o.alternate){L=f;break t}f=L(f),o=L(o)}L=null}else L=null;v!==null&&Lf(E,g,v,L,!1),x!==null&&de!==null&&Lf(E,de,x,L,!0)}}e:{if(g=m?Ua(m):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var te=Is;else if($s(g))if(Ps)te=Nm;else{te=Dm;var D=Om}else v=g.nodeName,!v||v.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?m&&ni(m.elementType)&&(te=Is):te=Cm;if(te&&(te=te(e,m))){Fs(E,te,l,y);break e}D&&D(e,g,m),e==="focusout"&&m&&g.type==="number"&&m.memoizedProps.value!=null&&ai(g,"number",g.value)}switch(D=m?Ua(m):window,e){case"focusin":($s(D)||D.contentEditable==="true")&&(ea=D,pi=m,ka=null);break;case"focusout":ka=pi=ea=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,co(E,l,y);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":co(E,l,y)}var V;if(hi)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Pl?Ks(e,l)&&(I="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(I="onCompositionStart");I&&(Vs&&l.locale!=="ko"&&(Pl||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pl&&(V=ws()):(tl=y,oi="value"in tl?tl.value:tl.textContent,Pl=!0)),D=Ou(m,I),0<D.length&&(I=new Xs(I,e,null,l,y),E.push({event:I,listeners:D}),V?I.data=V:(V=Ws(l),V!==null&&(I.data=V)))),(V=Tm?zm(e,l):Mm(e,l))&&(I=Ou(m,"onBeforeInput"),0<I.length&&(D=new Xs("onBeforeInput","beforeinput",null,l,y),E.push({event:D,listeners:I}),D.data=V)),vh(E,e,m,l,y)}Bf(E,t)})}function hn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Ou(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ha(e,l),n!=null&&a.unshift(hn(e,n,u)),n=Ha(e,t),n!=null&&a.push(hn(e,n,u))),e.tag===3)return a;e=e.return}return[]}function Sh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lf(e,t,l,a,n){for(var u=t._reactName,i=[];l!==null&&l!==a;){var c=l,s=c.alternate,m=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||m===null||(s=m,n?(m=Ha(l,u),m!=null&&i.unshift(hn(l,m,s))):n||(m=Ha(l,u),m!=null&&i.push(hn(l,m,s)))),l=l.return}i.length!==0&&e.push({event:t,listeners:i})}var Eh=/\r\n?/g,Ah=/\u0000|\uFFFD/g;function qf(e){return(typeof e=="string"?e:""+e).replace(Eh,`
`).replace(Ah,"")}function Yf(e,t){return t=qf(t),qf(e)===t}function fe(e,t,l,a,n,u){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||$l(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&$l(e,""+a);break;case"className":_n(e,"class",a);break;case"tabIndex":_n(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(e,l,a);break;case"style":Ls(e,a,u);break;case"data":if(t!=="object"){_n(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Hn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&fe(e,t,"name",n.name,n,null),fe(e,t,"formEncType",n.formEncType,n,null),fe(e,t,"formMethod",n.formMethod,n,null),fe(e,t,"formTarget",n.formTarget,n,null)):(fe(e,t,"encType",n.encType,n,null),fe(e,t,"method",n.method,n,null),fe(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Hn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Rt);break;case"onScroll":a!=null&&$("scroll",e);break;case"onScrollEnd":a!=null&&$("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Hn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":$("beforetoggle",e),$("toggle",e),Nn(e,"popover",a);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Nn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=$d.get(l)||l,Nn(e,l,a))}}function Qc(e,t,l,a,n,u){switch(l){case"style":Ls(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=l}}break;case"children":typeof a=="string"?$l(e,a):(typeof a=="number"||typeof a=="bigint")&&$l(e,""+a);break;case"onScroll":a!=null&&$("scroll",e);break;case"onScrollEnd":a!=null&&$("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Os.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),u=e[Ze]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Nn(e,l,a)}}}function we(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",e),$("load",e);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:fe(e,t,u,i,l,null)}}n&&fe(e,t,"srcSet",l.srcSet,l,null),a&&fe(e,t,"src",l.src,l,null);return;case"input":$("invalid",e);var c=u=i=n=null,s=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var y=l[a];if(y!=null)switch(a){case"name":n=y;break;case"type":i=y;break;case"checked":s=y;break;case"defaultChecked":m=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:fe(e,t,a,y,l,null)}}Us(e,u,c,s,m,i,n,!1);return;case"select":$("invalid",e),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:fe(e,t,n,c,l,null)}t=u,l=i,e.multiple=!!a,t!=null?Wl(e,!!a,t,!1):l!=null&&Wl(e,!!a,l,!0);return;case"textarea":$("invalid",e),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:fe(e,t,i,c,l,null)}Bs(e,a,n,u);return;case"option":for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null)&&(s==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":fe(e,t,s,a,l,null));return;case"dialog":$("beforetoggle",e),$("toggle",e),$("cancel",e),$("close",e);break;case"iframe":case"object":$("load",e);break;case"video":case"audio":for(a=0;a<mn.length;a++)$(mn[a],e);break;case"image":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"embed":case"source":case"link":$("error",e),$("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:fe(e,t,m,a,l,null)}return;default:if(ni(t)){for(y in l)l.hasOwnProperty(y)&&(a=l[y],a!==void 0&&Qc(e,t,y,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&fe(e,t,c,a,l,null))}function Th(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,s=null,m=null,y=null;for(v in l){var E=l[v];if(l.hasOwnProperty(v)&&E!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":s=E;default:a.hasOwnProperty(v)||fe(e,t,v,null,a,E)}}for(var g in a){var v=a[g];if(E=l[g],a.hasOwnProperty(g)&&(v!=null||E!=null))switch(g){case"type":u=v;break;case"name":n=v;break;case"checked":m=v;break;case"defaultChecked":y=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:v!==E&&fe(e,t,g,v,a,E)}}li(e,i,c,s,m,y,u,n);return;case"select":v=i=c=g=null;for(u in l)if(s=l[u],l.hasOwnProperty(u)&&s!=null)switch(u){case"value":break;case"multiple":v=s;default:a.hasOwnProperty(u)||fe(e,t,u,null,a,s)}for(n in a)if(u=a[n],s=l[n],a.hasOwnProperty(n)&&(u!=null||s!=null))switch(n){case"value":g=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==s&&fe(e,t,n,u,a,s)}t=c,l=i,a=v,g!=null?Wl(e,!!l,g,!1):!!a!=!!l&&(t!=null?Wl(e,!!l,t,!0):Wl(e,!!l,l?[]:"",!1));return;case"textarea":v=g=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:fe(e,t,c,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":g=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==u&&fe(e,t,i,n,a,u)}Hs(e,g,v);return;case"option":for(var x in l)g=l[x],l.hasOwnProperty(x)&&g!=null&&!a.hasOwnProperty(x)&&(x==="selected"?e.selected=!1:fe(e,t,x,null,a,g));for(s in a)g=a[s],v=l[s],a.hasOwnProperty(s)&&g!==v&&(g!=null||v!=null)&&(s==="selected"?e.selected=g&&typeof g!="function"&&typeof g!="symbol":fe(e,t,s,g,a,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in l)g=l[L],l.hasOwnProperty(L)&&g!=null&&!a.hasOwnProperty(L)&&fe(e,t,L,null,a,g);for(m in a)if(g=a[m],v=l[m],a.hasOwnProperty(m)&&g!==v&&(g!=null||v!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:fe(e,t,m,g,a,v)}return;default:if(ni(t)){for(var de in l)g=l[de],l.hasOwnProperty(de)&&g!==void 0&&!a.hasOwnProperty(de)&&Qc(e,t,de,void 0,a,g);for(y in a)g=a[y],v=l[y],!a.hasOwnProperty(y)||g===v||g===void 0&&v===void 0||Qc(e,t,y,g,a,v);return}}for(var f in l)g=l[f],l.hasOwnProperty(f)&&g!=null&&!a.hasOwnProperty(f)&&fe(e,t,f,null,a,g);for(E in a)g=a[E],v=l[E],!a.hasOwnProperty(E)||g===v||g==null&&v==null||fe(e,t,E,g,a,v)}function wf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&wf(i)){for(i=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],m=s.startTime;if(m>c)break;var y=s.transferSize,E=s.initiatorType;y&&wf(E)&&(s=s.responseEnd,i+=y*(s<c?1:(c-m)/(s-m)))}if(--a,t+=8*(u+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vc=null,Jc=null;function Du(e){return e.nodeType===9?e:e.ownerDocument}function Gf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kc=null;function Mh(){var e=window.event;return e&&e.type==="popstate"?e===Kc?!1:(Kc=e,!0):(Kc=null,!1)}var Xf=typeof setTimeout=="function"?setTimeout:void 0,jh=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,xh=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(e){return Qf.resolve(null).then(e).catch(Oh)}:Xf;function Oh(e){setTimeout(function(){throw e})}function pl(e){return e==="head"}function Vf(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),xa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")gn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,gn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[_a]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&gn(e.ownerDocument.body);l=n}while(l);xa(t)}function Jf(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Wc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Wc(l),ei(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Dh(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_a])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function Ch(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=St(e.nextSibling),e===null))return null;return e}function Zf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=St(e.nextSibling),e===null))return null;return e}function $c(e){return e.data==="$?"||e.data==="$~"}function Fc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Nh(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ic=null;function Kf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return St(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function $f(e,t,l){switch(t=Du(l),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function gn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ei(e)}var Et=new Map,Ff=new Set;function Cu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var It=M.d;M.d={f:_h,r:Uh,D:Hh,C:Bh,L:Rh,m:Lh,X:Yh,S:qh,M:wh};function _h(){var e=It.f(),t=Eu();return e||t}function Uh(e){var t=Jl(e);t!==null&&t.tag===5&&t.type==="form"?mr(t):It.r(e)}var za=typeof document>"u"?null:document;function If(e,t,l){var a=za;if(a&&typeof t=="string"&&t){var n=mt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Ff.has(n)||(Ff.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),we(t,"link",e),Ue(t),a.head.appendChild(t)))}}function Hh(e){It.D(e),If("dns-prefetch",e,null)}function Bh(e,t){It.C(e,t),If("preconnect",e,t)}function Rh(e,t,l){It.L(e,t,l);var a=za;if(a&&e&&t){var n='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+mt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+mt(l.imageSizes)+'"]')):n+='[href="'+mt(e)+'"]';var u=n;switch(t){case"style":u=Ma(e);break;case"script":u=ja(e)}Et.has(u)||(e=B({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Et.set(u,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(vn(u))||t==="script"&&a.querySelector(yn(u))||(t=a.createElement("link"),we(t,"link",e),Ue(t),a.head.appendChild(t)))}}function Lh(e,t){It.m(e,t);var l=za;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+mt(a)+'"][href="'+mt(e)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ja(e)}if(!Et.has(u)&&(e=B({rel:"modulepreload",href:e},t),Et.set(u,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yn(u)))return}a=l.createElement("link"),we(a,"link",e),Ue(a),l.head.appendChild(a)}}}function qh(e,t,l){It.S(e,t,l);var a=za;if(a&&e){var n=Zl(a).hoistableStyles,u=Ma(e);t=t||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(vn(u)))c.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Et.get(u))&&Pc(e,l);var s=i=a.createElement("link");Ue(s),we(s,"link",e),s._p=new Promise(function(m,y){s.onload=m,s.onerror=y}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Nu(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Yh(e,t){It.X(e,t);var l=za;if(l&&e){var a=Zl(l).hoistableScripts,n=ja(e),u=a.get(n);u||(u=l.querySelector(yn(n)),u||(e=B({src:e,async:!0},t),(t=Et.get(n))&&es(e,t),u=l.createElement("script"),Ue(u),we(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function wh(e,t){It.M(e,t);var l=za;if(l&&e){var a=Zl(l).hoistableScripts,n=ja(e),u=a.get(n);u||(u=l.querySelector(yn(n)),u||(e=B({src:e,async:!0,type:"module"},t),(t=Et.get(n))&&es(e,t),u=l.createElement("script"),Ue(u),we(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Pf(e,t,l,a){var n=(n=K.current)?Cu(n):null;if(!n)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ma(l.href),l=Zl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ma(l.href);var u=Zl(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(vn(e)))&&!u._p&&(i.instance=u,i.state.loading=5),Et.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Et.set(e,l),u||Gh(n,e,l,i.state))),t&&a===null)throw Error(h(528,""));return i}if(t&&a!==null)throw Error(h(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ja(l),l=Zl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Ma(e){return'href="'+mt(e)+'"'}function vn(e){return'link[rel="stylesheet"]['+e+"]"}function ed(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function Gh(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),we(t,"link",l),Ue(t),e.head.appendChild(t))}function ja(e){return'[src="'+mt(e)+'"]'}function yn(e){return"script[async]"+e}function td(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+mt(l.href)+'"]');if(a)return t.instance=a,Ue(a),a;var n=B({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ue(a),we(a,"style",n),Nu(a,l.precedence,e),t.instance=a;case"stylesheet":n=Ma(l.href);var u=e.querySelector(vn(n));if(u)return t.state.loading|=4,t.instance=u,Ue(u),u;a=ed(l),(n=Et.get(n))&&Pc(a,n),u=(e.ownerDocument||e).createElement("link"),Ue(u);var i=u;return i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),we(u,"link",a),t.state.loading|=4,Nu(u,l.precedence,e),t.instance=u;case"script":return u=ja(l.src),(n=e.querySelector(yn(u)))?(t.instance=n,Ue(n),n):(a=l,(n=Et.get(u))&&(a=B({},l),es(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ue(n),we(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Nu(a,l.precedence,e));return t.instance}function Nu(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===t)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function es(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _u=null;function ld(e,t,l){if(_u===null){var a=new Map,n=_u=new Map;n.set(l,a)}else n=_u,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var u=l[n];if(!(u[_a]||u[Re]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function ad(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function kh(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xh(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ma(a.href),u=t.querySelector(vn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Uu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,Ue(u);return}u=t.ownerDocument||t,a=ed(a),(n=Et.get(n))&&Pc(a,n),u=u.createElement("link"),Ue(u);var i=u;i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),we(u,"link",a),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Uu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var ts=0;function Qh(e,t){return e.stylesheets&&e.count===0&&Bu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Bu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&ts===0&&(ts=62500*zh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>ts?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hu=null;function Bu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hu=new Map,t.forEach(Vh,e),Hu=null,Uu.call(e))}function Vh(e,t){if(!(t.state.loading&4)){var l=Hu.get(e);if(l)var a=l.get(null);else{l=new Map,Hu.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=t.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=Uu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var pn={$$typeof:Te,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Jh(e,t,l,a,n,u,i,c,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$u(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.hiddenUpdates=$u(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function ud(e,t,l,a,n,u,i,c,s,m,y,E){return e=new Jh(e,t,l,i,s,m,y,E,c),t=1,u===!0&&(t|=24),u=ut(3,null,null,t),e.current=u,u.stateNode=e,t=Hi(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:t},qi(u),e}function id(e){return e?(e=aa,e):aa}function cd(e,t,l,a,n,u){n=id(n),a.context===null?a.context=n:a.pendingContext=n,a=cl(t),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=sl(e,a,t),l!==null&&(Pe(l,e,t),Wa(l,e,t))}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function ls(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function od(e){if(e.tag===13||e.tag===31){var t=Nl(e,67108864);t!==null&&Pe(t,e,67108864),ls(e,67108864)}}function rd(e){if(e.tag===13||e.tag===31){var t=rt();t=Fu(t);var l=Nl(e,t);l!==null&&Pe(l,e,t),ls(e,t)}}var Ru=!0;function Zh(e,t,l,a){var n=p.T;p.T=null;var u=M.p;try{M.p=2,as(e,t,l,a)}finally{M.p=u,p.T=n}}function Kh(e,t,l,a){var n=p.T;p.T=null;var u=M.p;try{M.p=8,as(e,t,l,a)}finally{M.p=u,p.T=n}}function as(e,t,l,a){if(Ru){var n=ns(a);if(n===null)Xc(e,t,a,Lu,l),dd(e,a);else if($h(n,e,t,l,a))a.stopPropagation();else if(dd(e,a),t&4&&-1<Wh.indexOf(e)){for(;n!==null;){var u=Jl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=jl(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var s=1<<31-at(i);c.entanglements[1]|=s,i&=~s}Ut(u),(ne&6)===0&&(bu=tt()+500,dn(0))}}break;case 31:case 13:c=Nl(u,2),c!==null&&Pe(c,u,2),Eu(),ls(u,2)}if(u=ns(a),u===null&&Xc(e,t,a,Lu,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else Xc(e,t,a,null,l)}}function ns(e){return e=ii(e),us(e)}var Lu=null;function us(e){if(Lu=null,e=Vl(e),e!==null){var t=J(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ue(t),e!==null)return e;e=null}else if(l===31){if(e=Ae(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Lu=e,null}function fd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hd()){case ys:return 2;case ps:return 8;case jn:case Bd:return 32;case bs:return 268435456;default:return 32}default:return 32}}var is=!1,bl=null,Sl=null,El=null,bn=new Map,Sn=new Map,Al=[],Wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(e,t){switch(e){case"focusin":case"focusout":bl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":El=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function En(e,t,l,a,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Jl(t),t!==null&&od(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function $h(e,t,l,a,n){switch(t){case"focusin":return bl=En(bl,e,t,l,a,n),!0;case"dragenter":return Sl=En(Sl,e,t,l,a,n),!0;case"mouseover":return El=En(El,e,t,l,a,n),!0;case"pointerover":var u=n.pointerId;return bn.set(u,En(bn.get(u)||null,e,t,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,Sn.set(u,En(Sn.get(u)||null,e,t,l,a,n)),!0}return!1}function md(e){var t=Vl(e.target);if(t!==null){var l=J(t);if(l!==null){if(t=l.tag,t===13){if(t=ue(l),t!==null){e.blockedOn=t,Ms(e.priority,function(){rd(l)});return}}else if(t===31){if(t=Ae(l),t!==null){e.blockedOn=t,Ms(e.priority,function(){rd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=ns(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);ui=a,l.target.dispatchEvent(a),ui=null}else return t=Jl(l),t!==null&&od(t),e.blockedOn=l,!1;t.shift()}return!0}function hd(e,t,l){qu(e)&&l.delete(t)}function Fh(){is=!1,bl!==null&&qu(bl)&&(bl=null),Sl!==null&&qu(Sl)&&(Sl=null),El!==null&&qu(El)&&(El=null),bn.forEach(hd),Sn.forEach(hd)}function Yu(e,t){e.blockedOn===t&&(e.blockedOn=null,is||(is=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Fh)))}var wu=null;function gd(e){wu!==e&&(wu=e,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){wu===e&&(wu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(us(a||l)===null)continue;break}var u=Jl(l);u!==null&&(e.splice(t,3),t-=3,nc(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function xa(e){function t(s){return Yu(s,e)}bl!==null&&Yu(bl,e),Sl!==null&&Yu(Sl,e),El!==null&&Yu(El,e),bn.forEach(t),Sn.forEach(t);for(var l=0;l<Al.length;l++){var a=Al[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Al.length&&(l=Al[0],l.blockedOn===null);)md(l),l.blockedOn===null&&Al.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[Ze]||null;if(typeof u=="function")i||gd(l);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Ze]||null)c=i.formAction;else if(us(n)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),gd(l)}}}function vd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function cs(e){this._internalRoot=e}Gu.prototype.render=cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var l=t.current,a=rt();cd(l,a,e,t,null,null)},Gu.prototype.unmount=cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cd(e.current,2,null,e,null,null),Eu(),t[Ql]=null}};function Gu(e){this._internalRoot=e}Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=zs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Al.length&&t!==0&&t<Al[l].priority;l++);Al.splice(l,0,e),l===0&&md(e)}};var yd=w.version;if(yd!=="19.2.4")throw Error(h(527,yd,"19.2.4"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=T(t),e=e!==null?P(e):null,e=e===null?null:e.stateNode,e};var Ih={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:p,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{Da=ku.inject(Ih),lt=ku}catch{}}return Tn.createRoot=function(e,t){if(!_(e))throw Error(h(299));var l=!1,a="",n=Tr,u=zr,i=Mr;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ud(e,1,!1,null,null,l,a,null,n,u,i,vd),e[Ql]=t.current,kc(e),new cs(t)},Tn.hydrateRoot=function(e,t,l){if(!_(e))throw Error(h(299));var a=!1,n="",u=Tr,i=zr,c=Mr,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),t=ud(e,1,!0,t,l??null,a,n,s,u,i,c,vd),t.context=id(null),l=t.current,a=rt(),a=Fu(a),n=cl(a),n.callback=null,sl(l,n,a),l=a,t.current.lanes=l,Na(t,l),Ut(t),e[Ql]=t.current,kc(e),new Gu(t)},Tn.version="19.2.4",Tn}var xd;function sg(){if(xd)return rs.exports;xd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(w){console.error(w)}}return z(),rs.exports=cg(),rs.exports}var og=sg();const jt={chapters:[{id:1,title:"JavaScript Foundations",description:"Variables, types, and the basics",lessons:[{id:"1-1",title:"What is JavaScript?",duration:"10 min",content:`
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
          `}]}]};const Cd=(...z)=>z.filter((w,k,h)=>!!w&&w.trim()!==""&&h.indexOf(w)===k).join(" ").trim();const rg=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const fg=z=>z.replace(/^([A-Z])|[\s-_]+(\w)/g,(w,k,h)=>h?h.toUpperCase():k.toLowerCase());const Od=z=>{const w=fg(z);return w.charAt(0).toUpperCase()+w.slice(1)};var dg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const mg=z=>{for(const w in z)if(w.startsWith("aria-")||w==="role"||w==="title")return!0;return!1};const hg=xt.forwardRef(({color:z="currentColor",size:w=24,strokeWidth:k=2,absoluteStrokeWidth:h,className:_="",children:J,iconNode:ue,...Ae},C)=>xt.createElement("svg",{ref:C,...dg,width:w,height:w,stroke:z,strokeWidth:h?Number(k)*24/Number(w):k,className:Cd("lucide",_),...!J&&!mg(Ae)&&{"aria-hidden":"true"},...Ae},[...ue.map(([T,P])=>xt.createElement(T,P)),...Array.isArray(J)?J:[J]]));const Ot=(z,w)=>{const k=xt.forwardRef(({className:h,..._},J)=>xt.createElement(hg,{ref:J,iconNode:w,className:Cd(`lucide-${rg(Od(z))}`,`lucide-${z}`,h),..._}));return k.displayName=Od(z),k};const gg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],vg=Ot("book-open",gg);const yg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xu=Ot("chevron-right",yg);const pg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],zn=Ot("circle-check",pg);const bg=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Sg=Ot("clock",bg);const Eg=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Dd=Ot("code",Eg);const Ag=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Tg=Ot("house",Ag);const zg=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Mg=Ot("lightbulb",zg);const jg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],xg=Ot("menu",jg);const Og=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Dg=Ot("play",Og);const Cg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ng=Ot("triangle-alert",Cg);const _g=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ug=Ot("x",_g);function Hg(){const[z,w]=xt.useState(!1),[k,h]=xt.useState("home"),[_,J]=xt.useState(null),[ue,Ae]=xt.useState([]);xt.useEffect(()=>{const N=localStorage.getItem("javascript-progress");N&&Ae(JSON.parse(N))},[]);const C=N=>{const R=[...ue,N];Ae(R),localStorage.setItem("javascript-progress",JSON.stringify(R))},T=jt.chapters.reduce((N,R)=>N+R.lessons.length,0),P=Math.round(ue.length/T*100),B=N=>{J(N),h("lesson"),w(!1),window.scrollTo(0,0)},me=()=>{if(!_)return null;for(let N=0;N<jt.chapters.length;N++){const R=jt.chapters[N];for(let Z=0;Z<R.lessons.length;Z++)if(R.lessons[Z].id===_.id){if(Z<R.lessons.length-1)return R.lessons[Z+1];if(N<jt.chapters.length-1)return jt.chapters[N+1].lessons[0]}}return null},Ge=()=>{if(!_)return null;for(let N=0;N<jt.chapters.length;N++){const R=jt.chapters[N];for(let Z=0;Z<R.lessons.length;Z++)if(R.lessons[Z].id===_.id){if(Z>0)return R.lessons[Z-1];if(N>0){const U=jt.chapters[N-1];return U.lessons[U.lessons.length-1]}}}return null},ke=N=>{const R=N.trim().split(`
`),Z=[];let U=0,Te=!1,Be=[],et="";for(;U<R.length;){const ae=R[U];if(ae.startsWith("```")){Te?(Z.push(S.jsxs("div",{className:"code-block",children:[S.jsxs("div",{className:"code-header",children:[S.jsx("span",{className:"code-language",children:et}),S.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(Be.join(`
`)),children:"Copy"})]}),S.jsx("div",{className:"code-content",children:S.jsx("pre",{children:Be.join(`
`)})})]},`code-${U}`)),Te=!1):(Te=!0,et=ae.slice(3).trim()||"text",Be=[]),U++;continue}if(Te){Be.push(ae),U++;continue}if(ae.includes("<tip>")){let q=[];for(U++;U<R.length&&!R[U].includes("</tip>");)q.push(R[U]),U++;Z.push(S.jsxs("div",{className:"tip-box",children:[S.jsxs("div",{className:"tip-box-header",children:[S.jsx(Mg,{size:18}),S.jsx("span",{children:"Pro Tip"})]}),S.jsx("p",{children:q.join(" ").replace("💡 ","")})]},`tip-${U}`)),U++;continue}if(ae.includes("<warning>")){let q=[];for(U++;U<R.length&&!R[U].includes("</warning>");)q.push(R[U]),U++;Z.push(S.jsxs("div",{className:"warning-box",children:[S.jsxs("div",{className:"warning-box-header",children:[S.jsx(Ng,{size:18}),S.jsx("span",{children:"Warning"})]}),S.jsx("p",{children:q.join(" ").replace("⚠️ ","")})]},`warn-${U}`)),U++;continue}if(ae.startsWith("## ")){Z.push(S.jsx("h2",{children:ae.slice(3)},`h2-${U}`)),U++;continue}if(ae.startsWith("### ")){Z.push(S.jsx("h3",{children:ae.slice(4)},`h3-${U}`)),U++;continue}if(ae.includes("|")&&R[U+1]?.includes("---")){const q=ae.split("|").filter(ve=>ve.trim()).map(ve=>ve.trim());U+=2;const ze=[];for(;U<R.length&&R[U].includes("|");)ze.push(R[U].split("|").filter(ve=>ve.trim()).map(ve=>ve.trim())),U++;Z.push(S.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:S.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[S.jsx("thead",{children:S.jsx("tr",{children:q.map((ve,Dt)=>S.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-primary)"},children:ve},Dt))})}),S.jsx("tbody",{children:ze.map((ve,Dt)=>S.jsx("tr",{children:ve.map((ft,Xe)=>S.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:S.jsx("span",{dangerouslySetInnerHTML:{__html:ft.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(245,158,11,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},Xe))},Dt))})]})},`table-${U}`));continue}if(ae.startsWith("- ")||ae.startsWith("* ")){const q=[];for(;U<R.length&&(R[U].startsWith("- ")||R[U].startsWith("* "));)q.push(R[U].slice(2)),U++;Z.push(S.jsx("ul",{children:q.map((ze,ve)=>S.jsx("li",{dangerouslySetInnerHTML:{__html:ze.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(245,158,11,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},ve))},`ul-${U}`));continue}if(/^\d+\. /.test(ae)){const q=[];for(;U<R.length&&/^\d+\. /.test(R[U]);)q.push(R[U].replace(/^\d+\. /,"")),U++;Z.push(S.jsx("ol",{children:q.map((ze,ve)=>S.jsx("li",{dangerouslySetInnerHTML:{__html:ze.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(245,158,11,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},ve))},`ol-${U}`));continue}ae.trim()&&Z.push(S.jsx("p",{dangerouslySetInnerHTML:{__html:ae.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(245,158,11,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-secondary)">$1</a>')}},`p-${U}`)),U++}return Z};return S.jsxs("div",{className:"app-container",children:[S.jsx("div",{className:"bg-grid"}),S.jsx("div",{className:"bg-noise"}),S.jsx("div",{className:"gradient-orb orb-primary"}),S.jsx("div",{className:"gradient-orb orb-secondary"}),S.jsx("div",{className:"gradient-orb orb-tertiary"}),S.jsx("button",{className:"mobile-menu-btn",onClick:()=>w(!z),children:z?S.jsx(Ug,{size:24}):S.jsx(xg,{size:24})}),S.jsx("div",{className:`sidebar-overlay ${z?"open":""}`,onClick:()=>w(!1)}),S.jsxs("aside",{className:`sidebar ${z?"open":""}`,children:[S.jsxs("div",{className:"sidebar-header",children:[S.jsx("div",{className:"sidebar-logo",children:S.jsx(Dd,{size:24})}),S.jsx("span",{className:"sidebar-title",children:"JavaScript"})]}),S.jsxs("nav",{className:"sidebar-nav",children:[S.jsxs("div",{className:`nav-item ${k==="home"?"active":""}`,onClick:()=>{h("home"),w(!1)},children:[S.jsx(Tg,{size:20,className:"nav-item-icon"}),S.jsx("span",{children:"Home"})]}),jt.chapters.map(N=>S.jsxs("div",{className:"nav-section",children:[S.jsxs("div",{className:"nav-section-title",children:["Ch ",N.id,": ",N.title]}),N.lessons.map(R=>S.jsxs("div",{className:`nav-item ${_?.id===R.id?"active":""}`,onClick:()=>B(R),children:[ue.includes(R.id)?S.jsx(zn,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):S.jsx(vg,{size:18,className:"nav-item-icon"}),S.jsx("span",{children:R.title})]},R.id))]},N.id))]}),S.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[S.jsx("span",{children:"Progress"}),S.jsxs("span",{children:[P,"%"]})]}),S.jsx("div",{className:"progress-bar",children:S.jsx("div",{className:"progress-fill",style:{width:`${P}%`}})})]})]}),S.jsxs("main",{className:"main-content",children:[k==="home"&&S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"hero",children:[S.jsxs("div",{className:"hero-badge",children:[S.jsx(Dd,{size:16}),S.jsx("span",{children:"JavaScript Mastery Course"})]}),S.jsxs("h1",{className:"hero-title",children:["Master",S.jsx("br",{}),S.jsx("span",{children:"JavaScript"})]}),S.jsx("p",{className:"hero-subtitle",children:"From fundamentals to advanced patterns. Learn modern JavaScript with hands-on examples and real-world projects."}),S.jsxs("button",{className:"nav-button primary",onClick:()=>B(jt.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[S.jsx(Dg,{size:20}),"Start Learning"]})]}),S.jsxs("div",{style:{marginBottom:"48px"},children:[S.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),jt.chapters.map(N=>{const R=N.lessons.filter(Z=>ue.includes(Z.id)).length;return S.jsxs("div",{className:"chapter-card",onClick:()=>B(N.lessons[0]),children:[S.jsx("div",{className:"chapter-number",children:N.id}),S.jsxs("div",{className:"chapter-info",children:[S.jsx("div",{className:"chapter-title",children:N.title}),S.jsxs("div",{className:"chapter-meta",children:[N.description," • ",N.lessons.length," lessons",R>0&&S.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",R,"/",N.lessons.length," complete)"]})]})]}),S.jsx(Xu,{size:24,style:{color:"var(--text-muted)"}})]},N.id)})]}),S.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[S.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),S.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"Master modern JavaScript from basics to advanced concepts:"}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["Variables & Types","Functions","DOM Manipulation","Async/Await","ES6+ Features","Best Practices"].map(N=>S.jsxs("div",{style:{padding:"16px",background:"rgba(245, 158, 11, 0.1)",borderRadius:"12px",border:"1px solid rgba(245, 158, 11, 0.2)"},children:[S.jsx(zn,{size:24,style:{color:"var(--accent-primary)",marginBottom:"8px"}}),S.jsx("div",{style:{fontWeight:"500"},children:N})]},N))})]})]}),k==="lesson"&&_&&S.jsxs("div",{className:"lesson-container",children:[S.jsxs("div",{className:"lesson-header",children:[S.jsxs("div",{className:"lesson-breadcrumb",children:[S.jsx("a",{href:"#",onClick:N=>{N.preventDefault(),h("home")},children:"Home"}),S.jsx(Xu,{size:16}),S.jsx("span",{children:_.title})]}),S.jsx("h1",{className:"lesson-title",children:_.title}),S.jsxs("div",{className:"lesson-meta",children:[S.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[S.jsx(Sg,{size:16}),_.duration]}),ue.includes(_.id)&&S.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[S.jsx(zn,{size:16}),"Completed"]})]})]}),S.jsx("div",{className:"lesson-content",children:ke(_.content)}),!ue.includes(_.id)&&S.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>C(_.id),children:[S.jsx(zn,{size:20}),"Mark as Complete"]}),S.jsxs("div",{className:"lesson-nav",children:[Ge()?S.jsxs("button",{className:"nav-button",onClick:()=>B(Ge()),children:[S.jsx(Xu,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):S.jsx("div",{}),me()?S.jsxs("button",{className:"nav-button primary",onClick:()=>B(me()),children:["Next Lesson",S.jsx(Xu,{size:20})]}):S.jsxs("button",{className:"nav-button primary",onClick:()=>h("home"),children:["Finish Course",S.jsx(zn,{size:20})]})]})]})]})]})}og.createRoot(document.getElementById("root")).render(S.jsx(xt.StrictMode,{children:S.jsx(Hg,{})}));
