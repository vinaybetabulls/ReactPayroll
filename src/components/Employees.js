import React, { Component } from "react";
import {Consumer} from "./contextapi";

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
  chnagestate(dispatch){
    
    dispatch({
     type:"changestate",payload:"ngchgf"
    })

  }
  render() {
    console.log("render Employees");

    return (
      <Consumer>
        {props => {
          return (
            <div>
              {console.log(props)}
              <h1>
                Employee name is {props.employee.employeename} and my age is {props.employee.age}
              </h1>
              <button onClick={props.dispatch({type:'changestate', payload:{name:'Teja'}})}>chnagestate</button>
            </div> 
          );
        }}
      </Consumer>
    );
  }
}
