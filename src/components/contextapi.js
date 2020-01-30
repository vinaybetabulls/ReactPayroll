import React, { Component } from "react";
import { act } from "react-dom/test-utils";
const Context = React.createContext();
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "changestate":
//       console.log(
//         "hii",
//         Object.assign(
//           {},
//           {
//             ...state,
//             employeename: action.payload.name
//           }
//         )
//       );
//       return Object.assign({}, state, {
//         employeename: action.payload.name
//       });

//     default:
//       return state;
//   }
// };
export class Provider extends Component {
  constructor(props){
    super(props)
    this.state ={
      employe: { employeename: "Mani", name: "", age: 16 },
      dispatch: action => {
        this.reducer(this.state.employe, action);
      }
    }
  }
  reducer = (employe, action) => {
    switch (action.type) {
      case 'changestate':
          let newObj =  Object.assign({},employe,{employeename:action.payload.name, age:30});
          return newObj
    
      default:
        break;
    }
  };
  render() {
    {
      console.log("context api data", this.state);
    }
    return (
      <Context.Provider
        value={{ employee: this.state.employe, dispatch: this.state.dispatch }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;

// import React from 'react';

// const Context = React.createContext();

// export const MyProvider = Context.Provider;
// export const MyConsumer = Context.Consumer;

// export default Context;
