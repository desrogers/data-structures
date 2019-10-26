// Pseudoclassical instantiation: create instances with the keyword new
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Example given: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePseudoClassical.js

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var len = this.size();
  this.storage[len + 1] = value;
};

Stack.prototype.pop = function() {
  var len = this.size();
  var lastIn = this.storage[len];
  delete this.storage[len];
  return lastIn;
};

Stack.prototype.size = function() {
  var result = 0;
  for (var key in this.storage) {
    result++;
  }
  return result;
};
