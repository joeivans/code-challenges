const BASE_CASE = 2;

const factorial = function (n) {
  // O(n) Time | O(n) Space
  //  Algorithm scales linearly with input value.

  // base case
  if (n < BASE_CASE) {
    return 1;
  }

  // recursive case
  return n * factorial(n - 1);
};

module.exports = {
  factorial
};
