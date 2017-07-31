import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { setCurrUser } from '../actions/loginForm';
import { Redirect } from 'react-router-dom';

class LoginPage extends Component {
  submit = (values) => {
    const { username } = values
    this.props.setCurrUser(username);
  }
  
  render() {
    if (this.props.redirectToRoot) {
      return (
        <Redirect to="/"/>
      );
    }

    return (
    	<div>
    		<h3>Welcome to Class! Please login</h3>
      	<LoginForm
      		onSubmit={this.submit}
      	/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    redirectToRoot: state.loginForm.redirectToRoot
  }
}

export default connect(mapStateToProps, { setCurrUser })(LoginPage);