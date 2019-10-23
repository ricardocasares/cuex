import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CuexState } from "@/store/models";
import { CurrencySelector as Component } from "@/components/CurrencySelector";
import {
  showSymbols,
  selectSymbol as onSelect,
  queryChanged as onQuery
} from "../store/actions";
import { filterSymbols } from "../store/selectors";

const onClose = () => showSymbols(false);

const mapStateToProps = (state: CuexState) => ({
  show: state.symbols.show,
  query: state.symbols.query,
  symbols: filterSymbols(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onQuery, onClose, onSelect }, dispatch);

export const CurrencySelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
