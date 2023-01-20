const {numIdenticalPairs} = require('../index');

describe('Number of Good Pairs', function () {

  it(`([1, 2, 3, 1, 1, 3]) => 4`, function () {
    const result = numIdenticalPairs([1, 2, 3, 1, 1, 3]);

    expect(result).toBe(4);
  });

  it(`([1, 1, 1, 1]) => 6`, function () {
    const result = numIdenticalPairs([1, 1, 1, 1]);

    expect(result).toBe(6);
  });

  it(`([1, 2, 3]) => 0`, function () {
    const result = numIdenticalPairs([1, 2, 3]);

    expect(result).toBe(0);
  });

});
