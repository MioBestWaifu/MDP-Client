export class Dictionary<K, V> implements Iterable<[K, V]>{
    _keys: K[] = [];
    _values: V[] = [];
  
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

    get values(): V[] {
      return this._values;
    }

    set values(value: V[]) {
      console.log('values are being set:', value);
      console.trace(); // This will log a stack trace, showing where the setter was called from
      this._values = value;
    }

    get keys(): K[] {
      return this._keys;
    }

    set keys(value: K[]) {
      console.log('keysare being set:', value);
      console.trace(); // This will log a stack trace, showing where the setter was called from
      this._keys = value;
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