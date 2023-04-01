const {isIsomorphic} = require('../index');

describe('Isomorphic Strings', function () {
  it(`('egg', 'add') => true`, function () {
    const result = isIsomorphic('egg', 'add');
    expect(result).toEqual(true);
  });

  it(`('foo', 'bar') => false`, function () {
    const result = isIsomorphic('foo', 'bar');
    expect(result).toEqual(false);
  });

  it(`('paper', 'title') => true`, function () {
    const result = isIsomorphic('paper', 'title');
    expect(result).toEqual(true);
  });

  it(`('gge', 'add') => false`, function () {
    const result = isIsomorphic('gge', 'add');
    expect(result).toEqual(false);
  });

  it(`('badc', 'baba') => false`, function () {
    const result = isIsomorphic('badc', 'baba');
    expect(result).toEqual(false);
  });
});
