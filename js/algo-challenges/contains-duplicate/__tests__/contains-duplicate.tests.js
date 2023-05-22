const {containsDuplicate} = require('../index');

describe('Contains Duplicate', function () {

  it(`[1, 2, 3, 1] => true`, function () {
    const result = containsDuplicate([1, 2, 3, 1]);
    expect(result).toEqual(true);
  });

  it(`[1, 2, 3, 4] => false`, function () {
    const result = containsDuplicate([1, 2, 3, 4]);
    expect(result).toEqual(false);
  });

  it(`[1, 1, 1, 3, 3, 4, 3, 2, 4, 2] => true`, function () {
    const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
    expect(result).toEqual(true);
  });

});
