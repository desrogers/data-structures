var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  return this.children.push( Tree(value) );

};

treeMethods.contains = function(target) {

  var seen = false;

  var findTarget = function(node) {
    if (node.value === target) {
      seen = true;
    }

    if (node.children.length !== 0) {
      for (var i = 0; i < node.children.length; i++) {
        findTarget(node.children[i]);
      }
    }

    return;
  };

  findTarget(this);

  return seen;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
