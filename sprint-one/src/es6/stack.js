// ES6 instantiation: declare classes with the keyword class
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Explicitly declare a class method named constructor
// Declare all other class methods within the class declaration
// Example given: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeES6.js

class Stack {
  constructor() {
    this.storage = {};
  }

  push(value) {
    var len = this.size();
    this.storage[len + 1] = value;
  }

  pop() {
    var len = this.size();
    var lastIn = this.storage[len];
    delete this.storage[len];
    return lastIn;
  }

  size() {
    var result = 0;
    for (var key in this.storage) {
      result++;
    }
    return result;
  }
}