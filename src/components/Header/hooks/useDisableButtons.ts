import { useEffect, useState } from "react";
import eventsBus from "../../../components-communication/eventsBus";
import { EventName } from "../../../components-communication/types";

function useDisableButtons() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  useEffect(() => {
    eventsBus.subscribe((event) => {
      if (event.type === EventName.SortingStarted) setButtonDisabled(true);
      else if (event.type === EventName.SortingEnded) setButtonDisabled(false);
    });
  }, []);

  return { buttonDisabled };
}

export default useDisableButtons;
