// npm test -- min-heap.test
const MinHeap = require("./min-heap");

test("MinHeap Constructor: Creates Appropriate MinHeap", () => {
    let myMinHeap = new MinHeap();
    const input = myMinHeap.arr;
    const output = [];
    expect(input).toEqual(output);
});

test("heapifyUp(): Heapify up is correct implemented #1", () => {
    // When you do an "add", items are added to the end of an array
    // heapify up will bubble the item up if necessary

    // "Heapify up" assumes that the heap is correctly heapified BEFORE the item is added
    // and the item added to the end of the heap is the only item we need to consider as "unorganized"

    let myMinHeap = new MinHeap();

    // Offender: the "3" at the end
    myMinHeap.arr = [3, 5, 4, 3]; // this needs to be heapified upwards (added a 3)
    myMinHeap.heapifyUp(myMinHeap.arr.length - 1);

    const input = myMinHeap.arr;
    const output = [3, 3, 4, 5];

    expect(input).toEqual(output);
});

test("heapifyUp(): Heapify up is correct implemented #2: Larger heap - to top", () => {
    let myMinHeap = new MinHeap();

    // Offender: the "3" at the end
    myMinHeap.arr = [4, 5, 7, 6, 9, 8, 20, 3]; // this needs to be heapified upwards (added a 3)
    myMinHeap.heapifyUp(myMinHeap.arr.length - 1);

    const input = myMinHeap.arr;
    const output = [3, 4, 7, 5, 9, 8, 20, 6];

    expect(input).toEqual(output);
});

test("heapifyUp(): Heapify up is correct implemented #2: Larger heap - to middle", () => {
    let myMinHeap = new MinHeap();

    // Offender: the "3" at the end
    myMinHeap.arr = [2, 4, 7, 9, 6, 8, 10, 11, 3]; // this needs to be heapified upwards (added a 3)
    myMinHeap.heapifyUp(myMinHeap.arr.length - 1);

    const input = myMinHeap.arr;
    const output = [2, 3, 7, 4, 6, 8, 10, 11, 9];

    expect(input).toEqual(output);
});

test("add() + heapifyUp(): Can Add Items to MinHeap #1", () => {
    let myMinHeap = new MinHeap();
    myMinHeap.add(5);
    myMinHeap.add(3);
    myMinHeap.add(4);
    const input = myMinHeap.arr;
    // 1st number is the most mininum
    // 2nd or 3rd number contains 2nd DEFINITE most mininum
    const output = [3, 5, 4];
    expect(input).toEqual(output);
});

test("add() + heapifyUp(): Can Add Items to MinHeap #2 - swap order", () => {
    let myMinHeap = new MinHeap();
    myMinHeap.add(3);
    myMinHeap.add(4);
    myMinHeap.add(5);
    const input = myMinHeap.arr;
    // 1st number is the most mininum
    // 2nd or 3rd number contains 2nd DEFINITE most mininum
    const output = [3, 4, 5]; // Proof that 2nd and 3rd number don't follow an order in minHeap
    expect(input).toEqual(output);
});

test("add() + heapifyUp(): Can Add Items to MinHeap #3: large heap", () => {
    let myMinHeap = new MinHeap();
    myMinHeap.add(5);
    myMinHeap.add(3);
    myMinHeap.add(4);
    myMinHeap.add(6);
    myMinHeap.add(9);
    myMinHeap.add(7);
    myMinHeap.add(2);
    myMinHeap.add(8);
    myMinHeap.add(20);
    const input = myMinHeap.arr;
    // 1st number is the most mininum
    // 2nd or 3rd number contains 2nd DEFINITE most mininum
    const output = [2, 5, 3, 6, 9, 7, 4, 8, 20];
    expect(input).toEqual(output);
});

test("add() + heapifyUp(): Can Add Items to MinHeap #4: large heap of 1s and -1s", () => {
    let myMinHeap = new MinHeap();
    myMinHeap.add(1);
    myMinHeap.add(-1);
    myMinHeap.add(1);
    myMinHeap.add(-1);
    myMinHeap.add(1);
    myMinHeap.add(-1);
    myMinHeap.add(-1);
    myMinHeap.add(1);
    myMinHeap.add(1);
    myMinHeap.add(1);
    const input = myMinHeap.arr;
    // 1st number is the most mininum
    // 2nd or 3rd number contains 2nd DEFINITE most mininum
    const output = [-1, -1, -1, 1, 1, 1, -1, 1, 1, 1];
    expect(input).toEqual(output);
});

