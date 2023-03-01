const {arrayPairSum} = require('../index');

describe('Array Partition', function () {
  it(`[1, 4, 3, 2] => 4`, function () {
    const result = arrayPairSum([1, 4, 3, 2]);
    expect(result).toEqual(4);
  });

  it(`[6, 2, 6, 5, 1, 2] => 9`, function () {
    const result = arrayPairSum([6, 2, 6, 5, 1, 2]);
    expect(result).toEqual(9);
  });
});
