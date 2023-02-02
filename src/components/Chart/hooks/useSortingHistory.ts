import { Algorithms } from "../../../sorting-algorithms";
import { AlgorithmName } from "../../../sorting-algorithms/types";

function useSortingHistory() {
  const sort = (algorithmName: AlgorithmName, array: number[]): number[][] => {
    const newArray = [...array];
    const history = Algorithms[algorithmName](newArray);
    return history;
  };

  return { sort };
}

export default useSortingHistory;
