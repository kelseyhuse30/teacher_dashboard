import React, { Component } from 'react';
import './App.css';
import { ClassDashboard } from './components/ClassDashboard';
import { About } from './components/About';
import { Help } from './components/Help';
import { NavBar } from './components/NavBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <h1 className="ui dividing centered header">Class Dashboard</h1>
          <div id="main" className="main ui">
            <Switch>
              <Route exact path="/" component={ClassDashboard}/>
              <Route path="/about" component={About}/>
              <Route path="/help" component={Help}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}