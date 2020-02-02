import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import App from "./App";
import Employee from "./components/Employees";
import HeaderComponent from "./components/Header.component";
import FooterComponent from "./components/Footer.component";
import Increment from "./components/Increment";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";

import store from "./redux/index";

// import { Provider } from "./components/contextapi";

export default class AppRouting extends Component {
  render() {
   
    return (
      <React.Fragment>
        <Provider store={store}> {/* step 4 */}
          <HeaderComponent />
          <Router>
            <Route exact path="/" component={App} />
            <Route path="/employee" component={Employee} />
            <Route path="/increment" component={Increment} />
          </Router>
          <FooterComponent />
        </Provider>
      </React.Fragment>
    );
  }
}
