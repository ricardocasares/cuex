import React from "react";
import styled from "@emotion/styled";
import { Conversion } from "@/components/Conversion";
import { OriginBalance } from "@/modules/exchange/containers/OriginBalance";
import { Button } from "@/components/Button";
import { Balance } from "@/components/Balance";
import { Toolbar } from "@/components/Toolbar";
import { Switch } from "@/components/Switch";
import { Spacer } from "@/components/Spacer";
import { OriginAmount } from "@/modules/exchange/containers/OriginAmount";
import { TargetAmount } from "@/modules/exchange/containers/TargetAmount";

export const CurrencyButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 30px;
`;

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

export const CurrencySelector = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: red;
`;

export default () => (
  <CurrencyExchanger>
    <CurrencyBlock>
      <CurrencyToolbar>
        <CurrencyButton>PLN</CurrencyButton>
        <OriginAmount />
      </CurrencyToolbar>
      <OriginBalance currency="USD" amount={123.23}></OriginBalance>
    </CurrencyBlock>
    <Toolbar>
      <Switch onClick={console.log} />
      <Conversion rate={1} origin="USD" target="BTC" />
      <Spacer x={10} />
    </Toolbar>
    <CurrencyBlock style={{ background: "#f2f4f3" }}>
      <CurrencyToolbar>
        <CurrencyButton>BTC</CurrencyButton>
        <TargetAmount />
      </CurrencyToolbar>
      <Balance overdraft={false} currency="USD" amount={123.23}></Balance>
    </CurrencyBlock>
    <div
      style={{
        flexGrow: 1,
        display: "flex",
        padding: "20px",
        background: "#f2f4f3"
      }}
    >
      <Button style={{ alignSelf: "flex-end" }}>Exchange</Button>
    </div>
  </CurrencyExchanger>
);
