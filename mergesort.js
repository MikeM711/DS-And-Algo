// The recursive (splitting) function subproblem
 
function mergeSort(unsortedArray) {
    // We will recursively keep dividing the unsortedArray in half
    // We stop dividing in half if we reach an "unsortedArray" of 1 element or no elements
    // 1 or 0 elements in an array actually mean that the array is SORTED!
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
  
    // divide the array in half (or as half as you can)
    var middle = Math.floor(unsortedArray.length / 2);
  
    var leftSide = unsortedArray.slice(0, middle);
    var rightSide = unsortedArray.slice(middle);
  
    // Get the sorted left and sorted right arrays
    // Theory: the VERY FIRST sorted left and sorted right will come from the base case above
    // After the base case from left and right, that is when the mergeTwoSorted will start doing its evaluations
    var sortedLeft = mergeSort(leftSide);
    var sortedRight = mergeSort(rightSide);
  
    var mergeSorted = mergeTwoSorted(sortedLeft, sortedRight);
  
    return mergeSorted;
 }
  
 // The merging function subproblem
  
 function mergeTwoSorted(left, right) {
  var resultArray = [];
  var leftP = 0;
  var rightP = 0;
  while (left[leftP] !== undefined && right[rightP] !== undefined) {
    if (left[leftP] < right[rightP]) {
      // If an element in the left array is less than an element in the right array
      // Push element (smallest element found on the left) into the resultArray
      resultArray.push(left[leftP]);
      // increment the left pointer for left array
      leftP++;
    } else {
      // left[leftP] >= right[rightP]
      // THEORY: You can have the if condition as “<=” it doesn’t matter (it won’t change the output of the code), just as long as you understand the possible == condition (both arrays have pointers pointing to an item of equal value - doesn’t matter which one goes in first, as long as both of them go in next to each other)
      // If an element in the right array is less than OR EQUAL to the element in the 1st array
      // Push element2 (smallest element found on the right) into the result Array
      resultArray.push(right[rightP]);
      // increment the right pointer for the right array
      rightP++;
    }
  }
  
  // Either one or both of the lists have been exhausted
  
  // If only one list is exhausted, the below will "plop" the non exhausted list, by concatenating it, into the resultArray; while the exhausted list will concatenate an empty [], causing nothing to happen (which is good)
  return resultArray.concat(left.slice(leftP)).concat(right.slice(rightP));
 }
  
 var unsortedArray = [10, -1, 2, 5, 0, 6, 4, -5];
  
 var ans = mergeSort(unsortedArray);
  
 console.log(ans.toString()); // [-5, -1, 0, 2, 4, 5, 6, 10]