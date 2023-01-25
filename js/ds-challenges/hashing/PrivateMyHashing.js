class PrivateMyHashing {
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
}

module.exports = PrivateMyHashing;
