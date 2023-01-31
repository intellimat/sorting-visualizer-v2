import { useEffect } from "react";
import eventsBus from "../../../components-communication/eventsBus";
import { EventName } from "../../../components-communication/types";

function useCustomEvents() {
  useEffect(() => {
    eventsBus.on(EventName.Sort, (d) => {});
    eventsBus.on(EventName.NewArray, (d) => {});
    eventsBus.on(EventName.SizeChange, (d) => {});
  }, []);
}

export default useCustomEvents;
