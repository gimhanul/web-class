import React, { Component } from "react";

export default class R025_ForceUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react"
    };
  }

  StateChange = () => {
    this.state.StateString = "리액틍";
    this.forceUpdate();
  };

  render() {
    return (
      <div style={{ padding: "0px" }}>
        <button onClick={(e) => this.StateChange(e)}>state 직접 변경</button>
        <br />
        [state 변경하기] StateString: {this.state.StateString}
      </div>
    );
  }
}
