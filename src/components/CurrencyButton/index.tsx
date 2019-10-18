import { Button } from "./styles";
import { FC } from "react";

export type CurrencyButton = {
  symbol: string;
  onClick: () => void;
};

export const CurrencyButton: FC<CurrencyButton> = ({ symbol, onClick }) => (
  <Button onClick={onClick}>{symbol}</Button>
);
