const scoreInfo = document.getElementById("score-info");
const scoreMessage = document.getElementById("score-message");
const playerSign = document.getElementById("player-sign");
const playerScore = document.getElementById("player-score");
const computerSign = document.getElementById("computer-sign");
const computerScore = document.getElementById("computer-score");
const buttonGame = document.querySelectorAll(".btn-square");
const modal = document.getElementById("endgame-modal");
const overlay = document.getElementById("overlay");

const gameSigns = {
    "rock": "✊",
    "paper": "✋",
    "scissors": "✌"
}
let computerChoice = null;
let playerChoice = null;
let playerCounter = 0;
let computerCounter = 0;

function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}

function getComputerChoice (){
    switch (getRandomNumber()){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper"
            break;
        case 2:
            computerChoice = "scissors"
            break;
    }
}

function getPlayerChoice(e){
    playerChoice = e.currentTarget.attributes.name.value;
    startGame();
}

function updatePlayerAndComputerSign (){
    playerSign.innerText = gameSigns[playerChoice];
    computerSign.innerText = gameSigns[computerChoice];
}

function validateGames() {
    if(playerChoice == "rock" && computerChoice == "scissors"
        || playerChoice == "paper" && computerChoice == "rock"
        || playerChoice == "scissors" && computerChoice == "paper"){
        playerCounter++;
        playerScore.innerText = playerCounter;
        scoreInfo.innerText = "You Won!"
        scoreMessage.innerText = `${playerChoice} beats ${computerChoice}`
    }else if(computerChoice == "rock" && playerChoice == "scissors"
        || computerChoice == "paper" && playerChoice == "rock"
        || computerChoice == "scissors" && playerChoice == "paper"){
        computerCounter++;
        computerScore.innerText = computerCounter;
        scoreInfo.innerText = "You Lose..."
        scoreMessage.innerText = `${playerChoice} loses ${computerChoice}`
    }else {
        scoreInfo.innerText = "It's a tie!"
        scoreMessage.innerText = `${playerChoice} ties with ${computerChoice}`
    }
}

function validateRoundGame() {
    if(playerCounter == 5 || computerCounter == 5){
        playerCounter = 0;
        computerCounter = 0;
        computerScore.innerText = computerCounter;
        playerScore.innerText = playerCounter;
    }
}

function startGame (){
    getComputerChoice();
    updatePlayerAndComputerSign();
    validateGames();
    validateRoundGame();
}

buttonGame.forEach(item => {
    item.addEventListener('click', getPlayerChoice);
})





