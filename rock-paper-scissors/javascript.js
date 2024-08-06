// Game Buttons
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const rockButton = document.querySelector(".rock");

// Player Score
const playerScore = document.querySelector(".player-score");
const getLocalStorage = localStorage.getItem("playerScoreCount");

if (getLocalStorage && getLocalStorage >= 0) {
  playerScore.innerText = getLocalStorage;
} else {
  localStorage.setItem("playerScoreCount", 0);
}

// Rules Modal Buttons
const openRulesModal = document.querySelector(".rules");
const closeRulesModal = document.querySelector(".close-modal");

// main
const mainArea = document.querySelector("main");

const startGame = (event) => {
  const gameObjects = ["paper", "scissors", "rock"];
  const gameObjectsRandom = gameObjects[Math.floor(Math.random() * gameObjects.length)];
  let gameResult;
  let playerScoreCount = localStorage.getItem("playerScoreCount") ? localStorage.getItem("playerScoreCount") : 0;

  if (event === "paper" && gameObjectsRandom === "scissors") {
    gameResult = false;
    writeGameUI(event, gameObjectsRandom, gameResult, --playerScoreCount);
  } else if (event === "paper" && gameObjectsRandom === "rock") {
    gameResult = true;
    writeGameUI(event, gameObjectsRandom, gameResult, ++playerScoreCount);
  } else if (event === "scissors" && gameObjectsRandom === "paper") {
    gameResult = true;
    writeGameUI(event, gameObjectsRandom, gameResult, ++playerScoreCount);
  } else if (event === "scissors" && gameObjectsRandom === "rock") {
    gameResult = false;
    writeGameUI(event, gameObjectsRandom, gameResult, --playerScoreCount);
  } else if (event === "rock" && gameObjectsRandom === "paper") {
    gameResult = false;
    writeGameUI(event, gameObjectsRandom, gameResult, --playerScoreCount);
  } else if (event === "rock" && gameObjectsRandom === "scissors") {
    gameResult = true;
    writeGameUI(event, gameObjectsRandom, gameResult, ++playerScoreCount);
  } else {
    gameResult = "draw";
    writeGameUI(event, gameObjectsRandom, gameResult);
  }
};

const writeGameUI = (playerEvent, gameObjectsRandom, gameResult, playerScoreCount) => {
  mainArea.innerHTML = "";
  mainArea.className = "next-step";

  const playerArea = document.createElement("div");
  const computerArea = document.createElement("div");
  const gameResultDiv = document.createElement("div");
  gameResultDiv.style = "display:none";

  // LEFT
  const playerH2Text = document.createElement("h2");
  playerH2Text.innerText = "YOU PICKED";
  const playerPickedButton = document.createElement("button");
  playerPickedButton.className = playerEvent;
  const playerPickedButtonDiv = document.createElement("div");
  playerPickedButton.appendChild(playerPickedButtonDiv);
  playerArea.appendChild(playerH2Text);
  playerArea.appendChild(playerPickedButton);

  // Center
  const gameResultH2Text = document.createElement("h2");
  const playAgainButton = document.createElement("button");
  playAgainButton.className = "play-again-button";
  playAgainButton.innerText = "PLAY AGAIN";
  playAgainButton.addEventListener("click", () => {
    location.reload();
  });

  gameResultDiv.appendChild(gameResultH2Text);
  gameResultDiv.appendChild(playAgainButton);

  // RIGHT
  const computerH2Text = document.createElement("h2");
  computerH2Text.innerText = "THE HOUSE PICKED";
  const computerPickedButton = document.createElement("button");
  computerPickedButton.className = "shadow";
  const computerPickedButtonDiv = document.createElement("div");
  computerPickedButton.appendChild(computerPickedButtonDiv);

  setTimeout(() => {
    computerPickedButton.className = gameObjectsRandom;
  }, 1000);
  computerArea.appendChild(computerH2Text);
  computerArea.appendChild(computerPickedButton);

  mainArea.appendChild(playerArea);
  mainArea.appendChild(gameResultDiv);
  mainArea.appendChild(computerArea);

  setTimeout(() => {
    mainArea.className += " game-result";

    if (gameResult === true) {
      gameResultH2Text.innerText = "YOU WIN";
      playerPickedButton.style.boxShadow = "#87878747 0 0 140px 100px";
    } else if (gameResult === false) {
      gameResultH2Text.innerText = "YOU LOSE";
      computerPickedButton.style.boxShadow = "#87878747 0 0 140px 100px";
      playAgainButton.style.color = "red";
    } else {
      gameResultH2Text.innerText = "DRAW";
    }
    if (playerScoreCount !== undefined) {
      playerScore.innerText = playerScoreCount;
      localStorage.setItem("playerScoreCount", playerScoreCount < 0 ? 0 : playerScoreCount);
    }

    gameResultDiv.style = "display:block";
  }, 2000);
  console.log(playerScoreCount);
};

const paperButtonFunction = () => {
  startGame("paper");
};
paperButton.addEventListener("click", paperButtonFunction);

const scissorsButtonFunction = () => {
  startGame("scissors");
};
scissorsButton.addEventListener("click", scissorsButtonFunction);

const rockButtonFunction = () => {
  startGame("rock");
};
rockButton.addEventListener("click", rockButtonFunction);

// Rules Button Functions
const openrulesModalFunction = () => {
  closeRulesModal.parentElement.parentElement.parentElement.style = "display:absolute";
};
openRulesModal.addEventListener("click", openrulesModalFunction);

const closeRulesModalFunction = () => {
  closeRulesModal.parentElement.parentElement.parentElement.style = "display:none";
};
closeRulesModal.addEventListener("click", closeRulesModalFunction);
