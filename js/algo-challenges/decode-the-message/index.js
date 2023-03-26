/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function (key, message) {
// O(m + n) Time | O(m) Space
//  m = message.length
//  n = key.length
//  Algorithm scales linearly with input string sizes.
//  NOTE:
//    Key length varies and is processed as such... but only a constant 26
//    chars are used by the algorithm.
//    The hash map scales by the key size so it also therefore a constant.
//    The message itself can vary so therefore that cannot be bounded by
//    the constant key size.

  const outputCharArray = [];
  const map = new Map([[' ', ' ']]);

  let alphabetIndex = 0;

  for (const c of key) {
    if (!map.has(c)) {
      map.set(
        c,
        alphabet[alphabetIndex++]);
    }
  }

  for (const c of message) {
    outputCharArray.push(
      map.get(c));
  }

  return outputCharArray.join('');
};

const alphabet = [
  'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'];

module.exports = {
  decodeMessage
};
