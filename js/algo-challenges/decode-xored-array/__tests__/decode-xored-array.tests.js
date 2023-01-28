const {decode} = require('../index');

describe('Decode XORed Array', function () {

  it(`([1, 2, 3], 1) => [1, 0, 2, 1]`, function () {
    const result = decode([1, 2, 3], 1);
    expect(result).toStrictEqual([1, 0, 2, 1]);
  });

  it(`([6, 2, 7, 3], 4) => [4, 2, 0, 7, 4]`, function () {
    const result = decode([6, 2, 7, 3], 4);
    expect(result).toStrictEqual([4, 2, 0, 7, 4]);
  });
});
