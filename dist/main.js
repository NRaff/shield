/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_phys_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/phys_object */ \"./src/scripts/phys_object.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var main = document.getElementById(\"app_page\");\n  var shield = document.getElementById(\"shield_game\");\n  var newObj = new _scripts_phys_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"](shield);\n  newObj.draw();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBRUFFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBYjtBQUNBLE1BQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNRSxNQUFNLEdBQUcsSUFBSVAsNERBQUosQ0FBZU0sTUFBZixDQUFmO0FBQ0FDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUDtBQUNELENBTEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGllbGQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGh5c09iamVjdCBmcm9tIFwiLi9zY3JpcHRzL3BoeXNfb2JqZWN0XCI7XG5pbXBvcnQgVGVzdCBmcm9tIFwiLi9zY3JpcHRzL3BoeXNfb2JqZWN0XCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBfcGFnZVwiKTtcbiAgY29uc3Qgc2hpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGllbGRfZ2FtZVwiKTtcbiAgY29uc3QgbmV3T2JqID0gbmV3IFBoeXNPYmplY3Qoc2hpZWxkKTtcbiAgbmV3T2JqLmRyYXcoKTtcbn0pIl0sIm5hbWVzIjpbIlBoeXNPYmplY3QiLCJUZXN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwic2hpZWxkIiwibmV3T2JqIiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/phys_object.js":
/*!************************************!*\
  !*** ./src/scripts/phys_object.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PhysObject = /*#__PURE__*/function () {\n  function PhysObject(parent) {\n    _classCallCheck(this, PhysObject);\n\n    this.canvas = parent;\n    this.context = this.canvas.getContext('2d');\n  }\n\n  _createClass(PhysObject, [{\n    key: \"draw\",\n    value: function draw(objDraw) {\n      if (objDraw) {\n        objDraw();\n      } else {\n        this.defaultObj();\n      }\n    }\n  }, {\n    key: \"defaultObj\",\n    value: function defaultObj() {\n      this.context.fillStyle = \"red\";\n      this.context.fillRect(10, 10, 50, 50);\n    }\n  }]);\n\n  return PhysObject;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhysObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9waHlzX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQU1BO0FBQ0osc0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0MsTUFBTCxHQUFjRCxNQUFkO0FBQ0EsU0FBS0UsT0FBTCxHQUFlLEtBQUtELE1BQUwsQ0FBWUUsVUFBWixDQUF1QixJQUF2QixDQUFmO0FBQ0Q7Ozs7V0FFRCxjQUFLQyxPQUFMLEVBQWM7QUFDWixVQUFJQSxPQUFKLEVBQWE7QUFDWEEsUUFBQUEsT0FBTztBQUNSLE9BRkQsTUFFTztBQUNMLGFBQUtDLFVBQUw7QUFDRDtBQUNGOzs7V0FFRCxzQkFBYTtBQUNYLFdBQUtILE9BQUwsQ0FBYUksU0FBYixHQUF5QixLQUF6QjtBQUNBLFdBQUtKLE9BQUwsQ0FBYUssUUFBYixDQUFzQixFQUF0QixFQUEwQixFQUExQixFQUE4QixFQUE5QixFQUFrQyxFQUFsQztBQUNEOzs7Ozs7QUFHSCwrREFBZVIsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaWVsZC8uL3NyYy9zY3JpcHRzL3BoeXNfb2JqZWN0LmpzPzMxNmEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGh5c09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgIHRoaXMuY2FudmFzID0gcGFyZW50XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuXG4gIGRyYXcob2JqRHJhdykge1xuICAgIGlmIChvYmpEcmF3KSB7XG4gICAgICBvYmpEcmF3KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVmYXVsdE9iaigpO1xuICAgIH1cbiAgfVxuXG4gIGRlZmF1bHRPYmooKSB7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDEwLCAxMCwgNTAsIDUwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaHlzT2JqZWN0OyJdLCJuYW1lcyI6WyJQaHlzT2JqZWN0IiwicGFyZW50IiwiY2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJvYmpEcmF3IiwiZGVmYXVsdE9iaiIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/phys_object.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGllbGQvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;