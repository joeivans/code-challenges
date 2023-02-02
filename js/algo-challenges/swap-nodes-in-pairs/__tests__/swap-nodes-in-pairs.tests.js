const {swapPairs} = require('../index');

describe('Swap Nodes in Pairs', function () {
  it(`[1, 2, 3, 4] => [2, 1, 4, 3]`, function () {
    const result = swapPairs({
      val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: null}}}
    });
    expect(result).toEqual({
      val: 2, next: {val: 1, next: {val: 4, next: {val: 3, next: null}}}
    });
  });

  it(`[] => []`, function () {
    const result = swapPairs({});
    expect(result).toEqual({});
  });

  it(`[1] => [1]`, function () {
    const result = swapPairs({
      val: 1, next: null
    });
    expect(result).toEqual({
      val: 1, next: null
    });
  });

  it(`[1, 2] => [2, 1]`, function () {
    const result = swapPairs({
      val: 1, next: {val: 2, next: null}
    });
    expect(result).toEqual({
      val: 2, next: {val: 1, next: null}
    });
  });

  it(`[1, 2, 3] => [2, 1, 3]`, function () {
    const result = swapPairs({
      val: 1, next: {val: 2, next: {val: 3, next: null}}
    });
    expect(result).toEqual({
      val: 2, next: {val: 1, next: {val: 3, next: null}}
    });
  });
});
