const {lengthOfLongestSubstring} = require('../index');

describe('Longest Substring Without Repeating Characters', function () {

  it(`('abcabcbb') => 3`, function () {
    const result = lengthOfLongestSubstring('abcabcbb', 3);
    expect(result).toEqual(3);
  });

  it(`('bbbbb') => 1`, function () {
    const result = lengthOfLongestSubstring('bbbbb', 1);
    expect(result).toEqual(1);
  });

  it(`('pwwkew') => 3`, function () {
    const result = lengthOfLongestSubstring('pwwkew', 3);
    expect(result).toEqual(3);
  });

  it(`('tmmzuxt') => 5`, function () {
    const result = lengthOfLongestSubstring('tmmzuxt', 5);
    expect(result).toEqual(5);
  });

});
