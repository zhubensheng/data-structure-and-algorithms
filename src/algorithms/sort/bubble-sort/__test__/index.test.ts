import bubbleSort from '../index';

test('bubble sort test', () => {
  expect(bubbleSort([2, 1, 4, 5, 2, 20932, 1])).toBe([1, 1, 2, 2, 4, 5, 20932]);
});
