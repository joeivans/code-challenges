class MyHashing {
  /**
   * String hash function.
   * @param {string} value
   * @returns {number}
   */
  static stringHashFunction(value) {
    let hashCode = 0;

    for (let i = 0; i < value.length; i++) {
      hashCode += value.charCodeAt(i);
    }

    return hashCode;
  }

  /**
   * Get hash code of a value.
   * Backing array capacity is required to return a valid index.
   * @param value
   * @param backingArrayCapacity
   * @returns {number}
   */
  static getHash(value, backingArrayCapacity) {
    if (backingArrayCapacity < 1) {
      return 0;
    }

    if (typeof (value) === typeof ('')) {
      return MyHashing.stringHashFunction(value) % backingArrayCapacity;
    }

    return Math.abs(Math.trunc(value)) % backingArrayCapacity;
  }
}

module.exports = MyHashing;
