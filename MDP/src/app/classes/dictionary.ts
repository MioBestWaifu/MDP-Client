export class Dictionary<K, V> implements Iterable<[K, V]>{
    keys: K[] = [];
    values: V[] = [];
  
    Get(key: K): V | null {
      const index = this.keys.indexOf(key);
      if (index > -1) {
        return this.values[index];
      }
      return null;
    }
  
    Add(key: K, value: V): void {
      const index = this.keys.indexOf(key);
      if (index > -1) {
        this.keys[index] = key;
        this.values[index] = value;
      } else {
        this.keys.push(key);
        this.values.push(value);
      }
    }

    [Symbol.iterator](): Iterator<[K, V]> {
      let index = -1;
  
      return {
        next: () => {
          index++;
          if (index < this.keys.length) {
            return { value: [this.keys[index], this.values[index]], done: false };
          } else {
            return { value: null, done: true };
          }
        }
      };
    }
  }