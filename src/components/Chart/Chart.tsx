import { Box } from "@mui/material";
import React, { useState } from "react";
import { InitialArraySize, MaxInteger } from "../../config";
import { getRandomArrayOfNumbers } from "../../utils";
import ArrayBar from "./ArrayBar/ArrayBar";
import useEventManager from "./hooks/useEventManager";

function Chart() {
  const [arrayOfNumbers, setArrayOfNumbers] = useState(
    getRandomArrayOfNumbers(InitialArraySize)
  );

  useEventManager(arrayOfNumbers, setArrayOfNumbers);

  return (
    <Box
      display="flex"
      height={Math.max(MaxInteger) * 1.1 + "px"}
      flexDirection="row"
      margin="16px"
    >
      {arrayOfNumbers.map((value, index) => (
        <ArrayBar index={index} value={value} key={index} />
      ))}
    </Box>
  );
}

export default Chart;
