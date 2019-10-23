import React from "react";
import { Toolbar } from "@/components/Toolbar";
import { Spacer } from "@/components/Spacer";
import { Footer } from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { CurrencyBlock } from "@/components/CurrencyBlock";
import { CurrencyToolbar } from "@/components/CurrencyToolbar";
import { Switch } from "@/modules/exchange/containers/Switch";
import { Conversion } from "@/modules/exchange/containers/Conversion";
import { OriginAmount } from "@/modules/exchange/containers/OriginAmount";
import { TargetAmount } from "@/modules/exchange/containers/TargetAmount";
import { OriginBalance } from "@/modules/exchange/containers/OriginBalance";
import { TargetBalance } from "@/modules/exchange/containers/TargetBalance";
import { CurrencySelector } from "@/modules/symbols/containers/CurrencySelector";
import { OriginSymbolButton } from "@/modules/exchange/containers/OriginSymbolButton";
import { TargetSymbolButton } from "@/modules/exchange/containers/TargetSymbolButton";
import { ExchangeButton } from "@/modules/exchange/containers/ExchangeButton";

export default () => (
  <Layout>
    <CurrencySelector />
    <CurrencyBlock>
      <CurrencyToolbar>
        <OriginSymbolButton />
        <OriginAmount />
      </CurrencyToolbar>
      <OriginBalance />
    </CurrencyBlock>
    <Toolbar>
      <Switch />
      <Conversion />
      <Spacer x={10} />
    </Toolbar>
    <CurrencyBlock style={{ background: "#f2f4f3" }}>
      <CurrencyToolbar>
        <TargetSymbolButton />
        <TargetAmount />
      </CurrencyToolbar>
      <TargetBalance />
    </CurrencyBlock>
    <Footer>
      <ExchangeButton>Exchange</ExchangeButton>
    </Footer>
  </Layout>
);
