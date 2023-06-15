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
//    - They will each never be assigned the same value more than once.
//
//  Therefore, the work done in each nested loop is so amortized as constant.
//  The maximum number of operations in the entire algorithm will never exceed
//  3n because there are 3 variables sliding across a range of n, which
//  summarizes to O(n) Time.

  const n = nums.length;
  const minN = 3;
  const maxN = 300;

  let answer = 0;

  let i = 0;
  let j = 1;
  let k = 2;

  // entire window
  while (i < n - 2) {
    // left side
    while (i < j && nums[j] - nums[i] !== diff) {
      // grow left side gte constraint
      while (j < n - 1 && nums[j] - nums[i] < diff) {
        j++;
      }
      // shrink left side to equal constraint
      while (i < j && nums[j] - nums[i] > diff) {
        i++;
      }
    }

    k = j + 1;

    // right side
    while (k < n && j < k && nums[k] - nums[j] !== diff) {
      // grow right side gte constraint
      while (k < n && nums[k] - nums[j] < diff) {
        k++;
      }
      // shrink right side to equal constraint
      while (j < k && nums[k] - nums[j] > diff) {
        j++;
      }
    }

    // update answer
    if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
      answer++;
    }

    i++;
  }

  return answer;
};

module.exports = {
  arithmeticTriplets
};
