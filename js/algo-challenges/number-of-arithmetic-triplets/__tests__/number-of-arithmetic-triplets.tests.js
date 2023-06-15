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

  it(`([6,14,15,26,31,36,38,41,42,45], 5) => 2`, function () {
    const result = arithmeticTriplets([6, 14, 15, 26, 31, 36, 38, 41, 42, 45], 5);
    expect(result).toEqual(2);
  });

  it(`([2,10,14,19,20,24,30,34,45,48], 10) => 2`, function () {
    const result = arithmeticTriplets([2, 10, 14, 19, 20, 24, 30, 34, 45, 48], 10);
    expect(result).toEqual(2);
  });

});
