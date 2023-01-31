import React, { useEffect } from "react";
import eventsBus from "../../components-communication/eventsBus";
import { EventName } from "../../components-communication/types";
import useCustomEvents from "./hooks/useCustomEvents";

function Chart() {
  useCustomEvents();
  useEffect(() => {
    eventsBus.on(EventName.Sort, (d) => {
      alert(JSON.stringify(d));
    });
  }, []);
  return <></>;
}

export default Chart;
