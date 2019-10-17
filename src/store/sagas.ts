import { all, take, fork } from "redux-saga/effects";
import { sagas as exchange } from "@/modules/exchange/store";
function* init() {
  yield take("CLIENT_READY");
  console.log("yep");
}

export function* sagas() {
  yield all([fork(init), ...exchange]);
}
