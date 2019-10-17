import { FC } from "react";
import { Icon, Button } from "./styles";

export type Conversion = {
  rate: number;
  origin: string;
  target: string;
};

export const Conversion: FC<Conversion> = ({ rate, origin, target }) => (
  <Button>
    <Icon /> {target}1 = {origin}
    {rate}
  </Button>
);
