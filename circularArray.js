class CircularArray {
  constructor() {
    this.items = [];
    this.head = 0;
  }

  printArray() {
    for (let i=this.head; i<this.items.length; i++) {
      console.log(this.items[i]);
    }
    for (let i=0; i<this.head; i++) {
      console.log(this.items[i]);
    }
  }

  addItem(item) {
    if (this.head === 0) this.items.push(item);
    else {
      const arr = this.items.slice(0, this.head);
      arr.push(item);
      this.items = arr.concat(this.items.slice(this.head));
      this.head++;
    }
  }

  getByIndex(idx) {
    if (idx >= 0 && idx < this.items.length) {
      return this.items[(this.head + idx) % this.items.length] 
    } else return null;
  }

  rotate(num) {
    if (num > 0) {
      this.head = (this.head + num) % this.items.length;
    } else if (num < 0) {
      this.head = (this.head + (num % this.items.length) + this.items.length);
    }
  }
}
