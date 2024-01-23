class CircularArray {
  constructor() {
    this.items = [];
  }

  printArray() {
    for (let item of this.items) {
      console.log(item);
    }
  }

  addItem(item) {
    this.items.push(item);
  }

  getByIndex(idx) {
    return this.items[idx] ? this.items[idx] : null;
  }

  rotate(num) {
    let newItems = [];
    let len = this.items.length;
    for (let i=0; i<len; i++) {
      newItems[i] = this.items[(i + num % len) % len];
    }
    this.items = newItems;
  }
}