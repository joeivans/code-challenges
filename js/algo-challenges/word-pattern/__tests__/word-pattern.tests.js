const {wordPattern} = require('../index');

describe('Word Pattern', function () {
  it(`('abba', 'dog cat cat dog') => true`, function () {
    const result = wordPattern('abba', 'dog cat cat dog');
    expect(result).toEqual(true);
  });

  it(`('abba', 'dog cat cat fish') => false`, function () {
    const result = wordPattern('abba', 'dog cat cat fish');
    expect(result).toEqual(false);
  });

  it(`('aaaa', 'dog cat cat dog') => false`, function () {
    const result = wordPattern('aaaa', 'dog cat cat dog');
    expect(result).toEqual(false);
  });

  it(`('abba', 'cat a a cat') => true`, function () {
    const result = wordPattern('abba', 'cat a a cat');
    expect(result).toEqual(true);
  });
});
