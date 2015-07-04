describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should contain unique values', function(){
    set.add("Mel Gibson");
    set.add("Mel Gibson");
    set.add("Mel Gibson");
    set.add("Danny Glover");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should be able to add numbers', function(){
    set.add(5);
    set.add(4);
    set.add(7);
    expect(set.contains(5)).to.equal(true);
    expect(set.contains(6)).to.equal(false);
    expect(set.contains(4)).to.equal(true);
    expect(set.contains(7)).to.equal(true);
  });

  it('should be able to add objects', function(){
    var obj1 = {name:'shelley'};
    var obj2 = {name:'patrick'};
    set.add(obj1);
    expect(set.contains(obj1)).to.equal(true);
    expect(set.contains(obj2)).to.equal(false);
    set.add(obj2);
    expect(set.contains(obj2)).to.equal(true);    
    set.remove(obj1);
    expect(set.contains(obj1)).to.equal(false);
  }); 

  it('should not contain duplicate numbers', function(){
    set.add(5);
    set.add(5);
    set.add(5);
    set.add(7);
    set.remove(5);
    expect(set.contains(5)).to.equal(false);
    expect(set.contains(7)).to.equal(true);
  }); 

  it('should not contain duplicate objects', function(){
    var obj1 = {name:'shelley'};
    var obj2 = {name:'patrick'};
    set.add(obj1);
    set.add(obj1);
    set.add(obj1);
    set.add(obj2);
    set.remove(obj1);
    expect(set.contains(obj1)).to.equal(false);
    expect(set.contains(obj2)).to.equal(true);
  }); 

});
