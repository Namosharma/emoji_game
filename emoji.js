const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];
let currentEmojiIndex = 0;
let score = 0;

const guessInput = document.getElementById("guess-input");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const buttonElement = document.getElementById("restart-button");

let seconds = 30;

function displayEmoji() {
  const descriptionElement = document.getElementById("description");
  descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
}
// displayEmoji();
function checkguess() {
  const guess = guessInput.value.trim().toLowerCase();
  const correctEmoji = emojiDetails[currentEmojiIndex].description
    .trim()
    .toLowerCase();

  if (guess == correctEmoji) {
    score++;
    resultElement.textContent = "correct";
  } else {
    resultElement.textContent = "Incorrect";
  }
  scoreElement.textContent = `Score:${score}`;
  guessInput.value = "";
  guessInput.focus();
  nextEmoji();
}

function nextEmoji() {
  currentEmojiIndex++;
  setTimeout(() => {
    resultElement.textContent = "";
  }, 500);
  if (currentEmojiIndex == emojiDetails.length) {
    currentEmojiIndex = 0;
  }
  displayEmoji();
}

document.getElementById("guess-input").addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    checkguess();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  displayEmoji();
  timerElement.textContent = `Time :${seconds}s`;
  startTimer();
});
let timer;
function startTimer() {
  timer = setInterval(() => {
    seconds--;
    timerElement.textContent = `Time : ${seconds}s`;
    if (seconds == 20) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  guessInput.disabled = true;
  timerElement.textContent = "Time's up!Restart to play again";
}

//to restart

buttonElement.addEventListener("click", () => {
  score = 0;
  currentEmojiIndex = 0;

  // Clear the result
  resultElement.textContent = "";

  // Enable the guess input
  guessInput.disabled = false;

  // Reset the timer
  seconds = 30;
  timerElement.textContent = `Time : ${seconds}s`;

  // Restart the timer
  clearInterval(timer);
  startTimer();

  displayEmoji();
});
