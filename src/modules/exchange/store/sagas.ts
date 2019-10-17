import { takeLatest, fork, put, select } from "redux-saga/effects";
import { CuexState } from "@/store/models";
import { ActionType, SetOriginAmount, SetTargetAmount } from "./models";
import { setTargetAmount, setOriginAmount } from "./actions";

function* watchOriginAmount() {
  yield takeLatest(ActionType.ORIGIN_AMOUNT_CHANGED, function*({
    payload
  }: SetOriginAmount) {
    const rate = yield select((state: CuexState) => state.exchange.rate);
    yield put(setOriginAmount(payload));
    yield put(setTargetAmount(rate * payload));
  });
}

function* watchTargetAmount() {
  yield takeLatest(ActionType.TARGET_AMOUNT_CHANGED, function*({
    payload
  }: SetTargetAmount) {
    const rate = yield select((state: CuexState) => state.exchange.rate);
    yield put(setTargetAmount(payload));
    yield put(setOriginAmount(payload / rate));
  });
}

export const sagas = [fork(watchOriginAmount), fork(watchTargetAmount)];
