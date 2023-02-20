class TwoSum {
  #map = new Map();

  /**
   * @param {number} number
   * @return {void}
   */
  add(number) {
    // O(1) Time | O(n) Space
    //  n = this.#map.size
    //  Algorithm does not depend on input size.

    this.#map.set(
      number,
      (this.#map.get(number) || 0) + 1);
  };

  /**
   * @param {number} value
   * @return {boolean}
   */
  find(value) {
    // O(n) Time | O(1) Space
    //  n = this.#map.size
    //  Algorithm scales linearly with input size.

    for (const key of this.#map.keys()) {
      const complement = value - key;

      // complement is this key and there are 2 in table
      if (complement === key && this.#map.get(complement) > 1) {
        return true;
      }
      // complement is not this key and direct complment match
      else if (complement !== key && this.#map.has(complement)) {
        return true;
      }
    }

    return false;
  };

};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

module.exports = TwoSum;
