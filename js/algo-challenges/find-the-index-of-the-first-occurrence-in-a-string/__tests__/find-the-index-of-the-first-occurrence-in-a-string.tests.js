const {strStr} = require('../index');

describe('Find the Index of the First Occurrence in a String', function () {
  it(`('sadbutsad', 'sad') => 0`, function () {
    const result = strStr('sadbutsad', 'sad');
    expect(result).toEqual(0);
  });

  it(`('leetcode', 'leeto') => -1`, function () {
    const result = strStr('leetcode', 'leeto');
    expect(result).toEqual(-1);
  });

  it(`('mississippi', 'issip') => 4`, function () {
    const result = strStr('mississippi', 'issip');
    expect(result).toEqual(4);
  });

  it(`('b', 'a') => -1`, function () {
    const result = strStr('b', 'a');
    expect(result).toEqual(-1);
  });

  it(`('aaaaaaaaaa', 'aaaaab') => -1`, function () {
    const result = strStr('aaaaaaaaaa', 'aaaaab');
    expect(result).toEqual(-1);
  });

  it(`('aabaaabaaac', 'aabaaac') => 4`, function () {
    const result = strStr('aabaaabaaac', 'aabaaac');
    expect(result).toEqual(4);
  });

  it(`('aa', 'a') => 4`, function () {
    const result = strStr('aa', 'a');
    expect(result).toEqual(0);
  });

  it(`('aa', 'aa') => 4`, function () {
    const result = strStr('aa', 'aa');
    expect(result).toEqual(0);
  });
});
