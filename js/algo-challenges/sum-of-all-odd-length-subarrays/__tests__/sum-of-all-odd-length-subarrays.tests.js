const {sumOddLengthSubarrays} = require('../index');

describe('Sum of All Odd Length Subarrays', function () {
  it(`[1, 4, 2, 5, 3] => 58`, function () {
    const result = sumOddLengthSubarrays([1, 4, 2, 5, 3]);
    expect(result).toEqual(58);
  });

  it(`[1, 2] => 3`, function () {
    const result = sumOddLengthSubarrays([1, 2]);
    expect(result).toEqual(3);
  });

  it(`[10, 11, 12] => 66`, function () {
    const result = sumOddLengthSubarrays([10, 11, 12]);
    expect(result).toEqual(66);
  });

  it(`[1] => 1`, function () {
    const result = sumOddLengthSubarrays([1]);
    expect(result).toEqual(1);
  });
});
