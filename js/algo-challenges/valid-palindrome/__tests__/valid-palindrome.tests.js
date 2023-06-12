const {isPalindrome} = require('../index');

describe('Valid Palindrome', function () {

  it(`'A man, a plan, a canal: Panama' => true`, function () {
    const result = isPalindrome('A man, a plan, a canal: Panama');
    expect(result).toEqual(true);
  });

  it(`'race a car' => false`, function () {
    const result = isPalindrome('race a car');
    expect(result).toEqual(false);
  });

  it(`' ' => true`, function () {
    const result = isPalindrome(' ');
    expect(result).toEqual(true);
  });

});
