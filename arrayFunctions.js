// Find Maximum
function findMax(arr) {
    return Math.max(...arr);
}

// Find Minimum
function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}
