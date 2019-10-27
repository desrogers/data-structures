

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // create tuple arr
  var tuple = [k, v];

  // if storage[index] has a bucket
  if (this._storage.get(index)) {
    // if k exists in bucket
    if (this.retrieve(k)) {
    // this._storage get bucket
    // loop through the bucket
      var bucket = this._storage.get(index);

      for (var i = 0; i < bucket.length; i++) {
        var key = bucket[i][0];
        var value = bucket[i][1];

        if (key === k) {
          bucket[i][1] = v; // set the value in tuple in bucket to v
        }
      }
    } else { // if k does not exist in bucket

      this._storage.get(index).push(tuple); // push tuple into bucket
    }

  } else {
    // create bucket arr
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket); // set index in storage to bucket
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // use limitedArray.get to find bucket at the "index"
  var bucket = this._storage.get(index);

  if (bucket) {
  // loop through the bucket
    for (var i = 0; i < bucket.length; i++) {
      var key = bucket[i][0];
      var value = bucket[i][1];

      if (key === k) {
        return value;
      }
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      bucket.splice(i, 1);
      break;
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


