const resultBox = document.querySelector(".Result");
const scoreBox = document.querySelector(".Score");
const buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to update the score and check for a winner
function updateScore(playerSelection) {
  const computerSelection = getComputerChoice().toLowerCase();
  let roundResult = "";

  // Determine the winner of the round
  if (playerSelection === computerSelection) {
    roundResult = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult = "You win! " + playerSelection + " beats " + computerSelection;
    playerScore++;
  } else {
    roundResult = "You lose! " + computerSelection + " beats " + playerSelection;
    computerScore++;
  }

  // Display the round result and update the score
  resultBox.textContent = roundResult;
  scoreBox.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

  roundCount++;


  // Check for a winner
  if (roundCount >= 5) {
    if (playerScore > computerScore) {
      resultBox.textContent = "Player wins the game!";
    } else if (computerScore > playerScore) {
      resultBox.textContent = "Computer wins the game!";
    } else {
      resultBox.textContent = "It's a tie! The game ends in a draw.";
    }
    disableButtons();
  }
}


// Function to disable buttons after the game is over
function disableButtons() {
  buttons.forEach((button) => {
    button.removeEventListener("click", handleClick);
    button.disabled = true;
  });
}

// Function to handle button clicks
function handleClick(event) {
  const playerSelection = event.target.id.toLowerCase();
  updateScore(playerSelection);
}

// Add click event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  resultBox.textContent = "";
  scoreBox.textContent = "Player: 0 - Computer: 0";
  enableButtons();
}

// Function to enable buttons for a new game
function enableButtons() {
  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
    button.disabled = false;
  });
}

// Add click event listener to the Restart button
const restartButton = document.getElementById("Restart");
restartButton.addEventListener("click", restartGame);

// Enable buttons to start a new game
enableButtons();