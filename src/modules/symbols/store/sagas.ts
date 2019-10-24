import { put, fork, call, takeLatest } from "redux-saga/effects";
import { ActionType, QueryChanged } from "./models";
import {
  setSymbols,
  showSymbols,
  fetchErrorSymbols,
  setQuery
} from "./actions";
import { fetchCurrencies } from "../api";

export function* runSetSymbols() {
  try {
    const symbols = yield call(fetchCurrencies);
    yield put(setSymbols(symbols));
  } catch (err) {
    yield put(fetchErrorSymbols(err));
  }
}

export function* runShowSymbols() {
  yield put(showSymbols(true));
}

export function* runHideSymbols() {
  yield put(setQuery(""));
  yield put(showSymbols(false));
}

export function* runSetQuery(action: QueryChanged) {
  yield put(setQuery(action.payload));
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

export function* watchQueryChanged() {
  yield takeLatest(ActionType.QUERY_CHANGED, runSetQuery);
}

export const sagas = [
  watchFetchSymbols,
  watchSelectSymbol,
  watchQueryChanged,
  watchRequestSymbols
].map(fork);
