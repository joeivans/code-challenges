const MySet = require('../MySet');


describe('MySet', function () {
  it('should start empty', function () {
    const set = new MySet();

    expect(set.size).toEqual(0);
  });

  it('should only add elements which are not already in the set', function () {
    const set = new MySet();

    // add element not in set
    set.add('hello');
    expect(set.size).toEqual(1);

    // re-add element to set
    set.add('hello');
    expect(set.size).toEqual(1);

    // add another element not in set
    set.add('world');
    expect(set.size).toEqual(2);
  });

  it('should only remove elements which are in the set', function () {
    const set = new MySet();

    // adds one element
    set.add('hello');
    expect(set.size).toEqual(1);

    // removes non-existent element
    set.remove('world');
    expect(set.size).toEqual(1);

    // removes existent element
    set.remove('hello');
    expect(set.size).toEqual(0);
  });

  it('should nop on remove from empty set', function () {
    const set = new MySet();

    // removes from empty set
    set.remove('world');
    expect(set.size).toEqual(0);
  });

  it('should return true if set contains value', function () {
    const set = new MySet();

    // not in set
    expect(set.contains('hello')).toEqual(false);

    // in set
    set.add('hello');
    expect(set.contains('hello')).toEqual(true);
  });

  it('should return union of sets A and B', function () {
    // set A
    const setA = new MySet();
    setA.add('hello');
    setA.add('world');

    // set B
    const setB = new MySet();
    setB.add('hello');
    setB.add('friends');

    // union
    setA.union(setB);

    // result
    expect(setA.size).toEqual(3);
    expect(setA.values()).toContain('hello');
    expect(setA.values()).toContain('world');
    expect(setA.values()).toContain('friends');
    expect(setA.toString()).toBe('["world","friends","hello"]');
  });

  it('should toString override as csv array', function () {
    const set = new MySet();
    expect(set.toString()).toEqual('[]');

    set.add('hello');
    set.add('world');
    set.add(1234);
    expect(`${set}`).toEqual('["world",1234,"hello"]');
    expect(set.toString()).toEqual('["world",1234,"hello"]');
    expect(JSON.stringify(set)).toEqual('{"size":3}');
  });

  it('should resize after initial default backing array length', function () {
    const set = new MySet();
    set.add('a');
    set.add('b');
    set.add('c');
    set.add('d');
    set.add('e');
    set.add('f');
    set.add('g');
    set.add('h');

    // should resize on next add, which should change toString value due to required rehash
    expect(set.toString()).toEqual('["h","a","b","c","d","e","f","g"]');
    set.add('i');
    expect(set.toString()).toEqual('["a","b","c","d","e","f","g","h","i"]');
  });
});
