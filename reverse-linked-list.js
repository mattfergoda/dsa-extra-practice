class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.length = 0;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  append(node) {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.length++;
  }

  reverse() {
    let current = this.head;
    let previous = null;

    while (current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  reverseRecursive() {
    function _reverse(current, previous) {
      if (current === null) return previous;

      const next = current.next;
      current.next = previous;

      return _reverse(next, current);
    }
    this.head = _reverse(this.head, null);
  }
}

let ll = new LinkedList(new Node(1));
ll.append(new Node(2));
ll.append(new Node(3));
ll.print();
ll.reverseRecursive();
ll.print();