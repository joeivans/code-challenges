const {removeLinkedListTail} = require('../index');
const {toList} = require('../../../../../test-utilities/linked-lists');

describe('Remove Linked List Tail', function () {
  it(`[1, 2, 3] => [1, 2]`, function () {
    const head = toList([1, 2, 3]);
    const result = removeLinkedListTail(head);
    expect(result).toEqual(toList([1, 2]));
  });

  it(`[1, 2] => [1]`, function () {
    const head = toList([1, 2]);
    const result = removeLinkedListTail(head);
    expect(result).toEqual(toList([1]));
  });

  it(`[1] => []`, function () {
    const head = toList([1]);
    const result = removeLinkedListTail(head);
    expect(result).toEqual(toList([]));
  });

  it(`[] => []`, function () {
    const head = toList([]);
    const result = removeLinkedListTail(head);
    expect(result).toEqual(toList([]));
  });
});
