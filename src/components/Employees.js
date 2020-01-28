import React, { Component } from "react";
import { MyConsumer } from "./contextapi";

export default class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeename: "Mani",
      name: ""
    };
    console.log("constructor Employees");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Employees");
    return null;
  }
  componentDidMount() {
    console.log("component did  mount Employees");
  }
  render() {
    console.log("render Employees");

    return (
      <MyConsumer>
        {props => {
          return (
            <div>
              <h1>
                Employee name is {props.name} and my age is {props.age}
              </h1>
            </div>
          );
        }}
      </MyConsumer>
    );
  }
}
