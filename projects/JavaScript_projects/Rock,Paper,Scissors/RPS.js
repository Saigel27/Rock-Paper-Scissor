//Juego de papel, piedras o tijeras.
/*Consiste de varios pasos:
1. Recibe la entrada del participante.
2. Toma un valor aleatorio de la computadora.
3. Compara ambos valores tomando en cuenta el tema de las victorias.
4. Declara al ganador.*/

let humanScore = 0;
let computerScore = 0; 

function getComputerChoice() {
    let num = Math.floor(Math.random()*10%3)+1;
    var option;
    switch(num)
    {
        case 1: option = "piedra"; break; 
        case 2: option = "papel"; break;
        case 3: option = "tijera"; break;
    }
    return option
}

function getHumanChoice() {
    let input = prompt("Seleccione un valor, puede ser Piedra, Papel o Tijera", "")

    //if (input !== null & input !== ""){
        return input.toLowerCase();
    /*}else {
        console.log("No has ingresado ning[un valor válido.");
    }*/
}

//a es el valor de entrada del humano, b del computador.
const playRound = (a, b) => {
    if(a === "piedra"){
        if(b==="piedra"){
            console.log("It is a tie");
        }else if(b==="papel"){
            console.log("Computer wins.");
            computerScore++;
        }else if(b==="tijera"){
            console.log("Human wins.");
            humanScore++;   
        }
    }else if(a === "papel"){
        if(b==="piedra"){
            console.log("Human wins.");
            humanScore++;  
        }else if(b==="papel"){
            console.log("It is a tie.");
        }else if(b==="tijera"){
            console.log("Computer wins.");
            computerScore++;
        }
    }else if(a === "tijera"){
        if(b==="piedra"){
            console.log("Computer wins.");
            computerScore++;  
        }else if(b==="papel"){
            console.log("Human wins.");
            humanScore++;
        }else if(b==="tijera"){
            console.log("It is a tie.");
        }
    }
}

const playGame = () => {
    for(let i = 0; i< 5; i++){
        const humanSelect = getHumanChoice();
        const computerSelect = getComputerChoice();

        playRound(humanSelect, computerSelect);
        console.log("El usuario seleccionó: "+humanSelect + ".")
        console.log("El computaodr seleccionó: " +computerSelect+".")
        console.log("El humano tiene "+humanScore+ " puntos.")
        console.log("El computador tiene " +computerScore+ " puntos.")
    }
}

playGame();


