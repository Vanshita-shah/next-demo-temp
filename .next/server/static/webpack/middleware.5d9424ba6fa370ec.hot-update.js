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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _app_utils_isAuthenticated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/utils/isAuthenticated */ \"(middleware)/./app/utils/isAuthenticated.ts\");\n\n\nasync function middleware(request) {\n    const status = await (0,_app_utils_isAuthenticated__WEBPACK_IMPORTED_MODULE_1__.isAuthenticated)();\n    console.log(\"1\", status);\n    if (request.nextUrl.pathname === \"/my-courses\") {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(\"/dashboard\");\n    }\n// if (request.nextUrl.pathname === \"/login\") {\n//   return NextResponse.rewrite(new URL(\"/dashboard\", request.url));\n// }\n} // export { default } from \"next-auth/middleware\";\n // export const config = { matcher: [\"/dashboard\"] };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFbUI7QUFFdkQsZUFBZUUsV0FBV0MsT0FBb0I7SUFDbkQsTUFBTUMsU0FBUyxNQUFNSCwyRUFBZUE7SUFDcENJLFFBQVFDLEdBQUcsQ0FBQyxLQUFLRjtJQUVqQixJQUFJRCxRQUFRSSxPQUFPLENBQUNDLFFBQVEsS0FBSyxlQUFlO1FBQzlDLE9BQU9SLGtGQUFZQSxDQUFDUyxRQUFRLENBQUM7SUFDL0I7QUFFQSwrQ0FBK0M7QUFDL0MscUVBQXFFO0FBQ3JFLElBQUk7QUFDTixFQUVBLGtEQUFrRDtDQUVsRCxxREFBcUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgaXNBdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4vYXBwL3V0aWxzL2lzQXV0aGVudGljYXRlZFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBzdGF0dXMgPSBhd2FpdCBpc0F1dGhlbnRpY2F0ZWQoKTtcbiAgY29uc29sZS5sb2coXCIxXCIsIHN0YXR1cyk7XG5cbiAgaWYgKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSA9PT0gXCIvbXktY291cnNlc1wiKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChcIi9kYXNoYm9hcmRcIik7XG4gIH1cblxuICAvLyBpZiAocmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lID09PSBcIi9sb2dpblwiKSB7XG4gIC8vICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZXdyaXRlKG5ldyBVUkwoXCIvZGFzaGJvYXJkXCIsIHJlcXVlc3QudXJsKSk7XG4gIC8vIH1cbn1cblxuLy8gZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCJuZXh0LWF1dGgvbWlkZGxld2FyZVwiO1xuXG4vLyBleHBvcnQgY29uc3QgY29uZmlnID0geyBtYXRjaGVyOiBbXCIvZGFzaGJvYXJkXCJdIH07XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiaXNBdXRoZW50aWNhdGVkIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwibmV4dFVybCIsInBhdGhuYW1lIiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});