const {bunnyEars2} = require('../index');

describe('Recursion-1 Bunny Ears 2', function () {

  it(`0 => 0`, function () {
    const result = bunnyEars2(0);
    expect(result).toEqual(0);
  });

  it(`1 => 2`, function () {
    const result = bunnyEars2(1);
    expect(result).toEqual(2);
  });

  it(`2 => 5`, function () {
    const result = bunnyEars2(2);
    expect(result).toEqual(5);
  });

  it(`3 => 7`, function () {
    const result = bunnyEars2(3);
    expect(result).toEqual(7);
  });

  it(`4 => 10`, function () {
    const result = bunnyEars2(4);
    expect(result).toEqual(10);
  });

  it(`5 => 12`, function () {
    const result = bunnyEars2(5);
    expect(result).toEqual(12);
  });

  it(`6 => 15`, function () {
    const result = bunnyEars2(6);
    expect(result).toEqual(15);
  });

  it(`10 => 25`, function () {
    const result = bunnyEars2(10);
    expect(result).toEqual(25);
  });
});
