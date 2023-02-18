const {reversePrefix} = require('../index');

describe('Reverse Prefix of Word', function () {
  it(`('abcdefd', 'd') => 'dcbaefd'`, function () {
    const result = reversePrefix('abcdefd', 'd');
    expect(result).toEqual('dcbaefd');
  });

  it(`('xyxzxe', 'z') => 'zxyxxe'`, function () {
    const result = reversePrefix('xyxzxe', 'z');
    expect(result).toEqual('zxyxxe');
  });

  it(`('abcd', 'z') => 'abcd'`, function () {
    const result = reversePrefix('abcd', 'z');
    expect(result).toEqual('abcd');
  });

  it(`('abcd', 'a') => 'abcd'`, function () {
    const result = reversePrefix('abcd', 'a');
    expect(result).toEqual('abcd');
  });

  it(`('abcd', 'd') => 'dcba'`, function () {
    const result = reversePrefix('abcd', 'd');
    expect(result).toEqual('dcba');
  });
});
