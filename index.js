let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);

    let selectButton = document.querySelector("#select");
    selectButton.addEventListener("click", function(){
        let inputSize = getSize();
        createGrid(size);
    })
})
function createGrid(size) {
    const container = document.querySelector("#container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numSquares = size * size;

    for(let i = 0; i < numSquares; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        container.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let inputSize = prompt("What will be the grid size?");
    let message = document.querySelector("#message");
    if (inputSize == "") {
        message.innerHTML = "Please, input a number!";
    } 
    else if (inputSize < 0 || inputSize > 100) {
        message.innerHTML = "Input a number between 0 and 100";

    }
    else {
        message.innerHTML = "Start drawing!";
        return inputSize;
    }
}

function colorDiv() {
    if(color == "random") {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${r},${g},${b})`;


    }
    else{
        this.style.backgroundColor('black');
    }
}
