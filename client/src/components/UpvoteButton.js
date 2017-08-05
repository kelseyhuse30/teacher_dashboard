import React, { Component } from 'react';

class UpvoteButton extends Component {

	render() {
		return (
			<div
				className='ui bottom attached blue basic button'
				onClick={() => this.props.upvote()}
			>Update
			</div>
		)
	}
}



export default UpvoteButton