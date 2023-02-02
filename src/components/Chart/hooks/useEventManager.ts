import { useEffect } from "react";
import { take } from "rxjs";
import eventsBus from "../../../components-communication/eventsBus";
import { Event, EventName } from "../../../components-communication/types";
import { FramesSpeed } from "../../../config";
import { getRandomArrayOfNumbers, sleep } from "../../../utils";
import useSort from "./useSortingHistory";

function useEventManager(
  arrayOfNumbers: number[],
  setArrayOfNumbers: (array: number[]) => void
) {
  const { sort } = useSort();

  const handleSortingEvent = async (event: Event) => {
    const history = sort(event.payload.algorithmName, arrayOfNumbers);
    for (const frame of history) {
      await sleep(FramesSpeed);
      setArrayOfNumbers(frame);
    }
    eventsBus.next({ type: EventName.SortingEnded });
  };

  const handleNewArrayEvent = (event: Event) => {
    const arraySize = event.payload?.size ?? arrayOfNumbers.length;
    setArrayOfNumbers(getRandomArrayOfNumbers(arraySize));
  };

  useEffect(() => {
    eventsBus.pipe(take(1)).subscribe((event) => {
      if (event.type === EventName.NewArray) {
        handleNewArrayEvent(event);
      } else if (event.type === EventName.SortingStarted) {
        handleSortingEvent(event);
      }
    });
  }, [arrayOfNumbers]);
}

export default useEventManager;
