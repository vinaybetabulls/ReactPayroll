import React, { Component } from 'react';
import Employee from './components/Employees'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App Component....</h1>
        <Link to='/employee'>Employee Details</Link>
      </div>
    )
  }
}
