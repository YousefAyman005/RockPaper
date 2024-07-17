function getComputerChoice(){
    let x = Math.random()
    if (x<0.3) return "rock"
    else if (x<0.6) return "scissors"
    return "paper"
}

function getHumanChoice(){
    x = prompt("choose rock or paper or scissors").toLowerCase()
    return x
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    switch (humanChoice) {
        case "rock" :
            if (computerChoice == "paper") {
                computerScore++;
                console.log("You lose! Paper beats Rock") }
            else if (computerChoice == "scissors") {
                humanScore++;
                console.log("You win! Rock beats scissors")}
            else console.log("draw");    
            break;
            
        case "paper" :
            if (computerChoice == "scissors") { 
                computerScore++;
                console.log("You lose! scissors beats paper")}
            else if (computerChoice == "rock") {
                humanScore++;
                console.log("You win! Paper beats Rock")}
            else console.log("draw");    
            break;
        case "scissors" :
            if (computerChoice == "rock") {
                computerScore++;
                console.log("You lose! Rock beats Scissors")}
            else if (computerChoice == "paper") {
                humanScore++;
                console.log("You win! Scissors beats Paper")}
            else console.log("draw");
            break;        
    }

}

function playGame(){
    for (let i = 0; i <5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
    console.log("your score:" + humanScore + " computer score" + computerScore);
}