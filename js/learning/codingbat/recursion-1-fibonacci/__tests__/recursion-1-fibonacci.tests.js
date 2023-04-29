const {fibonacci} = require('../index');

describe('Recursion-1 Fibonacci', function () {

  it(`0 => 0`, function () {
    const result = fibonacci(0);
    expect(result).toEqual(0);
  });

  it(`1 => 1`, function () {
    const result = fibonacci(1);
    expect(result).toEqual(1);
  });

  it(`2 => 1`, function () {
    const result = fibonacci(2);
    expect(result).toEqual(1);
  });

  it(`3 => 2`, function () {
    const result = fibonacci(3);
    expect(result).toEqual(2);
  });

  it(`4 => 3`, function () {
    const result = fibonacci(4);
    expect(result).toEqual(3);
  });

  it(`5 => 5`, function () {
    const result = fibonacci(5);
    expect(result).toEqual(5);
  });

  it(`6 => 8`, function () {
    const result = fibonacci(6);
    expect(result).toEqual(8);
  });

  it(`7 => 13`, function () {
    const result = fibonacci(7);
    expect(result).toEqual(13);
  });
});
