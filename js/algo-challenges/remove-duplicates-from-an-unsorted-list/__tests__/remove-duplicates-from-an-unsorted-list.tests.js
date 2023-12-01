const {deleteDuplicatesUnsorted} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Remove Duplicates From an Unsorted List', function () {

  it(`[1,2,3,2] => [1,3]`, function () {
    const result = deleteDuplicatesUnsorted(toList([1, 2, 3, 2]));
    expect(result).toEqual(toList([1, 3]));
  });

  it(`[2,1,1,2] => []`, function () {
    const result = deleteDuplicatesUnsorted(toList([2, 1, 1, 2]));
    expect(result).toEqual(toList([]));
  });

  it(`[3,2,2,1,3,2,4] => [1,4]`, function () {
    const result = deleteDuplicatesUnsorted(toList([3, 2, 2, 1, 3, 2, 4]));
    expect(result).toEqual(toList([1, 4]));
  });

  it(`[3] => [3]`, function () {
    const result = deleteDuplicatesUnsorted(toList([3]));
    expect(result).toEqual(toList([3]));
  });

});
