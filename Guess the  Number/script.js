const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
let secretNumber;
let roundsWon = 0;
let totalRounds = 10;

guessButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);
    if (guess >= 1 && guess <= 10) {
        if (guess === secretNumber) {
            roundsWon++;
            message.textContent = `Round ${totalRounds - roundsLeft + 1} won! You have won ${roundsWon} rounds so far.`;
            if (roundsWon >= 3) {
                message.textContent = `Congratulations! You have won the game by winning ${roundsWon} rounds out of ${totalRounds}.`;
                disableGame();
            }
        } else {
            message.textContent = `Round ${totalRounds - roundsLeft + 1} lost. The correct number was ${secretNumber}. You have won ${roundsWon} rounds so far.`;
        }
        roundsLeft--;
        if (roundsLeft === 0) {
            if (roundsWon < 3) {
                message.textContent = `Sorry, you lost the game by winning only ${roundsWon} rounds out of ${totalRounds}.`;
            }
            disableGame();
        }
    } else {
        message.textContent = 'Please enter a number between 1 and 10.';
    }
    guessInput.value = '';
});

function disableGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
}

function newRound() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    roundsLeft = totalRounds;
    message.textContent = `Round ${totalRounds - roundsLeft + 1}: Guess a number between 1 and 10:`;
}

newRound();