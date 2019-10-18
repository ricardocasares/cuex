import { put, fork, call, takeLatest } from "redux-saga/effects";
import { ActionType } from "./models";
import { setSymbols, showSymbols } from "./actions";
import { getSymbols } from "../api";

function* watchFetchSymbols() {
  yield takeLatest(ActionType.FETCH_SYMBOLS, function*() {
    const symbols = yield call(getSymbols);
    yield put(setSymbols(symbols));
  });
}

function* watchRequestSymbols() {
  yield takeLatest(ActionType.REQUEST_SYMBOLS, function*() {
    yield put(showSymbols(true));
  });
}

function* watchSelectSymbol() {
  yield takeLatest(ActionType.SELECT_SYMBOL, function*() {
    yield put(showSymbols(false));
  });
}

export const sagas = [
  fork(watchFetchSymbols),
  fork(watchSelectSymbol),
  fork(watchRequestSymbols)
];
