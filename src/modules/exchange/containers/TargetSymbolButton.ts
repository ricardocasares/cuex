import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CuexState } from "@/store/models";
import { CurrencyButton } from "@/components/CurrencyButton";
import { getTargetSymbol as onClick } from "../store/actions";

const mapStateToProps = ({ exchange: { targetSymbol } }: CuexState) => ({
  symbol: targetSymbol
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onClick }, dispatch);

export const TargetSymbolButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyButton);
