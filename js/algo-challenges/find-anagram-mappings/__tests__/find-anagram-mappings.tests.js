const {anagramMappings} = require('../index');

describe('Find Anagram Mappings', function () {
  it(`[12, 28, 46, 32, 50], [50, 12, 32, 46, 28] => [1, 4, 3, 2, 0]`, function () {
    const a = [12, 28, 46, 32, 50];
    const b = [50, 12, 32, 46, 28];

    const result = anagramMappings(a, b);

    const aIt = a.values();
    for (const r of result) {
      expect(aIt.next().value).toEqual(b[r]);
    }
  });

  it(`[84, 46], [84, 46] => [0, 1]`, function () {
    const a = [84, 46];
    const b = [84, 46];

    const result = anagramMappings(a, b);

    const aIt = a.values();
    for (const r of result) {
      expect(aIt.next().value).toEqual(b[r]);
    }
  });

  it(`[1, 2, 2, 1, 4], [4, 1, 1, 2, 2] => [2, 4, 3, 1, 0]`, function () {
    const a = [1, 2, 2, 1, 4];
    const b = [4, 1, 1, 2, 2];

    const result = anagramMappings(a, b);

    const aIt = a.values();
    for (const r of result) {
      expect(aIt.next().value).toEqual(b[r]);
    }
  });
});
