// npm test -- BST.test
const { BST, Node } = require("./BST.js");

function input_5_to_90_BST() {
    /*
      Using new BST(), creates the following BST using add() method
      */

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85
    let input = new BST();
    input.add(50);
    input.add(10);
    input.add(5);
    input.add(30);
    input.add(20);
    input.add(40);
    input.add(80);
    input.add(70);
    input.add(90);
    input.add(85);
    return input;
}

function input_5_to_90_BST_no_add() {
    /*
      Creates hard-coded BST using ONLY the new BST() constructor
      */

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    let bst = new BST();
    bst.root = { data: 50 };
    bst.root.left = { data: 10 };
    bst.root.right = { data: 80 };
    let l1 = bst.root.left;
    let r1 = bst.root.right;

    l1.left = { data: 5, left: null, right: null };
    l1.right = { data: 30 };
    let l2_n2 = l1.right;
    l2_n2.left = { data: 20, left: null, right: null };
    l2_n2.right = { data: 40, left: null, right: null };

    r1.left = { data: 70, left: null, right: null };
    r1.right = { data: 90, right: null };
    let r2_n2 = r1.right;

    r2_n2.left = { data: 85, left: null, right: null };
    return bst;
}

function output_5_to_90_BST() {
    /*
      Creates hard-coded BST output - no use of BST class
      */

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85
    let output = {};
    output.root = { data: 50 };
    output.root.left = { data: 10 };
    output.root.right = { data: 80 };
    let l1 = output.root.left;
    let r1 = output.root.right;

    l1.left = { data: 5, left: null, right: null };
    l1.right = { data: 30 };
    let l2_n2 = l1.right;
    l2_n2.left = { data: 20, left: null, right: null };
    l2_n2.right = { data: 40, left: null, right: null };

    r1.left = { data: 70, left: null, right: null };
    r1.right = { data: 90, right: null };
    let r2_n2 = r1.right;

    r2_n2.left = { data: 85, left: null, right: null };
    return output;
}

test("Node(): Creates Appropriate Node", () => {
    const input = new Node();
    const output = {
        data: undefined,
        left: null,
        right: null,
    };
    expect(input).toEqual(output);
});

test("BST(): Creates Appropriate BST", () => {
    const input = new BST();
    const output = {
        root: null,
    };
    expect(input).toEqual(output);
});

test("Node() + BST():Can Add Root Node to BST", () => {
    let input = new BST(5);
    let rootData = new Node(50);
    input.root = rootData;

    const output = {
        root: {
            data: 50,
            left: null,
            right: null,
        },
    };
    expect(input).toEqual(output);
});

test("Node() + BST():Can Add Nodes to Left and Right of BST", () => {
    let input = new BST(5);
    let rootData = new Node(50);
    input.root = rootData;
    input.root.left = new Node(10);
    input.root.right = new Node(80);

    //            50
    //          /     \
    //        10       80
    //       /  \     /  \
    //    null null null null

    let output = {};
    output.root = { data: 50 };
    output.root.left = { data: 10, left: null, right: null };
    output.root.right = { data: 80, left: null, right: null };

    expect(input).toEqual(output);
});

test("add(): Can add a root to BST", () => {
    let input = new BST();
    input.add(50);

    //          50
    //        /    \
    //      null  null

    const output = {
        root: {
            data: 50,
            left: null,
            right: null,
        },
    };
    expect(input).toEqual(output);
});

test("add(): Can add 2nd right node to BST", () => {
    let input = new BST();
    input.add(50);
    input.add(80);

    //          50
    //        /    \
    //      null    80
    //             /   \
    //           null  null

    const output = {
        root: {
            data: 50,
            left: null,
            right: {
                data: 80,
                left: null,
                right: null,
            },
        },
    };
    expect(input).toEqual(output);
});

