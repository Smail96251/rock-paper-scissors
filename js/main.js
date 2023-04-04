const scoreInfo = document.getElementById("score-info");
const scoreMessage = document.getElementById("score-message");
const playerSign = document.getElementById("player-sign");
const playerScore = document.getElementById("player-score");
const computerSign = document.getElementById("computer-sign");
const computerScore = document.getElementById("computer-score");
const buttonGame = document.querySelectorAll(".btn-square");
const modal = document.getElementById("endgame-modal");
const overlay = document.getElementById("overlay");

let computerChoice = null;

function getRandomNuber(){
    return Math.floor(Math.random() * 3);
}

function getComputerChoise (){
    computerChoice = getRandomNuber();
}



