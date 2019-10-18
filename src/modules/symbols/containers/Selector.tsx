import styled from "@emotion/styled";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { is } from "@/css/helpers";
import { CuexState } from "@/store/models";
import { selectSymbol as onClick } from "../store/actions";

// TODO: move to components
export type CurrencySelector = {
  show: boolean;
};

export const CurrencySelector = styled.div<CurrencySelector>`
  display: ${is("show", "flex", "none")};
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ccc;
  z-index: 100;

  button {
    flex-grow: 1;
  }
`;

const Component = ({ show, onClick }) => (
  <CurrencySelector show={show}>
    <button onClick={() => onClick("EUR")}>EUR</button>
    <button onClick={() => onClick("USD")}>USD</button>
    <button onClick={() => onClick("GBP")}>GBP</button>
  </CurrencySelector>
);

const mapStateToProps = ({ symbols }: CuexState) => ({
  show: symbols.show
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onClick }, dispatch);

export const Selector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
