var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.index = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  var oldest = Math.min(...Object.keys(this.storage));
  var dequeued = this.storage[oldest];

  delete this.storage[oldest];
  return dequeued;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

