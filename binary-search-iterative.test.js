// npm test -- binary-search-iterative.test
const { binarySearchIterative } = require("./binary-search-iterative");

test("binarySearchIterative() : Has been found", () => {
    const array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
    const x = 80;

    const input = binarySearchIterative(array, x, []);
    const output = [40, 70, 80]; // 80 has been found
    expect(input).toEqual(output);
});

test("binarySearchIterative() : Has not been found", () => {
    const array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
    const x = 85;

    const input = binarySearchIterative(array, x, []);
    const output = [40, 70, 80, 90]; // 85 has not been found
    expect(input).toEqual(output);
});

test("binarySearchIterative() : Empty array", () => {
    const array = [];
    const x = 999;

    const input = binarySearchIterative(array, x, []);
    const output = []; // 999 has not been found
    expect(input).toEqual(output);
});

test("binarySearchIterative() : One item", () => {
    const array = [1];
    const x = 999;

    const input = binarySearchIterative(array, x, []);
    const output = [1]; // 999 has not been found
    expect(input).toEqual(output);
});

test("binarySearchIterative() : One item - Found", () => {
    const array = [1];
    const x = 1;

    const input = binarySearchIterative(array, x, []);
    const output = [1]; // 1 has been found
    expect(input).toEqual(output);
});

test("binarySearchIterative() : Two items", () => {
    const array = [1, 2];
    const x = 999;

    const input = binarySearchIterative(array, x, []);
    const output = [1, 2]; // 999 has not been found
    expect(input).toEqual(output);
});

test("binarySearchIterative() : Two items - found item #1", () => {
    const array = [1, 2];
    const x = 1;

    const input = binarySearchIterative(array, x, []);
    const output = [1]; // 1 has been found
    expect(input).toEqual(output);
});

test("binarySearchIterative() : Two items - found item #2", () => {
    const array = [1, 2];
    const x = 2;

    const input = binarySearchIterative(array, x, []);
    const output = [1, 2]; // 1 has been found
    expect(input).toEqual(output);
});