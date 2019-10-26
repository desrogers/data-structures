var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.count = 0;

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    var firstInQueue;
    for (var key in this.storage) {
      firstInQueue = this.storage[key];
      delete this.storage[key];
      break;
    }
    return firstInQueue;
  },
  size: function() {
    var result = 0;
    for (var key in this.storage) {
      result++;
    }
    return result;
  }
};
