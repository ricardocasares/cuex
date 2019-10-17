import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CuexState } from "@/store/models";
import { Quantity } from "@/components/Quantity";
import { changedOriginAmount, setDirection } from "../store/actions";

const mapStateToProps = ({ exchange: { originAmount } }: CuexState) => ({
  focused: true,
  amount: originAmount
});

const actions = { onFocus: setDirection, onChange: changedOriginAmount };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const OriginAmount = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quantity);
