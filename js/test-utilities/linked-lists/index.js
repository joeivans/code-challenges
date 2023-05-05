class ListNode {
  constructor(val, next) {
    this.val = val !== null ? val : null;
    this.next = next ? next : null;
  }
}

class DLListNode {
  constructor(val, next, prev) {
    this.val = val !== null ? val : null;
    this.next = next ? next : null;
    this.prev = prev ? prev : null;
  }
}

class ImmutableListNode {
  constructor(val, next, strOutFunc) {
    this.val = val !== null ? val : null;
    this.next = next ? next : null;
    this.strOutFunc = strOutFunc;
  }

  printValue() {
    this.strOutFunc(`${this.val}/n`);
  }

  getNext() {
    return this.next;
  }
}

/**
 * Returns a list from an array.
 * @param {*[]} arr
 * @return {ListNode}
 */
const toList = function (arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0], null);

  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new ListNode(arr[i], null);

    curr.next = newNode;
    curr = curr.next;
  }

  return head;
};

/**
 * Returns a doubly-linked list from an array.
 * @param {*[]} arr
 * @return DLListNode
 */
const toDoublyLinkedList = function (arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const head = new DLListNode(arr[0], null, null);

  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new DLListNode(arr[i], null, null);

    curr.next = newNode;
    newNode.prev = curr;
    curr = curr.next;
  }

  return head;
};

const toImmutableList = function (arr, strOutFunc) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const head = new ImmutableListNode(arr[0], null, strOutFunc);

  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new ImmutableListNode(arr[i], null, strOutFunc);

    curr.next = newNode;
    curr = curr.next;
  }

  return head;
};

/**
 * Returns an array from a list.
 * @param {ListNode} list
 * @return {*[]}
 */
const toArray = function (list) {
  if (!list) {
    return [];
  }

  const arr = [];

  while (list) {
    arr.push(list.val);
    list = list.next;
  }

  return arr;
};

/**
 * True if list is linked in-order and the expected length.
 * @param {ListNode} list
 * @param {number} expectedLength
 * @return {boolean}
 */
const linkedListIsCorrect = function (list, expectedLength) {
  let curr = list;
  let actualLength = 0;

  while (curr) {
    curr = curr.next;
    actualLength++;
  }

  return expectedLength === actualLength;
};

/**
 * True if doubly linked list is in-order and the expected length.
 * @param list
 * @param expectedLength
 */
const doublyLinkedListIsCorrect = function (list, expectedLength) {
  let curr = list;
  let prev = null;
  let actualLengthForward = 0;
  let actualLengthBackward = 0;

  while (curr) {
    prev = curr;
    curr = curr.next;
    actualLengthForward++;
  }

  curr = prev;

  while (curr) {
    curr = curr.prev;
    actualLengthBackward++;
  }

  return expectedLength === actualLengthForward && expectedLength === actualLengthBackward;
};

module.exports = {
  toList,
  toImmutableList,
  toArray,
  toDoublyLinkedList,
  ListNode,
  DLListNode,
  ImmutableListNode,
  linkedListIsCorrect,
  doublyLinkedListIsCorrect
};
