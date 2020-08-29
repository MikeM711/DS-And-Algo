// npm test -- max-heap.test
const MaxHeap = require("./max-heap");

test("MinHeap Constructor: Creates Appropriate MaxHeap", () => {
    let myMaxHeap = new MaxHeap();
    const input = myMaxHeap.arr;
    const output = [];
    expect(input).toEqual(output);
});

test("heapifyUp(): Heapify up is correct implemented #1", () => {
    // When you do an "add", items are added to the end of an array
    // heapify up will bubble the item up if necessary

    // "Heapify up" assumes that the heap is correctly heapified BEFORE the item is added
    // and the item added to the end of the heap is the only item we need to consider as "unorganized"

    let myMaxHeap = new MaxHeap();

    // Offender: the "2" at the end
    myMaxHeap.arr = [5, 3, 4, 6]; // this needs to be heapified upwards (added a 2)
    myMaxHeap.heapifyUp(myMaxHeap.arr.length - 1);

    const input = myMaxHeap.arr;
    const output = [6, 5, 4, 3];

    expect(input).toEqual(output);
});

test("heapifyUp(): Heapify up is correct implemented #2: Larger heap - to top", () => {
    let myMaxHeap = new MaxHeap();

    // Offender: the "20" at the end
    myMaxHeap.arr = [9, 7, 8, 3, 4, 6, 5, 20]; // this needs to be heapified upwards (added a 20)
    myMaxHeap.heapifyUp(myMaxHeap.arr.length - 1);

    const input = myMaxHeap.arr;
    const output = [20, 9, 8, 7, 4, 6, 5, 3];

    expect(input).toEqual(output);
});

test("heapifyUp(): Heapify up is correct implemented #2: Larger heap - to middle", () => {
    let myMaxHeap = new MaxHeap();

    // Offender: the "7" at the end
    myMaxHeap.arr = [9, 6, 8, 3, 4, 6, 5, 7]; // this needs to be heapified upwards (added a 7)
    myMaxHeap.heapifyUp(myMaxHeap.arr.length - 1);

    const input = myMaxHeap.arr;
    const output = [9, 7, 8, 6, 4, 6, 5, 3];

    expect(input).toEqual(output);
});

test("add() + heapifyUp(): Can Add Items to MaxHeap #1", () => {
    let myMaxHeap = new MaxHeap();
    myMaxHeap.add(3);
    myMaxHeap.add(4);
    myMaxHeap.add(5);

    const input = myMaxHeap.arr;
    // 1st number is the most maximum
    // 2nd or 3rd number contains 2nd DEFINITE most maximum
    const output = [5, 3, 4];
    expect(input).toEqual(output);
});

test("add() + heapifyUp(): Can Add Items to MaxHeap #2 - swap order", () => {
    let myMaxHeap = new MaxHeap();
    myMaxHeap.add(5);
    myMaxHeap.add(4);
    myMaxHeap.add(3);
    const input = myMaxHeap.arr;
    // 1st number is the most maximum
    // 2nd or 3rd number contains 2nd DEFINITE most maximum
    const output = [5, 4, 3];
    expect(input).toEqual(output);
});

test("add() + heapifyUp(): Can Add Items to MaxHeap #3: large heap", () => {
    let myMaxHeap = new MaxHeap();
    myMaxHeap.add(5);
    myMaxHeap.add(3);
    myMaxHeap.add(4);
    myMaxHeap.add(6);
    myMaxHeap.add(9);
    myMaxHeap.add(7);
    myMaxHeap.add(2);
    myMaxHeap.add(8);
    myMaxHeap.add(1);
    const input = myMaxHeap.arr;
    // 1st number is the most maximum
    // 2nd or 3rd number contains 2nd DEFINITE most maximum
    //
    //                      9
    //                    /   \
    //                   8     7   
    //                 /  \   /  \       
    //                6    5  4   2      
    //               /  \     
    //              3    1   

    const output = [9, 8, 7, 6, 5, 4, 2, 3, 1];
    expect(input).toEqual(output);
});

test("add() + heapifyUp(): Can Add Items to MaxHeap #4: large heap of 1s and -1s", () => {
    let myMaxHeap = new MaxHeap();
    myMaxHeap.add(1);
    myMaxHeap.add(-1);
    myMaxHeap.add(1);
    myMaxHeap.add(-1);
    myMaxHeap.add(1);
    myMaxHeap.add(-1);
    myMaxHeap.add(-1);
    myMaxHeap.add(1);
    myMaxHeap.add(1);
    myMaxHeap.add(1);
    const input = myMaxHeap.arr;
    // 1st number is the most maximum
    // 2nd or 3rd number contains 2nd DEFINITE most maximum
    const output = [1, 1, 1, 1, 1, -1, -1, -1, 1, -1];
    expect(input).toEqual(output);
});

test("heapifyDown(): Heapify down is correct implemented #1", () => {
    // When you remove the most maximum value (pollMax), the item at the very end is moved
    // to the very front of the array
    // heapify down will bubble the item down to its correct position

    // "Heapify up" assumes that the heap is correctly heapified BEFORE the maximum value is removed
    // The item moved to the front of the heap is the only item we need to consider as "unorganized"

    let myMaxHeap = new MaxHeap();

    // Poll (5) : [5, 3, 4, 2] => [2, 3, 4]
    // Offender: the "2" in the beginning
    myMaxHeap.arr = [2, 3, 4]; // this needs to be heapified downwards (1st element in proper position)
    myMaxHeap.heapifyDown(0);

    const input = myMaxHeap.arr;
    const output = [4, 3, 2];

    expect(input).toEqual(output);
});

