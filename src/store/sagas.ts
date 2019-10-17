import { all, put, take, fork } from "redux-saga/effects";
import * as Exchange from "@/modules/exchange/store";

function* init() {
  yield take("CLIENT_READY");
  yield put({ type: "INTERVAL" });
}

export function* sagas() {
  yield all([fork(init), ...Exchange.sagas]);
}
