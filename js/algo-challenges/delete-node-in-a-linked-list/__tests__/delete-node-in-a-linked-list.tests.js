const {deleteNode} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Delete Node in a Linked List', function () {
  it(`([4, 5, 1, 9], 5) => [4, 1, 9]`, function () {
    const head = toList([4, 5, 1, 9]);
    deleteNode(head.next);
    expect(head).toEqual(toList([4, 1, 9]));
  });

  it(`([4, 5, 1, 9], 1) => [4, 5, 9]`, function () {
    const head = toList([4, 5, 1, 9]);
    deleteNode(head.next.next);
    expect(head).toEqual(toList([4, 5, 9]));
  });

  it(`([4, 5, 1, 9, 7], 5) => [4, 1, 9, 7]`, function () {
    const head = toList([4, 5, 1, 9, 7]);
    deleteNode(head.next);
    expect(head).toEqual(toList([4, 1, 9, 7]));
  });
});
