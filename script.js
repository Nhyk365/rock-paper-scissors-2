let playerScore = 0;
let computerScore = 0;

/* Selects a random move for the computer */
function getComputer() {
  let num = Math.floor(Math.random() * 100) - 1;
  if (num < 33) {
    return "rock";
  } else if (num < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(human, computer) {
  if (human == computer) {
    resultDiv.innerText = `It's a tie: ${human} VS ${computer}!`;
    scoreDiv.innerText =
      "Player: " + playerScore + " - Computer: " + computerScore;
  } else if (
    (human == "rock" && computer == "scissors") ||
    (human == "paper" && computer == "rock") ||
    (human == "scissors" && computer == "paper")
  ) {
    win(human, computer);
    scoreDiv.innerText =
      "Player: " + (playerScore + 1) + " - Computer: " + computerScore;
    return (playerScore += 1);
  } else {
    lose(human, computer);
    scoreDiv.innerText =
      "Player: " + playerScore + " - Computer: " + (computerScore + 1);
    return (computerScore += 1);
  }
}

/* Buttons */
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => playRound("rock", getComputer()));
paperButton.addEventListener("click", () => playRound("paper", getComputer()));
scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputer())
);

/* Result */
const resultDiv = document.getElementById("result");

let win = (human, computer) =>
  (resultDiv.innerText = "You win! " + human + " beats " + computer);

let lose = (human, computer) =>
  (resultDiv.innerText = "You lose! " + computer + " beats " + human);

/* Score tracking */
const scoreDiv = document.getElementById("score");

/* Game tracking, when someone reaches 5 points the game ends and resets */
const buttons = document.querySelectorAll("button");

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  scoreDiv.innerText =
    "Player: " + playerScore + " - Computer: " + computerScore;
  resultDiv.innerText = ``;
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (playerScore == 5) {
      alert(`You win ${playerScore} to ${computerScore}!`);
      resetGame();
    } else if (computerScore == 5) {
      alert(`You lose ${playerScore} to ${computerScore}!`);
      resetGame();
    }
  })
);
