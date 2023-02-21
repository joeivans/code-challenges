const {checkIfExist} = require('../index');

describe('Check If N and its Double Exist', function () {
  it(`[10, 2, 5, 3] => true`, function () {
    const result = checkIfExist([10, 2, 5, 3]);
    expect(result).toEqual(true);
  });

  it(`[3, 1, 7, 11] => false`, function () {
    const result = checkIfExist([3, 1, 7, 11]);
    expect(result).toEqual(false);
  });

  it(`[3, 3, 6] => true`, function () {
    const result = checkIfExist([3, 3, 6]);
    expect(result).toEqual(true);
  });

  it(`[0, 0] => true`, function () {
    const result = checkIfExist([0, 0]);
    expect(result).toEqual(true);
  });
});
