const TENS_PLACE = 10;
const TARGET_DIGIT = 7;

const count7 = function (n) {
  // O(n) Time | O(n) Space
  //  Algorithm scales linearly with input value.

  // base case
  if (n < TENS_PLACE) {

    if (n === TARGET_DIGIT) {
      return 1;
    }

    return 0;
  }

  // recursive case
  return count7(n % TENS_PLACE) + count7((n / TENS_PLACE) >> 0);
};

module.exports = {
  count7
};
