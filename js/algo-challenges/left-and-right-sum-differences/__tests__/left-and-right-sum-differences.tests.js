const {leftRightDifference} = require('../index');

describe('Left and Right Sum Differences', function () {
  it(`[10, 4, 8, 3] => [15, 1, 11, 22]`, function () {
    const result = leftRightDifference([10, 4, 8, 3]);
    expect(result).toEqual([15, 1, 11, 22]);
  });

  it(`[1] => [0]`, function () {
    const result = leftRightDifference([1]);
    expect(result).toEqual([0]);
  });
});
