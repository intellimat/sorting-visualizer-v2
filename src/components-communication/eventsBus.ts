import { EventsBus } from "./types";

const eventsBus: EventsBus = {
  on(eventName, callback) {
    document.addEventListener(eventName, function listener(event) {
      callback((event as CustomEvent).detail);
      // event.target?.removeEventListener(eventName, listener);
    });
  },
  dispatch(eventName, data) {
    document.dispatchEvent(
      new CustomEvent(eventName, {
        detail: data,
      })
    );
  },
  remove(eventName, callback) {
    document.removeEventListener(eventName, callback);
  },
};

export default eventsBus;
