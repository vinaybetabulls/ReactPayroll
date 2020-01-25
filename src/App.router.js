import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import App from "./App";
import Employee from "./components/Employees";
import HeaderComponent from "./components/Header.component";
import FooterComponent from "./components/Footer.component";

export default class AppRouting extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <Router>
          <Route exact path="/" component={App} />
          <Route path="/employee" component={Employee} />
        </Router>
        <FooterComponent />
      </div>
    );
  }
}
