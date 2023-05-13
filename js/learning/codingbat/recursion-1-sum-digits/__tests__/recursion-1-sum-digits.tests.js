const {sumDigits} = require('../index');

describe('Recursion-1 Digit Sum', function () {

  it(`0 => 0`, function () {
    const result = sumDigits(0);
    expect(result).toEqual(0);
  });

  it(`1 => 1`, function () {
    const result = sumDigits(1);
    expect(result).toEqual(1);
  });

  it(`10 => 1`, function () {
    const result = sumDigits(10);
    expect(result).toEqual(1);
  });

  it(`12 => 3`, function () {
    const result = sumDigits(12);
    expect(result).toEqual(3);
  });

  it(`49 => 13`, function () {
    const result = sumDigits(49);
    expect(result).toEqual(13);
  });

  it(`126 => 9`, function () {
    const result = sumDigits(126);
    expect(result).toEqual(9);
  });

  it(`235 => 10`, function () {
    const result = sumDigits(235);
    expect(result).toEqual(10);
  });

  it(`730 => 10`, function () {
    const result = sumDigits(730);
    expect(result).toEqual(10);
  });

  it(`1111 => 4`, function () {
    const result = sumDigits(1111);
    expect(result).toEqual(4);
  });

  it(`10110 => 3`, function () {
    const result = sumDigits(10110);
    expect(result).toEqual(3);
  });

  it(`11111 => 5`, function () {
    const result = sumDigits(11111);
    expect(result).toEqual(5);
  });
});
