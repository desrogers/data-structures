// Functional instantiation with shared methods:
// Create an object that holds the methods that will be shared by all instances of the class
// Use the keyword this in your methods
// Use _.extend  to copy the methods onto the instance

var Queue = function() {
  // create an object to store string values with numbers as keys
  var resultObj = {
    count: 0,
    end: 0,
    start: 0 
  };
  // copy all properties in queueMethods obj over to storage obj
  _.extend(resultObj, queueMethods);
  return resultObj;
};

// create object to store Queque methods
var queueMethods = {};

// enqueue(string) - Add a string to end of queque
queueMethods.enqueue = function(value) {
  this.count ++;
  this.end ++;
  this[this.end] = value;
};

// dequeue(string) - Remove a string from front of queque
queueMethods.dequeue = function() {
  if (this.count > 0){
    this.count --; 
    this.start ++;
    let result = this[this.start];
    delete this[this.start];
    return result;
  }
};

queueMethods.size = function() {
  return this.count;
};

