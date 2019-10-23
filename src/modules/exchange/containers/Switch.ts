import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch as Component } from "@/components/Switch";
import { switchSymbols as onClick } from "../store/actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onClick }, dispatch);

export const Switch = connect(
  null,
  mapDispatchToProps
)(Component);
