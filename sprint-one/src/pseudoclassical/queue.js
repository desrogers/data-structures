// Pseudoclassical instantiation: create instances with the keyword new
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Example given: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePseudoClassical.js

var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.end] = value;
  this.end ++;
  this.count ++; 
};

Queue.prototype.dequeue = function(){
  if (this.count > 0){
    var temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start ++;
    this.count --; 
    return temp;
  }
};

Queue.prototype.size = function(){
  return this.count;
};

