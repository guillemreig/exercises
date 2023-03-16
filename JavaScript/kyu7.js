// KYU 7 (initiates)

// Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vowelArr = ["a", "e", "i", "o", "u"]; // The vowels
    let vowelCount = 0; // Counter, starts at 0

    const strArr = str.split(""); // Converts 'abc' into ['a', 'b', 'c']

    strArr.forEach(function (x) {
        if (vowelArr.includes(x)) {
            vowelCount++;
        }
    }); // Runs the function for each letter and if there is a match increases counter by 1

    return vowelCount; // Returns the final counter value
}

// EXPLANATION
// Here we use the .split() method, a .forEach loop, the .includes() method, and the increment (++) operator
// The split() method takes a (pattern) and divides a String into an array of substrings, cutting where the pattern matches (but the pattern bit is removed). Using an empty string "" cuts the initial string in every character.
"rockNroll".split("N"); // [ "rock", "roll" ]

// The forEach() method executes a provided function once for each array element.
["a", "b", "c"].forEach((x) => console.log(x)); // a, b, c

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
[1, 2, 3].includes(2); // true

// The increment (++) operator increments (adds one to) its operand. It also returns the value before or after the increment, depending on where the operator is placed.
let x = 1;
x++;
console.log(x); // 2

let y = 1;
console.log(y++, y, ++y); // 1, 2, 3 (the y++ returns the 'before' value, but the ++y returns 'after' value)

//

// Music Theory: Find the Melodic Interval Between Two Notes
// Given two musical note names between A0 and C8, return the interval separating them as a positive integer.

// The hard and overcomplicated way
function getIntervalHard(note1, note2) {
    const noteString = "CDEFGAB";

    const numA = note1[1] > 6 ? "" + (Number(note1[1]) + 3) + noteString.indexOf(note1[0]) : note1[1] + noteString.indexOf(note1[0]);

    const numB = note2[1] > 6 ? "" + (Number(note2[1]) + 3) + noteString.indexOf(note2[0]) : note2[1] + noteString.indexOf(note2[0]);

    const basedNumA = parseInt(numA, 7);

    const basedNumB = parseInt(numB, 7);

    const dist = Math.abs(basedNumB - basedNumA) + 1;

    return dist;
}

function getIntervalEasy(note1, note2) {
    const noteArr = [
        "C0",
        "D0",
        "E0",
        "F0",
        "G0",
        "A0",
        "B0",
        "C1",
        "D1",
        "E1",
        "F1",
        "G1",
        "A1",
        "B1",
        "C2",
        "D2",
        "E2",
        "F2",
        "G2",
        "A2",
        "B2",
        "C3",
        "D3",
        "E3",
        "F3",
        "G3",
        "A3",
        "B3",
        "C4",
        "D4",
        "E4",
        "F4",
        "G4",
        "A4",
        "B4",
        "C5",
        "D5",
        "E5",
        "F5",
        "G5",
        "A5",
        "B5",
        "C6",
        "D6",
        "E6",
        "F6",
        "G6",
        "A6",
        "B6",
        "C7",
        "D7",
        "E7",
        "F7",
        "G7",
        "A7",
        "B7",
        "C8",
        "D8",
        "E8",
        "F8",
        "G8",
        "A8",
        "B8",
        "C9",
        "D9",
        "E9",
        "F9",
        "G9",
        "A9",
        "B9",
    ];

    return Math.abs(noteArr.indexOf(note1) - noteArr.indexOf(note2)) + 1;
}
