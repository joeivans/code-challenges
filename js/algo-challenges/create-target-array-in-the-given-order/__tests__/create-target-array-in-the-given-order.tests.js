const {createTargetArray} = require('../index');

describe('Create Target Array in the Given Order', function () {

  it(`([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]) => [0, 4, 1, 3, 2]`, function () {
    const result = createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
    expect(result).toStrictEqual([0, 4, 1, 3, 2]);
  });

  it(`([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]) => [0, 1, 2, 3, 4]`, function () {
    const result = createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]);
    expect(result).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it(`([1], [0]) => [1]`, function () {
    const result = createTargetArray([1], [0]);
    expect(result).toStrictEqual([1]);
  });

  it(`([4, 2, 4, 3, 2], [0, 0, 1, 3, 1]) => [2, 2, 4, 4, 3]`, function () {
    const result = createTargetArray([4, 2, 4, 3, 2], [0, 0, 1, 3, 1]);
    expect(result).toStrictEqual([2, 2, 4, 4, 3]);
  });
});
