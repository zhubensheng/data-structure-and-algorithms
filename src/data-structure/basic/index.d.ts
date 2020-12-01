interface IOperator<T> {
  equals(op1: T, op2: T): boolean;

  gt(op1: T, op2: T): boolean;

  lt(op1: T, op2: T): boolean;
}

interface IEntry<K, V> {
  key: K;
  value: V;
}
