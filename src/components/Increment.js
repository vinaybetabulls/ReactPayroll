import React, { Component } from "react";
import higheroderComponent from "../components/Hoc";

class Increment extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>submit</button>
        <h1>{count}</h1>
      </div>
    );
  }
}
export default higheroderComponent(Increment, 5);
