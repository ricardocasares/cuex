import { put, fork, takeLatest } from "redux-saga/effects";
import { ActionType, StartTransaction } from "./models";
import * as actions from "./actions";

export function* runApplyTransaction(action: StartTransaction) {
  yield put(actions.applyTransaction(action.payload));
  yield put(actions.transactionOk());
}

export function* watchStartTransaction() {
  yield takeLatest(ActionType.TX_START, runApplyTransaction);
}

export const sagas = [watchStartTransaction].map(fork);
