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
Object.defineProperty(exports, "__esModule", ({ value: true }));
//! Importe de las variables "key" (Para el teclado virtual).
const keyboardData = __importStar(__webpack_require__(/*! ./keyboardData */ "./ts-module/keyboardData.ts"));
let localStorageValue = localStorage.getItem("Input Value");
let playerOneWord = [];
let playerTwoWord = [];
let playerOneLetters = [];
let playerTwoLetters = [];
if (localStorageValue !== null) {
    //! Palabra completa que adivinar
    playerOneWord = localStorageValue.split("");
    //! Letras necesarias para adivinar la palabra
    playerOneLetters = localStorageValue.split("").filter((value, index, self) => self.indexOf(value) === index);
}
console.log("Player One Word:", playerOneWord); // ["tele"]
console.log("Player One Letters:", playerOneLetters); // ["t", "e", "l"]
// console.log("Player Two Word:", playerTwoWord); // []
// console.log("Player Two Letters:", playerTwoLetters); // []
//! Metodo para saber cuantas casillas ocupa la palabra.
let lenghtPlayerOneWord = playerOneWord.length;
let lenghtPlayerTwoWord = playerTwoWord.length;
// console.log(lenghtPlayerOneWord);
// console.log(lenghtPlayerTwoWord);
//! Ciclo para crear las casillas (underscore) con los digitos de la palabra.
for (let underScore = 0; underScore < lenghtPlayerOneWord; underScore++) {
    if (document.getElementById("divPlace") !== null) {
        document.getElementById("divPlace").innerHTML += `<h5 id='removeElement${underScore}'> .__. </h5>`;
    }
}
//! Contador para acumular cuantas veces se puede equivocar el jugador     
let contador = 0;
//! Funcion para crear las consecuencias de una letra correcta o invalida.
function verifyLetterFunction(value) {
    //! Funcion para verificar si la letra puesta por el jugador, es correcta o invalida.
    function booleanLetter(letra, array) {
        for (let elemento of array) {
            if (elemento === letra) {
                return true;
            }
        }
        return false;
    }
    //! Funcion creada para remplazar las casillas vacias (underscore) por las letras acertadas.
    if (booleanLetter(value, playerOneLetters)) {
        console.log(value);
        String.prototype.indicesOf = function (character) {
            const indices = [];
            for (let i = 0; i < this.length; i++) {
                if (this.charAt(i) === character) {
                    indices.push(i);
                }
            }
            return indices;
        };
        const correctWord = localStorageValue;
        if (correctWord !== null) {
            console.log(correctWord.indicesOf(`${value}`));
        }
    }
    else {
        //! Funcion creada para contar las veces que se equivoca el jugador, por cada equivocacion se refresca la pagina cambiando el dibujo del ahorcado.    
        function addConter() {
            var _a, _b, _c, _d, _e, _f;
            console.log(value);
            contador++;
            if (contador < 6) {
                switch (contador) {
                    case 1:
                        if (document.getElementById("newStep") !== null) {
                            (_a = document.getElementById("removeStep")) === null || _a === void 0 ? void 0 : _a.remove();
                            document.getElementById("newStep").innerHTML += `<img src="./src/step 0.png" class="stepsStyle" id="removeStep" >`;
                        }
                        break;
                    case 2:
                        if (document.getElementById("newStep") !== null) {
                            (_b = document.getElementById("removeStep")) === null || _b === void 0 ? void 0 : _b.remove();
                            document.getElementById("newStep").innerHTML += `<img src="./src/step 1.png" class="stepsStyle" id="removeStep">`;
                        }
                        break;
                    case 3:
                        if (document.getElementById("newStep") !== null) {
                            (_c = document.getElementById("removeStep")) === null || _c === void 0 ? void 0 : _c.remove();
                            document.getElementById("newStep").innerHTML += `<img src="./src/step 2.png" class="stepsStyle" id="removeStep">`;
                        }
                        break;
                    case 4:
                        if (document.getElementById("newStep") !== null) {
                            (_d = document.getElementById("removeStep")) === null || _d === void 0 ? void 0 : _d.remove();
                            document.getElementById("newStep").innerHTML += `<img src="./src/step 3.png" class="stepsStyle" id="removeStep">`;
                        }
                        break;
                    case 5:
                        if (document.getElementById("newStep") !== null) {
                            (_e = document.getElementById("removeStep")) === null || _e === void 0 ? void 0 : _e.remove();
                            document.getElementById("newStep").innerHTML += `<img src="./src/step 4.png" class="stepsStyle" id="removeStep">`;
                        }
                        break;
                }
            }
            else {
                if (document.getElementById("newStep") !== null) {
                    (_f = document.getElementById("removeStep")) === null || _f === void 0 ? void 0 : _f.remove();
                    document.getElementById("newStep").innerHTML += `<img src="./src/step 5.png" class="stepsStyle" id="removeStep">`;
                }
            }
        }
        addConter();
    }
}
//! Funcion para chequear si el jugador puso las letras necesarias para completar la palabra.
function checkForWin() {
    if (playerOneLetters.toString() === playerTwoLetters.toString()) {
        alert("WIN");
    }
}
const keyboardDataTyped = keyboardData;
//! Función auxiliar para acceder a las propiedades de keyboardData
function getKey(keyBucle) {
    const keyName = `key${keyBucle}`;
    return keyboardDataTyped[keyName];
}
//! Bucle para agregar los controladores de eventos
for (let keyBucle = 1; keyBucle < 27; keyBucle++) {
    const key = getKey(keyBucle);
    if (key) {
        key.addEventListener("click", (event) => {
            // console.log(key);
            const letter = key.innerHTML;
            playerTwoLetters.push(letter); // Agregamos la constante `letter` al array `playerTwoWord` 
            verifyLetterFunction(letter);
            checkForWin();
        });
    }
}


/***/ }),

/***/ "./ts-module/keyboardData.ts":
/*!***********************************!*\
  !*** ./ts-module/keyboardData.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.key26 = exports.key25 = exports.key24 = exports.key23 = exports.key22 = exports.key21 = exports.key20 = exports.key19 = exports.key18 = exports.key17 = exports.key16 = exports.key15 = exports.key14 = exports.key13 = exports.key12 = exports.key11 = exports.key10 = exports.key9 = exports.key8 = exports.key7 = exports.key6 = exports.key5 = exports.key4 = exports.key3 = exports.key2 = exports.key1 = void 0;
//! Exportacion de constantes donde cada letra es su igual en orden QWERTY y se le vincula un nodo en el DOM
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