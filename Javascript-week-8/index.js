//This function check if a number is prime

function isPrime(number) {
    /* Check if a number is a prime number. */
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
const numToCheck = 17;
if (isPrime(numToCheck)) {
    console.log(`${numToCheck} is a prime number.`);
} else {
    console.log(`${numToCheck} is not a prime number.`);
}
