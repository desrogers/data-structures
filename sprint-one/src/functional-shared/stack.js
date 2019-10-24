// Functional instantiation with shared methods: same as step 1, but with shared methods
// Create an object that holds the methods that will be shared by all instances of the class
// Use the keyword this in your methods
// Use _.extend  to copy the methods onto the instance

var Stack = function() {
  var resultObj = {};
  resultObj.storage = {}; // Why?
  _.extend(resultObj, stackMethods);
  return resultObj;
}

var stackMethods = {};

stackMethods.push = function(value){
  let objLength = Object.keys(this.storage).length;
  this.storage[objLength] = value;
}

stackMethods.pop = function(){
  let popObjLength = Object.keys(this.storage).length; // need different name from push method for length variable
  let popped = this.storage[popObjLength - 1];
  delete this.storage[popObjLength - 1];
  return popped;
}

stackMethods.size = function(){
  return Object.keys(this.storage).length; // Why?
}

