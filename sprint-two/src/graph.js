

var Graph = function(){
	this.nodes = [];
	this.edges = [];
};

Graph.prototype.addNode = function(node){
	this.nodes.push(node);
	this.edges.push([]);
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
	var fromIndex = this.findIndex(fromNode);
	var toIndex = this.findIndex(toNode);
	//
	for (var i = 0; i< this.edges[fromIndex].length; i++) {
		if (this.edges[fromIndex][i] === toIndex) {
			return true;
		}
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var fromIndex = this.findIndex(fromNode);
	var toIndex = this.findIndex(toNode);
	this.edges[fromIndex].push(toIndex);
	this.edges[toIndex].push(fromIndex);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var fromIndex = this.findIndex(fromNode);
	var toIndex = this.findIndex(toNode);

};

Graph.prototype.forEachNode = function(cb){
};

Graph.prototype.findIndex = function( node) {
	return _.indexOf(this.nodes, node);
};

//Probably don't need
Graph.prototype.findEdge = function(fromNode, toNode) {
	var fromIndex = this.findIndex(fromNode);
	var toIndex = this.findIndex(toNode);
	var fromEdgesIndex = 0;
	for (var i = 0; i< this.edges[fromIndex].length; i++) {
		if (this.edges[fromIndex][i] === toIndex) {
			fromEdgesIndex = i;	
		}
	}
	var toEdgesIndex = 0;
	for (var i = 0; i< this.edges[fromIndex].length; i++) {
		if (this.edges[fromIndex][i] === toIndex) {
			fromEdgesIndex = i;	
		}
	}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



