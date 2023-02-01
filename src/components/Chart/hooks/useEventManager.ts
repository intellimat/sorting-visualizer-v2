import { useEffect } from "react";
import { take } from "rxjs";
import eventsBus from "../../../components-communication/eventsBus";
import { EventName } from "../../../components-communication/types";
import { FramesSpeed } from "../../../config";
import { getRandomArrayOfNumbers, sleep } from "../../../utils";
import useSort from "./useSortingHistory";

function useEventManager(
  arrayOfNumbers: number[],
  setArrayOfNumbers: (array: number[]) => void
) {
  const { sort } = useSort();
  useEffect(() => {
    eventsBus.pipe(take(1)).subscribe(async (event) => {
      if (event.type === EventName.NewArray) {
        console.log(event);
        const arraySize = event.payload?.size ?? arrayOfNumbers.length;
        console.log("here");
        setArrayOfNumbers(getRandomArrayOfNumbers(arraySize));
      } else if (event.type === EventName.SortingStarted) {
        const history = sort(event.payload.algorithmName, arrayOfNumbers);
        for (const frame of history) {
          await sleep(FramesSpeed);
          setArrayOfNumbers(frame);
        }
        eventsBus.next({ type: EventName.SortingEnded });
      }
    });
  }, [arrayOfNumbers]);
}

export default useEventManager;
