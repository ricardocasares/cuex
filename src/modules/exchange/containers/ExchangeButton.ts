import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CuexState } from "@/store/models";
import { ExchangeButton as Component } from "@/components/ExchangeButton";
import { requestExecuteExchange as onClick } from "../store/actions";

const mapStateToProps = ({
  accounts,
  exchange: { originAmount, originSymbol }
}: CuexState) => ({
  disabled: originAmount <= 0 || originAmount > (accounts[originSymbol] || 0)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onClick }, dispatch);

export const ExchangeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
