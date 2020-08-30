function binarySearchRecursive(array, x, left, right) {
    // below is the case if the integer does not exist in the array
    // Base condition: SEARCH SPACE IS EXHAUSTED - if left === right, there is one element to check
    if (left > right) {
        return false;
    }

    // const mid = Math.floor((left + right) / 2) // left + right can overflow integers by its nature
    const mid = Math.floor(left + (right - left) / 2); // to prevent overflow
    if (array[mid] === x) {
        return true;
    } else if (x < array[mid]) {
        return binarySearchRecursive(array, x, left, mid - 1); // ‘mid’ has already been checked
    } else {
        return binarySearchRecursive(array, x, mid + 1, right); // ‘mid’ has already been checked
    }
}

function binarySearchRecursiveShell(array, x) {
    return binarySearchRecursive(array, x, 0, array.length - 1);
}

module.exports = { binarySearchRecursiveShell, binarySearchRecursive };
