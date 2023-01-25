const PrivateMyHashing = require('./PrivateMyHashing');


class MyHashing {
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
      return PrivateMyHashing.stringHashFunction(value) % backingArrayCapacity;
    }

    return Math.abs(Math.trunc(value)) % backingArrayCapacity;
  }
}

module.exports = MyHashing;
