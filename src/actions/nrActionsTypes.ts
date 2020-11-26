export const INCREASE = "increase";
export const DECREASE = "deacrease";

export interface NumberIncrease {
  type: typeof INCREASE;
  payload?: number;
}

export interface NumberDecrease {
  type: typeof DECREASE;
  payload?: number;
}

export type NrDispatchTypes = NumberIncrease | NumberDecrease;
