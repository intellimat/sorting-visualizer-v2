import { MaxInteger, MinInteger } from "./config";

export function getRandomArrayOfNumbers(size: number): number[] {
  const newArray = [];

  for (let i = 0; i < size; i++) {
    const value = _getRandomInteger(MinInteger, MaxInteger);
    newArray.push(value);
  }
  return newArray;
}

// export function swap(array: number[], i: number, j: number) {
//   if (i >= 0 && j >= 0 && i < array.length && j < array.length) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   } else console.log("\nCannot swap, indeces out of range.\n");
// }

function _getRandomInteger(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
