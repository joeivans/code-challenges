const {uniqueOccurrences} = require('../index');

describe('Unique Number of Occurrences', function () {
  it(`[1, 2, 2, 1, 1, 3] => true`, function () {
    const result = uniqueOccurrences([1, 2, 2, 1, 1, 3]);
    expect(result).toEqual(true);
  });

  it(`[1, 2] => false`, function () {
    const result = uniqueOccurrences([1, 2]);
    expect(result).toEqual(false);
  });

  it(`[-3, 0, 1, -3, 1, 1, 1, -3, 10, 0] => true`, function () {
    const result = uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]);
    expect(result).toEqual(true);
  });
});
