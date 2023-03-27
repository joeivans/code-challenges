const {romanToInt} = require('../index');

describe('Roman to Integer', function () {
  it(`'III' => 3`, function () {
    const result = romanToInt('III');
    expect(result).toEqual(3);
  });

  it(`'LVIII' => 58`, function () {
    const result = romanToInt('LVIII');
    expect(result).toEqual(58);
  });

  it(`'MCMXCIV' => 1994`, function () {
    const result = romanToInt('MCMXCIV');
    expect(result).toEqual(1994);
  });
});
