import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CuexState } from "@/store/models";
import { CurrencyButton } from "@/components/CurrencyButton";
import { getOriginSymbol as onClick } from "../store/actions";

const mapStateToProps = ({ exchange: { originSymbol } }: CuexState) => ({
  symbol: originSymbol
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onClick }, dispatch);

export const OriginSymbolButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyButton);
