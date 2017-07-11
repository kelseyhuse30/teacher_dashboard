import React, { Component } from 'react';
import './App.css';
import { ClassDashboard } from './components/ClassDashboard';
import { NavBar } from './components/NavBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
      <div className="App">
        <NavBar/>
        <div id="main" className="main ui">
          <h1 className="ui dividing centered header">Class Dashboard</h1> 
          <ClassDashboard />
        </div>
      </div>
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