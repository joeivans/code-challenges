const {bunnyEars} = require('../index');

describe('Recursion-1 Bunny Ears', function () {

  it(`0 => 0`, function () {
    const result = bunnyEars(0);
    expect(result).toEqual(0);
  });

  it(`1 => 2`, function () {
    const result = bunnyEars(1);
    expect(result).toEqual(2);
  });

  it(`2 => 4`, function () {
    const result = bunnyEars(2);
    expect(result).toEqual(4);
  });

  it(`3 => 6`, function () {
    const result = bunnyEars(3);
    expect(result).toEqual(6);
  });

  it(`4 => 8`, function () {
    const result = bunnyEars(4);
    expect(result).toEqual(8);
  });

  it(`5 => 10`, function () {
    const result = bunnyEars(5);
    expect(result).toEqual(10);
  });

  it(`12 => 24`, function () {
    const result = bunnyEars(12);
    expect(result).toEqual(24);
  });

  it(`50 => 100`, function () {
    const result = bunnyEars(50);
    expect(result).toEqual(100);
  });

  it(`234 => 468`, function () {
    const result = bunnyEars(234);
    expect(result).toEqual(468);
  });
});
