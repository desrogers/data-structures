var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new Node
    var node = new Node(value);
    // if list is empty
    if (list.head === null) {
      // set new node to list.head
      list.head = node;
      // set new node to list.tail
      list.tail = node;
    } else {
      // create var to keep track current node
      var currentNode = list.head;
      // iterate through the list while current.next is not null
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      // add new node to end of list
      currentNode.next = node;
      // set new node to list.tail
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    // iterate through list with while currentNode.next != null
    var seen = false;
    while (currentNode.next != null) {
      if (currentNode.value === target || currentNode.next.value === target) {
        seen = true;
      }
      currentNode = currentNode.next;
    }
    return seen;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
