var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.length = 0;
  newQueue.pointer = 0;

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
	if(this.length - this.pointer !== 0){
		return this.storage[this.pointer++];
	}
};