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
