import { swap } from "../utils";

export function heapSort(array: number[]) {
  buildMaxHeap(array);
  let heap_size = array.length;

  for (let i = 0; i < array.length - 1; i++) {
    swap(array, 0, heap_size - 1);
    heap_size--;
    siftDown(array, heap_size, 0);
  }
}

function buildMaxHeap(array: number[]) {
  const heapSize = array.length;
  const fromIndex = Math.floor((array.length - 1) / 2); // last non-leaf node
  for (let i = fromIndex; i >= 0; i--) siftDown(array, heapSize, i);
}

function siftDown(array: number[], heapSize: number, i: number) {
  const leftChildIndex = i * 2 + 1;
  const leftChild = array[leftChildIndex];

  const rightChildIndex = i * 2 + 2;
  const rightChild = array[rightChildIndex];

  let max = array[i];
  let maxIndex = i;

  if (leftChildIndex < heapSize && array[leftChildIndex] > max) {
    max = leftChild;
    maxIndex = leftChildIndex;
  }

  if (rightChildIndex < heapSize && array[rightChildIndex] > max) {
    max = rightChild;
    maxIndex = rightChildIndex;
  }

  if (maxIndex !== i) {
    swap(array, i, maxIndex);
    siftDown(array, heapSize, maxIndex);
  }
}
