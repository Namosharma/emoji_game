const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];
let currentEmojiIndex = 0;
let score = 00;

const guessInput = document.getElementById("guess-input");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

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
});
