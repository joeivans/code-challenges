const {numSubarrayProductLessThanK} = require('../index');

describe('Subarray Product Less Than K', function () {

  it(`([10,5,2,6], 100) => 8`, function () {
    const result = numSubarrayProductLessThanK([10, 5, 2, 6], 100);
    expect(result).toEqual(8);
  });

  it(`([1,2,3], 0) => 0`, function () {
    const result = numSubarrayProductLessThanK([1, 2, 3], 0);
    expect(result).toEqual(0);
  });

});
