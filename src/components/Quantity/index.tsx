import React, { FC } from "react";
import { Input } from "./styles";

export type Quantity = {
  amount: number;
  onChange: (amount: number) => void;
};

export const Quantity: FC<Quantity> = ({ amount, onChange }) => (
  <Input
    type="number"
    placeholder="0"
    min={0}
    value={amount}
    onChange={e => onChange(parseFloat(e.target.value))}
  />
);
