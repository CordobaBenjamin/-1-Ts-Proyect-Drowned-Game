
//! Importe de las variables "key" (Para el teclado virtual).
import * as keyboardData from "./keyboardData";

//! Declaración global de la interfaz String
declare global {
    interface String {
        indicesOf(character: string): number[];
    }
}

let localStorageValue = localStorage.getItem("Input Value");

let playerOneWord: string[] = [];
let playerTwoWord: string[] = [];
let playerOneLetters: string[] = [];
let playerTwoLetters: string[] = [];

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
let lenghtPlayerOneWord = playerOneWord.length
let lenghtPlayerTwoWord = playerTwoWord.length
// console.log(lenghtPlayerOneWord);
// console.log(lenghtPlayerTwoWord);

//! Ciclo para crear las casillas (underscore) con los digitos de la palabra.
for (let underScore = 0; underScore < lenghtPlayerOneWord; underScore++) {
    if (document.getElementById("divPlace") !== null) {
        document.getElementById("divPlace")!.innerHTML += `<h5 id='replaceElement${underScore}'> ._. </h5>`;
    }}

//! Contador para acumular cuantas veces se puede equivocar el jugador     
let contador = 0;

//! Funcion para crear las consecuencias de una letra correcta o invalida.
function verifyLetterFunction (value:string) {

        //! Funcion para verificar si la letra puesta por el jugador, es correcta o invalida.
             function booleanLetter(letra: string, array: string[]): boolean {
                for (let elemento of array) {
                if (elemento === letra) {
                    return true; }}
                return false; }
        
        //! Funcion creada para remplazar las casillas vacias (underscore) por las letras acertadas.
        if (booleanLetter(value, playerOneLetters)) {
            console.log(value);
            
                    interface String {
                            indicesOf(character: string): number[];}
                            String.prototype.indicesOf = function(character: string): number[] {
                                const indices: number[] = [];
                                for (let i = 0; i < this.length; i++) {
                                    if (this.charAt(i) === character) {
                                        indices.push(i); }}
                        return indices;
                    };

                    if (localStorageValue !== null) {
                        const indices = localStorageValue.indicesOf(value);
                        
                 
                        indices.forEach(index => {
                            const replaceId = `replaceElement${index}`;
                            const letterToRePlace = document.getElementById(replaceId);
                            console.log(letterToRePlace);
                            if (letterToRePlace !== null) {
                                letterToRePlace!.innerHTML = `<h5>${value}<h5>`;
                                
                        }});
                    }
               
        } else 
        
            {
            //! Funcion creada para contar las veces que se equivoca el jugador, por cada equivocacion se refresca la pagina cambiando el dibujo del ahorcado.    
            function addConter():any {
                console.log(value);
                
                contador++;
                if (contador < 6) {  
                    switch (contador) {
                        case 1:
                            if (document.getElementById("newStep") !== null) {
                                document.getElementById("removeStep")?.remove()
                                document.getElementById("newStep")!.innerHTML += `<img src="./src/step 0.png" class="stepsStyle" id="removeStep" >` }
                        break;

                        case 2:
                            if (document.getElementById("newStep") !== null) {
                                document.getElementById("removeStep")?.remove()
                                document.getElementById("newStep")!.innerHTML += `<img src="./src/step 1.png" class="stepsStyle" id="removeStep">` }
                        break;

                        case 3:
                            if (document.getElementById("newStep") !== null) {
                                document.getElementById("removeStep")?.remove()
                                document.getElementById("newStep")!.innerHTML += `<img src="./src/step 2.png" class="stepsStyle" id="removeStep">` }
                        break;

                        case 4:
                            if (document.getElementById("newStep") !== null) {
                                document.getElementById("removeStep")?.remove()
                                document.getElementById("newStep")!.innerHTML += `<img src="./src/step 3.png" class="stepsStyle" id="removeStep">` }
                        break;

                        case 5:
                            if (document.getElementById("newStep") !== null) {
                                document.getElementById("removeStep")?.remove()
                                document.getElementById("newStep")!.innerHTML += `<img src="./src/step 4.png" class="stepsStyle" id="removeStep">` }
                        break;}} 

                else {
                    if (document.getElementById("newStep") !== null) {
                        document.getElementById("removeStep")?.remove()
                        document.getElementById("newStep")!.innerHTML += `<img src="./src/step 5.png" class="stepsStyle" id="removeStep">`}

                        const winOrLoseTittleElement = document.getElementById("winOrLoseTittle");

                        if (winOrLoseTittleElement !== null) {

                            winOrLoseTittleElement.className = "tittleLose"
                            winOrLoseTittleElement.innerHTML = "!PERDISTE!";
                        }
            }} addConter()}
}

console.log(playerOneLetters.toString());

//! Funcion para chequear si el jugador puso las letras necesarias para completar la palabra.
function checkForWin() {
    let contieneTodasLasLetras = true;
    
    // Verificar si todas las letras de playerOneLetters están en playerTwoLetters
    playerOneLetters.forEach(letter => {
        if (playerTwoLetters.indexOf(letter) === -1) {
            contieneTodasLasLetras = false;
            return; // Salir del bucle forEach si encontramos una letra que falta
        }
    });

    if (contieneTodasLasLetras) {
        const winOrLoseTittleElement = document.getElementById("winOrLoseTittle");
        if (winOrLoseTittleElement !== null) {
            winOrLoseTittleElement.className = "tittleWin";
            winOrLoseTittleElement.innerHTML = "!GANASTE!";
        }
    }}

//! Interfaz para describir la estructura de keyboardData
interface KeyboardData {
    [key: string]: HTMLElement;
}

const keyboardDataTyped = keyboardData as KeyboardData;

//! Función auxiliar para acceder a las propiedades de keyboardData
function getKey(keyBucle: number): HTMLElement | undefined {
    const keyName = `key${keyBucle}`;
    return keyboardDataTyped[keyName];}

//! Bucle para agregar los controladores de eventos
for (let keyBucle = 1; keyBucle < 27; keyBucle++) {
    const key = getKey(keyBucle);
    if (key) {
        key.addEventListener("click", (event) => {
            // console.log(key);
            const letter = key.innerHTML
            playerTwoLetters.push(letter); // Agregamos la constante `letter` al array `playerTwoWord` 
            verifyLetterFunction(letter)
            checkForWin() });}}

 
            


