"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 4590:
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

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
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
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5CJose%20Silva%5CDesktop%5Cinnovatechnuevo%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Users\\Jose Silva\\Desktop\\innovatechnuevo\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(4590)));
module.exports = __webpack_exports__;

})();