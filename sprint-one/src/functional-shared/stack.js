var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.key = 0;
  extend(someInstance, stackMethods);
  return someInstance;
}

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.key] = value;
  this.key++;
}

stackMethods.pop = function() {
  var lastVal = this.storage[this.key - 1];
  if (this.key > 0) {
    delete this.storage[this.key - 1];
    this.key--;
  }
  return lastVal;
}

stackMethods.size = function() {
  return this.key;
}

