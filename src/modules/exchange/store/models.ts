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
  CHANGED_SYMBOL = "@cuex/exchange/CHANGED_SYMBOL",
  SET_ORIGIN_SYMBOL = "@cuex/exchange/SET_ORIGIN_SYMBOL",
  SET_TARGET_SYMBOL = "@cuex/exchange/SET_TARGET_SYMBOL",
  SET_ORIGIN_AMOUNT = "@cuex/exchange/SET_ORIGIN_AMOUNT",
  SET_TARGET_AMOUNT = "@cuex/exchange/SET_TARGET_AMOUNT",
  CHANGED_ORIGIN_AMOUNT = "@cuex/exchange/CHANGED_ORIGIN_AMOUNT",
  CHANGED_TARGET_AMOUNT = "@cuex/exchange/CHANGED_TARGET_AMOUNT",
  FETCH_EXCHANGE_RATE = "@cuex/exchange/FETCH_EXCHANGE_RATE",
  SET_EXCHANGE_RATE = "@cuex/exchange/SET_EXCHANGE_RATE",
  ERROR_EXCHAGE_RATE = "@cuex/exchange/ERROR_EXCHAGE_RATE"
}

export interface ChangedSymbol extends Action<ActionType.CHANGED_SYMBOL> {}

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

export interface SetOriginSymbol extends Action<ActionType.SET_ORIGIN_SYMBOL> {
  readonly payload: string;
}

export interface SetTargetSymbol extends Action<ActionType.SET_TARGET_SYMBOL> {
  readonly payload: string;
}

export type Actions =
  | SetDirection
  | SetExchangeRate
  | SetOriginAmount
  | SetTargetAmount
  | SetOriginSymbol
  | SetTargetSymbol
  | ChangedOriginAmount;
