function binarySearchRecursive(array, x, left, right, traversedIndexArr) {
    // below is the case if the integer does not exist in the array
    // Base condition: SEARCH SPACE IS EXHAUSTED - if left === right, there is one element to check
    if (left > right) {
        return traversedIndexArr; // actual application: false
    }

    // const mid = Math.floor((left + right) / 2) // left + right can overflow integers by its nature
    const mid = Math.floor(left + (right - left) / 2); // to prevent overflow
    traversedIndexArr.push(array[mid])
    if (array[mid] === x) {
        return traversedIndexArr;
    } else if (x < array[mid]) {
        // ‘mid’ has already been checked
        return binarySearchRecursive(array, x, left, mid - 1, traversedIndexArr);
    } else {
        // ‘mid’ has already been checked
        return binarySearchRecursive(array, x, mid + 1, right, traversedIndexArr);
    }
}

function binarySearchRecursiveShell(array, x) {
    let traversedIndexArr = []
    return binarySearchRecursive(array, x, 0, array.length - 1, traversedIndexArr);
}

module.exports = { binarySearchRecursiveShell, binarySearchRecursive };
