function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        return "Rock";
    } else if (compChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}




function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    if (playerSelection == computerSelection) {
        return console.log(`${playerSelection} and ${computerSelection.toLowerCase()}! This is a tie!`);
    }
    let result = isPlayerWinner(playerSelection, computerSelection);
    console.log(result);
        return false;
    
}

// to compare numbers instead of strings. -1 is Scissors
function isPlayerWinner(player, computer) {
    let temPlayer = 0;
    let temComputer;
    if (player == "Rock") {
        if (computer == "Paper") {
            temComputer = 1;
        } else {
            temComputer = -1;
        }
    } else if (player == "Paper") {
        if (computer == "Scissors") {
            temComputer = 1;
        } else {
            temComputer = -1;
        }
    } else {
        if (computer == "Rock") {
            temComputer = 1;
        } else {
            temComputer = -1;
        }
    }
    return temPlayer > temComputer;
}


const computerSelection = getComputerChoice();
playRound("Rock", computerSelection);

