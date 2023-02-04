const {isAlienSorted} = require('../index');

describe('Verifying an Alien Dictionary', function () {
  it(`(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz') => true`, function () {
    const result = isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz');
    expect(result).toEqual(true);
  });

  it(`(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz') => false`, function () {
    const result = isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz');
    expect(result).toEqual(false);
  });

  it(`(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz') => false`, function () {
    const result = isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz');
    expect(result).toEqual(false);
  });

  it(`(['app', 'apple'], 'abcdefghijklmnopqrstuvwxyz') => true`, function () {
    const result = isAlienSorted(['app', 'apple'], 'abcdefghijklmnopqrstuvwxyz');
    expect(result).toEqual(true);
  });

  it(`(['a', 'b', 'c'], 'abcdefghijklmnopqrstuvwxyz') => true`, function () {
    const result = isAlienSorted(['a', 'b', 'c'], 'abcdefghijklmnopqrstuvwxyz');
    expect(result).toEqual(true);
  });

  it(`(['c', 'b', 'a'], 'abcdefghijklmnopqrstuvwxyz') => false`, function () {
    const result = isAlienSorted(['c', 'b', 'a'], 'abcdefghijklmnopqrstuvwxyz');
    expect(result).toEqual(false);
  });

  it(`(['abd', 'abc'], 'abcdefghijklmnopqrstuvwxyz') => false`, function () {
    const result = isAlienSorted(['abd', 'abc'], 'abcdefghijklmnopqrstuvwxyz');
    expect(result).toEqual(false);
  });

  it(`(['abc', 'abc'], 'abcdefghijklmnopqrstuvwxyz') => true`, function () {
    const result = isAlienSorted(['abc', 'abc'], 'abcdefghijklmnopqrstuvwxyz');
    expect(result).toEqual(true);
  });
});
