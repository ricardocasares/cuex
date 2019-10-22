import { all, put, take, fork, takeLatest } from "redux-saga/effects";
import * as Symbols from "@/modules/symbols/store";
import * as Accounts from "@/modules/accounts/store";
import * as Exchange from "@/modules/exchange/store";

function* init() {
  yield take("CLIENT_READY");
  yield put(Symbols.fetchSymbols());
  yield put(Exchange.startRateInterval());
}

function* mapGetSymbol() {
  yield takeLatest(Exchange.ActionType.GET_SYMBOL, function*() {
    yield put(Symbols.requestSymbols());
  });
}

function* mapSelectSymbol() {
  yield takeLatest(Symbols.ActionType.SELECT_SYMBOL, function*(
    action: Symbols.SelectSymbol
  ) {
    yield put(Exchange.setSymbol(action.payload));
  });
}

function* mapExecuteExchange() {
  yield takeLatest(Exchange.ActionType.EXECUTE_EXCHANGE, function*(
    action: Exchange.ExecuteExchange
  ) {
    yield put(Accounts.startTransaction(action.payload));
  });
}

const mappings = [mapGetSymbol, mapSelectSymbol, mapExecuteExchange].map(fork);

export function* sagas() {
  yield all([
    fork(init),
    ...mappings,
    ...Accounts.sagas,
    ...Symbols.sagas,
    ...Exchange.sagas
  ]);
}
