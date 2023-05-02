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

module.exports = {
  toList,
  toImmutableList,
  toArray,
  ListNode,
  DLListNode,
  ImmutableListNode
};
