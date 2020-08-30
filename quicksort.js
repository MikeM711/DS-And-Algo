

// Quicksort
 
// We will need a recursive function AND a partitioning function
 
function quickSort(arr, start, end) {
    // Recursive Function
    if (start >= end) {
        return;
    }
    let index = partition(arr, start, end);
    // 'index' is the array index of a final sorted position of a value
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
  
    return arr;
 }
  
 function partition(arr, start, end) {
    // where end is the pivot
    var pivotIndex = start; // keeps track of where the pivot will end up once the "swapping" is complete
    var pivotValue = arr[end];
    for (let i = start; i < end; i++) {
        // pointer i inspects all elements
        // we have no need to inspect the element before the pivot (located at the far right, on index: 'end')
  
        // If i is less than the pivot, we will swap with j, and we will iterate pivotIndex
        // If i is greater than the pivot, we will do nothing
        if (arr[i] < pivotValue) {
            // swap
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // iterate the pivotIndex pointer
            pivotIndex++;
        }
    }
  
    // We now have the array: ["small elements", "large elements", pivot]
    // swap "pivot" into its correct spot
    // remember, pivotIndex is always one index ahead, so we are safe to swap right now
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  
    // Theory: modifying arr in here modifies arr GLOBALLY
    // First partition will have arr = ["small elements", 4, "large elements"]
  
    // return the index, letting the recursive function know that we are, for sure, have this index FULLY SORTED
    return pivotIndex;
 }
  
 var unsortedArr = [7, 2, 6, 5, 4];
  
 var ans = quickSort(unsortedArr, 0, unsortedArr.length - 1);
  
 console.log(ans);
 