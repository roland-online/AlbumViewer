import{$ as Xe,$a as O,A as ni,Aa as Br,Ab as Ne,B as Ye,Ba as Ur,Bb as Zr,C as Pr,Ca as P,Cb as Qa,D as Ra,Da as Pe,Db as le,E as Ta,Ea as se,Eb as w,F as Ia,Fa as jr,Fb as Yr,G as ii,Ga as zr,Gb as Ja,H as Ce,Ha as mn,Hb as Kr,I as Oe,Ia as k,Ib as ut,J as ae,Ja as si,Jb as pn,K as y,Ka as li,Kb as es,L as ri,La as Tt,Lb as je,M as Et,Ma as Ga,Mb as ts,N as D,Na as Hr,Nb as te,O as R,Oa as A,Ob as ns,P as ka,Pa as F,Pb as Xr,Q as f,Qa as x,Qb as is,R as S,Ra as qa,S as c,Sa as _e,T as Ke,Ta as fn,U as Fa,Ua as Wa,V as be,Va as Za,W as me,Wa as hn,X as Oa,Xa as he,Y as Pa,Ya as $,Z as fe,Za as G,_ as T,_a as ct,a as m,aa as La,ab as N,b as L,ba as J,bb as Le,ca as I,cb as pe,d as xt,da as Lr,db as ge,e as xa,ea as cn,eb as dt,f as Dt,fa as Va,fb as Ya,g as U,ga as C,gb as ci,h as ce,ha as dn,hb as ee,i as de,ia as Ba,ib as ye,j as ue,ja as Mt,jb as Ue,k as _,ka as oi,kb as q,l as sn,la as st,lb as It,m as Or,ma as Ua,mb as di,n as Da,na as lt,nb as Y,o as V,oa as un,ob as K,p as Ca,pa as ja,pb as Ka,q as Ze,qa as ve,qb as Xa,r as Na,ra as At,rb as $r,s as ti,sa as Vr,sb as ui,t as Ea,ta as b,tb as W,u as Ma,ua as j,ub as mi,v as De,va as za,vb as Z,w as Ct,wa as ai,wb as fi,x as ln,xa as Ha,xb as Gr,y as Nt,ya as Rt,yb as qr,z as Aa,za as $a,zb as Wr}from"./chunk-FA2DNS5J.js";var rs=null;function Ee(){return rs}function Qr(t){rs??=t}var gn=class{},kt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:()=>c(os),providedIn:"platform"})}return t})();var os=(()=>{class t extends kt{_location;_history;_doc=c(T);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ee().getBaseHref(this._doc)}onPopState(e){let i=Ee().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=Ee().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function ls(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function as(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Qe(t){return t&&t[0]!=="?"?`?${t}`:t}var Ft=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:()=>c(od),providedIn:"root"})}return t})(),rd=new f(""),od=(()=>{class t extends Ft{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??c(T).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ls(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Qe(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Qe(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Qe(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(S(kt),S(rd,8))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ot=(()=>{class t{_subject=new U;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=ld(as(ss(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Qe(i))}normalize(e){return t.stripTrailingSlash(sd(this._basePath,ss(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Qe(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Qe(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Qe;static joinWithSlash=ls;static stripTrailingSlash=as;static \u0275fac=function(i){return new(i||t)(S(Ft))};static \u0275prov=D({token:t,factory:()=>ad(),providedIn:"root"})}return t})();function ad(){return new Ot(S(Ft))}function sd(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function ss(t){return t.replace(/\/index\.html$/,"")}function ld(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Jr=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(fe);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(k(li))};static \u0275dir=x({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ve]})}return t})();function bn(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()!==n)continue;let a=o;try{a=decodeURIComponent(o)}catch{}return a.length>1&&a[0]==='"'&&a[a.length-1]==='"'&&(a=a.slice(1,-1)),a}return null}var eo="browser";function cs(t){return t===eo}var vn=class{_doc;constructor(n){this._doc=n}manager},hi=(()=>{class t extends vn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(S(T))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),bi=new f(""),ro=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof hi));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof hi);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new y(-5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(S(bi),S(I))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),to="ng-app-id";function ds(t){for(let n of t)n.remove()}function us(t,n){let e=n.createElement("style");return e.textContent=t,e}function fd(t,n,e,i){let r=t.head?.querySelectorAll(`style[${to}="${n}"],link[${to}="${n}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(to),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function io(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var oo=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,fd(e,i,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,us);i?.forEach(r=>this.addUsage(r,this.external,io))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(ds(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ds(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,us(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,io(i,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of i.elements)o.parentNode===e?o.remove():r.push(o);i.elements=r}}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(S(T),S(dn),S(st,8),S(Mt))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),no={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ao=/%COMP%/g;var fs="%COMP%",hd=`_nghost-${fs}`,pd=`_ngcontent-${fs}`,gd=!0,bd=new f("",{factory:()=>gd}),vd=new f("");function _d(t){return pd.replace(ao,t)}function yd(t){return hd.replace(ao,t)}function hs(t,n){return n.map(e=>e.replace(ao,t))}var Sn=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,i,r,o,a,l,s=null,d=null,u=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=l,this.nonce=s,this.tracingService=d,this.cssVarNamespace=u??"",this.defaultRenderer=new _n(e,a,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof gi?r.applyToHost(e):r instanceof yn&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,l=this.ngZone,s=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(i.encapsulation){case ai.Emulated:o=new gi(s,d,i,this.appId,u,a,l,h,this.cssVarNamespace);break;case ai.ShadowDom:return new pi(s,e,i,a,l,this.nonce,h,this.cssVarNamespace,d);case ai.ExperimentalIsolatedShadowDom:return new pi(s,e,i,a,l,this.nonce,h,this.cssVarNamespace);default:o=new yn(s,d,i,u,a,l,h,this.cssVarNamespace);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(S(ro),S(mn),S(dn),S(bd),S(T),S(I),S(st),S(Br,8),S(vd,8))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),_n=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r,o=""){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(no[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(ms(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(ms(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new y(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=no[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=no[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(Rt.DashCase|Rt.Important)?n.style.setProperty(e,i,r&Rt.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||i&Rt.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=Ee().getGlobalEventTarget(this.doc,n),!n))throw new y(-5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function ms(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var pi=class extends _n{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,l,s,d){super(n,r,o,l,s),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=i.styles;u=hs(i.id,u).map(p=>p.replace(/%NS%/g,s));for(let p of u){let M=document.createElement("style");a&&M.setAttribute("nonce",a),M.textContent=p,this.shadowRoot.appendChild(M)}let h=i.getExternalStyles?.();if(h)for(let p of h){let M=io(p,r);a&&M.setAttribute("nonce",a),this.shadowRoot.appendChild(M)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},yn=class extends _n{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,l,s,d){super(n,o,a,l,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=i.styles,h=d?hs(d,u):u;this.styles=h.map(p=>p.replace(/%NS%/g,s)),this.styleUrls=i.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&$a.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},gi=class extends yn{contentAttr;hostAttr;constructor(n,e,i,r,o,a,l,s,d){let u=r+"-"+i.id;super(n,e,i,o,a,l,s,d,u),this.contentAttr=_d(u),this.hostAttr=yd(u)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var vi=class t extends gn{supportsDOMEvents=!0;static makeCurrent(){Qr(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=Sd();return e==null?null:wd(e)}resetBaseElement(){wn=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return bn(document.cookie,n)}},wn=null;function Sd(){return wn=wn||document.head.querySelector("base"),wn?wn.getAttribute("href"):null}function wd(t){return new URL(t,document.baseURI).pathname}var ps=["alt","control","meta","shift"],xd={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Dd={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},gs=(()=>{class t extends vn{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),l=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ee().onAndCancel(e,a.domEventName,l,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",l=i.indexOf("code");if(l>-1&&(i.splice(l,1),a="code."),ps.forEach(d=>{let u=i.indexOf(d);u>-1&&(i.splice(u,1),a+=d+".")}),a+=o,i.length!=0||o.length===0)return null;let s={};return s.domEventName=r,s.fullKey=a,s}static matchEventFullKeyCode(e,i){let r=xd[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ps.forEach(a=>{if(a!==r){let l=Dd[a];l(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(S(T))};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();async function so(t,n,e){let i=m({rootComponent:t},Cd(n,e));return ts(i)}function Cd(t,n){return{platformRef:n?.platformRef,appProviders:[...Rd,...t?.providers??[]],platformProviders:Ad}}function Nd(){vi.makeCurrent()}function Ed(){return new Lr}function Md(){return za(document),document}var Ad=[{provide:Mt,useValue:eo},{provide:Ba,useValue:Nd,multi:!0},{provide:T,useFactory:Md}];var Rd=[{provide:Fa,useValue:"root"},{provide:Lr,useFactory:Ed},{provide:bi,useClass:hi,multi:!0},{provide:bi,useClass:gs,multi:!0},Sn,{provide:mn,useClass:oo},{provide:oo,useExisting:mn},ro,{provide:Pe,useExisting:Sn},[]];var He=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,i]of n.headers.entries())this.headers.set(e,i),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=n.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(o)?o:[o],l=this.headers.get(e);if(!l)return;l=l.filter(s=>a.indexOf(s)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var yi=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Si=class{encodeKey(n){return bs(n)}encodeValue(n){return bs(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Td(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,l]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],s=e.get(a)||[];s.push(l),e.set(a,s)}),e}var Id=/%(\d[a-f0-9])/gi,kd={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function bs(t){return encodeURIComponent(t).replace(Id,(n,e)=>kd[e]??n)}function _i(t){return`${t}`}var ze=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Si,n.fromString){if(n.fromObject)throw new y(2805,!1);this.map=Td(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(_i):[_i(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=n.op==="a"?(this.map.get(n.param)||[]).slice():[];e.push(_i(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=(this.map.get(n.param)||[]).slice(),r=i.indexOf(_i(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function Fd(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function vs(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function _s(t){return typeof Blob<"u"&&t instanceof Blob}function ys(t){return typeof FormData<"u"&&t instanceof FormData}function Od(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var lo="Content-Type",Ss="Accept",xs="text/plain",Ds="application/json",Pd=`${Ds}, ${xs}, */*`,Pt=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(Fd(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new y(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new He,this.context??=new yi,!this.params)this.params=new ze,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let l=e,s="",d=e.indexOf("#");d!==-1&&(s=e.substring(d),l=e.substring(0,d));let u=l.indexOf("?"),h=u===-1?"?":u<l.length-1?"&":"";this.urlWithParams=l+h+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||vs(this.body)||_s(this.body)||ys(this.body)||Od(this.body)?this.body:this.body instanceof ze?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ys(this.body)?null:_s(this.body)?this.body.type||null:vs(this.body)?null:typeof this.body=="string"?xs:this.body instanceof ze?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ds:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,l=n.cache||this.cache,s=n.mode||this.mode,d=n.redirect||this.redirect,u=n.credentials||this.credentials,h=n.referrer??this.referrer,p=n.integrity||this.integrity,M=n.referrerPolicy||this.referrerPolicy,z=n.transferCache??this.transferCache,H=n.timeout??this.timeout,B=n.body!==void 0?n.body:this.body,Re=n.withCredentials??this.withCredentials,re=n.reportProgress??this.reportProgress,oe=n.reportUploadProgress??this.reportUploadProgress,rn=n.reportDownloadProgress??this.reportDownloadProgress,qe=n.headers||this.headers,on=n.params||this.params,an=n.context??this.context;return n.setHeaders!==void 0&&(qe=Object.keys(n.setHeaders).reduce((wt,We)=>wt.set(We,n.setHeaders[We]),qe)),n.setParams&&(on=Object.keys(n.setParams).reduce((wt,We)=>wt.set(We,n.setParams[We]),on)),new t(e,i,B,{params:on,headers:qe,context:an,reportProgress:re,reportUploadProgress:oe,reportDownloadProgress:rn,responseType:r,withCredentials:Re,transferCache:z,keepalive:o,cache:l,priority:a,timeout:H,mode:s,redirect:d,credentials:u,referrer:h,integrity:p,referrerPolicy:M})}},ft=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(ft||{}),Lt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new He,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},wi=class t extends Lt{constructor(n={}){super(n)}type=ft.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},xn=class t extends Lt{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=ft.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},mt=class extends Lt{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},Ld=200;var Vd=/^\)\]\}',?\n/,ub=1024*1024,Cs=new f("",{factory:()=>null}),xi=(()=>{class t{fetchImpl=c(mo,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=c(I);destroyRef=c(Xe);maxResponseSize=c(Cs);handle(e){return new Dt(i=>{let r=new AbortController,o=!1,a={next:s=>{s.type===ft.Response&&(o=!0),i.next(s)},error:s=>{o=!0,i.error(s)},complete:()=>{o=!0,i.complete()}};this.doRequest(e,r.signal,a).then(fo,s=>a.error(new mt({error:s})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!o&&!r.signal.aborted&&r.abort()}})}async doRequest(e,i,r){let o=this.createRequestInit(e),a;try{let B=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,m({signal:i},o)));Bd(B),r.next({type:ft.Sent}),a=await B}catch(B){r.error(new mt({error:B,status:B.status??0,statusText:B.statusText,url:e.urlWithParams,headers:B.headers}));return}let l=new He(a.headers),s=a.statusText,d=a.url||e.urlWithParams,u=a.status,h=null,p=e.reportProgress||e.reportDownloadProgress;if(p&&r.next(new wi({headers:l,status:u,statusText:s,url:d})),a.body){let B=a.headers.get(lo)??"",Re=a.headers.get("content-length"),re=Re!==null?Number(Re):NaN;this.maxResponseSize!==null&&Number.isFinite(re)&&re>this.maxResponseSize&&ws(this.maxResponseSize);let oe=[],rn=a.body.getReader(),qe=0,on,an,wt=typeof Zone<"u"&&Zone.current,We=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await rn.cancel(),We=!0;break}let{done:kr,value:Fr}=await rn.read();if(kr)break;if(oe.push(Fr),qe+=Fr.length,this.maxResponseSize!==null&&qe>this.maxResponseSize&&(await rn.cancel(),ws(this.maxResponseSize)),p){an=e.responseType==="text"?(an??"")+(on??=co(B)).decode(Fr,{stream:!0}):void 0;let wa=()=>r.next({type:ft.DownloadProgress,total:Number.isFinite(re)?re:void 0,loaded:qe,partialText:an});wt?wt.run(wa):wa()}}}),We){r.complete();return}let id=this.concatChunks(oe,qe);try{h=this.parseBody(e,id,B,u)}catch(kr){r.error(new mt({error:kr,headers:new He(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=h?Ld:0);let M=u>=200&&u<300,z=a.redirected,H=a.type;M?(r.next(new xn({body:h,headers:l,status:u,statusText:s,url:d,redirected:z,responseType:H})),r.complete()):r.error(new mt({error:h,headers:l,status:u,statusText:s,url:d,redirected:z,responseType:H}))}parseBody(e,i,r,o){switch(e.responseType){case"json":let a=co(r).decode(i).replace(Vd,"");if(a==="")return null;try{return JSON.parse(a)}catch(l){if(o<200||o>=300)return a;throw l}case"text":return co(r).decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new y(2824,!1);let i={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>i[o]=a.join(",")),e.headers.has(Ss)||(i[Ss]=Pd),!e.headers.has(lo)){let o=e.detectContentTypeHeader();o!==null&&(i[lo]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),mo=class{};function fo(){}function Bd(t){t.then(fo,fo)}function ws(t){throw new y(-2825,!1)}var Ud=/charset=\s*["']?([^;"'\s]+)["']?/i;function co(t){let n=t.match(Ud);if(n!==null)try{return new TextDecoder(n[1])}catch{}return new TextDecoder}var jd=new f("",{factory:()=>!0}),zd="XSRF-TOKEN",Hd=new f("",{factory:()=>zd}),$d="X-XSRF-TOKEN",Gd=new f("",{factory:()=>$d}),qd=(()=>{class t{cookieName=c(Hd);doc=c(T);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=bn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Ns=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=S(qd),r},providedIn:"root"})}return t})();function Es(t,n){if(!c(jd)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=c(kt).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return n(t)}catch{return n(t)}let e=c(Ns).getToken(),i=c(Gd);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function Wd(t,n){return n(t)}function Zd(t,n,e){return(i,r)=>me(e,()=>n(i,o=>t(o,r)))}var ho=new f("",{factory:()=>[Es]}),Ms=new f(""),As=new f("",{factory:()=>!0});var po=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=S(xi),r},providedIn:"root"})}return t})();var Di=(()=>{class t{backend;injector;chain=null;pendingTasks=c(ja);contributeToStability=c(As);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let r=this.injector.get(Ci,null,{skipSelf:!0}),o=r!==null&&this.backend===r,a=this.injector.get(Ms,[],o?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(ho),...a]));this.chain=l.reduceRight((s,d)=>Zd(s,d,this.injector),Wd)}let i=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return w(()=>i(e,o=>this.backend.handle(o))).pipe(ni(r))}else return w(()=>i(e,r=>this.backend.handle(r)))}static \u0275fac=function(i){return new(i||t)(S(po),S(be))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ci=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=D({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=S(Di),r},providedIn:"root"})}return t})();function uo(t,n){return m({body:n},t)}var Ni=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Pt)o=e;else{let s;r.headers instanceof He?s=r.headers:s=new He(r.headers);let d;r.params&&(r.params instanceof ze?d=r.params:d=new ze({fromObject:r.params})),o=new Pt(e,i,r.body!==void 0?r.body:null,{headers:s,context:r.context,params:d,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=_(o).pipe(ln(s=>this.handler.handle(s)));if(e instanceof Pt||r.observe==="events")return a;let l=a.pipe(De(s=>s instanceof xn));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return l.pipe(V(s=>{if(s.body!==null&&!(s.body instanceof ArrayBuffer))throw new y(2806,!1);return s.body}));case"blob":return l.pipe(V(s=>{if(s.body!==null&&!(s.body instanceof Blob))throw new y(2807,!1);return s.body}));case"text":return l.pipe(V(s=>{if(s.body!==null&&typeof s.body!="string")throw new y(2808,!1);return s.body}));default:return l.pipe(V(s=>s.body))}case"response":return l;default:throw new y(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new ze().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,uo(r,i))}post(e,i,r={}){return this.request("POST",e,uo(r,i))}put(e,i,r={}){return this.request("PUT",e,uo(r,i))}static \u0275fac=function(i){return new(i||t)(S(Ci))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var go=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t[t.Xhr=7]="Xhr",t})(go||{});function Yd(t,n){return{\u0275kind:t,\u0275providers:n}}function bo(...t){let n=[Ni,xi,Di,{provide:Ci,useExisting:Di},{provide:po,useFactory:()=>c(xi)},{provide:ho,useValue:Es,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Ke(n)}function vo(t){return Yd(go.Interceptors,t.map(n=>({provide:ho,useValue:n,multi:!0})))}var Rs=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(S(T))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var g="primary",Ln=Symbol("RouteTitle"),xo=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function pt(t){return new xo(t)}function _o(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Us(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let s={},d=t.slice(0,i.length);return _o(i,d,s)?{consumed:d,posParams:s}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let l={};return!_o(o,t.slice(0,o.length),l)||!_o(a,t.slice(t.length-a.length),l)?null:{consumed:t,posParams:l}}function Ii(t){return new Promise((n,e)=>{t.pipe(Ye()).subscribe({next:i=>n(i),error:i=>e(i)})})}function Xd(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Ve(t[e],n[e]))return!1;return!0}function Ve(t,n){let e=t?Do(t):void 0,i=n?Do(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!js(t[r],n[r]))return!1;return!0}function Do(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function js(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function Qd(t){return t.length>0?t[t.length-1]:null}function vt(t){return Or(t)?t:Tt(t)?ue(Promise.resolve(t)):_(t)}function zs(t){return Or(t)?Ii(t):Promise.resolve(t)}var Jd={exact:Gs,subset:qs},Hs={exact:eu,subset:tu,ignored:()=>!0},$s={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Co={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Ts(t,n,e){return Jd[e.paths](t.root,n.root,e.matrixParams)&&Hs[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function eu(t,n){return Ve(t,n)}function Gs(t,n,e){if(!ht(t.segments,n.segments)||!Ai(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!Gs(t.children[i],n.children[i],e))return!1;return!0}function tu(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>js(t[e],n[e]))}function qs(t,n,e){return Ws(t,n,n.segments,e)}function Ws(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!ht(r,e)||n.hasChildren()||!Ai(r,e,i))}else if(t.segments.length===e.length){if(!ht(t.segments,e)||!Ai(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!qs(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ht(t.segments,r)||!Ai(t.segments,r,i)||!t.children[g]?!1:Ws(t.children[g],n,o,i)}}function Ai(t,n,e){return n.every((i,r)=>Hs[e](t[r].parameters,i.parameters))}var we=class{root;queryParams;fragment;_queryParamMap;constructor(n=new E([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=pt(this.queryParams),this._queryParamMap}toString(){return ru.serialize(this)}},E=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ri(this)}},Je=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=pt(this.parameters),this._parameterMap}toString(){return Ys(this)}};function nu(t,n){return ht(t,n)&&t.every((e,i)=>Ve(e.parameters,n[i].parameters))}function ht(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function iu(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===g&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==g&&(e=e.concat(n(r,i)))}),e}var qt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>new et})}return t})(),et=class{parse(n){let e=new Eo(n);return new we(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Dn(n.root,!0)}`,i=su(n.queryParams),r=typeof n.fragment=="string"?`#${ou(n.fragment)}`:"";return`${e}${i}${r}`}},ru=new et;function Ri(t){return t.segments.map(n=>Ys(n)).join("/")}function Dn(t,n){if(!t.hasChildren())return Ri(t);if(n){let e=t.children[g]?Dn(t.children[g],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==g&&i.push(`${r}:${Dn(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=iu(t,(i,r)=>r===g?[Dn(t.children[g],!1)]:[`${r}:${Dn(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[g]!=null?`${Ri(t)}/${e[0]}`:`${Ri(t)}/(${e.join("//")})`}}function Zs(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ei(t){return Zs(t).replace(/%3B/gi,";")}function ou(t){return encodeURI(t)}function No(t){return Zs(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ti(t){return decodeURIComponent(t)}function Is(t){return Ti(t.replace(/\+/g,"%20"))}function Ys(t){return`${No(t.path)}${au(t.parameters)}`}function au(t){return Object.entries(t).map(([n,e])=>`;${No(n)}=${No(e)}`).join("")}function su(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Ei(e)}=${Ei(r)}`).join("&"):`${Ei(e)}=${Ei(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var lu=/^[^\/()?;#]+/;function yo(t){let n=t.match(lu);return n?n[0]:""}var cu=/^[^\/()?;=#]+/;function du(t){let n=t.match(cu);return n?n[0]:""}var uu=/^[^=?&#]+/;function mu(t){let n=t.match(uu);return n?n[0]:""}var fu=/^[^&#]+/;function hu(t){let n=t.match(fu);return n?n[0]:""}var Eo=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new E([],{}):new E([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new y(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[g]=new E(e,i)),r}parseSegment(){let n=yo(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new y(4009,!1);return this.capture(n),new Je(Ti(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=du(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=yo(this.remaining);r&&(i=r,this.capture(i))}n[Ti(e)]=Ti(i)}parseQueryParam(n){let e=mu(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=hu(this.remaining);a&&(i=a,this.capture(i))}let r=Is(e),o=Is(i);if(Object.hasOwn(n,r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=yo(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new y(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=g);let l=this.parseChildren(e+1);i[a??g]=Object.keys(l).length===1&&l[g]?l[g]:new E([],l),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new y(4011,!1)}};function Ks(t){return t.segments.length>0?new E([],{[g]:t}):t}function Xs(t){let n=Object.create(null);for(let[i,r]of Object.entries(t.children)){let o=Xs(r);if(i===g&&o.segments.length===0&&o.hasChildren())for(let[a,l]of Object.entries(o.children))n[a]=l;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new E(t.segments,n);return pu(e)}function pu(t){if(t.numberOfChildren===1&&t.children[g]){let n=t.children[g];return new E(t.segments.concat(n.segments),n.children)}return t}function tt(t){return t instanceof we}function Qs(t,n,e=null,i=null,r=new et){let o=Js(t);return el(o,n,e,i,r)}function Js(t){let n;function e(o){let a={};for(let s of o.children){let d=e(s);a[s.outlet]=d}let l=new E(o.url,a);return o===t&&(n=l),l}let i=e(t.root),r=Ks(i);return n??r}function el(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return So(o,o,o,e,i,r);let a=gu(n);if(a.toRoot())return So(o,o,new E([],{}),e,i,r);let l=bu(a,o,t),s=l.processChildren?Nn(l.segmentGroup,l.index,a.commands):nl(l.segmentGroup,l.index,a.commands);return So(o,l.segmentGroup,s,e,i,r)}function ki(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function An(t){return typeof t=="object"&&t!=null&&t.outlets}function ks(t,n,e){t||="\u0275";let i=new we;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function So(t,n,e,i,r,o){let a={};for(let[d,u]of Object.entries(i??{}))a[d]=Array.isArray(u)?u.map(h=>ks(d,h,o)):ks(d,u,o);let l;t===n?l=e:l=tl(t,n,e);let s=Ks(Xs(l));return new we(s,a,r)}function tl(t,n,e){let i=Object.create(null);return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=tl(o,n,e)}),new E(t.segments,i)}var Fi=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&ki(i[0]))throw new y(4003,!1);let r=i.find(An);if(r&&r!==Qd(i))throw new y(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function gu(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Fi(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let l={};return Object.entries(o.outlets).forEach(([s,d])=>{l[s]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:l}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((l,s)=>{s==0&&l==="."||(s==0&&l===""?e=!0:l===".."?n++:l!=""&&r.push(l))}),r):[...r,o]},[]);return new Fi(e,n,i)}var Bt=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function bu(t,n,e){if(t.isAbsolute)return new Bt(n,!0,0);if(!e)return new Bt(n,!1,NaN);if(e.parent===null)return new Bt(e,!0,0);let i=ki(t.commands[0])?0:1,r=e.segments.length-1+i;return vu(e,r,t.numberOfDoubleDots)}function vu(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new y(4005,!1);r=i.segments.length}return new Bt(i,!1,r-o)}function _u(t){return An(t[0])?t[0].outlets:{[g]:t}}function nl(t,n,e){if(t??=new E([],{}),t.segments.length===0&&t.hasChildren())return Nn(t,n,e);let i=yu(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new E(t.segments.slice(0,i.pathIndex),{});return o.children[g]=new E(t.segments.slice(i.pathIndex),t.children),Nn(o,0,r)}else return i.match&&r.length===0?new E(t.segments,{}):i.match&&!t.hasChildren()?Mo(t,n,e):i.match?Nn(t,0,r):Mo(t,n,e)}function Nn(t,n,e){if(e.length===0)return new E(t.segments,{});{let i=_u(e),r=Object.create(null);if(Object.keys(i).some(o=>o!==g)&&t.children[g]&&t.numberOfChildren===1&&t.children[g].segments.length===0){let o=Nn(t.children[g],n,e);return new E(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=nl(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new E(t.segments,r)}}function yu(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],l=e[i];if(An(l))break;let s=`${l}`,d=i<e.length-1?e[i+1]:null;if(r>0&&s===void 0)break;if(s&&d&&typeof d=="object"&&d.outlets===void 0){if(!Os(s,d,a))return o;i+=2}else{if(!Os(s,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Mo(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(An(o)){let s=Su(o.outlets);return new E(i,s)}if(r===0&&ki(e[0])){let s=t.segments[n];i.push(new Je(s.path,Fs(e[0]))),r++;continue}let a=An(o)?o.outlets[g]:`${o}`,l=r<e.length-1?e[r+1]:null;a&&l&&ki(l)?(i.push(new Je(a,Fs(l))),r+=2):(i.push(new Je(a,{})),r++)}return new E(i,{})}function Su(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Mo(new E([],{}),0,i))}),n}function Fs(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function Os(t,n,e){return t==e.path&&Ve(n,e.parameters)}var En="imperative",X=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(X||{}),xe=class{id;url;constructor(n,e){this.id=n,this.url=e}},gt=class extends xe{type=X.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Be=class extends xe{urlAfterRedirects;type=X.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ne=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(ne||{}),Rn=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Rn||{}),Me=class extends xe{reason;code;type=X.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function il(t){return t instanceof Me&&(t.code===ne.Redirect||t.code===ne.SupersededByNewNavigation)}var Ge=class extends xe{reason;code;type=X.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},bt=class extends xe{error;target;type=X.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Tn=class extends xe{urlAfterRedirects;state;type=X.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Oi=class extends xe{urlAfterRedirects;state;type=X.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Pi=class extends xe{urlAfterRedirects;state;shouldActivate;type=X.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Li=class extends xe{urlAfterRedirects;state;type=X.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vi=class extends xe{urlAfterRedirects;state;type=X.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Bi=class{route;type=X.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ui=class{route;type=X.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ji=class{snapshot;type=X.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zi=class{snapshot;type=X.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Hi=class{snapshot;type=X.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$i=class{snapshot;type=X.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var jt=class{},In=class{},zt=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function wu(t){return!(t instanceof jt)&&!(t instanceof zt)&&!(t instanceof In)}var Gi=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Wt(this.rootInjector)}},Wt=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Gi(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(S(be))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qi=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Ao(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Ao(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Ro(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Ro(n,this._root).map(e=>e.value)}};function Ao(t,n){if(t===n.value)return n;for(let e of n.children){let i=Ao(t,e);if(i)return i}return null}function Ro(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Ro(t,e);if(i.length)return i.unshift(n),i}return[]}var Se=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Vt(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var kn=class extends qi{snapshot;constructor(n,e){super(n),this.snapshot=e,Bo(this,n)}toString(){return this.snapshot.toString()}};function rl(t,n){let e=xu(t,n),i=new ce([new Je("",{})]),r=new ce({}),o=new ce({}),a=new ce({}),l=new ce(""),s=new Ie(i,r,a,l,o,g,t,e.root);return s.snapshot=e.root,new kn(new Se(s,[]),e)}function xu(t,n){let e={},i={},r={},a=new Ht([],e,r,"",i,g,t,null,{},n);return new Fn("",new Se(a,[]))}var Ie=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(n,e,i,r,o,a,l,s){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=l,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(V(d=>d[Ln]))??_(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(V(n=>pt(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(V(n=>pt(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},Du="always";function Vo(t,n,e){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:m(m({},n.params),t.params),data:m(m({},n.data),t.data),resolve:m(m(m(m({},t.data),n.data),r?.data),t._resolvedData)}:i={params:m({},t.params),data:m({},t.data),resolve:m(m({},t.data),t._resolvedData??{})},r&&al(r)&&(i.resolve[Ln]=r.title),i}var Ht=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ln]}constructor(n,e,i,r,o,a,l,s,d,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=l,this.routeConfig=s,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=pt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=pt(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Fn=class extends qi{url;constructor(n,e){super(e),this.url=n,Bo(this,e)}toString(){return ol(this._root)}};function Bo(t,n){n.value._routerState=t,n.children.forEach(e=>Bo(t,e))}function ol(t){let n=t.children.length>0?` { ${t.children.map(ol).join(", ")} } `:"";return`${t.value}${n}`}function wo(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Ve(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Ve(n.params,e.params)||t.paramsSubject.next(e.params),Xd(n.url,e.url)||t.urlSubject.next(e.url),Ve(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function To(t,n){let e=Ve(t.params,n.params)&&nu(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||To(t.parent,n.parent))}function al(t){return typeof t.title=="string"||t.title===null}var sl=new f(""),Vn=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=g;activateEvents=new J;deactivateEvents=new J;attachEvents=new J;detachEvents=new J;routerOutletData=ut();parentContexts=c(Wt);location=c(li);changeDetector=c(je);inputBinder=c(Ki,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new y(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new y(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new y(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new y(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,s=new Io(e,l,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:s,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ve]})}return t})(),Io=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Ie?this.route:n===Wt?this.childContexts:n===sl?this.outletData:this.parent.get(n,e)}},Ki=new f("");var Uo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Le(0,"router-outlet")},dependencies:[Vn],encapsulation:2,changeDetection:1})}return t})();function jo(t){let n=t.children&&t.children.map(jo),e=n?L(m({},t),{children:n}):m({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==g&&(e.component=Uo),e}function Cu(t,n,e){let i=new Set,r=On(t,n._root,e?e._root:void 0,i);return{newlyCreatedRoutes:i,state:new kn(r,n)}}function On(t,n,e,i){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=n.value;let o=Nu(t,n,e,i);return new Se(r,o)}else{if(t.shouldAttach(n.value)){let a=t.retrieve(n.value);if(a!==null){let l=a.route;return l.value._futureSnapshot=n.value,l.children=n.children.map(s=>On(t,s,void 0,i)),l}}let r=Eu(n.value);i.add(r);let o=n.children.map(a=>On(t,a,void 0,i));return new Se(r,o)}}function Nu(t,n,e,i){return n.children.map(r=>{for(let o of e.children)if(t.shouldReuseRoute(r.value,o.value.snapshot))return On(t,r,o,i);return On(t,r,void 0,i)})}function Eu(t){return new Ie(new ce(t.url),new ce(t.params),new ce(t.queryParams),new ce(t.fragment),new ce(t.data),t.outlet,t.component,t)}var $t=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},ll="ngNavigationCancelingError";function Wi(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=tt(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=cl(!1,ne.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function cl(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ll]=!0,e.cancellationCode=n,e}function Mu(t){return dl(t)&&tt(t.url)}function dl(t){return!!t&&t[ll]}var ko=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),wo(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Vt(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Vt(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),l=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:l})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Vt(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,i){let r=Vt(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new $i(o.value.snapshot))}),n.children.length&&this.forwardEvent(new zi(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(wo(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),wo(l.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},Zi=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Ut=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Au(t,n,e){let i=t._root,r=n?n._root:null;return Cn(i,r,e,[i.value])}function Ru(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Zt(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!ka(t)?t:n.get(t):i}function Cn(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Vt(n);return t.children.forEach(a=>{Tu(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,l])=>Mn(l,e.getContext(a),r)),r}function Tu(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,l=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=Iu(a,o,o.routeConfig.runGuardsAndResolvers);s?r.canActivateChecks.push(new Zi(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Cn(t,n,l?l.children:null,i,r):Cn(t,n,e,i,r),s&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new Ut(l.outlet.component,a))}else a&&Mn(n,l,r),r.canActivateChecks.push(new Zi(i)),o.component?Cn(t,null,l?l.children:null,i,r):Cn(t,null,e,i,r);return r}function Iu(t,n,e){if(typeof e=="function")return me(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!ht(t.url,n.url);case"pathParamsOrQueryParamsChange":return!ht(t.url,n.url)||!Ve(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!To(t,n)||!Ve(t.queryParams,n.queryParams);default:return!To(t,n)}}function Mn(t,n,e){let i=Vt(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?Mn(a,n.children.getContext(o),e):Mn(a,null,e):Mn(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Ut(n.outlet.component,r)):e.canDeactivateChecks.push(new Ut(null,r)):e.canDeactivateChecks.push(new Ut(null,r))}function Bn(t){return typeof t=="function"}function ku(t){return typeof t=="boolean"}function Fu(t){return t&&Bn(t.canLoad)}function Ou(t){return t&&Bn(t.canActivate)}function Pu(t){return t&&Bn(t.canActivateChild)}function Lu(t){return t&&Bn(t.canDeactivate)}function Vu(t){return t&&Bn(t.canMatch)}function ul(t){return t instanceof Da||t?.name==="EmptyError"}var Mi=Symbol("INITIAL_VALUE");function Gt(){return Ce(t=>Ca(t.map(n=>n.pipe(Nt(1),ii(Mi)))).pipe(V(n=>{for(let e of n)if(e!==!0){if(e===Mi)return Mi;if(e===!1||Bu(e))return e}return!0}),De(n=>n!==Mi),Nt(1)))}function Bu(t){return tt(t)||t instanceof $t}function ml(t){return t.aborted?_(void 0).pipe(Nt(1)):new Dt(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function fl(t){return Oe(ml(t))}function Uu(t){return Ze(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?_(L(m({},n),{guardsResult:!0})):ju(o,e,i).pipe(Ze(a=>a&&ku(a)?zu(e,r,t):_(a)),V(a=>L(m({},n),{guardsResult:a})))})}function ju(t,n,e){return ue(t).pipe(Ze(i=>Wu(i.component,i.route,e,n)),Ye(i=>i!==!0,!0))}function zu(t,n,e){return ue(n).pipe(ln(i=>Na($u(i.route.parent,e),Hu(i.route,e),qu(t,i.path),Gu(t,i.route))),Ye(i=>i!==!0,!0))}function Hu(t,n){return t!==null&&n&&n(new Hi(t)),_(!0)}function $u(t,n){return t!==null&&n&&n(new ji(t)),_(!0)}function Gu(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return _(!0);let i=e.map(r=>ti(()=>{let o=n._environmentInjector,a=Zt(r,o),l=Ou(a)?a.canActivate(n,t):me(o,()=>a(n,t));return vt(l).pipe(Ye())}));return _(i).pipe(Gt())}function qu(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>Ru(o)).filter(o=>o!==null).map(o=>ti(()=>{let a=o.guards.map(l=>{let s=o.node._environmentInjector,d=Zt(l,s),u=Pu(d)?d.canActivateChild(e,t):me(s,()=>d(e,t));return vt(u).pipe(Ye())});return _(a).pipe(Gt())}));return _(r).pipe(Gt())}function Wu(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return _(!0);let o=r.map(a=>{let l=n._environmentInjector,s=Zt(a,l),d=Lu(s)?s.canDeactivate(t,n,e,i):me(l,()=>s(t,n,e,i));return vt(d).pipe(Ye())});return _(o).pipe(Gt())}function Zu(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return _(!0);let a=o.map(l=>{let s=Zt(l,t),d=Fu(s)?s.canLoad(n,e):me(t,()=>s(n,e)),u=vt(d);return r?u.pipe(fl(r)):u});return _(a).pipe(Gt(),hl(i))}function hl(t){return xa(ae(n=>{if(typeof n!="boolean")throw Wi(t,n)}),V(n=>n===!0))}function Yu(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return _(!0);let l=a.map(s=>{let d=Zt(s,t),u=Vu(d)?d.canMatch(n,e,r):me(t,()=>d(n,e,r));return vt(u).pipe(fl(o))});return _(l).pipe(Gt(),hl(i))}var $e=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Pn=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function Ku(t){throw new y(4e3,!1)}function Xu(t){throw cl(!1,ne.GuardRejected)}var Fo=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[g])throw Ku(`${n.redirectTo}`);r=r.children[g]}}async applyRedirectCommands(n,e,i,r,o){let a=await Qu(e,r,o);if(a instanceof we)throw new Pn(a);let l=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Pn(l);return l}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new we(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let l=o.substring(1);i[r]=e[l]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a=Object.create(null);return Object.entries(e.children).forEach(([l,s])=>{a[l]=this.createSegmentGroup(n,s,i,r)}),new E(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new y(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function Qu(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Ii(vt(me(e,()=>i(n))))}function Ju(t,n){return t.providers&&!t._injector&&(t._injector=Hr(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Te(t){return t.outlet||g}function em(t,n){let e=t.filter(i=>Te(i)===n);return e.push(...t.filter(i=>Te(i)!==n)),e}var Oo={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function pl(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function tm(t,n,e,i,r,o,a){let l=gl(t,n,e);if(!l.matched)return _(l);let s=pl(o(l));return i=Ju(n,i),Yu(i,n,e,r,s,a).pipe(V(d=>d===!0?l:m({},Oo)))}function gl(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?m({},Oo):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||Us)(e,t,n);if(!r)return m({},Oo);let o={};Object.entries(r.posParams??{}).forEach(([l,s])=>{o[l]=s.path});let a=r.consumed.length>0?m(m({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Ps(t,n,e,i,r){return e.length>0&&rm(t,e,i,r)?{segmentGroup:new E(n,im(i,new E(e,t.children))),slicedSegments:[]}:e.length===0&&om(t,e,i)?{segmentGroup:new E(t.segments,nm(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new E(t.segments,t.children),slicedSegments:e}}function nm(t,n,e,i){let r={};for(let o of e)if(Xi(t,n,o)&&!i[Te(o)]){let a=new E([],{});r[Te(o)]=a}return m(m({},i),r)}function im(t,n){let e={};e[g]=n;for(let i of t)if(i.path===""&&Te(i)!==g){let r=new E([],{});e[Te(i)]=r}return e}function rm(t,n,e,i){return e.some(r=>!Xi(t,n,r)||!(Te(r)!==g)?!1:!(i!==void 0&&Te(r)===i))}function om(t,n,e){return e.some(i=>Xi(t,n,i))}function Xi(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function am(t,n,e){return n.length===0&&!t.children[e]}var Po=class{};async function sm(t,n,e,i,r,o,a,l){return new Lo(t,n,e,i,r,a,o,l).recognize()}var lm=31,Lo=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,l,s){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=l,this.abortSignal=s,this.applyRedirects=new Fo(this.urlSerializer,this.urlTree)}noMatchError(n){return new y(4002,`'${n.segmentGroup}'`)}async recognize(){let n=Ps(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Se(i,e),o=new Fn("",r),a=Qs(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Ht([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),g,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,g,e),rootSnapshot:e}}catch(i){if(i instanceof Pn)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof $e?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Se?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let s of Object.keys(i.children))s==="primary"?o.unshift(s):o.push(s);let a=[];for(let s of o){let d=i.children[s],u=em(e,s),h=await this.processSegmentGroup(n,u,d,s,r);a.push(...h)}let l=bl(a);return cm(l),l}async processSegment(n,e,i,r,o,a,l){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??n,e,s,i,r,o,a,l)}catch(d){if(d instanceof $e||ul(d))continue;throw d}if(am(i,r,o))return new Po;throw new $e(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,l,s){if(Te(i)!==a&&(a===g||!Xi(r,o,i)))throw new $e(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,s);if(this.allowRedirects&&l)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,s);throw new $e(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,l){let{matched:s,parameters:d,consumedSegments:u,positionalParamSegments:h,remainingSegments:p}=gl(e,r,o);if(!s)throw new $e(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>lm&&(this.allowRedirects=!1));let M=this.createSnapshot(n,r,o,d,l);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let z=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,pl(M),n),H=await this.applyRedirects.lineralizeSegments(r,z);return this.processSegment(n,i,e,H.concat(p),a,!1,l)}createSnapshot(n,e,i,r,o){let a=new Ht(i,r,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,um(e),Te(e),e.component??e._loadedComponent??null,e,mm(e),n),l=Vo(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(l.params),a.data=Object.freeze(l.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let l=oe=>this.createSnapshot(n,i,oe.consumedSegments,oe.parameters,a),s=await Ii(tm(e,i,r,n,this.urlSerializer,l,this.abortSignal));if(i.path==="**"&&(e.children={}),!s?.matched)throw new $e(e);n=i._injector??n;let{routes:d}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:h,consumedSegments:p,remainingSegments:M}=s,z=this.createSnapshot(n,i,p,h,a),{segmentGroup:H,slicedSegments:B}=Ps(e,p,M,d,o);if(B.length===0&&H.hasChildren()){let oe=await this.processChildren(u,d,H,z);return new Se(z,oe)}if(d.length===0&&B.length===0)return new Se(z,[]);let Re=Te(i)===o,re=await this.processSegment(u,d,H,B,Re?g:o,!0,z);return new Se(z,re instanceof Se?[re]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Ii(Zu(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Xu(e)}return{routes:[],injector:n}}};function cm(t){t.sort((n,e)=>n.value.outlet===g?-1:e.value.outlet===g?1:n.value.outlet.localeCompare(e.value.outlet))}function dm(t){let n=t.value.routeConfig;return n&&n.path===""}function bl(t){let n=[],e=new Set;for(let i of t){if(!dm(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=bl(i.children);n.push(new Se(i.value,r))}return n.filter(i=>!e.has(i))}function um(t){return t.data||{}}function mm(t){return t.resolve||{}}function fm(t,n,e,i,r,o,a){return Ze(async l=>{let{state:s,tree:d}=await sm(t,n,e,i,l.extractedUrl,r,o,a);return L(m({},l),{targetSnapshot:s,urlAfterRedirects:d})})}function hm(t){return Ze(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return _(n);let r=new Set(i.map(l=>l.route)),o=new Set;for(let l of r)if(!o.has(l))for(let s of vl(l))o.add(s);let a=0;return ue(o).pipe(ln(l=>r.has(l)?pm(l,e,t):(l.data=Vo(l,l.parent,t).resolve,_(void 0))),ae(()=>a++),Pr(1),Ze(l=>a===o.size?_(n):de))})}function vl(t){let n=t.children.map(e=>vl(e)).flat();return[t,...n]}function pm(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!al(i)&&(r[Ln]=i.title),ti(()=>(t.data=Vo(t,t.parent,e).resolve,gm(r,t,n).pipe(V(o=>(t._resolvedData=o,t.data=m(m({},t.data),o),null)))))}function gm(t,n,e){let i=Do(t);if(i.length===0)return _({});let r={};return ue(i).pipe(Ze(o=>bm(t[o],n,e).pipe(Ye(),ae(a=>{if(a instanceof $t)throw Wi(new et,a);r[o]=a}))),Pr(1),V(()=>r),Ct(o=>ul(o)?de:sn(o)))}function bm(t,n,e){let i=n._environmentInjector,r=Zt(t,i),o=r.resolve?r.resolve(n,e):me(i,()=>r(n,e));return vt(o)}function Ls(t){return Ce(n=>{let e=t(n);return e?ue(e).pipe(V(()=>n)):_(n)})}var zo=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===g);return i}getResolvedTitleForRoute(e){return e.data[Ln]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>c(_l)})}return t})(),_l=(()=>{class t extends zo{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(S(Rs))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yt=new f("",{factory:()=>({})}),Un=new f(""),yl=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(Qa);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await zs(me(e,()=>i.loadComponent())),a=await wl(Kr(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await Sl(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function Sl(t,n,e,i){let r=await zs(me(e,()=>t.loadChildren())),o=await wl(Kr(r)),a;o instanceof Ga||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let l,s,d=!1,u;return Array.isArray(a)?(s=a,d=!0):(l=a.create(e).injector,u=a,s=l.get(Un,[],{optional:!0,self:!0}).flat()),{routes:s.map(jo),injector:l,factory:u}}async function wl(t){return t}var Qi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>c(vm)})}return t})(),vm=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),xl=new f("");var Dl=new f(""),_m=()=>{},Cl=new f(""),Nl=(()=>{class t{currentNavigation=C(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=C(null);events=new U;transitionAbortWithErrorSubject=new U;configLoader=c(yl);environmentInjector=c(be);destroyRef=c(Xe);urlSerializer=c(qt);rootContexts=c(Wt);location=c(Ot);inputBindingEnabled=c(Ki,{optional:!0})!==null;titleStrategy=c(zo);options=c(Yt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Du;urlHandlingStrategy=c(Qi);createViewTransition=c(xl,{optional:!0});navigationErrorHandler=c(Cl,{optional:!0});activatedRouteInjectorFeature=c(Dl,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>_(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Bi(r)),i=r=>this.events.next(new Ui(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;w(()=>{this.transitions?.next(L(m({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ce(null),this.transitions.pipe(De(i=>i!==null),Ce(i=>{let r=!0,o=!1,a=new AbortController,l=()=>!o&&this.currentTransition?.id===i.id;return _(i).pipe(Ce(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",ne.SupersededByNewNavigation),de;this.currentTransition=i;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:d?L(m({},d),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&h!=="reload")return this.events.next(new Ge(s.id,this.urlSerializer.serialize(s.rawUrl),"",Rn.IgnoredSameUrlNavigation)),s.resolve(!1),de;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return _(s).pipe(Ce(p=>(this.events.next(new gt(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?de:Promise.resolve(p))),fm(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),ae(p=>{i.targetSnapshot=p.targetSnapshot,i.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(M=>(M.finalUrl=p.urlAfterRedirects,M)),this.events.next(new In)}),Ce(p=>ue(i.routesRecognizeHandler.deferredHandle??_(void 0)).pipe(V(()=>p))),ae(()=>{let p=new Tn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:M,source:z,restoredState:H,extras:B}=s,Re=new gt(p,this.urlSerializer.serialize(M),z,H);this.events.next(Re);let re=rl(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=L(m({},s),{targetSnapshot:re,urlAfterRedirects:M,extras:L(m({},B),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(oe=>(oe.finalUrl=M,oe)),_(i)}else return this.events.next(new Ge(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Rn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),de}),V(s=>{let d=new Oi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(d),this.currentTransition=i=L(m({},s),{guards:Au(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),Uu(s=>this.events.next(s)),Ce(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Wi(this.urlSerializer,s.guardsResult);let d=new Pi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(d),!l())return de;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",ne.GuardRejected),de;if(s.guards.canActivateChecks.length===0)return _(s);let u=new Li(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!l())return de;let h=!1;return _(s).pipe(hm(this.paramsInheritanceStrategy),ae({next:()=>{h=!0;let p=new Vi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{h||this.cancelNavigationTransition(s,"",ne.NoDataFromResolver)}}))}),Ls(s=>{let d=h=>{let p=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let M=h._environmentInjector;p.push(this.configLoader.loadComponent(M,h.routeConfig).then(z=>{h.component=z}))}for(let M of h.children)p.push(...d(M));return p},u=d(s.targetSnapshot.root);return u.length===0?_(s):ue(Promise.all(u).then(()=>s))}),Ce(s=>{let{newlyCreatedRoutes:d,state:u}=Cu(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=i=s=L(m({},s),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(h=>(h.targetRouterState=u,h)),_(s)}),this.activatedRouteInjectorFeature?.operator()??(s=>s),Ls(()=>this.afterPreactivation()),Ce(()=>{let{currentSnapshot:s,targetSnapshot:d}=i,u=this.createViewTransition?.(this.environmentInjector,s.root,d.root);return u?ue(u).pipe(V(()=>i)):_(i)}),Nt(1),Ce(s=>{r=!1,this.events.next(new jt);let d=i.beforeActivateHandler.deferredHandle;return d?ue(d.then(()=>s)):_(s)}),ae(s=>{new ko(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),l()&&(o=!0,this.currentNavigation.update(d=>(d.abort=_m,d)),this.lastSuccessfulNavigation.set(w(this.currentNavigation)),this.events.next(new Be(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Oe(ml(a.signal).pipe(De(()=>!o&&r),ae(()=>{this.cancelNavigationTransition(i,a.signal.reason+"",ne.Aborted)}))),ae({complete:()=>{o=!0}}),Oe(this.transitionAbortWithErrorSubject.pipe(ae(s=>{throw s}))),ni(()=>{a.abort(),o||this.cancelNavigationTransition(i,"",ne.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ct(s=>{if(o=!0,Vs(i),this.destroyed)return i.resolve(!1),de;if(dl(s))this.events.next(new Me(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),Mu(s)?this.events.next(new zt(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let d=new bt(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let u=me(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof $t){let{message:h,cancellationCode:p}=Wi(this.urlSerializer,u);this.events.next(new Me(i.id,this.urlSerializer.serialize(i.extractedUrl),h,p)),this.events.next(new zt(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),s}catch(u){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(u)}}return de}))}))}cancelNavigationTransition(e,i,r){Vs(e);let o=new Me(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=w(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function ym(t){return t!==En}function Vs(t){if(t.newlyCreatedRoutes)for(let n of t.newlyCreatedRoutes)n._localInjector?.destroy()}var El=new f("");var Ml=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>c(Sm)})}return t})(),Yi=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},Sm=(()=>{class t extends Yi{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Ji=(()=>{class t{urlSerializer=c(qt);options=c(Yt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(Ot);urlHandlingStrategy=c(Qi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new we;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof we?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=rl(null,c(be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>c(wm)})}return t})(),wm=(()=>{class t extends Ji{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof gt?this.updateStateMemento():e instanceof Ge?this.commitTransition(i):e instanceof Tn?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof jt?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Me&&!il(e)?this.restoreHistory(i):e instanceof bt?this.restoreHistory(i,!0):e instanceof Be&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:l}=r;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,d=m(m({},l),this.generateNgRouterState(o,s,i));this.location.replaceState(e,"",d)}else{let s=m(m({},l),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",s)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?m({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):m({navigationId:e},this.routerUrlState(r))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function Ho(t,n){t.events.pipe(De(e=>e instanceof Be||e instanceof Me||e instanceof bt||e instanceof Ge),V(e=>e instanceof Be||e instanceof Ge?0:(e instanceof Me?e.code===ne.Redirect||e.code===ne.SupersededByNewNavigation:!1)?2:1),De(e=>e!==2),Nt(1)).subscribe(()=>{n()})}var nt=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(Wa);stateManager=c(Ji);options=c(Yt,{optional:!0})||{};pendingTasks=c(La);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(Nl);urlSerializer=c(qt);location=c(Ot);urlHandlingStrategy=c(Qi);injector=c(be);_events=new U;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(Ml);injectorCleanup=c(El,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(Un,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(Ki,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new xt;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=w(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Me&&i.code!==ne.Redirect&&i.code!==ne.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Be)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof zt){let a=i.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),s=m({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||ym(r.source)},a);this.scheduleNavigation(l,En,null,s,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}wu(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),En,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,l=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=L(m({},o),{browserUrl:e})),r){let d=m({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let s=this.parseUrl(l);this.scheduleNavigation(s,i,a,o).catch(d=>{this.disposed||this.injector.get(cn)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return w(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(jo),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:l,preserveFragment:s}=i,d=s?this.currentUrlTree.fragment:a,u=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":u=m(m({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let p=r?r.snapshot:this.routerState.snapshot.root;h=Js(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return el(h,e,u,d??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=tt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,En,null,i)}navigate(e,i={skipLocationChange:!1}){return xm(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(ri(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=m({},$s):i===!1?r=m({},Co):r=m(m({},Co),i),tt(e))return Ts(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Ts(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let l,s,d;a?(l=a.resolve,s=a.reject,d=a.promise):d=new Promise((h,p)=>{l=h,s=p});let u=this.pendingTasks.add();return Ho(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:l,reject:s,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function xm(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new y(4008,!1)}var Nm=(()=>{class t{router=c(nt);stateManager=c(Ji);fragment=C("");queryParams=C({});path=C("");serializer=c(qt);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Be&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new we(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),er=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new Ja("href"),{optional:!0});reactiveHref=Yr(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return w(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return w(this._target)}_target=C(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return w(this._queryParams)}_queryParams=C(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return w(this._fragment)}_fragment=C(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return w(this._queryParamsHandling)}_queryParamsHandling=C(void 0);set state(e){this._state.set(e)}get state(){return w(this._state)}_state=C(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return w(this._info)}_info=C(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return w(this._relativeTo)}_relativeTo=C(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return w(this._preserveFragment)}_preserveFragment=C(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return w(this._skipLocationChange)}_skipLocationChange=C(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return w(this._replaceUrl)}_replaceUrl=C(!1);browserUrl=ut(void 0);isAnchorElement;onChanges=new U;applicationErrorHandler=c(cn);options=c(Yt,{optional:!0});reactiveRouterState=c(Nm);constructor(e,i,r,o,a,l){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=l;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s==="a"||s==="area"||!!(typeof customElements=="object"&&customElements.get(s)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=C(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(tt(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let l=this._urlTree();if(l===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let s=this.browserUrl(),d=m({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(l,d)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=le(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:tt(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return w(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(k(nt),k(Ie),Vr("tabindex"),k(se),k(j),k(Ft))};static \u0275dir=x({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&ee("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&he("href",r.reactiveHref(),Ha)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",te],skipLocationChange:[2,"skipLocationChange","skipLocationChange",te],replaceUrl:[2,"replaceUrl","replaceUrl",te],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[ve]})}return t})();var Em=new f("");function $o(t,...n){return Ke([{provide:Un,multi:!0,useValue:t},{provide:Ie,useFactory:Mm},{provide:Za,multi:!0,useFactory:Am},n.map(e=>e.\u0275providers)])}function Mm(){return c(nt).routerState.root}function Am(){let t=c(fe);return n=>{let e=t.get(hn);if(n!==e.components[0])return;let i=t.get(nt),r=t.get(Rm);t.get(Tm)===1&&i.initialNavigation(),t.get(Im,null,{optional:!0})?.setUpPreloading(),t.get(Em,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Rm=new f("",{factory:()=>new U}),Tm=new f("",{factory:()=>1});var Im=new f("");var km="@",Fm=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(fe);loadingSchedulerFn=c(Om,{optional:!0});_engine;constructor(e,i,r,o,a){this.doc=e,this.delegate=i,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-RLN3VT43.js").then(r=>r),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(e):i=e(),i.catch(r=>{throw new y(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,i){let r=this.delegate.createRenderer(e,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Go(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let l=a.createRenderer(e,i);o.use(l),this.scheduler??=this.injector.get(Ua,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(i){si()};static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})(),Go=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,i,r){this.delegate.insertBefore(n,e,i,r)}removeChild(n,e,i,r){this.delegate.removeChild(n,e,i,r)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,r){this.delegate.setAttribute(n,e,i,r)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,r){this.delegate.setStyle(n,e,i,r)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(n,e,i)),this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(n,e,i,r)),this.delegate.listen(n,e,i,r)}shouldReplay(n){return this.replay!==null&&n.startsWith(km)}},Om=new f("");function Al(t="animations"){return Ur("NgAsyncAnimations"),Ke([{provide:Pe,useFactory:()=>new Fm(c(T),c(Sn),c(I),t)},{provide:oi,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}function ke(t){return t instanceof j?t.nativeElement:t}function Kt(t){return t!=null&&`${t}`!="false"}var qo;try{qo=typeof Intl<"u"&&Intl.v8BreakIterator}catch{qo=!1}var Q=(()=>{class t{_platformId=c(Mt);isBrowser=this._platformId?cs(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||qo)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Wo;function Rl(){if(Wo==null){let t=typeof document<"u"?document.head:null;Wo=!!(t&&(t.createShadowRoot||t.attachShadow))}return Wo}function Zo(t){if(Rl()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Fe(t){if(t.composedPath)try{return t.composedPath()[0]}catch{}return t.target}var jn;function Tl(){if(jn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>jn=!0}))}finally{jn=jn||!1}return jn}function Xt(t){return Tl()?t:!!t.capture}var Qt,Il=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Yo(){if(Qt)return Qt;if(typeof document!="object"||!document)return Qt=new Set(Il),Qt;let t=document.createElement("input");return Qt=new Set(Il.filter(n=>(t.setAttribute("type",n),t.type===n))),Qt}var tr=new WeakMap,_t=(()=>{class t{_appRef;_injector=c(fe);_environmentInjector=c(be);load(e){let i=this._appRef=this._appRef||this._injector.get(hn),r=tr.get(i);r||(r={loaders:new Set,refs:[]},tr.set(i,r),i.onDestroy(()=>{tr.get(i)?.refs.forEach(o=>o.destroy()),tr.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(is(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function zn(t){return t.buttons===0||t.detail===0}function Hn(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var kl=new f("cdk-input-modality-detector-options"),Fl={ignoreKeys:[18,17,224,91,16]},Ol=650,Ko={passive:!0,capture:!0},Pl=(()=>{class t{_platform=c(Q);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ce(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Fe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ol||(this._modality.next(zn(e)?"keyboard":"mouse"),this._mostRecentTarget=Fe(e))};_onTouchstart=e=>{if(Hn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Fe(e)};constructor(){let e=c(I),i=c(T),r=c(kl,{optional:!0});if(this._options=m(m({},Fl),r),this.modalityDetected=this._modality.pipe(Ia(1)),this.modalityChanged=this.modalityDetected.pipe(Aa()),this._platform.isBrowser){let o=c(Pe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Ko),o.listen(i,"mousedown",this._onMousedown,Ko),o.listen(i,"touchstart",this._onTouchstart,Ko)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),$n=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})($n||{}),Ll=new f("cdk-focus-monitor-default-options"),nr=Xt({passive:!0,capture:!0}),Xo=(()=>{class t{_ngZone=c(I);_platform=c(Q);_inputModalityDetector=c(Pl);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(T);_stopInputModalityDetector=new U;constructor(){let e=c(Ll,{optional:!0});this._detectionMode=e?.detectionMode||$n.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Fe(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=ke(e);if(!this._platform.isBrowser||r.nodeType!==1)return _();let o=Zo(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let l={checkChildren:i,subject:new U,rootNode:o};return this._elementInfo.set(r,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let i=ke(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=ke(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([l,s])=>this._originChanged(l,i,s)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===$n.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===$n.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Ol:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Fe(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,nr),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,nr)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Oe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,nr),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,nr),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Vl=new Set,yt,Qo=(()=>{class t{_platform=c(Q);_nonce=c(st,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Vm}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Lm(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function Lm(t,n){if(!Vl.has(t))try{yt||(yt=document.createElement("style"),n&&yt.setAttribute("nonce",n),yt.setAttribute("type","text/css"),document.head.appendChild(yt)),yt.sheet&&(yt.sheet.insertRule(`@media ${t.replace(/[{}]/g,"")} {body{ }}`,0),Vl.add(t))}catch(e){console.error(e)}}function Vm(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Bm=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var ir=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({providers:[Bm]})}return t})();var Bl=new Map,it=class t{_appId=c(dn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let i=Bl.get(n);return i===void 0?i=0:i++,Bl.set(n,i),`${n}${e?t._infix+"-":""}${i}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})};var Um=new f("MATERIAL_ANIMATIONS"),Ul=null;function jm(){return c(Um,{optional:!0})?.animationsDisabled||c(oi,{optional:!0})==="NoopAnimations"?"di-disabled":(Ul??=c(Qo).matchMedia("(prefers-reduced-motion)").matches,Ul?"reduced-motion":"enabled")}function Jt(){return jm()!=="enabled"}var Ae=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Ae||{}),Jo=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ae.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},jl=Xt({passive:!0,capture:!0}),ea=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,jl)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,jl)))}_delegateEventHandler=n=>{let e=Fe(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Gn={enterDuration:225,exitDuration:150},zm=800,zl=Xt({passive:!0,capture:!0}),Hl=["mousedown","touchstart"],$l=["mouseup","mouseleave","touchend","touchcancel"],Hm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return t})(),rr=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ea;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=ke(i)),o&&o.get(_t).load(Hm)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=m(m({},Gn),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||$m(n,e,r),l=n-r.left,s=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${l-a}px`,u.style.top=`${s-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),p=h.transitionProperty,M=h.transitionDuration,z=p==="none"||M==="0s"||M==="0s, 0s"||r.width===0&&r.height===0,H=new Jo(this,u,i,z);u.style.transform="scale3d(1, 1, 1)",H.state=Ae.FADING_IN,i.persistent||(this._mostRecentTransientRipple=H);let B=null;return!z&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Re=()=>{B&&(B.fallbackTimer=null),clearTimeout(oe),this._finishRippleTransition(H)},re=()=>this._destroyRipple(H),oe=setTimeout(re,d+100);u.addEventListener("transitionend",Re),u.addEventListener("transitioncancel",re),B={onTransitionEnd:Re,onTransitionCancel:re,fallbackTimer:oe}}),this._activeRipples.set(H,B),(z||!d)&&this._finishRippleTransition(H),H}fadeOutRipple(n){if(n.state===Ae.FADING_OUT||n.state===Ae.HIDDEN)return;let e=n.element,i=m(m({},Gn),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Ae.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=ke(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Hl.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{$l.forEach(e=>{this._triggerElement.addEventListener(e,this,zl)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Ae.FADING_IN?this._startFadeOutTransition(n):n.state===Ae.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Ae.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Ae.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=zn(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+zm;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Hn(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Ae.VISIBLE||n.config.terminateOnPointerUp&&n.state===Ae.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Hl.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&($l.forEach(e=>n.removeEventListener(e,this,zl)),this._pointerUpEventsRegistered=!1))}};function $m(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Gl=new f("mat-ripple-global-options");var ql=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return t})();var tc=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(k(se),k(j))};static \u0275dir=x({type:t})}return t})(),Gm=(()=>{class t extends tc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=At(t)))(r||t)}})();static \u0275dir=x({type:t,features:[_e]})}return t})(),nc=new f("");var qm={provide:nc,useExisting:Et(()=>pr),multi:!0};function Wm(){let t=Ee()?Ee().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Zm=new f(""),pr=(()=>{class t extends tc{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Wm())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(k(se),k(j),k(Zm,8))};static \u0275dir=x({type:t,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&ee("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Ne([qm]),_e]})}return t})();function ra(t){return t==null||oa(t)===0}function oa(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var gr=new f(""),aa=new f(""),Ym=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Xn=class{static min(n){return Km(n)}static max(n){return Xm(n)}static required(n){return ic(n)}static requiredTrue(n){return Qm(n)}static email(n){return Jm(n)}static minLength(n){return ef(n)}static maxLength(n){return tf(n)}static pattern(n){return nf(n)}static nullValidator(n){return ar()}static compose(n){return cc(n)}static composeAsync(n){return dc(n)}};function Km(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function Xm(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function ic(t){return ra(t.value)?{required:!0}:null}function Qm(t){return t.value===!0?null:{required:!0}}function Jm(t){return ra(t.value)||Ym.test(t.value)?null:{email:!0}}function ef(t){return n=>{let e=n.value?.length??oa(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function tf(t){return n=>{let e=n.value?.length??oa(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function nf(t){if(!t)return ar;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(ra(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function ar(t){return null}function rc(t){return t!=null}function oc(t){return Tt(t)?ue(t):t}function ac(t){let n={};return t.forEach(e=>{n=e!=null?m(m({},n),e):n}),Object.keys(n).length===0?null:n}function sc(t,n){return n.map(e=>e(t))}function rf(t){return!t.validate}function lc(t){return t.map(n=>rf(n)?n:e=>n.validate(e))}function cc(t){if(!t)return null;let n=t.filter(rc);return n.length==0?null:function(e){return ac(sc(e,n))}}function sa(t){return t!=null?cc(lc(t)):null}function dc(t){if(!t)return null;let n=t.filter(rc);return n.length==0?null:function(e){let i=sc(e,n).map(oc);return Ea(i).pipe(V(ac))}}function la(t){return t!=null?dc(lc(t)):null}function Wl(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function uc(t){return t._rawValidators}function mc(t){return t._rawAsyncValidators}function ta(t){return t?Array.isArray(t)?t:[t]:[]}function sr(t,n){return Array.isArray(t)?t.includes(n):t===n}function Zl(t,n){let e=ta(n);return ta(t).forEach(r=>{sr(e,r)||e.push(r)}),e}function Yl(t,n){return ta(n).filter(e=>!sr(t,e))}var lr=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=sa(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=la(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},St=class extends lr{name;get formDirective(){return null}get path(){return null}};var qn="VALID",or="INVALID",en="PENDING",Wn="DISABLED",rt=class{},cr=class extends rt{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Yn=class extends rt{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Kn=class extends rt{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},tn=class extends rt{status;source;constructor(n,e){super(),this.status=n,this.source=e}},dr=class extends rt{source;constructor(n){super(),this.source=n}},nn=class extends rt{source;constructor(n){super(),this.source=n}};function fc(t){return(br(t)?t.validators:t)||null}function of(t){return Array.isArray(t)?sa(t):t||null}function hc(t,n){return(br(n)?n.asyncValidators:t)||null}function af(t){return Array.isArray(t)?la(t):t||null}function br(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function sf(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new y(1e3,"");if(!pc(i,e))throw new y(1001,"")}function lf(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new y(-1002,"")})}var ur=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=C(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return w(this.statusReactive)}set status(n){w(()=>this.statusReactive.set(n))}_status=le(()=>this.statusReactive());statusReactive=C(void 0);get valid(){return this.status===qn}get invalid(){return this.status===or}get pending(){return this.status===en}get disabled(){return this.status===Wn}get enabled(){return this.status!==Wn}errors;get pristine(){return w(this.pristineReactive)}set pristine(n){w(()=>this.pristineReactive.set(n))}_pristine=le(()=>this.pristineReactive());pristineReactive=C(!0);get dirty(){return!this.pristine}get touched(){return w(this.touchedReactive)}set touched(n){w(()=>this.touchedReactive.set(n))}_touched=le(()=>this.touchedReactive());touchedReactive=C(!1);get untouched(){return!this.touched}_events=new U;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Zl(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Zl(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Yl(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Yl(n,this._rawAsyncValidators))}hasValidator(n){return sr(this._rawValidators,n)}hasAsyncValidator(n){return sr(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(L(m({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Kn(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Kn(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(L(m({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Yn(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Yn(!0,i))}markAsPending(n={}){this.status=en;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new tn(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(L(m({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Wn,this.errors=null,this._forEachChild(r=>{r.disable(L(m({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new cr(this.value,i)),this._events.next(new tn(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(L(m({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=qn,this._forEachChild(i=>{i.enable(L(m({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(L(m({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===qn||this.status===en)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new cr(this.value,e)),this._events.next(new tn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(L(m({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Wn:qn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=en,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=oc(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new tn(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new J,this.statusChanges=new J}_calculateStatus(){return this._allControlsDisabled()?Wn:this.errors?or:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(en)?en:this._anyControlsHaveStatus(or)?or:qn}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Yn(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Kn(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){br(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=of(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=af(this._rawAsyncValidators)}_updateHasRequiredValidator(){w(()=>this._hasRequired.set(this.hasValidator(Xn.required)))}};function pc(t,n){return Object.hasOwn(t,n)}function cf(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function df(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}var na=class{kind;context;control;message;constructor({kind:n,context:e,control:i}){this.kind=n,this.context=e,this.control=i}};var uf=(()=>{class t{_validator=ar;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):ar,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,features:[ve]})}return t})();var mf={provide:gr,useExisting:Et(()=>gc),multi:!0};var gc=(()=>{class t extends uf{required;inputName="required";normalizeInput=te;createValidator=e=>ic;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=At(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&he("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[Ne([mf]),_e]})}return t})();var ff=new f(""),vr=new f("",{factory:()=>ca}),ca="always";function hf(t,n){return[...n.path,t]}function Kl(t,n,e=ca){da(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),gf(t,n),vf(t,n),bf(t,n),pf(t,n)}function Xl(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),fr(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function mr(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function pf(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function da(t,n){let e=uc(t);n.validator!==null?t.setValidators(Wl(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=mc(t);n.asyncValidator!==null?t.setAsyncValidators(Wl(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();mr(n._rawValidators,r),mr(n._rawAsyncValidators,r)}function fr(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=uc(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=mc(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return mr(n._rawValidators,i),mr(n._rawAsyncValidators,i),e}function gf(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&bc(t,n)})}function bf(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&bc(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function bc(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function vf(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function vc(t,n){t==null,da(t,n)}function _f(t,n){return fr(t,n)}function yf(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Sf(t){return Object.getPrototypeOf(t.constructor)===Gm}function _c(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function wf(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===pr?e=o:Sf(o)?i=o:r=o}),r||i||e||null}function xf(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var Df={provide:ff,useFactory:()=>{let t=c(ot,{self:!0});return{setParseErrors:n=>{t.setParseErrorSource(n)},set onReset(n){t.onReset=n}}}},ot=class extends lr{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof nn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=wf(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,i){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(Xe)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(je);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new xt,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof nn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=cf(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof gc))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,n.setCustomControlModelInput(i.value)),this.bindControlProperty(n,r,"touched",i.touched),this.bindControlProperty(n,r,"dirty",i.dirty),this.bindControlProperty(n,r,"valid",i.valid),this.bindControlProperty(n,r,"invalid",i.invalid),this.bindControlProperty(n,r,"pending",i.pending),this.bindControlProperty(n,r,"disabled",i.disabled),this.shouldBindRequired&&this.bindControlProperty(n,r,"required",this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);n.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,i,r){if(e[i]===r)return;e[i]=r;let o=n.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i==="disabled"||i==="required")&&this.renderer&&df(this.renderer,n.nativeElement,i,r)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([i,r])=>new na({context:r,kind:i,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,i=le(()=>{let r=n();return r.length===0?null:r.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),lt(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},ia=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var yc=(()=>{class t extends ia{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(k(ot,2))};static \u0275dir=x({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&W("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[_e]})}return t})();var hr=class extends ur{constructor(n,e,i){super(fc(e),hc(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let i=this._find(n);return i||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){w(()=>{lf(this,!0,n),Object.keys(n).forEach(i=>{sf(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this._find(i);r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,L(m({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new nn(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return pc(this.controls,n)?this.controls[n]:null}};var Cf={provide:St,useExisting:Et(()=>ua)},Zn=Promise.resolve(),ua=(()=>{class t extends St{callSetDisabledState;get submitted(){return w(this.submittedReactive)}_submitted=le(()=>this.submittedReactive());submittedReactive=C(!1);_directives=new Set;form;ngSubmit=new J;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new hr({},sa(e),la(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Zn.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Zn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Zn.then(()=>{let i=this._findContainer(e.path),r=new hr({});vc(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Zn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Zn.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),_c(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new dr(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(k(gr,10),k(aa,10),k(vr,8))};static \u0275dir=x({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&ee("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([Cf]),_e]})}return t})();function Ql(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Jl(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Sc=class extends ur{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(fc(e),hc(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),br(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Jl(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){w(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new nn(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Ql(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Ql(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Jl(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Nf=t=>t instanceof Sc;var Ef={provide:ot,useExisting:Et(()=>ma)},ec=Promise.resolve(),ma=(()=>{class t extends ot{_changeDetectorRef;callSetDisabledState;control=new Sc;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new J;constructor(e,i,r,o,a,l,s,d){super(s,d,o),this._changeDetectorRef=a,this.callSetDisabledState=l,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),yf(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Kl(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Kl(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){ec.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&te(i);ec.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?hf(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(k(St,9),k(gr,10),k(aa,10),k(nc,10),k(je,8),k(vr,8),k(fe,8),k(se,8))};static \u0275dir=x({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ne([Ef,Df]),_e,ve,qa(null)]})}return t})();var Mf=(()=>{class t extends St{callSetDisabledState;get submitted(){return w(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=le(()=>this._submittedReactive());_submittedReactive=C(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(fr(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Xl(e.control||null,e,!1),xf(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,_c(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new dr(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Xl(i||null,e),Nf(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);vc(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&_f(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){da(this.form,this),this._oldForm&&fr(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(k(gr,10),k(aa,10),k(vr,8))};static \u0275dir=x({type:t,features:[_e,ve]})}return t})();var Af={provide:St,useExisting:Et(()=>fa)},fa=(()=>{class t extends Mf{form=null;ngSubmit=new J;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=At(t)))(r||t)}})();static \u0275dir=x({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&ee("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([Af]),_e]})}return t})();var Rf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({})}return t})();var wc=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:vr,useValue:e.callSetDisabledState??ca}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({imports:[Rf]})}return t})();var If=new f("cdk-dir-doc",{providedIn:"root",factory:()=>c(T)}),kf=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function xc(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?kf.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var ha=(()=>{class t{get value(){return this.valueSignal()}valueSignal=C("ltr");change=new J;constructor(){let e=c(If,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(xc(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var ie=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({})}return t})();var Dc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({imports:[ie]})}return t})();var Cc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({imports:[ie]})}return t})();var _r=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({imports:[ie]})}return t})();var Nc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({imports:[ir,_r,Cc,ie,Dc]})}return t})();var yr=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=A({type:t,selectors:[["app-album-list"]],decls:2,vars:0,template:function(e,i){e&1&&(pe(0,"p"),Z(1,"Album List \u2014 placeholder"),ge())},dependencies:[Nc],encapsulation:2})};var Sr=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=A({type:t,selectors:[["app-album-detail"]],decls:2,vars:0,template:function(e,i){e&1&&(pe(0,"p"),Z(1,"Album Detail \u2014 placeholder"),ge())},encapsulation:2})};var wr=class t{route=c(Ie);artistId=null;ngOnInit(){let n=this.route.snapshot.queryParamMap.get("artistId");this.artistId=n?+n:null}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=A({type:t,selectors:[["app-album-editor"]],decls:2,vars:0,template:function(e,i){e&1&&(pe(0,"p"),Z(1,"Album Editor \u2014 placeholder"),ge())},encapsulation:2})};var xr=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=A({type:t,selectors:[["app-artist-detail"]],decls:2,vars:0,template:function(e,i){e&1&&(pe(0,"p"),Z(1,"Artist Detail \u2014 placeholder"),ge())},encapsulation:2})};var pa=class{_box;_destroyed=new U;_resizeSubject=new U;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Dt(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(De(e=>e.some(i=>i.target===n)),Ta({bufferSize:1,refCount:!0}),Oe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Ec=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(I);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new pa(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Ff=["notch"],Of=["*"],Mc=["iconPrefixContainer"],Ac=["textPrefixContainer"],Rc=["iconSuffixContainer"],Tc=["textSuffixContainer"],Pf=["textField"],Lf=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Vf=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Bf(t,n){t&1&&Le(0,"span",21)}function Uf(t,n){if(t&1&&(O(0,"label",20),q(1,1),$(2,Bf,1,0,"span",21),N()),t&2){let e=ye(2);ct("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),he("for",e._control.disableAutomaticLabeling?null:e._control.id),P(2),G(!e.hideRequiredMarker&&e._control.required?2:-1)}}function jf(t,n){if(t&1&&$(0,Uf,3,5,"label",20),t&2){let e=ye();G(e._hasFloatingLabel()?0:-1)}}function zf(t,n){t&1&&Le(0,"div",7)}function Hf(t,n){}function $f(t,n){if(t&1&&fn(0,Hf,0,0,"ng-template",13),t&2){ye(2);let e=ui(1);ct("ngTemplateOutlet",e)}}function Gf(t,n){if(t&1&&(O(0,"div",9),$(1,$f,1,1,null,13),N()),t&2){let e=ye();ct("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),P(),G(e._forceDisplayInfixLabel()?-1:1)}}function qf(t,n){t&1&&(O(0,"div",10,2),q(2,2),N())}function Wf(t,n){t&1&&(O(0,"div",11,3),q(2,3),N())}function Zf(t,n){}function Yf(t,n){if(t&1&&fn(0,Zf,0,0,"ng-template",13),t&2){ye();let e=ui(1);ct("ngTemplateOutlet",e)}}function Kf(t,n){t&1&&(O(0,"div",14,4),q(2,4),N())}function Xf(t,n){t&1&&(O(0,"div",15,5),q(2,5),N())}function Qf(t,n){t&1&&Le(0,"div",16)}function Jf(t,n){t&1&&(O(0,"div",18),q(1,6),N())}function eh(t,n){if(t&1&&(O(0,"mat-hint",22),Z(1),N()),t&2){let e=ye(2);ct("id",e._hintLabelId),P(),fi(e.hintLabel)}}function th(t,n){if(t&1&&(O(0,"div",19),$(1,eh,2,2,"mat-hint",22),q(2,7),Le(3,"div",23),q(4,8),N()),t&2){let e=ye();P(),G(e.hintLabel?1:-1)}}var Jn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-label"]]})}return t})(),nh=new f("MatError");var ga=(()=>{class t{align="start";id=c(it).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(ci("id",r.id),he("align",null),W("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),ih=new f("MatPrefix");var rh=new f("MatSuffix");var Vc=new f("FloatingLabelParent"),Ic=(()=>{class t{_elementRef=c(j);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(Ec);_ngZone=c(I);_parent=c(Vc);_resizeSubscription=new xt;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return oh(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&W("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function oh(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var kc="mdc-line-ripple--active",Dr="mdc-line-ripple--deactivating",Fc=(()=>{class t{_elementRef=c(j);_cleanupTransitionEnd;constructor(){let e=c(I),i=c(se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Dr),e.add(kc)}deactivate(){this._elementRef.nativeElement.classList.add(Dr)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Dr);e.propertyName==="opacity"&&r&&i.remove(kc,Dr)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Oc=(()=>{class t{_elementRef=c(j);_ngZone=c(I);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&di(Ff,5),i&2){let o;Y(o=K())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&W("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:Of,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Ue(),dt(0,"div",1),pe(1,"div",2,0),q(3),ge(),dt(4,"div",3))},encapsulation:2})}return t})(),ba=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t})}return t})();var va=new f("MatFormField"),ah=new f("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Pc="fill",sh="auto",Lc="fixed",lh="translateY(-50%)",Cr=(()=>{class t{_elementRef=c(j);_changeDetectorRef=c(je);_platform=c(Q);_idGenerator=c(it);_ngZone=c(I);_defaults=c(ah,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=pn("iconPrefixContainer");_textPrefixContainerSignal=pn("textPrefixContainer");_iconSuffixContainerSignal=pn("iconSuffixContainer");_textSuffixContainerSignal=pn("textSuffixContainer");_prefixSuffixContainers=le(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=es(Jn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Kt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||sh}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Pc;this._appearanceSignal.set(i)}_appearanceSignal=C(Pc);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Lc}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Lc}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new U;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Jt();constructor(){let e=this._defaults,i=c(ha);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),lt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=le(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(ii([void 0,void 0]),V(()=>[i.errorState,i.userAriaDescribedBy]),Ra(),De(([[o,a],[l,s]])=>o!==l||a!==s)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Oe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ma(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Xr({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=le(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",h=`${a+l}px`,M=`calc(${u} * (${h} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,z=`var(--mat-mdc-form-field-label-transform, ${lh} translateX(${M}))`,H=a+l+s+d;return[z,H]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Ka(o,r._labelChild,Jn,5),It(o,ba,5)(o,ih,5)(o,rh,5)(o,nh,5)(o,ga,5)),i&2){$r();let a;Y(a=K())&&(r._formFieldControl=a.first),Y(a=K())&&(r._prefixChildren=a),Y(a=K())&&(r._suffixChildren=a),Y(a=K())&&(r._errorChildren=a),Y(a=K())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Xa(r._iconPrefixContainerSignal,Mc,5)(r._textPrefixContainerSignal,Ac,5)(r._iconSuffixContainerSignal,Rc,5)(r._textSuffixContainerSignal,Tc,5),di(Pf,5)(Mc,5)(Ac,5)(Rc,5)(Tc,5)(Ic,5)(Oc,5)(Fc,5)),i&2){$r(4);let o;Y(o=K())&&(r._textField=o.first),Y(o=K())&&(r._iconPrefixContainer=o.first),Y(o=K())&&(r._textPrefixContainer=o.first),Y(o=K())&&(r._iconSuffixContainer=o.first),Y(o=K())&&(r._textSuffixContainer=o.first),Y(o=K())&&(r._floatingLabel=o.first),Y(o=K())&&(r._notchedOutline=o.first),Y(o=K())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&W("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ne([{provide:va,useExisting:t},{provide:Vc,useExisting:t}])],ngContentSelectors:Vf,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Ue(Lf),fn(0,jf,1,1,"ng-template",null,0,Zr),O(2,"div",6,1),ee("click",function(a){return r._control.onContainerClick(a)}),$(4,zf,1,0,"div",7),O(5,"div",8),$(6,Gf,2,2,"div",9),$(7,qf,3,0,"div",10),$(8,Wf,3,0,"div",11),O(9,"div",12),$(10,Yf,1,1,null,13),q(11),N(),$(12,Kf,3,0,"div",14),$(13,Xf,3,0,"div",15),N(),$(14,Qf,1,0,"div",16),N(),O(15,"div",17),$(16,Jf,2,0,"div",18)(17,th,5,1,"div",19),N()),i&2){let o;P(2),W("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),P(2),G(!r._hasOutline()&&!r._control.disabled?4:-1),P(2),G(r._hasOutline()?6:-1),P(),G(r._hasIconPrefix?7:-1),P(),G(r._hasTextPrefix?8:-1),P(2),G(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),P(2),G(r._hasTextSuffix?12:-1),P(),G(r._hasIconSuffix?13:-1),P(),G(r._hasOutline()?-1:14),P(),W("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();P(),G((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Ic,Oc,Jr,Fc,ga],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return t})();var ei=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({imports:[ir,Cr,ie]})}return t})();var dh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return t})(),uh={passive:!0},Bc=(()=>{class t{_platform=c(Q);_ngZone=c(I);_renderer=c(Pe).createRenderer(null,null);_styleLoader=c(_t);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return de;this._styleLoader.load(dh);let i=ke(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new U,a="cdk-text-field-autofilled",l=d=>{d.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},s=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",l,uh)));return this._monitoredElements.set(i,{subject:o,unlisten:s}),o}stopMonitoring(e){let i=ke(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Uc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({})}return t})();var jc=new f("");var zc=new f("MAT_INPUT_VALUE_ACCESSOR");var Hc=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;let i=e().invalid(),r=e().touched();return i&&r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Nr=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,i,r,o){this._defaultMatcher=n,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o,e?un(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return n?.isErrorState(i,e)??!1}};var mh=["button","checkbox","file","hidden","image","radio","range","reset","submit"],fh=new f("MAT_INPUT_CONFIG"),$c=(()=>{class t{_elementRef=c(j);_platform=c(Q);ngControl=c(ot,{optional:!0,self:!0});_autofillMonitor=c(Bc);_ngZone=c(I);_formField=c(va,{optional:!0});_renderer=c(se);_uid=c(it).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(fh,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new U;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Kt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Xn.required)??!1}set required(e){this._required=Kt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Yo().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Kt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Yo().has(e));constructor(){let e=c(ua,{optional:!0}),i=c(fa,{optional:!0}),r=c(Hc),o=c(zc,{optional:!0,self:!0}),a=c(jc,{optional:!0,self:!0}),l=this._elementRef.nativeElement,s=l.nodeName.toLowerCase();o?un(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Nr(r,a||this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&lt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){mh.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&ee("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(ci("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),he("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),W("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",te]},exportAs:["matInput"],features:[Ne([{provide:ba,useExisting:t}]),ve]})}return t})(),Gc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({imports:[ei,ei,Uc,ie]})}return t})();var ph={capture:!0},gh=["focus","mousedown","mouseenter","touchstart"],_a="mat-ripple-loader-uninitialized",ya="mat-ripple-loader-class-name",qc="mat-ripple-loader-centered",Er="mat-ripple-loader-disabled",Wc=(()=>{class t{_document=c(T);_animationsDisabled=Jt();_globalRippleOptions=c(Gl,{optional:!0});_platform=c(Q);_ngZone=c(I);_injector=c(fe);_eventCleanups;_hosts=new Map;constructor(){let e=c(Pe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>gh.map(i=>e.listen(this._document,i,this._onInteraction,ph)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(_a,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(ya))&&e.setAttribute(ya,i.className||""),i.centered&&e.setAttribute(qc,""),i.disabled&&e.setAttribute(Er,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Er,""):e.removeAttribute(Er)}_onInteraction=e=>{let i=Fe(e);if(i instanceof HTMLElement){let r=i.closest(`[${_a}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(ya)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Gn.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Gn.exitDuration,l={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Er),rippleConfig:{centered:e.hasAttribute(qc),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},s=new rr(l,this._ngZone,i,this._platform,this._injector),d=!l.rippleDisabled;d&&s.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:s,hasSetUpEvents:d}),e.removeAttribute(_a)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var bh=new f("MAT_BUTTON_CONFIG");function Zc(t){return t==null?void 0:ns(t)}var Yc=(()=>{class t{_elementRef=c(j);_ngZone=c(I);_animationsDisabled=Jt();_config=c(bh,{optional:!0});_focusMonitor=c(Xo);_cleanupClick;_renderer=c(se);_rippleLoader=c(Wc);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=ut(!1,{transform:te});constructor(){c(_t).load(ql);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(i,r){i&2&&(he("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),mi(r.color?"mat-"+r.color:""),W("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",te],disabled:[2,"disabled","disabled",te],ariaDisabled:[2,"aria-disabled","ariaDisabled",te],disabledInteractive:[2,"disabledInteractive","disabledInteractive",te],tabIndex:[2,"tabIndex","tabIndex",Zc],_tabindex:[2,"tabindex","_tabindex",Zc],showProgress:[1,"showProgress"]}})}return t})();var vh=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],_h=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function yh(t,n){t&1&&(pe(0,"div",2),q(1,3),ge())}var Kc=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Mr=(()=>{class t extends Yc{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Sh(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?Kc.get(this._appearance):null,o=Kc.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[_e],ngContentSelectors:_h,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ue(vh),dt(0,"span",0),q(1),pe(2,"span",1),q(3,1),ge(),q(4,2),$(5,yh,2,0,"div",2),dt(6,"span",3)(7,"span",4)),i&2&&(W("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),P(5),G(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();function Sh(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Ar=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({imports:[_r,ie]})}return t})();var wh={albums:"albums",album:"album",artists:"artists",artist:"artist",artistLookup:"artistlookup",saveArtist:"artist",authenticate:"authenticate",logout:"logout",isAuthenticated:"isAuthenticated",applicationStats:"applicationstats"},Rr=class t{apiBase="api/";url(n,...e){let i=this.apiBase+(wh[n]??n);for(let r of e)i+="/"+r;return i}static \u0275fac=function(e){return new(e||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})};var Sa="av_token",at=class t{http=c(Ni);config=c(Rr);_token=localStorage.getItem(Sa)??"";isAuthenticated=C(!!this._token);get token(){return this._token}setToken(n){this._token=n,n?(localStorage.setItem(Sa,n),this.isAuthenticated.set(!0)):(localStorage.removeItem(Sa),this.isAuthenticated.set(!1))}authenticate(n,e){return this.http.post(this.config.url("authenticate"),{username:n,password:e}).pipe(ae(i=>this.setToken(i.token)),Ct(i=>(this.setToken(""),sn(()=>i))))}logout(){return this.http.get(this.config.url("logout")).pipe(ae(()=>this.setToken("")))}checkAuthentication(){return this.http.get(this.config.url("isAuthenticated")).pipe(ae(n=>this.isAuthenticated.set(n)),Ct(n=>(this.setToken(""),sn(()=>n))))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})};function xh(t,n){if(t&1&&(O(0,"p",3),Z(1),N()),t&2){let e=ye();P(),fi(e.error)}}var Tr=class t{auth=c(at);router=c(nt);username="";password="";error="";login(){this.error="",this.auth.authenticate(this.username,this.password).subscribe({next:()=>this.router.navigate(["/albums"]),error:()=>this.error="Invalid username or password"})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=A({type:t,selectors:[["app-login"]],decls:14,vars:3,consts:[[2,"max-width","320px","margin","80px auto","display","flex","flex-direction","column","gap","16px"],["matInput","",3,"ngModelChange","ngModel"],["matInput","","type","password",3,"ngModelChange","ngModel"],[2,"color","red"],["mat-flat-button","",3,"click"]],template:function(e,i){e&1&&(O(0,"div",0)(1,"h2"),Z(2,"Sign In"),N(),O(3,"mat-form-field")(4,"mat-label"),Z(5,"Username"),N(),O(6,"input",1),Wr("ngModelChange",function(o){return qr(i.username,o)||(i.username=o),o}),N(),jr(),N(),O(7,"mat-form-field")(8,"mat-label"),Z(9,"Password"),N(),O(10,"input",2),Wr("ngModelChange",function(o){return qr(i.password,o)||(i.password=o),o}),N(),jr(),N(),$(11,xh,2,1,"p",3),O(12,"button",4),ee("click",function(){return i.login()}),Z(13,"Sign In"),N()()),e&2&&(P(6),Gr("ngModel",i.username),zr(),P(4),Gr("ngModel",i.password),zr(),P(),G(i.error?11:-1))},dependencies:[wc,pr,yc,ma,ei,Cr,Jn,Gc,$c,Ar,Mr],encapsulation:2})};var Qc=[{path:"",redirectTo:"albums",pathMatch:"full"},{path:"albums",component:yr},{path:"album/edit/:id",component:wr},{path:"album/:id",component:Sr},{path:"artist/:id",component:xr},{path:"login",component:Tr}];var Jc=(t,n)=>{let e=c(at).token;return n(e?t.clone({setHeaders:{Authorization:`Bearer ${e}`}}):t)};var ed={providers:[Va(),$o(Qc),bo(vo([Jc])),Al()]};var Dh=["*",[["mat-toolbar-row"]]],Ch=["*","mat-toolbar-row"],Nh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=x({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),td=(()=>{class t{_elementRef=c(j);_platform=c(Q);_document=c(T);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=A({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&It(o,Nh,5),i&2){let a;Y(a=K())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(mi(r.color?"mat-"+r.color:""),W("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Ch,decls:2,vars:0,template:function(i,r){i&1&&(Ue(Dh),q(0),q(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return t})();var nd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=F({type:t});static \u0275inj=R({imports:[ie]})}return t})();function Mh(t,n){if(t&1){let e=Ya();O(0,"button",4),ee("click",function(){Oa(e);let r=ye();return Pa(r.auth.logout().subscribe())}),Z(1,"Logout"),N()}}function Ah(t,n){t&1&&(O(0,"a",3),Z(1,"Login"),N())}var Ir=class t{auth=c(at);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=A({type:t,selectors:[["app-root"]],decls:7,vars:1,consts:[["color","primary"],["mat-button","","routerLink","/albums"],["mat-button",""],["mat-button","","routerLink","/login"],["mat-button","",3,"click"]],template:function(e,i){e&1&&(O(0,"mat-toolbar",0)(1,"a",1),Z(2,"Albums"),N(),$(3,Mh,2,0,"button",2)(4,Ah,2,0,"a",3),N(),O(5,"main"),Le(6,"router-outlet"),N()),e&2&&(P(3),G(i.auth.isAuthenticated()?3:4))},dependencies:[Vn,er,nd,td,Ar,Mr],encapsulation:2})};so(Ir,ed).catch(t=>console.error(t));
