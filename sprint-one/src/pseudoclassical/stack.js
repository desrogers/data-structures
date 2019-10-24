// Pseudoclassical instantiation: create instances with the keyword new
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Example given: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePseudoClassical.js

var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value){
  this.storage[Object.keys(this.storage).length] = value;
};

Stack.prototype.pop = function(){
  var popped = this.storage[Object.keys(this.storage).length-1];
  delete this.storage[Object.keys(this.storage).length-1];
  return popped; 
};

Stack.prototype.size = function(){
  return Object.keys(this.storage).length;
};


