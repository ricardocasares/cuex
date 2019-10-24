import { all } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { makeState } from "@/helpers/utils";
import * as actions from "./actions";

import { sagas } from "./sagas";
import { reducer, initial } from "./reducer";
import { fetchCurrencies } from "../api";

function* integration() {
  yield all([...sagas]);
}

const getState = makeState(initial);

test("fetching symbols", () =>
  expectSaga(integration)
    .provide([[call.fn(fetchCurrencies), [["EUR", "Euro"]]]])
    .withReducer(reducer)
    .put(actions.setSymbols([["EUR", "Euro"]]))
    .dispatch(actions.fetchSymbols())
    .hasFinalState(getState({ symbols: [["EUR", "Euro"]] }))
    .silentRun());

test("fetching symbols error", () =>
  expectSaga(integration)
    .provide([[call.fn(fetchCurrencies), throwError(new Error("Nope"))]])
    .withReducer(reducer)
    .put(actions.fetchErrorSymbols(new Error("Nope")))
    .dispatch(actions.fetchSymbols())
    .hasFinalState(getState())
    .silentRun());

test("selecting symbols", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .put(actions.showSymbols(true))
    .put(actions.setQuery(""))
    .put(actions.showSymbols(false))
    .dispatch(actions.requestSymbols())
    .dispatch(actions.selectSymbol("USD"))
    .silentRun());

test("making a query", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .put(actions.setQuery("USD"))
    .dispatch(actions.queryChanged("USD"))
    .silentRun());
