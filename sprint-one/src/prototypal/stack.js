// Prototypal instantiation: using Object.create
// Use Object.create  with the object from step 2 to create instances of your class

var Stack = function() {
  var resultObj = Object.create(stackMethods);
  resultObj.storage = {};
  return resultObj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[Object.keys(this.storage).length] = value;
}

stackMethods.pop = function(){
  var result = this.storage[Object.keys(this.storage).length-1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return result;
}

stackMethods.size = function(){
  return Object.keys(this.storage).length;
}



