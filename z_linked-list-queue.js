function LinkedListQueue() {
    this.front = null;
    this.back = null;
}

// add elements to queue in O(1) time
LinkedListQueue.prototype.enqueue = function (element) {
    var N = {
        data: element,
        next: null,
    };
    if (this.back === null) {
        // If back is null, that means the whole queue is null
        var location = this.back; // $$
        this.front = N;
        this.back = N;
        return location; // $$ both ‘location’ pointer variables point to the node BEHIND the node we have just added. So, initially this pointer will hold 2 nodes. Future: this pointer will hold more if we keep inserting
    } else {
        location = this.back; // $$
        this.back.next = N;
        this.back = this.back.next;
        return location; // $$
    }
};

// remove first element from queue in O(1) time
LinkedListQueue.prototype.dequeue = function () {
    if (this.front !== null) {
        var first = this.front;
        this.front = this.front.next;
        return first.data;
    } else {
        if (this.back !== null) {
            this.back = null;
        }
        return "Cannot dequeue because queue is empty";
    }
};

// given a location, we can remove a value in O(1) time
LinkedListQueue.prototype.remove = function (location) {
    // case: removing the head node
    if (location === null) {
        this.front = this.front.next;
    } else {
        // takes care of all middle nodes AND back node
        location.next = location.next.next;
    }
};

// test data #1
var linkedQueue = new LinkedListQueue();

linkedQueue.enqueue("a"); // a
linkedQueue.enqueue("b"); // a, b
var locationC = linkedQueue.enqueue("c"); // a, b, c
linkedQueue.enqueue("d"); // a, b, c, d
linkedQueue.enqueue("e"); // a, b, c, d, e

linkedQueue.remove(locationC); // a, b, d, e
linkedQueue.dequeue(); // b, d, e
linkedQueue.dequeue(); // d, e
linkedQueue.dequeue(); // e
var lastElemToBeDequeued = linkedQueue.dequeue(); // empty, returns e
lastElemToBeDequeued = linkedQueue.dequeue(); // empty, returns "Cannot dequeue because queue is empty"

console.log(lastElemToBeDequeued);
// test data #2
var linkedQueue = new LinkedListQueue();

var locationA = linkedQueue.enqueue("a"); // a
var locationB = linkedQueue.enqueue("b"); // a, b
var locationC = linkedQueue.enqueue("c"); // a, b, c
var locationD = linkedQueue.enqueue("d"); // a, b, c, d
var locationE = linkedQueue.enqueue("e"); // a, b, c, d, e
linkedQueue.remove(locationA);

var currPointer = linkedQueue.front;

while (currPointer !== null) {
    console.log(currPointer.data);
    currPointer = currPointer.next;
}
