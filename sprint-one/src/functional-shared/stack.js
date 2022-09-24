var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.index = 0;

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  console.log('Index', this.index);
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
  console.log(this.storage);
  // console.log(Object.keys(this.storage).length);
  return Object.keys(this.storage).length;
};


