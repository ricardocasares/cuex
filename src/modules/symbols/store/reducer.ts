import { Reducer } from "redux";
import { State, Actions, ActionType } from "./models";

export const initial: State = {
  show: false,
  query: "",
  symbols: []
};

export const reducer: Reducer<State, Actions> = (state = initial, action) => {
  switch (action.type) {
    case ActionType.SET_SYMBOLS:
      return { ...state, symbols: action.payload };
    case ActionType.SET_QUERY:
      return { ...state, query: action.payload };
    case ActionType.SHOW_SYMBOLS:
      return { ...state, show: action.payload };
    default:
      return state;
  }
};
