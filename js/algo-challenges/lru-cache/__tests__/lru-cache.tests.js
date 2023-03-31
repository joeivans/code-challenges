const {LRUCache} = require('../index');

describe('LRU Cache', function () {
  it(`ctor(2), put(1, 1), put(2, 2), get(1)=>1, put(3, 3), get(2)=>-1, put(4, 4), get(1)=>-1, get(3)=>3, get(4)=>4`,
    function () {
      const lruCache = new LRUCache(2);
      lruCache.put(1, 1); // cache is {1=1}
      expect(lruCache.cache.size).toEqual(1);
      expect(lruCache.cache.get(1)).toEqual(1);

      lruCache.put(2, 2); // cache is {1=1, 2=2}
      expect(lruCache.cache.size).toEqual(2);
      expect(lruCache.cache.get(1)).toEqual(1);
      expect(lruCache.cache.get(2)).toEqual(2);

      expect(lruCache.get(1)).toEqual(1);

      lruCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
      expect(lruCache.cache.size).toEqual(2);
      expect(lruCache.cache.get(1)).toEqual(1);
      expect(lruCache.cache.get(3)).toEqual(3);

      expect(lruCache.get(2)).toEqual(-1);

      lruCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
      expect(lruCache.cache.size).toEqual(2);
      expect(lruCache.cache.get(4)).toEqual(4);
      expect(lruCache.cache.get(3)).toEqual(3);

      expect(lruCache.get(1)).toEqual(-1);

      expect(lruCache.get(3)).toEqual(3);

      expect(lruCache.get(4)).toEqual(4);
    });
});
