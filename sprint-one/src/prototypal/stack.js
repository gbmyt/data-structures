var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.index = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  var newest = Math.max(...Object.keys(this.storage));
  var popped = this.storage[newest];
  delete this.storage[newest];
  return popped;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

