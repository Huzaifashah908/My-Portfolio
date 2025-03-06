const words = ["elephant", "butterfly", "chocolate", "mountain", "adventure", "galaxy"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let attemptsLeft = 6;

function displayWord() {
    let display = selectedWord
        .split("")
        .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
    document.getElementById("word-display").textContent = display;
}

function guessLetter() {
    let input = document.getElementById("letter-input").value.toLowerCase();
    document.getElementById("letter-input").value = ""; // Clear input field

    if (!input.match(/[a-z]/) || input.length !== 1) {
        document.getElementById("message").textContent = "Please enter a valid single letter!";
        return;
    }

    if (guessedLetters.includes(input)) {
        document.getElementById("message").textContent = "You already guessed that letter!";
        return;
    }

    guessedLetters.push(input);

    if (!selectedWord.includes(input)) {
        attemptsLeft--;
        document.getElementById("message").textContent = "Wrong guess!";
    } else {
        document.getElementById("message").textContent = "Good job!";
    }

    document.getElementById("attempts").textContent = "Attempts Left: " + attemptsLeft;
    displayWord();

    if (selectedWord.split("").every(letter => guessedLetters.includes(letter))) {
        document.getElementById("message").textContent = "Congratulations! You won!";
    } else if (attemptsLeft === 0) {
        document.getElementById("message").textContent = "Game Over! The word was: " + selectedWord;
    }
}

// Initialize game
displayWord();
