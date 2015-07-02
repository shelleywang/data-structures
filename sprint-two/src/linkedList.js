var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var aNode = Node(value);
    if (list.tail !== null) {
      list.tail.next = aNode;
    }
    else if(list.head === null){
      list.head = list.tail = aNode;
    }
    list.tail = aNode;
  };

  list.removeHead = function(){
    if(list.head === null){
      return null;
    }else{
      var retNode = list.head;
      list.head = list.head.next;
      return retNode.value;
    }
  };

  list.contains = function(target){
    var aNode = list.head;
    while(aNode !== null){
      if(aNode.value === target)
        return true;
      aNode = aNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
  
/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 */

// EXTRA CREDIT: doubly linked list 

var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var newNode = Node(value);
    newNode.next = list.head;
    if(list.head !== null)
      list.head.previous = newNode;
    if (list.tail === null) {
      list.tail = newNode;
    }
    list.head=newNode;
  };

  list.removeTail = function() {
    if (list.tail === null){
      return null;
    } else {
      var retNode = list.tail;
      list.tail = list.tail.previous;
      list.tail.next = null;
    }
    return retNode.value;
  };

  list.addToTail = function(value){
    var aNode = Node(value);
    aNode.previous = list.tail;
    if (list.tail !== null) {
      list.tail.next = aNode;
    } else if(list.head === null){
      list.head = list.tail = aNode;
    }
    list.tail = aNode;
  };

  list.removeHead = function(value){
    if (list.head === null){
        return null;
    } else {
      var retNode = list.head;
      list.head = list.head.next;
      list.head.previous = null;
      return retNode.value;
    }
  };

  return list;
};

/*
 * Doubly linked list Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 * addToHead: O(1)
 * removeTail: O(1)
 */ 