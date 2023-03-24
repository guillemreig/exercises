// KYU 8 (beginners)

// Boolean to 'Yes' or 'No'
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

const boolToWord = (bool) => (bool ? "Yes" : "No");

// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    return number % 2 ? "Odd" : "Even";
}

// Perfect example of both 'ternary operator' and 'truthy' and 'falsey' values.
// The conditional (ternary) operator takes three operands: a 'condition' followed by a question mark (?), then an expression to execute if the condition is 'truthy' followed by a colon (:), and finally the expression to execute if the condition is 'falsy'. This operator is frequently used as an alternative to an if...else statement.
console.log(1 + 1 === 2 ? "Right!" : "Wrong!"); // "Right!"

// A 'truthy' value is a value that is considered 'true' when encountered in a Boolean context. All values are truthy unless they are defined as 'falsy'. That is, all values are truthy except boolean 'false', 0, -0, 0n, "", null, undefined, and NaN.
const falsyArr = [false, 0, -0, 0n, "", null, undefined, NaN];
const truthyOrFalsyArr = falsyArr.map((x) => (x ? true : false));

console.log(truthyOrFalsyArr); // [false, false, false, false, false, false, false, false]

//

// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let sum = 0;

    arr.forEach(function (x) {
        if (x > 0) {
            sum = sum + x;
        }
    });

    return sum;
}
// The forEach loop executes a function for each element in an array.
// The 'if' statement checks the number so it only sums it if it is positive.

function positiveSumPRO(arr) {
    return arr.filter((x) => x > 0).reduce((a, c) => a + c, 0);
}
// The filter() method removes all elements that don't pass the condition, in this case the ones that are negative.
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.
// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

const array1 = [1, 2, 3, 4];
const initialValue = 0;

const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); // 0 + 1 + 2 + 3 + 4

console.log(sumWithInitial); // Expected output: 10

//

// Return Negative
// In this simple assignment you are given a number and have to make it negative. If it's negative, keep it negative.

function makeNegative(num) {
    return num > 0 ? -num : num;
}

// Simple ternary operator. If the number is positive, return its negative version. Else return the number.

function makeNegativePRO(num) {
    return -Math.abs(num);
}

// The Math.abs() method returns the absolute value of a number. We return the negative of the absolute value.

//

// Reversed Strings
// Complete the solution so that it reverses the string passed into it.

function reverseString(str) {
    let output = [];

    str.split("").forEach((x) => output.unshift(x));

    return output.join("");
}

// 1st we prepare an empty array.
// Then we turn the input word into an array of leters with .split("") and run a forEach loop on it, unshifting (push to front) every letter to the prepared array.
// Finally we join all the letters and return the reversed word.

function reverseStringPRO(str) {
    return [...str].reverse().join("");
}

// [...x], used to clone arrays, can also turn a string into an array of letters
// The .reverse() method reverses the elements of an array.

// Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

const toStringMethod = (num) => num.toString();

const stringConcatenation = (num) => "" + num;

const stringInterpolation = (num) => `${num}`;

const stringConstructor = (num) => String(num);

const concatMethod = (num) => "".concat(num);

const joinMethod = (num) => [num].join("");

const toFixedMethod = (num) => num.toFixed();

const jsonStringify = (num) => JSON.stringify(num);

// Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

const greet = (name) => `Hello, ${name} how are you doing today?`;

// Interesting variations
function greetReplace(name) {
    return "Hello, <name> how are you doing today?".replace("<name>", name);
}

function greetASCII(name) {
    return `\x48\x65\x6c\x6c\x6f\x2c\x20${name}\x20\x68\x6f\x77\x20\x61\x72\x65\x20\x79\x6f\x75\x20\x64\x6f\x69\x6e\x67\x20\x74\x6f\x64\x61\x79\x3f`;
}

// Total amount of points
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

function points(games) {
    let points = 0;

    games.forEach((element) => {
        if (element[0] > element[2]) {
            points += 3;
        } else if (element[0] === element[2]) {
            points++;
        }
    });

    return points;
}

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// 35231 => [1,3,2,5,3]

const digitize = (n) =>
    n
        .toString()
        .split("")
        .reverse()
        .map((x) => parseInt(x));

// interesting variant
const digitizePRO = (n) => Array.from(String(n), Number).reverse();

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object:
// Array.from('foo') => ["f", "o", "o"]
// Array.from([1, 2, 3], x => x + x) => [2, 4, 6]

// Grasshopper - Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

const getGrade = (a, b, c) => "FFFFFFDCBAA"[Math.floor((a + b + c) / 30)];

// PRO version
function getGradePRO(a, b, c) {
    let s = (a + b + c) / 3;
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
}
