const {spiralOrder} = require('../index');

describe('Spiral Matrix', function () {
  it('[[1, 2, 3], [4, 5, 6], [7, 8, 9]] => ' +
    '[1, 2, 3, 6, 9, 8, 7, 4, 5]', function () {
    const result = spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]] => ' +
    '[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]', function () {
    const result = spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);
    expect(result).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });

  it('[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]] => ' +
    '[1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9]', function () {
    const result = spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]]);
    expect(result).toEqual([1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9]);
  });
});
