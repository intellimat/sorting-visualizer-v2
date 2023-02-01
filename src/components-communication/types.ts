export enum EventName {
  SortingStarted = "sorting started",
  SortingEnded = "sorting ended",
  NewArray = "new array",
}

export interface EventPayload {
  algorithmName?: string;
  size?: number;
}