test("heapifyDown(): Heapify down is correct implemented #1: larger heap", () => {
    let myMaxHeap = new MaxHeap();

    // Poll (9): [9, 8, 7, 6, 5, 4, 2, 3, 1] => [1, 8, 7, 6, 5, 4, 2, 3]

    //                      9
    //                    /   \
    //                   8     7   
    //                 /  \   /  \       
    //                6    5  4   2      
    //               /  \     
    //              3    1 

    // Poll() => 9

    //                      1
    //                    /   \
    //                   8     7   
    //                 /  \   /  \       
    //                6    5  4   2      
    //               /      
    //              3 

    // After heapifying: (swap with LARGEST numbers)

    //                      8
    //                    /   \
    //                   6     7   
    //                 /  \   /  \       
    //                3    5  4   2      
    //               /      
    //              1 

    // Offender: the "1" in the beginning
    myMaxHeap.arr = [1, 8, 7, 6, 5, 4, 2, 3];
    myMaxHeap.heapifyDown(0);

    const input = myMaxHeap.arr;
    const output = [8, 6, 7, 3, 5, 4, 2, 1];

    expect(input).toEqual(output);
});

test("heapifyDown(): Heapify down is correct implemented #1.1: larger heap x2", () => {
    let myMaxHeap = new MaxHeap();

    // Poll (9): [9, 8, 7, 6, 2, 4, 2, 3, 1, 1] => [1, 8, 7, 6, 2, 4, 2, 3, 1]

    //                      9
    //                    /   \
    //                   8      7   
    //                 /   \    /  \       
    //                6     2   4   2      
    //               / \    /  
    //              3   1  1

    // Poll() => 9

    //                      1
    //                    /   \
    //                   8      7   
    //                 /   \    /  \       
    //                6     2   4   2      
    //               / \      
    //              3   1  

    // After heapifying: (swap with LARGEST numbers)

    //                      8
    //                    /   \
    //                   6      7   
    //                 /   \    /  \       
    //                3     2   4   2      
    //               / \      
    //              1   1  

    // Offender: the "1" in the beginning
    myMaxHeap.arr = [1, 8, 7, 6, 2, 4, 2, 3, 1];
    myMaxHeap.heapifyDown(0);

    const input = myMaxHeap.arr;
    const output = [8, 6, 7, 3, 2, 4, 2, 1, 1];

    expect(input).toEqual(output);
});

test("pollMax() + heapifyDown(): Can appropriately remove top element from MaxHeap (pollMax) #1", () => {
    let myMaxHeap = new MaxHeap();
    myMaxHeap.arr = [5, 4, 3];
    const input = {
        max: myMaxHeap.pollMax(),
        heap: myMaxHeap.arr,
    };
    const output = {
        max: 5,
        heap: [4, 3],
    };
    expect(input).toEqual(output);
});

test("pollMax() + heapifyDown(): Can appropriately remove top element from MaxHeap (pollMax) #2: large heap", () => {
    // When Polling - replace the last element with the first element
    let myMaxHeap = new MaxHeap();
    myMaxHeap.arr = [9, 8, 7, 6, 2, 4, 2, 3, 1, 1]; // [1, 8, 7, 6, 2, 4, 2, 3, 1]
    const input = {
        max: myMaxHeap.pollMax(),
        heap: myMaxHeap.arr,
    };
    const output = {
        max: 9,
        heap: [8, 6, 7, 3, 2, 4, 2, 1, 1],
    };
    expect(input).toEqual(output);
});

test("pollMax() + heapifyDown(): Can appropriately remove top element from MaxHeap #3: large heap", () => {
    // When Polling - replace the last element with the first element
    // We will do a 2nd poll of #2 - 1 should travel to the top (again)
    let myMaxHeap = new MaxHeap();
    myMaxHeap.arr = [8, 6, 7, 3, 2, 4, 2, 1, 1]; // [1, 6, 7, 3, 2, 4, 2, 1]

    //                      1
    //                    /   \
    //                   6      7   
    //                 /   \    /  \       
    //                3     2   4   2      
    //               /       
    //              1 
    
    // After heapifying: (swap with largest numbers)

    //                      7
    //                    /   \
    //                   6      4   
    //                 /   \    /  \       
    //                3     2   1   2      
    //               /       
    //              1 

    const input = {
        max: myMaxHeap.pollMax(),
        heap: myMaxHeap.arr,
    };
    const output = {
        max: 8,
        heap: [7, 6, 4, 3, 2, 1, 2, 1],
    };
    expect(input).toEqual(output);
});

test("pollMax() + heapifyDown(): No length", () => {
    let myMaxHeap = new MaxHeap();
    const input = {
        max: myMaxHeap.pollMax(),
        heap: myMaxHeap.arr,
    };
    const output = {
        max: null,
        heap: [],
    };
    expect(input).toEqual(output);
});

test("peek(): Can Peek Item in MaxHeap #1", () => {
    let myMaxHeap = new MaxHeap();
    myMaxHeap.arr = [5, 4, 3];
    const input = myMaxHeap.peek();
    const output = 5;
    expect(input).toBe(output);
});

test("peek(): Can Peek Item in MaxHeap #2: null", () => {
    let myMaxHeap = new MaxHeap();
    const input = myMaxHeap.peek();
    const output = null;
    expect(input).toBe(output);
});

test("size(): Can View Size in MaxHeap #1", () => {
    let myMaxHeap = new MaxHeap();
    myMaxHeap.arr = [5, 4, 3];
    const input = myMaxHeap.size();
    const output = 3;
    expect(input).toBe(output);
});

test("size(): Can View Size in MaxHeap #2: Nothing", () => {
    let myMaxHeap = new MaxHeap();
    const input = myMaxHeap.size();
    const output = 0;
    expect(input).toBe(output);
});