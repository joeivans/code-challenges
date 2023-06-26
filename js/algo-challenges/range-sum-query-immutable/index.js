/**
 * Constructor: O(n) Time | O(n) Space | n = nums.length
 * sumRange: O(1) Time | O(1) Space
 */
class NumArray {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    const n = nums.length;

    this.nums = nums;
    this.prefixSum = new Array(n);

    this.prefixSum[0] = this.nums[0];
    for (let i = 1; i < n; i++) {
      this.prefixSum[i] = this.prefixSum[i - 1] + this.nums[i];
    }
  }

  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    return this.prefixSum[right] - this.prefixSum[left] + this.nums[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

module.exports = {
  NumArray
};
