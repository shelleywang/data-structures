/* 
 * Tree implementation
 *
 */

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
  if (this === undefined) {
    childTree.parent = null;
  } else {
    childTree.parent=this;
  }
  this.children.push(childTree);
};

treeMethods.contains = function(target){
  var contained = false;
  if(this.value === target){
    return true;
  } else {
    _.each(this.children, function(item){
      if (!contained) {
        contained = item.contains(target);
      }
    });
  }
  return contained;
};

treeMethods.removeFromParent = function() {
  if (this.parent !== null) {
    var oldParent = this.parent;
    this.parent = null;
    var childNode;
    _.each(oldParent.children, function(item, key){
      if(item.parent === null) {
        childNode = key;
      }
    });

    oldParent.children.splice(childNode,1);
  }
};

treeMethods.traverse = function(callback){
  if (this.value !== undefined) {
    callback(this.value);
  }
  _.each(this.children, function(child){
    child.traverse(callback);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 * removeFromParent: O(n)
 * .traverse: O(n)
 */