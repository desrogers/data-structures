// Functional instantiation: a simple "maker" pattern
// Define all functions and properties within the maker function
// Justification: The purpose of Stack() is...

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below //
  // push(string) - Add a string to the top of the stack
  someInstance.push = function(value) {
    // find length of storage obj
    let storageLength = Object.keys(storage).length;
    // set value as property of obj with current length as key
    storage[storageLength] = value;
  }

  // pop() - Remove and return the string on the top of the stack
  someInstance.pop = function() {
    // find length of storage obj
    let storageLength = Object.keys(storage).length;
    // save last element
    let popped = storage[storageLength-1]
    // then delete it from storage obj
    delete storage[storageLength-1];
    // return saved element
    return popped;
  };

  // size() - Return the number of items in the queue
  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
