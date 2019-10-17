import { State } from "./models";

export const targetAmount = ({ rate, originAmount }: State) =>
  rate * originAmount;
