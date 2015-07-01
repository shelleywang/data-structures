var Stack = function() {
  this.length = 0;
  this.storage = {};
  debugger;
};

Stack.prototype.size = function() {
	return this.length;
};

Stack.prototype.push = function(value) {
	this.length++;
	this.storage[this.length]=value;
};

Stack.prototype.pop = function() {
	if (this.length !== 0) {
		this.length--;
		return this.storage[this.length+1];
	}
};
