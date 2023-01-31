import { EventsBus } from "./types";

const eventsBus: EventsBus = {
  on(eventName, callback) {
    document.addEventListener(eventName, (event) => {
      event.stopImmediatePropagation();
      callback((event as CustomEvent).detail);
    });
  },
  dispatch(eventName, data) {
    document.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  },
  remove(eventName, callback) {
    document.removeEventListener(eventName, callback);
  },
};

export default eventsBus;
