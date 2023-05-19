const {subarraySum} = require('../index');

describe('Subarray Sum Equals K', function () {

  it(`([1, 1, 1], 2) => 2`, function () {
    const result = subarraySum([1, 1, 1], 2);
    expect(result).toEqual(2);
  });

  it(`([1, 2, 3], 3) => 2`, function () {
    const result = subarraySum([1, 2, 3], 3);
    expect(result).toEqual(2);
  });

  it(`([1, 2, 1, 2, 1], 3) => 4`, function () {
    const result = subarraySum([1, 2, 1, 2, 1], 3);
    expect(result).toEqual(4);
  });

  it(`([-2, 1, 2, -2, 5, -2, 1], 3) => 5`, function () {
    const result = subarraySum([-2, 1, 2, -2, 5, -2, 1], 3);
    expect(result).toEqual(5);
  });

});
