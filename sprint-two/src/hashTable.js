var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // find index i in this._storage
  // if it already exists, append value NODE to list 
  // if not, create new list, append value NODE
  // use this._storage.set to set index i to new linked list 
  if(this._storage.get(i) !== null)

  this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // search list of nodes for node with key, return node value
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // iterate through list at index i to find key 
  // remove from linked list 
  this._storage.set(i,null) ;
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
 */
