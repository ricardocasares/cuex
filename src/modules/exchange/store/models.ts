import { Action } from "redux";

export type State = {
  readonly rate: number;
  readonly originAmount: number;
  readonly targetAmount: number;
  readonly originCurrency: string;
  readonly targetCurrency: string;
};

export enum ActionType {
  SET_RATE = "@cuex/exchange/SET_RATE",
  SET_ORIGIN_CX = "@cuex/exchange/SET_ORIGIN_CX",
  SET_TARGET_CX = "@cuex/exchange/SET_TARGET_CX",
  SET_ORIGIN_AMOUNT = "@cuex/exchange/SET_ORIGIN_AMOUNT",
  SET_TARGET_AMOUNT = "@cuex/exchange/SET_TARGET_AMOUNT",
  ORIGIN_AMOUNT_CHANGED = "@cuex/exchange/ORIGIN_AMOUNT_CHANGED",
  TARGET_AMOUNT_CHANGED = "@cuex/exchange/TARGET_AMOUNT_CHANGED"
}

export interface SetRate extends Action<ActionType.SET_RATE> {
  readonly payload: number;
}

export interface SetOriginAmount extends Action<ActionType.SET_ORIGIN_AMOUNT> {
  readonly payload: number;
}

export interface SetTargetAmount extends Action<ActionType.SET_TARGET_AMOUNT> {
  readonly payload: number;
}

export interface OriginAmountChanged
  extends Action<ActionType.ORIGIN_AMOUNT_CHANGED> {
  readonly payload: number;
}

export interface TargetAmountChanged
  extends Action<ActionType.TARGET_AMOUNT_CHANGED> {
  readonly payload: number;
}

export interface SetOriginCurrency extends Action<ActionType.SET_ORIGIN_CX> {
  readonly payload: string;
}

export interface SetTargetCurrency extends Action<ActionType.SET_TARGET_CX> {
  readonly payload: string;
}

export type Actions =
  | SetRate
  | SetTargetAmount
  | SetOriginAmount
  | SetOriginCurrency
  | SetTargetCurrency
  | OriginAmountChanged;
