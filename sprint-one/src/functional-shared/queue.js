
var Queue= function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.length = 0;
  newQueue.pointer = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function(){
	return this.length - this.pointer;
};

queueMethods.enqueue = function(value){
	this.storage[this.length] = value;
	this.length++;
};

queueMethods.dequeue = function(){
	if((this.length - this.pointer) != 0){
		return this.storage[this.pointer++];
	}

};


