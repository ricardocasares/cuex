import { Reducer } from "redux";
import { State, Actions, ActionType } from "./models";

export const initial: State = {
  rate: 0.000031,
  originAmount: 0,
  targetAmount: 0,
  originCurrency: "USD",
  targetCurrency: "EUR"
};

export const reducer: Reducer<State, Actions> = (state = initial, action) => {
  switch (action.type) {
    case ActionType.SET_RATE:
      return { ...state, rate: action.payload };
    case ActionType.SET_ORIGIN_AMOUNT:
      return { ...state, originAmount: action.payload };
    case ActionType.SET_TARGET_AMOUNT:
      return { ...state, targetAmount: action.payload };
    case ActionType.SET_ORIGIN_CX:
      return { ...state, originCurrency: action.payload };
    case ActionType.SET_TARGET_CX:
      return { ...state, targetCurrency: action.payload };
    default:
      return state;
  }
};
