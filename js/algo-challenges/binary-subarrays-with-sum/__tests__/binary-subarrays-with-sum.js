const {numSubarraysWithSum} = require('../index');

describe('Binary Subarrays With Sum', function () {
  it(`([1, 0, 1, 0, 1], 2) => 4`, function () {
    const result = numSubarraysWithSum([1, 0, 1, 0, 1], 2);
    expect(result).toEqual(4);
  });

  it(`([0, 0, 0, 0, 0], 0) => 15`, function () {
    const result = numSubarraysWithSum([0, 0, 0, 0, 0], 0);
    expect(result).toEqual(15);
  });
});
