class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var len = this.size();
    this.storage[len + 1] = value;
  }

  pop() {
    var len = this.size();
    var lastIn = this.storage[len];
    delete this.storage[len];
    return lastIn;
  }

  size() {
    var result = 0;
    for (var key in this.storage) {
      result++;
    }
    return result;
  }

}