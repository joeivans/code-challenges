/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
// O(n) Time | O(1) Space
//  n = nums1.length
//  Algorithm scales linearly with first input array size.

  let l = m - 1;
  let r = n - 1;
  let i = m + n - 1;

  while (l >= 0 && r >= 0) {
    if (nums1[l] > nums2[r]) {
      nums1[i] = nums1[l];
      l--;
    } else {
      nums1[i] = nums2[r];
      r--;
    }

    i--;
  }

  while (l >= 0) {
    nums1[i] = nums1[l];
    l--;
    i--;
  }

  while (r >= 0) {
    nums1[i] = nums2[r];
    r--;
    i--;
  }
};

module.exports = {
  merge
};
