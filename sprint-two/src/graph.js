

var Graph = function(){
	this.nodes = [];
	this.edges = [];
};

Graph.prototype.addNode = function(node){
	this.nodes.push(node);
};

Graph.prototype.contains = function(node){
	for (var i = 0; i < this.nodes.length; i++) {
		if (this.nodes[i] === node) {
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	var nodeIndex = this.findIndex(node);
	this.nodes.splice(nodeIndex,1);
	var nodeEdges = this.edges[nodeIndex];
	this.edges.splice(nodeIndex,1);
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	var index = this.findEdge(fromNode,toNode);
	if (index >= 0 ) {
		return true;
	} else {
		return false;
	}
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var fromIndex = this.findIndex(fromNode);
	var toIndex = this.findIndex(toNode);
	this.edges.push([fromIndex,toIndex]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var index = this.findEdge(fromNode,toNode);
	if (index >= 0) {
		this.edges.splice(index,1);
	}
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes,cb);
};

// helper function to find index of node in nodes array
Graph.prototype.findIndex = function( node) {
	return _.indexOf(this.nodes, node);
};

//Helper function to return index of edge from edges array
Graph.prototype.findEdge = function(fromNode, toNode) {
	var fromIndex = this.findIndex(fromNode);
	var toIndex = this.findIndex(toNode);
	for (var i = 0; i< this.edges.length; i++) {
		if (((this.edges[i][0] === fromIndex)  && (this.edges[i][1] === toIndex)) || 
		((this.edges[i][0] === toIndex)  && (this.edges[i][1] === fromIndex))) {
			return i;
		}
	}
	return -1;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(n)
 * hasEdge: O(n)
 * addEdge: O(1)
 * removeEdge: O(n)
 * forEachNode: O(n)
 * findIndex: O(n)
 * findEdge: O(n)
 */



