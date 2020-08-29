class MaxHeap {
    constructor() {
        this.arr = [];
    }

    peek() {
        return this.arr[0] || null;
    }

    size() {
        return this.arr.length;
    }

    pollMax() {
        let arr = this.arr;
        let len = arr.length;

        if (len === 0) {
            return null;
        }

        let max = arr[0];
        arr[0] = arr[len - 1] // replace max value with the last value

        arr.pop();

        this.heapifyDown(0);

        return max;
    }

    add(val) {
        let arr = this.arr;
        arr.push(val);
        this.heapifyUp(arr.length - 1);
    }

    heapifyUp(n) {
        let arr = this.arr;

        while (n > 0) {
            // [3,2,1] 3 as root, 2 as left child and 1 as right child 
            // 2 has idx = 1 and 1 has idx = 2 
            // 1/2 will result in parent idx = 0 
            // and 2/2 will result in parent idx = 1. So we need to add one to them and -1 at the end
            let parentN = Math.floor((n + 1) / 2) - 1;

            if (arr[parentN] > arr[n]) {
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
        const getRightChild = idx => idx * 2 + 2;
        const getLeftChild = idx => idx * 2 + 1; // child2N => child2N - 1;

        let child2N = getRightChild(n);
        let child1N = getLeftChild(n);

        let arr = this.arr;
        let len = arr.length;
        let val = arr[n];

        while (child1N) {

            let swap = null;
            let child2N = getRightChild(n); // root = 0 right child idx is (0 + 1)*2 = 2
            let child1N = getLeftChild(n); // right child idx - 1 = 1 for root's left child

            if (child1N < len && arr[child1N] > val) {
                swap = child1N;
            }

            if (child2N < len && arr[child2N] > val && arr[child2N] >= arr[child1N]) {
                swap = child2N;
            }

            if (swap === null) {
                break;
            }

            [arr[n], arr[swap]] = [arr[swap], arr[n]];
            n = swap;
        }
    }
}

module.exports = MaxHeap;