test("add(): Can add 2nd left node to BST", () => {
    let input = new BST();
    input.add(50);
    input.add(10);

    //          50
    //        /    \
    //      10     null
    //     /   \
    //  null  null

    const output = {
        root: {
            data: 50,
            left: {
                data: 10,
                left: null,
                right: null,
            },
            right: null,
        },
    };
    expect(input).toEqual(output);
});

test("add(): Can add many nodes to BST", () => {
    // Order of insertion matters!
    let input = input_5_to_90_BST();

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    let output = output_5_to_90_BST();

    expect(input).toEqual(output);
});

test("findMin(): Can find mininum value of a BST", () => {
    let bst = new BST();
    bst.root = { data: 50 };
    bst.root.left = { data: 10 };
    bst.root.right = { data: 80 };
    let l1 = bst.root.left;
    let r1 = bst.root.right;

    l1.left = { data: 5, left: null, right: null };
    l1.right = { data: 30 };
    let l2_n2 = l1.right;
    l2_n2.left = { data: 20, left: null, right: null };
    l2_n2.right = { data: 40, left: null, right: null };

    r1.left = { data: 70, left: null, right: null };
    r1.right = { data: 90, right: null };
    let r2_n2 = r1.right;

    r2_n2.left = { data: 85, left: null, right: null };

    const input = bst.findMin();

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = 5;
    expect(input).toBe(output);
});

test("findMin(): Can find mininum value of a BST with no nodes", () => {
    let bst = new BST();
    const input = bst.findMin();
    const output = null;
    expect(input).toBe(output);
});

test("findMin() + add(): Can find mininum value of a BST", () => {
    let bst = input_5_to_90_BST();
    const input = bst.findMin();

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = 5;
    expect(input).toBe(output);
});

test("findMax(): Can find max value of a BST", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.findMax();

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = 90;
    expect(input).toBe(output);
});

test("findMax(): Can find maximum value of a BST with no nodes", () => {
    let bst = new BST();
    const input = bst.findMax();
    const output = null;
    expect(input).toBe(output);
});

test("findMax() + add(): Can find maximum value of a BST", () => {
    let bst = input_5_to_90_BST();
    const input = bst.findMax();

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = 90;
    expect(input).toBe(output);
});

test("find(): Can find a value of a BST #1", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.find(10);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = {
        data: 10,
        left: { data: 5, left: null, right: null },
        right: {
            data: 30,
            left: { data: 20, left: null, right: null },
            right: { data: 40, left: null, right: null },
        },
    };
    expect(input).toEqual(output);
});

test("find(): Can find a value of a BST #2", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.find(90);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = {
        data: 90,
        left: { data: 85, left: null, right: null },
        right: null,
    };
    expect(input).toEqual(output);
});

test("find(): Can find a value of a BST #2", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.find(85);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = { data: 85, left: null, right: null };
    expect(input).toEqual(output);
});

test("find(): Can find a value of a BST: Doesn't exist #1 (too high)", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.find(999);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = null;
    expect(input).toEqual(output);
});

test("find(): Can find a value of a BST: Doesn't exist #2 (too low)", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.find(-999);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = null;
    expect(input).toEqual(output);
});

test("find(): Can find a value of a BST: Doesn't exist #3 (not inside 1st half of BST)", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.find(15);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = null;
    expect(input).toEqual(output);
});

test("find(): Can find a value of a BST: Doesn't exist #3 (not inside 2nd half of BST)", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.find(84);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = null;
    expect(input).toEqual(output);
});

test("isPresent(): Can find a value of a BST #1", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.isPresent(10);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = true;
    expect(input).toEqual(output);
});

test("isPresent(): Can find a value of a BST #2", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.isPresent(90);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = true;
    expect(input).toEqual(output);
});

test("isPresent(): Can find a value of a BST #2", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.isPresent(85);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = true;
    expect(input).toEqual(output);
});

