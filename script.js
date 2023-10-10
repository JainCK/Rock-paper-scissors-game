const resultBox = document.getElementById("Result");
const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const ScissorsBtn = document.getElementById("Scissors");


// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to play a single round of Rock Paper Scissors
  function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitivity
    playerSelection = playerSelection.toLowerCase();
  
    // Determine the winner
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "Scissors") ||
      (playerSelection === "paper" && computerSelection === "Rock") ||
      (playerSelection === "scissors" && computerSelection === "Paper")
    ) {
      return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
      return "You lose! " + computerSelection + " beats " + playerSelection;
    }
  }
  
  // Example usage
  //const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
  //const computerSelection = getComputerChoice();
  //console.log(playRound(playerSelection, computerSelection));
  