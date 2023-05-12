const {minStartValue} = require('../index');

describe('Minimum Value to Get Positive Step by Step Sum', function () {

  it(`[-3, 2, -3, 4, 2] => 5`, function () {
    const result = minStartValue([-3, 2, -3, 4, 2]);
    expect(result).toEqual(5);
  });

  it(`[1, 2] => 1`, function () {
    const result = minStartValue([1, 2]);
    expect(result).toEqual(1);
  });

  it(`[1, -2, -3] => 5`, function () {
    const result = minStartValue([1, -2, -3]);
    expect(result).toEqual(5);
  });

  it(`[2, 3, 5, -5, -1] => 1`, function () {
    const result = minStartValue([2, 3, 5, -5, -1]);
    expect(result).toEqual(1);
  });
});
