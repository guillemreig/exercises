// KYU 6

// Multiplication table
// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3 the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
    let outputArr = [];
    for (let a = 1; a <= size; a++) {
        let rowArr = [];
        for (let b = 1; b <= size; b++) {
            rowArr.push(a * b);
        }
        outputArr.push(rowArr);
    }
    return outputArr;
};

// Most voted slution
multiplicationTablePRO = function (size) {
    var result = [];

    for (var i = 0; i < size; i++) {
        result[i] = [];
        for (var j = 0; j < size; j++) {
            result[i][j] = (i + 1) * (j + 1);
        }
    }

    return result;
};

// Almost the same idea, but instead of using the .push() method it inserts each element by giving it a coordinate in the arrays
