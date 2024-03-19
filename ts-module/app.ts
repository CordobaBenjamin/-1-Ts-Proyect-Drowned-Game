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

let lenghtPlaterOneWord = playerOneLetters.length
let lenghtPlaterTwoWord = playerTwoLetters.length

console.log(lenghtPlaterOneWord);
console.log(lenghtPlaterTwoWord);




for (let underScore = 0; underScore < lenghtPlaterOneWord + 1; underScore++) {

    if (document.getElementById("divPlace") !== null) {
        document.getElementById("divPlace")!.innerHTML += `<h5 id='removeElement${underScore}'> .__. </h5>`;
    }}


function verifyLetterFunction (value:string) {

    function booleanLetter(letra: string, array: string[]): boolean {
        for (let elemento of array) {
            if (elemento === letra) {
                return true; }}

        return false; }
    
        if (booleanLetter(value, playerOneLetters)) {
            console.log("esta la letra"); 

        } else {
            console.log("no esta")
                let contador:number = 0;
                contador++;
                if (contador < 6) {
                    
                } else {
                    alert("Lose")
                }}}






function checkForWin () {  
            if (playerOneLetters.toString() === playerTwoLetters.toString()) {
                alert("WIN"); }}


// Interfaz para describir la estructura de keyboardData
interface KeyboardData {
    [key: string]: HTMLElement;
}

const keyboardDataTyped = keyboardData as KeyboardData;

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
            verifyLetterFunction(letter)
            checkForWin() });}}

 
            


