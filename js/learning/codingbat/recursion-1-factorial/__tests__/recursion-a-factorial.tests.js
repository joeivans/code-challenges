const {factorial} = require('../index');

describe('Recursion-1 Factorial', function () {

  it(`1 => 1`, function () {
    const result = factorial(1);
    expect(result).toEqual(1);
  });

  it(`2 => 2`, function () {
    const result = factorial(2);
    expect(result).toEqual(2);
  });

  it(`3 => 6`, function () {
    const result = factorial(3);
    expect(result).toEqual(6);
  });

  it(`4 => 24`, function () {
    const result = factorial(4);
    expect(result).toEqual(24);
  });

  it(`5 => 120`, function () {
    const result = factorial(5);
    expect(result).toEqual(120);
  });

  it(`6 => 720`, function () {
    const result = factorial(6);
    expect(result).toEqual(720);
  });

  it(`7 => 5040`, function () {
    const result = factorial(7);
    expect(result).toEqual(5040);
  });

  it(`8 => 40320`, function () {
    const result = factorial(8);
    expect(result).toEqual(40320);
  });

  it(`12 => 479001600`, function () {
    const result = factorial(12);
    expect(result).toEqual(479001600);
  });
});
