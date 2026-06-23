module.exports=[18622,(e,a,r)=>{a.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,a,r)=>{a.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,a,r)=>{a.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},93695,(e,a,r)=>{a.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},41758,e=>{"use strict";var a=e.i(62991),r=e.i(91855),t=e.i(37628),o=e.i(47071),l=e.i(58474),n=e.i(63904),c=e.i(86739),s=e.i(96821),d=e.i(42774),i=e.i(35278),u=e.i(64781),p=e.i(77055),b=e.i(46708),h=e.i(89696),g=e.i(14033),v=e.i(93695);e.i(2037);var f=e.i(15541);let m=`
/* basic theme */
.dark-mode {
  --scalar-color-1: rgba(255, 255, 255, 0.9);
  --scalar-color-2: rgba(255, 255, 255, 0.62);
  --scalar-color-3: rgba(255, 255, 255, 0.44);
  --scalar-color-accent: #3070ec;

  --scalar-background-1: #000000;
  --scalar-background-2: #1a1a1a;
  --scalar-background-3: #2a2828;
  --scalar-background-accent: transparent;

  --scalar-border-color: rgba(255, 255, 255, 0.1);
}

.light-mode .dark-mode,
.light-mode {
  --scalar-color-1: #2a2f45;
  --scalar-color-2: #757575;
  --scalar-color-3: #8e8e8e;
  --scalar-color-accent: #3070ec;

  --scalar-background-1: #fff;
  --scalar-background-2: #fafafa;
  --scalar-background-3: #e7e7e7;
  --scalar-background-accent: transparent;

  --scalar-border-color: rgba(0, 0, 0, 0.1);
}
.light-mode .scalar-card {
  --scalar-background-1: #fff;
  --scalar-background-2: #fff !important;
  --scalar-background-3: #fff !important;
}
.dark-mode .scalar-card {
  --scalar-background-1: #000000;
  --scalar-background-2: #000000 !important;
  --scalar-background-3: #000000 !important;
}
.light-mode .examples .scalar-card .scalar-card-header {
  --scalar-background-2: #fafafa;
}
.dark-mode .examples .scalar-card .scalar-card-header {
  --scalar-background-2: #1a1a1a;
  --scalar-border-color: #1a1a1a;
}
/* Document header */
.light-mode .t-doc__header,
.dark-mode .t-doc__header {
  --header-background-1: rgba(255,255,255,.8);
  --header-border-color: var(--scalar-border-color);
  --header-color-1: var(--scalar-color-1);
  --header-color-2: var(--scalar-color-2);
  --header-background-toggle: var(--scalar-color-3);
  --header-call-to-action-color: var(--scalar-color-accent);
  backdrop-filter: saturate(180%) blur(5px);
}

.dark-mode .t-doc__header {
  --header-background-1: rgba(0,0,0,.5);
}
/* Document Sidebar */
.light-mode .t-doc__sidebar,
.dark-mode .t-doc__sidebar {
  --scalar-sidebar-background-1: var(--scalar-background-1);
  --scalar-sidebar-item-hover-color: var(--scalar-sidebar-color-1);
  --scalar-sidebar-item-hover-background: transparent;
  --scalar-sidebar-item-active-background: var(--scalar-background-accent);
  --scalar-sidebar-border-color: transparent;
  --scalar-sidebar-color-1: var(--scalar-color-1);
  --scalar-sidebar-color-2: var(--scalar-color-2);
  --scalar-sidebar-color-active: var(--scalar-color-accent);
  --scalar-sidebar-search-background: var(--scalar-background-2);
  --scalar-sidebar-search-border-color: var(--scalar-background-2);
  --scalar-sidebar-search-color: var(--scalar-color-3);
  --scalar-sidebar-indent-border: var(--scalar-border-color);
  --scalar-sidebar-indent-border-active: #6aacf8;
}
.api-client-drawer .t-doc__sidebar {
  --scalar-sidebar-border-color: var(--scalar-border-color);
}
/* advanced */
.light-mode .dark-mode,
.light-mode {
  --scalar-button-1: rgb(49 53 56);
  --scalar-button-1-color: #fff;
  --scalar-button-1-hover: rgb(28 31 33);

  --scalar-color-green: #417942;
  --scalar-color-red: #ae3763;
  --scalar-color-yellow: #edbe20;
  --scalar-color-blue: #2b66cf;
  --scalar-color-orange: #cf7a2b;
  --scalar-color-purple: #6e27b5;

  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);
  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);
}
.dark-mode {
  --scalar-button-1: #f6f6f6;
  --scalar-button-1-color: #000;
  --scalar-button-1-hover: #e7e7e7;

  --scalar-color-green: #7abe7b;
  --scalar-color-red: #e5698f;
  --scalar-color-yellow: #f8ea68;
  --scalar-color-blue: #68a6f8;
  --scalar-color-orange: #f89c68;
  --scalar-color-purple: #b57de9;

  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);
  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);
}
.sidebar .sidebar-indent-nested .sidebar-heading {
  padding-right: 0;
}
.sidebar-search-key {
  background: var(--scalar-background-1) !important;
  border: 1px solid var(--scalar-border-color);
}
`,x=(e=>{var a,r,t,o,l,n;if(!(null==(a=e.spec)?void 0:a.content)&&!(null==(r=e.spec)?void 0:r.url))throw Error("[@scalar/nextjs-api-reference] You didn’t provide a spec.content or spec.url. Please provide one of these options.");"function"==typeof(null==(t=e.spec)?void 0:t.content)&&(e.spec.content=e.spec.content());let c=(null==(o=null==e?void 0:e.spec)?void 0:o.content)?"string"==typeof(null==(l=null==e?void 0:e.spec)?void 0:l.content)?e.spec.content:JSON.stringify(e.spec.content):"";(null==(n=null==e?void 0:e.spec)?void 0:n.content)&&delete e.spec.content,(null==e?void 0:e.customCss)||(null==e?void 0:e.theme)||(e.customCss=m);let s=(null==e?void 0:e.cdn)?e.cdn:"https://cdn.jsdelivr.net/npm/@scalar/api-reference@latest",d=JSON.stringify({_integration:"nextjs",...e??{}}).split('"').join("&quot;");return async()=>new Response(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scalar API Reference</title>
  </head>
  <body>
    <script
      id="api-reference"
      type="application/json"
      data-configuration="${d}">
      ${c}
    </script>
    <script src="${s}"></script>
  </body>
</html>
      `,{status:200,headers:{"Content-Type":"text/html"}})})({spec:{url:"/swagger.json"},servers:[{url:"https://api.aipowergrid.io"}],theme:"moon"});e.s(["GET",0,x],80367);var R=e.i(80367);let k=new a.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api-doc/route",pathname:"/api-doc",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api-doc/route.js",nextConfigOutput:"standalone",userland:R,...{}}),{workAsyncStorage:w,workUnitAsyncStorage:E,serverHooks:y}=k;async function C(e,a,t){t.requestMeta&&(0,o.setRequestMeta)(e,t.requestMeta),k.isDev&&(0,o.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let m="/api-doc/route";m=m.replace(/\/index$/,"")||"/";let x=await k.prepare(e,a,{srcPage:m,multiZoneDraftMode:!1});if(!x)return a.statusCode=400,a.end("Bad Request"),null==t.waitUntil||t.waitUntil.call(t,Promise.resolve()),null;let{buildId:R,deploymentId:w,params:E,nextConfig:y,parsedUrl:C,isDraftMode:_,prerenderManifest:A,routerServerContext:T,isOnDemandRevalidate:N,revalidateOnlyGenerated:P,resolvedPathname:S,clientReferenceManifest:O,serverActionsManifest:q}=x,j=(0,c.normalizeAppPath)(m),H=!!(A.dynamicRoutes[j]||A.routes[S]),I=async()=>((null==T?void 0:T.render404)?await T.render404(e,a,C,!1):a.end("This page could not be found"),null);if(H&&!_){let e=!!A.routes[S],a=A.dynamicRoutes[j];if(a&&!1===a.fallback&&!e){if(y.adapterPath)return await I();throw new v.NoFallbackError}}let D=null;!H||k.isDev||_||(D="/index"===(D=S)?"/":D);let U=!0===k.isDev||!H,M=H&&!U;q&&O&&(0,n.setManifestsSingleton)({page:m,clientReferenceManifest:O,serverActionsManifest:q});let $=e.method||"GET",F=(0,l.getTracer)(),K=F.getActiveScopeSpan(),B=!!(null==T?void 0:T.isWrappedByNextServer),L=!!(0,o.getRequestMeta)(e,"minimalMode"),G=(0,o.getRequestMeta)(e,"incrementalCache")||await k.getIncrementalCache(e,y,A,L);null==G||G.resetRequestCache(),globalThis.__incrementalCache=G;let V={params:E,previewProps:A.preview,renderOpts:{experimental:{authInterrupts:!!y.experimental.authInterrupts},cacheComponents:!!y.cacheComponents,supportsDynamicResponse:U,incrementalCache:G,cacheLifeProfiles:y.cacheLife,waitUntil:t.waitUntil,onClose:e=>{a.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(a,r,t,o)=>k.onRequestError(e,a,t,o,T)},sharedContext:{buildId:R,deploymentId:w}},W=new s.NodeNextRequest(e),X=new s.NodeNextResponse(a),J=d.NextRequestAdapter.fromNodeNextRequest(W,(0,d.signalFromNodeResponse)(a));try{let o,n=async e=>k.handle(J,V).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":a.statusCode,"next.rsc":!1});let r=F.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let t=r.get("next.route");if(t){let a=`${$} ${t}`;e.setAttributes({"next.route":t,"http.route":t,"next.span_name":a}),e.updateName(a),o&&o!==e&&(o.setAttribute("http.route",t),o.updateName(a))}else e.updateName(`${$} ${m}`)}),c=async o=>{var l,c;let s=async({previousCacheEntry:r})=>{try{if(!L&&N&&P&&!r)return a.statusCode=404,a.setHeader("x-nextjs-cache","REVALIDATED"),a.end("This page could not be found"),null;let l=await n(o);e.fetchMetrics=V.renderOpts.fetchMetrics;let c=V.renderOpts.pendingWaitUntil;c&&t.waitUntil&&(t.waitUntil(c),c=void 0);let s=V.renderOpts.collectedTags;if(!H)return await (0,p.sendResponse)(W,X,l,V.renderOpts.pendingWaitUntil),null;{let e=await l.blob(),a=(0,b.toNodeOutgoingHttpHeaders)(l.headers);s&&(a[g.NEXT_CACHE_TAGS_HEADER]=s),!a["content-type"]&&e.type&&(a["content-type"]=e.type);let r=void 0!==V.renderOpts.collectedRevalidate&&!(V.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&V.renderOpts.collectedRevalidate,t=void 0===V.renderOpts.collectedExpire||V.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:V.renderOpts.collectedExpire;return{value:{kind:f.CachedRouteKind.APP_ROUTE,status:l.status,body:Buffer.from(await e.arrayBuffer()),headers:a},cacheControl:{revalidate:r,expire:t}}}}catch(a){throw(null==r?void 0:r.isStale)&&await k.onRequestError(e,a,{routerKind:"App Router",routePath:m,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:N})},!1,T),a}},d=await k.handleResponse({req:e,nextConfig:y,cacheKey:D,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:N,revalidateOnlyGenerated:P,responseGenerator:s,waitUntil:t.waitUntil,isMinimalMode:L});if(!H)return null;if((null==d||null==(l=d.value)?void 0:l.kind)!==f.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(c=d.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});L||a.setHeader("x-nextjs-cache",N?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),_&&a.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let i=(0,b.fromNodeOutgoingHttpHeaders)(d.value.headers);return L&&H||i.delete(g.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||a.getHeader("Cache-Control")||i.get("Cache-Control")||i.set("Cache-Control",(0,h.getCacheControlHeader)(d.cacheControl)),await (0,p.sendResponse)(W,X,new Response(d.value.body,{headers:i,status:d.value.status||200})),null};B&&K?await c(K):(o=F.getActiveScopeSpan(),await F.withPropagatedContext(e.headers,()=>F.trace(i.BaseServerSpan.handleRequest,{spanName:`${$} ${m}`,kind:l.SpanKind.SERVER,attributes:{"http.method":$,"http.target":e.url}},c),void 0,!B))}catch(a){if(a instanceof v.NoFallbackError||await k.onRequestError(e,a,{routerKind:"App Router",routePath:j,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:N})},!1,T),H)throw a;return await (0,p.sendResponse)(W,X,new Response(null,{status:500})),null}}e.s(["handler",0,C,"patchFetch",0,function(){return(0,t.patchFetch)({workAsyncStorage:w,workUnitAsyncStorage:E})},"routeModule",0,k,"serverHooks",0,y,"workAsyncStorage",0,w,"workUnitAsyncStorage",0,E],41758)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0h8rgmj._.js.map