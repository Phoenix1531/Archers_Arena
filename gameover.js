// Restart button functionality
let restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", (e) => {
  // Redirect to the first game page
  window.location.href = "game-1.html";
});

// Background music setup
let bgMusic = new Audio("./assets/bg-music.mp3");
bgMusic.play();
bgMusic.loop = true;

// DOM elements for displaying scores
const scoreElement = document.getElementById("score-count");
const playerName = document.getElementById("playername");
const bullseyeElement = document.getElementById("BulleyesCount");

// Retrieve player information from local storage
const playerInfo = JSON.parse(sessionStorage.getItem("playerInfo"));

// Retrieve scores and bullseyes from local storage
const score1 = JSON.parse(sessionStorage.getItem("score_1"));
const score2 = JSON.parse(sessionStorage.getItem("score_2"));
const score3 = JSON.parse(sessionStorage.getItem("score_3"));

const bullseye1 = JSON.parse(sessionStorage.getItem("bullseyes_1"));
const bullseye2 = JSON.parse(sessionStorage.getItem("bullseyes_2"));
const bullseye3 = JSON.parse(sessionStorage.getItem("bullseyes_3"));

// Display player name, total score, and total bullseyes
playerName.textContent = `${playerInfo.name}'s `;
scoreElement.textContent = `${score1 + score2 + score3}`;
bullseyeElement.textContent = `${bullseye1 + bullseye2 + bullseye3}`;