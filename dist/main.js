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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_phys_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/phys_object */ \"./src/scripts/phys_object.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var main = document.getElementById(\"app_page\");\n  var shield = document.getElementById(\"shield_game\");\n  var objOptions = _scripts_phys_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setOptions(10, 10);\n  console.log(objOptions);\n  var newObj = new _scripts_phys_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"](shield, objOptions);\n  newObj.draw();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBRUFFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBYjtBQUNBLE1BQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNRSxVQUFVLEdBQUdQLHVFQUFBLENBQXNCLEVBQXRCLEVBQXlCLEVBQXpCLENBQW5CO0FBQ0FTLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxVQUFaO0FBQ0EsTUFBTUksTUFBTSxHQUFHLElBQUlYLDREQUFKLENBQWVNLE1BQWYsRUFBdUJDLFVBQXZCLENBQWY7QUFDQUksRUFBQUEsTUFBTSxDQUFDQyxJQUFQO0FBQ0QsQ0FQRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaWVsZC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaHlzT2JqZWN0IGZyb20gXCIuL3NjcmlwdHMvcGh5c19vYmplY3RcIjtcbmltcG9ydCBUZXN0IGZyb20gXCIuL3NjcmlwdHMvcGh5c19vYmplY3RcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcF9wYWdlXCIpO1xuICBjb25zdCBzaGllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaWVsZF9nYW1lXCIpO1xuICBjb25zdCBvYmpPcHRpb25zID0gUGh5c09iamVjdC5zZXRPcHRpb25zKDEwLDEwKTtcbiAgY29uc29sZS5sb2cob2JqT3B0aW9ucyk7XG4gIGNvbnN0IG5ld09iaiA9IG5ldyBQaHlzT2JqZWN0KHNoaWVsZCwgb2JqT3B0aW9ucyk7XG4gIG5ld09iai5kcmF3KCk7XG59KSJdLCJuYW1lcyI6WyJQaHlzT2JqZWN0IiwiVGVzdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsInNoaWVsZCIsIm9iak9wdGlvbnMiLCJzZXRPcHRpb25zIiwiY29uc29sZSIsImxvZyIsIm5ld09iaiIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/phys_object.js":
/*!************************************!*\
  !*** ./src/scripts/phys_object.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PhysObject = /*#__PURE__*/function () {\n  function PhysObject(parent, options) {\n    _classCallCheck(this, PhysObject);\n\n    this.canvas = parent;\n    this.context = this.canvas.getContext('2d');\n    this.color = options.color;\n    this.pos = options.pos;\n    this.size = options.size;\n  }\n\n  _createClass(PhysObject, [{\n    key: \"draw\",\n    value: //Draws either the set object described by the parameters, \n    //or draws an object according to the passed in function\n    function draw(fn_objDraw) {\n      if (fn_objDraw) {\n        fn_objDraw();\n      } else {\n        this.setObj();\n      }\n    } //Draws the set object\n\n  }, {\n    key: \"setObj\",\n    value: function setObj() {\n      this.context.fillStyle = this.color;\n      this.context.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);\n    }\n  }], [{\n    key: \"setOptions\",\n    value: function setOptions(x, y, w, h, color) {\n      return {\n        color: color || 'darkgray',\n        pos: {\n          x: x,\n          y: y\n        },\n        size: {\n          w: w || 10,\n          h: h || 10\n        }\n      };\n    }\n  }]);\n\n  return PhysObject;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhysObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9waHlzX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQU1BO0FBQ0osc0JBQVlDLE1BQVosRUFBb0JDLE9BQXBCLEVBQTZCO0FBQUE7O0FBQzNCLFNBQUtDLE1BQUwsR0FBY0YsTUFBZDtBQUNBLFNBQUtHLE9BQUwsR0FBZSxLQUFLRCxNQUFMLENBQVlFLFVBQVosQ0FBdUIsSUFBdkIsQ0FBZjtBQUNBLFNBQUtDLEtBQUwsR0FBYUosT0FBTyxDQUFDSSxLQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBV0wsT0FBTyxDQUFDSyxHQUFuQjtBQUNBLFNBQUtDLElBQUwsR0FBWU4sT0FBTyxDQUFDTSxJQUFwQjtBQUNEOzs7O1dBY0Q7QUFDQTtBQUNBLGtCQUFLQyxVQUFMLEVBQWlCO0FBQ2YsVUFBSUEsVUFBSixFQUFnQjtBQUNkQSxRQUFBQSxVQUFVO0FBQ1gsT0FGRCxNQUVPO0FBQ0wsYUFBS0MsTUFBTDtBQUNEO0FBQ0YsTUFFRDs7OztXQUNBLGtCQUFTO0FBQ1AsV0FBS04sT0FBTCxDQUFhTyxTQUFiLEdBQXlCLEtBQUtMLEtBQTlCO0FBQ0EsV0FBS0YsT0FBTCxDQUFhUSxRQUFiLENBQXNCLEtBQUtMLEdBQUwsQ0FBU00sQ0FBL0IsRUFBa0MsS0FBS04sR0FBTCxDQUFTTyxDQUEzQyxFQUE4QyxLQUFLTixJQUFMLENBQVVPLENBQXhELEVBQTJELEtBQUtQLElBQUwsQ0FBVVEsQ0FBckU7QUFDRDs7O1dBM0JELG9CQUFrQkgsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCQyxDQUF4QixFQUEyQkMsQ0FBM0IsRUFBOEJWLEtBQTlCLEVBQXFDO0FBQ25DLGFBQU87QUFDTEEsUUFBQUEsS0FBSyxFQUFFQSxLQUFLLElBQUksVUFEWDtBQUVMQyxRQUFBQSxHQUFHLEVBQUU7QUFDSE0sVUFBQUEsQ0FBQyxFQUFFQSxDQURBO0FBRUhDLFVBQUFBLENBQUMsRUFBRUE7QUFGQSxTQUZBO0FBTUxOLFFBQUFBLElBQUksRUFBRTtBQUNKTyxVQUFBQSxDQUFDLEVBQUVBLENBQUMsSUFBSSxFQURKO0FBRUpDLFVBQUFBLENBQUMsRUFBRUEsQ0FBQyxJQUFJO0FBRko7QUFORCxPQUFQO0FBV0Q7Ozs7OztBQWtCSCwrREFBZWhCLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGllbGQvLi9zcmMvc2NyaXB0cy9waHlzX29iamVjdC5qcz8zMTZhIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBoeXNPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IHBhcmVudFxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5wb3MgPSBvcHRpb25zLnBvcztcbiAgICB0aGlzLnNpemUgPSBvcHRpb25zLnNpemU7XG4gIH1cbiAgc3RhdGljIHNldE9wdGlvbnMoeCwgeSwgdywgaCwgY29sb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IGNvbG9yIHx8ICdkYXJrZ3JheScsXG4gICAgICBwb3M6IHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgdzogdyB8fCAxMCxcbiAgICAgICAgaDogaCB8fCAxMFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL0RyYXdzIGVpdGhlciB0aGUgc2V0IG9iamVjdCBkZXNjcmliZWQgYnkgdGhlIHBhcmFtZXRlcnMsIFxuICAvL29yIGRyYXdzIGFuIG9iamVjdCBhY2NvcmRpbmcgdG8gdGhlIHBhc3NlZCBpbiBmdW5jdGlvblxuICBkcmF3KGZuX29iakRyYXcpIHtcbiAgICBpZiAoZm5fb2JqRHJhdykge1xuICAgICAgZm5fb2JqRHJhdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldE9iaigpO1xuICAgIH1cbiAgfVxuXG4gIC8vRHJhd3MgdGhlIHNldCBvYmplY3RcbiAgc2V0T2JqKCkge1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh0aGlzLnBvcy54LCB0aGlzLnBvcy55LCB0aGlzLnNpemUudywgdGhpcy5zaXplLmgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNPYmplY3Q7Il0sIm5hbWVzIjpbIlBoeXNPYmplY3QiLCJwYXJlbnQiLCJvcHRpb25zIiwiY2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJjb2xvciIsInBvcyIsInNpemUiLCJmbl9vYmpEcmF3Iiwic2V0T2JqIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ4IiwieSIsInciLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/phys_object.js\n");

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