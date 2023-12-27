// QUESTION
// Random Number Guessing Game:
// Develop a program that generates a random number between 1 and 100. Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.

const targetNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function guessNumber(targetNumber, userGuess) {
    guesses++;
    if (parseInt(userGuess) === targetNumber) {
        return (`Congratulations! You guessed the correct number ${targetNumber} in ${guesses} attempts.`);
    } else if (userGuess > targetNumber) {
        return ("Too high! Try again.")
    } else {
        return ("Too low! Try again.")
    }

}
console.log(guessNumber(targetNumber, 100));
