import { Reducer } from "redux";
import { State, Actions, ActionType } from "./models";

export const initial: State = {
  USD: 10,
  BTC: 0.232,
  GBP: 45.54,
  EUR: 20
};

export const reducer: Reducer<State, Actions> = (state = initial, action) => {
  switch (action.type) {
    case ActionType.TX_APPLY:
      // @TODO
      // Move to saga

      const {
        originAmount,
        targetAmount,
        originSymbol,
        targetSymbol
      } = action.payload;

      const originBalance = state[originSymbol] || 0;
      const targetBalance = state[targetSymbol] || 0;

      return {
        ...state,
        [originSymbol]: originBalance - originAmount,
        [targetSymbol]: targetBalance + targetAmount
      };
    default:
      return state;
  }
};
