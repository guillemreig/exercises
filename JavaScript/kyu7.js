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
