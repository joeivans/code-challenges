const MyLinkedList = require('../MyLinkedList');

describe('MyLinkedList', function () {
  it('should construct new object', function () {
    const list = new MyLinkedList();
    const list2 = new MyLinkedList();

    !expect(list).toEqual(list2);
  });

  it('should add a new node with val at head', function () {
    const list = new MyLinkedList();

    list.addAtHead(123);
    expect(list.head.next.val).toEqual(123);
    expect(list.head.next.next).toEqual(list.tail);
  });

  it('should return the indexth list node, -1 otherwise', function () {
    const list = new MyLinkedList();

    list.addAtHead(123);
    list.addAtHead(456);
    expect(list.get(1)).toEqual(123);
    expect(list.get(0)).toEqual(456);
    expect(list.get(-1)).toEqual(-1);
    expect(list.get(2)).toEqual(-1);
  });

  it('should append a node of val as the last list element', function () {
    const list = new MyLinkedList();

    list.addAtTail(123);
    expect(list.head.next.val).toEqual(123);

    list.addAtTail(456);
    expect(list.head.next.next.val).toEqual(456);
  });

  it('should add a node before indexth node or append to list if last', function () {
    const list = new MyLinkedList();

    list.addAtIndex(0, 456);
    expect(list.head.next.val).toEqual(456);

    list.addAtIndex(0, 123);
    expect(list.head.next.val).toEqual(123);

    list.addAtIndex(1, 0);
    expect(list.head.next.val).toEqual(123);
    expect(list.head.next.next.val).toEqual(0);
    expect(list.head.next.next.next.val).toEqual(456);
    expect(list.head.next.next.next.next).toEqual(list.tail);
  });

  it('should delete indexth node from list if index is valid', function () {
    const list = new MyLinkedList();

    list.deleteAtIndex(0);
    expect(list.head.next).toEqual(list.tail);

    list.addAtHead(123);
    list.deleteAtIndex(0);
    expect(list.head.next).toEqual(list.tail);

    list.addAtIndex(0, 123);
    list.addAtIndex(1, 0);
    list.addAtIndex(2, 456);
    list.deleteAtIndex(1);
    expect(list.head.next.val).toEqual(123);
    expect(list.head.next.next.val).toEqual(456);
    expect(list.head.next.next.next).toEqual(list.tail);
  });
});
