const {removeVowels} = require('../index');

describe('Remove Vowels from a String', function () {

  it(`'leetcodeisacommunityforcoders' => 'ltcdscmmntyfrcdrs'`, function () {
    const result = removeVowels('leetcodeisacommunityforcoders');
    expect(result).toBe('ltcdscmmntyfrcdrs');
  });

  it(`'aeiou' => ''`, function () {
    const result = removeVowels('aeiou');
    expect(result).toBe('');
  });
});
