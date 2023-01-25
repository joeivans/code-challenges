const {kidsWithCandies} = require('../index');

describe('Kids With the Greatest Number of Candies', function () {

  it(`([2, 3, 5, 1, 3], 3) => [true, true, true, false, true]`, function () {
    const result = kidsWithCandies([2, 3, 5, 1, 3], 3);

    expect(result).toStrictEqual([true, true, true, false, true]);
  });

  it(`([4, 2, 1, 1, 2], 1) => [true, false, false, false, false]`, function () {
    const result = kidsWithCandies([4, 2, 1, 1, 2], 1);

    expect(result).toStrictEqual([true, false, false, false, false]);
  });

  it(`([12, 1, 12], 10) => [true, false, true]`, function () {
    const result = kidsWithCandies([12, 1, 12], 10);

    expect(result).toStrictEqual([true, false, true]);
  });

  it(`([1, 2], 0) => [false, true]`, function () {
    const result = kidsWithCandies([1, 2], 0);

    expect(result).toStrictEqual([false, true]);
  });
});
