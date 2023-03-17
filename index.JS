const options = ["rock", "paper", "scissors"];

function getComputerChoice(mathRandom) {
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie!";
  } else if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Choose your weapon: Rock, Paper, Scissors");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i <= 4; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("----------");
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }
  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log("Player has claimed victory!!");
  } else if (scoreComputer > scorePlayer) {
    console.log("Computer has claimed victory!!");
  } else {
    console.log("We have a tie... that's not very exciting");
  }
}