test("heapifyDown(): Heapify down is correct implemented #1", () => {
    // When you remove the most mininum value (pollMin), the item at the very end is moved
    // to the very front of the array
    // heapify down will bubble the item down to its correct position

    // "Heapify up" assumes that the heap is correctly heapified BEFORE the minimum value is removed
    // The item moved to the front of the heap is the only item we need to consider as "unorganized"

    let myMinHeap = new MinHeap();

    // Poll (3): [2, 3, 4, 5] => [5, 3, 4]
    // Offender: the "5" in the beginning
    myMinHeap.arr = [5, 3, 4]; // this needs to be heapified downwards (1st element in proper position)
    myMinHeap.heapifyDown(0);

    const input = myMinHeap.arr;
    const output = [3, 5, 4];

    expect(input).toEqual(output);
});

test("heapifyDown(): Heapify down is correct implemented #1: larger heap", () => {
    let myMinHeap = new MinHeap();

    // Poll (2): [2, 3, 7, 4, 6, 8, 10, 11, 9] => [9, 3, 7, 4, 6, 8, 10, 11]
    // Offender: the "9" in the beginning
    myMinHeap.arr = [9, 3, 7, 4, 6, 8, 10, 11];
    myMinHeap.heapifyDown(0);

    const input = myMinHeap.arr;
    const output = [3, 4, 7, 9, 6, 8, 10, 11];

    expect(input).toEqual(output);
});

test("pollMin() + heapifyDown(): Can appropriately remove top element from MinHeap (pollMin) #1", () => {
    let myMinHeap = new MinHeap();
    myMinHeap.arr = [3, 5, 4];
    const input = {
        min: myMinHeap.pollMin(),
        heap: myMinHeap.arr,
    };
    const output = {
        min: 3,
        heap: [4, 5],
    };
    expect(input).toEqual(output);
});

test("pollMin() + heapifyDown(): Can appropriately remove top element from MinHeap (pollMin) #2: large heap", () => {
    // When Polling - replace the last element with the first element
    let myMinHeap = new MinHeap();
    myMinHeap.arr = [2, 5, 3, 6, 9, 7, 4, 8, 20];
    const input = {
        min: myMinHeap.pollMin(),
        heap: myMinHeap.arr,
    };
    const output = {
        min: 2,
        heap: [3, 5, 4, 6, 9, 7, 20, 8],
    };
    expect(input).toEqual(output);
});

test("pollMin() + heapifyDown(): Can appropriately remove top element from MinHeap #3: large heap", () => {
    // When Polling - replace the last element with the first element
    // We will do a 2nd poll of #2 - 8 should travel to the top now
    let myMinHeap = new MinHeap();
    myMinHeap.arr = [3, 5, 4, 6, 9, 7, 20, 8];

    const input = {
        min: myMinHeap.pollMin(),
        heap: myMinHeap.arr,
    };
    const output = {
        min: 3,
        heap: [4, 5, 7, 6, 9, 8, 20],
    };
    expect(input).toEqual(output);
});

test("pollMin() + heapifyDown(): No length", () => {
    let myMinHeap = new MinHeap();
    const input = {
        min: myMinHeap.pollMin(),
        heap: myMinHeap.arr,
    };
    const output = {
        min: null,
        heap: [],
    };
    expect(input).toEqual(output);
});

test("peek(): Can Peek Item in MinHeap #1", () => {
    let myMinHeap = new MinHeap();
    myMinHeap.arr = [3, 5, 4];
    const input = myMinHeap.peek();
    const output = 3;
    expect(input).toBe(output);
});

test("peek(): Can Peek Item in MinHeap #2: null", () => {
    let myMinHeap = new MinHeap();
    const input = myMinHeap.peek();
    const output = null;
    expect(input).toBe(output);
});

test("size(): Can View Size in MinHeap #1", () => {
    let myMinHeap = new MinHeap();
    myMinHeap.arr = [3, 5, 4];
    const input = myMinHeap.size();
    const output = 3;
    expect(input).toBe(output);
});

test("size(): Can View Size in MinHeap #2: Nothing", () => {
    let myMinHeap = new MinHeap();
    const input = myMinHeap.size();
    const output = 0;
    expect(input).toBe(output);
});
