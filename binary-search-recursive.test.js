// npm test -- binary-search-recursive.test
const { binarySearchRecursiveShell } = require("./binary-search-recursive");

test("binarySearchRecursiveShell(): Has been found", () => {
    const array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
    const x = 80;

    const input = binarySearchRecursiveShell(array, x);
    const output = true; // 80 has been found
    expect(input).toBe(output);
});

test("binarySearchRecursiveShell(): Has not been found", () => {
    const array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
    const x = 85;

    const input = binarySearchRecursiveShell(array, x);
    const output = false; // 85 has not been found
    expect(input).toBe(output);
});

test("binarySearchRecursiveShell(): Empty array", () => {
    const array = [];
    const x = 999;

    const input = binarySearchRecursiveShell(array, x);
    const output = false; // 999 has not been found
    expect(input).toBe(output);
});

test("binarySearchRecursiveShell(): One item", () => {
    const array = [1];
    const x = 999;

    const input = binarySearchRecursiveShell(array, x);
    const output = false; // 999 has not been found
    expect(input).toBe(output);
});

test("binarySearchRecursiveShell(): One item - Found", () => {
    const array = [1];
    const x = 1;

    const input = binarySearchRecursiveShell(array, x);
    const output = true; // 999 has not been found
    expect(input).toBe(output);
});

test("binarySearchRecursiveShell(): Two items", () => {
    const array = [1, 2];
    const x = 999;

    const input = binarySearchRecursiveShell(array, x);
    const output = false; // 999 has not been found
    expect(input).toBe(output);
});

test("binarySearchRecursiveShell(): Two items - found item #1", () => {
    const array = [1, 2];
    const x = 1;

    const input = binarySearchRecursiveShell(array, x);
    const output = true; // 1 has been found
    expect(input).toBe(output);
});

test("binarySearchRecursiveShell(): Two items - found item #2", () => {
    const array = [1, 2];
    const x = 2;

    const input = binarySearchRecursiveShell(array, x);
    const output = true; // 1 has been found
    expect(input).toBe(output);
});

test("binarySearchRecursive(): Has been found", () => {
    const array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
    const x = 80;
    const left = 70;
    const right = 90;

    const input = binarySearchRecursiveShell(array, x, left, right);
    const output = true; // 80 has been found between 70 and 90
    expect(input).toBe(output);
});

test("binarySearchRecursive(): Has not been found", () => {
    const array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
    const x = 85;
    const left = 70;
    const right = 90;

    const input = binarySearchRecursiveShell(array, x, left, right);
    const output = false; // 85 has not been found between 70 and 90
    expect(input).toBe(output);
});