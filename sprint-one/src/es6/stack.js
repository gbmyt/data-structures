class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  pop() {
    var newest = Math.max(...Object.keys(this.storage));
    var popped = this.storage[newest];
    delete this.storage[newest];
    return popped;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}