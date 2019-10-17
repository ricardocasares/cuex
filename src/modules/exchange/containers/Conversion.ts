import { connect } from "react-redux";
import { CuexState } from "@/store/models";
import { Conversion as Component } from "@/components/Conversion";

const mapStateToProps = ({ exchange }: CuexState) => ({
  rate: exchange.rate,
  originSymbol: exchange.originSymbol,
  targetSymbol: exchange.targetSymbol
});

export const Conversion = connect(mapStateToProps)(Component);
