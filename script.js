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

function getPlayerChoice() {
    let input;
    let notFirstTime = false;
    do {
        if (notFirstTime) {
            alert("Valid answers only!");
        }
       input = prompt("Which one are you going to use, rock, paper, or scissors?", "").toLowerCase();
       console.log(input);
       notFirstTime = true;
    } while(!(input == "paper" || input == "rock" || input == "scissors"));
    return input;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    if (playerSelection == computerSelection) {
        return `${playerSelection} and ${computerSelection.toLowerCase()}! This is a tie!`;
    }
    let result = isPlayerWinner(playerSelection, computerSelection);
    if (result) {
        alert(`You won! ${playerSelection} beats ${computerSelection.toLowerCase()}!`);
        console.log(`You won! ${playerSelection} beats ${computerSelection.toLowerCase()}!`);
        return 1;
    } else {
        alert(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
        console.log(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
        return -1;
    }
    
}

function game(rounds) {
    alert("Welcome! Let's play 5 rounds of rock paper scissors! Shall we begin?");
    let roundResult = 0;
    for (i = 0; i < rounds; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        roundResult += playRound(playerSelection, computerSelection);
        ///////// need to work on keeping track of the loop
        if (i != (rounds - 1)) {
            alert(`${rounds - 1 - i} more rounds to go! Let'keep going!`);
        }
    }
    if (roundResult > 0) {
        alert("Haha! You lost!");
        console.log("Haha! You lost!");
    } else {
        alert("Man, that was tough! Seems like you won! Congratulations!");
        console.log("Man, that was tough! Seems like you won! Congratulations!");
    }
}

// insert argument to determine how many games to play
game(1);


// pass function to pass test
function pass() {
    alert("Pass!");
}

// now to add eventlisteners for each button
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener("click", pass));