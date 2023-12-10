const {middleNode} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Middle of the Linked List', function () {

  it(`[1,2,3,4,5] => 3`, function () {
    // arrange
    const first = toList([1, 2]);
    const last = toList([3, 4, 5]);
    first.next.next = last;

    // act
    const result = middleNode(first);

    // assert
    expect(result).toEqual(last);
  });

  it(`[1,2,3,4,5,6] => 4`, function () {
    // arrange
    const first = toList([1, 2, 3]);
    const last = toList([4, 5, 6]);
    first.next.next.next = last;

    // act
    const result = middleNode(first);

    // assert
    expect(result).toEqual(last);
  });

});
