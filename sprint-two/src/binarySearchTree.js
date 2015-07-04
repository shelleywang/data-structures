/*
 * Binary Search Tree implementation 
 */

var BinarySearchTree = function(value){
  var bst = {};
  bst.left = null;
  bst.right = null;
  //bst.parent = null;
  bst.value = value;

  bst.insert= function(value) {
    if (value > this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = BinarySearchTree(value);
        //this.right.parent = this;
      }
    } else if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = BinarySearchTree(value);
        //this.left.parent = this;
      }
    }
  };


  bst.contains = function(value) {
    if (this.value === value) {
      return true;
    } else if (value > this.value) {
      if (this.right) {
        return this.right.contains(value);
      }
    } else if (value < this.value) {
      if (this.left) {
        return this.left.contains(value);
      }
    }
    return false;
  };

  bst.depthFirstLog = function(callback) {
    callback(this.value);
    if (this.left) {
      this.left.depthFirstLog(callback);
    } 
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  };

  // .breadthFirstLog() method for binarySearchTree 
  // logs the nodes contained in the tree using a breadth-first approach
  bst.breadthFirstLog = function(callback){
    var applyCallback = function(array){
      var newArray = [];
      for (var i = 0; i < array.length; i++) {
        callback(array[i].value);
        if (array[i].left) {
          newArray.push(array[i].left);
        }
        if (array[i].right) {
          newArray.push(array[i].right);
        }
      }
      if (newArray.length !== 0) {
        applyCallback(newArray);
      }
    };
    applyCallback([this]);
  };

  // TO-DO: when max depth > 2*min depth, rebalance tree
  bst.balance = function() {

  };

  return bst;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * .insert(): O(n)
 * .contains(): O(n)
 * .depthFirstLog(): O(n)
 * .breadthFirstLog() : O(n)
 */
