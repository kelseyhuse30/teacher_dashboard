import React, { Component } from 'react';
import { completeItem } from '../actions/items';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

class DoneButton extends Component {

	handleDoneClick = (id) => {
		this.props.completeItem(id)
	}

	render() {
		return (
			<div
				className='ui bottom attached green basic button'
				onClick={(e) => this.handleDoneClick(this.props.id)}
			>
			 	{this.props.done ? <i className='checkmark icon' /> : "Done" }
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  	{
  		completeItem,
  	},
  	dispatch);
};

export default connect(null, mapDispatchToProps)(DoneButton)