const {closeStrings} = require('../index');

describe('Determine if Two Strings Are Close', function () {
  it(`('abc', 'bca') => true`, function () {
    const result = closeStrings('abc', 'bca');
    expect(result).toEqual(true);
  });

  it(`('a', 'aa') => false`, function () {
    const result = closeStrings('a', 'aa');
    expect(result).toEqual(false);
  });

  it(`('cabbba', 'abbccc') => true`, function () {
    const result = closeStrings('cabbba', 'abbccc');
    expect(result).toEqual(true);
  });

  it(`('abbzzca', 'babzzcz') => false`, function () {
    const result = closeStrings('abbzzca', 'babzzcz');
    expect(result).toEqual(false);
  });

  it(`('uau', 'ssx') => false`, function () {
    const result = closeStrings('uau', 'ssx');
    expect(result).toEqual(false);
  });

  it(`('aaabbbbccddeeeeefffff', 'aaaaabbcccdddeeeeffff') => false`, function () {
    const result = closeStrings('aaabbbbccddeeeeefffff', 'aaaaabbcccdddeeeeffff');
    expect(result).toEqual(false);
  });

  it(`('abcb', 'ccba') => true`, function () {
    const result = closeStrings('abcb', 'ccba');
    expect(result).toEqual(true);
  });
});
