import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CuexState } from "@/store/models";
import { Quantity } from "@/components/Quantity";
import { changedTargetAmount, setDirection } from "../store/actions";

const mapStateToProps = ({ exchange: { targetAmount } }: CuexState) => ({
  focused: false,
  amount: targetAmount
});

const actions = { onFocus: setDirection, onChange: changedTargetAmount };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const TargetAmount = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quantity);
