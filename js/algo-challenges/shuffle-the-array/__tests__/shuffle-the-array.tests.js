const {shuffle} = require('../index');

describe('Shuffle the Array', function () {

  it(`([2, 5, 1, 3, 4, 7], 3) => [2, 3, 5, 4, 1, 7]`, function () {
    const result = shuffle([2, 5, 1, 3, 4, 7], 3);

    expect(result).toStrictEqual([2, 3, 5, 4, 1, 7]);
  });

  it(`([1, 2, 3, 4, 4, 3, 2, 1], 4) => [1, 4, 2, 3, 3, 2, 4, 1]`, function () {
    const result = shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);

    expect(result).toStrictEqual([1, 4, 2, 3, 3, 2, 4, 1]);
  });

  it(`([1, 1, 2, 2], 2) => [1, 2, 1, 2]`, function () {
    const result = shuffle([1, 1, 2, 2], 2);

    expect(result).toStrictEqual([1, 2, 1, 2]);
  });

});
