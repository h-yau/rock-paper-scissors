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
        document.querySelector("#computerSelection").src = "./images/rock.svg";
        return "Rock";
    } else if (compChoice === 1) {
        document.querySelector("#computerSelection").src = "./images/paper.svg";
        return "Paper";
    } else {
        document.querySelector("#computerSelection").src = "./images/scissors.svg";
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
        document.querySelector("#roundResult").textContent = `${playerSelection} and ${computerSelection.toLowerCase()}! This is a tie!`;
        console.log(`${playerSelection} and ${computerSelection.toLowerCase()}! This is a tie!`);
        return 0;
    }
    let result = isPlayerWinner(playerSelection, computerSelection);
    if (result) {
        document.querySelector("#roundResult").textContent = `You won! ${playerSelection} beats ${computerSelection.toLowerCase()}!`;
        console.log(`You won! ${playerSelection} beats ${computerSelection.toLowerCase()}!`);
        return 1;
    } else {
        document.querySelector("#roundResult").textContent = `You lost! ${computerSelection} beats ${playerSelection.toLowerCase()}!`;
        console.log(`You lost! ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
        return -1;
    }   
}

function printResult(gameResult) {
    if(document.querySelector("#gameResults") === null) {
        const h2Tag = document.createElement('h2');
        h2Tag.setAttribute("id", "gameResults");
        document.body.appendChild(h2Tag);
    }
    const results = document.querySelector("#gameResults");
    if (gameResult) {
        results.textContent = "Man, that was tough! Seems like you won! Congratulations!";
    } else {
        results.textContent = "Haha! You lost!";
    }
}


// Accepts input to determine how many rounds in a game, then play
function game(playerSelection) {
    let validSelections = ["rock", "paper", "scissors"];
    if (!validSelections.includes(playerSelection)) {
        alert("No!");
        return;
    }
    let computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection);
}

function clearGameData (event) {
    let click = event.target;
    if (click.id != "replay") {
        return;
    }
    let gameResults = document.getElementById("gameResults");
    let replay = document.getElementById("replay");
    document.body.removeChild(gameResults);
    document.body.removeChild(replay);
    document.querySelector("#score").textContent = "";
    document.querySelector("#roundResult").textContent = "";
    playerPoints = computerPoints = 0;
    const buttons = document.querySelectorAll('input');
    buttons.forEach(button => button.toggleAttribute("disabled"));
}



// now to add eventlisteners for each button
let playerPoints = computerPoints = 0;
const buttons = document.querySelectorAll('input');
buttons.forEach(button => button.addEventListener("click", function(e) {
    roundResult = game(e.target.id);
    console.log(roundResult);
    if (roundResult < 0) {
        computerPoints++;
    } else if (roundResult > 0) {
        playerPoints++;
    }

    document.querySelector("#score").textContent = `Player: ${playerPoints} \| Computer: ${computerPoints}`;
    console.log(`Player: ${playerPoints} \| Computer: ${computerPoints}`);
    if (playerPoints >= 5 || computerPoints >= 5) {
        printResult(playerPoints > computerPoints);
        const replay = document.createElement("button");
        replay.setAttribute("id", "replay");
        replay.textContent = "Try again?";
        document.body.appendChild(replay);
        buttons.forEach(button => {
            button.setAttribute("disabled", "true");
        });
    }
}));

const replay = document.querySelector("#replay");
document.addEventListener("click", clearGameData);