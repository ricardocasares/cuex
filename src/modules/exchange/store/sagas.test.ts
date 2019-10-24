import { all } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { call, select } from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { makeState } from "@/helpers/utils";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { sagas } from "./sagas";
import { reducer, initial } from "./reducer";
import { fetchEchangeRate } from "../api";

function* integration() {
  yield all([...sagas]);
}

const getState = makeState(initial);

test("starting interval and fetch a rate", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [call.fn(fetchEchangeRate), 2],
      [select(selectors.exchange), initial]
    ])
    .put(actions.fetchExchangeRate())
    .put(actions.setExchangeRate(2))
    .dispatch(actions.startRateInterval())
    .hasFinalState(getState({ rate: 2 }))
    .silentRun());

test("updating origin amount calculates target amount", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [select(selectors.rate), 2],
      [select(selectors.exchange), initial]
    ])
    .dispatch(actions.setExchangeRate(2))
    .dispatch(actions.setDirection(true))
    .dispatch(actions.changedOriginAmount(10))
    .put(actions.setTargetAmount(20))
    .hasFinalState(
      getState({ rate: 2, direction: true, originAmount: 10, targetAmount: 20 })
    )
    .silentRun());

test("updating target amount calculates origin amount", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [select(selectors.rate), 2],
      [select(selectors.exchange), { ...initial, direction: false }]
    ])
    .put(actions.setOriginAmount(10))
    .dispatch(actions.setExchangeRate(2))
    .dispatch(actions.setDirection(false))
    .dispatch(actions.changedTargetAmount(20))
    .hasFinalState(
      getState({
        rate: 2,
        direction: false,
        originAmount: 10,
        targetAmount: 20
      })
    )
    .silentRun());

test("updating origin symbol fetches new rate", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [call.fn(fetchEchangeRate), 2],
      [select(selectors.rate), 2],
      [select(selectors.exchange), initial]
    ])
    .put(actions.setExchangeRate(2))
    .put(actions.setOriginSymbol("PLN"))
    .dispatch(actions.getOriginSymbol())
    .dispatch(actions.setSymbol("PLN"))
    .hasFinalState(
      getState({
        rate: 2,
        originSymbol: "PLN"
      })
    )
    .silentRun());

test("updating target symbol fetches new rate", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [call.fn(fetchEchangeRate), 2],
      [select(selectors.rate), 2],
      [select(selectors.exchange), initial]
    ])
    .put(actions.setExchangeRate(2))
    .put(actions.setTargetSymbol("PLN"))
    .dispatch(actions.getTargetSymbol())
    .dispatch(actions.setSymbol("PLN"))
    .hasFinalState(
      getState({
        rate: 2,
        targetSymbol: "PLN"
      })
    )
    .silentRun());

test("switching symbols", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [call.fn(fetchEchangeRate), 1],
      [select(selectors.rate), 1],
      [select(selectors.exchange), initial]
    ])
    .put(actions.setOriginSymbol("EUR"))
    .put(actions.setTargetSymbol("USD"))
    .dispatch(actions.switchSymbols())
    .hasFinalState(
      getState({
        originSymbol: "EUR",
        targetSymbol: "USD"
      })
    )
    .silentRun());

test("switching symbols when same target symbol", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [call.fn(fetchEchangeRate), 1],
      [select(selectors.rate), 1],
      [select(selectors.exchange), initial]
    ])
    .put(actions.setTargetSymbol("USD"))
    .put(actions.setOriginSymbol("EUR"))
    .dispatch(actions.getOriginSymbol())
    .dispatch(actions.setSymbol("EUR"))
    .hasFinalState(
      getState({
        originSymbol: "EUR",
        targetSymbol: "USD"
      })
    )
    .silentRun());

test("switching symbols when same origin symbol", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [call.fn(fetchEchangeRate), 1],
      [select(selectors.rate), 1],
      [select(selectors.exchange), initial]
    ])
    .put(actions.setOriginSymbol("EUR"))
    .put(actions.setTargetSymbol("USD"))
    .dispatch(actions.getTargetSymbol())
    .dispatch(actions.setSymbol("USD"))
    .hasFinalState(
      getState({
        originSymbol: "EUR",
        targetSymbol: "USD"
      })
    )
    .silentRun());

test("executing exchange", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [call.fn(fetchEchangeRate), 1],
      [select(selectors.rate), 1],
      [select(selectors.exchange), initial]
    ])
    .put(actions.executeExchange(initial))
    .dispatch(actions.requestExecuteExchange())
    .hasFinalState(getState())
    .silentRun());

test("rate fetch error", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [call.fn(fetchEchangeRate), throwError(new Error("Nope"))],
      [select(selectors.rate), 1],
      [select(selectors.exchange), initial]
    ])
    .put(actions.fetchErrorExchangeRate(new Error("Nope")))
    .dispatch(actions.fetchExchangeRate())
    .hasFinalState(getState())
    .silentRun());
