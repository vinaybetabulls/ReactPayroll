// import React, { Component } from "react";
// const Context = React.createContext();

// export default  class Provider extends Component {
//   state = {
//     employeename: "Mani",
//     name: "",
//     age:16
//   };

//   render() {
//       console.log(this.props)
//     return (
//       <Context.Provider value={this.state.employeename}>
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }
// export const Consumer = Context.Consumer;

import React from 'react';

const Context = React.createContext();

export const MyProvider = Context.Provider;
export const MyConsumer = Context.Consumer;

export default Context;
