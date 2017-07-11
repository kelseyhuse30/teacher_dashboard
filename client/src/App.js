import React, { Component } from 'react';
import './App.css';
import { TeacherDashboard } from './components/TeacherDashboard';
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
        <div id="main" className="main ui">
          <h1 className="ui dividing centered header">Teacher Dashboard</h1> 
          <TeacherDashboard />
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