import { Subject } from "rxjs";
import { Event } from "./types";

const eventsBus = new Subject<Event>();

export default eventsBus;
