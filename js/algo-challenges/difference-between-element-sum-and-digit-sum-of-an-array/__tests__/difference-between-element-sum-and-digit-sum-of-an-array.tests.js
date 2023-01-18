const {differenceOfSum} = require('../index');

describe('Difference Between Element Sum and Digit Sum of an Array', function () {

  it(`[1, 15, 6, 3] => 9`, function () {
    const result = differenceOfSum([1, 15, 6, 3]);

    expect(result).toBe(9);
  });

  it(`[1, 2, 3, 4] => 0`, function () {
    const result = differenceOfSum([1, 2, 3, 4]);

    expect(result).toBe(0);
  });

  it(`[1] => 0`, function () {
    const result = differenceOfSum([1]);

    expect(result).toBe(0);
  });

});
