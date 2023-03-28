const {intToRoman} = require('../index');

describe('Integer to Roman', function () {
  it(`3 => 'III'`, function () {
    const result = intToRoman(3);
    expect(result).toEqual('III');
  });

  it(`58 => 'LVIII'`, function () {
    const result = intToRoman(58);
    expect(result).toEqual('LVIII');
  });

  it(`1994 => 'MCMXCIV'`, function () {
    const result = intToRoman(1994);
    expect(result).toEqual('MCMXCIV');
  });
});
