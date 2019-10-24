import { all } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { makeState } from "@/helpers/utils";
import * as actions from "./actions";

import { sagas } from "./sagas";
import { reducer, initial } from "./reducer";

function* integration() {
  yield all([...sagas]);
}

const getState = makeState(initial);

test("transaction to account with balance", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .put(
      actions.applyTransaction({
        originAmount: 1,
        targetAmount: 2,
        originSymbol: "EUR",
        targetSymbol: "USD"
      })
    )
    .put(actions.transactionOk())
    .dispatch(
      actions.startTransaction({
        originAmount: 1,
        targetAmount: 2,
        originSymbol: "EUR",
        targetSymbol: "USD"
      })
    )
    .hasFinalState(getState({ USD: 1002, EUR: 999 }))
    .silentRun());

test("transaction to account without balance", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .put(
      actions.applyTransaction({
        originAmount: 1,
        targetAmount: 2,
        originSymbol: "USD",
        targetSymbol: "PLN"
      })
    )
    .put(actions.transactionOk())
    .dispatch(
      actions.startTransaction({
        originAmount: 1,
        targetAmount: 2,
        originSymbol: "USD",
        targetSymbol: "PLN"
      })
    )
    .hasFinalState(getState({ USD: 999, PLN: 2 }))
    .silentRun());

test("transaction from account without balance", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .put(
      actions.applyTransaction({
        originAmount: 1,
        targetAmount: 2,
        originSymbol: "PLN",
        targetSymbol: "USD"
      })
    )
    .put(actions.transactionOk())
    .dispatch(
      actions.startTransaction({
        originAmount: 1,
        targetAmount: 2,
        originSymbol: "PLN",
        targetSymbol: "USD"
      })
    )
    .hasFinalState(getState({ USD: 1002, PLN: -1 }))
    .silentRun());
