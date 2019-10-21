import { put, fork, call, takeLatest } from "redux-saga/effects";
import { ActionType } from "./models";
import { setSymbols, showSymbols } from "./actions";
import { getSymbols } from "../api";

export function* runSetSymbols() {
  const symbols = yield call(getSymbols);
  yield put(setSymbols(symbols));
}

export function* runShowSymbols() {
  yield put(showSymbols(true));
}

export function* runHideSymbols() {
  yield put(showSymbols(false));
}

export function* watchFetchSymbols() {
  yield takeLatest(ActionType.FETCH_SYMBOLS, runSetSymbols);
}

export function* watchRequestSymbols() {
  yield takeLatest(ActionType.REQUEST_SYMBOLS, runShowSymbols);
}

export function* watchSelectSymbol() {
  yield takeLatest(ActionType.SELECT_SYMBOL, runHideSymbols);
}

export const sagas = [
  watchFetchSymbols,
  watchSelectSymbol,
  watchRequestSymbols
].map(fork);
