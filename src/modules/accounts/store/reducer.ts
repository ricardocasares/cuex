import { Reducer } from "redux";
import { State, Actions, ActionType } from "./models";

export const initial: State = {
  USD: 1000,
  GBP: 1000,
  EUR: 1000
};

export const reducer: Reducer<State, Actions> = (state = initial, action) => {
  switch (action.type) {
    case ActionType.TX_APPLY:
      // @TODO Move logic to saga

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
