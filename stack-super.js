/*
Create a Stack, extending the array

Methods:
- pop()
- peek()
- _push()
---- NOTE: if you want to use "push()"" you'll have to say "this.stack.push(x)" inside
---- and change the test to use "push()" instead of _push()
*/

class Stack extends Array {
    constructor(...elems) {
        super(...elems); // super is the Array parent
    }
    pop() {
        if (this.length === 0) throw new Error("Nothing to pop");
        super.pop();
    }
    peek() {
        if (this.length == 0) throw new Error("Stack is empty");
        return this[this.length - 1];
    }
    _push(item) {
        super.push(item);
    }
}

module.exports = Stack;
