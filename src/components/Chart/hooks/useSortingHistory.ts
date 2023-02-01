import {
  mergeSort,
  heapSort,
  quickSort,
} from "../../../sorting-algorithms/index";

function useSortingHistory() {
  const sort = (algorithmName: string, array: number[]): number[][] => {
    const newArray = [...array];
    let sortingAlgorithm;
    switch (algorithmName) {
      case "mergesort":
        sortingAlgorithm = mergeSort;
        break;
      case "heapsort":
        sortingAlgorithm = heapSort;
        break;
      case "quicksort":
        sortingAlgorithm = quickSort;
        break;
      default:
        sortingAlgorithm = mergeSort;
    }
    const history = sortingAlgorithm(newArray);
    return history;
  };

  return { sort };
}

export default useSortingHistory;
