import { connect } from "react-redux";
import { CuexState } from "@/store/models";
import { Balance } from "@/components/Balance";

export const OriginBalance = connect(
  // @TODO Exchange is not isolated
  ({ accounts, exchange: { originAmount, originSymbol } }: CuexState) => ({
    amount: accounts[originSymbol] || 0,
    currency: originSymbol,
    overdraft: originAmount > (accounts[originSymbol] || 0)
  })
)(Balance);
