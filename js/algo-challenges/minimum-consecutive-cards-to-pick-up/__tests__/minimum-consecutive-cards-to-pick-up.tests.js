const {minimumCardPickup} = require('../index');

describe('Minimum Consecutive Cards to Pick Up', function () {
  it(`[3, 4, 2, 3, 4, 7] => 4`, function () {
    const result = minimumCardPickup([3, 4, 2, 3, 4, 7]);
    expect(result).toEqual(4);
  });

  it(`[1, 0, 5, 3] => -1`, function () {
    const result = minimumCardPickup([1, 0, 5, 3]);
    expect(result).toEqual(-1);
  });

  it(`[95, 11, 8, 65, 5, 86, 30, 27, 30, 73, 15, 91, 30, 7, 37, 26, 55, 76, 60, 43, 36, 85, 47, 96, 6] => 3`,
    function () {
      const result = minimumCardPickup(
        [95, 11, 8, 65, 5, 86, 30, 27, 30, 73, 15, 91, 30, 7, 37, 26, 55,
          76, 60, 43, 36, 85, 47, 96, 6]);
      expect(result).toEqual(3);
    });
});
