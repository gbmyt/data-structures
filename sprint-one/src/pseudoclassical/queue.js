var Queue = function() {
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  var oldest = Math.min(...Object.keys(this.storage));
  var popped = this.storage[oldest];

  delete this.storage[oldest];
  return popped;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
