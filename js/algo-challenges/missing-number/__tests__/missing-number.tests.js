const {missingNumber} = require('../index');

describe('Missing Number', function () {

  it(`[3, 0, 1] => 2`, function () {
    const result = missingNumber([3, 0, 1]);
    expect(result).toEqual(2);
  });

  it(`[0, 1] => 2`, function () {
    const result = missingNumber([0, 1]);
    expect(result).toEqual(2);
  });

  it(`[9, 6, 4, 2, 3, 5, 7, 0, 1] => 8`, function () {
    const result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
    expect(result).toEqual(8);
  });

});
