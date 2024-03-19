document.addEventListener("DOMContentLoaded", function(event) {
    let inputData = document.getElementById("playerOneCorrectWord") as HTMLInputElement;


    let startGame = document.getElementById("sumbitStartGame") as HTMLInputElement

    function nextPage() {
        let valor: string = inputData.value;
        let upperValor:string = valor.toUpperCase()
        localStorage.setItem("Input Value", upperValor);
        window.location.href = 'index.html'; // Redirige a la siguiente página
    }

    startGame.addEventListener("click", (event) => {
        // Llama a nextPage() cuando ocurra el evento click en inputData
        nextPage();
    });
});

