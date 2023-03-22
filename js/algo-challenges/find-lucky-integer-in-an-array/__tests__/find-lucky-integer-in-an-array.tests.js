const {findLucky} = require('../index');

describe(`Find Lucky Integer in an Array`, function () {
  it(`[2, 2, 3, 4] => 2`, function () {
    const result = findLucky([2, 2, 3, 4]);
    expect(result).toEqual(2);
  });

  it(`[1, 2, 2, 3, 3, 3] => 3`, function () {
    const result = findLucky([1, 2, 2, 3, 3, 3]);
    expect(result).toEqual(3);
  });

  it(`[2, 2, 2, 3, 3] => -1`, function () {
    const result = findLucky([2, 2, 2, 3, 3]);
    expect(result).toEqual(-1);
  });
});
