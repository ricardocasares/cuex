import {
  put,
  take,
  fork,
  call,
  delay,
  select,
  takeLatest
} from "redux-saga/effects";
import { CuexState } from "@/store/models";
import { ActionType, SetExchangeRate, SetTargetAmount } from "./models";
import { setTargetAmount, setOriginAmount } from "./actions";
import { getExchangeRate } from "../api";

function* watchChangedOriginAmount() {
  yield takeLatest(ActionType.CHANGED_ORIGIN_AMOUNT, function*({
    payload
  }: SetExchangeRate) {
    const rate = yield select((state: CuexState) => state.exchange.rate);
    yield put(setOriginAmount(payload));
    yield put(setTargetAmount(rate * payload));
  });
}

function* watchChangedTargetAmount() {
  yield takeLatest(ActionType.CHANGED_TARGET_AMOUNT, function*({
    payload
  }: SetTargetAmount) {
    const rate = yield select((state: CuexState) => state.exchange.rate);
    yield put(setTargetAmount(payload));
    yield put(setOriginAmount(payload / rate));
  });
}

function* watchChangedSymbol() {
  yield takeLatest(ActionType.CHANGED_SYMBOL, function*() {
    yield put({ type: ActionType.FETCH_EXCHANGE_RATE });
  });
}

function* watchExchangeRateRequest() {
  yield takeLatest(ActionType.FETCH_EXCHANGE_RATE, function*() {
    const exchange = yield select(state => state.exchange);
    const payload = yield call(
      getExchangeRate,
      exchange.originSymbol,
      exchange.targetSymbol
    );

    yield put({ type: ActionType.SET_EXCHANGE_RATE, payload });
  });
}

function* watchExchangeRateUpdate() {
  yield takeLatest(ActionType.SET_EXCHANGE_RATE, function*() {
    const exchange = yield select(state => state.exchange);

    if (exchange.direction) {
      yield put(setTargetAmount(exchange.originAmount * exchange.rate));
    } else {
      yield put(setOriginAmount(exchange.targetAmount / exchange.rate));
    }
  });
}

function* exchangeRateRequestInterval() {
  yield take("INTERVAL");
  while (true) {
    yield put({ type: ActionType.FETCH_EXCHANGE_RATE });
    yield delay(5000);
  }
}

export const sagas = [
  fork(watchChangedSymbol),
  fork(watchExchangeRateUpdate),
  fork(watchExchangeRateRequest),
  fork(watchChangedOriginAmount),
  fork(watchChangedTargetAmount),
  fork(exchangeRateRequestInterval)
];
