var Stack = function() {
  var someInstance = {};


  var storage = {};
  var key = 0;

someInstance.push = function(value) {
  storage[key] = value;
  key++;
}

someInstance.pop = function() {
  var lastVal = storage[key - 1];
  if (key > 0) {
    delete storage[key - 1];
    key--;
  }
  return lastVal;
}

someInstance.size = function() {
  return key;
}

return someInstance;
}