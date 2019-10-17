import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CuexState } from "@/store/models";
import { Quantity } from "@/components/Quantity";
import { targetAmountChanged } from "../store/actions";

export const TargetAmount = connect(
  ({ exchange: { targetAmount } }: CuexState) => ({ amount: targetAmount }),
  dispatch => bindActionCreators({ onChange: targetAmountChanged }, dispatch)
)(Quantity);
