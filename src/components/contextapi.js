import React from "react";
const Context = React.createContext();

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        employeeName: "Mani",
        age: 30
      },
      dispatch: this.reducer
    };
  }

  reducer = action => {
    switch (action.type) {
      case "changestate":
        this.setState({
          employee: {
            employeeName: action.payload.name,
            age: action.payload.age
          }
        });
      default:
        return this.state;
    }
  };
  render() {
    return (
      <Context.Provider
        value={{ employee: this.state.employee, dispatch: this.state.dispatch }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
