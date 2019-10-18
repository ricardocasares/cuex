import {
  ActionType,
  Symbols,
  SetSymbols,
  ShowSymbols,
  SelectSymbol,
  FetchSymbols,
  RequestSymbols,
  FetchErrorSymbols
} from "./models";

export const fetchSymbols = (): FetchSymbols => ({
  type: ActionType.FETCH_SYMBOLS
});

export const requestSymbols = (): RequestSymbols => ({
  type: ActionType.REQUEST_SYMBOLS
});

export const setSymbols = (payload: Symbols): SetSymbols => ({
  type: ActionType.SET_SYMBOLS,
  payload
});

export const selectSymbol = (payload: string): SelectSymbol => ({
  type: ActionType.SELECT_SYMBOL,
  payload
});

export const showSymbols = (payload: boolean): ShowSymbols => ({
  type: ActionType.SHOW_SYMBOLS,
  payload
});

export const fetchErrorSymbols = (payload: Error): FetchErrorSymbols => ({
  type: ActionType.FETCH_ERROR_SYMBOLS,
  payload
});
