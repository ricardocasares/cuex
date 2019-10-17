import { FC } from "react";
import { Paragraph } from "./styles";

export type Balance = {
  amount: number;
  currency: string;
  overdraft: boolean;
};

export const Balance: FC<Balance> = ({ currency, amount, overdraft }) => (
  <Paragraph overdraft={overdraft}>
    Balance: {currency}
    {amount}
  </Paragraph>
);
