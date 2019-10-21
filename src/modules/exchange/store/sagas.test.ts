import { all } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { call, select } from "redux-saga-test-plan/matchers";

import { State } from "./models";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { sagas } from "./sagas";
import { reducer, initial as exchange } from "./reducer";
import { getExchangeRate } from "../api";

function* integration() {
  yield all([...sagas]);
}

const getState = (overrides?: Partial<State>, state = exchange) => ({
  ...state,
  ...overrides
});

test("starting interval and fetch a rate", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [call.fn(getExchangeRate), 2],
      [select(selectors.exchange), exchange]
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
      [select(selectors.exchange), exchange]
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
      [select(selectors.exchange), exchange]
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
      [call.fn(getExchangeRate), 2],
      [select(selectors.rate), 2],
      [select(selectors.exchange), exchange]
    ])
    .put(actions.setExchangeRate(2))
    .put(actions.setOriginSymbol("BTC"))
    .dispatch(actions.getOriginSymbol())
    .dispatch(actions.setSymbol("BTC"))
    .hasFinalState(
      getState({
        rate: 2,
        originSymbol: "BTC"
      })
    )
    .silentRun());

test("updating target symbol fetches new rate", () =>
  expectSaga(integration)
    .withReducer(reducer)
    .provide([
      [call.fn(getExchangeRate), 2],
      [select(selectors.rate), 2],
      [select(selectors.exchange), exchange]
    ])
    .put(actions.setExchangeRate(2))
    .put(actions.setTargetSymbol("BTC"))
    .dispatch(actions.getTargetSymbol())
    .dispatch(actions.setSymbol("BTC"))
    .hasFinalState(
      getState({
        rate: 2,
        targetSymbol: "BTC"
      })
    )
    .silentRun());
