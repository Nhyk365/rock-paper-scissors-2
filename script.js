/* 1. When function playRound() is called, ask player to choose a move
    1a. Use the prompt function to select the move and store it in getHumanChoice
    1b. it needs to be case insensitive
2. Randomly select computer's move
    2a. Use Math.random() and Math.floor to establish a random number ranging from 0 to 99, assign each move to a series of numbers store it in getComputer
3. Confront player's move with the computer's one using if else statement or ternary operator
4. Return the result with console.log
5. Keep track, announce and update Scores after every round.
    5a. store the in humanScore and computerScore
    5b. start from 0.
6. Create a function playGame() that plays 5 rounds tracks score and announces the winner at the end.
*/

console.log("Welcome to rock, paper, scissor from Nhyk365!");
console.log(
  "to play choose one between rock, paper or scissor, write it down and press enter!"
);

let humanChoice;
let computerChoice;

function getHumanChoice() {
  let choice = prompt("Make your choice", "rock").toLowerCase();
  return choice;
}

function getComputerChoice() {
  let num = Math.floor(Math.random() * 100) - 1;
  if (num < 33) {
    return "rock";
  } else if (num < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

let win = (human, computer) =>
  console.log("You win! " + human + " beats " + computer);
let lose = (human, computer) =>
  console.log("You lose! " + computer + " beats " + human);

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  function playRound(human, computer) {
    if (human == computer) {
      console.log(`It's a tie: ${human} VS ${computer}!`);
    } else if (
      (human == "rock" && computer == "scissors") ||
      (human == "paper" && computer == "rock") ||
      (human == "scissors" && computer == "paper")
    ) {
      win(humanChoice, computerChoice);
      return (playerScore += 1);
    } else {
      lose(humanChoice, computerChoice);
      return (computerScore += 1);
    }
  }
  for (; playerScore < 5 && computerScore < 5; ) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log("Player: " + playerScore + " - Computer: " + computerScore);
  }
  playerScore == 5 ? console.log("You win!") : console.log("You lose!");
}
