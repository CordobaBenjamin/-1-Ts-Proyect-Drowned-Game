
//! Importe de las variables "key" (Para el teclado virtual).
import * as keyboardData from "./keyboardData";

//! Declaración global de la interfaz String
declare global {
    interface String {
        indicesOf(character: string): number[]; }
};

//! Constante que recupera el valor de local storage. subido en el archivo './ts-module/correctWord-Function.ts'
const localStorageValue = localStorage.getItem("Input Value");

//! Arrays de String que almacenan tanto las palabras del jugador 1 y 2, como las letras necesarias para formar estas.
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

//! Metodo para saber cuantas casillas ocupa la palabra.
let lenghtPlayerOneWord = playerOneWord.length
let lenghtPlayerTwoWord = playerTwoWord.length


//! Ciclo para crear las casillas (underscore) con los digitos de la palabra.
for (let underScore = 0; underScore < lenghtPlayerOneWord; underScore++) {
    if (document.getElementById("divPlace") !== null) {
        document.getElementById("divPlace")!.innerHTML += `<h5 id='replaceElement${underScore}'> ._. </h5>`;
    }
}

//! Contador para acumular cuantas veces se puede equivocar el jugador.     
let contador = 0;

//! Funcion para crear las consecuencias de una letra correcta o invalida.
function verifyLetterFunction(value: string) {

     //! Funcion para verificar si la letra puesta por el jugador, es correcta o invalida.
        function booleanLetter(letra: string, array: string[]): boolean {
            for (let elemento of array) {
            if (elemento === letra) {
            return true; }} return false; }

    //! Funcion creada para remplazar las casillas vacias (underscore) por las letras acertadas. En el caso que el jugador no acierte la letra, leer linea 77 (else)
    if (booleanLetter(value, playerOneLetters)) {
        //! Interfaz que indica que "indicesOf" acepta como valor un string, devuelve un numero y este se transforma en string.
        interface String {
            indicesOf(character: string): number[]; 
        };
        //! Funcion que permite saber el orden en el cual van las letras de la palabra correcta
        String.prototype.indicesOf = function (character: string): number[] {
            const indices: number[] = [];
            for (let i = 0; i < this.length; i++) {
                if (this.charAt(i) === character) {
                    indices.push(i); }} return indices;
        };

        //! Ciclo que crea las casillas.
        if (localStorageValue !== null) {
            //! Se le aplica la funcion indicesOf creada anteriormente, a la constante traido del Local Storage declarada anteriormente.
            const indices = localStorageValue.indicesOf(value);
                //! Se utiliza el metodo forEach para cambiar la casilla vacia, por la letra correcta, segun el orden al que le corresponda.
                indices.forEach(index =>  {
                    const replaceId = `replaceElement${index}`;
                    const letterToRePlace = document.getElementById(replaceId);
                    if (letterToRePlace !== null) {
                        letterToRePlace!.innerHTML = `<h5>${value}<h5>`;
        }})};

    //! Si el jugador, no acerto la letra segun el numero de errores, se va armando el StickMan con un maximo de 6 intentos.
    } else {

        //! Funcion creada para contar las veces que se equivoca el jugador, por cada equivocacion se refresca la pagina cambiando el dibujo del ahorcado.    
        function addConter(): any {
            contador++;
            //! Mientras el contador sea menor de 6, el jugador va a poder seguir probando letras. cada ves que la letra sea incorrecta se ira armando cada ves mas el StickMan.
            if (contador < 6) {
                //! En cada caso que el jugador se haya equivocado cambiara la imagen del StickMan segun el numero de veces equivocado.
                switch (contador) {
                    case 1:
                        if (document.getElementById("newStep") !== null) {
                            document.getElementById("newStep")!.innerHTML = `<img src="./src/step 0.png" class="stepsStyle" id="removeStep" >`
                        }
                        break;

                    case 2:
                        if (document.getElementById("newStep") !== null) {
                            document.getElementById("newStep")!.innerHTML = `<img src="./src/step 1.png" class="stepsStyle" id="removeStep">`
                        }
                        break;

                    case 3:
                        if (document.getElementById("newStep") !== null) {
                            document.getElementById("newStep")!.innerHTML = `<img src="./src/step 2.png" class="stepsStyle" id="removeStep">`
                        }
                        break;

                    case 4:
                        if (document.getElementById("newStep") !== null) {
                            document.getElementById("newStep")!.innerHTML = `<img src="./src/step 3.png" class="stepsStyle" id="removeStep">`
                        }
                        break;

                    case 5:
                        if (document.getElementById("newStep") !== null) {
                            document.getElementById("newStep")!.innerHTML = `<img src="./src/step 4.png" class="stepsStyle" id="removeStep">`
                        }
                        break;
                }
            }

            //! Si el jugador tiene 6 intentos fallidos, cambiara el StickMan a uno muerto, y el titulo cambiara a "Perdiste"
            else {
                if (document.getElementById("newStep") !== null) {
                    document.getElementById("removeStep")?.remove()
                    document.getElementById("newStep")!.innerHTML += `<img src="./src/step 5.png" class="stepsStyle" id="removeStep">`
                }
                const winOrLoseTittleElement = document.getElementById("winOrLoseTittle");
                if (winOrLoseTittleElement !== null) {

                    winOrLoseTittleElement.className = "tittleLose"
                    winOrLoseTittleElement.innerHTML = "!PERDISTE!";
                }
                
            }   
          //! Se invoca a la funcion cada ves que el jugador no acierta le letra.  
        } addConter()
    }
}

