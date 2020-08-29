function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function (item) {
    // enqueue
    this.queue.push(item);
};

Queue.prototype.dequeue = function () {
    // dequeue
    this.queue.shift();
};

Queue.prototype.first = function () {
    return this.queue[0];
};

Queue.prototype.last = function () {
    return this.queue[this.queue.length - 1];
};

Queue.prototype.size = function () {
    return this.queue.length;
};

// Queue.prototype.max = function () {
//     return Math.max(...this.data);
// };

module.exports = Queue;
