

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // loop through this.nodes[node] array
  for (var i = 0; i < this.nodes[node].length; i++) {
    // call this.removeEdge(d, a)
    this.removeEdge(this.nodes[node][i], node);
  }
  delete this.nodes[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.nodes[fromNode], toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var hasEdge = this.hasEdge(fromNode, toNode);
  var remove = function(n1, n2) {
    var index = this.nodes[n1].indexOf(n2);
    this.nodes[n1].splice(index, 1);
  };

  if (hasEdge) {
    remove.call(this, fromNode, toNode);
    remove.call(this, toNode, fromNode);
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


