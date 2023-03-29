/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const anagramMappings = function (nums1, nums2) {
// O(n) Time | O(n) Space
//  n = nums2.length
//  Algorithm scales linearly with input arrays' size.

  const answer = [];
  const map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      map
        .get(nums2[i])
        .push(i);
    } else {
      map.set(
        nums2[i],
        [i]);
    }
  }

  for (const num of nums1) {
    answer.push(
      map
        .get(num)
        .pop());
  }

  return answer;
};

module.exports = {
  anagramMappings
};
