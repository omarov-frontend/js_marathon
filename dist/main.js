/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pokemon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemon.js */ \"./src/pokemon.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nvar player1 = new _pokemon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  name: 'Pikachu',\n  defaultHP: 250,\n  damageHP: 250,\n  selectors: 'character'\n});\nvar player2 = new _pokemon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  name: 'Charmander',\n  defaultHP: 250,\n  damageHP: 250,\n  selectors: 'enemy'\n});\nconsole.log(player1);\nconsole.log(player2); // функция - замыкание\n\nfunction countClick() {\n  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;\n  var el = arguments.length > 1 ? arguments[1] : undefined;\n  var innerText = el.innerText;\n  el.innerText = \"\".concat(innerText, \" (\").concat(count, \")\");\n  return function () {\n    count--;\n    el.innerText = \"\".concat(innerText, \" (\").concat(count, \")\");\n\n    if (count === 0) {\n      el.disabled = true;\n    }\n\n    return count;\n  };\n}\n\nvar BTNS = {\n  thunder: document.getElementById('btn-kick'),\n  fire: document.getElementById('btn-fire'),\n  fatality: document.getElementById('btn-fatality'),\n  cobra: document.getElementById('btn-cobra')\n};\nvar countThunder = countClick(6, BTNS.thunder);\nBTNS.thunder.addEventListener('click', function () {\n  countThunder();\n  player1.changeHP(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(55), function (count) {\n    generateLog(player1, player2, count);\n  });\n  player2.changeHP(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(55), function (count) {\n    generateLog(player2, player1, count);\n  });\n});\nvar countFire = countClick(5, BTNS.fire);\nBTNS.fire.addEventListener('click', function () {\n  countFire();\n  player1.changeHP(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(60), function (count) {\n    generateLog(player1, player2, count);\n  });\n  player2.changeHP(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(60), function (count) {\n    generateLog(player2, player1, count);\n  });\n});\nvar countFatality = countClick(2, BTNS.fatality);\nBTNS.fatality.addEventListener('click', function () {\n  countFatality();\n  player1.changeHP(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(150), function (count) {\n    generateLog(player1, player2, count);\n  });\n  player2.changeHP(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(150), function (count) {\n    generateLog(player2, player1, count);\n  });\n});\nvar countCobra = countClick(10, BTNS.cobra);\nBTNS.cobra.addEventListener('click', function () {\n  countCobra();\n  player1.changeHP(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(30), function (count) {\n    generateLog(player1, player2, count);\n  });\n  player2.changeHP(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(30), function (count) {\n    generateLog(player2, player1, count);\n  });\n});\n\nfunction generateLog(player1, player2, count) {\n  var logs = [\"<strong>\".concat(player1.name, \"</strong> \\u0432\\u0441\\u043F\\u043E\\u043C\\u043D\\u0438\\u043B \\u0447\\u0442\\u043E-\\u0442\\u043E \\u0432\\u0430\\u0436\\u043D\\u043E\\u0435, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E <strong>\").concat(player2.name, \"</strong>, \\u043D\\u0435 \\u043F\\u043E\\u043C\\u043D\\u044F \\u0441\\u0435\\u0431\\u044F \\u043E\\u0442 \\u0438\\u0441\\u043F\\u0443\\u0433\\u0430, \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B \\u0432 \\u043F\\u0440\\u0435\\u0434\\u043F\\u043B\\u0435\\u0447\\u044C\\u0435 \\u0432\\u0440\\u0430\\u0433\\u0430. \\u041D\\u0430\\u043D\\u0435\\u0441 - <span class='text-red'>\").concat(count, \"</span> \\u0443\\u0440\\u043E\\u043D\\u0430, \\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0432 - <span class='text-green'>\").concat(player1.damageHP, \" \\u0438\\u0437 \").concat(player2.defaultHP, \"</span> \\u0436\\u0438\\u0437\\u043D\\u0435\\u0439!\"), \"<strong>\".concat(player1.name, \"</strong> \\u043F\\u043E\\u043F\\u0435\\u0440\\u0445\\u043D\\u0443\\u043B\\u0441\\u044F, \\u0438 \\u0437\\u0430 \\u044D\\u0442\\u043E <strong>\").concat(player2.name, \"</strong> \\u0441 \\u0438\\u0441\\u043F\\u0443\\u0433\\u0443 \\u043F\\u0440\\u0438\\u043B\\u043E\\u0436\\u0438\\u043B \\u043F\\u0440\\u044F\\u043C\\u043E\\u0439 \\u0443\\u0434\\u0430\\u0440 \\u043A\\u043E\\u043B\\u0435\\u043D\\u043E\\u043C \\u0432 \\u043B\\u043E\\u0431 \\u0432\\u0440\\u0430\\u0433\\u0430. \\u041D\\u0430\\u043D\\u0435\\u0441 - <span class='text-red'>\").concat(count, \"</span> \\u0443\\u0440\\u043E\\u043D\\u0430, \\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0432 - <span class='text-green'>\").concat(player1.damageHP, \" \\u0438\\u0437 \").concat(player2.defaultHP, \"</span> \\u0436\\u0438\\u0437\\u043D\\u0435\\u0439!\"), \"<strong>\".concat(player1.name, \"</strong> \\u0437\\u0430\\u0431\\u044B\\u043B\\u0441\\u044F, \\u043D\\u043E \\u0432 \\u044D\\u0442\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u043D\\u0430\\u0433\\u043B\\u044B\\u0439 <strong>\").concat(player2.name, \"</strong>, \\u043F\\u0440\\u0438\\u043D\\u044F\\u0432 \\u0432\\u043E\\u043B\\u0435\\u0432\\u043E\\u0435 \\u0440\\u0435\\u0448\\u0435\\u043D\\u0438\\u0435, \\u043D\\u0435\\u0441\\u043B\\u044B\\u0448\\u043D\\u043E \\u043F\\u043E\\u0434\\u043E\\u0439\\u0434\\u044F \\u0441\\u0437\\u0430\\u0434\\u0438, \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B. \\u041D\\u0430\\u043D\\u0435\\u0441 - <span class='text-red'>\").concat(count, \"</span> \\u0443\\u0440\\u043E\\u043D\\u0430, \\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0432 - <span class='text-green'>\").concat(player1.damageHP, \" \\u0438\\u0437 \").concat(player2.defaultHP, \"</span> \\u0436\\u0438\\u0437\\u043D\\u0435\\u0439!\"), \"<strong>\".concat(player1.name, \"</strong> \\u043F\\u0440\\u0438\\u0448\\u0435\\u043B \\u0432 \\u0441\\u0435\\u0431\\u044F, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E <strong>\").concat(player2.name, \"</strong> \\u0441\\u043B\\u0443\\u0447\\u0430\\u0439\\u043D\\u043E \\u043D\\u0430\\u043D\\u0435\\u0441 \\u043C\\u043E\\u0449\\u043D\\u0435\\u0439\\u0448\\u0438\\u0439 \\u0443\\u0434\\u0430\\u0440. \\u041D\\u0430\\u043D\\u0435\\u0441 - <span class='text-red'>\").concat(count, \"</span> \\u0443\\u0440\\u043E\\u043D\\u0430, \\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0432 - <span class='text-green'>\").concat(player1.damageHP, \" \\u0438\\u0437 \").concat(player2.defaultHP, \"</span> \\u0436\\u0438\\u0437\\u043D\\u0435\\u0439!\"), \"<strong>\".concat(player1.name, \"</strong> \\u043F\\u043E\\u043F\\u0435\\u0440\\u0445\\u043D\\u0443\\u043B\\u0441\\u044F, \\u043D\\u043E \\u0432 \\u044D\\u0442\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F <strong>\").concat(player2.name, \"</strong> \\u043D\\u0435\\u0445\\u043E\\u0442\\u044F \\u0440\\u0430\\u0437\\u0434\\u0440\\u043E\\u0431\\u0438\\u043B \\u043A\\u0443\\u043B\\u0430\\u043A\\u043E\\u043C <\\u0432\\u044B\\u0440\\u0435\\u0437\\u0430\\u043D\\u043D\\u043E \\u0446\\u0435\\u043D\\u0437\\u0443\\u0440\\u043E\\u0439> \\u043F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043D\\u0438\\u043A\\u0430. \\u041D\\u0430\\u043D\\u0435\\u0441 - <span class='text-red'>\").concat(count, \"</span> \\u0443\\u0440\\u043E\\u043D\\u0430, \\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0432 - <span class='text-green'>\").concat(player1.damageHP, \" \\u0438\\u0437 \").concat(player2.defaultHP, \"</span> \\u0436\\u0438\\u0437\\u043D\\u0435\\u0439!\"), \"<strong>\".concat(player1.name, \"</strong> \\u0443\\u0434\\u0438\\u0432\\u0438\\u043B\\u0441\\u044F, \\u0430 <strong>\").concat(player2.name, \"</strong> \\u043F\\u043E\\u0448\\u0430\\u0442\\u043D\\u0443\\u0432\\u0448\\u0438\\u0441\\u044C \\u0432\\u043B\\u0435\\u043F\\u0438\\u043B \\u043F\\u043E\\u0434\\u043B\\u044B\\u0439 \\u0443\\u0434\\u0430\\u0440. \\u041D\\u0430\\u043D\\u0435\\u0441 - <span class='text-red'>\").concat(count, \"</span> \\u0443\\u0440\\u043E\\u043D\\u0430, \\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0432 - <span class='text-green'>\").concat(player1.damageHP, \" \\u0438\\u0437 \").concat(player2.defaultHP, \"</span> \\u0436\\u0438\\u0437\\u043D\\u0435\\u0439!\"), \"<strong>\".concat(player1.name, \"</strong> \\u0432\\u044B\\u0441\\u043C\\u043E\\u0440\\u043A\\u0430\\u043B\\u0441\\u044F, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E <strong>\").concat(player2.name, \"</strong> \\u043F\\u0440\\u043E\\u0432\\u0435\\u043B \\u0434\\u0440\\u043E\\u0431\\u044F\\u0449\\u0438\\u0439 \\u0443\\u0434\\u0430\\u0440. \\u041D\\u0430\\u043D\\u0435\\u0441 - <span class='text-red'>\").concat(count, \"</span> \\u0443\\u0440\\u043E\\u043D\\u0430, \\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0432 - <span class='text-green'>\").concat(player1.damageHP, \" \\u0438\\u0437 \").concat(player2.defaultHP, \"</span> \\u0436\\u0438\\u0437\\u043D\\u0435\\u0439!\"), \"<strong>\".concat(player1.name, \"</strong> \\u043F\\u043E\\u0448\\u0430\\u0442\\u043D\\u0443\\u043B\\u0441\\u044F, \\u0438 \\u0432\\u043D\\u0435\\u0437\\u0430\\u043F\\u043D\\u043E \\u043D\\u0430\\u0433\\u043B\\u044B\\u0439 <strong>\").concat(player2.name, \"</strong> \\u0431\\u0435\\u0441\\u043F\\u0440\\u0438\\u0447\\u0438\\u043D\\u043D\\u043E \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B \\u0432 \\u043D\\u043E\\u0433\\u0443 \\u043F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043D\\u0438\\u043A\\u0430. \\u041D\\u0430\\u043D\\u0435\\u0441 - <span class='text-red'>\").concat(count, \"</span> \\u0443\\u0440\\u043E\\u043D\\u0430, \\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0432 - <span class='text-green'>\").concat(player1.damageHP, \" \\u0438\\u0437 \").concat(player2.defaultHP, \"</span> \\u0436\\u0438\\u0437\\u043D\\u0435\\u0439!\"), \"<strong>\".concat(player1.name, \"</strong> \\u0440\\u0430\\u0441\\u0441\\u0442\\u0440\\u043E\\u0438\\u043B\\u0441\\u044F, \\u043A\\u0430\\u043A \\u0432\\u0434\\u0440\\u0443\\u0433, \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E <strong>\").concat(player2.name, \"</strong> \\u0441\\u043B\\u0443\\u0447\\u0430\\u0439\\u043D\\u043E \\u0432\\u043B\\u0435\\u043F\\u0438\\u043B \\u0441\\u0442\\u043E\\u043F\\u043E\\u0439 \\u0432 \\u0436\\u0438\\u0432\\u043E\\u0442 \\u0441\\u043E\\u043F\\u0435\\u0440\\u043D\\u0438\\u043A\\u0430. \\u041D\\u0430\\u043D\\u0435\\u0441 - <span class='text-red'>\").concat(count, \"</span> \\u0443\\u0440\\u043E\\u043D\\u0430, \\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0432 - <span class='text-green'>\").concat(player1.damageHP, \" \\u0438\\u0437 \").concat(player2.defaultHP, \"</span> \\u0436\\u0438\\u0437\\u043D\\u0435\\u0439!\"), \"<strong>\".concat(player1.name, \"</strong> \\u043F\\u044B\\u0442\\u0430\\u043B\\u0441\\u044F \\u0447\\u0442\\u043E-\\u0442\\u043E \\u0441\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C, \\u043D\\u043E \\u0432\\u0434\\u0440\\u0443\\u0433, \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E <strong>\").concat(player2.name, \"</strong> \\u0441\\u043E \\u0441\\u043A\\u0443\\u043A\\u0438, \\u0440\\u0430\\u0437\\u0431\\u0438\\u043B \\u0431\\u0440\\u043E\\u0432\\u044C \\u0441\\u043E\\u043F\\u0435\\u0440\\u043D\\u0438\\u043A\\u0443. \\u041D\\u0430\\u043D\\u0435\\u0441 - <span class='text-red'>\").concat(count, \"</span> \\u0443\\u0440\\u043E\\u043D\\u0430, \\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0432 - <span class='text-green'>\").concat(player1.damageHP, \" \\u0438\\u0437 \").concat(player2.defaultHP, \"</span> \\u0436\\u0438\\u0437\\u043D\\u0435\\u0439!\")];\n  var log = logs[Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(logs.length) - 1];\n  var $logsElement = document.querySelector('#logs');\n  var $paragraph = document.createElement('p');\n  $paragraph.innerHTML = log;\n  $logsElement.insertBefore($paragraph, $logsElement.children[0]);\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/pokemon.js":
/*!************************!*\
  !*** ./src/pokemon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar Selectors = function Selectors(name) {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Selectors);\n\n  this.elHP = document.getElementById(\"health-\".concat(name));\n  this.elProgressbar = document.getElementById(\"progressbar-\".concat(name));\n};\n\nvar Pokemon = /*#__PURE__*/function (_Selectors) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Pokemon, _Selectors);\n\n  var _super = _createSuper(Pokemon);\n\n  function Pokemon(_ref) {\n    var _this;\n\n    var name = _ref.name,\n        _damageHP = _ref.damageHP,\n        _defaultHP = _ref.defaultHP,\n        selectors = _ref.selectors;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Pokemon);\n\n    _this = _super.call(this, selectors);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), \"changeHP\", function (count, cb) {\n      _this.damageHP -= count;\n\n      if (_this.damageHP <= 0) {\n        _this.damageHP = 0;\n        alert(\"\\u0411\\u0435\\u0434\\u043D\\u044B\\u0439 \".concat(_this.name, \" \\u043F\\u0440\\u043E\\u0438\\u0433\\u0440\\u0430\\u043B \\u0431\\u043E\\u0439!\"));\n        cb.disabled = true;\n      }\n\n      _this.renderHP();\n\n      if (cb) cb(count);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), \"renderHP\", function () {\n      _this.renderHPlife();\n\n      _this.renderProgressbarHP();\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), \"renderHPlife\", function () {\n      var _assertThisInitialize = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this),\n          elHP = _assertThisInitialize.elHP,\n          damageHP = _assertThisInitialize.damageHP,\n          defaultHP = _assertThisInitialize.defaultHP;\n\n      elHP.innerText = \"\".concat(damageHP, \" / \").concat(defaultHP);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), \"renderProgressbarHP\", function () {\n      var _assertThisInitialize2 = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this),\n          elProgressbar = _assertThisInitialize2.elProgressbar,\n          damageHP = _assertThisInitialize2.damageHP,\n          defaultHP = _assertThisInitialize2.defaultHP;\n\n      var percent = \"\".concat(damageHP * 100 / defaultHP);\n      elProgressbar.style.width = \"\".concat(percent + '%');\n    });\n\n    _this.name = name;\n    _this.damageHP = _damageHP;\n    _this.defaultHP = _defaultHP;\n\n    _this.renderHP();\n\n    return _this;\n  }\n\n  return Pokemon;\n}(Selectors);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);\n\n//# sourceURL=webpack:///./src/pokemon.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\nfunction random(num) {\n  return Math.ceil(Math.random() * num);\n}\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });