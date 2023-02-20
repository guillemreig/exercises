// 4 kYU

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
        if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + "-" + list[j]);
    }
    return list.join();
} // Turns out that the splice method can also replace what has been removed. This allows transforming the array on the go

// GAME OF LIFE (in progress)

function getGeneration(cells, generations) {
    if (generations) {
        // This will run for each iteration(generation)

        // 1. Get input array dimensions
        let height = cells.length; // 3
        let width = cells[0].length; // 3

        // 2. Make a copy of the input array (safe method for multidimensional arrays)
        const copyArr = cells.map((arr) => arr.slice());

        // 3. Add a perimetral layer filled with 0
        copyArr.push(Array(width).fill(0));
        copyArr.unshift(Array(width).fill(0));

        copyArr.forEach((arr) => {
            arr.push(0);
            arr.unshift(0);
        });

        // console.log("copyArr :");
        // console.log(copyArr);

        // 4. Create an empty array the same size
        const resultArr = copyArr.map((arr) => arr.slice().fill(0)); // [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ],[ 0, 0, 0, 0, 0 ],[ 0, 0, 0, 0, 0 ],[ 0, 0, 0, 0, 0 ] ]

        // console.log("initial resultArr :");
        // console.log(resultArr);

        // 5. Turn 'height' and 'width' variables into 'last index'
        height++;
        width++;

        // 6. run the code that checks each cell wether it should be alive or not in the next iteration
        copyArr.forEach((row, i) => {
            row.forEach((element, j) => {
                let count = 0; // number of neighbors alive

                // In upper row
                i && j && copyArr[i - 1][j - 1] && count++;
                i && copyArr[i - 1][j] && count++;
                i && j < width && copyArr[i - 1][j + 1] && count++;

                // Same row
                j && copyArr[i][j - 1] && count++;
                j < width && copyArr[i][j + 1] && count++;

                // Lower row
                i < height && j && copyArr[i + 1][j - 1] && count++;
                i < height && copyArr[i + 1][j] && count++;
                i < height && j < width && copyArr[i + 1][j + 1] && count++;

                // console.log(i, j, "count:", count)

                if (element && count > 1 && count < 4) {
                    resultArr[i][j] = 1;
                } else if (!element && count === 3) {
                    resultArr[i][j] = 1;
                } else {
                    resultArr[i][j] = 0;
                }
            });
        });

        // 7. Trim the grid edges if no alive cell exists. Check again if trim occurs
        let trimCheck = false;

        do {
            trimCheck = false;
            if (!resultArr[height].includes(1)) {
                resultArr.pop();
                height--;
                trimCheck = true;
            }
            if (!resultArr[0].includes(1)) {
                resultArr.shift();
                height--;
                trimCheck = true;
            }
            if (resultArr.every((arr) => arr[width] === 0)) {
                resultArr.forEach((arr) => arr.pop());
                width--;
                trimCheck = true;
            }
            if (resultArr.every((arr) => arr[0] === 0)) {
                resultArr.forEach((arr) => arr.shift());
                width--;
                trimCheck = true;
            }
        } while (trimCheck);

        // 8. Remove one generation from the counter
        generations--;

        console.log("generations left", generations, ":");
        console.log(htmlize(resultArr));

        // 9. Call again the function, passing the current grid and the generations left
        return getGeneration(resultArr, generations);
    } else {
        // 10. If no generations left, return the grid unchanged
        return cells;
    }
}
