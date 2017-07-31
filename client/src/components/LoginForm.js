import React from 'react';

let LoginForm = props => {
	const { handleSubmit } = props;
	return (
		<form
			onSubmit={handleSubmit}
		>
			<div
				className="ui input"
			>
				<input
					name="username"
					type="text"
					placeholder="Please enter your username"
					className="login"
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

export default LoginForm;