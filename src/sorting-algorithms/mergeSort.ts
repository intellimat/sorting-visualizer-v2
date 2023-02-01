export function mergeSort(array: number[]) {
  const history: number[][] = [];
  if (Array.isArray(array))
    mergeSort_recursive(array, 0, array.length - 1, history);
  return history;
}

function mergeSort_recursive(
  array: number[],
  left: number,
  right: number,
  history: number[][]
) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);

    mergeSort_recursive(array, left, mid, history);
    mergeSort_recursive(array, mid + 1, right, history);

    merge(array, left, mid, right, history);
  }
}

function merge(
  array: number[],
  l: number,
  mid: number,
  r: number,
  history: number[][]
) {
  const A = [];
  const B = [];

  for (let i = l; i <= mid; i++) A.push(array[i]);

  for (let j = mid + 1; j <= r; j++) B.push(array[j]);

  let i = 0; // i points to the first element of the left side array
  let j = 0; // j points to the first element of the right side array
  let k;

  for (k = l; i < A.length && j < B.length; k++) {
    history.push([...array]);
    if (A[i] <= B[j]) {
      array[k] = A[i];
      i++;
    } else {
      array[k] = B[j];
      j++;
    }
    history.push([...array]);
  }

  // writing the remaining elements if the two arrays have different size
  while (k <= r && i < A.length) {
    array[k] = A[i];

    history.push([...array]);

    i++;
    k++;
  }

  // writing the remaining elements if the two arrays have different size
  while (k <= r && j < B.length) {
    array[k] = B[j];

    history.push([...array]);

    j++;
    k++;
  }
}
