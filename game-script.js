function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1)
        return "Rock";
    else if (choice == 2)
        return "Paper";
    else return "Scissors";
}

function playRound(playerChoice) { 
    let computerChoice = getComputerChoice();   
    if (playerChoice === computerChoice)
        roundResult.textContent = "Draw!";
    else if (playerChoice === "Rock" && computerChoice === "Scissors" ||
             playerChoice === "Paper" && computerChoice === "Rock" ||
             playerChoice === "Scissors" && computerChoice === "Paper")
        {
            score[0]++;
            roundResult.textContent = `You win! ${playerChoice} beats ${computerChoice}!`;
        }
    else 
        {
            score[1]++;
            roundResult.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        }
    displayScore();   
}

function displayScore() {
    currentScore.textContent = `Current Score: Player ${score[0]}:${score[1]} Computer`;
    if (score[0] == 5)
        currentScore.textContent = `Final Score: Player ${score[0]}:${score[1]} Computer. You win!`;
    else if (score[1] == 5)
    currentScore.textContent = `Final Score: Player ${score[0]}:${score[1]} Computer. You lose!`;
}

let score = [0, 0];
const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');
const reset = document.querySelector('#btn-reset');
const roundResult = document.querySelector('.result');
const currentScore = document.querySelector('.current-score');
const btn = document.querySelector('#btn');

currentScore.textContent = `Current Score: Player ${score[0]}:${score[1]} Computer`;

rock.addEventListener("click", function (){playRound('Rock');});
paper.addEventListener("click", function (){playRound('Paper');});
scissors.addEventListener("click", function (){playRound('Scissors');});
reset.addEventListener('click', () => {
    score = [0, 0];
    displayScore();
    roundResult.textContent = "Click any above buttons to start the game";
});

