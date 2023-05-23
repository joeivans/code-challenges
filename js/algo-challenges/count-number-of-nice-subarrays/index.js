/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = function (nums, k) {
// O(n) Time | O(n) Space
//  n = nums.length
//  Algorithm scales linearly with input array size.

  let answer = 0;
  const map = new Map();

  // preset 0: 1 for self, if exists in nums
  map.set(0, 1);

  let curr = 0;
  for (const num of nums) {
    // update curr
    //
    if (isOdd(num)) {
      curr += 1;
    }

    // update answer by checking map for curr - k value
    //
    if (map.get(curr - k)) {
      answer += map.get(curr - k);
    }

    // update map by add/update curr
    //
    map.set(
      curr,
      map.get(curr) + 1 || 1
    );
  }

  return answer;
};

const isOdd = function(num) {
  return num % 2 === 1;
};

module.exports = {
  numberOfSubarrays
};
