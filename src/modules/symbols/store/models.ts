import { Action } from "redux";

export type State = { show: boolean; symbols: Symbols };
export type Symbols = Record<string, string>;

export enum ActionType {
  FETCH_SYMBOLS = "@cuex/symbols/FETCH_SYMBOLS",
  SET_SYMBOLS = "@cuex/symbols/SET_SYMBOLS",
  SELECT_SYMBOL = "@cuex/symbols/SELECT_SYMBOL",
  REQUEST_SYMBOLS = "@cuex/symbols/REQUEST_SYMBOLS",
  SHOW_SYMBOLS = "@cuex/symbols/SHOW_SYMBOLS",
  FETCH_ERROR_SYMBOLS = "@cuex/symbols/FETCH_ERROR_SYMBOLS"
}

export interface FetchSymbols extends Action<ActionType.FETCH_SYMBOLS> {}
export interface RequestSymbols extends Action<ActionType.REQUEST_SYMBOLS> {}

export interface ShowSymbols extends Action<ActionType.SHOW_SYMBOLS> {
  readonly payload: boolean;
}

export interface SetSymbols extends Action<ActionType.SET_SYMBOLS> {
  readonly payload: Symbols;
}

export interface SelectSymbol extends Action<ActionType.SELECT_SYMBOL> {
  readonly payload: string;
}

export interface FetchErrorSymbols
  extends Action<ActionType.FETCH_ERROR_SYMBOLS> {
  readonly payload: Error;
}

export type Actions =
  | SetSymbols
  | ShowSymbols
  | FetchSymbols
  | FetchErrorSymbols;
