import { FC } from "react";
import { Icon, Button } from "./styles";

export type Switch = {
  onClick: () => void;
};

export const Switch: FC<Switch> = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon />
  </Button>
);
