/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*******************************************!*\
  !*** ./ts-module/correctWord-Function.ts ***!
  \*******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getInputLocalValue = void 0;
let inputData = document.getElementById("playerOneCorrectWord");
console.log(inputData);
let startGame = document.getElementById("sumbitStartGame");
function nextPage() {
    let valor = inputData.value;
    localStorage.setItem("Input Value", valor);
    window.location.href = 'index.html'; // Redirige a la siguiente página
}
startGame.addEventListener("click", (event) => {
    // Llama a nextPage() cuando ocurra el evento click en inputData
    nextPage();
});
function getInputLocalValue() {
    let inputLocalValue = localStorage.getItem("Input Value");
    console.log(inputLocalValue);
    return inputLocalValue;
}
exports.getInputLocalValue = getInputLocalValue;

})();

/******/ })()
;
//# sourceMappingURL=correctWord.js.map