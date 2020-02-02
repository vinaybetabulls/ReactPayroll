import React, { Component } from "react";
// import {Consumer} from "./contextapi";
// import higheroderComponent from "../components/Hoc";

import { connect } from "react-redux";
import { CHANGE_STATE } from "../constants";

class Employees extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log("constructor Employees");
  // }
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
      // <Consumer>
      //   {value => {
      //     return (
      //       <div>
      //         <h1>
      //           Employee name is {value.employee.employeeName} and my age is {value.employee.age}
      //         </h1>
      //         <button onClick={()=>value.dispatch({type:'changestate',payload:{name:'vinay', age: 27}})}>chnagestate</button>
      //     <p>Employee name from redux {this.props}</p>
      //     {/* <button onClick={this.props.increment}>increament by {this.props.count}</button> */}
      //       </div>
      //     );
      //   }}
      // </Consumer>
      <React.Fragment>
        <p>
          Employee name from redux <h1>{this.props.employee.employeeName}</h1>
        </p>
        <p>
          Employee age from redux <h1>{this.props.employee.age}</h1>
        </p>
        <p><button onClick={this.props.changeEmployee}>Change Emp State</button></p>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { employee: state.employee };
};

const mapDispatchToProps = dispatch => {
  return {
    changeEmployee: () => dispatch({type: CHANGE_STATE, payload: {employeeName: 'Vinay', age: 27}})
  }
}
 const Employee = connect(mapStateToProps, mapDispatchToProps)(Employees); // step 5
export default Employee;