test("isPresent(): Can find a value of a BST: Doesn't exist #1 (too high)", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.isPresent(999);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = false;
    expect(input).toEqual(output);
});

test("isPresent(): Can find a value of a BST: Doesn't exist #2 (too low)", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.isPresent(-999);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = false;
    expect(input).toEqual(output);
});

test("isPresent(): Can find a value of a BST: Doesn't exist #3 (not inside 1st half of BST)", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.isPresent(15);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = false;
    expect(input).toEqual(output);
});

test("isPresent(): Can find a value of a BST: Doesn't exist #3 (not inside 2nd half of BST)", () => {
    let bst = input_5_to_90_BST_no_add();

    const input = bst.isPresent(84);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const output = false;
    expect(input).toEqual(output);
});

test("remove(): Remove top node (2 children): small BST", () => {
    // Node removal with 2 children
    // - Go to right subtree
    // - drill left, until null
    // - get that (right, far-left) node's data and set it to null
    // - set the "node to remove" to the data of that (right, far-left) node
    let bst = new BST();
    bst.root = { data: 50 };
    bst.root.left = { data: 10, left: null, right: null };
    bst.root.right = { data: 80, left: null, right: null };

    //                   50
    //                 /    \
    //               10      80

    bst.remove(50);
    const input = bst;

    //                   80
    //                 /   \
    //               10    null

    let output = {};
    output.root = { data: 80, right: null };
    output.root.left = { data: 10, left: null, right: null };
    expect(bst).toEqual(output);
});

test("remove(): Remove top node (has 2 children): large BST", () => {
    let bst = input_5_to_90_BST_no_add();

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    bst.remove(50);

    //                   70
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30   null   90
    //               /  \       /
    //              20  40     85

    const input = bst;

    let output = {};
    output.root = { data: 70 }; // changed - data: 70
    output.root.left = { data: 10 };
    output.root.right = { data: 80, left: null }; // changed: left: null
    let l1 = output.root.left;
    let r1 = output.root.right;

    l1.left = { data: 5, left: null, right: null };
    l1.right = { data: 30 };
    let l2_n2 = l1.right;
    l2_n2.left = { data: 20, left: null, right: null };
    l2_n2.right = { data: 40, left: null, right: null };

    // r1.left = { data: 70, left: null, right: null };
    r1.right = { data: 90, right: null };
    let r2_n2 = r1.right;

    r2_n2.left = { data: 85, left: null, right: null };

    expect(input).toEqual(output);
});

test("remove(): Remove node with only a left child", () => {
    let bst = input_5_to_90_BST_no_add();

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    bst.remove(90);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   85
    //               /  \       /
    //              20  40    null

    const input = bst;

    let output = output_5_to_90_BST();
    let root = output.root;
    root.right.right = { data: 85, left: null, right: null };

    expect(input).toEqual(output);
});

test("remove(): Remove node with only a right child", () => {
    let bst = input_5_to_90_BST_no_add();
    // manipulating the bst so we can deal with a node that has only a right
    // child (node: 80)
    bst.root.right.left = null;

    //                  50
    //               /      \
    //              10       80
    //             /  \        \
    //            5   30        90
    //               /  \      /
    //              20  40    85

    bst.remove(80);

    //                  50
    //               /      \
    //              10       90
    //             /  \     /
    //            5   30   85
    //               /  \
    //              20  40

    const input = bst;

    let output = {};
    output.root = { data: 50 };
    output.root.left = { data: 10 };
    output.root.right = { data: 90, right: null }; // data: 90, right: null, left: EXISTS!
    let l1 = output.root.left;
    let r1 = output.root.right;

    l1.left = { data: 5, left: null, right: null };
    l1.right = { data: 30 };
    let l2_n2 = l1.right;
    l2_n2.left = { data: 20, left: null, right: null };
    l2_n2.right = { data: 40, left: null, right: null };

    r1.left = { data: 85, left: null, right: null }; // r1.left node
    let r2_n2 = r1.right;

    // r2_n2.left = { data: 85, left: null, right: null };

    expect(input).toEqual(output);
});

