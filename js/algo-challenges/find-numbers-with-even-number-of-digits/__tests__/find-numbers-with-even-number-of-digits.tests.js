const {findNumbers} = require('../index');

describe('Find Numbers with Even Number of Digits', function () {

  it(`[12, 345, 2, 6, 7896] => 2`, function () {
    const result = findNumbers([12, 345, 2, 6, 7896]);

    expect(result).toBe(2);
  });

  it(`[555, 901, 482, 1771] => 1`, function () {
    const result = findNumbers([555, 901, 482, 1771]);

    expect(result).toBe(1);
  });

  it(`[1, 10, 100, 1000] => 2`, function () {
    const result = findNumbers([1, 10, 100, 1000]);

    expect(result).toBe(2);
  });
});
