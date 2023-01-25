const {smallerNumbersThanCurrent} = require('../index');

describe('How Many Numbers are Smaller than the Current Number', function () {

  it(`[8, 1, 2, 2, 3] => [4, 0, 1, 1, 3]`, function () {
    const result = smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
    expect(result).toStrictEqual([4, 0, 1, 1, 3]);
  });

  it(`[6, 5, 4, 8] => [2, 1, 0, 3]`, function () {
    const result = smallerNumbersThanCurrent([6, 5, 4, 8]);
    expect(result).toStrictEqual([2, 1, 0, 3]);
  });

  it(`[7, 7, 7, 7] => [0, 0, 0, 0]`, function () {
    const result = smallerNumbersThanCurrent([7, 7, 7, 7]);
    expect(result).toStrictEqual([0, 0, 0, 0]);
  });
});
