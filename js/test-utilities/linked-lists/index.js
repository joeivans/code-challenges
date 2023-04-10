class ListNode {
  constructor(val, next) {
    this.val = val ? val : null;
    this.next = next ? next : null;
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

  const head = {
    val: arr[0],
    next: null
  };

  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = {
      val: arr[i],
      next: null
    };

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
  toArray,
  ListNode
};