test("remove(): Remove node with no children", () => {
    let bst = input_5_to_90_BST_no_add();

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    bst.remove(70);

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30   null  90
    //               /  \       /
    //              20  40    85

    const input = bst;

    let output = output_5_to_90_BST();
    let root = output.root;
    root.right.left = null;

    expect(input).toEqual(output);
});

test("isBalanced(): Check if tree is balanced #1", () => {
    let bst = input_5_to_90_BST_no_add();

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const input = bst.isBalanced();

    let output = true;

    expect(input).toEqual(output);
});

test("findMinHeight(): Find BST's min height - no tree", () => {
    let bst = new BST();

    const input = bst.findMinHeight();

    let output = -1;

    expect(input).toBe(output);
});

test("findMinHeight(): Find BST's min height - one root node", () => {
    let bst = new BST();
    bst.root = { data: 50, left: null, right: null };

    //                   50
    //                 /    \
    //               null   null

    const input = bst.findMinHeight();

    let output = 0;

    expect(input).toBe(output);
});

test("findMinHeight(): Find BST's min height - two nodes", () => {
    let bst = new BST();
    bst.root = { data: 50, right: null };
    bst.root.left = { data: 10, left: null, right: null };

    //                   50
    //                 /
    //               10

    const input = bst.findMinHeight();

    let output = 0; // right node not filled

    expect(input).toBe(output);
});

test("findMinHeight(): Find BST's min height - root and 2 child nodes", () => {
    let bst = new BST();
    bst.root = { data: 50 };
    bst.root.left = { data: 10, left: null, right: null };
    bst.root.right = { data: 80, left: null, right: null };

    //                   50
    //                 /    \
    //               10      80

    const input = bst.findMinHeight();

    let output = 1; // root node is filled

    expect(input).toBe(output);
});

test("findMinHeight(): Find BST's min height - skewed tree", () => {
    let bst = new BST();
    bst.root = { data: 50, right: null };
    bst.root.left = { data: 10, right: null };
    bst.root.left.left = { data: 5, left: null, right: null };

    //                   50
    //                 /
    //                10
    //               /
    //              5
    const input = bst.findMinHeight();

    let output = 0; // root node is filled

    expect(input).toBe(output);
});

test("findMinHeight(): Find BST's min height - large tree", () => {
    let bst = input_5_to_90_BST_no_add();

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const input = bst.findMinHeight();

    let output = 2;

    expect(input).toBe(output);
});

test("findMinHeight(): Find BST's min height - large tree #2", () => {
    let bst = input_5_to_90_BST_no_add();
    bst.root.left.left = null;

    //                   50
    //               /        \
    //              10        80
    //                \      /   \
    //                30    70   90
    //               /  \       /
    //              20  40     85

    const input = bst.findMinHeight();

    let output = 1; // "10" needs a left child

    expect(input).toBe(output);
});

test("findMaxHeight(): Find BST's max height - no tree", () => {
    let bst = new BST();

    const input = bst.findMaxHeight();

    let output = -1; // root node is not filled

    expect(input).toBe(output);
});

test("findMaxHeight(): Find BST's max height - one root node", () => {
    let bst = new BST();
    bst.root = { data: 50, left: null, right: null };

    //                   50
    //                 /    \
    //               null   null

    const input = bst.findMaxHeight();

    let output = 0; // root node is filled

    expect(input).toBe(output);
});

test("findMaxHeight(): Find BST's max height - two nodes", () => {
    let bst = new BST();
    bst.root = { data: 50, right: null };
    bst.root.left = { data: 10, left: null, right: null };

    //                   50
    //                 /
    //               10

    const input = bst.findMaxHeight();

    let output = 1; // Despite right node not filled, "10" gives a max height of 1

    expect(input).toBe(output);
});

