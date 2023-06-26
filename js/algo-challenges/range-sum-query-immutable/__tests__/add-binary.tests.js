const {NumArray} = require('../index');

describe('Range Sum Query Immutable', function () {

  const sut = new NumArray([-2, 0, 3, -5, 2, -1]);

  it(`ctor([-2,0,3,-5,2,-1] => new NumArray()`, function () {
    expect(sut).not.toEqual(null);
  });
  it(`sumRange(0,2) => 1`, function () {
    expect(sut.sumRange(0, 2)).toEqual(1);
  });

  it(`sumRange(2,5) => -1`, function () {
    expect(sut.sumRange(2, 5)).toEqual(-1);
  });

  it(`sumRange(0,5) => -3`, function () {
    expect(sut.sumRange(0, 5)).toEqual(-3);
  });

});
