const {findDiagonalOrder} = require('../index');

describe('Diagonal Traverse', function () {
  it('[[1, 2, 3], [4, 5, 6], [7, 8, 9]] => ' +
    '[1, 2, 4, 7, 5, 3, 6, 8, 9]', function () {
    const result = findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
  });

  it('[[1, 2], [3, 4]] => [1, 2, 3, 4]', function () {
    const result = findDiagonalOrder([[1, 2], [3, 4]]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]] => ' +
    '[1, 2, 5, 9, 6, 3, 4, 7, 10, 13, 14, 11, 8, 12, 15, 16]', function () {
    const result = findDiagonalOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);
    expect(result).toEqual([1, 2, 5, 9, 6, 3, 4, 7, 10, 13, 14, 11, 8, 12, 15, 16]);
  });

  it('[[1, 2, 3, 4], [5, 6, 7, 8]] => [1, 2, 5, 6, 3, 4, 7, 8]', function () {
    const result = findDiagonalOrder([[1, 2, 3, 4], [5, 6, 7, 8]]);
    expect(result).toEqual([1, 2, 5, 6, 3, 4, 7, 8]);
  });

  it('[[1, 2, 3]] => [1, 2, 3]', function () {
    const result = findDiagonalOrder([[1, 2, 3]]);
    expect(result).toEqual([1, 2, 3]);
  });

  it('[[1, 2, 3], [4, 5, 6]] => [1, 2, 4, 5, 3, 6]', function () {
    const result = findDiagonalOrder([[1, 2, 3], [4, 5, 6]]);
    expect(result).toEqual([1, 2, 4, 5, 3, 6]);
  });
});
