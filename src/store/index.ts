import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { sagas } from "./sagas";
import { reducer } from "./reducer";
import { CuexState } from "./models";
import { withDevTools } from "./enhancers";
import { initial as symbols } from "@/modules/symbols/store";
import { initial as accounts } from "@/modules/accounts/store";
import { initial as exchange } from "@/modules/exchange/store";

const initial: CuexState = {
  symbols,
  accounts,
  exchange
};

export const configureStore = (state = initial) => {
  const saga = createSagaMiddleware();
  const middleware = withDevTools(applyMiddleware(saga));
  const store = createStore(reducer, state, middleware);
  // @ts-ignore
  store.sagaTask = saga.run(sagas);

  return store;
};
