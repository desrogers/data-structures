var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 1;

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var result;
    for (var key in storage) {
      result = storage[key];
      delete storage[key];
      break;
    }
    return result;
  };

  someInstance.size = function() {
    var result = 0;
    for (var key in storage) {
      result++;
    }
    return result;
  };

  return someInstance;
};
