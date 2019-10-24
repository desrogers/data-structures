var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};

  return instance;
};

var stackMethods = {
  push: function(value) {
    var len = this.size();
    this.storage[len + 1] = value;
  },
  pop: function() {
    var len = this.size();
    var lastIn = this.storage[len];
    delete this.storage[len];
    return lastIn;
  },
  size: function() {
    var result = 0;
    for (var key in this.storage) {
      result++;
    }
    return result;
  }
};
