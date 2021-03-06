import React, { useRef, useEffect, FC } from "react";
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
  symbols: [string, string][];
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
}) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  });

  return (
    <Frame show={show}>
      <Toolbar>
        <BackButton onClick={onClose} data-testid="back-button">
          <ArrowLeft></ArrowLeft>
        </BackButton>
        <Search
          ref={ref}
          value={query}
          onChange={e => onQuery(e.target.value)}
          data-testid="search-input"
        />
      </Toolbar>
      <List>
        {symbols.map(([symbol, name]) => (
          <Item
            data-testid={symbol}
            key={symbol}
            onClick={() => onSelect(symbol)}
          >
            <CurrencySymbol>{symbol}</CurrencySymbol>
            <CurrencyName>{name}</CurrencyName>
          </Item>
        ))}
      </List>
    </Frame>
  );
};
