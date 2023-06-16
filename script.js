// No longer relevant. Accepts user input.
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

// Randomize computer's choice for rock, paper, scissors
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

// to compare numbers instead of strings to determine winner.
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

// Plays one round and return points for that round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    if (playerSelection == computerSelection) {
        console.log(`${playerSelection} and ${computerSelection.toLowerCase()}! This is a tie!`);
        return 0;
    }
    let result = isPlayerWinner(playerSelection, computerSelection);
    if (result) {
        // alert(`You won! ${playerSelection} beats ${computerSelection.toLowerCase()}!`);
        console.log(`You won! ${playerSelection} beats ${computerSelection.toLowerCase()}!`);
        return 1;
    } else {
        // alert(`You lost! ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
        console.log(`You lost! ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
        return -1;
    }   
}

function printResult(roundResult) {
    if(document.querySelector("#results") === null) {
        const div = document.createElement('div');
        div.setAttribute("id", "results");
        document.body.appendChild(div);
    }
    const results = document.querySelector("#results");
    if (roundResult < 0) {
        results.textContent = "Haha! You lost!";
    } else if (roundResult > 0){
        results.textContent = "Man, that was tough! Seems like you won! Congratulations!";
    } else {
        results.textContent = "Draw!";
    }

}


// Accepts input to determine how many rounds in a game, then play
function game(rounds, playerSelection) {
    let roundResult = 0;
    for (i = 0; i < rounds; i++) {
        let validSelections = ["rock", "paper", "scissors"];
        console.log(playerSelection);
        if (!validSelections.includes(playerSelection)) {
            alert("No!");
            return;
        }
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        roundResult += playRound(playerSelection, computerSelection);
        ///////// need to work on keeping track of the loop
        if (i != (rounds - 1)) {
            alert(`${rounds - 1 - i} more rounds to go! Let'keep going!`);
        }
    }
    printResult(roundResult);
}



// now to add eventlisteners for each button
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener("click", function(e) {
    game(1, e.target.id);
}));

