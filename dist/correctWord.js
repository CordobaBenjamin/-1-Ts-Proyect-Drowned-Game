/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./ts-module/correctWord-Function.ts ***!
  \*******************************************/

document.addEventListener("DOMContentLoaded", function (event) {
    let inputData = document.getElementById("playerOneCorrectWord");
    let startGame = document.getElementById("sumbitStartGame");
    function nextPage() {
        let valor = inputData.value;
        let upperValor = valor.toUpperCase();
        localStorage.setItem("Input Value", upperValor);
        window.location.href = 'index.html'; // Redirige a la siguiente página
    }
    startGame.addEventListener("click", (event) => {
        // Llama a nextPage() cuando ocurra el evento click en inputData
        nextPage();
    });
});

/******/ })()
;
//# sourceMappingURL=correctWord.js.map