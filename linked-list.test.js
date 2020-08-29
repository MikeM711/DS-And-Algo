// npm test -- linked-list.test
const LinkedList = require("./linked-list");

test("Creates Appropriate LinkedList", () => {
   const input = new LinkedList();
   const output = {
      head: null,
   };
   expect(input).toEqual(output);
});

test("Appends nodes to LinkedList", () => {
   let input = new LinkedList();
   input.append(4);
   input.append(5);
   const output = {
      head: {
         data: 4,
         next: {
            data: 5,
            next: null,
         },
      },
   };
   expect(input).toEqual(output);
});

test("Prepends nodes to LinkedList", () => {
   let input = new LinkedList();
   input.append(3);
   input.append(4);
   input.prepend(5);
   const output = {
      head: {
         data: 5,
         next: {
            data: 3,
            next: {
               data: 4,
               next: null,
            },
         },
      },
   };
   expect(input).toEqual(output);
});

test("Removes first node", () => {
   let input = new LinkedList();
   input.append(1);
   input.append(2);
   input.append(3);
   input.append(4);

   input.remove(1);
   const output = {
      head: {
         data: 2,
         next: {
            data: 3,
            next: {
               data: 4,
               next: null,
            },
         },
      },
   };
   expect(input).toEqual(output);
});

test("Removes 2nd node", () => {
   let input = new LinkedList();
   input.append(1);
   input.append(2);
   input.append(3);
   input.append(4);

   input.remove(2);
   const output = {
      head: {
         data: 1,
         next: {
            data: 3,
            next: {
               data: 4,
               next: null,
            },
         },
      },
   };
   expect(input).toEqual(output);
});

test("Removes 3rd node", () => {
   let input = new LinkedList();
   input.append(1);
   input.append(2);
   input.append(3);
   input.append(4);

   input.remove(3);
   const output = {
      head: {
         data: 1,
         next: {
            data: 2,
            next: {
               data: 4,
               next: null,
            },
         },
      },
   };
   expect(input).toEqual(output);
});

test("Removes last node", () => {
   let input = new LinkedList();
   input.append(1);
   input.append(2);
   input.append(3);
   input.append(4);

   input.remove(4);
   const output = {
      head: {
         data: 1,
         next: {
            data: 2,
            next: {
               data: 3,
               next: null,
            },
         },
      },
   };
   expect(input).toEqual(output);
});

test("Cannot remove a node that doesn't exist", () => {
   let input = new LinkedList();
   input.append(1);
   input.append(2);
   input.append(3);
   input.append(4);

   input.remove(9999);
   const output = {
      head: {
         data: 1,
         next: {
            data: 2,
            next: {
               data: 3,
               next: {
                  data: 4,
                  next: null,
               },
            },
         },
      },
   };
   expect(input).toEqual(output);
});

test("Complicated Linked List", () => {
   let input = new LinkedList();
   input.append(1);
   input.prepend(2);
   input.append(3);
   input.prepend(4);
   input.remove(2);
   input.append(0);
   input.remove(0);
   input.prepend(5);
   input.append(6);
   input.prepend(7);
   input.append(8);

   const output = {
      head: {
         data: 7,
         next: {
            data: 5,
            next: {
               data: 4,
               next: {
                  data: 1,
                  next: {
                     data: 3,
                     next: {
                        data: 6,
                        next: {
                           data: 8,
                           next: null,
                        },
                     },
                  },
               },
            },
         },
      },
   };
   expect(input).toEqual(output);
});
