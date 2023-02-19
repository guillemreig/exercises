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
    return pad(parseInt(seconds / (60 * 60))) + ":" + pad(parseInt((seconds / 60) % 60)) + ":" + pad(seconds % 60);
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
