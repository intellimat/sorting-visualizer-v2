import { swap } from "../utils";

export function heapSort(array: number[]): number[][] {
  const history: number[][] = [];
  buildMaxHeap(array, history);
  let heap_size = array.length;

  for (let i = 0; i < array.length - 1; i++) {
    history.push([...array]);
    swap(array, 0, heap_size - 1);
    history.push([...array]);
    heap_size--;
    siftDown(array, heap_size, 0, history);
  }

  return history;
}

function buildMaxHeap(array: number[], history: number[][]) {
  const heapSize = array.length;
  const fromIndex = Math.floor((array.length - 1) / 2); // last non-leaf node
  for (let i = fromIndex; i >= 0; i--) siftDown(array, heapSize, i, history);
}

function siftDown(
  array: number[],
  heapSize: number,
  i: number,
  history: number[][]
) {
  const leftChildIndex = i * 2 + 1;
  const leftChild = array[leftChildIndex];

  const rightChildIndex = i * 2 + 2;
  const rightChild = array[rightChildIndex];

  let max = array[i];
  let maxIndex = i;

  if (leftChildIndex < heapSize && array[leftChildIndex] > max) {
    history.push([...array]);
    max = leftChild;
    maxIndex = leftChildIndex;
  }

  if (rightChildIndex < heapSize && array[rightChildIndex] > max) {
    history.push([...array]);
    max = rightChild;
    maxIndex = rightChildIndex;
  }

  if (maxIndex !== i) {
    swap(array, i, maxIndex);
    history.push([...array]);
    siftDown(array, heapSize, maxIndex, history);
  }
}
