const {waysToSplitArray} = require('../index');

describe('Number of Ways to Split Array', function () {
  it(`[10, 4, -8, 7] => 2`, function () {
    const result = waysToSplitArray([10, 4, -8, 7]);
    expect(result).toEqual(2);
  });

  it(`[2, 3, 1, 0] => 2`, function () {
    const result = waysToSplitArray([2, 3, 1, 0]);
    expect(result).toEqual(2);
  });
});
