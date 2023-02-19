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
    console.log("generations :", generations);
    console.log("cells :", cells);
    console.log(htmlize(cells));

    const height = cells.length - 1;
    const width = cells[0].length - 1;

    console.log("dimensions :", height, "x", width);

    // Safely copy multidimensional array
    const resultArr = cells.map((arr) => arr.slice());

    for (let g = 0; g < generations; g++) {
        cells.forEach((row, i) => {
            row.forEach((element, j) => {
                console.log("cells", cells);
                console.log("cells[0][0]", cells[0][0]);

                let count = 0;
                // Upper row
                i && j && cells[i - 1][j - 1] && count++;
                i && cells[i - 1][j] && count++;
                i && j < width && cells[i - 1][j + 1] && count++;
                console.log(count);

                // Same row
                j && cells[i][j - 1] && count++;
                j < width && cells[i][j + 1] && count++;
                console.log(count);

                // Lower row
                i < height && j && cells[i + 1][j - 1] && count++;
                i < height && cells[i + 1][j] && count++;
                i < height && j < width && cells[i + 1][j + 1] && count++;
                console.log(count);

                console.log("row i :", i, "col j :", j, "count :", count);

                if (cells[i][j] && count > 1 && count < 4) {
                    resultArr[i][j] = 1;
                } else if (!cells[i][j] && count === 3) {
                    resultArr[i][j] = 1;
                } else {
                    resultArr[i][j] = 0;
                }
            });
        });

        console.log(htmlize(resultArr));
        cells = resultArr.map((arr) => arr.slice());
    }
    return resultArr;
}
