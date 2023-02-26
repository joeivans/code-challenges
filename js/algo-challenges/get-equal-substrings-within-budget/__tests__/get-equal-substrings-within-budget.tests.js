const {equalSubstring} = require('../index');

describe('Get Equal Substrings Within Budget', function () {
  it(`('abcd', 'bcdf', 3) => 3`, function () {
    const result = equalSubstring('abcd', 'bcdf', 3);
    expect(result).toEqual(3);
  });

  it(`('abcd', 'cdef', 3) => 1`, function () {
    const result = equalSubstring('abcd', 'cdef', 3);
    expect(result).toEqual(1);
  });

  it(`('abcd', 'acde', 0) => 1`, function () {
    const result = equalSubstring('abcd', 'acde', 0);
    expect(result).toEqual(1);
  });

  it(`('aaa', 'aaa', 0) => 3`, function () {
    const result = equalSubstring('aaa', 'aaa', 0);
    expect(result).toEqual(3);
  });

  it(`('abc', 'zaa', 5) => 2`, function () {
    const result = equalSubstring('abc', 'zaa', 5);
    expect(result).toEqual(2);
  });

  it(`('aaa', 'zzz', 0) => 0`, function () {
    const result = equalSubstring('aaa', 'zzz', 0);
    expect(result).toEqual(0);
  });
});
