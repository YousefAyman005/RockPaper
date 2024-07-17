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
const parent = document.querySelector("#result");
const score = document.createElement("div");
const div = document.createElement("div");
score.textContent = "your score:" +humanScore +  "\ncomputer score: " + computerScore
parent.appendChild(score);
div.textContent="play!!";
parent.appendChild(div);


function playRound(humanChoice,computerChoice){
    
    parent.removeChild(div);
    switch (humanChoice) {
        case "rock" :
            if (computerChoice == "paper") {
                computerScore++;
                div.textContent="You lose! Paper beats Rock" }
            else if (computerChoice == "scissors") {
                humanScore++;
                div.textContent=("You win! Rock beats scissors")}
            else div.textContent=("draw");    
            parent.appendChild(div);
            break;
            
        case "paper" :
            if (computerChoice == "scissors") { 
                computerScore++;
                div.textContent=("You lose! scissors beats paper")}
            else if (computerChoice == "rock") {
                humanScore++;
                div.textContent=("You win! Paper beats Rock")}
            else div.textContent=("draw");    
            parent.appendChild(div);
            break;

        case "scissors" :
            if (computerChoice == "rock") {
                computerScore++;
                div.textContent=("You lose! Rock beats Scissors")}
            else if (computerChoice == "paper") {
                humanScore++;
                div.textContent=("You win! Scissors beats Paper")}
            else div.textContent=("draw");
            parent.appendChild(div);
            break;        
    }
    
    score.textContent = "your score:" +humanScore +  "\ncomputer score: " + computerScore
    if (humanScore==5) {
        alert("you won your score:" +humanScore +  "\ncomputer score: " + computerScore);
        humanScore = 0;
        computerScore = 0;
    }
    if (computerScore==5) {
        alert("you lost your score:" +humanScore +  "\ncomputer score: " + computerScore);
        humanScore = 0;
        computerScore = 0;
    }
}
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.onclick = () => playRound("rock",getComputerChoice()) ;
paper.addEventListener("click",() => playRound("paper",getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors",getComputerChoice()));


    // console.log("your score:" + humanScore + " computer score" + computerScore);