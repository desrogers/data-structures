var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    start: 0,
    end: 0,
    count: 0
  }; // stored in object so we could dynamically update start, end, and count...

  // Implement the methods below
  // enqueue(string) - Add a string to the back of the queue
  someInstance.enqueue = function(value) {
    storage.end ++;
    storage.count ++;
    storage[storage.end] = value; // why does the order in which we increment end & count property 
    // or assign the current end property to value matter?... also how to read this last line in english?
  };

  // dequeue() - Remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    if (storage.count > 0){ // this is 
      let val = storage[storage.start];
      storage.count --; // how does this line remove value at front of queue? why is delete func not needed? 
      storage.start ++; 
    } 
    return val; 
  };

  // size() - Return the number of items in the queue
  someInstance.size = function() {
    return storage.count; // return the count property i.e. the # of numeric keys in storage obj 
  };

  return someInstance;
};
