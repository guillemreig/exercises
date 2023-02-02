// KYU 8 (beginners)

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
