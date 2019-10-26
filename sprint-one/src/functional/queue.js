var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    start: 0,
    end: 0,
    count: 0
  }; // stored in object so we could dynamically update start, end, and count...

  // Implement the methods below
  var count = 1;

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  // dequeue() - Remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    var result;
    for (var key in storage) {
      result = storage[key];
      delete storage[key];
      break;
    }
    return result;
  };

  // size() - Return the number of items in the queue
  someInstance.size = function() {
    var result = 0;
    for (var key in storage) {
      result++;
    }
    return result;
  };

  return someInstance;
};
