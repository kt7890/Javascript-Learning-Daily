class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);

    // Move key to end (most recently used)
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.limit) {
      // Remove least recently used (first key)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, value);
  }
}

// Test
const lru = new LRUCache(2);

lru.put(1, "A");
lru.put(2, "B");
console.log(lru.get(1)); // A

lru.put(3, "C"); // removes key 2
console.log(lru.get(2)); // -1
