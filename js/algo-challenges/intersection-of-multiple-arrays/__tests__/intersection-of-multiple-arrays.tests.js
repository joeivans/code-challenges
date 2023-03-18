const {intersection} = require('../index');

describe('Intersection of Multiple Arrays', function () {
  it(`[[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]] => [3, 4]`, function () {
    const result = intersection([[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]);
    expect(result).toEqual([3, 4]);
  });

  it(`[[1, 2, 3], [4, 5, 6]] => []`, function () {
    const result = intersection([[1, 2, 3], [4, 5, 6]]);
    expect(result).toEqual([]);
  });
});
