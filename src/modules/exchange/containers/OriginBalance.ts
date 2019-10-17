import { connect } from "react-redux";
import { CuexState } from "@/store/models";
import { Balance } from "@/components/Balance";

export const OriginBalance = connect(
  ({ exchange: { originAmount } }: CuexState) => ({
    overdraft: originAmount > 123
  })
)(Balance);
