import { Action } from "redux";

export type State = { show: boolean; query: string; symbols: Symbols };
export type Symbols = [string, string][];

export enum ActionType {
  FETCH_SYMBOLS = "@cuex/symbols/FETCH_SYMBOLS",
  SET_SYMBOLS = "@cuex/symbols/SET_SYMBOLS",
  SELECT_SYMBOL = "@cuex/symbols/SELECT_SYMBOL",
  REQUEST_SYMBOLS = "@cuex/symbols/REQUEST_SYMBOLS",
  SHOW_SYMBOLS = "@cuex/symbols/SHOW_SYMBOLS",
  FETCH_ERROR_SYMBOLS = "@cuex/symbols/FETCH_ERROR_SYMBOLS",
  SET_QUERY = "@cuex/symbols/SET_QUERY",
  QUERY_CHANGED = "@cuex/symbols/QUERY_CHANGED"
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

export interface SetQuery extends Action<ActionType.SET_QUERY> {
  readonly payload: string;
}

export interface QueryChanged extends Action<ActionType.QUERY_CHANGED> {
  readonly payload: string;
}

export type Actions =
  | SetQuery
  | QueryChanged
  | SetSymbols
  | ShowSymbols
  | FetchSymbols
  | FetchErrorSymbols;
