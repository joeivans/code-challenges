/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = function (nums, diff) {
// O(n) Time | O(1) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.
//
// NOTES:
//  This one's funky. Because the input is strictly increasing, we can use a
//  sliding window with as many pointers as we want as long as they are also
//  strictly increasing.
//
//  This means that for i, j, k:
//    - They will each never exceed n.
//    - They will each never be assigned to a smaller value than any previous.
//
//  Therefore, the work done in each nested loop is so amortized as constant.
//  The maximum number of operations in the entire algorithm will never exceed
//  3n because there are 3 variables sliding across a range of n, which
//  summarizes to O(n) Time.

  const n = nums.length;

  let answer = 0;

  for (let i = 0, j = 1; j < n - 1; j++) {
    // shrink left side to fit constraint
    while (i < j - 1 && nums[j] - nums[i] > diff) {
      i++;
    }

    if (nums[j] - nums[i] === diff) {
      // grow right side to fit constraint
      for (let k = j + 1; k < n && nums[k] - nums[j] <= diff; k++) {
        // update answer
        if (nums[k] - nums[j] === diff) {
          answer++;
        }
      }
    }
  }

  return answer;
};

module.exports = {
  arithmeticTriplets
};
