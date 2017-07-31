import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { ClassDashboard } from './components/ClassDashboard';
import { Questions } from './components/Questions';
import { Instructions } from './components/Instructions';
import LoginPage from './containers/LoginPage';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.checkLogin = this.checkLogin.bind(this)
  }

  componentWillMount() {
    //check 
  }

  checkLogin() {
    return this.props.username ? true : false;
  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props => (
          (this.checkLogin()) ? (
            <Component
              {...props} />
          ) : (
            <Redirect to={{
              pathname: '/login'
            }}/>
          )
        )}
      />
    )

    return (
      <Router>
        <div className="App">
          <NavBar/>
          <h1 className="ui dividing centered header">Class Dashboard</h1>
          <div id="main" className="main ui">
            <Switch>
              <PrivateRoute
                exact path="/"
                component={ClassDashboard}
              />
              <Route
                path="/login"
                component={LoginPage}
              />
              <Route
                path="/questions"
                component={Questions}
              />
              <Route
                path="/instructions"
                component={Instructions}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.loginForm.currUser
  }
}

export default connect(mapStateToProps)(App);
