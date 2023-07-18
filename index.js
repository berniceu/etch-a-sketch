let color = "black";


document.addEventListener("DOMContentLoaded", function(){

    let selectButton = document.querySelector("#select");
    selectButton.addEventListener("click", function(){
        let size = getSize();
        createGrid(size);

    });
    let darkButton = document.querySelector(".dark");
    darkButton.addEventListener("click", function(){
        let colorChoice = 'black';
        setColor(colorChoice);
        colorDiv();
    });

    let randomButton = document.querySelector(".randomColor");
    randomButton.addEventListener("click", function(){
        let colorChoice = 'random';
        setColor(colorChoice);
        colorDiv();
    });

    let resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", function(){
        resetGrid();
    })
});
function createGrid(size) {
    const container = document.querySelector("#container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numSquares = size * size;

    for(let i = 0; i < numSquares; i++) {
        let divs = document.createElement("div");
        divs.addEventListener("mouseover", colorDiv)
        container.appendChild(divs);
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
        this.style.backgroundColor = 'black';
    }
}
function setColor(colorChoice) {
    color = colorChoice;
}


function resetGrid() {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor ="white");
}