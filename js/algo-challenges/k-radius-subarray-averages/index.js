/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const getAverages = function (nums, k) {
// O(n) Time | O(n) Space, O(1) Additional
//  n = nums.length
//  Algorithm scales linearly with input array size.

  const n = nums.length;

  const answer = new Array(n).fill(-1);

  let sum = 0;
  const rightWindowBound = k + k;
  const windowSize = rightWindowBound + 1;
  // first fixed window less one
  //
  for (let r = 0; r < n && r < rightWindowBound; r++) {
    sum += nums[r];
  }
  // next windows
  //
  for (let l = 0, r = rightWindowBound; r < n; r++, l++) {
    // grow window
    //
    sum += nums[r];

    // update answer
    //
    const offset = k + l;
    answer[offset] = getAverage(sum, windowSize);

    // shrink window
    //
    sum -= nums[l];
  }

  return answer;
};

const getAverage = function (sum, n) {
  return Math.trunc(sum / n);
};

module.exports = {
  getAverages
};
