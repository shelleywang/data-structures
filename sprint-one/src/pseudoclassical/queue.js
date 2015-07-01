var Queue = function() {
  this.length = 0;
  this.storage = {};
  this.pointer = 0;
};

Queue.prototype.size = function() {
	return this.length - this.pointer;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.length] = value;
	this.length ++;
};	

Queue.prototype.dequeue = function() {
	if (this.length - this.pointer !== 0) {
		return this.storage[this.pointer++];
	}
};

