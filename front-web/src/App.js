import React, { Component } from 'react';
import English from './English';
import Arabic from './Arabic';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
       <Router>
       <div>
       <Route exact path="/" component={English} />
          <Route  path="/Arabic" component={Arabic} />
          </div>
       </Router>
    );
  }
}

export default App;