//! Funcion para chequear si el jugador puso las letras necesarias para completar la palabra.
function checkForWin() {
    console.log(playerTwoLetters);
    
    let contieneTodasLasLetras = true;

    //! Verificar si todas las letras de playerOneLetters están en playerTwoLetters
    playerOneLetters.forEach(letter => {
        if (playerTwoLetters.indexOf(letter) === -1) {
            contieneTodasLasLetras = false;
            return; //! Salir del bucle forEach si encontramos una letra que falta
        }
    });

    if (contieneTodasLasLetras) {
        const winOrLoseTittleElement = document.getElementById("winOrLoseTittle");
        if (winOrLoseTittleElement !== null) {
            winOrLoseTittleElement.className = "tittleWin";
            winOrLoseTittleElement.innerHTML = "!GANASTE!";
        }
    }
}

//! Interfaz para describir la estructura de keyboardData
interface KeyboardData {
    [key: string]: HTMLElement;
}

const keyboardDataTyped = keyboardData as KeyboardData;

//! Función auxiliar para acceder a las propiedades de keyboardData
function getKey(keyBucle: number): HTMLElement | undefined {
    const keyName = `key${keyBucle}`;
    return keyboardDataTyped[keyName];
}

//! Bucle para poder utiliar un Evento OnClick sin necesidad de escribir uno por cada letra.
for (let keyBucle = 1; keyBucle < 27; keyBucle++) {
    const key = getKey(keyBucle);
    if (key) {
        key.addEventListener("click", (event) => {

            //! Recupera la letra del HTML
            const letter = key.innerHTML

            //! Se le añade la letra al array "playerTwoLetters" para que la funcion "checkForWin" pueda verificar si el jugador gano.
            playerTwoLetters.push(letter);
            //! Ejecuta la funcion "verifyLetterFunction" la cual crea las consecuencias sobre si la letra es correcta o invalida
            verifyLetterFunction(letter)
            //! Ejecuta la funcion "checkForWin" verificando si el jugador, ya completo las letras necesarias para ganar.
            checkForWin()
        });
    }
}


//! Función que ejectua lo mismo que OnClick pero cambiando el evento por un KeyPress.
function letterToArray(letter: string) {
    playerTwoLetters.push(letter); 
    verifyLetterFunction(letter)
    checkForWin()
}

//! Recupera la letra que se presiona, y se activa la funcion "letterToArray" con el valor de la letra
document.addEventListener("keypress", (event) => {
    let keyPushLowerCase = event.key; 
    let keyPushUpperCase = keyPushLowerCase.toUpperCase()
    letterToArray(keyPushUpperCase); 
});





