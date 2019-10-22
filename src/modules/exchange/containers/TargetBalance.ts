import { connect } from "react-redux";
import { CuexState } from "@/store/models";
import { Balance } from "@/components/Balance";

export const TargetBalance = connect(
  ({ accounts, exchange: { targetSymbol } }: CuexState) => ({
    amount: accounts[targetSymbol] || 0,
    currency: targetSymbol,
    overdraft: false
  })
)(Balance);
