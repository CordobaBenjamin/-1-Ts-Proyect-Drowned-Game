import * as keyboardData from "./keyboardData";

keyboardData.key2?.addEventListener("click", (event) => {
    keyboardData.key2 && (keyboardData.key2.className = "key1");
});

console.log("!Hola!");

console.log(keyboardData.key5);
