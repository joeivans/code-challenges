const {linkedListIsCorrect, toList, doublyLinkedListIsCorrect, toDoublyLinkedList} = require('../index');

describe('Linked List Utilities', function () {

  describe(`Linked List Is Correct`, function () {
    it(`[]`, function () {
      const list = toList([]);
      expect(linkedListIsCorrect(list, 0)).toEqual(true);
      expect(linkedListIsCorrect(list, 1)).toEqual(false);
    });

    it(`[1]`, function () {
      const list = toList([1]);
      expect(linkedListIsCorrect(list, 1)).toEqual(true);
      expect(linkedListIsCorrect(list, 2)).toEqual(false);
      expect(linkedListIsCorrect(list, 0)).toEqual(false);
    });

    it(`[1,2,3,4]`, function () {
      const list = toList([1, 2, 3, 4]);
      expect(linkedListIsCorrect(list, 4)).toEqual(true);
      expect(linkedListIsCorrect(list, 5)).toEqual(false);
      expect(linkedListIsCorrect(list, 3)).toEqual(false);
    });
  });

  describe(`Doubly Linked List Is Correct`, function () {
    it(`[]`, function () {
      const list = toDoublyLinkedList([]);
      expect(doublyLinkedListIsCorrect(list, 0)).toEqual(true);
      expect(doublyLinkedListIsCorrect(list, 1)).toEqual(false);
    });

    it(`[1]`, function () {
      const list = toDoublyLinkedList([1]);
      expect(doublyLinkedListIsCorrect(list, 1)).toEqual(true);
      expect(doublyLinkedListIsCorrect(list, 2)).toEqual(false);
      expect(doublyLinkedListIsCorrect(list, 0)).toEqual(false);
    });

    it(`[1,2,3,4]`, function () {
      const list = toDoublyLinkedList([1, 2, 3, 4]);
      expect(doublyLinkedListIsCorrect(list, 4)).toEqual(true);
      expect(doublyLinkedListIsCorrect(list, 5)).toEqual(false);
      expect(doublyLinkedListIsCorrect(list, 3)).toEqual(false);
    });
  });
});
