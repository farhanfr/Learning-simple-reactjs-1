import React, { Component } from 'react';
import { MainRouter } from './routers';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { NavbarComponent } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent/>
        <MainRouter />
      </Router>
    );
  }
}

export default App;
