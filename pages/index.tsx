import React from "react";
import styled from "@emotion/styled";
import { Toolbar } from "@/components/Toolbar";
import { Switch } from "@/components/Switch";
import { Spacer } from "@/components/Spacer";
import { Footer } from "@/components/Footer";
import { Selector } from "@/modules/symbols/containers/Selector";
import { Conversion } from "@/modules/exchange/containers/Conversion";
import { OriginAmount } from "@/modules/exchange/containers/OriginAmount";
import { TargetAmount } from "@/modules/exchange/containers/TargetAmount";
import { OriginBalance } from "@/modules/exchange/containers/OriginBalance";
import { TargetBalance } from "@/modules/exchange/containers/TargetBalance";
import { OriginSymbolButton } from "@/modules/exchange/containers/OriginSymbolButton";
import { TargetSymbolButton } from "@/modules/exchange/containers/TargetSymbolButton";
import { ExchangeButton } from "@/modules/exchange/containers/ExchangeButton";

export const CurrencyBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const CurrencyToolbar = styled.div`
  display: flex;
`;

export const CurrencyExchanger = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default () => (
  <CurrencyExchanger>
    <Selector />
    <CurrencyBlock>
      <CurrencyToolbar>
        <OriginSymbolButton />
        <OriginAmount />
      </CurrencyToolbar>
      <OriginBalance></OriginBalance>
    </CurrencyBlock>
    <Toolbar>
      <Switch onClick={console.log} />
      <Conversion />
      <Spacer x={10} />
    </Toolbar>
    <CurrencyBlock style={{ background: "#f2f4f3" }}>
      <CurrencyToolbar>
        <TargetSymbolButton />
        <TargetAmount />
      </CurrencyToolbar>
      <TargetBalance></TargetBalance>
    </CurrencyBlock>
    <Footer>
      <ExchangeButton>Exchange</ExchangeButton>
    </Footer>
  </CurrencyExchanger>
);
