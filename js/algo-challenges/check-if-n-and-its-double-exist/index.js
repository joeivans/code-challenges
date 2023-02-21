/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
// O(n) Time | O(n) Space
//  n = arr.length
//  Algorithm scales linearly with input array size.

  const set = new Set();

  // O(n) add each arr element to set
  //  - check if num*2 complement exists in set
  //    - num*2 complement is what we need to find
  //  - check if num/2 complement exists in set
  //    - num/2 complement means current num is the num*2 complement
  //      of a previous num that's in the set from before this iteration
  for (const num of arr) {
    const complementDouble = num * 2;
    const complementHalf = num / 2;

    if (set.has(complementDouble) || set.has(complementHalf)) {
      return true;
    } else {
      set.add(num);
    }
  }

  return false;
};

module.exports = {
  checkIfExist
};
