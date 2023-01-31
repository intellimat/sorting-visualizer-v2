import React, { useState } from "react";
import { InitialArraySize } from "../../config";
import { getRandomArrayOfNumbers } from "../../utils";
import useCustomEvents from "./hooks/useCustomEvents";

function Chart() {
  const [arrayOfNumbers, setArrayOfNumbers] = useState(
    getRandomArrayOfNumbers(InitialArraySize)
  );

  useCustomEvents(arrayOfNumbers, setArrayOfNumbers);

  return <></>;
}

export default Chart;
