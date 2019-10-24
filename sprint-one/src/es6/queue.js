class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var firstInQueue;
    for (var key in this.storage) {
      firstInQueue = this.storage[key];
      delete this.storage[key];
      break;
    }
    return firstInQueue;
  }

  size() {
    var result = 0;
    for (var key in this.storage) {
      result++;
    }
    return result;
  }

}
