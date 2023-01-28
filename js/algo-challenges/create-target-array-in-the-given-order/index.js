/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function (nums, index) {
// O(n^2) Time | O(n) Space
//  n = input array length. Input array lengths are equal
//  Algorithm scales quadratically with input array length.

  const result = new Array(nums.length);
  const tail = {value: null, next: null};
  const head = {value: null, next: tail};

  for (let i = 0; i < nums.length; i++){
    const num = nums[i];
    const idx = index[i];
    insert(idx, num);
  }

  populateArrayFromList();

  return result;

  function insert(i, value) {
    const node = { value, next: null};
    let h = head;

    for (let j = 0; j < i; j++) h = h.next;

    let temp = h.next;
    h.next = node;
    node.next = temp;
  }

  function populateArrayFromList() {
    let h = head.next;

    for (let i = 0; i < result.length; i++) {
      result[i] = h.value;
      h = h.next;
    }
  }
};

module.exports = {
  createTargetArray
};
