const {mergeTwoLists} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Merge Two Sorted Lists', function () {
  it(`([1, 2, 4], [1, 3, 4]) => [1, 1, 2, 3, 4, 4]`, function () {
    const result = mergeTwoLists(toList([1, 2, 4]), toList([1, 3, 4]));
    expect(result).toEqual(toList([1, 1, 2, 3, 4, 4]));
  });

  it(`([], []) => []`, function () {
    const result = mergeTwoLists(toList([]), toList([]));
    expect(result).toEqual(toList([]));
  });

  it(`([], [0]) => [0]`, function () {
    const result = mergeTwoLists(toList([]), toList([0]));
    expect(result).toEqual(toList([0]));
  });

  it(`([1, 2, 5], [1, 3, 5]) => [1, 1, 2, 3, 5, 5]`, function () {
    const result = mergeTwoLists(toList([1, 2, 5]), toList([1, 3, 5]));
    expect(result).toEqual(toList([1, 1, 2, 3, 5, 5]));
  });
});
