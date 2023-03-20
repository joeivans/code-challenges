const {sortedSquares} = require('../index');

describe('Squares of a Sorted Array', function () {
  it(`[-4, -1, 0, 3, 10] => [0, 1, 9, 16, 100]`, function () {
    const result = sortedSquares([-4, -1, 0, 3, 10]);
    expect(result).toEqual([0, 1, 9, 16, 100]);
  });

  it(`[-7, -3, 2, 3, 11] => [4, 9, 9, 49, 121]`, function () {
    const result = sortedSquares([-7, -3, 2, 3, 11]);
    expect(result).toEqual([4, 9, 9, 49, 121]);
  });
});
