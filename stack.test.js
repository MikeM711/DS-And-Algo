// npm test -- stack.test
const Stack = require("./stack");

test("Creates Appropriate Stack", () => {
    let myStack = new Stack();
    const input = myStack.stack;
    const output = [];
    expect(input).toEqual(output);
});

test("Can Push items", () => {
    let myStack = new Stack();
    myStack.push(1);
    debugger;
    const input = myStack.stack;
    const output = [1];
    expect(input).toEqual(output);
});

test("Can Push many items", () => {
    let myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.push(4);
    const input = myStack.stack;
    const output = [1, 2, 3, 4];
    expect(input).toEqual(output);
});

test("Can Pop last item", () => {
    let myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.pop();
    const input = myStack.stack;
    const output = [1, 2];
    expect(input).toEqual(output);
});

test("Can Peek at last item", () => {
    let myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    const input = myStack.peek();
    const output = 3;
    expect(input).toBe(output);
});
