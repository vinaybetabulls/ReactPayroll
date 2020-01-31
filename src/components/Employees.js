import React, { Component } from "react";
import {Consumer} from "./contextapi";

export default class Employees extends Component {
  constructor(props) {
    super(props);
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
      <Consumer>
        {props => {
          return (
            <div>
              <h1>
                Employee name is {props.employee.employeeName} and my age is {props.employee.age}
              </h1>
              <button onClick={()=>props.dispatch({type:'changestate',payload:{name:'vinay', age: 27}})}>chnagestate</button>
            </div> 
          );
        }}
      </Consumer>
    );
  }
}
