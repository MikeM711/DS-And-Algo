
// Helper methods
function childrenIndices(index) {
    // return left and right child index
    return [index * 2 + 1, index * 2 + 2];
 }
  
 function heapifyDown(minHeap, index) {
    [leftChildIndex, rightChildIndex] = childrenIndices(index);
    while (minHeap[leftChildIndex] !== undefined) {
        var smallestChildIndex = leftChildIndex;
        if (minHeap[rightChildIndex] !== undefined) {
            smallestChildIndex =
                minHeap[leftChildIndex] < minHeap[rightChildIndex]
                    ? leftChildIndex
                    : rightChildIndex;
        }
  
        if (minHeap[smallestChildIndex] > minHeap[index]) {
            break;
        } else {
            [minHeap[smallestChildIndex], minHeap[index]] = [
                minHeap[index],
                minHeap[smallestChildIndex]
            ];
  
            index = smallestChildIndex;
  
            [leftChildIndex, rightChildIndex] = childrenIndices(index);
        }
    }
 }
  
 function heapSort(sequence) {
    var minHeap = [];
    // grab every element in the array and store it in the heap
    for (let i = 0; i < sequence.length; i++) {
        minHeap.push(sequence[i]);
    }
  
    // heapify down all elements in the heap (which are all elements of the array), starting from the bottom of the heap (the last index of the heap)
    for (let i = minHeap.length - 1; i >= 0; i--) {
        heapifyDown(minHeap, i);
    }
  
    var result = [];
  
    // remember [] is truthy! So we use minHeap.length !== 0 as the condition
    while (minHeap.length !== 0 && minHeap[0] !== Number.MAX_VALUE) {
        var smallest = minHeap[0];
        result.push(smallest);
  
        // When we are finished with analyzing the minHeap's first element, replace it with MAX_NUMBER, so that it gets anchored to the bottom, never to be used again
        // If this MAX_NUMBER pops up, we know to exit the while loop
        // The alternative is to use a pointer to let us know where the end of the heap is, and when to escape from the while loop
        minHeap[0] = Number.MAX_VALUE;
        heapifyDown(minHeap, 0);
    }
    return result;
 }
  
 // Testing
  
 var sequence = [10, -1, 2, 5, 0, 6, 4, -5];
  
 var ans = heapSort(sequence);
  
 console.log(ans.toString()); // [-5, -1, 0, 2, 4, 5, 6, 10]
  
 // To double check, we will use JS' sort() function to sort the input sequence array
 sequence.sort((a, b) => {
    return a - b
 })
  
 console.log(ans.toString() === sequence.toString())
 