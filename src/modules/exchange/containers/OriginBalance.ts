import { connect } from "react-redux";
import { CuexState } from "@/store/models";
import { Balance } from "@/components/Balance";

// @TODO
// Implement origin and target balance as part of exchange module state
// in order to allow full isolation of the exchange module

export const OriginBalance = connect(
  ({ accounts, exchange: { originAmount, originSymbol } }: CuexState) => ({
    amount: accounts[originSymbol] || 0,
    currency: originSymbol,
    overdraft: originAmount > (accounts[originSymbol] || 0)
  })
)(Balance);
