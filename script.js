let playerScore = 0;
let computerScore = 0;
let playerScoreSpan = document.getElementById("player-score");
let computerScoreSpan = document.getElementById("computer-score");
const playersScoreDiv = document.querySelector(".players-score");
const resultDiv = document.querySelector(".result");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");


// randomnumber return as choices(rock,paper..)
function getComputerChoice() { 
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices [randomNumber];
}

function win() {
  playerScore++;
  playerScoreSpan.innerText = playerScore;
}

function lose() {
  computerScore++;
  computerScoreSpan.innerText = computerScore;
}

function draw() {
  
}

// player choice vs computer choice 
function play(playerChoice) {
  const computerChoice = getComputerChoice();
  if(playerChoice === "rock" && computerChoice === "scissors") {
    win();
  } else if(playerChoice === "rock" && computerChoice === "paper") {
    lose();
  } else if(playerChoice === "rock" && computerChoice === "rock") {
    draw();
  }

  if(playerChoice === "paper" && computerChoice === "rock") {
    win();
  } else if(playerChoice === "paper" && computerChoice === "scissors") {
    lose();
  } else if(playerChoice === "paper" && computerChoice === "paper") {
    draw();
  }

  if(playerChoice === "scissors" && computerChoice === "paper") {
    win();
  } else if(playerChoice === "scissors" && computerChoice === "rock") {
    lose();
  } else if(playerChoice === "scissors" && computerChoice === "scissors") {
    draw();
  }
}

function main() {
  rockDiv.addEventListener('click', function() {
    play("rock");
  })

  paperDiv.addEventListener('click', function() {
    play("paper");
  })

  scissorsDiv.addEventListener('click', function() {
    play("scissors");
  })
}

main();