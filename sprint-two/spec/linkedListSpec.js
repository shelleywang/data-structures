describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property("head");
    expect(linkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a("function");
    expect(linkedList.removeHead).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList

  it('should return null if removing more items than added', function(){
    linkedList.addToTail(4);
    linkedList.removeHead();
    expect(linkedList.removeHead()).to.equal(null);
  });

  it('should be able to handle datatypes other than numbers', function() {
    linkedList.addToTail('Test');
    var obj1 = {test:'HR'};
    linkedList.addToTail(obj1);
    linkedList.addToTail(true);
    var array1 = [1,2,3];
    linkedList.addToTail(array1);
    expect(linkedList.contains('Test')).to.equal(true);
    expect(linkedList.contains(obj1)).to.equal(true);
    expect(linkedList.contains(true)).to.equal(true);
    expect(linkedList.contains(array1)).to.equal(true);
  });

  /*
   *  Testing Doubly Linked LIst
   */
  var dList = doublyLinkedList();
  it('doubly-linked-list should be able to add to head', function(){

    dList.addToHead(4);
    expect(dList.head.value).to.equal(4);
    dList.addToHead(5);
    expect(dList.head.value).to.equal(5);
  });

  it('doubly-linked-list should be able to remove from tail and return', function(){
    dList.addToHead(4);
    dList.addToHead(5);
    dList.addToTail(6);
    expect(dList.removeTail()).to.equal(6);
    expect(dList.removeTail()).to.equal(4);
    expect(dList.removeTail()).to.equal(5);
  });


});
