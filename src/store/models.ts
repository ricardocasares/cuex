import { Store } from "redux";
import { State as Symbols } from "@/modules/symbols/store";
import { State as Exchange } from "@/modules/exchange/store";

export type CuexState = {
  readonly symbols: Symbols;
  readonly exchange: Exchange;
};

export type CuexStore = Store<CuexState>;
export type CuexProps = { store: CuexStore };
