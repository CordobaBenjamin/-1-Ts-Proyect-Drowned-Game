"use strict";
// //! Funcion para asigarnle a cada letra un evento onclick, por cada evento se guarda la letra y se compara con la letra y el orden correcto.
// const keyboardLetters:string[] = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
// //* Se le asigna a cada letra, un nodo del dom, segun la letra y el id del mismo.
// function keepLetter (Element:string):string {
//     return `const ${Element} = document.getElementById("${Element}")`
// }
// //* Se le crea una constante y un evento a cada nodo
// const letterDom = keyboardLetters.map(keepLetter)
// const Q = letterDom[0]
// const W = letterDom[1]
// const E = letterDom[2]
// const R = letterDom[3]
// const T = letterDom[4]
// const Y = letterDom[5]
// const U = letterDom[6]
// const I = letterDom[7]
// const O = letterDom[8]
// const P = letterDom[9]
// const A = letterDom[10]
// const S = letterDom[11]
// const D = letterDom[12]
// const F = letterDom[13]
// const G = letterDom[14]
// const H = letterDom[15]
// const J = letterDom[16]
// const K = letterDom[17]
// const L = letterDom[18]
// const Z = letterDom[19]
// const X = letterDom[20]
// const C = letterDom[21]
// const V = letterDom[22]
// const B = letterDom[23]
// const N = letterDom[24]
// const M = letterDom[25]
// Q
//! Funcion para asigarnle a cada letra un evento onclick, por cada evento se guarda la letra y se compara con la letra y el orden correcto.
const keyboardLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
//* Se le asigna a cada letra, un nodo del dom, segun la letra y el id del mismo.
function keepLetter(Element) {
    return document.getElementById(Element);
}
//* Se le crea una constante y un evento a cada nodo
const letterDom = keyboardLetters.map(letter => {
    const elemento = keepLetter(letter);
    if (elemento instanceof HTMLElement) {
        return elemento;
    }
    return null;
});
let Q = keyboardLetters[0];
// const W = letterDom[1]
// const E = letterDom[2]
// const R = letterDom[3]
// const T = letterDom[4]
// const Y = letterDom[5]
// const U = letterDom[6]
// const I = letterDom[7]
// const O = letterDom[8]
// const P = letterDom[9]
// const A = letterDom[10]
// const S = letterDom[11]
// const D = letterDom[12]
// const F = letterDom[13]
// const G = letterDom[14]
// const H = letterDom[15]
// const J = letterDom[16]
// const K = letterDom[17]
// const L = letterDom[18]
// const Z = letterDom[19]
// const X = letterDom[20]
// const C = letterDom[21]
// const V = letterDom[22]
// const B = letterDom[23]
// const N = letterDom[24]
// const M = letterDom[25]
console.log(Q);
//# sourceMappingURL=main.js.map