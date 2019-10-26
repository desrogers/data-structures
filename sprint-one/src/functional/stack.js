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
    var len = someInstance.size();
    storage[len + 1] = value;
  };

  // pop() - Remove and return the string on the top of the stack
  someInstance.pop = function() {
    var len = someInstance.size();
    var lastIn = storage[len];
    delete storage[len];
    return lastIn;
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
