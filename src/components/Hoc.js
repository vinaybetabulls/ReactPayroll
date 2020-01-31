import React, { Component } from "react";

const higheroderComponent = function higherOderComponent(Hig, value) {
  return class Hoc extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }
    increment = () => {
      this.setState((previousState) => ({
          count: previousState.count + value
      }))
    };

    render() {
      return (
        <div>
          <Hig count={this.state.count} increment={this.increment} />
        </div>
      );
    }
  };
};
export default higheroderComponent;
