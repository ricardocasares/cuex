import {
  ActionType,
  GetSymbol,
  SetSymbol,
  SetDirection,
  SetTargetAmount,
  SetOriginSymbol,
  SetTargetSymbol,
  SetOriginAmount,
  GetOriginSymbol,
  GetTargetSymbol,
  ChangedTargetAmount,
  ChangedOriginAmount,
  StartRateInterval
} from "./models";

export const getSymbol = (): GetSymbol => ({
  type: ActionType.GET_SYMBOL
});

export const setSymbol = (payload: string): SetSymbol => ({
  type: ActionType.SET_SYMBOL,
  payload
});

export const setDirection = (payload: boolean): SetDirection => ({
  type: ActionType.SET_DIRECTION,
  payload
});

export const setTargetAmount = (payload: number): SetTargetAmount => ({
  type: ActionType.SET_TARGET_AMOUNT,
  payload
});

export const setOriginAmount = (payload: number): SetOriginAmount => ({
  type: ActionType.SET_ORIGIN_AMOUNT,
  payload
});

export const getOriginSymbol = (): GetOriginSymbol => ({
  type: ActionType.GET_ORIGIN_SYMBOL
});

export const getTargetSymbol = (): GetTargetSymbol => ({
  type: ActionType.GET_TARGET_SYMBOL
});

export const setOriginSymbol = (payload: string): SetOriginSymbol => ({
  type: ActionType.SET_ORIGIN_SYMBOL,
  payload
});

export const setTargetSymbol = (payload: string): SetTargetSymbol => ({
  type: ActionType.SET_TARGET_SYMBOL,
  payload
});

export const changedOriginAmount = (payload: number): ChangedOriginAmount => ({
  type: ActionType.CHANGED_ORIGIN_AMOUNT,
  payload
});

export const changedTargetAmount = (payload: number): ChangedTargetAmount => ({
  type: ActionType.CHANGED_TARGET_AMOUNT,
  payload
});

export const startRateInterval = (): StartRateInterval => ({
  type: ActionType.START_RATE_INTERVAL
});
