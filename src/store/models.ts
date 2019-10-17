import { Store } from "redux";
import { State as Exchange } from "@/modules/exchange/store";

export type CuexState = {
  readonly exchange: Exchange;
};

export type CuexStore = Store<CuexState>;
export type CuexProps = { store: CuexStore };
