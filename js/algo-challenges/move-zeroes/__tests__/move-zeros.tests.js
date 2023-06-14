const {moveZeroes} = require('../index');

describe('Move Zeros', function () {
  it(`[0, 1, 0, 3, 12] => void | [1, 3, 12, 0, 0]`, function () {
    let input = [0, 1, 0, 3, 12];
    moveZeroes(input);
    expect(input).toEqual([1, 3, 12, 0, 0]);
  });

  it(`[0] => void | [0]`, function () {
    let input = [0];
    moveZeroes(input);
    expect(input).toEqual([0]);
  });

  it(`[0, 1, 0, 0, 12] => void | [1, 12, 0, 0, 0]`, function () {
    let input = [0, 1, 0, 0, 12];
    moveZeroes(input);
    expect(input).toEqual([1, 12, 0, 0, 0]);
  });

  it(`[1, 2, 3, 4, 5] => void | [1, 2, 3, 4, 5]`, function () {
    let input = [1, 2, 3, 4, 5];
    moveZeroes(input);
    expect(input).toEqual([1, 2, 3, 4, 5]);
  });
});
