"use strict";
(() => {
var exports = {};
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 5607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&isDynamic=0!./app/sitemap.xml?__next_metadata_route__
var sitemap_next_metadata_route_namespaceObject = {};
__webpack_require__.r(sitemap_next_metadata_route_namespaceObject);
__webpack_require__.d(sitemap_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&isDynamic=0!./app/sitemap.xml?__next_metadata_route__


const contentType = "application/xml"
const buffer = Buffer.from("PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHVybHNldCB4bWxucz0iaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOSI+CiAgICA8dXJsPgogICAgICAgIDxsb2M+aHR0cHM6Ly9pbm5vdmF0ZWNocXVpbmRpby5uZXQvPC9sb2M+CiAgICAgICAgPGxhc3Rtb2Q+MjAyMy0wOS0yMlQxODoxODowOSswMDowMDwvbGFzdG1vZD4KICAgICAgICA8cHJpb3JpdHk+MS4wMDwvcHJpb3JpdHk+CiAgICA8L3VybD4KICAgIDx1cmw+CiAgICAgICAgPGxvYz5odHRwczovL2lubm92YXRlY2hxdWluZGlvLm5ldC9hYm91dDwvbG9jPgogICAgICAgIDxsYXN0bW9kPjIwMjMtMDktMjJUMTg6MTg6MDkrMDA6MDA8L2xhc3Rtb2Q+CiAgICAgICAgPHByaW9yaXR5PjAuODA8L3ByaW9yaXR5PgogICAgPC91cmw+CiAgICA8dXJsPgogICAgICAgIDxsb2M+aHR0cHM6Ly9pbm5vdmF0ZWNocXVpbmRpby5uZXQvc2VydmljZXM8L2xvYz4KICAgICAgICA8bGFzdG1vZD4yMDIzLTA5LTIyVDE4OjE4OjA5KzAwOjAwPC9sYXN0bW9kPgogICAgICAgIDxwcmlvcml0eT4wLjgwPC9wcmlvcml0eT4KICAgIDwvdXJsPgogICAgPHVybD4KICAgICAgICA8bG9jPmh0dHBzOi8vaW5ub3ZhdGVjaHF1aW5kaW8ubmV0L2NvbnRhY3RzPC9sb2M+CiAgICAgICAgPGxhc3Rtb2Q+MjAyMy0wOS0yMlQxODoxODowOSswMDowMDwvbGFzdG1vZD4KICAgICAgICA8cHJpb3JpdHk+MC44MDwvcHJpb3JpdHk+CiAgICA8L3VybD4KICAgIDx1cmw+CiAgICAgICAgPGxvYz5odHRwczovL2lubm92YXRlY2hxdWluZGlvLm5ldC9pbnRlcm1peDwvbG9jPgogICAgICAgIDxsYXN0bW9kPjIwMjMtMDktMjJUMTg6MTg6MDkrMDA6MDA8L2xhc3Rtb2Q+CiAgICAgICAgPHByaW9yaXR5PjAuODA8L3ByaW9yaXR5PgogICAgPC91cmw+CiAgICA8dXJsPgogICAgICAgIDxsb2M+aHR0cHM6Ly9pbm5vdmF0ZWNocXVpbmRpby5uZXQvcHJpdmFjeTwvbG9jPgogICAgICAgIDxsYXN0bW9kPjIwMjMtMDktMjJUMTg6MTg6MDkrMDA6MDA8L2xhc3Rtb2Q+CiAgICAgICAgPHByaW9yaXR5PjAuODA8L3ByaW9yaXR5PgogICAgPC91cmw+CjwvdXJsc2V0Pg==", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, immutable, no-transform, max-age=31536000",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fsitemap.xml%2Froute&name=app%2Fsitemap.xml%2Froute&pagePath=private-next-app-dir%2Fsitemap.xml&appDir=C%3A%5CUsers%5CJose%20Silva%5CDesktop%5Cinnovatechnuevo%5Capp&appPaths=%2Fsitemap.xml&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/sitemap.xml/route",
        pathname: "/sitemap.xml",
        filename: "sitemap",
        bundlePath: "app/sitemap.xml/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&isDynamic=0!C:\\Users\\Jose Silva\\Desktop\\innovatechnuevo\\app\\sitemap.xml?__next_metadata_route__",
    nextConfigOutput,
    userland: sitemap_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/sitemap.xml/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(5607)));
module.exports = __webpack_exports__;

})();