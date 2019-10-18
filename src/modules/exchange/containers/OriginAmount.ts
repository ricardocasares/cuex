import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CuexState } from "@/store/models";
import { Quantity } from "@/components/Quantity";
import {
  changedOriginAmount as onChange,
  setDirection as onFocus
} from "../store/actions";

const mapStateToProps = ({
  exchange: { originAmount: amount }
}: CuexState) => ({
  focused: true,
  amount
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onFocus, onChange }, dispatch);

export const OriginAmount = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quantity);
