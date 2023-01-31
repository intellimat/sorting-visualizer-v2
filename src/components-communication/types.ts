export interface EventsBus {
  on: (eventName: EventName, callback: (eventData: Data) => void) => void;
  dispatch: (eventName: EventName, data?: Data) => void;
  remove: (eventName: EventName, callback: () => void) => void;
}

interface Data {
  size?: number;
  algorithmName?: string;
}

export enum EventName {
  Sort = "sort",
  SizeChange = "change size",
  NewArray = "new array",
}
