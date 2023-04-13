const {isPalindrome} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Palindrome Linked List', function () {
  it(`[1, 2, 2, 1] => true`, function () {
    const result = isPalindrome(toList([1, 2, 2, 1]));
    expect(result).toEqual(true);
  });

  it(`[1, 2] => false`, function () {
    const result = isPalindrome(toList([1, 2]));
    expect(result).toEqual(false);
  });

  it(`[1, 2, 3, 4] => false`, function () {
    const result = isPalindrome(toList([1, 2, 3, 4]));
    expect(result).toEqual(false);
  });

  it(`[1, 2, 3, 4, 5] => false`, function () {
    const result = isPalindrome(toList([1, 2, 3, 4, 5]));
    expect(result).toEqual(false);
  });

  it(`[1, 2, 3, 2, 1] => true`, function () {
    const result = isPalindrome(toList([1, 2, 3, 2, 1]));
    expect(result).toEqual(true);
  });

  it(`[1] => true`, function () {
    const result = isPalindrome(toList([1]));
    expect(result).toEqual(true);
  });

  it(`[1, 1] => true`, function () {
    const result = isPalindrome(toList([1, 1]));
    expect(result).toEqual(true);
  });
});
