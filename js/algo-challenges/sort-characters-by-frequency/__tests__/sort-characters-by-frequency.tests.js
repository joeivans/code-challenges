const {frequencySort} = require('../index');

describe('Sort Characters By Frequency', function () {
  it(`'tree' => 'eert'`, function () {
    const result = frequencySort('tree');
    const resultMap = new Map();
    for (const c of result) {
      resultMap.set(c, resultMap.get(c) + 1 || 1);
    }
    expect(result.length).toEqual(4);
    expect(resultMap.size).toEqual(3);
    expect(result.startsWith('ee')).toBeTruthy();
    expect(resultMap.get('t')).toEqual(1);
    expect(resultMap.get('r')).toEqual(1);
    expect(resultMap.get('e')).toEqual(2);
  });

  it(`'cccaaa' => 'bbAa'`, function () {
    const result = frequencySort('cccaaa');
    const resultMap = new Map();
    for (const c of result) {
      resultMap.set(c, resultMap.get(c) + 1 || 1);
    }
    expect(result.length).toEqual(6);
    expect(resultMap.size).toEqual(2);
    expect(result.startsWith('aaa') || result.startsWith('ccc')).toBeTruthy();
    expect(resultMap.get('a')).toEqual(3);
    expect(resultMap.get('c')).toEqual(3);
  });

  it(`'Aabb' => 'bbAa'`, function () {
    const result = frequencySort('Aabb');
    const resultMap = new Map();
    for (const c of result) {
      resultMap.set(c, resultMap.get(c) + 1 || 1);
    }
    expect(result.length).toEqual(4);
    expect(resultMap.size).toEqual(3);
    expect(result.startsWith('bb')).toBeTruthy();
    expect(resultMap.get('A')).toEqual(1);
    expect(resultMap.get('a')).toEqual(1);
    expect(resultMap.get('b')).toEqual(2);
  });
});
