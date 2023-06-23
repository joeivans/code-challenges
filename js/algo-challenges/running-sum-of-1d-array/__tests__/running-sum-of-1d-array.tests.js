const {runningSum} = require('../index');

describe('Running Sum of 1d Array', function () {

  it(`[1,2,3,4] => [1,3,6,10]`, function () {
    const result = runningSum([1, 2, 3, 4]);
    expect(result).toEqual([1, 3, 6, 10]);
  });

  it(`[1,1,1,1,1] => [1,2,3,4,5]`, function () {
    const result = runningSum([1, 1, 1, 1, 1]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it(`[3,1,2,10,1] => [3,4,6,16,17]`, function () {
    const result = runningSum([3, 1, 2, 10, 1]);
    expect(result).toEqual([3, 4, 6, 16, 17]);
  });

});
