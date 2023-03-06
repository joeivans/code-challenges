const {lengthOfLongestSubstringKDistinct} = require('../index');

describe('Longest Substring with At Most K Distinct Characters', function () {
  it(`('ecebe', 2) => 3`, function () {
    const result = lengthOfLongestSubstringKDistinct('ecebe', 2);
    expect(result).toEqual(3);
  });

  it(`('aa', 1) => 2`, function () {
    const result = lengthOfLongestSubstringKDistinct('aa', 1);
    expect(result).toEqual(2);
  });
});
