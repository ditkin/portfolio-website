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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/ditkin/git/portfolio-website/src/index.js: Unterminated string constant (12:24)\\n\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m\\u001b[90m// When the user scrolls the page, execute myFunction\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 12 | \\u001b[39mwindow\\u001b[33m.\\u001b[39maddEventListener(\\u001b[32m'scroll,() => {\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m  \\u001b[36mif\\u001b[39m (window\\u001b[33m.\\u001b[39mpageYOffset \\u001b[33m>\\u001b[39m sticky) {\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m    header\\u001b[33m.\\u001b[39mclassList\\u001b[33m.\\u001b[39madd(\\u001b[32m'sticky'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m  } \\u001b[36melse\\u001b[39m {\\u001b[0m\\n    at Parser.raise (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:3831:17)\\n    at Parser.readString (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:4785:14)\\n    at Parser.getTokenFromCode (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:4464:14)\\n    at Parser.nextToken (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:4034:12)\\n    at Parser.next (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:3974:10)\\n    at Parser.parseSubscript (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:5960:12)\\n    at Parser.parseSubscripts (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:5882:19)\\n    at Parser.parseExprSubscripts (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:5872:17)\\n    at Parser.parseMaybeUnary (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:5842:21)\\n    at Parser.parseExprOps (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:5729:23)\\n    at Parser.parseMaybeConditional (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:5702:23)\\n    at Parser.parseMaybeAssign (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:5647:21)\\n    at Parser.parseExpression (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:5595:23)\\n    at Parser.parseStatementContent (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:7378:23)\\n    at Parser.parseStatement (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:7243:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:7810:25)\\n    at Parser.parseBlockBody (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:7797:10)\\n    at Parser.parseTopLevel (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:7181:10)\\n    at Parser.parse (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:8658:17)\\n    at parse (/Users/ditkin/git/portfolio-website/node_modules/@babel/parser/lib/index.js:10658:38)\\n    at parser (/Users/ditkin/git/portfolio-website/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/Users/ditkin/git/portfolio-website/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/Users/ditkin/git/portfolio-website/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/ditkin/git/portfolio-website/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/ditkin/git/portfolio-website/node_modules/@babel/core/lib/transform.js:34:34)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });