var Queue = function() {
  var someInstance = {};
  var storage = {};
  var index = 0;

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    var oldest = Math.min(...Object.keys(storage));
    var dequeued = storage[oldest];

    delete storage[oldest];
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
