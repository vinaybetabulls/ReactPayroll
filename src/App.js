import React, { Component } from 'react';
import Employee from './components/Employees'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={}
    console.log("constructor APP");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps App");
    return null;
  }
  componentDidMount() {
    console.log("component did  mount App")
  }
  render() {
    console.log("render APP");
    return (
      <div>
        <h1>App Component....</h1>
        <Link to='/employee'>Employee Details</Link>
      </div>
    )
  }
}
