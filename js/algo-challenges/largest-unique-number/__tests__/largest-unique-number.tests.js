const {largestUniqueNumber} = require('../index');

describe('Largest Unique Number', function () {

  it(`[5,7,3,9,4,9,8,3,1] => 8`, function () {
    const result = largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]);
    expect(result).toEqual(8);
  });

  it(`[9,9,8,8] => -1`, function () {
    const result = largestUniqueNumber([9, 9, 8, 8]);
    expect(result).toEqual(-1);
  });

});
