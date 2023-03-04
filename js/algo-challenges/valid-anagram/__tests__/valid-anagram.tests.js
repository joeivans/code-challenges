const {isAnagram} = require('../index');

describe('Valid Anagram', function () {
  it(`('anagram', 'nagaram') => true`, function () {
    const result = isAnagram('anagram', 'nagaram');
    expect(result).toEqual(true);
  });

  it(`('rat', 'car') => false`, function () {
    const result = isAnagram('rat', 'car');
    expect(result).toEqual(false);
  });
});
