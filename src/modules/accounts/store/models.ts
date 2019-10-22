import { Action } from "redux";

export type State = Record<string, number>;

export enum ActionType {
  INCREMENT = "@cuex/accounts/INCREMENT",
  DECREMENT = "@cuex/accounts/DECREMENT",
  TX_OK = "@cuex/accounts/TX_OK",
  TX_START = "@cuex/accounts/TX_START",
  TX_APPLY = "@cuex/accounts/TX_APPLY"
}

export type Transaction = {
  originSymbol: string;
  targetSymbol: string;
  originAmount: number;
  targetAmount: number;
};

export interface SuccessTransaction extends Action<ActionType.TX_OK> {}

export interface StartTransaction extends Action<ActionType.TX_START> {
  readonly payload: Transaction;
}

export interface ApplyTransaction extends Action<ActionType.TX_APPLY> {
  readonly payload: Transaction;
}

export type Actions = StartTransaction | ApplyTransaction | SuccessTransaction;
