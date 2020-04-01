var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    start: 0,
    end: 0,
    count: 0
  }; // stored in object so we could dynamically update start, end, and count...

  // Implement the methods below
  var counter = 1;

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    if (storage.start === 0) {
      storage.start = storage.end = counter;
    }
    counter++;
    storage.count++;
  };

  // dequeue() - Remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    var result = storage[storage.start];
    delete storage[storage.start];
    storage.start++;
    if (storage.count > 0) {    
      storage.count--;
    }
    return result;
  };

  // size() - Return the number of items in the queue
  someInstance.size = function() {
    return storage.count;
  };

  return someInstance;
};
