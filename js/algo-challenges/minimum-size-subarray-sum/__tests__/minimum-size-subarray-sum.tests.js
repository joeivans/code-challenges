const {minSubArrayLen} = require('../index');

describe('Minimum Size Subarray Sum', function () {

  it(`(7, [2,3,1,2,4,3]) => 2`, function () {
    const result = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
    expect(result).toEqual(2);
  });

  it(`(4, [1,4,4]) => 1`, function () {
    const result = minSubArrayLen(4, [1, 4, 4]);
    expect(result).toEqual(1);
  });

  it(`(11, [1,1,1,1,1,1,1,1]) => 0`, function () {
    const result = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
    expect(result).toEqual(0);
  });

});
