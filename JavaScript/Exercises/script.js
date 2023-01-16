// 7 KYU

// 6 KYU

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

// 5 KYU

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

// Pig latin

// My attempt

function pigIt(str) {
    const regex = /^[.,:!?]/;

    function latinise(word) {
        if (!word.match(regex)) {
            let latinWord = word.split("");

            latinWord.push(latinWord.shift(), "a", "y");

            return latinWord.join("");
        }
        return word;
    }

    return str
        .split(" ")
        .map((x) => latinise(x))
        .join(" ");
}

// Most voted solution

function pigItPro(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
} // I still have to learn the extent of regex. This solution is more advanced that my current knowledge.

// Move zeros to the end

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// My attempt

function moveZeros(arr) {
    const zeroArr = arr.filter((x) => x === 0);
    const otherArr = arr.filter((x) => x !== 0);

    return otherArr.concat(zeroArr);
}

// Most voted solution

var moveZerosPRO = function (arr) {
    return arr
        .filter(function (x) {
            return x !== 0;
        })
        .concat(
            arr.filter(function (x) {
                return x === 0;
            })
        );
}; // It's basically the same, but compressed in one line

// Pick peaks

// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).
// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not.
// In case of a plateau-peak, please only return the position and value of the beginning of the plateau.
// For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

// My attempt

function pickPeaks(arr) {
    const posArr = [];
    const peaksArr = [];

    let possiblePos = null;
    let possiblePeak = null;

    const length = arr.length;

    for (let i = 1; i < length; i++) {
        if (arr[i] > arr[i - 1]) {
            possiblePos = i;
            possiblePeak = arr[i];
        } else if (arr[i] < arr[i - 1] && possiblePos != null) {
            posArr.push(possiblePos);
            peaksArr.push(possiblePeak);

            possiblePos = null;
            possiblePeak = null;
        }
    }

    return { pos: posArr, peaks: peaksArr };
}

// Most voted version

function pickPeaksPro(arr) {
    var result = { pos: [], peaks: [] };
    if (arr.length > 2) {
        var pos = -1;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                pos = i;
            } else if (arr[i] < arr[i - 1] && pos != -1) {
                result.pos.push(pos);
                result.peaks.push(arr[pos]);
                pos = -1;
            }
        }
    }
    return result;
} // Same principle as mine, although I think my approach is more readable

// RGB to Hex convertor

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
// Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// My attempt

function rgb(r, g, b) {
    function toHex(n) {
        if (n < 1) {
            return "00";
        } else if (n > 254) {
            return "FF";
        } else {
            let hex = ("00" + n.toString(16).toUpperCase()).slice(-2);
            return hex;
        }
    }

    return [a, b, c].map((x) => toHex(x)).join("");
}

// Most voted solution

function rgbPRO(r, g, b) {
    function toHex(d) {
        if (d < 0) {
            return "00";
        }
        if (d > 255) {
            return "FF";
        }
        return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
    }

    return toHex(r) + toHex(g) + toHex(b);
} // Almost the same idea. I like the other way's return line more though

// 4 kyu

// Range extractor

// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
// Example: solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

// My attempt

function solution(list) {
    // 1. Creates an array of arrays made of ranges
    let rangeArr = [];

    let tempArr = [];
    const listLength = list.length;

    for (let i = 0; i < listLength; i++) {
        tempArr.push(list[i]);
        if (list[i + 1] - list[i] > 1 || list[i + 1] === undefined) {
            rangeArr.push(tempArr);
            tempArr = [];
        }
    }

    console.log("checkpoint 1 :", rangeArr);

    // TODO: complete solution

    // 2. transforms individual arrays into ranges
    function arrayToRange(arr) {
        const arrLength = arr.length;
        if (arrLength > 2) {
            return arr[0] + "-" + arr[arrLength - 1];
        } else {
            return arr;
        }
    }

    rangeArr = rangeArr.map((x) => arrayToRange(x));

    console.log("checkpoint 2 :", rangeArr);

    // 3. transforms rangeArray into string
    rangeArr = rangeArr.flat().join(",");

    console.log("checkpoint 3 :", rangeArr);

    return rangeArr;
}

// Most voted solution
function solutionPRO(list) {
    for (var i = 0; i < list.length; i++) {
        var j = i;
        while (list[j] - list[j + 1] == -1) j++;
        if (j != i && j - i > 1)
            list.splice(i, j - i + 1, list[i] + "-" + list[j]);
    }
    return list.join();
} // Turns out that the splice method can also replace what has been removed. This allows transforming the array on the go
