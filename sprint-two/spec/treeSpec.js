describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");  
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly identify parents', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
    expect(tree.children[1].children[0].parent.value).to.equal(6);
  });

  it('should return null as a parent when there is parent node', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    expect(tree.parent).to.equal(null);
  });

  it('should be able to remove parent node from a child', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[0].removeFromParent();
    expect(tree.children[0].value).to.equal(6);
    tree.children[0].removeFromParent();
    expect(tree.children.toString()).to.equal([].toString());
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    tree.addChild(3);
    tree.addChild(7);
    tree.children[0].addChild(8);
    tree.children[1].addChild(9);
    tree.children[1].addChild(3);
    tree.children[0].addChild(5);
    tree.children[0].children[0].addChild(1);
    tree.children[1].children[1].addChild(5);
    tree.children[0].children[1].addChild(2);
    tree.children[1].children[0].addChild(7);
    tree.traverse(func);
    console.log(array);
    expect(array).to.eql([3, 8, 1, 5, 2, 7, 9, 7, 3, 5]);
  });

});
