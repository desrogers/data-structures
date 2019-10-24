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
  push (value) {
    this.storage[Object.keys(this.storage).length] = value;
  }
  pop () {
    if (Object.keys(this.storage).length > 0){
      let popped = this.storage[Object.keys(this.storage).length-1];
      delete this.storage[Object.keys(this.storage).length-1]
      return popped;
    }
  }
  size () {
    return Object.keys(this.storage).length;
  }
}