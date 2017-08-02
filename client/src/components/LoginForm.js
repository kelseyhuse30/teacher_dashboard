import React, { Component } from 'react';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: ''
		}
	};

	handleChange(event) {
	  this.setState({
	    username: event.target.value
	  });
	};

	handleSubmit(event) {
	  event.preventDefault();
	  this.props.onSubmit(this.state.username);
	  this.setState({
      username: '',
    })
	};

	render() {
		return (
			<form
				onSubmit={(event) => this.handleSubmit(event)}
			>
				<div
					className="ui input"
				>
					<input
						name="username"
						type="text"
						placeholder="Please enter your username"
						className="login"
						value={this.state.username}
						onChange={(event) => this.handleChange(event)}
					/>
				</div>
				<button
					type="submit"
					className="ui basic blue button"
				>
					<i className="icon user"></i>
					Log In
				</button>
			</form>
		);
	}
}

export default LoginForm;