/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts-module/app.ts":
/*!**************************!*\
  !*** ./ts-module/app.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const keyboardData = __importStar(__webpack_require__(/*! ./keyboardData */ "./ts-module/keyboardData.ts"));
(_a = keyboardData.key2) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => {
    keyboardData.key2 && (keyboardData.key2.className = "key1");
});
console.log("!Hola!");
console.log(keyboardData.key5);


/***/ }),

/***/ "./ts-module/keyboardData.ts":
/*!***********************************!*\
  !*** ./ts-module/keyboardData.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.key26 = exports.key25 = exports.key24 = exports.key23 = exports.key22 = exports.key21 = exports.key20 = exports.key19 = exports.key18 = exports.key17 = exports.key16 = exports.key15 = exports.key14 = exports.key13 = exports.key12 = exports.key11 = exports.key10 = exports.key9 = exports.key8 = exports.key7 = exports.key6 = exports.key5 = exports.key4 = exports.key3 = exports.key2 = exports.key1 = void 0;
//! Le asigno a cada letra su igual en orden QWERTY y un nodo en el DOM
exports.key1 = document.getElementById("Q");
exports.key2 = document.getElementById("W");
exports.key3 = document.getElementById("E");
exports.key4 = document.getElementById("R");
exports.key5 = document.getElementById("T");
exports.key6 = document.getElementById("Y");
exports.key7 = document.getElementById("U");
exports.key8 = document.getElementById("I");
exports.key9 = document.getElementById("O");
exports.key10 = document.getElementById("P");
exports.key11 = document.getElementById("A");
exports.key12 = document.getElementById("S");
exports.key13 = document.getElementById("D");
exports.key14 = document.getElementById("F");
exports.key15 = document.getElementById("G");
exports.key16 = document.getElementById("H");
exports.key17 = document.getElementById("J");
exports.key18 = document.getElementById("K");
exports.key19 = document.getElementById("L");
exports.key20 = document.getElementById("Z");
exports.key21 = document.getElementById("X");
exports.key22 = document.getElementById("C");
exports.key23 = document.getElementById("V");
exports.key24 = document.getElementById("B");
exports.key25 = document.getElementById("N");
exports.key26 = document.getElementById("M");


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./ts-module/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map