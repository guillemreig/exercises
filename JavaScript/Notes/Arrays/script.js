// ARRAY METHODS

// CREATES NEW ARRAY

// .map()
// Creates a new array populated with the results of calling a provided function on every element in the calling array.

const arr1 = [1, 2, 3, 4];

const mapArr = arr1.map((x) => x * 2); // [2, 4, 6, 8]

// .filter()
// Creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const filterArr = arr1.filter((x) => x % 2 == 0); // [2, 4]

// .join()
// Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

const arr2 = ["rat", "cat", "dog"];

const joinArr = arr2.join(", "); // rat, cat, dog

// .concat()
// Merge two or more arrays.

const concatArr = arr1.concat(arr2); // [1, 2, 3, 4, "rat", "cat", "dog"]

// .flat()
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr3 = [
    [5, 6],
    [
        [7, 8],
        [9, 10],
    ],
];

const flatArr1 = arr3.flat(); // [ 5, 6, [ 7, 8 ], [ 9, 10 ] ]

const flatArr2 = arr3.flat(2); // [ 5, 6, 7, 8, 9, 10 ]

// .slice()
// Returns a shallow copy of a portion of an array selected from start to end (end excluded).

const animals = ["ant", "bison", "camel", "duck", "elephant"];

animals.slice(2, 4); // ["camel", "duck"]

animals.slice(-3, -1); // ["camel", "duck"]

//

// EDITS ARRAY

// .pop()
// Removes the last element from an array and returns that element.

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop()); // expected output: "tomato"

console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// .push()
// Adds one or more elements to the end of an array and returns the new length of the array.

console.log(plants.push("potato")); // expected output: 5

console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale", "potato"]

// .shift()
// Removes the first element from an array and returns that removed element.

console.log(plants.shift()); // expected output: "broccoli"

console.log(plants); // expected output: Array ["cauliflower", "cabbage", "kale", "potato"]

// .unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.

console.log(plants.unshift("onion", "garlic")); // expected output: 6

console.log(plants); // expected output: Array ["onion", "garlic", "cauliflower", "cabbage", "kale", "potato"]

// .sort()
// Sorts the elements of an array in place and returns the reference to the same array, now sorted.

const array1 = ["Banana", "Orange", "Apple", "Mango"];
array1.sort();

console.log(array1); // expected output: ["Apple", "Banana", "Mango", "Orange"]

// By default, the sort() function sorts values as strings. However, if numbers are sorted as strings, "25" is bigger than "100". You can fix this by providing a compare function:

const array2 = [1, 30, 4, 21, 100000];
array2.sort((a, b) => a - b); // If the result is negative, a is sorted before b.

console.log(array2); // expected output: [ 1, 4, 21, 30, 100000 ]

// .reverse()
// Reverses an array in place and returns the reference to the same array.

array1.reverse();

console.log(array1); // expected output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]

// .fill()

// SEARCHES IN ARRAY

// .find()

// .findIndex()

// .indexOf()

// .some()

// .every()

// .includes()

//

// LOOPS THROUGH ARRAY

// .forEach
// Executes a provided function once for each array element.

const arr0 = ["Hello!", "Goodbye!"];

arr0.forEach((x) => console.log(x)); // prints "Hello!" then "Goodbye!"

// for ... of
// Executes a loop that operates on a sequence of values sourced from an iterable object.

for (let element of arr0) {
    console.log(element);
} // prints "Hello!" then "Goodbye!"
