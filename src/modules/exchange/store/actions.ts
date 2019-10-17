import {
  ActionType,
  SetRate,
  SetOriginAmount,
  SetTargetAmount,
  SetOriginCurrency,
  SetTargetCurrency,
  OriginAmountChanged,
  TargetAmountChanged
} from "./models";

export const setRate = (payload: number): SetRate => ({
  type: ActionType.SET_RATE,
  payload
});

export const setOriginAmount = (payload: number): SetOriginAmount => ({
  type: ActionType.SET_ORIGIN_AMOUNT,
  payload
});

export const setTargetAmount = (payload: number): SetTargetAmount => ({
  type: ActionType.SET_TARGET_AMOUNT,
  payload
});

export const originAmountChanged = (payload: number): OriginAmountChanged => ({
  type: ActionType.ORIGIN_AMOUNT_CHANGED,
  payload
});

export const targetAmountChanged = (payload: number): TargetAmountChanged => ({
  type: ActionType.TARGET_AMOUNT_CHANGED,
  payload
});

export const setOriginCurrency = (payload: string): SetOriginCurrency => ({
  type: ActionType.SET_ORIGIN_CX,
  payload
});

export const setTargetCurrency = (payload: string): SetTargetCurrency => ({
  type: ActionType.SET_TARGET_CX,
  payload
});
