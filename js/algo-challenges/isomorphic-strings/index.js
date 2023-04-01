/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
// O(n) Time | O(n) Space
//  n = s.length, t.length
//  s.length == t.length
//  Algorithm scales linearly with input string sizes.

  return isIsomorphicOneWay(s, t) && isIsomorphicOneWay(t, s);
};

const isIsomorphicOneWay = function (a, b) {
  const map = new Map();

  for (let i = 0; i < a.length; i++) {
    if (!map.get(a[i])) {
      map.set(
        a[i],
        b[i]);
    } else if (map.get(a[i]) !== b[i]) {
      return false;
    }
  }

  return true;
};

module.exports = {
  isIsomorphic
};
