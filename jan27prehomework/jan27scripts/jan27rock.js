let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  Ties: 0,
};

updateScoreElement();

/*
if (!score) {
score = {
    wins: 0,
    loses: 0,
    Ties: 0
}

}

*/

function playGame(playerMove) {
  const computerMove = pickcomputerMove();
  let result = "";
  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You Lose";
    } else if (computerMove === "Paper") {
      result = "You Win";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "You Lose";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You Lose";
    } else if (computerMove === "Scissors") {
      result = "You Win";
    }
  }

  if (result === "You Win") {
    score.wins = score.wins + 1;
  } else if (result === "You Lose") {
    score.loses = score.loses + 1;
  } else if (result === "Tie") {
    score.Ties = score.Ties + 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = ` You
<img src="jan27images/${playerMove}-emoji.png" alt="" class="move-icon">
<img src="jan27images/${computerMove}-emoji.png" alt="" class="move-icon">
computer`;
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.Ties}`;
}
function pickcomputerMove() {
  const userMove = Math.random();
  let computerMove = "";
  if (userMove >= 0 && userMove < 1 / 3) {
    computerMove = "Rock";
  } else if (userMove >= 1 / 3 && userMove < 2 / 3) {
    computerMove = "Paper";
  } else if (userMove >= 2 / 3 && userMove < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
