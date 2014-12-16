/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.11 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

/**
 * @license RequireJS text 2.0.7 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

var requirejs,require,define;!function(global){function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,n){if(e){var t;for(t=0;t<e.length&&(!e[t]||!n(e[t],t,e));t+=1);}}function eachReverse(e,n){if(e){var t;for(t=e.length-1;t>-1&&(!e[t]||!n(e[t],t,e));t-=1);}}function hasProp(e,n){return hasOwn.call(e,n)}function getOwn(e,n){return hasProp(e,n)&&e[n]}function eachProp(e,n){var t;for(t in e)if(hasProp(e,t)&&n(e[t],t))break}function mixin(e,n,t,r){return n&&eachProp(n,function(n,i){(t||!hasProp(e,i))&&(!r||"object"!=typeof n||!n||isArray(n)||isFunction(n)||n instanceof RegExp?e[i]=n:(e[i]||(e[i]={}),mixin(e[i],n,t,r)))}),e}function bind(e,n){return function(){return n.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var n=global;return each(e.split("."),function(e){n=n[e]}),n}function makeError(e,n,t,r){var i=new Error(n+"\nhttp://requirejs.org/docs/errors.html#"+e);return i.requireType=e,i.requireModules=r,t&&(i.originalError=t),i}function newContext(e){function n(e){var n,t,r=e.length;for(n=0;r>n;n++)if(t=e[n],"."===t)e.splice(n,1),n-=1;else if(".."===t){if(1===n&&(".."===e[2]||".."===e[0]))break;n>0&&(e.splice(n-1,2),n-=2)}}function t(e,t,r){var i,a,o,s,l,c,d,u,p,f,h,v=t&&t.split("/"),m=v,g=q.map,b=g&&g["*"];if(e&&"."===e.charAt(0)&&(t?(m=v.slice(0,v.length-1),e=e.split("/"),d=e.length-1,q.nodeIdCompat&&jsSuffixRegExp.test(e[d])&&(e[d]=e[d].replace(jsSuffixRegExp,"")),e=m.concat(e),n(e),e=e.join("/")):0===e.indexOf("./")&&(e=e.substring(2))),r&&g&&(v||b)){o=e.split("/");e:for(s=o.length;s>0;s-=1){if(c=o.slice(0,s).join("/"),v)for(l=v.length;l>0;l-=1)if(a=getOwn(g,v.slice(0,l).join("/")),a&&(a=getOwn(a,c))){u=a,p=s;break e}!f&&b&&getOwn(b,c)&&(f=getOwn(b,c),h=s)}!u&&f&&(u=f,p=h),u&&(o.splice(0,p,u),e=o.join("/"))}return i=getOwn(q.pkgs,e),i?i:e}function r(e){isBrowser&&each(scripts(),function(n){return n.getAttribute("data-requiremodule")===e&&n.getAttribute("data-requirecontext")===y.contextName?(n.parentNode.removeChild(n),!0):void 0})}function i(e){var n=getOwn(q.paths,e);return n&&isArray(n)&&n.length>1?(n.shift(),y.require.undef(e),y.require([e]),!0):void 0}function a(e){var n,t=e?e.indexOf("!"):-1;return t>-1&&(n=e.substring(0,t),e=e.substring(t+1,e.length)),[n,e]}function o(e,n,r,i){var o,s,l,c,d=null,u=n?n.name:null,p=e,f=!0,h="";return e||(f=!1,e="_@r"+(N+=1)),c=a(e),d=c[0],e=c[1],d&&(d=t(d,u,i),s=getOwn(O,d)),e&&(d?h=s&&s.normalize?s.normalize(e,function(e){return t(e,u,i)}):t(e,u,i):(h=t(e,u,i),c=a(h),d=c[0],h=c[1],r=!0,o=y.nameToUrl(h))),l=!d||s||r?"":"_unnormalized"+(T+=1),{prefix:d,name:h,parentMap:n,unnormalized:!!l,url:o,originalName:p,isDefine:f,id:(d?d+"!"+h:h)+l}}function s(e){var n=e.id,t=getOwn(S,n);return t||(t=S[n]=new y.Module(e)),t}function l(e,n,t){var r=e.id,i=getOwn(S,r);!hasProp(O,r)||i&&!i.defineEmitComplete?(i=s(e),i.error&&"error"===n?t(i.error):i.on(n,t)):"defined"===n&&t(O[r])}function c(e,n){var t=e.requireModules,r=!1;n?n(e):(each(t,function(n){var t=getOwn(S,n);t&&(t.error=e,t.events.error&&(r=!0,t.emit("error",e)))}),r||req.onError(e))}function d(){globalDefQueue.length&&(apsp.apply(A,[A.length,0].concat(globalDefQueue)),globalDefQueue=[])}function u(e){delete S[e],delete E[e]}function p(e,n,t){var r=e.map.id;e.error?e.emit("error",e.error):(n[r]=!0,each(e.depMaps,function(r,i){var a=r.id,o=getOwn(S,a);!o||e.depMatched[i]||t[a]||(getOwn(n,a)?(e.defineDep(i,O[a]),e.check()):p(o,n,t))}),t[r]=!0)}function f(){var e,n,t=1e3*q.waitSeconds,a=t&&y.startTime+t<(new Date).getTime(),o=[],s=[],l=!1,d=!0;if(!b){if(b=!0,eachProp(E,function(e){var t=e.map,c=t.id;if(e.enabled&&(t.isDefine||s.push(e),!e.error))if(!e.inited&&a)i(c)?(n=!0,l=!0):(o.push(c),r(c));else if(!e.inited&&e.fetched&&t.isDefine&&(l=!0,!t.prefix))return d=!1}),a&&o.length)return e=makeError("timeout","Load timeout for modules: "+o,null,o),e.contextName=y.contextName,c(e);d&&each(s,function(e){p(e,{},{})}),a&&!n||!l||!isBrowser&&!isWebWorker||k||(k=setTimeout(function(){k=0,f()},50)),b=!1}}function h(e){hasProp(O,e[0])||s(o(e[0],null,!0)).init(e[1],e[2])}function v(e,n,t,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,n):e.removeEventListener(t,n,!1)}function m(e){var n=e.currentTarget||e.srcElement;return v(n,y.onScriptLoad,"load","onreadystatechange"),v(n,y.onScriptError,"error"),{node:n,id:n&&n.getAttribute("data-requiremodule")}}function g(){var e;for(d();A.length;){if(e=A.shift(),null===e[0])return c(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));h(e)}}var b,x,y,w,k,q={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},S={},E={},M={},A=[],O={},j={},C={},N=1,T=1;return w={require:function(e){return e.require?e.require:e.require=y.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?O[e.map.id]=e.exports:e.exports=O[e.map.id]={}:void 0},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(q.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},x=function(e){this.events=getOwn(M,e.id)||{},this.map=e,this.shim=getOwn(q.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},x.prototype={init:function(e,n,t,r){r=r||{},this.inited||(this.factory=n,t?this.on("error",t):this.events.error&&(t=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=t,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,n){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=n)},fetch:function(){if(!this.fetched){this.fetched=!0,y.startTime=(new Date).getTime();var e=this.map;return this.shim?void y.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;j[e]||(j[e]=!0,y.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,n,t=this.map.id,r=this.depExports,i=this.exports,a=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(a)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{i=y.execCb(t,a,r,i)}catch(o){e=o}else i=y.execCb(t,a,r,i);if(this.map.isDefine&&void 0===i&&(n=this.module,n?i=n.exports:this.usingExports&&(i=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",c(this.error=e)}else i=a;this.exports=i,this.map.isDefine&&!this.ignore&&(O[t]=i,req.onResourceLoad&&req.onResourceLoad(y,this.map,this.depMaps)),u(t),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,n=e.id,r=o(e.prefix);this.depMaps.push(r),l(r,"defined",bind(this,function(r){var i,a,d,p=getOwn(C,this.map.id),f=this.map.name,h=this.map.parentMap?this.map.parentMap.name:null,v=y.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(r.normalize&&(f=r.normalize(f,function(e){return t(e,h,!0)})||""),a=o(e.prefix+"!"+f,this.map.parentMap),l(a,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),d=getOwn(S,a.id),void(d&&(this.depMaps.push(a),this.events.error&&d.on("error",bind(this,function(e){this.emit("error",e)})),d.enable()))):p?(this.map.url=y.nameToUrl(p),void this.load()):(i=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),i.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[n],eachProp(S,function(e){0===e.map.id.indexOf(n+"_unnormalized")&&u(e.map.id)}),c(e)}),i.fromText=bind(this,function(t,r){var a=e.name,l=o(a),d=useInteractive;r&&(t=r),d&&(useInteractive=!1),s(l),hasProp(q.config,n)&&(q.config[a]=q.config[n]);try{req.exec(t)}catch(u){return c(makeError("fromtexteval","fromText eval for "+n+" failed: "+u,u,[n]))}d&&(useInteractive=!0),this.depMaps.push(l),y.completeLoad(a),v([a],i)}),void r.load(e.name,v,i,q))})),y.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){E[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,n){var t,r,i;if("string"==typeof e){if(e=o(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[n]=e,i=getOwn(w,e.id))return void(this.depExports[n]=i(this));this.depCount+=1,l(e,"defined",bind(this,function(e){this.defineDep(n,e),this.check()})),this.errback&&l(e,"error",bind(this,this.errback))}t=e.id,r=S[t],hasProp(w,t)||!r||r.enabled||y.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var n=getOwn(S,e.id);n&&!n.enabled&&y.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,n){var t=this.events[e];t||(t=this.events[e]=[]),t.push(n)},emit:function(e,n){each(this.events[e],function(e){e(n)}),"error"===e&&delete this.events[e]}},y={config:q,contextName:e,registry:S,defined:O,urlFetched:j,defQueue:A,Module:x,makeModuleMap:o,nextTick:req.nextTick,onError:c,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var n=q.shim,t={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,n){t[n]?(q[n]||(q[n]={}),mixin(q[n],e,!0,!0)):q[n]=e}),e.bundles&&eachProp(e.bundles,function(e,n){each(e,function(e){e!==n&&(C[e]=n)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=y.makeShimExports(e)),n[t]=e}),q.shim=n),e.packages&&each(e.packages,function(e){var n,t;e="string"==typeof e?{name:e}:e,t=e.name,n=e.location,n&&(q.paths[t]=e.location),q.pkgs[t]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(S,function(e,n){e.inited||e.map.unnormalized||(e.map=o(n))}),(e.deps||e.callback)&&y.require(e.deps||[],e.callback)},makeShimExports:function(e){function n(){var n;return e.init&&(n=e.init.apply(global,arguments)),n||e.exports&&getGlobal(e.exports)}return n},makeRequire:function(n,i){function a(t,r,l){var d,u,p;return i.enableBuildCallback&&r&&isFunction(r)&&(r.__requireJsBuild=!0),"string"==typeof t?isFunction(r)?c(makeError("requireargs","Invalid require call"),l):n&&hasProp(w,t)?w[t](S[n.id]):req.get?req.get(y,t,n,a):(u=o(t,n,!1,!0),d=u.id,hasProp(O,d)?O[d]:c(makeError("notloaded",'Module name "'+d+'" has not been loaded yet for context: '+e+(n?"":". Use require([])")))):(g(),y.nextTick(function(){g(),p=s(o(null,n)),p.skipMap=i.skipMap,p.init(t,r,l,{enabled:!0}),f()}),a)}return i=i||{},mixin(a,{isBrowser:isBrowser,toUrl:function(e){var r,i=e.lastIndexOf("."),a=e.split("/")[0],o="."===a||".."===a;return-1!==i&&(!o||i>1)&&(r=e.substring(i,e.length),e=e.substring(0,i)),y.nameToUrl(t(e,n&&n.id,!0),r,!0)},defined:function(e){return hasProp(O,o(e,n,!1,!0).id)},specified:function(e){return e=o(e,n,!1,!0).id,hasProp(O,e)||hasProp(S,e)}}),n||(a.undef=function(e){d();var t=o(e,n,!0),i=getOwn(S,e);r(e),delete O[e],delete j[t.url],delete M[e],eachReverse(A,function(n,t){n[0]===e&&A.splice(t,1)}),i&&(i.events.defined&&(M[e]=i.events),u(e))}),a},enable:function(e){var n=getOwn(S,e.id);n&&s(e).enable()},completeLoad:function(e){var n,t,r,a=getOwn(q.shim,e)||{},o=a.exports;for(d();A.length;){if(t=A.shift(),null===t[0]){if(t[0]=e,n)break;n=!0}else t[0]===e&&(n=!0);h(t)}if(r=getOwn(S,e),!n&&!hasProp(O,e)&&r&&!r.inited){if(!(!q.enforceDefine||o&&getGlobal(o)))return i(e)?void 0:c(makeError("nodefine","No define call for "+e,null,[e]));h([e,a.deps||[],a.exportsFn])}f()},nameToUrl:function(e,n,t){var r,i,a,o,s,l,c,d=getOwn(q.pkgs,e);if(d&&(e=d),c=getOwn(C,e))return y.nameToUrl(c,n,t);if(req.jsExtRegExp.test(e))s=e+(n||"");else{for(r=q.paths,i=e.split("/"),a=i.length;a>0;a-=1)if(o=i.slice(0,a).join("/"),l=getOwn(r,o)){isArray(l)&&(l=l[0]),i.splice(0,a,l);break}s=i.join("/"),s+=n||(/^data\:|\?/.test(s)||t?"":".js"),s=("/"===s.charAt(0)||s.match(/^[\w\+\.\-]+:/)?"":q.baseUrl)+s}return q.urlArgs?s+((-1===s.indexOf("?")?"?":"&")+q.urlArgs):s},load:function(e,n){req.load(y,e,n)},execCb:function(e,n,t,r){return n.apply(r,t)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var n=m(e);y.completeLoad(n.id)}},onScriptError:function(e){var n=m(e);return i(n.id)?void 0:c(makeError("scripterror","Script error for: "+n.id,e,[n.id]))}},y.require=y.makeRequire(),y}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){return"interactive"===e.readyState?interactiveScript=e:void 0}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.11",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,n,t,r){var i,a,o=defContextName;return isArray(e)||"string"==typeof e||(a=e,isArray(n)?(e=n,n=t,t=r):e=[]),a&&a.context&&(o=a.context),i=getOwn(contexts,o),i||(i=contexts[o]=req.s.newContext(o)),a&&i.configure(a),i.require(e,n,t)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var n=contexts[defContextName];return n.require[e].apply(n,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e){var n=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return n.type=e.scriptType||"text/javascript",n.charset="utf-8",n.async=!0,n},req.load=function(e,n,t){var r,i=e&&e.config||{};if(isBrowser)return r=req.createNode(i,n,t),r.setAttribute("data-requirecontext",e.contextName),r.setAttribute("data-requiremodule",n),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||isOpera?(r.addEventListener("load",e.onScriptLoad,!1),r.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,r.attachEvent("onreadystatechange",e.onScriptLoad)),r.src=t,currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r;if(isWebWorker)try{importScripts(t),e.completeLoad(n)}catch(a){e.onError(makeError("importscripts","importScripts failed for "+n+" at "+t,a,[n]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){return head||(head=e.parentNode),dataMain=e.getAttribute("data-main"),dataMain?(mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0):void 0}),define=function(e,n,t){var r,i;"string"!=typeof e&&(t=n,n=e,e=null),isArray(n)||(t=n,n=null),!n&&isFunction(t)&&(n=[],t.length&&(t.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,t){n.push(t)}),n=(1===t.length?["require"]:["require","exports","module"]).concat(n))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute("data-requiremodule")),i=contexts[r.getAttribute("data-requirecontext")])),(i?i.defQueue:globalDefQueue).push([e,n,t])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this),define("requireLib",function(){}),define("text",["module"],function(e){var n,t,r,i,a=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],o=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,s=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,l="undefined"!=typeof location&&location.href,c=l&&location.protocol&&location.protocol.replace(/\:/,""),d=l&&location.hostname,u=l&&(location.port||void 0),p={},f=e.config&&e.config()||{};return n={version:"2.0.7",strip:function(e){if(e){e=e.replace(o,"");var n=e.match(s);n&&(e=n[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:f.createXhr||function(){var e,n,t;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(n=0;3>n;n+=1){t=a[n];try{e=new ActiveXObject(t)}catch(r){}if(e){a=[t];break}}return e},parseName:function(e){var n,t,r,i=!1,a=e.indexOf("."),o=0===e.indexOf("./")||0===e.indexOf("../");return-1!==a&&(!o||a>1)?(n=e.substring(0,a),t=e.substring(a+1,e.length)):n=e,r=t||n,a=r.indexOf("!"),-1!==a&&(i="strip"===r.substring(a+1),r=r.substring(0,a),t?t=r:n=r),{moduleName:n,ext:t,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,r,i){var a,o,s,l=n.xdRegExp.exec(e);return l?(a=l[2],o=l[3],o=o.split(":"),s=o[1],o=o[0],!(a&&a!==t||o&&o.toLowerCase()!==r.toLowerCase()||(s||o)&&s!==i)):!0},finishLoad:function(e,t,r,i){r=t?n.strip(r):r,f.isBuild&&(p[e]=r),i(r)},load:function(e,t,r,i){if(i.isBuild&&!i.inlineText)return void r();f.isBuild=i.isBuild;var a=n.parseName(e),o=a.moduleName+(a.ext?"."+a.ext:""),s=t.toUrl(o),p=f.useXhr||n.useXhr;!l||p(s,c,d,u)?n.get(s,function(t){n.finishLoad(e,a.strip,t,r)},function(e){r.error&&r.error(e)}):t([o],function(e){n.finishLoad(a.moduleName+"."+a.ext,a.strip,e,r)})},write:function(e,t,r){if(p.hasOwnProperty(t)){var i=n.jsEscape(p[t]);r.asModule(e+"!"+t,"define(function () { return '"+i+"';});\n")}},writeFile:function(e,t,r,i,a){var o=n.parseName(t),s=o.ext?"."+o.ext:"",l=o.moduleName+s,c=r.toUrl(o.moduleName+s)+".js";n.load(l,r,function(){var t=function(e){return i(c,e)};t.asModule=function(e,n){return i.asModule(e,c,n)},n.write(e,l,t,a)},a)}},"node"===f.env||!f.env&&"undefined"!=typeof process&&process.versions&&process.versions.node?(t=require.nodeRequire("fs"),n.get=function(e,n,r){try{var i=t.readFileSync(e,"utf8");0===i.indexOf("﻿")&&(i=i.substring(1)),n(i)}catch(a){r(a)}}):"xhr"===f.env||!f.env&&n.createXhr()?n.get=function(e,t,r,i){var a,o=n.createXhr();if(o.open("GET",e,!0),i)for(a in i)i.hasOwnProperty(a)&&o.setRequestHeader(a.toLowerCase(),i[a]);f.onXhr&&f.onXhr(o,e),o.onreadystatechange=function(){var n,i;4===o.readyState&&(n=o.status,n>399&&600>n?(i=new Error(e+" HTTP status: "+n),i.xhr=o,r(i)):t(o.responseText),f.onXhrComplete&&f.onXhrComplete(o,e))},o.send(null)}:"rhino"===f.env||!f.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?n.get=function(e,n){var t,r,i="utf-8",a=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(a),i)),l="";try{for(t=new java.lang.StringBuffer,r=s.readLine(),r&&r.length()&&65279===r.charAt(0)&&(r=r.substring(1)),null!==r&&t.append(r);null!==(r=s.readLine());)t.append(o),t.append(r);l=String(t.toString())}finally{s.close()}n(l)}:("xpconnect"===f.env||!f.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(r=Components.classes,i=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),n.get=function(e,n){var t,a,o={},s=new FileUtils.File(e);try{t=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),t.init(s,1,0,!1),a=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),a.init(t,"utf-8",t.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),a.readString(t.available(),o),a.close(),t.close(),n(o.value)}catch(l){throw new Error((s&&s.path||"")+": "+l)}}),n}),define("helpers/eventData",["require"],function(){var e;return{message:e}}),define("helpers/events",["require","durandal/app","helpers/eventData"],function(e){var n=e("durandal/app"),t=e("helpers/eventData");n.on("new:event").then(function(e){n.showMessage("Event has been triggered"),t.message=e})}),requirejs.config({paths:{text:"/bower_components/requirejs-text/text",durandal:"/bower_components/durandal/js",plugins:"/bower_components/durandal/js/plugins",transitions:"/bower_components/durandal/js/transitions",knockout:"/bower_components/knockout.js/knockout",mapping:"/bower_components/knockout-mapping/knockout.mapping","knockout-validation":"/bower_components/knockout-validation/Dist/knockout.validation",bootstrap:"/bower_components/bootstrap/dist/js/bootstrap",jquery:"/bower_components/jquery/jquery"},shim:{bootstrap:{deps:["jquery"],exports:"jQuery"}},deps:["knockout","mapping"],callback:function(e,n){e.mapping=n}}),define("main",["durandal/system","durandal/app","durandal/viewLocator","knockout","knockout-validation","helpers/events"],function(e,n,t,r){r.validation.init({grouping:{deep:!0,observable:!0,live:!1}}),n.title="Durandal Starter Kit",n.configurePlugins({router:!0,dialog:!0}),n.start().then(function(){t.useConvention(),n.setRoot("viewmodels/shell","entrance")})}),define("models/Venue",["require","knockout"],function(e){var n=function(){var n=e("knockout"),t=this;t.location={address1:n.observable(),country:n.observable(),geo:{coordinates:n.observable(),type:n.observable()},locality:n.observable(),postal_code:n.observable(),region:n.observable()},t.locu_id=n.observable(),t.name=n.observable()};return n}),define("services/locationService",["require","plugins/http"],function(e){var n=e("plugins/http"),t="/locu",r=function(e){return n.post(t+"/locations",e)};return{locations:r}}),define("viewmodels/event",["require","durandal/app","plugins/router","plugins/http","knockout","helpers/eventData"],function(e){var n=(e("durandal/app"),e("plugins/router"),e("plugins/http"),e("knockout")),t=e("helpers/eventData"),r=function(){var e=this;e.message=n.observable(t.message||"Nothing has happened yet."),e.title=n.observable("Event Receiver")};return r}),define("viewmodels/eventTrigger",["require","durandal/app","plugins/router","plugins/http","knockout"],function(e){var n=e("durandal/app"),t=(e("plugins/router"),e("plugins/http"),e("knockout")),r=function(){var e=this;e.title=t.observable("Event Trigger"),e.triggerEvent=function(){n.trigger("new:event","Hey, you clicked that button")}};return r}),define("viewmodels/flickr",["plugins/http","durandal/app","knockout"],function(e,n,t){return{displayName:"Flickr",images:t.observableArray([]),activate:function(){if(!(this.images().length>0)){var n=this;return e.jsonp("http://api.flickr.com/services/feeds/photos_public.gne",{tags:"mount ranier",tagmode:"any",format:"json"},"jsoncallback").then(function(e){n.images(e.items)})}},select:function(e){e.viewUrl="views/detail",n.showDialog(e)},canDeactivate:function(){return n.showMessage("Are you sure you want to leave this page?","Navigate",["Yes","No"])}}}),define("viewmodels/locations",["require","durandal/app","plugins/router","plugins/http","knockout","knockout-validation","models/Venue","services/locationService"],function(e){var n=e("durandal/app"),t=(e("plugins/router"),e("plugins/http"),e("knockout")),r=(e("knockout-validation"),e("models/Venue")),i=e("services/locationService"),a=function(){var e=this;e.fields=t.observableArray(["name","location"]),e.name=t.observable().extend({required:!0}),e.city=t.observable(),e.state=t.observable(),e.zipCode=t.observable().extend({number:!0}),e.country=t.observable("United States"),e.states=t.observableArray(["","AK","AL","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]),e.searchResults=t.observableArray([]),e.searching=t.observable(!1),e.validationModel=t.validatedObservable({name:e.name,zipCode:e.zipCode}),e.search=function(){e.searchResults([]),e.searching(!0);var a={fields:e.fields(),venue_queries:[{name:e.name(),location:{locality:e.city(),region:e.state(),postal_code:e.zipCode(),country:e.country()}}]};i.locations(a).then(function(n){var i;$.each(n.venues,function(n,a){i=new r,e.searchResults.push(t.mapping.fromJS(a,i))})}).fail(function(e){n.showMessage(e)}).always(function(){e.searching(!1)})}};return a}),define("viewmodels/locationsSingleton",["require","durandal/app","plugins/router","plugins/http","knockout","knockout-validation","models/Venue","services/locationService"],function(e){var n=e("durandal/app"),t=(e("plugins/router"),e("plugins/http"),e("knockout")),r=(e("knockout-validation"),e("models/Venue")),i=e("services/locationService");return{fields:t.observableArray(["name","location"]),name:t.observable().extend({required:!0}),city:t.observable(),state:t.observable(),zipCode:t.observable().extend({number:!0}),country:t.observable("United States"),states:t.observableArray(["","AK","AL","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]),searchResults:t.observableArray([]),searching:t.observable(!1),validationModel:t.validatedObservable({name:self.name,zipCode:self.zipCode}),search:function(){var e=this;e.searchResults([]),e.searching(!0);var a={fields:e.fields(),venue_queries:[{name:e.name(),location:{locality:e.city(),region:e.state(),postal_code:e.zipCode(),country:e.country()}}]};i.locations(a).then(function(n){var i;$.each(n.venues,function(n,a){i=new r,e.searchResults.push(t.mapping.fromJS(a,i))})}).fail(function(e){n.showMessage(e)}).always(function(){e.searching(!1)})}}}),define("viewmodels/shell",["plugins/router","durandal/app"],function(e,n){return{router:e,search:function(){n.showMessage("Search not yet implemented...")},activate:function(){return e.map([{route:"",title:"Welcome",moduleId:"viewmodels/welcome",nav:!0},{route:"flickr",moduleId:"viewmodels/flickr",nav:!0},{route:"locations",moduleId:"viewmodels/locations",nav:!0},{route:"locationsSingleton",moduleId:"viewmodels/locationsSingleton",nav:!0},{route:"event",moduleId:"viewmodels/event",nav:!0},{route:"eventTrigger",moduleId:"viewmodels/eventTrigger",nav:!0}]).buildNavigationModel(),e.activate()}}}),define("viewmodels/welcome",[],function(){var e=function(){this.displayName="Welcome to the Durandal Starter Kit!",this.description="Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make Single Page Applications (SPAs) easy to create and maintain.",this.features=["Clean MV* Architecture","JS & HTML Modularity","Simple App Lifecycle","Eventing, Modals, Message Boxes, etc.","Navigation & Screen State Management","Consistent Async Programming w/ Promises","App Bundling and Optimization","Use any Backend Technology","Built on top of jQuery, Knockout & RequireJS","Integrates with other libraries such as SammyJS & Bootstrap","Make jQuery & Bootstrap widgets templatable and bindable (or build your own widgets)."]};return e}),define("text!views/detail.html",[],function(){return'<div class="modal-content pictureDetail autoclose">\r\n    <div class="modal-header">\r\n        <h3>Details</h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <p data-bind="html: description"></p>\r\n    </div>\r\n</div>'}),define("text!views/event.html",[],function(){return'<div class="container">\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <h1 data-bind="text: title"></h1>\r\n            <div data-bind="text: message"></div>\r\n        </div>\r\n    </div>\r\n</div>'}),define("text!views/eventTrigger.html",[],function(){return'<div class="container">\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <h1 data-bind="text: title"></h1>\r\n            <button class="btn btn-primary" data-bind="click: triggerEvent">Trigger Event</button>\r\n        </div>\r\n    </div>\r\n</div>'}),define("text!views/flickr.html",[],function(){return'<section>\r\n    <h2 data-bind="text: displayName"></h2>\r\n    <div class="row" data-bind="foreach: images">\r\n        <div class="col-sm-6 col-md-3">\r\n            <a href="#" class="thumbnail" data-bind="click:$parent.select">\r\n                <img style="width: 260px; height: 180px;" data-bind="attr: { src: media.m }"/>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</section>'}),define("text!views/locations.html",[],function(){return'<div class="container">\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <form role="form">\r\n                <div class="form-group">\r\n                    <label for="name">Location Name</label>\r\n                    <input type="text" class="form-control" id="name" placeholder="Taco Bell" data-bind="value: name, valueUpdate: \'input\'">\r\n                </div>\r\n                <div class="row">\r\n                    <div class="col-md-4">\r\n                        <div class="form-group">\r\n                            <label for="city">City</label>\r\n                            <input type="text" class="form-control" id="city" placeholder="Beavercreek" data-bind="value: city, valueUpdate: \'input\'">\r\n                        </div>\r\n                    </div>\r\n                    <div class="col-md-4">\r\n                        <div class="form-group">\r\n                            <label for="state">State</label>\r\n                            <select class="form-control" id="state" data-bind="options: states, value: state"></select>\r\n                        </div>\r\n                    </div>\r\n                    <div class="col-md-4">\r\n                        <div class="form-group">\r\n                            <label for="zipCode">Zipcode</label>\r\n                            <input type="text" class="form-control" id="zipCode" placeholder="45431" data-bind="value: zipCode, valueUpdate: \'input\'">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button class="btn btn-primary" data-bind="click: search, enable: validationModel.isValid()">Show Me</button>\r\n            </form>\r\n            <div class="text-center" data-bind="visible: searching">\r\n                <h2>Searching ... <span class="fa fa-spinner fa-spin"></span></h2>\r\n            </div>\r\n            <div data-bind="visible: searchResults().length > 0">\r\n                <hr>\r\n                <h3>Found <span data-bind="text: searchResults().length"></span> location(s):</h3>\r\n                <ul class="list-group" data-bind="foreach: searchResults">\r\n                    <li class="list-group-item">\r\n                        <span data-bind="text: name"></span><br>\r\n                        <span data-bind="text: location.address1"></span><br>\r\n                        <span data-bind="text: location.locality"></span>, <span data-bind="text: location.region"></span> <span data-bind="text: location.postal_code"></span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div data-bind="visible: searchResults().length === 0 && !searching()">\r\n                <h3>No results</h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
}),define("text!views/locationsSingleton.html",[],function(){return'<div class="container">\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <form role="form">\r\n                <div class="form-group">\r\n                    <label for="name">Location Name</label>\r\n                    <input type="text" class="form-control" id="name" placeholder="Taco Bell" data-bind="value: name, valueUpdate: \'input\'">\r\n                </div>\r\n                <div class="row">\r\n                    <div class="col-md-4">\r\n                        <div class="form-group">\r\n                            <label for="city">City</label>\r\n                            <input type="text" class="form-control" id="city" placeholder="Beavercreek" data-bind="value: city, valueUpdate: \'input\'">\r\n                        </div>\r\n                    </div>\r\n                    <div class="col-md-4">\r\n                        <div class="form-group">\r\n                            <label for="state">State</label>\r\n                            <select class="form-control" id="state" data-bind="options: states, value: state"></select>\r\n                        </div>\r\n                    </div>\r\n                    <div class="col-md-4">\r\n                        <div class="form-group">\r\n                            <label for="zipCode">Zipcode</label>\r\n                            <input type="text" class="form-control" id="zipCode" placeholder="45431" data-bind="value: zipCode, valueUpdate: \'input\'">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button class="btn btn-primary" data-bind="click: search, enable: validationModel.isValid()">Show Me</button>\r\n            </form>\r\n            <div class="text-center" data-bind="visible: searching">\r\n                <h2>Searching ... <span class="fa fa-spinner fa-spin"></span></h2>\r\n            </div>\r\n            <div data-bind="visible: searchResults().length > 0">\r\n                <hr>\r\n                <ul class="list-group" data-bind="foreach: searchResults">\r\n                    <li class="list-group-item">\r\n                        <span data-bind="text: name"></span><br>\r\n                        <span data-bind="text: location.address1"></span><br>\r\n                        <span data-bind="text: location.locality"></span>, <span data-bind="text: location.region"></span> <span data-bind="text: location.postal_code"></span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div data-bind="visible: searchResults().length === 0 && !searching()">\r\n                <h3>No results</h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'}),define("text!views/shell.html",[],function(){return'<div>\r\n    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\r\n        <div class="container">\r\n            <div class="navbar-header">\r\n                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\r\n                    <span class="sr-only">Toggle Navigation</span>\r\n                    <span class="icon-bar"></span>\r\n                    <span class="icon-bar"></span>\r\n                    <span class="icon-bar"></span>\r\n                </button>\r\n                <a class="navbar-brand" href="#">\r\n                    <i class="fa fa-home"></i>\r\n                    <span>Durandal</span>\r\n                </a>\r\n            </div>\r\n\r\n            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\r\n                <ul class="nav navbar-nav" data-bind="foreach: router.navigationModel">\r\n                    <li data-bind="css: { active: isActive }">\r\n                        <a data-bind="attr: { href: hash }, text: title"></a>\r\n                    </li>\r\n                </ul>\r\n\r\n                <ul class="nav navbar-nav navbar-right">\r\n                    <li class="loader" data-bind="css: { active: router.isNavigating }">\r\n                        <i class="fa fa-spinner fa-spin fa-2x"></i>\r\n                    </li>\r\n                </ul>\r\n\r\n                <form class="navbar-form navbar-right" role="search" data-bind="submit:search">\r\n                    <div class="form-group">\r\n                        <input type="text" class="form-control" placeholder="Search">\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n\r\n    <div class="page-host" data-bind="router: { transition:\'entrance\' }"></div>\r\n</div>'}),define("text!views/welcome.html",[],function(){return'<section>\r\n    <h2 data-bind="text:displayName"></h2>\r\n    <blockquote data-bind="text:description"></blockquote>\r\n    <h3>Features</h3>\r\n    <ul data-bind="foreach: features">\r\n        <li data-bind="text:$data"></li>\r\n    </ul>\r\n    <div class="alert alert-success">\r\n      <h4>Read Me Please</h4>\r\n        For information about this template and for general documenation please visit <a href="http://www.durandaljs.com">the official site</a> and if you can\'t find \r\n        answers to your questions there, we hope you will join our <a href="https://groups.google.com/forum/?fromgroups#!forum/durandaljs">google group</a>.\r\n    </div>\r\n</section>'});