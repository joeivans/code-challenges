const {removeLinkedListHead} = require('../index');
const {toList} = require('../../../../../test-utilities/linked-lists');

describe('Remove Linked List Head', function () {
  it(`[1, 2, 3] => [2, 3]`, function () {
    const head = toList([1, 2, 3]);
    const result = removeLinkedListHead(head);
    expect(result).toEqual(toList([2, 3]));
  });

  it(`[1, 2] => [2]`, function () {
    const head = toList([1, 2]);
    const result = removeLinkedListHead(head);
    expect(result).toEqual(toList([2]));
  });

  it(`[1] => []`, function () {
    const head = toList([1]);
    const result = removeLinkedListHead(head);
    expect(result).toEqual(toList([]));
  });

  it(`[] => []`, function () {
    const head = toList([]);
    const result = removeLinkedListHead(head);
    expect(result).toEqual(toList([]));
  });
});
