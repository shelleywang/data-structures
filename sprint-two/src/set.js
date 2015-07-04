/* 
 * Implementation of the set data type using a hash table
 */

var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = new HashTable();
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(this._storage.retrieve(this.keyHelper(item)) === null){
    this._storage.insert(this.keyHelper(item),item);
  }
}

setPrototype.contains = function(item) {
  return !!this._storage.retrieve(this.keyHelper(item));
};

setPrototype.remove = function(item) {
  this._storage.remove(this.keyHelper(item));
};

setPrototype.keyHelper = function(item){
  var key;
  if(typeof item === 'object'){
    key = JSON.stringify(item);
  } else if (typeof item === 'number') {
    key = item.toString();
  } else if (typeof item === 'string') {
    key = item;
  }
  return key;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(1)
 * contains: O(1)
 * remove: O(1)
 */

// -----------------------------------------------------
//  -------------- OLD SET IMPLEMENTATION --------------
// -----------------------------------------------------
// var Set = function(){
//   var set = Object.create(setPrototype);
//   set._storage = [];
//   return set;
// };

// var setPrototype = {};

// setPrototype.add = function(item){
//  if (_.indexOf(this._storage,item) === -1) {
//    this._storage.push(item);
//  }
// };

// setPrototype.contains = function(item){
//  for (var i = 0; i < this._storage.length; i++) {
//    if (this._storage[i] === item) {
//      return true;
//    }
//  }
//  return false;
// };

// setPrototype.remove = function(item){
//  this._storage.splice(_.indexOf(this._storage,item),1);
// };

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(n)
 * contains: O(n)
 * remove: O(n)
 */
