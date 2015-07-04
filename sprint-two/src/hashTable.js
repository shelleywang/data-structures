/* 
 * Implementation of a hashTable data type 
 * (includes a limited linked list implementation)
 */

var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numNodes = 0;
  this._currentlyHashing = false;
};

HashTable.prototype.insert = function(k, v){
  this._numNodes++;

  var i = getIndexBelowMaxForKey(k, this._limit);
  var node = hashNode(k, v); // hashNode is a new implementation of a linked list node
  var tempNode = this._storage.get(i);
  if (tempNode !== undefined) { // if i index is not undefined in storage 
    while(tempNode.next !== null){ // iterates through existing list, adding new node at tail
      tempNode = tempNode.next;
    }
    tempNode.next = node;
  } else { // otherwise, set i index of storage to new linked list node
    this._storage.set(i, node);
  }

  if (!this._currentlyHashing) { // if currently hashing, no need to rehash
    this.rehash(); // otherwise, check if number of elements is > 75% of the limit
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
    var tempNode = this._storage.get(i);
    if(tempNode !== undefined){ // if there is a list at index i of storage
      while(tempNode){ // iterates through list, searching for key k
        if (tempNode.key === k) {
          return tempNode.value;
        }
        tempNode = tempNode.next;
      }
  }
    return null; // returns null if key not found in list
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tempNode = this._storage.get(i);

  if (tempNode.key === k ) { // special case: if node with key k is the head of the list
    if (tempNode.next) { // sets head of list to the next node if it exists
      this._storage.set(i, tempNode.next);
    } else { // otherwise, sets index i of storage to undefined
      this._storage.set(i, undefined);
    }
    this._numNodes--;
  } else {
    while (tempNode) { // iterates through the list to find the node with key k to remove
      if (tempNode.next) {
        if (tempNode.next.key === k) {
          if (tempNode.next.next) {
            tempNode.next = tempNode.next.next;
          } else {
            tempNode.next = null;
          }
          this._numNodes--;
        }
    }
    tempNode = tempNode.next;
    }
  }

  if (!this._currentlyHashing) { // if currently hashing, no need to rehash
    this.rehash(); // otherwise, check if number of elements is < 25% of the limit
  }
};

HashTable.prototype.rehash = function(){
  var newSize = 0;
  if(this._numNodes > (this._limit * 0.75)){
    newSize = this._limit * 2;
  } else if (this._numNodes < (this._limit * 0.25)) {
    newSize = this._limit / 2;
  }

  if (newSize > 0) {
    var tempStorage = this._storage;
    this._storage = LimitedArray(newSize);
    this._limit = newSize;
    var tempArray = [];

    tempStorage.each(function(item, key, collection) {
      if(item !== undefined){
        var tempNode = item;
        while (tempNode) {
          tempArray.push([tempNode.key, tempNode.value]);
          tempNode = tempNode.next;
        }
      }
    });

    this._numNodes = 0;
    this._currentlyHashing = true;
    for(var i = 0; i < tempArray.length; i++){
      this.insert(tempArray[i][0], tempArray[i][1]);
    }
    this._currentlyHashing = false;
  }
};

var hashNode = function(key, value){
  var node = {};

  node.key = key;
  node.value = value;
  node.next = null;

  return node;
}


/*
 * Complexity: What is the time complexity of the above functions?
 * .insert: O(1)
 * .retrieve: O(1)
 * .remove: O(1)
 * .rehash: O(n)
 */
