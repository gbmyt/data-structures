class Queue {
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  enqueue(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  dequeue() {
    var oldest = Math.min(...Object.keys(this.storage));
    var dequeued = this.storage[oldest];
    delete this.storage[oldest];
    return dequeued;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
