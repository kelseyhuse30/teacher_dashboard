import React, { Component } from 'react';
import './App.css';
import { ClassDashboard } from './components/ClassDashboard';
import { About } from './components/About';
import { Help } from './components/Help';
import { NavBar } from './components/NavBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as actions from './actions/items.js';

class App extends Component {

  componentDidMount() {
    if (this.props.items.length === 0) {
      console.log('in component did mount')
      this.props.actions.fetchItems()
    }
  }

  render() {


    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="main" className="main ui">
            <h1 className="ui dividing centered header">Class Dashboard</h1>
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

function mapStateToProps(state) {
  console.log('in map state to props')
  return {items: state.items}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);