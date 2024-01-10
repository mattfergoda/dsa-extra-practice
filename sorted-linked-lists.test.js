const { Node, LinkedList, sortLinkedLists } = require("./sort-linked-lists");

describe("sorts", function() {
  it("sorts two sorted linked lists", function() {
    const a = new LinkedList(new Node(4));
    a.append(new Node(6));
    a.append(new Node(7));

    const b = new LinkedList(new Node(2));
    b.append(new Node(3));
    b.append(new Node(10));
    b.append(new Node(11));

    const sorted = sortLinkedLists(a, b);

    expect(sorted.toArray()).toEqual([2, 3, 4, 6, 7, 10, 11])
  });
})

