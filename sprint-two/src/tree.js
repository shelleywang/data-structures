var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  
  newTree.parent = null;

  _.extend(newTree,treeMethods);
  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
	var childTree = Tree(value);
	if(this === undefined)
		childTree.parent = null;
	else
		childTree.parent=this;
	this.children.push(childTree);
};

treeMethods.contains = function(target){
	var bool = false;
	if(this.value === target){
		return true;
	}else{
		_.each(this.children, function(item){

			if (!bool) {
				bool = item.contains(target);
				return bool;
			}
		});
	}
	return bool;
};

treeMethods.removeFromParent = function() {
	if (this.parent !== null) {
		var oldParent = this.parent;
		this.parent = null;
		var currentNodeInChildren;
		_.each(oldParent.children, function(item, key){
			if(item.parent === null) {
				currentNodeInChildren = key;
			}
		});
		for (var i = currentNodeInChildren; i < oldParent.children.length; i++) {
			oldParent.children[i] = oldParent.children[i+1];
		}
		oldParent.children.pop();
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 * removeFromParent: O(n)
 */

