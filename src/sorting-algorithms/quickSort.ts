import { swap } from "../utils";

// Optimized quickSort! The pivot is randomized we partition each time the array into three sets!
export function quickSort(array: number[]) {
  if (Array.isArray(array)) quickSort_recursive(array, 0, array.length - 1);
}

function quickSort_recursive(array: number[], left: number, right: number) {
  if (left < right) {
    randomizePivot(array, left, right);

    const indeces = partition(array, left, right);
    const m1 = indeces.m1;
    const m2 = indeces.m2;

    quickSort_recursive(array, left, m1);
    quickSort_recursive(array, m2, right);
  }
}

function partition(array: number[], left: number, right: number) {
  const pivot = array[right];

  let i = left;
  let k = right;
  let j = left;

  while (j <= k) {
    if (array[j] < pivot) {
      swap(array, i, j);
      i++;
      j++;
    } else if (array[j] > pivot) {
      swap(array, j, k);
      k--;
    } else j++;
  }

  const indeces = {
    m1: i - 1,
    m2: k + 1,
  };

  return indeces;
}

function randomizePivot(array: number[], left: number, right: number) {
  const mid = Math.floor((left + right) / 2);

  const first = array[left];
  const last = array[right];
  const median = array[mid];

  let swapping_index = mid;

  if ((first > median && first < last) || (first < median && first > last))
    swapping_index = left;
  else if ((last < median && last > first) || (last > median && last < first))
    swapping_index = right;
  else if (
    (median < first && median > last) ||
    (median > first && median < last)
  )
    swapping_index = mid;
  else if (median === first) swapping_index = right;
  else if (median === last) swapping_index = left;

  swap(array, swapping_index, right);
}
