import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CuexState } from "@/store/models";
import { Quantity } from "@/components/Quantity";
import { originAmountChanged } from "../store/actions";

export const OriginAmount = connect(
  ({ exchange: { originAmount } }: CuexState) => ({ amount: originAmount }),
  dispatch => bindActionCreators({ onChange: originAmountChanged }, dispatch)
)(Quantity);
