import App from "next/app";
import React from "react";
import NextRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { Global } from "@emotion/core";
import { Provider } from "react-redux";
import { CuexProps } from "@/store/models";
import { configureStore } from "@/store";
import { reset } from "@/css/reset";

class CuexApp extends App<CuexProps> {
  componentDidMount() {
    const { store } = this.props;
    store.dispatch({ type: "CLIENT_READY" });
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Global styles={reset} />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const withStore = NextRedux(configureStore);

export default withStore(withReduxSaga(CuexApp));
