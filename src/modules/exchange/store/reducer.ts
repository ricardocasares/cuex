import { Reducer } from "redux";
import { State, Actions, ActionType } from "./models";

export const initial: State = {
  rate: 1,
  direction: true,
  originAmount: 0,
  targetAmount: 0,
  originSymbol: "USD",
  targetSymbol: "EUR"
};

export const reducer: Reducer<State, Actions> = (state = initial, action) => {
  switch (action.type) {
    case ActionType.SET_DIRECTION:
      return { ...state, direction: action.payload };
    case ActionType.SET_EXCHANGE_RATE:
      return { ...state, rate: action.payload };
    case ActionType.SET_ORIGIN_AMOUNT:
      return { ...state, originAmount: action.payload || 0 };
    case ActionType.SET_TARGET_AMOUNT:
      return { ...state, targetAmount: action.payload || 0 };
    case ActionType.SET_ORIGIN_SYMBOL:
      return { ...state, originSymbol: action.payload };
    case ActionType.SET_TARGET_SYMBOL:
      return { ...state, targetSymbol: action.payload };
    default:
      return state;
  }
};
