# Rock, Paper, Scissors Game

A simple implementation of the classic "Rock, Paper, Scissors" game using HTML, CSS, and JavaScript. Play against the computer and see who comes out on top!

## Project Overview

This project features a basic game of Rock, Paper, Scissors. Here's a breakdown of the code:

- The `getComputerChoice` function randomly selects and returns either "Rock", "Paper", or "Scissors" as the computer's choice.

- The `playRound` function takes two parameters: `playerSelection` (the player's choice) and `computerSelection` (the computer's choice). It determines the winner of the round based on the choices and returns a string declaring the winner.

- Inside the `playRound` function, the player's selection is converted to lowercase for case-insensitivity.

- The game logic compares player and computer choices to determine the winner: tie, player win, or computer win.

- An example usage is provided, prompting the player to enter their choice via the `prompt` function. The computer's choice is obtained using `getComputerChoice`, and the `playRound` function is called with both choices, logging the result to the console.

## How to Play

1. Open the HTML file in your browser.
2. Enter your choice when prompted (Rock, Paper, or Scissors).
3. See the result of the round logged in the console.

Feel free to explore the code to understand the game mechanics implemented using HTML, CSS, and JavaScript.

