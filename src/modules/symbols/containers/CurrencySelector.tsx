import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CuexState } from "@/store/models";
import { CurrencySelector as Component } from "@/components/CurrencySelector";
import {
  showSymbols,
  queryChanged as onQuery,
  selectSymbol as onSelect
} from "../store/actions";
import { getMatchingSymbols } from "../store/selectors";

const onClose = () => showSymbols(false);

const mapStateToProps = (state: CuexState) => ({
  show: state.symbols.show,
  query: state.symbols.query,
  symbols: getMatchingSymbols(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onQuery, onClose, onSelect }, dispatch);

export const CurrencySelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
