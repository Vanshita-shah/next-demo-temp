"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _app_utils_isAuthenticated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/utils/isAuthenticated */ \"(middleware)/./app/utils/isAuthenticated.ts\");\n\n\nasync function middleware(request) {\n    const status = await (0,_app_utils_isAuthenticated__WEBPACK_IMPORTED_MODULE_1__.isAuthenticated)();\n    console.log(\"1\", status);\n    if (request.nextUrl.pathname === \"/my-courses\") {\n        const absURL = new URL(\"/\", request.nextUrl.origin);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(absURL.toString());\n    }\n// if (request.nextUrl.pathname === \"/login\") {\n//   return NextResponse.rewrite(new URL(\"/dashboard\", request.url));\n// }\n} // export { default } from \"next-auth/middleware\";\n // export const config = { matcher: [\"/dashboard\"] };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFbUI7QUFFdkQsZUFBZUUsV0FBV0MsT0FBb0I7SUFDbkQsTUFBTUMsU0FBUyxNQUFNSCwyRUFBZUE7SUFDcENJLFFBQVFDLEdBQUcsQ0FBQyxLQUFLRjtJQUVqQixJQUFJRCxRQUFRSSxPQUFPLENBQUNDLFFBQVEsS0FBSyxlQUFlO1FBQzlDLE1BQU1DLFNBQVMsSUFBSUMsSUFBSSxLQUFLUCxRQUFRSSxPQUFPLENBQUNJLE1BQU07UUFDbEQsT0FBT1gsa0ZBQVlBLENBQUNZLFFBQVEsQ0FBQ0gsT0FBT0ksUUFBUTtJQUM5QztBQUVBLCtDQUErQztBQUMvQyxxRUFBcUU7QUFDckUsSUFBSTtBQUNOLEVBRUEsa0RBQWtEO0NBRWxELHFEQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tIFwiLi9hcHAvdXRpbHMvaXNBdXRoZW50aWNhdGVkXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHN0YXR1cyA9IGF3YWl0IGlzQXV0aGVudGljYXRlZCgpO1xuICBjb25zb2xlLmxvZyhcIjFcIiwgc3RhdHVzKTtcblxuICBpZiAocmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lID09PSBcIi9teS1jb3Vyc2VzXCIpIHtcbiAgICBjb25zdCBhYnNVUkwgPSBuZXcgVVJMKFwiL1wiLCByZXF1ZXN0Lm5leHRVcmwub3JpZ2luKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KGFic1VSTC50b1N0cmluZygpKTtcbiAgfVxuXG4gIC8vIGlmIChyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09IFwiL2xvZ2luXCIpIHtcbiAgLy8gICByZXR1cm4gTmV4dFJlc3BvbnNlLnJld3JpdGUobmV3IFVSTChcIi9kYXNoYm9hcmRcIiwgcmVxdWVzdC51cmwpKTtcbiAgLy8gfVxufVxuXG4vLyBleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIm5leHQtYXV0aC9taWRkbGV3YXJlXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBjb25maWcgPSB7IG1hdGNoZXI6IFtcIi9kYXNoYm9hcmRcIl0gfTtcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJpc0F1dGhlbnRpY2F0ZWQiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJhYnNVUkwiLCJVUkwiLCJvcmlnaW4iLCJyZWRpcmVjdCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});