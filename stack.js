/*
Create a Stack, extending the array

Methods:
- pop()
- peek()
- push()
*/

class Stack {
    constructor() {
        this.stack = [];
    }
    pop() {
        if (this.stack.length === 0) throw new Error("Nothing to pop");
        this.stack.pop();
    }
    peek() {
        if (this.stack.length == 0) throw new Error("Stack is empty");
        return this.stack[this.stack.length - 1];
    }
    push(item) {
        const min = this.getMin();
        this.stack.push(item);
    }
}

module.exports = Stack;
