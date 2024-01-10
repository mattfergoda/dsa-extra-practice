class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor(head=null) {
    this.head = head;
  }

  append(node) {
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }

  toArray() {
    let pointer = this.head;
    const arr = []
  
    while (pointer) {
      arr.push(pointer.value);
      pointer = pointer.next;
    }
    return arr;
  }
}


function sortLinkedLists(a, b) {
  let aPointer = a.head;
  let bPointer = b.head;
  const sorted = new LinkedList();

  if (a.head.value < b.head.value) {
    sorted.head = new Node(a.head.value);
    aPointer = a.head.next;
  } else {
    sorted.head = new Node(b.head.value);
    bPointer = b.head.next;
  }

  while (aPointer && bPointer) {
    if (aPointer.value < bPointer.value) {
      sorted.append(new Node(aPointer.value));
      aPointer = aPointer.next;
    } else {
      sorted.append(new Node(bPointer.value));
      bPointer = bPointer.next;
    }
  }
  aPointer ? sorted.append(aPointer) : sorted.append(bPointer);
  return sorted;
}

module.exports = { 
  Node,
  LinkedList,
  sortLinkedLists
};