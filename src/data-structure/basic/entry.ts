/**
 * Data entry
 */
class Entry<K, V> implements IEntry<K, V> {
  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  key: K;

  value: V;
}
