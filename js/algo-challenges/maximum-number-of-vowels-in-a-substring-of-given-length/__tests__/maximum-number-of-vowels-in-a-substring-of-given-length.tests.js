const {maxVowels} = require('../index');

describe('Maximum Number of Vowels in a Substring of Given Length', function () {
  it(`('abciiidef', 3) => 3`, function () {
    const result = maxVowels('abciiidef', 3);
    expect(result).toEqual(3);
  });

  it(`('aeiou', 2) => 2`, function () {
    const result = maxVowels('aeiou', 2);
    expect(result).toEqual(2);
  });

  it(`('leetcode', 3) => 2`, function () {
    const result = maxVowels('leetcode', 3);
    expect(result).toEqual(2);
  });

  it(`('abcdefghijklmnopqrstuvwxyz', 5) => 2`, function () {
    const result = maxVowels('abcdefghijklmnopqrstuvwxyz', 5);
    expect(result).toEqual(2);
  });

  it(`('z', 1) => 0`, function () {
    const result = maxVowels('z', 1);
    expect(result).toEqual(0);
  });
});
