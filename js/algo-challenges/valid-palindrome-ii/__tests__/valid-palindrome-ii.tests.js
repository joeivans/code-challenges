const {validPalindrome} = require('../index');

describe('Valid Palindrome II', function () {

  it(`'aba' => true`, function () {
    const result = validPalindrome('aba');
    expect(result).toEqual(true);
  });

  it(`'abca' => true`, function () {
    const result = validPalindrome('abca');
    expect(result).toEqual(true);
  });

  it(`'abc' => false`, function () {
    const result = validPalindrome('abc');
    expect(result).toEqual(false);
  });

  it(`'tebbem' => false`, function () {
    const result = validPalindrome('tebbem');
    expect(result).toEqual(false);
  });

  it(`'abac' => true`, function () {
    const result = validPalindrome('abac');
    expect(result).toEqual(true);
  });

  it(`'cupupucu' => true`, function () {
    const result = validPalindrome('cupupucu');
    expect(result).toEqual(true);
  });

});
