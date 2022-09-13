var Stack = function() {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  var newest = Math.max(...Object.keys(this.storage));
  var popped = this.storage[newest];
  delete this.storage[newest];

  return popped;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};