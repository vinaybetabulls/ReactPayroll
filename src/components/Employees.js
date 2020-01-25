import React, { Component } from "react";

export default class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeename: 'Mani'
    };
  }
  render() {
    return (
      <div>
        <h1>Employee name is {this.state.employeename}</h1>
      </div>
    );
  }
}
