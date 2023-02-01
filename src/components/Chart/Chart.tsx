import { Box } from "@mui/material";
import React, { useState } from "react";
import { InitialArraySize } from "../../config";
import { getRandomArrayOfNumbers } from "../../utils";
import ArrayBar from "./ArrayBar/ArrayBar";
import useCustomEvents from "./hooks/useCustomEvents";
import { mergeSort, heapSort, quickSort } from "../../sorting-algorithms/index";

function Chart() {
  const [arrayOfNumbers, setArrayOfNumbers] = useState(
    getRandomArrayOfNumbers(InitialArraySize)
  );

  useCustomEvents(arrayOfNumbers, setArrayOfNumbers, sort);

  function sort(algorithmName: string, array: number[]) {
    const newArray = [...array];
    switch (algorithmName) {
      case "mergesort":
        mergeSort(newArray);
        break;
      case "heapsort":
        heapSort(newArray);
        break;
      case "quicksort":
        quickSort(newArray);
        break;
    }
    return newArray;
  }

  return (
    <Box display="flex" flexDirection="row" height="60vh" margin="16px">
      {arrayOfNumbers.map((value, index) => (
        <ArrayBar index={index} value={value} key={index} />
      ))}
    </Box>
  );
}

export default Chart;
