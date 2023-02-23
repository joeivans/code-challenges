const {validMountainArray} = require('../index');

describe('Valid Mountain Array', function () {
  it(`[2, 1] => false`, function () {
    const result = validMountainArray([2, 1]);
    expect(result).toEqual(false);
  });

  it(`[3, 5, 5] => false`, function () {
    const result = validMountainArray([3, 5, 5]);
    expect(result).toEqual(false);
  });

  it(`[0, 3, 2, 1] => true`, function () {
    const result = validMountainArray([0, 3, 2, 1]);
    expect(result).toEqual(true);
  });

  it(`[0, 0, 2, 4, 2, 0] => false`, function () {
    const result = validMountainArray([0, 0, 2, 4, 2, 0]);
    expect(result).toEqual(false);
  });

  it(`[2, 1, 0, 1, 2] => false`, function () {
    const result = validMountainArray([2, 1, 0, 1, 2]);
    expect(result).toEqual(false);
  });

  it(`[2] => false`, function () {
    const result = validMountainArray([2]);
    expect(result).toEqual(false);
  });
});
