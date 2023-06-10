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
    let player = changeToNumbers(playerSelection);
    let computer = changeToNumbers(computerSelection);
    console.log(player, computer);
        return false;
    
}

// to compare numbers instead of strings. -1 is Scissors
function changeToNumbers(selection) {
    return (selection == "Rock") ? 0 : ((selection == "Paper") ? 1 : -1);
}


const computerSelection = getComputerChoice();
playRound("Rock", computerSelection);

