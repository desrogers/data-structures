var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not to reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};

  extend(obj, stackMethods);

  return obj;
};

var extend = function(obj, extender) {
  for (var key in extender) {
    obj[key] = extender[key];
  }
};

var stackMethods = {
  pop: function() {
    var len = this.size();
    var lastIn = this.storage[len];
    delete this.storage[len];
    return lastIn;
  },

  push: function(val) {
    var len = this.size();
    this.storage[len + 1] = val;
  },

  size: function() {
    var len = 0;
    for (var key in this.storage) {
      len++;
    }
    return len;
  }
};


