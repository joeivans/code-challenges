const {duplicateZeros} = require('../index');

describe('Duplicate Zeros', function () {
  it(`[1, 0, 2, 3, 0, 4, 5, 0] => [1, 0, 0, 2, 3, 0, 0, 4]`, function () {
    const input = [1, 0, 2, 3, 0, 4, 5, 0];
    duplicateZeros(input);
    expect(input).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
  });

  it(`[1, 2, 3] => [1, 2, 3]`, function () {
    const input = [1, 2, 3];
    duplicateZeros(input);
    expect(input).toEqual([1, 2, 3]);
  });

  it(`[8, 4, 5, 0, 0, 0, 0, 7] => [8, 4, 5, 0, 0, 0, 0, 0]`, function () {
    const input = [8, 4, 5, 0, 0, 0, 0, 7];
    duplicateZeros(input);
    expect(input).toEqual([8, 4, 5, 0, 0, 0, 0, 0]);
  });
});
