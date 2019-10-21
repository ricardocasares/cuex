import {
  put,
  take,
  fork,
  call,
  delay,
  select,
  takeLatest,
  takeEvery
} from "redux-saga/effects";
import { ActionType, SetExchangeRate, SetTargetAmount } from "./models";
import {
  getSymbol,
  setTargetAmount,
  setOriginAmount,
  setOriginSymbol,
  setTargetSymbol,
  setExchangeRate,
  fetchExchangeRate
} from "./actions";
import { getExchangeRate } from "../api";
import * as selector from "./selectors";

const FETCH_RATE_INTERVAL = 10000;

///////////
// SAGAS //
///////////

export function* runOriginAmountChanged(action: SetExchangeRate) {
  const rate = yield select(selector.rate);
  yield put(setOriginAmount(action.payload));
  yield put(setTargetAmount(rate * action.payload));
}

export function* runTargetAmountChanged(action: SetTargetAmount) {
  const rate = yield select(selector.rate);
  yield put(setTargetAmount(action.payload));
  yield put(setOriginAmount(action.payload / rate));
}

export function* runChangedSymbol() {
  yield put(fetchExchangeRate());
}

export function* executeFetchExchangeRate() {
  try {
    const exchange = yield select(selector.exchange);
    const payload = yield call(
      getExchangeRate,
      exchange.originSymbol,
      exchange.targetSymbol
    );

    yield put(setExchangeRate(payload));
  } catch (err) {
    // @TODO
    // Use AbortController for fetch cancellation
    console.warn("executeFetchExchangeRate unhandled");
  }
}

export function* updateTargetSymbol() {
  yield put(getSymbol());
  const { payload } = yield take(ActionType.SET_SYMBOL);
  yield put(setTargetSymbol(payload));
}

export function* updateOriginSymbol() {
  yield put(getSymbol());
  const { payload } = yield take(ActionType.SET_SYMBOL);
  yield put(setOriginSymbol(payload));
}

export function* updateAmountByDirection() {
  const exchange = yield select(selector.exchange);

  if (exchange.direction) {
    yield put(setTargetAmount(exchange.originAmount * exchange.rate));
  } else {
    yield put(setOriginAmount(exchange.targetAmount / exchange.rate));
  }
}

//////////////
// WATCHERS //
//////////////

export function* watchChangedOriginAmount() {
  yield takeEvery(ActionType.CHANGED_ORIGIN_AMOUNT, runOriginAmountChanged);
}

export function* watchChangedTargetAmount() {
  yield takeEvery(ActionType.CHANGED_TARGET_AMOUNT, runTargetAmountChanged);
}

export function* watchChangedSymbol() {
  yield takeEvery(
    [ActionType.SET_ORIGIN_SYMBOL, ActionType.SET_TARGET_SYMBOL],
    runChangedSymbol
  );
}

export function* watchExchangeRateRequest() {
  yield takeLatest(ActionType.FETCH_EXCHANGE_RATE, executeFetchExchangeRate);
}

export function* watchExchangeRateUpdate() {
  yield takeEvery(ActionType.SET_EXCHANGE_RATE, updateAmountByDirection);
}

export function* watchGetTargetSymbol() {
  yield takeEvery(ActionType.GET_TARGET_SYMBOL, updateTargetSymbol);
}

export function* watchGetOriginSymbol() {
  yield takeEvery(ActionType.GET_ORIGIN_SYMBOL, updateOriginSymbol);
}

export function* exchangeRateInterval() {
  yield take(ActionType.START_RATE_INTERVAL);

  while (true) {
    yield put(fetchExchangeRate());
    yield delay(FETCH_RATE_INTERVAL);
  }
}

export const sagas = [
  watchChangedSymbol,
  exchangeRateInterval,
  watchGetOriginSymbol,
  watchGetTargetSymbol,
  watchExchangeRateUpdate,
  watchExchangeRateRequest,
  watchChangedOriginAmount,
  watchChangedTargetAmount
].map(fork);
