// IS PANGRAM?
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
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .every((x) => string.includes(x));
} // Clever use of the 'every' method! If at least one of the letters is missing it would return false! Also, turns out 'includes' works on strings.
