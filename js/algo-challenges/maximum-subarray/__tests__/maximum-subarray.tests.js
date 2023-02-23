const {maxSubArray} = require('../index');

describe('Maximum Subarray', function () {
  it(`[-2, 1, -3, 4, -1, 2, 1, -5, 4] => 6`, function () {
    const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    expect(result).toEqual(6);
  });

  it(`[1] => 1`, function () {
    const result = maxSubArray([1]);
    expect(result).toEqual(1);
  });

  it(`[5, 4, -1, 7, 8] => 23`, function () {
    const result = maxSubArray([5, 4, -1, 7, 8]);
    expect(result).toEqual(23);
  });
});
