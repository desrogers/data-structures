var Queue = function() {
  var resultObj = Object.create(queueMethods);
  resultObj.storage = {};
  resultObj.count = 0;
  resultObj.start = 0;
  resultObj.end = 0;
  return resultObj;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.end] = value;
  this.end ++;
  this.count ++;
}

queueMethods.dequeue = function(){
  if (this.count > 0){
    var result = this.storage[this.start];
    delete this.storage[this.start];
    this.start ++; // why?
    this.count --;
    return result; 
  }
}

queueMethods.size = function(){
  return this.count;
}
