const DIGIT_UPPER_BOUND = 10;

const sumDigits = function (n) {
  // O(n) Time | O(n) Space
  //  Algorithm scales linearly with input value.

  // base case
  if (n < DIGIT_UPPER_BOUND) {
    return n;
  }

  // recursive case
  return n % DIGIT_UPPER_BOUND + sumDigits((n / DIGIT_UPPER_BOUND) >> 0);
};

module.exports = {
  sumDigits
};
