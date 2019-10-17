import {
  ActionType,
  ChangedSymbol,
  SetTargetAmount,
  SetOriginSymbol,
  SetTargetSymbol,
  ChangedOriginAmount,
  ChangedTargetAmount,
  SetOriginAmount,
  SetDirection
} from "./models";

export const changedSymbol = (): ChangedSymbol => ({
  type: ActionType.CHANGED_SYMBOL
});

export const setDirection = (payload: boolean): SetDirection => ({
  type: ActionType.SET_DIRECTION,
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

export const changedOriginAmount = (payload: number): ChangedOriginAmount => ({
  type: ActionType.CHANGED_ORIGIN_AMOUNT,
  payload
});

export const changedTargetAmount = (payload: number): ChangedTargetAmount => ({
  type: ActionType.CHANGED_TARGET_AMOUNT,
  payload
});

export const setOriginSymbol = (payload: string): SetOriginSymbol => ({
  type: ActionType.SET_ORIGIN_SYMBOL,
  payload
});

export const setTargetSymbol = (payload: string): SetTargetSymbol => ({
  type: ActionType.SET_TARGET_SYMBOL,
  payload
});
