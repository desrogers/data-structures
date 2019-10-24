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

