const {triangle} = require('../index');

describe('Recursion-1 Triangle', function () {

  it(`0 => 0`, function () {
    const result = triangle(0);
    expect(result).toEqual(0);
  });

  it(`1 => 1`, function () {
    const result = triangle(1);
    expect(result).toEqual(1);
  });

  it(`2 => 3`, function () {
    const result = triangle(2);
    expect(result).toEqual(3);
  });

  it(`3 => 6`, function () {
    const result = triangle(3);
    expect(result).toEqual(6);
  });

  it(`4 => 10`, function () {
    const result = triangle(4);
    expect(result).toEqual(10);
  });

  it(`5 => 15`, function () {
    const result = triangle(5);
    expect(result).toEqual(15);
  });

  it(`6 => 21`, function () {
    const result = triangle(6);
    expect(result).toEqual(21);
  });

  it(`7 => 28`, function () {
    const result = triangle(7);
    expect(result).toEqual(28);
  });

});
