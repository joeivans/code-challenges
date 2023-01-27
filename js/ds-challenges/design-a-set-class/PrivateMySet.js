const MyHashing = require('../hashing/MyHashing');


class PrivateMySet {
  static MyHashingDelegate = MyHashing;

  static doubleCapacity(oldBackingArray) {
    const oldBackingArrayLength = oldBackingArray.length;
    const newBackingArray = new Array(oldBackingArrayLength + oldBackingArrayLength);

    for (let i = 0; i < newBackingArray.length; i++) {
      newBackingArray[i] = [];
    }

    for (const bucket of oldBackingArray) {
      for (const item of bucket) {
        const hashCode = MyHashing.getHash(
          item,
          newBackingArray.length);

        const bucket = newBackingArray[hashCode];
        bucket.push(item);
      }
    }

    return newBackingArray;
  }
}

module.exports = PrivateMySet;
