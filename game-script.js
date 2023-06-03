function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1)
        return "Rock";
    else if (choice == 2)
        return "Paper";
    else return "Scissors";
}

function playRound(computerChoice) {
    let playerSelection = prompt("Input your choice:").toLowerCase();
    let firstChar = playerSelection[0].toUpperCase(); 
    let restPart = playerSelection.slice(1);
    let playerChoice = firstChar + restPart;
    let result;
    if (playerChoice === computerChoice)
        result = 0;
    else if (playerChoice === "Rock" && computerChoice === "Scissors" ||
             playerChoice === "Paper" && computerChoice === "Rock" ||
             playerChoice === "Scissors" && computerChoice === "Paper")
        result = 1;
    else result = 2;
    return result;
}

function game() {
    console.log("Game Start!");
    let playerScore = 0;
    let computerScore = playerScore;
    let roundResult;
    for (let i = 1; i <= 5; i++)
    {
        console.log(`Round ${i}`);
        console.log(`Current Score: Player ${playerScore} : ${computerScore} Computer`)
        roundResult = playRound(getComputerChoice());
        if (roundResult == 0)
            console.log("Draw!");
        else if (roundResult == 1)
        {
            console.log("You win!");
            playerScore++;
        }
        else 
        {
            console.log("You lose!");
            computerScore++;
        }
    }
    console.log(`Final Score: Player ${playerScore} : ${computerScore} Computer`);
    if (playerScore == computerScore)
        console.log("Game Draw!");
    else if (playerScore > computerScore)
        console.log("Congratulations! You win!");
    else console.log("You lose! Better luck next time...");
}

game();
