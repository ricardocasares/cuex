import { compose, StoreEnhancer } from "redux";

const isBrowser = () => typeof window !== "undefined";
export const withDevTools = (mw: StoreEnhancer<any>) => {
  if (isBrowser() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(mw);
  }

  return compose(mw);
};
