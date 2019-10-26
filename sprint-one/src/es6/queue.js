// ES6 instantiation: declare classes with the keyword class
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Explicitly declare a class method named constructor
// Declare all other class methods within the class declaration
// Example: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeES6.js

class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var firstInQueue;
    for (var key in this.storage) {
      firstInQueue = this.storage[key];
      delete this.storage[key];
      break;
    }
    return firstInQueue;
  }

  size() {
    var result = 0;
    for (var key in this.storage) {
      result++;
    }
    return result;
  }

}
