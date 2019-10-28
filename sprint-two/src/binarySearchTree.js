var BinarySearchTree = function(value) {
  var tree = {};

  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(value) {
    if (!this.value || value === this.value) {
      this.value = value;
    } else if (value < this.value) {
      this.left ?
        this.left.insert(value) :
        this.left = BinarySearchTree(value);
    } else {
      this.right ?
        this.right.insert(value) :
        this.right = BinarySearchTree(value);
    }
  };

  tree.contains = function(target) {

    var searchTree = function(node) {
      if (!node) {
        return false;
      } else if (target === node.value) {
        return true;
      } else if (target < node.value) {
        return searchTree(node.left);
      } else if (target > node.value) {
        return searchTree(node.right);
      }
    };

    return searchTree(tree);

  };

  tree.depthFirstLog = function(cb) {
    if (this === null) {
      return;
    }

    cb(this.value);

    if (this.left) {
      this.left.depthFirstLog(cb);
    }

    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
