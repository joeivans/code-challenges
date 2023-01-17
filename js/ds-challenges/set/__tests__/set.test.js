'use strict';

const Set = require('../Set');

describe('Set', function () {
  it('should start empty', function () {
    const set = new Set();

    expect(set.size).toEqual(0);
  });

  it('should only add elements which are not already in the set', function () {
    const set = new Set();

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
    const set = new Set();

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
    const set = new Set();

    // removes from empty set
    set.remove('world');
    expect(set.size).toEqual(0);
  });

  it('should return true if set contains value', function () {
    const set = new Set();

    // not in set
    expect(set.contains('hello')).toEqual(false);

    // in set
    set.add('hello');
    expect(set.contains('hello')).toEqual(true);
  });

  it('should return union of sets A and B', function () {
    // set A
    const setA = new Set();
    setA.add('hello');
    setA.add('world');

    // set B
    const setB = new Set();
    setB.add('hello');
    setB.add('friends');

    // union
    setA.union(setB);

    // result
    expect(setA.size).toEqual(3);
    expect(setA.values).toContain('hello');
    expect(setA.values).toContain('world');
    expect(setA.values).toContain('friends');
    expect(JSON.stringify(setA.values)).toBe('["hello","world","friends"]');
  });

  it('should toString overrides as JSON.stringify(this.set)', function () {
    const set = new Set();
    set.add('hello');
    set.add('world');
    expect(`${set}`).toEqual('["hello","world"]');
  });
});
