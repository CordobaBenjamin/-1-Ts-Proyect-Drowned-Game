import * as keyboardData from "./keyboardData";

let playerOneWord: string[] = ["Letter1", "Letter7", "Letter3", "Letter12", "Letter9"]

let playerTwoWord: string[] = [];

function checkForWin() {
    if (playerOneWord.toString() === playerTwoWord.toString()) {
        console.log("WIN");
    }
}

// Interfaz para describir la estructura de keyboardData
interface KeyboardData {
    [key: string]: HTMLElement;
}

const keyboardDataTyped = keyboardData as KeyboardData;

// Función auxiliar para acceder a las propiedades de keyboardData
function getKey(keyBucle: number): HTMLElement | undefined {
    const keyName = `key${keyBucle}`;
    return keyboardDataTyped[keyName];
}

// Bucle para agregar los controladores de eventos
for (let keyBucle = 1; keyBucle < 27; keyBucle++) {
    const key = getKey(keyBucle);
    if (key) {
        key.addEventListener("click", (event) => {
            console.log(key);
            const letter = `Letter${keyBucle}` as const; // Definimos la constante `letter` como `Letter` seguido del número del bucle
            playerTwoWord.push(letter); // Agregamos la constante `letter` al array `playerTwoWord`
            checkForWin()
        });
    }
}

console.log(playerOneWord);
console.log(playerTwoWord);


