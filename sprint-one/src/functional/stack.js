var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var len = someInstance.size();
    storage[len + 1] = value;
  };

  someInstance.pop = function() {
    var len = someInstance.size();
    var lastIn = storage[len];
    delete storage[len];
    return lastIn;
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
