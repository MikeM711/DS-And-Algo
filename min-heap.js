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
        let arr = this.arr;
        let len = arr.length;
        let val = arr[n];

        while (true) {
            let swap = null;
            let child2N = (n + 1) * 2; // root = 0 right child idx is (0 + 1)*2 = 2
            let child1N = child2N - 1; // right child idx - 1 = 1 for root's left child
            if (child1N < len && arr[child1N] < val) {
                swap = child1N;
            }

            if (child2N < len && arr[child2N] < val && arr[child2N] <= arr[child1N]) {
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

module.exports = MinHeap;
