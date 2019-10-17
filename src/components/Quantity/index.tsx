import React, { FC } from "react";
import { Input } from "./styles";

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
  <Input
    type="number"
    placeholder="0"
    min={0}
    value={amount}
    onFocus={_ => onFocus(focused)}
    onChange={e => onChange(parseFloat(e.target.value))}
  />
);
