/*
Create a linked list using prototypical inheritance

Methods:
- append()
- prepend()
- remove()
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.data = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.append = function (val) {
    const newNode = {
        data: val,
        next: null,
    };

    if (this.head === null) {
        this.head = newNode;
        return;
    }

    let current = this.head;

    while (current.next !== null) {
        current = current.next;
    }

    current.next = newNode;
};

LinkedList.prototype.prepend = function (val) {
    const newNode = {
        data: val,
        next: this.head,
    };
    this.head = newNode;
};

LinkedList.prototype.remove = function (val) {
    // some implementations use a "contains" method to see if
    // the linked list has the value, before removing it

    if (this.head.data === val) {
        this.head = this.head.next;
        return;
    }

    var prev = null;
    var curr = this.head;

    while (curr !== null && curr.data !== val) {
        prev = curr;
        curr = curr.next;
    }

    if (curr !== null) {
        prev.next = curr.next;
    }
};

module.exports = LinkedList;
