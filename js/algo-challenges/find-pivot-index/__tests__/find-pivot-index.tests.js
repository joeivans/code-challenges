const {pivotIndex} = require('../index');

describe('Find Pivot Index', function () {

  it(`[1,7,3,6,5,6] => 3`, function () {
    const result = pivotIndex([1, 7, 3, 6, 5, 6]);
    expect(result).toEqual(3);
  });

  it(`[1,2,3] => -1`, function () {
    const result = pivotIndex([1, 2, 3]);
    expect(result).toEqual(-1);
  });

  it(`[2,1,-1] => 0`, function () {
    const result = pivotIndex([2, 1, -1]);
    expect(result).toEqual(0);
  });

  it(`[1] => 0`, function () {
    const result = pivotIndex([1]);
    expect(result).toEqual(0);
  });
});
