const {arithmeticTriplets} = require('../index');

describe('Number of Arithmetic Triplets', function () {
  it(`([0, 1, 4, 6, 7, 10], 3) => 2`, function () {
    const result = arithmeticTriplets([0, 1, 4, 6, 7, 10], 3);
    expect(result).toEqual(2);
  });

  it(`([4, 5, 6, 7, 8, 9], 2) => 2`, function () {
    const result = arithmeticTriplets([4, 5, 6, 7, 8, 9], 2);
    expect(result).toEqual(2);
  });
});
