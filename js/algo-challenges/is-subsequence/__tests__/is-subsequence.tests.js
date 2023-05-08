const {isSubsequence} = require('../index');

describe('Is Subsequence', function () {
  it(`('abc', 'ahbgdc') => true`, function () {
    const result = isSubsequence('abc', 'ahbgdc');
    expect(result).toEqual(true);
  });

  it(`('axc', 'ahbgdc') => false`, function () {
    const result = isSubsequence('axc', 'ahbgdc');
    expect(result).toEqual(false);
  });
});
