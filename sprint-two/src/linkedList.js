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
  var newlist = Object.create(LinkedList);

  newlist.addToHead = function(value) {
    debugger;
    var newNode = Node(value);
    newNode.next = newlist.head;
    if(newlist.head !== null)
      newlist.head.previous = newNode;
    if (newlist.tail === null) {
      newlist.tail = newNode;
    }
    newlist.head=newNode;
  };

  newlist.removeTail = function() {
    if (newlist.tail === null){
      return null;
    } else {
      var retNode = newlist.tail;
      newlist.tail = newlist.tail.previous;
      newlist.tail.next = null;
    }
    return retNode.value;
  };

  newlist.addToTail = function(value){
    var aNode = Node(value);
    aNode.previous = newlist.tail;
    if (newlist.tail !== null) {
      newlist.tail.next = aNode;
    } else if(newlist.head === null){
      newlist.head = newlist.tail = aNode;
    }
    newlist.tail = aNode;
  };

  newlist.removeHead = function(value){
    if (newlist.head === null){
        return null;
    } else {
      var retNode = newlist.head;
      newlist.head = newlist.head.next;
      newlist.head.previous = null;
      return retNode.value;
    }
  };

  return newlist;
};

