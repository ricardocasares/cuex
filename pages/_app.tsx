import React from "react";
import NextRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import App, { AppContext } from "next/app";
import { Global } from "@emotion/core";
import { Provider } from "react-redux";
import { CuexProps } from "@/store/models";
import { configureStore } from "@/store";
import { reset } from "@/css/reset";

class CuexApp extends App<CuexProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (ctx.req) {
      ctx.store.dispatch({ type: "SERVER_READY" });
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

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
