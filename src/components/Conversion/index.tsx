import { FC } from "react";
import { Icon, Button } from "./styles";
import { format } from "@/helpers/numbers";

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
    <Icon /> {format(1, originSymbol, 5)} = {format(rate, targetSymbol)}
  </Button>
);
