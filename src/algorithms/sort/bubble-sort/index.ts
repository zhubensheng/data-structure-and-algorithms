/**
 * 冒泡排序
 * @param xs 待排序的数组
 */
export default function bubbleSort<T>(xs: T[]): T[] {
  const n = xs.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (xs[j] > xs[j + 1]) {
        // swap
        const temp = xs[j];
        xs[j] = xs[j + 1];
        xs[j + 1] = temp;
      }
    }
  }

  return xs;
}
