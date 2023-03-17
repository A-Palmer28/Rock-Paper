//GAME
//need to make playerScore appear in DOM
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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    console.log(playerSelection); //remove once these logs appear on DOM
    console.log(computerSelection); //remove once these logs appear on DOM
    console.log(updateScoreMessage(playerSelection, computerSelection)); //remove once these logs appear on DOM
  });
});

//UI

function updateScoreMessage(playerSelection, computerSelection) {
  const result = playRound(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie!";
  } else if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}
//EVERYTHING UP TO THIS POINT WORKS IN CURRENT STATE

// when scorePlayer++ use dom to change text value up to 5
//const playerScore = document.querySelector(".player-score");
playerScore.textContent = `Player:${playerScore}`;
computerScore.textContent = `Computer:${computerScore}`;
//const computerScore = document.querySelector(".computer-score");

//const scoreMessage = document.getElementById("score-message");

//SHOW OVERALL WINNER AFTER SCORE REACHES 5

//  console.log("Game Over");
//  if (scorePlayer > scoreComputer) {
//    console.log("Player has claimed victory!!");
//  } else if (scoreComputer > scorePlayer) {
//    console.log("Computer has claimed victory!!");
//  } else {
//    console.log("We have a tie... that's not very exciting");
//  }
//}

const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const scoreMessage = document.getElementById("scoreMessage");
