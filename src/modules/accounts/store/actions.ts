import {
  ActionType,
  Transaction,
  StartTransaction,
  ApplyTransaction,
  SuccessTransaction
} from "./models";

export const transactionOk = (): SuccessTransaction => ({
  type: ActionType.TX_OK
});

export const startTransaction = (payload: Transaction): StartTransaction => ({
  type: ActionType.TX_START,
  payload
});

export const applyTransaction = (payload: Transaction): ApplyTransaction => ({
  type: ActionType.TX_APPLY,
  payload
});
