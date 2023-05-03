const {MyDoublyLinkedList} = require('../MyDoublyLinkedList');

describe('Design Doubly Linked List', function () {
  it('should construct new object', function () {
    const list = new MyDoublyLinkedList();
    const list2 = new MyDoublyLinkedList();

    expect(list.length).toEqual(0);
    expect(list.length).toEqual(list2.length);
    !expect(list).toEqual(list2);
  });

  it('should add a new node with val at head', function () {
    const list = new MyDoublyLinkedList();

    list.addAtHead(1);
    expect(list.head.next.val).toEqual(1);
    expect(list.head.next.next).toEqual(list.tail);
    expect(list.length).toEqual(1);
    list.addAtHead(2);
    expect(list.head.next.val).toEqual(2);
    expect(list.head.next.next.val).toEqual(1);
    expect(list.length).toEqual(2);
  });

  it('should return the indexth list node, -1 otherwise', function () {
    const list = new MyDoublyLinkedList();

    list.addAtHead(1);
    list.addAtHead(2);
    // -1|<->2<->1<->|-1
    expect(list.get(1)).toEqual(1);
    expect(list.get(0)).toEqual(2);
    expect(list.get(-1)).toEqual(-1);
    expect(list.get(2)).toEqual(-1);
    list.addAtHead(3);
    expect(list.get(3)).toEqual(-1);
    expect(list.get(2)).toEqual(1);
    expect(list.get(1)).toEqual(2);
    expect(list.get(0)).toEqual(3);
    list.addAtHead(4);
    expect(list.get(4)).toEqual(-1);
    expect(list.get(3)).toEqual(1);
    expect(list.get(2)).toEqual(2);
    expect(list.get(1)).toEqual(3);
    expect(list.get(0)).toEqual(4);
  });

  it('should append a node of val as the last list element', function () {
    const list = new MyDoublyLinkedList();

    list.addAtTail(1);
    expect(list.head.next.val).toEqual(1);
    expect(list.length).toEqual(1);

    list.addAtTail(2);
    expect(list.head.next.next.val).toEqual(2);
    expect(list.length).toEqual(2);
  });

  it('should add a node before indexth node or append to list if last', function () {
    const list = new MyDoublyLinkedList();

    list.addAtIndex(0, 2);
    expect(list.head.next.val).toEqual(2);
    expect(list.length).toEqual(1);

    list.addAtIndex(0, 1);
    expect(list.head.next.val).toEqual(1);
    expect(list.length).toEqual(2);

    list.addAtIndex(1, 0);
    expect(list.length).toEqual(3);
    // -1|->1<->0<->2<-|-1
    expect(list.head.next.val).toEqual(1);
    expect(list.head.next.next.val).toEqual(0);
    expect(list.head.next.next.next.val).toEqual(2);
    expect(list.head.next.next.next.next).toEqual(list.tail);
    expect(list.tail.prev.val).toEqual(2);
    expect(list.tail.prev.prev.val).toEqual(0);
    expect(list.tail.prev.prev.prev.val).toEqual(1);
    expect(list.tail.prev.prev.prev.prev).toEqual(list.head);
  });

  it('should delete indexth node from list if index is valid', function () {
    const list = new MyDoublyLinkedList();

    list.deleteAtIndex(0);
    expect(list.head.next).toEqual(list.tail);
    expect(list.length).toEqual(0);

    list.addAtHead(1);
    list.deleteAtIndex(0);
    expect(list.head.next).toEqual(list.tail);
    expect(list.length).toEqual(0);

    list.addAtIndex(0, 1);
    list.addAtIndex(1, 0);
    list.addAtIndex(2, 2);
    list.deleteAtIndex(1);
    // -1|<->1<->2<->|-1
    expect(list.length).toEqual(2);
    expect(list.head.next.val).toEqual(1);
    expect(list.head.next.next.val).toEqual(2);
    expect(list.head.next.next.next).toEqual(list.tail);
    expect(list.tail.prev.val).toEqual(2);
    expect(list.tail.prev.prev.val).toEqual(1);
    expect(list.tail.prev.prev.prev).toEqual(list.head);
  });
});
