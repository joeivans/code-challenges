const {productExceptSelf} = require('../index');

describe('Product of Array Except Self', function () {
  it(`[1, 2, 3, 4] => [24, 12, 8, 6]`, function () {
    const result = productExceptSelf([1, 2, 3, 4]);
    expect(result).toEqual([24, 12, 8, 6]);
  });

  it(`[-1, 1, 0, -3, 3] => [0, 0, 9, 0, 0]`, function () {
    const result = productExceptSelf([-1, 1, 0, -3, 3]);
    expect(result).toEqual([0, 0, 9, 0, 0]);
  });
});
