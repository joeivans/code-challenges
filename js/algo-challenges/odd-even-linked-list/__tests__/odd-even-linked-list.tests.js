const {oddEvenList} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Odd Even Linked List', function () {

  it(`[1,2,3,4,5] => [1,3,5,2,4]`, function () {
    const result = oddEvenList(toList([1,2,3,4,5]));
    expect(result).toEqual(toList([1,3,5,2,4]));
  });

  it(`[2,1,3,5,6,4,7] => [2,3,6,7,1,5,4]`, function () {
    const result = oddEvenList(toList([2,1,3,5,6,4,7]));
    expect(result).toEqual(toList([2,3,6,7,1,5,4]));
  });

  it(`[1,2,3,4] => [1,3,2,4]`, function () {
    const result = oddEvenList(toList([1,2,3,4]));
    expect(result).toEqual(toList([1,3,2,4]));
  });

  it(`[] => []`, function () {
    const result = oddEvenList(toList([]));
    expect(result).toEqual(toList([]));
  });

});
