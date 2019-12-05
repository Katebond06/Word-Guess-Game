// user clicks any letter to start a game
// if correct letter guesses it appears on a screen (id="guesses")
// if incorrect letter guesses it appears on a screen (id="wrong-guesses")

// array of words
var words = [
  "javascript",
  "array",
  "object",
  "string",
  "boolean",
  "function",
  "method"
];

// Variables to show the game on a Browser
var guessesText = document.getElementById("guesses");
var wrongGuessesText = document.getElementById("wrong-guesses");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var solvedWordText = document.getElementById("solved-word");
var losses = 0;
var wins = 0;
var guesses = 11;
var wrongGuesses = [];
var correctGuesses = [];

// random word from array
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

for (var i = 0; i < word.length; i++) {
  correctGuesses.push("_");
}

// check if the key was pressed
window.onkeyup = function(event) {
  if (word.indexOf(event.key) > -1) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === event.key) {
        correctGuesses[i] = event.key;
      }
    }
  } else {
    wrongGuesses.push(event.key);
  }

  guesses--;

  if (correctGuesses.includes("_")) {
    if (guesses === 0) {
      losses++;
      reset();
    }
  } else {
    wins++;
    reset();
  }

  // only 11 tries, every time a key pressed one try less

  // display on a browser
  wrongGuessesText.textContent = "Wrong Guess: " + wrongGuesses;
  solvedWordText.textContent = "";
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesText.textContent = "guesses: " + guesses;
  // to give as many underscores as word needs
  for (var i = 0; i < correctGuesses.length; i++) {
    solvedWordText.textContent += " " + correctGuesses[i] + " ";
  }
};

function reset() {
  word = words[Math.floor(Math.random() * words.length)];
  guesses = 11;
  wrongGuesses = [];
  correctGuesses = [];
  for (var i = 0; i < word.length; i++) {
    correctGuesses.push("_");
  }
  console.log(word);
}
