# Rockpaper
simple implementation of grade-school classic “rock paper scissors”. If you don’t know what that is check the Wikipedia article or this detailed step-by-step.



explaining the code :

The getComputerChoice function is defined. This function randomly selects and returns either "Rock", "Paper", or "Scissors" as the computer's choice.

The playRound function is defined. This function takes two parameters: playerSelection (the player's choice) and computerSelection (the computer's choice). It determines the winner of the round based on the choices and returns a string declaring the winner.

Inside the playRound function, the playerSelection parameter is converted to lowercase using the toLowerCase method. This ensures that the player's choice is case-insensitive.

The function compares the player's selection with the computer's selection to determine the winner. If they are the same, it's a tie. If the player's selection beats the computer's selection, the player wins. Otherwise, the computer wins.

The result of the round is returned as a string.

An example usage is provided. It prompts the player to enter their choice ("Rock", "Paper", or "Scissors") using the prompt function. The getComputerChoice function is called to get the computer's choice. Then, the playRound function is called with the player's and computer's choices as arguments. The result is logged to the console.