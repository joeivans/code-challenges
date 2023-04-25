const {backspaceCompare} = require('../index');

describe('Backspace String Compare', function () {
  it(`('ab#c', 'ad#c') => true`, function () {
    const result = backspaceCompare('ab#c', 'ad#c');
    expect(result).toEqual(true);
  });

  it(`('ab##', 'c#d#') => true`, function () {
    const result = backspaceCompare('ab##', 'c#d#');
    expect(result).toEqual(true);
  });

  it(`('a#c', 'b') => false`, function () {
    const result = backspaceCompare('a#c', 'b');
    expect(result).toEqual(false);
  });

  it(`('##', '#t#') => true`, function () {
    const result = backspaceCompare('##', '#t#');
    expect(result).toEqual(true);
  });

  it(`('##', '#') => true`, function () {
    const result = backspaceCompare('##', '#');
    expect(result).toEqual(true);
  });

  it(`('tt', 't') => false`, function () {
    const result = backspaceCompare('tt', 't');
    expect(result).toEqual(false);
  });

  it(`('t#t', 't') => true`, function () {
    const result = backspaceCompare('t#t', 't');
    expect(result).toEqual(true);
  });
});
