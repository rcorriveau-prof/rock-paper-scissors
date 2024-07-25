function getComputerChoice () {
    const choice = ['rock','paper','scissors'];
    const atRandom = Math.floor(Math.random() * choice.length);
    return choice [atRandom];
}

//console.log(getComputerChoice());

function  playRound (humanSelection,computerSelection) {

    humanSelection = humanSelection.toLowerCase();

    const winningCondition = {
        rock : 'scissors',
        paper : 'rock',
        scissors : 'paper'
    }

    if (humanSelection === computerSelection.toLowerCase()){
        return "It's a tie!"
    } else if (winningCondition[humanSelection] === computerSelection.toLowerCase()){
        return `You Win! ${humanSelection} beats ${computerSelection}`;
    } else {
        return `You Lose ${computerSelection} beats ${humanSelection}`
    }

}

function getHumanChoice () {
    let humanInput = prompt('Enter your choice: Rock,Paper,scissors');

    while (!['rock', 'paper', 'scissors'].includes(humanInput.toLowerCase())) {
        humanInput = prompt("Invalid choice! Please select Rock, Paper, or Scissors:");
    }

    return humanInput;
}


function playGame () {
    let humanScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(result);


        if (result.startsWith("You Win!")) {
            humanScore++;
        } else if (result.startsWith("You Lose!")) {
            computerScore++;
        }
    }

    // Display final scores and determine the winner
    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();