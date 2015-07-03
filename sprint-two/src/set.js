// NEW SET IMPLEMENTATION USING HASH TABLES

var Set = function() {
	var set = Object.create(setPrototype);
	set._storage = new HashTable();
	return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	if(this._storage.retrieve(item) === null){
		this._storage.insert(item,item);
	}
}

setPrototype.contains = function(item) {
	return !!this._storage.retrieve(item);
};

setPrototype.remove = function(item) {
	this._storage.remove(item);
};

setPrototype.keyHelper = function(item){
	var key;
	if(typeof item === 'object'){
		
	}
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
// 	if (_.indexOf(this._storage,item) === -1) {
// 		this._storage.push(item);
// 	}
// };

// setPrototype.contains = function(item){
// 	for (var i = 0; i < this._storage.length; i++) {
// 		if (this._storage[i] === item) {
// 			return true;
// 		}
// 	}
// 	return false;
// };

// setPrototype.remove = function(item){
// 	this._storage.splice(_.indexOf(this._storage,item),1);
// };

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(n)
 * contains: O(n)
 * remove: O(n)
 */
