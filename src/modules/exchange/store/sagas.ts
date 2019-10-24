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
  switchSymbols,
  setTargetAmount,
  setOriginAmount,
  setOriginSymbol,
  setTargetSymbol,
  setExchangeRate,
  executeExchange,
  fetchExchangeRate,
  fetchErrorExchangeRate,
  symbolsChanged
} from "./actions";
import { fetchEchangeRate } from "../api";
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

export function* runFetchExchangeRate() {
  try {
    const exchange = yield select(selector.exchange);
    const payload = yield call(fetchEchangeRate, {
      base: exchange.originSymbol,
      symbols: exchange.targetSymbol
    });

    yield put(setExchangeRate(payload));
  } catch (err) {
    // @TODO Handle errors
    // @TODO Use AbortController for cancellation
    yield put(fetchErrorExchangeRate(err));
  }
}

export function* runSetTargetSymbol() {
  yield put(getSymbol());
  const { payload } = yield take(ActionType.SET_SYMBOL);
  const exchange = yield select(selector.exchange);

  if (exchange.originSymbol === payload) {
    yield put(switchSymbols());
  } else {
    yield put(setTargetSymbol(payload));
    yield put(symbolsChanged());
  }
}

export function* runSetOriginSymbol() {
  yield put(getSymbol());
  const { payload } = yield take(ActionType.SET_SYMBOL);
  const exchange = yield select(selector.exchange);

  if (exchange.targetSymbol === payload) {
    yield put(switchSymbols());
  } else {
    yield put(setOriginSymbol(payload));
    yield put(symbolsChanged());
  }
}

export function* runSwitchSymbols() {
  const exchange = yield select(selector.exchange);
  yield put(setOriginSymbol(exchange.targetSymbol));
  yield put(setTargetSymbol(exchange.originSymbol));
  yield put(symbolsChanged());
}

export function* runChangedSymbol() {
  yield put(fetchExchangeRate());
}

export function* runSetAmountByDirection() {
  const exchange = yield select(selector.exchange);

  if (exchange.direction) {
    yield put(setTargetAmount(exchange.originAmount * exchange.rate));
  } else {
    yield put(setOriginAmount(exchange.targetAmount / exchange.rate));
  }
}

export function* runExecuteExchange() {
  yield put(executeExchange(yield select(selector.exchange)));
}

export function* runExchangeRateInterval() {
  yield take(ActionType.START_RATE_INTERVAL);

  while (true) {
    yield put(fetchExchangeRate());
    yield delay(FETCH_RATE_INTERVAL);
  }
}

//////////////
// WATCHERS //
//////////////

export function* watchGetTargetSymbol() {
  yield takeEvery(ActionType.GET_TARGET_SYMBOL, runSetTargetSymbol);
}

export function* watchGetOriginSymbol() {
  yield takeEvery(ActionType.GET_ORIGIN_SYMBOL, runSetOriginSymbol);
}

export function* watchSwitchSymbols() {
  yield takeEvery(ActionType.SWITCH_SYMBOLS, runSwitchSymbols);
}

export function* watchChangedSymbol() {
  yield takeEvery(ActionType.SYMBOLS_CHANGED, runChangedSymbol);
}

export function* watchChangedOriginAmount() {
  yield takeEvery(ActionType.CHANGED_ORIGIN_AMOUNT, runOriginAmountChanged);
}

export function* watchChangedTargetAmount() {
  yield takeEvery(ActionType.CHANGED_TARGET_AMOUNT, runTargetAmountChanged);
}

export function* watchExchangeRateRequest() {
  yield takeLatest(ActionType.FETCH_EXCHANGE_RATE, runFetchExchangeRate);
}

export function* watchExchangeRateUpdate() {
  yield takeEvery(ActionType.SET_EXCHANGE_RATE, runSetAmountByDirection);
}

export function* watchRequestExecuteExchange() {
  yield takeEvery(ActionType.REQUEST_EXECUTE_EXCHANGE, runExecuteExchange);
}

export const sagas = [
  watchChangedSymbol,
  watchSwitchSymbols,
  watchGetOriginSymbol,
  watchGetTargetSymbol,
  runExchangeRateInterval,
  watchExchangeRateUpdate,
  watchExchangeRateRequest,
  watchChangedOriginAmount,
  watchChangedTargetAmount,
  watchRequestExecuteExchange
].map(fork);
