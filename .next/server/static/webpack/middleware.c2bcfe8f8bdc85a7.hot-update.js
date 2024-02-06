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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _app_utils_isAuthenticated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/utils/isAuthenticated */ \"(middleware)/./app/utils/isAuthenticated.ts\");\n\n\nasync function middleware(request) {\n    const status = await (0,_app_utils_isAuthenticated__WEBPACK_IMPORTED_MODULE_1__.isAuthenticated)();\n    console.log(status);\n    if (request.nextUrl.pathname === \"/my-courses\") {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(\"/dashboard\");\n    }\n// if (request.nextUrl.pathname === \"/login\") {\n//   return NextResponse.rewrite(new URL(\"/dashboard\", request.url));\n// }\n} // export { default } from \"next-auth/middleware\";\n // export const config = { matcher: [\"/dashboard\"] };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFbUI7QUFFdkQsZUFBZUUsV0FBV0MsT0FBb0I7SUFDbkQsTUFBTUMsU0FBUyxNQUFNSCwyRUFBZUE7SUFDcENJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixJQUFJRCxRQUFRSSxPQUFPLENBQUNDLFFBQVEsS0FBSyxlQUFlO1FBQzlDLE9BQU9SLGtGQUFZQSxDQUFDUyxRQUFRLENBQUM7SUFDL0I7QUFFQSwrQ0FBK0M7QUFDL0MscUVBQXFFO0FBQ3JFLElBQUk7QUFDTixFQUVBLGtEQUFrRDtDQUVsRCxxREFBcUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgaXNBdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4vYXBwL3V0aWxzL2lzQXV0aGVudGljYXRlZFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBzdGF0dXMgPSBhd2FpdCBpc0F1dGhlbnRpY2F0ZWQoKTtcbiAgY29uc29sZS5sb2coc3RhdHVzKTtcblxuICBpZiAocmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lID09PSBcIi9teS1jb3Vyc2VzXCIpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiKTtcbiAgfVxuXG4gIC8vIGlmIChyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09IFwiL2xvZ2luXCIpIHtcbiAgLy8gICByZXR1cm4gTmV4dFJlc3BvbnNlLnJld3JpdGUobmV3IFVSTChcIi9kYXNoYm9hcmRcIiwgcmVxdWVzdC51cmwpKTtcbiAgLy8gfVxufVxuXG4vLyBleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIm5leHQtYXV0aC9taWRkbGV3YXJlXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBjb25maWcgPSB7IG1hdGNoZXI6IFtcIi9kYXNoYm9hcmRcIl0gfTtcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJpc0F1dGhlbnRpY2F0ZWQiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJyZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});