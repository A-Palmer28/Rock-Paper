//GAME

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundWinner = "Player";
    return "Player";
  } else {
    computerScore++;
    roundWinner = "Computer";
    return "Computer";
  }
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

const playerChoiceBtns = document.querySelectorAll(".playerChoiceSelect");
playerChoiceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    updateScoreMessage(playerSelection, computerSelection);
    updateScoreBoard(playerScore, computerScore);
    gameOver();
  });
});

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

//UI

function updateScoreMessage(playerSelection, computerSelection) {
  const result = playRound(playerSelection, computerSelection);
  if (result == "Tie") {
    scoreMessage.textContent = "It's a Tie!";
  } else if (result == "Player") {
    scoreMessage.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    scoreMessage.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScoreBoard(playerScore, computerScore) {
  scorePlayer.textContent = `Player: ${playerScore}`;
  scoreComputer.textContent = `Computer: ${computerScore}`;
}

function gameOver() {
  if (isGameOver()) {
    openEndgameModal();
    setFinalMessage();
  }
}

function openEndgameModal() {
  endgameModal.classList.add("active");
  overlay.classList.add("active");
}

function closeEndgameModal() {
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}
function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = "You Win!")
    : (endgameMsg.textContent = "You Lose...Better Luck Next Time!");
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  scoreMessage.textContent = "First to score 5 points wins!";
  //playerScorePara.textContent = "Player: 0"; !!FIX TO SHOW SCORE REST B4 NEXT PLAYER SELECTION
  //computerScorePara.textContent = "Computer: 0"; !!FIX TO SHOW SCORE REST B4 NEXT PLAYER SELECTION
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}

const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");

const scoreMessage = document.getElementById("scoreMessage");
const endgameModal = document.getElementById("endgameModal");
const endgameMsg = document.getElementById("endgameMsg");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", restartGame);
overlay.addEventListener("click", closeEndgameModal);
