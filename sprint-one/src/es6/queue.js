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
  }

  enqueue(value) {
    this.storage[Object.keys(this.storage).length] = value; 
  }

  dequeue() {
    let temp = this.storage[0];
    delete this.storage[0];
    var count = 0;
    for (var key in this.storage) {
      this.storage[count] = this.storage[key]; // to reset count keys to start back at 0
      count ++;
    }
    delete this.storage[Object.keys(this.storage).length-1];
    return temp;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
