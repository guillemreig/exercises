// !!! 6 KYU !!!

// Is pangram?
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My attempt
function isPangram(string) {
    // 1. Make array with all the alphabet
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split(""); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    // 2. Lowercase the input string and convert it into an array
    const stringArr = string.toLowerCase().split("");

    // 3. Loop through the alphabet array and check if every character is present in the input string
    let result = true;

    alphabetArr.forEach((letter) => {
        if (!stringArr.includes(letter)) {
            result = false;
        }
    });

    return result;
}

isPangram("The quick brown fox jumps over the lazy dog."); // true

isPangram("This is not a pangram."); // false

// Most voted solution
function isPangramPRO(string) {
    string = string.toLowerCase(); // Sets the input string to lower case
    return "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .every((x) => string.includes(x)); // Uses the every method on the alphabet and the includes method on the input string
} // Clever use of the 'every' method! If at least one of the letters is missing it would return false! Also, turns out 'includes' works on strings.

// Morse code part 1
// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// My attempt
decodeMorse = function (morseCode) {
    return morseCode
        .trim()
        .split("   ")
        .map((word) =>
            word
                .split(" ")
                .map((morse) => MORSE_CODE[morse])
                .join("")
        )
        .join(" ");
};

// Most voted solution
decodeMorsePRO = function (morseCode) {
    function decodeMorseLetter(letter) {
        return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
        return word.split(" ").map(decodeMorseLetter).join("");
    }
    return morseCode.trim().split("   ").map(decodeMorseWord).join(" ");
}; // This is more readable, as it is easier to see that there are two steps: Separate each word and then translate each letter

//Sort the odd
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// My attempt
function sortArray(array) {
    let oddArr = array.filter((n) => n % 2).sort((a, b) => a - b); // Use this function to sort numbers!
    return array.map((n) => (n % 2 ? oddArr.shift() : n));
}

// Most voted solution
function sortArrayPRO(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => (x % 2 ? odd.shift() : x));
} // This looks almost identical to my approach! I think I'm getting the gist of it.

//

// !!! 5 KYU !!!

// Human Readable Time
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// My attempt

function humanReadable(seconds) {
    function toTwoDigits(input) {
        return input > 9 ? input : "0" + input;
    }

    let hrs = toTwoDigits(Math.floor(seconds / 3600));

    let min = toTwoDigits(Math.floor((seconds % 3600) / 60));

    let sec = toTwoDigits(seconds % 60);

    return `${hrs}:${min}:${sec}`;
}

humanReadable(0); // "00:00:00"
humanReadable(359999); // "99:59:59"

// Most voted solution

function humanReadablePRO(seconds) {
    var pad = function (x) {
        return x < 10 ? "0" + x : x;
    };
    return (
        pad(parseInt(seconds / (60 * 60))) +
        ":" +
        pad(parseInt((seconds / 60) % 60)) +
        ":" +
        pad(seconds % 60)
    );
} // I didn't know parseInt would also work on numbers and act like Math.floor()
