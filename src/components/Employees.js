import React, { Component } from "react";
import {Consumer} from "./contextapi";
import higheroderComponent from "../components/Hoc";

class Employees extends Component {
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
        {value => {
          return (
            <div>
              <h1>
                Employee name is {value.employee.employeeName} and my age is {value.employee.age}
              </h1>
              <button onClick={()=>value.dispatch({type:'changestate',payload:{name:'vinay', age: 27}})}>chnagestate</button>
          <button onClick={this.props.increment}>increament by {this.props.count}</button>
            </div> 
          );
        }}
      </Consumer>
    );
  }
}
 export default higheroderComponent(Employees, 10)