import { useEffect } from "react";
import eventsBus from "../../../components-communication/eventsBus";
import { EventName } from "../../../components-communication/types";
import { getRandomArrayOfNumbers } from "../../../utils";

function useCustomEvents(
  arrayOfNumbers: number[],
  setArrayOfNumbers: (array: number[]) => void,
  sort: (algorithmName: string, array: number[]) => number[]
) {
  useEffect(() => {
    eventsBus.on(
      EventName.SortingStarted,
      function sortingStartedCallback(data) {
        const orderedArray = sort(data.algorithmName!, arrayOfNumbers);
        setArrayOfNumbers(orderedArray);
        eventsBus.dispatch(EventName.SortingEnded);
      }
    );
    eventsBus.on(EventName.NewArray, () => {
      setArrayOfNumbers(getRandomArrayOfNumbers(arrayOfNumbers.length));
    });
    eventsBus.on(EventName.SizeChange, (payload) => {
      setArrayOfNumbers(getRandomArrayOfNumbers(payload.size!));
    });
  }, []);
}

export default useCustomEvents;
