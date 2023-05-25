const {findWinners} = require('../index');

describe('Find Players With Zero or One Losses', function () {

  it(`[[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]] => [[1,2,10],[4,5,7,8]]`, function () {
    const result = findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]);
    expect(result).toEqual([[1, 2, 10], [4, 5, 7, 8]]);
  });

  it(`[[2,3],[1,3],[5,4],[6,4]] => [[1,2,5,6],[]]`, function () {
    const result = findWinners([[2, 3], [1, 3], [5, 4], [6, 4]]);
    expect(result).toEqual([[1, 2, 5, 6], []]);
  });

});
