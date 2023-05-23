const {numberOfSubarrays} = require('../index');

describe('Count Number of Nice Subarrays', function () {

  it(`([1,1,2,1,1], 3) => 2`, function () {
    const result = numberOfSubarrays([1, 1, 2, 1, 1], 3);
    expect(result).toEqual(2);
  });

  it(`([2,4,6], 1) => 0`, function () {
    const result = numberOfSubarrays([2, 4, 6], 1);
    expect(result).toEqual(0);
  });

  it(`([2,2,2,1,2,2,1,2,2,2], 2) => 16`, function () {
    const result = numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2);
    expect(result).toEqual(16);
  });

});
