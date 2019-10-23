import React, { FC } from "react";
import { ArrowLeft } from "react-feather";
import {
  List,
  Item,
  Frame,
  Search,
  Toolbar,
  BackButton,
  CurrencyName,
  CurrencySymbol
} from "./styles";

export type CurrencySelector = {
  show: boolean;
  query: string;
  symbols: [[string, string]];
  onClose: () => void;
  onQuery: (query: string) => void;
  onSelect: (symbol: string) => void;
};

export const CurrencySelector: FC<CurrencySelector> = ({
  show,
  query,
  symbols,
  onClose,
  onQuery,
  onSelect
}) => (
  <Frame show={show}>
    <Toolbar>
      <BackButton onClick={onClose}>
        <ArrowLeft></ArrowLeft>
      </BackButton>
      <Search value={query} onChange={e => onQuery(e.target.value)} />
    </Toolbar>
    <List>
      {symbols.map(([symbol, name]) => (
        <Item key={symbol} onClick={() => onSelect(symbol)}>
          <CurrencySymbol>{symbol}</CurrencySymbol>
          <CurrencyName>{name}</CurrencyName>
        </Item>
      ))}
    </List>
  </Frame>
);
