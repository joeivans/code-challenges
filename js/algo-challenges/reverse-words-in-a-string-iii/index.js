/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
// O(n) Time | O(n) Space
//  n = s.length
//  Algorithm scales linearly with input string size.

  // split by string empty
  const answer = s.split('');

  // find spaces
  for (let l = 0, r = 0; r < answer.length; r++) {

    // remove chars
    if (answer[r] === ' ') {
      reverseChars(l, r - 1);
      l = r + 1;
    } else if (r === answer.length - 1) {
      reverseChars(l, r);
    }
  }

  // return joined array by string empty
  return answer.join('');

  function reverseChars(l, r) {
    while (l < r) {
      const temp = answer[l];
      answer[l] = answer[r];
      answer[r] = temp;

      l++;
      r--;
    }
  }
};

module.exports = {
  reverseWords
};
