// KYU 6

// Multiplication table
// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3 the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
    let outputArr = [];
    for (let a = 1; a <= size; a++) {
        let rowArr = [];
        for (let b = 1; b <= size; b++) {
            rowArr.push(a * b);
        }
        outputArr.push(rowArr);
    }
    return outputArr;
};

// Most voted slution
multiplicationTablePRO = function (size) {
    var result = [];

    for (var i = 0; i < size; i++) {
        result[i] = [];
        for (var j = 0; j < size; j++) {
            result[i][j] = (i + 1) * (j + 1);
        }
    }

    return result;
}; // Almost the same idea, but instead of using the .push() method it inserts each element by giving it a coordinate in the arrays

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
    return "abcdefghijklmnopqrstuvwxyz".split("").every((x) => string.includes(x)); // Uses the every method on the alphabet and the includes method on the input string
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

// Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// My attempt
const arrayDiff = (a, b) => a.filter((x) => !b.includes(x));

// Most voted solution
function arrayDiffPRO(a, b) {
    return a.filter((e) => !b.includes(e));
} // The same but without arrow function sintax

// Replace With Alphabet Position
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "The sunset sets at twelve o' clock." => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

const alphabetPosition = (text) =>
    text
        .toLowerCase()
        .split("")
        .map((x) => ".abcdefghijklmnopqrstuvwxyz".indexOf(x))
        .filter((x) => x > 0)
        .join(" ");
