const {deleteDuplicates} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Remove Duplicates from Sorted List II', function () {

  it(`[1, 2, 3, 3, 4, 4, 5] => [1, 2, 5]`, function () {
    const result = deleteDuplicates(toList([1, 2, 3, 3, 4, 4, 5]));
    expect(result).toEqual(toList([1, 2, 5]));
  });

  it(`[1, 1, 1, 2, 3] => [2, 3]`, function () {
    const result = deleteDuplicates(toList([1, 1, 1, 2, 3]));
    expect(result).toEqual(toList([2, 3]));
  });

  it(`[1, 1, 1] => []`, function () {
    const result = deleteDuplicates(toList([1, 1, 1]));
    expect(result).toEqual(toList([]));
  });

  it(`[1, 1, 1, 2, 3, 3] => [2]`, function () {
    const result = deleteDuplicates(toList([1, 1, 1, 2, 3, 3]));
    expect(result).toEqual(toList([2]));
  });

  it(`[] => []`, function () {
    const result = deleteDuplicates(toList([]));
    expect(result).toEqual(toList([]));
  });

});
