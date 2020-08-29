// npm test -- queue.test
const Queue = require("./queue");

test("Creates Appropriate Queue", () => {
    const myQueue = new Queue();
    const input = myQueue.queue;
    const output = [];
    expect(input).toEqual(output);
});

test("Can Enqueue", () => {
    let myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    const input = myQueue.queue;
    const output = [1, 2];
    expect(input).toEqual(output);
});

test("Can Dequeue", () => {
    let myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.dequeue();
    const input = myQueue.queue;
    const output = [2]; // LIFO
    expect(input).toEqual(output);
});

test("Can dequeue nothing", () => {
    let myQueue = new Queue();
    myQueue.dequeue();
    const input = myQueue.queue;
    const output = [];
    expect(input).toEqual(output);
});

test("Checks first item", () => {
    let myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    const input = myQueue.first();
    const output = 1;
    expect(input).toBe(output);
});

test("Checks first item #2 - with dequeue", () => {
    let myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    myQueue.dequeue();
    myQueue.dequeue();
    const input = myQueue.first();
    const output = 3;
    expect(input).toBe(output);
});

test("Checks last item", () => {
    let myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    const input = myQueue.last();
    const output = 4;
    expect(input).toBe(output);
});

test("Checks size", () => {
    let myQueue = new Queue();
    myQueue.enqueue(9);
    myQueue.enqueue(99);
    myQueue.enqueue(999);
    myQueue.enqueue(9999);
    const input = myQueue.size();
    const output = 4;
    expect(input).toBe(output);
});
