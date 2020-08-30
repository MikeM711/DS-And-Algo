function binarySearchIterative(array, x) {
    let left = 0;
    let right = array.length - 1;
  
    // loop as long as left and right are in the correct positions
    // Iterate while search space contains at least one element - there are no elements remaining if left is greater than right
    while (left <= right) {
        // var mid = Math.floor((left + right) / 2) // left + right can overflow integers by its nature
        const mid = Math.floor(left + (right - left) / 2); // to prevent overflow
        if (array[mid] === x) {
            return true;
        } else if (x < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
  
    // If execution is here, we haven't found the value
    return false;
 }

 module.exports = { binarySearchIterative };
 