const {findMaxConsecutiveOnes} = require('../index');

describe('Max Consecutive Ones', function () {

  it(`[1, 1, 0, 1, 1, 1] => 3`, function () {
    const result = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);

    expect(result).toBe(3);
  });

  it(`[1, 0, 1, 1, 0, 1] => 2`, function () {
    const result = findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]);

    expect(result).toBe(2);
  });

  it(`[0, 1, 1, 0] => 2`, function () {
    const result = findMaxConsecutiveOnes([0, 1, 1, 0]);

    expect(result).toBe(2);
  });

  it(`[0] => 0`, function () {
    const result = findMaxConsecutiveOnes([0]);

    expect(result).toBe(0);
  });

  it(`[1] => 1`, function () {
    const result = findMaxConsecutiveOnes([1]);

    expect(result).toBe(1);
  });

});
