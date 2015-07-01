var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length =0;
  var pointer = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function(){
    return storage[pointer++];
  };

  someInstance.size = function(){
    var size = length-pointer;
    if (size > 0) {
      return size;
    } else {
      return 0;
    }
  };

  return someInstance;
};
