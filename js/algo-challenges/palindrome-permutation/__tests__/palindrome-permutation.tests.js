const {canPermutePalindrome} = require('../index');

describe('Palindrome Permutation', function () {
  it(`'code' => false`, function () {
    const result = canPermutePalindrome('code');
    expect(result).toEqual(false);
  });

  it(`'aab' => true`, function () {
    const result = canPermutePalindrome('aab');
    expect(result).toEqual(true);
  });

  it(`'carerac' => true`, function () {
    const result = canPermutePalindrome('carerac');
    expect(result).toEqual(true);
  });
});
