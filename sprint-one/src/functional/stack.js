var Stack = function() {
  var someInstance = {};
  var storage = {};
  var index = 0;

  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    var newest = Math.max(...Object.keys(storage));
    var popped = storage[newest];
    delete storage[newest];

    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
