import { useEffect, useState } from "react";
import eventsBus from "../../../components-communication/eventsBus";
import { EventName } from "../../../components-communication/types";

function useDisableButtons() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  useEffect(() => {
    eventsBus.on(EventName.SortingStarted, function sortingStartedCallback() {
      setButtonDisabled(true);
    });

    eventsBus.on(EventName.SortingEnded, () => {
      setButtonDisabled(false);
    });
  }, []);

  return { buttonDisabled };
}

export default useDisableButtons;
