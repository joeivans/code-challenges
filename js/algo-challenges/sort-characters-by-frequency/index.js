/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
// O(n) Time | O(n) Space
//  n = s.length
//  Algorithm scales linearly with input string size.

  const charFrequencyMap = new Map();
  const groupedFrequencyMap = new Map();
  const outputCharArray = [];

  for (const c of s) {
    charFrequencyMap.set(
      c,
      charFrequencyMap.get(c) + 1 || 1);
  }

  let maxFrequency = 1;
  for (const [char, freq] of charFrequencyMap) {
    if (groupedFrequencyMap.has(freq)) {
      groupedFrequencyMap.get(freq).push(char);
    } else {
      groupedFrequencyMap.set(
        freq,
        [char]);
    }

    if (freq > maxFrequency) {
      maxFrequency = freq;
    }
  }

  for (let i = maxFrequency; i > 0; i--) {
    if (!groupedFrequencyMap.has(i)) {
      continue;
    }

    for (const char of groupedFrequencyMap.get(i)) {
      for (let j = i; j > 0; j--) {
        outputCharArray.push(char);
      }
    }
  }

  return outputCharArray.join('');
};

module.exports = {
  frequencySort
};
