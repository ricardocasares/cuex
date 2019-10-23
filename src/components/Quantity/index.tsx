import React, { FC } from "react";
import { Input } from "./styles";
import CurrencyFormat from "react-currency-format";

export type Quantity = {
  amount: number;
  focused: boolean;
  onFocus: (focus: boolean) => void;
  onChange: (amount: number) => void;
};

export const Quantity: FC<Quantity> = ({
  amount,
  focused,
  onChange,
  onFocus
}) => (
  <CurrencyFormat
    value={amount}
    type="tel"
    placeholder="0"
    decimalScale={2}
    allowNegative={false}
    thousandSeparator={true}
    onFocus={_ => onFocus(focused)}
    onValueChange={({ floatValue }) => onChange(floatValue || 0)}
    customInput={Input}
  />
);
