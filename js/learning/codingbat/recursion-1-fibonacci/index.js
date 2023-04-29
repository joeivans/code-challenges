const fibonacci = function(n) {
  const recursive = function() {
    // base case
    if (n < 1) {
      return 0;
    }
    if (n < 3) {
      return 1;
    }

    // memoized case
    if (map.get(n) !== undefined) {
      return map.get(n);
    }

    // recursive case
    const fib = fibonacci(n - 1) + fibonacci(n - 2);
    map.set(n, fib);
    return fib;
  };

  const map = new Map();

  return recursive();
};

module.exports = {
  fibonacci
};
