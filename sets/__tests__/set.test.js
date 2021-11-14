'use strict';

const Set = require('../Set');

describe('Set', function () {
  it('should start empty', function () {
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
});
