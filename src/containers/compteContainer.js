import React from "react";
import { connect } from "react-redux";

const CompteContainer = ({ compte, add, remove, addten, removeten, reset }) => (
  <div>
    <p>{compte}</p>
    <button onClick={add}>+1</button>
    <button onClick={addten}>+10</button>
    <button onClick={remove}>-1</button>
    <button onClick={removeten}>-10</button>
    <button onClick={reset}>Reset</button>
  </div>
);

const mapStateToProps = state => ({
  compte: state
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: "ADD" }),
  remove: () => dispatch({ type: "REMOVE" }),
  addten: () => dispatch({ type: "ADD_TEN" }),
  removeten: () => dispatch({ type: "REMOVE_TEN" }),
  reset: () => dispatch({ type: "RESET" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompteContainer);
