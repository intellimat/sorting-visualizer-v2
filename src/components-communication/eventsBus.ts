import { Subject } from "rxjs";
import { EventName, EventPayload } from "./types";

const eventsBus = new Subject<{
  type: EventName;
  payload?: any; // EventPayload;
}>();

export default eventsBus;
