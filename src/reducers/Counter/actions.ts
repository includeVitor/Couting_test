export type Counter = {
  count: number;
};

export type Action = { type: actions.increment } | { type: actions.decrement };

export enum actions {
  increment = "increment",
  decrement = "decrement",
}
