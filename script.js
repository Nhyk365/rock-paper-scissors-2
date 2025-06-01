console.log("Welcome to rock, paper, scissor from Nhyk365!");
console.log(
  "to play choose one between rock, paper or scissor, write it down and press enter!"
);
/* 
1. When function playRound() is called, ask player to choose a move
    1a. Use the prompt function to select the move and store it in getHumanChoice
    1b. it needs to be case insensitive
2. Randomly select computer's move
    2a. Use Math.random() and Math.floor to establish a random number ranging from 0 to 99, assign each move to a series of numbers store it in getComputerChoice
3. Confront player's move with the computer's one using if else statement or ternary operator
4. Return the result with console.log
5. Keep track, announce and update Scores after every round.
    5a. store the in humanScore and computerScore
    5b. start from 0.
6. Create a function playGame() that plays 5 rounds tracks score and announces the winner at the end.
*/
let humanSelection = "";
let computerSelection = "";
