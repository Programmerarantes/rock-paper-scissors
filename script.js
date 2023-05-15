const options = ["rock", "paper", "scissors"];
//fazendo com que a escolha do computador fique aleatoria e aconteça
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return (choice);
}
//as condições de vitória ou empate
function checkwinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";

    } else if ((playerSelection == "rock" && computerSelection == "scissors") || 
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")) {
        return "Player";
    } 
    else  {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkwinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a Tie!"
    } else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}
//validando a escolha do jogador
function getPlayerChoice() {
    let validated = false;
    while(validated == false){
        const choice = window.prompt("Choose: Rock, Paper or Scissors?");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validated = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome to Rock Paper Scissors")
    //definindo o numero de rounds
    for (let i = 0; i < 3; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-------------------")
        if (checkwinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        } else if (checkwinner(playerSelection, computerSelection)) {
            scoreComputer++;
        }
    }
    if (scorePlayer > scoreComputer) {
        console.log("Player was the winner")
    } else if (scorePlayer < scoreComputer) {
        console.log("Computer was the winner");
    } else {
        console.log("We have a tie!")
    }
    console.log("The End!")
}

game()