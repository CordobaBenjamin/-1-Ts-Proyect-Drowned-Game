let inputData = document.getElementById("playerOneCorrectWord") as HTMLInputElement;
console.log(inputData);

let startGame = document.getElementById("sumbitStartGame") as HTMLInputElement


function nextPage() {
    let valor: string = inputData.value ;
    localStorage.setItem("Input Value", valor);
    window.location.href = 'index.html'; // Redirige a la siguiente página
}

startGame.addEventListener("click", (event) => {
    // Llama a nextPage() cuando ocurra el evento click en inputData
    nextPage();
});

export function getInputLocalValue(): string | null {
    let inputLocalValue = localStorage.getItem("Input Value");
    console.log(inputLocalValue);
    return inputLocalValue;
}
