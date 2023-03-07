const {singleNumber} = require('../index');

describe('Single Number', function () {
  it(`[2, 2, 1] => 1`, function () {
    const result = singleNumber([2, 2, 1]);
    expect(result).toEqual(1);
  });

  it(`[4, 1, 2, 1, 2] => 4`, function () {
    const result = singleNumber([4, 1, 2, 1, 2]);
    expect(result).toEqual(4);
  });

  it(`[1] => 1`, function () {
    const result = singleNumber([1]);
    expect(result).toEqual(1);
  });
});
