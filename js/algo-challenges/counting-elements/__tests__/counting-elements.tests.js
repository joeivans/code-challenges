const {countElements} = require('../index');

describe('Counting Elements', function () {
  it(`[1, 2, 3] => 2`, function () {
    const result = countElements([1, 2, 3]);
    expect(result).toEqual(2);
  });

  it(`[1, 1, 3, 3, 5, 5, 7, 7] => 0`, function () {
    const result = countElements([1, 1, 3, 3, 5, 5, 7, 7]);
    expect(result).toEqual(0);
  });

  it(`[2, 1, 2, 3] => 3`, function () {
    const result = countElements([2, 1, 2, 3]);
    expect(result).toEqual(3);
  });
});
