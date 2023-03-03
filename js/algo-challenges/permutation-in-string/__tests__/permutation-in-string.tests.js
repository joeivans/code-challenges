const {checkInclusion} = require('../index');

describe('Permutation in String', function () {
  it(`('ab', 'eidbaooo') => true`, function () {
    const result = checkInclusion('ab', 'eidbaooo');
    expect(result).toEqual(true);
  });

  it(`('ab', 'eidboaoo') => false`, function () {
    const result = checkInclusion('ab', 'eidboaoo');
    expect(result).toEqual(false);
  });

  it(`('abc', 'cbaebabacd') => true`, function () {
    const result = checkInclusion('abc', 'cbaebabacd');
    expect(result).toEqual(true);
  });

  it(`('abc', 'caaebabacd') => true`, function () {
    const result = checkInclusion('abc', 'caaebabacd');
    expect(result).toEqual(true);
  });

  it(`('abc', 'caaebaaacd') => false`, function () {
    const result = checkInclusion('abc', 'caaebaaacd');
    expect(result).toEqual(false);
  });
});