test("findMaxHeight(): Find BST's max height - root and 2 child nodes", () => {
    let bst = new BST();
    bst.root = { data: 50 };
    bst.root.left = { data: 10, left: null, right: null };
    bst.root.right = { data: 80, left: null, right: null };

    //                   50
    //                 /    \
    //               10      80

    const input = bst.findMaxHeight();

    let output = 1; // Two children will yeild the same MAX height as one child

    expect(input).toBe(output);
});

test("findMaxHeight(): Find BST's max height - skewed tree", () => {
    let bst = new BST();
    bst.root = { data: 50, right: null };
    bst.root.left = { data: 10, right: null };
    bst.root.left.left = { data: 5, left: null, right: null };

    //                   50
    //                 /
    //                10
    //               /
    //              5
    const input = bst.findMaxHeight();

    let output = 2; // max height of this skewed tree is on node 5

    expect(input).toBe(output);
});

test("findMaxHeight(): Find BST's max height - large tree", () => {
    let bst = input_5_to_90_BST_no_add();

    //                   50
    //               /        \
    //              10        80
    //             /  \      /   \
    //            5   30    70   90
    //               /  \       /
    //              20  40     85

    const input = bst.findMaxHeight();

    let output = 3;

    expect(input).toBe(output);
});

test(
    "isBalanced() + findMinHeight() + findMaxHeight(): " +
    "Check if tree is balanced: IS balanced at root",
    () => {
        let bst = input_5_to_90_BST_no_add();

        //                   50
        //               /        \
        //              10        80
        //             /  \      /   \
        //            5   30    70   90
        //               /  \       /
        //              20  40     85

        const input = bst.isBalanced();

        let output = true; // Min height =

        expect(input).toEqual(output);
    }
);

test(
    "isBalanced() + findMinHeight() + findMaxHeight(): " +
    "Check if tree is balanced: not balanced",
    () => {
        let bst = input_5_to_90_BST_no_add();
        bst.root.left.right.left.left = { data: 15, left: null, right: null };

        //                   50
        //               /        \
        //              10        80
        //             /  \      /   \
        //            5   30    70   90
        //               /  \       /
        //              20  40     85
        //             /
        //            15

        const input = bst.isBalanced();

        let output = false; // min height = 1, max height = 3 => there is "skewedness"

        expect(input).toEqual(output);
    }
);

test("isBalanced() + findMinHeight() + findMaxHeight(): " + "No nodes", () => {
    let bst = new BST();

    const input = bst.isBalanced();

    let output = true; // no root node = balanced

    expect(input).toBe(output);
});

test("isBalanced() + findMinHeight() + findMaxHeight(): " + "Root node", () => {
    let bst = new BST();
    bst.root = { data: 50, right: null, left: null };

    //                   50
    //                 /    \
    //               null   null

    const input = bst.isBalanced();

    let output = true; // only root node = balanced

    expect(input).toBe(output);
});

test(
    "isBalanced() + findMinHeight() + findMaxHeight(): " +
    "Root node and one child",
    () => {
        let bst = new BST();
        bst.root = { data: 50, right: null };
        bst.root.left = { data: 10, left: null, right: null };

        //                   50
        //                 /
        //               10

        const input = bst.isBalanced();

        let output = true; // min height = 0, max height = 1 => BST is balanced

        expect(input).toBe(output);
    }
);

test(
    "isBalanced() + findMinHeight() + findMaxHeight(): " + "Skewed tree",
    () => {
        let bst = new BST();
        bst.root = { data: 50, right: null };
        bst.root.left = { data: 10, right: null };
        bst.root.left.left = { data: 5, left: null, right: null };

        //                   50
        //                 /
        //                10
        //               /
        //              5
        const input = bst.isBalanced();

        let output = false; // min height = 0, max height = 2 => BST is NOT balanced

        expect(input).toBe(output);
    }
);
