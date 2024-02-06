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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _app_utils_isAuthenticated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/utils/isAuthenticated */ \"(middleware)/./app/utils/isAuthenticated.ts\");\n\n\nasync function middleware(request) {\n    const status = await (0,_app_utils_isAuthenticated__WEBPACK_IMPORTED_MODULE_1__.isAuthenticated)();\n    console.log(status);\n    if (request.nextUrl.pathname === \"/my-courses\") {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rewrite(new URL(\"/dashboard\", request.url));\n    }\n    if (request.nextUrl.pathname === \"/login\") {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rewrite(new URL(\"/dashboard\", request.url));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFbUI7QUFFdkQsZUFBZUUsV0FBV0MsT0FBb0I7SUFDbkQsTUFBTUMsU0FBUyxNQUFNSCwyRUFBZUE7SUFDcENJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixJQUFJRCxRQUFRSSxPQUFPLENBQUNDLFFBQVEsS0FBSyxlQUFlO1FBQzlDLE9BQU9SLGtGQUFZQSxDQUFDUyxPQUFPLENBQUMsSUFBSUMsSUFBSSxjQUFjUCxRQUFRUSxHQUFHO0lBQy9EO0lBRUEsSUFBSVIsUUFBUUksT0FBTyxDQUFDQyxRQUFRLEtBQUssVUFBVTtRQUN6QyxPQUFPUixrRkFBWUEsQ0FBQ1MsT0FBTyxDQUFDLElBQUlDLElBQUksY0FBY1AsUUFBUVEsR0FBRztJQUMvRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGlzQXV0aGVudGljYXRlZCB9IGZyb20gXCIuL2FwcC91dGlscy9pc0F1dGhlbnRpY2F0ZWRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3Qgc3RhdHVzID0gYXdhaXQgaXNBdXRoZW50aWNhdGVkKCk7XG4gIGNvbnNvbGUubG9nKHN0YXR1cyk7XG5cbiAgaWYgKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSA9PT0gXCIvbXktY291cnNlc1wiKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZXdyaXRlKG5ldyBVUkwoXCIvZGFzaGJvYXJkXCIsIHJlcXVlc3QudXJsKSk7XG4gIH1cblxuICBpZiAocmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lID09PSBcIi9sb2dpblwiKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZXdyaXRlKG5ldyBVUkwoXCIvZGFzaGJvYXJkXCIsIHJlcXVlc3QudXJsKSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJpc0F1dGhlbnRpY2F0ZWQiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJyZXdyaXRlIiwiVVJMIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});