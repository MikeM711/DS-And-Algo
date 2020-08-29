class MinHeap {
    constructor() {
        this.arr = [];
    }

    peek() {
        return this.arr[0] || null;
    }

    size() {
        return this.arr.length;
    }

    pollMin() {
        let arr = this.arr;
        let len = arr.length;

        if (len === 0) {
            return null;
        }

        let min = arr[0];
        arr[0] = arr[len - 1]; // swap the last value with min value

        arr.pop();

        this.heapifyDown(0);

        return min;
    }

    add(val) {
        let arr = this.arr;
        arr.push(val);
        this.heapifyUp(arr.length - 1);
    }

    heapifyUp(n) {
        let arr = this.arr;

        while (n > 0) {
            // [1,2,3] 1 as root 2 as left child and 3 as right child
            // 2 has idx = 1 and 3 has idx = 2    1/2 will result in parent idx = 0 and 2/2 will result in parent idx = 1. So we need to add one to them and -1 at the end
            let parentN = Math.floor((n + 1) / 2) - 1;

            if (arr[parentN] <= arr[n]) {
                break;
            }

            [arr[n], arr[parentN]] = [arr[parentN], arr[n]];
            n = parentN;
        }
    }

    heapifyDown(n) {
        //          P
        //         / \
        //       1N   2N

        // 0 typically comes in First
        const getRightChild = idx => idx * 2 + 2; // Before: idx => (idx + 1) * 2
        const getLeftChild = idx => idx * 2 + 1; // Before: child2N => child2N - 1;

        let child2N = getRightChild(n);
        let child1N = getLeftChild(n);

        let arr = this.arr;
        let len = arr.length;
        let val = arr[n];

        while (child1N) {
            let swap = null;
            let child2N = getRightChild(n); // root = 0 right child idx is (0 + 1)*2 = 2
            let child1N = getLeftChild(n); // right child idx - 1 = 1 for root's left child

            // if left child INDEX is within the array index
            // AND the value of left child is LESS THAN the value of the "unorganized" node
            if (child1N < len && arr[child1N] < val) {
                swap = child1N;
            }

            // if right child INDEX is within the array index
            // AND the value of right child is LESS THAN the value of the "unorganized" node

            // But the big thing here: the value of the right child is LESS THAN the value of
            // the left child <<--- this is how we know we want override the swap of the left child
            // over to the swap of the right child
            if (child2N < len && arr[child2N] < val && arr[child2N] <= arr[child1N]) {
                swap = child2N;
            }

            // if we picked up no swaps (all children are larger than the parent), we stop
            // because this is good!
            if (swap === null) {
                break;
            }

            // perform the swap of the node in question and the chosen node to swap with
            // (left or right child)
            [arr[n], arr[swap]] = [arr[swap], arr[n]];
            n = swap;
        }
    }
}

module.exports = MinHeap;
