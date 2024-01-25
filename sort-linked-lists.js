class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor(head=null) {
    this.head = head;
    this.size = head ? 1 : 0;
  }

  append(node) {
    if (this.size === 0) {
      this.head = node;
      this.size++;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }

  prepend(node) {
    const temp = this.head;
    this.head = node;
    this.head.next = temp;
    this.size++;
  }

  shift() {
    this.head = this.head.next;
    this.size--;
  }

  remove(val) {
    let pointer = this.head;
    let prev;
    while(pointer) { 
      if (pointer.value === val) {
        if (prev) {
          prev.next = pointer.next;
          this.size--;
          return;
        } else {
          this.shift()
        }
      }
      prev = pointer;
      pointer = pointer.next;
    }
  }

  pivot(val) {
    let pointer = this.head;
    for (let i=0; i<this.size; i++) {
      if (pointer.value >= val) {
        this.remove(pointer.value);
        this.append(new Node(pointer.value));
      }
      pointer = pointer.next;
    }
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
    sorted.size++;
    aPointer = a.head.next;
  } else {
    sorted.head = new Node(b.head.value);
    sorted.size++;
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