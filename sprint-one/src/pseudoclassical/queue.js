// Pseudoclassical instantiation: create instances with the keyword new
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Example given: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePseudoClassical.js

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var firstInQueue;
  for (var key in this.storage) {
    firstInQueue = this.storage[key];
    delete this.storage[key];
    break;
  }
  return firstInQueue;
};

Queue.prototype.size = function() {
  var result = 0;
  for (var key in this.storage) {
    result++;
  }
  return result;
};

