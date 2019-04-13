var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.key = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
    this.storage[this.key] = value;
    this.key++;
  };

queueMethods.dequeue = function() {
    var arr = Object.keys(this.storage);
    var first = arr[0];
    var placeHolder = this.storage[first];
    delete this.storage[first];
    return placeHolder;
 };

queueMethods.size = function() {
    return Object.keys(this.storage).length; 
};



