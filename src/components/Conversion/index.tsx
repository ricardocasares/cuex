import { FC } from "react";
import { Icon, Button } from "./styles";

export type Conversion = {
  rate: number;
  originSymbol: string;
  targetSymbol: string;
};

export const Conversion: FC<Conversion> = ({
  rate,
  originSymbol,
  targetSymbol
}) => (
  <Button>
    <Icon /> {originSymbol}1 = {targetSymbol}
    {rate}
  </Button>
);
