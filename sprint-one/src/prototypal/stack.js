var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.length = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.size = function(){
		return this.length;
};

stackMethods.push = function(value){
	this.length++;
	this.storage[this.length] = value;
};

stackMethods.pop = function(){

	if(this.length != 0){
		this.length--;
		return this.storage[this.length+1];
	}

};