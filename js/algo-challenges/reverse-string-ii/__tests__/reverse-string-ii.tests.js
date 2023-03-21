const {reverseStr} = require('../index');

describe('Reverse String II', function () {
  it(`('abcdefg', 2) => 'bacdfeg'`, function () {
    const result = reverseStr('abcdefg', 2);
    expect(result).toEqual('bacdfeg');
  });

  it(`('abcd', 2) => 'bacd'`, function () {
    const result = reverseStr('abcd', 2);
    expect(result).toEqual('bacd');
  });

  it(`('abcdefg', 3) => 'cbadefg'`, function () {
    const result = reverseStr('abcdefg', 3);
    expect(result).toEqual('cbadefg');
  });

  it(`('abcdefg', 8) => 'gfedcba'`, function () {
    const result = reverseStr('abcdefg', 8);
    expect(result).toEqual('gfedcba');
  });
});
