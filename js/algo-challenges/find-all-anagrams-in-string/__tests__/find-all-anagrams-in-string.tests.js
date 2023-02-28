const {findAnagrams} = require('../index');

describe('Find All Anagrams in a String', function () {
  it(`('cbaebabacd', 'abc') => [0, 6]`, function () {
    const result = findAnagrams('cbaebabacd', 'abc');
    expect(result).toEqual([0, 6]);
  });

  it(`('abab', 'ab') => [0, 1, 2]`, function () {
    const result = findAnagrams('abab', 'ab');
    expect(result).toEqual([0, 1, 2]);
  });

  it(`('abcabcabcabcabc', 'abc') => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]`, function () {
    const result = findAnagrams('abcabcabcabcabc', 'abc');
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it(`('abcabcabcabcabca', 'abc') => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]`, function () {
    const result = findAnagrams('abcabcabcabcabca', 'abc');
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  });

  it(`('af', 'be') => []`, function () {
    const result = findAnagrams('af', 'be');
    expect(result).toEqual([]);
  });
});
