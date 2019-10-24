import { Action } from "redux";

export type State = {
  readonly rate: number;
  readonly direction: boolean;
  readonly originAmount: number;
  readonly targetAmount: number;
  readonly originSymbol: string;
  readonly targetSymbol: string;
};

export enum ActionType {
  SET_DIRECTION = "@cuex/exchange/SET_DIRECTION",
  GET_SYMBOL = "@cuex/exchange/GET_SYMBOL",
  SET_SYMBOL = "@cuex/exchange/SET_SYMBOL",
  EXECUTE_EXCHANGE = "@cuex/exchange/EXECUTE_EXCHANGE",
  REQUEST_EXECUTE_EXCHANGE = "@cuex/exchange/REQUEST_EXECUTE_EXCHANGE",
  GET_ORIGIN_SYMBOL = "@cuex/exchange/GET_ORIGIN_SYMBOL",
  GET_TARGET_SYMBOL = "@cuex/exchange/GET_TARGET_SYMBOL",
  SET_ORIGIN_SYMBOL = "@cuex/exchange/SET_ORIGIN_SYMBOL",
  SET_TARGET_SYMBOL = "@cuex/exchange/SET_TARGET_SYMBOL",
  SET_ORIGIN_AMOUNT = "@cuex/exchange/SET_ORIGIN_AMOUNT",
  SET_TARGET_AMOUNT = "@cuex/exchange/SET_TARGET_AMOUNT",
  CHANGED_ORIGIN_AMOUNT = "@cuex/exchange/CHANGED_ORIGIN_AMOUNT",
  CHANGED_TARGET_AMOUNT = "@cuex/exchange/CHANGED_TARGET_AMOUNT",
  FETCH_EXCHANGE_RATE = "@cuex/exchange/FETCH_EXCHANGE_RATE",
  SET_EXCHANGE_RATE = "@cuex/exchange/SET_EXCHANGE_RATE",
  FETCH_ERROR_EXCHAGE_RATE = "@cuex/exchange/FETCH_ERROR_EXCHAGE_RATE",
  START_RATE_INTERVAL = "@cuex/exchange/START_RATE_INTERVAL",
  SWITCH_SYMBOLS = "@cuex/exchange/SWITCH_SYMBOLS"
}

export interface GetSymbol extends Action<ActionType.GET_SYMBOL> {}
export interface SetSymbol extends Action<ActionType.SET_SYMBOL> {
  readonly payload: string;
}

export interface GetOriginSymbol extends Action<ActionType.GET_ORIGIN_SYMBOL> {}
export interface GetTargetSymbol extends Action<ActionType.GET_TARGET_SYMBOL> {}
export interface SetOriginSymbol extends Action<ActionType.SET_ORIGIN_SYMBOL> {
  readonly payload: string;
}

export interface SetTargetSymbol extends Action<ActionType.SET_TARGET_SYMBOL> {
  readonly payload: string;
}

export interface SwitchSymbols extends Action<ActionType.SWITCH_SYMBOLS> {}

export interface SetDirection extends Action<ActionType.SET_DIRECTION> {
  readonly payload: boolean;
}

export interface SetExchangeRate extends Action<ActionType.SET_EXCHANGE_RATE> {
  readonly payload: number;
}

export interface SetOriginAmount extends Action<ActionType.SET_ORIGIN_AMOUNT> {
  readonly payload: number;
}

export interface SetTargetAmount extends Action<ActionType.SET_TARGET_AMOUNT> {
  readonly payload: number;
}

export interface ChangedOriginAmount
  extends Action<ActionType.CHANGED_ORIGIN_AMOUNT> {
  readonly payload: number;
}

export interface ChangedTargetAmount
  extends Action<ActionType.CHANGED_TARGET_AMOUNT> {
  readonly payload: number;
}

export interface StartRateInterval
  extends Action<ActionType.START_RATE_INTERVAL> {}

export interface FetchExchangeRate
  extends Action<ActionType.FETCH_EXCHANGE_RATE> {}

export interface FetchErrorExchangeRate
  extends Action<ActionType.FETCH_ERROR_EXCHAGE_RATE> {
  readonly payload: Error;
}

export interface RequestExecuteExchange
  extends Action<ActionType.REQUEST_EXECUTE_EXCHANGE> {}

export interface ExecuteExchange extends Action<ActionType.EXECUTE_EXCHANGE> {
  readonly payload: State;
}

export type Actions =
  | GetSymbol
  | SetSymbol
  | SetDirection
  | SetExchangeRate
  | SetOriginAmount
  | SetTargetAmount
  | SetOriginSymbol
  | GetOriginSymbol
  | SetTargetSymbol
  | GetTargetSymbol
  | ExecuteExchange
  | RequestExecuteExchange
  | ChangedOriginAmount
  | ChangedTargetAmount
  | FetchExchangeRate;
