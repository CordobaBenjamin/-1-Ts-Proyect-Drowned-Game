import * as keyboardData from "./keyboardData";

let localStorageValue = localStorage.getItem("Input Value");

let playerOneWord: string[] = [];
let playerTwoWord: string[] = [];

let playerOneLetters: string[] = [];
let playerTwoLetters: string[] = [];

if (localStorageValue !== null) {
    // Para el primer jugador (palabra completa)
    playerOneWord = localStorageValue.split("");

    // Para el segundo jugador (letras únicas)
    playerOneLetters = localStorageValue.split("").filter((value, index, self) => self.indexOf(value) === index);
}

console.log("Player One Word:", playerOneWord); // ["tele"]
console.log("Player One Letters:", playerOneLetters); // ["t", "e", "l"]
console.log("Player Two Word:", playerTwoWord); // []
console.log("Player Two Letters:", playerTwoLetters); // []

let lettersPlayerOneWord = playerOneWord.length
let lettersPlayerTwoWord = playerTwoWord.length

console.log(lettersPlayerOneWord);
console.log(lettersPlayerTwoWord);


for (let underScore = 0; underScore < lettersPlayerOneWord + 1; underScore++) {

    if (document.getElementById("divPlace") !== null) {
        document.getElementById("divPlace")!.innerHTML += `<h5 id='removeElement${underScore}'> .__. </h5>`;
    }}



function checkForWin () {  
            if (playerOneLetters.toString() === playerTwoLetters.toString()) {
                alert("WIN"); }}


// Interfaz para describir la estructura de keyboardData
interface KeyboardData {
    [key: string]: HTMLElement;
}

const keyboardDataTyped = keyboardData as KeyboardData;

function replaceUnderScore(letter: string, index: number) {
    const elementId = `removeElement${index}`;
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `<h5>${letter}</h5>`;
    }
}


// Función auxiliar para acceder a las propiedades de keyboardData
function getKey(keyBucle: number): HTMLElement | undefined {
    const keyName = `key${keyBucle}`;
    return keyboardDataTyped[keyName];}

// Bucle para agregar los controladores de eventos
for (let keyBucle = 1; keyBucle < 27; keyBucle++) {
    const key = getKey(keyBucle);
    if (key) {
        key.addEventListener("click", (event) => {
            console.log(key);
            const letter = key.innerHTML
            playerTwoLetters.push(letter); // Agregamos la constante `letter` al array `playerTwoWord` 
            checkForWin() });}}


