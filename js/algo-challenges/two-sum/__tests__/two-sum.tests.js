const {twoSum} = require('../index');

describe('Two Sum', function () {

  it(`([2,7,11,15], 9) => [0,1]`, function () {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  });

  it(`([3,2,4], 6) => [1,2]`, function () {
    const result = twoSum([3, 2, 4], 6);
    expect(result).toEqual([1, 2]);
  });

  it(`([3,3], 6) => [0,1]`, function () {
    const result = twoSum([3, 3], 6);
    expect(result).toEqual([0, 1]);
  });

});
